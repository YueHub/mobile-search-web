package cn.lcy.mobilesearch.es.dao;

import cn.lcy.mobilesearch.es.util.Configuration;

import java.io.IOException;
import java.util.Properties;

public class ElasticSearchBaseDAO {

    public static String ES_NAME = "yanyun-cluster";

    public static String ES_ADDRESS;

    public static int ES_PORT;

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
