package cn.lcy.mobilesearch.es.api.service;

import cn.lcy.mobilesearch.es.api.model.DataSet;

public interface APIDataSetServiceI {

    public DataSet getDataSet(String indexName, String typeName, String fieldName, String size);

}
