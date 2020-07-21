package cn.lcy.mobilesearch.es.dao;

import cn.lcy.mobilesearch.es.model.MappingItem;
import cn.lcy.mobilesearch.es.model.TypeMapping;
import org.elasticsearch.action.admin.indices.create.CreateIndexResponse;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexResponse;
import org.elasticsearch.action.admin.indices.exists.indices.IndicesExistsRequest;
import org.elasticsearch.action.admin.indices.exists.indices.IndicesExistsResponse;
import org.elasticsearch.action.admin.indices.mapping.put.PutMappingRequest;
import org.elasticsearch.action.admin.indices.mapping.put.PutMappingResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.Requests;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentFactory;

import java.io.IOException;
import java.util.Map.Entry;

public class ElasticSearchIndexDAO implements ElasticSearchIndexDAOI {

    private volatile static ElasticSearchIndexDAO singleInstance;

    /**
     * 私有化构造方法，实现单例
     */
    private ElasticSearchIndexDAO() {
    }

    /**
     * 获取单例
     *
     * @return
     */
    public static ElasticSearchIndexDAO getInstance() {
        if (singleInstance == null) {
            synchronized (ElasticSearchIndexDAO.class) {
                if (singleInstance == null) {
                    singleInstance = new ElasticSearchIndexDAO();
                }
            }
        }
        return singleInstance;
    }


    // 时间复杂度为n的平方 算法应该可优化
    @Override
    public XContentBuilder createMapping(TypeMapping typeMapping) throws IOException {
        XContentBuilder mapping = null;
        String typeName = typeMapping.getTypeName();

        for (MappingItem mappingItem : typeMapping.getMapping()) {
            for (Entry<String, String> setting : mappingItem.getSetting().entrySet()) {
                ;
            }
        }
        return mapping;
    }

    @Override
    public boolean createIndex(Client client, String indexName) {
        boolean isIndexExists = this.isIndexExists(client, indexName);
        boolean success = false;
        if (!isIndexExists) {
            // 创建一个空索引
            CreateIndexResponse createIndexResponse = client.admin().indices().prepareCreate(indexName).execute().actionGet();
            success = createIndexResponse.isAcknowledged();
        }
        return success;
    }

    @Override
    public boolean createIndex(Client client, String indexName, TypeMapping typeMapping) throws IOException {
        boolean isIndexExists = this.isIndexExists(client, indexName);
        String typeName = typeMapping.getTypeName();
        boolean success = false;
        if (!isIndexExists) {
            // 创建一个空索引并设置Mapping
            CreateIndexResponse createIndexResponse = client.admin().indices().prepareCreate(indexName).execute().actionGet();
            if (createIndexResponse.isAcknowledged()) {
                for (MappingItem mappingItem : typeMapping.getMapping()) {
                    for (Entry<String, String> setting : mappingItem.getSetting().entrySet()) {
                        XContentBuilder mapping = XContentFactory.jsonBuilder()
                                .startObject().startObject(typeName).startObject("properties")
                                .startObject(mappingItem.getFieldName()).field(setting.getKey(), setting.getValue()).endObject()
                                .endObject().endObject().endObject();
                        System.out.println("mapping:" + mapping.string());
                        PutMappingRequest putMapping = Requests.putMappingRequest(indexName).type(typeName).source(mapping);
                        PutMappingResponse response = client.admin().indices().putMapping(putMapping).actionGet();
                        if (!response.isAcknowledged()) {
                            System.out.println("不能为 type [" + indexName + "]/[" + typeName + "] 创建Mapping.");
                        } else {
                            System.out.println("为[" + indexName + "]/[" + typeName + "] 创建Mapping成功.");
                        }
                        success = response.isAcknowledged();
                    }
                }
            }
        }
        return success;
    }

    @Override
    public boolean deleteIndex(Client client, String indexName) {
        boolean isIndexExists = this.isIndexExists(client, indexName);
        boolean success = false;

        if (isIndexExists) {
            DeleteIndexResponse deleteIndexResponse = client.admin().indices().prepareDelete(indexName)
                    .execute().actionGet();
            success = deleteIndexResponse.isAcknowledged();
        }
        return success;
    }

    @Override
    public boolean isIndexExists(Client client, String indexName) {

        IndicesExistsRequest inExistsRequest = new IndicesExistsRequest(indexName);

        IndicesExistsResponse inExistsResponse = client.admin().indices()
                .exists(inExistsRequest).actionGet();

        return inExistsResponse.isExists();
    }

}
