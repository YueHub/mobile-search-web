package cn.lcy.mobilesearch.es.api.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;

import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHitField;

import cn.lcy.mobilesearch.es.api.model.DataSet;
import cn.lcy.mobilesearch.es.dao.ElasticSearchBaseDAO;
import cn.lcy.mobilesearch.es.util.ClientUtil;

public class APIDataSetDAOImpl implements APIDataSetDAOI {
    
    private volatile static APIDataSetDAOImpl singleInstance;
    
    private APIDataSetDAOImpl() {};
    
    public static APIDataSetDAOI getInstance() {
        if(singleInstance == null) {
            synchronized (APIDataSetDAOImpl.class) {
                if(singleInstance == null) {
                    singleInstance = new APIDataSetDAOImpl();
                }
            }
        }
        return singleInstance;
    }
    
    @Override
    public DataSet getDataSet(String indexName, String typeName, String fieldName, String size) {
        Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);
        SearchResponse searchResponse = null;
        if("all".equals(size)) {
            searchResponse = client.prepareSearch(indexName)
                    .setTypes(typeName)
                    .addField(fieldName)
                    .setExplain(true).get();
        } else {
            searchResponse = client.prepareSearch(indexName)
                    .setTypes(typeName)
                    .addField(fieldName)
                    .setExplain(true)
                    .setSize(Integer.parseInt(size)).get();
        }
        List<String> results = new ArrayList<String>();
        for(SearchHit hit : searchResponse.getHits().getHits()) {
            for(Entry<String, SearchHitField> hitEntry : hit.getFields().entrySet()) {
                results.add(hitEntry.getValue().getValue().toString());
            }
        }
        DataSet dataSet = new DataSet();
        dataSet.setCount(results.size());
        dataSet.setResults(results);
        return dataSet;
    }
}
