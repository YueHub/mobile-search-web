package cn.lcy.deepsearch.elasticsearch.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.hankcs.hanlp.seg.common.Term;

import cn.lcy.knowledge.analysis.seg.service.WordSegmentationServiceI;
import cn.lcy.knowledge.analysis.seg.service.WordSegmentationServiceImpl;
import cn.lcy.knowledge.analysis.sem.model.PolysemantNamedEntity;
import cn.lcy.knowledge.analysis.sem.model.Word;
import cn.lcy.knowledge.analysis.sem.model.WordSegmentResult;
import cn.lcy.mobilesearch.es.search.service.ElasticSearchService;

public class SearchTest {
	
	public static void main(String[] args) {
		// 测试
		
		String question = "第一佳大鸡排";
		WordSegmentationServiceI wordSegmentationService = WordSegmentationServiceImpl.getInstance();
		// 第一步：HanLP分词
		WordSegmentResult wordSegmentResult = wordSegmentationService.wordSegmentation(question);
		List<Term> terms = wordSegmentResult.getTerms();
		List<PolysemantNamedEntity> polysemantNamedEntities = wordSegmentResult.getPolysemantEntities();
		List<Word> words = wordSegmentResult.getWords();
		System.out.println("HanLP分词的结果为:"+terms);
		
		// ES搜索
		List<String> searchTerms = new ArrayList<String>();
		for(Word word : words) {
			searchTerms.add(word.getName());
		}
		List<Map<String, Object>> jsonResults = new ElasticSearchService().searchSource("restaurant", "restaurant", searchTerms);
	}

}
