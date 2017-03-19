package cn.lcy.mobilesearch.es.api.dao;

import cn.lcy.mobilesearch.es.api.model.DataSet;

public interface APIDataSetDAOI {
	
    /**
     * 获取数据集
     * @param indexName
     * @param typeName
     * @param fieldName
     * @param size
     * @return
     */
	public DataSet getDataSet(String indexName, String typeName, String fieldName, String size);
	
}
