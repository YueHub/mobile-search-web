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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
	var ms = {
		init: function init(obj, args) {
			return function () {
				ms.fillHtml(obj, args);
				ms.bindEvent(obj, args);
			}();
		},
		//填充html
		fillHtml: function fillHtml(obj, args) {
			return function () {
				obj.empty();
				//上一页
				if (args.current > 1) {
					obj.append('<a href="javascript:;" class="prevPage">上一页</a>');
				} else {
					obj.remove('.prevPage');
					obj.append('<span class="disabled">上一页</span>');
				}
				//中间页码
				if (args.current != 1 && args.current >= 4 && args.pageCount != 4) {
					obj.append('<a href="javascript:;" class="tcdNumber">' + 1 + '</a>');
				}
				if (args.current - 2 > 2 && args.current <= args.pageCount && args.pageCount > 5) {
					obj.append('<span>...</span>');
				}
				var start = args.current - 2,
				    end = args.current + 2;
				if (start > 1 && args.current < 4 || args.current == 1) {
					end++;
				}
				if (args.current > args.pageCount - 4 && args.current >= args.pageCount) {
					start--;
				}
				for (; start <= end; start++) {
					if (start <= args.pageCount && start >= 1) {
						if (start != args.current) {
							obj.append('<a href="javascript:;" class="tcdNumber">' + start + '</a>');
						} else {
							obj.append('<span class="current">' + start + '</span>');
						}
					}
				}
				if (args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5) {
					obj.append('<span>...</span>');
				}
				if (args.current != args.pageCount && args.current < args.pageCount - 2 && args.pageCount != 4) {
					obj.append('<a href="javascript:;" class="tcdNumber">' + args.pageCount + '</a>');
				}
				//下一页
				if (args.current < args.pageCount) {
					obj.append('<a href="javascript:;" class="nextPage">下一页</a>');
				} else {
					obj.remove('.nextPage');
					obj.append('<span class="disabled">下一页</span>');
				}
			}();
		},
		//绑定事件
		bindEvent: function bindEvent(obj, args) {
			return function () {
				obj.on("click", "a.tcdNumber", function () {
					var current = parseInt($(this).text());
					ms.fillHtml(obj, { "current": current, "pageCount": args.pageCount });
					if (typeof args.backFn == "function") {
						args.backFn(current);
					}
				});
				//上一页
				obj.on("click", "a.prevPage", function () {
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj, { "current": current - 1, "pageCount": args.pageCount });
					if (typeof args.backFn == "function") {
						args.backFn(current - 1);
					}
				});
				//下一页
				obj.on("click", "a.nextPage", function () {
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj, { "current": current + 1, "pageCount": args.pageCount });
					if (typeof args.backFn == "function") {
						args.backFn(current + 1);
					}
				});
			}();
		}
	};
	$.fn.createPage = function (options) {
		var args = $.extend({
			pageCount: 15,
			current: 1,
			backFn: function backFn() {}
		}, options);
		ms.init(this, args);
	};
})(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (C) 2010-2013 Graham Breach
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * TagCanvas 2.2 For more information, please contact <graham@goat1000.com>
 */
(function () {
	var ao,
	    an,
	    aa = Math.abs,
	    w = Math.sin,
	    l = Math.cos,
	    I = Math.max,
	    at = Math.min,
	    V = Math.ceil,
	    ah = Math.sqrt,
	    X = Math.pow,
	    L = {},
	    O = {},
	    R = {
		0: "0,",
		1: "17,",
		2: "34,",
		3: "51,",
		4: "68,",
		5: "85,",
		6: "102,",
		7: "119,",
		8: "136,",
		9: "153,",
		a: "170,",
		A: "170,",
		b: "187,",
		B: "187,",
		c: "204,",
		C: "204,",
		d: "221,",
		D: "221,",
		e: "238,",
		E: "238,",
		f: "255,",
		F: "255,"
	},
	    e,
	    ad,
	    d,
	    a,
	    ae,
	    z,
	    o = document,
	    H,
	    c = {};
	for (ao = 0; ao < 256; ++ao) {
		an = ao.toString(16);
		if (ao < 16) {
			an = "0" + an;
		}
		O[an] = O[an.toUpperCase()] = ao.toString() + ",";
	}
	function aj(i) {
		return typeof i != "undefined";
	}
	function v(i) {
		return (typeof i === "undefined" ? "undefined" : _typeof(i)) == "object" && i != null;
	}
	function b(i, j, av) {
		return isNaN(i) ? av : at(av, I(j, i));
	}
	function Y() {
		return false;
	}
	function T() {
		return new Date().valueOf();
	}
	function n(av, ay) {
		var j = [],
		    aw = av.length,
		    ax;
		for (ax = 0; ax < aw; ++ax) {
			j.push(av[ax]);
		}
		j.sort(ay);
		return j;
	}
	function ac(j) {
		var aw = j.length - 1,
		    av,
		    ax;
		while (aw) {
			ax = ~~(Math.random() * aw);
			av = j[aw];
			j[aw] = j[ax];
			j[ax] = av;
			--aw;
		}
	}
	function U(i, av, j) {
		this.x = i;
		this.y = av;
		this.z = j;
	}
	ae = U.prototype;
	ae.length = function () {
		return ah(this.x * this.x + this.y * this.y + this.z * this.z);
	};
	ae.dot = function (i) {
		return this.x * i.x + this.y * i.y + this.z * i.z;
	};
	ae.cross = function (j) {
		var i = this.y * j.z - this.z * j.y,
		    aw = this.z * j.x - this.x * j.z,
		    av = this.x * j.y - this.y * j.x;
		return new U(i, aw, av);
	};
	ae.angle = function (j) {
		var i = this.dot(j),
		    av;
		if (i == 0) {
			return Math.PI / 2;
		}
		av = i / (this.length() * j.length());
		if (av >= 1) {
			return 0;
		}
		if (av <= -1) {
			return Math.PI;
		}
		return Math.acos(av);
	};
	ae.unit = function () {
		var i = this.length();
		return new U(this.x / i, this.y / i, this.z / i);
	};
	function K(av, j) {
		j = j * Math.PI / 180;
		av = av * Math.PI / 180;
		var i = w(av) * l(j),
		    ax = -w(j),
		    aw = -l(av) * l(j);
		return new U(i, ax, aw);
	}
	function k(i) {
		this[1] = {
			1: i[0],
			2: i[1],
			3: i[2]
		};
		this[2] = {
			1: i[3],
			2: i[4],
			3: i[5]
		};
		this[3] = {
			1: i[6],
			2: i[7],
			3: i[8]
		};
	}
	a = k.prototype;
	k.Identity = function () {
		return new k([1, 0, 0, 0, 1, 0, 0, 0, 1]);
	};
	k.Rotation = function (aw, i) {
		var j = w(aw),
		    av = l(aw),
		    ax = 1 - av;
		return new k([av + X(i.x, 2) * ax, i.x * i.y * ax - i.z * j, i.x * i.z * ax + i.y * j, i.y * i.x * ax + i.z * j, av + X(i.y, 2) * ax, i.y * i.z * ax - i.x * j, i.z * i.x * ax - i.y * j, i.z * i.y * ax + i.x * j, av + X(i.z, 2) * ax]);
	};
	a.mul = function (av) {
		var aw = [],
		    az,
		    ay,
		    ax = av.xform ? 1 : 0;
		for (az = 1; az <= 3; ++az) {
			for (ay = 1; ay <= 3; ++ay) {
				if (ax) {
					aw.push(this[az][1] * av[1][ay] + this[az][2] * av[2][ay] + this[az][3] * av[3][ay]);
				} else {
					aw.push(this[az][ay] * av);
				}
			}
		}
		return new k(aw);
	};
	a.xform = function (av) {
		var j = {},
		    i = av.x,
		    ax = av.y,
		    aw = av.z;
		j.x = i * this[1][1] + ax * this[2][1] + aw * this[3][1];
		j.y = i * this[1][2] + ax * this[2][2] + aw * this[3][2];
		j.z = i * this[1][3] + ax * this[2][3] + aw * this[3][3];
		return j;
	};
	function s(aw, ay, aD, aA) {
		var az,
		    aC,
		    j,
		    aB,
		    aE = [],
		    ax = Math.PI * (3 - ah(5)),
		    av = 2 / aw;
		for (az = 0; az < aw; ++az) {
			aC = az * av - 1 + av / 2;
			j = ah(1 - aC * aC);
			aB = az * ax;
			aE.push([l(aB) * j * ay, aC * aD, w(aB) * j * aA]);
		}
		return aE;
	}
	function ar(ax, av, aA, aG, aE) {
		var aF,
		    aH = [],
		    ay = Math.PI * (3 - ah(5)),
		    aw = 2 / ax,
		    aD,
		    aC,
		    aB,
		    az;
		for (aD = 0; aD < ax; ++aD) {
			aC = aD * aw - 1 + aw / 2;
			aF = aD * ay;
			aB = l(aF);
			az = w(aF);
			aH.push(av ? [aC * aA, aB * aG, az * aE] : [aB * aA, aC * aG, az * aE]);
		}
		return aH;
	}
	function Q(av, aw, az, aF, aD, aB) {
		var aE,
		    aG = [],
		    ax = Math.PI * 2 / aw,
		    aC,
		    aA,
		    ay;
		for (aC = 0; aC < aw; ++aC) {
			aE = aC * ax;
			aA = l(aE);
			ay = w(aE);
			aG.push(av ? [aB * az, aA * aF, ay * aD] : [aA * az, aB * aF, ay * aD]);
		}
		return aG;
	}
	function E(aw, i, j, av) {
		return ar(aw, 0, i, j, av);
	}
	function W(aw, i, j, av) {
		return ar(aw, 1, i, j, av);
	}
	function C(ax, i, j, av, aw) {
		aw = isNaN(aw) ? 0 : aw * 1;
		return Q(0, ax, i, j, av, aw);
	}
	function N(ax, i, j, av, aw) {
		aw = isNaN(aw) ? 0 : aw * 1;
		return Q(1, ax, i, j, av, aw);
	}
	function u(ay, i) {
		var ax = ay,
		    aw,
		    av,
		    j = (i * 1).toPrecision(3) + ")";
		if (ay[0] === "#") {
			if (!L[ay]) {
				if (ay.length === 4) {
					L[ay] = "rgba(" + R[ay[1]] + R[ay[2]] + R[ay[3]];
				} else {
					L[ay] = "rgba(" + O[ay.substr(1, 2)] + O[ay.substr(3, 2)] + O[ay.substr(5, 2)];
				}
			}
			ax = L[ay] + j;
		} else {
			if (ay.substr(0, 4) === "rgb(" || ay.substr(0, 4) === "hsl(") {
				ax = ay.replace("(", "a(").replace(")", "," + j);
			} else {
				if (ay.substr(0, 5) === "rgba(" || ay.substr(0, 5) === "hsla(") {
					aw = ay.lastIndexOf(",") + 1, av = ay.indexOf(")");
					i *= parseFloat(ay.substring(aw, av));
					ax = ay.substr(0, aw) + i.toPrecision(3) + ")";
				}
			}
		}
		return ax;
	}
	function h(i, j) {
		if (window.G_vmlCanvasManager) {
			return null;
		}
		var av = o.createElement("canvas");
		av.width = i;
		av.height = j;
		return av;
	}
	function D() {
		var j = h(3, 3),
		    aw,
		    av;
		if (!j) {
			return false;
		}
		aw = j.getContext("2d");
		aw.strokeStyle = "#000";
		aw.shadowColor = "#fff";
		aw.shadowBlur = 3;
		aw.globalAlpha = 0;
		aw.strokeRect(2, 2, 2, 2);
		aw.globalAlpha = 1;
		av = aw.getImageData(2, 2, 1, 1);
		j = null;
		return av.data[0] > 0;
	}
	function au(aC, j) {
		var av = 1024,
		    ay = aC.weightGradient,
		    ax,
		    aA,
		    aw,
		    aB,
		    az;
		if (aC.gCanvas) {
			aA = aC.gCanvas.getContext("2d");
		} else {
			aC.gCanvas = ax = h(av, 1);
			if (!ax) {
				return null;
			}
			aA = ax.getContext("2d");
			aB = aA.createLinearGradient(0, 0, av, 0);
			for (aw in ay) {
				aB.addColorStop(1 - aw, ay[aw]);
			}
			aA.fillStyle = aB;
			aA.fillRect(0, 0, av, 1);
		}
		az = aA.getImageData(~~((av - 1) * j), 0, 1, 1).data;
		return "rgba(" + az[0] + "," + az[1] + "," + az[2] + "," + az[3] / 255 + ")";
	}
	function B(aA, az, aw, aG, aB, aC, av, aD, aE) {
		var ay = (aC || 0) + (av && av[0] < 0 ? aa(av[0]) : 0),
		    j = (aC || 0) + (av && av[1] < 0 ? aa(av[1]) : 0),
		    ax,
		    aF;
		aA.font = az;
		aA.textBaseline = "top";
		aA.fillStyle = aw;
		aB && (aA.shadowColor = aB);
		aC && (aA.shadowBlur = aC);
		av && (aA.shadowOffsetX = av[0], aA.shadowOffsetY = av[1]);
		for (ax = 0; ax < aG.length; ++ax) {
			aF = aE ? (aD - aE[ax]) / 2 : 0;
			aA.fillText(aG[ax], ay + aF, j);
			j += parseInt(az);
		}
	}
	function q(aJ, aA, aF, aH, az, aw, aD, aE, j, aI, aG, aC, av) {
		var ax = aH + aa(j[0]) + aE + aE,
		    i = az + aa(j[1]) + aE + aE,
		    ay,
		    aB;
		ay = h(ax + aI, i + aG);
		if (!ay) {
			return null;
		}
		aB = ay.getContext("2d");
		B(aB, aA, aw, aJ, aD, aE, j, aC, av);
		return ay;
	}
	function am(aA, aD, aE, aw) {
		var aF = aa(aw[0]),
		    aB = aa(aw[1]),
		    ax = aA.width + (aF > aE ? aF + aE : aE * 2),
		    j = aA.height + (aB > aE ? aB + aE : aE * 2),
		    az = (aE || 0) + (aw[0] < 0 ? aF : 0),
		    av = (aE || 0) + (aw[1] < 0 ? aB : 0),
		    ay,
		    aC;
		ay = h(ax, j);
		if (!ay) {
			return null;
		}
		aC = ay.getContext("2d");
		aD && (aC.shadowColor = aD);
		aE && (aC.shadowBlur = aE);
		aw && (aC.shadowOffsetX = aw[0], aC.shadowOffsetY = aw[1]);
		aC.drawImage(aA, az, av, aA.width, aA.height);
		return ay;
	}
	function af(aH, az, aF) {
		var aG = parseInt(aH.toString().length * aF),
		    ay = parseInt(aF * 2 * aH.length),
		    aw = h(aG, ay),
		    aC,
		    j,
		    ax,
		    aB,
		    aE,
		    aD,
		    av,
		    aA;
		if (!aw) {
			return null;
		}
		aC = aw.getContext("2d");
		aC.fillStyle = "#000";
		aC.fillRect(0, 0, aG, ay);
		B(aC, aF + "px " + az, "#fff", aH, 0, 0, []);
		j = aC.getImageData(0, 0, aG, ay);
		ax = j.width;
		aB = j.height;
		aA = {
			min: {
				x: ax,
				y: aB
			},
			max: {
				x: -1,
				y: -1
			}
		};
		for (aD = 0; aD < aB; ++aD) {
			for (aE = 0; aE < ax; ++aE) {
				av = (aD * ax + aE) * 4;
				if (j.data[av + 1] > 0) {
					if (aE < aA.min.x) {
						aA.min.x = aE;
					}
					if (aE > aA.max.x) {
						aA.max.x = aE;
					}
					if (aD < aA.min.y) {
						aA.min.y = aD;
					}
					if (aD > aA.max.y) {
						aA.max.y = aD;
					}
				}
			}
		}
		if (ax != aG) {
			aA.min.x *= aG / ax;
			aA.max.x *= aG / ax;
		}
		if (aB != ay) {
			aA.min.y *= aG / aB;
			aA.max.y *= aG / aB;
		}
		aw = null;
		return aA;
	}
	function y(i) {
		return "'" + i.replace(/(\'|\")/g, "").replace(/\s*,\s*/g, "', '") + "'";
	}
	function G(i, j, av) {
		av = av || o;
		if (av.addEventListener) {
			av.addEventListener(i, j, false);
		} else {
			av.attachEvent("on" + i, j);
		}
	}
	function al(ax, az, aw, av) {
		var ay = av.imageScale,
		    j;
		if (!az.complete) {
			return G("load", function () {
				al(ax, az, aw, av);
			}, az);
		}
		if (!ax.complete) {
			return G("load", function () {
				al(ax, az, aw, av);
			}, ax);
		}
		az.width = az.width;
		az.height = az.height;
		if (ay) {
			ax.width = az.width * ay;
			ax.height = az.height * ay;
		}
		aw.w = ax.width;
		aw.h = ax.height;
		if (av.txtOpt && av.shadow) {
			j = am(ax, av.shadow, av.shadowBlur, av.shadowOffset);
			if (j) {
				aw.image = j;
				aw.w = j.width;
				aw.h = j.height;
			}
		}
	}
	function ai(aw, av) {
		var j = o.defaultView,
		    i = av.replace(/\-([a-z])/g, function (ax) {
			return ax.charAt(1).toUpperCase();
		});
		return j && j.getComputedStyle && j.getComputedStyle(aw, null).getPropertyValue(av) || aw.currentStyle && aw.currentStyle[i];
	}
	function F(av, j) {
		var i = 1,
		    aw;
		if (av.weightFrom) {
			i = 1 * (j.getAttribute(av.weightFrom) || av.textHeight);
		} else {
			if (aw = ai(j, "font-size")) {
				i = aw.indexOf("px") > -1 && aw.replace("px", "") * 1 || aw.indexOf("pt") > -1 && aw.replace("pt", "") * 1.25 || aw * 3.3;
			} else {
				av.weight = false;
			}
		}
		return i;
	}
	function A(i) {
		return i.target && aj(i.target.id) ? i.target.id : i.srcElement.parentNode.id;
	}
	function M(ax, ay) {
		var aw,
		    av,
		    i = parseInt(ai(ay, "width")) / ay.width,
		    j = parseInt(ai(ay, "height")) / ay.height;
		if (aj(ax.offsetX)) {
			aw = {
				x: ax.offsetX,
				y: ax.offsetY
			};
		} else {
			av = r(ay.id);
			if (aj(ax.changedTouches)) {
				ax = ax.changedTouches[0];
			}
			if (ax.pageX) {
				aw = {
					x: ax.pageX - av.x,
					y: ax.pageY - av.y
				};
			}
		}
		if (aw && i && j) {
			aw.x /= i;
			aw.y /= j;
		}
		return aw;
	}
	function m(av) {
		var j = av.target || av.fromElement.parentNode,
		    i = x.tc[j.id];
		if (i) {
			i.mx = i.my = -1;
			i.UnFreeze();
			i.EndDrag();
		}
	}
	function ag(az) {
		var aw,
		    av = x,
		    j,
		    ay,
		    ax = A(az);
		for (aw in av.tc) {
			j = av.tc[aw];
			if (j.tttimer) {
				clearTimeout(j.tttimer);
				j.tttimer = null;
			}
		}
		if (ax && av.tc[ax]) {
			j = av.tc[ax];
			if (ay = M(az, j.canvas)) {
				j.mx = ay.x;
				j.my = ay.y;
				j.Drag(az, ay);
			}
			j.drawn = 0;
		}
	}
	function Z(aw) {
		var j = x,
		    i = o.addEventListener ? 0 : 1,
		    av = A(aw);
		if (av && aw.button == i && j.tc[av]) {
			j.tc[av].BeginDrag(aw);
		}
	}
	function g(ax) {
		var av = x,
		    j = o.addEventListener ? 0 : 1,
		    aw = A(ax),
		    i;
		if (aw && ax.button == j && av.tc[aw]) {
			i = av.tc[aw];
			ag(ax);
			if (!i.EndDrag() && !i.touched) {
				i.Clicked(ax);
			}
		}
	}
	function J(av) {
		var i = x,
		    j = A(av);
		if (j && av.changedTouches && i.tc[j]) {
			i.tc[j].touched = 1;
			i.tc[j].BeginDrag(av);
		}
	}
	function p(av) {
		var i = x,
		    j = A(av);
		if (j && av.changedTouches && i.tc[j]) {
			ab(av);
			if (!i.tc[j].EndDrag()) {
				i.tc[j].Draw();
				i.tc[j].Clicked(av);
			}
		}
	}
	function ab(az) {
		var aw,
		    av = x,
		    j,
		    ay,
		    ax = A(az);
		for (aw in av.tc) {
			j = av.tc[aw];
			if (j.tttimer) {
				clearTimeout(j.tttimer);
				j.tttimer = null;
			}
		}
		if (ax && av.tc[ax] && az.changedTouches) {
			j = av.tc[ax];
			if (ay = M(az, j.canvas)) {
				j.mx = ay.x;
				j.my = ay.y;
				j.Drag(az, ay);
			}
			j.drawn = 0;
		}
	}
	function aq(av) {
		var i = x,
		    j = A(av);
		if (j && i.tc[j]) {
			av.cancelBubble = true;
			av.returnValue = false;
			av.preventDefault && av.preventDefault();
			i.tc[j].Wheel((av.wheelDelta || av.detail) > 0);
		}
	}
	function t(ax) {
		var j = x.tc,
		    aw,
		    av;
		ax = ax || T();
		for (aw in j) {
			av = j[aw].interval;
			j[aw].Draw(ax);
		}
		x.NextFrame(av);
	}
	function r(av) {
		var ay = o.getElementById(av),
		    i = ay.getBoundingClientRect(),
		    aB = o.documentElement,
		    az = o.body,
		    aA = window,
		    aw = aA.pageXOffset || aB.scrollLeft,
		    aC = aA.pageYOffset || aB.scrollTop,
		    ax = aB.clientLeft || az.clientLeft,
		    j = aB.clientTop || az.clientTop;
		return {
			x: i.left + aw - ax,
			y: i.top + aC - j
		};
	}
	function ap(j, aw, ax, av) {
		var i = j.radius * j.z1 / (j.z1 + j.z2 + aw.z);
		return {
			x: aw.x * i * ax,
			y: aw.y * i * av,
			z: aw.z,
			w: (j.z1 - aw.z) / j.z2
		};
	}
	function P(i) {
		this.e = i;
		this.br = 0;
		this.line = [];
		this.text = [];
		this.original = i.innerText || i.textContent;
	}
	z = P.prototype;
	z.Lines = function (ax) {
		var aw = ax ? 1 : 0,
		    ay,
		    j,
		    av;
		ax = ax || this.e;
		ay = ax.childNodes;
		j = ay.length;
		for (av = 0; av < j; ++av) {
			if (ay[av].nodeName == "BR") {
				this.text.push(this.line.join(" "));
				this.br = 1;
			} else {
				if (ay[av].nodeType == 3) {
					if (this.br) {
						this.line = [ay[av].nodeValue];
						this.br = 0;
					} else {
						this.line.push(ay[av].nodeValue);
					}
				} else {
					this.Lines(ay[av]);
				}
			}
		}
		aw || this.br || this.text.push(this.line.join(" "));
		return this.text;
	};
	z.SplitWidth = function (av, aC, az, ay) {
		var ax,
		    aw,
		    aB,
		    aA = [];
		aC.font = ay + "px " + az;
		for (ax = 0; ax < this.text.length; ++ax) {
			aB = this.text[ax].split(/\s+/);
			this.line = [aB[0]];
			for (aw = 1; aw < aB.length; ++aw) {
				if (aC.measureText(this.line.join(" ") + " " + aB[aw]).width > av) {
					aA.push(this.line.join(" "));
					this.line = [aB[aw]];
				} else {
					this.line.push(aB[aw]);
				}
			}
			aA.push(this.line.join(" "));
		}
		return this.text = aA;
	};
	function f(i) {
		this.ts = T();
		this.tc = i;
		this.x = this.y = this.w = this.h = this.sc = 1;
		this.z = 0;
		this.Draw = i.pulsateTo < 1 && i.outlineMethod != "colour" ? this.DrawPulsate : this.DrawSimple;
		this.SetMethod(i.outlineMethod);
	}
	e = f.prototype;
	e.SetMethod = function (av) {
		var j = {
			block: ["PreDraw", "DrawBlock"],
			colour: ["PreDraw", "DrawColour"],
			outline: ["PostDraw", "DrawOutline"],
			classic: ["LastDraw", "DrawOutline"],
			none: ["LastDraw"]
		},
		    i = j[av] || j.outline;
		if (av == "none") {
			this.Draw = function () {
				return 1;
			};
		} else {
			this.drawFunc = this[i[1]];
		}
		this[i[0]] = this.Draw;
	};
	e.Update = function (aB, aA, aC, ax, ay, az, aw, i) {
		var j = this.tc.outlineOffset,
		    av = 2 * j;
		this.x = ay * aB + aw - j;
		this.y = ay * aA + i - j;
		this.w = ay * aC + av;
		this.h = ay * ax + av;
		this.sc = ay;
		this.z = az;
	};
	e.DrawOutline = function (ay, i, ax, j, av, aw) {
		ay.strokeStyle = aw;
		ay.strokeRect(i, ax, j, av);
	};
	e.DrawColour = function (aw, az, ax, aA, av, i, aB, j, ay) {
		return this[aB.image ? "DrawColourImage" : "DrawColourText"](aw, az, ax, aA, av, i, aB, j, ay);
	};
	e.DrawColourText = function (ax, aA, ay, aB, av, i, aC, j, az) {
		var aw = aC.colour;
		aC.colour = i;
		aC.alpha = 1;
		aC.Draw(ax, j, az);
		aC.colour = aw;
		return 1;
	};
	e.DrawColourImage = function (aA, aD, aB, aE, az, i, aH, j, aC) {
		var aF = aA.canvas,
		    ax = ~~I(aD, 0),
		    aw = ~~I(aB, 0),
		    ay = at(aF.width - ax, aE) + 0.5 | 0,
		    aG = at(aF.height - aw, az) + 0.5 | 0,
		    av;
		if (H) {
			H.width = ay, H.height = aG;
		} else {
			H = h(ay, aG);
		}
		if (!H) {
			return this.SetMethod("outline");
		}
		av = H.getContext("2d");
		av.drawImage(aF, ax, aw, ay, aG, 0, 0, ay, aG);
		aA.clearRect(ax, aw, ay, aG);
		aH.alpha = 1;
		aH.Draw(aA, j, aC);
		aA.setTransform(1, 0, 0, 1, 0, 0);
		aA.save();
		aA.beginPath();
		aA.rect(ax, aw, ay, aG);
		aA.clip();
		aA.globalCompositeOperation = "source-in";
		aA.fillStyle = i;
		aA.fillRect(ax, aw, ay, aG);
		aA.restore();
		aA.globalCompositeOperation = "destination-over";
		aA.drawImage(H, 0, 0, ay, aG, ax, aw, ay, aG);
		aA.globalCompositeOperation = "source-over";
		return 1;
	};
	e.DrawBlock = function (ay, i, ax, j, av, aw) {
		ay.fillStyle = aw;
		ay.fillRect(i, ax, j, av);
	};
	e.DrawSimple = function (ax, i, j, aw) {
		var av = this.tc;
		ax.setTransform(1, 0, 0, 1, 0, 0);
		ax.strokeStyle = av.outlineColour;
		ax.lineWidth = av.outlineThickness;
		ax.shadowBlur = ax.shadowOffsetX = ax.shadowOffsetY = 0;
		ax.globalAlpha = 1;
		return this.drawFunc(ax, this.x, this.y, this.w, this.h, av.outlineColour, i, j, aw);
	};
	e.DrawPulsate = function (ay, i, j, aw) {
		var ax = T() - this.ts,
		    av = this.tc;
		ay.setTransform(1, 0, 0, 1, 0, 0);
		ay.strokeStyle = av.outlineColour;
		ay.lineWidth = av.outlineThickness;
		ay.shadowBlur = ay.shadowOffsetX = ay.shadowOffsetY = 0;
		ay.globalAlpha = av.pulsateTo + (1 - av.pulsateTo) * (0.5 + l(2 * Math.PI * ax / (1000 * av.pulsateTime)) / 2);
		return this.drawFunc(ay, this.x, this.y, this.w, this.h, av.outlineColour, i, j, aw);
	};
	e.Active = function (av, i, j) {
		return i >= this.x && j >= this.y && i <= this.x + this.w && j <= this.y + this.h;
	};
	e.PreDraw = e.PostDraw = e.LastDraw = Y;
	function S(aw, aC, az, aB, aA, ax, j, av, i) {
		var ay = aw.ctxt;
		this.tc = aw;
		this.image = aC.src ? aC : null;
		this.text = aC.src ? [] : aC;
		this.text_original = i;
		this.line_widths = [];
		this.title = az.title || null;
		this.a = az;
		this.position = new U(aB[0], aB[1], aB[2]);
		this.x = this.y = this.z = 0;
		this.w = aA;
		this.h = ax;
		this.colour = j || aw.textColour;
		this.textFont = av || aw.textFont;
		this.weight = this.sc = this.alpha = 1;
		this.weighted = !aw.weight;
		this.outline = new f(aw);
		if (!this.image) {
			this.textHeight = aw.textHeight;
			this.extents = af(this.text, this.textFont, this.textHeight);
			this.Measure(ay, aw);
		}
		this.SetShadowColour = aw.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed;
		this.SetDraw(aw);
	}
	ad = S.prototype;
	ad.EqualTo = function (av) {
		var j = av.getElementsByTagName("img");
		if (this.a.href != av.href) {
			return 0;
		}
		if (j.length) {
			return this.image.src == j[0].src;
		}
		return (av.innerText || av.textContent) == this.text_original;
	};
	ad.SetDraw = function (i) {
		this.Draw = this.image ? i.ie > 7 ? this.DrawImageIE : this.DrawImage : this.DrawText;
		i.noSelect && (this.CheckActive = Y);
	};
	ad.MeasureText = function (ay) {
		var aw,
		    av = this.text.length,
		    j = 0,
		    ax;
		for (aw = 0; aw < av; ++aw) {
			this.line_widths[aw] = ax = ay.measureText(this.text[aw]).width;
			j = I(j, ax);
		}
		return j;
	};
	ad.Measure = function (az, j) {
		this.h = this.extents ? this.extents.max.y + this.extents.min.y : this.textHeight;
		az.font = this.font = this.textHeight + "px " + this.textFont;
		this.w = this.MeasureText(az);
		if (j.txtOpt) {
			var aw = j.txtScale,
			    ax = aw * this.textHeight,
			    ay = ax + "px " + this.textFont,
			    av = [aw * j.shadowOffset[0], aw * j.shadowOffset[1]],
			    i;
			az.font = ay;
			i = this.MeasureText(az);
			this.image = q(this.text, ay, ax, i, aw * this.h, this.colour, j.shadow, aw * j.shadowBlur, av, aw, aw, i, this.line_widths);
			if (this.image) {
				this.w = this.image.width / aw;
				this.h = this.image.height / aw;
			}
			this.SetDraw(j);
			j.txtOpt = !!this.image;
		}
	};
	ad.SetFont = function (i, j) {
		this.textFont = i;
		this.colour = j;
		this.extents = af(this.text, this.textFont, this.textHeight);
		this.Measure(this.tc.ctxt, this.tc);
	};
	ad.SetWeight = function (i) {
		if (!this.text.length) {
			return;
		}
		this.weight = i;
		this.Weight(this.tc.ctxt, this.tc);
		this.Measure(this.tc.ctxt, this.tc);
	};
	ad.Weight = function (aw, av) {
		var j = this.weight,
		    i = av.weightMode;
		this.weighted = true;
		if (i == "colour" || i == "both") {
			this.colour = au(av, (j - av.min_weight) / (av.max_weight - av.min_weight));
		}
		if (i == "size" || i == "both") {
			if (av.weightSizeMin > 0 && av.weightSizeMax > av.weightSizeMin) {
				this.textHeight = av.weightSize * (av.weightSizeMin + (av.weightSizeMax - av.weightSizeMin) * (j - av.min_weight) / (av.max_weight - av.min_weight));
			} else {
				this.textHeight = j * av.weightSize;
			}
		}
		this.extents = af(this.text, this.textFont, this.textHeight);
	};
	ad.SetShadowColourFixed = function (av, j, i) {
		av.shadowColor = j;
	};
	ad.SetShadowColourAlpha = function (av, j, i) {
		av.shadowColor = u(j, i);
	};
	ad.DrawText = function (ax, aA, aw) {
		var aB = this.tc,
		    az = this.x,
		    ay = this.y,
		    aC = this.sc,
		    j,
		    av;
		ax.globalAlpha = this.alpha;
		ax.fillStyle = this.colour;
		aB.shadow && this.SetShadowColour(ax, aB.shadow, this.alpha);
		ax.font = this.font;
		az += aA / aC;
		ay += aw / aC - this.h / 2;
		for (j = 0; j < this.text.length; ++j) {
			av = az - this.line_widths[j] / 2;
			ax.setTransform(aC, 0, 0, aC, aC * av, aC * ay);
			ax.fillText(this.text[j], 0, 0);
			ay += this.textHeight;
		}
	};
	ad.DrawImage = function (ax, aD, aw) {
		var aA = this.x,
		    ay = this.y,
		    aE = this.sc,
		    j = this.image,
		    aB = this.w,
		    av = this.h,
		    az = this.alpha,
		    aC = this.shadow;
		ax.globalAlpha = az;
		aC && this.SetShadowColour(ax, aC, az);
		aA += aD / aE - aB / 2;
		ay += aw / aE - av / 2;
		ax.setTransform(aE, 0, 0, aE, aE * aA, aE * ay);
		ax.drawImage(j, 0, 0, aB, av);
	};
	ad.DrawImageIE = function (ax, aB, aw) {
		var j = this.image,
		    aC = this.sc,
		    aA = j.width = this.w * aC,
		    av = j.height = this.h * aC,
		    az = this.x * aC + aB - aA / 2,
		    ay = this.y * aC + aw - av / 2;
		ax.setTransform(1, 0, 0, 1, 0, 0);
		ax.globalAlpha = this.alpha;
		ax.drawImage(j, az, ay);
	};
	ad.Calc = function (i, av) {
		var j,
		    ay = this.tc,
		    ax = ay.minBrightness,
		    aw = ay.maxBrightness,
		    az = ay.max_radius;
		j = i.xform(this.position);
		this.xformed = j;
		j = ap(ay, j, ay.stretchX, ay.stretchY);
		this.x = j.x;
		this.y = j.y;
		this.z = j.z;
		this.sc = j.w;
		this.alpha = av * b(ax + (aw - ax) * (az - this.z) / (2 * az), 0, 1);
	};
	ad.CheckActive = function (aw, aA, av) {
		var aB = this.tc,
		    i = this.outline,
		    az = this.w,
		    j = this.h,
		    ay = this.x - az / 2,
		    ax = this.y - j / 2;
		i.Update(ay, ax, az, j, this.sc, this.z, aA, av);
		return i.Active(aw, aB.mx, aB.my) ? i : null;
	};
	ad.Clicked = function (ay) {
		var j = this.a,
		    av = j.target,
		    aw = j.href,
		    i;
		if (av != "" && av != "_self") {
			if (self.frames[av]) {
				self.frames[av].document.location = aw;
			} else {
				try {
					if (top.frames[av]) {
						top.frames[av].document.location = aw;
						return;
					}
				} catch (ax) {}

				window.open(aw, av);
			}
			return;
		}
		if (o.createEvent) {
			i = o.createEvent("MouseEvents");
			i.initMouseEvent("click", 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
			if (!j.dispatchEvent(i)) {
				return;
			}
		} else {
			if (j.fireEvent) {
				if (!j.fireEvent("onclick")) {
					return;
				}
			}
		}
		o.location = aw;
	};
	function x(aA, j, aw) {
		var av,
		    ay,
		    az = o.getElementById(aA),
		    ax = ["id", "class", "innerHTML"];
		if (!az) {
			throw 0;
		}
		if (aj(window.G_vmlCanvasManager)) {
			az = window.G_vmlCanvasManager.initElement(az);
			this.ie = parseFloat(navigator.appVersion.split("MSIE")[1]);
		}
		if (az && (!az.getContext || !az.getContext("2d").fillText)) {
			ay = o.createElement("DIV");
			for (av = 0; av < ax.length; ++av) {
				ay[ax[av]] = az[ax[av]];
			}
			az.parentNode.insertBefore(ay, az);
			az.parentNode.removeChild(az);
			throw 0;
		}
		for (av in x.options) {
			this[av] = aw && aj(aw[av]) ? aw[av] : aj(x[av]) ? x[av] : x.options[av];
		}
		this.canvas = az;
		this.ctxt = az.getContext("2d");
		this.z1 = 250 / this.depth;
		this.z2 = this.z1 / this.zoom;
		this.radius = at(az.height, az.width) * 0.0075;
		this.max_weight = 0;
		this.min_weight = 200;
		this.textFont = this.textFont && y(this.textFont);
		this.textHeight *= 1;
		this.pulsateTo = b(this.pulsateTo, 0, 1);
		this.minBrightness = b(this.minBrightness, 0, 1);
		this.maxBrightness = b(this.maxBrightness, this.minBrightness, 1);
		this.ctxt.textBaseline = "top";
		this.lx = (this.lock + "").indexOf("x") + 1;
		this.ly = (this.lock + "").indexOf("y") + 1;
		this.frozen = this.dx = this.dy = this.fixedAnim = this.touched = 0;
		this.fixedAlpha = 1;
		this.source = j || aA;
		this.transform = k.Identity();
		this.startTime = this.time = T();
		this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition;
		this.animTiming = typeof x[this.animTiming] == "function" ? x[this.animTiming] : x.Smooth;
		if (this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1]) {
			this.ctxt.shadowColor = this.shadow;
			this.shadow = this.ctxt.shadowColor;
			this.shadowAlpha = D();
		} else {
			delete this.shadow;
		}
		this.Load();
		if (j && this.hideTags) {
			(function (i) {
				if (x.loaded) {
					i.HideTags();
				} else {
					G("load", function () {
						i.HideTags();
					}, window);
				}
			})(this);
		}
		this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0;
		this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0;
		if (this.tooltip) {
			if (this.tooltip == "native") {
				this.Tooltip = this.TooltipNative;
			} else {
				this.Tooltip = this.TooltipDiv;
				if (!this.ttdiv) {
					this.ttdiv = o.createElement("div");
					this.ttdiv.className = this.tooltipClass;
					this.ttdiv.style.position = "absolute";
					this.ttdiv.style.zIndex = az.style.zIndex + 1;
					G("mouseover", function (i) {
						i.target.style.display = "none";
					}, this.ttdiv);
					o.body.appendChild(this.ttdiv);
				}
			}
		} else {
			this.Tooltip = this.TooltipNone;
		}
		if (!this.noMouse && !c[aA]) {
			G("mousemove", ag, az);
			G("mouseout", m, az);
			G("mouseup", g, az);
			G("touchstart", J, az);
			G("touchend", p, az);
			G("touchcancel", p, az);
			G("touchmove", ab, az);
			if (this.dragControl) {
				G("mousedown", Z, az);
				G("selectstart", Y, az);
			}
			if (this.wheelZoom) {
				G("mousewheel", aq, az);
				G("DOMMouseScroll", aq, az);
			}
			c[aA] = 1;
		}
		x.started || (x.started = setTimeout(t, this.interval));
	}
	d = x.prototype;
	d.SourceElements = function () {
		if (o.querySelectorAll) {
			return o.querySelectorAll("#" + this.source);
		}
		return [o.getElementById(this.source)];
	};
	d.HideTags = function () {
		var av = this.SourceElements(),
		    j;
		for (j = 0; j < av.length; ++j) {
			av[j].style.display = "none";
		}
	};
	d.GetTags = function () {
		var az = this.SourceElements(),
		    ay,
		    av = [],
		    ax,
		    aw;
		for (ax = 0; ax < az.length; ++ax) {
			ay = az[ax].getElementsByTagName("a");
			for (aw = 0; aw < ay.length; ++aw) {
				av.push(ay[aw]);
			}
		}
		return av;
	};
	d.CreateTag = function (aA, az) {
		var j = aA.getElementsByTagName("img"),
		    ax,
		    aw,
		    ay,
		    av;
		az = az || [0, 0, 0];
		if (j.length) {
			ax = new Image();
			ax.src = j[0].src;
			aw = new S(this, ax, aA, az, 0, 0);
			al(ax, j[0], aw, this);
			return aw;
		}
		ay = new P(aA);
		aw = ay.Lines();
		av = this.textFont || y(ai(aA, "font-family"));
		if (this.splitWidth) {
			aw = ay.SplitWidth(this.splitWidth, this.ctxt, av, this.textHeight);
		}
		return new S(this, aw, aA, az, 2, this.textHeight + 2, this.textColour || ai(aA, "color"), av, ay.original);
	};
	d.UpdateTag = function (av, i) {
		var aw = this.textColour || ai(i, "color"),
		    j = this.textFont || y(ai(i, "font-family"));
		av.title = i.title;
		if (av.colour != aw || av.textFont != j) {
			av.SetFont(j, aw);
		}
	};
	d.Weight = function (aw) {
		var av = aw.length,
		    j,
		    ax,
		    ay = [];
		for (ax = 0; ax < av; ++ax) {
			j = F(this, aw[ax].a);
			if (j > this.max_weight) {
				this.max_weight = j;
			}
			if (j < this.min_weight) {
				this.min_weight = j;
			}
			ay.push(j);
		}
		if (this.max_weight > this.min_weight) {
			for (ax = 0; ax < av; ++ax) {
				aw[ax].SetWeight(ay[ax]);
			}
		}
	};
	d.Load = function () {
		var aE = this.GetTags(),
		    aA = [],
		    aD,
		    az,
		    aw,
		    av,
		    j,
		    ax,
		    aC,
		    ay = [],
		    aB = {
			sphere: s,
			vcylinder: E,
			hcylinder: W,
			vring: C,
			hring: N
		};
		if (aE.length) {
			ay.length = aE.length;
			for (aC = 0; aC < aE.length; ++aC) {
				ay[aC] = aC;
			}
			this.shuffleTags && ac(ay);
			aw = 100 * this.radiusX;
			av = 100 * this.radiusY;
			j = 100 * this.radiusZ;
			this.max_radius = I(aw, I(av, j));
			if (this.shapeArgs) {
				this.shapeArgs[0] = aE.length;
			} else {
				az = this.shape.toString().split(/[(),]/);
				aD = az.shift();
				this.shape = aB[aD] || aB.sphere;
				this.shapeArgs = [aE.length, aw, av, j].concat(az);
			}
			ax = this.shape.apply(this, this.shapeArgs);
			this.listLength = aE.length;
			for (aC = 0; aC < aE.length; ++aC) {
				aA.push(this.CreateTag(aE[ay[aC]], ax[aC]));
			}
			this.weight && this.Weight(aA, true);
		}
		this.taglist = aA;
	};
	d.Update = function () {
		var aE = this.GetTags(),
		    aD = [],
		    ay = this.taglist,
		    aF,
		    aC = [],
		    aA = [],
		    aw,
		    aB,
		    av,
		    az,
		    ax;
		if (!this.shapeArgs) {
			return this.Load();
		}
		if (aE.length) {
			av = this.listLength = aE.length;
			aB = ay.length;
			for (az = 0; az < aB; ++az) {
				aD.push(ay[az]);
				aA.push(az);
			}
			for (az = 0; az < av; ++az) {
				for (ax = 0, aF = 0; ax < aB; ++ax) {
					if (ay[ax].EqualTo(aE[az])) {
						this.UpdateTag(aD[ax], aE[az]);
						aF = aA[ax] = -1;
					}
				}
				if (!aF) {
					aC.push(az);
				}
			}
			for (az = 0, ax = 0; az < aB; ++az) {
				if (aA[ax] == -1) {
					aA.splice(ax, 1);
				} else {
					++ax;
				}
			}
			if (aA.length) {
				ac(aA);
				while (aA.length && aC.length) {
					az = aA.shift();
					ax = aC.shift();
					aD[az] = this.CreateTag(aE[ax]);
				}
				aA.sort(function (j, i) {
					return j - i;
				});
				while (aA.length) {
					aD.splice(aA.pop(), 1);
				}
			}
			ax = aD.length / (aC.length + 1);
			az = 0;
			while (aC.length) {
				aD.splice(V(++az * ax), 0, this.CreateTag(aE[aC.shift()]));
			}
			this.shapeArgs[0] = av = aD.length;
			aw = this.shape.apply(this, this.shapeArgs);
			for (az = 0; az < av; ++az) {
				aD[az].position = new U(aw[az][0], aw[az][1], aw[az][2]);
			}
			this.weight && this.Weight(aD);
		}
		this.taglist = aD;
	};
	d.SetShadow = function (i) {
		i.shadowBlur = this.shadowBlur;
		i.shadowOffsetX = this.shadowOffset[0];
		i.shadowOffsetY = this.shadowOffset[1];
	};
	d.Draw = function (aF) {
		if (this.paused) {
			return;
		}
		var az = this.canvas,
		    ax = az.width,
		    aE = az.height,
		    aH = 0,
		    aw = (aF - this.time) * this.interval / 1000,
		    aD = ax / 2 + this.offsetX,
		    aC = aE / 2 + this.offsetY,
		    aL = this.ctxt,
		    aB,
		    aM,
		    aJ,
		    av = -1,
		    ay = this.taglist,
		    aI = ay.length,
		    j = this.frontSelect,
		    aG = this.centreFunc == Y,
		    aA;
		this.time = aF;
		if (this.frozen && this.drawn) {
			return this.Animate(ax, aE, aw);
		}
		aA = this.AnimateFixed();
		aL.setTransform(1, 0, 0, 1, 0, 0);
		this.active = null;
		for (aJ = 0; aJ < aI; ++aJ) {
			ay[aJ].Calc(this.transform, this.fixedAlpha);
		}
		ay = n(ay, function (aN, i) {
			return i.z - aN.z;
		});
		for (aJ = 0; aJ < aI; ++aJ) {
			aM = this.mx >= 0 && this.my >= 0 && this.taglist[aJ].CheckActive(aL, aD, aC);
			if (aM && aM.sc > aH && (!j || aM.z <= 0)) {
				aB = aM;
				av = aJ;
				aB.tag = this.taglist[aJ];
				aH = aM.sc;
			}
		}
		this.active = aB;
		this.txtOpt || this.shadow && this.SetShadow(aL);
		aL.clearRect(0, 0, ax, aE);
		for (aJ = 0; aJ < aI; ++aJ) {
			if (!aG && ay[aJ].z <= 0) {
				try {
					this.centreFunc(aL, ax, aE, aD, aC);
				} catch (aK) {
					alert(aK);
					this.centreFunc = Y;
				}
				aG = true;
			}
			if (!(aB && aB.tag == ay[aJ] && aB.PreDraw(aL, ay[aJ], aD, aC))) {
				ay[aJ].Draw(aL, aD, aC);
			}
			aB && aB.tag == ay[aJ] && aB.PostDraw(aL);
		}
		if (this.freezeActive && aB) {
			this.Freeze();
		} else {
			this.UnFreeze();
			this.drawn = aI == this.listLength;
		}
		if (this.fixedCallback) {
			this.fixedCallback(this, this.fixedCallbackTag);
			this.fixedCallback = null;
		}
		aA || this.Animate(ax, aE, aw);
		aB && aB.LastDraw(aL);
		az.style.cursor = aB ? this.activeCursor : "";
		this.Tooltip(aB, this.taglist[av]);
	};
	d.TooltipNone = function () {};
	d.TooltipNative = function (j, i) {
		this.canvas.title = j && i.title ? i.title : "";
	};
	d.TooltipDiv = function (ax, j) {
		var i = this,
		    aw = i.ttdiv.style,
		    ay = i.canvas.id,
		    av = "none";
		if (ax && j.title) {
			if (j.title != i.ttdiv.innerHTML) {
				aw.display = av;
			}
			i.ttdiv.innerHTML = j.title;
			j.title = i.ttdiv.innerHTML;
			if (aw.display == av && !i.tttimer) {
				i.tttimer = setTimeout(function () {
					var az = r(ay);
					aw.display = "block";
					aw.left = az.x + i.mx + "px";
					aw.top = az.y + i.my + 24 + "px";
					i.tttimer = null;
				}, i.tooltipDelay);
			}
		} else {
			aw.display = av;
		}
	};
	d.Transform = function (ay, i, aA) {
		if (i || aA) {
			var j = w(i),
			    az = l(i),
			    aB = w(aA),
			    ax = l(aA),
			    av = new k([ax, 0, aB, 0, 1, 0, -aB, 0, ax]),
			    aw = new k([1, 0, 0, 0, az, -j, 0, j, az]);
			ay.transform = ay.transform.mul(av.mul(aw));
		}
	};
	d.AnimateFixed = function () {
		var av, j, ax, i, aw;
		if (this.fadeIn) {
			j = T() - this.startTime;
			if (j >= this.fadeIn) {
				this.fadeIn = 0;
				this.fixedAlpha = 1;
			} else {
				this.fixedAlpha = j / this.fadeIn;
			}
		}
		if (this.fixedAnim) {
			if (!this.fixedAnim.transform) {
				this.fixedAnim.transform = this.transform;
			}
			av = this.fixedAnim, j = T() - av.t0, ax = av.angle, i, aw = this.animTiming(av.t, j);
			this.transform = av.transform;
			if (j >= av.t) {
				this.fixedCallbackTag = av.tag;
				this.fixedCallback = av.cb;
				this.fixedAnim = this.yaw = this.pitch = 0;
			} else {
				ax *= aw;
			}
			i = k.Rotation(ax, av.axis);
			this.transform = this.transform.mul(i);
			return this.fixedAnim != 0;
		}
		return false;
	};
	d.AnimatePosition = function (av, ay, aw) {
		var j = this,
		    i = j.mx,
		    aA = j.my,
		    ax,
		    az;
		if (!j.frozen && i >= 0 && aA >= 0 && i < av && aA < ay) {
			ax = j.maxSpeed, az = j.reverse ? -1 : 1;
			j.lx || (j.yaw = az * aw * (ax * 2 * i / av - ax));
			j.ly || (j.pitch = az * aw * -(ax * 2 * aA / ay - ax));
			j.initial = null;
		} else {
			if (!j.initial) {
				if (j.frozen && !j.freezeDecel) {
					j.yaw = j.pitch = 0;
				} else {
					j.Decel(j);
				}
			}
		}
		this.Transform(j, j.pitch, j.yaw);
	};
	d.AnimateDrag = function (j, ax, aw) {
		var i = this,
		    av = 100 * aw * i.maxSpeed / i.max_radius / i.zoom;
		if (i.dx || i.dy) {
			i.lx || (i.yaw = i.dx * av / i.stretchX);
			i.ly || (i.pitch = i.dy * -av / i.stretchY);
			i.dx = i.dy = 0;
			i.initial = null;
		} else {
			if (!i.initial) {
				i.Decel(i);
			}
		}
		this.Transform(i, i.pitch, i.yaw);
	};
	d.Freeze = function () {
		if (!this.frozen) {
			this.preFreeze = [this.yaw, this.pitch];
			this.frozen = 1;
			this.drawn = 0;
		}
	};
	d.UnFreeze = function () {
		if (this.frozen) {
			this.yaw = this.preFreeze[0];
			this.pitch = this.preFreeze[1];
			this.frozen = 0;
		}
	};
	d.Decel = function (i) {
		var av = i.minSpeed,
		    aw = aa(i.yaw),
		    j = aa(i.pitch);
		if (!i.lx && aw > av) {
			i.yaw = aw > i.z0 ? i.yaw * i.decel : 0;
		}
		if (!i.ly && j > av) {
			i.pitch = j > i.z0 ? i.pitch * i.decel : 0;
		}
	};
	d.Zoom = function (i) {
		this.z2 = this.z1 * (1 / i);
		this.drawn = 0;
	};
	d.Clicked = function (av) {
		var i = this.active;
		try {
			if (i && i.tag) {
				if (this.clickToFront === false || this.clickToFront === null) {
					i.tag.Clicked(av);
				} else {
					this.TagToFront(i.tag, this.clickToFront, function () {
						i.tag.Clicked(av);
					});
				}
			}
		} catch (j) {}
	};
	d.Wheel = function (j) {
		var av = this.zoom + this.zoomStep * (j ? 1 : -1);
		this.zoom = at(this.zoomMax, I(this.zoomMin, av));
		this.Zoom(this.zoom);
	};
	d.BeginDrag = function (i) {
		this.down = M(i, this.canvas);
		i.cancelBubble = true;
		i.returnValue = false;
		i.preventDefault && i.preventDefault();
	};
	d.Drag = function (ax, aw) {
		if (this.dragControl && this.down) {
			var av = this.dragThreshold * this.dragThreshold,
			    j = aw.x - this.down.x,
			    i = aw.y - this.down.y;
			if (this.dragging || j * j + i * i > av) {
				this.dx = j;
				this.dy = i;
				this.dragging = 1;
				this.down = aw;
			}
		}
	};
	d.EndDrag = function () {
		var i = this.dragging;
		this.dragging = this.down = null;
		return i;
	};
	d.Pause = function () {
		this.paused = true;
	};
	d.Resume = function () {
		this.paused = false;
	};
	d.FindTag = function (av) {
		if (!aj(av)) {
			return null;
		}
		aj(av.index) && (av = av.index);
		if (!v(av)) {
			return this.taglist[av];
		}
		var aw, ax, j;
		if (aj(av.id)) {
			aw = "id", ax = av.id;
		} else {
			if (aj(av.text)) {
				aw = "innerText", ax = av.text;
			}
		}
		for (j = 0; j < this.taglist.length; ++j) {
			if (this.taglist[j].a[aw] == ax) {
				return this.taglist[j];
			}
		}
	};
	d.RotateTag = function (aC, av, aB, i, az) {
		var aA = aC.xformed,
		    ax = new U(aA.x, aA.y, aA.z),
		    aw = K(aB, av),
		    j = ax.angle(aw),
		    ay = ax.cross(aw).unit();
		if (j == 0) {
			this.fixedCallbackTag = aC;
			this.fixedCallback = az;
		} else {
			this.fixedAnim = {
				angle: -j,
				axis: ay,
				t: i,
				t0: T(),
				cb: az,
				tag: aC
			};
		}
	};
	d.TagToFront = function (i, j, av) {
		this.RotateTag(i, 0, 0, j, av);
	};
	x.Start = function (av, i, j) {
		x.tc[av] = new x(av, i, j);
	};
	function ak(i, j) {
		x.tc[j] && x.tc[j][i]();
	}
	x.Linear = function (i, j) {
		return j / i;
	};
	x.Smooth = function (i, j) {
		return 0.5 - l(j * Math.PI / i) / 2;
	};
	x.Pause = function (i) {
		ak("Pause", i);
	};
	x.Resume = function (i) {
		ak("Resume", i);
	};
	x.Reload = function (i) {
		ak("Load", i);
	};
	x.Update = function (i) {
		ak("Update", i);
	};
	x.TagToFront = function (j, i) {
		if (!v(i)) {
			return false;
		}
		i.lat = i.lng = 0;
		return x.RotateTag(j, i);
	};
	x.RotateTag = function (av, i) {
		if (!v(i)) {
			return false;
		}
		if (x.tc[av]) {
			if (isNaN(i.time)) {
				i.time = 500;
			}
			var j = x.tc[av].FindTag(i);
			if (j) {
				x.tc[av].RotateTag(j, i.lat, i.lng, i.time, i.callback);
				return true;
			}
		}
		return false;
	};
	x.NextFrame = function (i) {
		var j = window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
		x.NextFrame = j ? x.NextFrameRAF : x.NextFrameTimeout;
		x.NextFrame(i);
	};
	x.NextFrameRAF = function () {
		requestAnimationFrame(t);
	};
	x.NextFrameTimeout = function (i) {
		setTimeout(t, i);
	};
	x.tc = {};
	x.options = {
		z1: 20000,
		z2: 20000,
		z0: 0.0002,
		freezeActive: false,
		freezeDecel: false,
		activeCursor: "pointer",
		pulsateTo: 1,
		pulsateTime: 3,
		reverse: false,
		/*depth : 0.5,*/
		depth: 0.4,
		/*maxSpeed : 0.05,*/
		maxSpeed: 0.06,
		/*minSpeed : 0,*/
		minSpeed: 0.01,
		decel: 0.95,
		interval: 20,
		minBrightness: 0.1,
		maxBrightness: 1,
		outlineColour: "rgba(0, 100, 224, 0.62)",
		outlineThickness: 1,
		outlineOffset: 5,
		outlineMethod: "outline",
		textColour: "#ff99ff",
		textHeight: 15,
		textFont: "Helvetica, Arial, sans-serif",
		shadow: "#000",
		shadowBlur: 0,
		shadowOffset: [0, 0],
		initial: null,
		hideTags: true,
		zoom: 1,
		weight: false,
		weightMode: "size",
		weightFrom: null,
		weightSize: 1,
		weightSizeMin: null,
		weightSizeMax: null,
		weightGradient: {
			0: "#f00",
			'0.33': "#ff0",
			'0.66': "#0f0",
			1: "#00f"
		},
		txtOpt: true,
		txtScale: 2,
		frontSelect: false,
		wheelZoom: true,
		zoomMin: 0.3,
		zoomMax: 3,
		zoomStep: 0.05,
		shape: "sphere",
		lock: null,
		tooltip: null,
		tooltipDelay: 300,
		tooltipClass: "tctooltip",
		radiusX: 1,
		radiusY: 1,
		radiusZ: 1,
		stretchX: 1,
		stretchY: 1,
		offsetX: 0,
		offsetY: 0,
		shuffleTags: false,
		noSelect: false,
		noMouse: false,
		imageScale: 1,
		paused: false,
		dragControl: false,
		dragThreshold: 4,
		centreFunc: Y,
		splitWidth: 0,
		animTiming: "Smooth",
		clickToFront: false,
		fadeIn: 0
	};
	for (ao in x.options) {
		x[ao] = x.options[ao];
	}
	window.TagCanvas = x;
	G("load", function () {
		x.loaded = 1;
	}, window);
})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDA3YTUyZWVkNTRlOGZjZjhlN2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnMvanF1ZXJ5LnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnMvdGFnY2FudmFzLm1pbi5qcyJdLCJuYW1lcyI6WyIkIiwibXMiLCJpbml0Iiwib2JqIiwiYXJncyIsImZpbGxIdG1sIiwiYmluZEV2ZW50IiwiZW1wdHkiLCJjdXJyZW50IiwiYXBwZW5kIiwicmVtb3ZlIiwicGFnZUNvdW50Iiwic3RhcnQiLCJlbmQiLCJvbiIsInBhcnNlSW50IiwidGV4dCIsImJhY2tGbiIsImNoaWxkcmVuIiwiZm4iLCJjcmVhdGVQYWdlIiwib3B0aW9ucyIsImV4dGVuZCIsImpRdWVyeSIsImFvIiwiYW4iLCJhYSIsIk1hdGgiLCJhYnMiLCJ3Iiwic2luIiwibCIsImNvcyIsIkkiLCJtYXgiLCJhdCIsIm1pbiIsIlYiLCJjZWlsIiwiYWgiLCJzcXJ0IiwiWCIsInBvdyIsIkwiLCJPIiwiUiIsImEiLCJBIiwiYiIsIkIiLCJjIiwiQyIsImQiLCJEIiwiZSIsIkUiLCJmIiwiRiIsImFkIiwiYWUiLCJ6IiwibyIsImRvY3VtZW50IiwiSCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJhaiIsImkiLCJ2IiwiaiIsImF2IiwiaXNOYU4iLCJZIiwiVCIsIkRhdGUiLCJ2YWx1ZU9mIiwibiIsImF5IiwiYXciLCJsZW5ndGgiLCJheCIsInB1c2giLCJzb3J0IiwiYWMiLCJyYW5kb20iLCJVIiwieCIsInkiLCJwcm90b3R5cGUiLCJkb3QiLCJjcm9zcyIsImFuZ2xlIiwiUEkiLCJhY29zIiwidW5pdCIsIksiLCJrIiwiSWRlbnRpdHkiLCJSb3RhdGlvbiIsIm11bCIsImF6IiwieGZvcm0iLCJzIiwiYUQiLCJhQSIsImFDIiwiYUIiLCJhRSIsImFyIiwiYUciLCJhRiIsImFIIiwiUSIsIlciLCJOIiwidSIsInRvUHJlY2lzaW9uIiwic3Vic3RyIiwicmVwbGFjZSIsImxhc3RJbmRleE9mIiwiaW5kZXhPZiIsInBhcnNlRmxvYXQiLCJzdWJzdHJpbmciLCJoIiwid2luZG93IiwiR192bWxDYW52YXNNYW5hZ2VyIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwic2hhZG93Q29sb3IiLCJzaGFkb3dCbHVyIiwiZ2xvYmFsQWxwaGEiLCJzdHJva2VSZWN0IiwiZ2V0SW1hZ2VEYXRhIiwiZGF0YSIsImF1Iiwid2VpZ2h0R3JhZGllbnQiLCJnQ2FudmFzIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QmFzZWxpbmUiLCJzaGFkb3dPZmZzZXRYIiwic2hhZG93T2Zmc2V0WSIsImZpbGxUZXh0IiwicSIsImFKIiwiYUkiLCJhbSIsImRyYXdJbWFnZSIsImFmIiwiRyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImFsIiwiaW1hZ2VTY2FsZSIsImNvbXBsZXRlIiwidHh0T3B0Iiwic2hhZG93Iiwic2hhZG93T2Zmc2V0IiwiaW1hZ2UiLCJhaSIsImRlZmF1bHRWaWV3IiwiY2hhckF0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjdXJyZW50U3R5bGUiLCJ3ZWlnaHRGcm9tIiwiZ2V0QXR0cmlidXRlIiwidGV4dEhlaWdodCIsIndlaWdodCIsInRhcmdldCIsImlkIiwic3JjRWxlbWVudCIsInBhcmVudE5vZGUiLCJNIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJyIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwibSIsImZyb21FbGVtZW50IiwidGMiLCJteCIsIm15IiwiVW5GcmVlemUiLCJFbmREcmFnIiwiYWciLCJ0dHRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiY2FudmFzIiwiRHJhZyIsImRyYXduIiwiWiIsImJ1dHRvbiIsIkJlZ2luRHJhZyIsImciLCJ0b3VjaGVkIiwiQ2xpY2tlZCIsIkoiLCJwIiwiYWIiLCJEcmF3IiwiYXEiLCJjYW5jZWxCdWJibGUiLCJyZXR1cm5WYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiV2hlZWwiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwidCIsImludGVydmFsIiwiTmV4dEZyYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJjbGllbnRMZWZ0IiwiY2xpZW50VG9wIiwibGVmdCIsInRvcCIsImFwIiwicmFkaXVzIiwiejEiLCJ6MiIsIlAiLCJiciIsImxpbmUiLCJvcmlnaW5hbCIsImlubmVyVGV4dCIsInRleHRDb250ZW50IiwiTGluZXMiLCJjaGlsZE5vZGVzIiwibm9kZU5hbWUiLCJqb2luIiwibm9kZVR5cGUiLCJub2RlVmFsdWUiLCJTcGxpdFdpZHRoIiwic3BsaXQiLCJtZWFzdXJlVGV4dCIsInRzIiwic2MiLCJwdWxzYXRlVG8iLCJvdXRsaW5lTWV0aG9kIiwiRHJhd1B1bHNhdGUiLCJEcmF3U2ltcGxlIiwiU2V0TWV0aG9kIiwiYmxvY2siLCJjb2xvdXIiLCJvdXRsaW5lIiwiY2xhc3NpYyIsIm5vbmUiLCJkcmF3RnVuYyIsIlVwZGF0ZSIsIm91dGxpbmVPZmZzZXQiLCJEcmF3T3V0bGluZSIsIkRyYXdDb2xvdXIiLCJEcmF3Q29sb3VyVGV4dCIsImFscGhhIiwiRHJhd0NvbG91ckltYWdlIiwiY2xlYXJSZWN0Iiwic2V0VHJhbnNmb3JtIiwic2F2ZSIsImJlZ2luUGF0aCIsInJlY3QiLCJjbGlwIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicmVzdG9yZSIsIkRyYXdCbG9jayIsIm91dGxpbmVDb2xvdXIiLCJsaW5lV2lkdGgiLCJvdXRsaW5lVGhpY2tuZXNzIiwicHVsc2F0ZVRpbWUiLCJBY3RpdmUiLCJQcmVEcmF3IiwiUG9zdERyYXciLCJMYXN0RHJhdyIsIlMiLCJjdHh0Iiwic3JjIiwidGV4dF9vcmlnaW5hbCIsImxpbmVfd2lkdGhzIiwidGl0bGUiLCJwb3NpdGlvbiIsInRleHRDb2xvdXIiLCJ0ZXh0Rm9udCIsIndlaWdodGVkIiwiZXh0ZW50cyIsIk1lYXN1cmUiLCJTZXRTaGFkb3dDb2xvdXIiLCJzaGFkb3dBbHBoYSIsIlNldFNoYWRvd0NvbG91ckFscGhhIiwiU2V0U2hhZG93Q29sb3VyRml4ZWQiLCJTZXREcmF3IiwiRXF1YWxUbyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaHJlZiIsImllIiwiRHJhd0ltYWdlSUUiLCJEcmF3SW1hZ2UiLCJEcmF3VGV4dCIsIm5vU2VsZWN0IiwiQ2hlY2tBY3RpdmUiLCJNZWFzdXJlVGV4dCIsInR4dFNjYWxlIiwiU2V0Rm9udCIsIlNldFdlaWdodCIsIldlaWdodCIsIndlaWdodE1vZGUiLCJtaW5fd2VpZ2h0IiwibWF4X3dlaWdodCIsIndlaWdodFNpemVNaW4iLCJ3ZWlnaHRTaXplTWF4Iiwid2VpZ2h0U2l6ZSIsIkNhbGMiLCJtaW5CcmlnaHRuZXNzIiwibWF4QnJpZ2h0bmVzcyIsIm1heF9yYWRpdXMiLCJ4Zm9ybWVkIiwic3RyZXRjaFgiLCJzdHJldGNoWSIsInNlbGYiLCJmcmFtZXMiLCJsb2NhdGlvbiIsIm9wZW4iLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImZpcmVFdmVudCIsImluaXRFbGVtZW50IiwibmF2aWdhdG9yIiwiYXBwVmVyc2lvbiIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiZGVwdGgiLCJ6b29tIiwibHgiLCJsb2NrIiwibHkiLCJmcm96ZW4iLCJkeCIsImR5IiwiZml4ZWRBbmltIiwiZml4ZWRBbHBoYSIsInNvdXJjZSIsInRyYW5zZm9ybSIsInN0YXJ0VGltZSIsInRpbWUiLCJBbmltYXRlIiwiZHJhZ0NvbnRyb2wiLCJBbmltYXRlRHJhZyIsIkFuaW1hdGVQb3NpdGlvbiIsImFuaW1UaW1pbmciLCJTbW9vdGgiLCJMb2FkIiwiaGlkZVRhZ3MiLCJsb2FkZWQiLCJIaWRlVGFncyIsInlhdyIsImluaXRpYWwiLCJtYXhTcGVlZCIsInBpdGNoIiwidG9vbHRpcCIsIlRvb2x0aXAiLCJUb29sdGlwTmF0aXZlIiwiVG9vbHRpcERpdiIsInR0ZGl2IiwiY2xhc3NOYW1lIiwidG9vbHRpcENsYXNzIiwic3R5bGUiLCJ6SW5kZXgiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJUb29sdGlwTm9uZSIsIm5vTW91c2UiLCJ3aGVlbFpvb20iLCJzdGFydGVkIiwic2V0VGltZW91dCIsIlNvdXJjZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIkdldFRhZ3MiLCJDcmVhdGVUYWciLCJJbWFnZSIsInNwbGl0V2lkdGgiLCJVcGRhdGVUYWciLCJzcGhlcmUiLCJ2Y3lsaW5kZXIiLCJoY3lsaW5kZXIiLCJ2cmluZyIsImhyaW5nIiwic2h1ZmZsZVRhZ3MiLCJyYWRpdXNYIiwicmFkaXVzWSIsInJhZGl1c1oiLCJzaGFwZUFyZ3MiLCJzaGFwZSIsInNoaWZ0IiwiY29uY2F0IiwiYXBwbHkiLCJsaXN0TGVuZ3RoIiwidGFnbGlzdCIsInNwbGljZSIsInBvcCIsIlNldFNoYWRvdyIsInBhdXNlZCIsImFMIiwiYU0iLCJmcm9udFNlbGVjdCIsImNlbnRyZUZ1bmMiLCJBbmltYXRlRml4ZWQiLCJhY3RpdmUiLCJhTiIsInRhZyIsImFLIiwiYWxlcnQiLCJmcmVlemVBY3RpdmUiLCJGcmVlemUiLCJmaXhlZENhbGxiYWNrIiwiZml4ZWRDYWxsYmFja1RhZyIsImN1cnNvciIsImFjdGl2ZUN1cnNvciIsImlubmVySFRNTCIsInRvb2x0aXBEZWxheSIsIlRyYW5zZm9ybSIsImZhZGVJbiIsInQwIiwiY2IiLCJheGlzIiwicmV2ZXJzZSIsImZyZWV6ZURlY2VsIiwiRGVjZWwiLCJwcmVGcmVlemUiLCJtaW5TcGVlZCIsInowIiwiZGVjZWwiLCJab29tIiwiY2xpY2tUb0Zyb250IiwiVGFnVG9Gcm9udCIsInpvb21TdGVwIiwiem9vbU1heCIsInpvb21NaW4iLCJkb3duIiwiZHJhZ1RocmVzaG9sZCIsImRyYWdnaW5nIiwiUGF1c2UiLCJSZXN1bWUiLCJGaW5kVGFnIiwiaW5kZXgiLCJSb3RhdGVUYWciLCJTdGFydCIsImFrIiwiTGluZWFyIiwiUmVsb2FkIiwibGF0IiwibG5nIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIk5leHRGcmFtZVJBRiIsIk5leHRGcmFtZVRpbWVvdXQiLCJUYWdDYW52YXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQSxDQUFDLFVBQVNBLENBQVQsRUFBVztBQUNYLEtBQUlDLEtBQUs7QUFDUkMsUUFBSyxjQUFTQyxHQUFULEVBQWFDLElBQWIsRUFBa0I7QUFDdEIsVUFBUSxZQUFVO0FBQ2pCSCxPQUFHSSxRQUFILENBQVlGLEdBQVosRUFBZ0JDLElBQWhCO0FBQ0FILE9BQUdLLFNBQUgsQ0FBYUgsR0FBYixFQUFpQkMsSUFBakI7QUFDQSxJQUhNLEVBQVA7QUFJQSxHQU5PO0FBT1I7QUFDQUMsWUFBUyxrQkFBU0YsR0FBVCxF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VUcsRUFBVixDQUFSO0FBQ0E7QUFDRG9HLFFBQU80VixTQUFQLEdBQW1CbFksQ0FBbkI7QUFDQXFFLEdBQUUsTUFBRixFQUFVLFlBQVk7QUFDckJyRSxJQUFFd1IsTUFBRixHQUFXLENBQVg7QUFDQSxFQUZELEVBRUdsUCxNQUZIO0FBR0EsQ0FyeURELEkiLCJmaWxlIjoianMvbGlicy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMDdhNTJlZWQ1NGU4ZmNmOGU3YSIsIihmdW5jdGlvbigkKXtcblx0dmFyIG1zID0ge1xuXHRcdGluaXQ6ZnVuY3Rpb24ob2JqLGFyZ3Mpe1xuXHRcdFx0cmV0dXJuIChmdW5jdGlvbigpe1xuXHRcdFx0XHRtcy5maWxsSHRtbChvYmosYXJncyk7XG5cdFx0XHRcdG1zLmJpbmRFdmVudChvYmosYXJncyk7XG5cdFx0XHR9KSgpO1xuXHRcdH0sXG5cdFx0Ly/loavlhYVodG1sXG5cdFx0ZmlsbEh0bWw6ZnVuY3Rpb24ob2JqLGFyZ3Mpe1xuXHRcdFx0cmV0dXJuIChmdW5jdGlvbigpe1xuXHRcdFx0XHRvYmouZW1wdHkoKTtcblx0XHRcdFx0Ly/kuIrkuIDpobVcblx0XHRcdFx0aWYoYXJncy5jdXJyZW50ID4gMSl7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwicHJldlBhZ2VcIj7kuIrkuIDpobU8L2E+Jyk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdG9iai5yZW1vdmUoJy5wcmV2UGFnZScpO1xuXHRcdFx0XHRcdG9iai5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZGlzYWJsZWRcIj7kuIrkuIDpobU8L3NwYW4+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly/kuK3pl7TpobXnoIFcblx0XHRcdFx0aWYoYXJncy5jdXJyZW50ICE9IDEgJiYgYXJncy5jdXJyZW50ID49IDQgJiYgYXJncy5wYWdlQ291bnQgIT0gNCl7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwidGNkTnVtYmVyXCI+JysxKyc8L2E+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoYXJncy5jdXJyZW50LTIgPiAyICYmIGFyZ3MuY3VycmVudCA8PSBhcmdzLnBhZ2VDb3VudCAmJiBhcmdzLnBhZ2VDb3VudCA+IDUpe1xuXHRcdFx0XHRcdG9iai5hcHBlbmQoJzxzcGFuPi4uLjwvc3Bhbj4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgc3RhcnQgPSBhcmdzLmN1cnJlbnQgLTIsZW5kID0gYXJncy5jdXJyZW50KzI7XG5cdFx0XHRcdGlmKChzdGFydCA+IDEgJiYgYXJncy5jdXJyZW50IDwgNCl8fGFyZ3MuY3VycmVudCA9PSAxKXtcblx0XHRcdFx0XHRlbmQrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihhcmdzLmN1cnJlbnQgPiBhcmdzLnBhZ2VDb3VudC00ICYmIGFyZ3MuY3VycmVudCA+PSBhcmdzLnBhZ2VDb3VudCl7XG5cdFx0XHRcdFx0c3RhcnQtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKDtzdGFydCA8PSBlbmQ7IHN0YXJ0KyspIHtcblx0XHRcdFx0XHRpZihzdGFydCA8PSBhcmdzLnBhZ2VDb3VudCAmJiBzdGFydCA+PSAxKXtcblx0XHRcdFx0XHRcdGlmKHN0YXJ0ICE9IGFyZ3MuY3VycmVudCl7XG5cdFx0XHRcdFx0XHRcdG9iai5hcHBlbmQoJzxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cInRjZE51bWJlclwiPicrIHN0YXJ0ICsnPC9hPicpO1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdG9iai5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiY3VycmVudFwiPicrIHN0YXJ0ICsnPC9zcGFuPicpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihhcmdzLmN1cnJlbnQgKyAyIDwgYXJncy5wYWdlQ291bnQgLSAxICYmIGFyZ3MuY3VycmVudCA+PSAxICYmIGFyZ3MucGFnZUNvdW50ID4gNSl7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPHNwYW4+Li4uPC9zcGFuPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGFyZ3MuY3VycmVudCAhPSBhcmdzLnBhZ2VDb3VudCAmJiBhcmdzLmN1cnJlbnQgPCBhcmdzLnBhZ2VDb3VudCAtMiAgJiYgYXJncy5wYWdlQ291bnQgIT0gNCl7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwidGNkTnVtYmVyXCI+JythcmdzLnBhZ2VDb3VudCsnPC9hPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8v5LiL5LiA6aG1XG5cdFx0XHRcdGlmKGFyZ3MuY3VycmVudCA8IGFyZ3MucGFnZUNvdW50KXtcblx0XHRcdFx0XHRvYmouYXBwZW5kKCc8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJuZXh0UGFnZVwiPuS4i+S4gOmhtTwvYT4nKTtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0b2JqLnJlbW92ZSgnLm5leHRQYWdlJyk7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJkaXNhYmxlZFwiPuS4i+S4gOmhtTwvc3Bhbj4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblx0XHR9LFxuXHRcdC8v57uR5a6a5LqL5Lu2XG5cdFx0YmluZEV2ZW50OmZ1bmN0aW9uKG9iaixhcmdzKXtcblx0XHRcdHJldHVybiAoZnVuY3Rpb24oKXtcblx0XHRcdFx0b2JqLm9uKFwiY2xpY2tcIixcImEudGNkTnVtYmVyXCIsZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgY3VycmVudCA9IHBhcnNlSW50KCQodGhpcykudGV4dCgpKTtcblx0XHRcdFx0XHRtcy5maWxsSHRtbChvYmose1wiY3VycmVudFwiOmN1cnJlbnQsXCJwYWdlQ291bnRcIjphcmdzLnBhZ2VDb3VudH0pO1xuXHRcdFx0XHRcdGlmKHR5cGVvZihhcmdzLmJhY2tGbik9PVwiZnVuY3Rpb25cIil7XG5cdFx0XHRcdFx0XHRhcmdzLmJhY2tGbihjdXJyZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvL+S4iuS4gOmhtVxuXHRcdFx0XHRvYmoub24oXCJjbGlja1wiLFwiYS5wcmV2UGFnZVwiLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnQgPSBwYXJzZUludChvYmouY2hpbGRyZW4oXCJzcGFuLmN1cnJlbnRcIikudGV4dCgpKTtcblx0XHRcdFx0XHRtcy5maWxsSHRtbChvYmose1wiY3VycmVudFwiOmN1cnJlbnQtMSxcInBhZ2VDb3VudFwiOmFyZ3MucGFnZUNvdW50fSk7XG5cdFx0XHRcdFx0aWYodHlwZW9mKGFyZ3MuYmFja0ZuKT09XCJmdW5jdGlvblwiKXtcblx0XHRcdFx0XHRcdGFyZ3MuYmFja0ZuKGN1cnJlbnQtMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly/kuIvkuIDpobVcblx0XHRcdFx0b2JqLm9uKFwiY2xpY2tcIixcImEubmV4dFBhZ2VcIixmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBjdXJyZW50ID0gcGFyc2VJbnQob2JqLmNoaWxkcmVuKFwic3Bhbi5jdXJyZW50XCIpLnRleHQoKSk7XG5cdFx0XHRcdFx0bXMuZmlsbEh0bWwob2JqLHtcImN1cnJlbnRcIjpjdXJyZW50KzEsXCJwYWdlQ291bnRcIjphcmdzLnBhZ2VDb3VudH0pO1xuXHRcdFx0XHRcdGlmKHR5cGVvZihhcmdzLmJhY2tGbik9PVwiZnVuY3Rpb25cIil7XG5cdFx0XHRcdFx0XHRhcmdzLmJhY2tGbihjdXJyZW50KzEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KSgpO1xuXHRcdH1cblx0fVxuXHQkLmZuLmNyZWF0ZVBhZ2UgPSBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR2YXIgYXJncyA9ICQuZXh0ZW5kKHtcblx0XHRcdHBhZ2VDb3VudCA6IDE1LFxuXHRcdFx0Y3VycmVudCA6IDEsXG5cdFx0XHRiYWNrRm4gOiBmdW5jdGlvbigpe31cblx0XHR9LG9wdGlvbnMpO1xuXHRcdG1zLmluaXQodGhpcyxhcmdzKTtcblx0fVxufSkoalF1ZXJ5KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGlicy9qcXVlcnkucGFnZS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTMgR3JhaGFtIEJyZWFjaFxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogVGFnQ2FudmFzIDIuMiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIGNvbnRhY3QgPGdyYWhhbUBnb2F0MTAwMC5jb20+XG4gKi9cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBhbyxcblx0YW4sXG5cdGFhID0gTWF0aC5hYnMsXG5cdHcgPSBNYXRoLnNpbixcblx0bCA9IE1hdGguY29zLFxuXHRJID0gTWF0aC5tYXgsXG5cdGF0ID0gTWF0aC5taW4sXG5cdFYgPSBNYXRoLmNlaWwsXG5cdGFoID0gTWF0aC5zcXJ0LFxuXHRYID0gTWF0aC5wb3csXG5cdEwgPSB7fSxcblx0TyA9IHt9LFxuXHRSID0ge1xuXHRcdDAgOiBcIjAsXCIsXG5cdFx0MSA6IFwiMTcsXCIsXG5cdFx0MiA6IFwiMzQsXCIsXG5cdFx0MyA6IFwiNTEsXCIsXG5cdFx0NCA6IFwiNjgsXCIsXG5cdFx0NSA6IFwiODUsXCIsXG5cdFx0NiA6IFwiMTAyLFwiLFxuXHRcdDcgOiBcIjExOSxcIixcblx0XHQ4IDogXCIxMzYsXCIsXG5cdFx0OSA6IFwiMTUzLFwiLFxuXHRcdGEgOiBcIjE3MCxcIixcblx0XHRBIDogXCIxNzAsXCIsXG5cdFx0YiA6IFwiMTg3LFwiLFxuXHRcdEIgOiBcIjE4NyxcIixcblx0XHRjIDogXCIyMDQsXCIsXG5cdFx0QyA6IFwiMjA0LFwiLFxuXHRcdGQgOiBcIjIyMSxcIixcblx0XHREIDogXCIyMjEsXCIsXG5cdFx0ZSA6IFwiMjM4LFwiLFxuXHRcdEUgOiBcIjIzOCxcIixcblx0XHRmIDogXCIyNTUsXCIsXG5cdFx0RiA6IFwiMjU1LFwiXG5cdH0sXG5cdGUsXG5cdGFkLFxuXHRkLFxuXHRhLFxuXHRhZSxcblx0eixcblx0byA9IGRvY3VtZW50LFxuXHRILFxuXHRjID0ge307XG5cdGZvciAoYW8gPSAwOyBhbyA8IDI1NjsgKythbykge1xuXHRcdGFuID0gYW8udG9TdHJpbmcoMTYpO1xuXHRcdGlmIChhbyA8IDE2KSB7XG5cdFx0XHRhbiA9IFwiMFwiICsgYW5cblx0XHR9XG5cdFx0T1thbl0gPSBPW2FuLnRvVXBwZXJDYXNlKCldID0gYW8udG9TdHJpbmcoKSArIFwiLFwiXG5cdH1cblx0ZnVuY3Rpb24gYWooaSkge1xuXHRcdHJldHVybiB0eXBlb2YgaSAhPSBcInVuZGVmaW5lZFwiXG5cdH1cblx0ZnVuY3Rpb24gdihpKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBpID09IFwib2JqZWN0XCIgJiYgaSAhPSBudWxsXG5cdH1cblx0ZnVuY3Rpb24gYihpLCBqLCBhdikge1xuXHRcdHJldHVybiBpc05hTihpKSA/IGF2IDogYXQoYXYsIEkoaiwgaSkpXG5cdH1cblx0ZnVuY3Rpb24gWSgpIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRmdW5jdGlvbiBUKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLnZhbHVlT2YoKVxuXHR9XG5cdGZ1bmN0aW9uIG4oYXYsIGF5KSB7XG5cdFx0dmFyIGogPSBbXSxcblx0XHRhdyA9IGF2Lmxlbmd0aCxcblx0XHRheDtcblx0XHRmb3IgKGF4ID0gMDsgYXggPCBhdzsgKytheCkge1xuXHRcdFx0ai5wdXNoKGF2W2F4XSlcblx0XHR9XG5cdFx0ai5zb3J0KGF5KTtcblx0XHRyZXR1cm4galxuXHR9XG5cdGZ1bmN0aW9uIGFjKGopIHtcblx0XHR2YXIgYXcgPSBqLmxlbmd0aCAtIDEsXG5cdFx0YXYsXG5cdFx0YXg7XG5cdFx0d2hpbGUgKGF3KSB7XG5cdFx0XHRheCA9IH5+KE1hdGgucmFuZG9tKCkgKiBhdyk7XG5cdFx0XHRhdiA9IGpbYXddO1xuXHRcdFx0althd10gPSBqW2F4XTtcblx0XHRcdGpbYXhdID0gYXY7XG5cdFx0XHQtLWF3XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIFUoaSwgYXYsIGopIHtcblx0XHR0aGlzLnggPSBpO1xuXHRcdHRoaXMueSA9IGF2O1xuXHRcdHRoaXMueiA9IGpcblx0fVxuXHRhZSA9IFUucHJvdG90eXBlO1xuXHRhZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGFoKHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueilcblx0fTtcblx0YWUuZG90ID0gZnVuY3Rpb24gKGkpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogaS54ICsgdGhpcy55ICogaS55ICsgdGhpcy56ICogaS56XG5cdH07XG5cdGFlLmNyb3NzID0gZnVuY3Rpb24gKGopIHtcblx0XHR2YXIgaSA9IHRoaXMueSAqIGoueiAtIHRoaXMueiAqIGoueSxcblx0XHRhdyA9IHRoaXMueiAqIGoueCAtIHRoaXMueCAqIGoueixcblx0XHRhdiA9IHRoaXMueCAqIGoueSAtIHRoaXMueSAqIGoueDtcblx0XHRyZXR1cm4gbmV3IFUoaSwgYXcsIGF2KVxuXHR9O1xuXHRhZS5hbmdsZSA9IGZ1bmN0aW9uIChqKSB7XG5cdFx0dmFyIGkgPSB0aGlzLmRvdChqKSxcblx0XHRhdjtcblx0XHRpZiAoaSA9PSAwKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5QSSAvIDJcblx0XHR9XG5cdFx0YXYgPSBpIC8gKHRoaXMubGVuZ3RoKCkgKiBqLmxlbmd0aCgpKTtcblx0XHRpZiAoYXYgPj0gMSkge1xuXHRcdFx0cmV0dXJuIDBcblx0XHR9XG5cdFx0aWYgKGF2IDw9IC0xKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5QSVxuXHRcdH1cblx0XHRyZXR1cm4gTWF0aC5hY29zKGF2KVxuXHR9O1xuXHRhZS51bml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBpID0gdGhpcy5sZW5ndGgoKTtcblx0XHRyZXR1cm4gbmV3IFUodGhpcy54IC8gaSwgdGhpcy55IC8gaSwgdGhpcy56IC8gaSlcblx0fTtcblx0ZnVuY3Rpb24gSyhhdiwgaikge1xuXHRcdGogPSBqICogTWF0aC5QSSAvIDE4MDtcblx0XHRhdiA9IGF2ICogTWF0aC5QSSAvIDE4MDtcblx0XHR2YXIgaSA9IHcoYXYpICogbChqKSxcblx0XHRheCA9IC13KGopLFxuXHRcdGF3ID0gLWwoYXYpICogbChqKTtcblx0XHRyZXR1cm4gbmV3IFUoaSwgYXgsIGF3KVxuXHR9XG5cdGZ1bmN0aW9uIGsoaSkge1xuXHRcdHRoaXNbMV0gPSB7XG5cdFx0XHQxIDogaVswXSxcblx0XHRcdDIgOiBpWzFdLFxuXHRcdFx0MyA6IGlbMl1cblx0XHR9O1xuXHRcdHRoaXNbMl0gPSB7XG5cdFx0XHQxIDogaVszXSxcblx0XHRcdDIgOiBpWzRdLFxuXHRcdFx0MyA6IGlbNV1cblx0XHR9O1xuXHRcdHRoaXNbM10gPSB7XG5cdFx0XHQxIDogaVs2XSxcblx0XHRcdDIgOiBpWzddLFxuXHRcdFx0MyA6IGlbOF1cblx0XHR9XG5cdH1cblx0YSA9IGsucHJvdG90eXBlO1xuXHRrLklkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgayhbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0pXG5cdH07XG5cdGsuUm90YXRpb24gPSBmdW5jdGlvbiAoYXcsIGkpIHtcblx0XHR2YXIgaiA9IHcoYXcpLFxuXHRcdGF2ID0gbChhdyksXG5cdFx0YXggPSAxIC0gYXY7XG5cdFx0cmV0dXJuIG5ldyBrKFthdiArIFgoaS54LCAyKSAqIGF4LCBpLnggKiBpLnkgKiBheCAtIGkueiAqIGosIGkueCAqIGkueiAqIGF4ICsgaS55ICogaiwgaS55ICogaS54ICogYXggKyBpLnogKiBqLCBhdiArIFgoaS55LCAyKSAqIGF4LCBpLnkgKiBpLnogKiBheCAtIGkueCAqIGosIGkueiAqIGkueCAqIGF4IC0gaS55ICogaiwgaS56ICogaS55ICogYXggKyBpLnggKiBqLCBhdiArIFgoaS56LCAyKSAqIGF4XSlcblx0fTtcblx0YS5tdWwgPSBmdW5jdGlvbiAoYXYpIHtcblx0XHR2YXIgYXcgPSBbXSxcblx0XHRheixcblx0XHRheSxcblx0XHRheCA9IChhdi54Zm9ybSA/IDEgOiAwKTtcblx0XHRmb3IgKGF6ID0gMTsgYXogPD0gMzsgKytheikge1xuXHRcdFx0Zm9yIChheSA9IDE7IGF5IDw9IDM7ICsrYXkpIHtcblx0XHRcdFx0aWYgKGF4KSB7XG5cdFx0XHRcdFx0YXcucHVzaCh0aGlzW2F6XVsxXSAqIGF2WzFdW2F5XSArIHRoaXNbYXpdWzJdICogYXZbMl1bYXldICsgdGhpc1thel1bM10gKiBhdlszXVtheV0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXcucHVzaCh0aGlzW2F6XVtheV0gKiBhdilcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmV3IGsoYXcpXG5cdH07XG5cdGEueGZvcm0gPSBmdW5jdGlvbiAoYXYpIHtcblx0XHR2YXIgaiA9IHt9LFxuXHRcdGkgPSBhdi54LFxuXHRcdGF4ID0gYXYueSxcblx0XHRhdyA9IGF2Lno7XG5cdFx0ai54ID0gaSAqIHRoaXNbMV1bMV0gKyBheCAqIHRoaXNbMl1bMV0gKyBhdyAqIHRoaXNbM11bMV07XG5cdFx0ai55ID0gaSAqIHRoaXNbMV1bMl0gKyBheCAqIHRoaXNbMl1bMl0gKyBhdyAqIHRoaXNbM11bMl07XG5cdFx0ai56ID0gaSAqIHRoaXNbMV1bM10gKyBheCAqIHRoaXNbMl1bM10gKyBhdyAqIHRoaXNbM11bM107XG5cdFx0cmV0dXJuIGpcblx0fTtcblx0ZnVuY3Rpb24gcyhhdywgYXksIGFELCBhQSkge1xuXHRcdHZhciBheixcblx0XHRhQyxcblx0XHRqLFxuXHRcdGFCLFxuXHRcdGFFID0gW10sXG5cdFx0YXggPSBNYXRoLlBJICogKDMgLSBhaCg1KSksXG5cdFx0YXYgPSAyIC8gYXc7XG5cdFx0Zm9yIChheiA9IDA7IGF6IDwgYXc7ICsrYXopIHtcblx0XHRcdGFDID0gYXogKiBhdiAtIDEgKyAoYXYgLyAyKTtcblx0XHRcdGogPSBhaCgxIC0gYUMgKiBhQyk7XG5cdFx0XHRhQiA9IGF6ICogYXg7XG5cdFx0XHRhRS5wdXNoKFtsKGFCKSAqIGogKiBheSwgYUMgKiBhRCwgdyhhQikgKiBqICogYUFdKVxuXHRcdH1cblx0XHRyZXR1cm4gYUVcblx0fVxuXHRmdW5jdGlvbiBhcihheCwgYXYsIGFBLCBhRywgYUUpIHtcblx0XHR2YXIgYUYsXG5cdFx0YUggPSBbXSxcblx0XHRheSA9IE1hdGguUEkgKiAoMyAtIGFoKDUpKSxcblx0XHRhdyA9IDIgLyBheCxcblx0XHRhRCxcblx0XHRhQyxcblx0XHRhQixcblx0XHRhejtcblx0XHRmb3IgKGFEID0gMDsgYUQgPCBheDsgKythRCkge1xuXHRcdFx0YUMgPSBhRCAqIGF3IC0gMSArIChhdyAvIDIpO1xuXHRcdFx0YUYgPSBhRCAqIGF5O1xuXHRcdFx0YUIgPSBsKGFGKTtcblx0XHRcdGF6ID0gdyhhRik7XG5cdFx0XHRhSC5wdXNoKGF2ID8gW2FDICogYUEsIGFCICogYUcsIGF6ICogYUVdIDogW2FCICogYUEsIGFDICogYUcsIGF6ICogYUVdKVxuXHRcdH1cblx0XHRyZXR1cm4gYUhcblx0fVxuXHRmdW5jdGlvbiBRKGF2LCBhdywgYXosIGFGLCBhRCwgYUIpIHtcblx0XHR2YXIgYUUsXG5cdFx0YUcgPSBbXSxcblx0XHRheCA9IE1hdGguUEkgKiAyIC8gYXcsXG5cdFx0YUMsXG5cdFx0YUEsXG5cdFx0YXk7XG5cdFx0Zm9yIChhQyA9IDA7IGFDIDwgYXc7ICsrYUMpIHtcblx0XHRcdGFFID0gYUMgKiBheDtcblx0XHRcdGFBID0gbChhRSk7XG5cdFx0XHRheSA9IHcoYUUpO1xuXHRcdFx0YUcucHVzaChhdiA/IFthQiAqIGF6LCBhQSAqIGFGLCBheSAqIGFEXSA6IFthQSAqIGF6LCBhQiAqIGFGLCBheSAqIGFEXSlcblx0XHR9XG5cdFx0cmV0dXJuIGFHXG5cdH1cblx0ZnVuY3Rpb24gRShhdywgaSwgaiwgYXYpIHtcblx0XHRyZXR1cm4gYXIoYXcsIDAsIGksIGosIGF2KVxuXHR9XG5cdGZ1bmN0aW9uIFcoYXcsIGksIGosIGF2KSB7XG5cdFx0cmV0dXJuIGFyKGF3LCAxLCBpLCBqLCBhdilcblx0fVxuXHRmdW5jdGlvbiBDKGF4LCBpLCBqLCBhdiwgYXcpIHtcblx0XHRhdyA9IGlzTmFOKGF3KSA/IDAgOiBhdyAqIDE7XG5cdFx0cmV0dXJuIFEoMCwgYXgsIGksIGosIGF2LCBhdylcblx0fVxuXHRmdW5jdGlvbiBOKGF4LCBpLCBqLCBhdiwgYXcpIHtcblx0XHRhdyA9IGlzTmFOKGF3KSA/IDAgOiBhdyAqIDE7XG5cdFx0cmV0dXJuIFEoMSwgYXgsIGksIGosIGF2LCBhdylcblx0fVxuXHRmdW5jdGlvbiB1KGF5LCBpKSB7XG5cdFx0dmFyIGF4ID0gYXksXG5cdFx0YXcsXG5cdFx0YXYsXG5cdFx0aiA9IChpICogMSkudG9QcmVjaXNpb24oMykgKyBcIilcIjtcblx0XHRpZiAoYXlbMF0gPT09IFwiI1wiKSB7XG5cdFx0XHRpZiAoIUxbYXldKSB7XG5cdFx0XHRcdGlmIChheS5sZW5ndGggPT09IDQpIHtcblx0XHRcdFx0XHRMW2F5XSA9IFwicmdiYShcIiArIFJbYXlbMV1dICsgUltheVsyXV0gKyBSW2F5WzNdXVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdExbYXldID0gXCJyZ2JhKFwiICsgT1theS5zdWJzdHIoMSwgMildICsgT1theS5zdWJzdHIoMywgMildICsgT1theS5zdWJzdHIoNSwgMildXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGF4ID0gTFtheV0gKyBqXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChheS5zdWJzdHIoMCwgNCkgPT09IFwicmdiKFwiIHx8IGF5LnN1YnN0cigwLCA0KSA9PT0gXCJoc2woXCIpIHtcblx0XHRcdFx0YXggPSAoYXkucmVwbGFjZShcIihcIiwgXCJhKFwiKS5yZXBsYWNlKFwiKVwiLCBcIixcIiArIGopKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGF5LnN1YnN0cigwLCA1KSA9PT0gXCJyZ2JhKFwiIHx8IGF5LnN1YnN0cigwLCA1KSA9PT0gXCJoc2xhKFwiKSB7XG5cdFx0XHRcdFx0YXcgPSBheS5sYXN0SW5kZXhPZihcIixcIikgKyAxLFxuXHRcdFx0XHRcdGF2ID0gYXkuaW5kZXhPZihcIilcIik7XG5cdFx0XHRcdFx0aSAqPSBwYXJzZUZsb2F0KGF5LnN1YnN0cmluZyhhdywgYXYpKTtcblx0XHRcdFx0XHRheCA9IGF5LnN1YnN0cigwLCBhdykgKyBpLnRvUHJlY2lzaW9uKDMpICsgXCIpXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYXhcblx0fVxuXHRmdW5jdGlvbiBoKGksIGopIHtcblx0XHRpZiAod2luZG93Lkdfdm1sQ2FudmFzTWFuYWdlcikge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0dmFyIGF2ID0gby5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdGF2LndpZHRoID0gaTtcblx0XHRhdi5oZWlnaHQgPSBqO1xuXHRcdHJldHVybiBhdlxuXHR9XG5cdGZ1bmN0aW9uIEQoKSB7XG5cdFx0dmFyIGogPSBoKDMsIDMpLFxuXHRcdGF3LFxuXHRcdGF2O1xuXHRcdGlmICghaikge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHRcdGF3ID0gai5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0YXcuc3Ryb2tlU3R5bGUgPSBcIiMwMDBcIjtcblx0XHRhdy5zaGFkb3dDb2xvciA9IFwiI2ZmZlwiO1xuXHRcdGF3LnNoYWRvd0JsdXIgPSAzO1xuXHRcdGF3Lmdsb2JhbEFscGhhID0gMDtcblx0XHRhdy5zdHJva2VSZWN0KDIsIDIsIDIsIDIpO1xuXHRcdGF3Lmdsb2JhbEFscGhhID0gMTtcblx0XHRhdiA9IGF3LmdldEltYWdlRGF0YSgyLCAyLCAxLCAxKTtcblx0XHRqID0gbnVsbDtcblx0XHRyZXR1cm4gKGF2LmRhdGFbMF0gPiAwKVxuXHR9XG5cdGZ1bmN0aW9uIGF1KGFDLCBqKSB7XG5cdFx0dmFyIGF2ID0gMTAyNCxcblx0XHRheSA9IGFDLndlaWdodEdyYWRpZW50LFxuXHRcdGF4LFxuXHRcdGFBLFxuXHRcdGF3LFxuXHRcdGFCLFxuXHRcdGF6O1xuXHRcdGlmIChhQy5nQ2FudmFzKSB7XG5cdFx0XHRhQSA9IGFDLmdDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGFDLmdDYW52YXMgPSBheCA9IGgoYXYsIDEpO1xuXHRcdFx0aWYgKCFheCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0fVxuXHRcdFx0YUEgPSBheC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0XHRhQiA9IGFBLmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGF2LCAwKTtcblx0XHRcdGZvciAoYXcgaW4gYXkpIHtcblx0XHRcdFx0YUIuYWRkQ29sb3JTdG9wKDEgLSBhdywgYXlbYXddKVxuXHRcdFx0fVxuXHRcdFx0YUEuZmlsbFN0eWxlID0gYUI7XG5cdFx0XHRhQS5maWxsUmVjdCgwLCAwLCBhdiwgMSlcblx0XHR9XG5cdFx0YXogPSBhQS5nZXRJbWFnZURhdGEofn4oKGF2IC0gMSkgKiBqKSwgMCwgMSwgMSkuZGF0YTtcblx0XHRyZXR1cm4gXCJyZ2JhKFwiICsgYXpbMF0gKyBcIixcIiArIGF6WzFdICsgXCIsXCIgKyBhelsyXSArIFwiLFwiICsgKGF6WzNdIC8gMjU1KSArIFwiKVwiXG5cdH1cblx0ZnVuY3Rpb24gQihhQSwgYXosIGF3LCBhRywgYUIsIGFDLCBhdiwgYUQsIGFFKSB7XG5cdFx0dmFyIGF5ID0gKGFDIHx8IDApICsgKGF2ICYmIGF2WzBdIDwgMCA/IGFhKGF2WzBdKSA6IDApLFxuXHRcdGogPSAoYUMgfHwgMCkgKyAoYXYgJiYgYXZbMV0gPCAwID8gYWEoYXZbMV0pIDogMCksXG5cdFx0YXgsXG5cdFx0YUY7XG5cdFx0YUEuZm9udCA9IGF6O1xuXHRcdGFBLnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG5cdFx0YUEuZmlsbFN0eWxlID0gYXc7XG5cdFx0YUIgJiYgKGFBLnNoYWRvd0NvbG9yID0gYUIpO1xuXHRcdGFDICYmIChhQS5zaGFkb3dCbHVyID0gYUMpO1xuXHRcdGF2ICYmIChhQS5zaGFkb3dPZmZzZXRYID0gYXZbMF0sIGFBLnNoYWRvd09mZnNldFkgPSBhdlsxXSk7XG5cdFx0Zm9yIChheCA9IDA7IGF4IDwgYUcubGVuZ3RoOyArK2F4KSB7XG5cdFx0XHRhRiA9IGFFID8gKGFEIC0gYUVbYXhdKSAvIDIgOiAwO1xuXHRcdFx0YUEuZmlsbFRleHQoYUdbYXhdLCBheSArIGFGLCBqKTtcblx0XHRcdGogKz0gcGFyc2VJbnQoYXopXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHEoYUosIGFBLCBhRiwgYUgsIGF6LCBhdywgYUQsIGFFLCBqLCBhSSwgYUcsIGFDLCBhdikge1xuXHRcdHZhciBheCA9IGFIICsgYWEoalswXSkgKyBhRSArIGFFLFxuXHRcdGkgPSBheiArIGFhKGpbMV0pICsgYUUgKyBhRSxcblx0XHRheSxcblx0XHRhQjtcblx0XHRheSA9IGgoYXggKyBhSSwgaSArIGFHKTtcblx0XHRpZiAoIWF5KSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRhQiA9IGF5LmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRCKGFCLCBhQSwgYXcsIGFKLCBhRCwgYUUsIGosIGFDLCBhdik7XG5cdFx0cmV0dXJuIGF5XG5cdH1cblx0ZnVuY3Rpb24gYW0oYUEsIGFELCBhRSwgYXcpIHtcblx0XHR2YXIgYUYgPSBhYShhd1swXSksXG5cdFx0YUIgPSBhYShhd1sxXSksXG5cdFx0YXggPSBhQS53aWR0aCArIChhRiA+IGFFID8gYUYgKyBhRSA6IGFFICogMiksXG5cdFx0aiA9IGFBLmhlaWdodCArIChhQiA+IGFFID8gYUIgKyBhRSA6IGFFICogMiksXG5cdFx0YXogPSAoYUUgfHwgMCkgKyAoYXdbMF0gPCAwID8gYUYgOiAwKSxcblx0XHRhdiA9IChhRSB8fCAwKSArIChhd1sxXSA8IDAgPyBhQiA6IDApLFxuXHRcdGF5LFxuXHRcdGFDO1xuXHRcdGF5ID0gaChheCwgaik7XG5cdFx0aWYgKCFheSkge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0YUMgPSBheS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0YUQgJiYgKGFDLnNoYWRvd0NvbG9yID0gYUQpO1xuXHRcdGFFICYmIChhQy5zaGFkb3dCbHVyID0gYUUpO1xuXHRcdGF3ICYmIChhQy5zaGFkb3dPZmZzZXRYID0gYXdbMF0sIGFDLnNoYWRvd09mZnNldFkgPSBhd1sxXSk7XG5cdFx0YUMuZHJhd0ltYWdlKGFBLCBheiwgYXYsIGFBLndpZHRoLCBhQS5oZWlnaHQpO1xuXHRcdHJldHVybiBheVxuXHR9XG5cdGZ1bmN0aW9uIGFmKGFILCBheiwgYUYpIHtcblx0XHR2YXIgYUcgPSBwYXJzZUludChhSC50b1N0cmluZygpLmxlbmd0aCAqIGFGKSxcblx0XHRheSA9IHBhcnNlSW50KGFGICogMiAqIGFILmxlbmd0aCksXG5cdFx0YXcgPSBoKGFHLCBheSksXG5cdFx0YUMsXG5cdFx0aixcblx0XHRheCxcblx0XHRhQixcblx0XHRhRSxcblx0XHRhRCxcblx0XHRhdixcblx0XHRhQTtcblx0XHRpZiAoIWF3KSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRhQyA9IGF3LmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRhQy5maWxsU3R5bGUgPSBcIiMwMDBcIjtcblx0XHRhQy5maWxsUmVjdCgwLCAwLCBhRywgYXkpO1xuXHRcdEIoYUMsIGFGICsgXCJweCBcIiArIGF6LCBcIiNmZmZcIiwgYUgsIDAsIDAsIFtdKTtcblx0XHRqID0gYUMuZ2V0SW1hZ2VEYXRhKDAsIDAsIGFHLCBheSk7XG5cdFx0YXggPSBqLndpZHRoO1xuXHRcdGFCID0gai5oZWlnaHQ7XG5cdFx0YUEgPSB7XG5cdFx0XHRtaW4gOiB7XG5cdFx0XHRcdHggOiBheCxcblx0XHRcdFx0eSA6IGFCXG5cdFx0XHR9LFxuXHRcdFx0bWF4IDoge1xuXHRcdFx0XHR4IDogLTEsXG5cdFx0XHRcdHkgOiAtMVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Zm9yIChhRCA9IDA7IGFEIDwgYUI7ICsrYUQpIHtcblx0XHRcdGZvciAoYUUgPSAwOyBhRSA8IGF4OyArK2FFKSB7XG5cdFx0XHRcdGF2ID0gKGFEICogYXggKyBhRSkgKiA0O1xuXHRcdFx0XHRpZiAoai5kYXRhW2F2ICsgMV0gPiAwKSB7XG5cdFx0XHRcdFx0aWYgKGFFIDwgYUEubWluLngpIHtcblx0XHRcdFx0XHRcdGFBLm1pbi54ID0gYUVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFFID4gYUEubWF4LngpIHtcblx0XHRcdFx0XHRcdGFBLm1heC54ID0gYUVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFEIDwgYUEubWluLnkpIHtcblx0XHRcdFx0XHRcdGFBLm1pbi55ID0gYURcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFEID4gYUEubWF4LnkpIHtcblx0XHRcdFx0XHRcdGFBLm1heC55ID0gYURcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGF4ICE9IGFHKSB7XG5cdFx0XHRhQS5taW4ueCAqPSAoYUcgLyBheCk7XG5cdFx0XHRhQS5tYXgueCAqPSAoYUcgLyBheClcblx0XHR9XG5cdFx0aWYgKGFCICE9IGF5KSB7XG5cdFx0XHRhQS5taW4ueSAqPSAoYUcgLyBhQik7XG5cdFx0XHRhQS5tYXgueSAqPSAoYUcgLyBhQilcblx0XHR9XG5cdFx0YXcgPSBudWxsO1xuXHRcdHJldHVybiBhQVxuXHR9XG5cdGZ1bmN0aW9uIHkoaSkge1xuXHRcdHJldHVybiBcIidcIiArIGkucmVwbGFjZSgvKFxcJ3xcXFwiKS9nLCBcIlwiKS5yZXBsYWNlKC9cXHMqLFxccyovZywgXCInLCAnXCIpICsgXCInXCJcblx0fVxuXHRmdW5jdGlvbiBHKGksIGosIGF2KSB7XG5cdFx0YXYgPSBhdiB8fCBvO1xuXHRcdGlmIChhdi5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRhdi5hZGRFdmVudExpc3RlbmVyKGksIGosIGZhbHNlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdi5hdHRhY2hFdmVudChcIm9uXCIgKyBpLCBqKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBhbChheCwgYXosIGF3LCBhdikge1xuXHRcdHZhciBheSA9IGF2LmltYWdlU2NhbGUsXG5cdFx0ajtcblx0XHRpZiAoIWF6LmNvbXBsZXRlKSB7XG5cdFx0XHRyZXR1cm4gRyhcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbChheCwgYXosIGF3LCBhdilcblx0XHRcdH0sIGF6KVxuXHRcdH1cblx0XHRpZiAoIWF4LmNvbXBsZXRlKSB7XG5cdFx0XHRyZXR1cm4gRyhcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbChheCwgYXosIGF3LCBhdilcblx0XHRcdH0sIGF4KVxuXHRcdH1cblx0XHRhei53aWR0aCA9IGF6LndpZHRoO1xuXHRcdGF6LmhlaWdodCA9IGF6LmhlaWdodDtcblx0XHRpZiAoYXkpIHtcblx0XHRcdGF4LndpZHRoID0gYXoud2lkdGggKiBheTtcblx0XHRcdGF4LmhlaWdodCA9IGF6LmhlaWdodCAqIGF5XG5cdFx0fVxuXHRcdGF3LncgPSBheC53aWR0aDtcblx0XHRhdy5oID0gYXguaGVpZ2h0O1xuXHRcdGlmIChhdi50eHRPcHQgJiYgYXYuc2hhZG93KSB7XG5cdFx0XHRqID0gYW0oYXgsIGF2LnNoYWRvdywgYXYuc2hhZG93Qmx1ciwgYXYuc2hhZG93T2Zmc2V0KTtcblx0XHRcdGlmIChqKSB7XG5cdFx0XHRcdGF3LmltYWdlID0gajtcblx0XHRcdFx0YXcudyA9IGoud2lkdGg7XG5cdFx0XHRcdGF3LmggPSBqLmhlaWdodFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBhaShhdywgYXYpIHtcblx0XHR2YXIgaiA9IG8uZGVmYXVsdFZpZXcsXG5cdFx0aSA9IGF2LnJlcGxhY2UoL1xcLShbYS16XSkvZywgZnVuY3Rpb24gKGF4KSB7XG5cdFx0XHRcdHJldHVybiBheC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIChqICYmIGouZ2V0Q29tcHV0ZWRTdHlsZSAmJiBqLmdldENvbXB1dGVkU3R5bGUoYXcsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoYXYpKSB8fCAoYXcuY3VycmVudFN0eWxlICYmIGF3LmN1cnJlbnRTdHlsZVtpXSlcblx0fVxuXHRmdW5jdGlvbiBGKGF2LCBqKSB7XG5cdFx0dmFyIGkgPSAxLFxuXHRcdGF3O1xuXHRcdGlmIChhdi53ZWlnaHRGcm9tKSB7XG5cdFx0XHRpID0gMSAqIChqLmdldEF0dHJpYnV0ZShhdi53ZWlnaHRGcm9tKSB8fCBhdi50ZXh0SGVpZ2h0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXcgPSBhaShqLCBcImZvbnQtc2l6ZVwiKSkge1xuXHRcdFx0XHRpID0gKGF3LmluZGV4T2YoXCJweFwiKSA+IC0xICYmIGF3LnJlcGxhY2UoXCJweFwiLCBcIlwiKSAqIDEpIHx8IChhdy5pbmRleE9mKFwicHRcIikgPiAtMSAmJiBhdy5yZXBsYWNlKFwicHRcIiwgXCJcIikgKiAxLjI1KSB8fCBhdyAqIDMuM1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXYud2VpZ2h0ID0gZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGlcblx0fVxuXHRmdW5jdGlvbiBBKGkpIHtcblx0XHRyZXR1cm4gaS50YXJnZXQgJiYgYWooaS50YXJnZXQuaWQpID8gaS50YXJnZXQuaWQgOiBpLnNyY0VsZW1lbnQucGFyZW50Tm9kZS5pZFxuXHR9XG5cdGZ1bmN0aW9uIE0oYXgsIGF5KSB7XG5cdFx0dmFyIGF3LFxuXHRcdGF2LFxuXHRcdGkgPSBwYXJzZUludChhaShheSwgXCJ3aWR0aFwiKSkgLyBheS53aWR0aCxcblx0XHRqID0gcGFyc2VJbnQoYWkoYXksIFwiaGVpZ2h0XCIpKSAvIGF5LmhlaWdodDtcblx0XHRpZiAoYWooYXgub2Zmc2V0WCkpIHtcblx0XHRcdGF3ID0ge1xuXHRcdFx0XHR4IDogYXgub2Zmc2V0WCxcblx0XHRcdFx0eSA6IGF4Lm9mZnNldFlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YXYgPSByKGF5LmlkKTtcblx0XHRcdGlmIChhaihheC5jaGFuZ2VkVG91Y2hlcykpIHtcblx0XHRcdFx0YXggPSBheC5jaGFuZ2VkVG91Y2hlc1swXVxuXHRcdFx0fVxuXHRcdFx0aWYgKGF4LnBhZ2VYKSB7XG5cdFx0XHRcdGF3ID0ge1xuXHRcdFx0XHRcdHggOiBheC5wYWdlWCAtIGF2LngsXG5cdFx0XHRcdFx0eSA6IGF4LnBhZ2VZIC0gYXYueVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChhdyAmJiBpICYmIGopIHtcblx0XHRcdGF3LnggLz0gaTtcblx0XHRcdGF3LnkgLz0galxuXHRcdH1cblx0XHRyZXR1cm4gYXdcblx0fVxuXHRmdW5jdGlvbiBtKGF2KSB7XG5cdFx0dmFyIGogPSBhdi50YXJnZXQgfHwgYXYuZnJvbUVsZW1lbnQucGFyZW50Tm9kZSxcblx0XHRpID0geC50Y1tqLmlkXTtcblx0XHRpZiAoaSkge1xuXHRcdFx0aS5teCA9IGkubXkgPSAtMTtcblx0XHRcdGkuVW5GcmVlemUoKTtcblx0XHRcdGkuRW5kRHJhZygpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFnKGF6KSB7XG5cdFx0dmFyIGF3LFxuXHRcdGF2ID0geCxcblx0XHRqLFxuXHRcdGF5LFxuXHRcdGF4ID0gQShheik7XG5cdFx0Zm9yIChhdyBpbiBhdi50Yykge1xuXHRcdFx0aiA9IGF2LnRjW2F3XTtcblx0XHRcdGlmIChqLnR0dGltZXIpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KGoudHR0aW1lcik7XG5cdFx0XHRcdGoudHR0aW1lciA9IG51bGxcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGF4ICYmIGF2LnRjW2F4XSkge1xuXHRcdFx0aiA9IGF2LnRjW2F4XTtcblx0XHRcdGlmIChheSA9IE0oYXosIGouY2FudmFzKSkge1xuXHRcdFx0XHRqLm14ID0gYXkueDtcblx0XHRcdFx0ai5teSA9IGF5Lnk7XG5cdFx0XHRcdGouRHJhZyhheiwgYXkpXG5cdFx0XHR9XG5cdFx0XHRqLmRyYXduID0gMFxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBaKGF3KSB7XG5cdFx0dmFyIGogPSB4LFxuXHRcdGkgPSBvLmFkZEV2ZW50TGlzdGVuZXIgPyAwIDogMSxcblx0XHRhdiA9IEEoYXcpO1xuXHRcdGlmIChhdiAmJiBhdy5idXR0b24gPT0gaSAmJiBqLnRjW2F2XSkge1xuXHRcdFx0ai50Y1thdl0uQmVnaW5EcmFnKGF3KVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBnKGF4KSB7XG5cdFx0dmFyIGF2ID0geCxcblx0XHRqID0gby5hZGRFdmVudExpc3RlbmVyID8gMCA6IDEsXG5cdFx0YXcgPSBBKGF4KSxcblx0XHRpO1xuXHRcdGlmIChhdyAmJiBheC5idXR0b24gPT0gaiAmJiBhdi50Y1thd10pIHtcblx0XHRcdGkgPSBhdi50Y1thd107XG5cdFx0XHRhZyhheCk7XG5cdFx0XHRpZiAoIWkuRW5kRHJhZygpICYmICFpLnRvdWNoZWQpIHtcblx0XHRcdFx0aS5DbGlja2VkKGF4KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBKKGF2KSB7XG5cdFx0dmFyIGkgPSB4LFxuXHRcdGogPSBBKGF2KTtcblx0XHRpZiAoaiAmJiBhdi5jaGFuZ2VkVG91Y2hlcyAmJiBpLnRjW2pdKSB7XG5cdFx0XHRpLnRjW2pdLnRvdWNoZWQgPSAxO1xuXHRcdFx0aS50Y1tqXS5CZWdpbkRyYWcoYXYpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHAoYXYpIHtcblx0XHR2YXIgaSA9IHgsXG5cdFx0aiA9IEEoYXYpO1xuXHRcdGlmIChqICYmIGF2LmNoYW5nZWRUb3VjaGVzICYmIGkudGNbal0pIHtcblx0XHRcdGFiKGF2KTtcblx0XHRcdGlmICghaS50Y1tqXS5FbmREcmFnKCkpIHtcblx0XHRcdFx0aS50Y1tqXS5EcmF3KCk7XG5cdFx0XHRcdGkudGNbal0uQ2xpY2tlZChhdilcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gYWIoYXopIHtcblx0XHR2YXIgYXcsXG5cdFx0YXYgPSB4LFxuXHRcdGosXG5cdFx0YXksXG5cdFx0YXggPSBBKGF6KTtcblx0XHRmb3IgKGF3IGluIGF2LnRjKSB7XG5cdFx0XHRqID0gYXYudGNbYXddO1xuXHRcdFx0aWYgKGoudHR0aW1lcikge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoai50dHRpbWVyKTtcblx0XHRcdFx0ai50dHRpbWVyID0gbnVsbFxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoYXggJiYgYXYudGNbYXhdICYmIGF6LmNoYW5nZWRUb3VjaGVzKSB7XG5cdFx0XHRqID0gYXYudGNbYXhdO1xuXHRcdFx0aWYgKGF5ID0gTShheiwgai5jYW52YXMpKSB7XG5cdFx0XHRcdGoubXggPSBheS54O1xuXHRcdFx0XHRqLm15ID0gYXkueTtcblx0XHRcdFx0ai5EcmFnKGF6LCBheSlcblx0XHRcdH1cblx0XHRcdGouZHJhd24gPSAwXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFxKGF2KSB7XG5cdFx0dmFyIGkgPSB4LFxuXHRcdGogPSBBKGF2KTtcblx0XHRpZiAoaiAmJiBpLnRjW2pdKSB7XG5cdFx0XHRhdi5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdFx0YXYucmV0dXJuVmFsdWUgPSBmYWxzZTtcblx0XHRcdGF2LnByZXZlbnREZWZhdWx0ICYmIGF2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpLnRjW2pdLldoZWVsKChhdi53aGVlbERlbHRhIHx8IGF2LmRldGFpbCkgPiAwKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB0KGF4KSB7XG5cdFx0dmFyIGogPSB4LnRjLFxuXHRcdGF3LFxuXHRcdGF2O1xuXHRcdGF4ID0gYXggfHwgVCgpO1xuXHRcdGZvciAoYXcgaW4gaikge1xuXHRcdFx0YXYgPSBqW2F3XS5pbnRlcnZhbDtcblx0XHRcdGpbYXddLkRyYXcoYXgpXG5cdFx0fVxuXHRcdHguTmV4dEZyYW1lKGF2KVxuXHR9XG5cdGZ1bmN0aW9uIHIoYXYpIHtcblx0XHR2YXIgYXkgPSBvLmdldEVsZW1lbnRCeUlkKGF2KSxcblx0XHRpID0gYXkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0YUIgPSBvLmRvY3VtZW50RWxlbWVudCxcblx0XHRheiA9IG8uYm9keSxcblx0XHRhQSA9IHdpbmRvdyxcblx0XHRhdyA9IGFBLnBhZ2VYT2Zmc2V0IHx8IGFCLnNjcm9sbExlZnQsXG5cdFx0YUMgPSBhQS5wYWdlWU9mZnNldCB8fCBhQi5zY3JvbGxUb3AsXG5cdFx0YXggPSBhQi5jbGllbnRMZWZ0IHx8IGF6LmNsaWVudExlZnQsXG5cdFx0aiA9IGFCLmNsaWVudFRvcCB8fCBhei5jbGllbnRUb3A7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHggOiBpLmxlZnQgKyBhdyAtIGF4LFxuXHRcdFx0eSA6IGkudG9wICsgYUMgLSBqXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFwKGosIGF3LCBheCwgYXYpIHtcblx0XHR2YXIgaSA9IGoucmFkaXVzICogai56MSAvIChqLnoxICsgai56MiArIGF3LnopO1xuXHRcdHJldHVybiB7XG5cdFx0XHR4IDogYXcueCAqIGkgKiBheCxcblx0XHRcdHkgOiBhdy55ICogaSAqIGF2LFxuXHRcdFx0eiA6IGF3LnosXG5cdFx0XHR3IDogKGouejEgLSBhdy56KSAvIGouejJcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gUChpKSB7XG5cdFx0dGhpcy5lID0gaTtcblx0XHR0aGlzLmJyID0gMDtcblx0XHR0aGlzLmxpbmUgPSBbXTtcblx0XHR0aGlzLnRleHQgPSBbXTtcblx0XHR0aGlzLm9yaWdpbmFsID0gaS5pbm5lclRleHQgfHwgaS50ZXh0Q29udGVudFxuXHR9XG5cdHogPSBQLnByb3RvdHlwZTtcblx0ei5MaW5lcyA9IGZ1bmN0aW9uIChheCkge1xuXHRcdHZhciBhdyA9IGF4ID8gMSA6IDAsXG5cdFx0YXksXG5cdFx0aixcblx0XHRhdjtcblx0XHRheCA9IGF4IHx8IHRoaXMuZTtcblx0XHRheSA9IGF4LmNoaWxkTm9kZXM7XG5cdFx0aiA9IGF5Lmxlbmd0aDtcblx0XHRmb3IgKGF2ID0gMDsgYXYgPCBqOyArK2F2KSB7XG5cdFx0XHRpZiAoYXlbYXZdLm5vZGVOYW1lID09IFwiQlJcIikge1xuXHRcdFx0XHR0aGlzLnRleHQucHVzaCh0aGlzLmxpbmUuam9pbihcIiBcIikpO1xuXHRcdFx0XHR0aGlzLmJyID0gMVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGF5W2F2XS5ub2RlVHlwZSA9PSAzKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYnIpIHtcblx0XHRcdFx0XHRcdHRoaXMubGluZSA9IFtheVthdl0ubm9kZVZhbHVlXTtcblx0XHRcdFx0XHRcdHRoaXMuYnIgPSAwXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubGluZS5wdXNoKGF5W2F2XS5ub2RlVmFsdWUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuTGluZXMoYXlbYXZdKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF3IHx8IHRoaXMuYnIgfHwgdGhpcy50ZXh0LnB1c2godGhpcy5saW5lLmpvaW4oXCIgXCIpKTtcblx0XHRyZXR1cm4gdGhpcy50ZXh0XG5cdH07XG5cdHouU3BsaXRXaWR0aCA9IGZ1bmN0aW9uIChhdiwgYUMsIGF6LCBheSkge1xuXHRcdHZhciBheCxcblx0XHRhdyxcblx0XHRhQixcblx0XHRhQSA9IFtdO1xuXHRcdGFDLmZvbnQgPSBheSArIFwicHggXCIgKyBhejtcblx0XHRmb3IgKGF4ID0gMDsgYXggPCB0aGlzLnRleHQubGVuZ3RoOyArK2F4KSB7XG5cdFx0XHRhQiA9IHRoaXMudGV4dFtheF0uc3BsaXQoL1xccysvKTtcblx0XHRcdHRoaXMubGluZSA9IFthQlswXV07XG5cdFx0XHRmb3IgKGF3ID0gMTsgYXcgPCBhQi5sZW5ndGg7ICsrYXcpIHtcblx0XHRcdFx0aWYgKGFDLm1lYXN1cmVUZXh0KHRoaXMubGluZS5qb2luKFwiIFwiKSArIFwiIFwiICsgYUJbYXddKS53aWR0aCA+IGF2KSB7XG5cdFx0XHRcdFx0YUEucHVzaCh0aGlzLmxpbmUuam9pbihcIiBcIikpO1xuXHRcdFx0XHRcdHRoaXMubGluZSA9IFthQlthd11dXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5saW5lLnB1c2goYUJbYXddKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRhQS5wdXNoKHRoaXMubGluZS5qb2luKFwiIFwiKSlcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudGV4dCA9IGFBXG5cdH07XG5cdGZ1bmN0aW9uIGYoaSkge1xuXHRcdHRoaXMudHMgPSBUKCk7XG5cdFx0dGhpcy50YyA9IGk7XG5cdFx0dGhpcy54ID0gdGhpcy55ID0gdGhpcy53ID0gdGhpcy5oID0gdGhpcy5zYyA9IDE7XG5cdFx0dGhpcy56ID0gMDtcblx0XHR0aGlzLkRyYXcgPSBpLnB1bHNhdGVUbyA8IDEgJiYgaS5vdXRsaW5lTWV0aG9kICE9IFwiY29sb3VyXCIgPyB0aGlzLkRyYXdQdWxzYXRlIDogdGhpcy5EcmF3U2ltcGxlO1xuXHRcdHRoaXMuU2V0TWV0aG9kKGkub3V0bGluZU1ldGhvZClcblx0fVxuXHRlID0gZi5wcm90b3R5cGU7XG5cdGUuU2V0TWV0aG9kID0gZnVuY3Rpb24gKGF2KSB7XG5cdFx0dmFyIGogPSB7XG5cdFx0XHRibG9jayA6IFtcIlByZURyYXdcIiwgXCJEcmF3QmxvY2tcIl0sXG5cdFx0XHRjb2xvdXIgOiBbXCJQcmVEcmF3XCIsIFwiRHJhd0NvbG91clwiXSxcblx0XHRcdG91dGxpbmUgOiBbXCJQb3N0RHJhd1wiLCBcIkRyYXdPdXRsaW5lXCJdLFxuXHRcdFx0Y2xhc3NpYyA6IFtcIkxhc3REcmF3XCIsIFwiRHJhd091dGxpbmVcIl0sXG5cdFx0XHRub25lIDogW1wiTGFzdERyYXdcIl1cblx0XHR9LFxuXHRcdGkgPSBqW2F2XSB8fCBqLm91dGxpbmU7XG5cdFx0aWYgKGF2ID09IFwibm9uZVwiKSB7XG5cdFx0XHR0aGlzLkRyYXcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRyYXdGdW5jID0gdGhpc1tpWzFdXVxuXHRcdH1cblx0XHR0aGlzW2lbMF1dID0gdGhpcy5EcmF3XG5cdH07XG5cdGUuVXBkYXRlID0gZnVuY3Rpb24gKGFCLCBhQSwgYUMsIGF4LCBheSwgYXosIGF3LCBpKSB7XG5cdFx0dmFyIGogPSB0aGlzLnRjLm91dGxpbmVPZmZzZXQsXG5cdFx0YXYgPSAyICogajtcblx0XHR0aGlzLnggPSBheSAqIGFCICsgYXcgLSBqO1xuXHRcdHRoaXMueSA9IGF5ICogYUEgKyBpIC0gajtcblx0XHR0aGlzLncgPSBheSAqIGFDICsgYXY7XG5cdFx0dGhpcy5oID0gYXkgKiBheCArIGF2O1xuXHRcdHRoaXMuc2MgPSBheTtcblx0XHR0aGlzLnogPSBhelxuXHR9O1xuXHRlLkRyYXdPdXRsaW5lID0gZnVuY3Rpb24gKGF5LCBpLCBheCwgaiwgYXYsIGF3KSB7XG5cdFx0YXkuc3Ryb2tlU3R5bGUgPSBhdztcblx0XHRheS5zdHJva2VSZWN0KGksIGF4LCBqLCBhdilcblx0fTtcblx0ZS5EcmF3Q29sb3VyID0gZnVuY3Rpb24gKGF3LCBheiwgYXgsIGFBLCBhdiwgaSwgYUIsIGosIGF5KSB7XG5cdFx0cmV0dXJuIHRoaXNbYUIuaW1hZ2UgPyBcIkRyYXdDb2xvdXJJbWFnZVwiIDogXCJEcmF3Q29sb3VyVGV4dFwiXShhdywgYXosIGF4LCBhQSwgYXYsIGksIGFCLCBqLCBheSlcblx0fTtcblx0ZS5EcmF3Q29sb3VyVGV4dCA9IGZ1bmN0aW9uIChheCwgYUEsIGF5LCBhQiwgYXYsIGksIGFDLCBqLCBheikge1xuXHRcdHZhciBhdyA9IGFDLmNvbG91cjtcblx0XHRhQy5jb2xvdXIgPSBpO1xuXHRcdGFDLmFscGhhID0gMTtcblx0XHRhQy5EcmF3KGF4LCBqLCBheik7XG5cdFx0YUMuY29sb3VyID0gYXc7XG5cdFx0cmV0dXJuIDFcblx0fTtcblx0ZS5EcmF3Q29sb3VySW1hZ2UgPSBmdW5jdGlvbiAoYUEsIGFELCBhQiwgYUUsIGF6LCBpLCBhSCwgaiwgYUMpIHtcblx0XHR2YXIgYUYgPSBhQS5jYW52YXMsXG5cdFx0YXggPSB+fkkoYUQsIDApLFxuXHRcdGF3ID0gfn5JKGFCLCAwKSxcblx0XHRheSA9IGF0KGFGLndpZHRoIC0gYXgsIGFFKSArIDAuNSB8IDAsXG5cdFx0YUcgPSBhdChhRi5oZWlnaHQgLSBhdywgYXopICsgMC41IHwgMCxcblx0XHRhdjtcblx0XHRpZiAoSCkge1xuXHRcdFx0SC53aWR0aCA9IGF5LFxuXHRcdFx0SC5oZWlnaHQgPSBhR1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRIID0gaChheSwgYUcpXG5cdFx0fVxuXHRcdGlmICghSCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuU2V0TWV0aG9kKFwib3V0bGluZVwiKVxuXHRcdH1cblx0XHRhdiA9IEguZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdGF2LmRyYXdJbWFnZShhRiwgYXgsIGF3LCBheSwgYUcsIDAsIDAsIGF5LCBhRyk7XG5cdFx0YUEuY2xlYXJSZWN0KGF4LCBhdywgYXksIGFHKTtcblx0XHRhSC5hbHBoYSA9IDE7XG5cdFx0YUguRHJhdyhhQSwgaiwgYUMpO1xuXHRcdGFBLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcblx0XHRhQS5zYXZlKCk7XG5cdFx0YUEuYmVnaW5QYXRoKCk7XG5cdFx0YUEucmVjdChheCwgYXcsIGF5LCBhRyk7XG5cdFx0YUEuY2xpcCgpO1xuXHRcdGFBLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLWluXCI7XG5cdFx0YUEuZmlsbFN0eWxlID0gaTtcblx0XHRhQS5maWxsUmVjdChheCwgYXcsIGF5LCBhRyk7XG5cdFx0YUEucmVzdG9yZSgpO1xuXHRcdGFBLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tb3ZlclwiO1xuXHRcdGFBLmRyYXdJbWFnZShILCAwLCAwLCBheSwgYUcsIGF4LCBhdywgYXksIGFHKTtcblx0XHRhQS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCI7XG5cdFx0cmV0dXJuIDFcblx0fTtcblx0ZS5EcmF3QmxvY2sgPSBmdW5jdGlvbiAoYXksIGksIGF4LCBqLCBhdiwgYXcpIHtcblx0XHRheS5maWxsU3R5bGUgPSBhdztcblx0XHRheS5maWxsUmVjdChpLCBheCwgaiwgYXYpXG5cdH07XG5cdGUuRHJhd1NpbXBsZSA9IGZ1bmN0aW9uIChheCwgaSwgaiwgYXcpIHtcblx0XHR2YXIgYXYgPSB0aGlzLnRjO1xuXHRcdGF4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcblx0XHRheC5zdHJva2VTdHlsZSA9IGF2Lm91dGxpbmVDb2xvdXI7XG5cdFx0YXgubGluZVdpZHRoID0gYXYub3V0bGluZVRoaWNrbmVzcztcblx0XHRheC5zaGFkb3dCbHVyID0gYXguc2hhZG93T2Zmc2V0WCA9IGF4LnNoYWRvd09mZnNldFkgPSAwO1xuXHRcdGF4Lmdsb2JhbEFscGhhID0gMTtcblx0XHRyZXR1cm4gdGhpcy5kcmF3RnVuYyhheCwgdGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oLCBhdi5vdXRsaW5lQ29sb3VyLCBpLCBqLCBhdylcblx0fTtcblx0ZS5EcmF3UHVsc2F0ZSA9IGZ1bmN0aW9uIChheSwgaSwgaiwgYXcpIHtcblx0XHR2YXIgYXggPSBUKCkgLSB0aGlzLnRzLFxuXHRcdGF2ID0gdGhpcy50Yztcblx0XHRheS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG5cdFx0YXkuc3Ryb2tlU3R5bGUgPSBhdi5vdXRsaW5lQ29sb3VyO1xuXHRcdGF5LmxpbmVXaWR0aCA9IGF2Lm91dGxpbmVUaGlja25lc3M7XG5cdFx0YXkuc2hhZG93Qmx1ciA9IGF5LnNoYWRvd09mZnNldFggPSBheS5zaGFkb3dPZmZzZXRZID0gMDtcblx0XHRheS5nbG9iYWxBbHBoYSA9IGF2LnB1bHNhdGVUbyArICgoMSAtIGF2LnB1bHNhdGVUbykgKiAoMC41ICsgKGwoMiAqIE1hdGguUEkgKiBheCAvICgxMDAwICogYXYucHVsc2F0ZVRpbWUpKSAvIDIpKSk7XG5cdFx0cmV0dXJuIHRoaXMuZHJhd0Z1bmMoYXksIHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCwgYXYub3V0bGluZUNvbG91ciwgaSwgaiwgYXcpXG5cdH07XG5cdGUuQWN0aXZlID0gZnVuY3Rpb24gKGF2LCBpLCBqKSB7XG5cdFx0cmV0dXJuIChpID49IHRoaXMueCAmJiBqID49IHRoaXMueSAmJiBpIDw9IHRoaXMueCArIHRoaXMudyAmJiBqIDw9IHRoaXMueSArIHRoaXMuaClcblx0fTtcblx0ZS5QcmVEcmF3ID0gZS5Qb3N0RHJhdyA9IGUuTGFzdERyYXcgPSBZO1xuXHRmdW5jdGlvbiBTKGF3LCBhQywgYXosIGFCLCBhQSwgYXgsIGosIGF2LCBpKSB7XG5cdFx0dmFyIGF5ID0gYXcuY3R4dDtcblx0XHR0aGlzLnRjID0gYXc7XG5cdFx0dGhpcy5pbWFnZSA9IGFDLnNyYyA/IGFDIDogbnVsbDtcblx0XHR0aGlzLnRleHQgPSBhQy5zcmMgPyBbXSA6IGFDO1xuXHRcdHRoaXMudGV4dF9vcmlnaW5hbCA9IGk7XG5cdFx0dGhpcy5saW5lX3dpZHRocyA9IFtdO1xuXHRcdHRoaXMudGl0bGUgPSBhei50aXRsZSB8fCBudWxsO1xuXHRcdHRoaXMuYSA9IGF6O1xuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgVShhQlswXSwgYUJbMV0sIGFCWzJdKTtcblx0XHR0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAwO1xuXHRcdHRoaXMudyA9IGFBO1xuXHRcdHRoaXMuaCA9IGF4O1xuXHRcdHRoaXMuY29sb3VyID0gaiB8fCBhdy50ZXh0Q29sb3VyO1xuXHRcdHRoaXMudGV4dEZvbnQgPSBhdiB8fCBhdy50ZXh0Rm9udDtcblx0XHR0aGlzLndlaWdodCA9IHRoaXMuc2MgPSB0aGlzLmFscGhhID0gMTtcblx0XHR0aGlzLndlaWdodGVkID0gIWF3LndlaWdodDtcblx0XHR0aGlzLm91dGxpbmUgPSBuZXcgZihhdyk7XG5cdFx0aWYgKCF0aGlzLmltYWdlKSB7XG5cdFx0XHR0aGlzLnRleHRIZWlnaHQgPSBhdy50ZXh0SGVpZ2h0O1xuXHRcdFx0dGhpcy5leHRlbnRzID0gYWYodGhpcy50ZXh0LCB0aGlzLnRleHRGb250LCB0aGlzLnRleHRIZWlnaHQpO1xuXHRcdFx0dGhpcy5NZWFzdXJlKGF5LCBhdylcblx0XHR9XG5cdFx0dGhpcy5TZXRTaGFkb3dDb2xvdXIgPSBhdy5zaGFkb3dBbHBoYSA/IHRoaXMuU2V0U2hhZG93Q29sb3VyQWxwaGEgOiB0aGlzLlNldFNoYWRvd0NvbG91ckZpeGVkO1xuXHRcdHRoaXMuU2V0RHJhdyhhdylcblx0fVxuXHRhZCA9IFMucHJvdG90eXBlO1xuXHRhZC5FcXVhbFRvID0gZnVuY3Rpb24gKGF2KSB7XG5cdFx0dmFyIGogPSBhdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKTtcblx0XHRpZiAodGhpcy5hLmhyZWYgIT0gYXYuaHJlZikge1xuXHRcdFx0cmV0dXJuIDBcblx0XHR9XG5cdFx0aWYgKGoubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbWFnZS5zcmMgPT0galswXS5zcmNcblx0XHR9XG5cdFx0cmV0dXJuIChhdi5pbm5lclRleHQgfHwgYXYudGV4dENvbnRlbnQpID09IHRoaXMudGV4dF9vcmlnaW5hbFxuXHR9O1xuXHRhZC5TZXREcmF3ID0gZnVuY3Rpb24gKGkpIHtcblx0XHR0aGlzLkRyYXcgPSB0aGlzLmltYWdlID8gKGkuaWUgPiA3ID8gdGhpcy5EcmF3SW1hZ2VJRSA6IHRoaXMuRHJhd0ltYWdlKSA6IHRoaXMuRHJhd1RleHQ7XG5cdFx0aS5ub1NlbGVjdCAmJiAodGhpcy5DaGVja0FjdGl2ZSA9IFkpXG5cdH07XG5cdGFkLk1lYXN1cmVUZXh0ID0gZnVuY3Rpb24gKGF5KSB7XG5cdFx0dmFyIGF3LFxuXHRcdGF2ID0gdGhpcy50ZXh0Lmxlbmd0aCxcblx0XHRqID0gMCxcblx0XHRheDtcblx0XHRmb3IgKGF3ID0gMDsgYXcgPCBhdjsgKythdykge1xuXHRcdFx0dGhpcy5saW5lX3dpZHRoc1thd10gPSBheCA9IGF5Lm1lYXN1cmVUZXh0KHRoaXMudGV4dFthd10pLndpZHRoO1xuXHRcdFx0aiA9IEkoaiwgYXgpXG5cdFx0fVxuXHRcdHJldHVybiBqXG5cdH07XG5cdGFkLk1lYXN1cmUgPSBmdW5jdGlvbiAoYXosIGopIHtcblx0XHR0aGlzLmggPSB0aGlzLmV4dGVudHMgPyB0aGlzLmV4dGVudHMubWF4LnkgKyB0aGlzLmV4dGVudHMubWluLnkgOiB0aGlzLnRleHRIZWlnaHQ7XG5cdFx0YXouZm9udCA9IHRoaXMuZm9udCA9IHRoaXMudGV4dEhlaWdodCArIFwicHggXCIgKyB0aGlzLnRleHRGb250O1xuXHRcdHRoaXMudyA9IHRoaXMuTWVhc3VyZVRleHQoYXopO1xuXHRcdGlmIChqLnR4dE9wdCkge1xuXHRcdFx0dmFyIGF3ID0gai50eHRTY2FsZSxcblx0XHRcdGF4ID0gYXcgKiB0aGlzLnRleHRIZWlnaHQsXG5cdFx0XHRheSA9IGF4ICsgXCJweCBcIiArIHRoaXMudGV4dEZvbnQsXG5cdFx0XHRhdiA9IFthdyAqIGouc2hhZG93T2Zmc2V0WzBdLCBhdyAqIGouc2hhZG93T2Zmc2V0WzFdXSxcblx0XHRcdGk7XG5cdFx0XHRhei5mb250ID0gYXk7XG5cdFx0XHRpID0gdGhpcy5NZWFzdXJlVGV4dChheik7XG5cdFx0XHR0aGlzLmltYWdlID0gcSh0aGlzLnRleHQsIGF5LCBheCwgaSwgYXcgKiB0aGlzLmgsIHRoaXMuY29sb3VyLCBqLnNoYWRvdywgYXcgKiBqLnNoYWRvd0JsdXIsIGF2LCBhdywgYXcsIGksIHRoaXMubGluZV93aWR0aHMpO1xuXHRcdFx0aWYgKHRoaXMuaW1hZ2UpIHtcblx0XHRcdFx0dGhpcy53ID0gdGhpcy5pbWFnZS53aWR0aCAvIGF3O1xuXHRcdFx0XHR0aGlzLmggPSB0aGlzLmltYWdlLmhlaWdodCAvIGF3XG5cdFx0XHR9XG5cdFx0XHR0aGlzLlNldERyYXcoaik7XG5cdFx0XHRqLnR4dE9wdCA9ICEhdGhpcy5pbWFnZVxuXHRcdH1cblx0fTtcblx0YWQuU2V0Rm9udCA9IGZ1bmN0aW9uIChpLCBqKSB7XG5cdFx0dGhpcy50ZXh0Rm9udCA9IGk7XG5cdFx0dGhpcy5jb2xvdXIgPSBqO1xuXHRcdHRoaXMuZXh0ZW50cyA9IGFmKHRoaXMudGV4dCwgdGhpcy50ZXh0Rm9udCwgdGhpcy50ZXh0SGVpZ2h0KTtcblx0XHR0aGlzLk1lYXN1cmUodGhpcy50Yy5jdHh0LCB0aGlzLnRjKVxuXHR9O1xuXHRhZC5TZXRXZWlnaHQgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGlmICghdGhpcy50ZXh0Lmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHRoaXMud2VpZ2h0ID0gaTtcblx0XHR0aGlzLldlaWdodCh0aGlzLnRjLmN0eHQsIHRoaXMudGMpO1xuXHRcdHRoaXMuTWVhc3VyZSh0aGlzLnRjLmN0eHQsIHRoaXMudGMpXG5cdH07XG5cdGFkLldlaWdodCA9IGZ1bmN0aW9uIChhdywgYXYpIHtcblx0XHR2YXIgaiA9IHRoaXMud2VpZ2h0LFxuXHRcdGkgPSBhdi53ZWlnaHRNb2RlO1xuXHRcdHRoaXMud2VpZ2h0ZWQgPSB0cnVlO1xuXHRcdGlmIChpID09IFwiY29sb3VyXCIgfHwgaSA9PSBcImJvdGhcIikge1xuXHRcdFx0dGhpcy5jb2xvdXIgPSBhdShhdiwgKGogLSBhdi5taW5fd2VpZ2h0KSAvIChhdi5tYXhfd2VpZ2h0IC0gYXYubWluX3dlaWdodCkpXG5cdFx0fVxuXHRcdGlmIChpID09IFwic2l6ZVwiIHx8IGkgPT0gXCJib3RoXCIpIHtcblx0XHRcdGlmIChhdi53ZWlnaHRTaXplTWluID4gMCAmJiBhdi53ZWlnaHRTaXplTWF4ID4gYXYud2VpZ2h0U2l6ZU1pbikge1xuXHRcdFx0XHR0aGlzLnRleHRIZWlnaHQgPSBhdi53ZWlnaHRTaXplICogKGF2LndlaWdodFNpemVNaW4gKyAoYXYud2VpZ2h0U2l6ZU1heCAtIGF2LndlaWdodFNpemVNaW4pICogKGogLSBhdi5taW5fd2VpZ2h0KSAvIChhdi5tYXhfd2VpZ2h0IC0gYXYubWluX3dlaWdodCkpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRleHRIZWlnaHQgPSBqICogYXYud2VpZ2h0U2l6ZVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmV4dGVudHMgPSBhZih0aGlzLnRleHQsIHRoaXMudGV4dEZvbnQsIHRoaXMudGV4dEhlaWdodClcblx0fTtcblx0YWQuU2V0U2hhZG93Q29sb3VyRml4ZWQgPSBmdW5jdGlvbiAoYXYsIGosIGkpIHtcblx0XHRhdi5zaGFkb3dDb2xvciA9IGpcblx0fTtcblx0YWQuU2V0U2hhZG93Q29sb3VyQWxwaGEgPSBmdW5jdGlvbiAoYXYsIGosIGkpIHtcblx0XHRhdi5zaGFkb3dDb2xvciA9IHUoaiwgaSlcblx0fTtcblx0YWQuRHJhd1RleHQgPSBmdW5jdGlvbiAoYXgsIGFBLCBhdykge1xuXHRcdHZhciBhQiA9IHRoaXMudGMsXG5cdFx0YXogPSB0aGlzLngsXG5cdFx0YXkgPSB0aGlzLnksXG5cdFx0YUMgPSB0aGlzLnNjLFxuXHRcdGosXG5cdFx0YXY7XG5cdFx0YXguZ2xvYmFsQWxwaGEgPSB0aGlzLmFscGhhO1xuXHRcdGF4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3VyO1xuXHRcdGFCLnNoYWRvdyAmJiB0aGlzLlNldFNoYWRvd0NvbG91cihheCwgYUIuc2hhZG93LCB0aGlzLmFscGhhKTtcblx0XHRheC5mb250ID0gdGhpcy5mb250O1xuXHRcdGF6ICs9IGFBIC8gYUM7XG5cdFx0YXkgKz0gKGF3IC8gYUMpIC0gKHRoaXMuaCAvIDIpO1xuXHRcdGZvciAoaiA9IDA7IGogPCB0aGlzLnRleHQubGVuZ3RoOyArK2opIHtcblx0XHRcdGF2ID0gYXogLSAodGhpcy5saW5lX3dpZHRoc1tqXSAvIDIpO1xuXHRcdFx0YXguc2V0VHJhbnNmb3JtKGFDLCAwLCAwLCBhQywgYUMgKiBhdiwgYUMgKiBheSk7XG5cdFx0XHRheC5maWxsVGV4dCh0aGlzLnRleHRbal0sIDAsIDApO1xuXHRcdFx0YXkgKz0gdGhpcy50ZXh0SGVpZ2h0XG5cdFx0fVxuXHR9O1xuXHRhZC5EcmF3SW1hZ2UgPSBmdW5jdGlvbiAoYXgsIGFELCBhdykge1xuXHRcdHZhciBhQSA9IHRoaXMueCxcblx0XHRheSA9IHRoaXMueSxcblx0XHRhRSA9IHRoaXMuc2MsXG5cdFx0aiA9IHRoaXMuaW1hZ2UsXG5cdFx0YUIgPSB0aGlzLncsXG5cdFx0YXYgPSB0aGlzLmgsXG5cdFx0YXogPSB0aGlzLmFscGhhLFxuXHRcdGFDID0gdGhpcy5zaGFkb3c7XG5cdFx0YXguZ2xvYmFsQWxwaGEgPSBhejtcblx0XHRhQyAmJiB0aGlzLlNldFNoYWRvd0NvbG91cihheCwgYUMsIGF6KTtcblx0XHRhQSArPSAoYUQgLyBhRSkgLSAoYUIgLyAyKTtcblx0XHRheSArPSAoYXcgLyBhRSkgLSAoYXYgLyAyKTtcblx0XHRheC5zZXRUcmFuc2Zvcm0oYUUsIDAsIDAsIGFFLCBhRSAqIGFBLCBhRSAqIGF5KTtcblx0XHRheC5kcmF3SW1hZ2UoaiwgMCwgMCwgYUIsIGF2KVxuXHR9O1xuXHRhZC5EcmF3SW1hZ2VJRSA9IGZ1bmN0aW9uIChheCwgYUIsIGF3KSB7XG5cdFx0dmFyIGogPSB0aGlzLmltYWdlLFxuXHRcdGFDID0gdGhpcy5zYyxcblx0XHRhQSA9IGoud2lkdGggPSB0aGlzLncgKiBhQyxcblx0XHRhdiA9IGouaGVpZ2h0ID0gdGhpcy5oICogYUMsXG5cdFx0YXogPSAodGhpcy54ICogYUMpICsgYUIgLSAoYUEgLyAyKSxcblx0XHRheSA9ICh0aGlzLnkgKiBhQykgKyBhdyAtIChhdiAvIDIpO1xuXHRcdGF4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcblx0XHRheC5nbG9iYWxBbHBoYSA9IHRoaXMuYWxwaGE7XG5cdFx0YXguZHJhd0ltYWdlKGosIGF6LCBheSlcblx0fTtcblx0YWQuQ2FsYyA9IGZ1bmN0aW9uIChpLCBhdikge1xuXHRcdHZhciBqLFxuXHRcdGF5ID0gdGhpcy50Yyxcblx0XHRheCA9IGF5Lm1pbkJyaWdodG5lc3MsXG5cdFx0YXcgPSBheS5tYXhCcmlnaHRuZXNzLFxuXHRcdGF6ID0gYXkubWF4X3JhZGl1cztcblx0XHRqID0gaS54Zm9ybSh0aGlzLnBvc2l0aW9uKTtcblx0XHR0aGlzLnhmb3JtZWQgPSBqO1xuXHRcdGogPSBhcChheSwgaiwgYXkuc3RyZXRjaFgsIGF5LnN0cmV0Y2hZKTtcblx0XHR0aGlzLnggPSBqLng7XG5cdFx0dGhpcy55ID0gai55O1xuXHRcdHRoaXMueiA9IGouejtcblx0XHR0aGlzLnNjID0gai53O1xuXHRcdHRoaXMuYWxwaGEgPSBhdiAqIGIoYXggKyAoYXcgLSBheCkgKiAoYXogLSB0aGlzLnopIC8gKDIgKiBheiksIDAsIDEpXG5cdH07XG5cdGFkLkNoZWNrQWN0aXZlID0gZnVuY3Rpb24gKGF3LCBhQSwgYXYpIHtcblx0XHR2YXIgYUIgPSB0aGlzLnRjLFxuXHRcdGkgPSB0aGlzLm91dGxpbmUsXG5cdFx0YXogPSB0aGlzLncsXG5cdFx0aiA9IHRoaXMuaCxcblx0XHRheSA9IHRoaXMueCAtIGF6IC8gMixcblx0XHRheCA9IHRoaXMueSAtIGogLyAyO1xuXHRcdGkuVXBkYXRlKGF5LCBheCwgYXosIGosIHRoaXMuc2MsIHRoaXMueiwgYUEsIGF2KTtcblx0XHRyZXR1cm4gaS5BY3RpdmUoYXcsIGFCLm14LCBhQi5teSkgPyBpIDogbnVsbFxuXHR9O1xuXHRhZC5DbGlja2VkID0gZnVuY3Rpb24gKGF5KSB7XG5cdFx0dmFyIGogPSB0aGlzLmEsXG5cdFx0YXYgPSBqLnRhcmdldCxcblx0XHRhdyA9IGouaHJlZixcblx0XHRpO1xuXHRcdGlmIChhdiAhPSBcIlwiICYmIGF2ICE9IFwiX3NlbGZcIikge1xuXHRcdFx0aWYgKHNlbGYuZnJhbWVzW2F2XSkge1xuXHRcdFx0XHRzZWxmLmZyYW1lc1thdl0uZG9jdW1lbnQubG9jYXRpb24gPSBhd1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAodG9wLmZyYW1lc1thdl0pIHtcblx0XHRcdFx0XHRcdHRvcC5mcmFtZXNbYXZdLmRvY3VtZW50LmxvY2F0aW9uID0gYXc7XG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGF4KSB7fVxuXG5cdFx0XHRcdHdpbmRvdy5vcGVuKGF3LCBhdilcblx0XHRcdH1cblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZiAoby5jcmVhdGVFdmVudCkge1xuXHRcdFx0aSA9IG8uY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcblx0XHRcdGkuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCAxLCAxLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIG51bGwpO1xuXHRcdFx0aWYgKCFqLmRpc3BhdGNoRXZlbnQoaSkpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChqLmZpcmVFdmVudCkge1xuXHRcdFx0XHRpZiAoIWouZmlyZUV2ZW50KFwib25jbGlja1wiKSkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG8ubG9jYXRpb24gPSBhd1xuXHR9O1xuXHRmdW5jdGlvbiB4KGFBLCBqLCBhdykge1xuXHRcdHZhciBhdixcblx0XHRheSxcblx0XHRheiA9IG8uZ2V0RWxlbWVudEJ5SWQoYUEpLFxuXHRcdGF4ID0gW1wiaWRcIiwgXCJjbGFzc1wiLCBcImlubmVySFRNTFwiXTtcblx0XHRpZiAoIWF6KSB7XG5cdFx0XHR0aHJvdyAwXG5cdFx0fVxuXHRcdGlmIChhaih3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyKSkge1xuXHRcdFx0YXogPSB3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KGF6KTtcblx0XHRcdHRoaXMuaWUgPSBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uLnNwbGl0KFwiTVNJRVwiKVsxXSlcblx0XHR9XG5cdFx0aWYgKGF6ICYmICghYXouZ2V0Q29udGV4dCB8fCAhYXouZ2V0Q29udGV4dChcIjJkXCIpLmZpbGxUZXh0KSkge1xuXHRcdFx0YXkgPSBvLmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG5cdFx0XHRmb3IgKGF2ID0gMDsgYXYgPCBheC5sZW5ndGg7ICsrYXYpIHtcblx0XHRcdFx0YXlbYXhbYXZdXSA9IGF6W2F4W2F2XV1cblx0XHRcdH1cblx0XHRcdGF6LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGF5LCBheik7XG5cdFx0XHRhei5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGF6KTtcblx0XHRcdHRocm93IDBcblx0XHR9XG5cdFx0Zm9yIChhdiBpbiB4Lm9wdGlvbnMpIHtcblx0XHRcdHRoaXNbYXZdID0gYXcgJiYgYWooYXdbYXZdKSA/IGF3W2F2XSA6IChhaih4W2F2XSkgPyB4W2F2XSA6IHgub3B0aW9uc1thdl0pXG5cdFx0fVxuXHRcdHRoaXMuY2FudmFzID0gYXo7XG5cdFx0dGhpcy5jdHh0ID0gYXouZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHRoaXMuejEgPSAyNTAgLyB0aGlzLmRlcHRoO1xuXHRcdHRoaXMuejIgPSB0aGlzLnoxIC8gdGhpcy56b29tO1xuXHRcdHRoaXMucmFkaXVzID0gYXQoYXouaGVpZ2h0LCBhei53aWR0aCkgKiAwLjAwNzU7XG5cdFx0dGhpcy5tYXhfd2VpZ2h0ID0gMDtcblx0XHR0aGlzLm1pbl93ZWlnaHQgPSAyMDA7XG5cdFx0dGhpcy50ZXh0Rm9udCA9IHRoaXMudGV4dEZvbnQgJiYgeSh0aGlzLnRleHRGb250KTtcblx0XHR0aGlzLnRleHRIZWlnaHQgKj0gMTtcblx0XHR0aGlzLnB1bHNhdGVUbyA9IGIodGhpcy5wdWxzYXRlVG8sIDAsIDEpO1xuXHRcdHRoaXMubWluQnJpZ2h0bmVzcyA9IGIodGhpcy5taW5CcmlnaHRuZXNzLCAwLCAxKTtcblx0XHR0aGlzLm1heEJyaWdodG5lc3MgPSBiKHRoaXMubWF4QnJpZ2h0bmVzcywgdGhpcy5taW5CcmlnaHRuZXNzLCAxKTtcblx0XHR0aGlzLmN0eHQudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcblx0XHR0aGlzLmx4ID0gKHRoaXMubG9jayArIFwiXCIpLmluZGV4T2YoXCJ4XCIpICsgMTtcblx0XHR0aGlzLmx5ID0gKHRoaXMubG9jayArIFwiXCIpLmluZGV4T2YoXCJ5XCIpICsgMTtcblx0XHR0aGlzLmZyb3plbiA9IHRoaXMuZHggPSB0aGlzLmR5ID0gdGhpcy5maXhlZEFuaW0gPSB0aGlzLnRvdWNoZWQgPSAwO1xuXHRcdHRoaXMuZml4ZWRBbHBoYSA9IDE7XG5cdFx0dGhpcy5zb3VyY2UgPSBqIHx8IGFBO1xuXHRcdHRoaXMudHJhbnNmb3JtID0gay5JZGVudGl0eSgpO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aW1lID0gVCgpO1xuXHRcdHRoaXMuQW5pbWF0ZSA9IHRoaXMuZHJhZ0NvbnRyb2wgPyB0aGlzLkFuaW1hdGVEcmFnIDogdGhpcy5BbmltYXRlUG9zaXRpb247XG5cdFx0dGhpcy5hbmltVGltaW5nID0gKHR5cGVvZiB4W3RoaXMuYW5pbVRpbWluZ10gPT0gXCJmdW5jdGlvblwiID8geFt0aGlzLmFuaW1UaW1pbmddIDogeC5TbW9vdGgpO1xuXHRcdGlmICh0aGlzLnNoYWRvd0JsdXIgfHwgdGhpcy5zaGFkb3dPZmZzZXRbMF0gfHwgdGhpcy5zaGFkb3dPZmZzZXRbMV0pIHtcblx0XHRcdHRoaXMuY3R4dC5zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93O1xuXHRcdFx0dGhpcy5zaGFkb3cgPSB0aGlzLmN0eHQuc2hhZG93Q29sb3I7XG5cdFx0XHR0aGlzLnNoYWRvd0FscGhhID0gRCgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlbGV0ZSB0aGlzLnNoYWRvd1xuXHRcdH1cblx0XHR0aGlzLkxvYWQoKTtcblx0XHRpZiAoaiAmJiB0aGlzLmhpZGVUYWdzKSB7XG5cdFx0XHQoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0aWYgKHgubG9hZGVkKSB7XG5cdFx0XHRcdFx0aS5IaWRlVGFncygpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0RyhcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aS5IaWRlVGFncygpXG5cdFx0XHRcdFx0fSwgd2luZG93KVxuXHRcdFx0XHR9XG5cdFx0XHR9KSh0aGlzKVxuXHRcdH1cblx0XHR0aGlzLnlhdyA9IHRoaXMuaW5pdGlhbCA/IHRoaXMuaW5pdGlhbFswXSAqIHRoaXMubWF4U3BlZWQgOiAwO1xuXHRcdHRoaXMucGl0Y2ggPSB0aGlzLmluaXRpYWwgPyB0aGlzLmluaXRpYWxbMV0gKiB0aGlzLm1heFNwZWVkIDogMDtcblx0XHRpZiAodGhpcy50b29sdGlwKSB7XG5cdFx0XHRpZiAodGhpcy50b29sdGlwID09IFwibmF0aXZlXCIpIHtcblx0XHRcdFx0dGhpcy5Ub29sdGlwID0gdGhpcy5Ub29sdGlwTmF0aXZlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLlRvb2x0aXAgPSB0aGlzLlRvb2x0aXBEaXY7XG5cdFx0XHRcdGlmICghdGhpcy50dGRpdikge1xuXHRcdFx0XHRcdHRoaXMudHRkaXYgPSBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0dGhpcy50dGRpdi5jbGFzc05hbWUgPSB0aGlzLnRvb2x0aXBDbGFzcztcblx0XHRcdFx0XHR0aGlzLnR0ZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdFx0XHRcdHRoaXMudHRkaXYuc3R5bGUuekluZGV4ID0gYXouc3R5bGUuekluZGV4ICsgMTtcblx0XHRcdFx0XHRHKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0XHRpLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcblx0XHRcdFx0XHR9LCB0aGlzLnR0ZGl2KTtcblx0XHRcdFx0XHRvLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50dGRpdilcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLlRvb2x0aXAgPSB0aGlzLlRvb2x0aXBOb25lXG5cdFx0fVxuXHRcdGlmICghdGhpcy5ub01vdXNlICYmICFjW2FBXSkge1xuXHRcdFx0RyhcIm1vdXNlbW92ZVwiLCBhZywgYXopO1xuXHRcdFx0RyhcIm1vdXNlb3V0XCIsIG0sIGF6KTtcblx0XHRcdEcoXCJtb3VzZXVwXCIsIGcsIGF6KTtcblx0XHRcdEcoXCJ0b3VjaHN0YXJ0XCIsIEosIGF6KTtcblx0XHRcdEcoXCJ0b3VjaGVuZFwiLCBwLCBheik7XG5cdFx0XHRHKFwidG91Y2hjYW5jZWxcIiwgcCwgYXopO1xuXHRcdFx0RyhcInRvdWNobW92ZVwiLCBhYiwgYXopO1xuXHRcdFx0aWYgKHRoaXMuZHJhZ0NvbnRyb2wpIHtcblx0XHRcdFx0RyhcIm1vdXNlZG93blwiLCBaLCBheik7XG5cdFx0XHRcdEcoXCJzZWxlY3RzdGFydFwiLCBZLCBheilcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLndoZWVsWm9vbSkge1xuXHRcdFx0XHRHKFwibW91c2V3aGVlbFwiLCBhcSwgYXopO1xuXHRcdFx0XHRHKFwiRE9NTW91c2VTY3JvbGxcIiwgYXEsIGF6KVxuXHRcdFx0fVxuXHRcdFx0Y1thQV0gPSAxXG5cdFx0fVxuXHRcdHguc3RhcnRlZCB8fCAoeC5zdGFydGVkID0gc2V0VGltZW91dCh0LCB0aGlzLmludGVydmFsKSlcblx0fVxuXHRkID0geC5wcm90b3R5cGU7XG5cdGQuU291cmNlRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKG8ucXVlcnlTZWxlY3RvckFsbCkge1xuXHRcdFx0cmV0dXJuIG8ucXVlcnlTZWxlY3RvckFsbChcIiNcIiArIHRoaXMuc291cmNlKVxuXHRcdH1cblx0XHRyZXR1cm4gW28uZ2V0RWxlbWVudEJ5SWQodGhpcy5zb3VyY2UpXVxuXHR9O1xuXHRkLkhpZGVUYWdzID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBhdiA9IHRoaXMuU291cmNlRWxlbWVudHMoKSxcblx0XHRqO1xuXHRcdGZvciAoaiA9IDA7IGogPCBhdi5sZW5ndGg7ICsraikge1xuXHRcdFx0YXZbal0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5cdFx0fVxuXHR9O1xuXHRkLkdldFRhZ3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGF6ID0gdGhpcy5Tb3VyY2VFbGVtZW50cygpLFxuXHRcdGF5LFxuXHRcdGF2ID0gW10sXG5cdFx0YXgsXG5cdFx0YXc7XG5cdFx0Zm9yIChheCA9IDA7IGF4IDwgYXoubGVuZ3RoOyArK2F4KSB7XG5cdFx0XHRheSA9IGF6W2F4XS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIik7XG5cdFx0XHRmb3IgKGF3ID0gMDsgYXcgPCBheS5sZW5ndGg7ICsrYXcpIHtcblx0XHRcdFx0YXYucHVzaChheVthd10pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBhdlxuXHR9O1xuXHRkLkNyZWF0ZVRhZyA9IGZ1bmN0aW9uIChhQSwgYXopIHtcblx0XHR2YXIgaiA9IGFBLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpLFxuXHRcdGF4LFxuXHRcdGF3LFxuXHRcdGF5LFxuXHRcdGF2O1xuXHRcdGF6ID0gYXogfHwgWzAsIDAsIDBdO1xuXHRcdGlmIChqLmxlbmd0aCkge1xuXHRcdFx0YXggPSBuZXcgSW1hZ2U7XG5cdFx0XHRheC5zcmMgPSBqWzBdLnNyYztcblx0XHRcdGF3ID0gbmV3IFModGhpcywgYXgsIGFBLCBheiwgMCwgMCk7XG5cdFx0XHRhbChheCwgalswXSwgYXcsIHRoaXMpO1xuXHRcdFx0cmV0dXJuIGF3XG5cdFx0fVxuXHRcdGF5ID0gbmV3IFAoYUEpO1xuXHRcdGF3ID0gYXkuTGluZXMoKTtcblx0XHRhdiA9IHRoaXMudGV4dEZvbnQgfHwgeShhaShhQSwgXCJmb250LWZhbWlseVwiKSk7XG5cdFx0aWYgKHRoaXMuc3BsaXRXaWR0aCkge1xuXHRcdFx0YXcgPSBheS5TcGxpdFdpZHRoKHRoaXMuc3BsaXRXaWR0aCwgdGhpcy5jdHh0LCBhdiwgdGhpcy50ZXh0SGVpZ2h0KVxuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFModGhpcywgYXcsIGFBLCBheiwgMiwgdGhpcy50ZXh0SGVpZ2h0ICsgMiwgdGhpcy50ZXh0Q29sb3VyIHx8IGFpKGFBLCBcImNvbG9yXCIpLCBhdiwgYXkub3JpZ2luYWwpXG5cdH07XG5cdGQuVXBkYXRlVGFnID0gZnVuY3Rpb24gKGF2LCBpKSB7XG5cdFx0dmFyIGF3ID0gdGhpcy50ZXh0Q29sb3VyIHx8IGFpKGksIFwiY29sb3JcIiksXG5cdFx0aiA9IHRoaXMudGV4dEZvbnQgfHwgeShhaShpLCBcImZvbnQtZmFtaWx5XCIpKTtcblx0XHRhdi50aXRsZSA9IGkudGl0bGU7XG5cdFx0aWYgKGF2LmNvbG91ciAhPSBhdyB8fCBhdi50ZXh0Rm9udCAhPSBqKSB7XG5cdFx0XHRhdi5TZXRGb250KGosIGF3KVxuXHRcdH1cblx0fTtcblx0ZC5XZWlnaHQgPSBmdW5jdGlvbiAoYXcpIHtcblx0XHR2YXIgYXYgPSBhdy5sZW5ndGgsXG5cdFx0aixcblx0XHRheCxcblx0XHRheSA9IFtdO1xuXHRcdGZvciAoYXggPSAwOyBheCA8IGF2OyArK2F4KSB7XG5cdFx0XHRqID0gRih0aGlzLCBhd1theF0uYSk7XG5cdFx0XHRpZiAoaiA+IHRoaXMubWF4X3dlaWdodCkge1xuXHRcdFx0XHR0aGlzLm1heF93ZWlnaHQgPSBqXG5cdFx0XHR9XG5cdFx0XHRpZiAoaiA8IHRoaXMubWluX3dlaWdodCkge1xuXHRcdFx0XHR0aGlzLm1pbl93ZWlnaHQgPSBqXG5cdFx0XHR9XG5cdFx0XHRheS5wdXNoKGopXG5cdFx0fVxuXHRcdGlmICh0aGlzLm1heF93ZWlnaHQgPiB0aGlzLm1pbl93ZWlnaHQpIHtcblx0XHRcdGZvciAoYXggPSAwOyBheCA8IGF2OyArK2F4KSB7XG5cdFx0XHRcdGF3W2F4XS5TZXRXZWlnaHQoYXlbYXhdKVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0ZC5Mb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBhRSA9IHRoaXMuR2V0VGFncygpLFxuXHRcdGFBID0gW10sXG5cdFx0YUQsXG5cdFx0YXosXG5cdFx0YXcsXG5cdFx0YXYsXG5cdFx0aixcblx0XHRheCxcblx0XHRhQyxcblx0XHRheSA9IFtdLFxuXHRcdGFCID0ge1xuXHRcdFx0c3BoZXJlIDogcyxcblx0XHRcdHZjeWxpbmRlciA6IEUsXG5cdFx0XHRoY3lsaW5kZXIgOiBXLFxuXHRcdFx0dnJpbmcgOiBDLFxuXHRcdFx0aHJpbmcgOiBOXG5cdFx0fTtcblx0XHRpZiAoYUUubGVuZ3RoKSB7XG5cdFx0XHRheS5sZW5ndGggPSBhRS5sZW5ndGg7XG5cdFx0XHRmb3IgKGFDID0gMDsgYUMgPCBhRS5sZW5ndGg7ICsrYUMpIHtcblx0XHRcdFx0YXlbYUNdID0gYUNcblx0XHRcdH1cblx0XHRcdHRoaXMuc2h1ZmZsZVRhZ3MgJiYgYWMoYXkpO1xuXHRcdFx0YXcgPSAxMDAgKiB0aGlzLnJhZGl1c1g7XG5cdFx0XHRhdiA9IDEwMCAqIHRoaXMucmFkaXVzWTtcblx0XHRcdGogPSAxMDAgKiB0aGlzLnJhZGl1c1o7XG5cdFx0XHR0aGlzLm1heF9yYWRpdXMgPSBJKGF3LCBJKGF2LCBqKSk7XG5cdFx0XHRpZiAodGhpcy5zaGFwZUFyZ3MpIHtcblx0XHRcdFx0dGhpcy5zaGFwZUFyZ3NbMF0gPSBhRS5sZW5ndGhcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF6ID0gdGhpcy5zaGFwZS50b1N0cmluZygpLnNwbGl0KC9bKCksXS8pO1xuXHRcdFx0XHRhRCA9IGF6LnNoaWZ0KCk7XG5cdFx0XHRcdHRoaXMuc2hhcGUgPSBhQlthRF0gfHwgYUIuc3BoZXJlO1xuXHRcdFx0XHR0aGlzLnNoYXBlQXJncyA9IFthRS5sZW5ndGgsIGF3LCBhdiwgal0uY29uY2F0KGF6KVxuXHRcdFx0fVxuXHRcdFx0YXggPSB0aGlzLnNoYXBlLmFwcGx5KHRoaXMsIHRoaXMuc2hhcGVBcmdzKTtcblx0XHRcdHRoaXMubGlzdExlbmd0aCA9IGFFLmxlbmd0aDtcblx0XHRcdGZvciAoYUMgPSAwOyBhQyA8IGFFLmxlbmd0aDsgKythQykge1xuXHRcdFx0XHRhQS5wdXNoKHRoaXMuQ3JlYXRlVGFnKGFFW2F5W2FDXV0sIGF4W2FDXSkpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndlaWdodCAmJiB0aGlzLldlaWdodChhQSwgdHJ1ZSlcblx0XHR9XG5cdFx0dGhpcy50YWdsaXN0ID0gYUFcblx0fTtcblx0ZC5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGFFID0gdGhpcy5HZXRUYWdzKCksXG5cdFx0YUQgPSBbXSxcblx0XHRheSA9IHRoaXMudGFnbGlzdCxcblx0XHRhRixcblx0XHRhQyA9IFtdLFxuXHRcdGFBID0gW10sXG5cdFx0YXcsXG5cdFx0YUIsXG5cdFx0YXYsXG5cdFx0YXosXG5cdFx0YXg7XG5cdFx0aWYgKCF0aGlzLnNoYXBlQXJncykge1xuXHRcdFx0cmV0dXJuIHRoaXMuTG9hZCgpXG5cdFx0fVxuXHRcdGlmIChhRS5sZW5ndGgpIHtcblx0XHRcdGF2ID0gdGhpcy5saXN0TGVuZ3RoID0gYUUubGVuZ3RoO1xuXHRcdFx0YUIgPSBheS5sZW5ndGg7XG5cdFx0XHRmb3IgKGF6ID0gMDsgYXogPCBhQjsgKytheikge1xuXHRcdFx0XHRhRC5wdXNoKGF5W2F6XSk7XG5cdFx0XHRcdGFBLnB1c2goYXopXG5cdFx0XHR9XG5cdFx0XHRmb3IgKGF6ID0gMDsgYXogPCBhdjsgKytheikge1xuXHRcdFx0XHRmb3IgKGF4ID0gMCwgYUYgPSAwOyBheCA8IGFCOyArK2F4KSB7XG5cdFx0XHRcdFx0aWYgKGF5W2F4XS5FcXVhbFRvKGFFW2F6XSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuVXBkYXRlVGFnKGFEW2F4XSwgYUVbYXpdKTtcblx0XHRcdFx0XHRcdGFGID0gYUFbYXhdID0gLTFcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFhRikge1xuXHRcdFx0XHRcdGFDLnB1c2goYXopXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAoYXogPSAwLCBheCA9IDA7IGF6IDwgYUI7ICsrYXopIHtcblx0XHRcdFx0aWYgKGFBW2F4XSA9PSAtMSkge1xuXHRcdFx0XHRcdGFBLnNwbGljZShheCwgMSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQrK2F4XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChhQS5sZW5ndGgpIHtcblx0XHRcdFx0YWMoYUEpO1xuXHRcdFx0XHR3aGlsZSAoYUEubGVuZ3RoICYmIGFDLmxlbmd0aCkge1xuXHRcdFx0XHRcdGF6ID0gYUEuc2hpZnQoKTtcblx0XHRcdFx0XHRheCA9IGFDLnNoaWZ0KCk7XG5cdFx0XHRcdFx0YURbYXpdID0gdGhpcy5DcmVhdGVUYWcoYUVbYXhdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGFBLnNvcnQoZnVuY3Rpb24gKGosIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gaiAtIGlcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHdoaWxlIChhQS5sZW5ndGgpIHtcblx0XHRcdFx0XHRhRC5zcGxpY2UoYUEucG9wKCksIDEpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGF4ID0gYUQubGVuZ3RoIC8gKGFDLmxlbmd0aCArIDEpO1xuXHRcdFx0YXogPSAwO1xuXHRcdFx0d2hpbGUgKGFDLmxlbmd0aCkge1xuXHRcdFx0XHRhRC5zcGxpY2UoVigrK2F6ICogYXgpLCAwLCB0aGlzLkNyZWF0ZVRhZyhhRVthQy5zaGlmdCgpXSkpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNoYXBlQXJnc1swXSA9IGF2ID0gYUQubGVuZ3RoO1xuXHRcdFx0YXcgPSB0aGlzLnNoYXBlLmFwcGx5KHRoaXMsIHRoaXMuc2hhcGVBcmdzKTtcblx0XHRcdGZvciAoYXogPSAwOyBheiA8IGF2OyArK2F6KSB7XG5cdFx0XHRcdGFEW2F6XS5wb3NpdGlvbiA9IG5ldyBVKGF3W2F6XVswXSwgYXdbYXpdWzFdLCBhd1thel1bMl0pXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndlaWdodCAmJiB0aGlzLldlaWdodChhRClcblx0XHR9XG5cdFx0dGhpcy50YWdsaXN0ID0gYURcblx0fTtcblx0ZC5TZXRTaGFkb3cgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGkuc2hhZG93Qmx1ciA9IHRoaXMuc2hhZG93Qmx1cjtcblx0XHRpLnNoYWRvd09mZnNldFggPSB0aGlzLnNoYWRvd09mZnNldFswXTtcblx0XHRpLnNoYWRvd09mZnNldFkgPSB0aGlzLnNoYWRvd09mZnNldFsxXVxuXHR9O1xuXHRkLkRyYXcgPSBmdW5jdGlvbiAoYUYpIHtcblx0XHRpZiAodGhpcy5wYXVzZWQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHR2YXIgYXogPSB0aGlzLmNhbnZhcyxcblx0XHRheCA9IGF6LndpZHRoLFxuXHRcdGFFID0gYXouaGVpZ2h0LFxuXHRcdGFIID0gMCxcblx0XHRhdyA9IChhRiAtIHRoaXMudGltZSkgKiB0aGlzLmludGVydmFsIC8gMTAwMCxcblx0XHRhRCA9IGF4IC8gMiArIHRoaXMub2Zmc2V0WCxcblx0XHRhQyA9IGFFIC8gMiArIHRoaXMub2Zmc2V0WSxcblx0XHRhTCA9IHRoaXMuY3R4dCxcblx0XHRhQixcblx0XHRhTSxcblx0XHRhSixcblx0XHRhdiA9IC0xLFxuXHRcdGF5ID0gdGhpcy50YWdsaXN0LFxuXHRcdGFJID0gYXkubGVuZ3RoLFxuXHRcdGogPSB0aGlzLmZyb250U2VsZWN0LFxuXHRcdGFHID0gKHRoaXMuY2VudHJlRnVuYyA9PSBZKSxcblx0XHRhQTtcblx0XHR0aGlzLnRpbWUgPSBhRjtcblx0XHRpZiAodGhpcy5mcm96ZW4gJiYgdGhpcy5kcmF3bikge1xuXHRcdFx0cmV0dXJuIHRoaXMuQW5pbWF0ZShheCwgYUUsIGF3KVxuXHRcdH1cblx0XHRhQSA9IHRoaXMuQW5pbWF0ZUZpeGVkKCk7XG5cdFx0YUwuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuXHRcdHRoaXMuYWN0aXZlID0gbnVsbDtcblx0XHRmb3IgKGFKID0gMDsgYUogPCBhSTsgKythSikge1xuXHRcdFx0YXlbYUpdLkNhbGModGhpcy50cmFuc2Zvcm0sIHRoaXMuZml4ZWRBbHBoYSlcblx0XHR9XG5cdFx0YXkgPSBuKGF5LCBmdW5jdGlvbiAoYU4sIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkueiAtIGFOLnpcblx0XHRcdH0pO1xuXHRcdGZvciAoYUogPSAwOyBhSiA8IGFJOyArK2FKKSB7XG5cdFx0XHRhTSA9IHRoaXMubXggPj0gMCAmJiB0aGlzLm15ID49IDAgJiYgdGhpcy50YWdsaXN0W2FKXS5DaGVja0FjdGl2ZShhTCwgYUQsIGFDKTtcblx0XHRcdGlmIChhTSAmJiBhTS5zYyA+IGFIICYmICghaiB8fCBhTS56IDw9IDApKSB7XG5cdFx0XHRcdGFCID0gYU07XG5cdFx0XHRcdGF2ID0gYUo7XG5cdFx0XHRcdGFCLnRhZyA9IHRoaXMudGFnbGlzdFthSl07XG5cdFx0XHRcdGFIID0gYU0uc2Ncblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5hY3RpdmUgPSBhQjtcblx0XHR0aGlzLnR4dE9wdCB8fCAodGhpcy5zaGFkb3cgJiYgdGhpcy5TZXRTaGFkb3coYUwpKTtcblx0XHRhTC5jbGVhclJlY3QoMCwgMCwgYXgsIGFFKTtcblx0XHRmb3IgKGFKID0gMDsgYUogPCBhSTsgKythSikge1xuXHRcdFx0aWYgKCFhRyAmJiBheVthSl0ueiA8PSAwKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jZW50cmVGdW5jKGFMLCBheCwgYUUsIGFELCBhQylcblx0XHRcdFx0fSBjYXRjaCAoYUspIHtcblx0XHRcdFx0XHRhbGVydChhSyk7XG5cdFx0XHRcdFx0dGhpcy5jZW50cmVGdW5jID0gWVxuXHRcdFx0XHR9XG5cdFx0XHRcdGFHID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0aWYgKCEoYUIgJiYgYUIudGFnID09IGF5W2FKXSAmJiBhQi5QcmVEcmF3KGFMLCBheVthSl0sIGFELCBhQykpKSB7XG5cdFx0XHRcdGF5W2FKXS5EcmF3KGFMLCBhRCwgYUMpXG5cdFx0XHR9XG5cdFx0XHRhQiAmJiBhQi50YWcgPT0gYXlbYUpdICYmIGFCLlBvc3REcmF3KGFMKVxuXHRcdH1cblx0XHRpZiAodGhpcy5mcmVlemVBY3RpdmUgJiYgYUIpIHtcblx0XHRcdHRoaXMuRnJlZXplKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5VbkZyZWV6ZSgpO1xuXHRcdFx0dGhpcy5kcmF3biA9IChhSSA9PSB0aGlzLmxpc3RMZW5ndGgpXG5cdFx0fVxuXHRcdGlmICh0aGlzLmZpeGVkQ2FsbGJhY2spIHtcblx0XHRcdHRoaXMuZml4ZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZpeGVkQ2FsbGJhY2tUYWcpO1xuXHRcdFx0dGhpcy5maXhlZENhbGxiYWNrID0gbnVsbFxuXHRcdH1cblx0XHRhQSB8fCB0aGlzLkFuaW1hdGUoYXgsIGFFLCBhdyk7XG5cdFx0YUIgJiYgYUIuTGFzdERyYXcoYUwpO1xuXHRcdGF6LnN0eWxlLmN1cnNvciA9IGFCID8gdGhpcy5hY3RpdmVDdXJzb3IgOiBcIlwiO1xuXHRcdHRoaXMuVG9vbHRpcChhQiwgdGhpcy50YWdsaXN0W2F2XSlcblx0fTtcblx0ZC5Ub29sdGlwTm9uZSA9IGZ1bmN0aW9uICgpIHt9O1xuXHRkLlRvb2x0aXBOYXRpdmUgPSBmdW5jdGlvbiAoaiwgaSkge1xuXHRcdHRoaXMuY2FudmFzLnRpdGxlID0gaiAmJiBpLnRpdGxlID8gaS50aXRsZSA6IFwiXCJcblx0fTtcblx0ZC5Ub29sdGlwRGl2ID0gZnVuY3Rpb24gKGF4LCBqKSB7XG5cdFx0dmFyIGkgPSB0aGlzLFxuXHRcdGF3ID0gaS50dGRpdi5zdHlsZSxcblx0XHRheSA9IGkuY2FudmFzLmlkLFxuXHRcdGF2ID0gXCJub25lXCI7XG5cdFx0aWYgKGF4ICYmIGoudGl0bGUpIHtcblx0XHRcdGlmIChqLnRpdGxlICE9IGkudHRkaXYuaW5uZXJIVE1MKSB7XG5cdFx0XHRcdGF3LmRpc3BsYXkgPSBhdlxuXHRcdFx0fVxuXHRcdFx0aS50dGRpdi5pbm5lckhUTUwgPSBqLnRpdGxlO1xuXHRcdFx0ai50aXRsZSA9IGkudHRkaXYuaW5uZXJIVE1MO1xuXHRcdFx0aWYgKGF3LmRpc3BsYXkgPT0gYXYgJiYgIWkudHR0aW1lcikge1xuXHRcdFx0XHRpLnR0dGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHZhciBheiA9IHIoYXkpO1xuXHRcdFx0XHRcdFx0YXcuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHRcdGF3LmxlZnQgPSBhei54ICsgaS5teCArIFwicHhcIjtcblx0XHRcdFx0XHRcdGF3LnRvcCA9IGF6LnkgKyBpLm15ICsgMjQgKyBcInB4XCI7XG5cdFx0XHRcdFx0XHRpLnR0dGltZXIgPSBudWxsXG5cdFx0XHRcdFx0fSwgaS50b29sdGlwRGVsYXkpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF3LmRpc3BsYXkgPSBhdlxuXHRcdH1cblx0fTtcblx0ZC5UcmFuc2Zvcm0gPSBmdW5jdGlvbiAoYXksIGksIGFBKSB7XG5cdFx0aWYgKGkgfHwgYUEpIHtcblx0XHRcdHZhciBqID0gdyhpKSxcblx0XHRcdGF6ID0gbChpKSxcblx0XHRcdGFCID0gdyhhQSksXG5cdFx0XHRheCA9IGwoYUEpLFxuXHRcdFx0YXYgPSBuZXcgayhbYXgsIDAsIGFCLCAwLCAxLCAwLCAtYUIsIDAsIGF4XSksXG5cdFx0XHRhdyA9IG5ldyBrKFsxLCAwLCAwLCAwLCBheiwgLWosIDAsIGosIGF6XSk7XG5cdFx0XHRheS50cmFuc2Zvcm0gPSBheS50cmFuc2Zvcm0ubXVsKGF2Lm11bChhdykpXG5cdFx0fVxuXHR9O1xuXHRkLkFuaW1hdGVGaXhlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgYXYsXG5cdFx0aixcblx0XHRheCxcblx0XHRpLFxuXHRcdGF3O1xuXHRcdGlmICh0aGlzLmZhZGVJbikge1xuXHRcdFx0aiA9IFQoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXHRcdFx0aWYgKGogPj0gdGhpcy5mYWRlSW4pIHtcblx0XHRcdFx0dGhpcy5mYWRlSW4gPSAwO1xuXHRcdFx0XHR0aGlzLmZpeGVkQWxwaGEgPSAxXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmZpeGVkQWxwaGEgPSBqIC8gdGhpcy5mYWRlSW5cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMuZml4ZWRBbmltKSB7XG5cdFx0XHRpZiAoIXRoaXMuZml4ZWRBbmltLnRyYW5zZm9ybSkge1xuXHRcdFx0XHR0aGlzLmZpeGVkQW5pbS50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVxuXHRcdFx0fVxuXHRcdFx0YXYgPSB0aGlzLmZpeGVkQW5pbSxcblx0XHRcdGogPSBUKCkgLSBhdi50MCxcblx0XHRcdGF4ID0gYXYuYW5nbGUsXG5cdFx0XHRpLFxuXHRcdFx0YXcgPSB0aGlzLmFuaW1UaW1pbmcoYXYudCwgaik7XG5cdFx0XHR0aGlzLnRyYW5zZm9ybSA9IGF2LnRyYW5zZm9ybTtcblx0XHRcdGlmIChqID49IGF2LnQpIHtcblx0XHRcdFx0dGhpcy5maXhlZENhbGxiYWNrVGFnID0gYXYudGFnO1xuXHRcdFx0XHR0aGlzLmZpeGVkQ2FsbGJhY2sgPSBhdi5jYjtcblx0XHRcdFx0dGhpcy5maXhlZEFuaW0gPSB0aGlzLnlhdyA9IHRoaXMucGl0Y2ggPSAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRheCAqPSBhd1xuXHRcdFx0fVxuXHRcdFx0aSA9IGsuUm90YXRpb24oYXgsIGF2LmF4aXMpO1xuXHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5tdWwoaSk7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZml4ZWRBbmltICE9IDApXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9O1xuXHRkLkFuaW1hdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChhdiwgYXksIGF3KSB7XG5cdFx0dmFyIGogPSB0aGlzLFxuXHRcdGkgPSBqLm14LFxuXHRcdGFBID0gai5teSxcblx0XHRheCxcblx0XHRhejtcblx0XHRpZiAoIWouZnJvemVuICYmIGkgPj0gMCAmJiBhQSA+PSAwICYmIGkgPCBhdiAmJiBhQSA8IGF5KSB7XG5cdFx0XHRheCA9IGoubWF4U3BlZWQsXG5cdFx0XHRheiA9IGoucmV2ZXJzZSA/IC0xIDogMTtcblx0XHRcdGoubHggfHwgKGoueWF3ID0gYXogKiBhdyAqICgoYXggKiAyICogaSAvIGF2KSAtIGF4KSk7XG5cdFx0XHRqLmx5IHx8IChqLnBpdGNoID0gYXogKiBhdyAqICAtICgoYXggKiAyICogYUEgLyBheSkgLSBheCkpO1xuXHRcdFx0ai5pbml0aWFsID0gbnVsbFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWouaW5pdGlhbCkge1xuXHRcdFx0XHRpZiAoai5mcm96ZW4gJiYgIWouZnJlZXplRGVjZWwpIHtcblx0XHRcdFx0XHRqLnlhdyA9IGoucGl0Y2ggPSAwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ai5EZWNlbChqKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuVHJhbnNmb3JtKGosIGoucGl0Y2gsIGoueWF3KVxuXHR9O1xuXHRkLkFuaW1hdGVEcmFnID0gZnVuY3Rpb24gKGosIGF4LCBhdykge1xuXHRcdHZhciBpID0gdGhpcyxcblx0XHRhdiA9IDEwMCAqIGF3ICogaS5tYXhTcGVlZCAvIGkubWF4X3JhZGl1cyAvIGkuem9vbTtcblx0XHRpZiAoaS5keCB8fCBpLmR5KSB7XG5cdFx0XHRpLmx4IHx8IChpLnlhdyA9IGkuZHggKiBhdiAvIGkuc3RyZXRjaFgpO1xuXHRcdFx0aS5seSB8fCAoaS5waXRjaCA9IGkuZHkgKiAtYXYgLyBpLnN0cmV0Y2hZKTtcblx0XHRcdGkuZHggPSBpLmR5ID0gMDtcblx0XHRcdGkuaW5pdGlhbCA9IG51bGxcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFpLmluaXRpYWwpIHtcblx0XHRcdFx0aS5EZWNlbChpKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLlRyYW5zZm9ybShpLCBpLnBpdGNoLCBpLnlhdylcblx0fTtcblx0ZC5GcmVlemUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF0aGlzLmZyb3plbikge1xuXHRcdFx0dGhpcy5wcmVGcmVlemUgPSBbdGhpcy55YXcsIHRoaXMucGl0Y2hdO1xuXHRcdFx0dGhpcy5mcm96ZW4gPSAxO1xuXHRcdFx0dGhpcy5kcmF3biA9IDBcblx0XHR9XG5cdH07XG5cdGQuVW5GcmVlemUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMuZnJvemVuKSB7XG5cdFx0XHR0aGlzLnlhdyA9IHRoaXMucHJlRnJlZXplWzBdO1xuXHRcdFx0dGhpcy5waXRjaCA9IHRoaXMucHJlRnJlZXplWzFdO1xuXHRcdFx0dGhpcy5mcm96ZW4gPSAwXG5cdFx0fVxuXHR9O1xuXHRkLkRlY2VsID0gZnVuY3Rpb24gKGkpIHtcblx0XHR2YXIgYXYgPSBpLm1pblNwZWVkLFxuXHRcdGF3ID0gYWEoaS55YXcpLFxuXHRcdGogPSBhYShpLnBpdGNoKTtcblx0XHRpZiAoIWkubHggJiYgYXcgPiBhdikge1xuXHRcdFx0aS55YXcgPSBhdyA+IGkuejAgPyBpLnlhdyAqIGkuZGVjZWwgOiAwXG5cdFx0fVxuXHRcdGlmICghaS5seSAmJiBqID4gYXYpIHtcblx0XHRcdGkucGl0Y2ggPSBqID4gaS56MCA/IGkucGl0Y2ggKiBpLmRlY2VsIDogMFxuXHRcdH1cblx0fTtcblx0ZC5ab29tID0gZnVuY3Rpb24gKGkpIHtcblx0XHR0aGlzLnoyID0gdGhpcy56MSAqICgxIC8gaSk7XG5cdFx0dGhpcy5kcmF3biA9IDBcblx0fTtcblx0ZC5DbGlja2VkID0gZnVuY3Rpb24gKGF2KSB7XG5cdFx0dmFyIGkgPSB0aGlzLmFjdGl2ZTtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGkgJiYgaS50YWcpIHtcblx0XHRcdFx0aWYgKHRoaXMuY2xpY2tUb0Zyb250ID09PSBmYWxzZSB8fCB0aGlzLmNsaWNrVG9Gcm9udCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGkudGFnLkNsaWNrZWQoYXYpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5UYWdUb0Zyb250KGkudGFnLCB0aGlzLmNsaWNrVG9Gcm9udCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aS50YWcuQ2xpY2tlZChhdilcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoaikge31cblxuXHR9O1xuXHRkLldoZWVsID0gZnVuY3Rpb24gKGopIHtcblx0XHR2YXIgYXYgPSB0aGlzLnpvb20gKyB0aGlzLnpvb21TdGVwICogKGogPyAxIDogLTEpO1xuXHRcdHRoaXMuem9vbSA9IGF0KHRoaXMuem9vbU1heCwgSSh0aGlzLnpvb21NaW4sIGF2KSk7XG5cdFx0dGhpcy5ab29tKHRoaXMuem9vbSlcblx0fTtcblx0ZC5CZWdpbkRyYWcgPSBmdW5jdGlvbiAoaSkge1xuXHRcdHRoaXMuZG93biA9IE0oaSwgdGhpcy5jYW52YXMpO1xuXHRcdGkuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHRpLnJldHVyblZhbHVlID0gZmFsc2U7XG5cdFx0aS5wcmV2ZW50RGVmYXVsdCAmJiBpLnByZXZlbnREZWZhdWx0KClcblx0fTtcblx0ZC5EcmFnID0gZnVuY3Rpb24gKGF4LCBhdykge1xuXHRcdGlmICh0aGlzLmRyYWdDb250cm9sICYmIHRoaXMuZG93bikge1xuXHRcdFx0dmFyIGF2ID0gdGhpcy5kcmFnVGhyZXNob2xkICogdGhpcy5kcmFnVGhyZXNob2xkLFxuXHRcdFx0aiA9IGF3LnggLSB0aGlzLmRvd24ueCxcblx0XHRcdGkgPSBhdy55IC0gdGhpcy5kb3duLnk7XG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZyB8fCBqICogaiArIGkgKiBpID4gYXYpIHtcblx0XHRcdFx0dGhpcy5keCA9IGo7XG5cdFx0XHRcdHRoaXMuZHkgPSBpO1xuXHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gMTtcblx0XHRcdFx0dGhpcy5kb3duID0gYXdcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGQuRW5kRHJhZyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaSA9IHRoaXMuZHJhZ2dpbmc7XG5cdFx0dGhpcy5kcmFnZ2luZyA9IHRoaXMuZG93biA9IG51bGw7XG5cdFx0cmV0dXJuIGlcblx0fTtcblx0ZC5QYXVzZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnBhdXNlZCA9IHRydWVcblx0fTtcblx0ZC5SZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5wYXVzZWQgPSBmYWxzZVxuXHR9O1xuXHRkLkZpbmRUYWcgPSBmdW5jdGlvbiAoYXYpIHtcblx0XHRpZiAoIWFqKGF2KSkge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0YWooYXYuaW5kZXgpICYmIChhdiA9IGF2LmluZGV4KTtcblx0XHRpZiAoIXYoYXYpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWdsaXN0W2F2XVxuXHRcdH1cblx0XHR2YXIgYXcsXG5cdFx0YXgsXG5cdFx0ajtcblx0XHRpZiAoYWooYXYuaWQpKSB7XG5cdFx0XHRhdyA9IFwiaWRcIixcblx0XHRcdGF4ID0gYXYuaWRcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGFqKGF2LnRleHQpKSB7XG5cdFx0XHRcdGF3ID0gXCJpbm5lclRleHRcIixcblx0XHRcdFx0YXggPSBhdi50ZXh0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaiA9IDA7IGogPCB0aGlzLnRhZ2xpc3QubGVuZ3RoOyArK2opIHtcblx0XHRcdGlmICh0aGlzLnRhZ2xpc3Rbal0uYVthd10gPT0gYXgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFnbGlzdFtqXVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0ZC5Sb3RhdGVUYWcgPSBmdW5jdGlvbiAoYUMsIGF2LCBhQiwgaSwgYXopIHtcblx0XHR2YXIgYUEgPSBhQy54Zm9ybWVkLFxuXHRcdGF4ID0gbmV3IFUoYUEueCwgYUEueSwgYUEueiksXG5cdFx0YXcgPSBLKGFCLCBhdiksXG5cdFx0aiA9IGF4LmFuZ2xlKGF3KSxcblx0XHRheSA9IGF4LmNyb3NzKGF3KS51bml0KCk7XG5cdFx0aWYgKGogPT0gMCkge1xuXHRcdFx0dGhpcy5maXhlZENhbGxiYWNrVGFnID0gYUM7XG5cdFx0XHR0aGlzLmZpeGVkQ2FsbGJhY2sgPSBhelxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpeGVkQW5pbSA9IHtcblx0XHRcdFx0YW5nbGUgOiAtaixcblx0XHRcdFx0YXhpcyA6IGF5LFxuXHRcdFx0XHR0IDogaSxcblx0XHRcdFx0dDAgOiBUKCksXG5cdFx0XHRcdGNiIDogYXosXG5cdFx0XHRcdHRhZyA6IGFDXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRkLlRhZ1RvRnJvbnQgPSBmdW5jdGlvbiAoaSwgaiwgYXYpIHtcblx0XHR0aGlzLlJvdGF0ZVRhZyhpLCAwLCAwLCBqLCBhdilcblx0fTtcblx0eC5TdGFydCA9IGZ1bmN0aW9uIChhdiwgaSwgaikge1xuXHRcdHgudGNbYXZdID0gbmV3IHgoYXYsIGksIGopXG5cdH07XG5cdGZ1bmN0aW9uIGFrKGksIGopIHtcblx0XHR4LnRjW2pdICYmIHgudGNbal1baV0oKVxuXHR9XG5cdHguTGluZWFyID0gZnVuY3Rpb24gKGksIGopIHtcblx0XHRyZXR1cm4gaiAvIGlcblx0fTtcblx0eC5TbW9vdGggPSBmdW5jdGlvbiAoaSwgaikge1xuXHRcdHJldHVybiAwLjUgLSBsKGogKiBNYXRoLlBJIC8gaSkgLyAyXG5cdH07XG5cdHguUGF1c2UgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGFrKFwiUGF1c2VcIiwgaSlcblx0fTtcblx0eC5SZXN1bWUgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGFrKFwiUmVzdW1lXCIsIGkpXG5cdH07XG5cdHguUmVsb2FkID0gZnVuY3Rpb24gKGkpIHtcblx0XHRhayhcIkxvYWRcIiwgaSlcblx0fTtcblx0eC5VcGRhdGUgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGFrKFwiVXBkYXRlXCIsIGkpXG5cdH07XG5cdHguVGFnVG9Gcm9udCA9IGZ1bmN0aW9uIChqLCBpKSB7XG5cdFx0aWYgKCF2KGkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0aS5sYXQgPSBpLmxuZyA9IDA7XG5cdFx0cmV0dXJuIHguUm90YXRlVGFnKGosIGkpXG5cdH07XG5cdHguUm90YXRlVGFnID0gZnVuY3Rpb24gKGF2LCBpKSB7XG5cdFx0aWYgKCF2KGkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0aWYgKHgudGNbYXZdKSB7XG5cdFx0XHRpZiAoaXNOYU4oaS50aW1lKSkge1xuXHRcdFx0XHRpLnRpbWUgPSA1MDBcblx0XHRcdH1cblx0XHRcdHZhciBqID0geC50Y1thdl0uRmluZFRhZyhpKTtcblx0XHRcdGlmIChqKSB7XG5cdFx0XHRcdHgudGNbYXZdLlJvdGF0ZVRhZyhqLCBpLmxhdCwgaS5sbmcsIGkudGltZSwgaS5jYWxsYmFjayk7XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9O1xuXHR4Lk5leHRGcmFtZSA9IGZ1bmN0aW9uIChpKSB7XG5cdFx0dmFyIGogPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdHguTmV4dEZyYW1lID0gaiA/IHguTmV4dEZyYW1lUkFGIDogeC5OZXh0RnJhbWVUaW1lb3V0O1xuXHRcdHguTmV4dEZyYW1lKGkpXG5cdH07XG5cdHguTmV4dEZyYW1lUkFGID0gZnVuY3Rpb24gKCkge1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0KVxuXHR9O1xuXHR4Lk5leHRGcmFtZVRpbWVvdXQgPSBmdW5jdGlvbiAoaSkge1xuXHRcdHNldFRpbWVvdXQodCwgaSlcblx0fTtcblx0eC50YyA9IHt9O1xuXHR4Lm9wdGlvbnMgPSB7XG5cdFx0ejEgOiAyMDAwMCxcblx0XHR6MiA6IDIwMDAwLFxuXHRcdHowIDogMC4wMDAyLFxuXHRcdGZyZWV6ZUFjdGl2ZSA6IGZhbHNlLFxuXHRcdGZyZWV6ZURlY2VsIDogZmFsc2UsXG5cdFx0YWN0aXZlQ3Vyc29yIDogXCJwb2ludGVyXCIsXG5cdFx0cHVsc2F0ZVRvIDogMSxcblx0XHRwdWxzYXRlVGltZSA6IDMsXG5cdFx0cmV2ZXJzZSA6IGZhbHNlLFxuXHRcdC8qZGVwdGggOiAwLjUsKi9cblx0XHRkZXB0aCA6IDAuNCxcblx0XHQvKm1heFNwZWVkIDogMC4wNSwqL1xuXHRcdG1heFNwZWVkIDogMC4wNixcblx0XHQvKm1pblNwZWVkIDogMCwqL1xuXHRcdG1pblNwZWVkIDogMC4wMSxcblx0XHRkZWNlbCA6IDAuOTUsXG5cdFx0aW50ZXJ2YWwgOiAyMCxcblx0XHRtaW5CcmlnaHRuZXNzIDogMC4xLFxuXHRcdG1heEJyaWdodG5lc3MgOiAxLFxuXHRcdG91dGxpbmVDb2xvdXIgOiBcInJnYmEoMCwgMTAwLCAyMjQsIDAuNjIpXCIsXG5cdFx0b3V0bGluZVRoaWNrbmVzcyA6IDEsXG5cdFx0b3V0bGluZU9mZnNldCA6IDUsXG5cdFx0b3V0bGluZU1ldGhvZCA6IFwib3V0bGluZVwiLFxuXHRcdHRleHRDb2xvdXIgOiBcIiNmZjk5ZmZcIixcblx0XHR0ZXh0SGVpZ2h0IDogMTUsXG5cdFx0dGV4dEZvbnQgOiBcIkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcblx0XHRzaGFkb3cgOiBcIiMwMDBcIixcblx0XHRzaGFkb3dCbHVyIDogMCxcblx0XHRzaGFkb3dPZmZzZXQgOiBbMCwgMF0sXG5cdFx0aW5pdGlhbCA6IG51bGwsXG5cdFx0aGlkZVRhZ3MgOiB0cnVlLFxuXHRcdHpvb20gOiAxLFxuXHRcdHdlaWdodCA6IGZhbHNlLFxuXHRcdHdlaWdodE1vZGUgOiBcInNpemVcIixcblx0XHR3ZWlnaHRGcm9tIDogbnVsbCxcblx0XHR3ZWlnaHRTaXplIDogMSxcblx0XHR3ZWlnaHRTaXplTWluIDogbnVsbCxcblx0XHR3ZWlnaHRTaXplTWF4IDogbnVsbCxcblx0XHR3ZWlnaHRHcmFkaWVudCA6IHtcblx0XHRcdDAgOiBcIiNmMDBcIixcblx0XHRcdCcwLjMzJyA6IFwiI2ZmMFwiLFxuXHRcdFx0JzAuNjYnIDogXCIjMGYwXCIsXG5cdFx0XHQxIDogXCIjMDBmXCJcblx0XHR9LFxuXHRcdHR4dE9wdCA6IHRydWUsXG5cdFx0dHh0U2NhbGUgOiAyLFxuXHRcdGZyb250U2VsZWN0IDogZmFsc2UsXG5cdFx0d2hlZWxab29tIDogdHJ1ZSxcblx0XHR6b29tTWluIDogMC4zLFxuXHRcdHpvb21NYXggOiAzLFxuXHRcdHpvb21TdGVwIDogMC4wNSxcblx0XHRzaGFwZSA6IFwic3BoZXJlXCIsXG5cdFx0bG9jayA6IG51bGwsXG5cdFx0dG9vbHRpcCA6IG51bGwsXG5cdFx0dG9vbHRpcERlbGF5IDogMzAwLFxuXHRcdHRvb2x0aXBDbGFzcyA6IFwidGN0b29sdGlwXCIsXG5cdFx0cmFkaXVzWCA6IDEsXG5cdFx0cmFkaXVzWSA6IDEsXG5cdFx0cmFkaXVzWiA6IDEsXG5cdFx0c3RyZXRjaFggOiAxLFxuXHRcdHN0cmV0Y2hZIDogMSxcblx0XHRvZmZzZXRYIDogMCxcblx0XHRvZmZzZXRZIDogMCxcblx0XHRzaHVmZmxlVGFncyA6IGZhbHNlLFxuXHRcdG5vU2VsZWN0IDogZmFsc2UsXG5cdFx0bm9Nb3VzZSA6IGZhbHNlLFxuXHRcdGltYWdlU2NhbGUgOiAxLFxuXHRcdHBhdXNlZCA6IGZhbHNlLFxuXHRcdGRyYWdDb250cm9sIDogZmFsc2UsXG5cdFx0ZHJhZ1RocmVzaG9sZCA6IDQsXG5cdFx0Y2VudHJlRnVuYyA6IFksXG5cdFx0c3BsaXRXaWR0aCA6IDAsXG5cdFx0YW5pbVRpbWluZyA6IFwiU21vb3RoXCIsXG5cdFx0Y2xpY2tUb0Zyb250IDogZmFsc2UsXG5cdFx0ZmFkZUluIDogMFxuXHR9O1xuXHRmb3IgKGFvIGluIHgub3B0aW9ucykge1xuXHRcdHhbYW9dID0geC5vcHRpb25zW2FvXVxuXHR9XG5cdHdpbmRvdy5UYWdDYW52YXMgPSB4O1xuXHRHKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0eC5sb2FkZWQgPSAxXG5cdH0sIHdpbmRvdylcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGlicy90YWdjYW52YXMubWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==