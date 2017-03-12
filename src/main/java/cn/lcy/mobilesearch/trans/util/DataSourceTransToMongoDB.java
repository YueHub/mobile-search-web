package cn.lcy.mobilesearch.trans.util;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;

import org.bson.Document;
import org.elasticsearch.client.Client;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import cn.lcy.mobilesearch.es.dao.ElasticSearchBaseDAO;
import cn.lcy.mobilesearch.es.dao.ElasticSearchIndexDAO;
import cn.lcy.mobilesearch.es.model.MappingItem;
import cn.lcy.mobilesearch.es.model.TypeMapping;
import cn.lcy.mobilesearch.es.util.ClientUtil;
import cn.lcy.mobilesearch.es.util.Configuration;
import cn.lcy.mobilesearch.es.util.ElemeRecommendationUtil;
import cn.lcy.mobilesearch.trans.mongodb.dao.DocumentDAO;
import cn.lcy.mobilesearch.trans.mongodb.dao.DocumentDAOI;
import cn.lcy.mobilesearch.trans.mysql.dao.MySqlQueryDAO;
import cn.lcy.mobilesearch.trans.mysql.dao.MysqlQueryDAOI;

public class DataSourceTransToMongoDB {
	
	public static long count = 0;
	
	private static final int NUM = 100000;	// 转换所有数据
	/*private static final int NUM = 100;	// 转换100
*/	
	private static final String INDEX_NAME = "deepsearch";
	
	/**
	 * 需要地理类型Mapping的表
	 */
	private static final String NEED_GEOPOINT = "restaurant";
	
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
		// 创建索引Mapping
		ElasticSearchIndexDAO elasticSearchIndexDAO = ElasticSearchIndexDAO.getInstance();	// 获取单例
		Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);
		
		if(!elasticSearchIndexDAO.isIndexExists(client, INDEX_NAME)) {
			TypeMapping typeMapping = new TypeMapping();
			typeMapping.setTypeName(NEED_GEOPOINT);	// 设置类型名称
			
			List<MappingItem> mapping = new ArrayList<MappingItem>();
			MappingItem geoItem = new MappingItem();
			geoItem.setFieldName("geo_location");
			Map<String, String> geoSetting = new LinkedHashMap<String, String>();
			geoSetting.put("type", "geo_point");	// 地理字段特殊处理 设置其类型
			geoItem.setSetting(geoSetting);
			mapping.add(geoItem);
			typeMapping.setMapping(mapping);
			try {
				elasticSearchIndexDAO.createIndex(client, INDEX_NAME, typeMapping);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		DocumentDAOI documentDAO = DocumentDAO.getInstance();
		
		Map<String, String> tableList = new LinkedHashMap<String, String>();
		Properties properties = Configuration.propertiesLoader("table-list.properties");
		
		for(Entry<Object, Object> property : properties.entrySet()) {
			String[] valueArr = property.getValue().toString().split(",");
			String defaultType = null;
			if(valueArr.length > 1) {
				defaultType = valueArr[1];
			}
			
			if(Integer.valueOf(valueArr[0]) == 1) {
				// key为表名 value为该表是否有默认类型
				tableList.put((String) property.getKey(), defaultType);
			}
		}
		
		MysqlQueryDAOI mysqlQueryDAO = MySqlQueryDAO.getInstance();
		
		Map<String, List<Document>> collections = new LinkedHashMap<String, List<Document>>();
		
		String[] typeNames = {"Movie", "Video", "Music", "Restaurant", "Product", "News", "Coupon"};
		
		for(Entry<String, String> table : tableList.entrySet()) {
			System.out.println("正在处理:" + table.getKey());
			// 一、读取MySQL数据到内存中
			List<Object> resultList = new ArrayList<Object>();
			long rowNum = mysqlQueryDAO.getCount(table.getKey()); // 转换所有数据
			/*long rowNum = 100;*/
			for(int i = 0; i <= rowNum / NUM; i++) {
				resultList = mysqlQueryDAO.queryData(table.getKey(), i * NUM + 1, NUM);
				// 二、创建文档集合
				for(String typeName : typeNames) {
					List<Document> documents = new ArrayList<Document>();
					collections.put(typeName, documents);
				}
				
				JSONObject jsonRecordObj;
				JSONObject jsonContentObj = null;
				// 三、遍历MySQL中的每一条记录
				for(Object record : resultList) {
					if(count % 20000 == 0 && count > 0) {
						System.out.println("已经遍历到了" + count + "行");
					}
					// 将MySQL记录转换成JSON对象
					jsonRecordObj = (JSONObject) JSON.toJSON(record);
					String documentId = table.getKey() + "_" + jsonRecordObj.get("id").toString();	// 设置新Id (数据库名+Id)
					String typeName = "none";
					if(jsonRecordObj.get("type") != null) {
						typeName = jsonRecordObj.get("type").toString();	// 获取文档类型
						if(typeName.equals("Moive")) {
							jsonRecordObj.remove("type");
							typeName = "Movie";
							jsonRecordObj.put("type", typeName);
						}
					} else if(table.getValue() != null) {
						typeName = table.getValue();
						jsonRecordObj.put("type", typeName);	// 设置文档类型
					}	// 如果文档没有Type字段且该表有默认类型
					// 如果文档已经存在则跳过
					if(documentDAO.isExist(typeName, documentId)) {
						System.out.println("有相同的");
						continue;
					}
					
					// 构建Document
					Document document = new Document();
					
					for(Entry<String, Object> entry : jsonRecordObj.entrySet()) {
						if(entry.getValue() instanceof BigDecimal) {
							document.put(entry.getKey(), entry.getValue().toString());
						} else {
							document.put(entry.getKey(), entry.getValue());
						}
					}
					
					document.remove("id");	// 去除原始ID
					document.put("documentId", documentId);	// 添加自定义ID
					document.put("from_app", table.getKey());	// APP来源
					
					// content Json String To Map
					try {
						jsonContentObj = (JSONObject) JSON.parseObject(jsonRecordObj.get("content").toString());
					} catch(Exception e) {
						e.printStackTrace();
					}
					
					// 处理经纬度
					Object latObj = jsonContentObj.get("latitude");	// 获取维度
					Object lonObj = jsonContentObj.get("longitude");	// 获取经度
					if(latObj != null && lonObj != null) {
						double lat = Double.valueOf(latObj.toString());	// 维度
						double lon = Double.valueOf(lonObj.toString());	// 经度
						String geoAreaHash = ElemeRecommendationUtil.encode(lat, lon);	// 计算经纬度Hash值
						document.put("geo_location", geoAreaHash);	// 地理位置
					}
					
					for(Entry<String, Object> entry : jsonContentObj.entrySet()) {
						if(entry.getValue() instanceof BigDecimal) {
							document.put(entry.getKey(), entry.getValue().toString());
						} else {
							document.put(entry.getKey(), entry.getValue());
						}
					}
					collections.get(typeName).add(document);
					++count;
				}
				// 一次性插入文档集合
				for(String typeName : typeNames) {
					if(collections.get(typeName).size() != 0) {
						// 小写 如 product ...
						documentDAO.addDocuments(typeName.toLowerCase(), collections.get(typeName));
					}
				}
			}
			collections.clear();	// 清空文档
			System.out.println("已完成" + table.getKey() + "的导入处理");
		}
		
		try {
			documentDAO.closeMongoClient();	// 关闭mongoClient
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("一共处理了" + count + "行");
		return count;
	}
}
