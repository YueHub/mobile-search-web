package cn.lcy.mobilesearch.es.search.dao;

import cn.lcy.mobilesearch.es.dao.ElasticSearchBaseDAO;
import cn.lcy.mobilesearch.es.util.ClientUtil;
import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.geo.GeoDistance;
import org.elasticsearch.common.unit.DistanceUnit;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.sort.GeoDistanceSortBuilder;
import org.elasticsearch.search.sort.SortBuilders;
import org.elasticsearch.search.sort.SortOrder;

import java.util.concurrent.ExecutionException;

public class ElasticSearchGeoDAO implements ElasticSearchGeoDAOI {

    // 获取附近的城市
    public SearchResponse getNeighbors(String index, String type, double lat, double lon, double distance) throws ExecutionException, InterruptedException {
        Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);
        SearchRequestBuilder srb = client.prepareSearch(index).setTypes(type);
        QueryBuilder builder = QueryBuilders.geoDistanceRangeQuery("geo_location")
                .point(lat, lon)//注意纬度在前，经度在后
                .from("0km")
                .to(distance)
                .includeLower(true)
                .includeUpper(false)
                .optimizeBbox("memory")
                .geoDistance(GeoDistance.ARC);
        srb.setQuery(builder);

        GeoDistanceSortBuilder sort = SortBuilders.geoDistanceSort("geo_location");
        // GeoDistanceSortBuilder sort = new GeoDistanceSortBuilder("geo_location");
        sort.unit(DistanceUnit.KILOMETERS);//距离单位公里
        sort.order(SortOrder.ASC);
        sort.point(lat, lon);//注意纬度在前，经度在后

        srb.addSort(sort);
        SearchResponse searchResponse = srb.execute().actionGet();
        return searchResponse;
    }

}
