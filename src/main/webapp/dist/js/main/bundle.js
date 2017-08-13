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


__webpack_require__(1);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _template = __webpack_require__(3);

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
}

// 不分类模板
// 导入 css
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

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ }),
/* 3 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzFlYjYyMmRlYzhkM2ViOTBhNDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluL21haW4tY3NzLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cualF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RlbXBsYXRlL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbInRlbXBsYXRlIiwiY3JlYXRlVGVtcGxldFdpdGhDYXRlZ3JveSIsInR5cGVTZXQiLCJhcmd1bWVudHMiLCJyZXN1bHRzIiwiZm9yRWFjaCIsInR5cGVJdGVtIiwibW92aWVUZW1wbGV0IiwidmlkZW9UZW1wbGV0IiwibXVzaWNUZW1wbGV0Iiwid2FpbWFpVGVtcGxldCIsInByb2R1Y3RUZW1wbGV0IiwibmV3c1RlbXBsZXQiLCJjb3Vwb25UZW1wbGV0IiwiY3JlYXRlVGVtcGxldFdpdGhPdXRDYXRlZ3JveSIsImRhdGEiLCJjYXRlZ3JveSIsInN1bSIsImNvdW50IiwiaSIsImxlbmd0aCIsInR5cGUiLCJpbWdOYW1lIiwidGl0bGUiLCJzY29yZVdpZHRoIiwic2NvcmUiLCJpbmZvcm1hdGlvbiIsImludHJvZHVjdGlvbiIsImp1bXBVcmwiLCJ1cmwiLCJmcm9tX2FwcCIsIm5hbWVBcnIiLCJzcGxpdCIsImoiLCJoaWdoTGlnaHRUaXRsZSIsIndlYlVybCIsIml0ZW0iLCJhcHBlbmQiLCJ5IiwiZWFjaCIsImNzcyIsImNyZWF0ZVBhZ2UiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsImN1cnJlbnQiLCJiYWNrRm4iLCJwIiwieiIsImNsaWNrIiwic2xpZGVEb3duIiwidGV4dCIsInNsaWRlVXAiLCJzZWFyY2giLCIkc2VhcmNoUXVlcnkiLCJtb2RlbCIsInZhbCIsInRyaW0iLCJwYXJhbXMiLCJhamF4IiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZW1wdHkiLCJTZXQiLCJub1Jlc3VsdHMiLCJ4IiwiYWRkIiwiZXJyb3IiLCJlcnJvckluZm8iLCJlcnJvclR5cGUiLCJhbGVydCIsIkdldFF1ZXJ5U3RyaW5nIiwibmFtZSIsInJlZyIsIlJlZ0V4cCIsInIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0ciIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIkJNYXAiLCJHZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImdldFN0YXR1cyIsIkJNQVBfU1RBVFVTX1NVQ0NFU1MiLCJsYXRUZXh0IiwicG9pbnQiLCJsYXQiLCJsb25UZXh0IiwibG5nIiwiZW5hYmxlSGlnaEFjY3VyYWN5IiwicmVhZHkiLCJzZWFyY2hRdWVyeSIsImF0dHIiLCJrZXlkb3duIiwiZSIsImN1cktleSIsIndoaWNoIiwiY29uZmlybUNhbGxiYWNrIiwiJCIsIndyaXRlciIsImRlc2NyaXB0aW9uIiwicmlnaHQxIiwicmlnaHQyIiwiZGVzT3JvdGhlciIsImFkZHJlc3MiLCJnZW9EaXN0YW5jZSIsInJlY2VudF9vcmRlcl9udW0iLCJhdmdfcHJpY2UiLCJwaG9uZSIsImNpdHkiLCJvcGVuaW5nX2hvdXJzIiwicmVjb21tZW5kX2l0ZW0iLCJrIiwicG9pX2FkZHJlc3MiLCJ0YWdzIiwibCIsInJlcGxhY2UiLCJjb250ZW50IiwidGltZSIsInJldGFpbF9wcmljZSIsInNhbGVfY291bnQiLCJwcmljZSIsImRlYWxfZGV0YWlscyIsInBvaV9pbmZvIiwicG9pX25hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztB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R0FBRSxxQkFBRixFQUF5QjlELFVBQXpCLENBQW9DO0FBQzdCQyxhQUFXQyxLQUFLQyxJQUFMLENBQVUxQixRQUFNLENBQWhCLENBRGtCO0FBRTdCMkIsV0FBUSxDQUZxQjtBQUc3QkMsVUFBTyxnQkFBU0MsQ0FBVCxFQUFXO0FBQ2pCLE9BQUlDLElBQUksQ0FBUjtBQUNBdUQsS0FBRSxxQ0FBRixFQUF5Q2hFLElBQXpDLENBQThDLFlBQVk7QUFDekQsTUFBRVMsQ0FBRjtBQUNBLFFBQUdBLEtBQU0sQ0FBQ0QsSUFBRSxDQUFILElBQU0sQ0FBTixHQUFRLENBQWQsSUFBb0JDLEtBQUssSUFBRUQsQ0FBOUIsRUFBaUM7QUFDaEN3RCxPQUFFLElBQUYsRUFBUS9ELEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE9BQXZCO0FBQ0EsS0FGRCxNQUVPO0FBQ04rRCxPQUFFLElBQUYsRUFBUS9ELEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE1BQXZCO0FBQ0E7QUFDRCxJQVBEO0FBUUc7QUFDSDtBQWQ0QixFQUFwQzs7QUFpQkErRCxHQUFFLGVBQUYsRUFBbUJ0RCxLQUFuQixDQUF5QixZQUFVO0FBQ2pDLE1BQUdzRCxFQUFFLGNBQUYsRUFBa0IvRCxHQUFsQixDQUFzQixTQUF0QixLQUFvQyxNQUF2QyxFQUErQztBQUM5QytELEtBQUUsY0FBRixFQUFrQnJELFNBQWxCO0FBQ0FxRCxLQUFFLG9CQUFGLEVBQXdCcEQsSUFBeEIsQ0FBNkIsSUFBN0I7QUFDQSxHQUhELE1BR087QUFDTm9ELEtBQUUsY0FBRixFQUFrQm5ELE9BQWxCO0FBQ0FtRCxLQUFFLG9CQUFGLEVBQXdCcEQsSUFBeEIsQ0FBNkIsS0FBN0I7QUFDQTtBQUNGLEVBUkQ7QUFTQTs7QUFFRCxVIiwiZmlsZSI6ImpzL21haW4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzFlYjYyMmRlYzhkM2ViOTBhNDIiLCIvLyDlr7zlhaUgY3NzXG5pbXBvcnQgXCIuLi9jc3MvbWFpbi9tYWluLWNzcy5jc3NcIlxuXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZSBmcm9tIFwiLi90ZW1wbGF0ZS90ZW1wbGF0ZS5qc1wiO1xuXG4vLyDliIbnsbvmqKHmnb9cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsZXRXaXRoQ2F0ZWdyb3koKSB7XG5cdHZhciB0eXBlU2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgcmVzdWx0cyA9IGFyZ3VtZW50c1sxXTtcblx0aWYodHlwZVNldCAhPSBudWxsKSB7XG5cdFx0dHlwZVNldC5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlSXRlbSkge1xuXHQgICAgXHRpZih0eXBlSXRlbSA9PSBcIk1vdmllXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5tb3ZpZVRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlZpZGVvXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS52aWRlb1RlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIk11c2ljXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5tdXNpY1RlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlJlc3RhdXJhbnRcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLndhaW1haVRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlByb2R1Y3RcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLnByb2R1Y3RUZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJOZXdzXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5uZXdzVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiQ291cG9uXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5jb3Vwb25UZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8g5LiN5YiG57G75qih5p2/XG5mdW5jdGlvbiBjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBhbGxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPueUteW9sTwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiO1xuXHRcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiTW92aWVcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1tb3ZpZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIHNjb3JlV2lkdGggPSBcIjAlXCI7XG5cdFx0XHR2YXIgc2NvcmUgPSBcIuaaguaXoOivhOWIhlwiO1xuXHRcdFx0dmFyIGluZm9ybWF0aW9uID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlmKGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmluZm9ybWF0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBkYXRhW2ldLmluZm9ybWF0aW9uLnNwbGl0KFwi5Li75ryUXCIpWzBdICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHRcdGluZm9ybWF0aW9uICs9IFwiPGRpdj48c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgXCLkuLvmvJRcIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLnsbvlnotcIilbMF0uc3BsaXQoXCLkuLvmvJRcIilbMV0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW50cm9kdWN0aW9uID0gZGF0YVtpXS5pbnRyb2R1Y3Rpb247XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIrIHRpdGxlICtcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmZjMzBjO2ZvbnQtc2l6ZToxM3B4O1xcXCI+XCIgKyBzY29yZSArIFwiKOixhueToylcIiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1x0XHRcdFx0aW5mb3JtYXRpb25cblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLW1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtbW92aWVcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIjwvZGl2PlwiO1xuXHRcdFx0XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtbW92aWVcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5tb3ZpZSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtbW92aWVcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRpZigkKFwiLm1vcmUtbW92aWVcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0JChcIi5tb3JlLW1vdmllXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0JChcIi5zbGlkZS10ZXh0LW1vdmllXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoXCIubW9yZS1tb3ZpZVwiKS5zbGlkZVVwKCk7XG5cdFx0XHQkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKiDmkJzntKLlvILmraXosIPnlKggKi9cbmZ1bmN0aW9uIHNlYXJjaCgpIHtcblx0dmFyICRzZWFyY2hRdWVyeSA9ICQoXCIjc2VhcmNoLXF1ZXJ5XCIpO1x0Ly8g55So5oi35pCc57Si5LiyXG5cdHZhciBtb2RlbCA9IDA7XHQvLyDkv53nlZnmqKHmnb8gMeWPt+ihqOekuuS4jeWIhuexu1xuXHRpZigkc2VhcmNoUXVlcnkudmFsKCkudHJpbSgpID09IFwiXCIpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIHBhcmFtcyA9IHtcblx0XHRcInNvdXJjZVwiOiBcIm1lXCIsXG5cdFx0XCJzZWFyY2hRdWVyeVwiOiAkc2VhcmNoUXVlcnkudmFsKCksXG5cdFx0XCJ0eXBlTmFtZVwiOiBcIlwiLFxuXHRcdFwibGF0XCI6IFwiXCIsXG5cdFx0XCJsb25cIjogXCJcIixcbiAgICB9O1xuXHRpZih0eXBlb2YoYXJndW1lbnRzWzBdKSAhPSBcInVuZGVmaW5lZFwiICYmIGFyZ3VtZW50c1swXSAhPSBcIlwiKSB7XG5cdFx0JChcIiNyZXN1bHQtY2F0ZWdyb3ktdGl0bGVcIikudGV4dChhcmd1bWVudHNbMF0gKyBcIjrmkJzntKLnu5PmnpxcIik7XG5cdFx0cGFyYW1zW1widHlwZU5hbWVcIl0gPSBhcmd1bWVudHNbMF07XG5cdH1cblx0aWYoJChcIiNsYXRcIikudmFsKCkgIT0gXCJcIiB8fCAkKFwiI2xhdFwiKS52YWwoKSAhPSBudWxsKSB7XG5cdFx0cGFyYW1zW1wibGF0XCJdID0gJChcIiNsYXRcIikudmFsKCk7XG5cdH1cblx0aWYoJChcIiNsb25cIikudmFsKCkgIT0gXCJcIiB8fCAkKFwiI2xvblwiKS52YWwoKSAhPSBudWxsKSB7XG5cdFx0cGFyYW1zW1wibG9uXCJdID0gJChcIiNsb25cIikudmFsKCk7XG5cdH1cbiAgICAkLmFqYXgoe1xuICAgIFx0Lyp1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL01vYmlsZVNlYXJjaC9hcGkvc2VhcmNoIXNlYXJjaC5hY3Rpb25cIiwqL1xuICAgICAgICB1cmw6IFwiaHR0cDovLzYwLjIwNS4xMzkuNzE6ODA4MC9Nb2JpbGVTZWFyY2gvYXBpL3NlYXJjaCFzZWFyY2guYWN0aW9uXCIsXG4gICAgICAgIC8qdXJsOiBcImh0dHA6Ly8xMC4yNy4yMjEuMTA3L01vYmlsZVNlYXJjaC9hcGkvc2VhcmNoIXNlYXJjaC5hY3Rpb25cIiwqL1xuICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICBkYXRhVHlwZSA6IFwianNvblwiLFxuICAgICAgICBkYXRhIDogcGFyYW1zLCBcbiAgICAgICAgc3VjY2VzcyA6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIFx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuZW1wdHkoKTtcbiAgICAgICAgXHR2YXIgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgXHR2YXIgdHlwZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgXHRcbiAgICAgICAgXHQvLyDlpoLmnpzmkJzntKLmn6Xor6Lnu5PmnpzkuLrnqbpcbiAgICAgICAgXHRpZihyZXN1bHRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIFx0XHR2YXIgbm9SZXN1bHRzID0gXCI8c3BhbiBjbGFzcz1cXFwibm8tcmVzdWx0c1xcXCI+5b6I5oqx5q2J77yM5oiR5Lus5rKh5pyJ5p+l6K+i5Yiw5LiOXFxcIlwiICsgJChcIiNzZWFyY2gtcXVlcnlcIikudmFsKCkgKyBcIlxcXCLnm7jlhbPnmoTnu5Pmnpw8L3NwYW4+XCI7XG4gICAgICAgIFx0XHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQobm9SZXN1bHRzKTtcbiAgICAgICAgXHR9XG4gICAgICAgIFx0Zm9yKHZhciB4ID0gMDsgeCA8IHJlc3VsdHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgXHRcdHR5cGVTZXQuYWRkKHJlc3VsdHNbeF0udHlwZSk7XG4gICAgICAgIFx0fVxuICAgICAgICBcdFxuICAgICAgICBcdGlmKG1vZGVs44CAPT0gMCkge1xuICAgICAgICBcdFx0Ly8g6LCD55So55Sf5oiQ5qih5p2/5pa55rOVLeWIhuexu1xuICAgICAgICBcdFx0Y3JlYXRlVGVtcGxldFdpdGhDYXRlZ3JveSh0eXBlU2V0LCByZXN1bHRzKTtcbiAgICAgICAgXHR9IGVsc2Uge1xuICAgICAgICBcdFx0Ly8g6LCD55So55Sf5oiQ5qih5p2/5pa55rOVLeS4jeWIhuexu1xuICAgICAgICBcdFx0Y3JlYXRlVGVtcGxldFdpdGhPdXRDYXRlZ3JveSh0eXBlU2V0KTtcbiAgICAgICAgXHR9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24gKGVycm9ySW5mbyAsIGVycm9yVHlwZSkge1xuICAgICAgICBcdGFsZXJ0KFwi5peg5rOV6K+G5Yir5pCc57Si5LiyXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qIOiOt+WPluWPguaVsCAqL1xuZnVuY3Rpb24gR2V0UXVlcnlTdHJpbmcobmFtZSkge1xuICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiKF58JilcIisgbmFtZSArXCI9KFteJl0qKSgmfCQpXCIpO1xuICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcbiAgICBpZihyICE9IG51bGwpIHtcbiAgIFx0IHJldHVybiAgZGVjb2RlVVJJQ29tcG9uZW50KHJbMl0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyog6I635Y+W5Zyw55CG5L+h5oGvICovXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcblx0IGlmKG5hdmlnYXRvci5nZW9sb2NhdGlvbikgeyAgXG5cdFx0IC8vIOeZvuW6puWcsOWbvkFQSeWKn+iDvSAgXG5cdFx0IC8qdmFyIG1hcCA9IG5ldyBCTWFwLk1hcChcImNvbnRhaW5lclwiKTsgIFxuXHRcdCB2YXIgcG9pbnQgPSBuZXcgQk1hcC5Qb2ludCgxMTYuMzMxMzk4LDM5Ljg5NzQ0NSk7ICBcbiAgICAgICAgIG1hcC5jZW50ZXJBbmRab29tKHBvaW50LDEyKTsgKi8gXG4gICAgICAgICB2YXIgZ2VvbG9jYXRpb24gPSBuZXcgQk1hcC5HZW9sb2NhdGlvbigpO1xuICAgICAgICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICBpZih0aGlzLmdldFN0YXR1cygpID09IEJNQVBfU1RBVFVTX1NVQ0NFU1MpIHsgIFxuICAgICAgICAgICAgICAgICAvL3ZhciBtayA9IG5ldyBCTWFwLk1hcmtlcihyLnBvaW50KTtcbiAgICAgICAgICAgICAgICAgLy9tYXAuYWRkT3ZlcmxheShtayk7XG4gICAgICAgICAgICAgICAgIC8vbWFwLnBhblRvKHIucG9pbnQpO1xuICAgICAgICAgICAgICAgICB2YXIgbGF0VGV4dCA9IFwiPGlucHV0IGlkPVxcXCJsYXRcXFwiIHR5cGU9XFxcImhpZGRlblxcXCIgdmFsdWU9XFxcIlwiICsgci5wb2ludC5sYXQgKyBcIlxcXCIvPlwiO1xuICAgICAgICAgICAgICAgICB2YXIgbG9uVGV4dCA9IFwiPGlucHV0IGlkPVxcXCJsb25cXFwiIHR5cGU9XFxcImhpZGRlblxcXCIgdmFsdWU9XFxcIlwiICsgci5wb2ludC5sbmcgKyBcIlxcXCIvPlwiO1xuICAgICAgICAgICAgICAgICAkKFwiLmJvZHktbWFpblwiKS5hcHBlbmQobGF0VGV4dCk7XG4gICAgICAgICAgICAgICAgICQoXCIuYm9keS1tYWluXCIpLmFwcGVuZChsb25UZXh0KTtcbiAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgYWxlcnQoJ+eerOmXtOeIhueCuO+8jOWumuS9jeWksei0pScrdGhpcy5nZXRTdGF0dXMoKSk7ICBcbiAgICAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgfSx7ZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlfSlcbiAgICAgfVxufVxuXG4kKFwiZG9jdW1lbnRcIikucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRnZXRMb2NhdGlvbigpO1x0Ly8g6I635Y+W5Zyw55CG5L2N572uXG5cdHZhciBzZWFyY2hRdWVyeSA9IEdldFF1ZXJ5U3RyaW5nKFwic2VhcmNoUXVlcnlcIik7XG5cdCQoXCIubmF2LWNhdGVnb3J5IGxpIGFcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0JCh0aGlzKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWFyY2goJCh0aGlzKS5hdHRyKFwiY2xhc3NcIikuc3BsaXQoXCItXCIpWzBdKTtcdFxuXHRcdH0pO1xuXHR9KTtcblx0XG5cdGlmKHNlYXJjaFF1ZXJ5ICE9IG51bGwgfHwgc2VhcmNoUXVlcnkgIT0gXCJcIikge1xuXHRcdCQoXCIjc2VhcmNoLXF1ZXJ5XCIpLnZhbChzZWFyY2hRdWVyeSk7XG5cdH1cblx0c2VhcmNoKCk7XG5cbn0pO1xuXG4kKFwiI3NlYXJjaC1xdWVyeVwiKS5rZXlkb3duKGZ1bmN0aW9uKGUpe1xuXHR2YXIgY3VyS2V5ID0gZS53aGljaDtcblx0aWYoY3VyS2V5ID09IDEzKSB7XG5cdFx0LyogJChcIiPlm57ovabkuovku7bmjInpkq7mjqfku7ZcIikuY2xpY2soKTsgKi9cblx0XHRzZWFyY2goKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0pO1xuJChcIiNzZWFyY2hcIikuY2xpY2soZnVuY3Rpb24gKCl7XG5cdHNlYXJjaCgpO1xufSk7XG5cbnZhciBwYXJhbXMgPSB7XG5cdFx0XCJYT2Zmc2V0XCI6MiwgLy/mj5DnpLrmoYbkvY3nva7mqKrlkJHlgY/np7vph48s5Y2V5L2NcHhcblx0XHRcIllPZmZzZXRcIjowLCAvL+aPkOekuuahhuS9jee9rue6teWQkeWBj+enu+mHjyzljZXkvY1weFxuXHRcdFwid2lkdGhcIjozNTAsIC8v5o+Q56S65qGG5a695bqm77yM5Y2V5L2NcHhcblx0XHRcImZvbnRDb2xvclwiOlwiYmxhY2tcIiwgLy/mj5DnpLrmoYbmloflrZfpopzoibJcblx0XHRcImZvbnRDb2xvckhJXCI6XCJibGFja1wiLCAvL+aPkOekuuahhumrmOS6rumAieaLqeaXtuaWh+Wtl+minOiJslxuXHRcdFwiZm9udFNpemVcIjpcIjEzcHhcIiwgLy/mloflrZflpKflsI9cblx0XHRcImZvbnRGYW1pbHlcIjpcInNhbnMtc2VyaWZcIiwgLy/mloflrZflrZfkvZNcblx0XHRcImJvcmRlckNvbG9yXCI6XCIjNzU3MzczXCIsIC8v5o+Q56S65qGG55qE6L655qGG6aKc6ImyXG5cdFx0XCJiZ2NvbG9ySElcIjpcIiNiMGFlYWVcIiwgLy/mj5DnpLrmoYbpq5jkuq7pgInmi6nnmoTpopzoibJcblx0XHRcInN1Z1N1Ym1pdFwiOmZhbHNlIC8v6YCJ5Lit5o+Q56S65qGG5Lit6K+N5p2h5pe25piv5ZCm5o+Q5Lqk6KGo5Y2VXG59O1xuXG5mdW5jdGlvbiBjb25maXJtQ2FsbGJhY2soKSB7XG5cdFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tYWluLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvbWFpbi9tYWluLWNzcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cualF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2luZG93LmpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyog55S15b2x5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gbW92aWVUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBtb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+55S15b2xPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCI7XG5cdFxuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJNb3ZpZVwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLW1vdmllXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgaW5mb3JtYXRpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5zY29yZSAhPSBudWxsICYmIGRhdGFbaV0uc2NvcmUgIT0gXCJcIikge1xuXHRcdFx0XHRzY29yZVdpZHRoID0gKGRhdGFbaV0uc2NvcmXjgIAv44CANSnjgIAqIDEwMCArIFwiJVwiO1xuXHRcdFx0XHRzY29yZSA9IGRhdGFbaV0uc2NvcmU7XG5cdFx0XHR9XG5cblxuXHRcdFx0aWYoZGF0YVtpXS5pbmZvcm1hdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gXCJcIikge1xuXHRcdFx0XHRpbmZvcm1hdGlvbiArPSBcIjxkaXY+PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM2NjY2NjY7Zm9udC1zaXplOjEycHg7XFxcIj5cIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLkuLvmvJRcIilbMF0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBcIuS4u+a8lFwiICsgZGF0YVtpXS5pbmZvcm1hdGlvbi5zcGxpdChcIuexu+Wei1wiKVswXS5zcGxpdChcIuS4u+a8lFwiKVsxXSArIFwiPC9zcGFuPjwvZGl2PlwiO1xuXHRcdFx0fVxuXG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gXCJcIikge1xuXHRcdFx0XHRpbnRyb2R1Y3Rpb24gPSBkYXRhW2ldLmludHJvZHVjdGlvbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IFwiPGRpdiBjbGFzcz0nY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj48aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIisgdGl0bGUgK1wiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJpY29uLXN0YXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIiArIHNjb3JlV2lkdGggKyBcIjtcXFwiPjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZmMzMGM7Zm9udC1zaXplOjEzcHg7XFxcIj5cIiArIHNjb3JlICsgXCIo6LGG55OjKVwiICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXHRcdFx0XHRpbmZvcm1hdGlvblxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1tb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1tb3ZpZVxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHRcdCArXCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIubW92aWUgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1tb3ZpZVwiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1tb3ZpZVwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCAgaWYoJChcIi5tb3JlLW1vdmllXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHRcdCAgJChcIi5tb3JlLW1vdmllXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHQgIH0gZWxzZSB7XG5cdFx0XHQgICQoXCIubW9yZS1tb3ZpZVwiKS5zbGlkZVVwKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC1tb3ZpZVwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn07XG5cbi8qIOinhumikeaooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpZGVvVGVtcGxldChkYXRhKSB7XG5cdFxuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IHZpZGVvXFxcIj5cIlxuXHRcdFx0XHQrXCJcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+6KeG6aKRPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiO1xuXHRcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiVmlkZW9cIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS12aWRlb1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFxuXHRcdFx0dmFyIHdyaXRlciA9IFwiXCI7XG5cdFx0XHR2YXIgZGVzY3JpcHRpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoZGF0YVtpXS53cml0ZXIgIT0gbnVsbCAmJiBkYXRhW2ldLndyaXRlciAhPSBcIlwiKSB7XG5cdFx0XHRcdHdyaXRlciA9IGRhdGFbaV0ud3JpdGVyO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmRlc2NyaXB0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGRlc2NyaXB0aW9uID0gZGF0YVtpXS5kZXNjcmlwdGlvbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IFwiPGRpdiBjbGFzcz0nY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj48aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIisgd3JpdGVyICsgXCItLS0tXCIgKyB0aXRsZSArXCI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdCsgXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb25cblx0XHRcdFx0K1wiXHRcdFx0XHRcdDwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS12aWRlb1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtdmlkZW9cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC12aWRlb1xcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0XHRcdFxuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi52aWRlbyAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLXZpZGVvXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIudmlkZW8gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLXZpZGVvXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0ICBpZigkKFwiLm1vcmUtdmlkZW9cIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0ICAkKFwiLm1vcmUtdmlkZW9cIikuc2xpZGVEb3duKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC12aWRlb1wiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHRcdCAgfSBlbHNlIHtcblx0XHRcdCAgJChcIi5tb3JlLXZpZGVvXCIpLnNsaWRlVXAoKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LXZpZGVvXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdFx0ICB9XG5cdH0pO1xufTtcblxuLyog6Z+z5LmQ5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb27jgIBtdXNpY1RlbXBsZXQoZGF0YSkge1xuXHRcbn07XG5cbi8qIOWkluWNluaooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhaW1haVRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IHdhaW1haVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIiBcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiIFx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7lpJbljZY8L3NwYW4+XCJcblx0XHRcdFx0K1wiIFx0XHRcdFx0PC9kaXY+XCI7XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQ9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiUmVzdGF1cmFudFwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLXdhaW1haVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBzY29yZVdpZHRoID0gXCIwJVwiO1xuXHRcdFx0dmFyIHNjb3JlID0gXCLmmoLml6Dor4TliIZcIjtcblx0XHRcdHZhciByaWdodDEgPSBcIlwiO1xuXHRcdFx0dmFyIHJpZ2h0MiA9IFwiXCI7XG5cdFx0XHR2YXIgZGVzT3JvdGhlciA9IFwiXCI7XG5cdFx0XHR2YXIgYWRkcmVzcyA9IFwiXCI7XG5cdFx0XHR2YXIgZ2VvRGlzdGFuY2UgPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5zY29yZSAhPSBudWxsICYmIGRhdGFbaV0uc2NvcmUgIT0gXCJcIikge1xuXHRcdFx0XHRzY29yZVdpZHRoID0gKGRhdGFbaV0uc2NvcmXjgIAv44CANSnjgIAqIDEwMCArIFwiJVwiO1xuXHRcdFx0XHRzY29yZSA9IGRhdGFbaV0uc2NvcmU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnJlY2VudF9vcmRlcl9udW0gIT0gbnVsbCAmJiBkYXRhW2ldLnJlY2VudF9vcmRlcl9udW0gIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIiDmnIjplIDph48vXCIgKyBkYXRhW2ldLnJlY2VudF9vcmRlcl9udW07XG5cdFx0XHR9IGVsc2UgaWYoZGF0YVtpXS5hdmdfcHJpY2UgIT0gbnVsbCAmJiBkYXRhW2ldLmF2Z19wcmljZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MSA9IFwiIOS6uuWdhy9cIiArIGRhdGFbaV0uYXZnX3ByaWNlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5waG9uZSAhPSBudWxsICYmIGRhdGFbaV0ucGhvbmUgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg6IGU57O755S16K+dOlwiICsgZGF0YVtpXS5waG9uZTtcblx0XHRcdH3jgIBlbHNlIGlmKGRhdGFbaV0uY2l0eSAhPSBudWxsICYmIGRhdGFbaV0uY2l0eSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MiA9IFwiICDmiYDlnKjln47luII6XCIgKyBkYXRhW2ldLmNpdHk7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmRlc2NyaXB0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLmRlc2NyaXB0aW9uKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGRlc09yb3RoZXIgPSBkYXRhW2ldLmRlc2NyaXB0aW9uO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoZGF0YVtpXS5vcGVuaW5nX2hvdXJzICE9IG51bGwgJiYgZGF0YVtpXS5vcGVuaW5nX2hvdXJzICE9IFwiXCIgJiYgdHlwZW9mKGRhdGFbaV0ub3BlbmluZ19ob3VycykgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGRlc09yb3RoZXIgKz0gXCLokKXkuJrml7bpl7Q6XCIgKyAgZGF0YVtpXS5vcGVuaW5nX2hvdXJzICsgXCI8YnIvPlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGRhdGFbaV0ucmVjb21tZW5kX2l0ZW0gIT0gbnVsbCAmJiBkYXRhW2ldLnJlY29tbWVuZF9pdGVtICE9IFwiXCIgJiYgdHlwZW9mKGRhdGFbaV0ucmVjb21tZW5kX2l0ZW0pICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRkZXNPcm90aGVyICs9IFwi5o6o6I2QOlwiO1xuXHRcdFx0XHRcdGZvcih2YXIgayA9IDA7IGsgPCBkYXRhW2ldLnJlY29tbWVuZF9pdGVtLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRkZXNPcm90aGVyICs9ICBkYXRhW2ldLnJlY29tbWVuZF9pdGVtW2tdICsgXCIgICAgXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlc09yb3RoZXIgKz0gXCI8YnIvPlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmFkZHJlc3MgIT0gbnVsbCAmJiBkYXRhW2ldLmFkZHJlc3MgIT0gXCJcIikge1xuXHRcdFx0XHRhZGRyZXNzID0gZGF0YVtpXS5hZGRyZXNzO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0ucG9pX2FkZHJlc3MgIT0gbnVsbCAmJiBkYXRhW2ldLnBvaV9hZGRyZXNzICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0ucG9pX2FkZHJlc3M7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmdlb0Rpc3RhbmNlICE9IG51bGwgJiYgZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBcIlwiKSB7XG5cdFx0XHRcdGdlb0Rpc3RhbmNlID0gZGF0YVtpXS5nZW9EaXN0YW5jZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiXHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIgKyB0aXRsZSArIFwiPC9hPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCIgPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtjb2xvcjojZmZjMzBjO1xcXCI+IFwiICsgc2NvcmUgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDEgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDIgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdFx0KyBcdFx0XHRcdFx0ZGVzT3JvdGhlclxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTFweDtcXFwiPlwiICsgYWRkcmVzcyArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiArIFwiICBcIiArIGdlb0Rpc3RhbmNlICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLXdhaW1haVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdFxuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS13YWltYWlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC13YWltYWlcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIjwvZGl2PlwiO1xuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi53YWltYWkgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS13YWltYWlcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi53YWltYWkgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLXdhaW1haVwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCAgaWYoJChcIi5tb3JlLXdhaW1haVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0XHQgICQoXCIubW9yZS13YWltYWlcIikuc2xpZGVEb3duKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC13YWltYWlcIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHQgIH0gZWxzZSB7XG5cdFx0XHQgICQoXCIubW9yZS13YWltYWlcIikuc2xpZGVVcCgpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtd2FpbWFpXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdFx0ICB9XG5cdH0pO1xufTtcblxuLyog5ZWG5ZOB5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IHByb2R1Y3RcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5ZWG5ZOBPC9zcGFuPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJQcm9kdWN0XCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtcHJvZHVjdFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIHRhZ3MgPSBcIlRBR1M6Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0Zm9yKHZhciBrID0gMDsgayA8IGRhdGFbaV0uaW50cm9kdWN0aW9uLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0aWYoayA8IDYpIHtcblx0XHRcdFx0XHRcdGludHJvZHVjdGlvbiArPSBkYXRhW2ldLmludHJvZHVjdGlvbltrXSArIFwiPGJyLz5cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0udGFncyAhPSBudWxsICYmIGRhdGFbaV0udGFncyAhPSBcIlwiKSB7XG5cdFx0XHRcdGZvcih2YXIgbCA9IDA7IGwgPCBkYXRhW2ldLnRhZ3MubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0XHR0YWdzICs9IGRhdGFbaV0udGFnc1tsXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpICsgXCImbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiPGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgaW50cm9kdWN0aW9uICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHRhZ3MgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1wcm9kdWN0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1wcm9kdWN0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtcHJvZHVjdFxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIucHJvZHVjdCAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLXByb2R1Y3RcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5wcm9kdWN0IC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1wcm9kdWN0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgaWYoJChcIi5tb3JlLXByb2R1Y3RcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdCAgJChcIi5tb3JlLXByb2R1Y3RcIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtcHJvZHVjdFwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHQgIH0gZWxzZSB7XG5cdFx0ICAkKFwiLm1vcmUtcHJvZHVjdFwiKS5zbGlkZVVwKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtcHJvZHVjdFwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59O1xuXG4vKiDmlrDpl7vmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdzVGVtcGxldChkYXRhKSB7XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgbmV3c1xcXCI+XCJcblx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5paw6Ze7PC9zcGFuPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0PC9kaXY+XCI7XG5cblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiTmV3c1wiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLW5ld3NcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgY29udGVudCA9IFwiXCI7XG5cdFx0XHR2YXIgd3JpdGVyID0gXCJcIjtcblx0XHRcdHZhciB0aW1lID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uY29udGVudCAhPSBudWxsICYmIGRhdGFbaV0uY29udGVudCAhPSBcIlwiKSB7XG5cdFx0XHRcdGNvbnRlbnQgPSBkYXRhW2ldLmNvbnRlbnQubGVuZ3RoIDw9IDYwID8gZGF0YVtpXS5jb250ZW50IDogZGF0YVtpXS5jb250ZW50LnN1YnN0cigwLCA2MCkgKyBcIi4uLi5cIjtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ud3JpdGVyICE9IG51bGwgJiYgZGF0YVtpXS53cml0ZXIgIT0gXCJcIikge1xuXHRcdFx0XHR3cml0ZXIgPSBkYXRhW2ldLndyaXRlcjtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0udGltZSAhPSBudWxsICYmIGRhdGFbaV0udGltZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpbWUgPSBkYXRhW2ldLnRpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHR2YXIgaXRlbSA9IFwiPGRpdiBjbGFzcz0nY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj48aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIiArIHRpdGxlICsgXCI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdCsgXHRcdFx0XHRcdFx0Y29udGVudFxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTFweDtcXFwiPlwiICsgd3JpdGVyICsgXCIgICBcIiArIHRpbWUgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLW5ld3NcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLW5ld3NcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1uZXdzXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIjwvZGl2PlwiO1xuXHRcdFx0XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLm5ld3MgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1uZXdzXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIubmV3cyAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XHRcblx0JChcIi5zbGlkZS1uZXdzXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgaWYoJChcIi5tb3JlLW5ld3NcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdCAgJChcIi5tb3JlLW5ld3NcIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtbmV3c1wiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHQgIH0gZWxzZSB7XG5cdFx0ICAkKFwiLm1vcmUtbmV3c1wiKS5zbGlkZVVwKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtbmV3c1wiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59O1xuXG4vKiDlm6LotK3mqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3Vwb25UZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBjb3Vwb25cXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5Zui6LStPC9zcGFuPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50PSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIkNvdXBvblwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLWNvdXBvblxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBzY29yZVdpZHRoID0gXCIwJVwiO1xuXHRcdFx0dmFyIHNjb3JlID0gXCLmmoLml6Dor4TliIZcIjtcblx0XHRcdHZhciByaWdodDEgPSBcIlwiO1xuXHRcdFx0dmFyIHJpZ2h0MiA9IFwiXCI7XG5cdFx0XHR2YXIgZGVzT3JvdGhlciA9IFwiXCI7XG5cdFx0XHR2YXIgYWRkcmVzcyA9IFwiXCI7XG5cdFx0XHR2YXIgZ2VvRGlzdGFuY2UgPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5zY29yZSAhPSBudWxsICYmIGRhdGFbaV0uc2NvcmUgIT0gXCJcIikge1xuXHRcdFx0XHRzY29yZVdpZHRoID0gKGRhdGFbaV0uc2NvcmXjgIAv44CANSnjgIAqIDEwMCArIFwiJVwiO1xuXHRcdFx0XHRzY29yZSA9IGRhdGFbaV0uc2NvcmU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnJldGFpbF9wcmljZSAhPSBudWxsICYmIGRhdGFbaV0ucmV0YWlsX3ByaWNlICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQxID0gXCIgIOmbtuWUruS7tzpcIiArIGRhdGFbaV0ucmV0YWlsX3ByaWNlO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0uc2FsZV9jb3VudCAhPSBudWxsICYmIGRhdGFbaV0uc2FsZV9jb3VudCAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MSA9IFwi44CA44CA5bey6ZSA5ZSuXCIgKyBkYXRhW2ldLnNhbGVfY291bnQ7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnByaWNlICE9IG51bGwgJiYgZGF0YVtpXS5wcmljZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MiA9IFwiICDlm6LotK3ku7c6XCIgKyBkYXRhW2ldLnByaWNlO1xuXHRcdFx0feOAgGVsc2UgaWYoZGF0YVtpXS5jaXR5ICE9IG51bGwgJiYgZGF0YVtpXS5jaXR5ICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQyID0gXCIgIOaJgOWcqOWfjuW4gjpcIiArIGRhdGFbaV0uY2l0eTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uZGVhbF9kZXRhaWxzICE9IG51bGwgJiYgZGF0YVtpXS5kZWFsX2RldGFpbHMgIT0gXCJcIiAmJiB0eXBlb2YoZGF0YVtpXS5kZWFsX2RldGFpbHMpICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0ZGVzT3JvdGhlciA9IGRhdGFbaV0uZGVhbF9kZXRhaWxzLmxlbmd0aCA8PSA2MCA/IGRhdGFbaV0uZGVhbF9kZXRhaWxzIDogZGF0YVtpXS5kZWFsX2RldGFpbHMuc3Vic3RyKDAsIDYwKSArIFwiLi4uLlwiOyBcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ucG9pX2luZm8ucG9pX2FkZHJlc3MgIT0gbnVsbCAmJiBkYXRhW2ldLnBvaV9pbmZvLnBvaV9hZGRyZXNzICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0ucG9pX2luZm8ucG9pX2FkZHJlc3M7XG5cdFx0XHR9IGVsc2UgaWYoZGF0YVtpXS5wb2lfaW5mby5wb2lfbmFtZSAhPSBudWxsICYmIGRhdGFbaV0ucG9pX2luZm8ucG9pX25hbWUgIT0gXCJcIikge1xuXHRcdFx0XHRhZGRyZXNzID0gZGF0YVtpXS5wb2lfaW5mby5wb2lfbmFtZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uZ2VvRGlzdGFuY2UgIT0gbnVsbCAmJiBkYXRhW2ldLmdlb0Rpc3RhbmNlICE9IFwiXCIpIHtcblx0XHRcdFx0Z2VvRGlzdGFuY2UgPSBkYXRhW2ldLmdlb0Rpc3RhbmNlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaXRlbSA9XCJcdDxkaXYgY2xhc3M9XFxcImNhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIiArIHRpdGxlICsgXCI8L2E+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcInN0YXJyYXRpbmcgaWNvbi1zdGFyXFxcIiA+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJpY29uLXN0YXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIiArIHNjb3JlV2lkdGggKyBcIjtcXFwiPjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O2NvbG9yOiNmZmMzMGM7XFxcIj4gXCIgKyBzY29yZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHJpZ2h0MSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHJpZ2h0MiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8cCBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7XFxcIiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO1xcXCI+XCJcblx0XHRcdFx0XHQrIFx0XHRcdFx0XHRkZXNPcm90aGVyXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L3A+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyBhZGRyZXNzICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6I2ZmNmQwMDtmb250LXNpemU6MTFweDtcXFwiPlwiICArIFwiICBcIiArIGdlb0Rpc3RhbmNlICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1jb3Vwb25cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLWNvdXBvblxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LWNvdXBvblxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHRcdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIjwvZGl2PlwiO1xuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi5jb3Vwb24gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1jb3Vwb25cIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5jb3Vwb24gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLWNvdXBvblwiKS5jbGljayhmdW5jdGlvbigpe1xuXHQgIGlmKCQoXCIubW9yZS1jb3Vwb25cIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdCAgJChcIi5tb3JlLWNvdXBvblwiKS5zbGlkZURvd24oKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1jb3Vwb25cIikudGV4dChcIuaKmOWPoFwiKTtcblx0ICB9IGVsc2Uge1xuXHRcdCAgJChcIi5tb3JlLWNvdXBvblwiKS5zbGlkZVVwKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtY291cG9uXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdCAgfVxuXHR9KTtcbn07XG5cbi8qIOefpeivhuaooeadvyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RlbXBsYXRlL3RlbXBsYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==