/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _template = __webpack_require__(1);

var template = _interopRequireWildcard(_template);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 分类模板
function createTempletWithCategroy() {
	var typeSet = arguments[0];
	var results = arguments[1];
	if (typeSet != null) {
		typeSet.forEach(function (typeItem) {
			if (typeItem == "Movie") {
				template.movieTemplet(results);
			} else if (typeItem == "Video") {
				template.videoTemplet(results);
			} else if (typeItem == "Music") {
				template.musicTemplet(results);
			} else if (typeItem == "Restaurant") {
				template.waimaiTemplet(results);
			} else if (typeItem == "Product") {
				template.productTemplet(results);
			} else if (typeItem == "News") {
				template.newsTemplet(results);
			} else if (typeItem == "Coupon") {
				template.couponTemplet(results);
			}
		});
	}
}

// 不分类模板
function createTempletWithOutCategroy(data) {
	var categroy = "<div class=\"categroy all\">" + "		<div class=\"search-result\">" + "			<div class=\"categroy-panel\">" + "				<div align=\"center\">" + "					<span class=\"categroy-title\">电影</span>" + "				</div>";

	var sum = "";
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i].type == "Movie") {
			++count;
			if (count == 3) {
				sum += "<div class=\"more-movie\" style=\"display:none;\">";
			}

			var imgName = "";
			var title = "";
			var scoreWidth = "0%";
			var score = "暂无评分";
			var information = "";
			var introduction = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			if (data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if (nameArr.length == 1) {
					imgName = data[i].from_app + ".png";
				} else {
					for (var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if (j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if (data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if (data[i].score != null && data[i].score != "") {
				scoreWidth = data[i].score / 5 * 100 + "%";
				score = data[i].score;
			}

			if (data[i].information != null && data[i].information != "") {
				information += "<div><span style=\"color:#666666;font-size:12px;\">" + data[i].information.split("主演")[0] + "</span></div>";
				information += "<div><span style=\"color:#666666;font-size:12px;\">" + "主演" + data[i].information.split("类型")[0].split("主演")[1] + "</span></div>";
			}

			if (data[i].introduction != null && data[i].introduction != "") {
				introduction = data[i].introduction;
			}

			if (data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}

			var item = "<div class='card-panel hoverable search-result'>" + "			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>" + "			<div class=\"card-content\">" + "				<div class=\"card-title\">" + "					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>" + "				</div>" + "				<div class=\"starrating icon-star\">" + "					<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>" + "				</div>" + "				<span style=\"color:#ffc30c;font-size:13px;\">" + score + "(豆瓣)" + "</span>" + "			</div>" + "			<div class=\"card-content\">" + information + "			</div>" + "			<div class='card-content'>" + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>" + "			</div>" + "		</div>";
			sum += item;
		}
		if (i == data.length - 1 && count >= 3) {
			sum += "<div class=\"tcdPageCode-movie\">" + "		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>" + "		<span class=\"current\">3</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>" + "		<span>...</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>" + "		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>" + "	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-movie\">" + "		<span class=\"slide-text-movie\">展开▾</span>" + "	</div>";
		}
	}
	categroy += sum;
	categroy += "	</div>" + "	</div>" + "</div>";

	$("#fulltext-search").append(categroy);

	var y = 0;
	$(".movie .categroy-panel .card-panel").each(function () {
		++y;
		if (y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});

	$(".tcdPageCode-movie").createPage({
		pageCount: Math.ceil(count / 5),
		current: 1,
		backFn: function backFn(p) {
			var z = 0;
			$(".movie .categroy-panel .card-panel").each(function () {
				++z;
				if (z >= (p - 1) * 5 + 1 && z <= 5 * p) {
					$(this).css("display", "block");
				} else {
					$(this).css("display", "none");
				}
			});
			//console.log(p);
		}
	});

	$(".slide-movie").click(function () {
		if ($(".more-movie").css("display") == "none") {
			$(".more-movie").slideDown();
			$(".slide-text-movie").text("折叠");
		} else {
			$(".more-movie").slideUp();
			$(".slide-text-movie").text("展开▾");
		}
	});
}

/* 搜索异步调用 */
function search() {
	var $searchQuery = $("#search-query"); // 用户搜索串
	var model = 0; // 保留模板 1号表示不分类
	if ($searchQuery.val().trim() == "") {
		return;
	}
	var params = {
		"source": "me",
		"searchQuery": $searchQuery.val(),
		"typeName": "",
		"lat": "",
		"lon": ""
	};
	if (typeof arguments[0] != "undefined" && arguments[0] != "") {
		$("#result-categroy-title").text(arguments[0] + ":搜索结果");
		params["typeName"] = arguments[0];
	}
	if ($("#lat").val() != "" || $("#lat").val() != null) {
		params["lat"] = $("#lat").val();
	}
	if ($("#lon").val() != "" || $("#lon").val() != null) {
		params["lon"] = $("#lon").val();
	}
	$.ajax({
		/*url: "http://localhost:8080/MobileSearch/api/search!search.action",*/
		url: "http://60.205.139.71:8080/MobileSearch/api/search!search.action",
		/*url: "http://10.27.221.107/MobileSearch/api/search!search.action",*/
		type: "GET",
		dataType: "json",
		data: params,
		success: function success(data) {
			$("#fulltext-search").empty();
			var results = data.results;
			var typeSet = new Set();

			// 如果搜索查询结果为空
			if (results.length == 0) {
				var noResults = "<span class=\"no-results\">很抱歉，我们没有查询到与\"" + $("#search-query").val() + "\"相关的结果</span>";
				$("#fulltext-search").append(noResults);
			}
			for (var x = 0; x < results.length; x++) {
				typeSet.add(results[x].type);
			}

			if (model == 0) {
				// 调用生成模板方法-分类
				createTempletWithCategroy(typeSet, results);
			} else {
				// 调用生成模板方法-不分类
				createTempletWithOutCategroy(typeSet);
			}
		},
		error: function error(errorInfo, errorType) {
			alert("无法识别搜索串");
		}
	});
}

/* 获取参数 */
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return decodeURIComponent(r[2]);
	}
	return null;
}

/* 获取地理信息 */
function getLocation() {
	if (navigator.geolocation) {
		// 百度地图API功能  
		/*var map = new BMap.Map("container");  
  var point = new BMap.Point(116.331398,39.897445);  
        map.centerAndZoom(point,12); */
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function (r) {
			if (this.getStatus() == BMAP_STATUS_SUCCESS) {
				//var mk = new BMap.Marker(r.point);
				//map.addOverlay(mk);
				//map.panTo(r.point);
				var latText = "<input id=\"lat\" type=\"hidden\" value=\"" + r.point.lat + "\"/>";
				var lonText = "<input id=\"lon\" type=\"hidden\" value=\"" + r.point.lng + "\"/>";
				$(".body-main").append(latText);
				$(".body-main").append(lonText);
			} else {
				alert('瞬间爆炸，定位失败' + this.getStatus());
			}
		}, { enableHighAccuracy: true });
	}
}

$("document").ready(function () {
	getLocation(); // 获取地理位置
	var searchQuery = GetQueryString("searchQuery");
	$(".nav-category li a").each(function () {
		$(this).click(function () {
			search($(this).attr("class").split("-")[0]);
		});
	});

	if (searchQuery != null || searchQuery != "") {
		$("#search-query").val(searchQuery);
	}
	search();
});

$("#search-query").keydown(function (e) {
	var curKey = e.which;
	if (curKey == 13) {
		/* $("#回车事件按钮控件").click(); */
		search();
		return false;
	}
});
$("#search").click(function () {
	search();
});

var params = {
	"XOffset": 2, //提示框位置横向偏移量,单位px
	"YOffset": 0, //提示框位置纵向偏移量,单位px
	"width": 350, //提示框宽度，单位px
	"fontColor": "black", //提示框文字颜色
	"fontColorHI": "black", //提示框高亮选择时文字颜色
	"fontSize": "13px", //文字大小
	"fontFamily": "sans-serif", //文字字体
	"borderColor": "#757373", //提示框的边框颜色
	"bgcolorHI": "#b0aeae", //提示框高亮选择的颜色
	"sugSubmit": false //选中提示框中词条时是否提交表单
};

function confirmCallback() {}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.movieTemplet = movieTemplet;
exports.videoTemplet = videoTemplet;
exports.musicTemplet = musicTemplet;
exports.waimaiTemplet = waimaiTemplet;
exports.productTemplet = productTemplet;
exports.newsTemplet = newsTemplet;
exports.couponTemplet = couponTemplet;


/* 电影模板 */
function movieTemplet(data) {
	var categroy = "<div class=\"categroy movie\">" + "		<div class=\"search-result\">" + "			<div class=\"categroy-panel\">" + "				<div align=\"center\">" + "					<span class=\"categroy-title\">电影</span>" + "				</div>";

	var sum = "";
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i].type == "Movie") {
			++count;
			if (count == 3) {
				sum += "<div class=\"more-movie\" style=\"display:none;\">";
			}

			var imgName = "";
			var title = "";
			var scoreWidth = "0%";
			var score = "暂无评分";
			var information = "";
			var introduction = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			if (data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if (nameArr.length == 1) {
					imgName = data[i].from_app + ".png";
				} else {
					for (var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if (j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if (data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if (data[i].score != null && data[i].score != "") {
				scoreWidth = data[i].score / 5 * 100 + "%";
				score = data[i].score;
			}

			if (data[i].information != null && data[i].information != "") {
				information += "<div><span style=\"color:#666666;font-size:12px;\">" + data[i].information.split("主演")[0] + "</span></div>";
				information += "<div><span style=\"color:#666666;font-size:12px;\">" + "主演" + data[i].information.split("类型")[0].split("主演")[1] + "</span></div>";
			}

			if (data[i].introduction != null && data[i].introduction != "") {
				introduction = data[i].introduction;
			}

			if (data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}

			var item = "<div class='card-panel hoverable search-result'>" + "			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>" + "			<div class=\"card-content\">" + "				<div class=\"card-title\">" + "					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>" + "				</div>" + "				<div class=\"starrating icon-star\">" + "					<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>" + "				</div>" + "				<span style=\"color:#ffc30c;font-size:13px;\">" + score + "(豆瓣)" + "</span>" + "			</div>" + "			<div class=\"card-content\">" + information + "			</div>" + "			<div class='card-content'>" + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>" + "			</div>" + "		</div>";
			sum += item;
		}
		if (i == data.length - 1 && count >= 3) {
			sum += "<div class=\"tcdPageCode-movie\">" + "		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>" + "		<span class=\"current\">3</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>" + "		<span>...</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>" + "		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>" + "	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-movie\">" + "		<span class=\"slide-text-movie\">展开▾</span>" + "	</div>";
		}
	}
	categroy += sum;
	categroy += "	</div>" + "	</div>" + "</div>";

	$("#fulltext-search").append(categroy);

	var y = 0;
	$(".movie .categroy-panel .card-panel").each(function () {
		++y;
		if (y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});

	$(".tcdPageCode-movie").createPage({
		pageCount: Math.ceil(count / 5),
		current: 1,
		backFn: function backFn(p) {
			var z = 0;
			$(".movie .categroy-panel .card-panel").each(function () {
				++z;
				if (z >= (p - 1) * 5 + 1 && z <= 5 * p) {
					$(this).css("display", "block");
				} else {
					$(this).css("display", "none");
				}
			});
			//console.log(p);
		}
	});

	$(".slide-movie").click(function () {
		if ($(".more-movie").css("display") == "none") {
			$(".more-movie").slideDown();
			$(".slide-text-movie").text("折叠");
		} else {
			$(".more-movie").slideUp();
			$(".slide-text-movie").text("展开▾");
		}
	});
};

/* 视频模板 */
function videoTemplet(data) {

	var categroy = "<div class=\"categroy video\">" + "	<div class=\"search-result\">" + "		<div class=\"categroy-panel\">" + "			<div align=\"center\">" + "				<span class=\"categroy-title\">视频</span>" + "			</div>";

	var sum = "";
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i].type == "Video") {
			++count;
			if (count == 3) {
				sum += "<div class=\"more-video\" style=\"display:none;\">";
			}

			var imgName = "";
			var title = "";

			var writer = "";
			var description = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";
			if (data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if (nameArr.length == 1) {
					imgName = data[i].from_app + ".png";
				} else {
					for (var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if (j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if (data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}

			if (data[i].writer != null && data[i].writer != "") {
				writer = data[i].writer;
			}

			if (data[i].description != null && data[i].description != "") {
				description = data[i].description;
			}

			if (data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}

			var item = "<div class='card-panel hoverable search-result'>" + "			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>" + "			<div class=\"card-content\">" + "				<div class=\"card-title\">" + "					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + writer + "----" + title + "</a>" + "				</div>" + "			</div>" + "			<div class=\"card-content\">" + "				<p style=\"font-size:13px;\" class=\"summary\">" + "					<span style=\"color:#707070;\">" + description + "					</span>" + "				</p>" + "			</div>" + "			<div class='card-content'>" + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>" + "			</div>" + "		</div>";
			sum += item;
		}
		if (i == data.length - 1 && count >= 3) {
			sum += "<div class=\"tcdPageCode-video\">" + "		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>" + "		<span class=\"current\">3</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>" + "		<span>...</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>" + "		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>" + "	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-video\">" + "		<span class=\"slide-text-video\">展开▾</span>" + "	</div>";
		}
	}
	categroy += sum;
	categroy += "	</div>" + "	</div>" + "</div>";

	$("#fulltext-search").append(categroy);

	var y = 0;
	$(".video .categroy-panel .card-panel").each(function () {
		++y;
		if (y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});

	$(".tcdPageCode-video").createPage({
		pageCount: Math.ceil(count / 5),
		current: 1,
		backFn: function backFn(p) {
			var z = 0;
			$(".video .categroy-panel .card-panel").each(function () {
				++z;
				if (z >= (p - 1) * 5 + 1 && z <= 5 * p) {
					$(this).css("display", "block");
				} else {
					$(this).css("display", "none");
				}
			});
			//console.log(p);
		}
	});

	$(".slide-video").click(function () {
		if ($(".more-video").css("display") == "none") {
			$(".more-video").slideDown();
			$(".slide-text-video").text("折叠");
		} else {
			$(".more-video").slideUp();
			$(".slide-text-video").text("展开▾");
		}
	});
};

/* 音乐模板 */
function musicTemplet(data) {};

/* 外卖模板 */
function waimaiTemplet(data) {
	var categroy = "<div class=\"categroy waimai\">" + "		<div class=\"search-result\">" + " 			<div class=\"categroy-panel\">" + " 				<div align=\"center\">" + "					<span class=\"categroy-title\">外卖</span>" + " 				</div>";
	var sum = "";
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i].type == "Restaurant") {
			++count;
			if (count == 3) {
				sum += "<div class=\"more-waimai\" style=\"display:none;\">";
			}
			var imgName = "";
			var title = "";
			var scoreWidth = "0%";
			var score = "暂无评分";
			var right1 = "";
			var right2 = "";
			var desOrother = "";
			var address = "";
			var geoDistance = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";

			if (data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if (nameArr.length == 1) {
					imgName = data[i].from_app + ".png";
				} else {
					for (var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if (j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if (data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if (data[i].score != null && data[i].score != "") {
				scoreWidth = data[i].score / 5 * 100 + "%";
				score = data[i].score;
			}
			if (data[i].recent_order_num != null && data[i].recent_order_num != "") {
				right1 = " 月销量/" + data[i].recent_order_num;
			} else if (data[i].avg_price != null && data[i].avg_price != "") {
				right1 = " 人均/" + data[i].avg_price;
			}
			if (data[i].phone != null && data[i].phone != "") {
				right2 = "  联系电话:" + data[i].phone;
			} else if (data[i].city != null && data[i].city != "") {
				right2 = "  所在城市:" + data[i].city;
			}
			if (data[i].description != null && data[i].description != "" && typeof data[i].description != "undefined") {
				desOrother = data[i].description;
			} else {
				if (data[i].opening_hours != null && data[i].opening_hours != "" && typeof data[i].opening_hours != "undefined") {
					desOrother += "营业时间:" + data[i].opening_hours + "<br/>";
				}
				if (data[i].recommend_item != null && data[i].recommend_item != "" && typeof data[i].recommend_item != "undefined") {
					desOrother += "推荐:";
					for (var k = 0; k < data[i].recommend_item.length; k++) {
						desOrother += data[i].recommend_item[k] + "    ";
					}
					desOrother += "<br/>";
				}
			}
			if (data[i].address != null && data[i].address != "") {
				address = data[i].address;
			} else if (data[i].poi_address != null && data[i].poi_address != "") {
				address = data[i].poi_address;
			}
			if (data[i].geoDistance != null && data[i].geoDistance != "") {
				geoDistance = data[i].geoDistance;
			}

			if (data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}
			var item = "	<div class=\"card-panel hoverable search-result\">" + "		<div>" + "			<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">" + "		</div>" + "		<div class=\"card-content\">" + "			<div class=\"card-title\">" + "				<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>" + "			</div>" + "			<div class=\"starrating icon-star\" >" + "				<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>" + "			</div>" + "			<span style=\"font-size:13px;color:#ffc30c;\"> " + score + "</span>" + "			<span style=\"color:#707070;font-size:10px;\">" + right1 + "</span>" + "			<span style=\"color:#707070;font-size:10px;\">" + right2 + "</span>" + "		</div>" + "		<div class=\"card-content\">" + "			<p style=\"font-size:13px;\" class=\"summary\">" + "				<span style=\"color:#707070;\">" + desOrother + "				</span>" + "			</p>" + "		</div>" + "		<div class=\"card-content\">" + "			<span style=\"color:#707070;font-size:11px;\">" + address + "</span>" + "			<span style=\"color:#ff6d00;font-size:11px;\">" + "  " + geoDistance + "</span>" + "			<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>" + "		</div>" + "	</div>";
			sum += item;
		}
		if (i == data.length - 1 && count >= 3) {
			sum += "<div class=\"tcdPageCode-waimai\">" + "		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>" + "		<span class=\"current\">3</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>" + "		<span>...</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>" + "		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>" + "	</div>";

			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-waimai\">" + "		<span class=\"slide-text-waimai\">展开▾</span>" + "	</div>";
		}
	}
	categroy += sum;
	categroy += "	</div>" + "	</div>" + "</div>";
	$("#fulltext-search").append(categroy);

	var y = 0;
	$(".waimai .categroy-panel .card-panel").each(function () {
		++y;
		if (y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});

	$(".tcdPageCode-waimai").createPage({
		pageCount: Math.ceil(count / 5),
		current: 1,
		backFn: function backFn(p) {
			var z = 0;
			$(".waimai .categroy-panel .card-panel").each(function () {
				++z;
				if (z >= (p - 1) * 5 + 1 && z <= 5 * p) {
					$(this).css("display", "block");
				} else {
					$(this).css("display", "none");
				}
			});
			//console.log(p);
		}
	});

	$(".slide-waimai").click(function () {
		if ($(".more-waimai").css("display") == "none") {
			$(".more-waimai").slideDown();
			$(".slide-text-waimai").text("折叠");
		} else {
			$(".more-waimai").slideUp();
			$(".slide-text-waimai").text("展开▾");
		}
	});
};

/* 商品模板 */
function productTemplet(data) {
	var categroy = "<div class=\"categroy product\">" + "				<div class=\"search-result\">" + " 					<div class=\"categroy-panel\">" + " 						<div align=\"center\">" + "							<span class=\"categroy-title\">商品</span>" + " 						</div>";
	var sum = "";
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i].type == "Product") {
			++count;
			if (count == 3) {
				sum += "<div class=\"more-product\" style=\"display:none;\">";
			}
			var imgName = "";
			var title = "";
			var introduction = "";
			var tags = "TAGS:&nbsp;&nbsp;&nbsp;&nbsp;";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";

			if (data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if (nameArr.length == 1) {
					imgName = data[i].from_app + ".png";
				} else {
					for (var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if (j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if (data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if (data[i].introduction != null && data[i].introduction != "") {
				for (var k = 0; k < data[i].introduction.length; k++) {
					if (k < 6) {
						introduction += data[i].introduction[k] + "<br/>";
					}
				}
			}
			if (data[i].tags != null && data[i].tags != "") {
				for (var l = 0; l < data[i].tags.length; l++) {
					tags += data[i].tags[l].replace(/\s+/g, "") + "&nbsp;&nbsp;&nbsp;&nbsp;";
				}
			}
			if (data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}
			var item = "<div class=\"card-panel hoverable search-result\">" + "			<div>" + "				<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">" + "			</div>" + "			<div class=\"card-content\">" + "				<div class=\"card-title\">" + "					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>" + "				</div>" + "			</div>" + "			<div class=\"card-content\">" + "				<div>" + "					<span style=\"color:#666666;font-size:12px;\">" + introduction + "</span>" + "				</div>" + "			</div>" + "			<div class=\"card-content\">" + "				<div>" + "					<span style=\"color:#ff6d00;font-size:10px;\">" + tags + "</span>" + "				</div>" + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>" + "			</div>" + "		</div>";
			sum += item;
		}
		if (i == data.length - 1 && count >= 3) {
			sum += "<div class=\"tcdPageCode-product\">" + "		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>" + "		<span class=\"current\">3</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>" + "		<span>...</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>" + "		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>" + "	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-product\">" + "		<span class=\"slide-text-product\">展开▾</span>" + "	</div>";
		}
	}
	categroy += sum;
	categroy += "	</div>" + "	</div>" + "</div>";
	$("#fulltext-search").append(categroy);

	var y = 0;
	$(".product .categroy-panel .card-panel").each(function () {
		++y;
		if (y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});

	$(".tcdPageCode-product").createPage({
		pageCount: Math.ceil(count / 5),
		current: 1,
		backFn: function backFn(p) {
			var z = 0;
			$(".product .categroy-panel .card-panel").each(function () {
				++z;
				if (z >= (p - 1) * 5 + 1 && z <= 5 * p) {
					$(this).css("display", "block");
				} else {
					$(this).css("display", "none");
				}
			});
			//console.log(p);
		}
	});

	$(".slide-product").click(function () {
		if ($(".more-product").css("display") == "none") {
			$(".more-product").slideDown();
			$(".slide-text-product").text("折叠");
		} else {
			$(".more-product").slideUp();
			$(".slide-text-product").text("展开▾");
		}
	});
};

/* 新闻模板 */
function newsTemplet(data) {
	var categroy = "<div class=\"categroy news\">" + "				<div class=\"search-result\">" + "					<div class=\"categroy-panel\">" + "						<div align=\"center\">" + "							<span class=\"categroy-title\">新闻</span>" + "						</div>";

	var sum = "";
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i].type == "News") {
			++count;
			if (count == 3) {
				sum += "<div class=\"more-news\" style=\"display:none;\">";
			}
			var imgName = "";
			var title = "";
			var content = "";
			var writer = "";
			var time = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";

			if (data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if (nameArr.length == 1) {
					imgName = data[i].from_app + ".png";
				} else {
					for (var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if (j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if (data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if (data[i].content != null && data[i].content != "") {
				content = data[i].content.length <= 60 ? data[i].content : data[i].content.substr(0, 60) + "....";
			}
			if (data[i].writer != null && data[i].writer != "") {
				writer = data[i].writer;
			}
			if (data[i].time != null && data[i].time != "") {
				time = data[i].time;
			}
			if (data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}

			var item = "<div class='card-panel hoverable search-result'>" + "			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>" + "			<div class=\"card-content\">" + "				<div class=\"card-title\">" + "					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>" + "				</div>" + "			</div>" + "			<div class=\"card-content\">" + "				<p style=\"font-size:13px;\" class=\"summary\">" + "					<span style=\"color:#707070;\">" + content + "					</span>" + "				</p>" + "			</div>" + "			<div class='card-content'>" + "				<span style=\"color:#039be5;font-size:11px;\">" + writer + "   " + time + "</span>" + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>" + "			</div>" + "		</div>";
			sum += item;
		}
		if (i == data.length - 1 && count >= 3) {
			sum += "<div class=\"tcdPageCode-news\">" + "		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>" + "		<span class=\"current\">3</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>" + "		<span>...</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>" + "		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>" + "	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-news\">" + "		<span class=\"slide-text-news\">展开▾</span>" + "	</div>";
		}
	}
	categroy += sum;
	categroy += "	</div>" + "	</div>" + "</div>";

	$("#fulltext-search").append(categroy);

	var y = 0;
	$(".news .categroy-panel .card-panel").each(function () {
		++y;
		if (y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});

	$(".tcdPageCode-news").createPage({
		pageCount: Math.ceil(count / 5),
		current: 1,
		backFn: function backFn(p) {
			var z = 0;
			$(".news .categroy-panel .card-panel").each(function () {
				++z;
				if (z >= (p - 1) * 5 + 1 && z <= 5 * p) {
					$(this).css("display", "block");
				} else {
					$(this).css("display", "none");
				}
			});
			//console.log(p);
		}
	});

	$(".slide-news").click(function () {
		if ($(".more-news").css("display") == "none") {
			$(".more-news").slideDown();
			$(".slide-text-news").text("折叠");
		} else {
			$(".more-news").slideUp();
			$(".slide-text-news").text("展开▾");
		}
	});
};

/* 团购模板 */
function couponTemplet(data) {
	var categroy = "<div class=\"categroy coupon\">" + "				<div class=\"search-result\">" + " 					<div class=\"categroy-panel\">" + " 						<div align=\"center\">" + "							<span class=\"categroy-title\">团购</span>" + " 						</div>";
	var sum = "";
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i].type == "Coupon") {
			++count;
			if (count == 3) {
				sum += "<div class=\"more-coupon\" style=\"display:none;\">";
			}
			var imgName = "";
			var title = "";
			var scoreWidth = "0%";
			var score = "暂无评分";
			var right1 = "";
			var right2 = "";
			var desOrother = "";
			var address = "";
			var geoDistance = "";
			var jumpUrl = "searchAction!jump.action?url=";
			var url = "";

			if (data[i].from_app != null && data[i].from_app != "") {
				var nameArr = data[i].from_app.split("_");
				if (nameArr.length == 1) {
					imgName = data[i].from_app + ".png";
				} else {
					for (var j = 1; j < nameArr.length; j++) {
						imgName += nameArr[j] + ".";
						if (j == nameArr.length - 1) {
							imgName += "png";
						}
					}
				}
			}
			if (data[i].highLightTitle != null && data[i].highLightTitle != "") {
				title = data[i].highLightTitle;
			}
			if (data[i].score != null && data[i].score != "") {
				scoreWidth = data[i].score / 5 * 100 + "%";
				score = data[i].score;
			}
			if (data[i].retail_price != null && data[i].retail_price != "") {
				right1 = "  零售价:" + data[i].retail_price;
			} else if (data[i].sale_count != null && data[i].sale_count != "") {
				right1 = "　　已销售" + data[i].sale_count;
			}
			if (data[i].price != null && data[i].price != "") {
				right2 = "  团购价:" + data[i].price;
			} else if (data[i].city != null && data[i].city != "") {
				right2 = "  所在城市:" + data[i].city;
			}
			if (data[i].deal_details != null && data[i].deal_details != "" && typeof data[i].deal_details != "undefined") {
				desOrother = data[i].deal_details.length <= 60 ? data[i].deal_details : data[i].deal_details.substr(0, 60) + "....";
			}
			if (data[i].poi_info.poi_address != null && data[i].poi_info.poi_address != "") {
				address = data[i].poi_info.poi_address;
			} else if (data[i].poi_info.poi_name != null && data[i].poi_info.poi_name != "") {
				address = data[i].poi_info.poi_name;
			}
			if (data[i].geoDistance != null && data[i].geoDistance != "") {
				geoDistance = data[i].geoDistance;
			}

			if (data[i].webUrl != null && data[i].webUrl != "") {
				url = data[i].webUrl;
			}
			var item = "	<div class=\"card-panel hoverable search-result\">" + "		<div>" + "			<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">" + "		</div>" + "		<div class=\"card-content\">" + "			<div class=\"card-title\">" + "				<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>" + "			</div>" + "			<div class=\"starrating icon-star\" >" + "				<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>" + "			</div>" + "			<span style=\"font-size:13px;color:#ffc30c;\"> " + score + "</span>" + "			<span style=\"color:#707070;font-size:10px;\">" + right1 + "</span>" + "			<span style=\"color:#707070;font-size:10px;\">" + right2 + "</span>" + "		</div>" + "		<div class=\"card-content\">" + "			<p style=\"font-size:13px;\" class=\"summary\">" + "				<span style=\"color:#707070;\">" + desOrother + "				</span>" + "			</p>" + "		</div>" + "		<div class=\"card-content\">" + "			<span style=\"color:#707070;font-size:11px;\">" + address + "</span>" + "			<span style=\"color:#ff6d00;font-size:11px;\">" + "  " + geoDistance + "</span>" + "			<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>" + "		</div>" + "	</div>";
			sum += item;
		}
		if (i == data.length - 1 && count >= 3) {
			sum += "<div class=\"tcdPageCode-coupon\">" + "		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>" + "		<span class=\"current\">3</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>" + "		<span>...</span>" + "		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>" + "		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>" + "	</div>";
			sum += "</div>"; // class="more"的结束
			sum += "<div class=\"slide-coupon\">" + "		<span class=\"slide-text-coupon\">展开▾</span>" + "	</div>";
		}
	}
	categroy += sum;
	categroy += "	</div>" + "	</div>" + "</div>";
	$("#fulltext-search").append(categroy);

	var y = 0;
	$(".coupon .categroy-panel .card-panel").each(function () {
		++y;
		if (y >= 1 && y <= 5) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});

	$(".tcdPageCode-coupon").createPage({
		pageCount: Math.ceil(count / 5),
		current: 1,
		backFn: function backFn(p) {
			var z = 0;
			$(".coupon .categroy-panel .card-panel").each(function () {
				++z;
				if (z >= (p - 1) * 5 + 1 && z <= 5 * p) {
					$(this).css("display", "block");
				} else {
					$(this).css("display", "none");
				}
			});
			//console.log(p);
		}
	});

	$(".slide-coupon").click(function () {
		if ($(".more-coupon").css("display") == "none") {
			$(".more-coupon").slideDown();
			$(".slide-text-coupon").text("折叠");
		} else {
			$(".more-coupon").slideUp();
			$(".slide-text-coupon").text("展开▾");
		}
	});
};

/* 知识模板 */

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM1YTk0OGM0M2QxNDg5ODkxMTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RlbXBsYXRlL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbInRlbXBsYXRlIiwiY3JlYXRlVGVtcGxldFdpdGhDYXRlZ3JveSIsInR5cGVTZXQiLCJhcmd1bWVudHMiLCJyZXN1bHRzIiwiZm9yRWFjaCIsInR5cGVJdGVtIiwibW92aWVUZW1wbGV0IiwidmlkZW9UZW1wbGV0IiwibXVzaWNUZW1wbGV0Iiwid2FpbWFpVGVtcGxldCIsInByb2R1Y3RUZW1wbGV0IiwibmV3c1RlbXBsZXQiLCJjb3Vwb25UZW1wbGV0IiwiY3JlYXRlVGVtcGxldFdpdGhPdXRDYXRlZ3JveSIsImRhdGEiLCJjYXRlZ3JveSIsInN1bSIsImNvdW50IiwiaSIsImxlbmd0aCIsInR5cGUiLCJpbWdOYW1lIiwidGl0bGUiLCJzY29yZVdpZHRoIiwic2NvcmUiLCJpbmZvcm1hdGlvbiIsImludHJvZHVjdGlvbiIsImp1bXBVcmwiLCJ1cmwiLCJmcm9tX2FwcCIsIm5hbWVBcnIiLCJzcGxpdCIsImoiLCJoaWdoTGlnaHRUaXRsZSIsIndlYlVybCIsIml0ZW0iLCIkIiwiYXBwZW5kIiwieSIsImVhY2giLCJjc3MiLCJjcmVhdGVQYWdlIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJjdXJyZW50IiwiYmFja0ZuIiwicCIsInoiLCJjbGljayIsInNsaWRlRG93biIsInRleHQiLCJzbGlkZVVwIiwic2VhcmNoIiwiJHNlYXJjaFF1ZXJ5IiwibW9kZWwiLCJ2YWwiLCJ0cmltIiwicGFyYW1zIiwiYWpheCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImVtcHR5IiwiU2V0Iiwibm9SZXN1bHRzIiwieCIsImFkZCIsImVycm9yIiwiZXJyb3JJbmZvIiwiZXJyb3JUeXBlIiwiYWxlcnQiLCJHZXRRdWVyeVN0cmluZyIsIm5hbWUiLCJyZWciLCJSZWdFeHAiLCJyIiwid2luZG93IiwibG9jYXRpb24iLCJzdWJzdHIiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsImdldExvY2F0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJCTWFwIiwiR2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJnZXRTdGF0dXMiLCJCTUFQX1NUQVRVU19TVUNDRVNTIiwibGF0VGV4dCIsInBvaW50IiwibGF0IiwibG9uVGV4dCIsImxuZyIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsInJlYWR5Iiwic2VhcmNoUXVlcnkiLCJhdHRyIiwia2V5ZG93biIsImUiLCJjdXJLZXkiLCJ3aGljaCIsImNvbmZpcm1DYWxsYmFjayIsIndyaXRlciIsImRlc2NyaXB0aW9uIiwicmlnaHQxIiwicmlnaHQyIiwiZGVzT3JvdGhlciIsImFkZHJlc3MiLCJnZW9EaXN0YW5jZSIsInJlY2VudF9vcmRlcl9udW0iLCJhdmdfcHJpY2UiLCJwaG9uZSIsImNpdHkiLCJvcGVuaW5nX2hvdXJzIiwicmVjb21tZW5kX2l0ZW0iLCJrIiwicG9pX2FkZHJlc3MiLCJ0YWdzIiwibCIsInJlcGxhY2UiLCJjb250ZW50IiwidGltZSIsInJldGFpbF9wcmljZSIsInNhbGVfY291bnQiLCJwcmljZSIsImRlYWxfZGV0YWlscyIsInBvaV9pbmZvIiwicG9pX25hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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LElBQU0sQ0FBTixHQUFRLENBQWQsSUFBb0JDLEtBQUssSUFBRUQsQ0FBOUIsRUFBaUM7QUFDaENYLE9BQUUsSUFBRixFQUFRSSxHQUFSLENBQVksU0FBWixFQUF1QixPQUF2QjtBQUNBLEtBRkQsTUFFTztBQUNOSixPQUFFLElBQUYsRUFBUUksR0FBUixDQUFZLFNBQVosRUFBdUIsTUFBdkI7QUFDQTtBQUNELElBUEQ7QUFRRztBQUNIO0FBZDRCLEVBQXBDOztBQWlCQUosR0FBRSxlQUFGLEVBQW1CYSxLQUFuQixDQUF5QixZQUFVO0FBQ2pDLE1BQUdiLEVBQUUsY0FBRixFQUFrQkksR0FBbEIsQ0FBc0IsU0FBdEIsS0FBb0MsTUFBdkMsRUFBK0M7QUFDOUNKLEtBQUUsY0FBRixFQUFrQmMsU0FBbEI7QUFDQWQsS0FBRSxvQkFBRixFQUF3QmUsSUFBeEIsQ0FBNkIsSUFBN0I7QUFDQSxHQUhELE1BR087QUFDTmYsS0FBRSxjQUFGLEVBQWtCZ0IsT0FBbEI7QUFDQWhCLEtBQUUsb0JBQUYsRUFBd0JlLElBQXhCLENBQTZCLEtBQTdCO0FBQ0E7QUFDRixFQVJEO0FBU0E7O0FBRUQsVSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMzVhOTQ4YzQzZDE0ODk4OTExNiIsIlxuaW1wb3J0ICogYXMgdGVtcGxhdGUgZnJvbSBcIi4vdGVtcGxhdGUvdGVtcGxhdGUuanNcIlxuXG4vLyDliIbnsbvmqKHmnb9cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsZXRXaXRoQ2F0ZWdyb3koKSB7XG5cdHZhciB0eXBlU2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgcmVzdWx0cyA9IGFyZ3VtZW50c1sxXTtcblx0aWYodHlwZVNldCAhPSBudWxsKSB7XG5cdFx0dHlwZVNldC5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlSXRlbSkge1xuXHQgICAgXHRpZih0eXBlSXRlbSA9PSBcIk1vdmllXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5tb3ZpZVRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlZpZGVvXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS52aWRlb1RlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIk11c2ljXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5tdXNpY1RlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlJlc3RhdXJhbnRcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLndhaW1haVRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlByb2R1Y3RcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLnByb2R1Y3RUZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJOZXdzXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5uZXdzVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiQ291cG9uXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5jb3Vwb25UZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8g5LiN5YiG57G75qih5p2/XG5mdW5jdGlvbiBjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBhbGxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPueUteW9sTwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiO1xuXHRcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiTW92aWVcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1tb3ZpZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIHNjb3JlV2lkdGggPSBcIjAlXCI7XG5cdFx0XHR2YXIgc2NvcmUgPSBcIuaaguaXoOivhOWIhlwiO1xuXHRcdFx0dmFyIGluZm9ybWF0aW9uID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlmKGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmluZm9ybWF0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBkYXRhW2ldLmluZm9ybWF0aW9uLnNwbGl0KFwi5Li75ryUXCIpWzBdICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHRcdGluZm9ybWF0aW9uICs9IFwiPGRpdj48c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgXCLkuLvmvJRcIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLnsbvlnotcIilbMF0uc3BsaXQoXCLkuLvmvJRcIilbMV0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW50cm9kdWN0aW9uID0gZGF0YVtpXS5pbnRyb2R1Y3Rpb247XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIrIHRpdGxlICtcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmZjMzBjO2ZvbnQtc2l6ZToxM3B4O1xcXCI+XCIgKyBzY29yZSArIFwiKOixhueToylcIiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1x0XHRcdFx0aW5mb3JtYXRpb25cblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLW1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtbW92aWVcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIjwvZGl2PlwiO1xuXHRcdFx0XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtbW92aWVcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5tb3ZpZSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtbW92aWVcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQgIGlmKCQoXCIubW9yZS1tb3ZpZVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0XHQgICQoXCIubW9yZS1tb3ZpZVwiKS5zbGlkZURvd24oKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LW1vdmllXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdFx0ICAkKFwiLm1vcmUtbW92aWVcIikuc2xpZGVVcCgpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0XHQgIH1cblx0fSk7XG59XG5cbi8qIOaQnOe0ouW8guatpeiwg+eUqCAqL1xuZnVuY3Rpb24gc2VhcmNoKCkge1xuXHR2YXIgJHNlYXJjaFF1ZXJ5ID0gJChcIiNzZWFyY2gtcXVlcnlcIik7XHQvLyDnlKjmiLfmkJzntKLkuLJcblx0dmFyIG1vZGVsID0gMDtcdC8vIOS/neeVmeaooeadvyAx5Y+36KGo56S65LiN5YiG57G7XG5cdGlmKCRzZWFyY2hRdWVyeS52YWwoKS50cmltKCkgPT0gXCJcIikge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgcGFyYW1zID0ge1xuXHRcdFwic291cmNlXCI6IFwibWVcIixcblx0XHRcInNlYXJjaFF1ZXJ5XCI6ICRzZWFyY2hRdWVyeS52YWwoKSxcblx0XHRcInR5cGVOYW1lXCI6IFwiXCIsXG5cdFx0XCJsYXRcIjogXCJcIixcblx0XHRcImxvblwiOiBcIlwiLFxuICAgIH07XG5cdGlmKHR5cGVvZihhcmd1bWVudHNbMF0pICE9IFwidW5kZWZpbmVkXCIgJiYgYXJndW1lbnRzWzBdICE9IFwiXCIpIHtcblx0XHQkKFwiI3Jlc3VsdC1jYXRlZ3JveS10aXRsZVwiKS50ZXh0KGFyZ3VtZW50c1swXSArIFwiOuaQnOe0oue7k+aenFwiKTtcblx0XHRwYXJhbXNbXCJ0eXBlTmFtZVwiXSA9IGFyZ3VtZW50c1swXTtcblx0fVxuXHRpZigkKFwiI2xhdFwiKS52YWwoKSAhPSBcIlwiIHx8ICQoXCIjbGF0XCIpLnZhbCgpICE9IG51bGwpIHtcblx0XHRwYXJhbXNbXCJsYXRcIl0gPSAkKFwiI2xhdFwiKS52YWwoKTtcblx0fVxuXHRpZigkKFwiI2xvblwiKS52YWwoKSAhPSBcIlwiIHx8ICQoXCIjbG9uXCIpLnZhbCgpICE9IG51bGwpIHtcblx0XHRwYXJhbXNbXCJsb25cIl0gPSAkKFwiI2xvblwiKS52YWwoKTtcblx0fVxuICAgICQuYWpheCh7XG4gICAgXHQvKnVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLCovXG4gICAgICAgIHVybDogXCJodHRwOi8vNjAuMjA1LjEzOS43MTo4MDgwL01vYmlsZVNlYXJjaC9hcGkvc2VhcmNoIXNlYXJjaC5hY3Rpb25cIixcbiAgICAgICAgLyp1cmw6IFwiaHR0cDovLzEwLjI3LjIyMS4xMDcvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLCovXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgIGRhdGFUeXBlIDogXCJqc29uXCIsXG4gICAgICAgIGRhdGEgOiBwYXJhbXMsIFxuICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5lbXB0eSgpO1xuICAgICAgICBcdHZhciByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICBcdHZhciB0eXBlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBcdFxuICAgICAgICBcdC8vIOWmguaenOaQnOe0ouafpeivoue7k+aenOS4uuepulxuICAgICAgICBcdGlmKHJlc3VsdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgXHRcdHZhciBub1Jlc3VsdHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJuby1yZXN1bHRzXFxcIj7lvojmirHmrYnvvIzmiJHku6zmsqHmnInmn6Xor6LliLDkuI5cXFwiXCIgKyAkKFwiI3NlYXJjaC1xdWVyeVwiKS52YWwoKSArIFwiXFxcIuebuOWFs+eahOe7k+aenDwvc3Bhbj5cIjtcbiAgICAgICAgXHRcdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChub1Jlc3VsdHMpO1xuICAgICAgICBcdH1cbiAgICAgICAgXHRmb3IodmFyIHggPSAwOyB4IDwgcmVzdWx0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBcdFx0dHlwZVNldC5hZGQocmVzdWx0c1t4XS50eXBlKTtcbiAgICAgICAgXHR9XG4gICAgICAgIFx0XG4gICAgICAgIFx0aWYobW9kZWzjgIA9PSAwKSB7XG4gICAgICAgIFx0XHQvLyDosIPnlKjnlJ/miJDmqKHmnb/mlrnms5Ut5YiG57G7XG4gICAgICAgIFx0XHRjcmVhdGVUZW1wbGV0V2l0aENhdGVncm95KHR5cGVTZXQsIHJlc3VsdHMpO1xuICAgICAgICBcdH0gZWxzZSB7XG4gICAgICAgIFx0XHQvLyDosIPnlKjnlJ/miJDmqKHmnb/mlrnms5Ut5LiN5YiG57G7XG4gICAgICAgIFx0XHRjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95KHR5cGVTZXQpO1xuICAgICAgICBcdH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbiAoZXJyb3JJbmZvICwgZXJyb3JUeXBlKSB7XG4gICAgICAgIFx0YWxlcnQoXCLml6Dms5Xor4bliKvmkJzntKLkuLJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyog6I635Y+W5Y+C5pWwICovXG5mdW5jdGlvbiBHZXRRdWVyeVN0cmluZyhuYW1lKSB7XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiKyBuYW1lICtcIj0oW14mXSopKCZ8JClcIik7XG4gICAgdmFyIHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgIGlmKHIgIT0gbnVsbCkge1xuICAgXHQgcmV0dXJuICBkZWNvZGVVUklDb21wb25lbnQoclsyXSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKiDojrflj5blnLDnkIbkv6Hmga8gKi9cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHQgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7ICBcblx0XHQgLy8g55m+5bqm5Zyw5Zu+QVBJ5Yqf6IO9ICBcblx0XHQgLyp2YXIgbWFwID0gbmV3IEJNYXAuTWFwKFwiY29udGFpbmVyXCIpOyAgXG5cdFx0IHZhciBwb2ludCA9IG5ldyBCTWFwLlBvaW50KDExNi4zMzEzOTgsMzkuODk3NDQ1KTsgIFxuICAgICAgICAgbWFwLmNlbnRlckFuZFpvb20ocG9pbnQsMTIpOyAqLyBcbiAgICAgICAgIHZhciBnZW9sb2NhdGlvbiA9IG5ldyBCTWFwLkdlb2xvY2F0aW9uKCk7XG4gICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgIGlmKHRoaXMuZ2V0U3RhdHVzKCkgPT0gQk1BUF9TVEFUVVNfU1VDQ0VTUykgeyAgXG4gICAgICAgICAgICAgICAgIC8vdmFyIG1rID0gbmV3IEJNYXAuTWFya2VyKHIucG9pbnQpO1xuICAgICAgICAgICAgICAgICAvL21hcC5hZGRPdmVybGF5KG1rKTtcbiAgICAgICAgICAgICAgICAgLy9tYXAucGFuVG8oci5wb2ludCk7XG4gICAgICAgICAgICAgICAgIHZhciBsYXRUZXh0ID0gXCI8aW5wdXQgaWQ9XFxcImxhdFxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwiXCIgKyByLnBvaW50LmxhdCArIFwiXFxcIi8+XCI7XG4gICAgICAgICAgICAgICAgIHZhciBsb25UZXh0ID0gXCI8aW5wdXQgaWQ9XFxcImxvblxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwiXCIgKyByLnBvaW50LmxuZyArIFwiXFxcIi8+XCI7XG4gICAgICAgICAgICAgICAgICQoXCIuYm9keS1tYWluXCIpLmFwcGVuZChsYXRUZXh0KTtcbiAgICAgICAgICAgICAgICAgJChcIi5ib2R5LW1haW5cIikuYXBwZW5kKGxvblRleHQpO1xuICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICBhbGVydCgn556s6Ze054iG54K477yM5a6a5L2N5aSx6LSlJyt0aGlzLmdldFN0YXR1cygpKTsgIFxuICAgICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICB9LHtlbmFibGVIaWdoQWNjdXJhY3k6IHRydWV9KVxuICAgICB9XG59XG5cbiQoXCJkb2N1bWVudFwiKS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdGdldExvY2F0aW9uKCk7XHQvLyDojrflj5blnLDnkIbkvY3nva5cblx0dmFyIHNlYXJjaFF1ZXJ5ID0gR2V0UXVlcnlTdHJpbmcoXCJzZWFyY2hRdWVyeVwiKTtcblx0JChcIi5uYXYtY2F0ZWdvcnkgbGkgYVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlYXJjaCgkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIi1cIilbMF0pO1x0XG5cdFx0fSk7XG5cdH0pO1xuXHRcblx0aWYoc2VhcmNoUXVlcnkgIT0gbnVsbCB8fCBzZWFyY2hRdWVyeSAhPSBcIlwiKSB7XG5cdFx0JChcIiNzZWFyY2gtcXVlcnlcIikudmFsKHNlYXJjaFF1ZXJ5KTtcblx0fVxuXHRzZWFyY2goKTtcblxufSk7XG5cbiQoXCIjc2VhcmNoLXF1ZXJ5XCIpLmtleWRvd24oZnVuY3Rpb24oZSl7XG5cdHZhciBjdXJLZXkgPSBlLndoaWNoO1xuXHRpZihjdXJLZXkgPT0gMTMpIHtcblx0XHQvKiAkKFwiI+Wbnui9puS6i+S7tuaMiemSruaOp+S7tlwiKS5jbGljaygpOyAqL1xuXHRcdHNlYXJjaCgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufSk7XG4kKFwiI3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbiAoKXtcblx0c2VhcmNoKCk7XG59KTtcblxudmFyIHBhcmFtcyA9IHtcblx0XHRcIlhPZmZzZXRcIjoyLCAvL+aPkOekuuahhuS9jee9ruaoquWQkeWBj+enu+mHjyzljZXkvY1weFxuXHRcdFwiWU9mZnNldFwiOjAsIC8v5o+Q56S65qGG5L2N572u57q15ZCR5YGP56e76YePLOWNleS9jXB4XG5cdFx0XCJ3aWR0aFwiOjM1MCwgLy/mj5DnpLrmoYblrr3luqbvvIzljZXkvY1weFxuXHRcdFwiZm9udENvbG9yXCI6XCJibGFja1wiLCAvL+aPkOekuuahhuaWh+Wtl+minOiJslxuXHRcdFwiZm9udENvbG9ySElcIjpcImJsYWNrXCIsIC8v5o+Q56S65qGG6auY5Lqu6YCJ5oup5pe25paH5a2X6aKc6ImyXG5cdFx0XCJmb250U2l6ZVwiOlwiMTNweFwiLCAvL+aWh+Wtl+Wkp+Wwj1xuXHRcdFwiZm9udEZhbWlseVwiOlwic2Fucy1zZXJpZlwiLCAvL+aWh+Wtl+Wtl+S9k1xuXHRcdFwiYm9yZGVyQ29sb3JcIjpcIiM3NTczNzNcIiwgLy/mj5DnpLrmoYbnmoTovrnmoYbpopzoibJcblx0XHRcImJnY29sb3JISVwiOlwiI2IwYWVhZVwiLCAvL+aPkOekuuahhumrmOS6rumAieaLqeeahOminOiJslxuXHRcdFwic3VnU3VibWl0XCI6ZmFsc2UgLy/pgInkuK3mj5DnpLrmoYbkuK3or43mnaHml7bmmK/lkKbmj5DkuqTooajljZVcbn07XG5cbmZ1bmN0aW9uIGNvbmZpcm1DYWxsYmFjaygpIHtcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21haW4uanMiLCJcblxuLyog55S15b2x5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gbW92aWVUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBtb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+55S15b2xPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCI7XG5cdFxuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJNb3ZpZVwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLW1vdmllXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgaW5mb3JtYXRpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5zY29yZSAhPSBudWxsICYmIGRhdGFbaV0uc2NvcmUgIT0gXCJcIikge1xuXHRcdFx0XHRzY29yZVdpZHRoID0gKGRhdGFbaV0uc2NvcmXjgIAv44CANSnjgIAqIDEwMCArIFwiJVwiO1xuXHRcdFx0XHRzY29yZSA9IGRhdGFbaV0uc2NvcmU7XG5cdFx0XHR9XG5cblxuXHRcdFx0aWYoZGF0YVtpXS5pbmZvcm1hdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gXCJcIikge1xuXHRcdFx0XHRpbmZvcm1hdGlvbiArPSBcIjxkaXY+PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM2NjY2NjY7Zm9udC1zaXplOjEycHg7XFxcIj5cIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLkuLvmvJRcIilbMF0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBcIuS4u+a8lFwiICsgZGF0YVtpXS5pbmZvcm1hdGlvbi5zcGxpdChcIuexu+Wei1wiKVswXS5zcGxpdChcIuS4u+a8lFwiKVsxXSArIFwiPC9zcGFuPjwvZGl2PlwiO1xuXHRcdFx0fVxuXG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gXCJcIikge1xuXHRcdFx0XHRpbnRyb2R1Y3Rpb24gPSBkYXRhW2ldLmludHJvZHVjdGlvbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IFwiPGRpdiBjbGFzcz0nY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj48aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIisgdGl0bGUgK1wiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJpY29uLXN0YXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIiArIHNjb3JlV2lkdGggKyBcIjtcXFwiPjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZmMzMGM7Zm9udC1zaXplOjEzcHg7XFxcIj5cIiArIHNjb3JlICsgXCIo6LGG55OjKVwiICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXHRcdFx0XHRpbmZvcm1hdGlvblxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1tb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1tb3ZpZVxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHRcdCArXCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIubW92aWUgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1tb3ZpZVwiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1tb3ZpZVwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCAgaWYoJChcIi5tb3JlLW1vdmllXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHRcdCAgJChcIi5tb3JlLW1vdmllXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHQgIH0gZWxzZSB7XG5cdFx0XHQgICQoXCIubW9yZS1tb3ZpZVwiKS5zbGlkZVVwKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC1tb3ZpZVwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn07XG5cbi8qIOinhumikeaooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpZGVvVGVtcGxldChkYXRhKSB7XG5cdFxuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IHZpZGVvXFxcIj5cIlxuXHRcdFx0XHQrXCJcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+6KeG6aKRPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiO1xuXHRcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiVmlkZW9cIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS12aWRlb1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFxuXHRcdFx0dmFyIHdyaXRlciA9IFwiXCI7XG5cdFx0XHR2YXIgZGVzY3JpcHRpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoZGF0YVtpXS53cml0ZXIgIT0gbnVsbCAmJiBkYXRhW2ldLndyaXRlciAhPSBcIlwiKSB7XG5cdFx0XHRcdHdyaXRlciA9IGRhdGFbaV0ud3JpdGVyO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmRlc2NyaXB0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGRlc2NyaXB0aW9uID0gZGF0YVtpXS5kZXNjcmlwdGlvbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IFwiPGRpdiBjbGFzcz0nY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj48aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIisgd3JpdGVyICsgXCItLS0tXCIgKyB0aXRsZSArXCI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdCsgXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb25cblx0XHRcdFx0K1wiXHRcdFx0XHRcdDwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS12aWRlb1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtdmlkZW9cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC12aWRlb1xcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0XHRcdFxuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi52aWRlbyAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLXZpZGVvXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIudmlkZW8gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLXZpZGVvXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0ICBpZigkKFwiLm1vcmUtdmlkZW9cIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0ICAkKFwiLm1vcmUtdmlkZW9cIikuc2xpZGVEb3duKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC12aWRlb1wiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHRcdCAgfSBlbHNlIHtcblx0XHRcdCAgJChcIi5tb3JlLXZpZGVvXCIpLnNsaWRlVXAoKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LXZpZGVvXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdFx0ICB9XG5cdH0pO1xufTtcblxuLyog6Z+z5LmQ5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb27jgIBtdXNpY1RlbXBsZXQoZGF0YSkge1xuXHRcbn07XG5cbi8qIOWkluWNluaooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhaW1haVRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IHdhaW1haVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIiBcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiIFx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7lpJbljZY8L3NwYW4+XCJcblx0XHRcdFx0K1wiIFx0XHRcdFx0PC9kaXY+XCI7XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQ9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiUmVzdGF1cmFudFwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLXdhaW1haVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBzY29yZVdpZHRoID0gXCIwJVwiO1xuXHRcdFx0dmFyIHNjb3JlID0gXCLmmoLml6Dor4TliIZcIjtcblx0XHRcdHZhciByaWdodDEgPSBcIlwiO1xuXHRcdFx0dmFyIHJpZ2h0MiA9IFwiXCI7XG5cdFx0XHR2YXIgZGVzT3JvdGhlciA9IFwiXCI7XG5cdFx0XHR2YXIgYWRkcmVzcyA9IFwiXCI7XG5cdFx0XHR2YXIgZ2VvRGlzdGFuY2UgPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5zY29yZSAhPSBudWxsICYmIGRhdGFbaV0uc2NvcmUgIT0gXCJcIikge1xuXHRcdFx0XHRzY29yZVdpZHRoID0gKGRhdGFbaV0uc2NvcmXjgIAv44CANSnjgIAqIDEwMCArIFwiJVwiO1xuXHRcdFx0XHRzY29yZSA9IGRhdGFbaV0uc2NvcmU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnJlY2VudF9vcmRlcl9udW0gIT0gbnVsbCAmJiBkYXRhW2ldLnJlY2VudF9vcmRlcl9udW0gIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIiDmnIjplIDph48vXCIgKyBkYXRhW2ldLnJlY2VudF9vcmRlcl9udW07XG5cdFx0XHR9IGVsc2UgaWYoZGF0YVtpXS5hdmdfcHJpY2UgIT0gbnVsbCAmJiBkYXRhW2ldLmF2Z19wcmljZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MSA9IFwiIOS6uuWdhy9cIiArIGRhdGFbaV0uYXZnX3ByaWNlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5waG9uZSAhPSBudWxsICYmIGRhdGFbaV0ucGhvbmUgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg6IGU57O755S16K+dOlwiICsgZGF0YVtpXS5waG9uZTtcblx0XHRcdH3jgIBlbHNlIGlmKGRhdGFbaV0uY2l0eSAhPSBudWxsICYmIGRhdGFbaV0uY2l0eSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MiA9IFwiICDmiYDlnKjln47luII6XCIgKyBkYXRhW2ldLmNpdHk7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmRlc2NyaXB0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLmRlc2NyaXB0aW9uKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGRlc09yb3RoZXIgPSBkYXRhW2ldLmRlc2NyaXB0aW9uO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoZGF0YVtpXS5vcGVuaW5nX2hvdXJzICE9IG51bGwgJiYgZGF0YVtpXS5vcGVuaW5nX2hvdXJzICE9IFwiXCIgJiYgdHlwZW9mKGRhdGFbaV0ub3BlbmluZ19ob3VycykgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGRlc09yb3RoZXIgKz0gXCLokKXkuJrml7bpl7Q6XCIgKyAgZGF0YVtpXS5vcGVuaW5nX2hvdXJzICsgXCI8YnIvPlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGRhdGFbaV0ucmVjb21tZW5kX2l0ZW0gIT0gbnVsbCAmJiBkYXRhW2ldLnJlY29tbWVuZF9pdGVtICE9IFwiXCIgJiYgdHlwZW9mKGRhdGFbaV0ucmVjb21tZW5kX2l0ZW0pICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRkZXNPcm90aGVyICs9IFwi5o6o6I2QOlwiO1xuXHRcdFx0XHRcdGZvcih2YXIgayA9IDA7IGsgPCBkYXRhW2ldLnJlY29tbWVuZF9pdGVtLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRkZXNPcm90aGVyICs9ICBkYXRhW2ldLnJlY29tbWVuZF9pdGVtW2tdICsgXCIgICAgXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlc09yb3RoZXIgKz0gXCI8YnIvPlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmFkZHJlc3MgIT0gbnVsbCAmJiBkYXRhW2ldLmFkZHJlc3MgIT0gXCJcIikge1xuXHRcdFx0XHRhZGRyZXNzID0gZGF0YVtpXS5hZGRyZXNzO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0ucG9pX2FkZHJlc3MgIT0gbnVsbCAmJiBkYXRhW2ldLnBvaV9hZGRyZXNzICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0ucG9pX2FkZHJlc3M7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmdlb0Rpc3RhbmNlICE9IG51bGwgJiYgZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBcIlwiKSB7XG5cdFx0XHRcdGdlb0Rpc3RhbmNlID0gZGF0YVtpXS5nZW9EaXN0YW5jZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiXHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIgKyB0aXRsZSArIFwiPC9hPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCIgPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtjb2xvcjojZmZjMzBjO1xcXCI+IFwiICsgc2NvcmUgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDEgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDIgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdFx0KyBcdFx0XHRcdFx0ZGVzT3JvdGhlclxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTFweDtcXFwiPlwiICsgYWRkcmVzcyArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiArIFwiICBcIiArIGdlb0Rpc3RhbmNlICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLXdhaW1haVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdFxuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS13YWltYWlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC13YWltYWlcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIjwvZGl2PlwiO1xuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi53YWltYWkgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS13YWltYWlcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi53YWltYWkgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLXdhaW1haVwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCAgaWYoJChcIi5tb3JlLXdhaW1haVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0XHQgICQoXCIubW9yZS13YWltYWlcIikuc2xpZGVEb3duKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC13YWltYWlcIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHQgIH0gZWxzZSB7XG5cdFx0XHQgICQoXCIubW9yZS13YWltYWlcIikuc2xpZGVVcCgpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtd2FpbWFpXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdFx0ICB9XG5cdH0pO1xufTtcblxuLyog5ZWG5ZOB5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IHByb2R1Y3RcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5ZWG5ZOBPC9zcGFuPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJQcm9kdWN0XCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtcHJvZHVjdFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIHRhZ3MgPSBcIlRBR1M6Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0Zm9yKHZhciBrID0gMDsgayA8IGRhdGFbaV0uaW50cm9kdWN0aW9uLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0aWYoayA8IDYpIHtcblx0XHRcdFx0XHRcdGludHJvZHVjdGlvbiArPSBkYXRhW2ldLmludHJvZHVjdGlvbltrXSArIFwiPGJyLz5cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0udGFncyAhPSBudWxsICYmIGRhdGFbaV0udGFncyAhPSBcIlwiKSB7XG5cdFx0XHRcdGZvcih2YXIgbCA9IDA7IGwgPCBkYXRhW2ldLnRhZ3MubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0XHR0YWdzICs9IGRhdGFbaV0udGFnc1tsXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpICsgXCImbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiPGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgaW50cm9kdWN0aW9uICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHRhZ3MgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1wcm9kdWN0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1wcm9kdWN0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtcHJvZHVjdFxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIucHJvZHVjdCAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLXByb2R1Y3RcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5wcm9kdWN0IC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1wcm9kdWN0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgaWYoJChcIi5tb3JlLXByb2R1Y3RcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdCAgJChcIi5tb3JlLXByb2R1Y3RcIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtcHJvZHVjdFwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHQgIH0gZWxzZSB7XG5cdFx0ICAkKFwiLm1vcmUtcHJvZHVjdFwiKS5zbGlkZVVwKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtcHJvZHVjdFwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59O1xuXG4vKiDmlrDpl7vmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdzVGVtcGxldChkYXRhKSB7XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgbmV3c1xcXCI+XCJcblx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5paw6Ze7PC9zcGFuPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0PC9kaXY+XCI7XG5cblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiTmV3c1wiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLW5ld3NcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgY29udGVudCA9IFwiXCI7XG5cdFx0XHR2YXIgd3JpdGVyID0gXCJcIjtcblx0XHRcdHZhciB0aW1lID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uY29udGVudCAhPSBudWxsICYmIGRhdGFbaV0uY29udGVudCAhPSBcIlwiKSB7XG5cdFx0XHRcdGNvbnRlbnQgPSBkYXRhW2ldLmNvbnRlbnQubGVuZ3RoIDw9IDYwID8gZGF0YVtpXS5jb250ZW50IDogZGF0YVtpXS5jb250ZW50LnN1YnN0cigwLCA2MCkgKyBcIi4uLi5cIjtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ud3JpdGVyICE9IG51bGwgJiYgZGF0YVtpXS53cml0ZXIgIT0gXCJcIikge1xuXHRcdFx0XHR3cml0ZXIgPSBkYXRhW2ldLndyaXRlcjtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0udGltZSAhPSBudWxsICYmIGRhdGFbaV0udGltZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpbWUgPSBkYXRhW2ldLnRpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHR2YXIgaXRlbSA9IFwiPGRpdiBjbGFzcz0nY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj48aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIiArIHRpdGxlICsgXCI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdCsgXHRcdFx0XHRcdFx0Y29udGVudFxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTFweDtcXFwiPlwiICsgd3JpdGVyICsgXCIgICBcIiArIHRpbWUgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLW5ld3NcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLW5ld3NcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1uZXdzXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIjwvZGl2PlwiO1xuXHRcdFx0XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLm5ld3MgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1uZXdzXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIubmV3cyAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XHRcblx0JChcIi5zbGlkZS1uZXdzXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgaWYoJChcIi5tb3JlLW5ld3NcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdCAgJChcIi5tb3JlLW5ld3NcIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtbmV3c1wiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHQgIH0gZWxzZSB7XG5cdFx0ICAkKFwiLm1vcmUtbmV3c1wiKS5zbGlkZVVwKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtbmV3c1wiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59O1xuXG4vKiDlm6LotK3mqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3Vwb25UZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBjb3Vwb25cXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5Zui6LStPC9zcGFuPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50PSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIkNvdXBvblwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLWNvdXBvblxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBzY29yZVdpZHRoID0gXCIwJVwiO1xuXHRcdFx0dmFyIHNjb3JlID0gXCLmmoLml6Dor4TliIZcIjtcblx0XHRcdHZhciByaWdodDEgPSBcIlwiO1xuXHRcdFx0dmFyIHJpZ2h0MiA9IFwiXCI7XG5cdFx0XHR2YXIgZGVzT3JvdGhlciA9IFwiXCI7XG5cdFx0XHR2YXIgYWRkcmVzcyA9IFwiXCI7XG5cdFx0XHR2YXIgZ2VvRGlzdGFuY2UgPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5zY29yZSAhPSBudWxsICYmIGRhdGFbaV0uc2NvcmUgIT0gXCJcIikge1xuXHRcdFx0XHRzY29yZVdpZHRoID0gKGRhdGFbaV0uc2NvcmXjgIAv44CANSnjgIAqIDEwMCArIFwiJVwiO1xuXHRcdFx0XHRzY29yZSA9IGRhdGFbaV0uc2NvcmU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnJldGFpbF9wcmljZSAhPSBudWxsICYmIGRhdGFbaV0ucmV0YWlsX3ByaWNlICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQxID0gXCIgIOmbtuWUruS7tzpcIiArIGRhdGFbaV0ucmV0YWlsX3ByaWNlO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0uc2FsZV9jb3VudCAhPSBudWxsICYmIGRhdGFbaV0uc2FsZV9jb3VudCAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MSA9IFwi44CA44CA5bey6ZSA5ZSuXCIgKyBkYXRhW2ldLnNhbGVfY291bnQ7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnByaWNlICE9IG51bGwgJiYgZGF0YVtpXS5wcmljZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MiA9IFwiICDlm6LotK3ku7c6XCIgKyBkYXRhW2ldLnByaWNlO1xuXHRcdFx0feOAgGVsc2UgaWYoZGF0YVtpXS5jaXR5ICE9IG51bGwgJiYgZGF0YVtpXS5jaXR5ICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQyID0gXCIgIOaJgOWcqOWfjuW4gjpcIiArIGRhdGFbaV0uY2l0eTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uZGVhbF9kZXRhaWxzICE9IG51bGwgJiYgZGF0YVtpXS5kZWFsX2RldGFpbHMgIT0gXCJcIiAmJiB0eXBlb2YoZGF0YVtpXS5kZWFsX2RldGFpbHMpICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0ZGVzT3JvdGhlciA9IGRhdGFbaV0uZGVhbF9kZXRhaWxzLmxlbmd0aCA8PSA2MCA/IGRhdGFbaV0uZGVhbF9kZXRhaWxzIDogZGF0YVtpXS5kZWFsX2RldGFpbHMuc3Vic3RyKDAsIDYwKSArIFwiLi4uLlwiOyBcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ucG9pX2luZm8ucG9pX2FkZHJlc3MgIT0gbnVsbCAmJiBkYXRhW2ldLnBvaV9pbmZvLnBvaV9hZGRyZXNzICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0ucG9pX2luZm8ucG9pX2FkZHJlc3M7XG5cdFx0XHR9IGVsc2UgaWYoZGF0YVtpXS5wb2lfaW5mby5wb2lfbmFtZSAhPSBudWxsICYmIGRhdGFbaV0ucG9pX2luZm8ucG9pX25hbWUgIT0gXCJcIikge1xuXHRcdFx0XHRhZGRyZXNzID0gZGF0YVtpXS5wb2lfaW5mby5wb2lfbmFtZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uZ2VvRGlzdGFuY2UgIT0gbnVsbCAmJiBkYXRhW2ldLmdlb0Rpc3RhbmNlICE9IFwiXCIpIHtcblx0XHRcdFx0Z2VvRGlzdGFuY2UgPSBkYXRhW2ldLmdlb0Rpc3RhbmNlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaXRlbSA9XCJcdDxkaXYgY2xhc3M9XFxcImNhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIiArIHRpdGxlICsgXCI8L2E+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcInN0YXJyYXRpbmcgaWNvbi1zdGFyXFxcIiA+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJpY29uLXN0YXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIiArIHNjb3JlV2lkdGggKyBcIjtcXFwiPjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O2NvbG9yOiNmZmMzMGM7XFxcIj4gXCIgKyBzY29yZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHJpZ2h0MSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHJpZ2h0MiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8cCBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7XFxcIiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO1xcXCI+XCJcblx0XHRcdFx0XHQrIFx0XHRcdFx0XHRkZXNPcm90aGVyXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L3A+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyBhZGRyZXNzICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6I2ZmNmQwMDtmb250LXNpemU6MTFweDtcXFwiPlwiICArIFwiICBcIiArIGdlb0Rpc3RhbmNlICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1jb3Vwb25cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLWNvdXBvblxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LWNvdXBvblxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHRcdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIjwvZGl2PlwiO1xuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi5jb3Vwb24gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1jb3Vwb25cIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5jb3Vwb24gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLWNvdXBvblwiKS5jbGljayhmdW5jdGlvbigpe1xuXHQgIGlmKCQoXCIubW9yZS1jb3Vwb25cIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdCAgJChcIi5tb3JlLWNvdXBvblwiKS5zbGlkZURvd24oKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1jb3Vwb25cIikudGV4dChcIuaKmOWPoFwiKTtcblx0ICB9IGVsc2Uge1xuXHRcdCAgJChcIi5tb3JlLWNvdXBvblwiKS5zbGlkZVVwKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtY291cG9uXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdCAgfVxuXHR9KTtcbn07XG5cbi8qIOefpeivhuaooeadvyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RlbXBsYXRlL3RlbXBsYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==