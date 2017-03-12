package cn.lcy.mobilesearch.trans.mongodb.dao;

import java.util.List;
import java.util.Map;

import org.bson.Document;


public interface DocumentDAOI {

	/**
	 * 插入单个文档
	 * @param documentMap
	 * @return
	 */
	public boolean addDocument(String collectionName, String documentId, Map<String, Object> document);
	
	/**
	 * 插入多个文档
	 * @param collectionname
	 * @param document
	 * @return
	 */
	public boolean addDocuments(String collectionName, List<Document> document);
	
	/**
	 * 更新文档
	 * @param collectionName
	 * @param documentId
	 * @return
	 */
	public boolean updateDocument(String collectionName, String documentId, Map<String, Object> document);
	
	/**
	 * 判断文档是否存在
	 * @param companyInfoId
	 * @return
	 */
	public boolean isExist(String collectionName, String documentId);
	
	
	/**
	 * 关闭mongoClient
	 * @return
	 */
	public boolean closeMongoClient() throws Exception;
	
	
}
