package cn.lcy.mobilesearch.trans.mysql.dao;

import java.util.Map;

public interface MysqlBaseDAOI {
	
	public void add(Map<String, Object> records);

	public void delete(int id);

	public void update(int id);
	
}
