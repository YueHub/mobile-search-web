package cn.lcy.mobilesearch.es.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

public class Configuration {
    
    /**
     * 工具类不允许有public 或　default构造方法
     */
    private Configuration () {}

    public static Properties propertiesLoader(String fileName) throws IOException{  
        // 文件在class的根路径  
        // String filePath= Configuration.class.getClassLoader().getResource(fileName).getFile();  
        // System.out.println(filePath);  
    	
        InputStream is = Configuration.class.getClassLoader().getResourceAsStream(fileName);  
          
        BufferedReader br = new BufferedReader(new InputStreamReader(is));  
        Properties props = new Properties();
        
        props.load(br);
        
        return props;
    }
}
