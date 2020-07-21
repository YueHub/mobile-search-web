package cn.lcy.mobilesearch.es.dao;

import cn.lcy.mobilesearch.es.model.TypeMapping;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.xcontent.XContentBuilder;

import java.io.IOException;

public interface ElasticSearchIndexDAOI {

    public XContentBuilder createMapping(TypeMapping typeMapping) throws IOException;

    public boolean createIndex(Client client, String indexName);

    public boolean createIndex(Client client, String indexName, TypeMapping typeMapping) throws IOException;

    public boolean deleteIndex(Client client, String indexName);

    public boolean isIndexExists(Client client, String indexName);


}
