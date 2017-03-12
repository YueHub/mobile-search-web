package cn.lcy.mobilesearch.trans.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;

import org.elasticsearch.action.bulk.BulkRequestBuilder;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.xcontent.XContentFactory;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import cn.lcy.mobilesearch.es.dao.ElasticSearchBaseDAO;
import cn.lcy.mobilesearch.es.dao.ElasticSearchIndexDAO;
import cn.lcy.mobilesearch.es.model.MappingItem;
import cn.lcy.mobilesearch.es.model.TypeMapping;
import cn.lcy.mobilesearch.es.util.ClientUtil;
import cn.lcy.mobilesearch.es.util.Configuration;
import cn.lcy.mobilesearch.es.util.ElemeRecommendationUtil;
import cn.lcy.mobilesearch.trans.mysql.dao.MySqlQueryDAO;
import cn.lcy.mobilesearch.trans.mysql.dao.MysqlQueryDAOI;
import cn.lcy.mobilesearch.trans.mysql.model.WebpageComJingdongAppMall;
import cn.lcy.mobilesearch.trans.mysql.model.WebpageComSankuaiMeituan;
import cn.lcy.mobilesearch.trans.mysql.model.WebpageMeEle;

public class DataSourceTransToEs {
	
	public static long count = 0;
	
	public static void main(String args[]) {
		if(DataSourceTransToEs.count == 0) {
			try {
				DataSourceTransToEs.MySqlToES();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		System.exit(0);
	}
	
	/**
	 * MySql数据导入到ES中
	 * @return
	 * @throws IOException 
	 */
	public static long MySqlToES() throws IOException {
		// TODO
		HashSet typeSet = new HashSet();
		
		ElasticSearchIndexDAO elasticSearchIndexDAO = ElasticSearchIndexDAO.getInstance();	// 获取单例
		Client client = ClientUtil.getTransportClient(ElasticSearchBaseDAO.ES_NAME, ElasticSearchBaseDAO.ES_ADDRESS, ElasticSearchBaseDAO.ES_PORT);
		/*elasticSearchIndexDAO.deleteIndex(client, "ias_local");
		elasticSearchIndexDAO.deleteIndex(client, "product");
		elasticSearchIndexDAO.deleteIndex(client, "coupon");
		elasticSearchIndexDAO.deleteIndex(client, "restaurant");*/
		
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
			resultList = mysqlQueryDAO.queryData(tableName, 1, 100);
			BulkRequestBuilder bulkRequest = client.prepareBulk();
			for(Object record : resultList) {
				if(count % 1000 == 0) {
					System.out.println("已经处理" + count + "行");
				}
				
				if(tableName.equals("webpage_com_jingdong_app_mall")) {
					WebpageComJingdongAppMall jingDongRecord = (WebpageComJingdongAppMall) record;
					String typeName = jingDongRecord.getType().toLowerCase();
					String indexName = typeName;
					
					// TODO 
					typeSet.add(typeName);
					
					// 如果当前索引不存在 则创建索引
					if(!elasticSearchIndexDAO.isIndexExists(client, indexName)) {
						elasticSearchIndexDAO.createIndex(client, indexName);
					}
					String contentJson = jingDongRecord.getContent();
					String recordId = jingDongRecord.getPackageName() + jingDongRecord.getId().toString();
					
					bulkRequest.add(client.prepareIndex(indexName, typeName, recordId).setSource(contentJson));
					
					// 更新
					try {
						bulkRequest.add(client.prepareUpdate(indexName, typeName, recordId)
						.setDoc(XContentFactory.jsonBuilder()
						    .startObject()
						    	.field("web_url", jingDongRecord.getWebUrl())
						    	.field("web_url_md5", jingDongRecord.getWebUrlMd5())
						        .field("title", jingDongRecord.getTitle())
						        .field("crawl_timestamp", jingDongRecord.getCrawlTimestamp())
						        .field("app_from", jingDongRecord.getPackageName())	// APP来源
						        .field("type", typeName)	// 类型
						    .endObject()));
					} catch (IOException e) {
						e.printStackTrace();
					}
					
					if(count % 100 == 0) {
						bulkRequest.execute().actionGet();
					}
					++count;
				} else if(tableName.equals("webpage_com_sankuai_meituan")) {
					WebpageComSankuaiMeituan meiTuanRecord = (WebpageComSankuaiMeituan) record;
					String typeName = meiTuanRecord.getType().toLowerCase();
					String indexName = typeName;
					
					// TODO 
					typeSet.add(typeName);
					
					if(!elasticSearchIndexDAO.isIndexExists(client, indexName)) {
						elasticSearchIndexDAO.createIndex(client, indexName);
					}
					String contentJson = meiTuanRecord.getContent();
					String recordId = meiTuanRecord.getPackageName() + meiTuanRecord.getId().toString();
					bulkRequest.add(client.prepareIndex(indexName, typeName, recordId).setSource(contentJson));
					
					// 更新
					try {
						bulkRequest.add(client.prepareUpdate(indexName, typeName, recordId)
						.setDoc(XContentFactory.jsonBuilder()
						    .startObject()
						    	.field("web_url", meiTuanRecord.getWebUrl())
						    	.field("web_url_md5", meiTuanRecord.getWebUrlMd5())
						        .field("title", meiTuanRecord.getTitle())
						        .field("crawl_timestamp", meiTuanRecord.getCrawlTimestamp())
						        .field("app_from", meiTuanRecord.getPackageName())	// APP来源
						        .field("type", typeName)	// 类型
						    .endObject()));
					} catch (IOException e) {
						e.printStackTrace();
					}
					
					if(count % 100 == 0) {
						bulkRequest.execute().actionGet();
					}
					
					++count;
					
//					// generate json
////					byte[] json = null;
////					try {
////						json = mapper.writeValueAsBytes(weiTuanRecord);
////					} catch (JsonProcessingException e) {
////						// TODO Auto-generated catch block
////						e.printStackTrace();
////					}
////					IndexResponse response = client.prepareIndex(indexName, typeName, recordId)
////					        .setSource(contentJson)
////					        .get();
//					
//					String json = JSON.toJSONString(meiTuanRecord);
//					String json2 = meiTuanRecord.getContent();
//					System.out.println("json2字符串:" + json2);
//					
//					String typeName = meiTuanRecord.getPackageName();
//					
//					

//					for(Entry<String, Object> keyValue : object.entrySet()) {
//						if(keyValue)
//						System.out.print(keyValue.getKey());
//						System.out.println("@@@@" + keyValue.getValue());
//					}
				} else if(tableName.equals("webpage_me_ele")) {
					WebpageMeEle eleRecord = (WebpageMeEle) record;
					String typeName = eleRecord.getType().toLowerCase();
					String indexName = typeName;
					
					// TODO 
					typeSet.add(typeName);
					
					if(!elasticSearchIndexDAO.isIndexExists(client, indexName)) {
						TypeMapping typeMapping = new TypeMapping();
						typeMapping.setTypeName(typeName);	// 设置类型名称
						
						List<MappingItem> mapping = new ArrayList<MappingItem>();
						MappingItem geoItem = new MappingItem();
						geoItem.setFieldName("geo_location");
						Map<String, String> geoSetting = new LinkedHashMap<String, String>();
						geoSetting.put("type", "geo_point");	// 地理字段特殊处理 设置其类型
						geoItem.setSetting(geoSetting);
						mapping.add(geoItem);
						
						MappingItem latitudeItem = new MappingItem();
						latitudeItem.setFieldName("latitude");
						Map<String, String> latitudeSetting = new LinkedHashMap<String, String>();
						latitudeSetting.put("type", "double");
						latitudeItem.setSetting(latitudeSetting);
						mapping.add(latitudeItem);
						
						MappingItem longitudeItem = new MappingItem();
						longitudeItem.setFieldName("longitude");
						Map<String, String> longitudeSetting = new LinkedHashMap<String, String>();
						longitudeSetting.put("type", "double");
						longitudeItem.setSetting(longitudeSetting);
						mapping.add(longitudeItem);
						
						typeMapping.setMapping(mapping);
						try {
							elasticSearchIndexDAO.createIndex(client, indexName, typeMapping);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
					String contentJson = eleRecord.getContent();
					String recordId = eleRecord.getPackageName() + eleRecord.getId().toString();
					
					// 解析eleRecord Content中纬度和经度
					JSONObject contentObject = (JSONObject) JSON.parse(eleRecord.getContent());

					bulkRequest.add(client.prepareIndex(indexName, typeName, recordId).setSource(contentJson));
					
					try {
						// 更新常规字段
						bulkRequest.add(client.prepareUpdate(indexName, typeName, recordId)
						.setDoc(XContentFactory.jsonBuilder()
						    .startObject()
						    	.field("web_url", eleRecord.getWebUrl())
						    	.field("web_url_md5", eleRecord.getWebUrlMd5())
						        .field("title", eleRecord.getTitle())
						        .field("crawl_timestamp", eleRecord.getCrawlTimestamp())
						        .field("app_from", eleRecord.getPackageName())	// APP来源
						        .field("type", typeName)	// 类型
						    .endObject()));
						Object latitudeObj = contentObject.get("latitude");
						Object longitudeObj = contentObject.get("longitude");
						// 更新经纬度
						if(latitudeObj != null && longitudeObj != null) {
							// 纬度
							double latitude = Double.parseDouble(latitudeObj.toString());
							// 经度
							double longitude = Double.parseDouble(longitudeObj.toString());
							// 计算地理区域
							String geoAreaHash = ElemeRecommendationUtil.encode(latitude, longitude);
							bulkRequest.add(client.prepareUpdate(indexName, typeName, recordId)
							.setDoc(XContentFactory.jsonBuilder()
							    .startObject()
							        //.startArray("geo_location").value(latitude).value(longitude).endArray()	// 地理位置
							    	.field("geo_location", geoAreaHash)	// 地理位置
							    .endObject()));
						}
							
					} catch (Exception e) {
						e.printStackTrace();
					}
					
					if(count % 100 == 0) {
						bulkRequest.execute().actionGet();
					}
					
					++count;
				}
			}
			bulkRequest.execute().actionGet();
			System.out.println(tableName + "处理完成");
		}
		
		for(Object type : typeSet) {
			System.out.println(type.toString());
		}
		
		client.close();	// 关闭Client
		return count;
	}
	
	
	
	
	
	/**
	 * 数据库名与类名的映射
	 * @param dbKeys
	 */
    public static String convertToClassName(String... dbKeys) {
    	String result = null;
        if(dbKeys != null && dbKeys.length > 0){
            for(String key : dbKeys){
                String[] words = key.split("_");
                result = toUppercase4FirstLetter(words);
                result = "cn.lcy.mobilesearch.trans.mysql.model." + result;
            }
        }
        return result;
    }
     
    private static String toUppercase4FirstLetter(String... words){
        StringBuffer buffer = new StringBuffer();
        if(words != null && words.length > 0){
            for(int i = 0;i < words.length;i++){
                String word = words[i];
                String firstLetter = word.substring(0, 1);
                String others = word.substring(1);
                String upperLetter = null;
                upperLetter = firstLetter.toUpperCase();
                buffer.append(upperLetter).append(others);
            }
            return buffer.toString();
        }
        return "";
    }

}
