package cn.lcy.mobilesearch.es.search.service;

import org.elasticsearch.action.search.SearchResponse;

import java.util.concurrent.ExecutionException;

public interface ElasticSearchGeoServiceI {

    public SearchResponse getNeighbors(String index, String type, double lat, double lon, double distance) throws ExecutionException, InterruptedException;

}
