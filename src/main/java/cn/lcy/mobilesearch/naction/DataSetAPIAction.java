package cn.lcy.mobilesearch.naction;

import cn.lcy.mobilesearch.es.api.model.DataSet;
import cn.lcy.mobilesearch.es.api.service.APIDataSetServiceI;
import cn.lcy.mobilesearch.es.api.service.APIDataSetServiceImpl;
import org.apache.struts2.convention.annotation.*;
import org.apache.struts2.interceptor.SessionAware;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@ParentPackage("basePackage")
@Namespace("/api")
@Action(value = "dataset")
@Results({
        @Result(name = "dataset_result", location = "/api/dataset_result.jsp", type = "redirect")
})
public class DataSetAPIAction extends BaseAction implements SessionAware {

    /**
     * default serial version ID
     */
    private static final long serialVersionUID = 1L;
    private Map<String, Object> session;

    private APIDataSetServiceI apiDataSetService = APIDataSetServiceImpl.getInstance();

    private String indexName = "deepsearch";

    /**
     * 类型名称
     */
    private String typeName;

    /**
     * 字段名
     */
    private String fieldName;

    /**
     * 数据量
     */
    private String size;

    public String get() throws Exception {
        if (typeName == null || "".equals(typeName)) {
            this.writeJson("<span font-size:15px;>类型不可为空 样例:http://60.205.139.71:8080/MobileSearch/api/dataset/restaurant/name?size=1000<span>");
            throw new Exception("类型不可为空 样例:http://60.205.139.71:8080/MobileSearch/api/dataset/restaurant/name?size=1000");
        }
        if (fieldName == null || "".equals(fieldName)) {
            this.writeJson("<span font-size:15px;>字段不可为空 样例:http://60.205.139.71:8080/MobileSearch/api/dataset/restaurant/name?size=1000<span>");
            throw new Exception("字段不可为空 样例:http://60.205.139.71:8080/MobileSearch/api/dataset/restaurant/name?size=1000");
        }
        if (size == null || "".equals(size)) {
            size = String.valueOf(100);
        }

        Pattern pattern = Pattern.compile("[0-9]*");
        Matcher isNum = pattern.matcher(size);
        DataSet dataSet = new DataSet();
        if (isNum.matches() || "all".equals(size)) {
            dataSet = apiDataSetService.getDataSet(indexName, typeName, fieldName, size);
        } else {
            this.writeJson("<span font-size:15px;>size应该为数字或all 样例:http://60.205.139.71:8080/MobileSearch/api/dataset/restaurant/name?size=1000<span>");
            throw new Exception("size应该为数字或all　样例：http://60.205.139.71:8080/MobileSearch/api/dataset/restaurant/name?size=1000");
        }

        this.writeJson(dataSet);
        return "dataset_result";
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Map<String, Object> getSession() {
        return session;
    }

    public void setSession(Map<String, Object> session) {
        this.session = session;
    }
}