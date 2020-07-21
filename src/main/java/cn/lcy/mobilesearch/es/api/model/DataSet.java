package cn.lcy.mobilesearch.es.api.model;

import java.util.List;

public class DataSet {

    private long count;

    private List<String> results;

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }

    public List<String> getResults() {
        return results;
    }

    public void setResults(List<String> results) {
        this.results = results;
    }

}
