package cn.lcy.mobilesearch.es.util;

import cn.lcy.mobilesearch.es.dao.ElasticSearchBaseDAO;
import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.geo.GeoDistance;
import org.elasticsearch.common.unit.DistanceUnit;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.sort.GeoDistanceSortBuilder;
import org.elasticsearch.search.sort.SortBuilders;
import org.elasticsearch.search.sort.SortOrder;

import java.math.BigDecimal;
import java.util.Map;
import java.util.concurrent.ExecutionException;

public class GeoTestUtil {

    public static void main(String[] args) throws Exception {
        Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);
        String index = "restaurant";
        String type = "restaurant";
        double lat = 39.971;
        double lon = 116.321;
        testGetNearbyCities(client, index, type, lat, lon);
        client.close();
    }

    // 获取附近的城市
    public static void testGetNearbyCities(Client client, String index, String type, double lat, double lon) throws ExecutionException, InterruptedException {
        SearchRequestBuilder srb = client.prepareSearch(index).setTypes(type);
        // srb.setPos
        // wx4g0th9p0gk 为北京的geohash 范围为lt(小于) 1500km内的数据

        QueryBuilder builder = QueryBuilders.geoDistanceRangeQuery("geo_location")
                .point(lat, lon)//注意纬度在前，经度在后
                .from("0km")
                .to("1km")
                .includeLower(true)
                .includeUpper(false)
                .optimizeBbox("memory")
                .geoDistance(GeoDistance.ARC);

        srb.setQuery(builder);
//             // 获取距离多少公里 这个才是获取点与点之间的距离的  
        GeoDistanceSortBuilder sort = SortBuilders.geoDistanceSort("geo_location");
        // GeoDistanceSortBuilder sort = new GeoDistanceSortBuilder("geo_location");
        sort.unit(DistanceUnit.KILOMETERS);//距离单位公里
        sort.order(SortOrder.ASC);
        sort.point(lat, lon);//注意纬度在前，经度在后

        srb.addSort(sort);
        SearchResponse searchResponse = srb.execute().actionGet();
        SearchHits hits = searchResponse.getHits();
        SearchHit[] searchHists = hits.getHits();
        System.out.println("北京附近的城市(" + hits.getTotalHits() + "个)：");
        for (SearchHit hit : searchHists) {
            String title = (String) hit.getSource().get("title");
            // 获取距离值，并保留两位小数点
            BigDecimal geoDis = new BigDecimal((Double) hit.getSortValues()[0]);
            Map<String, Object> hitMap = hit.getSource();
            // 在创建MAPPING的时候，属性名的不可为geoDistance。
            hitMap.put("geoDistance", geoDis.setScale(2, BigDecimal.ROUND_HALF_DOWN));
            System.out.println(title + "距离北京" + hit.getSource().get("geoDistance") + DistanceUnit.KILOMETERS.toString() + "---" + title);
        }
    }
}
