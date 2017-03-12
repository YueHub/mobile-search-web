package cn.lcy.mobilesearch.es.dao;

import java.io.IOException;

import org.elasticsearch.client.Client;
import org.elasticsearch.common.xcontent.XContentBuilder;

import cn.lcy.mobilesearch.es.model.TypeMapping;

public interface ElasticSearchIndexDAOI {
	
	public XContentBuilder createMapping(TypeMapping typeMapping) throws IOException;
	
	public boolean createIndex(Client client, String indexName);
	
	public boolean createIndex(Client client, String indexName, TypeMapping typeMapping) throws IOException;
	
	public boolean deleteIndex(Client client, String indexName);
	
	public boolean isIndexExists(Client client, String indexName);
	
	

}
