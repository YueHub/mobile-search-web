package cn.lcy.mobilesearch.es.search.service;

import java.util.concurrent.ExecutionException;

import org.elasticsearch.action.search.SearchResponse;

public interface ElasticSearchGeoServiceI {
	
	public SearchResponse getNeighbors(String index, String type, double lat, double lon, double distance) throws ExecutionException, InterruptedException;
	
}
