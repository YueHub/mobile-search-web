package cn.lcy.mobilesearch.es.api.service;

import cn.lcy.mobilesearch.es.api.dao.APIDataSetDAOI;
import cn.lcy.mobilesearch.es.api.dao.APIDataSetDAOImpl;
import cn.lcy.mobilesearch.es.api.model.DataSet;

public class APIDataSetServiceImpl implements APIDataSetServiceI {

    private static volatile APIDataSetServiceI singleInstance;

    private APIDataSetServiceImpl() {
    }

    public static APIDataSetServiceI getInstance() {
        if (singleInstance == null) {
            synchronized (APIDataSetServiceImpl.class) {
                if (singleInstance == null) {
                    singleInstance = new APIDataSetServiceImpl();
                }
            }
        }
        return singleInstance;
    }

    private APIDataSetDAOI apiDataSetDAO = APIDataSetDAOImpl.getInstance();

    public DataSet getDataSet(String indexName, String typeName, String fieldName, String size) {
        return apiDataSetDAO.getDataSet(indexName, typeName, fieldName, size);
    }
}
