package cn.lcy.mobilesearch.es.search.service;

import java.util.List;
import java.util.Map;

import cn.lcy.mobilesearch.es.search.dao.ElasticSearchSearchDAO;

public class ElasticSearchService implements ElasticSearchServiceI {

	public List<Map<String, Object>> searchSource(String indexName, List<String> searchTerms) {
		return new ElasticSearchSearchDAO().searchSource(indexName, searchTerms);
	}
	
	public List<Map<String, Object>> searchSource(String indexName, List<String> searchTerms, double lat, double lon) {
		return new ElasticSearchSearchDAO().searchSource(indexName, searchTerms, lat, lon);
	}
	
	public String search(String indexName, String typeName, List<String> searchTerms) {
		return new ElasticSearchSearchDAO().search(indexName, typeName, searchTerms);
	}
	
	public List<Map<String, Object>> searchSource(String indexName, String typeName, List<String> searchTerms) {
		return new ElasticSearchSearchDAO().searchSource(indexName, typeName, searchTerms);
	}
	
	public List<Map<String, Object>> searchSource(String indexName, String typeName, List<String> searchTerms, double lat, double lon) {
		return new ElasticSearchSearchDAO().searchSource(indexName, typeName, searchTerms, lat, lon);
	}

}
