package cn.lcy.deepsearch.elasticsearch.demo;



import java.net.InetSocketAddress;

import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;

public class ESTest {

	public static void main(String args[]) {
		
		Client client;
		try {
			
			Settings settings = Settings.settingsBuilder()
					.put("cluster.name", "elasticsearch")
					.put("client.transport.sniff", true)
					. build();
			
			client = new TransportClient.Builder().settings(settings).build()
					.addTransportAddress(new InetSocketTransportAddress(new InetSocketAddress("localhost",9300)));
			// on shutdown
		
			//Add transport addresses and do something with the client...
	    	
	    	GetResponse response = client.prepareGet("ias_local", "webpage_com_tencent_news", "AVi2YV5aOKgJpYhaB-Bc").get();
	    	
	    	System.out.println(response.getId());
	    	System.out.println(response.getSourceAsString());
	    	
	    	client.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
    }
	
}
