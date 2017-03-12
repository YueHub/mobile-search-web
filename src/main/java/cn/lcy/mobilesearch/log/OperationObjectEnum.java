package cn.lcy.mobilesearch.log;

public enum OperationObjectEnum {
	// 搜索字符串
	SEARCHQUERY(0, "searchquery"),
	// 网页
	WEBPAGE(1, "webpage"),
	// APP
	APP(2, "app"),
	// 类型
	DEFAULT(3, "default"),
	MOVIE(4, "movie"),
	VIDEO(5, "video"),
	MUSIC(6, "music"),
	RESTAURANT(7, "restaurant"),
	PRODUCT(8, "product"),
	NEWS(9, "news"),
	COUPON(10, "coupon"),
	KNOWLEDGE(11, "knowledge");
	
	private int index;
	private String name;
	
	private OperationObjectEnum(int index, String name) {
		this.index = index;
		this.name = name;
	}
	
	public int getIndex() {
		return index;
	}
	
	public void setIndex(int index) {
		this.index = index;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
