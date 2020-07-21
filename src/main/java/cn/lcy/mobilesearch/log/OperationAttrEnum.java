package cn.lcy.mobilesearch.log;

public enum OperationAttrEnum {
    //　SOURCE
    LOCAL(0, "local"),
    OTHERS(1, "others"),

    LATITUDE(2, "latitude"),
    LONGITUDE(3, "longitude");

    private int index;
    private String name;

    private OperationAttrEnum(int index, String name) {
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
