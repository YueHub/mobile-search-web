package cn.lcy.mobilesearch.trans.mongodb.dao;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;

import org.bson.Document;

import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import cn.lcy.mobilesearch.es.util.Configuration;

public class DocumentDAO implements DocumentDAOI {
	
	private volatile static DocumentDAOI singleInstance;
	
	private static MongoClient mongoClient;
	
	private static MongoDatabase db;
	
	static {
		Properties properties;
		try {
			properties = Configuration.propertiesLoader("conversion-to-mongo.properties");
			String targetMongoIp = properties.get("target-mongo-ip").toString();
			int targetMongoPort = Integer.parseInt(properties.get("target-mongo-port").toString());
			
			// 用户名 数据库 密码
	        MongoCredential credential = MongoCredential.createCredential("yue", "deepsearch", "yue#mongo#2017".toCharArray());  
	        //IP port
	        ServerAddress addr = new ServerAddress(targetMongoIp, targetMongoPort);
	        mongoClient = new MongoClient(addr,Arrays.asList(credential));
	        //得到数据库
	        db = mongoClient.getDatabase("deepsearch");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 私有化构造方法，实现单例模式
	 */
	private DocumentDAO() {}
	
	/**
	 * 获取单例
	 * @return
	 */
	public static DocumentDAOI getInstance() {
		if(singleInstance == null) {
			synchronized (DocumentDAO.class) {
				if(singleInstance == null) {
					singleInstance = new DocumentDAO();
				}
			}
		}
		return singleInstance;
	}
	
	@Override
	public boolean addDocument(String collectionName, String documentId, Map<String, Object> document) {
	    try {
	    	MongoCollection<Document> collection = db.getCollection(collectionName);
	    	
	    	BasicDBObject updateCondition = new BasicDBObject().append("documentId", documentId);	// 更新条件
	    	if(collection.find(updateCondition).first() == null) {
	    		collection.insertOne(new Document(document));
	    	}
	    } catch (Exception e) {
	    	e.printStackTrace();
	    }
	    return false;
	}
	
	@Override
	public boolean addDocuments(String collectionName, List<Document> documents) {
	    try {
	    	MongoCollection<Document> collection = db.getCollection(collectionName);
	    	// 一次性插入多条文档
			collection.insertMany(documents);
	    } catch (Exception e) {
	    	e.printStackTrace();
	    }
	    return false;
	}
	
	@Override
	public boolean updateDocument(String collectionName, String documentId, Map<String, Object> document) {
	    try {
	    	MongoCollection<Document> collection = db.getCollection(collectionName);
	    	
	    	BasicDBObject updateCondition = new BasicDBObject().append("documentId", documentId);	// 更新条件
	    	BasicDBObject updateValue = new BasicDBObject();
	    	
	    	// 将类型为BigDecimal的数据转换成String 避免MongoDB插入出错
	    	Map<String, Object> newDocument = new LinkedHashMap<String, Object>();
	    	for(Entry<String, Object> entry : document.entrySet()) {
	    		if(entry.getValue() instanceof BigDecimal) {
	    			newDocument.put(entry.getKey(), entry.getValue().toString());
	    		} else {
	    			newDocument.put(entry.getKey(), entry.getValue());
	    		}
	    	}
	    	
	    	updateValue.putAll(newDocument);
	    	BasicDBObject updateAlterAdd = new BasicDBObject("$set", updateValue);  
			collection.updateOne(updateCondition, updateAlterAdd);
	    } catch (Exception e) {
	    	e.printStackTrace();
	    }
	    return false;
	}
	
	@Override
	public boolean isExist(String collectionName, String documentId) {
		boolean exist = false;
	    try {
	    	MongoCollection<Document> collection = db.getCollection(collectionName);
	    	
	    	BasicDBObject updateCondition = new BasicDBObject("documentId", documentId);	// 更新条件
	    	if(collection.find(new Document("documentId", documentId)).first() != null) {
	    		exist = true;
	    	}
	    } catch (Exception e) {
	    	e.printStackTrace();
	    }
	    return exist;
	}
	
	/**
	 * 关闭mongoClient
	 */
	public boolean closeMongoClient() throws Exception {
		if(mongoClient != null) {
			mongoClient.close();
			return true;
		}
		return false;
	}
}