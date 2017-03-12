package cn.lcy.deepsearch.elasticsearch.demo;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import cn.lcy.mobilesearch.es.util.ElemeRecommendationUtil;

public class Test {
	
	public static void main(String args[]) {
		String content = "{\n" + 
				"  \"description\": \"本店位于北大小西门（西南门）畅春园·食街，是北京最大的第一佳旗舰店，本店品类齐全，味道正宗，第一佳北大店仅此一家欢迎北大同学们前来品鉴，客服热线：62520598 本店服务宗旨：北大学生25内分钟送达，北大周边小区写字楼及中关村白领30分钟内送达，投诉电话:15510092990\",\n" + 
				"  \"opening_hours\": [\n" + 
				"    \"09:00/02:10\"\n" + 
				"  ],\n" + 
				"  \"recent_order_num\": 6459,\n" + 
				"  \"delivery_fee\": 9,\n" + 
				"  \"longitude\": 116.30496,\n" + 
				"  \"phone\": \"010-62520598\",\n" + 
				"  \"score\": 4.1,\n" + 
				"  \"address\": \"北京市海淀区颐和园路\",\n" + 
				"  \"latitude\": 39.989386,\n" + 
				"  \"name\": \"第一佳大鸡排（北大旗舰店）\"\n" + 
				"}";
		JSONObject contentObject = (JSONObject) JSON.parse(content);
		double latitude = Double.parseDouble(contentObject.get("latitude").toString());	// 纬度
		double longitude = Double.parseDouble(contentObject.get("longitude").toString());	// 纬度
		
		String geoAreaHash1 = ElemeRecommendationUtil.encode(latitude, longitude);
		System.out.println("("+ latitude + "," + longitude + ")" + "------>" + geoAreaHash1);
		System.out.println("("+ 39.989386 + "," + 116.30495 + ")" + "------>" + ElemeRecommendationUtil.encode(39.989383, 116.30491));
		System.out.println("("+ 40.989383 + "," + 116.30491 + ")" + "------>" + ElemeRecommendationUtil.encode(40.989383, 116.30491));
		System.out.println("("+ 39.989383 + "," + 120.30491 + ")" + "------>" + ElemeRecommendationUtil.encode(39.989383, 120.30491));
		System.out.println("北京:("+ 39.929986 + "," + 116.395645 + ")" + "------>" + ElemeRecommendationUtil.encode(39.929986, 116.395645));
	}

}
