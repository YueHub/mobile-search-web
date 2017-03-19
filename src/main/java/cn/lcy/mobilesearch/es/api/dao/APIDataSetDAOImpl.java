package cn.lcy.mobilesearch.es.api.dao;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;

import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.unit.TimeValue;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHitField;
import org.elasticsearch.search.SearchHits;

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
                    .setExplain(true)
                    .setQuery(QueryBuilders.matchAllQuery()).setSize(10000).setScroll(new TimeValue(600000))
                    .setSearchType(SearchType.SCAN).execute().actionGet();
            String scrollid = searchResponse.getScrollId();
            // 把导出的结果以JSON的格式写到文件里
            // 每次返回数据10000条。一直循环查询直到所有的数据都查询出来
            while (true) {
                SearchResponse response2 = client.prepareSearchScroll(scrollid).setScroll(new TimeValue(1000000))
                        .execute().actionGet();
                SearchHits searchHit = response2.getHits();
                //再次查询不到数据时跳出循环
                if (searchHit.getHits().length == 0) {
                    break;
                }
                System.out.println("查询数量 ：" + searchHit.getHits().length);
                for (int i = 0; i < searchHit.getHits().length; i++) {
                    String json = searchHit.getHits()[i].getSourceAsString();
                }
            }
            
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
