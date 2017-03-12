<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="keywords" content="移动搜索 知识搜索　本体　语义搜索　美食　团购　团购券">
	<meta name="description" content="燕云搜索是结合移动搜索和知识搜索的搜索引擎，由阿约倾情奉献">
	<meta name="renderer" content="webkit">
	<meta http-equiv="Cache-Control" content="no-siteapp">
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<title>燕云搜索</title>
	<link rel='icon' href='./imgs/logo/logo.ico' type=‘image/x-ico’ />
	<link rel="stylesheet" type="text/css" href="./css/main/main-css.css"/>
	<!-- <link rel="stylesheet" type="text/css" href="./css/logo/style.css"/> -->
	<link rel="stylesheet" type="text/css" href="./css/model-select/normalize.css" />
<!-- 	<link href='http://fonts.useso.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'> -->
	<link rel="stylesheet" media="screen, projection" href="./css/model-select/fancy-select.css">
	
</head>
<body>
	<div class="logo-main" onclick="document.location='mobile_index.jsp'">
		<%-- <div class="circle" style="float:left;">
			<h1></h1>
		</div>
		<div style="cursor:hand;">
			<span class="logo-title" style="margin-left:30px;">燕云搜索</span>
		</div> --%>
		<a href="mobile_index.jsp"><img id="logo" alt="logo" src="./imgs/logo/logo.png" /></a>
	</div>
	
	<div class="search-main">
		<div class="model-select">
			<section id="basic-usage">
				<select id="basic-usage-demo">
					<option value="1">移动搜索</option>
					<option value="2">知识搜索</option>
				</select>
			</section>
			<!-- <div id="dc"></div> -->
		</div>
		<div class="search-input mobile-line">
			<form id="search-form" action="mobile_result.jsp" target="_self">
				<input class="search-query" id="search-query" name="searchQuery" 
					placeholder=" 外卖 / 商品 / 团购券 / 新闻..."
					autocorrect="on"
					autocomplete="off" maxlength="50"
					list="suggests" x-webkit-speech="" required="required" baiduSug="1">
				<input name=ie type=hidden value=utf-8>
				<datalist id="suggests"></datalist>
				<input class="s_btn" id="search" type="submit" value="搜索" >
			</form>
		</div>
		
		<!-- 搜索导航栏 -->
		<ul class="nav-category">
			<li><a class="movie-link" href="mobile_result.jsp">全部</a></li>
			<li><a class="movie-link" href="mobile_result.jsp?typeName=movie">电影</a></li>
			<li><a class="video-link" href="mobile_result.jsp?typeName=video">视频</a></li>
			<li><a class="restaurant-link" href="mobile_result.jsp?typeName=restaurant">外卖</a></li>
			<li><a class="product-link" href="mobile_result.jsp?typeName=product">商品</a></li>
			<li><a class="news-link" href="mobile_result.jsp?typeName=news">新闻</a></li>
			<li><a class="coupon-link" href="mobile_result.jsp?typeName=coupon">团购</a></li>
		</ul>
	</div>
	
	<!-- 云图 -->
	<div class="cloud-main">
		<div id="ec">
			<canvas id="cloud" width="738px" height="350px">
				<ul id="exa">
					<li><a id="mes" target="_self" href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=美人鱼的导演是谁？">美人鱼的导演是谁?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=火影忍者的作者是谁?">火影忍者的作者是谁?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=周星驰出演过哪些电影?">周星驰出演过哪些电影?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=周星驰什么时候出生的?">周星驰什么时候出生的?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=星爷的电影?">星爷的电影?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=周杰伦和昆凌?">周杰伦和昆凌?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=美人鱼导演的出生日期?">美人鱼导演的出生日期?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=北京大学?">北京大学?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=习近平的出生日期?">习近平的出生日期?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=周杰伦是哪里的人?">周杰伦是哪里的人?</a></li>
					<li><a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=死神的作者是谁?">死神的作者是谁?</a></li>
				</ul>
			</canvas>
		</div>
	</div>
	
    <script src="./js/main/tagcanvas.min.js" type="text/javascript"></script>
	<script src="./js/libs/jquery-3.1.1.min.js"></script>
	<script src="./js/model-select/fancy-select.js"></script>
	
	<script type="text/javascript">
		$(document).ready(function() {
			$('#basic-usage-demo').fancySelect();
		});
	</script>
</body>

	<script charset="gbk" src="http://www.baidu.com/js/opensug.js"></script>  
	
	<script type="text/javascript">
	
		var sps = document.getElementById('exa').children;
		var sul = document.getElementById('suggests');
        var mc = parseInt(Math.random()*11), ce = function(){
            if(mc>=sps.length)
                mc = 0;
            var es = document.getElementById('mes');
            var qs = sps[mc].innerText||sps[mc].textContent;
            es.innerHTML = "• "+qs;
            es.setAttribute("href","/i?q="+qs);
            mc++;
        };
        ce();
        setInterval(ce,1000);
        
        // Init samples while empty ...
        for(sl = 0;sl < sps.length;sl++){
            var o = document.createElement('option');
            o.setAttribute('value',sps[sl].innerText||sps[sl].textContent);
            sul.appendChild(o);
        }
        
        window.onload = function () {
            try {
                TagCanvas.Start('cloud', null, {
                    textFont: 'Verdana, Geneva, sans-serif',
                    textColour: '#494949',
                    textHeight: 18,
                    wheelZoom: false
                });
            } catch (e) {
                document.getElementById('ec').style.display = 'none';
            }
        };
        var params = {
        		"XOffset":2, //提示框位置横向偏移量,单位px
        		"YOffset":0, //提示框位置纵向偏移量,单位px
        		"width":350, //提示框宽度，单位px
        		"fontColor":"black", //提示框文字颜色
        		"fontColorHI":"black", //提示框高亮选择时文字颜色
        		"fontSize":"13px", //文字大小
        		"fontFamily":"sans-serif", //文字字体
        		"borderColor":"#757373", //提示框的边框颜色
        		"bgcolorHI":"#b0aeae", //提示框高亮选择的颜色
        		"sugSubmit":false //选中提示框中词条时是否提交表单
        		};
        function confirmCallback(txt) {
        	alert(txt);
        }
        BaiduSuggestion.bind("suggests", params, confirmCallback);
	</script>
</html>