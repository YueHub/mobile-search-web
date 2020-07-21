package cn.lcy.mobilesearch.es.model;

import java.util.List;

public class TypeMapping {

    private String typeName;

    private List<MappingItem> mapping;

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public List<MappingItem> getMapping() {
        return mapping;
    }

    public void setMapping(List<MappingItem> mapping) {
        this.mapping = mapping;
    }

}
