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

var _jquery = __webpack_require__(10);

var _jquery2 = _interopRequireDefault(_jquery);

var _template = __webpack_require__(11);

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
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./main-css.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./main-css.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "body, form, html, img, input, p, span {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-family: SimHei\n}\n\na {\n\ttext-decoration: none;\n}\n\nsearch-input, p {\n\t-ms-word-break: break-all;\n\tword-break: break-all;\n\tword-wrap: break-word;\n\t-webkit-hyphens: auto;\n\t-moz-hyphens: auto;\n\t-ms-hyphens: auto;\n\thyphens: auto;\n\ttext-align: justify\n}\n\np {\n\tline-height: 150%\n}\n\nth {\n\tfont-weight: 700\n}\n\ntd, th {\n\tdisplay: table-cell;\n\tvertical-align: inherit;\n\tword-break: break-all;\n\tword-wrap: break-word\n}\n\n.g {\n\tbackground-color: #FFF;\n\ttext-align: center\n}\n\n.t {\n\ttransition: all .2s linear;\n\t-o-transition: all .2s linear;\n\t-moz-transition: all .2s linear;\n\t-webkit-transition: all .2s linear\n}\n\n#h {\n\twidth: 100%\n}\n\n.l {\n\tmargin: auto;\n\tbackground-repeat: no-repeat;\n\n}\n\n.search-query {\n\twidth: 100%;\n\theight: 20px;\n\tbackground: #FFFFFF;\n\tcolor: #000;\n\toutline: 0;\n\tfont: 17px arial;\n\tline-height: 22px;\n\tborder-radius: 0;\n\t-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);\n\t-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);\n\tbox-shadow: 0 1px 3px rgba(0, 0, 0, .3)\n}\n\n.search-query {\n\tbox-shadow: 0 0 10px #3385ff !important\n}\n\n.search-query:focus {\n\tbox-shadow: 0 0 18px #3385ff !important\n}\n\n.b {\n\tbackground: #757373;\n\theight: 40px;\n\tcursor: pointer;\n\tborder-radius: 0\n}\n\n.b:hover {\n\tbackground: #858585\n}\n\n.b:active {\n\tbackground: #707070\n}\n\n#ub {\n\tdisplay: block;\n\twidth: 150px;\n\tfloat: left\n}\n\n#bu {\n\tfloat: left;\n\twidth: 130px;\n\theight: 100%\n}\n\n#ba {\n\tfloat: left;\n\tmargin: 8px\n}\n\n#bn {\n\tfloat: right;\n\tfont-size: 15px;\n\tfont-family: 'gill sans';\n\tmargin-top: 11px;\n\tmargin-right: 5px;\n\tcolor: #FFF;\n\ttext-align: left;\n\theight: 20px;\n\twidth: 80px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap\n}\n\n#bw {\n\tfloat: right;\n\twidth: 11px;\n\theight: 10px;\n\tmargin-right: 9px;\n\tmargin-top: 16px;\n\tbackground-position: 0 0;\n\tbackground-size: 304px 128px;\n\tbackground-repeat: no-repeat\n}\n\n#dc {\n\tdisplay: block;\n\tfloat: right;\n\twidth: 8px;\n\tmargin-top: -97px;\n\tmargin-right: 11px;\n\theight: 30px;\n\tbackground-position: -11px 0;\n\tbackground-size: 304px 128px;\n\tbackground-repeat: no-repeat\n}\n\n#ta {\n\tmargin-left: 4px;\n\tmargin-top: 9px\n}\n\n#tu {\n\tfloat: right;\n\twidth: 38px;\n\theight: 100%\n}\n\n#tlb {\n\tfloat: left;\n\tdisplay: block;\n\twidth: 110px;\n\theight: 100%\n}\n\n#tl {\n\twidth: 68px;\n\theight: 23px;\n\tmargin-top: 9px;\n\tmargin-left: 15px;\n\tbackground-position: -134px 0;\n\tbackground-size: 304px 128px;\n\tbackground-repeat: no-repeat\n}\n\n.adl {\n\tcolor: #757373;\n\tfont-size: 12px;\n\tfont-style: italic;\n\tborder-bottom: 1px solid #c7c7c7\n}\n#logo {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.mobile-line {\n\t-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);\n\t-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);\n\tbox-shadow: 0 1px 3px rgba(0, 0, 0, .3)\n}\n\n.movie, .video, .waimai, .product, .news, .coupon {\n\tmin-height: 54px;\n}\n\n.tcdPageCode-movie, .tcdPageCode-video, .tcdPageCode-waimai, .tcdPageCode-product, .tcdPageCode-news, .tcdPageCode-coupon {\n\tpadding: 15px 20px;\n\ttext-align: left;\n\tcolor: #ccc;\n\ttext-align: center;\n}\n\n\n.tcdPageCode-movie a, .tcdPageCode-video a, .tcdPageCode-waimai a, .tcdPageCode-product a, .tcdPageCode-news a, .tcdPageCode-coupon a {\n\tdisplay: inline-block;\n\tcolor: #428bca;\n\tdisplay: inline-block;\n\theight: 25px;\n\tline-height: 25px;\n\tpadding: 0 10px;\n\tborder: 1px solid #ddd;\n\tmargin: 0 2px;\n\tborder-radius: 4px;\n\tvertical-align: middle;\n}\n\n.tcdPageCode-movie a:hover, .tcdPageCode-video a:hover, .tcdPageCode-waimai a:hover, .tcdPageCode-product a:hover, .tcdPageCode-news a:hover, .tcdPageCode-coupon a:hover, {\n\ttext-decoration: none;\n\tborder: 1px solid #428bca;\n}\n\n.tcdPageCode-movie span.current, .tcdPageCode-video span.current, .tcdPageCode-waimai span.current, .tcdPageCode-product span.current, .tcdPageCode-news span.current, .tcdPageCode-coupon span.current, {\n\tdisplay: inline-block;\n\theight: 25px;\n\tline-height: 25px;\n\tpadding: 0 10px;\n\tmargin: 0 2px;\n\tcolor: #fff;\n\tbackground-color: #428bca;\n\tborder: 1px solid #428bca;\n\tborder-radius: 4px;\n\tvertical-align: middle;\n}\n\n.tcdPageCode-movie span.disabled, .tcdPageCode-video span.disabled, .tcdPageCode-waimai span.disabled, .tcdPageCode-product span.disabled, .tcdPageCode-news span.disabled, .tcdPageCode-coupon span.disabled, {\n\tdisplay: inline-block;\n\theight: 25px;\n\tline-height: 25px;\n\tpadding: 0 10px;\n\tmargin: 0 2px;\n\tcolor: #bfbfbf;\n\tbackground: #f2f2f2;\n\tborder: 1px solid #bfbfbf;\n\tborder-radius: 4px;\n\tvertical-align: middle;\n}\n\n.slide-movie, .slide-video, .slide-waimai, .slide-product, .slide-news,\n\t.slide-coupon {\n\tfont-size: 14px;\n\ttext-align: center;\n\tcursor: pointer;\n}\n\np.cite {\n\tcolor: green;\n\tfont-size: 11px;\n\tfont-style: italic;\n}\n\n/* 暂时饿了吗 */\n@font-face {\n\tfont-family: icon-star;\n\tsrc: url(" + __webpack_require__(4) + ");\n\tsrc: local('\\263A\\FE0E'), url(" + __webpack_require__(5) + ") format('woff'),\n\t\turl(" + __webpack_require__(6) + ") format('truetype'),\n\t\turl(" + __webpack_require__(7) + ") format('svg');\n\tfont-weight: 400;\n\tfont-style: normal;\n}\n\n.icon-star {\n\tfont-size: 13px;\n}\n\n[class*=\" icon-\"], [class^=icon-] {\n\tfont-family: icon-star;\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: 400;\n\t-webkit-font-feature-settings: normal;\n\tfont-feature-settings: normal;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.starrating {\n\tfont-size: 13px;\n\tposition: relative;\n\tdisplay: inline-block;\n\tline-height: 1em;\n\tcolor: #ccc;\n}\n\n.starrating span {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\toverflow: hidden;\n\tcolor: #ffc30c;\n\twhite-space: nowrap;\n}\n\n.starrating span:before, .starrating:before {\n\tcontent: \"\\E950\\E950\\E950\\E950\\E950\";\n}\n/* 暂时饿了吗 */\n.categroy {\n\toverflow: hidden;\n\tcursor: pointer;\n\tposition: relative;\n\tmargin-top: 15px;\n\twidth: 100%;\n\tbackground-color: #FFF;\n\t-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);\n\t-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);\n\tbox-shadow: 0 1px 3px rgb(51, 133, 255)\n}\n\n@media screen and (min-width:1120px) {\n\t.logo-main {\n\t\twidth: 300px;\n\t\tline-height: 60px;\n\t\toverflow: hidden;\n\t\tmargin: 120px auto 50px;\n\t\tcursor: hand;\n\t}\n\t.logo-results-main {\n\t\twidth:10%;\n\t\theight:5%;\n\t\tmargin:20px auto 20px;\n\t}\n\t.logo-title {\n\t\tcolor: #757373;\n\t\tfont-size: 50px;\n\t\tmargin-right: 0px;\n\t\tmargin-top: -10px;\n\t\tmargin-left: 10px;\n\t}\n\t#lc {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 350px;\n\t\theight: auto\n\t}\n\t#rc {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\twidth: 350px;\n\t\tright: 0;\n\t\theight: auto;\n\t\ttext-align: left;\n\t\tcolor: #FFF;\n\t\tborder-top: 3px #ffd800 solid\n\t}\n\t#rbc {\n\t\tz-index: -1;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tright: 0;\n\t\twidth: 350px;\n\t\theight: 100%;\n\t\tbackground: -moz-linear-gradient(left, #494949, #676767);\n\t\tbackground: -webkit-linear-gradient(left, #494949, #676767);\n\t\tbackground: -o-linear-gradient(left, #494949, #676767);\n\t\tbackground: linear-gradient(left, #494949, #676767)\n\t}\n\t#mes {\n\t\tdisplay: none\n\t}\n\t.in {\n\t\ttext-align: justify;\n\t\twidth: auto;\n\t\tpadding-left: 48px;\n\t\tpadding-top: 14px;\n\t\tpadding-bottom: 14px;\n\t\tcolor: #494949;\n\t\tpadding-right: 15px;\n\t\tline-height: 155%\n\t}\n\t.tn {\n\t\twhite-space: nowrap;\n\t\tpadding: 8px;\n\t\tmin-width: 110px\n\t}\n\t#rh {\n\t\twidth: 100%;\n\t\tdisplay: block\n\t}\n\t#f {\n\t\tdisplay: block;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\theight: 30px;\n\t\tbottom: 0;\n\t\tfont-size: 12px;\n\t\tbackground-color: rgba(230, 230, 230, .3);\n\t\tborder-top: 1px #dedede solid;\n\t\tmin-width: 760px;\n\t\tcolor: #959595\n\t}\n\t#f a {\n\t\tcolor: #959595;\n\t\tmargin-left: 4px;\n\t\tmargin-right: 4px;\n\t}\n\t#f a:hover {\n\t\tcolor: #494949\n\t}\n\t#f a:active {\n\t\tcolor: #757373\n\t}\n\t#fh {\n\t\tposition: absolute;\n\t\tleft: 28px;\n\t\ttop: 7px\n\t}\n\t#fc {\n\t\tposition: absolute;\n\t\tright: 160px;\n\t\ttop: 7px\n\t}\n\t#fi {\n\t\tposition: absolute;\n\t\tright: 24px;\n\t\ttop: 7px\n\t}\n\t#fl {\n\t\tdisplay: inline-block;\n\t\tmargin: auto;\n\t\tmargin-top: 9px;\n\t\twidth: 94px;\n\t\theight: 11px;\n\t\tbackground-position: -40px 0;\n\t\tbackground-size: 304px 128px;\n\t\tbackground-repeat: no-repeat\n\t}\n\t#search {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -9px;\n\t\twidth: 14.84%;\n\t\tbackground-position: -264px 0;\n\t\tbackground-size: 304px 128px;\n\t\tbackground-repeat: no-repeat;\n\t\tpadding: 0;\n\t\tmargin: 0\n\t}\n\t.search-query {\n\t\tpadding: 10px 0px 10px 9px\n\t}\n\t#sc {\n\t\tmargin-top: 20px\n\t}\n\t.model-select {\n\t\tfloat: left;\n\t\twidth: 12.8%;\n\t}\n\t.search-input {\n\t\tposition: relative;\n\t\twidth: 85.2%;\n\t\tfloat: left;\n\t\tmargin-left: 2%;\n\t\theight: 40px;\n\t}\n\t.body-main {\n\t\tmax-width: 800px;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\tmargin-top: 100px;\n\t}\n\t.search-main {\n\t\tmax-width: 50%;\n\t\tmargin: 0px auto;\n\t}\n\t.cloud-main {\n\t\tmax-width: 50%;\n\t\tmargin: 0px auto;\n\t}\n\t#t {\n\t\tbackground-color: #494949;\n\t\twidth: 100%;\n\t\theight: 4px\n\t}\n\t#tn {\n\t\tdisplay: none\n\t}\n\t#l {\n\t\tmargin-top: 44px;\n\t\twidth: 304px;\n\t\theight: 128px;\n\t\tbackground-size: 304px 128px;\n\t\tbackground-position: 0 -30px\n\t}\n\t#ro {\n\t\tmargin-top: 13px;\n\t\twidth: 205px;\n\t\theight: 69px;\n\t\tbackground-size: 205px 88px;\n\t\tbackground-position: 0 -21px\n\t}\n\t::-webkit-input-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 16px\n\t}\n\t:-moz-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 16px\n\t}\n\t::-moz-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 16px\n\t}\n\t:-ms-input-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 16px\n\t}\n\t.nav-category {\n\t\tfloat: left;\n\t\twidth: 96%;\n\t\theight: 40px;\n\t\tbackground: #f8f8f8;\n\t\tlist-style-type: none;\n\t}\n\t.nav-category li {\n\t\tmargin-right: 10px;\n\t\tdisplay: inline;\n\t\tposition: relative;\n\t\tleft: 20%;\n\t\twhite-space: nowrap;\n\t\tfont-size: 17px;\n\t}\n\t.nav-category li a {\n\t\tcolor: #666;\n\t\tdisplay: inline-block;\n\t\theight: 34px;\n\t\tline-height: 34px;\n\t\ttext-align: center;\n\t\twidth: 40px;\n\t}\n\t.nav-category li a:hover {\n\t\tcolor: #19b955;\n\t}\n\t.nav-category li a:visited {\n\t\tcolor: #19b955;\n\t}\n\t.s_btn {\n\t\twidth: 100px;\n\t\theight: 40px;\n\t\tcolor: white;\n\t\tfont-size: 15px;\n\t\tletter-spacing: 1px;\n\t\tbackground: #3385ff;\n\t\tborder-bottom: 1px solid #2d78f4;\n\t\toutline: medium;\n\t\t-webkit-appearance: none;\n\t\t-webkit-border-radius: 0;\n\t}\n\t#cloud {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t.card-content {\n\t\tmargin-left: 15%;\n\t}\n\t.card-title {\n\t\tdisplay: block;\n\t\tcolor: #039be5;\n\t\tfont-size: 15px;\n\t}\n\t.card-title a {\n\t\tcolor: #039be5;\n\t}\n\t.card-title a:visited {\n\t\tcolor: #12506d;\n\t}\n\t.categroy-title {\n\t\tcolor: black;\n\t\tfont-size: 20px;\n\t\ttext-align: center;\n\t}\n\t.img-restaurant {\n\t\tmax-width: 72px;\n\t\tmax-height: 72px;\n\t\theight: auto;\n\t\toverflow: hidden;\n\t\tfloat: left;\n\t}\n\t.no-results {\n\t\tfont-size:20px;\n\t\twidth:100%;\n\t\ttext-align:center;\n\t\tfloat:left;\n\t}\n}\n\n/* @media screen and (min-width:770px) and (max-width:1120px) { */\n@media screen and (min-width:770px) and (max-width:1120px) {\n\t.logo-results-main {\n\t\twidth:15%;\n\t\theight:5%;\n\t\tmargin:20px auto 20px;\n\t}\n\t#lc {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: auto\n\t}\n\t#mes, #rc {\n\t\tdisplay: none\n\t}\n\t.in {\n\t\ttext-align: justify;\n\t\twidth: auto;\n\t\tpadding-left: 48px;\n\t\tpadding-top: 14px;\n\t\tpadding-bottom: 14px;\n\t\tcolor: #494949;\n\t\tpadding-right: 15px;\n\t\tline-height: 155%\n\t}\n\t.tn {\n\t\twhite-space: nowrap;\n\t\tpadding: 8px;\n\t\tmin-width: 110px\n\t}\n\t#rh {\n\t\twidth: 100%;\n\t\tdisplay: block\n\t}\n\t#f {\n\t\tdisplay: block;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\theight: 30px;\n\t\tbottom: 0;\n\t\tfont-size: 12px;\n\t\tbackground-color: rgba(230, 230, 230, .3);\n\t\tborder-top: 1px #dedede solid;\n\t\tmin-width: 760px;\n\t\tcolor: #959595\n\t}\n\t#f a {\n\t\tcolor: #959595;\n\t\tmargin-left: 4px;\n\t\tmargin-right: 4px\n\t}\n\t#f a:hover {\n\t\tcolor: #494949\n\t}\n\t#f a:active {\n\t\tcolor: #757373\n\t}\n\t#fh {\n\t\tposition: absolute;\n\t\tleft: 28px;\n\t\ttop: 7px\n\t}\n\t#fc {\n\t\tposition: absolute;\n\t\tright: 160px;\n\t\ttop: 7px\n\t}\n\t#fi {\n\t\tposition: absolute;\n\t\tright: 24px;\n\t\ttop: 7px\n\t}\n\t#fl {\n\t\tdisplay: inline-block;\n\t\tmargin: auto;\n\t\tmargin-top: 9px;\n\t\twidth: 94px;\n\t\theight: 11px;\n\t\tbackground-position: -40px 0;\n\t\tbackground-size: 304px 128px;\n\t\tbackground-repeat: no-repeat\n\t}\n\t#sc {\n\t\tmargin-top: 20px\n\t}\n\t.f {\n\t\tmax-width: 710px;\n\t\tpadding-left: 30px;\n\t\tpadding-right: 30px;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto\n\t}\n\t#t {\n\t\tbackground-color: #494949;\n\t\twidth: 100%;\n\t\theight: 4px\n\t}\n\t#tn {\n\t\tdisplay: none\n\t}\n\t#l {\n\t\tmargin-top: 44px;\n\t\twidth: 304px;\n\t\theight: 128px;\n\t\tbackground-size: 304px 128px;\n\t\tbackground-position: 0 -30px\n\t}\n\t#ro {\n\t\tmargin-top: 13px;\n\t\twidth: 205px;\n\t\theight: 69px;\n\t\tbackground-size: 205px 88px;\n\t\tbackground-position: 0 -21px\n\t}\n\t::-webkit-input-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 16px\n\t}\n\t:-moz-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 16px\n\t}\n\t::-moz-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 16px\n\t}\n\t:-ms-input-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 16px\n\t}\n\t.logo-main {\n\t\twidth: 400px;\n\t\tline-height: 60px;\n\t\toverflow: hidden;\n\t\tmargin: 120px auto 50px;\n\t\tcursor: hand;\n\t}\n\t.logo-title {\n\t\tcolor: #757373;\n\t\tfont-size: 50px;\n\t\tmargin-right: 0px;\n\t\tmargin-top: -10px;\n\t\tmargin-left: 10px;\n\t}\n\t#search {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -7px;\n\t\twidth: 14.84%;\n\t\tbackground-position: -264px 0;\n\t\tbackground-size: 304px 128px;\n\t\tbackground-repeat: no-repeat;\n\t\tpadding: 0;\n\t\tmargin: 0\n\t}\n\t.search-query {\n\t\tpadding: 10px 0px 10px 9px\n\t}\n\t.model-select {\n\t\tfloat: left;\n\t\twidth: 12.8%;\n\t}\n\t.search-input {\n\t\tposition: relative;\n\t\twidth: 85.2%;\n\t\tfloat: left;\n\t\tmargin-left: 2%;\n\t\theight: 40px;\n\t}\n\t.search-main {\n\t\tmax-width: 70%;\n\t\tmargin: 0px auto;\n\t}\n\t.cloud-main {\n\t\tmax-width: 70%;\n\t\tmargin: 0px auto;\n\t}\n\t.nav-category {\n\t\tfloat: left;\n\t\twidth: 100%;\n\t\theight: 40px;\n\t\tbackground: #f8f8f8;\n\t\tlist-style-type: none;\n\t}\n\t.nav-category li {\n\t\tmargin-right: 10px;\n\t\tdisplay: inline;\n\t\tposition: relative;\n\t\t/* left:25%; */\n\t\twhite-space: nowrap;\n\t\tfont-size: 13px;\n\t}\n\t.nav-category li a {\n\t\tcolor: #666;\n\t\tdisplay: inline-block;\n\t\theight: 34px;\n\t\tline-height: 34px;\n\t\ttext-align: center;\n\t\twidth: 34px;\n\t}\n\t.nav-category li a:hover {\n\t\tcolor: #19b955;\n\t}\n\t.nav-category li a:visited {\n\t\tcolor: #19b955;\n\t}\n\t.s_btn {\n\t\twidth: 100px;\n\t\theight: 40px;\n\t\tcolor: white;\n\t\tfont-size: 15px;\n\t\tletter-spacing: 1px;\n\t\tbackground: #3385ff;\n\t\tborder-bottom: 1px solid #2d78f4;\n\t\toutline: medium;\n\t\t-webkit-appearance: none;\n\t\t-webkit-border-radius: 0;\n\t}\n\t#cloud {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t.card-content {\n\t\tmargin-left: 15%;\n\t}\n\t.card-title {\n\t\tdisplay: block;\n\t\tfont-size: 15px;\n\t}\n\t.card-title a {\n\t\tcolor: #039be5;\n\t}\n\t.card-title a:visited {\n\t\tcolor: #12506d;\n\t}\n\t.categroy-title {\n\t\tcolor: #000000;\n\t\tfont-size: 20px;\n\t\ttext-align: center;\n\t}\n\t.img-restaurant {\n\t\tmax-width: 72px;\n\t\tmax-height: 72px;\n\t\theight: auto;\n\t\toverflow: hidden;\n\t\tfloat: left;\n\t}\n\t.no-results {\n\t\tfont-size:20px;\n\t\twidth:100%;\n\t\ttext-align:center;\n\t\tfloat:left;\n\t}\n}\n\n@media screen and (max-width:770px) {\n\t.logo-results-main {\n\t\twidth:30%;\n\t\theight:5%;\n\t\tmargin:20px auto 20px;\n\t}\n\t#lc {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: auto\n\t}\n\t#rc {\n\t\tdisplay: none\n\t}\n\t#mes {\n\t\theight: 25px;\n\t\tfont-size: 14px;\n\t\tmargin-left: 20px;\n\t\tmargin-right: 20px;\n\t\tmargin-top: 40px;\n\t\tdisplay: block;\n\t\tanimation: efd 5s infinite;\n\t\t-moz-animation: efd 5s infinite;\n\t\t-webkit-animation: efd 5s infinite;\n\t\t-o-animation: efd 5s infinite\n\t}\n\t.in {\n\t\ttext-align: justify;\n\t\twidth: auto;\n\t\tpadding-left: 48px;\n\t\tpadding-top: 14px;\n\t\tpadding-bottom: 14px;\n\t\tcolor: #494949;\n\t\tpadding-right: 15px;\n\t\tline-height: 157%\n\t}\n\t.tn {\n\t\twhite-space: nowrap;\n\t\tpadding: 8px;\n\t\tmin-width: 90px\n\t}\n\t#rl {\n\t\tdisplay: none\n\t}\n\t#rh {\n\t\theight: 5px;\n\t\tdisplay: block\n\t}\n\t#f {\n\t\tmargin-top: 50px;\n\t\tfont-size: 12px;\n\t\tcolor: #757373\n\t}\n\t#f a {\n\t\tcolor: #494949;\n\t\tmargin-left: 1px;\n\t\tmargin-right: 1px\n\t}\n\t#fh {\n\t\tmargin-top: 17px\n\t}\n\t#fc {\n\t\tmargin-top: 10px\n\t}\n\t#fi {\n\t\tdisplay: none\n\t}\n\t#fl {\n\t\tdisplay: inline-block;\n\t\tmargin: auto;\n\t\tmargin-top: 11px;\n\t\twidth: 94px;\n\t\theight: 11px;\n\t\tbackground-position: -40px 0;\n\t\tbackground-size: 304px 128px;\n\t\tbackground-repeat: no-repeat\n\t}\n\t#sc {\n\t\tmargin-top: 10px\n\t}\n\t.f {\n\t\tmax-width: 710px;\n\t\tpadding-left: 10px;\n\t\tpadding-right: 10px;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto\n\t}\n\t#t {\n\t\tbackground-color: #494949;\n\t\twidth: 100%;\n\t\theight: 43px;\n\t\tborder-bottom: 1px #ffd800 solid\n\t}\n\t#tn {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%\n\t}\n\t#l {\n\t\tmargin-top: 30px;\n\t\twidth: 200px;\n\t\theight: 85px;\n\t\tbackground-size: 200px 85px;\n\t\tbackground-position: 0 -20px\n\t}\n\t#ro {\n\t\tdisplay: none\n\t}\n\t::-webkit-input-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 13px\n\t}\n\t:-moz-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 13px\n\t}\n\t::-moz-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 13px\n\t}\n\t:-ms-input-placeholder {\n\t\tcolor: #757373;\n\t\tfont-style: italic;\n\t\tfont-size: 13px\n\t}\n\t.logo-main {\n\t\twidth: 75%;\n\t\tline-height: 85%;\n\t\toverflow: hidden;\n\t\tmargin: 80px auto 50px;\n\t\tcursor: hand;\n\t}\n\t.logo-title {\n\t\tcolor: #757373;\n\t\tfont-size: 50px;\n\t\tmargin-right: 0px;\n\t\tmargin-top: -10px;\n\t\tmargin-left: 10px;\n\t}\n\t#search {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -9px;\n\t\twidth: 14.84%;\n\t\tbackground-position: -264px 0;\n\t\tbackground-size: 304px 128px;\n\t\tbackground-repeat: no-repeat;\n\t\tpadding: 0;\n\t\tmargin: 0\n\t}\n\t.search-query {\n\t\tpadding: 10px 0px 10px 9px\n\t}\n\t.model-select {\n\t\tfloat: left;\n\t\twidth: 12.8%;\n\t\tdisplay: none;\n\t}\n\t.search-input {\n\t\tposition: relative;\n\t\twidth: 95%;\n\t\tfloat: left;\n\t\tmargin-left: 2%;\n\t\theight: 40px;\n\t}\n\t.search-main {\n\t\tmax-width: 90%;\n\t\tmargin: 0px auto;\n\t}\n\t.cloud-main {\n\t\tmax-width: 90%;\n\t\tmargin: 0px auto;\n\t}\n\t.nav-category {\n\t\tfloat: left;\n\t\twidth: 90%;\n\t\theight: 40px;\n\t\tbackground: #f8f8f8;\n\t\tlist-style-type: none;\n\t}\n\t.nav-category li {\n\t\tmargin-right: 6px;\n\t\tdisplay: inline;\n\t\tposition: relative;\n\t\t/* left:25%; */\n\t\twhite-space: nowrap;\n\t\tfont-size: 13px;\n\t}\n\t.nav-category li a {\n\t\tcolor: #666;\n\t\tdisplay: inline-block;\n\t\theight: 34px;\n\t\tline-height: 34px;\n\t\ttext-align: center;\n\t\twidth: 25px;\n\t}\n\t.nav-category li a:hover {\n\t\tcolor: #19b955;\n\t}\n\t.nav-category li a:visited {\n\t\tcolor: #19b955;\n\t}\n\t.s_btn {\n\t\twidth: 100px;\n\t\theight: 40px;\n\t\tcolor: white;\n\t\tfont-size: 15px;\n\t\tletter-spacing: 1px;\n\t\tbackground: #3385ff;\n\t\tborder-bottom: 1px solid #2d78f4;\n\t\toutline: medium;\n\t\t-webkit-appearance: none;\n\t\t-webkit-border-radius: 0;\n\t}\n\t#cloud {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t.card-content {\n\t\tmargin-left: 21%;\n\t}\n\t.card-title {\n\t\tdisplay: block;\n\t\tfont-size: 15px;\n\t}\n\t.card-title a {\n\t\tcolor: #039be5;\n\t}\n\t.card-title a:visited {\n\t\tcolor: #12506d;\n\t}\n\t.categroy-title {\n\t\tcolor: #ff7610;\n\t\tfont-size: 25px;\n\t\ttext-align: center;\n\t}\n\t.img-restaurant {\n\t\tmax-width: 72px;\n\t\tmax-height: 72px;\n\t\theight: auto;\n\t\toverflow: hidden;\n\t\tfloat: left;\n\t}\n\t.no-results {\n\t\tfont-size:10px;\n\t\twidth:100%;\n\t\ttext-align:center;\n\t\tfloat:left;\n\t}\n}\n\n.bh {\n\ttext-align: left;\n\tmargin-top: 15px;\n\theight: 30px;\n\twidth: 100%\n}\n\n.bd {\n\tfloat: left;\n\tdisplay: inline-block;\n\theight: 30px;\n\tborder-left: 3px #757373 solid;\n\tborder-right: 3px #ffd800 solid\n}\n\n.bht {\n\tdisplay: inline-block;\n\tmargin-left: 8px;\n\tpadding-top: 6px;\n\tfont-size: 15px;\n\tcolor: #494949;\n\theight: 21px;\n\twidth: 95%;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tcursor: default\n}\n\n.lk {\n\tcolor: #000000;\n\tborder-bottom: 2px solid #ffd800;\n}\n\n.mylk {\n\tcolor: #FFFFFF;\n\tborder-bottom: 1px solid #0BDA41;\n}\n\n.myborder {\n\tborder-color: #ffd800;\n\tborder-width: 1px 1px 1px 1px;\n\tborder-bottom: 0.5px solid #ffd800;\n\tborder-style: solid;\n\tmargin-right: 4px;\n}\n\n.ht {\n\tpadding-right: 60px\n}\n\n.ts {\n\twidth: 60px;\n\theight: 52px;\n\tfloat: right;\n\ttext-align: center\n}\n\n.tsp {\n\theight: 3px\n}\n\n.tst {\n\tbackground-color: #c5c5c5;\n\theight: 3px;\n\twidth: 34px;\n\tmargin-left: auto;\n\tmargin-right: auto\n}\n\n.green {\n\tbackground-color: #9fff9f\n}\n\n.yellow {\n\tbackground-color: #ffd800\n}\n\n.red {\n\tbackground-color: #f15959\n}\n\n.tsn {\n\tdisplay: block;\n\tpadding-top: 17px;\n\tpadding-left: 3px;\n\tcolor: #797979;\n\tfont-family: sans-serif;\n\tfont-size: 10px;\n\tcursor: default\n}\n\n.gf {\n\twidth: 100%;\n\theight: 250px;\n\tborder: 0\n}\n\n.bf {\n\tword-break: break-all;\n\tmargin-top: 15px;\n\tfont-size: 13px;\n\twidth: auto;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tcolor: #757373\n}\n\n.categroy-panel {\n\tpadding: 10px\n}\n\n.bt {\n\toverflow: hidden;\n\tdisplay: block;\n\twidth: 100%;\n\ttable-layout: fixed;\n\tpadding-top: 2px;\n\tpadding-bottom: 2px;\n\tborder-collapse: collapse;\n\tborder-spacing: 5;\n\tborder: 0;\n\tborder-color: #c5c5c5\n}\n\n.th {\n\tbackground-color: #dadada\n}\n\n.trh {\n\tbackground-color: #eee\n}\n\n.tny {\n\tbackground-color: #ffea79\n}\n\n.lr {\n\tmargin: auto;\n\twidth: 67px;\n\theight: 35px;\n\tdisplay: block;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 67px 15px;\n\tbackground-position: 0 10px\n}\n\n.gsr {\n\tpadding: 10px;\n\tdisplay: block;\n\ttext-align: left\n}\n\n.gsh {\n\tfont-size: 16px;\n\tpadding-bottom: 5px;\n\theight: 21px;\n\tcolor: #000;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis\n}\n\n.gsc {\n\tfont-size: 13px;\n\tcolor: #757373;\n\tpadding-bottom: 5px;\n\tword-break: break-all;\n\tword-wrap: break-word\n}\n\n.gsl {\n\tfont-size: 12px;\n\tcolor: #c5c5c5;\n\tpadding-bottom: 0;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis\n}\n\n.gss {\n\tdisplay: block;\n\tpadding: 10px;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px\n}\n\n.gsp {\n\theight: 1px;\n\tbackground-color: #eee\n}\n\n.n {\n\tfloat: left;\n\twidth: 48px;\n\theight: 45px;\n\tmargin-top: 6px;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 120px 160px;\n}\n\n.ct {\n\tbackground-position: -35px -80px\n}\n\n.eq {\n\tbackground-position: 5px 0\n}\n\n.fk {\n\tbackground-position: -75px -80px\n}\n\n.gr {\n\tbackground-position: -35px 0\n}\n\n.mp {\n\tbackground-position: -75px 0\n}\n\n.qt {\n\tbackground-position: 5px -40px\n}\n\n.tb {\n\tbackground-position: -35px -40px\n}\n\n.wc {\n\tbackground-position: 5px -80px\n}\n\n.un {\n\tbackground-position: -75px -40px\n}\n\n.pn {\n\tbackground-position: 5px -120px\n}\n\n.al {\n\tbackground-position: -35px -120px\n}\n\n.ls {\n\tbackground-position: -75px -120px\n}\n\n.wb {\n\tfont-size: 15px;\n\tpadding: 1px;\n\tpadding-left: 5px;\n\tpadding-right: 5px;\n\tbackground-color: #f6f6f6;\n\tborder-radius: 3px;\n\tborder: 1px #c5c5c5 solid\n}\n\n.ywb {\n\tborder: 1px #ffd800 solid\n}\n\n.lwb {\n\tbackground-color: #f6f6f6;\n\tborder: 1px #d0d0d0 solid;\n\tcolor: #d0d0d0;\n\tmargin-left: 13px\n}\n\n.wb2 {\n\tfont-size: 15px;\n\tpadding: 1px;\n\tpadding-left: 5px;\n\tpadding-right: 5px;\n\tbackground-color: rgb(71, 71, 71);\n\tborder-radius: 3px;\n\tborder: 1px #c5c5c5 solid\n}\n\n.bwb {\n\tborder: 1px #3385FF solid\n}\n\n.bsm {\n\ttext-align: left;\n\t/* word-break: break-all; */\n\tmargin-top: 15px;\n\tfont-size: 10px;\n\twidth: auto;\n\tpadding-left: 15px;\n\tpadding-right: 10px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tcolor: #000000\n}\n\n/* .bxg {\n\tbackground-color: #fff;\n\ttext-align: center\n} */\n.bxc {\n\tdisplay: block;\n\tmargin-right: 10px;\n\tmargin-left: auto;\n\twidth: 100px;\n\theight: 30px;\n\tbackground-color: rgba(0, 0, 0, .7)\n}\n\n.bxf {\n\theight: 30px;\n\twidth: 100px\n}\n\n.bkta {\n\tmargin: 10px;\n\tpadding: 10px;\n\tfont-size: 17px;\n\tbackground-color: #f7f7f7;\n\twidth: 89%;\n\theight: 200px;\n\tresize: none\n}\n\n#bksb {\n\tcursor: pointer;\n\tdisplay: block;\n\tmargin: 30px;\n\tpadding-bottom: 10px;\n\tmargin-top: 2px;\n\tfont-size: 17px;\n\ttext-decoration: underline;\n\tcolor: #3498db;\n\tbackground-color: transparent\n}\n\n.me_h1 {\n\tmargin-left: 15px;\n\tmargin-top: 15px;\n\tfont-size: 15px;\n\tfont-style: italic;\n\tcolor: #c7c7c7;\n\tmargin-right: 15px\n}\n\n.me_h2 {\n\tmargin-left: 20px;\n\tmargin-top: 12px;\n\tline-height: 22px;\n\tfont-size: 12px;\n\tcolor: #c7c7c7;\n\tmargin-right: 15px\n}\n\n.me_h2wb {\n\tcolor: #FFF;\n\tfont-size: 12px;\n\tpadding: 1px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground-color: #595959;\n\tborder-radius: 3px;\n\tborder: 1px #c7c7c7 solid\n}\n\n.me_h2wb:hover {\n\tborder: 1px #ffd800 solid\n}\n\n.me_oname {\n\tdisplay: block;\n\tcolor: #fff;\n\tmargin-top: 15px;\n\tfont-size: 22px;\n\tfont-style: inherit;\n\tfont-weight: 700;\n\tpadding-left: 10px;\n\tborder-bottom: 1px solid #ffd800;\n\tborder-left: 27px solid #ffd800\n}\n\n.me_oname:hover {\n\tcolor: #ffd800\n}\n\n.me_class {\n\tcolor: #ffd800;\n\tborder-bottom: 1px solid #c7c7c7;\n\tfont-size: 17px\n}\n\n.me_class:hover {\n\tcolor: #fff\n}\n\n.me_bx {\n\twidth: 300px;\n\theight: auto;\n\tmargin: auto;\n\ttext-align: left\n}\n\n.me_ob {\n\tdisplay: inline-block;\n\ttext-align: left;\n\tcolor: #fff;\n\tbackground-color: #595959;\n\tborder: 1px solid #c9aa00;\n\tmargin-left: 3px;\n\tfont-size: 12px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tmargin-top: 10px;\n\twidth: 42px;\n\theight: 42px;\n\tpadding-top: 3px;\n\tpadding-left: 6px;\n\tpadding-right: 0;\n\tpadding-bottom: 5px;\n\tvertical-align: top\n}\n\n.me_ob:hover {\n\tborder: 1px #ffd800 solid\n}\n\n.me_at {\n\tdisplay: inline-block;\n\tcolor: #FFF;\n\tfont-size: 13px;\n\tpadding: 1px;\n\tmargin-left: 3px;\n\tmargin-top: 8px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tpadding-bottom: 2px;\n\tborder-radius: 4px;\n\tborder: 1px #c7c7c7 solid\n}\n\n.me_at:hover {\n\tborder: 1px #ffd800 solid\n}\n\n.me_li {\n\tfont-size: 13px;\n\tpadding-left: 5px;\n\tcolor: #ffd800;\n\twhite-space: nowrap\n}\n\n.me_la {\n\tdisplay: block;\n\tcolor: #FFF;\n\twidth: 250px;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tborder-bottom: 1px rgba(0, 0, 0, 0) solid\n}\n\n.me_la:hover {\n\tborder-bottom: 1px #ffd800 solid\n}\n\n.me_sg {\n\tmargin-bottom: 30px\n}\n\n#websearch {\n\toverflow: hidden\n}\n\n.xpd {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 40px;\n\tbottom: 0;\n\tfont-size: 12px;\n\tcolor: #5c5c5c;\n\tbackground: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0,\n\t\trgba(255, 255, 255, .54) 29%, rgba(255, 255, 255, 1) 54%,\n\t\trgba(255, 255, 255, 1) 98%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255,\n\t\t255, 255, 0)), color-stop(29%, rgba(255, 255, 255, .54)),\n\t\tcolor-stop(54%, rgba(255, 255, 255, 1)),\n\t\tcolor-stop(98%, rgba(255, 255, 255, 1)));\n\tbackground: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0,\n\t\trgba(255, 255, 255, .54) 29%, rgba(255, 255, 255, 1) 54%,\n\t\trgba(255, 255, 255, 1) 98%);\n\tbackground: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0,\n\t\trgba(255, 255, 255, .54) 29%, rgba(255, 255, 255, 1) 54%,\n\t\trgba(255, 255, 255, 1) 98%);\n\tbackground: -ms-linear-gradient(top, rgba(255, 255, 255, 0) 0,\n\t\trgba(255, 255, 255, .54) 29%, rgba(255, 255, 255, 1) 54%,\n\t\trgba(255, 255, 255, 1) 98%);\n\tbackground: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0,\n\t\trgba(255, 255, 255, .54) 29%, rgba(255, 255, 255, 1) 54%,\n\t\trgba(255, 255, 255, 1) 98%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',\n\t\tendColorstr='#ffffff', GradientType=0)\n}\n\n.xpb {\n\theight: 120px;\n\toverflow: hidden;\n\tcursor: pointer\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6f8da460be5fe019bd2f42a988a01792.eot";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a61c32b62c96c4ec519c63aea3f92cfe.woff";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8e5aeb35e58aac93666f16e8cadc5edd.ttf";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "94ccdd7894d3162b55b7683f0f441d47.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ }),
/* 11 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmIwNjAxYzJlMmNhNmVjYjU4YWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluL21haW4tY3NzLmNzcz9lODQxIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi9tYWluLWNzcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvZm9udHMvaWNvbi1zdGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2ZvbnRzL2ljb24tc3Rhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9jc3MvZm9udHMvaWNvbi1zdGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2ZvbnRzL2ljb24tc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LmpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy90ZW1wbGF0ZS90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImNyZWF0ZVRlbXBsZXRXaXRoQ2F0ZWdyb3kiLCJ0eXBlU2V0IiwiYXJndW1lbnRzIiwicmVzdWx0cyIsImZvckVhY2giLCJ0eXBlSXRlbSIsIm1vdmllVGVtcGxldCIsInZpZGVvVGVtcGxldCIsIm11c2ljVGVtcGxldCIsIndhaW1haVRlbXBsZXQiLCJwcm9kdWN0VGVtcGxldCIsIm5ld3NUZW1wbGV0IiwiY291cG9uVGVtcGxldCIsImNyZWF0ZVRlbXBsZXRXaXRoT3V0Q2F0ZWdyb3kiLCJkYXRhIiwiY2F0ZWdyb3kiLCJzdW0iLCJjb3VudCIsImkiLCJsZW5ndGgiLCJ0eXBlIiwiaW1nTmFtZSIsInRpdGxlIiwic2NvcmVXaWR0aCIsInNjb3JlIiwiaW5mb3JtYXRpb24iLCJpbnRyb2R1Y3Rpb24iLCJqdW1wVXJsIiwidXJsIiwiZnJvbV9hcHAiLCJuYW1lQXJyIiwic3BsaXQiLCJqIiwiaGlnaExpZ2h0VGl0bGUiLCJ3ZWJVcmwiLCJpdGVtIiwiYXBwZW5kIiwieSIsImVhY2giLCJjc3MiLCJjcmVhdGVQYWdlIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJjdXJyZW50IiwiYmFja0ZuIiwicCIsInoiLCJjbGljayIsInNsaWRlRG93biIsInRleHQiLCJzbGlkZVVwIiwic2VhcmNoIiwiJHNlYXJjaFF1ZXJ5IiwibW9kZWwiLCJ2YWwiLCJ0cmltIiwicGFyYW1zIiwiYWpheCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImVtcHR5IiwiU2V0Iiwibm9SZXN1bHRzIiwieCIsImFkZCIsImVycm9yIiwiZXJyb3JJbmZvIiwiZXJyb3JUeXBlIiwiYWxlcnQiLCJHZXRRdWVyeVN0cmluZyIsIm5hbWUiLCJyZWciLCJSZWdFeHAiLCJyIiwid2luZG93IiwibG9jYXRpb24iLCJzdWJzdHIiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsImdldExvY2F0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJCTWFwIiwiR2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJnZXRTdGF0dXMiLCJCTUFQX1NUQVRVU19TVUNDRVNTIiwibGF0VGV4dCIsInBvaW50IiwibGF0IiwibG9uVGV4dCIsImxuZyIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsInJlYWR5Iiwic2VhcmNoUXVlcnkiLCJhdHRyIiwia2V5ZG93biIsImUiLCJjdXJLZXkiLCJ3aGljaCIsImNvbmZpcm1DYWxsYmFjayIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJpZCIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjb25jYXQiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJFcnJvciIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJjdXJyZW50RGlyIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiZml4ZWRDc3MiLCJmdWxsTWF0Y2giLCJvcmlnVXJsIiwidW5xdW90ZWRPcmlnVXJsIiwibyIsIiQxIiwidGVzdCIsIm5ld1VybCIsImluZGV4T2YiLCIkIiwid3JpdGVyIiwiZGVzY3JpcHRpb24iLCJyaWdodDEiLCJyaWdodDIiLCJkZXNPcm90aGVyIiwiYWRkcmVzcyIsImdlb0Rpc3RhbmNlIiwicmVjZW50X29yZGVyX251bSIsImF2Z19wcmljZSIsInBob25lIiwiY2l0eSIsIm9wZW5pbmdfaG91cnMiLCJyZWNvbW1lbmRfaXRlbSIsImsiLCJwb2lfYWRkcmVzcyIsInRhZ3MiLCJsIiwidGltZSIsInJldGFpbF9wcmljZSIsInNhbGVfY291bnQiLCJwcmljZSIsImRlYWxfZGV0YWlscyIsInBvaV9pbmZvIiwicG9pX25hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixF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QkE0RyxHQUFFLGVBQUYsRUFBbUJuRyxLQUFuQixDQUF5QixZQUFVO0FBQ2pDLE1BQUdtRyxFQUFFLGNBQUYsRUFBa0I1RyxHQUFsQixDQUFzQixTQUF0QixLQUFvQyxNQUF2QyxFQUErQztBQUM5QzRHLEtBQUUsY0FBRixFQUFrQmxHLFNBQWxCO0FBQ0FrRyxLQUFFLG9CQUFGLEVBQXdCakcsSUFBeEIsQ0FBNkIsSUFBN0I7QUFDQSxHQUhELE1BR087QUFDTmlHLEtBQUUsY0FBRixFQUFrQmhHLE9BQWxCO0FBQ0FnRyxLQUFFLG9CQUFGLEVBQXdCakcsSUFBeEIsQ0FBNkIsS0FBN0I7QUFDQTtBQUNGLEVBUkQ7QUFTQTs7QUFFRCxVIiwiZmlsZSI6ImpzL21haW4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmIwNjAxYzJlMmNhNmVjYjU4YWUiLCIvLyDlr7zlhaUgY3NzXG5pbXBvcnQgXCIuLi9jc3MvbWFpbi9tYWluLWNzcy5jc3NcIlxuXG5cbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCAqIGFzIHRlbXBsYXRlIGZyb20gXCIuL3RlbXBsYXRlL3RlbXBsYXRlLmpzXCI7XG5cbi8vIOWIhuexu+aooeadv1xuZnVuY3Rpb24gY3JlYXRlVGVtcGxldFdpdGhDYXRlZ3JveSgpIHtcblx0dmFyIHR5cGVTZXQgPSBhcmd1bWVudHNbMF07XG5cdHZhciByZXN1bHRzID0gYXJndW1lbnRzWzFdO1xuXHRpZih0eXBlU2V0ICE9IG51bGwpIHtcblx0XHR0eXBlU2V0LmZvckVhY2goZnVuY3Rpb24gKHR5cGVJdGVtKSB7XG5cdCAgICBcdGlmKHR5cGVJdGVtID09IFwiTW92aWVcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLm1vdmllVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiVmlkZW9cIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLnZpZGVvVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiTXVzaWNcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLm11c2ljVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiUmVzdGF1cmFudFwiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUud2FpbWFpVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiUHJvZHVjdFwiKSB7XG5cdCAgICBcdFx0dGVtcGxhdGUucHJvZHVjdFRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIk5ld3NcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLm5ld3NUZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJDb3Vwb25cIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLmNvdXBvblRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH1cblx0XHR9KTtcblx0fVxufVxuXG4vLyDkuI3liIbnsbvmqKHmnb9cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsZXRXaXRoT3V0Q2F0ZWdyb3koZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IGFsbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+55S15b2xPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCI7XG5cdFxuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJNb3ZpZVwiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLW1vdmllXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgaW5mb3JtYXRpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5zY29yZSAhPSBudWxsICYmIGRhdGFbaV0uc2NvcmUgIT0gXCJcIikge1xuXHRcdFx0XHRzY29yZVdpZHRoID0gKGRhdGFbaV0uc2NvcmXjgIAv44CANSnjgIAqIDEwMCArIFwiJVwiO1xuXHRcdFx0XHRzY29yZSA9IGRhdGFbaV0uc2NvcmU7XG5cdFx0XHR9XG5cblxuXHRcdFx0aWYoZGF0YVtpXS5pbmZvcm1hdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gXCJcIikge1xuXHRcdFx0XHRpbmZvcm1hdGlvbiArPSBcIjxkaXY+PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM2NjY2NjY7Zm9udC1zaXplOjEycHg7XFxcIj5cIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLkuLvmvJRcIilbMF0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBcIuS4u+a8lFwiICsgZGF0YVtpXS5pbmZvcm1hdGlvbi5zcGxpdChcIuexu+Wei1wiKVswXS5zcGxpdChcIuS4u+a8lFwiKVsxXSArIFwiPC9zcGFuPjwvZGl2PlwiO1xuXHRcdFx0fVxuXG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gXCJcIikge1xuXHRcdFx0XHRpbnRyb2R1Y3Rpb24gPSBkYXRhW2ldLmludHJvZHVjdGlvbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IFwiPGRpdiBjbGFzcz0nY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj48aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIisgdGl0bGUgK1wiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJpY29uLXN0YXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIiArIHNjb3JlV2lkdGggKyBcIjtcXFwiPjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZmMzMGM7Zm9udC1zaXplOjEzcHg7XFxcIj5cIiArIHNjb3JlICsgXCIo6LGG55OjKVwiICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXHRcdFx0XHRpbmZvcm1hdGlvblxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1tb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1tb3ZpZVxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHRcdCArXCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIubW92aWUgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS1tb3ZpZVwiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1tb3ZpZVwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdGlmKCQoXCIubW9yZS1tb3ZpZVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0XHQkKFwiLm1vcmUtbW92aWVcIikuc2xpZGVEb3duKCk7XG5cdFx0XHQkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChcIi5tb3JlLW1vdmllXCIpLnNsaWRlVXAoKTtcblx0XHRcdCQoXCIuc2xpZGUtdGV4dC1tb3ZpZVwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qIOaQnOe0ouW8guatpeiwg+eUqCAqL1xuZnVuY3Rpb24gc2VhcmNoKCkge1xuXHR2YXIgJHNlYXJjaFF1ZXJ5ID0gJChcIiNzZWFyY2gtcXVlcnlcIik7XHQvLyDnlKjmiLfmkJzntKLkuLJcblx0dmFyIG1vZGVsID0gMDtcdC8vIOS/neeVmeaooeadvyAx5Y+36KGo56S65LiN5YiG57G7XG5cdGlmKCRzZWFyY2hRdWVyeS52YWwoKS50cmltKCkgPT0gXCJcIikge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgcGFyYW1zID0ge1xuXHRcdFwic291cmNlXCI6IFwibWVcIixcblx0XHRcInNlYXJjaFF1ZXJ5XCI6ICRzZWFyY2hRdWVyeS52YWwoKSxcblx0XHRcInR5cGVOYW1lXCI6IFwiXCIsXG5cdFx0XCJsYXRcIjogXCJcIixcblx0XHRcImxvblwiOiBcIlwiLFxuICAgIH07XG5cdGlmKHR5cGVvZihhcmd1bWVudHNbMF0pICE9IFwidW5kZWZpbmVkXCIgJiYgYXJndW1lbnRzWzBdICE9IFwiXCIpIHtcblx0XHQkKFwiI3Jlc3VsdC1jYXRlZ3JveS10aXRsZVwiKS50ZXh0KGFyZ3VtZW50c1swXSArIFwiOuaQnOe0oue7k+aenFwiKTtcblx0XHRwYXJhbXNbXCJ0eXBlTmFtZVwiXSA9IGFyZ3VtZW50c1swXTtcblx0fVxuXHRpZigkKFwiI2xhdFwiKS52YWwoKSAhPSBcIlwiIHx8ICQoXCIjbGF0XCIpLnZhbCgpICE9IG51bGwpIHtcblx0XHRwYXJhbXNbXCJsYXRcIl0gPSAkKFwiI2xhdFwiKS52YWwoKTtcblx0fVxuXHRpZigkKFwiI2xvblwiKS52YWwoKSAhPSBcIlwiIHx8ICQoXCIjbG9uXCIpLnZhbCgpICE9IG51bGwpIHtcblx0XHRwYXJhbXNbXCJsb25cIl0gPSAkKFwiI2xvblwiKS52YWwoKTtcblx0fVxuICAgICQuYWpheCh7XG4gICAgXHQvKnVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLCovXG4gICAgICAgIHVybDogXCJodHRwOi8vNjAuMjA1LjEzOS43MTo4MDgwL01vYmlsZVNlYXJjaC9hcGkvc2VhcmNoIXNlYXJjaC5hY3Rpb25cIixcbiAgICAgICAgLyp1cmw6IFwiaHR0cDovLzEwLjI3LjIyMS4xMDcvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLCovXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgIGRhdGFUeXBlIDogXCJqc29uXCIsXG4gICAgICAgIGRhdGEgOiBwYXJhbXMsIFxuICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5lbXB0eSgpO1xuICAgICAgICBcdHZhciByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICBcdHZhciB0eXBlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBcdFxuICAgICAgICBcdC8vIOWmguaenOaQnOe0ouafpeivoue7k+aenOS4uuepulxuICAgICAgICBcdGlmKHJlc3VsdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgXHRcdHZhciBub1Jlc3VsdHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJuby1yZXN1bHRzXFxcIj7lvojmirHmrYnvvIzmiJHku6zmsqHmnInmn6Xor6LliLDkuI5cXFwiXCIgKyAkKFwiI3NlYXJjaC1xdWVyeVwiKS52YWwoKSArIFwiXFxcIuebuOWFs+eahOe7k+aenDwvc3Bhbj5cIjtcbiAgICAgICAgXHRcdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChub1Jlc3VsdHMpO1xuICAgICAgICBcdH1cbiAgICAgICAgXHRmb3IodmFyIHggPSAwOyB4IDwgcmVzdWx0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBcdFx0dHlwZVNldC5hZGQocmVzdWx0c1t4XS50eXBlKTtcbiAgICAgICAgXHR9XG4gICAgICAgIFx0XG4gICAgICAgIFx0aWYobW9kZWzjgIA9PSAwKSB7XG4gICAgICAgIFx0XHQvLyDosIPnlKjnlJ/miJDmqKHmnb/mlrnms5Ut5YiG57G7XG4gICAgICAgIFx0XHRjcmVhdGVUZW1wbGV0V2l0aENhdGVncm95KHR5cGVTZXQsIHJlc3VsdHMpO1xuICAgICAgICBcdH0gZWxzZSB7XG4gICAgICAgIFx0XHQvLyDosIPnlKjnlJ/miJDmqKHmnb/mlrnms5Ut5LiN5YiG57G7XG4gICAgICAgIFx0XHRjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95KHR5cGVTZXQpO1xuICAgICAgICBcdH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbiAoZXJyb3JJbmZvICwgZXJyb3JUeXBlKSB7XG4gICAgICAgIFx0YWxlcnQoXCLml6Dms5Xor4bliKvmkJzntKLkuLJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyog6I635Y+W5Y+C5pWwICovXG5mdW5jdGlvbiBHZXRRdWVyeVN0cmluZyhuYW1lKSB7XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiKyBuYW1lICtcIj0oW14mXSopKCZ8JClcIik7XG4gICAgdmFyIHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgIGlmKHIgIT0gbnVsbCkge1xuICAgXHQgcmV0dXJuICBkZWNvZGVVUklDb21wb25lbnQoclsyXSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKiDojrflj5blnLDnkIbkv6Hmga8gKi9cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHQgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7ICBcblx0XHQgLy8g55m+5bqm5Zyw5Zu+QVBJ5Yqf6IO9ICBcblx0XHQgLyp2YXIgbWFwID0gbmV3IEJNYXAuTWFwKFwiY29udGFpbmVyXCIpOyAgXG5cdFx0IHZhciBwb2ludCA9IG5ldyBCTWFwLlBvaW50KDExNi4zMzEzOTgsMzkuODk3NDQ1KTsgIFxuICAgICAgICAgbWFwLmNlbnRlckFuZFpvb20ocG9pbnQsMTIpOyAqLyBcbiAgICAgICAgIHZhciBnZW9sb2NhdGlvbiA9IG5ldyBCTWFwLkdlb2xvY2F0aW9uKCk7XG4gICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgIGlmKHRoaXMuZ2V0U3RhdHVzKCkgPT0gQk1BUF9TVEFUVVNfU1VDQ0VTUykgeyAgXG4gICAgICAgICAgICAgICAgIC8vdmFyIG1rID0gbmV3IEJNYXAuTWFya2VyKHIucG9pbnQpO1xuICAgICAgICAgICAgICAgICAvL21hcC5hZGRPdmVybGF5KG1rKTtcbiAgICAgICAgICAgICAgICAgLy9tYXAucGFuVG8oci5wb2ludCk7XG4gICAgICAgICAgICAgICAgIHZhciBsYXRUZXh0ID0gXCI8aW5wdXQgaWQ9XFxcImxhdFxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwiXCIgKyByLnBvaW50LmxhdCArIFwiXFxcIi8+XCI7XG4gICAgICAgICAgICAgICAgIHZhciBsb25UZXh0ID0gXCI8aW5wdXQgaWQ9XFxcImxvblxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwiXCIgKyByLnBvaW50LmxuZyArIFwiXFxcIi8+XCI7XG4gICAgICAgICAgICAgICAgICQoXCIuYm9keS1tYWluXCIpLmFwcGVuZChsYXRUZXh0KTtcbiAgICAgICAgICAgICAgICAgJChcIi5ib2R5LW1haW5cIikuYXBwZW5kKGxvblRleHQpO1xuICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICBhbGVydCgn556s6Ze054iG54K477yM5a6a5L2N5aSx6LSlJyt0aGlzLmdldFN0YXR1cygpKTsgIFxuICAgICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICB9LHtlbmFibGVIaWdoQWNjdXJhY3k6IHRydWV9KVxuICAgICB9XG59XG5cbiQoXCJkb2N1bWVudFwiKS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdGdldExvY2F0aW9uKCk7XHQvLyDojrflj5blnLDnkIbkvY3nva5cblx0dmFyIHNlYXJjaFF1ZXJ5ID0gR2V0UXVlcnlTdHJpbmcoXCJzZWFyY2hRdWVyeVwiKTtcblx0JChcIi5uYXYtY2F0ZWdvcnkgbGkgYVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlYXJjaCgkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIi1cIilbMF0pO1x0XG5cdFx0fSk7XG5cdH0pO1xuXHRcblx0aWYoc2VhcmNoUXVlcnkgIT0gbnVsbCB8fCBzZWFyY2hRdWVyeSAhPSBcIlwiKSB7XG5cdFx0JChcIiNzZWFyY2gtcXVlcnlcIikudmFsKHNlYXJjaFF1ZXJ5KTtcblx0fVxuXHRzZWFyY2goKTtcblxufSk7XG5cbiQoXCIjc2VhcmNoLXF1ZXJ5XCIpLmtleWRvd24oZnVuY3Rpb24oZSl7XG5cdHZhciBjdXJLZXkgPSBlLndoaWNoO1xuXHRpZihjdXJLZXkgPT0gMTMpIHtcblx0XHQvKiAkKFwiI+Wbnui9puS6i+S7tuaMiemSruaOp+S7tlwiKS5jbGljaygpOyAqL1xuXHRcdHNlYXJjaCgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufSk7XG4kKFwiI3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbiAoKXtcblx0c2VhcmNoKCk7XG59KTtcblxudmFyIHBhcmFtcyA9IHtcblx0XHRcIlhPZmZzZXRcIjoyLCAvL+aPkOekuuahhuS9jee9ruaoquWQkeWBj+enu+mHjyzljZXkvY1weFxuXHRcdFwiWU9mZnNldFwiOjAsIC8v5o+Q56S65qGG5L2N572u57q15ZCR5YGP56e76YePLOWNleS9jXB4XG5cdFx0XCJ3aWR0aFwiOjM1MCwgLy/mj5DnpLrmoYblrr3luqbvvIzljZXkvY1weFxuXHRcdFwiZm9udENvbG9yXCI6XCJibGFja1wiLCAvL+aPkOekuuahhuaWh+Wtl+minOiJslxuXHRcdFwiZm9udENvbG9ySElcIjpcImJsYWNrXCIsIC8v5o+Q56S65qGG6auY5Lqu6YCJ5oup5pe25paH5a2X6aKc6ImyXG5cdFx0XCJmb250U2l6ZVwiOlwiMTNweFwiLCAvL+aWh+Wtl+Wkp+Wwj1xuXHRcdFwiZm9udEZhbWlseVwiOlwic2Fucy1zZXJpZlwiLCAvL+aWh+Wtl+Wtl+S9k1xuXHRcdFwiYm9yZGVyQ29sb3JcIjpcIiM3NTczNzNcIiwgLy/mj5DnpLrmoYbnmoTovrnmoYbpopzoibJcblx0XHRcImJnY29sb3JISVwiOlwiI2IwYWVhZVwiLCAvL+aPkOekuuahhumrmOS6rumAieaLqeeahOminOiJslxuXHRcdFwic3VnU3VibWl0XCI6ZmFsc2UgLy/pgInkuK3mj5DnpLrmoYbkuK3or43mnaHml7bmmK/lkKbmj5DkuqTooajljZVcbn07XG5cbmZ1bmN0aW9uIGNvbmZpcm1DYWxsYmFjaygpIHtcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21haW4uanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLWNzcy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi1jc3MuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21haW4tY3NzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL21haW4vbWFpbi1jc3MuY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGZvcm0sIGh0bWwsIGltZywgaW5wdXQsIHAsIHNwYW4ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LWZhbWlseTogU2ltSGVpXFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuc2VhcmNoLWlucHV0LCBwIHtcXG5cXHQtbXMtd29yZC1icmVhazogYnJlYWstYWxsO1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xcblxcdC1tb3otaHlwaGVuczogYXV0bztcXG5cXHQtbXMtaHlwaGVuczogYXV0bztcXG5cXHRoeXBoZW5zOiBhdXRvO1xcblxcdHRleHQtYWxpZ246IGp1c3RpZnlcXG59XFxuXFxucCB7XFxuXFx0bGluZS1oZWlnaHQ6IDE1MCVcXG59XFxuXFxudGgge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDBcXG59XFxuXFxudGQsIHRoIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmRcXG59XFxuXFxuLmcge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyXFxufVxcblxcbi50IHtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG5cXHQtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXJcXG59XFxuXFxuI2gge1xcblxcdHdpZHRoOiAxMDAlXFxufVxcblxcbi5sIHtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG59XFxuXFxuLnNlYXJjaC1xdWVyeSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0b3V0bGluZTogMDtcXG5cXHRmb250OiAxN3B4IGFyaWFsO1xcblxcdGxpbmUtaGVpZ2h0OiAyMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0LW1vei1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjMpXFxufVxcblxcbi5zZWFyY2gtcXVlcnkge1xcblxcdGJveC1zaGFkb3c6IDAgMCAxMHB4ICMzMzg1ZmYgIWltcG9ydGFudFxcbn1cXG5cXG4uc2VhcmNoLXF1ZXJ5OmZvY3VzIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMThweCAjMzM4NWZmICFpbXBvcnRhbnRcXG59XFxuXFxuLmIge1xcblxcdGJhY2tncm91bmQ6ICM3NTczNzM7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAwXFxufVxcblxcbi5iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAjODU4NTg1XFxufVxcblxcbi5iOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZDogIzcwNzA3MFxcbn1cXG5cXG4jdWIge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiAxNTBweDtcXG5cXHRmbG9hdDogbGVmdFxcbn1cXG5cXG4jYnUge1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdHdpZHRoOiAxMzBweDtcXG5cXHRoZWlnaHQ6IDEwMCVcXG59XFxuXFxuI2JhIHtcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRtYXJnaW46IDhweFxcbn1cXG5cXG4jYm4ge1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdnaWxsIHNhbnMnO1xcblxcdG1hcmdpbi10b3A6IDExcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFx0Y29sb3I6ICNGRkY7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0d2lkdGg6IDgwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwXFxufVxcblxcbiNidyB7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdHdpZHRoOiAxMXB4O1xcblxcdGhlaWdodDogMTBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDlweDtcXG5cXHRtYXJnaW4tdG9wOiAxNnB4O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDMwNHB4IDEyOHB4O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXG59XFxuXFxuI2RjIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0d2lkdGg6IDhweDtcXG5cXHRtYXJnaW4tdG9wOiAtOTdweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDExcHg7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IC0xMXB4IDA7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAzMDRweCAxMjhweDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XFxufVxcblxcbiN0YSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDRweDtcXG5cXHRtYXJnaW4tdG9wOiA5cHhcXG59XFxuXFxuI3R1IHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0d2lkdGg6IDM4cHg7XFxuXFx0aGVpZ2h0OiAxMDAlXFxufVxcblxcbiN0bGIge1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiAxMTBweDtcXG5cXHRoZWlnaHQ6IDEwMCVcXG59XFxuXFxuI3RsIHtcXG5cXHR3aWR0aDogNjhweDtcXG5cXHRoZWlnaHQ6IDIzcHg7XFxuXFx0bWFyZ2luLXRvcDogOXB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IC0xMzRweCAwO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMzA0cHggMTI4cHg7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxcbn1cXG5cXG4uYWRsIHtcXG5cXHRjb2xvcjogIzc1NzM3MztcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzdjN2M3XFxufVxcbiNsb2dvIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2JpbGUtbGluZSB7XFxuXFx0LW1vei1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjMpXFxufVxcblxcbi5tb3ZpZSwgLnZpZGVvLCAud2FpbWFpLCAucHJvZHVjdCwgLm5ld3MsIC5jb3Vwb24ge1xcblxcdG1pbi1oZWlnaHQ6IDU0cHg7XFxufVxcblxcbi50Y2RQYWdlQ29kZS1tb3ZpZSwgLnRjZFBhZ2VDb2RlLXZpZGVvLCAudGNkUGFnZUNvZGUtd2FpbWFpLCAudGNkUGFnZUNvZGUtcHJvZHVjdCwgLnRjZFBhZ2VDb2RlLW5ld3MsIC50Y2RQYWdlQ29kZS1jb3Vwb24ge1xcblxcdHBhZGRpbmc6IDE1cHggMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGNvbG9yOiAjY2NjO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnRjZFBhZ2VDb2RlLW1vdmllIGEsIC50Y2RQYWdlQ29kZS12aWRlbyBhLCAudGNkUGFnZUNvZGUtd2FpbWFpIGEsIC50Y2RQYWdlQ29kZS1wcm9kdWN0IGEsIC50Y2RQYWdlQ29kZS1uZXdzIGEsIC50Y2RQYWdlQ29kZS1jb3Vwb24gYSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGNvbG9yOiAjNDI4YmNhO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDI1cHg7XFxuXFx0cGFkZGluZzogMCAxMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuXFx0bWFyZ2luOiAwIDJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnRjZFBhZ2VDb2RlLW1vdmllIGE6aG92ZXIsIC50Y2RQYWdlQ29kZS12aWRlbyBhOmhvdmVyLCAudGNkUGFnZUNvZGUtd2FpbWFpIGE6aG92ZXIsIC50Y2RQYWdlQ29kZS1wcm9kdWN0IGE6aG92ZXIsIC50Y2RQYWdlQ29kZS1uZXdzIGE6aG92ZXIsIC50Y2RQYWdlQ29kZS1jb3Vwb24gYTpob3Zlciwge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjNDI4YmNhO1xcbn1cXG5cXG4udGNkUGFnZUNvZGUtbW92aWUgc3Bhbi5jdXJyZW50LCAudGNkUGFnZUNvZGUtdmlkZW8gc3Bhbi5jdXJyZW50LCAudGNkUGFnZUNvZGUtd2FpbWFpIHNwYW4uY3VycmVudCwgLnRjZFBhZ2VDb2RlLXByb2R1Y3Qgc3Bhbi5jdXJyZW50LCAudGNkUGFnZUNvZGUtbmV3cyBzcGFuLmN1cnJlbnQsIC50Y2RQYWdlQ29kZS1jb3Vwb24gc3Bhbi5jdXJyZW50LCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGhlaWdodDogMjVweDtcXG5cXHRsaW5lLWhlaWdodDogMjVweDtcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxuXFx0bWFyZ2luOiAwIDJweDtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM0MjhiY2E7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi50Y2RQYWdlQ29kZS1tb3ZpZSBzcGFuLmRpc2FibGVkLCAudGNkUGFnZUNvZGUtdmlkZW8gc3Bhbi5kaXNhYmxlZCwgLnRjZFBhZ2VDb2RlLXdhaW1haSBzcGFuLmRpc2FibGVkLCAudGNkUGFnZUNvZGUtcHJvZHVjdCBzcGFuLmRpc2FibGVkLCAudGNkUGFnZUNvZGUtbmV3cyBzcGFuLmRpc2FibGVkLCAudGNkUGFnZUNvZGUtY291cG9uIHNwYW4uZGlzYWJsZWQsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAyNXB4O1xcblxcdHBhZGRpbmc6IDAgMTBweDtcXG5cXHRtYXJnaW46IDAgMnB4O1xcblxcdGNvbG9yOiAjYmZiZmJmO1xcblxcdGJhY2tncm91bmQ6ICNmMmYyZjI7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnNsaWRlLW1vdmllLCAuc2xpZGUtdmlkZW8sIC5zbGlkZS13YWltYWksIC5zbGlkZS1wcm9kdWN0LCAuc2xpZGUtbmV3cyxcXG5cXHQuc2xpZGUtY291cG9uIHtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxucC5jaXRlIHtcXG5cXHRjb2xvcjogZ3JlZW47XFxuXFx0Zm9udC1zaXplOiAxMXB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyog5pqC5pe26aW/5LqG5ZCXICovXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IGljb24tc3RhcjtcXG5cXHRzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9pY29uLXN0YXIuZW90XCIpICsgXCIpO1xcblxcdHNyYzogbG9jYWwoJ1xcXFwyNjNBXFxcXEZFMEUnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL2ljb24tc3Rhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpLFxcblxcdFxcdHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9pY29uLXN0YXIudHRmXCIpICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG5cXHRcXHR1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvaWNvbi1zdGFyLnN2Z1wiKSArIFwiKSBmb3JtYXQoJ3N2ZycpO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uaWNvbi1zdGFyIHtcXG5cXHRmb250LXNpemU6IDEzcHg7XFxufVxcblxcbltjbGFzcyo9XFxcIiBpY29uLVxcXCJdLCBbY2xhc3NePWljb24tXSB7XFxuXFx0Zm9udC1mYW1pbHk6IGljb24tc3RhcjtcXG5cXHRzcGVhazogbm9uZTtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHQtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xcblxcdGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xcblxcdGZvbnQtdmFyaWFudDogbm9ybWFsO1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5zdGFycmF0aW5nIHtcXG5cXHRmb250LXNpemU6IDEzcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRsaW5lLWhlaWdodDogMWVtO1xcblxcdGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uc3RhcnJhdGluZyBzcGFuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRjb2xvcjogI2ZmYzMwYztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc3RhcnJhdGluZyBzcGFuOmJlZm9yZSwgLnN0YXJyYXRpbmc6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcXEU5NTBcXFxcRTk1MFxcXFxFOTUwXFxcXEU5NTBcXFxcRTk1MFxcXCI7XFxufVxcbi8qIOaaguaXtumlv+S6huWQlyAqL1xcbi5jYXRlZ3JveSB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbi10b3A6IDE1cHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG5cXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAzcHggcmdiKDUxLCAxMzMsIDI1NSlcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMTIwcHgpIHtcXG5cXHQubG9nby1tYWluIHtcXG5cXHRcXHR3aWR0aDogMzAwcHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDYwcHg7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHRtYXJnaW46IDEyMHB4IGF1dG8gNTBweDtcXG5cXHRcXHRjdXJzb3I6IGhhbmQ7XFxuXFx0fVxcblxcdC5sb2dvLXJlc3VsdHMtbWFpbiB7XFxuXFx0XFx0d2lkdGg6MTAlO1xcblxcdFxcdGhlaWdodDo1JTtcXG5cXHRcXHRtYXJnaW46MjBweCBhdXRvIDIwcHg7XFxuXFx0fVxcblxcdC5sb2dvLXRpdGxlIHtcXG5cXHRcXHRjb2xvcjogIzc1NzM3MztcXG5cXHRcXHRmb250LXNpemU6IDUwcHg7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwcHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0fVxcblxcdCNsYyB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAzNTBweDtcXG5cXHRcXHRoZWlnaHQ6IGF1dG9cXG5cXHR9XFxuXFx0I3JjIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdHdpZHRoOiAzNTBweDtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRcXHRjb2xvcjogI0ZGRjtcXG5cXHRcXHRib3JkZXItdG9wOiAzcHggI2ZmZDgwMCBzb2xpZFxcblxcdH1cXG5cXHQjcmJjIHtcXG5cXHRcXHR6LWluZGV4OiAtMTtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdHdpZHRoOiAzNTBweDtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgIzQ5NDk0OSwgIzY3Njc2Nyk7XFxuXFx0XFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzQ5NDk0OSwgIzY3Njc2Nyk7XFxuXFx0XFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICM0OTQ5NDksICM2NzY3NjcpO1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjNDk0OTQ5LCAjNjc2NzY3KVxcblxcdH1cXG5cXHQjbWVzIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lXFxuXFx0fVxcblxcdC5pbiB7XFxuXFx0XFx0dGV4dC1hbGlnbjoganVzdGlmeTtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDQ4cHg7XFxuXFx0XFx0cGFkZGluZy10b3A6IDE0cHg7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDE0cHg7XFxuXFx0XFx0Y29sb3I6ICM0OTQ5NDk7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMTVweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMTU1JVxcblxcdH1cXG5cXHQudG4ge1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0XFx0cGFkZGluZzogOHB4O1xcblxcdFxcdG1pbi13aWR0aDogMTEwcHhcXG5cXHR9XFxuXFx0I3JoIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRkaXNwbGF5OiBibG9ja1xcblxcdH1cXG5cXHQjZiB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0aGVpZ2h0OiAzMHB4O1xcblxcdFxcdGJvdHRvbTogMDtcXG5cXHRcXHRmb250LXNpemU6IDEycHg7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDIzMCwgMjMwLCAuMyk7XFxuXFx0XFx0Ym9yZGVyLXRvcDogMXB4ICNkZWRlZGUgc29saWQ7XFxuXFx0XFx0bWluLXdpZHRoOiA3NjBweDtcXG5cXHRcXHRjb2xvcjogIzk1OTU5NVxcblxcdH1cXG5cXHQjZiBhIHtcXG5cXHRcXHRjb2xvcjogIzk1OTU5NTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogNHB4O1xcblxcdFxcdG1hcmdpbi1yaWdodDogNHB4O1xcblxcdH1cXG5cXHQjZiBhOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogIzQ5NDk0OVxcblxcdH1cXG5cXHQjZiBhOmFjdGl2ZSB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzNcXG5cXHR9XFxuXFx0I2ZoIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0bGVmdDogMjhweDtcXG5cXHRcXHR0b3A6IDdweFxcblxcdH1cXG5cXHQjZmMge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRyaWdodDogMTYwcHg7XFxuXFx0XFx0dG9wOiA3cHhcXG5cXHR9XFxuXFx0I2ZpIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0cmlnaHQ6IDI0cHg7XFxuXFx0XFx0dG9wOiA3cHhcXG5cXHR9XFxuXFx0I2ZsIHtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdG1hcmdpbi10b3A6IDlweDtcXG5cXHRcXHR3aWR0aDogOTRweDtcXG5cXHRcXHRoZWlnaHQ6IDExcHg7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQwcHggMDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDMwNHB4IDEyOHB4O1xcblxcdFxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXG5cXHR9XFxuXFx0I3NlYXJjaCB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRyaWdodDogLTlweDtcXG5cXHRcXHR3aWR0aDogMTQuODQlO1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IC0yNjRweCAwO1xcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogMzA0cHggMTI4cHg7XFxuXFx0XFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdG1hcmdpbjogMFxcblxcdH1cXG5cXHQuc2VhcmNoLXF1ZXJ5IHtcXG5cXHRcXHRwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDlweFxcblxcdH1cXG5cXHQjc2Mge1xcblxcdFxcdG1hcmdpbi10b3A6IDIwcHhcXG5cXHR9XFxuXFx0Lm1vZGVsLXNlbGVjdCB7XFxuXFx0XFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0XFx0d2lkdGg6IDEyLjglO1xcblxcdH1cXG5cXHQuc2VhcmNoLWlucHV0IHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0d2lkdGg6IDg1LjIlO1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAyJTtcXG5cXHRcXHRoZWlnaHQ6IDQwcHg7XFxuXFx0fVxcblxcdC5ib2R5LW1haW4ge1xcblxcdFxcdG1heC13aWR0aDogODAwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcdFxcdG1hcmdpbi10b3A6IDEwMHB4O1xcblxcdH1cXG5cXHQuc2VhcmNoLW1haW4ge1xcblxcdFxcdG1heC13aWR0aDogNTAlO1xcblxcdFxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0fVxcblxcdC5jbG91ZC1tYWluIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDUwJTtcXG5cXHRcXHRtYXJnaW46IDBweCBhdXRvO1xcblxcdH1cXG5cXHQjdCB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IDRweFxcblxcdH1cXG5cXHQjdG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmVcXG5cXHR9XFxuXFx0I2wge1xcblxcdFxcdG1hcmdpbi10b3A6IDQ0cHg7XFxuXFx0XFx0d2lkdGg6IDMwNHB4O1xcblxcdFxcdGhlaWdodDogMTI4cHg7XFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiAzMDRweCAxMjhweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4XFxuXFx0fVxcblxcdCNybyB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTNweDtcXG5cXHRcXHR3aWR0aDogMjA1cHg7XFxuXFx0XFx0aGVpZ2h0OiA2OXB4O1xcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogMjA1cHggODhweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMXB4XFxuXFx0fVxcblxcdDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzM7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdGZvbnQtc2l6ZTogMTZweFxcblxcdH1cXG5cXHQ6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzM7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdGZvbnQtc2l6ZTogMTZweFxcblxcdH1cXG5cXHQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcblxcdFxcdGNvbG9yOiAjNzU3MzczO1xcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHRmb250LXNpemU6IDE2cHhcXG5cXHR9XFxuXFx0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzM7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdGZvbnQtc2l6ZTogMTZweFxcblxcdH1cXG5cXHQubmF2LWNhdGVnb3J5IHtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHR3aWR0aDogOTYlO1xcblxcdFxcdGhlaWdodDogNDBweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcblxcdFxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHR9XFxuXFx0Lm5hdi1jYXRlZ29yeSBsaSB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcdFxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0bGVmdDogMjAlO1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcblxcdH1cXG5cXHQubmF2LWNhdGVnb3J5IGxpIGEge1xcblxcdFxcdGNvbG9yOiAjNjY2O1xcblxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRoZWlnaHQ6IDM0cHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDM0cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdHdpZHRoOiA0MHB4O1xcblxcdH1cXG5cXHQubmF2LWNhdGVnb3J5IGxpIGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAjMTliOTU1O1xcblxcdH1cXG5cXHQubmF2LWNhdGVnb3J5IGxpIGE6dmlzaXRlZCB7XFxuXFx0XFx0Y29sb3I6ICMxOWI5NTU7XFxuXFx0fVxcblxcdC5zX2J0biB7XFxuXFx0XFx0d2lkdGg6IDEwMHB4O1xcblxcdFxcdGhlaWdodDogNDBweDtcXG5cXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdFxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0XFx0YmFja2dyb3VuZDogIzMzODVmZjtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJkNzhmNDtcXG5cXHRcXHRvdXRsaW5lOiBtZWRpdW07XFxuXFx0XFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcXG5cXHR9XFxuXFx0I2Nsb3VkIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0fVxcblxcdC5jYXJkLWNvbnRlbnQge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAxNSU7XFxuXFx0fVxcblxcdC5jYXJkLXRpdGxlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjb2xvcjogIzAzOWJlNTtcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxuXFx0fVxcblxcdC5jYXJkLXRpdGxlIGEge1xcblxcdFxcdGNvbG9yOiAjMDM5YmU1O1xcblxcdH1cXG5cXHQuY2FyZC10aXRsZSBhOnZpc2l0ZWQge1xcblxcdFxcdGNvbG9yOiAjMTI1MDZkO1xcblxcdH1cXG5cXHQuY2F0ZWdyb3ktdGl0bGUge1xcblxcdFxcdGNvbG9yOiBibGFjaztcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQuaW1nLXJlc3RhdXJhbnQge1xcblxcdFxcdG1heC13aWR0aDogNzJweDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiA3MnB4O1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdH1cXG5cXHQubm8tcmVzdWx0cyB7XFxuXFx0XFx0Zm9udC1zaXplOjIwcHg7XFxuXFx0XFx0d2lkdGg6MTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRcXHRmbG9hdDpsZWZ0O1xcblxcdH1cXG59XFxuXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NzBweCkgYW5kIChtYXgtd2lkdGg6MTEyMHB4KSB7ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NzBweCkgYW5kIChtYXgtd2lkdGg6MTEyMHB4KSB7XFxuXFx0LmxvZ28tcmVzdWx0cy1tYWluIHtcXG5cXHRcXHR3aWR0aDoxNSU7XFxuXFx0XFx0aGVpZ2h0OjUlO1xcblxcdFxcdG1hcmdpbjoyMHB4IGF1dG8gMjBweDtcXG5cXHR9XFxuXFx0I2xjIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0aGVpZ2h0OiBhdXRvXFxuXFx0fVxcblxcdCNtZXMsICNyYyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZVxcblxcdH1cXG5cXHQuaW4ge1xcblxcdFxcdHRleHQtYWxpZ246IGp1c3RpZnk7XFxuXFx0XFx0d2lkdGg6IGF1dG87XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiA0OHB4O1xcblxcdFxcdHBhZGRpbmctdG9wOiAxNHB4O1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxNHB4O1xcblxcdFxcdGNvbG9yOiAjNDk0OTQ5O1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDE1NSVcXG5cXHR9XFxuXFx0LnRuIHtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdFxcdHBhZGRpbmc6IDhweDtcXG5cXHRcXHRtaW4td2lkdGg6IDExMHB4XFxuXFx0fVxcblxcdCNyaCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2tcXG5cXHR9XFxuXFx0I2Yge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdGhlaWdodDogMzBweDtcXG5cXHRcXHRib3R0b206IDA7XFxuXFx0XFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAyMzAsIDIzMCwgLjMpO1xcblxcdFxcdGJvcmRlci10b3A6IDFweCAjZGVkZWRlIHNvbGlkO1xcblxcdFxcdG1pbi13aWR0aDogNzYwcHg7XFxuXFx0XFx0Y29sb3I6ICM5NTk1OTVcXG5cXHR9XFxuXFx0I2YgYSB7XFxuXFx0XFx0Y29sb3I6ICM5NTk1OTU7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDRweDtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDRweFxcblxcdH1cXG5cXHQjZiBhOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogIzQ5NDk0OVxcblxcdH1cXG5cXHQjZiBhOmFjdGl2ZSB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzNcXG5cXHR9XFxuXFx0I2ZoIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0bGVmdDogMjhweDtcXG5cXHRcXHR0b3A6IDdweFxcblxcdH1cXG5cXHQjZmMge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRyaWdodDogMTYwcHg7XFxuXFx0XFx0dG9wOiA3cHhcXG5cXHR9XFxuXFx0I2ZpIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0cmlnaHQ6IDI0cHg7XFxuXFx0XFx0dG9wOiA3cHhcXG5cXHR9XFxuXFx0I2ZsIHtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdG1hcmdpbi10b3A6IDlweDtcXG5cXHRcXHR3aWR0aDogOTRweDtcXG5cXHRcXHRoZWlnaHQ6IDExcHg7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQwcHggMDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDMwNHB4IDEyOHB4O1xcblxcdFxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXG5cXHR9XFxuXFx0I3NjIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAyMHB4XFxuXFx0fVxcblxcdC5mIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDcxMHB4O1xcblxcdFxcdHBhZGRpbmctbGVmdDogMzBweDtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdFxcdG1hcmdpbi1yaWdodDogYXV0b1xcblxcdH1cXG5cXHQjdCB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IDRweFxcblxcdH1cXG5cXHQjdG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmVcXG5cXHR9XFxuXFx0I2wge1xcblxcdFxcdG1hcmdpbi10b3A6IDQ0cHg7XFxuXFx0XFx0d2lkdGg6IDMwNHB4O1xcblxcdFxcdGhlaWdodDogMTI4cHg7XFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiAzMDRweCAxMjhweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4XFxuXFx0fVxcblxcdCNybyB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTNweDtcXG5cXHRcXHR3aWR0aDogMjA1cHg7XFxuXFx0XFx0aGVpZ2h0OiA2OXB4O1xcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogMjA1cHggODhweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMXB4XFxuXFx0fVxcblxcdDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzM7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdGZvbnQtc2l6ZTogMTZweFxcblxcdH1cXG5cXHQ6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzM7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdGZvbnQtc2l6ZTogMTZweFxcblxcdH1cXG5cXHQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcblxcdFxcdGNvbG9yOiAjNzU3MzczO1xcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHRmb250LXNpemU6IDE2cHhcXG5cXHR9XFxuXFx0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzM7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdGZvbnQtc2l6ZTogMTZweFxcblxcdH1cXG5cXHQubG9nby1tYWluIHtcXG5cXHRcXHR3aWR0aDogNDAwcHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDYwcHg7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHRtYXJnaW46IDEyMHB4IGF1dG8gNTBweDtcXG5cXHRcXHRjdXJzb3I6IGhhbmQ7XFxuXFx0fVxcblxcdC5sb2dvLXRpdGxlIHtcXG5cXHRcXHRjb2xvcjogIzc1NzM3MztcXG5cXHRcXHRmb250LXNpemU6IDUwcHg7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwcHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0fVxcblxcdCNzZWFyY2gge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR0b3A6IDA7XFxuXFx0XFx0cmlnaHQ6IC03cHg7XFxuXFx0XFx0d2lkdGg6IDE0Ljg0JTtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjY0cHggMDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDMwNHB4IDEyOHB4O1xcblxcdFxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0XFx0cGFkZGluZzogMDtcXG5cXHRcXHRtYXJnaW46IDBcXG5cXHR9XFxuXFx0LnNlYXJjaC1xdWVyeSB7XFxuXFx0XFx0cGFkZGluZzogMTBweCAwcHggMTBweCA5cHhcXG5cXHR9XFxuXFx0Lm1vZGVsLXNlbGVjdCB7XFxuXFx0XFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0XFx0d2lkdGg6IDEyLjglO1xcblxcdH1cXG5cXHQuc2VhcmNoLWlucHV0IHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0d2lkdGg6IDg1LjIlO1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAyJTtcXG5cXHRcXHRoZWlnaHQ6IDQwcHg7XFxuXFx0fVxcblxcdC5zZWFyY2gtbWFpbiB7XFxuXFx0XFx0bWF4LXdpZHRoOiA3MCU7XFxuXFx0XFx0bWFyZ2luOiAwcHggYXV0bztcXG5cXHR9XFxuXFx0LmNsb3VkLW1haW4ge1xcblxcdFxcdG1heC13aWR0aDogNzAlO1xcblxcdFxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0fVxcblxcdC5uYXYtY2F0ZWdvcnkge1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGhlaWdodDogNDBweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcblxcdFxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHR9XFxuXFx0Lm5hdi1jYXRlZ29yeSBsaSB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcdFxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0LyogbGVmdDoyNSU7ICovXFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHRcXHRmb250LXNpemU6IDEzcHg7XFxuXFx0fVxcblxcdC5uYXYtY2F0ZWdvcnkgbGkgYSB7XFxuXFx0XFx0Y29sb3I6ICM2NjY7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdGhlaWdodDogMzRweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMzRweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0d2lkdGg6IDM0cHg7XFxuXFx0fVxcblxcdC5uYXYtY2F0ZWdvcnkgbGkgYTpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICMxOWI5NTU7XFxuXFx0fVxcblxcdC5uYXYtY2F0ZWdvcnkgbGkgYTp2aXNpdGVkIHtcXG5cXHRcXHRjb2xvcjogIzE5Yjk1NTtcXG5cXHR9XFxuXFx0LnNfYnRuIHtcXG5cXHRcXHR3aWR0aDogMTAwcHg7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjMzM4NWZmO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmQ3OGY0O1xcblxcdFxcdG91dGxpbmU6IG1lZGl1bTtcXG5cXHRcXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xcblxcdH1cXG5cXHQjY2xvdWQge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHR9XFxuXFx0LmNhcmQtY29udGVudCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDE1JTtcXG5cXHR9XFxuXFx0LmNhcmQtdGl0bGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHR9XFxuXFx0LmNhcmQtdGl0bGUgYSB7XFxuXFx0XFx0Y29sb3I6ICMwMzliZTU7XFxuXFx0fVxcblxcdC5jYXJkLXRpdGxlIGE6dmlzaXRlZCB7XFxuXFx0XFx0Y29sb3I6ICMxMjUwNmQ7XFxuXFx0fVxcblxcdC5jYXRlZ3JveS10aXRsZSB7XFxuXFx0XFx0Y29sb3I6ICMwMDAwMDA7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LmltZy1yZXN0YXVyYW50IHtcXG5cXHRcXHRtYXgtd2lkdGg6IDcycHg7XFxuXFx0XFx0bWF4LWhlaWdodDogNzJweDtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHR9XFxuXFx0Lm5vLXJlc3VsdHMge1xcblxcdFxcdGZvbnQtc2l6ZToyMHB4O1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0XFx0ZmxvYXQ6bGVmdDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzcwcHgpIHtcXG5cXHQubG9nby1yZXN1bHRzLW1haW4ge1xcblxcdFxcdHdpZHRoOjMwJTtcXG5cXHRcXHRoZWlnaHQ6NSU7XFxuXFx0XFx0bWFyZ2luOjIwcHggYXV0byAyMHB4O1xcblxcdH1cXG5cXHQjbGMge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IGF1dG9cXG5cXHR9XFxuXFx0I3JjIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lXFxuXFx0fVxcblxcdCNtZXMge1xcblxcdFxcdGhlaWdodDogMjVweDtcXG5cXHRcXHRmb250LXNpemU6IDE0cHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDIwcHg7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDQwcHg7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0YW5pbWF0aW9uOiBlZmQgNXMgaW5maW5pdGU7XFxuXFx0XFx0LW1vei1hbmltYXRpb246IGVmZCA1cyBpbmZpbml0ZTtcXG5cXHRcXHQtd2Via2l0LWFuaW1hdGlvbjogZWZkIDVzIGluZmluaXRlO1xcblxcdFxcdC1vLWFuaW1hdGlvbjogZWZkIDVzIGluZmluaXRlXFxuXFx0fVxcblxcdC5pbiB7XFxuXFx0XFx0dGV4dC1hbGlnbjoganVzdGlmeTtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDQ4cHg7XFxuXFx0XFx0cGFkZGluZy10b3A6IDE0cHg7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDE0cHg7XFxuXFx0XFx0Y29sb3I6ICM0OTQ5NDk7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMTVweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMTU3JVxcblxcdH1cXG5cXHQudG4ge1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0XFx0cGFkZGluZzogOHB4O1xcblxcdFxcdG1pbi13aWR0aDogOTBweFxcblxcdH1cXG5cXHQjcmwge1xcblxcdFxcdGRpc3BsYXk6IG5vbmVcXG5cXHR9XFxuXFx0I3JoIHtcXG5cXHRcXHRoZWlnaHQ6IDVweDtcXG5cXHRcXHRkaXNwbGF5OiBibG9ja1xcblxcdH1cXG5cXHQjZiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogNTBweDtcXG5cXHRcXHRmb250LXNpemU6IDEycHg7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzNcXG5cXHR9XFxuXFx0I2YgYSB7XFxuXFx0XFx0Y29sb3I6ICM0OTQ5NDk7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDFweDtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDFweFxcblxcdH1cXG5cXHQjZmgge1xcblxcdFxcdG1hcmdpbi10b3A6IDE3cHhcXG5cXHR9XFxuXFx0I2ZjIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMHB4XFxuXFx0fVxcblxcdCNmaSB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZVxcblxcdH1cXG5cXHQjZmwge1xcblxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRtYXJnaW46IGF1dG87XFxuXFx0XFx0bWFyZ2luLXRvcDogMTFweDtcXG5cXHRcXHR3aWR0aDogOTRweDtcXG5cXHRcXHRoZWlnaHQ6IDExcHg7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQwcHggMDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDMwNHB4IDEyOHB4O1xcblxcdFxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXG5cXHR9XFxuXFx0I3NjIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMHB4XFxuXFx0fVxcblxcdC5mIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDcxMHB4O1xcblxcdFxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdFxcdG1hcmdpbi1yaWdodDogYXV0b1xcblxcdH1cXG5cXHQjdCB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IDQzcHg7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4ICNmZmQ4MDAgc29saWRcXG5cXHR9XFxuXFx0I3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IDEwMCVcXG5cXHR9XFxuXFx0I2wge1xcblxcdFxcdG1hcmdpbi10b3A6IDMwcHg7XFxuXFx0XFx0d2lkdGg6IDIwMHB4O1xcblxcdFxcdGhlaWdodDogODVweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDg1cHg7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjBweFxcblxcdH1cXG5cXHQjcm8ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmVcXG5cXHR9XFxuXFx0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHRcXHRjb2xvcjogIzc1NzM3MztcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0Zm9udC1zaXplOiAxM3B4XFxuXFx0fVxcblxcdDotbW96LXBsYWNlaG9sZGVyIHtcXG5cXHRcXHRjb2xvcjogIzc1NzM3MztcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0Zm9udC1zaXplOiAxM3B4XFxuXFx0fVxcblxcdDo6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzM7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdGZvbnQtc2l6ZTogMTNweFxcblxcdH1cXG5cXHQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHRcXHRjb2xvcjogIzc1NzM3MztcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0Zm9udC1zaXplOiAxM3B4XFxuXFx0fVxcblxcdC5sb2dvLW1haW4ge1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDg1JTtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdFxcdG1hcmdpbjogODBweCBhdXRvIDUwcHg7XFxuXFx0XFx0Y3Vyc29yOiBoYW5kO1xcblxcdH1cXG5cXHQubG9nby10aXRsZSB7XFxuXFx0XFx0Y29sb3I6ICM3NTczNzM7XFxuXFx0XFx0Zm9udC1zaXplOiA1MHB4O1xcblxcdFxcdG1hcmdpbi1yaWdodDogMHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IC0xMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcblxcdH1cXG5cXHQjc2VhcmNoIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdHJpZ2h0OiAtOXB4O1xcblxcdFxcdHdpZHRoOiAxNC44NCU7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTI2NHB4IDA7XFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiAzMDRweCAxMjhweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0XFx0bWFyZ2luOiAwXFxuXFx0fVxcblxcdC5zZWFyY2gtcXVlcnkge1xcblxcdFxcdHBhZGRpbmc6IDEwcHggMHB4IDEwcHggOXB4XFxuXFx0fVxcblxcdC5tb2RlbC1zZWxlY3Qge1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdFxcdHdpZHRoOiAxMi44JTtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQuc2VhcmNoLWlucHV0IHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0d2lkdGg6IDk1JTtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMiU7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdH1cXG5cXHQuc2VhcmNoLW1haW4ge1xcblxcdFxcdG1heC13aWR0aDogOTAlO1xcblxcdFxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0fVxcblxcdC5jbG91ZC1tYWluIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDkwJTtcXG5cXHRcXHRtYXJnaW46IDBweCBhdXRvO1xcblxcdH1cXG5cXHQubmF2LWNhdGVnb3J5IHtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdGhlaWdodDogNDBweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcblxcdFxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHR9XFxuXFx0Lm5hdi1jYXRlZ29yeSBsaSB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiA2cHg7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHQvKiBsZWZ0OjI1JTsgKi9cXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdFxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHR9XFxuXFx0Lm5hdi1jYXRlZ29yeSBsaSBhIHtcXG5cXHRcXHRjb2xvcjogIzY2NjtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0aGVpZ2h0OiAzNHB4O1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAzNHB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHR3aWR0aDogMjVweDtcXG5cXHR9XFxuXFx0Lm5hdi1jYXRlZ29yeSBsaSBhOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogIzE5Yjk1NTtcXG5cXHR9XFxuXFx0Lm5hdi1jYXRlZ29yeSBsaSBhOnZpc2l0ZWQge1xcblxcdFxcdGNvbG9yOiAjMTliOTU1O1xcblxcdH1cXG5cXHQuc19idG4ge1xcblxcdFxcdHdpZHRoOiAxMDBweDtcXG5cXHRcXHRoZWlnaHQ6IDQwcHg7XFxuXFx0XFx0Y29sb3I6IHdoaXRlO1xcblxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdFxcdGJhY2tncm91bmQ6ICMzMzg1ZmY7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZDc4ZjQ7XFxuXFx0XFx0b3V0bGluZTogbWVkaXVtO1xcblxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XFxuXFx0fVxcblxcdCNjbG91ZCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdH1cXG5cXHQuY2FyZC1jb250ZW50IHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMjElO1xcblxcdH1cXG5cXHQuY2FyZC10aXRsZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdH1cXG5cXHQuY2FyZC10aXRsZSBhIHtcXG5cXHRcXHRjb2xvcjogIzAzOWJlNTtcXG5cXHR9XFxuXFx0LmNhcmQtdGl0bGUgYTp2aXNpdGVkIHtcXG5cXHRcXHRjb2xvcjogIzEyNTA2ZDtcXG5cXHR9XFxuXFx0LmNhdGVncm95LXRpdGxlIHtcXG5cXHRcXHRjb2xvcjogI2ZmNzYxMDtcXG5cXHRcXHRmb250LXNpemU6IDI1cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQuaW1nLXJlc3RhdXJhbnQge1xcblxcdFxcdG1heC13aWR0aDogNzJweDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiA3MnB4O1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdH1cXG5cXHQubm8tcmVzdWx0cyB7XFxuXFx0XFx0Zm9udC1zaXplOjEwcHg7XFxuXFx0XFx0d2lkdGg6MTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRcXHRmbG9hdDpsZWZ0O1xcblxcdH1cXG59XFxuXFxuLmJoIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdG1hcmdpbi10b3A6IDE1cHg7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdHdpZHRoOiAxMDAlXFxufVxcblxcbi5iZCB7XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRib3JkZXItbGVmdDogM3B4ICM3NTczNzMgc29saWQ7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAzcHggI2ZmZDgwMCBzb2xpZFxcbn1cXG5cXG4uYmh0IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDhweDtcXG5cXHRwYWRkaW5nLXRvcDogNnB4O1xcblxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRjb2xvcjogIzQ5NDk0OTtcXG5cXHRoZWlnaHQ6IDIxcHg7XFxuXFx0d2lkdGg6IDk1JTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0XFxufVxcblxcbi5sayB7XFxuXFx0Y29sb3I6ICMwMDAwMDA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmQ4MDA7XFxufVxcblxcbi5teWxrIHtcXG5cXHRjb2xvcjogI0ZGRkZGRjtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBCREE0MTtcXG59XFxuXFxuLm15Ym9yZGVyIHtcXG5cXHRib3JkZXItY29sb3I6ICNmZmQ4MDA7XFxuXFx0Ym9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2ZmZDgwMDtcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4uaHQge1xcblxcdHBhZGRpbmctcmlnaHQ6IDYwcHhcXG59XFxuXFxuLnRzIHtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDUycHg7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdHRleHQtYWxpZ246IGNlbnRlclxcbn1cXG5cXG4udHNwIHtcXG5cXHRoZWlnaHQ6IDNweFxcbn1cXG5cXG4udHN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xcblxcdGhlaWdodDogM3B4O1xcblxcdHdpZHRoOiAzNHB4O1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0b1xcbn1cXG5cXG4uZ3JlZW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM5ZmZmOWZcXG59XFxuXFxuLnllbGxvdyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZDgwMFxcbn1cXG5cXG4ucmVkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjE1OTU5XFxufVxcblxcbi50c24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBhZGRpbmctdG9wOiAxN3B4O1xcblxcdHBhZGRpbmctbGVmdDogM3B4O1xcblxcdGNvbG9yOiAjNzk3OTc5O1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHRjdXJzb3I6IGRlZmF1bHRcXG59XFxuXFxuLmdmIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDI1MHB4O1xcblxcdGJvcmRlcjogMFxcbn1cXG5cXG4uYmYge1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXHRtYXJnaW4tdG9wOiAxNXB4O1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0Y29sb3I6ICM3NTczNzNcXG59XFxuXFxuLmNhdGVncm95LXBhbmVsIHtcXG5cXHRwYWRkaW5nOiAxMHB4XFxufVxcblxcbi5idCB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcblxcdHBhZGRpbmctdG9wOiAycHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDJweDtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiA1O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3JkZXItY29sb3I6ICNjNWM1YzVcXG59XFxuXFxuLnRoIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhXFxufVxcblxcbi50cmgge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWVcXG59XFxuXFxuLnRueSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZWE3OVxcbn1cXG5cXG4ubHIge1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHR3aWR0aDogNjdweDtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDY3cHggMTVweDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwcHhcXG59XFxuXFxuLmdzciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0XFxufVxcblxcbi5nc2gge1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xcblxcdGhlaWdodDogMjFweDtcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcXG59XFxuXFxuLmdzYyB7XFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdGNvbG9yOiAjNzU3MzczO1xcblxcdHBhZGRpbmctYm90dG9tOiA1cHg7XFxuXFx0d29yZC1icmVhazogYnJlYWstYWxsO1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZFxcbn1cXG5cXG4uZ3NsIHtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Y29sb3I6ICNjNWM1YzU7XFxuXFx0cGFkZGluZy1ib3R0b206IDA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXFxufVxcblxcbi5nc3Mge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0cGFkZGluZy10b3A6IDVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNXB4XFxufVxcblxcbi5nc3Age1xcblxcdGhlaWdodDogMXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWVcXG59XFxuXFxuLm4ge1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdHdpZHRoOiA0OHB4O1xcblxcdGhlaWdodDogNDVweDtcXG5cXHRtYXJnaW4tdG9wOiA2cHg7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEyMHB4IDE2MHB4O1xcbn1cXG5cXG4uY3Qge1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IC0zNXB4IC04MHB4XFxufVxcblxcbi5lcSB7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDBcXG59XFxuXFxuLmZrIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzVweCAtODBweFxcbn1cXG5cXG4uZ3Ige1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IC0zNXB4IDBcXG59XFxuXFxuLm1wIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzVweCAwXFxufVxcblxcbi5xdCB7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IC00MHB4XFxufVxcblxcbi50YiB7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTM1cHggLTQwcHhcXG59XFxuXFxuLndjIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggLTgwcHhcXG59XFxuXFxuLnVuIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzVweCAtNDBweFxcbn1cXG5cXG4ucG4ge1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDVweCAtMTIwcHhcXG59XFxuXFxuLmFsIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzVweCAtMTIwcHhcXG59XFxuXFxuLmxzIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzVweCAtMTIwcHhcXG59XFxuXFxuLndiIHtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0cGFkZGluZzogMXB4O1xcblxcdHBhZGRpbmctbGVmdDogNXB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRib3JkZXI6IDFweCAjYzVjNWM1IHNvbGlkXFxufVxcblxcbi55d2Ige1xcblxcdGJvcmRlcjogMXB4ICNmZmQ4MDAgc29saWRcXG59XFxuXFxuLmx3YiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG5cXHRib3JkZXI6IDFweCAjZDBkMGQwIHNvbGlkO1xcblxcdGNvbG9yOiAjZDBkMGQwO1xcblxcdG1hcmdpbi1sZWZ0OiAxM3B4XFxufVxcblxcbi53YjIge1xcblxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRwYWRkaW5nOiAxcHg7XFxuXFx0cGFkZGluZy1sZWZ0OiA1cHg7XFxuXFx0cGFkZGluZy1yaWdodDogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNzEsIDcxKTtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0Ym9yZGVyOiAxcHggI2M1YzVjNSBzb2xpZFxcbn1cXG5cXG4uYndiIHtcXG5cXHRib3JkZXI6IDFweCAjMzM4NUZGIHNvbGlkXFxufVxcblxcbi5ic20ge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Lyogd29yZC1icmVhazogYnJlYWstYWxsOyAqL1xcblxcdG1hcmdpbi10b3A6IDE1cHg7XFxuXFx0Zm9udC1zaXplOiAxMHB4O1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdHBhZGRpbmctbGVmdDogMTVweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG5cXHRjb2xvcjogIzAwMDAwMFxcbn1cXG5cXG4vKiAuYnhnIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdHRleHQtYWxpZ246IGNlbnRlclxcbn0gKi9cXG4uYnhjIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KVxcbn1cXG5cXG4uYnhmIHtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0d2lkdGg6IDEwMHB4XFxufVxcblxcbi5ia3RhIHtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRmb250LXNpemU6IDE3cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG5cXHR3aWR0aDogODklO1xcblxcdGhlaWdodDogMjAwcHg7XFxuXFx0cmVzaXplOiBub25lXFxufVxcblxcbiNia3NiIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiAzMHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcdG1hcmdpbi10b3A6IDJweDtcXG5cXHRmb250LXNpemU6IDE3cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6ICMzNDk4ZGI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcXG59XFxuXFxuLm1lX2gxIHtcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG5cXHRtYXJnaW4tdG9wOiAxNXB4O1xcblxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Y29sb3I6ICNjN2M3Yzc7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxNXB4XFxufVxcblxcbi5tZV9oMiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDIwcHg7XFxuXFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHRsaW5lLWhlaWdodDogMjJweDtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Y29sb3I6ICNjN2M3Yzc7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxNXB4XFxufVxcblxcbi5tZV9oMndiIHtcXG5cXHRjb2xvcjogI0ZGRjtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0cGFkZGluZzogMXB4O1xcblxcdHBhZGRpbmctbGVmdDogM3B4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDNweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRib3JkZXI6IDFweCAjYzdjN2M3IHNvbGlkXFxufVxcblxcbi5tZV9oMndiOmhvdmVyIHtcXG5cXHRib3JkZXI6IDFweCAjZmZkODAwIHNvbGlkXFxufVxcblxcbi5tZV9vbmFtZSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0bWFyZ2luLXRvcDogMTVweDtcXG5cXHRmb250LXNpemU6IDIycHg7XFxuXFx0Zm9udC1zdHlsZTogaW5oZXJpdDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZDgwMDtcXG5cXHRib3JkZXItbGVmdDogMjdweCBzb2xpZCAjZmZkODAwXFxufVxcblxcbi5tZV9vbmFtZTpob3ZlciB7XFxuXFx0Y29sb3I6ICNmZmQ4MDBcXG59XFxuXFxuLm1lX2NsYXNzIHtcXG5cXHRjb2xvcjogI2ZmZDgwMDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M3YzdjNztcXG5cXHRmb250LXNpemU6IDE3cHhcXG59XFxuXFxuLm1lX2NsYXNzOmhvdmVyIHtcXG5cXHRjb2xvcjogI2ZmZlxcbn1cXG5cXG4ubWVfYngge1xcblxcdHdpZHRoOiAzMDBweDtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHRleHQtYWxpZ246IGxlZnRcXG59XFxuXFxuLm1lX29iIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNjOWFhMDA7XFxuXFx0bWFyZ2luLWxlZnQ6IDNweDtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdHdpZHRoOiA0MnB4O1xcblxcdGhlaWdodDogNDJweDtcXG5cXHRwYWRkaW5nLXRvcDogM3B4O1xcblxcdHBhZGRpbmctbGVmdDogNnB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0cGFkZGluZy1ib3R0b206IDVweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wXFxufVxcblxcbi5tZV9vYjpob3ZlciB7XFxuXFx0Ym9yZGVyOiAxcHggI2ZmZDgwMCBzb2xpZFxcbn1cXG5cXG4ubWVfYXQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRjb2xvcjogI0ZGRjtcXG5cXHRmb250LXNpemU6IDEzcHg7XFxuXFx0cGFkZGluZzogMXB4O1xcblxcdG1hcmdpbi1sZWZ0OiAzcHg7XFxuXFx0bWFyZ2luLXRvcDogOHB4O1xcblxcdHBhZGRpbmctbGVmdDogM3B4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDNweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRib3JkZXI6IDFweCAjYzdjN2M3IHNvbGlkXFxufVxcblxcbi5tZV9hdDpob3ZlciB7XFxuXFx0Ym9yZGVyOiAxcHggI2ZmZDgwMCBzb2xpZFxcbn1cXG5cXG4ubWVfbGkge1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDVweDtcXG5cXHRjb2xvcjogI2ZmZDgwMDtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwXFxufVxcblxcbi5tZV9sYSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICNGRkY7XFxuXFx0d2lkdGg6IDI1MHB4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLCAwLCAwLCAwKSBzb2xpZFxcbn1cXG5cXG4ubWVfbGE6aG92ZXIge1xcblxcdGJvcmRlci1ib3R0b206IDFweCAjZmZkODAwIHNvbGlkXFxufVxcblxcbi5tZV9zZyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweFxcbn1cXG5cXG4jd2Vic2VhcmNoIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuXFxufVxcblxcbi54cGQge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRjb2xvcjogIzVjNWM1YztcXG5cXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCxcXG5cXHRcXHRyZ2JhKDI1NSwgMjU1LCAyNTUsIC41NCkgMjklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDU0JSxcXG5cXHRcXHRyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDk4JSk7XFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsXFxuXFx0XFx0MjU1LCAyNTUsIDApKSwgY29sb3Itc3RvcCgyOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjU0KSksXFxuXFx0XFx0Y29sb3Itc3RvcCg1NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpLFxcblxcdFxcdGNvbG9yLXN0b3AoOTglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpKSk7XFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAsXFxuXFx0XFx0cmdiYSgyNTUsIDI1NSwgMjU1LCAuNTQpIDI5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA1NCUsXFxuXFx0XFx0cmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA5OCUpO1xcblxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCxcXG5cXHRcXHRyZ2JhKDI1NSwgMjU1LCAyNTUsIC41NCkgMjklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDU0JSxcXG5cXHRcXHRyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDk4JSk7XFxuXFx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCxcXG5cXHRcXHRyZ2JhKDI1NSwgMjU1LCAyNTUsIC41NCkgMjklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDU0JSxcXG5cXHRcXHRyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDk4JSk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwLFxcblxcdFxcdHJnYmEoMjU1LCAyNTUsIDI1NSwgLjU0KSAyOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNTQlLFxcblxcdFxcdHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgOTglKTtcXG5cXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjMDBmZmZmZmYnLFxcblxcdFxcdGVuZENvbG9yc3RyPScjZmZmZmZmJywgR3JhZGllbnRUeXBlPTApXFxufVxcblxcbi54cGIge1xcblxcdGhlaWdodDogMTIwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRjdXJzb3I6IHBvaW50ZXJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9jc3MvbWFpbi9tYWluLWNzcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmY4ZGE0NjBiZTVmZTAxOWJkMmY0MmE5ODhhMDE3OTIuZW90XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2ZvbnRzL2ljb24tc3Rhci5lb3Rcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTYxYzMyYjYyYzk2YzRlYzUxOWM2M2FlYTNmOTJjZmUud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9mb250cy9pY29uLXN0YXIud29mZlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZTVhZWIzNWU1OGFhYzkzNjY2ZjE2ZThjYWRjNWVkZC50dGZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvZm9udHMvaWNvbi1zdGFyLnR0ZlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NGNjZGQ3ODk0ZDMxNjJiNTViNzY4M2YwZjQ0MWQ0Ny5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvZm9udHMvaWNvbi1zdGFyLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LmpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbmRvdy5qUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiDnlLXlvbHmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZpZVRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IG1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7nlLXlvbE8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIjtcblx0XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQgPSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIk1vdmllXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtbW92aWVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBzY29yZVdpZHRoID0gXCIwJVwiO1xuXHRcdFx0dmFyIHNjb3JlID0gXCLmmoLml6Dor4TliIZcIjtcblx0XHRcdHZhciBpbmZvcm1hdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIgaW50cm9kdWN0aW9uID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnNjb3JlICE9IG51bGwgJiYgZGF0YVtpXS5zY29yZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHNjb3JlV2lkdGggPSAoZGF0YVtpXS5zY29yZeOAgC/jgIA1KeOAgCogMTAwICsgXCIlXCI7XG5cdFx0XHRcdHNjb3JlID0gZGF0YVtpXS5zY29yZTtcblx0XHRcdH1cblxuXG5cdFx0XHRpZihkYXRhW2ldLmluZm9ybWF0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5pbmZvcm1hdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGluZm9ybWF0aW9uICs9IFwiPGRpdj48c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgZGF0YVtpXS5pbmZvcm1hdGlvbi5zcGxpdChcIuS4u+a8lFwiKVswXSArIFwiPC9zcGFuPjwvZGl2PlwiO1xuXHRcdFx0XHRpbmZvcm1hdGlvbiArPSBcIjxkaXY+PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM2NjY2NjY7Zm9udC1zaXplOjEycHg7XFxcIj5cIiArIFwi5Li75ryUXCIgKyBkYXRhW2ldLmluZm9ybWF0aW9uLnNwbGl0KFwi57G75Z6LXCIpWzBdLnNwbGl0KFwi5Li75ryUXCIpWzFdICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHR9XG5cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGludHJvZHVjdGlvbiA9IGRhdGFbaV0uaW50cm9kdWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpdGVtID0gXCI8ZGl2IGNsYXNzPSdjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2PjxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj48L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiKyB0aXRsZSArXCI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInN0YXJyYXRpbmcgaWNvbi1zdGFyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImljb24tc3RhclxcXCIgc3R5bGU9XFxcIndpZHRoOlwiICsgc2NvcmVXaWR0aCArIFwiO1xcXCI+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6I2ZmYzMwYztmb250LXNpemU6MTNweDtcXFwiPlwiICsgc2NvcmUgKyBcIijosYbnk6MpXCIgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcdFx0XHRcdGluZm9ybWF0aW9uXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLW1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1tb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LW1vdmllXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIlx0PC9kaXY+XCJcblx0XHRcdCArXCI8L2Rpdj5cIjtcblx0XHRcdFxuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi5tb3ZpZSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLW1vdmllXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIubW92aWUgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLW1vdmllXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0ICBpZigkKFwiLm1vcmUtbW92aWVcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0ICAkKFwiLm1vcmUtbW92aWVcIikuc2xpZGVEb3duKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC1tb3ZpZVwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHRcdCAgfSBlbHNlIHtcblx0XHRcdCAgJChcIi5tb3JlLW1vdmllXCIpLnNsaWRlVXAoKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LW1vdmllXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdFx0ICB9XG5cdH0pO1xufTtcblxuLyog6KeG6aKR5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gdmlkZW9UZW1wbGV0KGRhdGEpIHtcblx0XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgdmlkZW9cXFwiPlwiXG5cdFx0XHRcdCtcIlx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7op4bpopE8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCI7XG5cdFxuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJWaWRlb1wiKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdFx0aWYoY291bnQgPT0gMykge1xuXHRcdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJtb3JlLXZpZGVvXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XG5cdFx0XHR2YXIgd3JpdGVyID0gXCJcIjtcblx0XHRcdHZhciBkZXNjcmlwdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihkYXRhW2ldLndyaXRlciAhPSBudWxsICYmIGRhdGFbaV0ud3JpdGVyICE9IFwiXCIpIHtcblx0XHRcdFx0d3JpdGVyID0gZGF0YVtpXS53cml0ZXI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZGVzY3JpcHRpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmRlc2NyaXB0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0ZGVzY3JpcHRpb24gPSBkYXRhW2ldLmRlc2NyaXB0aW9uO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpdGVtID0gXCI8ZGl2IGNsYXNzPSdjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2PjxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj48L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiKyB3cml0ZXIgKyBcIi0tLS1cIiArIHRpdGxlICtcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7XFxcIiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO1xcXCI+XCJcblx0XHRcdFx0KyBcdFx0XHRcdFx0XHRkZXNjcmlwdGlvblxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLXZpZGVvXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS12aWRlb1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LXZpZGVvXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIjwvZGl2PlwiO1xuXHRcdFx0XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLnZpZGVvIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtdmlkZW9cIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi52aWRlbyAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtdmlkZW9cIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQgIGlmKCQoXCIubW9yZS12aWRlb1wiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0XHQgICQoXCIubW9yZS12aWRlb1wiKS5zbGlkZURvd24oKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LXZpZGVvXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdFx0ICAkKFwiLm1vcmUtdmlkZW9cIikuc2xpZGVVcCgpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtdmlkZW9cIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0XHQgIH1cblx0fSk7XG59O1xuXG4vKiDpn7PkuZDmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbuOAgG11c2ljVGVtcGxldChkYXRhKSB7XG5cdFxufTtcblxuLyog5aSW5Y2W5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gd2FpbWFpVGVtcGxldChkYXRhKSB7XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgd2FpbWFpXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiIFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdFx0XHQrXCIgXHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuWkluWNljwvc3Bhbj5cIlxuXHRcdFx0XHQrXCIgXHRcdFx0XHQ8L2Rpdj5cIjtcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudD0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJSZXN0YXVyYW50XCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtd2FpbWFpXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIHNjb3JlV2lkdGggPSBcIjAlXCI7XG5cdFx0XHR2YXIgc2NvcmUgPSBcIuaaguaXoOivhOWIhlwiO1xuXHRcdFx0dmFyIHJpZ2h0MSA9IFwiXCI7XG5cdFx0XHR2YXIgcmlnaHQyID0gXCJcIjtcblx0XHRcdHZhciBkZXNPcm90aGVyID0gXCJcIjtcblx0XHRcdHZhciBhZGRyZXNzID0gXCJcIjtcblx0XHRcdHZhciBnZW9EaXN0YW5jZSA9IFwiXCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnNjb3JlICE9IG51bGwgJiYgZGF0YVtpXS5zY29yZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHNjb3JlV2lkdGggPSAoZGF0YVtpXS5zY29yZeOAgC/jgIA1KeOAgCogMTAwICsgXCIlXCI7XG5cdFx0XHRcdHNjb3JlID0gZGF0YVtpXS5zY29yZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ucmVjZW50X29yZGVyX251bSAhPSBudWxsICYmIGRhdGFbaV0ucmVjZW50X29yZGVyX251bSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MSA9IFwiIOaciOmUgOmHjy9cIiArIGRhdGFbaV0ucmVjZW50X29yZGVyX251bTtcblx0XHRcdH0gZWxzZSBpZihkYXRhW2ldLmF2Z19wcmljZSAhPSBudWxsICYmIGRhdGFbaV0uYXZnX3ByaWNlICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQxID0gXCIg5Lq65Z2HL1wiICsgZGF0YVtpXS5hdmdfcHJpY2U7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnBob25lICE9IG51bGwgJiYgZGF0YVtpXS5waG9uZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MiA9IFwiICDogZTns7vnlLXor506XCIgKyBkYXRhW2ldLnBob25lO1xuXHRcdFx0feOAgGVsc2UgaWYoZGF0YVtpXS5jaXR5ICE9IG51bGwgJiYgZGF0YVtpXS5jaXR5ICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQyID0gXCIgIOaJgOWcqOWfjuW4gjpcIiArIGRhdGFbaV0uY2l0eTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uZGVzY3JpcHRpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmRlc2NyaXB0aW9uICE9IFwiXCIgJiYgdHlwZW9mKGRhdGFbaV0uZGVzY3JpcHRpb24pICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0ZGVzT3JvdGhlciA9IGRhdGFbaV0uZGVzY3JpcHRpb247XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZihkYXRhW2ldLm9wZW5pbmdfaG91cnMgIT0gbnVsbCAmJiBkYXRhW2ldLm9wZW5pbmdfaG91cnMgIT0gXCJcIiAmJiB0eXBlb2YoZGF0YVtpXS5vcGVuaW5nX2hvdXJzKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0ZGVzT3JvdGhlciArPSBcIuiQpeS4muaXtumXtDpcIiArICBkYXRhW2ldLm9wZW5pbmdfaG91cnMgKyBcIjxici8+XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoZGF0YVtpXS5yZWNvbW1lbmRfaXRlbSAhPSBudWxsICYmIGRhdGFbaV0ucmVjb21tZW5kX2l0ZW0gIT0gXCJcIiAmJiB0eXBlb2YoZGF0YVtpXS5yZWNvbW1lbmRfaXRlbSkgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGRlc09yb3RoZXIgKz0gXCLmjqjojZA6XCI7XG5cdFx0XHRcdFx0Zm9yKHZhciBrID0gMDsgayA8IGRhdGFbaV0ucmVjb21tZW5kX2l0ZW0ubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdGRlc09yb3RoZXIgKz0gIGRhdGFbaV0ucmVjb21tZW5kX2l0ZW1ba10gKyBcIiAgICBcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVzT3JvdGhlciArPSBcIjxici8+XCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uYWRkcmVzcyAhPSBudWxsICYmIGRhdGFbaV0uYWRkcmVzcyAhPSBcIlwiKSB7XG5cdFx0XHRcdGFkZHJlc3MgPSBkYXRhW2ldLmFkZHJlc3M7XG5cdFx0XHR9IGVsc2UgaWYoZGF0YVtpXS5wb2lfYWRkcmVzcyAhPSBudWxsICYmIGRhdGFbaV0ucG9pX2FkZHJlc3MgIT0gXCJcIikge1xuXHRcdFx0XHRhZGRyZXNzID0gZGF0YVtpXS5wb2lfYWRkcmVzcztcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uZ2VvRGlzdGFuY2UgIT0gbnVsbCAmJiBkYXRhW2ldLmdlb0Rpc3RhbmNlICE9IFwiXCIpIHtcblx0XHRcdFx0Z2VvRGlzdGFuY2UgPSBkYXRhW2ldLmdlb0Rpc3RhbmNlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaXRlbSA9XCJcdDxkaXYgY2xhc3M9XFxcImNhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8aW1nIGNsYXNzPVxcXCJpbWctcmVzdGF1cmFudFxcXCIgc3JjPVxcXCIuL2ltZ3MvYXBwcy9cIiArIGltZ05hbWUgKyBcIlxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImNvbG9yOiMwMzliZTU7Zm9udC1zaXplOjE3cHg7XFxcIj5cIiArIHRpdGxlICsgXCI8L2E+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcInN0YXJyYXRpbmcgaWNvbi1zdGFyXFxcIiA+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJpY29uLXN0YXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIiArIHNjb3JlV2lkdGggKyBcIjtcXFwiPjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O2NvbG9yOiNmZmMzMGM7XFxcIj4gXCIgKyBzY29yZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHJpZ2h0MSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHJpZ2h0MiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8cCBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7XFxcIiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO1xcXCI+XCJcblx0XHRcdFx0XHQrIFx0XHRcdFx0XHRkZXNPcm90aGVyXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L3A+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyBhZGRyZXNzICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6I2ZmNmQwMDtmb250LXNpemU6MTFweDtcXFwiPlwiICsgXCIgIFwiICsgZ2VvRGlzdGFuY2UgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtd2FpbWFpXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLXdhaW1haVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LXdhaW1haVxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHRcdCArXCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiPC9kaXY+XCI7XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLndhaW1haSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLXdhaW1haVwiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLndhaW1haSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtd2FpbWFpXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0ICBpZigkKFwiLm1vcmUtd2FpbWFpXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHRcdCAgJChcIi5tb3JlLXdhaW1haVwiKS5zbGlkZURvd24oKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LXdhaW1haVwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHRcdCAgfSBlbHNlIHtcblx0XHRcdCAgJChcIi5tb3JlLXdhaW1haVwiKS5zbGlkZVVwKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC13YWltYWlcIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0XHQgIH1cblx0fSk7XG59O1xuXG4vKiDllYblk4HmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0VGVtcGxldChkYXRhKSB7XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgcHJvZHVjdFxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHQrXCIgXHRcdFx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7llYblk4E8L3NwYW4+XCJcblx0XHQrXCIgXHRcdFx0XHRcdFx0PC9kaXY+XCI7XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQgPSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIlByb2R1Y3RcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1wcm9kdWN0XFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIgdGFncyA9IFwiVEFHUzombmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gXCJcIikge1xuXHRcdFx0XHRmb3IodmFyIGsgPSAwOyBrIDwgZGF0YVtpXS5pbnRyb2R1Y3Rpb24ubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRpZihrIDwgNikge1xuXHRcdFx0XHRcdFx0aW50cm9kdWN0aW9uICs9IGRhdGFbaV0uaW50cm9kdWN0aW9uW2tdICsgXCI8YnIvPlwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS50YWdzICE9IG51bGwgJiYgZGF0YVtpXS50YWdzICE9IFwiXCIpIHtcblx0XHRcdFx0Zm9yKHZhciBsID0gMDsgbCA8IGRhdGFbaV0udGFncy5sZW5ndGg7IGwrKykge1xuXHRcdFx0XHRcdHRhZ3MgKz0gZGF0YVtpXS50YWdzW2xdLnJlcGxhY2UoL1xccysvZywgXCJcIikgKyBcIiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaXRlbSA9XCI8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIgKyB0aXRsZSArIFwiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBpbnRyb2R1Y3Rpb24gKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6I2ZmNmQwMDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgdGFncyArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLXByb2R1Y3RcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLXByb2R1Y3RcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1wcm9kdWN0XFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIjwvZGl2PlwiO1xuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi5wcm9kdWN0IC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtcHJvZHVjdFwiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLnByb2R1Y3QgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLXByb2R1Y3RcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBpZigkKFwiLm1vcmUtcHJvZHVjdFwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0ICAkKFwiLm1vcmUtcHJvZHVjdFwiKS5zbGlkZURvd24oKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1wcm9kdWN0XCIpLnRleHQoXCLmipjlj6BcIik7XG5cdCAgfSBlbHNlIHtcblx0XHQgICQoXCIubW9yZS1wcm9kdWN0XCIpLnNsaWRlVXAoKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1wcm9kdWN0XCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdCAgfVxuXHR9KTtcbn07XG5cbi8qIOaWsOmXu+aooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5ld3NUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBuZXdzXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7mlrDpl7s8L3NwYW4+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHQ8L2Rpdj5cIjtcblxuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJOZXdzXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtbmV3c1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBjb250ZW50ID0gXCJcIjtcblx0XHRcdHZhciB3cml0ZXIgPSBcIlwiO1xuXHRcdFx0dmFyIHRpbWUgPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5jb250ZW50ICE9IG51bGwgJiYgZGF0YVtpXS5jb250ZW50ICE9IFwiXCIpIHtcblx0XHRcdFx0Y29udGVudCA9IGRhdGFbaV0uY29udGVudC5sZW5ndGggPD0gNjAgPyBkYXRhW2ldLmNvbnRlbnQgOiBkYXRhW2ldLmNvbnRlbnQuc3Vic3RyKDAsIDYwKSArIFwiLi4uLlwiO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS53cml0ZXIgIT0gbnVsbCAmJiBkYXRhW2ldLndyaXRlciAhPSBcIlwiKSB7XG5cdFx0XHRcdHdyaXRlciA9IGRhdGFbaV0ud3JpdGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS50aW1lICE9IG51bGwgJiYgZGF0YVtpXS50aW1lICE9IFwiXCIpIHtcblx0XHRcdFx0dGltZSA9IGRhdGFbaV0udGltZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblx0XHRcblx0XHRcdHZhciBpdGVtID0gXCI8ZGl2IGNsYXNzPSdjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2PjxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj48L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7XFxcIiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO1xcXCI+XCJcblx0XHRcdFx0KyBcdFx0XHRcdFx0XHRjb250ZW50XG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyB3cml0ZXIgKyBcIiAgIFwiICsgdGltZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtbmV3c1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtbmV3c1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LW5ld3NcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIubmV3cyAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLW5ld3NcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5uZXdzIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcdFxuXHQkKFwiLnNsaWRlLW5ld3NcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBpZigkKFwiLm1vcmUtbmV3c1wiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0ICAkKFwiLm1vcmUtbmV3c1wiKS5zbGlkZURvd24oKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1uZXdzXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdCAgfSBlbHNlIHtcblx0XHQgICQoXCIubW9yZS1uZXdzXCIpLnNsaWRlVXAoKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1uZXdzXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdCAgfVxuXHR9KTtcbn07XG5cbi8qIOWboui0reaooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdXBvblRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IGNvdXBvblxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHQrXCIgXHRcdFx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7lm6LotK08L3NwYW4+XCJcblx0XHQrXCIgXHRcdFx0XHRcdFx0PC9kaXY+XCI7XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQ9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiQ291cG9uXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtY291cG9uXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIHNjb3JlV2lkdGggPSBcIjAlXCI7XG5cdFx0XHR2YXIgc2NvcmUgPSBcIuaaguaXoOivhOWIhlwiO1xuXHRcdFx0dmFyIHJpZ2h0MSA9IFwiXCI7XG5cdFx0XHR2YXIgcmlnaHQyID0gXCJcIjtcblx0XHRcdHZhciBkZXNPcm90aGVyID0gXCJcIjtcblx0XHRcdHZhciBhZGRyZXNzID0gXCJcIjtcblx0XHRcdHZhciBnZW9EaXN0YW5jZSA9IFwiXCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnNjb3JlICE9IG51bGwgJiYgZGF0YVtpXS5zY29yZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHNjb3JlV2lkdGggPSAoZGF0YVtpXS5zY29yZeOAgC/jgIA1KeOAgCogMTAwICsgXCIlXCI7XG5cdFx0XHRcdHNjb3JlID0gZGF0YVtpXS5zY29yZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ucmV0YWlsX3ByaWNlICE9IG51bGwgJiYgZGF0YVtpXS5yZXRhaWxfcHJpY2UgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIiAg6Zu25ZSu5Lu3OlwiICsgZGF0YVtpXS5yZXRhaWxfcHJpY2U7XG5cdFx0XHR9IGVsc2UgaWYoZGF0YVtpXS5zYWxlX2NvdW50ICE9IG51bGwgJiYgZGF0YVtpXS5zYWxlX2NvdW50ICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQxID0gXCLjgIDjgIDlt7LplIDllK5cIiArIGRhdGFbaV0uc2FsZV9jb3VudDtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ucHJpY2UgIT0gbnVsbCAmJiBkYXRhW2ldLnByaWNlICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQyID0gXCIgIOWboui0reS7tzpcIiArIGRhdGFbaV0ucHJpY2U7XG5cdFx0XHR944CAZWxzZSBpZihkYXRhW2ldLmNpdHkgIT0gbnVsbCAmJiBkYXRhW2ldLmNpdHkgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg5omA5Zyo5Z+O5biCOlwiICsgZGF0YVtpXS5jaXR5O1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5kZWFsX2RldGFpbHMgIT0gbnVsbCAmJiBkYXRhW2ldLmRlYWxfZGV0YWlscyAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLmRlYWxfZGV0YWlscykgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRkZXNPcm90aGVyID0gZGF0YVtpXS5kZWFsX2RldGFpbHMubGVuZ3RoIDw9IDYwID8gZGF0YVtpXS5kZWFsX2RldGFpbHMgOiBkYXRhW2ldLmRlYWxfZGV0YWlscy5zdWJzdHIoMCwgNjApICsgXCIuLi4uXCI7IFxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5wb2lfaW5mby5wb2lfYWRkcmVzcyAhPSBudWxsICYmIGRhdGFbaV0ucG9pX2luZm8ucG9pX2FkZHJlc3MgIT0gXCJcIikge1xuXHRcdFx0XHRhZGRyZXNzID0gZGF0YVtpXS5wb2lfaW5mby5wb2lfYWRkcmVzcztcblx0XHRcdH0gZWxzZSBpZihkYXRhW2ldLnBvaV9pbmZvLnBvaV9uYW1lICE9IG51bGwgJiYgZGF0YVtpXS5wb2lfaW5mby5wb2lfbmFtZSAhPSBcIlwiKSB7XG5cdFx0XHRcdGFkZHJlc3MgPSBkYXRhW2ldLnBvaV9pbmZvLnBvaV9uYW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBudWxsICYmIGRhdGFbaV0uZ2VvRGlzdGFuY2UgIT0gXCJcIikge1xuXHRcdFx0XHRnZW9EaXN0YW5jZSA9IGRhdGFbaV0uZ2VvRGlzdGFuY2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblx0XHRcdHZhciBpdGVtID1cIlx0PGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiID5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImljb24tc3RhclxcXCIgc3R5bGU9XFxcIndpZHRoOlwiICsgc2NvcmVXaWR0aCArIFwiO1xcXCI+PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7Y29sb3I6I2ZmYzMwYztcXFwiPiBcIiArIHNjb3JlICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgcmlnaHQxICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgcmlnaHQyICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxwIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtcXFwiIGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7XFxcIj5cIlxuXHRcdFx0XHRcdCsgXHRcdFx0XHRcdGRlc09yb3RoZXJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiArIGFkZHJlc3MgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmY2ZDAwO2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgICsgXCIgIFwiICsgZ2VvRGlzdGFuY2UgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0XHRzdW0gKz0gaXRlbTtcblx0XHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLWNvdXBvblxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtY291cG9uXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtY291cG9uXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdFx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiPC9kaXY+XCI7XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLmNvdXBvbiAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLWNvdXBvblwiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLmNvdXBvbiAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtY291cG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgaWYoJChcIi5tb3JlLWNvdXBvblwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0ICAkKFwiLm1vcmUtY291cG9uXCIpLnNsaWRlRG93bigpO1xuXHRcdCAgJChcIi5zbGlkZS10ZXh0LWNvdXBvblwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHQgIH0gZWxzZSB7XG5cdFx0ICAkKFwiLm1vcmUtY291cG9uXCIpLnNsaWRlVXAoKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1jb3Vwb25cIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0ICB9XG5cdH0pO1xufTtcblxuLyog55+l6K+G5qih5p2/ICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdGVtcGxhdGUvdGVtcGxhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9