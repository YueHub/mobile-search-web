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


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _template = __webpack_require__(2);

var template = _interopRequireWildcard(_template);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	template.test();
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

	(0, _jquery2.default)("#fulltext-search").append(categroy);

	var y = 0;
	(0, _jquery2.default)(".movie .categroy-panel .card-panel").each(function () {
		++y;
		if (y >= 1 && y <= 5) {
			(0, _jquery2.default)(this).css("display", "block");
		} else {
			(0, _jquery2.default)(this).css("display", "none");
		}
	});

	(0, _jquery2.default)(".tcdPageCode-movie").createPage({
		pageCount: Math.ceil(count / 5),
		current: 1,
		backFn: function backFn(p) {
			var z = 0;
			(0, _jquery2.default)(".movie .categroy-panel .card-panel").each(function () {
				++z;
				if (z >= (p - 1) * 5 + 1 && z <= 5 * p) {
					(0, _jquery2.default)(this).css("display", "block");
				} else {
					(0, _jquery2.default)(this).css("display", "none");
				}
			});
			//console.log(p);
		}
	});

	(0, _jquery2.default)(".slide-movie").click(function () {
		if ((0, _jquery2.default)(".more-movie").css("display") == "none") {
			(0, _jquery2.default)(".more-movie").slideDown();
			(0, _jquery2.default)(".slide-text-movie").text("折叠");
		} else {
			(0, _jquery2.default)(".more-movie").slideUp();
			(0, _jquery2.default)(".slide-text-movie").text("展开▾");
		}
	});
}

/* 搜索异步调用 */
function search() {
	var $searchQuery = (0, _jquery2.default)("#search-query"); // 用户搜索串
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
		(0, _jquery2.default)("#result-categroy-title").text(arguments[0] + ":搜索结果");
		params["typeName"] = arguments[0];
	}
	if ((0, _jquery2.default)("#lat").val() != "" || (0, _jquery2.default)("#lat").val() != null) {
		params["lat"] = (0, _jquery2.default)("#lat").val();
	}
	if ((0, _jquery2.default)("#lon").val() != "" || (0, _jquery2.default)("#lon").val() != null) {
		params["lon"] = (0, _jquery2.default)("#lon").val();
	}
	_jquery2.default.ajax({
		/*url: "http://localhost:8080/MobileSearch/api/search!search.action",*/
		url: "http://60.205.139.71:8080/MobileSearch/api/search!search.action",
		/*url: "http://10.27.221.107/MobileSearch/api/search!search.action",*/
		type: "GET",
		dataType: "json",
		data: params,
		success: function success(data) {
			(0, _jquery2.default)("#fulltext-search").empty();
			var results = data.results;
			var typeSet = new Set();

			// 如果搜索查询结果为空
			if (results.length == 0) {
				var noResults = "<span class=\"no-results\">很抱歉，我们没有查询到与\"" + (0, _jquery2.default)("#search-query").val() + "\"相关的结果</span>";
				(0, _jquery2.default)("#fulltext-search").append(noResults);
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
				(0, _jquery2.default)(".body-main").append(latText);
				(0, _jquery2.default)(".body-main").append(lonText);
			} else {
				alert('瞬间爆炸，定位失败' + this.getStatus());
			}
		}, { enableHighAccuracy: true });
	}
}

(0, _jquery2.default)("document").ready(function () {
	getLocation(); // 获取地理位置
	var searchQuery = GetQueryString("searchQuery");
	(0, _jquery2.default)(".nav-category li a").each(function () {
		(0, _jquery2.default)(this).click(function () {
			search((0, _jquery2.default)(this).attr("class").split("-")[0]);
		});
	});

	if (searchQuery != null || searchQuery != "") {
		(0, _jquery2.default)("#search-query").val(searchQuery);
	}
	search();
});

(0, _jquery2.default)("#search-query").keydown(function (e) {
	var curKey = e.which;
	if (curKey == 13) {
		/* $("#回车事件按钮控件").click(); */
		search();
		return false;
	}
});
(0, _jquery2.default)("#search").click(function () {
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
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ }),
/* 2 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2U3ODI5MjBjZmUzNmYzODI5YjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LmpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy90ZW1wbGF0ZS90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImNyZWF0ZVRlbXBsZXRXaXRoQ2F0ZWdyb3kiLCJ0eXBlU2V0IiwiYXJndW1lbnRzIiwicmVzdWx0cyIsImZvckVhY2giLCJ0eXBlSXRlbSIsIm1vdmllVGVtcGxldCIsInZpZGVvVGVtcGxldCIsIm11c2ljVGVtcGxldCIsIndhaW1haVRlbXBsZXQiLCJwcm9kdWN0VGVtcGxldCIsIm5ld3NUZW1wbGV0IiwiY291cG9uVGVtcGxldCIsInRlc3QiLCJjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95IiwiZGF0YSIsImNhdGVncm95Iiwic3VtIiwiY291bnQiLCJpIiwibGVuZ3RoIiwidHlwZSIsImltZ05hbWUiLCJ0aXRsZSIsInNjb3JlV2lkdGgiLCJzY29yZSIsImluZm9ybWF0aW9uIiwiaW50cm9kdWN0aW9uIiwianVtcFVybCIsInVybCIsImZyb21fYXBwIiwibmFtZUFyciIsInNwbGl0IiwiaiIsImhpZ2hMaWdodFRpdGxlIiwid2ViVXJsIiwiaXRlbSIsImFwcGVuZCIsInkiLCJlYWNoIiwiY3NzIiwiY3JlYXRlUGFnZSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwiY3VycmVudCIsImJhY2tGbiIsInAiLCJ6IiwiY2xpY2siLCJzbGlkZURvd24iLCJ0ZXh0Iiwic2xpZGVVcCIsInNlYXJjaCIsIiRzZWFyY2hRdWVyeSIsIm1vZGVsIiwidmFsIiwidHJpbSIsInBhcmFtcyIsImFqYXgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlbXB0eSIsIlNldCIsIm5vUmVzdWx0cyIsIngiLCJhZGQiLCJlcnJvciIsImVycm9ySW5mbyIsImVycm9yVHlwZSIsImFsZXJ0IiwiR2V0UXVlcnlTdHJpbmciLCJuYW1lIiwicmVnIiwiUmVnRXhwIiwiciIsIndpbmRvdyIsImxvY2F0aW9uIiwic3Vic3RyIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiQk1hcCIsIkdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiZ2V0U3RhdHVzIiwiQk1BUF9TVEFUVVNfU1VDQ0VTUyIsImxhdFRleHQiLCJwb2ludCIsImxhdCIsImxvblRleHQiLCJsbmciLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJyZWFkeSIsInNlYXJjaFF1ZXJ5IiwiYXR0ciIsImtleWRvd24iLCJlIiwiY3VyS2V5Iiwid2hpY2giLCJjb25maXJtQ2FsbGJhY2siLCIkIiwid3JpdGVyIiwiZGVzY3JpcHRpb24iLCJyaWdodDEiLCJyaWdodDIiLCJkZXNPcm90aGVyIiwiYWRkcmVzcyIsImdlb0Rpc3RhbmNlIiwicmVjZW50X29yZGVyX251bSIsImF2Z19wcmljZSIsInBob25lIiwiY2l0eSIsIm9wZW5pbmdfaG91cnMiLCJyZWNvbW1lbmRfaXRlbSIsImsiLCJwb2lfYWRkcmVzcyIsInRhZ3MiLCJsIiwicmVwbGFjZSIsImNvbnRlbnQiLCJ0aW1lIiwicmV0YWlsX3ByaWNlIiwic2FsZV9jb3VudCIsInByaWNlIiwiZGVhbF9kZXRhaWxzIiwicG9pX2luZm8iLCJwb2lfbmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FB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QyxLQUFLQyxJQUFMLENBQVUxQixRQUFNLENBQWhCLENBRGtCO0FBRTdCMkIsV0FBUSxDQUZxQjtBQUc3QkMsVUFBTyxnQkFBU0MsQ0FBVCxFQUFXO0FBQ2pCLE9BQUlDLElBQUksQ0FBUjtBQUNBdUQsS0FBRSxxQ0FBRixFQUF5Q2hFLElBQXpDLENBQThDLFlBQVk7QUFDekQsTUFBRVMsQ0FBRjtBQUNBLFFBQUdBLEtBQU0sQ0FBQ0QsSUFBRSxDQUFILElBQU0sQ0FBTixHQUFRLENBQWQsSUFBb0JDLEtBQUssSUFBRUQsQ0FBOUIsRUFBaUM7QUFDaEN3RCxPQUFFLElBQUYsRUFBUS9ELEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE9BQXZCO0FBQ0EsS0FGRCxNQUVPO0FBQ04rRCxPQUFFLElBQUYsRUFBUS9ELEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE1BQXZCO0FBQ0E7QUFDRCxJQVBEO0FBUUc7QUFDSDtBQWQ0QixFQUFwQzs7QUFpQkErRCxHQUFFLGVBQUYsRUFBbUJ0RCxLQUFuQixDQUF5QixZQUFVO0FBQ2pDLE1BQUdzRCxFQUFFLGNBQUYsRUFBa0IvRCxHQUFsQixDQUFzQixTQUF0QixLQUFvQyxNQUF2QyxFQUErQztBQUM5QytELEtBQUUsY0FBRixFQUFrQnJELFNBQWxCO0FBQ0FxRCxLQUFFLG9CQUFGLEVBQXdCcEQsSUFBeEIsQ0FBNkIsSUFBN0I7QUFDQSxHQUhELE1BR087QUFDTm9ELEtBQUUsY0FBRixFQUFrQm5ELE9BQWxCO0FBQ0FtRCxLQUFFLG9CQUFGLEVBQXdCcEQsSUFBeEIsQ0FBNkIsS0FBN0I7QUFDQTtBQUNGLEVBUkQ7QUFTQTs7QUFFRCxVIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNlNzgyOTIwY2ZlMzZmMzgyOWIyIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0ICogYXMgdGVtcGxhdGUgZnJvbSBcIi4vdGVtcGxhdGUvdGVtcGxhdGUuanNcIjtcblxuLy8g5YiG57G75qih5p2/XG5mdW5jdGlvbiBjcmVhdGVUZW1wbGV0V2l0aENhdGVncm95KCkge1xuXHR2YXIgdHlwZVNldCA9IGFyZ3VtZW50c1swXTtcblx0dmFyIHJlc3VsdHMgPSBhcmd1bWVudHNbMV07XG5cdGlmKHR5cGVTZXQgIT0gbnVsbCkge1xuXHRcdHR5cGVTZXQuZm9yRWFjaChmdW5jdGlvbiAodHlwZUl0ZW0pIHtcblx0ICAgIFx0aWYodHlwZUl0ZW0gPT0gXCJNb3ZpZVwiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUubW92aWVUZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJWaWRlb1wiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUudmlkZW9UZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJNdXNpY1wiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUubXVzaWNUZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJSZXN0YXVyYW50XCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS53YWltYWlUZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJQcm9kdWN0XCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5wcm9kdWN0VGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiTmV3c1wiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUubmV3c1RlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIkNvdXBvblwiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUuY291cG9uVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fVxuXHRcdH0pO1xuXHR9XG5cdHRlbXBsYXRlLnRlc3QoKTtcbn1cblxuLy8g5LiN5YiG57G75qih5p2/XG5mdW5jdGlvbiBjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBhbGxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPueUteW9sTwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiO1xuXHRcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiTW92aWVcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1tb3ZpZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIHNjb3JlV2lkdGggPSBcIjAlXCI7XG5cdFx0XHR2YXIgc2NvcmUgPSBcIuaaguaXoOivhOWIhlwiO1xuXHRcdFx0dmFyIGluZm9ybWF0aW9uID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlmKGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmluZm9ybWF0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBkYXRhW2ldLmluZm9ybWF0aW9uLnNwbGl0KFwi5Li75ryUXCIpWzBdICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHRcdGluZm9ybWF0aW9uICs9IFwiPGRpdj48c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgXCLkuLvmvJRcIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLnsbvlnotcIilbMF0uc3BsaXQoXCLkuLvmvJRcIilbMV0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW50cm9kdWN0aW9uID0gZGF0YVtpXS5pbnRyb2R1Y3Rpb247XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIrIHRpdGxlICtcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmZjMzBjO2ZvbnQtc2l6ZToxM3B4O1xcXCI+XCIgKyBzY29yZSArIFwiKOixhueToylcIiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1x0XHRcdFx0aW5mb3JtYXRpb25cblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLW1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtbW92aWVcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIjwvZGl2PlwiO1xuXHRcdFx0XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtbW92aWVcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5tb3ZpZSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtbW92aWVcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQgIGlmKCQoXCIubW9yZS1tb3ZpZVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0XHQgICQoXCIubW9yZS1tb3ZpZVwiKS5zbGlkZURvd24oKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LW1vdmllXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdFx0ICAkKFwiLm1vcmUtbW92aWVcIikuc2xpZGVVcCgpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0XHQgIH1cblx0fSk7XG59XG5cbi8qIOaQnOe0ouW8guatpeiwg+eUqCAqL1xuZnVuY3Rpb24gc2VhcmNoKCkge1xuXHR2YXIgJHNlYXJjaFF1ZXJ5ID0gJChcIiNzZWFyY2gtcXVlcnlcIik7XHQvLyDnlKjmiLfmkJzntKLkuLJcblx0dmFyIG1vZGVsID0gMDtcdC8vIOS/neeVmeaooeadvyAx5Y+36KGo56S65LiN5YiG57G7XG5cdGlmKCRzZWFyY2hRdWVyeS52YWwoKS50cmltKCkgPT0gXCJcIikge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgcGFyYW1zID0ge1xuXHRcdFwic291cmNlXCI6IFwibWVcIixcblx0XHRcInNlYXJjaFF1ZXJ5XCI6ICRzZWFyY2hRdWVyeS52YWwoKSxcblx0XHRcInR5cGVOYW1lXCI6IFwiXCIsXG5cdFx0XCJsYXRcIjogXCJcIixcblx0XHRcImxvblwiOiBcIlwiLFxuICAgIH07XG5cdGlmKHR5cGVvZihhcmd1bWVudHNbMF0pICE9IFwidW5kZWZpbmVkXCIgJiYgYXJndW1lbnRzWzBdICE9IFwiXCIpIHtcblx0XHQkKFwiI3Jlc3VsdC1jYXRlZ3JveS10aXRsZVwiKS50ZXh0KGFyZ3VtZW50c1swXSArIFwiOuaQnOe0oue7k+aenFwiKTtcblx0XHRwYXJhbXNbXCJ0eXBlTmFtZVwiXSA9IGFyZ3VtZW50c1swXTtcblx0fVxuXHRpZigkKFwiI2xhdFwiKS52YWwoKSAhPSBcIlwiIHx8ICQoXCIjbGF0XCIpLnZhbCgpICE9IG51bGwpIHtcblx0XHRwYXJhbXNbXCJsYXRcIl0gPSAkKFwiI2xhdFwiKS52YWwoKTtcblx0fVxuXHRpZigkKFwiI2xvblwiKS52YWwoKSAhPSBcIlwiIHx8ICQoXCIjbG9uXCIpLnZhbCgpICE9IG51bGwpIHtcblx0XHRwYXJhbXNbXCJsb25cIl0gPSAkKFwiI2xvblwiKS52YWwoKTtcblx0fVxuICAgICQuYWpheCh7XG4gICAgXHQvKnVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLCovXG4gICAgICAgIHVybDogXCJodHRwOi8vNjAuMjA1LjEzOS43MTo4MDgwL01vYmlsZVNlYXJjaC9hcGkvc2VhcmNoIXNlYXJjaC5hY3Rpb25cIixcbiAgICAgICAgLyp1cmw6IFwiaHR0cDovLzEwLjI3LjIyMS4xMDcvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLCovXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgIGRhdGFUeXBlIDogXCJqc29uXCIsXG4gICAgICAgIGRhdGEgOiBwYXJhbXMsIFxuICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5lbXB0eSgpO1xuICAgICAgICBcdHZhciByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICBcdHZhciB0eXBlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBcdFxuICAgICAgICBcdC8vIOWmguaenOaQnOe0ouafpeivoue7k+aenOS4uuepulxuICAgICAgICBcdGlmKHJlc3VsdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgXHRcdHZhciBub1Jlc3VsdHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJuby1yZXN1bHRzXFxcIj7lvojmirHmrYnvvIzmiJHku6zmsqHmnInmn6Xor6LliLDkuI5cXFwiXCIgKyAkKFwiI3NlYXJjaC1xdWVyeVwiKS52YWwoKSArIFwiXFxcIuebuOWFs+eahOe7k+aenDwvc3Bhbj5cIjtcbiAgICAgICAgXHRcdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChub1Jlc3VsdHMpO1xuICAgICAgICBcdH1cbiAgICAgICAgXHRmb3IodmFyIHggPSAwOyB4IDwgcmVzdWx0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBcdFx0dHlwZVNldC5hZGQocmVzdWx0c1t4XS50eXBlKTtcbiAgICAgICAgXHR9XG4gICAgICAgIFx0XG4gICAgICAgIFx0aWYobW9kZWzjgIA9PSAwKSB7XG4gICAgICAgIFx0XHQvLyDosIPnlKjnlJ/miJDmqKHmnb/mlrnms5Ut5YiG57G7XG4gICAgICAgIFx0XHRjcmVhdGVUZW1wbGV0V2l0aENhdGVncm95KHR5cGVTZXQsIHJlc3VsdHMpO1xuICAgICAgICBcdH0gZWxzZSB7XG4gICAgICAgIFx0XHQvLyDosIPnlKjnlJ/miJDmqKHmnb/mlrnms5Ut5LiN5YiG57G7XG4gICAgICAgIFx0XHRjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95KHR5cGVTZXQpO1xuICAgICAgICBcdH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbiAoZXJyb3JJbmZvICwgZXJyb3JUeXBlKSB7XG4gICAgICAgIFx0YWxlcnQoXCLml6Dms5Xor4bliKvmkJzntKLkuLJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyog6I635Y+W5Y+C5pWwICovXG5mdW5jdGlvbiBHZXRRdWVyeVN0cmluZyhuYW1lKSB7XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiKyBuYW1lICtcIj0oW14mXSopKCZ8JClcIik7XG4gICAgdmFyIHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgIGlmKHIgIT0gbnVsbCkge1xuICAgXHQgcmV0dXJuICBkZWNvZGVVUklDb21wb25lbnQoclsyXSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKiDojrflj5blnLDnkIbkv6Hmga8gKi9cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHQgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7ICBcblx0XHQgLy8g55m+5bqm5Zyw5Zu+QVBJ5Yqf6IO9ICBcblx0XHQgLyp2YXIgbWFwID0gbmV3IEJNYXAuTWFwKFwiY29udGFpbmVyXCIpOyAgXG5cdFx0IHZhciBwb2ludCA9IG5ldyBCTWFwLlBvaW50KDExNi4zMzEzOTgsMzkuODk3NDQ1KTsgIFxuICAgICAgICAgbWFwLmNlbnRlckFuZFpvb20ocG9pbnQsMTIpOyAqLyBcbiAgICAgICAgIHZhciBnZW9sb2NhdGlvbiA9IG5ldyBCTWFwLkdlb2xvY2F0aW9uKCk7XG4gICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgIGlmKHRoaXMuZ2V0U3RhdHVzKCkgPT0gQk1BUF9TVEFUVVNfU1VDQ0VTUykgeyAgXG4gICAgICAgICAgICAgICAgIC8vdmFyIG1rID0gbmV3IEJNYXAuTWFya2VyKHIucG9pbnQpO1xuICAgICAgICAgICAgICAgICAvL21hcC5hZGRPdmVybGF5KG1rKTtcbiAgICAgICAgICAgICAgICAgLy9tYXAucGFuVG8oci5wb2ludCk7XG4gICAgICAgICAgICAgICAgIHZhciBsYXRUZXh0ID0gXCI8aW5wdXQgaWQ9XFxcImxhdFxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwiXCIgKyByLnBvaW50LmxhdCArIFwiXFxcIi8+XCI7XG4gICAgICAgICAgICAgICAgIHZhciBsb25UZXh0ID0gXCI8aW5wdXQgaWQ9XFxcImxvblxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwiXCIgKyByLnBvaW50LmxuZyArIFwiXFxcIi8+XCI7XG4gICAgICAgICAgICAgICAgICQoXCIuYm9keS1tYWluXCIpLmFwcGVuZChsYXRUZXh0KTtcbiAgICAgICAgICAgICAgICAgJChcIi5ib2R5LW1haW5cIikuYXBwZW5kKGxvblRleHQpO1xuICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICBhbGVydCgn556s6Ze054iG54K477yM5a6a5L2N5aSx6LSlJyt0aGlzLmdldFN0YXR1cygpKTsgIFxuICAgICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICB9LHtlbmFibGVIaWdoQWNjdXJhY3k6IHRydWV9KVxuICAgICB9XG59XG5cbiQoXCJkb2N1bWVudFwiKS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdGdldExvY2F0aW9uKCk7XHQvLyDojrflj5blnLDnkIbkvY3nva5cblx0dmFyIHNlYXJjaFF1ZXJ5ID0gR2V0UXVlcnlTdHJpbmcoXCJzZWFyY2hRdWVyeVwiKTtcblx0JChcIi5uYXYtY2F0ZWdvcnkgbGkgYVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlYXJjaCgkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIi1cIilbMF0pO1x0XG5cdFx0fSk7XG5cdH0pO1xuXHRcblx0aWYoc2VhcmNoUXVlcnkgIT0gbnVsbCB8fCBzZWFyY2hRdWVyeSAhPSBcIlwiKSB7XG5cdFx0JChcIiNzZWFyY2gtcXVlcnlcIikudmFsKHNlYXJjaFF1ZXJ5KTtcblx0fVxuXHRzZWFyY2goKTtcblxufSk7XG5cbiQoXCIjc2VhcmNoLXF1ZXJ5XCIpLmtleWRvd24oZnVuY3Rpb24oZSl7XG5cdHZhciBjdXJLZXkgPSBlLndoaWNoO1xuXHRpZihjdXJLZXkgPT0gMTMpIHtcblx0XHQvKiAkKFwiI+Wbnui9puS6i+S7tuaMiemSruaOp+S7tlwiKS5jbGljaygpOyAqL1xuXHRcdHNlYXJjaCgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufSk7XG4kKFwiI3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbiAoKXtcblx0c2VhcmNoKCk7XG59KTtcblxudmFyIHBhcmFtcyA9IHtcblx0XHRcIlhPZmZzZXRcIjoyLCAvL+aPkOekuuahhuS9jee9ruaoquWQkeWBj+enu+mHjyzljZXkvY1weFxuXHRcdFwiWU9mZnNldFwiOjAsIC8v5o+Q56S65qGG5L2N572u57q15ZCR5YGP56e76YePLOWNleS9jXB4XG5cdFx0XCJ3aWR0aFwiOjM1MCwgLy/mj5DnpLrmoYblrr3luqbvvIzljZXkvY1weFxuXHRcdFwiZm9udENvbG9yXCI6XCJibGFja1wiLCAvL+aPkOekuuahhuaWh+Wtl+minOiJslxuXHRcdFwiZm9udENvbG9ySElcIjpcImJsYWNrXCIsIC8v5o+Q56S65qGG6auY5Lqu6YCJ5oup5pe25paH5a2X6aKc6ImyXG5cdFx0XCJmb250U2l6ZVwiOlwiMTNweFwiLCAvL+aWh+Wtl+Wkp+Wwj1xuXHRcdFwiZm9udEZhbWlseVwiOlwic2Fucy1zZXJpZlwiLCAvL+aWh+Wtl+Wtl+S9k1xuXHRcdFwiYm9yZGVyQ29sb3JcIjpcIiM3NTczNzNcIiwgLy/mj5DnpLrmoYbnmoTovrnmoYbpopzoibJcblx0XHRcImJnY29sb3JISVwiOlwiI2IwYWVhZVwiLCAvL+aPkOekuuahhumrmOS6rumAieaLqeeahOminOiJslxuXHRcdFwic3VnU3VibWl0XCI6ZmFsc2UgLy/pgInkuK3mj5DnpLrmoYbkuK3or43mnaHml7bmmK/lkKbmj5DkuqTooajljZVcbn07XG5cbmZ1bmN0aW9uIGNvbmZpcm1DYWxsYmFjaygpIHtcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21haW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5qUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5kb3cualF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5cbi8qIOeUteW9seaooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmllVGVtcGxldChkYXRhKSB7XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPueUteW9sTwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiO1xuXHRcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiTW92aWVcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1tb3ZpZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIHNjb3JlV2lkdGggPSBcIjAlXCI7XG5cdFx0XHR2YXIgc2NvcmUgPSBcIuaaguaXoOivhOWIhlwiO1xuXHRcdFx0dmFyIGluZm9ybWF0aW9uID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlmKGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmluZm9ybWF0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBkYXRhW2ldLmluZm9ybWF0aW9uLnNwbGl0KFwi5Li75ryUXCIpWzBdICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHRcdGluZm9ybWF0aW9uICs9IFwiPGRpdj48c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgXCLkuLvmvJRcIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLnsbvlnotcIilbMF0uc3BsaXQoXCLkuLvmvJRcIilbMV0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW50cm9kdWN0aW9uID0gZGF0YVtpXS5pbnRyb2R1Y3Rpb247XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIrIHRpdGxlICtcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmZjMzBjO2ZvbnQtc2l6ZToxM3B4O1xcXCI+XCIgKyBzY29yZSArIFwiKOixhueToylcIiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1x0XHRcdFx0aW5mb3JtYXRpb25cblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLW1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtbW92aWVcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIjwvZGl2PlwiO1xuXHRcdFx0XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtbW92aWVcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5tb3ZpZSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtbW92aWVcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQgIGlmKCQoXCIubW9yZS1tb3ZpZVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0XHQgICQoXCIubW9yZS1tb3ZpZVwiKS5zbGlkZURvd24oKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LW1vdmllXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdFx0ICAkKFwiLm1vcmUtbW92aWVcIikuc2xpZGVVcCgpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0XHQgIH1cblx0fSk7XG59O1xuXG4vKiDop4bpopHmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aWRlb1RlbXBsZXQoZGF0YSkge1xuXHRcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSB2aWRlb1xcXCI+XCJcblx0XHRcdFx0K1wiXHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuinhumikTwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIjtcblx0XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQgPSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIlZpZGVvXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtdmlkZW9cXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcblx0XHRcdHZhciB3cml0ZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc2NyaXB0aW9uID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGRhdGFbaV0ud3JpdGVyICE9IG51bGwgJiYgZGF0YVtpXS53cml0ZXIgIT0gXCJcIikge1xuXHRcdFx0XHR3cml0ZXIgPSBkYXRhW2ldLndyaXRlcjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uZGVzY3JpcHRpb24gIT0gXCJcIikge1xuXHRcdFx0XHRkZXNjcmlwdGlvbiA9IGRhdGFbaV0uZGVzY3JpcHRpb247XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIrIHdyaXRlciArIFwiLS0tLVwiICsgdGl0bGUgK1wiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtcXFwiIGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7XFxcIj5cIlxuXHRcdFx0XHQrIFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtdmlkZW9cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLXZpZGVvXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtdmlkZW9cXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIudmlkZW8gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS12aWRlb1wiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLnZpZGVvIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS12aWRlb1wiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCAgaWYoJChcIi5tb3JlLXZpZGVvXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHRcdCAgJChcIi5tb3JlLXZpZGVvXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtdmlkZW9cIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHQgIH0gZWxzZSB7XG5cdFx0XHQgICQoXCIubW9yZS12aWRlb1wiKS5zbGlkZVVwKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC12aWRlb1wiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn07XG5cbi8qIOmfs+S5kOaooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9u44CAbXVzaWNUZW1wbGV0KGRhdGEpIHtcblx0XG59O1xuXG4vKiDlpJbljZbmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YWltYWlUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSB3YWltYWlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCIgXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIiBcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5aSW5Y2WPC9zcGFuPlwiXG5cdFx0XHRcdCtcIiBcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50PSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIlJlc3RhdXJhbnRcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS13YWltYWlcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgcmlnaHQxID0gXCJcIjtcblx0XHRcdHZhciByaWdodDIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc09yb3RoZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGFkZHJlc3MgPSBcIlwiO1xuXHRcdFx0dmFyIGdlb0Rpc3RhbmNlID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtICE9IG51bGwgJiYgZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQxID0gXCIg5pyI6ZSA6YePL1wiICsgZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0uYXZnX3ByaWNlICE9IG51bGwgJiYgZGF0YVtpXS5hdmdfcHJpY2UgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIiDkurrlnYcvXCIgKyBkYXRhW2ldLmF2Z19wcmljZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ucGhvbmUgIT0gbnVsbCAmJiBkYXRhW2ldLnBob25lICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQyID0gXCIgIOiBlOezu+eUteivnTpcIiArIGRhdGFbaV0ucGhvbmU7XG5cdFx0XHR944CAZWxzZSBpZihkYXRhW2ldLmNpdHkgIT0gbnVsbCAmJiBkYXRhW2ldLmNpdHkgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg5omA5Zyo5Z+O5biCOlwiICsgZGF0YVtpXS5jaXR5O1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uZGVzY3JpcHRpb24gIT0gXCJcIiAmJiB0eXBlb2YoZGF0YVtpXS5kZXNjcmlwdGlvbikgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRkZXNPcm90aGVyID0gZGF0YVtpXS5kZXNjcmlwdGlvbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGRhdGFbaV0ub3BlbmluZ19ob3VycyAhPSBudWxsICYmIGRhdGFbaV0ub3BlbmluZ19ob3VycyAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLm9wZW5pbmdfaG91cnMpICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRkZXNPcm90aGVyICs9IFwi6JCl5Lia5pe26Ze0OlwiICsgIGRhdGFbaV0ub3BlbmluZ19ob3VycyArIFwiPGJyLz5cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihkYXRhW2ldLnJlY29tbWVuZF9pdGVtICE9IG51bGwgJiYgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbSAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLnJlY29tbWVuZF9pdGVtKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0ZGVzT3JvdGhlciArPSBcIuaOqOiNkDpcIjtcblx0XHRcdFx0XHRmb3IodmFyIGsgPSAwOyBrIDwgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbS5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0ZGVzT3JvdGhlciArPSAgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbVtrXSArIFwiICAgIFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZXNPcm90aGVyICs9IFwiPGJyLz5cIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5hZGRyZXNzICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0uYWRkcmVzcztcblx0XHRcdH0gZWxzZSBpZihkYXRhW2ldLnBvaV9hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5wb2lfYWRkcmVzcyAhPSBcIlwiKSB7XG5cdFx0XHRcdGFkZHJlc3MgPSBkYXRhW2ldLnBvaV9hZGRyZXNzO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBudWxsICYmIGRhdGFbaV0uZ2VvRGlzdGFuY2UgIT0gXCJcIikge1xuXHRcdFx0XHRnZW9EaXN0YW5jZSA9IGRhdGFbaV0uZ2VvRGlzdGFuY2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblx0XHRcdHZhciBpdGVtID1cIlx0PGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiID5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImljb24tc3RhclxcXCIgc3R5bGU9XFxcIndpZHRoOlwiICsgc2NvcmVXaWR0aCArIFwiO1xcXCI+PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7Y29sb3I6I2ZmYzMwYztcXFwiPiBcIiArIHNjb3JlICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgcmlnaHQxICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgcmlnaHQyICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxwIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtcXFwiIGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7XFxcIj5cIlxuXHRcdFx0XHRcdCsgXHRcdFx0XHRcdGRlc09yb3RoZXJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiArIGFkZHJlc3MgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmY2ZDAwO2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyBcIiAgXCIgKyBnZW9EaXN0YW5jZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS13YWltYWlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtd2FpbWFpXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtd2FpbWFpXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIlx0PC9kaXY+XCJcblx0XHRcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIud2FpbWFpIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtd2FpbWFpXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIud2FpbWFpIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS13YWltYWlcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQgIGlmKCQoXCIubW9yZS13YWltYWlcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0ICAkKFwiLm1vcmUtd2FpbWFpXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtd2FpbWFpXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdFx0ICAkKFwiLm1vcmUtd2FpbWFpXCIpLnNsaWRlVXAoKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LXdhaW1haVwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn07XG5cbi8qIOWVhuWTgeaooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBwcm9kdWN0XFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHQrXCIgXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuWVhuWTgTwvc3Bhbj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0XHQ8L2Rpdj5cIjtcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiUHJvZHVjdFwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLXByb2R1Y3RcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgaW50cm9kdWN0aW9uID0gXCJcIjtcblx0XHRcdHZhciB0YWdzID0gXCJUQUdTOiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1wiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGZvcih2YXIgayA9IDA7IGsgPCBkYXRhW2ldLmludHJvZHVjdGlvbi5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdGlmKGsgPCA2KSB7XG5cdFx0XHRcdFx0XHRpbnRyb2R1Y3Rpb24gKz0gZGF0YVtpXS5pbnRyb2R1Y3Rpb25ba10gKyBcIjxici8+XCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnRhZ3MgIT0gbnVsbCAmJiBkYXRhW2ldLnRhZ3MgIT0gXCJcIikge1xuXHRcdFx0XHRmb3IodmFyIGwgPSAwOyBsIDwgZGF0YVtpXS50YWdzLmxlbmd0aDsgbCsrKSB7XG5cdFx0XHRcdFx0dGFncyArPSBkYXRhW2ldLnRhZ3NbbF0ucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSArIFwiJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblx0XHRcdHZhciBpdGVtID1cIjxkaXYgY2xhc3M9XFxcImNhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIiArIHRpdGxlICsgXCI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM2NjY2NjY7Zm9udC1zaXplOjEycHg7XFxcIj5cIiArIGludHJvZHVjdGlvbiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmY2ZDAwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyB0YWdzICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtcHJvZHVjdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtcHJvZHVjdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LXByb2R1Y3RcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiPC9kaXY+XCI7XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLnByb2R1Y3QgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1wcm9kdWN0XCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIucHJvZHVjdCAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtcHJvZHVjdFwiKS5jbGljayhmdW5jdGlvbigpe1xuXHQgIGlmKCQoXCIubW9yZS1wcm9kdWN0XCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHQgICQoXCIubW9yZS1wcm9kdWN0XCIpLnNsaWRlRG93bigpO1xuXHRcdCAgJChcIi5zbGlkZS10ZXh0LXByb2R1Y3RcIikudGV4dChcIuaKmOWPoFwiKTtcblx0ICB9IGVsc2Uge1xuXHRcdCAgJChcIi5tb3JlLXByb2R1Y3RcIikuc2xpZGVVcCgpO1xuXHRcdCAgJChcIi5zbGlkZS10ZXh0LXByb2R1Y3RcIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0ICB9XG5cdH0pO1xufTtcblxuLyog5paw6Ze75qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gbmV3c1RlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IG5ld3NcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuaWsOmXuzwvc3Bhbj5cIlxuXHRcdCtcIlx0XHRcdFx0XHRcdDwvZGl2PlwiO1xuXG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQgPSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIk5ld3NcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1uZXdzXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBcIlwiO1xuXHRcdFx0dmFyIHdyaXRlciA9IFwiXCI7XG5cdFx0XHR2YXIgdGltZSA9IFwiXCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmNvbnRlbnQgIT0gbnVsbCAmJiBkYXRhW2ldLmNvbnRlbnQgIT0gXCJcIikge1xuXHRcdFx0XHRjb250ZW50ID0gZGF0YVtpXS5jb250ZW50Lmxlbmd0aCA8PSA2MCA/IGRhdGFbaV0uY29udGVudCA6IGRhdGFbaV0uY29udGVudC5zdWJzdHIoMCwgNjApICsgXCIuLi4uXCI7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLndyaXRlciAhPSBudWxsICYmIGRhdGFbaV0ud3JpdGVyICE9IFwiXCIpIHtcblx0XHRcdFx0d3JpdGVyID0gZGF0YVtpXS53cml0ZXI7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnRpbWUgIT0gbnVsbCAmJiBkYXRhW2ldLnRpbWUgIT0gXCJcIikge1xuXHRcdFx0XHR0aW1lID0gZGF0YVtpXS50aW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIgKyB0aXRsZSArIFwiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtcXFwiIGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7XFxcIj5cIlxuXHRcdFx0XHQrIFx0XHRcdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjExcHg7XFxcIj5cIiArIHdyaXRlciArIFwiICAgXCIgKyB0aW1lICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1uZXdzXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1uZXdzXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtbmV3c1xcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0XHRcdFxuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi5uZXdzIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtbmV3c1wiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLm5ld3MgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFx0XG5cdCQoXCIuc2xpZGUtbmV3c1wiKS5jbGljayhmdW5jdGlvbigpe1xuXHQgIGlmKCQoXCIubW9yZS1uZXdzXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHQgICQoXCIubW9yZS1uZXdzXCIpLnNsaWRlRG93bigpO1xuXHRcdCAgJChcIi5zbGlkZS10ZXh0LW5ld3NcIikudGV4dChcIuaKmOWPoFwiKTtcblx0ICB9IGVsc2Uge1xuXHRcdCAgJChcIi5tb3JlLW5ld3NcIikuc2xpZGVVcCgpO1xuXHRcdCAgJChcIi5zbGlkZS10ZXh0LW5ld3NcIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0ICB9XG5cdH0pO1xufTtcblxuLyog5Zui6LSt5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gY291cG9uVGVtcGxldChkYXRhKSB7XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgY291cG9uXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHQrXCIgXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuWboui0rTwvc3Bhbj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0XHQ8L2Rpdj5cIjtcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudD0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJDb3Vwb25cIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1jb3Vwb25cXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgcmlnaHQxID0gXCJcIjtcblx0XHRcdHZhciByaWdodDIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc09yb3RoZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGFkZHJlc3MgPSBcIlwiO1xuXHRcdFx0dmFyIGdlb0Rpc3RhbmNlID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5yZXRhaWxfcHJpY2UgIT0gbnVsbCAmJiBkYXRhW2ldLnJldGFpbF9wcmljZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MSA9IFwiICDpm7bllK7ku7c6XCIgKyBkYXRhW2ldLnJldGFpbF9wcmljZTtcblx0XHRcdH0gZWxzZSBpZihkYXRhW2ldLnNhbGVfY291bnQgIT0gbnVsbCAmJiBkYXRhW2ldLnNhbGVfY291bnQgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIuOAgOOAgOW3sumUgOWUrlwiICsgZGF0YVtpXS5zYWxlX2NvdW50O1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5wcmljZSAhPSBudWxsICYmIGRhdGFbaV0ucHJpY2UgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg5Zui6LSt5Lu3OlwiICsgZGF0YVtpXS5wcmljZTtcblx0XHRcdH3jgIBlbHNlIGlmKGRhdGFbaV0uY2l0eSAhPSBudWxsICYmIGRhdGFbaV0uY2l0eSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MiA9IFwiICDmiYDlnKjln47luII6XCIgKyBkYXRhW2ldLmNpdHk7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmRlYWxfZGV0YWlscyAhPSBudWxsICYmIGRhdGFbaV0uZGVhbF9kZXRhaWxzICE9IFwiXCIgJiYgdHlwZW9mKGRhdGFbaV0uZGVhbF9kZXRhaWxzKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGRlc09yb3RoZXIgPSBkYXRhW2ldLmRlYWxfZGV0YWlscy5sZW5ndGggPD0gNjAgPyBkYXRhW2ldLmRlYWxfZGV0YWlscyA6IGRhdGFbaV0uZGVhbF9kZXRhaWxzLnN1YnN0cigwLCA2MCkgKyBcIi4uLi5cIjsgXG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnBvaV9pbmZvLnBvaV9hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5wb2lfaW5mby5wb2lfYWRkcmVzcyAhPSBcIlwiKSB7XG5cdFx0XHRcdGFkZHJlc3MgPSBkYXRhW2ldLnBvaV9pbmZvLnBvaV9hZGRyZXNzO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0ucG9pX2luZm8ucG9pX25hbWUgIT0gbnVsbCAmJiBkYXRhW2ldLnBvaV9pbmZvLnBvaV9uYW1lICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0ucG9pX2luZm8ucG9pX25hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmdlb0Rpc3RhbmNlICE9IG51bGwgJiYgZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBcIlwiKSB7XG5cdFx0XHRcdGdlb0Rpc3RhbmNlID0gZGF0YVtpXS5nZW9EaXN0YW5jZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiXHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIgKyB0aXRsZSArIFwiPC9hPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCIgPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtjb2xvcjojZmZjMzBjO1xcXCI+IFwiICsgc2NvcmUgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDEgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDIgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdFx0KyBcdFx0XHRcdFx0ZGVzT3JvdGhlclxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTFweDtcXFwiPlwiICsgYWRkcmVzcyArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiAgKyBcIiAgXCIgKyBnZW9EaXN0YW5jZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtY291cG9uXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1jb3Vwb25cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1jb3Vwb25cXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0XHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIuY291cG9uIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtY291cG9uXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIuY291cG9uIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1jb3Vwb25cIikuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBpZigkKFwiLm1vcmUtY291cG9uXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHQgICQoXCIubW9yZS1jb3Vwb25cIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtY291cG9uXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdCAgfSBlbHNlIHtcblx0XHQgICQoXCIubW9yZS1jb3Vwb25cIikuc2xpZGVVcCgpO1xuXHRcdCAgJChcIi5zbGlkZS10ZXh0LWNvdXBvblwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59O1xuXG4vKiDnn6Xor4bmqKHmnb8gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90ZW1wbGF0ZS90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=