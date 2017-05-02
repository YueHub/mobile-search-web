package cn.lcy.mobilesearch.naction;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.apache.struts2.interceptor.SessionAware;

import com.hankcs.hanlp.seg.common.Term;

import cn.lcy.knowledge.analysis.seg.service.WordSegmentationServiceI;
import cn.lcy.knowledge.analysis.seg.service.WordSegmentationServiceImpl;
import cn.lcy.knowledge.analysis.sem.model.WordSegmentResult;
import cn.lcy.mobilesearch.es.api.model.SearchResult;
import cn.lcy.mobilesearch.es.search.service.ElasticSearchService;
import cn.lcy.mobilesearch.log.OperationAttrEnum;
import cn.lcy.mobilesearch.log.OperationEnum;
import cn.lcy.mobilesearch.log.OperationObjectEnum;
import cn.lcy.mobilesearch.log.UserOperationLog;

@ParentPackage("basePackage")
@Namespace("/api")
@Action(value = "search")
@Results({
	@Result(name = "search_result", location = "/api/search_result.jsp"),
	@Result(name = "trans_result", location = "/api/trans_result.jsp")
	}) 
public class APIAction extends BaseAction implements SessionAware {

	/**
	 * default serial version ID
	 */
	private static final long serialVersionUID = 1L;
	private Map<String,Object> session;
	private WordSegmentationServiceI wordSegmentationService = WordSegmentationServiceImpl.getInstance();
	private static Logger logger = Logger.getLogger("UserLog");
	
	/**
	 * 搜索串
	 */
	private String searchQuery;
	
	/**
	 * 调用的发起源
	 */
	private String source;
	
	/**
	 * 类型名称
	 */
	private String typeName;
	
	/**
	 * 维度
	 */
	private String lat;
	
	/**
	 * 经度
	 */
	private String lon;
	
	public String search() throws Exception {
		ServletActionContext.getResponse().setHeader("Access-Control-Allow-Origin", "*");
		
		// 记录用户操作日志
		UserOperationLog userOperationLog = new UserOperationLog();
		this.initLog(userOperationLog); // 初始化日志
		
		// 操作代码　谓语
		userOperationLog.setOperationCode(OperationEnum.SEARCH.ordinal());
		// 调用发起源　谓语属性
		if(source != null && source.equals("me")) {
			if(lat != null && !lat.equals("") && lon != null && !lon.equals("")) {
				String[] operationAttr = new String[3];
				operationAttr[0] = OperationAttrEnum.LOCAL.getIndex() + "";
				operationAttr[1] = OperationAttrEnum.LATITUDE.getName() + ":" + lat;
				operationAttr[2] = OperationAttrEnum.LONGITUDE.getName() + ":" + lon;
				userOperationLog.setOperationAttr(operationAttr);
			} else {
				String[] operationAttr = new String[1];
				operationAttr[0] = OperationAttrEnum.LOCAL.getIndex() + "";
				userOperationLog.setOperationAttr(operationAttr);
			}
		} else {
			if(lat != null && !lat.equals("") && lon != null && !lon.equals("")) {
				String[] operationAttr = new String[3];
				operationAttr[0] = OperationAttrEnum.OTHERS.getIndex() + "";
				operationAttr[1] = OperationAttrEnum.LATITUDE.getName() + ":" + lat;
				operationAttr[2] = OperationAttrEnum.LONGITUDE.getName() + ":" + lon;
				userOperationLog.setOperationAttr(operationAttr);
			} else {
				String[] operationAttr = new String[1];
				operationAttr[0] = OperationAttrEnum.OTHERS.getIndex() + "";
				userOperationLog.setOperationAttr(operationAttr);
			}
		}
		//　宾语类型和标识
		if(typeName == null || typeName.equals("")) {
			userOperationLog.setOperationObject(OperationObjectEnum.DEFAULT.getIndex());
			userOperationLog.setObjectId(searchQuery);	// 操作对象标识符
		} else {
			for(OperationObjectEnum operationObject : OperationObjectEnum.values()) {
				if(operationObject.getName().equals(typeName)) {
					userOperationLog.setOperationObject(operationObject.getIndex());
				}
			}
			
			userOperationLog.setObjectId(searchQuery);	// 操作对象标识符
		}
		logger.info(userOperationLog.toString());
		
		// TODO 暂时固定为deepsearch
		String indexName = "deepsearch";
		
		// 第一步：HanLP分词
		WordSegmentResult wordSegmentResult = wordSegmentationService.wordSegmentation(searchQuery);
		List<Term> terms = wordSegmentResult.getTerms();
		
		// ES搜索
		List<String> searchTerms = new ArrayList<String>();
		for(Term term : terms) {
			searchTerms.add(term.word);
		}
		
		if(lat == null || lon == null || lat.equals("") || lon.equals("")) {
			// 搜索所有文档
			if(typeName == null || typeName.equals("") || typeName.equals("all")) {
				List<Map<String, Object>> jsonResut = new ElasticSearchService().searchSource(indexName, searchTerms);
				SearchResult searchResult = new SearchResult();
				searchResult.setResults((jsonResut));
				this.writeJson(searchResult);
			} else if(searchTerms != null) {
				List<Map<String, Object>> jsonResut = new ElasticSearchService().searchSource(indexName, typeName, searchTerms);
				SearchResult searchResult = new SearchResult();
				searchResult.setResults((jsonResut));
				this.writeJson(searchResult);
			}
		} else if(typeName == null || typeName.equals("") || typeName.equals("all")) {
				List<Map<String, Object>> jsonResut = new ElasticSearchService().searchSource(indexName, searchTerms, Double.parseDouble(lat), Double.parseDouble(lon));
				SearchResult searchResult = new SearchResult();
				searchResult.setResults((jsonResut));
				this.writeJson(searchResult);
		} else {
				List<Map<String, Object>> jsonResut = new ElasticSearchService().searchSource(indexName, typeName, searchTerms, Double.parseDouble(lat), Double.parseDouble(lon));
				SearchResult searchResult = new SearchResult();
				searchResult.setResults((jsonResut));
				session.put("searchResult", searchResult);
				this.writeJson(searchResult);
		}
		return "search_result";
	}
	
//	public String trans() throws IOException {
//		if(DataSourceTransToEs.count == 0) {
//			DataSourceTransToEs.MySqlToES();
//		}
//		ServletActionContext.getResponse().setContentType("text/html;charset=utf-8");
//		try {
//			ServletActionContext.getResponse().getWriter().write(String.valueOf(DataSourceTransToEs.count));
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		return "trans_result";
//	}
//	
//	public String transToMongo() throws IOException {
//		if(DataSourceTransToMongoDB.count == 0) {
//			DataSourceTransToMongoDB.MySqlToMongoDB();
//		}
//		ServletActionContext.getResponse().setContentType("text/html;charset=utf-8");
//		try {
//			ServletActionContext.getResponse().getWriter().write(String.valueOf(DataSourceTransToMongoDB.count));
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		return "trans_result";
//	}
	
	public String getSearchQuery() {
		return searchQuery;
	}

	public void setSearchQuery(String searchQuery) {
		this.searchQuery = searchQuery;
	}
	
	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}
	
	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public String getLat() {
		return lat;
	}

	public void setLat(String lat) {
		this.lat = lat;
	}

	public String getLon() {
		return lon;
	}

	public void setLon(String lon) {
		this.lon = lon;
	}

	public Map<String, Object> getSession() {
		return session;
	}
	
	public void setSession(Map<String, Object> session) {
		this.session = session;
	}
}