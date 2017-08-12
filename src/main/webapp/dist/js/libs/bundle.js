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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(14);


/***/ }),

/***/ 13:
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

/***/ 14:
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmIwNjAxYzJlMmNhNmVjYjU4YWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnMvanF1ZXJ5LnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnMvdGFnY2FudmFzLm1pbi5qcyJdLCJuYW1lcyI6WyIkIiwibXMiLCJpbml0Iiwib2JqIiwiYXJncyIsImZpbGxIdG1sIiwiYmluZEV2ZW50IiwiZW1wdHkiLCJjdXJyZW50IiwiYXBwZW5kIiwicmVtb3ZlIiwicGFnZUNvdW50Iiwic3RhcnQiLCJlbmQiLCJvbiIsInBhcnNlSW50IiwidGV4dCIsImJhY2tGbiIsImNoaWxkcmVuIiwiZm4iLCJjcmVhdGVQYWdlIiwib3B0aW9ucyIsImV4dGVuZCIsImpRdWVyeSIsImFvIiwiYW4iLCJhYSIsIk1hdGgiLCJhYnMiLCJ3Iiwic2luIiwibCIsImNvcyIsIkkiLCJtYXgiLCJhdCIsIm1pbiIsIlYiLCJjZWlsIiwiYWgiLCJzcXJ0IiwiWCIsInBvdyIsIkwiLCJPIiwiUiIsImEiLCJBIiwiYiIsIkIiLCJjIiwiQyIsImQiLCJEIiwiZSIsIkUiLCJmIiwiRiIsImFkIiwiYWUiLCJ6IiwibyIsImRvY3VtZW50IiwiSCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJhaiIsImkiLCJ2IiwiaiIsImF2IiwiaXNOYU4iLCJZIiwiVCIsIkRhdGUiLCJ2YWx1ZU9mIiwibiIsImF5IiwiYXciLCJsZW5ndGgiLCJheCIsInB1c2giLCJzb3J0IiwiYWMiLCJyYW5kb20iLCJVIiwieCIsInkiLCJwcm90b3R5cGUiLCJkb3QiLCJjcm9zcyIsImFuZ2xlIiwiUEkiLCJhY29zIiwidW5pdCIsIksiLCJrIiwiSWRlbnRpdHkiLCJSb3RhdGlvbiIsIm11bCIsImF6IiwieGZvcm0iLCJzIiwiYUQiLCJhQSIsImFDIiwiYUIiLCJhRSIsImFyIiwiYUciLCJhRiIsImFIIiwiUSIsIlciLCJOIiwidSIsInRvUHJlY2lzaW9uIiwic3Vic3RyIiwicmVwbGFjZSIsImxhc3RJbmRleE9mIiwiaW5kZXhPZiIsInBhcnNlRmxvYXQiLCJzdWJzdHJpbmciLCJoIiwid2luZG93IiwiR192bWxDYW52YXNNYW5hZ2VyIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwic2hhZG93Q29sb3IiLCJzaGFkb3dCbHVyIiwiZ2xvYmFsQWxwaGEiLCJzdHJva2VSZWN0IiwiZ2V0SW1hZ2VEYXRhIiwiZGF0YSIsImF1Iiwid2VpZ2h0R3JhZGllbnQiLCJnQ2FudmFzIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QmFzZWxpbmUiLCJzaGFkb3dPZmZzZXRYIiwic2hhZG93T2Zmc2V0WSIsImZpbGxUZXh0IiwicSIsImFKIiwiYUkiLCJhbSIsImRyYXdJbWFnZSIsImFmIiwiRyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImFsIiwiaW1hZ2VTY2FsZSIsImNvbXBsZXRlIiwidHh0T3B0Iiwic2hhZG93Iiwic2hhZG93T2Zmc2V0IiwiaW1hZ2UiLCJhaSIsImRlZmF1bHRWaWV3IiwiY2hhckF0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjdXJyZW50U3R5bGUiLCJ3ZWlnaHRGcm9tIiwiZ2V0QXR0cmlidXRlIiwidGV4dEhlaWdodCIsIndlaWdodCIsInRhcmdldCIsImlkIiwic3JjRWxlbWVudCIsInBhcmVudE5vZGUiLCJNIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJyIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwibSIsImZyb21FbGVtZW50IiwidGMiLCJteCIsIm15IiwiVW5GcmVlemUiLCJFbmREcmFnIiwiYWciLCJ0dHRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiY2FudmFzIiwiRHJhZyIsImRyYXduIiwiWiIsImJ1dHRvbiIsIkJlZ2luRHJhZyIsImciLCJ0b3VjaGVkIiwiQ2xpY2tlZCIsIkoiLCJwIiwiYWIiLCJEcmF3IiwiYXEiLCJjYW5jZWxCdWJibGUiLCJyZXR1cm5WYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiV2hlZWwiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwidCIsImludGVydmFsIiwiTmV4dEZyYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJjbGllbnRMZWZ0IiwiY2xpZW50VG9wIiwibGVmdCIsInRvcCIsImFwIiwicmFkaXVzIiwiejEiLCJ6MiIsIlAiLCJiciIsImxpbmUiLCJvcmlnaW5hbCIsImlubmVyVGV4dCIsInRleHRDb250ZW50IiwiTGluZXMiLCJjaGlsZE5vZGVzIiwibm9kZU5hbWUiLCJqb2luIiwibm9kZVR5cGUiLCJub2RlVmFsdWUiLCJTcGxpdFdpZHRoIiwic3BsaXQiLCJtZWFzdXJlVGV4dCIsInRzIiwic2MiLCJwdWxzYXRlVG8iLCJvdXRsaW5lTWV0aG9kIiwiRHJhd1B1bHNhdGUiLCJEcmF3U2ltcGxlIiwiU2V0TWV0aG9kIiwiYmxvY2siLCJjb2xvdXIiLCJvdXRsaW5lIiwiY2xhc3NpYyIsIm5vbmUiLCJkcmF3RnVuYyIsIlVwZGF0ZSIsIm91dGxpbmVPZmZzZXQiLCJEcmF3T3V0bGluZSIsIkRyYXdDb2xvdXIiLCJEcmF3Q29sb3VyVGV4dCIsImFscGhhIiwiRHJhd0NvbG91ckltYWdlIiwiY2xlYXJSZWN0Iiwic2V0VHJhbnNmb3JtIiwic2F2ZSIsImJlZ2luUGF0aCIsInJlY3QiLCJjbGlwIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicmVzdG9yZSIsIkRyYXdCbG9jayIsIm91dGxpbmVDb2xvdXIiLCJsaW5lV2lkdGgiLCJvdXRsaW5lVGhpY2tuZXNzIiwicHVsc2F0ZVRpbWUiLCJBY3RpdmUiLCJQcmVEcmF3IiwiUG9zdERyYXciLCJMYXN0RHJhdyIsIlMiLCJjdHh0Iiwic3JjIiwidGV4dF9vcmlnaW5hbCIsImxpbmVfd2lkdGhzIiwidGl0bGUiLCJwb3NpdGlvbiIsInRleHRDb2xvdXIiLCJ0ZXh0Rm9udCIsIndlaWdodGVkIiwiZXh0ZW50cyIsIk1lYXN1cmUiLCJTZXRTaGFkb3dDb2xvdXIiLCJzaGFkb3dBbHBoYSIsIlNldFNoYWRvd0NvbG91ckFscGhhIiwiU2V0U2hhZG93Q29sb3VyRml4ZWQiLCJTZXREcmF3IiwiRXF1YWxUbyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaHJlZiIsImllIiwiRHJhd0ltYWdlSUUiLCJEcmF3SW1hZ2UiLCJEcmF3VGV4dCIsIm5vU2VsZWN0IiwiQ2hlY2tBY3RpdmUiLCJNZWFzdXJlVGV4dCIsInR4dFNjYWxlIiwiU2V0Rm9udCIsIlNldFdlaWdodCIsIldlaWdodCIsIndlaWdodE1vZGUiLCJtaW5fd2VpZ2h0IiwibWF4X3dlaWdodCIsIndlaWdodFNpemVNaW4iLCJ3ZWlnaHRTaXplTWF4Iiwid2VpZ2h0U2l6ZSIsIkNhbGMiLCJtaW5CcmlnaHRuZXNzIiwibWF4QnJpZ2h0bmVzcyIsIm1heF9yYWRpdXMiLCJ4Zm9ybWVkIiwic3RyZXRjaFgiLCJzdHJldGNoWSIsInNlbGYiLCJmcmFtZXMiLCJsb2NhdGlvbiIsIm9wZW4iLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImZpcmVFdmVudCIsImluaXRFbGVtZW50IiwibmF2aWdhdG9yIiwiYXBwVmVyc2lvbiIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiZGVwdGgiLCJ6b29tIiwibHgiLCJsb2NrIiwibHkiLCJmcm96ZW4iLCJkeCIsImR5IiwiZml4ZWRBbmltIiwiZml4ZWRBbHBoYSIsInNvdXJjZSIsInRyYW5zZm9ybSIsInN0YXJ0VGltZSIsInRpbWUiLCJBbmltYXRlIiwiZHJhZ0NvbnRyb2wiLCJBbmltYXRlRHJhZyIsIkFuaW1hdGVQb3NpdGlvbiIsImFuaW1UaW1pbmciLCJTbW9vdGgiLCJMb2FkIiwiaGlkZVRhZ3MiLCJsb2FkZWQiLCJIaWRlVGFncyIsInlhdyIsImluaXRpYWwiLCJtYXhTcGVlZCIsInBpdGNoIiwidG9vbHRpcCIsIlRvb2x0aXAiLCJUb29sdGlwTmF0aXZlIiwiVG9vbHRpcERpdiIsInR0ZGl2IiwiY2xhc3NOYW1lIiwidG9vbHRpcENsYXNzIiwic3R5bGUiLCJ6SW5kZXgiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJUb29sdGlwTm9uZSIsIm5vTW91c2UiLCJ3aGVlbFpvb20iLCJzdGFydGVkIiwic2V0VGltZW91dCIsIlNvdXJjZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIkdldFRhZ3MiLCJDcmVhdGVUYWciLCJJbWFnZSIsInNwbGl0V2lkdGgiLCJVcGRhdGVUYWciLCJzcGhlcmUiLCJ2Y3lsaW5kZXIiLCJoY3lsaW5kZXIiLCJ2cmluZyIsImhyaW5nIiwic2h1ZmZsZVRhZ3MiLCJyYWRpdXNYIiwicmFkaXVzWSIsInJhZGl1c1oiLCJzaGFwZUFyZ3MiLCJzaGFwZSIsInNoaWZ0IiwiY29uY2F0IiwiYXBwbHkiLCJsaXN0TGVuZ3RoIiwidGFnbGlzdCIsInNwbGljZSIsInBvcCIsIlNldFNoYWRvdyIsInBhdXNlZCIsImFMIiwiYU0iLCJmcm9udFNlbGVjdCIsImNlbnRyZUZ1bmMiLCJBbmltYXRlRml4ZWQiLCJhY3RpdmUiLCJhTiIsInRhZyIsImFLIiwiYWxlcnQiLCJmcmVlemVBY3RpdmUiLCJGcmVlemUiLCJmaXhlZENhbGxiYWNrIiwiZml4ZWRDYWxsYmFja1RhZyIsImN1cnNvciIsImFjdGl2ZUN1cnNvciIsImlubmVySFRNTCIsInRvb2x0aXBEZWxheSIsIlRyYW5zZm9ybSIsImZhZGVJbiIsInQwIiwiY2IiLCJheGlzIiwicmV2ZXJzZSIsImZyZWV6ZURlY2VsIiwiRGVjZWwiLCJwcmVGcmVlemUiLCJtaW5TcGVlZCIsInowIiwiZGVjZWwiLCJab29tIiwiY2xpY2tUb0Zyb250IiwiVGFnVG9Gcm9udCIsInpvb21TdGVwIiwiem9vbU1heCIsInpvb21NaW4iLCJkb3duIiwiZHJhZ1RocmVzaG9sZCIsImRyYWdnaW5nIiwiUGF1c2UiLCJSZXN1bWUiLCJGaW5kVGFnIiwiaW5kZXgiLCJSb3RhdGVUYWciLCJTdGFydCIsImFrIiwiTGluZWFyIiwiUmVsb2FkIiwibGF0IiwibG5nIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIk5leHRGcmFtZVJBRiIsIk5leHRGcmFtZVRpbWVvdXQiLCJUYWdDYW52YXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REEsQ0FBQyxVQUFTQSxDQUFULEVBQVc7QUFDWCxLQUFJQyxLQUFLO0FBQ1JDLFFBQUssY0FBU0MsR0FBVCxFQUFhQyxJQUFiLEVBQWtCO0FBQ3RCLFVBQVEsWUFBVTtBQUNqQkgsT0FBR0ksUUFBSCxDQUFZRixHQUFaLEVBQWdCQyxJQUFoQjtBQUNBSCxPQUFHSyxTQUFILENBQWFILEdBQWIsRUFBaUJDLElBQWpCO0FBQ0EsSUFITSxFQUFQO0FBSUEsR0FOTztBQU9SO0FBQ0FDLFlBQVMsa0JBQVNGLEdBQVQsRUFB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RyxFQUFWLENBQVI7QUFDQTtBQUNEb0csUUFBTzRWLFNBQVAsR0FBbUJsWSxDQUFuQjtBQUNBcUUsR0FBRSxNQUFGLEVBQVUsWUFBWTtBQUNyQnJFLElBQUV3UixNQUFGLEdBQVcsQ0FBWDtBQUNBLEVBRkQsRUFFR2xQLE1BRkg7QUFHQSxDQXJ5REQsSSIsImZpbGUiOiJqcy9saWJzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiYjA2MDFjMmUyY2E2ZWNiNThhZSIsIihmdW5jdGlvbigkKXtcblx0dmFyIG1zID0ge1xuXHRcdGluaXQ6ZnVuY3Rpb24ob2JqLGFyZ3Mpe1xuXHRcdFx0cmV0dXJuIChmdW5jdGlvbigpe1xuXHRcdFx0XHRtcy5maWxsSHRtbChvYmosYXJncyk7XG5cdFx0XHRcdG1zLmJpbmRFdmVudChvYmosYXJncyk7XG5cdFx0XHR9KSgpO1xuXHRcdH0sXG5cdFx0Ly/loavlhYVodG1sXG5cdFx0ZmlsbEh0bWw6ZnVuY3Rpb24ob2JqLGFyZ3Mpe1xuXHRcdFx0cmV0dXJuIChmdW5jdGlvbigpe1xuXHRcdFx0XHRvYmouZW1wdHkoKTtcblx0XHRcdFx0Ly/kuIrkuIDpobVcblx0XHRcdFx0aWYoYXJncy5jdXJyZW50ID4gMSl7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwicHJldlBhZ2VcIj7kuIrkuIDpobU8L2E+Jyk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdG9iai5yZW1vdmUoJy5wcmV2UGFnZScpO1xuXHRcdFx0XHRcdG9iai5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZGlzYWJsZWRcIj7kuIrkuIDpobU8L3NwYW4+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly/kuK3pl7TpobXnoIFcblx0XHRcdFx0aWYoYXJncy5jdXJyZW50ICE9IDEgJiYgYXJncy5jdXJyZW50ID49IDQgJiYgYXJncy5wYWdlQ291bnQgIT0gNCl7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwidGNkTnVtYmVyXCI+JysxKyc8L2E+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoYXJncy5jdXJyZW50LTIgPiAyICYmIGFyZ3MuY3VycmVudCA8PSBhcmdzLnBhZ2VDb3VudCAmJiBhcmdzLnBhZ2VDb3VudCA+IDUpe1xuXHRcdFx0XHRcdG9iai5hcHBlbmQoJzxzcGFuPi4uLjwvc3Bhbj4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgc3RhcnQgPSBhcmdzLmN1cnJlbnQgLTIsZW5kID0gYXJncy5jdXJyZW50KzI7XG5cdFx0XHRcdGlmKChzdGFydCA+IDEgJiYgYXJncy5jdXJyZW50IDwgNCl8fGFyZ3MuY3VycmVudCA9PSAxKXtcblx0XHRcdFx0XHRlbmQrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihhcmdzLmN1cnJlbnQgPiBhcmdzLnBhZ2VDb3VudC00ICYmIGFyZ3MuY3VycmVudCA+PSBhcmdzLnBhZ2VDb3VudCl7XG5cdFx0XHRcdFx0c3RhcnQtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKDtzdGFydCA8PSBlbmQ7IHN0YXJ0KyspIHtcblx0XHRcdFx0XHRpZihzdGFydCA8PSBhcmdzLnBhZ2VDb3VudCAmJiBzdGFydCA+PSAxKXtcblx0XHRcdFx0XHRcdGlmKHN0YXJ0ICE9IGFyZ3MuY3VycmVudCl7XG5cdFx0XHRcdFx0XHRcdG9iai5hcHBlbmQoJzxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cInRjZE51bWJlclwiPicrIHN0YXJ0ICsnPC9hPicpO1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdG9iai5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiY3VycmVudFwiPicrIHN0YXJ0ICsnPC9zcGFuPicpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihhcmdzLmN1cnJlbnQgKyAyIDwgYXJncy5wYWdlQ291bnQgLSAxICYmIGFyZ3MuY3VycmVudCA+PSAxICYmIGFyZ3MucGFnZUNvdW50ID4gNSl7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPHNwYW4+Li4uPC9zcGFuPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGFyZ3MuY3VycmVudCAhPSBhcmdzLnBhZ2VDb3VudCAmJiBhcmdzLmN1cnJlbnQgPCBhcmdzLnBhZ2VDb3VudCAtMiAgJiYgYXJncy5wYWdlQ291bnQgIT0gNCl7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwidGNkTnVtYmVyXCI+JythcmdzLnBhZ2VDb3VudCsnPC9hPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8v5LiL5LiA6aG1XG5cdFx0XHRcdGlmKGFyZ3MuY3VycmVudCA8IGFyZ3MucGFnZUNvdW50KXtcblx0XHRcdFx0XHRvYmouYXBwZW5kKCc8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJuZXh0UGFnZVwiPuS4i+S4gOmhtTwvYT4nKTtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0b2JqLnJlbW92ZSgnLm5leHRQYWdlJyk7XG5cdFx0XHRcdFx0b2JqLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJkaXNhYmxlZFwiPuS4i+S4gOmhtTwvc3Bhbj4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblx0XHR9LFxuXHRcdC8v57uR5a6a5LqL5Lu2XG5cdFx0YmluZEV2ZW50OmZ1bmN0aW9uKG9iaixhcmdzKXtcblx0XHRcdHJldHVybiAoZnVuY3Rpb24oKXtcblx0XHRcdFx0b2JqLm9uKFwiY2xpY2tcIixcImEudGNkTnVtYmVyXCIsZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgY3VycmVudCA9IHBhcnNlSW50KCQodGhpcykudGV4dCgpKTtcblx0XHRcdFx0XHRtcy5maWxsSHRtbChvYmose1wiY3VycmVudFwiOmN1cnJlbnQsXCJwYWdlQ291bnRcIjphcmdzLnBhZ2VDb3VudH0pO1xuXHRcdFx0XHRcdGlmKHR5cGVvZihhcmdzLmJhY2tGbik9PVwiZnVuY3Rpb25cIil7XG5cdFx0XHRcdFx0XHRhcmdzLmJhY2tGbihjdXJyZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvL+S4iuS4gOmhtVxuXHRcdFx0XHRvYmoub24oXCJjbGlja1wiLFwiYS5wcmV2UGFnZVwiLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnQgPSBwYXJzZUludChvYmouY2hpbGRyZW4oXCJzcGFuLmN1cnJlbnRcIikudGV4dCgpKTtcblx0XHRcdFx0XHRtcy5maWxsSHRtbChvYmose1wiY3VycmVudFwiOmN1cnJlbnQtMSxcInBhZ2VDb3VudFwiOmFyZ3MucGFnZUNvdW50fSk7XG5cdFx0XHRcdFx0aWYodHlwZW9mKGFyZ3MuYmFja0ZuKT09XCJmdW5jdGlvblwiKXtcblx0XHRcdFx0XHRcdGFyZ3MuYmFja0ZuKGN1cnJlbnQtMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly/kuIvkuIDpobVcblx0XHRcdFx0b2JqLm9uKFwiY2xpY2tcIixcImEubmV4dFBhZ2VcIixmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBjdXJyZW50ID0gcGFyc2VJbnQob2JqLmNoaWxkcmVuKFwic3Bhbi5jdXJyZW50XCIpLnRleHQoKSk7XG5cdFx0XHRcdFx0bXMuZmlsbEh0bWwob2JqLHtcImN1cnJlbnRcIjpjdXJyZW50KzEsXCJwYWdlQ291bnRcIjphcmdzLnBhZ2VDb3VudH0pO1xuXHRcdFx0XHRcdGlmKHR5cGVvZihhcmdzLmJhY2tGbik9PVwiZnVuY3Rpb25cIil7XG5cdFx0XHRcdFx0XHRhcmdzLmJhY2tGbihjdXJyZW50KzEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KSgpO1xuXHRcdH1cblx0fVxuXHQkLmZuLmNyZWF0ZVBhZ2UgPSBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR2YXIgYXJncyA9ICQuZXh0ZW5kKHtcblx0XHRcdHBhZ2VDb3VudCA6IDE1LFxuXHRcdFx0Y3VycmVudCA6IDEsXG5cdFx0XHRiYWNrRm4gOiBmdW5jdGlvbigpe31cblx0XHR9LG9wdGlvbnMpO1xuXHRcdG1zLmluaXQodGhpcyxhcmdzKTtcblx0fVxufSkoalF1ZXJ5KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGlicy9qcXVlcnkucGFnZS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTMgR3JhaGFtIEJyZWFjaFxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogVGFnQ2FudmFzIDIuMiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIGNvbnRhY3QgPGdyYWhhbUBnb2F0MTAwMC5jb20+XG4gKi9cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBhbyxcblx0YW4sXG5cdGFhID0gTWF0aC5hYnMsXG5cdHcgPSBNYXRoLnNpbixcblx0bCA9IE1hdGguY29zLFxuXHRJID0gTWF0aC5tYXgsXG5cdGF0ID0gTWF0aC5taW4sXG5cdFYgPSBNYXRoLmNlaWwsXG5cdGFoID0gTWF0aC5zcXJ0LFxuXHRYID0gTWF0aC5wb3csXG5cdEwgPSB7fSxcblx0TyA9IHt9LFxuXHRSID0ge1xuXHRcdDAgOiBcIjAsXCIsXG5cdFx0MSA6IFwiMTcsXCIsXG5cdFx0MiA6IFwiMzQsXCIsXG5cdFx0MyA6IFwiNTEsXCIsXG5cdFx0NCA6IFwiNjgsXCIsXG5cdFx0NSA6IFwiODUsXCIsXG5cdFx0NiA6IFwiMTAyLFwiLFxuXHRcdDcgOiBcIjExOSxcIixcblx0XHQ4IDogXCIxMzYsXCIsXG5cdFx0OSA6IFwiMTUzLFwiLFxuXHRcdGEgOiBcIjE3MCxcIixcblx0XHRBIDogXCIxNzAsXCIsXG5cdFx0YiA6IFwiMTg3LFwiLFxuXHRcdEIgOiBcIjE4NyxcIixcblx0XHRjIDogXCIyMDQsXCIsXG5cdFx0QyA6IFwiMjA0LFwiLFxuXHRcdGQgOiBcIjIyMSxcIixcblx0XHREIDogXCIyMjEsXCIsXG5cdFx0ZSA6IFwiMjM4LFwiLFxuXHRcdEUgOiBcIjIzOCxcIixcblx0XHRmIDogXCIyNTUsXCIsXG5cdFx0RiA6IFwiMjU1LFwiXG5cdH0sXG5cdGUsXG5cdGFkLFxuXHRkLFxuXHRhLFxuXHRhZSxcblx0eixcblx0byA9IGRvY3VtZW50LFxuXHRILFxuXHRjID0ge307XG5cdGZvciAoYW8gPSAwOyBhbyA8IDI1NjsgKythbykge1xuXHRcdGFuID0gYW8udG9TdHJpbmcoMTYpO1xuXHRcdGlmIChhbyA8IDE2KSB7XG5cdFx0XHRhbiA9IFwiMFwiICsgYW5cblx0XHR9XG5cdFx0T1thbl0gPSBPW2FuLnRvVXBwZXJDYXNlKCldID0gYW8udG9TdHJpbmcoKSArIFwiLFwiXG5cdH1cblx0ZnVuY3Rpb24gYWooaSkge1xuXHRcdHJldHVybiB0eXBlb2YgaSAhPSBcInVuZGVmaW5lZFwiXG5cdH1cblx0ZnVuY3Rpb24gdihpKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBpID09IFwib2JqZWN0XCIgJiYgaSAhPSBudWxsXG5cdH1cblx0ZnVuY3Rpb24gYihpLCBqLCBhdikge1xuXHRcdHJldHVybiBpc05hTihpKSA/IGF2IDogYXQoYXYsIEkoaiwgaSkpXG5cdH1cblx0ZnVuY3Rpb24gWSgpIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRmdW5jdGlvbiBUKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLnZhbHVlT2YoKVxuXHR9XG5cdGZ1bmN0aW9uIG4oYXYsIGF5KSB7XG5cdFx0dmFyIGogPSBbXSxcblx0XHRhdyA9IGF2Lmxlbmd0aCxcblx0XHRheDtcblx0XHRmb3IgKGF4ID0gMDsgYXggPCBhdzsgKytheCkge1xuXHRcdFx0ai5wdXNoKGF2W2F4XSlcblx0XHR9XG5cdFx0ai5zb3J0KGF5KTtcblx0XHRyZXR1cm4galxuXHR9XG5cdGZ1bmN0aW9uIGFjKGopIHtcblx0XHR2YXIgYXcgPSBqLmxlbmd0aCAtIDEsXG5cdFx0YXYsXG5cdFx0YXg7XG5cdFx0d2hpbGUgKGF3KSB7XG5cdFx0XHRheCA9IH5+KE1hdGgucmFuZG9tKCkgKiBhdyk7XG5cdFx0XHRhdiA9IGpbYXddO1xuXHRcdFx0althd10gPSBqW2F4XTtcblx0XHRcdGpbYXhdID0gYXY7XG5cdFx0XHQtLWF3XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIFUoaSwgYXYsIGopIHtcblx0XHR0aGlzLnggPSBpO1xuXHRcdHRoaXMueSA9IGF2O1xuXHRcdHRoaXMueiA9IGpcblx0fVxuXHRhZSA9IFUucHJvdG90eXBlO1xuXHRhZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGFoKHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueilcblx0fTtcblx0YWUuZG90ID0gZnVuY3Rpb24gKGkpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogaS54ICsgdGhpcy55ICogaS55ICsgdGhpcy56ICogaS56XG5cdH07XG5cdGFlLmNyb3NzID0gZnVuY3Rpb24gKGopIHtcblx0XHR2YXIgaSA9IHRoaXMueSAqIGoueiAtIHRoaXMueiAqIGoueSxcblx0XHRhdyA9IHRoaXMueiAqIGoueCAtIHRoaXMueCAqIGoueixcblx0XHRhdiA9IHRoaXMueCAqIGoueSAtIHRoaXMueSAqIGoueDtcblx0XHRyZXR1cm4gbmV3IFUoaSwgYXcsIGF2KVxuXHR9O1xuXHRhZS5hbmdsZSA9IGZ1bmN0aW9uIChqKSB7XG5cdFx0dmFyIGkgPSB0aGlzLmRvdChqKSxcblx0XHRhdjtcblx0XHRpZiAoaSA9PSAwKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5QSSAvIDJcblx0XHR9XG5cdFx0YXYgPSBpIC8gKHRoaXMubGVuZ3RoKCkgKiBqLmxlbmd0aCgpKTtcblx0XHRpZiAoYXYgPj0gMSkge1xuXHRcdFx0cmV0dXJuIDBcblx0XHR9XG5cdFx0aWYgKGF2IDw9IC0xKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5QSVxuXHRcdH1cblx0XHRyZXR1cm4gTWF0aC5hY29zKGF2KVxuXHR9O1xuXHRhZS51bml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBpID0gdGhpcy5sZW5ndGgoKTtcblx0XHRyZXR1cm4gbmV3IFUodGhpcy54IC8gaSwgdGhpcy55IC8gaSwgdGhpcy56IC8gaSlcblx0fTtcblx0ZnVuY3Rpb24gSyhhdiwgaikge1xuXHRcdGogPSBqICogTWF0aC5QSSAvIDE4MDtcblx0XHRhdiA9IGF2ICogTWF0aC5QSSAvIDE4MDtcblx0XHR2YXIgaSA9IHcoYXYpICogbChqKSxcblx0XHRheCA9IC13KGopLFxuXHRcdGF3ID0gLWwoYXYpICogbChqKTtcblx0XHRyZXR1cm4gbmV3IFUoaSwgYXgsIGF3KVxuXHR9XG5cdGZ1bmN0aW9uIGsoaSkge1xuXHRcdHRoaXNbMV0gPSB7XG5cdFx0XHQxIDogaVswXSxcblx0XHRcdDIgOiBpWzFdLFxuXHRcdFx0MyA6IGlbMl1cblx0XHR9O1xuXHRcdHRoaXNbMl0gPSB7XG5cdFx0XHQxIDogaVszXSxcblx0XHRcdDIgOiBpWzRdLFxuXHRcdFx0MyA6IGlbNV1cblx0XHR9O1xuXHRcdHRoaXNbM10gPSB7XG5cdFx0XHQxIDogaVs2XSxcblx0XHRcdDIgOiBpWzddLFxuXHRcdFx0MyA6IGlbOF1cblx0XHR9XG5cdH1cblx0YSA9IGsucHJvdG90eXBlO1xuXHRrLklkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgayhbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0pXG5cdH07XG5cdGsuUm90YXRpb24gPSBmdW5jdGlvbiAoYXcsIGkpIHtcblx0XHR2YXIgaiA9IHcoYXcpLFxuXHRcdGF2ID0gbChhdyksXG5cdFx0YXggPSAxIC0gYXY7XG5cdFx0cmV0dXJuIG5ldyBrKFthdiArIFgoaS54LCAyKSAqIGF4LCBpLnggKiBpLnkgKiBheCAtIGkueiAqIGosIGkueCAqIGkueiAqIGF4ICsgaS55ICogaiwgaS55ICogaS54ICogYXggKyBpLnogKiBqLCBhdiArIFgoaS55LCAyKSAqIGF4LCBpLnkgKiBpLnogKiBheCAtIGkueCAqIGosIGkueiAqIGkueCAqIGF4IC0gaS55ICogaiwgaS56ICogaS55ICogYXggKyBpLnggKiBqLCBhdiArIFgoaS56LCAyKSAqIGF4XSlcblx0fTtcblx0YS5tdWwgPSBmdW5jdGlvbiAoYXYpIHtcblx0XHR2YXIgYXcgPSBbXSxcblx0XHRheixcblx0XHRheSxcblx0XHRheCA9IChhdi54Zm9ybSA/IDEgOiAwKTtcblx0XHRmb3IgKGF6ID0gMTsgYXogPD0gMzsgKytheikge1xuXHRcdFx0Zm9yIChheSA9IDE7IGF5IDw9IDM7ICsrYXkpIHtcblx0XHRcdFx0aWYgKGF4KSB7XG5cdFx0XHRcdFx0YXcucHVzaCh0aGlzW2F6XVsxXSAqIGF2WzFdW2F5XSArIHRoaXNbYXpdWzJdICogYXZbMl1bYXldICsgdGhpc1thel1bM10gKiBhdlszXVtheV0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXcucHVzaCh0aGlzW2F6XVtheV0gKiBhdilcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmV3IGsoYXcpXG5cdH07XG5cdGEueGZvcm0gPSBmdW5jdGlvbiAoYXYpIHtcblx0XHR2YXIgaiA9IHt9LFxuXHRcdGkgPSBhdi54LFxuXHRcdGF4ID0gYXYueSxcblx0XHRhdyA9IGF2Lno7XG5cdFx0ai54ID0gaSAqIHRoaXNbMV1bMV0gKyBheCAqIHRoaXNbMl1bMV0gKyBhdyAqIHRoaXNbM11bMV07XG5cdFx0ai55ID0gaSAqIHRoaXNbMV1bMl0gKyBheCAqIHRoaXNbMl1bMl0gKyBhdyAqIHRoaXNbM11bMl07XG5cdFx0ai56ID0gaSAqIHRoaXNbMV1bM10gKyBheCAqIHRoaXNbMl1bM10gKyBhdyAqIHRoaXNbM11bM107XG5cdFx0cmV0dXJuIGpcblx0fTtcblx0ZnVuY3Rpb24gcyhhdywgYXksIGFELCBhQSkge1xuXHRcdHZhciBheixcblx0XHRhQyxcblx0XHRqLFxuXHRcdGFCLFxuXHRcdGFFID0gW10sXG5cdFx0YXggPSBNYXRoLlBJICogKDMgLSBhaCg1KSksXG5cdFx0YXYgPSAyIC8gYXc7XG5cdFx0Zm9yIChheiA9IDA7IGF6IDwgYXc7ICsrYXopIHtcblx0XHRcdGFDID0gYXogKiBhdiAtIDEgKyAoYXYgLyAyKTtcblx0XHRcdGogPSBhaCgxIC0gYUMgKiBhQyk7XG5cdFx0XHRhQiA9IGF6ICogYXg7XG5cdFx0XHRhRS5wdXNoKFtsKGFCKSAqIGogKiBheSwgYUMgKiBhRCwgdyhhQikgKiBqICogYUFdKVxuXHRcdH1cblx0XHRyZXR1cm4gYUVcblx0fVxuXHRmdW5jdGlvbiBhcihheCwgYXYsIGFBLCBhRywgYUUpIHtcblx0XHR2YXIgYUYsXG5cdFx0YUggPSBbXSxcblx0XHRheSA9IE1hdGguUEkgKiAoMyAtIGFoKDUpKSxcblx0XHRhdyA9IDIgLyBheCxcblx0XHRhRCxcblx0XHRhQyxcblx0XHRhQixcblx0XHRhejtcblx0XHRmb3IgKGFEID0gMDsgYUQgPCBheDsgKythRCkge1xuXHRcdFx0YUMgPSBhRCAqIGF3IC0gMSArIChhdyAvIDIpO1xuXHRcdFx0YUYgPSBhRCAqIGF5O1xuXHRcdFx0YUIgPSBsKGFGKTtcblx0XHRcdGF6ID0gdyhhRik7XG5cdFx0XHRhSC5wdXNoKGF2ID8gW2FDICogYUEsIGFCICogYUcsIGF6ICogYUVdIDogW2FCICogYUEsIGFDICogYUcsIGF6ICogYUVdKVxuXHRcdH1cblx0XHRyZXR1cm4gYUhcblx0fVxuXHRmdW5jdGlvbiBRKGF2LCBhdywgYXosIGFGLCBhRCwgYUIpIHtcblx0XHR2YXIgYUUsXG5cdFx0YUcgPSBbXSxcblx0XHRheCA9IE1hdGguUEkgKiAyIC8gYXcsXG5cdFx0YUMsXG5cdFx0YUEsXG5cdFx0YXk7XG5cdFx0Zm9yIChhQyA9IDA7IGFDIDwgYXc7ICsrYUMpIHtcblx0XHRcdGFFID0gYUMgKiBheDtcblx0XHRcdGFBID0gbChhRSk7XG5cdFx0XHRheSA9IHcoYUUpO1xuXHRcdFx0YUcucHVzaChhdiA/IFthQiAqIGF6LCBhQSAqIGFGLCBheSAqIGFEXSA6IFthQSAqIGF6LCBhQiAqIGFGLCBheSAqIGFEXSlcblx0XHR9XG5cdFx0cmV0dXJuIGFHXG5cdH1cblx0ZnVuY3Rpb24gRShhdywgaSwgaiwgYXYpIHtcblx0XHRyZXR1cm4gYXIoYXcsIDAsIGksIGosIGF2KVxuXHR9XG5cdGZ1bmN0aW9uIFcoYXcsIGksIGosIGF2KSB7XG5cdFx0cmV0dXJuIGFyKGF3LCAxLCBpLCBqLCBhdilcblx0fVxuXHRmdW5jdGlvbiBDKGF4LCBpLCBqLCBhdiwgYXcpIHtcblx0XHRhdyA9IGlzTmFOKGF3KSA/IDAgOiBhdyAqIDE7XG5cdFx0cmV0dXJuIFEoMCwgYXgsIGksIGosIGF2LCBhdylcblx0fVxuXHRmdW5jdGlvbiBOKGF4LCBpLCBqLCBhdiwgYXcpIHtcblx0XHRhdyA9IGlzTmFOKGF3KSA/IDAgOiBhdyAqIDE7XG5cdFx0cmV0dXJuIFEoMSwgYXgsIGksIGosIGF2LCBhdylcblx0fVxuXHRmdW5jdGlvbiB1KGF5LCBpKSB7XG5cdFx0dmFyIGF4ID0gYXksXG5cdFx0YXcsXG5cdFx0YXYsXG5cdFx0aiA9IChpICogMSkudG9QcmVjaXNpb24oMykgKyBcIilcIjtcblx0XHRpZiAoYXlbMF0gPT09IFwiI1wiKSB7XG5cdFx0XHRpZiAoIUxbYXldKSB7XG5cdFx0XHRcdGlmIChheS5sZW5ndGggPT09IDQpIHtcblx0XHRcdFx0XHRMW2F5XSA9IFwicmdiYShcIiArIFJbYXlbMV1dICsgUltheVsyXV0gKyBSW2F5WzNdXVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdExbYXldID0gXCJyZ2JhKFwiICsgT1theS5zdWJzdHIoMSwgMildICsgT1theS5zdWJzdHIoMywgMildICsgT1theS5zdWJzdHIoNSwgMildXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGF4ID0gTFtheV0gKyBqXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChheS5zdWJzdHIoMCwgNCkgPT09IFwicmdiKFwiIHx8IGF5LnN1YnN0cigwLCA0KSA9PT0gXCJoc2woXCIpIHtcblx0XHRcdFx0YXggPSAoYXkucmVwbGFjZShcIihcIiwgXCJhKFwiKS5yZXBsYWNlKFwiKVwiLCBcIixcIiArIGopKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGF5LnN1YnN0cigwLCA1KSA9PT0gXCJyZ2JhKFwiIHx8IGF5LnN1YnN0cigwLCA1KSA9PT0gXCJoc2xhKFwiKSB7XG5cdFx0XHRcdFx0YXcgPSBheS5sYXN0SW5kZXhPZihcIixcIikgKyAxLFxuXHRcdFx0XHRcdGF2ID0gYXkuaW5kZXhPZihcIilcIik7XG5cdFx0XHRcdFx0aSAqPSBwYXJzZUZsb2F0KGF5LnN1YnN0cmluZyhhdywgYXYpKTtcblx0XHRcdFx0XHRheCA9IGF5LnN1YnN0cigwLCBhdykgKyBpLnRvUHJlY2lzaW9uKDMpICsgXCIpXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYXhcblx0fVxuXHRmdW5jdGlvbiBoKGksIGopIHtcblx0XHRpZiAod2luZG93Lkdfdm1sQ2FudmFzTWFuYWdlcikge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0dmFyIGF2ID0gby5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdGF2LndpZHRoID0gaTtcblx0XHRhdi5oZWlnaHQgPSBqO1xuXHRcdHJldHVybiBhdlxuXHR9XG5cdGZ1bmN0aW9uIEQoKSB7XG5cdFx0dmFyIGogPSBoKDMsIDMpLFxuXHRcdGF3LFxuXHRcdGF2O1xuXHRcdGlmICghaikge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHRcdGF3ID0gai5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0YXcuc3Ryb2tlU3R5bGUgPSBcIiMwMDBcIjtcblx0XHRhdy5zaGFkb3dDb2xvciA9IFwiI2ZmZlwiO1xuXHRcdGF3LnNoYWRvd0JsdXIgPSAzO1xuXHRcdGF3Lmdsb2JhbEFscGhhID0gMDtcblx0XHRhdy5zdHJva2VSZWN0KDIsIDIsIDIsIDIpO1xuXHRcdGF3Lmdsb2JhbEFscGhhID0gMTtcblx0XHRhdiA9IGF3LmdldEltYWdlRGF0YSgyLCAyLCAxLCAxKTtcblx0XHRqID0gbnVsbDtcblx0XHRyZXR1cm4gKGF2LmRhdGFbMF0gPiAwKVxuXHR9XG5cdGZ1bmN0aW9uIGF1KGFDLCBqKSB7XG5cdFx0dmFyIGF2ID0gMTAyNCxcblx0XHRheSA9IGFDLndlaWdodEdyYWRpZW50LFxuXHRcdGF4LFxuXHRcdGFBLFxuXHRcdGF3LFxuXHRcdGFCLFxuXHRcdGF6O1xuXHRcdGlmIChhQy5nQ2FudmFzKSB7XG5cdFx0XHRhQSA9IGFDLmdDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGFDLmdDYW52YXMgPSBheCA9IGgoYXYsIDEpO1xuXHRcdFx0aWYgKCFheCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0fVxuXHRcdFx0YUEgPSBheC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0XHRhQiA9IGFBLmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGF2LCAwKTtcblx0XHRcdGZvciAoYXcgaW4gYXkpIHtcblx0XHRcdFx0YUIuYWRkQ29sb3JTdG9wKDEgLSBhdywgYXlbYXddKVxuXHRcdFx0fVxuXHRcdFx0YUEuZmlsbFN0eWxlID0gYUI7XG5cdFx0XHRhQS5maWxsUmVjdCgwLCAwLCBhdiwgMSlcblx0XHR9XG5cdFx0YXogPSBhQS5nZXRJbWFnZURhdGEofn4oKGF2IC0gMSkgKiBqKSwgMCwgMSwgMSkuZGF0YTtcblx0XHRyZXR1cm4gXCJyZ2JhKFwiICsgYXpbMF0gKyBcIixcIiArIGF6WzFdICsgXCIsXCIgKyBhelsyXSArIFwiLFwiICsgKGF6WzNdIC8gMjU1KSArIFwiKVwiXG5cdH1cblx0ZnVuY3Rpb24gQihhQSwgYXosIGF3LCBhRywgYUIsIGFDLCBhdiwgYUQsIGFFKSB7XG5cdFx0dmFyIGF5ID0gKGFDIHx8IDApICsgKGF2ICYmIGF2WzBdIDwgMCA/IGFhKGF2WzBdKSA6IDApLFxuXHRcdGogPSAoYUMgfHwgMCkgKyAoYXYgJiYgYXZbMV0gPCAwID8gYWEoYXZbMV0pIDogMCksXG5cdFx0YXgsXG5cdFx0YUY7XG5cdFx0YUEuZm9udCA9IGF6O1xuXHRcdGFBLnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG5cdFx0YUEuZmlsbFN0eWxlID0gYXc7XG5cdFx0YUIgJiYgKGFBLnNoYWRvd0NvbG9yID0gYUIpO1xuXHRcdGFDICYmIChhQS5zaGFkb3dCbHVyID0gYUMpO1xuXHRcdGF2ICYmIChhQS5zaGFkb3dPZmZzZXRYID0gYXZbMF0sIGFBLnNoYWRvd09mZnNldFkgPSBhdlsxXSk7XG5cdFx0Zm9yIChheCA9IDA7IGF4IDwgYUcubGVuZ3RoOyArK2F4KSB7XG5cdFx0XHRhRiA9IGFFID8gKGFEIC0gYUVbYXhdKSAvIDIgOiAwO1xuXHRcdFx0YUEuZmlsbFRleHQoYUdbYXhdLCBheSArIGFGLCBqKTtcblx0XHRcdGogKz0gcGFyc2VJbnQoYXopXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHEoYUosIGFBLCBhRiwgYUgsIGF6LCBhdywgYUQsIGFFLCBqLCBhSSwgYUcsIGFDLCBhdikge1xuXHRcdHZhciBheCA9IGFIICsgYWEoalswXSkgKyBhRSArIGFFLFxuXHRcdGkgPSBheiArIGFhKGpbMV0pICsgYUUgKyBhRSxcblx0XHRheSxcblx0XHRhQjtcblx0XHRheSA9IGgoYXggKyBhSSwgaSArIGFHKTtcblx0XHRpZiAoIWF5KSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRhQiA9IGF5LmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRCKGFCLCBhQSwgYXcsIGFKLCBhRCwgYUUsIGosIGFDLCBhdik7XG5cdFx0cmV0dXJuIGF5XG5cdH1cblx0ZnVuY3Rpb24gYW0oYUEsIGFELCBhRSwgYXcpIHtcblx0XHR2YXIgYUYgPSBhYShhd1swXSksXG5cdFx0YUIgPSBhYShhd1sxXSksXG5cdFx0YXggPSBhQS53aWR0aCArIChhRiA+IGFFID8gYUYgKyBhRSA6IGFFICogMiksXG5cdFx0aiA9IGFBLmhlaWdodCArIChhQiA+IGFFID8gYUIgKyBhRSA6IGFFICogMiksXG5cdFx0YXogPSAoYUUgfHwgMCkgKyAoYXdbMF0gPCAwID8gYUYgOiAwKSxcblx0XHRhdiA9IChhRSB8fCAwKSArIChhd1sxXSA8IDAgPyBhQiA6IDApLFxuXHRcdGF5LFxuXHRcdGFDO1xuXHRcdGF5ID0gaChheCwgaik7XG5cdFx0aWYgKCFheSkge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0YUMgPSBheS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0YUQgJiYgKGFDLnNoYWRvd0NvbG9yID0gYUQpO1xuXHRcdGFFICYmIChhQy5zaGFkb3dCbHVyID0gYUUpO1xuXHRcdGF3ICYmIChhQy5zaGFkb3dPZmZzZXRYID0gYXdbMF0sIGFDLnNoYWRvd09mZnNldFkgPSBhd1sxXSk7XG5cdFx0YUMuZHJhd0ltYWdlKGFBLCBheiwgYXYsIGFBLndpZHRoLCBhQS5oZWlnaHQpO1xuXHRcdHJldHVybiBheVxuXHR9XG5cdGZ1bmN0aW9uIGFmKGFILCBheiwgYUYpIHtcblx0XHR2YXIgYUcgPSBwYXJzZUludChhSC50b1N0cmluZygpLmxlbmd0aCAqIGFGKSxcblx0XHRheSA9IHBhcnNlSW50KGFGICogMiAqIGFILmxlbmd0aCksXG5cdFx0YXcgPSBoKGFHLCBheSksXG5cdFx0YUMsXG5cdFx0aixcblx0XHRheCxcblx0XHRhQixcblx0XHRhRSxcblx0XHRhRCxcblx0XHRhdixcblx0XHRhQTtcblx0XHRpZiAoIWF3KSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRhQyA9IGF3LmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRhQy5maWxsU3R5bGUgPSBcIiMwMDBcIjtcblx0XHRhQy5maWxsUmVjdCgwLCAwLCBhRywgYXkpO1xuXHRcdEIoYUMsIGFGICsgXCJweCBcIiArIGF6LCBcIiNmZmZcIiwgYUgsIDAsIDAsIFtdKTtcblx0XHRqID0gYUMuZ2V0SW1hZ2VEYXRhKDAsIDAsIGFHLCBheSk7XG5cdFx0YXggPSBqLndpZHRoO1xuXHRcdGFCID0gai5oZWlnaHQ7XG5cdFx0YUEgPSB7XG5cdFx0XHRtaW4gOiB7XG5cdFx0XHRcdHggOiBheCxcblx0XHRcdFx0eSA6IGFCXG5cdFx0XHR9LFxuXHRcdFx0bWF4IDoge1xuXHRcdFx0XHR4IDogLTEsXG5cdFx0XHRcdHkgOiAtMVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Zm9yIChhRCA9IDA7IGFEIDwgYUI7ICsrYUQpIHtcblx0XHRcdGZvciAoYUUgPSAwOyBhRSA8IGF4OyArK2FFKSB7XG5cdFx0XHRcdGF2ID0gKGFEICogYXggKyBhRSkgKiA0O1xuXHRcdFx0XHRpZiAoai5kYXRhW2F2ICsgMV0gPiAwKSB7XG5cdFx0XHRcdFx0aWYgKGFFIDwgYUEubWluLngpIHtcblx0XHRcdFx0XHRcdGFBLm1pbi54ID0gYUVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFFID4gYUEubWF4LngpIHtcblx0XHRcdFx0XHRcdGFBLm1heC54ID0gYUVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFEIDwgYUEubWluLnkpIHtcblx0XHRcdFx0XHRcdGFBLm1pbi55ID0gYURcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFEID4gYUEubWF4LnkpIHtcblx0XHRcdFx0XHRcdGFBLm1heC55ID0gYURcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGF4ICE9IGFHKSB7XG5cdFx0XHRhQS5taW4ueCAqPSAoYUcgLyBheCk7XG5cdFx0XHRhQS5tYXgueCAqPSAoYUcgLyBheClcblx0XHR9XG5cdFx0aWYgKGFCICE9IGF5KSB7XG5cdFx0XHRhQS5taW4ueSAqPSAoYUcgLyBhQik7XG5cdFx0XHRhQS5tYXgueSAqPSAoYUcgLyBhQilcblx0XHR9XG5cdFx0YXcgPSBudWxsO1xuXHRcdHJldHVybiBhQVxuXHR9XG5cdGZ1bmN0aW9uIHkoaSkge1xuXHRcdHJldHVybiBcIidcIiArIGkucmVwbGFjZSgvKFxcJ3xcXFwiKS9nLCBcIlwiKS5yZXBsYWNlKC9cXHMqLFxccyovZywgXCInLCAnXCIpICsgXCInXCJcblx0fVxuXHRmdW5jdGlvbiBHKGksIGosIGF2KSB7XG5cdFx0YXYgPSBhdiB8fCBvO1xuXHRcdGlmIChhdi5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRhdi5hZGRFdmVudExpc3RlbmVyKGksIGosIGZhbHNlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdi5hdHRhY2hFdmVudChcIm9uXCIgKyBpLCBqKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBhbChheCwgYXosIGF3LCBhdikge1xuXHRcdHZhciBheSA9IGF2LmltYWdlU2NhbGUsXG5cdFx0ajtcblx0XHRpZiAoIWF6LmNvbXBsZXRlKSB7XG5cdFx0XHRyZXR1cm4gRyhcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbChheCwgYXosIGF3LCBhdilcblx0XHRcdH0sIGF6KVxuXHRcdH1cblx0XHRpZiAoIWF4LmNvbXBsZXRlKSB7XG5cdFx0XHRyZXR1cm4gRyhcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbChheCwgYXosIGF3LCBhdilcblx0XHRcdH0sIGF4KVxuXHRcdH1cblx0XHRhei53aWR0aCA9IGF6LndpZHRoO1xuXHRcdGF6LmhlaWdodCA9IGF6LmhlaWdodDtcblx0XHRpZiAoYXkpIHtcblx0XHRcdGF4LndpZHRoID0gYXoud2lkdGggKiBheTtcblx0XHRcdGF4LmhlaWdodCA9IGF6LmhlaWdodCAqIGF5XG5cdFx0fVxuXHRcdGF3LncgPSBheC53aWR0aDtcblx0XHRhdy5oID0gYXguaGVpZ2h0O1xuXHRcdGlmIChhdi50eHRPcHQgJiYgYXYuc2hhZG93KSB7XG5cdFx0XHRqID0gYW0oYXgsIGF2LnNoYWRvdywgYXYuc2hhZG93Qmx1ciwgYXYuc2hhZG93T2Zmc2V0KTtcblx0XHRcdGlmIChqKSB7XG5cdFx0XHRcdGF3LmltYWdlID0gajtcblx0XHRcdFx0YXcudyA9IGoud2lkdGg7XG5cdFx0XHRcdGF3LmggPSBqLmhlaWdodFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBhaShhdywgYXYpIHtcblx0XHR2YXIgaiA9IG8uZGVmYXVsdFZpZXcsXG5cdFx0aSA9IGF2LnJlcGxhY2UoL1xcLShbYS16XSkvZywgZnVuY3Rpb24gKGF4KSB7XG5cdFx0XHRcdHJldHVybiBheC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIChqICYmIGouZ2V0Q29tcHV0ZWRTdHlsZSAmJiBqLmdldENvbXB1dGVkU3R5bGUoYXcsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoYXYpKSB8fCAoYXcuY3VycmVudFN0eWxlICYmIGF3LmN1cnJlbnRTdHlsZVtpXSlcblx0fVxuXHRmdW5jdGlvbiBGKGF2LCBqKSB7XG5cdFx0dmFyIGkgPSAxLFxuXHRcdGF3O1xuXHRcdGlmIChhdi53ZWlnaHRGcm9tKSB7XG5cdFx0XHRpID0gMSAqIChqLmdldEF0dHJpYnV0ZShhdi53ZWlnaHRGcm9tKSB8fCBhdi50ZXh0SGVpZ2h0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXcgPSBhaShqLCBcImZvbnQtc2l6ZVwiKSkge1xuXHRcdFx0XHRpID0gKGF3LmluZGV4T2YoXCJweFwiKSA+IC0xICYmIGF3LnJlcGxhY2UoXCJweFwiLCBcIlwiKSAqIDEpIHx8IChhdy5pbmRleE9mKFwicHRcIikgPiAtMSAmJiBhdy5yZXBsYWNlKFwicHRcIiwgXCJcIikgKiAxLjI1KSB8fCBhdyAqIDMuM1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXYud2VpZ2h0ID0gZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGlcblx0fVxuXHRmdW5jdGlvbiBBKGkpIHtcblx0XHRyZXR1cm4gaS50YXJnZXQgJiYgYWooaS50YXJnZXQuaWQpID8gaS50YXJnZXQuaWQgOiBpLnNyY0VsZW1lbnQucGFyZW50Tm9kZS5pZFxuXHR9XG5cdGZ1bmN0aW9uIE0oYXgsIGF5KSB7XG5cdFx0dmFyIGF3LFxuXHRcdGF2LFxuXHRcdGkgPSBwYXJzZUludChhaShheSwgXCJ3aWR0aFwiKSkgLyBheS53aWR0aCxcblx0XHRqID0gcGFyc2VJbnQoYWkoYXksIFwiaGVpZ2h0XCIpKSAvIGF5LmhlaWdodDtcblx0XHRpZiAoYWooYXgub2Zmc2V0WCkpIHtcblx0XHRcdGF3ID0ge1xuXHRcdFx0XHR4IDogYXgub2Zmc2V0WCxcblx0XHRcdFx0eSA6IGF4Lm9mZnNldFlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YXYgPSByKGF5LmlkKTtcblx0XHRcdGlmIChhaihheC5jaGFuZ2VkVG91Y2hlcykpIHtcblx0XHRcdFx0YXggPSBheC5jaGFuZ2VkVG91Y2hlc1swXVxuXHRcdFx0fVxuXHRcdFx0aWYgKGF4LnBhZ2VYKSB7XG5cdFx0XHRcdGF3ID0ge1xuXHRcdFx0XHRcdHggOiBheC5wYWdlWCAtIGF2LngsXG5cdFx0XHRcdFx0eSA6IGF4LnBhZ2VZIC0gYXYueVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChhdyAmJiBpICYmIGopIHtcblx0XHRcdGF3LnggLz0gaTtcblx0XHRcdGF3LnkgLz0galxuXHRcdH1cblx0XHRyZXR1cm4gYXdcblx0fVxuXHRmdW5jdGlvbiBtKGF2KSB7XG5cdFx0dmFyIGogPSBhdi50YXJnZXQgfHwgYXYuZnJvbUVsZW1lbnQucGFyZW50Tm9kZSxcblx0XHRpID0geC50Y1tqLmlkXTtcblx0XHRpZiAoaSkge1xuXHRcdFx0aS5teCA9IGkubXkgPSAtMTtcblx0XHRcdGkuVW5GcmVlemUoKTtcblx0XHRcdGkuRW5kRHJhZygpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFnKGF6KSB7XG5cdFx0dmFyIGF3LFxuXHRcdGF2ID0geCxcblx0XHRqLFxuXHRcdGF5LFxuXHRcdGF4ID0gQShheik7XG5cdFx0Zm9yIChhdyBpbiBhdi50Yykge1xuXHRcdFx0aiA9IGF2LnRjW2F3XTtcblx0XHRcdGlmIChqLnR0dGltZXIpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KGoudHR0aW1lcik7XG5cdFx0XHRcdGoudHR0aW1lciA9IG51bGxcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGF4ICYmIGF2LnRjW2F4XSkge1xuXHRcdFx0aiA9IGF2LnRjW2F4XTtcblx0XHRcdGlmIChheSA9IE0oYXosIGouY2FudmFzKSkge1xuXHRcdFx0XHRqLm14ID0gYXkueDtcblx0XHRcdFx0ai5teSA9IGF5Lnk7XG5cdFx0XHRcdGouRHJhZyhheiwgYXkpXG5cdFx0XHR9XG5cdFx0XHRqLmRyYXduID0gMFxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBaKGF3KSB7XG5cdFx0dmFyIGogPSB4LFxuXHRcdGkgPSBvLmFkZEV2ZW50TGlzdGVuZXIgPyAwIDogMSxcblx0XHRhdiA9IEEoYXcpO1xuXHRcdGlmIChhdiAmJiBhdy5idXR0b24gPT0gaSAmJiBqLnRjW2F2XSkge1xuXHRcdFx0ai50Y1thdl0uQmVnaW5EcmFnKGF3KVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBnKGF4KSB7XG5cdFx0dmFyIGF2ID0geCxcblx0XHRqID0gby5hZGRFdmVudExpc3RlbmVyID8gMCA6IDEsXG5cdFx0YXcgPSBBKGF4KSxcblx0XHRpO1xuXHRcdGlmIChhdyAmJiBheC5idXR0b24gPT0gaiAmJiBhdi50Y1thd10pIHtcblx0XHRcdGkgPSBhdi50Y1thd107XG5cdFx0XHRhZyhheCk7XG5cdFx0XHRpZiAoIWkuRW5kRHJhZygpICYmICFpLnRvdWNoZWQpIHtcblx0XHRcdFx0aS5DbGlja2VkKGF4KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBKKGF2KSB7XG5cdFx0dmFyIGkgPSB4LFxuXHRcdGogPSBBKGF2KTtcblx0XHRpZiAoaiAmJiBhdi5jaGFuZ2VkVG91Y2hlcyAmJiBpLnRjW2pdKSB7XG5cdFx0XHRpLnRjW2pdLnRvdWNoZWQgPSAxO1xuXHRcdFx0aS50Y1tqXS5CZWdpbkRyYWcoYXYpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHAoYXYpIHtcblx0XHR2YXIgaSA9IHgsXG5cdFx0aiA9IEEoYXYpO1xuXHRcdGlmIChqICYmIGF2LmNoYW5nZWRUb3VjaGVzICYmIGkudGNbal0pIHtcblx0XHRcdGFiKGF2KTtcblx0XHRcdGlmICghaS50Y1tqXS5FbmREcmFnKCkpIHtcblx0XHRcdFx0aS50Y1tqXS5EcmF3KCk7XG5cdFx0XHRcdGkudGNbal0uQ2xpY2tlZChhdilcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gYWIoYXopIHtcblx0XHR2YXIgYXcsXG5cdFx0YXYgPSB4LFxuXHRcdGosXG5cdFx0YXksXG5cdFx0YXggPSBBKGF6KTtcblx0XHRmb3IgKGF3IGluIGF2LnRjKSB7XG5cdFx0XHRqID0gYXYudGNbYXddO1xuXHRcdFx0aWYgKGoudHR0aW1lcikge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoai50dHRpbWVyKTtcblx0XHRcdFx0ai50dHRpbWVyID0gbnVsbFxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoYXggJiYgYXYudGNbYXhdICYmIGF6LmNoYW5nZWRUb3VjaGVzKSB7XG5cdFx0XHRqID0gYXYudGNbYXhdO1xuXHRcdFx0aWYgKGF5ID0gTShheiwgai5jYW52YXMpKSB7XG5cdFx0XHRcdGoubXggPSBheS54O1xuXHRcdFx0XHRqLm15ID0gYXkueTtcblx0XHRcdFx0ai5EcmFnKGF6LCBheSlcblx0XHRcdH1cblx0XHRcdGouZHJhd24gPSAwXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFxKGF2KSB7XG5cdFx0dmFyIGkgPSB4LFxuXHRcdGogPSBBKGF2KTtcblx0XHRpZiAoaiAmJiBpLnRjW2pdKSB7XG5cdFx0XHRhdi5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdFx0YXYucmV0dXJuVmFsdWUgPSBmYWxzZTtcblx0XHRcdGF2LnByZXZlbnREZWZhdWx0ICYmIGF2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpLnRjW2pdLldoZWVsKChhdi53aGVlbERlbHRhIHx8IGF2LmRldGFpbCkgPiAwKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB0KGF4KSB7XG5cdFx0dmFyIGogPSB4LnRjLFxuXHRcdGF3LFxuXHRcdGF2O1xuXHRcdGF4ID0gYXggfHwgVCgpO1xuXHRcdGZvciAoYXcgaW4gaikge1xuXHRcdFx0YXYgPSBqW2F3XS5pbnRlcnZhbDtcblx0XHRcdGpbYXddLkRyYXcoYXgpXG5cdFx0fVxuXHRcdHguTmV4dEZyYW1lKGF2KVxuXHR9XG5cdGZ1bmN0aW9uIHIoYXYpIHtcblx0XHR2YXIgYXkgPSBvLmdldEVsZW1lbnRCeUlkKGF2KSxcblx0XHRpID0gYXkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0YUIgPSBvLmRvY3VtZW50RWxlbWVudCxcblx0XHRheiA9IG8uYm9keSxcblx0XHRhQSA9IHdpbmRvdyxcblx0XHRhdyA9IGFBLnBhZ2VYT2Zmc2V0IHx8IGFCLnNjcm9sbExlZnQsXG5cdFx0YUMgPSBhQS5wYWdlWU9mZnNldCB8fCBhQi5zY3JvbGxUb3AsXG5cdFx0YXggPSBhQi5jbGllbnRMZWZ0IHx8IGF6LmNsaWVudExlZnQsXG5cdFx0aiA9IGFCLmNsaWVudFRvcCB8fCBhei5jbGllbnRUb3A7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHggOiBpLmxlZnQgKyBhdyAtIGF4LFxuXHRcdFx0eSA6IGkudG9wICsgYUMgLSBqXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFwKGosIGF3LCBheCwgYXYpIHtcblx0XHR2YXIgaSA9IGoucmFkaXVzICogai56MSAvIChqLnoxICsgai56MiArIGF3LnopO1xuXHRcdHJldHVybiB7XG5cdFx0XHR4IDogYXcueCAqIGkgKiBheCxcblx0XHRcdHkgOiBhdy55ICogaSAqIGF2LFxuXHRcdFx0eiA6IGF3LnosXG5cdFx0XHR3IDogKGouejEgLSBhdy56KSAvIGouejJcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gUChpKSB7XG5cdFx0dGhpcy5lID0gaTtcblx0XHR0aGlzLmJyID0gMDtcblx0XHR0aGlzLmxpbmUgPSBbXTtcblx0XHR0aGlzLnRleHQgPSBbXTtcblx0XHR0aGlzLm9yaWdpbmFsID0gaS5pbm5lclRleHQgfHwgaS50ZXh0Q29udGVudFxuXHR9XG5cdHogPSBQLnByb3RvdHlwZTtcblx0ei5MaW5lcyA9IGZ1bmN0aW9uIChheCkge1xuXHRcdHZhciBhdyA9IGF4ID8gMSA6IDAsXG5cdFx0YXksXG5cdFx0aixcblx0XHRhdjtcblx0XHRheCA9IGF4IHx8IHRoaXMuZTtcblx0XHRheSA9IGF4LmNoaWxkTm9kZXM7XG5cdFx0aiA9IGF5Lmxlbmd0aDtcblx0XHRmb3IgKGF2ID0gMDsgYXYgPCBqOyArK2F2KSB7XG5cdFx0XHRpZiAoYXlbYXZdLm5vZGVOYW1lID09IFwiQlJcIikge1xuXHRcdFx0XHR0aGlzLnRleHQucHVzaCh0aGlzLmxpbmUuam9pbihcIiBcIikpO1xuXHRcdFx0XHR0aGlzLmJyID0gMVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGF5W2F2XS5ub2RlVHlwZSA9PSAzKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYnIpIHtcblx0XHRcdFx0XHRcdHRoaXMubGluZSA9IFtheVthdl0ubm9kZVZhbHVlXTtcblx0XHRcdFx0XHRcdHRoaXMuYnIgPSAwXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubGluZS5wdXNoKGF5W2F2XS5ub2RlVmFsdWUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuTGluZXMoYXlbYXZdKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF3IHx8IHRoaXMuYnIgfHwgdGhpcy50ZXh0LnB1c2godGhpcy5saW5lLmpvaW4oXCIgXCIpKTtcblx0XHRyZXR1cm4gdGhpcy50ZXh0XG5cdH07XG5cdHouU3BsaXRXaWR0aCA9IGZ1bmN0aW9uIChhdiwgYUMsIGF6LCBheSkge1xuXHRcdHZhciBheCxcblx0XHRhdyxcblx0XHRhQixcblx0XHRhQSA9IFtdO1xuXHRcdGFDLmZvbnQgPSBheSArIFwicHggXCIgKyBhejtcblx0XHRmb3IgKGF4ID0gMDsgYXggPCB0aGlzLnRleHQubGVuZ3RoOyArK2F4KSB7XG5cdFx0XHRhQiA9IHRoaXMudGV4dFtheF0uc3BsaXQoL1xccysvKTtcblx0XHRcdHRoaXMubGluZSA9IFthQlswXV07XG5cdFx0XHRmb3IgKGF3ID0gMTsgYXcgPCBhQi5sZW5ndGg7ICsrYXcpIHtcblx0XHRcdFx0aWYgKGFDLm1lYXN1cmVUZXh0KHRoaXMubGluZS5qb2luKFwiIFwiKSArIFwiIFwiICsgYUJbYXddKS53aWR0aCA+IGF2KSB7XG5cdFx0XHRcdFx0YUEucHVzaCh0aGlzLmxpbmUuam9pbihcIiBcIikpO1xuXHRcdFx0XHRcdHRoaXMubGluZSA9IFthQlthd11dXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5saW5lLnB1c2goYUJbYXddKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRhQS5wdXNoKHRoaXMubGluZS5qb2luKFwiIFwiKSlcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudGV4dCA9IGFBXG5cdH07XG5cdGZ1bmN0aW9uIGYoaSkge1xuXHRcdHRoaXMudHMgPSBUKCk7XG5cdFx0dGhpcy50YyA9IGk7XG5cdFx0dGhpcy54ID0gdGhpcy55ID0gdGhpcy53ID0gdGhpcy5oID0gdGhpcy5zYyA9IDE7XG5cdFx0dGhpcy56ID0gMDtcblx0XHR0aGlzLkRyYXcgPSBpLnB1bHNhdGVUbyA8IDEgJiYgaS5vdXRsaW5lTWV0aG9kICE9IFwiY29sb3VyXCIgPyB0aGlzLkRyYXdQdWxzYXRlIDogdGhpcy5EcmF3U2ltcGxlO1xuXHRcdHRoaXMuU2V0TWV0aG9kKGkub3V0bGluZU1ldGhvZClcblx0fVxuXHRlID0gZi5wcm90b3R5cGU7XG5cdGUuU2V0TWV0aG9kID0gZnVuY3Rpb24gKGF2KSB7XG5cdFx0dmFyIGogPSB7XG5cdFx0XHRibG9jayA6IFtcIlByZURyYXdcIiwgXCJEcmF3QmxvY2tcIl0sXG5cdFx0XHRjb2xvdXIgOiBbXCJQcmVEcmF3XCIsIFwiRHJhd0NvbG91clwiXSxcblx0XHRcdG91dGxpbmUgOiBbXCJQb3N0RHJhd1wiLCBcIkRyYXdPdXRsaW5lXCJdLFxuXHRcdFx0Y2xhc3NpYyA6IFtcIkxhc3REcmF3XCIsIFwiRHJhd091dGxpbmVcIl0sXG5cdFx0XHRub25lIDogW1wiTGFzdERyYXdcIl1cblx0XHR9LFxuXHRcdGkgPSBqW2F2XSB8fCBqLm91dGxpbmU7XG5cdFx0aWYgKGF2ID09IFwibm9uZVwiKSB7XG5cdFx0XHR0aGlzLkRyYXcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRyYXdGdW5jID0gdGhpc1tpWzFdXVxuXHRcdH1cblx0XHR0aGlzW2lbMF1dID0gdGhpcy5EcmF3XG5cdH07XG5cdGUuVXBkYXRlID0gZnVuY3Rpb24gKGFCLCBhQSwgYUMsIGF4LCBheSwgYXosIGF3LCBpKSB7XG5cdFx0dmFyIGogPSB0aGlzLnRjLm91dGxpbmVPZmZzZXQsXG5cdFx0YXYgPSAyICogajtcblx0XHR0aGlzLnggPSBheSAqIGFCICsgYXcgLSBqO1xuXHRcdHRoaXMueSA9IGF5ICogYUEgKyBpIC0gajtcblx0XHR0aGlzLncgPSBheSAqIGFDICsgYXY7XG5cdFx0dGhpcy5oID0gYXkgKiBheCArIGF2O1xuXHRcdHRoaXMuc2MgPSBheTtcblx0XHR0aGlzLnogPSBhelxuXHR9O1xuXHRlLkRyYXdPdXRsaW5lID0gZnVuY3Rpb24gKGF5LCBpLCBheCwgaiwgYXYsIGF3KSB7XG5cdFx0YXkuc3Ryb2tlU3R5bGUgPSBhdztcblx0XHRheS5zdHJva2VSZWN0KGksIGF4LCBqLCBhdilcblx0fTtcblx0ZS5EcmF3Q29sb3VyID0gZnVuY3Rpb24gKGF3LCBheiwgYXgsIGFBLCBhdiwgaSwgYUIsIGosIGF5KSB7XG5cdFx0cmV0dXJuIHRoaXNbYUIuaW1hZ2UgPyBcIkRyYXdDb2xvdXJJbWFnZVwiIDogXCJEcmF3Q29sb3VyVGV4dFwiXShhdywgYXosIGF4LCBhQSwgYXYsIGksIGFCLCBqLCBheSlcblx0fTtcblx0ZS5EcmF3Q29sb3VyVGV4dCA9IGZ1bmN0aW9uIChheCwgYUEsIGF5LCBhQiwgYXYsIGksIGFDLCBqLCBheikge1xuXHRcdHZhciBhdyA9IGFDLmNvbG91cjtcblx0XHRhQy5jb2xvdXIgPSBpO1xuXHRcdGFDLmFscGhhID0gMTtcblx0XHRhQy5EcmF3KGF4LCBqLCBheik7XG5cdFx0YUMuY29sb3VyID0gYXc7XG5cdFx0cmV0dXJuIDFcblx0fTtcblx0ZS5EcmF3Q29sb3VySW1hZ2UgPSBmdW5jdGlvbiAoYUEsIGFELCBhQiwgYUUsIGF6LCBpLCBhSCwgaiwgYUMpIHtcblx0XHR2YXIgYUYgPSBhQS5jYW52YXMsXG5cdFx0YXggPSB+fkkoYUQsIDApLFxuXHRcdGF3ID0gfn5JKGFCLCAwKSxcblx0XHRheSA9IGF0KGFGLndpZHRoIC0gYXgsIGFFKSArIDAuNSB8IDAsXG5cdFx0YUcgPSBhdChhRi5oZWlnaHQgLSBhdywgYXopICsgMC41IHwgMCxcblx0XHRhdjtcblx0XHRpZiAoSCkge1xuXHRcdFx0SC53aWR0aCA9IGF5LFxuXHRcdFx0SC5oZWlnaHQgPSBhR1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRIID0gaChheSwgYUcpXG5cdFx0fVxuXHRcdGlmICghSCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuU2V0TWV0aG9kKFwib3V0bGluZVwiKVxuXHRcdH1cblx0XHRhdiA9IEguZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdGF2LmRyYXdJbWFnZShhRiwgYXgsIGF3LCBheSwgYUcsIDAsIDAsIGF5LCBhRyk7XG5cdFx0YUEuY2xlYXJSZWN0KGF4LCBhdywgYXksIGFHKTtcblx0XHRhSC5hbHBoYSA9IDE7XG5cdFx0YUguRHJhdyhhQSwgaiwgYUMpO1xuXHRcdGFBLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcblx0XHRhQS5zYXZlKCk7XG5cdFx0YUEuYmVnaW5QYXRoKCk7XG5cdFx0YUEucmVjdChheCwgYXcsIGF5LCBhRyk7XG5cdFx0YUEuY2xpcCgpO1xuXHRcdGFBLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLWluXCI7XG5cdFx0YUEuZmlsbFN0eWxlID0gaTtcblx0XHRhQS5maWxsUmVjdChheCwgYXcsIGF5LCBhRyk7XG5cdFx0YUEucmVzdG9yZSgpO1xuXHRcdGFBLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tb3ZlclwiO1xuXHRcdGFBLmRyYXdJbWFnZShILCAwLCAwLCBheSwgYUcsIGF4LCBhdywgYXksIGFHKTtcblx0XHRhQS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCI7XG5cdFx0cmV0dXJuIDFcblx0fTtcblx0ZS5EcmF3QmxvY2sgPSBmdW5jdGlvbiAoYXksIGksIGF4LCBqLCBhdiwgYXcpIHtcblx0XHRheS5maWxsU3R5bGUgPSBhdztcblx0XHRheS5maWxsUmVjdChpLCBheCwgaiwgYXYpXG5cdH07XG5cdGUuRHJhd1NpbXBsZSA9IGZ1bmN0aW9uIChheCwgaSwgaiwgYXcpIHtcblx0XHR2YXIgYXYgPSB0aGlzLnRjO1xuXHRcdGF4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcblx0XHRheC5zdHJva2VTdHlsZSA9IGF2Lm91dGxpbmVDb2xvdXI7XG5cdFx0YXgubGluZVdpZHRoID0gYXYub3V0bGluZVRoaWNrbmVzcztcblx0XHRheC5zaGFkb3dCbHVyID0gYXguc2hhZG93T2Zmc2V0WCA9IGF4LnNoYWRvd09mZnNldFkgPSAwO1xuXHRcdGF4Lmdsb2JhbEFscGhhID0gMTtcblx0XHRyZXR1cm4gdGhpcy5kcmF3RnVuYyhheCwgdGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oLCBhdi5vdXRsaW5lQ29sb3VyLCBpLCBqLCBhdylcblx0fTtcblx0ZS5EcmF3UHVsc2F0ZSA9IGZ1bmN0aW9uIChheSwgaSwgaiwgYXcpIHtcblx0XHR2YXIgYXggPSBUKCkgLSB0aGlzLnRzLFxuXHRcdGF2ID0gdGhpcy50Yztcblx0XHRheS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG5cdFx0YXkuc3Ryb2tlU3R5bGUgPSBhdi5vdXRsaW5lQ29sb3VyO1xuXHRcdGF5LmxpbmVXaWR0aCA9IGF2Lm91dGxpbmVUaGlja25lc3M7XG5cdFx0YXkuc2hhZG93Qmx1ciA9IGF5LnNoYWRvd09mZnNldFggPSBheS5zaGFkb3dPZmZzZXRZID0gMDtcblx0XHRheS5nbG9iYWxBbHBoYSA9IGF2LnB1bHNhdGVUbyArICgoMSAtIGF2LnB1bHNhdGVUbykgKiAoMC41ICsgKGwoMiAqIE1hdGguUEkgKiBheCAvICgxMDAwICogYXYucHVsc2F0ZVRpbWUpKSAvIDIpKSk7XG5cdFx0cmV0dXJuIHRoaXMuZHJhd0Z1bmMoYXksIHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCwgYXYub3V0bGluZUNvbG91ciwgaSwgaiwgYXcpXG5cdH07XG5cdGUuQWN0aXZlID0gZnVuY3Rpb24gKGF2LCBpLCBqKSB7XG5cdFx0cmV0dXJuIChpID49IHRoaXMueCAmJiBqID49IHRoaXMueSAmJiBpIDw9IHRoaXMueCArIHRoaXMudyAmJiBqIDw9IHRoaXMueSArIHRoaXMuaClcblx0fTtcblx0ZS5QcmVEcmF3ID0gZS5Qb3N0RHJhdyA9IGUuTGFzdERyYXcgPSBZO1xuXHRmdW5jdGlvbiBTKGF3LCBhQywgYXosIGFCLCBhQSwgYXgsIGosIGF2LCBpKSB7XG5cdFx0dmFyIGF5ID0gYXcuY3R4dDtcblx0XHR0aGlzLnRjID0gYXc7XG5cdFx0dGhpcy5pbWFnZSA9IGFDLnNyYyA/IGFDIDogbnVsbDtcblx0XHR0aGlzLnRleHQgPSBhQy5zcmMgPyBbXSA6IGFDO1xuXHRcdHRoaXMudGV4dF9vcmlnaW5hbCA9IGk7XG5cdFx0dGhpcy5saW5lX3dpZHRocyA9IFtdO1xuXHRcdHRoaXMudGl0bGUgPSBhei50aXRsZSB8fCBudWxsO1xuXHRcdHRoaXMuYSA9IGF6O1xuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgVShhQlswXSwgYUJbMV0sIGFCWzJdKTtcblx0XHR0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAwO1xuXHRcdHRoaXMudyA9IGFBO1xuXHRcdHRoaXMuaCA9IGF4O1xuXHRcdHRoaXMuY29sb3VyID0gaiB8fCBhdy50ZXh0Q29sb3VyO1xuXHRcdHRoaXMudGV4dEZvbnQgPSBhdiB8fCBhdy50ZXh0Rm9udDtcblx0XHR0aGlzLndlaWdodCA9IHRoaXMuc2MgPSB0aGlzLmFscGhhID0gMTtcblx0XHR0aGlzLndlaWdodGVkID0gIWF3LndlaWdodDtcblx0XHR0aGlzLm91dGxpbmUgPSBuZXcgZihhdyk7XG5cdFx0aWYgKCF0aGlzLmltYWdlKSB7XG5cdFx0XHR0aGlzLnRleHRIZWlnaHQgPSBhdy50ZXh0SGVpZ2h0O1xuXHRcdFx0dGhpcy5leHRlbnRzID0gYWYodGhpcy50ZXh0LCB0aGlzLnRleHRGb250LCB0aGlzLnRleHRIZWlnaHQpO1xuXHRcdFx0dGhpcy5NZWFzdXJlKGF5LCBhdylcblx0XHR9XG5cdFx0dGhpcy5TZXRTaGFkb3dDb2xvdXIgPSBhdy5zaGFkb3dBbHBoYSA/IHRoaXMuU2V0U2hhZG93Q29sb3VyQWxwaGEgOiB0aGlzLlNldFNoYWRvd0NvbG91ckZpeGVkO1xuXHRcdHRoaXMuU2V0RHJhdyhhdylcblx0fVxuXHRhZCA9IFMucHJvdG90eXBlO1xuXHRhZC5FcXVhbFRvID0gZnVuY3Rpb24gKGF2KSB7XG5cdFx0dmFyIGogPSBhdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKTtcblx0XHRpZiAodGhpcy5hLmhyZWYgIT0gYXYuaHJlZikge1xuXHRcdFx0cmV0dXJuIDBcblx0XHR9XG5cdFx0aWYgKGoubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbWFnZS5zcmMgPT0galswXS5zcmNcblx0XHR9XG5cdFx0cmV0dXJuIChhdi5pbm5lclRleHQgfHwgYXYudGV4dENvbnRlbnQpID09IHRoaXMudGV4dF9vcmlnaW5hbFxuXHR9O1xuXHRhZC5TZXREcmF3ID0gZnVuY3Rpb24gKGkpIHtcblx0XHR0aGlzLkRyYXcgPSB0aGlzLmltYWdlID8gKGkuaWUgPiA3ID8gdGhpcy5EcmF3SW1hZ2VJRSA6IHRoaXMuRHJhd0ltYWdlKSA6IHRoaXMuRHJhd1RleHQ7XG5cdFx0aS5ub1NlbGVjdCAmJiAodGhpcy5DaGVja0FjdGl2ZSA9IFkpXG5cdH07XG5cdGFkLk1lYXN1cmVUZXh0ID0gZnVuY3Rpb24gKGF5KSB7XG5cdFx0dmFyIGF3LFxuXHRcdGF2ID0gdGhpcy50ZXh0Lmxlbmd0aCxcblx0XHRqID0gMCxcblx0XHRheDtcblx0XHRmb3IgKGF3ID0gMDsgYXcgPCBhdjsgKythdykge1xuXHRcdFx0dGhpcy5saW5lX3dpZHRoc1thd10gPSBheCA9IGF5Lm1lYXN1cmVUZXh0KHRoaXMudGV4dFthd10pLndpZHRoO1xuXHRcdFx0aiA9IEkoaiwgYXgpXG5cdFx0fVxuXHRcdHJldHVybiBqXG5cdH07XG5cdGFkLk1lYXN1cmUgPSBmdW5jdGlvbiAoYXosIGopIHtcblx0XHR0aGlzLmggPSB0aGlzLmV4dGVudHMgPyB0aGlzLmV4dGVudHMubWF4LnkgKyB0aGlzLmV4dGVudHMubWluLnkgOiB0aGlzLnRleHRIZWlnaHQ7XG5cdFx0YXouZm9udCA9IHRoaXMuZm9udCA9IHRoaXMudGV4dEhlaWdodCArIFwicHggXCIgKyB0aGlzLnRleHRGb250O1xuXHRcdHRoaXMudyA9IHRoaXMuTWVhc3VyZVRleHQoYXopO1xuXHRcdGlmIChqLnR4dE9wdCkge1xuXHRcdFx0dmFyIGF3ID0gai50eHRTY2FsZSxcblx0XHRcdGF4ID0gYXcgKiB0aGlzLnRleHRIZWlnaHQsXG5cdFx0XHRheSA9IGF4ICsgXCJweCBcIiArIHRoaXMudGV4dEZvbnQsXG5cdFx0XHRhdiA9IFthdyAqIGouc2hhZG93T2Zmc2V0WzBdLCBhdyAqIGouc2hhZG93T2Zmc2V0WzFdXSxcblx0XHRcdGk7XG5cdFx0XHRhei5mb250ID0gYXk7XG5cdFx0XHRpID0gdGhpcy5NZWFzdXJlVGV4dChheik7XG5cdFx0XHR0aGlzLmltYWdlID0gcSh0aGlzLnRleHQsIGF5LCBheCwgaSwgYXcgKiB0aGlzLmgsIHRoaXMuY29sb3VyLCBqLnNoYWRvdywgYXcgKiBqLnNoYWRvd0JsdXIsIGF2LCBhdywgYXcsIGksIHRoaXMubGluZV93aWR0aHMpO1xuXHRcdFx0aWYgKHRoaXMuaW1hZ2UpIHtcblx0XHRcdFx0dGhpcy53ID0gdGhpcy5pbWFnZS53aWR0aCAvIGF3O1xuXHRcdFx0XHR0aGlzLmggPSB0aGlzLmltYWdlLmhlaWdodCAvIGF3XG5cdFx0XHR9XG5cdFx0XHR0aGlzLlNldERyYXcoaik7XG5cdFx0XHRqLnR4dE9wdCA9ICEhdGhpcy5pbWFnZVxuXHRcdH1cblx0fTtcblx0YWQuU2V0Rm9udCA9IGZ1bmN0aW9uIChpLCBqKSB7XG5cdFx0dGhpcy50ZXh0Rm9udCA9IGk7XG5cdFx0dGhpcy5jb2xvdXIgPSBqO1xuXHRcdHRoaXMuZXh0ZW50cyA9IGFmKHRoaXMudGV4dCwgdGhpcy50ZXh0Rm9udCwgdGhpcy50ZXh0SGVpZ2h0KTtcblx0XHR0aGlzLk1lYXN1cmUodGhpcy50Yy5jdHh0LCB0aGlzLnRjKVxuXHR9O1xuXHRhZC5TZXRXZWlnaHQgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGlmICghdGhpcy50ZXh0Lmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHRoaXMud2VpZ2h0ID0gaTtcblx0XHR0aGlzLldlaWdodCh0aGlzLnRjLmN0eHQsIHRoaXMudGMpO1xuXHRcdHRoaXMuTWVhc3VyZSh0aGlzLnRjLmN0eHQsIHRoaXMudGMpXG5cdH07XG5cdGFkLldlaWdodCA9IGZ1bmN0aW9uIChhdywgYXYpIHtcblx0XHR2YXIgaiA9IHRoaXMud2VpZ2h0LFxuXHRcdGkgPSBhdi53ZWlnaHRNb2RlO1xuXHRcdHRoaXMud2VpZ2h0ZWQgPSB0cnVlO1xuXHRcdGlmIChpID09IFwiY29sb3VyXCIgfHwgaSA9PSBcImJvdGhcIikge1xuXHRcdFx0dGhpcy5jb2xvdXIgPSBhdShhdiwgKGogLSBhdi5taW5fd2VpZ2h0KSAvIChhdi5tYXhfd2VpZ2h0IC0gYXYubWluX3dlaWdodCkpXG5cdFx0fVxuXHRcdGlmIChpID09IFwic2l6ZVwiIHx8IGkgPT0gXCJib3RoXCIpIHtcblx0XHRcdGlmIChhdi53ZWlnaHRTaXplTWluID4gMCAmJiBhdi53ZWlnaHRTaXplTWF4ID4gYXYud2VpZ2h0U2l6ZU1pbikge1xuXHRcdFx0XHR0aGlzLnRleHRIZWlnaHQgPSBhdi53ZWlnaHRTaXplICogKGF2LndlaWdodFNpemVNaW4gKyAoYXYud2VpZ2h0U2l6ZU1heCAtIGF2LndlaWdodFNpemVNaW4pICogKGogLSBhdi5taW5fd2VpZ2h0KSAvIChhdi5tYXhfd2VpZ2h0IC0gYXYubWluX3dlaWdodCkpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRleHRIZWlnaHQgPSBqICogYXYud2VpZ2h0U2l6ZVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmV4dGVudHMgPSBhZih0aGlzLnRleHQsIHRoaXMudGV4dEZvbnQsIHRoaXMudGV4dEhlaWdodClcblx0fTtcblx0YWQuU2V0U2hhZG93Q29sb3VyRml4ZWQgPSBmdW5jdGlvbiAoYXYsIGosIGkpIHtcblx0XHRhdi5zaGFkb3dDb2xvciA9IGpcblx0fTtcblx0YWQuU2V0U2hhZG93Q29sb3VyQWxwaGEgPSBmdW5jdGlvbiAoYXYsIGosIGkpIHtcblx0XHRhdi5zaGFkb3dDb2xvciA9IHUoaiwgaSlcblx0fTtcblx0YWQuRHJhd1RleHQgPSBmdW5jdGlvbiAoYXgsIGFBLCBhdykge1xuXHRcdHZhciBhQiA9IHRoaXMudGMsXG5cdFx0YXogPSB0aGlzLngsXG5cdFx0YXkgPSB0aGlzLnksXG5cdFx0YUMgPSB0aGlzLnNjLFxuXHRcdGosXG5cdFx0YXY7XG5cdFx0YXguZ2xvYmFsQWxwaGEgPSB0aGlzLmFscGhhO1xuXHRcdGF4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3VyO1xuXHRcdGFCLnNoYWRvdyAmJiB0aGlzLlNldFNoYWRvd0NvbG91cihheCwgYUIuc2hhZG93LCB0aGlzLmFscGhhKTtcblx0XHRheC5mb250ID0gdGhpcy5mb250O1xuXHRcdGF6ICs9IGFBIC8gYUM7XG5cdFx0YXkgKz0gKGF3IC8gYUMpIC0gKHRoaXMuaCAvIDIpO1xuXHRcdGZvciAoaiA9IDA7IGogPCB0aGlzLnRleHQubGVuZ3RoOyArK2opIHtcblx0XHRcdGF2ID0gYXogLSAodGhpcy5saW5lX3dpZHRoc1tqXSAvIDIpO1xuXHRcdFx0YXguc2V0VHJhbnNmb3JtKGFDLCAwLCAwLCBhQywgYUMgKiBhdiwgYUMgKiBheSk7XG5cdFx0XHRheC5maWxsVGV4dCh0aGlzLnRleHRbal0sIDAsIDApO1xuXHRcdFx0YXkgKz0gdGhpcy50ZXh0SGVpZ2h0XG5cdFx0fVxuXHR9O1xuXHRhZC5EcmF3SW1hZ2UgPSBmdW5jdGlvbiAoYXgsIGFELCBhdykge1xuXHRcdHZhciBhQSA9IHRoaXMueCxcblx0XHRheSA9IHRoaXMueSxcblx0XHRhRSA9IHRoaXMuc2MsXG5cdFx0aiA9IHRoaXMuaW1hZ2UsXG5cdFx0YUIgPSB0aGlzLncsXG5cdFx0YXYgPSB0aGlzLmgsXG5cdFx0YXogPSB0aGlzLmFscGhhLFxuXHRcdGFDID0gdGhpcy5zaGFkb3c7XG5cdFx0YXguZ2xvYmFsQWxwaGEgPSBhejtcblx0XHRhQyAmJiB0aGlzLlNldFNoYWRvd0NvbG91cihheCwgYUMsIGF6KTtcblx0XHRhQSArPSAoYUQgLyBhRSkgLSAoYUIgLyAyKTtcblx0XHRheSArPSAoYXcgLyBhRSkgLSAoYXYgLyAyKTtcblx0XHRheC5zZXRUcmFuc2Zvcm0oYUUsIDAsIDAsIGFFLCBhRSAqIGFBLCBhRSAqIGF5KTtcblx0XHRheC5kcmF3SW1hZ2UoaiwgMCwgMCwgYUIsIGF2KVxuXHR9O1xuXHRhZC5EcmF3SW1hZ2VJRSA9IGZ1bmN0aW9uIChheCwgYUIsIGF3KSB7XG5cdFx0dmFyIGogPSB0aGlzLmltYWdlLFxuXHRcdGFDID0gdGhpcy5zYyxcblx0XHRhQSA9IGoud2lkdGggPSB0aGlzLncgKiBhQyxcblx0XHRhdiA9IGouaGVpZ2h0ID0gdGhpcy5oICogYUMsXG5cdFx0YXogPSAodGhpcy54ICogYUMpICsgYUIgLSAoYUEgLyAyKSxcblx0XHRheSA9ICh0aGlzLnkgKiBhQykgKyBhdyAtIChhdiAvIDIpO1xuXHRcdGF4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcblx0XHRheC5nbG9iYWxBbHBoYSA9IHRoaXMuYWxwaGE7XG5cdFx0YXguZHJhd0ltYWdlKGosIGF6LCBheSlcblx0fTtcblx0YWQuQ2FsYyA9IGZ1bmN0aW9uIChpLCBhdikge1xuXHRcdHZhciBqLFxuXHRcdGF5ID0gdGhpcy50Yyxcblx0XHRheCA9IGF5Lm1pbkJyaWdodG5lc3MsXG5cdFx0YXcgPSBheS5tYXhCcmlnaHRuZXNzLFxuXHRcdGF6ID0gYXkubWF4X3JhZGl1cztcblx0XHRqID0gaS54Zm9ybSh0aGlzLnBvc2l0aW9uKTtcblx0XHR0aGlzLnhmb3JtZWQgPSBqO1xuXHRcdGogPSBhcChheSwgaiwgYXkuc3RyZXRjaFgsIGF5LnN0cmV0Y2hZKTtcblx0XHR0aGlzLnggPSBqLng7XG5cdFx0dGhpcy55ID0gai55O1xuXHRcdHRoaXMueiA9IGouejtcblx0XHR0aGlzLnNjID0gai53O1xuXHRcdHRoaXMuYWxwaGEgPSBhdiAqIGIoYXggKyAoYXcgLSBheCkgKiAoYXogLSB0aGlzLnopIC8gKDIgKiBheiksIDAsIDEpXG5cdH07XG5cdGFkLkNoZWNrQWN0aXZlID0gZnVuY3Rpb24gKGF3LCBhQSwgYXYpIHtcblx0XHR2YXIgYUIgPSB0aGlzLnRjLFxuXHRcdGkgPSB0aGlzLm91dGxpbmUsXG5cdFx0YXogPSB0aGlzLncsXG5cdFx0aiA9IHRoaXMuaCxcblx0XHRheSA9IHRoaXMueCAtIGF6IC8gMixcblx0XHRheCA9IHRoaXMueSAtIGogLyAyO1xuXHRcdGkuVXBkYXRlKGF5LCBheCwgYXosIGosIHRoaXMuc2MsIHRoaXMueiwgYUEsIGF2KTtcblx0XHRyZXR1cm4gaS5BY3RpdmUoYXcsIGFCLm14LCBhQi5teSkgPyBpIDogbnVsbFxuXHR9O1xuXHRhZC5DbGlja2VkID0gZnVuY3Rpb24gKGF5KSB7XG5cdFx0dmFyIGogPSB0aGlzLmEsXG5cdFx0YXYgPSBqLnRhcmdldCxcblx0XHRhdyA9IGouaHJlZixcblx0XHRpO1xuXHRcdGlmIChhdiAhPSBcIlwiICYmIGF2ICE9IFwiX3NlbGZcIikge1xuXHRcdFx0aWYgKHNlbGYuZnJhbWVzW2F2XSkge1xuXHRcdFx0XHRzZWxmLmZyYW1lc1thdl0uZG9jdW1lbnQubG9jYXRpb24gPSBhd1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAodG9wLmZyYW1lc1thdl0pIHtcblx0XHRcdFx0XHRcdHRvcC5mcmFtZXNbYXZdLmRvY3VtZW50LmxvY2F0aW9uID0gYXc7XG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGF4KSB7fVxuXG5cdFx0XHRcdHdpbmRvdy5vcGVuKGF3LCBhdilcblx0XHRcdH1cblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZiAoby5jcmVhdGVFdmVudCkge1xuXHRcdFx0aSA9IG8uY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcblx0XHRcdGkuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCAxLCAxLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIG51bGwpO1xuXHRcdFx0aWYgKCFqLmRpc3BhdGNoRXZlbnQoaSkpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChqLmZpcmVFdmVudCkge1xuXHRcdFx0XHRpZiAoIWouZmlyZUV2ZW50KFwib25jbGlja1wiKSkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG8ubG9jYXRpb24gPSBhd1xuXHR9O1xuXHRmdW5jdGlvbiB4KGFBLCBqLCBhdykge1xuXHRcdHZhciBhdixcblx0XHRheSxcblx0XHRheiA9IG8uZ2V0RWxlbWVudEJ5SWQoYUEpLFxuXHRcdGF4ID0gW1wiaWRcIiwgXCJjbGFzc1wiLCBcImlubmVySFRNTFwiXTtcblx0XHRpZiAoIWF6KSB7XG5cdFx0XHR0aHJvdyAwXG5cdFx0fVxuXHRcdGlmIChhaih3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyKSkge1xuXHRcdFx0YXogPSB3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KGF6KTtcblx0XHRcdHRoaXMuaWUgPSBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uLnNwbGl0KFwiTVNJRVwiKVsxXSlcblx0XHR9XG5cdFx0aWYgKGF6ICYmICghYXouZ2V0Q29udGV4dCB8fCAhYXouZ2V0Q29udGV4dChcIjJkXCIpLmZpbGxUZXh0KSkge1xuXHRcdFx0YXkgPSBvLmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG5cdFx0XHRmb3IgKGF2ID0gMDsgYXYgPCBheC5sZW5ndGg7ICsrYXYpIHtcblx0XHRcdFx0YXlbYXhbYXZdXSA9IGF6W2F4W2F2XV1cblx0XHRcdH1cblx0XHRcdGF6LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGF5LCBheik7XG5cdFx0XHRhei5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGF6KTtcblx0XHRcdHRocm93IDBcblx0XHR9XG5cdFx0Zm9yIChhdiBpbiB4Lm9wdGlvbnMpIHtcblx0XHRcdHRoaXNbYXZdID0gYXcgJiYgYWooYXdbYXZdKSA/IGF3W2F2XSA6IChhaih4W2F2XSkgPyB4W2F2XSA6IHgub3B0aW9uc1thdl0pXG5cdFx0fVxuXHRcdHRoaXMuY2FudmFzID0gYXo7XG5cdFx0dGhpcy5jdHh0ID0gYXouZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHRoaXMuejEgPSAyNTAgLyB0aGlzLmRlcHRoO1xuXHRcdHRoaXMuejIgPSB0aGlzLnoxIC8gdGhpcy56b29tO1xuXHRcdHRoaXMucmFkaXVzID0gYXQoYXouaGVpZ2h0LCBhei53aWR0aCkgKiAwLjAwNzU7XG5cdFx0dGhpcy5tYXhfd2VpZ2h0ID0gMDtcblx0XHR0aGlzLm1pbl93ZWlnaHQgPSAyMDA7XG5cdFx0dGhpcy50ZXh0Rm9udCA9IHRoaXMudGV4dEZvbnQgJiYgeSh0aGlzLnRleHRGb250KTtcblx0XHR0aGlzLnRleHRIZWlnaHQgKj0gMTtcblx0XHR0aGlzLnB1bHNhdGVUbyA9IGIodGhpcy5wdWxzYXRlVG8sIDAsIDEpO1xuXHRcdHRoaXMubWluQnJpZ2h0bmVzcyA9IGIodGhpcy5taW5CcmlnaHRuZXNzLCAwLCAxKTtcblx0XHR0aGlzLm1heEJyaWdodG5lc3MgPSBiKHRoaXMubWF4QnJpZ2h0bmVzcywgdGhpcy5taW5CcmlnaHRuZXNzLCAxKTtcblx0XHR0aGlzLmN0eHQudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcblx0XHR0aGlzLmx4ID0gKHRoaXMubG9jayArIFwiXCIpLmluZGV4T2YoXCJ4XCIpICsgMTtcblx0XHR0aGlzLmx5ID0gKHRoaXMubG9jayArIFwiXCIpLmluZGV4T2YoXCJ5XCIpICsgMTtcblx0XHR0aGlzLmZyb3plbiA9IHRoaXMuZHggPSB0aGlzLmR5ID0gdGhpcy5maXhlZEFuaW0gPSB0aGlzLnRvdWNoZWQgPSAwO1xuXHRcdHRoaXMuZml4ZWRBbHBoYSA9IDE7XG5cdFx0dGhpcy5zb3VyY2UgPSBqIHx8IGFBO1xuXHRcdHRoaXMudHJhbnNmb3JtID0gay5JZGVudGl0eSgpO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aW1lID0gVCgpO1xuXHRcdHRoaXMuQW5pbWF0ZSA9IHRoaXMuZHJhZ0NvbnRyb2wgPyB0aGlzLkFuaW1hdGVEcmFnIDogdGhpcy5BbmltYXRlUG9zaXRpb247XG5cdFx0dGhpcy5hbmltVGltaW5nID0gKHR5cGVvZiB4W3RoaXMuYW5pbVRpbWluZ10gPT0gXCJmdW5jdGlvblwiID8geFt0aGlzLmFuaW1UaW1pbmddIDogeC5TbW9vdGgpO1xuXHRcdGlmICh0aGlzLnNoYWRvd0JsdXIgfHwgdGhpcy5zaGFkb3dPZmZzZXRbMF0gfHwgdGhpcy5zaGFkb3dPZmZzZXRbMV0pIHtcblx0XHRcdHRoaXMuY3R4dC5zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93O1xuXHRcdFx0dGhpcy5zaGFkb3cgPSB0aGlzLmN0eHQuc2hhZG93Q29sb3I7XG5cdFx0XHR0aGlzLnNoYWRvd0FscGhhID0gRCgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlbGV0ZSB0aGlzLnNoYWRvd1xuXHRcdH1cblx0XHR0aGlzLkxvYWQoKTtcblx0XHRpZiAoaiAmJiB0aGlzLmhpZGVUYWdzKSB7XG5cdFx0XHQoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0aWYgKHgubG9hZGVkKSB7XG5cdFx0XHRcdFx0aS5IaWRlVGFncygpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0RyhcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aS5IaWRlVGFncygpXG5cdFx0XHRcdFx0fSwgd2luZG93KVxuXHRcdFx0XHR9XG5cdFx0XHR9KSh0aGlzKVxuXHRcdH1cblx0XHR0aGlzLnlhdyA9IHRoaXMuaW5pdGlhbCA/IHRoaXMuaW5pdGlhbFswXSAqIHRoaXMubWF4U3BlZWQgOiAwO1xuXHRcdHRoaXMucGl0Y2ggPSB0aGlzLmluaXRpYWwgPyB0aGlzLmluaXRpYWxbMV0gKiB0aGlzLm1heFNwZWVkIDogMDtcblx0XHRpZiAodGhpcy50b29sdGlwKSB7XG5cdFx0XHRpZiAodGhpcy50b29sdGlwID09IFwibmF0aXZlXCIpIHtcblx0XHRcdFx0dGhpcy5Ub29sdGlwID0gdGhpcy5Ub29sdGlwTmF0aXZlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLlRvb2x0aXAgPSB0aGlzLlRvb2x0aXBEaXY7XG5cdFx0XHRcdGlmICghdGhpcy50dGRpdikge1xuXHRcdFx0XHRcdHRoaXMudHRkaXYgPSBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0dGhpcy50dGRpdi5jbGFzc05hbWUgPSB0aGlzLnRvb2x0aXBDbGFzcztcblx0XHRcdFx0XHR0aGlzLnR0ZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdFx0XHRcdHRoaXMudHRkaXYuc3R5bGUuekluZGV4ID0gYXouc3R5bGUuekluZGV4ICsgMTtcblx0XHRcdFx0XHRHKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0XHRpLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcblx0XHRcdFx0XHR9LCB0aGlzLnR0ZGl2KTtcblx0XHRcdFx0XHRvLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50dGRpdilcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLlRvb2x0aXAgPSB0aGlzLlRvb2x0aXBOb25lXG5cdFx0fVxuXHRcdGlmICghdGhpcy5ub01vdXNlICYmICFjW2FBXSkge1xuXHRcdFx0RyhcIm1vdXNlbW92ZVwiLCBhZywgYXopO1xuXHRcdFx0RyhcIm1vdXNlb3V0XCIsIG0sIGF6KTtcblx0XHRcdEcoXCJtb3VzZXVwXCIsIGcsIGF6KTtcblx0XHRcdEcoXCJ0b3VjaHN0YXJ0XCIsIEosIGF6KTtcblx0XHRcdEcoXCJ0b3VjaGVuZFwiLCBwLCBheik7XG5cdFx0XHRHKFwidG91Y2hjYW5jZWxcIiwgcCwgYXopO1xuXHRcdFx0RyhcInRvdWNobW92ZVwiLCBhYiwgYXopO1xuXHRcdFx0aWYgKHRoaXMuZHJhZ0NvbnRyb2wpIHtcblx0XHRcdFx0RyhcIm1vdXNlZG93blwiLCBaLCBheik7XG5cdFx0XHRcdEcoXCJzZWxlY3RzdGFydFwiLCBZLCBheilcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLndoZWVsWm9vbSkge1xuXHRcdFx0XHRHKFwibW91c2V3aGVlbFwiLCBhcSwgYXopO1xuXHRcdFx0XHRHKFwiRE9NTW91c2VTY3JvbGxcIiwgYXEsIGF6KVxuXHRcdFx0fVxuXHRcdFx0Y1thQV0gPSAxXG5cdFx0fVxuXHRcdHguc3RhcnRlZCB8fCAoeC5zdGFydGVkID0gc2V0VGltZW91dCh0LCB0aGlzLmludGVydmFsKSlcblx0fVxuXHRkID0geC5wcm90b3R5cGU7XG5cdGQuU291cmNlRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKG8ucXVlcnlTZWxlY3RvckFsbCkge1xuXHRcdFx0cmV0dXJuIG8ucXVlcnlTZWxlY3RvckFsbChcIiNcIiArIHRoaXMuc291cmNlKVxuXHRcdH1cblx0XHRyZXR1cm4gW28uZ2V0RWxlbWVudEJ5SWQodGhpcy5zb3VyY2UpXVxuXHR9O1xuXHRkLkhpZGVUYWdzID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBhdiA9IHRoaXMuU291cmNlRWxlbWVudHMoKSxcblx0XHRqO1xuXHRcdGZvciAoaiA9IDA7IGogPCBhdi5sZW5ndGg7ICsraikge1xuXHRcdFx0YXZbal0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5cdFx0fVxuXHR9O1xuXHRkLkdldFRhZ3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGF6ID0gdGhpcy5Tb3VyY2VFbGVtZW50cygpLFxuXHRcdGF5LFxuXHRcdGF2ID0gW10sXG5cdFx0YXgsXG5cdFx0YXc7XG5cdFx0Zm9yIChheCA9IDA7IGF4IDwgYXoubGVuZ3RoOyArK2F4KSB7XG5cdFx0XHRheSA9IGF6W2F4XS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIik7XG5cdFx0XHRmb3IgKGF3ID0gMDsgYXcgPCBheS5sZW5ndGg7ICsrYXcpIHtcblx0XHRcdFx0YXYucHVzaChheVthd10pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBhdlxuXHR9O1xuXHRkLkNyZWF0ZVRhZyA9IGZ1bmN0aW9uIChhQSwgYXopIHtcblx0XHR2YXIgaiA9IGFBLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpLFxuXHRcdGF4LFxuXHRcdGF3LFxuXHRcdGF5LFxuXHRcdGF2O1xuXHRcdGF6ID0gYXogfHwgWzAsIDAsIDBdO1xuXHRcdGlmIChqLmxlbmd0aCkge1xuXHRcdFx0YXggPSBuZXcgSW1hZ2U7XG5cdFx0XHRheC5zcmMgPSBqWzBdLnNyYztcblx0XHRcdGF3ID0gbmV3IFModGhpcywgYXgsIGFBLCBheiwgMCwgMCk7XG5cdFx0XHRhbChheCwgalswXSwgYXcsIHRoaXMpO1xuXHRcdFx0cmV0dXJuIGF3XG5cdFx0fVxuXHRcdGF5ID0gbmV3IFAoYUEpO1xuXHRcdGF3ID0gYXkuTGluZXMoKTtcblx0XHRhdiA9IHRoaXMudGV4dEZvbnQgfHwgeShhaShhQSwgXCJmb250LWZhbWlseVwiKSk7XG5cdFx0aWYgKHRoaXMuc3BsaXRXaWR0aCkge1xuXHRcdFx0YXcgPSBheS5TcGxpdFdpZHRoKHRoaXMuc3BsaXRXaWR0aCwgdGhpcy5jdHh0LCBhdiwgdGhpcy50ZXh0SGVpZ2h0KVxuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFModGhpcywgYXcsIGFBLCBheiwgMiwgdGhpcy50ZXh0SGVpZ2h0ICsgMiwgdGhpcy50ZXh0Q29sb3VyIHx8IGFpKGFBLCBcImNvbG9yXCIpLCBhdiwgYXkub3JpZ2luYWwpXG5cdH07XG5cdGQuVXBkYXRlVGFnID0gZnVuY3Rpb24gKGF2LCBpKSB7XG5cdFx0dmFyIGF3ID0gdGhpcy50ZXh0Q29sb3VyIHx8IGFpKGksIFwiY29sb3JcIiksXG5cdFx0aiA9IHRoaXMudGV4dEZvbnQgfHwgeShhaShpLCBcImZvbnQtZmFtaWx5XCIpKTtcblx0XHRhdi50aXRsZSA9IGkudGl0bGU7XG5cdFx0aWYgKGF2LmNvbG91ciAhPSBhdyB8fCBhdi50ZXh0Rm9udCAhPSBqKSB7XG5cdFx0XHRhdi5TZXRGb250KGosIGF3KVxuXHRcdH1cblx0fTtcblx0ZC5XZWlnaHQgPSBmdW5jdGlvbiAoYXcpIHtcblx0XHR2YXIgYXYgPSBhdy5sZW5ndGgsXG5cdFx0aixcblx0XHRheCxcblx0XHRheSA9IFtdO1xuXHRcdGZvciAoYXggPSAwOyBheCA8IGF2OyArK2F4KSB7XG5cdFx0XHRqID0gRih0aGlzLCBhd1theF0uYSk7XG5cdFx0XHRpZiAoaiA+IHRoaXMubWF4X3dlaWdodCkge1xuXHRcdFx0XHR0aGlzLm1heF93ZWlnaHQgPSBqXG5cdFx0XHR9XG5cdFx0XHRpZiAoaiA8IHRoaXMubWluX3dlaWdodCkge1xuXHRcdFx0XHR0aGlzLm1pbl93ZWlnaHQgPSBqXG5cdFx0XHR9XG5cdFx0XHRheS5wdXNoKGopXG5cdFx0fVxuXHRcdGlmICh0aGlzLm1heF93ZWlnaHQgPiB0aGlzLm1pbl93ZWlnaHQpIHtcblx0XHRcdGZvciAoYXggPSAwOyBheCA8IGF2OyArK2F4KSB7XG5cdFx0XHRcdGF3W2F4XS5TZXRXZWlnaHQoYXlbYXhdKVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0ZC5Mb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBhRSA9IHRoaXMuR2V0VGFncygpLFxuXHRcdGFBID0gW10sXG5cdFx0YUQsXG5cdFx0YXosXG5cdFx0YXcsXG5cdFx0YXYsXG5cdFx0aixcblx0XHRheCxcblx0XHRhQyxcblx0XHRheSA9IFtdLFxuXHRcdGFCID0ge1xuXHRcdFx0c3BoZXJlIDogcyxcblx0XHRcdHZjeWxpbmRlciA6IEUsXG5cdFx0XHRoY3lsaW5kZXIgOiBXLFxuXHRcdFx0dnJpbmcgOiBDLFxuXHRcdFx0aHJpbmcgOiBOXG5cdFx0fTtcblx0XHRpZiAoYUUubGVuZ3RoKSB7XG5cdFx0XHRheS5sZW5ndGggPSBhRS5sZW5ndGg7XG5cdFx0XHRmb3IgKGFDID0gMDsgYUMgPCBhRS5sZW5ndGg7ICsrYUMpIHtcblx0XHRcdFx0YXlbYUNdID0gYUNcblx0XHRcdH1cblx0XHRcdHRoaXMuc2h1ZmZsZVRhZ3MgJiYgYWMoYXkpO1xuXHRcdFx0YXcgPSAxMDAgKiB0aGlzLnJhZGl1c1g7XG5cdFx0XHRhdiA9IDEwMCAqIHRoaXMucmFkaXVzWTtcblx0XHRcdGogPSAxMDAgKiB0aGlzLnJhZGl1c1o7XG5cdFx0XHR0aGlzLm1heF9yYWRpdXMgPSBJKGF3LCBJKGF2LCBqKSk7XG5cdFx0XHRpZiAodGhpcy5zaGFwZUFyZ3MpIHtcblx0XHRcdFx0dGhpcy5zaGFwZUFyZ3NbMF0gPSBhRS5sZW5ndGhcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF6ID0gdGhpcy5zaGFwZS50b1N0cmluZygpLnNwbGl0KC9bKCksXS8pO1xuXHRcdFx0XHRhRCA9IGF6LnNoaWZ0KCk7XG5cdFx0XHRcdHRoaXMuc2hhcGUgPSBhQlthRF0gfHwgYUIuc3BoZXJlO1xuXHRcdFx0XHR0aGlzLnNoYXBlQXJncyA9IFthRS5sZW5ndGgsIGF3LCBhdiwgal0uY29uY2F0KGF6KVxuXHRcdFx0fVxuXHRcdFx0YXggPSB0aGlzLnNoYXBlLmFwcGx5KHRoaXMsIHRoaXMuc2hhcGVBcmdzKTtcblx0XHRcdHRoaXMubGlzdExlbmd0aCA9IGFFLmxlbmd0aDtcblx0XHRcdGZvciAoYUMgPSAwOyBhQyA8IGFFLmxlbmd0aDsgKythQykge1xuXHRcdFx0XHRhQS5wdXNoKHRoaXMuQ3JlYXRlVGFnKGFFW2F5W2FDXV0sIGF4W2FDXSkpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndlaWdodCAmJiB0aGlzLldlaWdodChhQSwgdHJ1ZSlcblx0XHR9XG5cdFx0dGhpcy50YWdsaXN0ID0gYUFcblx0fTtcblx0ZC5VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGFFID0gdGhpcy5HZXRUYWdzKCksXG5cdFx0YUQgPSBbXSxcblx0XHRheSA9IHRoaXMudGFnbGlzdCxcblx0XHRhRixcblx0XHRhQyA9IFtdLFxuXHRcdGFBID0gW10sXG5cdFx0YXcsXG5cdFx0YUIsXG5cdFx0YXYsXG5cdFx0YXosXG5cdFx0YXg7XG5cdFx0aWYgKCF0aGlzLnNoYXBlQXJncykge1xuXHRcdFx0cmV0dXJuIHRoaXMuTG9hZCgpXG5cdFx0fVxuXHRcdGlmIChhRS5sZW5ndGgpIHtcblx0XHRcdGF2ID0gdGhpcy5saXN0TGVuZ3RoID0gYUUubGVuZ3RoO1xuXHRcdFx0YUIgPSBheS5sZW5ndGg7XG5cdFx0XHRmb3IgKGF6ID0gMDsgYXogPCBhQjsgKytheikge1xuXHRcdFx0XHRhRC5wdXNoKGF5W2F6XSk7XG5cdFx0XHRcdGFBLnB1c2goYXopXG5cdFx0XHR9XG5cdFx0XHRmb3IgKGF6ID0gMDsgYXogPCBhdjsgKytheikge1xuXHRcdFx0XHRmb3IgKGF4ID0gMCwgYUYgPSAwOyBheCA8IGFCOyArK2F4KSB7XG5cdFx0XHRcdFx0aWYgKGF5W2F4XS5FcXVhbFRvKGFFW2F6XSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuVXBkYXRlVGFnKGFEW2F4XSwgYUVbYXpdKTtcblx0XHRcdFx0XHRcdGFGID0gYUFbYXhdID0gLTFcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFhRikge1xuXHRcdFx0XHRcdGFDLnB1c2goYXopXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAoYXogPSAwLCBheCA9IDA7IGF6IDwgYUI7ICsrYXopIHtcblx0XHRcdFx0aWYgKGFBW2F4XSA9PSAtMSkge1xuXHRcdFx0XHRcdGFBLnNwbGljZShheCwgMSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQrK2F4XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChhQS5sZW5ndGgpIHtcblx0XHRcdFx0YWMoYUEpO1xuXHRcdFx0XHR3aGlsZSAoYUEubGVuZ3RoICYmIGFDLmxlbmd0aCkge1xuXHRcdFx0XHRcdGF6ID0gYUEuc2hpZnQoKTtcblx0XHRcdFx0XHRheCA9IGFDLnNoaWZ0KCk7XG5cdFx0XHRcdFx0YURbYXpdID0gdGhpcy5DcmVhdGVUYWcoYUVbYXhdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGFBLnNvcnQoZnVuY3Rpb24gKGosIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gaiAtIGlcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHdoaWxlIChhQS5sZW5ndGgpIHtcblx0XHRcdFx0XHRhRC5zcGxpY2UoYUEucG9wKCksIDEpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGF4ID0gYUQubGVuZ3RoIC8gKGFDLmxlbmd0aCArIDEpO1xuXHRcdFx0YXogPSAwO1xuXHRcdFx0d2hpbGUgKGFDLmxlbmd0aCkge1xuXHRcdFx0XHRhRC5zcGxpY2UoVigrK2F6ICogYXgpLCAwLCB0aGlzLkNyZWF0ZVRhZyhhRVthQy5zaGlmdCgpXSkpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNoYXBlQXJnc1swXSA9IGF2ID0gYUQubGVuZ3RoO1xuXHRcdFx0YXcgPSB0aGlzLnNoYXBlLmFwcGx5KHRoaXMsIHRoaXMuc2hhcGVBcmdzKTtcblx0XHRcdGZvciAoYXogPSAwOyBheiA8IGF2OyArK2F6KSB7XG5cdFx0XHRcdGFEW2F6XS5wb3NpdGlvbiA9IG5ldyBVKGF3W2F6XVswXSwgYXdbYXpdWzFdLCBhd1thel1bMl0pXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndlaWdodCAmJiB0aGlzLldlaWdodChhRClcblx0XHR9XG5cdFx0dGhpcy50YWdsaXN0ID0gYURcblx0fTtcblx0ZC5TZXRTaGFkb3cgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGkuc2hhZG93Qmx1ciA9IHRoaXMuc2hhZG93Qmx1cjtcblx0XHRpLnNoYWRvd09mZnNldFggPSB0aGlzLnNoYWRvd09mZnNldFswXTtcblx0XHRpLnNoYWRvd09mZnNldFkgPSB0aGlzLnNoYWRvd09mZnNldFsxXVxuXHR9O1xuXHRkLkRyYXcgPSBmdW5jdGlvbiAoYUYpIHtcblx0XHRpZiAodGhpcy5wYXVzZWQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHR2YXIgYXogPSB0aGlzLmNhbnZhcyxcblx0XHRheCA9IGF6LndpZHRoLFxuXHRcdGFFID0gYXouaGVpZ2h0LFxuXHRcdGFIID0gMCxcblx0XHRhdyA9IChhRiAtIHRoaXMudGltZSkgKiB0aGlzLmludGVydmFsIC8gMTAwMCxcblx0XHRhRCA9IGF4IC8gMiArIHRoaXMub2Zmc2V0WCxcblx0XHRhQyA9IGFFIC8gMiArIHRoaXMub2Zmc2V0WSxcblx0XHRhTCA9IHRoaXMuY3R4dCxcblx0XHRhQixcblx0XHRhTSxcblx0XHRhSixcblx0XHRhdiA9IC0xLFxuXHRcdGF5ID0gdGhpcy50YWdsaXN0LFxuXHRcdGFJID0gYXkubGVuZ3RoLFxuXHRcdGogPSB0aGlzLmZyb250U2VsZWN0LFxuXHRcdGFHID0gKHRoaXMuY2VudHJlRnVuYyA9PSBZKSxcblx0XHRhQTtcblx0XHR0aGlzLnRpbWUgPSBhRjtcblx0XHRpZiAodGhpcy5mcm96ZW4gJiYgdGhpcy5kcmF3bikge1xuXHRcdFx0cmV0dXJuIHRoaXMuQW5pbWF0ZShheCwgYUUsIGF3KVxuXHRcdH1cblx0XHRhQSA9IHRoaXMuQW5pbWF0ZUZpeGVkKCk7XG5cdFx0YUwuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuXHRcdHRoaXMuYWN0aXZlID0gbnVsbDtcblx0XHRmb3IgKGFKID0gMDsgYUogPCBhSTsgKythSikge1xuXHRcdFx0YXlbYUpdLkNhbGModGhpcy50cmFuc2Zvcm0sIHRoaXMuZml4ZWRBbHBoYSlcblx0XHR9XG5cdFx0YXkgPSBuKGF5LCBmdW5jdGlvbiAoYU4sIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkueiAtIGFOLnpcblx0XHRcdH0pO1xuXHRcdGZvciAoYUogPSAwOyBhSiA8IGFJOyArK2FKKSB7XG5cdFx0XHRhTSA9IHRoaXMubXggPj0gMCAmJiB0aGlzLm15ID49IDAgJiYgdGhpcy50YWdsaXN0W2FKXS5DaGVja0FjdGl2ZShhTCwgYUQsIGFDKTtcblx0XHRcdGlmIChhTSAmJiBhTS5zYyA+IGFIICYmICghaiB8fCBhTS56IDw9IDApKSB7XG5cdFx0XHRcdGFCID0gYU07XG5cdFx0XHRcdGF2ID0gYUo7XG5cdFx0XHRcdGFCLnRhZyA9IHRoaXMudGFnbGlzdFthSl07XG5cdFx0XHRcdGFIID0gYU0uc2Ncblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5hY3RpdmUgPSBhQjtcblx0XHR0aGlzLnR4dE9wdCB8fCAodGhpcy5zaGFkb3cgJiYgdGhpcy5TZXRTaGFkb3coYUwpKTtcblx0XHRhTC5jbGVhclJlY3QoMCwgMCwgYXgsIGFFKTtcblx0XHRmb3IgKGFKID0gMDsgYUogPCBhSTsgKythSikge1xuXHRcdFx0aWYgKCFhRyAmJiBheVthSl0ueiA8PSAwKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jZW50cmVGdW5jKGFMLCBheCwgYUUsIGFELCBhQylcblx0XHRcdFx0fSBjYXRjaCAoYUspIHtcblx0XHRcdFx0XHRhbGVydChhSyk7XG5cdFx0XHRcdFx0dGhpcy5jZW50cmVGdW5jID0gWVxuXHRcdFx0XHR9XG5cdFx0XHRcdGFHID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0aWYgKCEoYUIgJiYgYUIudGFnID09IGF5W2FKXSAmJiBhQi5QcmVEcmF3KGFMLCBheVthSl0sIGFELCBhQykpKSB7XG5cdFx0XHRcdGF5W2FKXS5EcmF3KGFMLCBhRCwgYUMpXG5cdFx0XHR9XG5cdFx0XHRhQiAmJiBhQi50YWcgPT0gYXlbYUpdICYmIGFCLlBvc3REcmF3KGFMKVxuXHRcdH1cblx0XHRpZiAodGhpcy5mcmVlemVBY3RpdmUgJiYgYUIpIHtcblx0XHRcdHRoaXMuRnJlZXplKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5VbkZyZWV6ZSgpO1xuXHRcdFx0dGhpcy5kcmF3biA9IChhSSA9PSB0aGlzLmxpc3RMZW5ndGgpXG5cdFx0fVxuXHRcdGlmICh0aGlzLmZpeGVkQ2FsbGJhY2spIHtcblx0XHRcdHRoaXMuZml4ZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZpeGVkQ2FsbGJhY2tUYWcpO1xuXHRcdFx0dGhpcy5maXhlZENhbGxiYWNrID0gbnVsbFxuXHRcdH1cblx0XHRhQSB8fCB0aGlzLkFuaW1hdGUoYXgsIGFFLCBhdyk7XG5cdFx0YUIgJiYgYUIuTGFzdERyYXcoYUwpO1xuXHRcdGF6LnN0eWxlLmN1cnNvciA9IGFCID8gdGhpcy5hY3RpdmVDdXJzb3IgOiBcIlwiO1xuXHRcdHRoaXMuVG9vbHRpcChhQiwgdGhpcy50YWdsaXN0W2F2XSlcblx0fTtcblx0ZC5Ub29sdGlwTm9uZSA9IGZ1bmN0aW9uICgpIHt9O1xuXHRkLlRvb2x0aXBOYXRpdmUgPSBmdW5jdGlvbiAoaiwgaSkge1xuXHRcdHRoaXMuY2FudmFzLnRpdGxlID0gaiAmJiBpLnRpdGxlID8gaS50aXRsZSA6IFwiXCJcblx0fTtcblx0ZC5Ub29sdGlwRGl2ID0gZnVuY3Rpb24gKGF4LCBqKSB7XG5cdFx0dmFyIGkgPSB0aGlzLFxuXHRcdGF3ID0gaS50dGRpdi5zdHlsZSxcblx0XHRheSA9IGkuY2FudmFzLmlkLFxuXHRcdGF2ID0gXCJub25lXCI7XG5cdFx0aWYgKGF4ICYmIGoudGl0bGUpIHtcblx0XHRcdGlmIChqLnRpdGxlICE9IGkudHRkaXYuaW5uZXJIVE1MKSB7XG5cdFx0XHRcdGF3LmRpc3BsYXkgPSBhdlxuXHRcdFx0fVxuXHRcdFx0aS50dGRpdi5pbm5lckhUTUwgPSBqLnRpdGxlO1xuXHRcdFx0ai50aXRsZSA9IGkudHRkaXYuaW5uZXJIVE1MO1xuXHRcdFx0aWYgKGF3LmRpc3BsYXkgPT0gYXYgJiYgIWkudHR0aW1lcikge1xuXHRcdFx0XHRpLnR0dGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHZhciBheiA9IHIoYXkpO1xuXHRcdFx0XHRcdFx0YXcuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHRcdGF3LmxlZnQgPSBhei54ICsgaS5teCArIFwicHhcIjtcblx0XHRcdFx0XHRcdGF3LnRvcCA9IGF6LnkgKyBpLm15ICsgMjQgKyBcInB4XCI7XG5cdFx0XHRcdFx0XHRpLnR0dGltZXIgPSBudWxsXG5cdFx0XHRcdFx0fSwgaS50b29sdGlwRGVsYXkpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF3LmRpc3BsYXkgPSBhdlxuXHRcdH1cblx0fTtcblx0ZC5UcmFuc2Zvcm0gPSBmdW5jdGlvbiAoYXksIGksIGFBKSB7XG5cdFx0aWYgKGkgfHwgYUEpIHtcblx0XHRcdHZhciBqID0gdyhpKSxcblx0XHRcdGF6ID0gbChpKSxcblx0XHRcdGFCID0gdyhhQSksXG5cdFx0XHRheCA9IGwoYUEpLFxuXHRcdFx0YXYgPSBuZXcgayhbYXgsIDAsIGFCLCAwLCAxLCAwLCAtYUIsIDAsIGF4XSksXG5cdFx0XHRhdyA9IG5ldyBrKFsxLCAwLCAwLCAwLCBheiwgLWosIDAsIGosIGF6XSk7XG5cdFx0XHRheS50cmFuc2Zvcm0gPSBheS50cmFuc2Zvcm0ubXVsKGF2Lm11bChhdykpXG5cdFx0fVxuXHR9O1xuXHRkLkFuaW1hdGVGaXhlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgYXYsXG5cdFx0aixcblx0XHRheCxcblx0XHRpLFxuXHRcdGF3O1xuXHRcdGlmICh0aGlzLmZhZGVJbikge1xuXHRcdFx0aiA9IFQoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXHRcdFx0aWYgKGogPj0gdGhpcy5mYWRlSW4pIHtcblx0XHRcdFx0dGhpcy5mYWRlSW4gPSAwO1xuXHRcdFx0XHR0aGlzLmZpeGVkQWxwaGEgPSAxXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmZpeGVkQWxwaGEgPSBqIC8gdGhpcy5mYWRlSW5cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMuZml4ZWRBbmltKSB7XG5cdFx0XHRpZiAoIXRoaXMuZml4ZWRBbmltLnRyYW5zZm9ybSkge1xuXHRcdFx0XHR0aGlzLmZpeGVkQW5pbS50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVxuXHRcdFx0fVxuXHRcdFx0YXYgPSB0aGlzLmZpeGVkQW5pbSxcblx0XHRcdGogPSBUKCkgLSBhdi50MCxcblx0XHRcdGF4ID0gYXYuYW5nbGUsXG5cdFx0XHRpLFxuXHRcdFx0YXcgPSB0aGlzLmFuaW1UaW1pbmcoYXYudCwgaik7XG5cdFx0XHR0aGlzLnRyYW5zZm9ybSA9IGF2LnRyYW5zZm9ybTtcblx0XHRcdGlmIChqID49IGF2LnQpIHtcblx0XHRcdFx0dGhpcy5maXhlZENhbGxiYWNrVGFnID0gYXYudGFnO1xuXHRcdFx0XHR0aGlzLmZpeGVkQ2FsbGJhY2sgPSBhdi5jYjtcblx0XHRcdFx0dGhpcy5maXhlZEFuaW0gPSB0aGlzLnlhdyA9IHRoaXMucGl0Y2ggPSAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRheCAqPSBhd1xuXHRcdFx0fVxuXHRcdFx0aSA9IGsuUm90YXRpb24oYXgsIGF2LmF4aXMpO1xuXHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5tdWwoaSk7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZml4ZWRBbmltICE9IDApXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9O1xuXHRkLkFuaW1hdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChhdiwgYXksIGF3KSB7XG5cdFx0dmFyIGogPSB0aGlzLFxuXHRcdGkgPSBqLm14LFxuXHRcdGFBID0gai5teSxcblx0XHRheCxcblx0XHRhejtcblx0XHRpZiAoIWouZnJvemVuICYmIGkgPj0gMCAmJiBhQSA+PSAwICYmIGkgPCBhdiAmJiBhQSA8IGF5KSB7XG5cdFx0XHRheCA9IGoubWF4U3BlZWQsXG5cdFx0XHRheiA9IGoucmV2ZXJzZSA/IC0xIDogMTtcblx0XHRcdGoubHggfHwgKGoueWF3ID0gYXogKiBhdyAqICgoYXggKiAyICogaSAvIGF2KSAtIGF4KSk7XG5cdFx0XHRqLmx5IHx8IChqLnBpdGNoID0gYXogKiBhdyAqICAtICgoYXggKiAyICogYUEgLyBheSkgLSBheCkpO1xuXHRcdFx0ai5pbml0aWFsID0gbnVsbFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWouaW5pdGlhbCkge1xuXHRcdFx0XHRpZiAoai5mcm96ZW4gJiYgIWouZnJlZXplRGVjZWwpIHtcblx0XHRcdFx0XHRqLnlhdyA9IGoucGl0Y2ggPSAwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ai5EZWNlbChqKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuVHJhbnNmb3JtKGosIGoucGl0Y2gsIGoueWF3KVxuXHR9O1xuXHRkLkFuaW1hdGVEcmFnID0gZnVuY3Rpb24gKGosIGF4LCBhdykge1xuXHRcdHZhciBpID0gdGhpcyxcblx0XHRhdiA9IDEwMCAqIGF3ICogaS5tYXhTcGVlZCAvIGkubWF4X3JhZGl1cyAvIGkuem9vbTtcblx0XHRpZiAoaS5keCB8fCBpLmR5KSB7XG5cdFx0XHRpLmx4IHx8IChpLnlhdyA9IGkuZHggKiBhdiAvIGkuc3RyZXRjaFgpO1xuXHRcdFx0aS5seSB8fCAoaS5waXRjaCA9IGkuZHkgKiAtYXYgLyBpLnN0cmV0Y2hZKTtcblx0XHRcdGkuZHggPSBpLmR5ID0gMDtcblx0XHRcdGkuaW5pdGlhbCA9IG51bGxcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFpLmluaXRpYWwpIHtcblx0XHRcdFx0aS5EZWNlbChpKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLlRyYW5zZm9ybShpLCBpLnBpdGNoLCBpLnlhdylcblx0fTtcblx0ZC5GcmVlemUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF0aGlzLmZyb3plbikge1xuXHRcdFx0dGhpcy5wcmVGcmVlemUgPSBbdGhpcy55YXcsIHRoaXMucGl0Y2hdO1xuXHRcdFx0dGhpcy5mcm96ZW4gPSAxO1xuXHRcdFx0dGhpcy5kcmF3biA9IDBcblx0XHR9XG5cdH07XG5cdGQuVW5GcmVlemUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMuZnJvemVuKSB7XG5cdFx0XHR0aGlzLnlhdyA9IHRoaXMucHJlRnJlZXplWzBdO1xuXHRcdFx0dGhpcy5waXRjaCA9IHRoaXMucHJlRnJlZXplWzFdO1xuXHRcdFx0dGhpcy5mcm96ZW4gPSAwXG5cdFx0fVxuXHR9O1xuXHRkLkRlY2VsID0gZnVuY3Rpb24gKGkpIHtcblx0XHR2YXIgYXYgPSBpLm1pblNwZWVkLFxuXHRcdGF3ID0gYWEoaS55YXcpLFxuXHRcdGogPSBhYShpLnBpdGNoKTtcblx0XHRpZiAoIWkubHggJiYgYXcgPiBhdikge1xuXHRcdFx0aS55YXcgPSBhdyA+IGkuejAgPyBpLnlhdyAqIGkuZGVjZWwgOiAwXG5cdFx0fVxuXHRcdGlmICghaS5seSAmJiBqID4gYXYpIHtcblx0XHRcdGkucGl0Y2ggPSBqID4gaS56MCA/IGkucGl0Y2ggKiBpLmRlY2VsIDogMFxuXHRcdH1cblx0fTtcblx0ZC5ab29tID0gZnVuY3Rpb24gKGkpIHtcblx0XHR0aGlzLnoyID0gdGhpcy56MSAqICgxIC8gaSk7XG5cdFx0dGhpcy5kcmF3biA9IDBcblx0fTtcblx0ZC5DbGlja2VkID0gZnVuY3Rpb24gKGF2KSB7XG5cdFx0dmFyIGkgPSB0aGlzLmFjdGl2ZTtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGkgJiYgaS50YWcpIHtcblx0XHRcdFx0aWYgKHRoaXMuY2xpY2tUb0Zyb250ID09PSBmYWxzZSB8fCB0aGlzLmNsaWNrVG9Gcm9udCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGkudGFnLkNsaWNrZWQoYXYpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5UYWdUb0Zyb250KGkudGFnLCB0aGlzLmNsaWNrVG9Gcm9udCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aS50YWcuQ2xpY2tlZChhdilcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoaikge31cblxuXHR9O1xuXHRkLldoZWVsID0gZnVuY3Rpb24gKGopIHtcblx0XHR2YXIgYXYgPSB0aGlzLnpvb20gKyB0aGlzLnpvb21TdGVwICogKGogPyAxIDogLTEpO1xuXHRcdHRoaXMuem9vbSA9IGF0KHRoaXMuem9vbU1heCwgSSh0aGlzLnpvb21NaW4sIGF2KSk7XG5cdFx0dGhpcy5ab29tKHRoaXMuem9vbSlcblx0fTtcblx0ZC5CZWdpbkRyYWcgPSBmdW5jdGlvbiAoaSkge1xuXHRcdHRoaXMuZG93biA9IE0oaSwgdGhpcy5jYW52YXMpO1xuXHRcdGkuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHRpLnJldHVyblZhbHVlID0gZmFsc2U7XG5cdFx0aS5wcmV2ZW50RGVmYXVsdCAmJiBpLnByZXZlbnREZWZhdWx0KClcblx0fTtcblx0ZC5EcmFnID0gZnVuY3Rpb24gKGF4LCBhdykge1xuXHRcdGlmICh0aGlzLmRyYWdDb250cm9sICYmIHRoaXMuZG93bikge1xuXHRcdFx0dmFyIGF2ID0gdGhpcy5kcmFnVGhyZXNob2xkICogdGhpcy5kcmFnVGhyZXNob2xkLFxuXHRcdFx0aiA9IGF3LnggLSB0aGlzLmRvd24ueCxcblx0XHRcdGkgPSBhdy55IC0gdGhpcy5kb3duLnk7XG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZyB8fCBqICogaiArIGkgKiBpID4gYXYpIHtcblx0XHRcdFx0dGhpcy5keCA9IGo7XG5cdFx0XHRcdHRoaXMuZHkgPSBpO1xuXHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gMTtcblx0XHRcdFx0dGhpcy5kb3duID0gYXdcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGQuRW5kRHJhZyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaSA9IHRoaXMuZHJhZ2dpbmc7XG5cdFx0dGhpcy5kcmFnZ2luZyA9IHRoaXMuZG93biA9IG51bGw7XG5cdFx0cmV0dXJuIGlcblx0fTtcblx0ZC5QYXVzZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnBhdXNlZCA9IHRydWVcblx0fTtcblx0ZC5SZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5wYXVzZWQgPSBmYWxzZVxuXHR9O1xuXHRkLkZpbmRUYWcgPSBmdW5jdGlvbiAoYXYpIHtcblx0XHRpZiAoIWFqKGF2KSkge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0YWooYXYuaW5kZXgpICYmIChhdiA9IGF2LmluZGV4KTtcblx0XHRpZiAoIXYoYXYpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWdsaXN0W2F2XVxuXHRcdH1cblx0XHR2YXIgYXcsXG5cdFx0YXgsXG5cdFx0ajtcblx0XHRpZiAoYWooYXYuaWQpKSB7XG5cdFx0XHRhdyA9IFwiaWRcIixcblx0XHRcdGF4ID0gYXYuaWRcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGFqKGF2LnRleHQpKSB7XG5cdFx0XHRcdGF3ID0gXCJpbm5lclRleHRcIixcblx0XHRcdFx0YXggPSBhdi50ZXh0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaiA9IDA7IGogPCB0aGlzLnRhZ2xpc3QubGVuZ3RoOyArK2opIHtcblx0XHRcdGlmICh0aGlzLnRhZ2xpc3Rbal0uYVthd10gPT0gYXgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFnbGlzdFtqXVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0ZC5Sb3RhdGVUYWcgPSBmdW5jdGlvbiAoYUMsIGF2LCBhQiwgaSwgYXopIHtcblx0XHR2YXIgYUEgPSBhQy54Zm9ybWVkLFxuXHRcdGF4ID0gbmV3IFUoYUEueCwgYUEueSwgYUEueiksXG5cdFx0YXcgPSBLKGFCLCBhdiksXG5cdFx0aiA9IGF4LmFuZ2xlKGF3KSxcblx0XHRheSA9IGF4LmNyb3NzKGF3KS51bml0KCk7XG5cdFx0aWYgKGogPT0gMCkge1xuXHRcdFx0dGhpcy5maXhlZENhbGxiYWNrVGFnID0gYUM7XG5cdFx0XHR0aGlzLmZpeGVkQ2FsbGJhY2sgPSBhelxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpeGVkQW5pbSA9IHtcblx0XHRcdFx0YW5nbGUgOiAtaixcblx0XHRcdFx0YXhpcyA6IGF5LFxuXHRcdFx0XHR0IDogaSxcblx0XHRcdFx0dDAgOiBUKCksXG5cdFx0XHRcdGNiIDogYXosXG5cdFx0XHRcdHRhZyA6IGFDXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRkLlRhZ1RvRnJvbnQgPSBmdW5jdGlvbiAoaSwgaiwgYXYpIHtcblx0XHR0aGlzLlJvdGF0ZVRhZyhpLCAwLCAwLCBqLCBhdilcblx0fTtcblx0eC5TdGFydCA9IGZ1bmN0aW9uIChhdiwgaSwgaikge1xuXHRcdHgudGNbYXZdID0gbmV3IHgoYXYsIGksIGopXG5cdH07XG5cdGZ1bmN0aW9uIGFrKGksIGopIHtcblx0XHR4LnRjW2pdICYmIHgudGNbal1baV0oKVxuXHR9XG5cdHguTGluZWFyID0gZnVuY3Rpb24gKGksIGopIHtcblx0XHRyZXR1cm4gaiAvIGlcblx0fTtcblx0eC5TbW9vdGggPSBmdW5jdGlvbiAoaSwgaikge1xuXHRcdHJldHVybiAwLjUgLSBsKGogKiBNYXRoLlBJIC8gaSkgLyAyXG5cdH07XG5cdHguUGF1c2UgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGFrKFwiUGF1c2VcIiwgaSlcblx0fTtcblx0eC5SZXN1bWUgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGFrKFwiUmVzdW1lXCIsIGkpXG5cdH07XG5cdHguUmVsb2FkID0gZnVuY3Rpb24gKGkpIHtcblx0XHRhayhcIkxvYWRcIiwgaSlcblx0fTtcblx0eC5VcGRhdGUgPSBmdW5jdGlvbiAoaSkge1xuXHRcdGFrKFwiVXBkYXRlXCIsIGkpXG5cdH07XG5cdHguVGFnVG9Gcm9udCA9IGZ1bmN0aW9uIChqLCBpKSB7XG5cdFx0aWYgKCF2KGkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0aS5sYXQgPSBpLmxuZyA9IDA7XG5cdFx0cmV0dXJuIHguUm90YXRlVGFnKGosIGkpXG5cdH07XG5cdHguUm90YXRlVGFnID0gZnVuY3Rpb24gKGF2LCBpKSB7XG5cdFx0aWYgKCF2KGkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0aWYgKHgudGNbYXZdKSB7XG5cdFx0XHRpZiAoaXNOYU4oaS50aW1lKSkge1xuXHRcdFx0XHRpLnRpbWUgPSA1MDBcblx0XHRcdH1cblx0XHRcdHZhciBqID0geC50Y1thdl0uRmluZFRhZyhpKTtcblx0XHRcdGlmIChqKSB7XG5cdFx0XHRcdHgudGNbYXZdLlJvdGF0ZVRhZyhqLCBpLmxhdCwgaS5sbmcsIGkudGltZSwgaS5jYWxsYmFjayk7XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9O1xuXHR4Lk5leHRGcmFtZSA9IGZ1bmN0aW9uIChpKSB7XG5cdFx0dmFyIGogPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdHguTmV4dEZyYW1lID0gaiA/IHguTmV4dEZyYW1lUkFGIDogeC5OZXh0RnJhbWVUaW1lb3V0O1xuXHRcdHguTmV4dEZyYW1lKGkpXG5cdH07XG5cdHguTmV4dEZyYW1lUkFGID0gZnVuY3Rpb24gKCkge1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0KVxuXHR9O1xuXHR4Lk5leHRGcmFtZVRpbWVvdXQgPSBmdW5jdGlvbiAoaSkge1xuXHRcdHNldFRpbWVvdXQodCwgaSlcblx0fTtcblx0eC50YyA9IHt9O1xuXHR4Lm9wdGlvbnMgPSB7XG5cdFx0ejEgOiAyMDAwMCxcblx0XHR6MiA6IDIwMDAwLFxuXHRcdHowIDogMC4wMDAyLFxuXHRcdGZyZWV6ZUFjdGl2ZSA6IGZhbHNlLFxuXHRcdGZyZWV6ZURlY2VsIDogZmFsc2UsXG5cdFx0YWN0aXZlQ3Vyc29yIDogXCJwb2ludGVyXCIsXG5cdFx0cHVsc2F0ZVRvIDogMSxcblx0XHRwdWxzYXRlVGltZSA6IDMsXG5cdFx0cmV2ZXJzZSA6IGZhbHNlLFxuXHRcdC8qZGVwdGggOiAwLjUsKi9cblx0XHRkZXB0aCA6IDAuNCxcblx0XHQvKm1heFNwZWVkIDogMC4wNSwqL1xuXHRcdG1heFNwZWVkIDogMC4wNixcblx0XHQvKm1pblNwZWVkIDogMCwqL1xuXHRcdG1pblNwZWVkIDogMC4wMSxcblx0XHRkZWNlbCA6IDAuOTUsXG5cdFx0aW50ZXJ2YWwgOiAyMCxcblx0XHRtaW5CcmlnaHRuZXNzIDogMC4xLFxuXHRcdG1heEJyaWdodG5lc3MgOiAxLFxuXHRcdG91dGxpbmVDb2xvdXIgOiBcInJnYmEoMCwgMTAwLCAyMjQsIDAuNjIpXCIsXG5cdFx0b3V0bGluZVRoaWNrbmVzcyA6IDEsXG5cdFx0b3V0bGluZU9mZnNldCA6IDUsXG5cdFx0b3V0bGluZU1ldGhvZCA6IFwib3V0bGluZVwiLFxuXHRcdHRleHRDb2xvdXIgOiBcIiNmZjk5ZmZcIixcblx0XHR0ZXh0SGVpZ2h0IDogMTUsXG5cdFx0dGV4dEZvbnQgOiBcIkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcblx0XHRzaGFkb3cgOiBcIiMwMDBcIixcblx0XHRzaGFkb3dCbHVyIDogMCxcblx0XHRzaGFkb3dPZmZzZXQgOiBbMCwgMF0sXG5cdFx0aW5pdGlhbCA6IG51bGwsXG5cdFx0aGlkZVRhZ3MgOiB0cnVlLFxuXHRcdHpvb20gOiAxLFxuXHRcdHdlaWdodCA6IGZhbHNlLFxuXHRcdHdlaWdodE1vZGUgOiBcInNpemVcIixcblx0XHR3ZWlnaHRGcm9tIDogbnVsbCxcblx0XHR3ZWlnaHRTaXplIDogMSxcblx0XHR3ZWlnaHRTaXplTWluIDogbnVsbCxcblx0XHR3ZWlnaHRTaXplTWF4IDogbnVsbCxcblx0XHR3ZWlnaHRHcmFkaWVudCA6IHtcblx0XHRcdDAgOiBcIiNmMDBcIixcblx0XHRcdCcwLjMzJyA6IFwiI2ZmMFwiLFxuXHRcdFx0JzAuNjYnIDogXCIjMGYwXCIsXG5cdFx0XHQxIDogXCIjMDBmXCJcblx0XHR9LFxuXHRcdHR4dE9wdCA6IHRydWUsXG5cdFx0dHh0U2NhbGUgOiAyLFxuXHRcdGZyb250U2VsZWN0IDogZmFsc2UsXG5cdFx0d2hlZWxab29tIDogdHJ1ZSxcblx0XHR6b29tTWluIDogMC4zLFxuXHRcdHpvb21NYXggOiAzLFxuXHRcdHpvb21TdGVwIDogMC4wNSxcblx0XHRzaGFwZSA6IFwic3BoZXJlXCIsXG5cdFx0bG9jayA6IG51bGwsXG5cdFx0dG9vbHRpcCA6IG51bGwsXG5cdFx0dG9vbHRpcERlbGF5IDogMzAwLFxuXHRcdHRvb2x0aXBDbGFzcyA6IFwidGN0b29sdGlwXCIsXG5cdFx0cmFkaXVzWCA6IDEsXG5cdFx0cmFkaXVzWSA6IDEsXG5cdFx0cmFkaXVzWiA6IDEsXG5cdFx0c3RyZXRjaFggOiAxLFxuXHRcdHN0cmV0Y2hZIDogMSxcblx0XHRvZmZzZXRYIDogMCxcblx0XHRvZmZzZXRZIDogMCxcblx0XHRzaHVmZmxlVGFncyA6IGZhbHNlLFxuXHRcdG5vU2VsZWN0IDogZmFsc2UsXG5cdFx0bm9Nb3VzZSA6IGZhbHNlLFxuXHRcdGltYWdlU2NhbGUgOiAxLFxuXHRcdHBhdXNlZCA6IGZhbHNlLFxuXHRcdGRyYWdDb250cm9sIDogZmFsc2UsXG5cdFx0ZHJhZ1RocmVzaG9sZCA6IDQsXG5cdFx0Y2VudHJlRnVuYyA6IFksXG5cdFx0c3BsaXRXaWR0aCA6IDAsXG5cdFx0YW5pbVRpbWluZyA6IFwiU21vb3RoXCIsXG5cdFx0Y2xpY2tUb0Zyb250IDogZmFsc2UsXG5cdFx0ZmFkZUluIDogMFxuXHR9O1xuXHRmb3IgKGFvIGluIHgub3B0aW9ucykge1xuXHRcdHhbYW9dID0geC5vcHRpb25zW2FvXVxuXHR9XG5cdHdpbmRvdy5UYWdDYW52YXMgPSB4O1xuXHRHKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0eC5sb2FkZWQgPSAxXG5cdH0sIHdpbmRvdylcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGlicy90YWdjYW52YXMubWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==