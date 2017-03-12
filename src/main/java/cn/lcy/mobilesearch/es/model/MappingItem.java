package cn.lcy.mobilesearch.es.model;

import java.util.Map;

public class MappingItem {

	private String fieldName;
	
	// TODO 枚举
	private Map<String, String> setting;

	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public Map<String, String> getSetting() {
		return setting;
	}

	public void setSetting(Map<String, String> setting) {
		this.setting = setting;
	}
	
	// 其他设置
	
	
}
