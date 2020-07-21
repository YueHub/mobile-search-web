package cn.lcy.mobilesearch.es.search.service;

import org.elasticsearch.action.search.SearchResponse;

import java.util.concurrent.ExecutionException;

public class ElasticSearchGeoService implements ElasticSearchGeoServiceI {

    public SearchResponse getNeighbors(String index, String type, double lat, double lon, double distance) throws ExecutionException, InterruptedException {

//		SearchResponse searchResponse = new ElasticSearchGeoDAO().getNeighbors(index, type, lat, lon, distance);
//		
//		SearchHits hits = searchResponse.getHits();
//        SearchHit[] searchHists = hits.getHits();  
//        System.out.println("北京附近的城市(" + hits.getTotalHits() + "个)：");  
//        for (SearchHit hit : searchHists) {  
//            String title = (String) hit.getSource().get("title");  
//            // 获取距离值，并保留两位小数点  
//            BigDecimal geoDis = new BigDecimal((Double) hit.getSortValues()[0]);  
//            Map<String, Object> hitMap = hit.getSource();  
//            // 在创建MAPPING的时候，属性名的不可为geoDistance。  
//            hitMap.put("geoDistance", geoDis.setScale(2, BigDecimal.ROUND_HALF_DOWN));  
//            System.out.println(title + "距离北京" + hit.getSource().get("geoDistance") + DistanceUnit.KILOMETERS.toString() + "---" + title);  
//        }
        return null;
    }

}
