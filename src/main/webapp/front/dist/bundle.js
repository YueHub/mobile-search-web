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

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 分类模板
function createTempletWithCategroy() {
	var typeSet = arguments[0];
	var results = arguments[1];
	if (typeSet != null) {
		typeSet.forEach(function (typeItem) {
			if (typeItem == "Movie") {
				_template2.default.movieTemplet(results);
			} else if (typeItem == "Video") {
				_template2.default.videoTemplet(results);
			} else if (typeItem == "Music") {
				_template2.default.musicTemplet(results);
			} else if (typeItem == "Restaurant") {
				_template2.default.waimaiTemplet(results);
			} else if (typeItem == "Product") {
				_template2.default.productTemplet(results);
			} else if (typeItem == "News") {
				_template2.default.newsTemplet(results);
			} else if (typeItem == "Coupon") {
				_template2.default.couponTemplet(results);
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
BaiduSuggestion.bind("suggests", params, confirmCallback);

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
}

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
}

/* 音乐模板 */
function musicTemplet(data) {}

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
}

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
}

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
}

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
}

/* 知识模板 */

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY2NTY2MDJmYmYzYjk3NjBhYTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RlbXBsYXRlL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVRlbXBsZXRXaXRoQ2F0ZWdyb3kiLCJ0eXBlU2V0IiwiYXJndW1lbnRzIiwicmVzdWx0cyIsImZvckVhY2giLCJ0eXBlSXRlbSIsIm1vdmllVGVtcGxldCIsInZpZGVvVGVtcGxldCIsIm11c2ljVGVtcGxldCIsIndhaW1haVRlbXBsZXQiLCJwcm9kdWN0VGVtcGxldCIsIm5ld3NUZW1wbGV0IiwiY291cG9uVGVtcGxldCIsImNyZWF0ZVRlbXBsZXRXaXRoT3V0Q2F0ZWdyb3kiLCJkYXRhIiwiY2F0ZWdyb3kiLCJzdW0iLCJjb3VudCIsImkiLCJsZW5ndGgiLCJ0eXBlIiwiaW1nTmFtZSIsInRpdGxlIiwic2NvcmVXaWR0aCIsInNjb3JlIiwiaW5mb3JtYXRpb24iLCJpbnRyb2R1Y3Rpb24iLCJqdW1wVXJsIiwidXJsIiwiZnJvbV9hcHAiLCJuYW1lQXJyIiwic3BsaXQiLCJqIiwiaGlnaExpZ2h0VGl0bGUiLCJ3ZWJVcmwiLCJpdGVtIiwiJCIsImFwcGVuZCIsInkiLCJlYWNoIiwiY3NzIiwiY3JlYXRlUGFnZSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwiY3VycmVudCIsImJhY2tGbiIsInAiLCJ6IiwiY2xpY2siLCJzbGlkZURvd24iLCJ0ZXh0Iiwic2xpZGVVcCIsInNlYXJjaCIsIiRzZWFyY2hRdWVyeSIsIm1vZGVsIiwidmFsIiwidHJpbSIsInBhcmFtcyIsImFqYXgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlbXB0eSIsIlNldCIsIm5vUmVzdWx0cyIsIngiLCJhZGQiLCJlcnJvciIsImVycm9ySW5mbyIsImVycm9yVHlwZSIsImFsZXJ0IiwiR2V0UXVlcnlTdHJpbmciLCJuYW1lIiwicmVnIiwiUmVnRXhwIiwiciIsIndpbmRvdyIsImxvY2F0aW9uIiwic3Vic3RyIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiQk1hcCIsIkdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiZ2V0U3RhdHVzIiwiQk1BUF9TVEFUVVNfU1VDQ0VTUyIsImxhdFRleHQiLCJwb2ludCIsImxhdCIsImxvblRleHQiLCJsbmciLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJyZWFkeSIsInNlYXJjaFF1ZXJ5IiwiYXR0ciIsImtleWRvd24iLCJlIiwiY3VyS2V5Iiwid2hpY2giLCJjb25maXJtQ2FsbGJhY2siLCJCYWlkdVN1Z2dlc3Rpb24iLCJiaW5kIiwid3JpdGVyIiwiZGVzY3JpcHRpb24iLCJyaWdodDEiLCJyaWdodDIiLCJkZXNPcm90aGVyIiwiYWRkcmVzcyIsImdlb0Rpc3RhbmNlIiwicmVjZW50X29yZGVyX251bSIsImF2Z19wcmljZSIsInBob25lIiwiY2l0eSIsIm9wZW5pbmdfaG91cnMiLCJyZWNvbW1lbmRfaXRlbSIsImsiLCJwb2lfYWRkcmVzcyIsInRhZ3MiLCJsIiwicmVwbGFjZSIsImNvbnRlbnQiLCJ0aW1lIiwicmV0YWlsX3ByaWNlIiwic2FsZV9jb3VudCIsInByaWNlIiwiZGVhbF9kZXRhaWxzIiwicG9pX2luZm8iLCJwb2lfbmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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QUF6QyxDQUE4QyxZQUFZO0FBQ3pELE1BQUVTLENBQUY7QUFDQSxRQUFHQSxLQUFNLENBQUNELElBQUUsQ0FBSCxJQUFNLENBQU4sR0FBUSxDQUFkLElBQW9CQyxLQUFLLElBQUVELENBQTlCLEVBQWlDO0FBQ2hDWCxPQUFFLElBQUYsRUFBUUksR0FBUixDQUFZLFNBQVosRUFBdUIsT0FBdkI7QUFDQSxLQUZELE1BRU87QUFDTkosT0FBRSxJQUFGLEVBQVFJLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE1BQXZCO0FBQ0E7QUFDRCxJQVBEO0FBUUc7QUFDSDtBQWQ0QixFQUFwQzs7QUFpQkFKLEdBQUUsZUFBRixFQUFtQmEsS0FBbkIsQ0FBeUIsWUFBVTtBQUNqQyxNQUFHYixFQUFFLGNBQUYsRUFBa0JJLEdBQWxCLENBQXNCLFNBQXRCLEtBQW9DLE1BQXZDLEVBQStDO0FBQzlDSixLQUFFLGNBQUYsRUFBa0JjLFNBQWxCO0FBQ0FkLEtBQUUsb0JBQUYsRUFBd0JlLElBQXhCLENBQTZCLElBQTdCO0FBQ0EsR0FIRCxNQUdPO0FBQ05mLEtBQUUsY0FBRixFQUFrQmdCLE9BQWxCO0FBQ0FoQixLQUFFLG9CQUFGLEVBQXdCZSxJQUF4QixDQUE2QixLQUE3QjtBQUNBO0FBQ0YsRUFSRDtBQVNBOztBQUVELFUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODY2NTY2MDJmYmYzYjk3NjBhYTMiLCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi90ZW1wbGF0ZS90ZW1wbGF0ZS5qc1wiXG5cbi8vIOWIhuexu+aooeadv1xuZnVuY3Rpb24gY3JlYXRlVGVtcGxldFdpdGhDYXRlZ3JveSgpIHtcblx0dmFyIHR5cGVTZXQgPSBhcmd1bWVudHNbMF07XG5cdHZhciByZXN1bHRzID0gYXJndW1lbnRzWzFdO1xuXHRpZih0eXBlU2V0ICE9IG51bGwpIHtcblx0XHR0eXBlU2V0LmZvckVhY2goZnVuY3Rpb24gKHR5cGVJdGVtKSB7XG5cdCAgICBcdGlmKHR5cGVJdGVtID09IFwiTW92aWVcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLm1vdmllVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiVmlkZW9cIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLnZpZGVvVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiTXVzaWNcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLm11c2ljVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiUmVzdGF1cmFudFwiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUud2FpbWFpVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiUHJvZHVjdFwiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUucHJvZHVjdFRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIk5ld3NcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLm5ld3NUZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJDb3Vwb25cIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLmNvdXBvblRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH1cblx0XHR9KTtcblx0fVxufVxuXG4vLyDkuI3liIbnsbvmqKHmnb9cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsZXRXaXRoT3V0Q2F0ZWdyb3koZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IGFsbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+55S15b2xPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCI7XG5cdFxuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJNb3ZpZVwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLW1vdmllXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgaW5mb3JtYXRpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5zY29yZSAhPSBudWxsICYmIGRhdGFbaV0uc2NvcmUgIT0gXCJcIikge1xuXHRcdFx0XHRzY29yZVdpZHRoID0gKGRhdGFbaV0uc2NvcmXjgIAv44CANSnjgIAqIDEwMCArIFwiJVwiO1xuXHRcdFx0XHRzY29yZSA9IGRhdGFbaV0uc2NvcmU7XG5cdFx0XHR9XG5cblxuXHRcdFx0aWYoZGF0YVtpXS5pbmZvcm1hdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gXCJcIikge1xuXHRcdFx0XHRpbmZvcm1hdGlvbiArPSBcIjxkaXY+PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM2NjY2NjY7Zm9udC1zaXplOjEycHg7XFxcIj5cIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLkuLvmvJRcIilbMF0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBcIuS4u+a8lFwiICsgZGF0YVtpXS5pbmZvcm1hdGlvbi5zcGxpdChcIuexu+Wei1wiKVswXS5zcGxpdChcIuS4u+a8lFwiKVsxXSArIFwiPC9zcGFuPjwvZGl2PlwiO1xuXHRcdFx0fVxuXG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gXCJcIikge1xuXHRcdFx0XHRpbnRyb2R1Y3Rpb24gPSBkYXRhW2ldLmludHJvZHVjdGlvbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IFwiPGRpdiBjbGFzcz0nY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj48aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIisgdGl0bGUgK1wiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJpY29uLXN0YXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIiArIHNjb3JlV2lkdGggKyBcIjtcXFwiPjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZmMzMGM7Zm9udC1zaXplOjEzcHg7XFxcIj5cIiArIHNjb3JlICsgXCIo6LGG55OjKVwiICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXHRcdFx0XHRpbmZvcm1hdGlvblxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1tb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1tb3ZpZVxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHRcdCArXCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIubW92aWUgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1tb3ZpZVwiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1tb3ZpZVwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCAgaWYoJChcIi5tb3JlLW1vdmllXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHRcdCAgJChcIi5tb3JlLW1vdmllXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHQgIH0gZWxzZSB7XG5cdFx0XHQgICQoXCIubW9yZS1tb3ZpZVwiKS5zbGlkZVVwKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC1tb3ZpZVwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn1cblxuLyog5pCc57Si5byC5q2l6LCD55SoICovXG5mdW5jdGlvbiBzZWFyY2goKSB7XG5cdHZhciAkc2VhcmNoUXVlcnkgPSAkKFwiI3NlYXJjaC1xdWVyeVwiKTtcdC8vIOeUqOaIt+aQnOe0ouS4slxuXHR2YXIgbW9kZWwgPSAwO1x0Ly8g5L+d55WZ5qih5p2/IDHlj7fooajnpLrkuI3liIbnsbtcblx0aWYoJHNlYXJjaFF1ZXJ5LnZhbCgpLnRyaW0oKSA9PSBcIlwiKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBwYXJhbXMgPSB7XG5cdFx0XCJzb3VyY2VcIjogXCJtZVwiLFxuXHRcdFwic2VhcmNoUXVlcnlcIjogJHNlYXJjaFF1ZXJ5LnZhbCgpLFxuXHRcdFwidHlwZU5hbWVcIjogXCJcIixcblx0XHRcImxhdFwiOiBcIlwiLFxuXHRcdFwibG9uXCI6IFwiXCIsXG4gICAgfTtcblx0aWYodHlwZW9mKGFyZ3VtZW50c1swXSkgIT0gXCJ1bmRlZmluZWRcIiAmJiBhcmd1bWVudHNbMF0gIT0gXCJcIikge1xuXHRcdCQoXCIjcmVzdWx0LWNhdGVncm95LXRpdGxlXCIpLnRleHQoYXJndW1lbnRzWzBdICsgXCI65pCc57Si57uT5p6cXCIpO1xuXHRcdHBhcmFtc1tcInR5cGVOYW1lXCJdID0gYXJndW1lbnRzWzBdO1xuXHR9XG5cdGlmKCQoXCIjbGF0XCIpLnZhbCgpICE9IFwiXCIgfHwgJChcIiNsYXRcIikudmFsKCkgIT0gbnVsbCkge1xuXHRcdHBhcmFtc1tcImxhdFwiXSA9ICQoXCIjbGF0XCIpLnZhbCgpO1xuXHR9XG5cdGlmKCQoXCIjbG9uXCIpLnZhbCgpICE9IFwiXCIgfHwgJChcIiNsb25cIikudmFsKCkgIT0gbnVsbCkge1xuXHRcdHBhcmFtc1tcImxvblwiXSA9ICQoXCIjbG9uXCIpLnZhbCgpO1xuXHR9XG4gICAgJC5hamF4KHtcbiAgICBcdC8qdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9Nb2JpbGVTZWFyY2gvYXBpL3NlYXJjaCFzZWFyY2guYWN0aW9uXCIsKi9cbiAgICAgICAgdXJsOiBcImh0dHA6Ly82MC4yMDUuMTM5LjcxOjgwODAvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLFxuICAgICAgICAvKnVybDogXCJodHRwOi8vMTAuMjcuMjIxLjEwNy9Nb2JpbGVTZWFyY2gvYXBpL3NlYXJjaCFzZWFyY2guYWN0aW9uXCIsKi9cbiAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgZGF0YVR5cGUgOiBcImpzb25cIixcbiAgICAgICAgZGF0YSA6IHBhcmFtcywgXG4gICAgICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBcdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmVtcHR5KCk7XG4gICAgICAgIFx0dmFyIHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgIFx0dmFyIHR5cGVTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIFx0XG4gICAgICAgIFx0Ly8g5aaC5p6c5pCc57Si5p+l6K+i57uT5p6c5Li656m6XG4gICAgICAgIFx0aWYocmVzdWx0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICBcdFx0dmFyIG5vUmVzdWx0cyA9IFwiPHNwYW4gY2xhc3M9XFxcIm5vLXJlc3VsdHNcXFwiPuW+iOaKseatie+8jOaIkeS7rOayoeacieafpeivouWIsOS4jlxcXCJcIiArICQoXCIjc2VhcmNoLXF1ZXJ5XCIpLnZhbCgpICsgXCJcXFwi55u45YWz55qE57uT5p6cPC9zcGFuPlwiO1xuICAgICAgICBcdFx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKG5vUmVzdWx0cyk7XG4gICAgICAgIFx0fVxuICAgICAgICBcdGZvcih2YXIgeCA9IDA7IHggPCByZXN1bHRzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIFx0XHR0eXBlU2V0LmFkZChyZXN1bHRzW3hdLnR5cGUpO1xuICAgICAgICBcdH1cbiAgICAgICAgXHRcbiAgICAgICAgXHRpZihtb2RlbOOAgD09IDApIHtcbiAgICAgICAgXHRcdC8vIOiwg+eUqOeUn+aIkOaooeadv+aWueazlS3liIbnsbtcbiAgICAgICAgXHRcdGNyZWF0ZVRlbXBsZXRXaXRoQ2F0ZWdyb3kodHlwZVNldCwgcmVzdWx0cyk7XG4gICAgICAgIFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdC8vIOiwg+eUqOeUn+aIkOaooeadv+aWueazlS3kuI3liIbnsbtcbiAgICAgICAgXHRcdGNyZWF0ZVRlbXBsZXRXaXRoT3V0Q2F0ZWdyb3kodHlwZVNldCk7XG4gICAgICAgIFx0fVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA6IGZ1bmN0aW9uIChlcnJvckluZm8gLCBlcnJvclR5cGUpIHtcbiAgICAgICAgXHRhbGVydChcIuaXoOazleivhuWIq+aQnOe0ouS4slwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKiDojrflj5blj4LmlbAgKi9cbmZ1bmN0aW9uIEdldFF1ZXJ5U3RyaW5nKG5hbWUpIHtcbiAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIrIG5hbWUgK1wiPShbXiZdKikoJnwkKVwiKTtcbiAgICB2YXIgciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLm1hdGNoKHJlZyk7XG4gICAgaWYociAhPSBudWxsKSB7XG4gICBcdCByZXR1cm4gIGRlY29kZVVSSUNvbXBvbmVudChyWzJdKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8qIOiOt+WPluWcsOeQhuS/oeaBryAqL1xuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG5cdCBpZihuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHsgIFxuXHRcdCAvLyDnmb7luqblnLDlm75BUEnlip/og70gIFxuXHRcdCAvKnZhciBtYXAgPSBuZXcgQk1hcC5NYXAoXCJjb250YWluZXJcIik7ICBcblx0XHQgdmFyIHBvaW50ID0gbmV3IEJNYXAuUG9pbnQoMTE2LjMzMTM5OCwzOS44OTc0NDUpOyAgXG4gICAgICAgICBtYXAuY2VudGVyQW5kWm9vbShwb2ludCwxMik7ICovIFxuICAgICAgICAgdmFyIGdlb2xvY2F0aW9uID0gbmV3IEJNYXAuR2VvbG9jYXRpb24oKTtcbiAgICAgICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgaWYodGhpcy5nZXRTdGF0dXMoKSA9PSBCTUFQX1NUQVRVU19TVUNDRVNTKSB7ICBcbiAgICAgICAgICAgICAgICAgLy92YXIgbWsgPSBuZXcgQk1hcC5NYXJrZXIoci5wb2ludCk7XG4gICAgICAgICAgICAgICAgIC8vbWFwLmFkZE92ZXJsYXkobWspO1xuICAgICAgICAgICAgICAgICAvL21hcC5wYW5UbyhyLnBvaW50KTtcbiAgICAgICAgICAgICAgICAgdmFyIGxhdFRleHQgPSBcIjxpbnB1dCBpZD1cXFwibGF0XFxcIiB0eXBlPVxcXCJoaWRkZW5cXFwiIHZhbHVlPVxcXCJcIiArIHIucG9pbnQubGF0ICsgXCJcXFwiLz5cIjtcbiAgICAgICAgICAgICAgICAgdmFyIGxvblRleHQgPSBcIjxpbnB1dCBpZD1cXFwibG9uXFxcIiB0eXBlPVxcXCJoaWRkZW5cXFwiIHZhbHVlPVxcXCJcIiArIHIucG9pbnQubG5nICsgXCJcXFwiLz5cIjtcbiAgICAgICAgICAgICAgICAgJChcIi5ib2R5LW1haW5cIikuYXBwZW5kKGxhdFRleHQpO1xuICAgICAgICAgICAgICAgICAkKFwiLmJvZHktbWFpblwiKS5hcHBlbmQobG9uVGV4dCk7XG4gICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgIGFsZXJ0KCfnnqzpl7TniIbngrjvvIzlrprkvY3lpLHotKUnK3RoaXMuZ2V0U3RhdHVzKCkpOyAgXG4gICAgICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgIH0se2VuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZX0pXG4gICAgIH1cbn1cblxuJChcImRvY3VtZW50XCIpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdGdldExvY2F0aW9uKCk7XHQvLyDojrflj5blnLDnkIbkvY3nva5cblx0XHRcdHZhciBzZWFyY2hRdWVyeSA9IEdldFF1ZXJ5U3RyaW5nKFwic2VhcmNoUXVlcnlcIik7XG5cdFx0ICAgXHQkKFwiLm5hdi1jYXRlZ29yeSBsaSBhXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWFyY2goJCh0aGlzKS5hdHRyKFwiY2xhc3NcIikuc3BsaXQoXCItXCIpWzBdKTtcdFxuXHRcdFx0XHR9KTtcblx0XHQgICBcdH0pO1xuXHRcdFx0XG5cdFx0XHRpZihzZWFyY2hRdWVyeSAhPSBudWxsIHx8IHNlYXJjaFF1ZXJ5ICE9IFwiXCIpIHtcblx0XHRcdCAgICQoXCIjc2VhcmNoLXF1ZXJ5XCIpLnZhbChzZWFyY2hRdWVyeSk7XG5cdFx0XHR9XG5cdFx0XHRzZWFyY2goKTtcblx0XHR9KTtcblx0XHQkKFwiI3NlYXJjaC1xdWVyeVwiKS5rZXlkb3duKGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyIGN1cktleSA9IGUud2hpY2g7XG5cdFx0XHRpZihjdXJLZXkgPT0gMTMpIHtcblx0XHRcdFx0LyogJChcIiPlm57ovabkuovku7bmjInpkq7mjqfku7ZcIikuY2xpY2soKTsgKi9cblx0XHRcdFx0c2VhcmNoKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQkKFwiI3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbiAoKXtcblx0XHRcdHNlYXJjaCgpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHZhciBwYXJhbXMgPSB7XG5cdCAgICBcdFx0XCJYT2Zmc2V0XCI6MiwgLy/mj5DnpLrmoYbkvY3nva7mqKrlkJHlgY/np7vph48s5Y2V5L2NcHhcblx0ICAgIFx0XHRcIllPZmZzZXRcIjowLCAvL+aPkOekuuahhuS9jee9rue6teWQkeWBj+enu+mHjyzljZXkvY1weFxuXHQgICAgXHRcdFwid2lkdGhcIjozNTAsIC8v5o+Q56S65qGG5a695bqm77yM5Y2V5L2NcHhcblx0ICAgIFx0XHRcImZvbnRDb2xvclwiOlwiYmxhY2tcIiwgLy/mj5DnpLrmoYbmloflrZfpopzoibJcblx0ICAgIFx0XHRcImZvbnRDb2xvckhJXCI6XCJibGFja1wiLCAvL+aPkOekuuahhumrmOS6rumAieaLqeaXtuaWh+Wtl+minOiJslxuXHQgICAgXHRcdFwiZm9udFNpemVcIjpcIjEzcHhcIiwgLy/mloflrZflpKflsI9cblx0ICAgIFx0XHRcImZvbnRGYW1pbHlcIjpcInNhbnMtc2VyaWZcIiwgLy/mloflrZflrZfkvZNcblx0ICAgIFx0XHRcImJvcmRlckNvbG9yXCI6XCIjNzU3MzczXCIsIC8v5o+Q56S65qGG55qE6L655qGG6aKc6ImyXG5cdCAgICBcdFx0XCJiZ2NvbG9ySElcIjpcIiNiMGFlYWVcIiwgLy/mj5DnpLrmoYbpq5jkuq7pgInmi6nnmoTpopzoibJcblx0ICAgIFx0XHRcInN1Z1N1Ym1pdFwiOmZhbHNlIC8v6YCJ5Lit5o+Q56S65qGG5Lit6K+N5p2h5pe25piv5ZCm5o+Q5Lqk6KGo5Y2VXG5cdCAgICB9O1xuXHRcdGZ1bmN0aW9uIGNvbmZpcm1DYWxsYmFjaygpIHtcblx0XHRcdFxuXHRcdH1cblx0ICAgXHRCYWlkdVN1Z2dlc3Rpb24uYmluZChcInN1Z2dlc3RzXCIsIHBhcmFtcywgY29uZmlybUNhbGxiYWNrKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbWFpbi5qcyIsIlxuXG4vKiDnlLXlvbHmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZpZVRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IG1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7nlLXlvbE8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIjtcblx0XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQgPSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIk1vdmllXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtbW92aWVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBzY29yZVdpZHRoID0gXCIwJVwiO1xuXHRcdFx0dmFyIHNjb3JlID0gXCLmmoLml6Dor4TliIZcIjtcblx0XHRcdHZhciBpbmZvcm1hdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIgaW50cm9kdWN0aW9uID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnNjb3JlICE9IG51bGwgJiYgZGF0YVtpXS5zY29yZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHNjb3JlV2lkdGggPSAoZGF0YVtpXS5zY29yZeOAgC/jgIA1KeOAgCogMTAwICsgXCIlXCI7XG5cdFx0XHRcdHNjb3JlID0gZGF0YVtpXS5zY29yZTtcblx0XHRcdH1cblxuXG5cdFx0XHRpZihkYXRhW2ldLmluZm9ybWF0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5pbmZvcm1hdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGluZm9ybWF0aW9uICs9IFwiPGRpdj48c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgZGF0YVtpXS5pbmZvcm1hdGlvbi5zcGxpdChcIuS4u+a8lFwiKVswXSArIFwiPC9zcGFuPjwvZGl2PlwiO1xuXHRcdFx0XHRpbmZvcm1hdGlvbiArPSBcIjxkaXY+PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM2NjY2NjY7Zm9udC1zaXplOjEycHg7XFxcIj5cIiArIFwi5Li75ryUXCIgKyBkYXRhW2ldLmluZm9ybWF0aW9uLnNwbGl0KFwi57G75Z6LXCIpWzBdLnNwbGl0KFwi5Li75ryUXCIpWzFdICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHR9XG5cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGludHJvZHVjdGlvbiA9IGRhdGFbaV0uaW50cm9kdWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpdGVtID0gXCI8ZGl2IGNsYXNzPSdjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2PjxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj48L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiKyB0aXRsZSArXCI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInN0YXJyYXRpbmcgaWNvbi1zdGFyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImljb24tc3RhclxcXCIgc3R5bGU9XFxcIndpZHRoOlwiICsgc2NvcmVXaWR0aCArIFwiO1xcXCI+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6I2ZmYzMwYztmb250LXNpemU6MTNweDtcXFwiPlwiICsgc2NvcmUgKyBcIijosYbnk6MpXCIgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcdFx0XHRcdGluZm9ybWF0aW9uXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLW1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1tb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LW1vdmllXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIlx0PC9kaXY+XCJcblx0XHRcdCArXCI8L2Rpdj5cIjtcblx0XHRcdFxuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi5tb3ZpZSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLW1vdmllXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIubW92aWUgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLW1vdmllXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0ICBpZigkKFwiLm1vcmUtbW92aWVcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0ICAkKFwiLm1vcmUtbW92aWVcIikuc2xpZGVEb3duKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC1tb3ZpZVwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHRcdCAgfSBlbHNlIHtcblx0XHRcdCAgJChcIi5tb3JlLW1vdmllXCIpLnNsaWRlVXAoKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LW1vdmllXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdFx0ICB9XG5cdH0pO1xufVxuXG4vKiDop4bpopHmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aWRlb1RlbXBsZXQoZGF0YSkge1xuXHRcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSB2aWRlb1xcXCI+XCJcblx0XHRcdFx0K1wiXHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuinhumikTwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIjtcblx0XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQgPSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIlZpZGVvXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtdmlkZW9cXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcblx0XHRcdHZhciB3cml0ZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc2NyaXB0aW9uID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGRhdGFbaV0ud3JpdGVyICE9IG51bGwgJiYgZGF0YVtpXS53cml0ZXIgIT0gXCJcIikge1xuXHRcdFx0XHR3cml0ZXIgPSBkYXRhW2ldLndyaXRlcjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uZGVzY3JpcHRpb24gIT0gXCJcIikge1xuXHRcdFx0XHRkZXNjcmlwdGlvbiA9IGRhdGFbaV0uZGVzY3JpcHRpb247XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIrIHdyaXRlciArIFwiLS0tLVwiICsgdGl0bGUgK1wiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtcXFwiIGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7XFxcIj5cIlxuXHRcdFx0XHQrIFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtdmlkZW9cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLXZpZGVvXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtdmlkZW9cXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIudmlkZW8gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS12aWRlb1wiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLnZpZGVvIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS12aWRlb1wiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCAgaWYoJChcIi5tb3JlLXZpZGVvXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHRcdCAgJChcIi5tb3JlLXZpZGVvXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtdmlkZW9cIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHQgIH0gZWxzZSB7XG5cdFx0XHQgICQoXCIubW9yZS12aWRlb1wiKS5zbGlkZVVwKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC12aWRlb1wiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn1cblxuLyog6Z+z5LmQ5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb27jgIBtdXNpY1RlbXBsZXQoZGF0YSkge1xuXHRcblx0XG5cdFxufVxuXG4vKiDlpJbljZbmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YWltYWlUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSB3YWltYWlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCIgXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIiBcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5aSW5Y2WPC9zcGFuPlwiXG5cdFx0XHRcdCtcIiBcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50PSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIlJlc3RhdXJhbnRcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS13YWltYWlcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgcmlnaHQxID0gXCJcIjtcblx0XHRcdHZhciByaWdodDIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc09yb3RoZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGFkZHJlc3MgPSBcIlwiO1xuXHRcdFx0dmFyIGdlb0Rpc3RhbmNlID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtICE9IG51bGwgJiYgZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQxID0gXCIg5pyI6ZSA6YePL1wiICsgZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0uYXZnX3ByaWNlICE9IG51bGwgJiYgZGF0YVtpXS5hdmdfcHJpY2UgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIiDkurrlnYcvXCIgKyBkYXRhW2ldLmF2Z19wcmljZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ucGhvbmUgIT0gbnVsbCAmJiBkYXRhW2ldLnBob25lICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQyID0gXCIgIOiBlOezu+eUteivnTpcIiArIGRhdGFbaV0ucGhvbmU7XG5cdFx0XHR944CAZWxzZSBpZihkYXRhW2ldLmNpdHkgIT0gbnVsbCAmJiBkYXRhW2ldLmNpdHkgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg5omA5Zyo5Z+O5biCOlwiICsgZGF0YVtpXS5jaXR5O1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uZGVzY3JpcHRpb24gIT0gXCJcIiAmJiB0eXBlb2YoZGF0YVtpXS5kZXNjcmlwdGlvbikgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRkZXNPcm90aGVyID0gZGF0YVtpXS5kZXNjcmlwdGlvbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGRhdGFbaV0ub3BlbmluZ19ob3VycyAhPSBudWxsICYmIGRhdGFbaV0ub3BlbmluZ19ob3VycyAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLm9wZW5pbmdfaG91cnMpICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRkZXNPcm90aGVyICs9IFwi6JCl5Lia5pe26Ze0OlwiICsgIGRhdGFbaV0ub3BlbmluZ19ob3VycyArIFwiPGJyLz5cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihkYXRhW2ldLnJlY29tbWVuZF9pdGVtICE9IG51bGwgJiYgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbSAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLnJlY29tbWVuZF9pdGVtKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0ZGVzT3JvdGhlciArPSBcIuaOqOiNkDpcIjtcblx0XHRcdFx0XHRmb3IodmFyIGsgPSAwOyBrIDwgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbS5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0ZGVzT3JvdGhlciArPSAgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbVtrXSArIFwiICAgIFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZXNPcm90aGVyICs9IFwiPGJyLz5cIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5hZGRyZXNzICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0uYWRkcmVzcztcblx0XHRcdH0gZWxzZSBpZihkYXRhW2ldLnBvaV9hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5wb2lfYWRkcmVzcyAhPSBcIlwiKSB7XG5cdFx0XHRcdGFkZHJlc3MgPSBkYXRhW2ldLnBvaV9hZGRyZXNzO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBudWxsICYmIGRhdGFbaV0uZ2VvRGlzdGFuY2UgIT0gXCJcIikge1xuXHRcdFx0XHRnZW9EaXN0YW5jZSA9IGRhdGFbaV0uZ2VvRGlzdGFuY2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblx0XHRcdHZhciBpdGVtID1cIlx0PGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiID5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImljb24tc3RhclxcXCIgc3R5bGU9XFxcIndpZHRoOlwiICsgc2NvcmVXaWR0aCArIFwiO1xcXCI+PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7Y29sb3I6I2ZmYzMwYztcXFwiPiBcIiArIHNjb3JlICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgcmlnaHQxICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgcmlnaHQyICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxwIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtcXFwiIGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7XFxcIj5cIlxuXHRcdFx0XHRcdCsgXHRcdFx0XHRcdGRlc09yb3RoZXJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiArIGFkZHJlc3MgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmY2ZDAwO2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyBcIiAgXCIgKyBnZW9EaXN0YW5jZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS13YWltYWlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtd2FpbWFpXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtd2FpbWFpXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIlx0PC9kaXY+XCJcblx0XHRcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIud2FpbWFpIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtd2FpbWFpXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIud2FpbWFpIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS13YWltYWlcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQgIGlmKCQoXCIubW9yZS13YWltYWlcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0ICAkKFwiLm1vcmUtd2FpbWFpXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtd2FpbWFpXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdFx0ICAkKFwiLm1vcmUtd2FpbWFpXCIpLnNsaWRlVXAoKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LXdhaW1haVwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn1cblxuLyog5ZWG5ZOB5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IHByb2R1Y3RcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5ZWG5ZOBPC9zcGFuPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJQcm9kdWN0XCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtcHJvZHVjdFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIHRhZ3MgPSBcIlRBR1M6Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0Zm9yKHZhciBrID0gMDsgayA8IGRhdGFbaV0uaW50cm9kdWN0aW9uLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0aWYoayA8IDYpIHtcblx0XHRcdFx0XHRcdGludHJvZHVjdGlvbiArPSBkYXRhW2ldLmludHJvZHVjdGlvbltrXSArIFwiPGJyLz5cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0udGFncyAhPSBudWxsICYmIGRhdGFbaV0udGFncyAhPSBcIlwiKSB7XG5cdFx0XHRcdGZvcih2YXIgbCA9IDA7IGwgPCBkYXRhW2ldLnRhZ3MubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0XHR0YWdzICs9IGRhdGFbaV0udGFnc1tsXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpICsgXCImbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiPGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgaW50cm9kdWN0aW9uICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHRhZ3MgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1wcm9kdWN0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1wcm9kdWN0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtcHJvZHVjdFxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIucHJvZHVjdCAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLXByb2R1Y3RcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5wcm9kdWN0IC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1wcm9kdWN0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgaWYoJChcIi5tb3JlLXByb2R1Y3RcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdCAgJChcIi5tb3JlLXByb2R1Y3RcIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtcHJvZHVjdFwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHQgIH0gZWxzZSB7XG5cdFx0ICAkKFwiLm1vcmUtcHJvZHVjdFwiKS5zbGlkZVVwKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtcHJvZHVjdFwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59XG5cbi8qIOaWsOmXu+aooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5ld3NUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBuZXdzXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7mlrDpl7s8L3NwYW4+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHQ8L2Rpdj5cIjtcblxuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJOZXdzXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtbmV3c1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBjb250ZW50ID0gXCJcIjtcblx0XHRcdHZhciB3cml0ZXIgPSBcIlwiO1xuXHRcdFx0dmFyIHRpbWUgPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5jb250ZW50ICE9IG51bGwgJiYgZGF0YVtpXS5jb250ZW50ICE9IFwiXCIpIHtcblx0XHRcdFx0Y29udGVudCA9IGRhdGFbaV0uY29udGVudC5sZW5ndGggPD0gNjAgPyBkYXRhW2ldLmNvbnRlbnQgOiBkYXRhW2ldLmNvbnRlbnQuc3Vic3RyKDAsIDYwKSArIFwiLi4uLlwiO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS53cml0ZXIgIT0gbnVsbCAmJiBkYXRhW2ldLndyaXRlciAhPSBcIlwiKSB7XG5cdFx0XHRcdHdyaXRlciA9IGRhdGFbaV0ud3JpdGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS50aW1lICE9IG51bGwgJiYgZGF0YVtpXS50aW1lICE9IFwiXCIpIHtcblx0XHRcdFx0dGltZSA9IGRhdGFbaV0udGltZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblx0XHRcblx0XHRcdHZhciBpdGVtID0gXCI8ZGl2IGNsYXNzPSdjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2PjxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj48L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7XFxcIiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO1xcXCI+XCJcblx0XHRcdFx0KyBcdFx0XHRcdFx0XHRjb250ZW50XG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyB3cml0ZXIgKyBcIiAgIFwiICsgdGltZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtbmV3c1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtbmV3c1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LW5ld3NcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIubmV3cyAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLW5ld3NcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5uZXdzIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcdFxuXHQkKFwiLnNsaWRlLW5ld3NcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBpZigkKFwiLm1vcmUtbmV3c1wiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0ICAkKFwiLm1vcmUtbmV3c1wiKS5zbGlkZURvd24oKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1uZXdzXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdCAgfSBlbHNlIHtcblx0XHQgICQoXCIubW9yZS1uZXdzXCIpLnNsaWRlVXAoKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1uZXdzXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdCAgfVxuXHR9KTtcbn1cblxuLyog5Zui6LSt5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gY291cG9uVGVtcGxldChkYXRhKSB7XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgY291cG9uXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHQrXCIgXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuWboui0rTwvc3Bhbj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0XHQ8L2Rpdj5cIjtcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudD0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJDb3Vwb25cIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1jb3Vwb25cXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgcmlnaHQxID0gXCJcIjtcblx0XHRcdHZhciByaWdodDIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc09yb3RoZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGFkZHJlc3MgPSBcIlwiO1xuXHRcdFx0dmFyIGdlb0Rpc3RhbmNlID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5yZXRhaWxfcHJpY2UgIT0gbnVsbCAmJiBkYXRhW2ldLnJldGFpbF9wcmljZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MSA9IFwiICDpm7bllK7ku7c6XCIgKyBkYXRhW2ldLnJldGFpbF9wcmljZTtcblx0XHRcdH0gZWxzZSBpZihkYXRhW2ldLnNhbGVfY291bnQgIT0gbnVsbCAmJiBkYXRhW2ldLnNhbGVfY291bnQgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIuOAgOOAgOW3sumUgOWUrlwiICsgZGF0YVtpXS5zYWxlX2NvdW50O1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5wcmljZSAhPSBudWxsICYmIGRhdGFbaV0ucHJpY2UgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg5Zui6LSt5Lu3OlwiICsgZGF0YVtpXS5wcmljZTtcblx0XHRcdH3jgIBlbHNlIGlmKGRhdGFbaV0uY2l0eSAhPSBudWxsICYmIGRhdGFbaV0uY2l0eSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MiA9IFwiICDmiYDlnKjln47luII6XCIgKyBkYXRhW2ldLmNpdHk7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmRlYWxfZGV0YWlscyAhPSBudWxsICYmIGRhdGFbaV0uZGVhbF9kZXRhaWxzICE9IFwiXCIgJiYgdHlwZW9mKGRhdGFbaV0uZGVhbF9kZXRhaWxzKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGRlc09yb3RoZXIgPSBkYXRhW2ldLmRlYWxfZGV0YWlscy5sZW5ndGggPD0gNjAgPyBkYXRhW2ldLmRlYWxfZGV0YWlscyA6IGRhdGFbaV0uZGVhbF9kZXRhaWxzLnN1YnN0cigwLCA2MCkgKyBcIi4uLi5cIjsgXG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnBvaV9pbmZvLnBvaV9hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5wb2lfaW5mby5wb2lfYWRkcmVzcyAhPSBcIlwiKSB7XG5cdFx0XHRcdGFkZHJlc3MgPSBkYXRhW2ldLnBvaV9pbmZvLnBvaV9hZGRyZXNzO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0ucG9pX2luZm8ucG9pX25hbWUgIT0gbnVsbCAmJiBkYXRhW2ldLnBvaV9pbmZvLnBvaV9uYW1lICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0ucG9pX2luZm8ucG9pX25hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmdlb0Rpc3RhbmNlICE9IG51bGwgJiYgZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBcIlwiKSB7XG5cdFx0XHRcdGdlb0Rpc3RhbmNlID0gZGF0YVtpXS5nZW9EaXN0YW5jZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiXHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIgKyB0aXRsZSArIFwiPC9hPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCIgPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtjb2xvcjojZmZjMzBjO1xcXCI+IFwiICsgc2NvcmUgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDEgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDIgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdFx0KyBcdFx0XHRcdFx0ZGVzT3JvdGhlclxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTFweDtcXFwiPlwiICsgYWRkcmVzcyArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiAgKyBcIiAgXCIgKyBnZW9EaXN0YW5jZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtY291cG9uXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1jb3Vwb25cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1jb3Vwb25cXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0XHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIuY291cG9uIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtY291cG9uXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIuY291cG9uIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1jb3Vwb25cIikuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBpZigkKFwiLm1vcmUtY291cG9uXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHQgICQoXCIubW9yZS1jb3Vwb25cIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtY291cG9uXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdCAgfSBlbHNlIHtcblx0XHQgICQoXCIubW9yZS1jb3Vwb25cIikuc2xpZGVVcCgpO1xuXHRcdCAgJChcIi5zbGlkZS10ZXh0LWNvdXBvblwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59XG5cbi8qIOefpeivhuaooeadvyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RlbXBsYXRlL3RlbXBsYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==