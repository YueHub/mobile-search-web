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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjMwMjcyYzAyYTc3MWI2M2NhMjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RlbXBsYXRlL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVRlbXBsZXRXaXRoQ2F0ZWdyb3kiLCJ0eXBlU2V0IiwiYXJndW1lbnRzIiwicmVzdWx0cyIsImZvckVhY2giLCJ0eXBlSXRlbSIsIm1vdmllVGVtcGxldCIsInZpZGVvVGVtcGxldCIsIm11c2ljVGVtcGxldCIsIndhaW1haVRlbXBsZXQiLCJwcm9kdWN0VGVtcGxldCIsIm5ld3NUZW1wbGV0IiwiY291cG9uVGVtcGxldCIsImNyZWF0ZVRlbXBsZXRXaXRoT3V0Q2F0ZWdyb3kiLCJkYXRhIiwiY2F0ZWdyb3kiLCJzdW0iLCJjb3VudCIsImkiLCJsZW5ndGgiLCJ0eXBlIiwiaW1nTmFtZSIsInRpdGxlIiwic2NvcmVXaWR0aCIsInNjb3JlIiwiaW5mb3JtYXRpb24iLCJpbnRyb2R1Y3Rpb24iLCJqdW1wVXJsIiwidXJsIiwiZnJvbV9hcHAiLCJuYW1lQXJyIiwic3BsaXQiLCJqIiwiaGlnaExpZ2h0VGl0bGUiLCJ3ZWJVcmwiLCJpdGVtIiwiJCIsImFwcGVuZCIsInkiLCJlYWNoIiwiY3NzIiwiY3JlYXRlUGFnZSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwiY3VycmVudCIsImJhY2tGbiIsInAiLCJ6IiwiY2xpY2siLCJzbGlkZURvd24iLCJ0ZXh0Iiwic2xpZGVVcCIsInNlYXJjaCIsIiRzZWFyY2hRdWVyeSIsIm1vZGVsIiwidmFsIiwidHJpbSIsInBhcmFtcyIsImFqYXgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlbXB0eSIsIlNldCIsIm5vUmVzdWx0cyIsIngiLCJhZGQiLCJlcnJvciIsImVycm9ySW5mbyIsImVycm9yVHlwZSIsImFsZXJ0IiwiR2V0UXVlcnlTdHJpbmciLCJuYW1lIiwicmVnIiwiUmVnRXhwIiwiciIsIndpbmRvdyIsImxvY2F0aW9uIiwic3Vic3RyIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiQk1hcCIsIkdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiZ2V0U3RhdHVzIiwiQk1BUF9TVEFUVVNfU1VDQ0VTUyIsImxhdFRleHQiLCJwb2ludCIsImxhdCIsImxvblRleHQiLCJsbmciLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJ3cml0ZXIiLCJkZXNjcmlwdGlvbiIsInJpZ2h0MSIsInJpZ2h0MiIsImRlc09yb3RoZXIiLCJhZGRyZXNzIiwiZ2VvRGlzdGFuY2UiLCJyZWNlbnRfb3JkZXJfbnVtIiwiYXZnX3ByaWNlIiwicGhvbmUiLCJjaXR5Iiwib3BlbmluZ19ob3VycyIsInJlY29tbWVuZF9pdGVtIiwiayIsInBvaV9hZGRyZXNzIiwidGFncyIsImwiLCJyZXBsYWNlIiwiY29udGVudCIsInRpbWUiLCJyZXRhaWxfcHJpY2UiLCJzYWxlX2NvdW50IiwicHJpY2UiLCJkZWFsX2RldGFpbHMiLCJwb2lfaW5mbyIsInBvaV9uYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1REE7Ozs7OztBQUVBO0FBQ0EsU0FBU0EseUJB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QVFJLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE9BQXZCO0FBQ0EsS0FGRCxNQUVPO0FBQ05KLE9BQUUsSUFBRixFQUFRSSxHQUFSLENBQVksU0FBWixFQUF1QixNQUF2QjtBQUNBO0FBQ0QsSUFQRDtBQVFHO0FBQ0g7QUFkNEIsRUFBcEM7O0FBaUJBSixHQUFFLGVBQUYsRUFBbUJhLEtBQW5CLENBQXlCLFlBQVU7QUFDakMsTUFBR2IsRUFBRSxjQUFGLEVBQWtCSSxHQUFsQixDQUFzQixTQUF0QixLQUFvQyxNQUF2QyxFQUErQztBQUM5Q0osS0FBRSxjQUFGLEVBQWtCYyxTQUFsQjtBQUNBZCxLQUFFLG9CQUFGLEVBQXdCZSxJQUF4QixDQUE2QixJQUE3QjtBQUNBLEdBSEQsTUFHTztBQUNOZixLQUFFLGNBQUYsRUFBa0JnQixPQUFsQjtBQUNBaEIsS0FBRSxvQkFBRixFQUF3QmUsSUFBeEIsQ0FBNkIsS0FBN0I7QUFDQTtBQUNGLEVBUkQ7QUFTQTs7QUFFRCxVIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYzMDI3MmMwMmE3NzFiNjNjYTI3IiwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vdGVtcGxhdGUvdGVtcGxhdGUuanNcIlxuXG4vLyDliIbnsbvmqKHmnb9cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsZXRXaXRoQ2F0ZWdyb3koKSB7XG5cdHZhciB0eXBlU2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgcmVzdWx0cyA9IGFyZ3VtZW50c1sxXTtcblx0aWYodHlwZVNldCAhPSBudWxsKSB7XG5cdFx0dHlwZVNldC5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlSXRlbSkge1xuXHQgICAgXHRpZih0eXBlSXRlbSA9PSBcIk1vdmllXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5tb3ZpZVRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlZpZGVvXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS52aWRlb1RlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIk11c2ljXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5tdXNpY1RlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlJlc3RhdXJhbnRcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLndhaW1haVRlbXBsZXQocmVzdWx0cyk7XG5cdCAgICBcdH0gZWxzZSBpZih0eXBlSXRlbSA9PSBcIlByb2R1Y3RcIikge1xuXHQgICAgXHRcdHRlbXBsYXRlLnByb2R1Y3RUZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9IGVsc2UgaWYodHlwZUl0ZW0gPT0gXCJOZXdzXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5uZXdzVGVtcGxldChyZXN1bHRzKTtcblx0ICAgIFx0fSBlbHNlIGlmKHR5cGVJdGVtID09IFwiQ291cG9uXCIpIHtcblx0ICAgIFx0XHR0ZW1wbGF0ZS5jb3Vwb25UZW1wbGV0KHJlc3VsdHMpO1xuXHQgICAgXHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8g5LiN5YiG57G75qih5p2/XG5mdW5jdGlvbiBjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBhbGxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveS1wYW5lbFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPueUteW9sTwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiO1xuXHRcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudCA9IDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoZGF0YVtpXS50eXBlID09IFwiTW92aWVcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1tb3ZpZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW1nTmFtZSA9IFwiXCI7XG5cdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xuXHRcdFx0dmFyIHNjb3JlV2lkdGggPSBcIjAlXCI7XG5cdFx0XHR2YXIgc2NvcmUgPSBcIuaaguaXoOivhOWIhlwiO1xuXHRcdFx0dmFyIGluZm9ybWF0aW9uID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlmKGRhdGFbaV0uaW5mb3JtYXRpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmluZm9ybWF0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW5mb3JtYXRpb24gKz0gXCI8ZGl2PjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNjY2NjY2O2ZvbnQtc2l6ZToxMnB4O1xcXCI+XCIgKyBkYXRhW2ldLmluZm9ybWF0aW9uLnNwbGl0KFwi5Li75ryUXCIpWzBdICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHRcdGluZm9ybWF0aW9uICs9IFwiPGRpdj48c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgXCLkuLvmvJRcIiArIGRhdGFbaV0uaW5mb3JtYXRpb24uc3BsaXQoXCLnsbvlnotcIilbMF0uc3BsaXQoXCLkuLvmvJRcIilbMV0gKyBcIjwvc3Bhbj48L2Rpdj5cIjtcblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0aW50cm9kdWN0aW9uID0gZGF0YVtpXS5pbnRyb2R1Y3Rpb247XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIrIHRpdGxlICtcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmZjMzBjO2ZvbnQtc2l6ZToxM3B4O1xcXCI+XCIgKyBzY29yZSArIFwiKOixhueToylcIiArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1x0XHRcdFx0aW5mb3JtYXRpb25cblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtbW92aWVcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLW1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtbW92aWVcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0XHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIjwvZGl2PlwiO1xuXHRcdFx0XG5cdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChjYXRlZ3JveSk7XG5cdFxuXHR2YXIgeSA9IDA7IFxuXHQkKFwiLm1vdmllIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtbW92aWVcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5tb3ZpZSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFx0XHQrK3o7XG4gICAgICAgIFx0XHRpZih6ID49ICgocC0xKSo1KzEpICYmIHogPD0gNSpwKSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdCQoXCIuc2xpZGUtbW92aWVcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQgIGlmKCQoXCIubW9yZS1tb3ZpZVwiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0XHQgICQoXCIubW9yZS1tb3ZpZVwiKS5zbGlkZURvd24oKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LW1vdmllXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdFx0ICAkKFwiLm1vcmUtbW92aWVcIikuc2xpZGVVcCgpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtbW92aWVcIikudGV4dChcIuWxleW8gOKWvlwiKTtcblx0XHQgIH1cblx0fSk7XG59XG5cbi8qIOaQnOe0ouW8guatpeiwg+eUqCAqL1xuZnVuY3Rpb24gc2VhcmNoKCkge1xuXHR2YXIgJHNlYXJjaFF1ZXJ5ID0gJChcIiNzZWFyY2gtcXVlcnlcIik7XHQvLyDnlKjmiLfmkJzntKLkuLJcblx0dmFyIG1vZGVsID0gMDtcdC8vIOS/neeVmeaooeadvyAx5Y+36KGo56S65LiN5YiG57G7XG5cdGlmKCRzZWFyY2hRdWVyeS52YWwoKS50cmltKCkgPT0gXCJcIikge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgcGFyYW1zID0ge1xuXHRcdFwic291cmNlXCI6IFwibWVcIixcblx0XHRcInNlYXJjaFF1ZXJ5XCI6ICRzZWFyY2hRdWVyeS52YWwoKSxcblx0XHRcInR5cGVOYW1lXCI6IFwiXCIsXG5cdFx0XCJsYXRcIjogXCJcIixcblx0XHRcImxvblwiOiBcIlwiLFxuICAgIH07XG5cdGlmKHR5cGVvZihhcmd1bWVudHNbMF0pICE9IFwidW5kZWZpbmVkXCIgJiYgYXJndW1lbnRzWzBdICE9IFwiXCIpIHtcblx0XHQkKFwiI3Jlc3VsdC1jYXRlZ3JveS10aXRsZVwiKS50ZXh0KGFyZ3VtZW50c1swXSArIFwiOuaQnOe0oue7k+aenFwiKTtcblx0XHRwYXJhbXNbXCJ0eXBlTmFtZVwiXSA9IGFyZ3VtZW50c1swXTtcblx0fVxuXHRpZigkKFwiI2xhdFwiKS52YWwoKSAhPSBcIlwiIHx8ICQoXCIjbGF0XCIpLnZhbCgpICE9IG51bGwpIHtcblx0XHRwYXJhbXNbXCJsYXRcIl0gPSAkKFwiI2xhdFwiKS52YWwoKTtcblx0fVxuXHRpZigkKFwiI2xvblwiKS52YWwoKSAhPSBcIlwiIHx8ICQoXCIjbG9uXCIpLnZhbCgpICE9IG51bGwpIHtcblx0XHRwYXJhbXNbXCJsb25cIl0gPSAkKFwiI2xvblwiKS52YWwoKTtcblx0fVxuICAgICQuYWpheCh7XG4gICAgXHQvKnVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLCovXG4gICAgICAgIHVybDogXCJodHRwOi8vNjAuMjA1LjEzOS43MTo4MDgwL01vYmlsZVNlYXJjaC9hcGkvc2VhcmNoIXNlYXJjaC5hY3Rpb25cIixcbiAgICAgICAgLyp1cmw6IFwiaHR0cDovLzEwLjI3LjIyMS4xMDcvTW9iaWxlU2VhcmNoL2FwaS9zZWFyY2ghc2VhcmNoLmFjdGlvblwiLCovXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgIGRhdGFUeXBlIDogXCJqc29uXCIsXG4gICAgICAgIGRhdGEgOiBwYXJhbXMsIFxuICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5lbXB0eSgpO1xuICAgICAgICBcdHZhciByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICBcdHZhciB0eXBlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBcdFxuICAgICAgICBcdC8vIOWmguaenOaQnOe0ouafpeivoue7k+aenOS4uuepulxuICAgICAgICBcdGlmKHJlc3VsdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgXHRcdHZhciBub1Jlc3VsdHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJuby1yZXN1bHRzXFxcIj7lvojmirHmrYnvvIzmiJHku6zmsqHmnInmn6Xor6LliLDkuI5cXFwiXCIgKyAkKFwiI3NlYXJjaC1xdWVyeVwiKS52YWwoKSArIFwiXFxcIuebuOWFs+eahOe7k+aenDwvc3Bhbj5cIjtcbiAgICAgICAgXHRcdCQoXCIjZnVsbHRleHQtc2VhcmNoXCIpLmFwcGVuZChub1Jlc3VsdHMpO1xuICAgICAgICBcdH1cbiAgICAgICAgXHRmb3IodmFyIHggPSAwOyB4IDwgcmVzdWx0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBcdFx0dHlwZVNldC5hZGQocmVzdWx0c1t4XS50eXBlKTtcbiAgICAgICAgXHR9XG4gICAgICAgIFx0XG4gICAgICAgIFx0aWYobW9kZWzjgIA9PSAwKSB7XG4gICAgICAgIFx0XHQvLyDosIPnlKjnlJ/miJDmqKHmnb/mlrnms5Ut5YiG57G7XG4gICAgICAgIFx0XHRjcmVhdGVUZW1wbGV0V2l0aENhdGVncm95KHR5cGVTZXQsIHJlc3VsdHMpO1xuICAgICAgICBcdH0gZWxzZSB7XG4gICAgICAgIFx0XHQvLyDosIPnlKjnlJ/miJDmqKHmnb/mlrnms5Ut5LiN5YiG57G7XG4gICAgICAgIFx0XHRjcmVhdGVUZW1wbGV0V2l0aE91dENhdGVncm95KHR5cGVTZXQpO1xuICAgICAgICBcdH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbiAoZXJyb3JJbmZvICwgZXJyb3JUeXBlKSB7XG4gICAgICAgIFx0YWxlcnQoXCLml6Dms5Xor4bliKvmkJzntKLkuLJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyog6I635Y+W5Y+C5pWwICovXG5mdW5jdGlvbiBHZXRRdWVyeVN0cmluZyhuYW1lKSB7XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiKyBuYW1lICtcIj0oW14mXSopKCZ8JClcIik7XG4gICAgdmFyIHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgIGlmKHIgIT0gbnVsbCkge1xuICAgXHQgcmV0dXJuICBkZWNvZGVVUklDb21wb25lbnQoclsyXSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKiDojrflj5blnLDnkIbkv6Hmga8gKi9cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHQgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7ICBcblx0XHQgLy8g55m+5bqm5Zyw5Zu+QVBJ5Yqf6IO9ICBcblx0XHQgLyp2YXIgbWFwID0gbmV3IEJNYXAuTWFwKFwiY29udGFpbmVyXCIpOyAgXG5cdFx0IHZhciBwb2ludCA9IG5ldyBCTWFwLlBvaW50KDExNi4zMzEzOTgsMzkuODk3NDQ1KTsgIFxuICAgICAgICAgbWFwLmNlbnRlckFuZFpvb20ocG9pbnQsMTIpOyAqLyBcbiAgICAgICAgIHZhciBnZW9sb2NhdGlvbiA9IG5ldyBCTWFwLkdlb2xvY2F0aW9uKCk7XG4gICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgIGlmKHRoaXMuZ2V0U3RhdHVzKCkgPT0gQk1BUF9TVEFUVVNfU1VDQ0VTUykgeyAgXG4gICAgICAgICAgICAgICAgIC8vdmFyIG1rID0gbmV3IEJNYXAuTWFya2VyKHIucG9pbnQpO1xuICAgICAgICAgICAgICAgICAvL21hcC5hZGRPdmVybGF5KG1rKTtcbiAgICAgICAgICAgICAgICAgLy9tYXAucGFuVG8oci5wb2ludCk7XG4gICAgICAgICAgICAgICAgIHZhciBsYXRUZXh0ID0gXCI8aW5wdXQgaWQ9XFxcImxhdFxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwiXCIgKyByLnBvaW50LmxhdCArIFwiXFxcIi8+XCI7XG4gICAgICAgICAgICAgICAgIHZhciBsb25UZXh0ID0gXCI8aW5wdXQgaWQ9XFxcImxvblxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwiXCIgKyByLnBvaW50LmxuZyArIFwiXFxcIi8+XCI7XG4gICAgICAgICAgICAgICAgICQoXCIuYm9keS1tYWluXCIpLmFwcGVuZChsYXRUZXh0KTtcbiAgICAgICAgICAgICAgICAgJChcIi5ib2R5LW1haW5cIikuYXBwZW5kKGxvblRleHQpO1xuICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICBhbGVydCgn556s6Ze054iG54K477yM5a6a5L2N5aSx6LSlJyt0aGlzLmdldFN0YXR1cygpKTsgIFxuICAgICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICB9LHtlbmFibGVIaWdoQWNjdXJhY3k6IHRydWV9KVxuICAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbWFpbi5qcyIsIlxuXG4vKiDnlLXlvbHmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZpZVRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IG1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7nlLXlvbE8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIjtcblx0XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQgPSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIk1vdmllXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtbW92aWVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBzY29yZVdpZHRoID0gXCIwJVwiO1xuXHRcdFx0dmFyIHNjb3JlID0gXCLmmoLml6Dor4TliIZcIjtcblx0XHRcdHZhciBpbmZvcm1hdGlvbiA9IFwiXCI7XG5cdFx0XHR2YXIgaW50cm9kdWN0aW9uID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnNjb3JlICE9IG51bGwgJiYgZGF0YVtpXS5zY29yZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHNjb3JlV2lkdGggPSAoZGF0YVtpXS5zY29yZeOAgC/jgIA1KeOAgCogMTAwICsgXCIlXCI7XG5cdFx0XHRcdHNjb3JlID0gZGF0YVtpXS5zY29yZTtcblx0XHRcdH1cblxuXG5cdFx0XHRpZihkYXRhW2ldLmluZm9ybWF0aW9uICE9IG51bGwgJiYgZGF0YVtpXS5pbmZvcm1hdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGluZm9ybWF0aW9uICs9IFwiPGRpdj48c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgZGF0YVtpXS5pbmZvcm1hdGlvbi5zcGxpdChcIuS4u+a8lFwiKVswXSArIFwiPC9zcGFuPjwvZGl2PlwiO1xuXHRcdFx0XHRpbmZvcm1hdGlvbiArPSBcIjxkaXY+PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM2NjY2NjY7Zm9udC1zaXplOjEycHg7XFxcIj5cIiArIFwi5Li75ryUXCIgKyBkYXRhW2ldLmluZm9ybWF0aW9uLnNwbGl0KFwi57G75Z6LXCIpWzBdLnNwbGl0KFwi5Li75ryUXCIpWzFdICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHR9XG5cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5pbnRyb2R1Y3Rpb24gIT0gbnVsbCAmJiBkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRcdGludHJvZHVjdGlvbiA9IGRhdGFbaV0uaW50cm9kdWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLndlYlVybCAhPSBudWxsICYmIGRhdGFbaV0ud2ViVXJsICE9IFwiXCIpIHtcblx0XHRcdFx0dXJsID0gZGF0YVtpXS53ZWJVcmw7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpdGVtID0gXCI8ZGl2IGNsYXNzPSdjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2PjxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj48L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiKyB0aXRsZSArXCI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInN0YXJyYXRpbmcgaWNvbi1zdGFyXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImljb24tc3RhclxcXCIgc3R5bGU9XFxcIndpZHRoOlwiICsgc2NvcmVXaWR0aCArIFwiO1xcXCI+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6I2ZmYzMwYztmb250LXNpemU6MTNweDtcXFwiPlwiICsgc2NvcmUgKyBcIijosYbnk6MpXCIgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcdFx0XHRcdGluZm9ybWF0aW9uXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBjbGFzcz1cXFwiY2l0ZVxcXCI+PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiMzODhlM2NcXFwiPlwiICsgdXJsICsgXCI8L2E+PC9wPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdH1cblx0XHRpZigoaSA9PSBkYXRhLmxlbmd0aCAtIDEpICYmIGNvdW50ID49IDMpIHtcblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInRjZFBhZ2VDb2RlLW1vdmllXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1tb3ZpZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LW1vdmllXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIlx0PC9kaXY+XCJcblx0XHRcdCArXCI8L2Rpdj5cIjtcblx0XHRcdFxuXHQkKFwiI2Z1bGx0ZXh0LXNlYXJjaFwiKS5hcHBlbmQoY2F0ZWdyb3kpO1xuXHRcblx0dmFyIHkgPSAwOyBcblx0JChcIi5tb3ZpZSAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLW1vdmllXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIubW92aWUgLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBcdFx0Kyt6O1xuICAgICAgICBcdFx0aWYoeiA+PSAoKHAtMSkqNSsxKSAmJiB6IDw9IDUqcCkge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cdFxuXHQkKFwiLnNsaWRlLW1vdmllXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0ICBpZigkKFwiLm1vcmUtbW92aWVcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0ICAkKFwiLm1vcmUtbW92aWVcIikuc2xpZGVEb3duKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC1tb3ZpZVwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHRcdCAgfSBlbHNlIHtcblx0XHRcdCAgJChcIi5tb3JlLW1vdmllXCIpLnNsaWRlVXAoKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LW1vdmllXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdFx0ICB9XG5cdH0pO1xufVxuXG4vKiDop4bpopHmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aWRlb1RlbXBsZXQoZGF0YSkge1xuXHRcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSB2aWRlb1xcXCI+XCJcblx0XHRcdFx0K1wiXHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuinhumikTwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIjtcblx0XG5cdHZhciBzdW0gPSBcIlwiO1xuXHR2YXIgY291bnQgPSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIlZpZGVvXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtdmlkZW9cXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcblx0XHRcdHZhciB3cml0ZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc2NyaXB0aW9uID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGRhdGFbaV0ud3JpdGVyICE9IG51bGwgJiYgZGF0YVtpXS53cml0ZXIgIT0gXCJcIikge1xuXHRcdFx0XHR3cml0ZXIgPSBkYXRhW2ldLndyaXRlcjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uZGVzY3JpcHRpb24gIT0gXCJcIikge1xuXHRcdFx0XHRkZXNjcmlwdGlvbiA9IGRhdGFbaV0uZGVzY3JpcHRpb247XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBcIjxkaXYgY2xhc3M9J2NhcmQtcGFuZWwgaG92ZXJhYmxlIHNlYXJjaC1yZXN1bHQnPlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXY+PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPjwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIrIHdyaXRlciArIFwiLS0tLVwiICsgdGl0bGUgK1wiPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtcXFwiIGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7XFxcIj5cIlxuXHRcdFx0XHQrIFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxwIGNsYXNzPVxcXCJjaXRlXFxcIj48YSBocmVmPVxcXCJcIiArIChqdW1wVXJsICsgdXJsKSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IzM4OGUzY1xcXCI+XCIgKyB1cmwgKyBcIjwvYT48L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IGl0ZW07XG5cdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtdmlkZW9cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gXCI8L2Rpdj5cIjsgLy8gY2xhc3M9XCJtb3JlXCLnmoTnu5PmnZ9cblx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlLXZpZGVvXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtdmlkZW9cXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIudmlkZW8gLmNhdGVncm95LXBhbmVsIC5jYXJkLXBhbmVsXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCsreTtcblx0XHRpZih5ID49IDEgJiYgeSA8PSA1KSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0JChcIi50Y2RQYWdlQ29kZS12aWRlb1wiKS5jcmVhdGVQYWdlKHtcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwoY291bnQvNSksXG4gICAgICAgIGN1cnJlbnQ6MSxcbiAgICAgICAgYmFja0ZuOmZ1bmN0aW9uKHApe1xuICAgICAgICBcdHZhciB6ID0gMDtcbiAgICAgICAgXHQkKFwiLnZpZGVvIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS12aWRlb1wiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCAgaWYoJChcIi5tb3JlLXZpZGVvXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHRcdCAgJChcIi5tb3JlLXZpZGVvXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtdmlkZW9cIikudGV4dChcIuaKmOWPoFwiKTtcblx0XHQgIH0gZWxzZSB7XG5cdFx0XHQgICQoXCIubW9yZS12aWRlb1wiKS5zbGlkZVVwKCk7XG5cdFx0XHQgICQoXCIuc2xpZGUtdGV4dC12aWRlb1wiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn1cblxuLyog6Z+z5LmQ5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb27jgIBtdXNpY1RlbXBsZXQoZGF0YSkge1xuXHRcblx0XG5cdFxufVxuXG4vKiDlpJbljZbmqKHmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YWltYWlUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSB3YWltYWlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHQrXCIgXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0XHRcdCtcIiBcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5aSW5Y2WPC9zcGFuPlwiXG5cdFx0XHRcdCtcIiBcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50PSAwO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGRhdGFbaV0udHlwZSA9PSBcIlJlc3RhdXJhbnRcIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS13YWltYWlcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgcmlnaHQxID0gXCJcIjtcblx0XHRcdHZhciByaWdodDIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc09yb3RoZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGFkZHJlc3MgPSBcIlwiO1xuXHRcdFx0dmFyIGdlb0Rpc3RhbmNlID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtICE9IG51bGwgJiYgZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQxID0gXCIg5pyI6ZSA6YePL1wiICsgZGF0YVtpXS5yZWNlbnRfb3JkZXJfbnVtO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0uYXZnX3ByaWNlICE9IG51bGwgJiYgZGF0YVtpXS5hdmdfcHJpY2UgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIiDkurrlnYcvXCIgKyBkYXRhW2ldLmF2Z19wcmljZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ucGhvbmUgIT0gbnVsbCAmJiBkYXRhW2ldLnBob25lICE9IFwiXCIpIHtcblx0XHRcdFx0cmlnaHQyID0gXCIgIOiBlOezu+eUteivnTpcIiArIGRhdGFbaV0ucGhvbmU7XG5cdFx0XHR944CAZWxzZSBpZihkYXRhW2ldLmNpdHkgIT0gbnVsbCAmJiBkYXRhW2ldLmNpdHkgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg5omA5Zyo5Z+O5biCOlwiICsgZGF0YVtpXS5jaXR5O1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5kZXNjcmlwdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uZGVzY3JpcHRpb24gIT0gXCJcIiAmJiB0eXBlb2YoZGF0YVtpXS5kZXNjcmlwdGlvbikgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRkZXNPcm90aGVyID0gZGF0YVtpXS5kZXNjcmlwdGlvbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGRhdGFbaV0ub3BlbmluZ19ob3VycyAhPSBudWxsICYmIGRhdGFbaV0ub3BlbmluZ19ob3VycyAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLm9wZW5pbmdfaG91cnMpICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRkZXNPcm90aGVyICs9IFwi6JCl5Lia5pe26Ze0OlwiICsgIGRhdGFbaV0ub3BlbmluZ19ob3VycyArIFwiPGJyLz5cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihkYXRhW2ldLnJlY29tbWVuZF9pdGVtICE9IG51bGwgJiYgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbSAhPSBcIlwiICYmIHR5cGVvZihkYXRhW2ldLnJlY29tbWVuZF9pdGVtKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0ZGVzT3JvdGhlciArPSBcIuaOqOiNkDpcIjtcblx0XHRcdFx0XHRmb3IodmFyIGsgPSAwOyBrIDwgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbS5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0ZGVzT3JvdGhlciArPSAgZGF0YVtpXS5yZWNvbW1lbmRfaXRlbVtrXSArIFwiICAgIFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZXNPcm90aGVyICs9IFwiPGJyLz5cIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5hZGRyZXNzICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0uYWRkcmVzcztcblx0XHRcdH0gZWxzZSBpZihkYXRhW2ldLnBvaV9hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5wb2lfYWRkcmVzcyAhPSBcIlwiKSB7XG5cdFx0XHRcdGFkZHJlc3MgPSBkYXRhW2ldLnBvaV9hZGRyZXNzO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBudWxsICYmIGRhdGFbaV0uZ2VvRGlzdGFuY2UgIT0gXCJcIikge1xuXHRcdFx0XHRnZW9EaXN0YW5jZSA9IGRhdGFbaV0uZ2VvRGlzdGFuY2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblx0XHRcdHZhciBpdGVtID1cIlx0PGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnJhdGluZyBpY29uLXN0YXJcXFwiID5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImljb24tc3RhclxcXCIgc3R5bGU9XFxcIndpZHRoOlwiICsgc2NvcmVXaWR0aCArIFwiO1xcXCI+PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7Y29sb3I6I2ZmYzMwYztcXFwiPiBcIiArIHNjb3JlICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgcmlnaHQxICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTBweDtcXFwiPlwiICsgcmlnaHQyICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxwIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtcXFwiIGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7XFxcIj5cIlxuXHRcdFx0XHRcdCsgXHRcdFx0XHRcdGRlc09yb3RoZXJcblx0XHRcdFx0XHQrXCJcdFx0XHRcdDwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiM3MDcwNzA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiArIGFkZHJlc3MgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojZmY2ZDAwO2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyBcIiAgXCIgKyBnZW9EaXN0YW5jZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS13YWltYWlcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJwcmV2UGFnZVxcXCI+5LiK5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjE8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcImN1cnJlbnRcXFwiPjM8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4+Li4uPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjUwPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJuZXh0UGFnZVxcXCI+5LiL5LiA6aG1PC9hPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtd2FpbWFpXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtd2FpbWFpXFxcIj7lsZXlvIDilr48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHR9XG5cdH1cblx0Y2F0ZWdyb3kgKz0gc3VtO1xuXHRjYXRlZ3JveSArPVwiXHQ8L2Rpdj5cIlxuXHRcdFx0ICtcIlx0PC9kaXY+XCJcblx0XHRcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIud2FpbWFpIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtd2FpbWFpXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIud2FpbWFpIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS13YWltYWlcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQgIGlmKCQoXCIubW9yZS13YWltYWlcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdFx0ICAkKFwiLm1vcmUtd2FpbWFpXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ICAkKFwiLnNsaWRlLXRleHQtd2FpbWFpXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdFx0ICAkKFwiLm1vcmUtd2FpbWFpXCIpLnNsaWRlVXAoKTtcblx0XHRcdCAgJChcIi5zbGlkZS10ZXh0LXdhaW1haVwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHRcdCAgfVxuXHR9KTtcbn1cblxuLyog5ZWG5ZOB5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFRlbXBsZXQoZGF0YSkge1xuXHR2YXIgY2F0ZWdyb3kgPSBcIjxkaXYgY2xhc3M9XFxcImNhdGVncm95IHByb2R1Y3RcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDxkaXYgYWxpZ249XFxcImNlbnRlclxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJjYXRlZ3JveS10aXRsZVxcXCI+5ZWG5ZOBPC9zcGFuPlwiXG5cdFx0K1wiIFx0XHRcdFx0XHRcdDwvZGl2PlwiO1xuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJQcm9kdWN0XCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtcHJvZHVjdFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBcIlwiO1xuXHRcdFx0dmFyIHRhZ3MgPSBcIlRBR1M6Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCI7XG5cdFx0XHR2YXIganVtcFVybCA9IFwic2VhcmNoQWN0aW9uIWp1bXAuYWN0aW9uP3VybD1cIjtcblx0XHRcdHZhciB1cmwgPSBcIlwiO1xuXHRcdFx0XG5cdFx0XHRpZihkYXRhW2ldLmZyb21fYXBwICE9IG51bGwgJiYgZGF0YVtpXS5mcm9tX2FwcCAhPSBcIlwiKSB7XG5cdFx0XHRcdHZhciBuYW1lQXJyID0gZGF0YVtpXS5mcm9tX2FwcC5zcGxpdChcIl9cIik7XG5cdFx0XHRcdGlmKG5hbWVBcnIubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0XHRpbWdOYW1lID0gZGF0YVtpXS5mcm9tX2FwcOOAgCsgXCIucG5nXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IG5hbWVBcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGltZ05hbWUgKz0gbmFtZUFycltqXSArIFwiLlwiO1xuXHRcdFx0XHRcdFx0aWYoaiA9PSBuYW1lQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0aW1nTmFtZSArPSBcInBuZ1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBudWxsICYmIGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gXCJcIikge1xuXHRcdFx0XHR0aXRsZSA9IGRhdGFbaV0uaGlnaExpZ2h0VGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmludHJvZHVjdGlvbiAhPSBudWxsICYmIGRhdGFbaV0uaW50cm9kdWN0aW9uICE9IFwiXCIpIHtcblx0XHRcdFx0Zm9yKHZhciBrID0gMDsgayA8IGRhdGFbaV0uaW50cm9kdWN0aW9uLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0aWYoayA8IDYpIHtcblx0XHRcdFx0XHRcdGludHJvZHVjdGlvbiArPSBkYXRhW2ldLmludHJvZHVjdGlvbltrXSArIFwiPGJyLz5cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0udGFncyAhPSBudWxsICYmIGRhdGFbaV0udGFncyAhPSBcIlwiKSB7XG5cdFx0XHRcdGZvcih2YXIgbCA9IDA7IGwgPCBkYXRhW2ldLnRhZ3MubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0XHR0YWdzICs9IGRhdGFbaV0udGFnc1tsXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpICsgXCImbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiPGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbCBob3ZlcmFibGUgc2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8ZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzY2NjY2Njtmb250LXNpemU6MTJweDtcXFwiPlwiICsgaW50cm9kdWN0aW9uICsgXCI8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjEwcHg7XFxcIj5cIiArIHRhZ3MgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAmJiBjb3VudCA+PSAzKSB7XG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJ0Y2RQYWdlQ29kZS1wcm9kdWN0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1wcm9kdWN0XFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLXRleHQtcHJvZHVjdFxcXCI+5bGV5byA4pa+PC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0fVxuXHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIucHJvZHVjdCAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLXByb2R1Y3RcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5wcm9kdWN0IC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1wcm9kdWN0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgaWYoJChcIi5tb3JlLXByb2R1Y3RcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIikge1xuXHRcdCAgJChcIi5tb3JlLXByb2R1Y3RcIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtcHJvZHVjdFwiKS50ZXh0KFwi5oqY5Y+gXCIpO1xuXHQgIH0gZWxzZSB7XG5cdFx0ICAkKFwiLm1vcmUtcHJvZHVjdFwiKS5zbGlkZVVwKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtcHJvZHVjdFwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59XG5cbi8qIOaWsOmXu+aooeadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5ld3NUZW1wbGV0KGRhdGEpIHtcblx0dmFyIGNhdGVncm95ID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXRlZ3JveSBuZXdzXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHQrXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3ktcGFuZWxcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0PGRpdiBhbGlnbj1cXFwiY2VudGVyXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcImNhdGVncm95LXRpdGxlXFxcIj7mlrDpl7s8L3NwYW4+XCJcblx0XHQrXCJcdFx0XHRcdFx0XHQ8L2Rpdj5cIjtcblxuXHR2YXIgc3VtID0gXCJcIjtcblx0dmFyIGNvdW50ID0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJOZXdzXCIpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0XHRpZihjb3VudCA9PSAzKSB7XG5cdFx0XHRcdHN1bSArPSBcIjxkaXYgY2xhc3M9XFxcIm1vcmUtbmV3c1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltZ05hbWUgPSBcIlwiO1xuXHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcblx0XHRcdHZhciBjb250ZW50ID0gXCJcIjtcblx0XHRcdHZhciB3cml0ZXIgPSBcIlwiO1xuXHRcdFx0dmFyIHRpbWUgPSBcIlwiO1xuXHRcdFx0dmFyIGp1bXBVcmwgPSBcInNlYXJjaEFjdGlvbiFqdW1wLmFjdGlvbj91cmw9XCI7XG5cdFx0XHR2YXIgdXJsID0gXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS5mcm9tX2FwcCAhPSBudWxsICYmIGRhdGFbaV0uZnJvbV9hcHAgIT0gXCJcIikge1xuXHRcdFx0XHR2YXIgbmFtZUFyciA9IGRhdGFbaV0uZnJvbV9hcHAuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRpZihuYW1lQXJyLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0aW1nTmFtZSA9IGRhdGFbaV0uZnJvbV9hcHDjgIArIFwiLnBuZ1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBuYW1lQXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpbWdOYW1lICs9IG5hbWVBcnJbal0gKyBcIi5cIjtcblx0XHRcdFx0XHRcdGlmKGogPT0gbmFtZUFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGltZ05hbWUgKz0gXCJwbmdcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uaGlnaExpZ2h0VGl0bGUgIT0gbnVsbCAmJiBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IFwiXCIpIHtcblx0XHRcdFx0dGl0bGUgPSBkYXRhW2ldLmhpZ2hMaWdodFRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5jb250ZW50ICE9IG51bGwgJiYgZGF0YVtpXS5jb250ZW50ICE9IFwiXCIpIHtcblx0XHRcdFx0Y29udGVudCA9IGRhdGFbaV0uY29udGVudC5sZW5ndGggPD0gNjAgPyBkYXRhW2ldLmNvbnRlbnQgOiBkYXRhW2ldLmNvbnRlbnQuc3Vic3RyKDAsIDYwKSArIFwiLi4uLlwiO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS53cml0ZXIgIT0gbnVsbCAmJiBkYXRhW2ldLndyaXRlciAhPSBcIlwiKSB7XG5cdFx0XHRcdHdyaXRlciA9IGRhdGFbaV0ud3JpdGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS50aW1lICE9IG51bGwgJiYgZGF0YVtpXS50aW1lICE9IFwiXCIpIHtcblx0XHRcdFx0dGltZSA9IGRhdGFbaV0udGltZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0ud2ViVXJsICE9IG51bGwgJiYgZGF0YVtpXS53ZWJVcmwgIT0gXCJcIikge1xuXHRcdFx0XHR1cmwgPSBkYXRhW2ldLndlYlVybDtcblx0XHRcdH1cblx0XHRcblx0XHRcdHZhciBpdGVtID0gXCI8ZGl2IGNsYXNzPSdjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2PjxpbWcgY2xhc3M9XFxcImltZy1yZXN0YXVyYW50XFxcIiBzcmM9XFxcIi4vaW1ncy9hcHBzL1wiICsgaW1nTmFtZSArIFwiXFxcIj48L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAzOWJlNTtmb250LXNpemU6MTdweDtcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDwvZGl2PlwiXG5cdFx0XHRcdCtcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8cCBzdHlsZT1cXFwiZm9udC1zaXplOjEzcHg7XFxcIiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO1xcXCI+XCJcblx0XHRcdFx0KyBcdFx0XHRcdFx0XHRjb250ZW50XG5cdFx0XHRcdCtcIlx0XHRcdFx0XHQ8L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdFx0XHQ8L3A+XCJcblx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0K1wiXHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cIlxuXHRcdFx0XHQrXCJcdFx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxMXB4O1xcXCI+XCIgKyB3cml0ZXIgKyBcIiAgIFwiICsgdGltZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHQrXCJcdFx0PC9kaXY+XCI7XG5cdFx0XHRzdW0gKz0gaXRlbTtcblx0XHR9XG5cdFx0aWYoKGkgPT0gZGF0YS5sZW5ndGggLSAxKSAgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtbmV3c1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInByZXZQYWdlXFxcIj7kuIrkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+MTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4yPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwiY3VycmVudFxcXCI+Mzwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj40PC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3Bhbj4uLi48L3NwYW4+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInRjZE51bWJlclxcXCI+NTA8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcIm5leHRQYWdlXFxcIj7kuIvkuIDpobU8L2E+XCJcblx0XHRcdFx0K1wiXHQ8L2Rpdj5cIjtcblx0XHRcdHN1bSArPSBcIjwvZGl2PlwiOyAvLyBjbGFzcz1cIm1vcmVcIueahOe7k+adn1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwic2xpZGUtbmV3c1xcXCI+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS10ZXh0LW5ld3NcXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0fVxuXHRjYXRlZ3JveSArPSBzdW07XG5cdGNhdGVncm95ICs9XCJcdDwvZGl2PlwiXG5cdFx0IFx0ICtcIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiPC9kaXY+XCI7XG5cdFx0XHRcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIubmV3cyAuY2F0ZWdyb3ktcGFuZWwgLmNhcmQtcGFuZWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Kyt5O1xuXHRcdGlmKHkgPj0gMSAmJiB5IDw9IDUpIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQkKFwiLnRjZFBhZ2VDb2RlLW5ld3NcIikuY3JlYXRlUGFnZSh7XG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKGNvdW50LzUpLFxuICAgICAgICBjdXJyZW50OjEsXG4gICAgICAgIGJhY2tGbjpmdW5jdGlvbihwKXtcbiAgICAgICAgXHR2YXIgeiA9IDA7XG4gICAgICAgIFx0JChcIi5uZXdzIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcdFxuXHQkKFwiLnNsaWRlLW5ld3NcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBpZigkKFwiLm1vcmUtbmV3c1wiKS5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKSB7XG5cdFx0ICAkKFwiLm1vcmUtbmV3c1wiKS5zbGlkZURvd24oKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1uZXdzXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdCAgfSBlbHNlIHtcblx0XHQgICQoXCIubW9yZS1uZXdzXCIpLnNsaWRlVXAoKTtcblx0XHQgICQoXCIuc2xpZGUtdGV4dC1uZXdzXCIpLnRleHQoXCLlsZXlvIDilr5cIik7XG5cdCAgfVxuXHR9KTtcbn1cblxuLyog5Zui6LSt5qih5p2/ICovXG5leHBvcnQgZnVuY3Rpb24gY291cG9uVGVtcGxldChkYXRhKSB7XG5cdHZhciBjYXRlZ3JveSA9IFwiPGRpdiBjbGFzcz1cXFwiY2F0ZWdyb3kgY291cG9uXFxcIj5cIlxuXHRcdCtcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCJcblx0XHQrXCIgXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNhdGVncm95LXBhbmVsXFxcIj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0XHQ8ZGl2IGFsaWduPVxcXCJjZW50ZXJcXFwiPlwiXG5cdFx0K1wiXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiY2F0ZWdyb3ktdGl0bGVcXFwiPuWboui0rTwvc3Bhbj5cIlxuXHRcdCtcIiBcdFx0XHRcdFx0XHQ8L2Rpdj5cIjtcblx0dmFyIHN1bSA9IFwiXCI7XG5cdHZhciBjb3VudD0gMDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZihkYXRhW2ldLnR5cGUgPT0gXCJDb3Vwb25cIikge1xuXHRcdFx0Kytjb3VudDtcblx0XHRcdGlmKGNvdW50ID09IDMpIHtcblx0XHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwibW9yZS1jb3Vwb25cXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIjtcblx0XHRcdH1cblx0XHRcdHZhciBpbWdOYW1lID0gXCJcIjtcblx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XG5cdFx0XHR2YXIgc2NvcmVXaWR0aCA9IFwiMCVcIjtcblx0XHRcdHZhciBzY29yZSA9IFwi5pqC5peg6K+E5YiGXCI7XG5cdFx0XHR2YXIgcmlnaHQxID0gXCJcIjtcblx0XHRcdHZhciByaWdodDIgPSBcIlwiO1xuXHRcdFx0dmFyIGRlc09yb3RoZXIgPSBcIlwiO1xuXHRcdFx0dmFyIGFkZHJlc3MgPSBcIlwiO1xuXHRcdFx0dmFyIGdlb0Rpc3RhbmNlID0gXCJcIjtcblx0XHRcdHZhciBqdW1wVXJsID0gXCJzZWFyY2hBY3Rpb24hanVtcC5hY3Rpb24/dXJsPVwiO1xuXHRcdFx0dmFyIHVybCA9IFwiXCI7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGFbaV0uZnJvbV9hcHAgIT0gbnVsbCAmJiBkYXRhW2ldLmZyb21fYXBwICE9IFwiXCIpIHtcblx0XHRcdFx0dmFyIG5hbWVBcnIgPSBkYXRhW2ldLmZyb21fYXBwLnNwbGl0KFwiX1wiKTtcblx0XHRcdFx0aWYobmFtZUFyci5sZW5ndGggPT0gMSkge1xuXHRcdFx0XHRcdGltZ05hbWUgPSBkYXRhW2ldLmZyb21fYXBw44CAKyBcIi5wbmdcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgbmFtZUFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aW1nTmFtZSArPSBuYW1lQXJyW2pdICsgXCIuXCI7XG5cdFx0XHRcdFx0XHRpZihqID09IG5hbWVBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRpbWdOYW1lICs9IFwicG5nXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmhpZ2hMaWdodFRpdGxlICE9IG51bGwgJiYgZGF0YVtpXS5oaWdoTGlnaHRUaXRsZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRpdGxlID0gZGF0YVtpXS5oaWdoTGlnaHRUaXRsZTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGFbaV0uc2NvcmUgIT0gbnVsbCAmJiBkYXRhW2ldLnNjb3JlICE9IFwiXCIpIHtcblx0XHRcdFx0c2NvcmVXaWR0aCA9IChkYXRhW2ldLnNjb3Jl44CAL+OAgDUp44CAKiAxMDAgKyBcIiVcIjtcblx0XHRcdFx0c2NvcmUgPSBkYXRhW2ldLnNjb3JlO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5yZXRhaWxfcHJpY2UgIT0gbnVsbCAmJiBkYXRhW2ldLnJldGFpbF9wcmljZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MSA9IFwiICDpm7bllK7ku7c6XCIgKyBkYXRhW2ldLnJldGFpbF9wcmljZTtcblx0XHRcdH0gZWxzZSBpZihkYXRhW2ldLnNhbGVfY291bnQgIT0gbnVsbCAmJiBkYXRhW2ldLnNhbGVfY291bnQgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDEgPSBcIuOAgOOAgOW3sumUgOWUrlwiICsgZGF0YVtpXS5zYWxlX2NvdW50O1xuXHRcdFx0fVxuXHRcdFx0aWYoZGF0YVtpXS5wcmljZSAhPSBudWxsICYmIGRhdGFbaV0ucHJpY2UgIT0gXCJcIikge1xuXHRcdFx0XHRyaWdodDIgPSBcIiAg5Zui6LSt5Lu3OlwiICsgZGF0YVtpXS5wcmljZTtcblx0XHRcdH3jgIBlbHNlIGlmKGRhdGFbaV0uY2l0eSAhPSBudWxsICYmIGRhdGFbaV0uY2l0eSAhPSBcIlwiKSB7XG5cdFx0XHRcdHJpZ2h0MiA9IFwiICDmiYDlnKjln47luII6XCIgKyBkYXRhW2ldLmNpdHk7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmRlYWxfZGV0YWlscyAhPSBudWxsICYmIGRhdGFbaV0uZGVhbF9kZXRhaWxzICE9IFwiXCIgJiYgdHlwZW9mKGRhdGFbaV0uZGVhbF9kZXRhaWxzKSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGRlc09yb3RoZXIgPSBkYXRhW2ldLmRlYWxfZGV0YWlscy5sZW5ndGggPD0gNjAgPyBkYXRhW2ldLmRlYWxfZGV0YWlscyA6IGRhdGFbaV0uZGVhbF9kZXRhaWxzLnN1YnN0cigwLCA2MCkgKyBcIi4uLi5cIjsgXG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLnBvaV9pbmZvLnBvaV9hZGRyZXNzICE9IG51bGwgJiYgZGF0YVtpXS5wb2lfaW5mby5wb2lfYWRkcmVzcyAhPSBcIlwiKSB7XG5cdFx0XHRcdGFkZHJlc3MgPSBkYXRhW2ldLnBvaV9pbmZvLnBvaV9hZGRyZXNzO1xuXHRcdFx0fSBlbHNlIGlmKGRhdGFbaV0ucG9pX2luZm8ucG9pX25hbWUgIT0gbnVsbCAmJiBkYXRhW2ldLnBvaV9pbmZvLnBvaV9uYW1lICE9IFwiXCIpIHtcblx0XHRcdFx0YWRkcmVzcyA9IGRhdGFbaV0ucG9pX2luZm8ucG9pX25hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhW2ldLmdlb0Rpc3RhbmNlICE9IG51bGwgJiYgZGF0YVtpXS5nZW9EaXN0YW5jZSAhPSBcIlwiKSB7XG5cdFx0XHRcdGdlb0Rpc3RhbmNlID0gZGF0YVtpXS5nZW9EaXN0YW5jZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZGF0YVtpXS53ZWJVcmwgIT0gbnVsbCAmJiBkYXRhW2ldLndlYlVybCAhPSBcIlwiKSB7XG5cdFx0XHRcdHVybCA9IGRhdGFbaV0ud2ViVXJsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGl0ZW0gPVwiXHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhbmVsIGhvdmVyYWJsZSBzZWFyY2gtcmVzdWx0XFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PGltZyBjbGFzcz1cXFwiaW1nLXJlc3RhdXJhbnRcXFwiIHNyYz1cXFwiLi9pbWdzL2FwcHMvXCIgKyBpbWdOYW1lICsgXCJcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PGEgaHJlZj1cXFwiXCIgKyAoanVtcFVybCArIHVybCkgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDM5YmU1O2ZvbnQtc2l6ZToxN3B4O1xcXCI+XCIgKyB0aXRsZSArIFwiPC9hPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9kaXY+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFycmF0aW5nIGljb24tc3RhclxcXCIgPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwiaWNvbi1zdGFyXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIgKyBzY29yZVdpZHRoICsgXCI7XFxcIj48L3NwYW4+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtjb2xvcjojZmZjMzBjO1xcXCI+IFwiICsgc2NvcmUgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDEgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHRcdDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojNzA3MDcwO2ZvbnQtc2l6ZToxMHB4O1xcXCI+XCIgKyByaWdodDIgKyBcIjwvc3Bhbj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgc3R5bGU9XFxcImZvbnQtc2l6ZToxM3B4O1xcXCIgY2xhc3M9XFxcInN1bW1hcnlcXFwiPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtcXFwiPlwiXG5cdFx0XHRcdFx0KyBcdFx0XHRcdFx0ZGVzT3JvdGhlclxuXHRcdFx0XHRcdCtcIlx0XHRcdFx0PC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PC9wPlwiXG5cdFx0XHRcdFx0K1wiXHRcdDwvZGl2PlwiXG5cdFx0XHRcdFx0K1wiXHRcdDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XCJcblx0XHRcdFx0XHQrXCJcdFx0XHQ8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzcwNzA3MDtmb250LXNpemU6MTFweDtcXFwiPlwiICsgYWRkcmVzcyArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHNwYW4gc3R5bGU9XFxcImNvbG9yOiNmZjZkMDA7Zm9udC1zaXplOjExcHg7XFxcIj5cIiAgKyBcIiAgXCIgKyBnZW9EaXN0YW5jZSArIFwiPC9zcGFuPlwiXG5cdFx0XHRcdFx0K1wiXHRcdFx0PHAgY2xhc3M9XFxcImNpdGVcXFwiPjxhIGhyZWY9XFxcIlwiICsgKGp1bXBVcmwgKyB1cmwpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojMzg4ZTNjXFxcIj5cIiArIHVybCArIFwiPC9hPjwvcD5cIlxuXHRcdFx0XHRcdCtcIlx0XHQ8L2Rpdj5cIlxuXHRcdFx0XHRcdCtcIlx0PC9kaXY+XCI7XG5cdFx0XHRcdHN1bSArPSBpdGVtO1xuXHRcdFx0fVxuXHRcdGlmKChpID09IGRhdGEubGVuZ3RoIC0gMSkgJiYgY291bnQgPj0gMykge1xuXHRcdFx0c3VtICs9IFwiPGRpdiBjbGFzcz1cXFwidGNkUGFnZUNvZGUtY291cG9uXFxcIj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwicHJldlBhZ2VcXFwiPuS4iuS4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj4xPC9hPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjI8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50XFxcIj4zPC9zcGFuPlwiXG5cdFx0XHRcdCtcIlx0XHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ0Y2ROdW1iZXJcXFwiPjQ8L2E+XCJcblx0XHRcdFx0K1wiXHRcdDxzcGFuPi4uLjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwidGNkTnVtYmVyXFxcIj41MDwvYT5cIlxuXHRcdFx0XHQrXCJcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwibmV4dFBhZ2VcXFwiPuS4i+S4gOmhtTwvYT5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdFx0c3VtICs9IFwiPC9kaXY+XCI7IC8vIGNsYXNzPVwibW9yZVwi55qE57uT5p2fXG5cdFx0XHRzdW0gKz0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZS1jb3Vwb25cXFwiPlwiXG5cdFx0XHRcdCtcIlx0XHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtdGV4dC1jb3Vwb25cXFwiPuWxleW8gOKWvjwvc3Bhbj5cIlxuXHRcdFx0XHQrXCJcdDwvZGl2PlwiO1xuXHRcdH1cblx0XHR9XG5cdGNhdGVncm95ICs9IHN1bTtcblx0Y2F0ZWdyb3kgKz1cIlx0PC9kaXY+XCJcblx0XHQgXHQgK1wiXHQ8L2Rpdj5cIlxuXHRcdCBcdCArXCI8L2Rpdj5cIjtcblx0JChcIiNmdWxsdGV4dC1zZWFyY2hcIikuYXBwZW5kKGNhdGVncm95KTtcblx0XG5cdHZhciB5ID0gMDsgXG5cdCQoXCIuY291cG9uIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQrK3k7XG5cdFx0aWYoeSA+PSAxICYmIHkgPD0gNSkge1xuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCQoXCIudGNkUGFnZUNvZGUtY291cG9uXCIpLmNyZWF0ZVBhZ2Uoe1xuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudC81KSxcbiAgICAgICAgY3VycmVudDoxLFxuICAgICAgICBiYWNrRm46ZnVuY3Rpb24ocCl7XG4gICAgICAgIFx0dmFyIHogPSAwO1xuICAgICAgICBcdCQoXCIuY291cG9uIC5jYXRlZ3JveS1wYW5lbCAuY2FyZC1wYW5lbFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdCsrejtcbiAgICAgICAgXHRcdGlmKHogPj0gKChwLTEpKjUrMSkgJiYgeiA8PSA1KnApIHtcbiAgICAgICAgXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIFx0XHR9IGVsc2Uge1xuICAgICAgICBcdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHRcblx0JChcIi5zbGlkZS1jb3Vwb25cIikuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBpZigkKFwiLm1vcmUtY291cG9uXCIpLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcblx0XHQgICQoXCIubW9yZS1jb3Vwb25cIikuc2xpZGVEb3duKCk7XG5cdFx0ICAkKFwiLnNsaWRlLXRleHQtY291cG9uXCIpLnRleHQoXCLmipjlj6BcIik7XG5cdCAgfSBlbHNlIHtcblx0XHQgICQoXCIubW9yZS1jb3Vwb25cIikuc2xpZGVVcCgpO1xuXHRcdCAgJChcIi5zbGlkZS10ZXh0LWNvdXBvblwiKS50ZXh0KFwi5bGV5byA4pa+XCIpO1xuXHQgIH1cblx0fSk7XG59XG5cbi8qIOefpeivhuaooeadvyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RlbXBsYXRlL3RlbXBsYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==