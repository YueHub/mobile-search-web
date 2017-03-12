package cn.lcy.mobilesearch.es.api.model;

import java.util.List;
import java.util.Map;

public class SearchResult {

	private List<Map<String, Object>> results;

	public List<Map<String, Object>> getResults() {
		return results;
	}

	public void setResults(List<Map<String, Object>> results) {
		this.results = results;
	}
	
}
