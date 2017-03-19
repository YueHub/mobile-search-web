package cn.lcy.mobilesearch.trans.mysql.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import cn.lcy.mobilesearch.trans.util.DataSourceTransToEs;

public class MySqlQueryDAO extends MysqlBaseDAO implements MysqlQueryDAOI {

	private volatile static MysqlQueryDAOI singleInstance;
	
	/**
	 * 私有化构造方法，实现单例模式
	 */
	private MySqlQueryDAO() {}
	
	/**
	 * 获取单例
	 * @return
	 */
	public static MysqlQueryDAOI getInstance() {
		if(singleInstance == null) {
			synchronized (MySqlQueryDAO.class) {
				if(singleInstance == null) {
					singleInstance = new MySqlQueryDAO();
				}
			}
		}
		return singleInstance;
	}
	
	@Override
	public List<Object> queryData(String tableName) {
		// 表名映射为类名
		String className = DataSourceTransToEs.convertToClassName(tableName);
		String hql = "FROM " + className;
		Session session = MysqlBaseDAO.openSession();	// 获取Hibernate Session
		Query query = session.createQuery(hql);
		session.beginTransaction();
		@SuppressWarnings("unchecked")
		List<Object> recordList = query.list();
		session.close();	// 关闭session
		return recordList;
	}
	
	@Override
	public List<Object> queryData(String tableName, int start, int num) {
		// 表名映射为类名
		String className = DataSourceTransToEs.convertToClassName(tableName);
		String hql = "FROM " + className;
		Session session = MysqlBaseDAO.openSession();	// 获取Hibernate Session
		Query query = session.createQuery(hql);
		query.setFirstResult(start);
		query.setMaxResults(num);
		session.beginTransaction();
		@SuppressWarnings("unchecked")
		List<Object> recordList = query.list();
		session.close();	// 关闭session
		return recordList;
	}
	
	public long getCount(String tableName) {
		// 表名映射为类名
		String className = DataSourceTransToEs.convertToClassName(tableName);
		String sql = "SELECT COUNT(*) FROM " + className;
		Session session = MysqlBaseDAO.openSession();	// 获取Hibernate Session
		Query query = session.createQuery(sql);
		session.beginTransaction();
		long count = (long) query.uniqueResult();
		session.close();	// 关闭session
		return count;
	}

	
}
