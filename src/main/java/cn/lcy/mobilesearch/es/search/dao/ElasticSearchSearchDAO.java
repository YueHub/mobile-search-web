package cn.lcy.mobilesearch.es.search.dao;

import cn.lcy.mobilesearch.es.dao.ElasticSearchBaseDAO;
import cn.lcy.mobilesearch.es.util.ClientUtil;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.geo.GeoDistance;
import org.elasticsearch.common.text.Text;
import org.elasticsearch.common.unit.DistanceUnit;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.sort.GeoDistanceSortBuilder;
import org.elasticsearch.search.sort.SortBuilders;
import org.elasticsearch.search.sort.SortOrder;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ElasticSearchSearchDAO implements ElasticSearchSearchDAOI {

    @Override
    public List<Map<String, Object>> searchSource(String indexName, List<String> searchTerms) {
        Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);

        String searchString = "";

        for (String searchTerm : searchTerms) {
            searchString += searchTerm + " ";
        }

        // .setMinScore(minScore)
        SearchResponse searchResponse = client.prepareSearch(indexName)
                .setQuery(QueryBuilders.matchQuery("title", searchString))
                .setSearchType(SearchType.QUERY_THEN_FETCH)
                .setExplain(true)
                .setSize(100)
                .addHighlightedField("title")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                .addHighlightedField("description")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                .execute().actionGet();

        List<Map<String, Object>> results = new ArrayList<Map<String, Object>>();
        SearchHits hits = searchResponse.getHits();
        for (SearchHit hit : hits) {
            // 高亮
            Map<String, Object> hitMap = hit.getSource();
            // 高亮
            Text[] titleTexts = hit.highlightFields().get("title").fragments();
            String titleHighLight = "";
            for (Text text : titleTexts) {
                titleHighLight += text;
            }
            hitMap.put("highLightTitle", titleHighLight);
            if (hit.getHighlightFields().get("description") != null) {
                hitMap.put("highLightDes", hit.highlightFields().get("description").fragments());
            }
            results.add(hitMap);
        }
        client.close();
        return results;
    }

    @Override
    public List<Map<String, Object>> searchSource(String indexName, List<String> searchTerms, double lat, double lon) {
        Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);

        String searchString = "";

        for (String searchTerm : searchTerms) {
            searchString += searchTerm + " ";
        }

        GeoDistanceSortBuilder sort = SortBuilders.geoDistanceSort("geo_location");
        // GeoDistanceSortBuilder sort = new GeoDistanceSortBuilder("geo_location");
        sort.unit(DistanceUnit.KILOMETERS);//距离单位公里
        sort.order(SortOrder.ASC);
        sort.point(lat, lon);//注意纬度在前，经度在后

        SearchResponse searchResponse = client.prepareSearch(indexName)
                .setQuery(QueryBuilders.matchQuery("title", searchString))
                .setSearchType(SearchType.QUERY_THEN_FETCH)
                .setExplain(true)
                .addHighlightedField("title")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                .addHighlightedField("description")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                //.addSort(sort)
                .execute().actionGet();

        List<Map<String, Object>> results = new ArrayList<Map<String, Object>>();
        SearchHits hits = searchResponse.getHits();
        for (SearchHit hit : hits) {
            //results.add(hit.getHighlightFields().get("title").toString());	// 高亮
            // 获取距离值，并保留两位小数点
            // BigDecimal geoDis = new BigDecimal((Double) hit.getSortValues()[0]);
            Object latObj = hit.getSource().get("latitude");
            Object lonObj = hit.getSource().get("longitude");
            String poiCoordLat = null;
            String poiCoordLon = null;

            double geoDis = 0;
            if (latObj == null || lonObj == null) {
                Object poiCoord = hit.getSource().get("poi_coord");
                String poiCoordStr = poiCoord == null ? null : poiCoord.toString();
                poiCoordLat = poiCoordStr == null ? null : poiCoordStr.split(",")[0];
                poiCoordLon = poiCoordStr == null ? null : poiCoordStr.split(",")[1];
            }
            if (latObj != null && lonObj != null) {
                geoDis = GeoDistance.PLANE.calculate(lat, lon, Double.parseDouble((String) latObj), Double.parseDouble((String) lonObj), DistanceUnit.KILOMETERS);
            } else if (poiCoordLat != null && poiCoordLon != null) {
                geoDis = GeoDistance.PLANE.calculate(lat, lon, Double.parseDouble(poiCoordLat), Double.parseDouble(poiCoordLon), DistanceUnit.KILOMETERS);
            } else {
                geoDis = -100;    // 数据没有经纬度
            }
            BigDecimal geoDisFormat = new BigDecimal(geoDis);

            Map<String, Object> hitMap = hit.getSource();
            // 高亮
            Text[] titleTexts = hit.highlightFields().get("title").fragments();
            String titleHighLight = "";
            for (Text text : titleTexts) {
                titleHighLight += text;
            }
            hitMap.put("highLightTitle", titleHighLight);
            if (hit.getHighlightFields().get("description") != null) {
                Text[] desTexts = hit.highlightFields().get("description").fragments();
                String desHighLight = "";
                for (Text text : desTexts) {
                    desHighLight += text;
                }
                hitMap.put("highLightDes", desHighLight);
            }
            // 在创建MAPPING的时候，属性名的不可为geoDistance。  
            if (latObj != null && lonObj != null) {
                hitMap.put("geo_distance", geoDisFormat.setScale(2, BigDecimal.ROUND_HALF_DOWN));
            }
            if (geoDis <= 176 && geoDis >= 0) {    // 以北京的南北长为标准
                results.add(hitMap);
            }
        }
        client.close();
        return results;
    }

    // 单字段、对应index查询
    public String search(String indexName, String typeName, List<String> searchTerms) {

        Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);

        String searchString = "";

        for (String searchTerm : searchTerms) {
            searchString += searchTerm + " ";
        }
        SearchResponse searchResponse = client.prepareSearch(indexName)
                .setTypes(typeName)
                .setQuery(QueryBuilders.matchQuery("title", searchString))
                .setSearchType(SearchType.QUERY_THEN_FETCH)
                .setExplain(true)
                .addHighlightedField("title")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                .execute().actionGet();
        client.close();
        return searchResponse.toString();
    }

    @Override
    public List<Map<String, Object>> searchSource(String indexName, String typeName, List<String> searchTerms) {
        Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);

        String searchString = "";

        for (String searchTerm : searchTerms) {
            searchString += searchTerm + " ";
        }

        SearchResponse searchResponse = client.prepareSearch(indexName)
                .setTypes(typeName)
                .setQuery(QueryBuilders.matchQuery("title", searchString))
                .setSearchType(SearchType.QUERY_THEN_FETCH)
                .setExplain(true)
                .addHighlightedField("title")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                .addHighlightedField("description")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                .execute().actionGet();

        List<Map<String, Object>> results = new ArrayList<Map<String, Object>>();
        SearchHits hits = searchResponse.getHits();
        for (SearchHit hit : hits) {
            // 高亮
            Map<String, Object> hitMap = hit.getSource();
            // 高亮
            Text[] titleTexts = hit.highlightFields().get("title").fragments();
            String titleHighLight = "";
            for (Text text : titleTexts) {
                titleHighLight += text;
            }
            hitMap.put("highLightTitle", titleHighLight);
            if (hit.getHighlightFields().get("description") != null) {
                hitMap.put("highLightDes", hit.highlightFields().get("description").fragments().toString());
            }
            results.add(hitMap);
        }
        client.close();
        return results;
    }

    @Override
    public List<Map<String, Object>> searchSource(String indexName, String typeName, List<String> searchTerms, double lat, double lon) {
        Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);

        String searchString = "";

        for (String searchTerm : searchTerms) {
            searchString += searchTerm + " ";
        }

        GeoDistanceSortBuilder sort = SortBuilders.geoDistanceSort("geo_location");
        // GeoDistanceSortBuilder sort = new GeoDistanceSortBuilder("geo_location");
        sort.unit(DistanceUnit.KILOMETERS);//距离单位公里
        sort.order(SortOrder.ASC);
        sort.point(lat, lon);//注意纬度在前，经度在后

        SearchResponse searchResponse = client.prepareSearch(indexName)
                .setTypes(typeName)
                .setQuery(QueryBuilders.matchQuery("title", searchString))
                .setSearchType(SearchType.QUERY_THEN_FETCH)
                .setExplain(true)
                .addHighlightedField("title")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                .addHighlightedField("description")
                .setHighlighterPreTags("<font color='red'>")
                .setHighlighterPostTags("</font>")
                //.addSort(sort)
                .execute().actionGet();

        List<Map<String, Object>> results = new ArrayList<Map<String, Object>>();
        SearchHits hits = searchResponse.getHits();
        for (SearchHit hit : hits) {
            //results.add(hit.getHighlightFields().get("title").toString());	// 高亮
            // 获取距离值，并保留两位小数点
            // BigDecimal geoDis = new BigDecimal((Double) hit.getSortValues()[0]);
            Object latObj = hit.getSource().get("latitude");
            Object lonObj = hit.getSource().get("longitude");
            String poiCoordLat = null;
            String poiCoordLon = null;

            double geoDis = 0;
            if (latObj == null || lonObj == null) {
                Object poiCoord = hit.getSource().get("poi_coord");
                String poiCoordStr = poiCoord == null ? null : poiCoord.toString();
                poiCoordLat = poiCoordStr == null ? null : poiCoordStr.split(",")[0];
                poiCoordLon = poiCoordStr == null ? null : poiCoordStr.split(",")[1];
            }
            if (latObj != null && lonObj != null) {
                geoDis = GeoDistance.PLANE.calculate(lat, lon, Double.parseDouble((String) latObj), Double.parseDouble((String) lonObj), DistanceUnit.KILOMETERS);
            } else if (poiCoordLat != null && poiCoordLon != null) {
                geoDis = GeoDistance.PLANE.calculate(lat, lon, Double.parseDouble(poiCoordLat), Double.parseDouble(poiCoordLon), DistanceUnit.KILOMETERS);
            } else {
                geoDis = -100;    // 数据没有经纬度
            }
            BigDecimal geoDisFormat = new BigDecimal(geoDis);

            Map<String, Object> hitMap = hit.getSource();
            // 高亮
            Text[] titleTexts = hit.highlightFields().get("title").fragments();
            String titleHighLight = "";
            for (Text text : titleTexts) {
                titleHighLight += text;
            }
            hitMap.put("highLightTitle", titleHighLight);
            if (hit.getHighlightFields().get("description") != null) {
                Text[] desTexts = hit.highlightFields().get("description").fragments();
                String desHighLight = "";
                for (Text text : desTexts) {
                    desHighLight += text;
                }
                hitMap.put("highLightDes", desHighLight);
            }
            // 在创建MAPPING的时候，属性名的不可为geoDistance。  
            if (latObj != null && lonObj != null) {
                hitMap.put("geo_distance", geoDisFormat.setScale(2, BigDecimal.ROUND_HALF_DOWN));
            }
            if ((geoDis <= 176 && geoDis >= 0) || geoDis == -100) {    // 以北京的南北长为标准
                results.add(hitMap);
            }
        }
        client.close();
        return results;
    }

}
