package cn.lcy.mobilesearch.es.search.service;

import java.util.List;
import java.util.Map;

public interface ElasticSearchServiceI {
	
	public List<Map<String, Object>> searchSource(String indexName, List<String> searchTerms);
	
	public List<Map<String, Object>> searchSource(String indexName, List<String> searchTerms, double lat, double lon);
	
	public String search(String indexName, String typeName, List<String> searchTerms);
	
	public List<Map<String, Object>> searchSource(String indexName, String typeName, List<String> searchTerms);

	public List<Map<String, Object>> searchSource(String indexName, String typeName, List<String> searchTerms, double lat, double lon);
}
