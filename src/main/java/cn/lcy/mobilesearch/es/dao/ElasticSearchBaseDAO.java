package cn.lcy.mobilesearch.es.dao;

import java.io.IOException;
import java.util.Properties;

import cn.lcy.mobilesearch.es.util.Configuration;

public class ElasticSearchBaseDAO {
	
	public static String ES_NAME = "yanyun-cluster";
	
	public static String ES_ADDRESS;
	
	public static int ES_PORT;
	
	// 139.129.96.158
	static {
		Properties properties;
		try {
			properties = Configuration.propertiesLoader("conversion-to-mongo.properties");
			ES_ADDRESS = properties.get("elasticsearch-ip").toString();
			ES_PORT = Integer.parseInt(properties.get("elasticsearch-port").toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	

}
