package cn.lcy.deepsearch.elasticsearch.demo;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SampleTest {
    
    public static void main(String[] args) throws Exception {
        Pattern pattern = Pattern.compile("[0-9]*"); 
        Matcher isNum = pattern.matcher("1000");
        if(!isNum.matches()) {
            throw new Exception("size应该为数字或all");
        } 
    }

}
