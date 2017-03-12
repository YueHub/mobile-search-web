package cn.lcy.mobilesearch.trans.mongodb.model;

import java.util.List;

import org.bson.Document;

public class Collection {
	
	private String typeName;
	
	List<Document> documents;

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public List<Document> getDocuments() {
		return documents;
	}

	public void setDocuments(List<Document> documents) {
		this.documents = documents;
	}

}
