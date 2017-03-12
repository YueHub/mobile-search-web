package cn.lcy.mobilesearch.api.demo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;

public class ApiTest {
	
	public static void main(String args[]) throws IOException {
		String s = new ApiTest().readResourceFile("test.json");
		new ApiTest().apiTest(JSON.parseObject(s));
	}
	
	/**
	 * 以语义规定的格式返回规范数据
	 * @return
	 * @throws IOException 
	 */
	public JSONObject apiTest(JSONObject jsonObject) throws IOException {
	    String semType = jsonObject.get("semtype").toString();
		String semImplFileName = semType + ".json";
		String semImplContent = readResourceFile(semImplFileName);
		JSONObject semImplObject = JSON.parseObject(semImplContent).getJSONObject("semImpl");	// 语义实现文件JSON对象
		
		JSONObject documentObject = semImplObject.getJSONObject("document");
		JSONObject implObject = documentObject.getJSONObject("impl");
		JSONObject propsObject = documentObject.getJSONObject("props");
		LinkedHashMap<String, String> propsJsonMap = JSON.parseObject(propsObject.toString(), new TypeReference<LinkedHashMap<String, String>>() {});
		
		String interfaceStr = implObject.get("interface").toString();
		JSONObject sameAsObject = implObject.getJSONObject("sameAs");
		LinkedHashMap<String, String> sameAsJsonMap = JSON.parseObject(sameAsObject.toString(), new TypeReference<LinkedHashMap<String, String>>() {});
		JSONArray requiredObject = implObject.getJSONArray("required");
		
		List<String> requiredFields = new ArrayList<String>();
		List<String> apiFields = new ArrayList<String>();
		for(Object requiredField : requiredObject) {
		    requiredFields.add(requiredField.toString());
		}
		
		String semInterfaceFileName = interfaceStr + ".json";
		String semInterfaceContent = readResourceFile(semInterfaceFileName);
		JSONObject semInterfaceObject = JSON.parseObject(semInterfaceContent).getJSONObject("semInterface");
		
		JSONObject idocumentObject = semInterfaceObject.getJSONObject("document");
		JSONObject ipropsObject = idocumentObject.getJSONObject("props");
		LinkedHashMap<String, String> jsonMap = JSON.parseObject(ipropsObject.toString(), new TypeReference<LinkedHashMap<String, String>>() {});
		// 最终对外生成的接口数据
		for(Entry<String, String> props : jsonMap.entrySet()) {
		        String key = props.getKey();
				JSONObject metaPropObject = JSON.parseObject(props.getValue());
				if("true".equals(metaPropObject.get("required").toString())) {
				    apiFields.add(key);
				}
				
		}
		apiFields.addAll(requiredFields);
		
		Map<String, String> fieldAndPath = new LinkedHashMap<String, String>();
		for(String apiField : apiFields) {
		    fieldAndPath.put(apiField, apiField);
		}
		for(Entry<String, String> sameAs : sameAsJsonMap.entrySet()) {
		    fieldAndPath.put(sameAs.getKey(), sameAs.getValue());
		}
		for(Entry<String, String> prop : propsJsonMap.entrySet()) {
		    String path = JSON.parseObject(prop.getValue()).get("path").toString();
		    fieldAndPath.put(prop.getKey(), path);
		}
		
		JSONObject resultJsonObject = new JSONObject();
		System.out.println("对外规范化的接口数据");
		for(Entry<String, String> fieldPath : fieldAndPath.entrySet()) {
		    String[] paths = fieldPath.getValue().split("\\.");
		    String value = null;
		    JSONObject tempJSONObject = null;
		    if(paths.length == 1) {
		        value = paths[0];
		    } else if(paths.length > 1) {
		        tempJSONObject = jsonObject.getJSONObject(paths[0]);
		        for (int i = 1; i < paths.length - 1; i++) {
	                tempJSONObject = tempJSONObject.getJSONObject(paths[i]);
	            }
		        value = tempJSONObject.get(paths[paths.length-1]).toString();
		    }
		    
		    if(paths.length > 1) {
		    }
		    resultJsonObject.put(fieldPath.getKey(), value);
		    System.out.println(fieldPath.getKey() + " : " + value);
		}
		
		return null;
	}
	
	/**
	 * 读取资源文件
	 * @param fileName
	 * @return
	 * @throws IOException
	 */
	public String readResourceFile(String fileName) throws IOException {
		InputStream fis = ApiTest.class.getClassLoader().getResourceAsStream(fileName);
		InputStreamReader isr = new InputStreamReader(fis);
		BufferedReader br = new BufferedReader(isr);
		String line = null;
		StringBuffer sb = new StringBuffer();
		while ((line = br.readLine()) != null) {
			sb.append(line);
		}
		br.close();
		return sb.toString();
	}

}
