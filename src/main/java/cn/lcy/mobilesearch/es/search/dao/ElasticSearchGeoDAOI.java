package cn.lcy.mobilesearch.es.search.dao;

import java.util.concurrent.ExecutionException;

import org.elasticsearch.action.search.SearchResponse;

public interface ElasticSearchGeoDAOI {

	public SearchResponse getNeighbors(String index, String type, double lat, double lon, double distance) throws ExecutionException, InterruptedException;
	
}
