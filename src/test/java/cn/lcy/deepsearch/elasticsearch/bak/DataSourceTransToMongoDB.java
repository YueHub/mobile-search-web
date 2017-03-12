package cn.lcy.deepsearch.elasticsearch.bak;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;

import org.elasticsearch.client.Client;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;

import cn.lcy.mobilesearch.es.dao.ElasticSearchBaseDAO;
import cn.lcy.mobilesearch.es.dao.ElasticSearchIndexDAO;
import cn.lcy.mobilesearch.es.util.ClientUtil;
import cn.lcy.mobilesearch.es.util.Configuration;
import cn.lcy.mobilesearch.es.util.ElemeRecommendationUtil;
import cn.lcy.mobilesearch.trans.mongodb.dao.DocumentDAO;
import cn.lcy.mobilesearch.trans.mongodb.dao.DocumentDAOI;
import cn.lcy.mobilesearch.trans.mysql.dao.MySqlQueryDAO;
import cn.lcy.mobilesearch.trans.mysql.dao.MysqlQueryDAOI;

public class DataSourceTransToMongoDB {
	
	public static long count = 0;
	
	public static void main(String args[]) {
		if(count == 0) {
			try {
				DataSourceTransToMongoDB.MySqlToMongoDB();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		System.exit(0);
	}
	
	/**
	 * MySql数据导入到MongoDB中
	 * @return
	 * @throws IOException 
	 */
	public static long MySqlToMongoDB() throws IOException {
		
		ElasticSearchIndexDAO elasticSearchIndexDAO = ElasticSearchIndexDAO.getInstance();	// 获取单例
		Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);
		DocumentDAOI documentDAO = DocumentDAO.getInstance();
		
		// TODO
		HashSet<String> typeSet = new HashSet<String>();
		
		List<String> tableList = new ArrayList<String>();
		Properties properties = Configuration.propertiesLoader("table-list.properties");
		
		for(Entry<Object, Object> property : properties.entrySet()) {
			if(Integer.valueOf((String) property.getValue()) == 1) {
				tableList.add((String) property.getKey());
			}
		}
		
		MysqlQueryDAOI mysqlQueryDAO = MySqlQueryDAO.getInstance();
		
		for(String tableName : tableList) {
			System.out.println("正在处理:" + tableName);
			List<Object> resultList = new ArrayList<Object>();
			resultList = mysqlQueryDAO.queryData(tableName, 1, 10000);
			
			// 遍历MySQL中的每一条记录
			for(Object record : resultList) {
				if(count % 1000 == 0 && count > 0) {
					System.out.println("已经处理了" + count + "行");
				}
				
				// 将MySQL记录转换成JSON对象
				JSONObject jsonObj = (JSONObject) JSON.toJSON(record);
				Map<String, Object> document = new HashMap<String, Object>();
				String typeName = "none";
				if(jsonObj.get("type") != null) {
					typeName = jsonObj.get("type").toString();	// 获取文档类型
				}
				String documentId = tableName + "_" + jsonObj.get("id").toString();	// 设置新Id (数据库名+Id)
				// 如果文档已经存在则跳过
				if(documentDAO.isExist(typeName, documentId)) {	
					continue;
				}
				Object latObj = jsonObj.get("latitude");	// 获取维度
				Object lonObj = jsonObj.get("longitude");	// 获取经度
				// 构建Document
				for(Entry<String, Object> entry : jsonObj.entrySet()) {
					if(entry.getValue() instanceof BigDecimal) {
						document.put(entry.getKey(), entry.getValue().toString());
					} else {
						document.put(entry.getKey(), entry.getValue());
					}
				}
				
				if(latObj != null && lonObj != null) {
					double lat = Double.valueOf(latObj.toString());	// 维度
					double lon = Double.valueOf(lonObj.toString());	// 经度
					String geoAreaHash = ElemeRecommendationUtil.encode(lat, lon);	// 计算经纬度Hash值
					document.put("geo_location", geoAreaHash);	// 地理位置
				}
				document.remove("id");	// 去除原始ID
				
				document.put("documentId", documentId);
				document.put("from_app", tableName);	// APP来源
				documentDAO.addDocument(typeName, documentId, document);
				
				// content Json String To Map
				Map<String, Object> content = JSON.parseObject(jsonObj.get("content").toString(), new TypeReference<Map<String, Object>>(){});
				documentDAO.updateDocument(typeName, documentId, content);
				typeSet.add(typeName);
				++count;
			}
			System.out.println("已完成" + tableName + "的导入处理");
		}
		System.out.println("一共处理了" + count + "行");
		for(Object type : typeSet) {
			System.out.println(type.toString());
		}
		return count;
	}
}
