package cn.lcy.mobilesearch.naction;

import cn.lcy.mobilesearch.log.OperationAttrEnum;
import cn.lcy.mobilesearch.log.OperationEnum;
import cn.lcy.mobilesearch.log.OperationObjectEnum;
import cn.lcy.mobilesearch.log.UserOperationLog;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.*;
import org.apache.struts2.interceptor.SessionAware;

import java.io.IOException;
import java.util.Map;

@ParentPackage("basePackage")
@Namespace("/front")
@Action(value = "searchAction")
@Results({
        @Result(name = "mobile_result", location = "/front/mobile_result.html")
})
public class SearchAction extends BaseAction implements SessionAware {

    /**
     * default serial version ID
     */
    private static final long serialVersionUID = 1L;

    /**
     * 用户日志对象
     */
    private static Logger logger = Logger.getLogger("UserLog");

    private Map<String, Object> session;
    private APIAction apiAction;

    /**
     * 跳转的网址
     */
    private String url;

    /**
     * 搜索串
     */
    private String searchQuery;

    /**
     * 维度
     */
    private String lat;

    /**
     * 经度
     */
    private String lon;

    /**
     * 类型名称
     */
    private String typeName;

    public String jump() throws IOException {
        // 记录用户点击日志
        UserOperationLog userOperationLog = new UserOperationLog();
        this.initLog(userOperationLog); // 初始化日志
        // 操作代码　谓语
        userOperationLog.setOperationCode(OperationEnum.CLICK.ordinal());
        // 调用发起源　谓语属性
        if (lat != null && !lat.equals("") && lon != null && !lon.equals("")) {
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
        //　宾语类型和标识
        if (typeName == null || typeName == "") {
            userOperationLog.setOperationObject(OperationObjectEnum.DEFAULT.getIndex());
            userOperationLog.setObjectId(url);    // 操作对象标识符
        } else {
            userOperationLog.setOperationObject(OperationObjectEnum.valueOf(typeName).getIndex());
            userOperationLog.setObjectId(url);    // 操作对象标识符
        }
        logger.info(userOperationLog.toString());

        ServletActionContext.getResponse().sendRedirect(url);
        return null;
    }

    public Map<String, Object> getSession() {
        return session;
    }

    public void setSession(Map<String, Object> session) {
        this.session = session;
    }

    public APIAction getApiAction() {
        return apiAction;
    }

    public void setApiAction(APIAction apiAction) {
        this.apiAction = apiAction;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getSearchQuery() {
        return searchQuery;
    }

    public void setSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
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

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}