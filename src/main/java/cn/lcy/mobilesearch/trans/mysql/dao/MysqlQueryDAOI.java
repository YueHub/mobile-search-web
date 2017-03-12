package cn.lcy.mobilesearch.trans.mysql.dao;

import java.util.List;

public interface MysqlQueryDAOI extends MysqlBaseDAOI {

	/**
	 * 查询MySQL数据库数据
	 * @param tableName
	 * @return
	 */
	public List<Object> queryData(String tableName);
	
	/**
	 * 查询MySQL数据库数据 限制查询数量
	 * @param tableName
	 * @param start
	 * @param num
	 * @return
	 */
	public List<Object> queryData(String tableName, int start, int num);
	
	public long getCount(String tableName);
	
}
