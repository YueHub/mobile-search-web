package cn.lcy.mobilesearch.api.dataset.test;

import java.net.InetSocketAddress;
import java.util.Map.Entry;

import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHitField;

public class DataSetTest {
    
    public static void main(String[] args) {
        Settings settings = Settings.settingsBuilder()
                .put("cluster.name", "elasticsearch")
                .put("client.transport.sniff", true)
                . build();
        
        Client client = new TransportClient.Builder().settings(settings).build()
                .addTransportAddress(new InetSocketTransportAddress(new InetSocketAddress("localhost",9300)));
        
        SearchResponse s = client.prepareSearch("deepsearch").setTypes("restaurant")
                .addField("address").setExplain(true).setSize(100).get();
        for(SearchHit hit : s.getHits().getHits()) {
            for(Entry<String, SearchHitField> w : hit.getFields().entrySet()) {
                System.out.println(w.getValue().getValue().toString());
            }
        }
    }

}
