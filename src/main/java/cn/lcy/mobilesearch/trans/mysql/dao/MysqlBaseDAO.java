package cn.lcy.mobilesearch.trans.mysql.dao;

import java.util.Map;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class MysqlBaseDAO implements MysqlBaseDAOI {

	static Configuration cfg;  
    static ServiceRegistry serviceRegistry;  
    static SessionFactory sessionFactory;  
      
    static {  
        //创建Configuration对象  调用.configure()方法 ,默认class/hibernate.cfg.xml  
        cfg = new Configuration().configure();  
        //创建服务对象  
        serviceRegistry = new StandardServiceRegistryBuilder().applySettings(cfg.getProperties()).build();  
        //创建sessionFactory工厂  
        sessionFactory = cfg.buildSessionFactory(serviceRegistry);  
    }
	    
    /** 
     * 获取session对象 
     * @return 
     */  
    //注意：在使用openSession()方法获取session后。用完session后要session.close()  
    public static Session openSession(){  
        //返回session对象   
        return sessionFactory.openSession();  
    }
    
    
	
	@Override
	public void add(Map<String, Object> records) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(int id) {
		// TODO Auto-generated method stub
		
	}
}
