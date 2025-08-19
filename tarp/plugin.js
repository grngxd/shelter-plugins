(function(exports, lodash_es_debounce, randomcolor, __uwu_monaco_solid, monaco_editor) {

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
lodash_es_debounce = __toESM(lodash_es_debounce);
randomcolor = __toESM(randomcolor);
__uwu_monaco_solid = __toESM(__uwu_monaco_solid);
monaco_editor = __toESM(monaco_editor);

//#region solid-js/web
var require_web = __commonJS({ "solid-js/web"(exports, module) {
	module.exports = shelter.solidWeb;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js
var require_emotion_sheet_cjs = __commonJS({ "node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var isDevelopment$1 = false;
	function sheetForTag(tag) {
		if (tag.sheet) return tag.sheet;
		for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
		return undefined;
	}
	function createStyleElement(options) {
		var tag = document.createElement("style");
		tag.setAttribute("data-emotion", options.key);
		if (options.nonce !== undefined) tag.setAttribute("nonce", options.nonce);
		tag.appendChild(document.createTextNode(""));
		tag.setAttribute("data-s", "");
		return tag;
	}
	var StyleSheet = /*#__PURE__*/ function() {
		function StyleSheet$1(options) {
			var _this = this;
			this._insertTag = function(tag) {
				var before;
				if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
else if (_this.prepend) before = _this.container.firstChild;
else before = _this.before;
else before = _this.tags[_this.tags.length - 1].nextSibling;
				_this.container.insertBefore(tag, before);
				_this.tags.push(tag);
			};
			this.isSpeedy = options.speedy === undefined ? !isDevelopment$1 : options.speedy;
			this.tags = [];
			this.ctr = 0;
			this.nonce = options.nonce;
			this.key = options.key;
			this.container = options.container;
			this.prepend = options.prepend;
			this.insertionPoint = options.insertionPoint;
			this.before = null;
		}
		var _proto = StyleSheet$1.prototype;
		_proto.hydrate = function hydrate$2(nodes) {
			nodes.forEach(this._insertTag);
		};
		_proto.insert = function insert(rule) {
			if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(createStyleElement(this));
			var tag = this.tags[this.tags.length - 1];
			if (this.isSpeedy) {
				var sheet$3 = sheetForTag(tag);
				try {
					sheet$3.insertRule(rule, sheet$3.cssRules.length);
				} catch (e) {}
			} else tag.appendChild(document.createTextNode(rule));
			this.ctr++;
		};
		_proto.flush = function flush$2() {
			this.tags.forEach(function(tag) {
				var _tag$parentNode;
				return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
			});
			this.tags = [];
			this.ctr = 0;
		};
		return StyleSheet$1;
	}();
	exports.StyleSheet = StyleSheet;
} });

//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/dist/umd/stylis.js
var require_stylis = __commonJS({ "node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/dist/umd/stylis.js"(exports, module) {
	(function(e, r) {
		typeof exports === "object" && typeof module !== "undefined" ? r(exports) : typeof define === "function" && define.amd ? define(["exports"], r) : (e = e || self, r(e.stylis = {}));
	})(exports, function(e) {
		"use strict";
		var r = "-ms-";
		var a = "-moz-";
		var c = "-webkit-";
		var n = "comm";
		var t = "rule";
		var s = "decl";
		var i = "@page";
		var u = "@media";
		var o = "@import";
		var f = "@charset";
		var l = "@viewport";
		var p = "@supports";
		var h = "@document";
		var v = "@namespace";
		var d = "@keyframes";
		var b = "@font-face";
		var w = "@counter-style";
		var m = "@font-feature-values";
		var g = "@layer";
		var k = Math.abs;
		var $ = String.fromCharCode;
		var x = Object.assign;
		function E(e$1, r$1) {
			return M(e$1, 0) ^ 45 ? (((r$1 << 2 ^ M(e$1, 0)) << 2 ^ M(e$1, 1)) << 2 ^ M(e$1, 2)) << 2 ^ M(e$1, 3) : 0;
		}
		function y(e$1) {
			return e$1.trim();
		}
		function T(e$1, r$1) {
			return (e$1 = r$1.exec(e$1)) ? e$1[0] : e$1;
		}
		function A(e$1, r$1, a$1) {
			return e$1.replace(r$1, a$1);
		}
		function O(e$1, r$1) {
			return e$1.indexOf(r$1);
		}
		function M(e$1, r$1) {
			return e$1.charCodeAt(r$1) | 0;
		}
		function C(e$1, r$1, a$1) {
			return e$1.slice(r$1, a$1);
		}
		function R(e$1) {
			return e$1.length;
		}
		function S(e$1) {
			return e$1.length;
		}
		function z(e$1, r$1) {
			return r$1.push(e$1), e$1;
		}
		function N(e$1, r$1) {
			return e$1.map(r$1).join("");
		}
		e.line = 1;
		e.column = 1;
		e.length = 0;
		e.position = 0;
		e.character = 0;
		e.characters = "";
		function P(r$1, a$1, c$1, n$1, t$1, s$1, i$1) {
			return {
				value: r$1,
				root: a$1,
				parent: c$1,
				type: n$1,
				props: t$1,
				children: s$1,
				line: e.line,
				column: e.column,
				length: i$1,
				return: ""
			};
		}
		function j(e$1, r$1) {
			return x(P("", null, null, "", null, null, 0), e$1, { length: -e$1.length }, r$1);
		}
		function U() {
			return e.character;
		}
		function _() {
			e.character = e.position > 0 ? M(e.characters, --e.position) : 0;
			if (e.column--, e.character === 10) e.column = 1, e.line--;
			return e.character;
		}
		function F() {
			e.character = e.position < e.length ? M(e.characters, e.position++) : 0;
			if (e.column++, e.character === 10) e.column = 1, e.line++;
			return e.character;
		}
		function I() {
			return M(e.characters, e.position);
		}
		function L() {
			return e.position;
		}
		function D(r$1, a$1) {
			return C(e.characters, r$1, a$1);
		}
		function Y(e$1) {
			switch (e$1) {
				case 0:
				case 9:
				case 10:
				case 13:
				case 32: return 5;
				case 33:
				case 43:
				case 44:
				case 47:
				case 62:
				case 64:
				case 126:
				case 59:
				case 123:
				case 125: return 4;
				case 58: return 3;
				case 34:
				case 39:
				case 40:
				case 91: return 2;
				case 41:
				case 93: return 1;
			}
			return 0;
		}
		function K(r$1) {
			return e.line = e.column = 1, e.length = R(e.characters = r$1), e.position = 0, [];
		}
		function V(r$1) {
			return e.characters = "", r$1;
		}
		function W(r$1) {
			return y(D(e.position - 1, q(r$1 === 91 ? r$1 + 2 : r$1 === 40 ? r$1 + 1 : r$1)));
		}
		function B(e$1) {
			return V(H(K(e$1)));
		}
		function G(r$1) {
			while (e.character = I()) if (e.character < 33) F();
else break;
			return Y(r$1) > 2 || Y(e.character) > 3 ? "" : " ";
		}
		function H(r$1) {
			while (F()) switch (Y(e.character)) {
				case 0:
					z(Q(e.position - 1), r$1);
					break;
				case 2:
					z(W(e.character), r$1);
					break;
				default: z($(e.character), r$1);
			}
			return r$1;
		}
		function Z(r$1, a$1) {
			while (--a$1 && F()) if (e.character < 48 || e.character > 102 || e.character > 57 && e.character < 65 || e.character > 70 && e.character < 97) break;
			return D(r$1, L() + (a$1 < 6 && I() == 32 && F() == 32));
		}
		function q(r$1) {
			while (F()) switch (e.character) {
				case r$1: return e.position;
				case 34:
				case 39:
					if (r$1 !== 34 && r$1 !== 39) q(e.character);
					break;
				case 40:
					if (r$1 === 41) q(r$1);
					break;
				case 92:
					F();
					break;
			}
			return e.position;
		}
		function J(r$1, a$1) {
			while (F()) if (r$1 + e.character === 57) break;
else if (r$1 + e.character === 84 && I() === 47) break;
			return "/*" + D(a$1, e.position - 1) + "*" + $(r$1 === 47 ? r$1 : F());
		}
		function Q(r$1) {
			while (!Y(I())) F();
			return D(r$1, e.position);
		}
		function X(e$1) {
			return V(ee("", null, null, null, [""], e$1 = K(e$1), 0, [0], e$1));
		}
		function ee(e$1, r$1, a$1, c$1, n$1, t$1, s$1, i$1, u$1) {
			var o$1 = 0;
			var f$1 = 0;
			var l$1 = s$1;
			var p$1 = 0;
			var h$1 = 0;
			var v$1 = 0;
			var d$1 = 1;
			var b$1 = 1;
			var w$1 = 1;
			var m$1 = 0;
			var g$1 = "";
			var k$1 = n$1;
			var x$1 = t$1;
			var E$1 = c$1;
			var y$1 = g$1;
			while (b$1) switch (v$1 = m$1, m$1 = F()) {
				case 40: if (v$1 != 108 && M(y$1, l$1 - 1) == 58) {
					if (O(y$1 += A(W(m$1), "&", "&\f"), "&\f") != -1) w$1 = -1;
					break;
				}
				case 34:
				case 39:
				case 91:
					y$1 += W(m$1);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					y$1 += G(v$1);
					break;
				case 92:
					y$1 += Z(L() - 1, 7);
					continue;
				case 47:
					switch (I()) {
						case 42:
						case 47:
							z(ae(J(F(), L()), r$1, a$1), u$1);
							break;
						default: y$1 += "/";
					}
					break;
				case 123 * d$1: i$1[o$1++] = R(y$1) * w$1;
				case 125 * d$1:
				case 59:
				case 0:
					switch (m$1) {
						case 0:
						case 125: b$1 = 0;
						case 59 + f$1:
							if (w$1 == -1) y$1 = A(y$1, /\f/g, "");
							if (h$1 > 0 && R(y$1) - l$1) z(h$1 > 32 ? ce(y$1 + ";", c$1, a$1, l$1 - 1) : ce(A(y$1, " ", "") + ";", c$1, a$1, l$1 - 2), u$1);
							break;
						case 59: y$1 += ";";
						default:
							z(E$1 = re(y$1, r$1, a$1, o$1, f$1, n$1, i$1, g$1, k$1 = [], x$1 = [], l$1), t$1);
							if (m$1 === 123) if (f$1 === 0) ee(y$1, r$1, E$1, E$1, k$1, t$1, l$1, i$1, x$1);
else switch (p$1 === 99 && M(y$1, 3) === 110 ? 100 : p$1) {
								case 100:
								case 108:
								case 109:
								case 115:
									ee(e$1, E$1, E$1, c$1 && z(re(e$1, E$1, E$1, 0, 0, n$1, i$1, g$1, n$1, k$1 = [], l$1), x$1), n$1, x$1, l$1, i$1, c$1 ? k$1 : x$1);
									break;
								default: ee(y$1, E$1, E$1, E$1, [""], x$1, 0, i$1, x$1);
							}
					}
					o$1 = f$1 = h$1 = 0, d$1 = w$1 = 1, g$1 = y$1 = "", l$1 = s$1;
					break;
				case 58: l$1 = 1 + R(y$1), h$1 = v$1;
				default:
					if (d$1 < 1) {
						if (m$1 == 123) --d$1;
else if (m$1 == 125 && d$1++ == 0 && _() == 125) continue;
					}
					switch (y$1 += $(m$1), m$1 * d$1) {
						case 38:
							w$1 = f$1 > 0 ? 1 : (y$1 += "\f", -1);
							break;
						case 44:
							i$1[o$1++] = (R(y$1) - 1) * w$1, w$1 = 1;
							break;
						case 64:
							if (I() === 45) y$1 += W(F());
							p$1 = I(), f$1 = l$1 = R(g$1 = y$1 += Q(L())), m$1++;
							break;
						case 45: if (v$1 === 45 && R(y$1) == 2) d$1 = 0;
					}
			}
			return t$1;
		}
		function re(e$1, r$1, a$1, c$1, n$1, s$1, i$1, u$1, o$1, f$1, l$1) {
			var p$1 = n$1 - 1;
			var h$1 = n$1 === 0 ? s$1 : [""];
			var v$1 = S(h$1);
			for (var d$1 = 0, b$1 = 0, w$1 = 0; d$1 < c$1; ++d$1) for (var m$1 = 0, g$1 = C(e$1, p$1 + 1, p$1 = k(b$1 = i$1[d$1])), $$1 = e$1; m$1 < v$1; ++m$1) if ($$1 = y(b$1 > 0 ? h$1[m$1] + " " + g$1 : A(g$1, /&\f/g, h$1[m$1]))) o$1[w$1++] = $$1;
			return P(e$1, r$1, a$1, n$1 === 0 ? t : u$1, o$1, f$1, l$1);
		}
		function ae(e$1, r$1, a$1) {
			return P(e$1, r$1, a$1, n, $(U()), C(e$1, 2, -2), 0);
		}
		function ce(e$1, r$1, a$1, c$1) {
			return P(e$1, r$1, a$1, s, C(e$1, 0, c$1), C(e$1, c$1 + 1, -1), c$1);
		}
		function ne(e$1, n$1, t$1) {
			switch (E(e$1, n$1)) {
				case 5103: return c + "print-" + e$1 + e$1;
				case 5737:
				case 4201:
				case 3177:
				case 3433:
				case 1641:
				case 4457:
				case 2921:
				case 5572:
				case 6356:
				case 5844:
				case 3191:
				case 6645:
				case 3005:
				case 6391:
				case 5879:
				case 5623:
				case 6135:
				case 4599:
				case 4855:
				case 4215:
				case 6389:
				case 5109:
				case 5365:
				case 5621:
				case 3829: return c + e$1 + e$1;
				case 4789: return a + e$1 + e$1;
				case 5349:
				case 4246:
				case 4810:
				case 6968:
				case 2756: return c + e$1 + a + e$1 + r + e$1 + e$1;
				case 5936: switch (M(e$1, n$1 + 11)) {
					case 114: return c + e$1 + r + A(e$1, /[svh]\w+-[tblr]{2}/, "tb") + e$1;
					case 108: return c + e$1 + r + A(e$1, /[svh]\w+-[tblr]{2}/, "tb-rl") + e$1;
					case 45: return c + e$1 + r + A(e$1, /[svh]\w+-[tblr]{2}/, "lr") + e$1;
				}
				case 6828:
				case 4268:
				case 2903: return c + e$1 + r + e$1 + e$1;
				case 6165: return c + e$1 + r + "flex-" + e$1 + e$1;
				case 5187: return c + e$1 + A(e$1, /(\w+).+(:[^]+)/, c + "box-$1$2" + r + "flex-$1$2") + e$1;
				case 5443: return c + e$1 + r + "flex-item-" + A(e$1, /flex-|-self/g, "") + (!T(e$1, /flex-|baseline/) ? r + "grid-row-" + A(e$1, /flex-|-self/g, "") : "") + e$1;
				case 4675: return c + e$1 + r + "flex-line-pack" + A(e$1, /align-content|flex-|-self/g, "") + e$1;
				case 5548: return c + e$1 + r + A(e$1, "shrink", "negative") + e$1;
				case 5292: return c + e$1 + r + A(e$1, "basis", "preferred-size") + e$1;
				case 6060: return c + "box-" + A(e$1, "-grow", "") + c + e$1 + r + A(e$1, "grow", "positive") + e$1;
				case 4554: return c + A(e$1, /([^-])(transform)/g, "$1" + c + "$2") + e$1;
				case 6187: return A(A(A(e$1, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e$1, "") + e$1;
				case 5495:
				case 3959: return A(e$1, /(image-set\([^]*)/, c + "$1" + "$`$1");
				case 4968: return A(A(e$1, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + r + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + e$1 + e$1;
				case 4200:
					if (!T(e$1, /flex-|baseline/)) return r + "grid-column-align" + C(e$1, n$1) + e$1;
					break;
				case 2592:
				case 3360: return r + A(e$1, "template-", "") + e$1;
				case 4384:
				case 3616:
					if (t$1 && t$1.some(function(e$2, r$1) {
						return n$1 = r$1, T(e$2.props, /grid-\w+-end/);
					})) return ~O(e$1 + (t$1 = t$1[n$1].value), "span") ? e$1 : r + A(e$1, "-start", "") + e$1 + r + "grid-row-span:" + (~O(t$1, "span") ? T(t$1, /\d+/) : +T(t$1, /\d+/) - +T(e$1, /\d+/)) + ";";
					return r + A(e$1, "-start", "") + e$1;
				case 4896:
				case 4128: return t$1 && t$1.some(function(e$2) {
					return T(e$2.props, /grid-\w+-start/);
				}) ? e$1 : r + A(A(e$1, "-end", "-span"), "span ", "") + e$1;
				case 4095:
				case 3583:
				case 4068:
				case 2532: return A(e$1, /(.+)-inline(.+)/, c + "$1$2") + e$1;
				case 8116:
				case 7059:
				case 5753:
				case 5535:
				case 5445:
				case 5701:
				case 4933:
				case 4677:
				case 5533:
				case 5789:
				case 5021:
				case 4765:
					if (R(e$1) - 1 - n$1 > 6) switch (M(e$1, n$1 + 1)) {
						case 109: if (M(e$1, n$1 + 4) !== 45) break;
						case 102: return A(e$1, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3" + "$1" + a + (M(e$1, n$1 + 3) == 108 ? "$3" : "$2-$3")) + e$1;
						case 115: return ~O(e$1, "stretch") ? ne(A(e$1, "stretch", "fill-available"), n$1, t$1) + e$1 : e$1;
					}
					break;
				case 5152:
				case 5920: return A(e$1, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(a$1, c$1, n$2, t$2, s$1, i$1, u$1) {
					return r + c$1 + ":" + n$2 + u$1 + (t$2 ? r + c$1 + "-span:" + (s$1 ? i$1 : +i$1 - +n$2) + u$1 : "") + e$1;
				});
				case 4949:
					if (M(e$1, n$1 + 6) === 121) return A(e$1, ":", ":" + c) + e$1;
					break;
				case 6444:
					switch (M(e$1, M(e$1, 14) === 45 ? 18 : 11)) {
						case 120: return A(e$1, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + c + (M(e$1, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + c + "$2$3" + "$1" + r + "$2box$3") + e$1;
						case 100: return A(e$1, ":", ":" + r) + e$1;
					}
					break;
				case 5719:
				case 2647:
				case 2135:
				case 3927:
				case 2391: return A(e$1, "scroll-", "scroll-snap-") + e$1;
			}
			return e$1;
		}
		function te(e$1, r$1) {
			var a$1 = "";
			var c$1 = S(e$1);
			for (var n$1 = 0; n$1 < c$1; n$1++) a$1 += r$1(e$1[n$1], n$1, e$1, r$1) || "";
			return a$1;
		}
		function se(e$1, r$1, a$1, c$1) {
			switch (e$1.type) {
				case g: if (e$1.children.length) break;
				case o:
				case s: return e$1.return = e$1.return || e$1.value;
				case n: return "";
				case d: return e$1.return = e$1.value + "{" + te(e$1.children, c$1) + "}";
				case t: e$1.value = e$1.props.join(",");
			}
			return R(a$1 = te(e$1.children, c$1)) ? e$1.return = e$1.value + "{" + a$1 + "}" : "";
		}
		function ie(e$1) {
			var r$1 = S(e$1);
			return function(a$1, c$1, n$1, t$1) {
				var s$1 = "";
				for (var i$1 = 0; i$1 < r$1; i$1++) s$1 += e$1[i$1](a$1, c$1, n$1, t$1) || "";
				return s$1;
			};
		}
		function ue(e$1) {
			return function(r$1) {
				if (!r$1.root) {
					if (r$1 = r$1.return) e$1(r$1);
				}
			};
		}
		function oe(e$1, n$1, i$1, u$1) {
			if (e$1.length > -1) {
				if (!e$1.return) switch (e$1.type) {
					case s:
						e$1.return = ne(e$1.value, e$1.length, i$1);
						return;
					case d: return te([j(e$1, { value: A(e$1.value, "@", "@" + c) })], u$1);
					case t: if (e$1.length) return N(e$1.props, function(n$2) {
						switch (T(n$2, /(::plac\w+|:read-\w+)/)) {
							case ":read-only":
							case ":read-write": return te([j(e$1, { props: [A(n$2, /:(read-\w+)/, ":" + a + "$1")] })], u$1);
							case "::placeholder": return te([
								j(e$1, { props: [A(n$2, /:(plac\w+)/, ":" + c + "input-$1")] }),
								j(e$1, { props: [A(n$2, /:(plac\w+)/, ":" + a + "$1")] }),
								j(e$1, { props: [A(n$2, /:(plac\w+)/, r + "input-$1")] })
							], u$1);
						}
						return "";
					});
				}
			}
		}
		function fe(e$1) {
			switch (e$1.type) {
				case t: e$1.props = e$1.props.map(function(r$1) {
					return N(B(r$1), function(r$2, a$1, c$1) {
						switch (M(r$2, 0)) {
							case 12: return C(r$2, 1, R(r$2));
							case 0:
							case 40:
							case 43:
							case 62:
							case 126: return r$2;
							case 58: if (c$1[++a$1] === "global") c$1[a$1] = "", c$1[++a$1] = "\f" + C(c$1[a$1], a$1 = 1, -1);
							case 32: return a$1 === 1 ? "" : r$2;
							default: switch (a$1) {
								case 0:
									e$1 = r$2;
									return S(c$1) > 1 ? "" : r$2;
								case a$1 = S(c$1) - 1:
								case 2: return a$1 === 2 ? r$2 + e$1 + e$1 : r$2 + e$1;
								default: return r$2;
							}
						}
					});
				});
			}
		}
		e.CHARSET = f;
		e.COMMENT = n;
		e.COUNTER_STYLE = w;
		e.DECLARATION = s;
		e.DOCUMENT = h;
		e.FONT_FACE = b;
		e.FONT_FEATURE_VALUES = m;
		e.IMPORT = o;
		e.KEYFRAMES = d;
		e.LAYER = g;
		e.MEDIA = u;
		e.MOZ = a;
		e.MS = r;
		e.NAMESPACE = v;
		e.PAGE = i;
		e.RULESET = t;
		e.SUPPORTS = p;
		e.VIEWPORT = l;
		e.WEBKIT = c;
		e.abs = k;
		e.alloc = K;
		e.append = z;
		e.assign = x;
		e.caret = L;
		e.char = U;
		e.charat = M;
		e.combine = N;
		e.comment = ae;
		e.commenter = J;
		e.compile = X;
		e.copy = j;
		e.dealloc = V;
		e.declaration = ce;
		e.delimit = W;
		e.delimiter = q;
		e.escaping = Z;
		e.from = $;
		e.hash = E;
		e.identifier = Q;
		e.indexof = O;
		e.match = T;
		e.middleware = ie;
		e.namespace = fe;
		e.next = F;
		e.node = P;
		e.parse = ee;
		e.peek = I;
		e.prefix = ne;
		e.prefixer = oe;
		e.prev = _;
		e.replace = A;
		e.ruleset = re;
		e.rulesheet = ue;
		e.serialize = te;
		e.sizeof = S;
		e.slice = D;
		e.stringify = se;
		e.strlen = R;
		e.substr = C;
		e.token = Y;
		e.tokenize = B;
		e.tokenizer = H;
		e.trim = y;
		e.whitespace = G;
		Object.defineProperty(e, "__esModule", { value: true });
	});
} });

//#endregion
//#region node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.dev.js
var require_emotion_weak_memoize_cjs_dev = __commonJS({ "node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.dev.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var weakMemoize = function weakMemoize$1(func) {
		var cache$2 = new WeakMap();
		return function(arg) {
			if (cache$2.has(arg)) return cache$2.get(arg);
			var ret = func(arg);
			cache$2.set(arg, ret);
			return ret;
		};
	};
	exports["default"] = weakMemoize;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js
var require_emotion_weak_memoize_cjs = __commonJS({ "node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js"(exports, module) {
	module.exports = require_emotion_weak_memoize_cjs_dev();
} });

//#endregion
//#region node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js
var require_emotion_memoize_cjs_dev = __commonJS({ "node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function memoize$1(fn) {
		var cache$2 = Object.create(null);
		return function(arg) {
			if (cache$2[arg] === undefined) cache$2[arg] = fn(arg);
			return cache$2[arg];
		};
	}
	exports["default"] = memoize$1;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
var require_emotion_memoize_cjs = __commonJS({ "node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module) {
	module.exports = require_emotion_memoize_cjs_dev();
} });

//#endregion
//#region node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.cjs.js
var require_emotion_cache_browser_cjs = __commonJS({ "node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.cjs.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var sheet$2 = require_emotion_sheet_cjs();
	var stylis = require_stylis();
	require_emotion_weak_memoize_cjs();
	require_emotion_memoize_cjs();
	var identifierWithPointTracking = function identifierWithPointTracking$1(begin, points, index) {
		var previous = 0;
		var character = 0;
		while (true) {
			previous = character;
			character = stylis.peek();
			if (previous === 38 && character === 12) points[index] = 1;
			if (stylis.token(character)) break;
			stylis.next();
		}
		return stylis.slice(begin, stylis.position);
	};
	var toRules = function toRules$1(parsed, points) {
		var index = -1;
		var character = 44;
		do 
			switch (stylis.token(character)) {
				case 0:
					if (character === 38 && stylis.peek() === 12) points[index] = 1;
					parsed[index] += identifierWithPointTracking(stylis.position - 1, points, index);
					break;
				case 2:
					parsed[index] += stylis.delimit(character);
					break;
				case 4: if (character === 44) {
					parsed[++index] = stylis.peek() === 58 ? "&\f" : "";
					points[index] = parsed[index].length;
					break;
				}
				default: parsed[index] += stylis.from(character);
			}
		while (character = stylis.next());
		return parsed;
	};
	var getRules = function getRules$1(value, points) {
		return stylis.dealloc(toRules(stylis.alloc(value), points));
	};
	var fixedElements = /* #__PURE__ */ new WeakMap();
	var compat = function compat$1(element) {
		if (element.type !== "rule" || !element.parent || element.length < 1) return;
		var value = element.value;
		var parent = element.parent;
		var isImplicitRule = element.column === parent.column && element.line === parent.line;
		while (parent.type !== "rule") {
			parent = parent.parent;
			if (!parent) return;
		}
		if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
		if (isImplicitRule) return;
		fixedElements.set(element, true);
		var points = [];
		var rules = getRules(value, points);
		var parentRules = parent.props;
		for (var i = 0, k = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k++) element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	};
	var removeLabel = function removeLabel$1(element) {
		if (element.type === "decl") {
			var value = element.value;
			if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
				element["return"] = "";
				element.value = "";
			}
		}
	};
	function prefix(value, length) {
		switch (stylis.hash(value, length)) {
			case 5103: return stylis.WEBKIT + "print-" + value + value;
			case 5737:
			case 4201:
			case 3177:
			case 3433:
			case 1641:
			case 4457:
			case 2921:
			case 5572:
			case 6356:
			case 5844:
			case 3191:
			case 6645:
			case 3005:
			case 6391:
			case 5879:
			case 5623:
			case 6135:
			case 4599:
			case 4855:
			case 4215:
			case 6389:
			case 5109:
			case 5365:
			case 5621:
			case 3829: return stylis.WEBKIT + value + value;
			case 5349:
			case 4246:
			case 4810:
			case 6968:
			case 2756: return stylis.WEBKIT + value + stylis.MOZ + value + stylis.MS + value + value;
			case 6828:
			case 4268: return stylis.WEBKIT + value + stylis.MS + value + value;
			case 6165: return stylis.WEBKIT + value + stylis.MS + "flex-" + value + value;
			case 5187: return stylis.WEBKIT + value + stylis.replace(value, /(\w+).+(:[^]+)/, stylis.WEBKIT + "box-$1$2" + stylis.MS + "flex-$1$2") + value;
			case 5443: return stylis.WEBKIT + value + stylis.MS + "flex-item-" + stylis.replace(value, /flex-|-self/, "") + value;
			case 4675: return stylis.WEBKIT + value + stylis.MS + "flex-line-pack" + stylis.replace(value, /align-content|flex-|-self/, "") + value;
			case 5548: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "shrink", "negative") + value;
			case 5292: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "basis", "preferred-size") + value;
			case 6060: return stylis.WEBKIT + "box-" + stylis.replace(value, "-grow", "") + stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "grow", "positive") + value;
			case 4554: return stylis.WEBKIT + stylis.replace(value, /([^-])(transform)/g, "$1" + stylis.WEBKIT + "$2") + value;
			case 6187: return stylis.replace(stylis.replace(stylis.replace(value, /(zoom-|grab)/, stylis.WEBKIT + "$1"), /(image-set)/, stylis.WEBKIT + "$1"), value, "") + value;
			case 5495:
			case 3959: return stylis.replace(value, /(image-set\([^]*)/, stylis.WEBKIT + "$1" + "$`$1");
			case 4968: return stylis.replace(stylis.replace(value, /(.+:)(flex-)?(.*)/, stylis.WEBKIT + "box-pack:$3" + stylis.MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + stylis.WEBKIT + value + value;
			case 4095:
			case 3583:
			case 4068:
			case 2532: return stylis.replace(value, /(.+)-inline(.+)/, stylis.WEBKIT + "$1$2") + value;
			case 8116:
			case 7059:
			case 5753:
			case 5535:
			case 5445:
			case 5701:
			case 4933:
			case 4677:
			case 5533:
			case 5789:
			case 5021:
			case 4765:
				if (stylis.strlen(value) - 1 - length > 6) switch (stylis.charat(value, length + 1)) {
					case 109: if (stylis.charat(value, length + 4) !== 45) break;
					case 102: return stylis.replace(value, /(.+:)(.+)-([^]+)/, "$1" + stylis.WEBKIT + "$2-$3" + "$1" + stylis.MOZ + (stylis.charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
					case 115: return ~stylis.indexof(value, "stretch") ? prefix(stylis.replace(value, "stretch", "fill-available"), length) + value : value;
				}
				break;
			case 4949: if (stylis.charat(value, length + 1) !== 115) break;
			case 6444:
				switch (stylis.charat(value, stylis.strlen(value) - 3 - (~stylis.indexof(value, "!important") && 10))) {
					case 107: return stylis.replace(value, ":", ":" + stylis.WEBKIT) + value;
					case 101: return stylis.replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + stylis.WEBKIT + (stylis.charat(value, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + stylis.WEBKIT + "$2$3" + "$1" + stylis.MS + "$2box$3") + value;
				}
				break;
			case 5936:
				switch (stylis.charat(value, length + 11)) {
					case 114: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
					case 108: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
					case 45: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
				}
				return stylis.WEBKIT + value + stylis.MS + value + value;
		}
		return value;
	}
	var prefixer = function prefixer$1(element, index, children, callback) {
		if (element.length > -1) {
			if (!element["return"]) switch (element.type) {
				case stylis.DECLARATION:
					element["return"] = prefix(element.value, element.length);
					break;
				case stylis.KEYFRAMES: return stylis.serialize([stylis.copy(element, { value: stylis.replace(element.value, "@", "@" + stylis.WEBKIT) })], callback);
				case stylis.RULESET: if (element.length) return stylis.combine(element.props, function(value) {
					switch (stylis.match(value, /(::plac\w+|:read-\w+)/)) {
						case ":read-only":
						case ":read-write": return stylis.serialize([stylis.copy(element, { props: [stylis.replace(value, /:(read-\w+)/, ":" + stylis.MOZ + "$1")] })], callback);
						case "::placeholder": return stylis.serialize([
							stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, ":" + stylis.WEBKIT + "input-$1")] }),
							stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, ":" + stylis.MOZ + "$1")] }),
							stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, stylis.MS + "input-$1")] })
						], callback);
					}
					return "";
				});
			}
		}
	};
	var defaultStylisPlugins = [prefixer];
	var createCache$1 = function createCache$2(options) {
		var key = options.key;
		if (key === "css") {
			var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
			Array.prototype.forEach.call(ssrStyles, function(node) {
				var dataEmotionAttribute = node.getAttribute("data-emotion");
				if (dataEmotionAttribute.indexOf(" ") === -1) return;
				document.head.appendChild(node);
				node.setAttribute("data-s", "");
			});
		}
		var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
		var inserted = {};
		var container;
		var nodesToHydrate = [];
		{
			container = options.container || document.head;
			Array.prototype.forEach.call(
				// this means we will ignore elements which don't have a space in them which
				// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
				document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"),
				function(node) {
					var attrib = node.getAttribute("data-emotion").split(" ");
					for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
					nodesToHydrate.push(node);
				}
);
		}
		var _insert;
		var omnipresentPlugins = [compat, removeLabel];
		{
			var currentSheet;
			var finalizingPlugins = [stylis.stringify, stylis.rulesheet(function(rule) {
				currentSheet.insert(rule);
			})];
			var serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
			var stylis$1 = function stylis$1$1(styles) {
				return stylis.serialize(stylis.compile(styles), serializer);
			};
			_insert = function insert(selector, serialized, sheet$3, shouldCache) {
				currentSheet = sheet$3;
				stylis$1(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
				if (shouldCache) cache$2.inserted[serialized.name] = true;
			};
		}
		var cache$2 = {
			key,
			sheet: new sheet$2.StyleSheet({
				key,
				container,
				nonce: options.nonce,
				speedy: options.speedy,
				prepend: options.prepend,
				insertionPoint: options.insertionPoint
			}),
			nonce: options.nonce,
			inserted,
			registered: {},
			insert: _insert
		};
		cache$2.sheet.hydrate(nodesToHydrate);
		return cache$2;
	};
	exports["default"] = createCache$1;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.cjs.dev.js
var require_emotion_hash_cjs_dev = __commonJS({ "node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.cjs.dev.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function murmur2(str) {
		var h = 0;
		var k, i = 0, len = str.length;
		for (; len >= 4; ++i, len -= 4) {
			k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
			k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
			k ^= k >>> 24;
			h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		}
		switch (len) {
			case 3: h ^= (str.charCodeAt(i + 2) & 255) << 16;
			case 2: h ^= (str.charCodeAt(i + 1) & 255) << 8;
			case 1:
				h ^= str.charCodeAt(i) & 255;
				h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		}
		h ^= h >>> 13;
		h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		return ((h ^ h >>> 15) >>> 0).toString(36);
	}
	exports["default"] = murmur2;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.cjs.js
var require_emotion_hash_cjs = __commonJS({ "node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.cjs.js"(exports, module) {
	module.exports = require_emotion_hash_cjs_dev();
} });

//#endregion
//#region node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js
var require_emotion_unitless_cjs = __commonJS({ "node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var unitlessKeys = {
		animationIterationCount: 1,
		aspectRatio: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		scale: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	};
	exports["default"] = unitlessKeys;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js
var require_emotion_serialize_cjs = __commonJS({ "node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var hashString = require_emotion_hash_cjs();
	var unitless = require_emotion_unitless_cjs();
	var memoize = require_emotion_memoize_cjs();
	function _interopDefault$1(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	var hashString__default = /*#__PURE__*/ _interopDefault$1(hashString);
	var unitless__default = /*#__PURE__*/ _interopDefault$1(unitless);
	var memoize__default = /*#__PURE__*/ _interopDefault$1(memoize);
	var isDevelopment = false;
	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
	var isCustomProperty = function isCustomProperty$1(property) {
		return property.charCodeAt(1) === 45;
	};
	var isProcessableValue = function isProcessableValue$1(value) {
		return value != null && typeof value !== "boolean";
	};
	var processStyleName = /* #__PURE__ */ memoize__default["default"](function(styleName) {
		return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
	});
	var processStyleValue = function processStyleValue$1(key, value) {
		switch (key) {
			case "animation":
			case "animationName": if (typeof value === "string") return value.replace(animationRegex, function(match, p1, p2) {
				cursor = {
					name: p1,
					styles: p2,
					next: cursor
				};
				return p1;
			});
		}
		if (unitless__default["default"][key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
		return value;
	};
	var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
	function handleInterpolation(mergedProps, registered, interpolation) {
		if (interpolation == null) return "";
		var componentSelector = interpolation;
		if (componentSelector.__emotion_styles !== undefined) return componentSelector;
		switch (typeof interpolation) {
			case "boolean": return "";
			case "object": {
				var keyframes$2 = interpolation;
				if (keyframes$2.anim === 1) {
					cursor = {
						name: keyframes$2.name,
						styles: keyframes$2.styles,
						next: cursor
					};
					return keyframes$2.name;
				}
				var serializedStyles = interpolation;
				if (serializedStyles.styles !== undefined) {
					var next = serializedStyles.next;
					if (next !== undefined) while (next !== undefined) {
						cursor = {
							name: next.name,
							styles: next.styles,
							next: cursor
						};
						next = next.next;
					}
					var styles = serializedStyles.styles + ";";
					return styles;
				}
				return createStringFromObject(mergedProps, registered, interpolation);
			}
			case "function": {
				if (mergedProps !== undefined) {
					var previousCursor = cursor;
					var result = interpolation(mergedProps);
					cursor = previousCursor;
					return handleInterpolation(mergedProps, registered, result);
				}
				break;
			}
		}
		var asString = interpolation;
		if (registered == null) return asString;
		var cached = registered[asString];
		return cached !== undefined ? cached : asString;
	}
	function createStringFromObject(mergedProps, registered, obj) {
		var string = "";
		if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
else for (var key in obj) {
			var value = obj[key];
			if (typeof value !== "object") {
				var asString = value;
				if (registered != null && registered[asString] !== undefined) string += key + "{" + registered[asString] + "}";
else if (isProcessableValue(asString)) string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
			} else {
				if (key === "NO_COMPONENT_SELECTOR" && isDevelopment) throw new Error(noComponentSelectorMessage);
				if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === undefined)) {
					for (var _i = 0; _i < value.length; _i++) if (isProcessableValue(value[_i])) string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
				} else {
					var interpolated = handleInterpolation(mergedProps, registered, value);
					switch (key) {
						case "animation":
						case "animationName": {
							string += processStyleName(key) + ":" + interpolated + ";";
							break;
						}
						default: string += key + "{" + interpolated + "}";
					}
				}
			}
		}
		return string;
	}
	var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
	var cursor;
	function serializeStyles(args, registered, mergedProps) {
		if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== undefined) return args[0];
		var stringMode = true;
		var styles = "";
		cursor = undefined;
		var strings = args[0];
		if (strings == null || strings.raw === undefined) {
			stringMode = false;
			styles += handleInterpolation(mergedProps, registered, strings);
		} else {
			var asTemplateStringsArr = strings;
			styles += asTemplateStringsArr[0];
		}
		for (var i = 1; i < args.length; i++) {
			styles += handleInterpolation(mergedProps, registered, args[i]);
			if (stringMode) {
				var templateStringsArr = strings;
				styles += templateStringsArr[i];
			}
		}
		labelPattern.lastIndex = 0;
		var identifierName = "";
		var match;
		while ((match = labelPattern.exec(styles)) !== null) identifierName += "-" + match[1];
		var name = hashString__default["default"](styles) + identifierName;
		return {
			name,
			styles,
			next: cursor
		};
	}
	exports.serializeStyles = serializeStyles;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.cjs.js
var require_emotion_utils_browser_cjs = __commonJS({ "node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.cjs.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var isBrowser = true;
	function getRegisteredStyles$2(registered, registeredStyles, classNames) {
		var rawClassName = "";
		classNames.split(" ").forEach(function(className) {
			if (registered[className] !== undefined) registeredStyles.push(registered[className] + ";");
else if (className) rawClassName += className + " ";
		});
		return rawClassName;
	}
	var registerStyles = function registerStyles$1(cache$2, serialized, isStringTag) {
		var className = cache$2.key + "-" + serialized.name;
		if ((isStringTag === false || isBrowser === false) && cache$2.registered[className] === undefined) cache$2.registered[className] = serialized.styles;
	};
	var insertStyles = function insertStyles$1(cache$2, serialized, isStringTag) {
		registerStyles(cache$2, serialized, isStringTag);
		var className = cache$2.key + "-" + serialized.name;
		if (cache$2.inserted[serialized.name] === undefined) {
			var current = serialized;
			do {
				cache$2.insert(serialized === current ? "." + className : "", current, cache$2.sheet, true);
				current = current.next;
			} while (current !== undefined);
		}
	};
	exports.getRegisteredStyles = getRegisteredStyles$2;
	exports.insertStyles = insertStyles;
	exports.registerStyles = registerStyles;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+css@11.13.5/node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.cjs.js
var require_emotion_css_create_instance_cjs = __commonJS({ "node_modules/.pnpm/@emotion+css@11.13.5/node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.cjs.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var createCache = require_emotion_cache_browser_cjs();
	var serialize = require_emotion_serialize_cjs();
	var utils = require_emotion_utils_browser_cjs();
	function _interopDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	var createCache__default = /*#__PURE__*/ _interopDefault(createCache);
	function insertWithoutScoping(cache$2, serialized) {
		if (cache$2.inserted[serialized.name] === undefined) return cache$2.insert("", serialized, cache$2.sheet, true);
	}
	function merge$2(registered, css$2, className) {
		var registeredStyles = [];
		var rawClassName = utils.getRegisteredStyles(registered, registeredStyles, className);
		if (registeredStyles.length < 2) return className;
		return rawClassName + css$2(registeredStyles);
	}
	var createEmotion = function createEmotion$1(options) {
		var cache$2 = createCache__default["default"](options);
		cache$2.sheet.speedy = function(value) {
			this.isSpeedy = value;
		};
		cache$2.compat = true;
		var css$2 = function css$3() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			var serialized = serialize.serializeStyles(args, cache$2.registered, undefined);
			utils.insertStyles(cache$2, serialized, false);
			return cache$2.key + "-" + serialized.name;
		};
		var keyframes$2 = function keyframes$3() {
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			var serialized = serialize.serializeStyles(args, cache$2.registered);
			var animation = "animation-" + serialized.name;
			insertWithoutScoping(cache$2, {
				name: serialized.name,
				styles: "@keyframes " + animation + "{" + serialized.styles + "}"
			});
			return animation;
		};
		var injectGlobal$2 = function injectGlobal$3() {
			for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
			var serialized = serialize.serializeStyles(args, cache$2.registered);
			insertWithoutScoping(cache$2, serialized);
		};
		var cx$2 = function cx$3() {
			for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
			return merge$2(cache$2.registered, css$2, classnames(args));
		};
		return {
			css: css$2,
			cx: cx$2,
			injectGlobal: injectGlobal$2,
			keyframes: keyframes$2,
			hydrate: function hydrate$2(ids) {
				ids.forEach(function(key) {
					cache$2.inserted[key] = true;
				});
			},
			flush: function flush$2() {
				cache$2.registered = {};
				cache$2.inserted = {};
				cache$2.sheet.flush();
			},
			sheet: cache$2.sheet,
			cache: cache$2,
			getRegisteredStyles: utils.getRegisteredStyles.bind(null, cache$2.registered),
			merge: merge$2.bind(null, cache$2.registered, css$2)
		};
	};
	var classnames = function classnames$1(args) {
		var cls = "";
		for (var i = 0; i < args.length; i++) {
			var arg = args[i];
			if (arg == null) continue;
			var toAdd = void 0;
			switch (typeof arg) {
				case "boolean": break;
				case "object": {
					if (Array.isArray(arg)) toAdd = classnames$1(arg);
else {
						toAdd = "";
						for (var k in arg) if (arg[k] && k) {
							toAdd && (toAdd += " ");
							toAdd += k;
						}
					}
					break;
				}
				default: toAdd = arg;
			}
			if (toAdd) {
				cls && (cls += " ");
				cls += toAdd;
			}
		}
		return cls;
	};
	exports["default"] = createEmotion;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+css@11.13.5/node_modules/@emotion/css/dist/emotion-css.cjs.js
var require_emotion_css_cjs = __commonJS({ "node_modules/.pnpm/@emotion+css@11.13.5/node_modules/@emotion/css/dist/emotion-css.cjs.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var createInstance_dist_emotionCssCreateInstance = require_emotion_css_create_instance_cjs();
	require_emotion_cache_browser_cjs();
	require_emotion_serialize_cjs();
	require_emotion_utils_browser_cjs();
	var _createEmotion = createInstance_dist_emotionCssCreateInstance["default"]({ key: "css" }), flush$1 = _createEmotion.flush, hydrate$1 = _createEmotion.hydrate, cx$1 = _createEmotion.cx, merge$1 = _createEmotion.merge, getRegisteredStyles$1 = _createEmotion.getRegisteredStyles, injectGlobal$1 = _createEmotion.injectGlobal, keyframes$1 = _createEmotion.keyframes, css$1 = _createEmotion.css, sheet$1 = _createEmotion.sheet, cache$1 = _createEmotion.cache;
	exports.cache = cache$1;
	exports.css = css$1;
	exports.cx = cx$1;
	exports.flush = flush$1;
	exports.getRegisteredStyles = getRegisteredStyles$1;
	exports.hydrate = hydrate$1;
	exports.injectGlobal = injectGlobal$1;
	exports.keyframes = keyframes$1;
	exports.merge = merge$1;
	exports.sheet = sheet$1;
} });

//#endregion
//#region node_modules/.pnpm/@emotion+css@11.13.5/node_modules/@emotion/css/dist/emotion-css.cjs.mjs
var import_emotion_css_cjs = __toESM(require_emotion_css_cjs(), 1);

//#endregion
//#region plugins/tarp/css/styles.ts
var styles_default = {
	text: {
		subtitle: (0, import_emotion_css_cjs.css)({
			"margin-top": "12px",
			display: "block"
		}),
		code: (0, import_emotion_css_cjs.css)({
			"background-color": "#36393F",
			"border-radius": "5px",
			"padding": "0.3rem",
			"margin": "0.5rem 0",
			"overflow-x": "auto",
			"white-space": "pre-wrap"
		})
	},
	monaco: { container: (0, import_emotion_css_cjs.css)({
		"max-width": "60vw",
		height: "40rem",
		resize: "vertical",
		overflow: "hidden",
		"padding-bottom": ".5rem",
		display: "block !important"
	}) },
	pageSelector: { container: (0, import_emotion_css_cjs.css)({
		display: "flex",
		"flex-direction": "row",
		"align-items": "center",
		"justify-content": "center",
		"gap": "1rem"
	}) }
};

//#endregion
//#region plugins/tarp/repos.ts
const { plugin: { store: store$7 } } = shelter;
let OfficialPacks = [];
const getOfficialPacks = async (cache$2 = true) => {
	if (cache$2) return store$7.officialPacks;
	const tarp = await fetch("https://raw.githubusercontent.com/grngxd/tarp-themes/main/themes.json").then((res) => res.json());
	OfficialPacks = [tarp];
	store$7.officialPacks = [tarp];
	return [tarp];
};
const registerPacks = async () => {
	store$7.officialPacks = await getOfficialPacks(false);
};
var repos_default = {
	getOfficialPacks,
	registerPacks,
	OfficialPacks
};

//#endregion
//#region plugins/tarp/components/icons/solar.tsx
var import_web$51 = __toESM(require_web());
var import_web$52 = __toESM(require_web());
var import_web$53 = __toESM(require_web());
var import_web$54 = __toESM(require_web());
const _tmpl$$7 = /*#__PURE__*/ (0, import_web$51.template)(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></path><path d="M11.975 1.25c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.145.35-.184.72-.2 1.122a.87.87 0 0 1-.415.731a.87.87 0 0 1-.841-.005c-.356-.188-.696-.339-1.072-.389a2.75 2.75 0 0 0-2.033.545a2.8 2.8 0 0 0-.617.691c-.17.254-.356.575-.578.96l-.025.044c-.223.385-.408.706-.542.98c-.14.286-.25.568-.29.88a2.75 2.75 0 0 0 .544 2.033c.231.301.532.52.872.734a.87.87 0 0 1 .426.726a.87.87 0 0 1-.426.726c-.34.214-.64.433-.872.734a2.75 2.75 0 0 0-.545 2.033c.041.312.15.594.29.88c.135.274.32.595.543.98l.025.044c.222.385.408.706.578.96c.177.263.367.5.617.69a2.75 2.75 0 0 0 2.033.546c.376-.05.716-.2 1.072-.389a.87.87 0 0 1 .84-.005a.86.86 0 0 1 .417.731c.015.402.054.772.2 1.122a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02c.318-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.145-.35.184-.72.2-1.122a.87.87 0 0 1 .415-.732a.87.87 0 0 1 .841.006c.356.188.696.339 1.072.388a2.75 2.75 0 0 0 2.033-.544c.25-.192.44-.428.617-.691c.17-.254.356-.575.578-.96l.025-.044c.223-.385.408-.706.542-.98c.14-.286.25-.569.29-.88a2.75 2.75 0 0 0-.544-2.033c-.231-.301-.532-.52-.872-.734a.87.87 0 0 1-.426-.726c0-.278.152-.554.426-.726c.34-.214.64-.433.872-.734a2.75 2.75 0 0 0 .545-2.033a2.8 2.8 0 0 0-.29-.88a18 18 0 0 0-.543-.98l-.025-.044a18 18 0 0 0-.578-.96a2.8 2.8 0 0 0-.617-.69a2.75 2.75 0 0 0-2.033-.546c-.376.05-.716.2-1.072.389a.87.87 0 0 1-.84.005a.87.87 0 0 1-.417-.731c-.015-.402-.054-.772-.2-1.122a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.04.096.073.247.086.604c.03.792.439 1.555 1.165 1.974s1.591.392 2.292.022c.316-.167.463-.214.567-.227a1.25 1.25 0 0 1 .924.247c.066.051.15.138.285.338c.139.206.299.483.537.895s.397.69.506.912c.107.217.14.333.15.416a1.25 1.25 0 0 1-.247.924c-.064.083-.178.187-.48.377c-.672.422-1.128 1.158-1.128 1.996s.456 1.574 1.128 1.996c.302.19.416.294.48.377c.202.263.29.595.247.924c-.01.083-.044.2-.15.416c-.109.223-.268.5-.506.912s-.399.689-.537.895c-.135.2-.219.287-.285.338a1.25 1.25 0 0 1-.924.247c-.104-.013-.25-.06-.567-.227c-.7-.37-1.566-.398-2.292.021s-1.135 1.183-1.165 1.975c-.013.357-.046.508-.086.604a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017s-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.04-.096-.073-.247-.086-.604c-.03-.792-.439-1.555-1.165-1.974s-1.591-.392-2.292-.022c-.316.167-.463.214-.567.227a1.25 1.25 0 0 1-.924-.247c-.066-.051-.15-.138-.285-.338a17 17 0 0 1-.537-.895c-.238-.412-.397-.69-.506-.912c-.107-.217-.14-.333-.15-.416a1.25 1.25 0 0 1 .247-.924c.064-.083.178-.187.48-.377c.672-.422 1.128-1.158 1.128-1.996s-.456-1.574-1.128-1.996c-.302-.19-.416-.294-.48-.377a1.25 1.25 0 0 1-.247-.924c.01-.083.044-.2.15-.416c.109-.223.268-.5.506-.912s.399-.689.537-.895c.135-.2.219-.287.285-.338a1.25 1.25 0 0 1 .924-.247c.104.013.25.06.567.227c.7.37 1.566.398 2.292-.022c.726-.419 1.135-1.182 1.165-1.974c.013-.357.046-.508.086-.604c.127-.307.37-.55.677-.677"></path></g></svg>`, 8);
function SolarSettingsOutline(props) {
	return (() => {
		const _el$ = (0, import_web$52.getNextElement)(_tmpl$$7);
		(0, import_web$54.spread)(_el$, props, true, true);
		(0, import_web$53.runHydrationEvents)();
		return _el$;
	})();
}

//#endregion
//#region plugins/tarp/components/pages/universal/Tag.tsx
var import_web$46 = __toESM(require_web());
var import_web$47 = __toESM(require_web());
var import_web$48 = __toESM(require_web());
var import_web$49 = __toESM(require_web());
var import_web$50 = __toESM(require_web());
const _tmpl$$6 = /*#__PURE__*/ (0, import_web$46.template)(`<div></div>`, 2);
var Tag_default = ({ color, background, children }) => (() => {
	const _el$ = (0, import_web$49.getNextElement)(_tmpl$$6);
	(0, import_web$50.insert)(_el$, children);
	(0, import_web$48.effect)(() => (0, import_web$47.className)(_el$, (0, import_emotion_css_cjs.css)({
		display: "flex",
		borderRadius: "999rem",
		padding: "0.175rem 0.375rem",
		background: background || "var(--brand-500)",
		textTransform: "uppercase",
		fontSize: "0.75rem",
		color: color || "white",
		alignItems: "center",
		justifyContent: "center"
	})));
	return _el$;
})();

//#endregion
//#region plugins/tarp/components/pages/browse/CardEntry.tsx
var import_web$35 = __toESM(require_web());
var import_web$36 = __toESM(require_web());
var import_web$37 = __toESM(require_web());
var import_web$38 = __toESM(require_web());
var import_web$39 = __toESM(require_web());
var import_web$40 = __toESM(require_web());
var import_web$41 = __toESM(require_web());
var import_web$42 = __toESM(require_web());
var import_web$43 = __toESM(require_web());
var import_web$44 = __toESM(require_web());
var import_web$45 = __toESM(require_web());
const _tmpl$$5 = /*#__PURE__*/ (0, import_web$35.template)(`<img>`, 1), _tmpl$2 = /*#__PURE__*/ (0, import_web$35.template)(`<div></div>`, 2), _tmpl$3 = /*#__PURE__*/ (0, import_web$35.template)(`<div><!#><!/><!#><!/><!#><!/></div>`, 8), _tmpl$4 = /*#__PURE__*/ (0, import_web$35.template)(`<div><a><img></a><div><div><div><div><!#><!/><div><!#><!/><!#><!/></div></div><!#><!/></div><div><!#><!/><!#><!/></div></div></div></div>`, 29);
const { solid: { For: For$2, createSignal: createSignal$5, createEffect: createEffect$4, onMount: onMount$1 }, ui: { Text: Text$3, Button: Button$3, ButtonColors: ButtonColors$3, ButtonLooks: ButtonLooks$3, ButtonSizes: ButtonSizes$3, ModalRoot, openModal, ModalHeader, ModalBody, Header: Header$1, HeaderTags: HeaderTags$1, TextBox: TextBox$2 }, plugin: { store: store$6 }, util: { log: log$4 } } = shelter;
const save__tarp_installedThemeDebounced = (0, lodash_es_debounce.default)((themeLink) => store$6.__tarp_installedTheme = themeLink, 250);
var CardEntry_default = ({ theme }) => {
	const [visibleTags, setVisibleTags] = createSignal$5([]);
	const [hiddenTagsCount, setHiddenTagsCount] = createSignal$5(0);
	onMount$1(() => {
		const card = document.querySelector(".card");
		const tags = Array.from(card.querySelectorAll("#tag"));
		const cardWidth = card.offsetWidth;
		const maxAllowedWidth = cardWidth * .6;
		let totalWidth = 0;
		let visible = [];
		tags.forEach((tag) => {
			const tagWidth = tag.offsetWidth;
			if (totalWidth + tagWidth <= maxAllowedWidth || visible.length === 0) {
				visible.push(tag);
				totalWidth += tagWidth;
			} else tag.style.display = "none";
		});
		setVisibleTags(visible);
		setHiddenTagsCount(tags.length - visible.length);
	});
	const [installed, setInstalled] = createSignal$5(false);
	const [style, setStyle] = createSignal$5("");
	const [styleVariables, setStyleVariables] = createSignal$5([]);
	createEffect$4(async () => {
		await fetch(theme.css_link).then((res) => res.text()).then((css$2) => setStyle(css$2)).catch((err) => {
			log$4(`Failed to fetch theme css: ${err}`);
			setStyle("");
		});
		const vars = [];
		const lines = style().split("\n");
		for (let i = 0; i < lines.length; i++) {
			const lastLine = lines[i - 1] ?? "";
			const line = lines[i].trim();
			if (line.trim() === "") continue;
			let comment = "";
			let name = "";
			let value = "";
			if (lastLine.includes("//") && line.includes("--")) {
				const commentIndex = lastLine.indexOf("//");
				if (commentIndex !== -1) comment = lastLine.slice(commentIndex + 2).trim();
				const colonIndex = line.indexOf(":");
				if (colonIndex === -1) continue;
				name = line.slice(0, colonIndex).trim().slice(2);
				value = line.slice(colonIndex + 1).trim().split(";")[0];
				if (vars.find((v) => v.name === name)) continue;
				vars.push({
					comment,
					name,
					value
				});
			}
			if (lastLine.includes("/*") && line.includes("--")) {
				const commentIndex = lastLine.indexOf("/*");
				if (commentIndex !== -1) comment = lastLine.slice(commentIndex + 2, lastLine.indexOf("*/")).trim();
				const colonIndex = line.indexOf(":");
				if (colonIndex === -1) continue;
				name = line.slice(0, colonIndex).trim().slice(2);
				value = line.slice(colonIndex + 1).trim().split(";")[0];
				if (vars.find((v) => v.name === name)) continue;
				vars.push({
					comment,
					name,
					value
				});
			}
			if (line.includes("/*") && line.includes("--")) {
				const commentIndex = line.indexOf("/*");
				if (commentIndex !== -1) comment = line.slice(commentIndex + 2, line.indexOf("*/")).trim();
				const colonIndex = line.indexOf(":");
				if (colonIndex === -1) continue;
				name = line.slice(0, colonIndex).trim().slice(2);
				value = line.slice(colonIndex + 1).trim().split(";")[0];
				if (vars.find((v) => v.name === name)) continue;
				vars.push({
					comment,
					name,
					value
				});
			}
			if (line.includes("//") && line.includes("--")) {
				const commentIndex = line.indexOf("//");
				if (commentIndex !== -1) comment = line.slice(commentIndex + 2).trim();
				const colonIndex = line.indexOf(":");
				if (colonIndex === -1) continue;
				name = line.slice(0, colonIndex).trim().slice(2);
				value = line.slice(colonIndex + 1).trim().split(";")[0];
				if (vars.find((v) => v.name === name)) continue;
				vars.push({
					comment,
					name,
					value
				});
			}
			if (line.includes("/*") && line.includes("--")) {
				const commentIndex = line.indexOf("/*");
				if (commentIndex !== -1) comment = line.slice(commentIndex + 2, line.indexOf("*/")).trim();
				const colonIndex = line.indexOf(":");
				if (colonIndex === -1) continue;
				name = line.slice(0, colonIndex).trim().slice(2);
				value = line.slice(colonIndex + 1, line.indexOf("/*")).trim().split(";")[0];
				if (vars.find((v) => v.name === name)) continue;
				vars.push({
					comment,
					name,
					value
				});
			}
			if (line.includes("--")) {
				const colonIndex = line.indexOf(":");
				if (colonIndex === -1) continue;
				name = line.slice(0, colonIndex).trim().slice(2);
				value = line.slice(colonIndex + 1).trim().split(";")[0];
				if (vars.find((v) => v.name === name)) continue;
				vars.push({
					comment,
					name,
					value
				});
			}
		}
		setStyleVariables(vars);
		log$4(["style", style()]);
		log$4(["styleVariables", styleVariables()]);
		log$4(["vars", vars]);
	}, [style()]);
	createEffect$4(() => {
		if (!installed()) return;
		save__tarp_installedThemeDebounced(theme.css_link);
	}, [installed()]);
	createEffect$4(() => {
		setInstalled(store$6.__tarp_installedTheme === theme.css_link);
		log$4("installed theme " + store$6.__tarp_installedTheme);
	}, [store$6.__tarp_installedTheme]);
	const PreviewModal = ({ close }) => {
		return (0, import_web$41.createComponent)(ModalRoot, { get children() {
			return (0, import_web$41.createComponent)(ModalBody, { get children() {
				const _el$ = (0, import_web$45.getNextElement)(_tmpl$$5);
				(0, import_web$44.effect)((_p$) => {
					const _v$ = theme.preview || "https://placehold.co/600x400?text=No%20Image", _v$2 = theme.name, _v$3 = (0, import_emotion_css_cjs.css)({
						width: "100%",
						height: "100%",
						objectFit: "contain",
						borderRadius: "1rem"
					});
					_v$ !== _p$._v$ && (0, import_web$43.setAttribute)(_el$, "src", _p$._v$ = _v$);
					_v$2 !== _p$._v$2 && (0, import_web$43.setAttribute)(_el$, "alt", _p$._v$2 = _v$2);
					_v$3 !== _p$._v$3 && (0, import_web$42.className)(_el$, _p$._v$3 = _v$3);
					return _p$;
				}, {
					_v$: undefined,
					_v$2: undefined,
					_v$3: undefined
				});
				return _el$;
			} });
		} });
	};
	const VariablesModal = ({ close }) => {
		return (0, import_web$41.createComponent)(ModalRoot, { get children() {
			return [(0, import_web$41.createComponent)(ModalHeader, {
				close,
				get children() {
					return (0, import_web$41.createComponent)(Header$1, {
						get tag() {
							return HeaderTags$1.H4;
						},
						children: "Variables"
					});
				}
			}), (0, import_web$41.createComponent)(ModalBody, { get children() {
				const _el$2 = (0, import_web$45.getNextElement)(_tmpl$2);
				(0, import_web$40.insert)(_el$2, (0, import_web$41.createComponent)(For$2, {
					get each() {
						return styleVariables();
					},
					children: (variable) => (() => {
						const _el$3 = (0, import_web$45.getNextElement)(_tmpl$3), _el$4 = _el$3.firstChild, [_el$5, _co$] = (0, import_web$38.getNextMarker)(_el$4.nextSibling), _el$6 = _el$5.nextSibling, [_el$7, _co$2] = (0, import_web$38.getNextMarker)(_el$6.nextSibling), _el$8 = _el$7.nextSibling, [_el$9, _co$3] = (0, import_web$38.getNextMarker)(_el$8.nextSibling);
						(0, import_web$40.insert)(_el$3, (0, import_web$41.createComponent)(Header$1, {
							get tag() {
								return HeaderTags$1.H4;
							},
							get children() {
								return variable.name;
							}
						}), _el$5, _co$);
						(0, import_web$40.insert)(_el$3, (() => {
							const _c$ = (0, import_web$39.memo)(() => !!variable.comment);
							return () => _c$() && (0, import_web$41.createComponent)(Header$1, {
								get tag() {
									return HeaderTags$1.H5;
								},
								get children() {
									return variable.comment;
								}
							});
						})(), _el$7, _co$2);
						(0, import_web$40.insert)(_el$3, (0, import_web$41.createComponent)(TextBox$2, {
							get value() {
								return variable.value;
							},
							onInput: (v) => {
								const lines = style().split("\n");
								const newLines = [];
								for (let i = 0; i < lines.length; i++) {
									const line = lines[i];
									if (line.includes(variable.name) && !line.includes(":root")) newLines.push(line.replace(variable.name, v));
else newLines.push(line);
								}
							}
						}), _el$9, _co$3);
						(0, import_web$44.effect)(() => (0, import_web$42.className)(_el$3, (0, import_emotion_css_cjs.css)({
							display: "flex",
							flexDirection: "column",
							gap: "0.25rem",
							background: "var(--background-secondary)",
							padding: "0.5rem",
							borderRadius: "var(--radius-sm)"
						})));
						return _el$3;
					})()
				}));
				(0, import_web$44.effect)(() => (0, import_web$42.className)(_el$2, (0, import_emotion_css_cjs.css)({
					display: "flex",
					flexDirection: "column",
					gap: "1rem"
				})));
				return _el$2;
			} })];
		} });
	};
	return (() => {
		const _el$0 = (0, import_web$45.getNextElement)(_tmpl$4), _el$1 = _el$0.firstChild, _el$10 = _el$1.firstChild, _el$11 = _el$1.nextSibling, _el$12 = _el$11.firstChild, _el$13 = _el$12.firstChild, _el$14 = _el$13.firstChild, _el$20 = _el$14.firstChild, [_el$21, _co$6] = (0, import_web$38.getNextMarker)(_el$20.nextSibling), _el$15 = _el$21.nextSibling, _el$16 = _el$15.firstChild, [_el$17, _co$4] = (0, import_web$38.getNextMarker)(_el$16.nextSibling), _el$18 = _el$17.nextSibling, [_el$19, _co$5] = (0, import_web$38.getNextMarker)(_el$18.nextSibling), _el$22 = _el$14.nextSibling, [_el$23, _co$7] = (0, import_web$38.getNextMarker)(_el$22.nextSibling), _el$24 = _el$13.nextSibling, _el$25 = _el$24.firstChild, [_el$26, _co$8] = (0, import_web$38.getNextMarker)(_el$25.nextSibling), _el$27 = _el$26.nextSibling, [_el$28, _co$9] = (0, import_web$38.getNextMarker)(_el$27.nextSibling);
		_el$1.$$click = () => openModal(PreviewModal);
		(0, import_web$40.insert)(_el$14, (0, import_web$41.createComponent)(Header$1, {
			get tag() {
				return HeaderTags$1.H4;
			},
			get ["class"]() {
				return (0, import_emotion_css_cjs.css)({
					display: "flex",
					flexWrap: "wrap"
				});
			},
			get children() {
				return [(0, import_web$39.memo)(() => theme.name), (0, import_web$41.createComponent)(Header$1, {
					get tag() {
						return HeaderTags$1.H5;
					},
					get ["class"]() {
						return (0, import_emotion_css_cjs.css)({ marginLeft: "0.5ch" });
					},
					get children() {
						return ["— ", (0, import_web$39.memo)(() => theme.author)];
					}
				})];
			}
		}), _el$21, _co$6);
		(0, import_web$40.insert)(_el$15, (0, import_web$41.createComponent)(For$2, {
			get each() {
				return (0, import_web$39.memo)(() => !!(theme.tags && Array.isArray(theme.tags)))() ? theme.tags.slice(0, 3).sort(() => Math.random() - .5) : [];
			},
			children: (tag) => (0, import_web$41.createComponent)(Tag_default, {
				get background() {
					return (0, randomcolor.default)({
						luminosity: "dark",
						seed: tag.split("").reverse().join("") + tag.length + "shelteriscool"
					});
				},
				get children() {
					return tag.toLowerCase();
				}
			})
		}), _el$17, _co$4);
		(0, import_web$40.insert)(_el$15, (0, import_web$41.createComponent)(Header$1, {
			get tag() {
				return HeaderTags$1.H5;
			},
			get ["class"]() {
				return (0, import_emotion_css_cjs.css)({ marginLeft: "0.25rem" });
			},
			get children() {
				return (0, import_web$39.memo)(() => hiddenTagsCount() > 0)() ? `+${hiddenTagsCount()}` : "";
			}
		}), _el$19, _co$5);
		(0, import_web$40.insert)(_el$13, (0, import_web$41.createComponent)(Text$3, { get children() {
			return theme.description;
		} }), _el$23, _co$7);
		(0, import_web$40.insert)(_el$24, (0, import_web$41.createComponent)(Button$3, {
			get color() {
				return installed() ? ButtonColors$3.RED : ButtonColors$3.BRAND;
			},
			get look() {
				return ButtonLooks$3.FILLED;
			},
			get size() {
				return ButtonSizes$3.ICON;
			},
			get ["class"]() {
				return (0, import_emotion_css_cjs.css)({
					padding: "0.5rem 0 !important",
					borderRadius: "var(--radius-sm) !important",
					width: "100% !important"
				});
			},
			onClick: (e) => {
				e.stopPropagation();
				if (installed()) store$6.__tarp_installedTheme = "";
else store$6.__tarp_installedTheme = theme.css_link;
			},
			get children() {
				return installed() ? "Uninstall" : "Install";
			}
		}), _el$26, _co$8);
		(0, import_web$40.insert)(_el$24, (0, import_web$41.createComponent)(Button$3, {
			get color() {
				return installed() ? ButtonColors$3.RED : ButtonColors$3.BRAND;
			},
			get look() {
				return ButtonLooks$3.FILLED;
			},
			get size() {
				return ButtonSizes$3.ICON;
			},
			get ["class"]() {
				return (0, import_emotion_css_cjs.css)({
					padding: "0.5rem 0 !important",
					borderRadius: "var(--radius-sm) !important",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "2.125rem !important",
					flex: "0 0 auto"
				});
			},
			onClick: (e) => {
				e.stopPropagation();
				openModal(VariablesModal);
			},
			get children() {
				return (0, import_web$41.createComponent)(SolarSettingsOutline, { get ["class"]() {
					return (0, import_emotion_css_cjs.css)({ fontSize: "1.25rem" });
				} });
			}
		}), _el$28, _co$9);
		(0, import_web$44.effect)((_p$) => {
			const _v$4 = (0, import_emotion_css_cjs.css)({
				display: "flex",
				flexDirection: "column",
				borderRadius: "1rem",
				overflow: "clip",
				width: "100%",
				height: "100%"
			}), _v$5 = theme.preview || "https://placehold.co/600x400?text=No%20Image", _v$6 = theme.name, _v$7 = (0, import_emotion_css_cjs.css)({
				width: "100%",
				height: "12rem",
				objectFit: "cover",
				transition: "filter 0.175s ease-out",
				"&:hover": { filter: "brightness(80%)" }
			}), _v$8 = (0, import_emotion_css_cjs.css)({
				background: "var(--background-secondary)",
				padding: "1rem",
				borderRadius: "0 0 1rem 1rem",
				flexGrow: 1,
				height: "100%"
			}), _v$9 = (0, import_emotion_css_cjs.css)({
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				gap: "0.825rem",
				height: "100%"
			}), _v$0 = (0, import_emotion_css_cjs.css)({
				display: "flex",
				flexDirection: "column",
				gap: "0.375rem"
			}), _v$1 = (0, import_emotion_css_cjs.css)({
				display: "flex",
				flexDirection: "column",
				gap: "0.25rem"
			}), _v$10 = (0, import_emotion_css_cjs.css)({
				display: "flex",
				gap: "0.25rem"
			}), _v$11 = (0, import_emotion_css_cjs.css)({
				display: "flex",
				gap: "0.5rem",
				width: "100% !important",
				minHeight: "initial !important",
				height: "2.125rem !important"
			});
			_v$4 !== _p$._v$4 && (0, import_web$42.className)(_el$0, _p$._v$4 = _v$4);
			_v$5 !== _p$._v$5 && (0, import_web$43.setAttribute)(_el$10, "src", _p$._v$5 = _v$5);
			_v$6 !== _p$._v$6 && (0, import_web$43.setAttribute)(_el$10, "alt", _p$._v$6 = _v$6);
			_v$7 !== _p$._v$7 && (0, import_web$42.className)(_el$10, _p$._v$7 = _v$7);
			_v$8 !== _p$._v$8 && (0, import_web$42.className)(_el$11, _p$._v$8 = _v$8);
			_v$9 !== _p$._v$9 && (0, import_web$42.className)(_el$12, _p$._v$9 = _v$9);
			_v$0 !== _p$._v$0 && (0, import_web$42.className)(_el$13, _p$._v$0 = _v$0);
			_v$1 !== _p$._v$1 && (0, import_web$42.className)(_el$14, _p$._v$1 = _v$1);
			_v$10 !== _p$._v$10 && (0, import_web$42.className)(_el$15, _p$._v$10 = _v$10);
			_v$11 !== _p$._v$11 && (0, import_web$42.className)(_el$24, _p$._v$11 = _v$11);
			return _p$;
		}, {
			_v$4: undefined,
			_v$5: undefined,
			_v$6: undefined,
			_v$7: undefined,
			_v$8: undefined,
			_v$9: undefined,
			_v$0: undefined,
			_v$1: undefined,
			_v$10: undefined,
			_v$11: undefined
		});
		(0, import_web$37.runHydrationEvents)();
		return _el$0;
	})();
};
(0, import_web$36.delegateEvents)(["click"]);

//#endregion
//#region plugins/tarp/components/pages/BrowsePage.tsx
var import_web$29 = __toESM(require_web());
var import_web$30 = __toESM(require_web());
var import_web$31 = __toESM(require_web());
var import_web$32 = __toESM(require_web());
var import_web$33 = __toESM(require_web());
var import_web$34 = __toESM(require_web());
const _tmpl$$4 = /*#__PURE__*/ (0, import_web$29.template)(`<div></div>`, 2);
const { util: { log: log$3 }, ui: { TextBox: TextBox$1 }, plugin: { store: store$5 }, solidWeb: { For: For$1 }, solid: { createSignal: createSignal$4, createEffect: createEffect$3 } } = shelter;
const containerStyle = (0, import_emotion_css_cjs.css)({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	padding: "1rem 0 0 0",
	gridGap: "1rem"
});
const BrowsePage = () => {
	const [search, setSearch] = createSignal$4("");
	const [officialThemes, setOfficialThemes] = createSignal$4([]);
	const [themes, setThemes] = createSignal$4([]);
	const [filteredThemes, setFilteredThemes] = createSignal$4([]);
	createEffect$3(async () => {
		await repos_default.registerPacks();
	}, []);
	createEffect$3(() => {
		log$3("store official packs");
		log$3(store$5.officialPacks);
		setOfficialThemes(store$5.officialPacks.flatMap((pack) => pack.themes));
	});
	createEffect$3(() => {
		log$3("store official packs");
		log$3(store$5.officialPacks);
		setOfficialThemes(store$5.officialPacks.flatMap((pack) => pack.themes));
	}, [store$5.officialPacks]);
	createEffect$3(() => {
		const filterThemes = (theme) => {
			const searchLower = search().toLowerCase() || "";
			return theme.name && theme.name.toLowerCase().includes(searchLower) || theme.description && theme.description.toLowerCase().includes(searchLower) || theme.author && theme.author.toLowerCase().includes(searchLower) || Array.isArray(theme.tags) && theme.tags.some((tag) => tag.toLowerCase().includes(searchLower));
		};
		setFilteredThemes([...officialThemes().filter(filterThemes) || [], ...themes().filter(filterThemes) || []]);
	}, [
		search,
		themes,
		officialThemes
	]);
	createEffect$3(() => {
		log$3("store packs");
		log$3(store$5.packs);
		setThemes(store$5.packs.flatMap((pack) => pack.themes));
	});
	return [(0, import_web$34.createComponent)(TextBox$1, {
		placeholder: "Search for a theme...",
		get value() {
			return search();
		},
		onInput: setSearch
	}), (() => {
		const _el$ = (0, import_web$30.getNextElement)(_tmpl$$4);
		(0, import_web$33.className)(_el$, containerStyle);
		(0, import_web$31.insert)(_el$, (0, import_web$34.createComponent)(For$1, {
			get each() {
				return (0, import_web$32.memo)(() => filteredThemes().length > 0)() ? filteredThemes() : [...officialThemes(), ...themes()];
			},
			children: (theme) => (0, import_web$34.createComponent)(CardEntry_default, { theme })
		}));
		return _el$;
	})()];
};
var BrowsePage_default = BrowsePage;

//#endregion
//#region plugins/tarp/components/pages/CssEditorPage.tsx
var import_web$23 = __toESM(require_web());
var import_web$24 = __toESM(require_web());
var import_web$25 = __toESM(require_web());
var import_web$26 = __toESM(require_web());
var import_web$27 = __toESM(require_web());
var import_web$28 = __toESM(require_web());
const _tmpl$$3 = /*#__PURE__*/ (0, import_web$23.template)(`<div></div>`, 2);
const saveCssDebounced = (0, lodash_es_debounce.default)((v) => store$4.quickCSS = v, 250);
const { util: { log: log$2 }, solid: { createSignal: createSignal$3, createEffect: createEffect$2, onCleanup }, plugin: { store: store$4 }, flux: { dispatcher: dispatcher$1, stores: stores$1 } } = shelter;
var CssEditorPage_default = () => {
	const [quickCss, setCss] = createSignal$3(store$4.quickCSS);
	let monacoRef;
	createEffect$2(() => {
		saveCssDebounced(quickCss());
	});
	createEffect$2(() => {
		if (monacoRef) {
			const modelUri = monaco_editor.Uri.parse("inmemory://model.css");
			const existingModel = monaco_editor.editor.getModel(modelUri);
			if (existingModel) existingModel.dispose();
			monaco_editor.editor.createModel(quickCss(), "css", modelUri);
		}
	});
	onCleanup(() => {
		if (monacoRef) monacoRef.dispose();
	});
	return (() => {
		const _el$ = (0, import_web$26.getNextElement)(_tmpl$$3);
		(0, import_web$27.insert)(_el$, (0, import_web$28.createComponent)(__uwu_monaco_solid.default, {
			ref: (ref) => monacoRef = ref,
			get value() {
				return quickCss();
			},
			valOut: setCss,
			lang: "css",
			theme: "vs-dark",
			width: "100%",
			height: "100%",
			otherCfg: { automaticLayout: true }
		}));
		(0, import_web$25.effect)(() => (0, import_web$24.className)(_el$, styles_default.monaco.container));
		return _el$;
	})();
};

//#endregion
//#region plugins/tarp/util.ts
const githubLinkToRaw = (url) => {
	return url.replace("github.com", "raw.githubusercontent.com").replace("/blob", "");
};
var util_default = { githubLinkToRaw };

//#endregion
//#region plugins/tarp/components/pages/packs/PackEntry.tsx
var import_web$14 = __toESM(require_web());
var import_web$15 = __toESM(require_web());
var import_web$16 = __toESM(require_web());
var import_web$17 = __toESM(require_web());
var import_web$18 = __toESM(require_web());
var import_web$19 = __toESM(require_web());
var import_web$20 = __toESM(require_web());
var import_web$21 = __toESM(require_web());
var import_web$22 = __toESM(require_web());
const _tmpl$$2 = /*#__PURE__*/ (0, import_web$14.template)(`<div><div><div><!#><!/><!#><!/></div><!#><!/></div><!#><!/></div>`, 14);
const { ui: { Text: Text$2, Button: Button$2, ButtonColors: ButtonColors$2, ButtonLooks: ButtonLooks$2, ButtonSizes: ButtonSizes$2 }, plugin: { store: store$3 } } = shelter;
const removePack = (pack) => {
	store$3.packs = store$3.packs.filter((p) => p.meta.name !== pack.meta.name);
	store$3.packLinks = store$3.packLinks.filter((link) => link !== pack.meta.link);
};
const PackEntry = ({ pack, official }) => {
	return (() => {
		const _el$ = (0, import_web$18.getNextElement)(_tmpl$$2), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, [_el$5, _co$] = (0, import_web$20.getNextMarker)(_el$4.nextSibling), _el$6 = _el$5.nextSibling, [_el$7, _co$2] = (0, import_web$20.getNextMarker)(_el$6.nextSibling), _el$8 = _el$3.nextSibling, [_el$9, _co$3] = (0, import_web$20.getNextMarker)(_el$8.nextSibling), _el$0 = _el$2.nextSibling, [_el$1, _co$4] = (0, import_web$20.getNextMarker)(_el$0.nextSibling);
		_el$.$$click = () => {
			window.open(pack.meta.link, "_blank");
		};
		(0, import_web$21.insert)(_el$3, (0, import_web$22.createComponent)(Text$2, { get children() {
			return pack.meta.name;
		} }), _el$5, _co$);
		(0, import_web$21.insert)(_el$3, official && (0, import_web$22.createComponent)(Tag_default, { children: "official" }), _el$7, _co$2);
		(0, import_web$21.insert)(_el$2, (0, import_web$22.createComponent)(Text$2, { get children() {
			return pack.meta.description;
		} }), _el$9, _co$3);
		(0, import_web$21.insert)(_el$, !official && (0, import_web$22.createComponent)(Button$2, {
			get look() {
				return ButtonLooks$2.FILLED;
			},
			get size() {
				return ButtonSizes$2.MEDIUM;
			},
			get color() {
				return ButtonColors$2.RED;
			},
			onClick: (e) => {
				e.stopPropagation();
				removePack(pack);
			},
			children: "Remove"
		}), _el$1, _co$4);
		(0, import_web$17.effect)((_p$) => {
			const _v$ = (0, import_emotion_css_cjs.css)({
				background: "var(--background-secondary)",
				borderRadius: "0.5rem",
				padding: "1rem",
				width: "100%",
				display: "flex",
				flexDirection: "row",
				gap: "0.375rem"
			}), _v$2 = (0, import_emotion_css_cjs.css)({
				display: "flex",
				flexDirection: "column",
				gap: "0.125rem",
				flexGrow: 1
			}), _v$3 = (0, import_emotion_css_cjs.css)({
				display: "flex",
				gap: "0.5rem",
				alignItems: "center"
			});
			_v$ !== _p$._v$ && (0, import_web$16.className)(_el$, _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$16.className)(_el$2, _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$16.className)(_el$3, _p$._v$3 = _v$3);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined
		});
		(0, import_web$19.runHydrationEvents)();
		return _el$;
	})();
};
(0, import_web$15.delegateEvents)(["click"]);

//#endregion
//#region plugins/tarp/components/pages/PacksPage.tsx
var import_web$7 = __toESM(require_web());
var import_web$8 = __toESM(require_web());
var import_web$9 = __toESM(require_web());
var import_web$10 = __toESM(require_web());
var import_web$11 = __toESM(require_web());
var import_web$12 = __toESM(require_web());
var import_web$13 = __toESM(require_web());
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$7.template)(`<div><!#><!/><!#><!/></div>`, 6);
const { solid: { createEffect: createEffect$1, createSignal: createSignal$2, For }, ui: { TextBox, Button: Button$1, ButtonColors: ButtonColors$1, ButtonLooks: ButtonLooks$1, ButtonSizes: ButtonSizes$1, Divider: Divider$2 }, util: { log: log$1 }, plugin: { store: store$2 } } = shelter;
const PacksPage = () => {
	const [link, setLink] = createSignal$2("");
	const [officialPacks, setOfficialPacks] = createSignal$2(store$2.officialPacks || []);
	const [packs, setPacks] = createSignal$2(store$2.packs || []);
	const [packLinks, setPackLinks] = createSignal$2([]);
	createEffect$1(async () => {
		const fetchOfficialRepos = async () => {
			const officialPacks$1 = await repos_default.getOfficialPacks();
			setOfficialPacks(officialPacks$1);
		};
		await fetchOfficialRepos();
	}, []);
	createEffect$1(async () => {
		const fetchPackLinks = () => {
			const links = store$2.packs || [];
			setPackLinks(links);
		};
		fetchPackLinks();
		log$1(["packLinks", packLinks()]);
		log$1(["packs", packs()]);
		const fetchPacks = async () => {
			for (const link$1 of packLinks()) {
				const response = await fetch(util_default.githubLinkToRaw(link$1) + "/main/themes.json").then((res) => res.json());
				if (!response) return;
				setPacks([...packs(), response]);
				log$1(["Adding pack ", response]);
			}
		};
		await fetchPacks();
		store$2.packs = packs();
	}, []);
	createEffect$1(() => {
		setPacks(store$2.packs);
	}, [store$2.packs]);
	const handleAddRepo = async () => {
		if (!link().trim().startsWith("http")) return;
		const response = await fetch(util_default.githubLinkToRaw(link()) + "/main/themes.json").then((res) => res.json());
		if (!response) return;
		log$1(["Adding pack ", response]);
		setPacks([...packs(), response]);
		setPackLinks([...packLinks(), link()]);
	};
	return [
		(() => {
			const _el$ = (0, import_web$10.getNextElement)(_tmpl$$1), _el$2 = _el$.firstChild, [_el$3, _co$] = (0, import_web$11.getNextMarker)(_el$2.nextSibling), _el$4 = _el$3.nextSibling, [_el$5, _co$2] = (0, import_web$11.getNextMarker)(_el$4.nextSibling);
			(0, import_web$12.insert)(_el$, (0, import_web$13.createComponent)(TextBox, {
				get value() {
					return link();
				},
				onInput: setLink,
				placeholder: "https://github.com/user/repo"
			}), _el$3, _co$);
			(0, import_web$12.insert)(_el$, (0, import_web$13.createComponent)(Button$1, {
				get look() {
					return ButtonLooks$1.FILLED;
				},
				get size() {
					return ButtonSizes$1.MEDIUM;
				},
				onClick: async () => await handleAddRepo(),
				children: "Add"
			}), _el$5, _co$2);
			(0, import_web$9.effect)(() => (0, import_web$8.className)(_el$, (0, import_emotion_css_cjs.css)({
				display: "flex",
				gap: "0.15rem"
			})));
			return _el$;
		})(),
		(0, import_web$13.createComponent)(Divider$2, {
			mt: true,
			mb: true
		}),
		(() => {
			const _el$6 = (0, import_web$10.getNextElement)(_tmpl$$1), _el$7 = _el$6.firstChild, [_el$8, _co$3] = (0, import_web$11.getNextMarker)(_el$7.nextSibling), _el$9 = _el$8.nextSibling, [_el$0, _co$4] = (0, import_web$11.getNextMarker)(_el$9.nextSibling);
			(0, import_web$12.insert)(_el$6, (0, import_web$13.createComponent)(For, {
				get each() {
					return officialPacks();
				},
				children: (pack) => (0, import_web$13.createComponent)(PackEntry, {
					pack,
					official: true
				})
			}), _el$8, _co$3);
			(0, import_web$12.insert)(_el$6, (0, import_web$13.createComponent)(For, {
				get each() {
					return packs();
				},
				children: (pack) => (0, import_web$13.createComponent)(PackEntry, {
					pack,
					official: false
				})
			}), _el$0, _co$4);
			(0, import_web$9.effect)(() => (0, import_web$8.className)(_el$6, (0, import_emotion_css_cjs.css)({
				display: "flex",
				flexDirection: "column",
				gap: "0.5rem"
			})));
			return _el$6;
		})()
	];
};
var PacksPage_default = PacksPage;

//#endregion
//#region plugins/tarp/components/pages/SettingsPage.tsx
const { solid: { createSignal: createSignal$1 }, ui: { SwitchItem }, plugin: { store: store$1 } } = shelter;
var SettingsPage_default = () => {
	return [];
};

//#endregion
//#region plugins/tarp/components/PageSelector.tsx
var import_web$1 = __toESM(require_web());
var import_web$2 = __toESM(require_web());
var import_web$3 = __toESM(require_web());
var import_web$4 = __toESM(require_web());
var import_web$5 = __toESM(require_web());
var import_web$6 = __toESM(require_web());
const _tmpl$ = /*#__PURE__*/ (0, import_web$1.template)(`<div></div>`, 2);
const { solid: { createSignal }, solidWeb: { Dynamic }, ui: { Button, Text: Text$1, Divider: Divider$1, ButtonLooks, ButtonColors, ButtonSizes } } = shelter;
var PageSelector_default = (props) => {
	const [currentPage, setPage] = createSignal(0);
	return [
		(() => {
			const _el$ = (0, import_web$5.getNextElement)(_tmpl$);
			(0, import_web$6.insert)(_el$, () => props.Pages.map((page, i) => (0, import_web$2.createComponent)(Button, {
				onClick: () => setPage(i),
				get look() {
					return ButtonLooks.FILLED;
				},
				get color() {
					return i === currentPage() ? ButtonColors.SECONDARY : ButtonColors.TRANSPARENT;
				},
				get ["class"]() {
					return (0, import_emotion_css_cjs.css)({
						opacity: i === currentPage() ? 1 : .75,
						padding: "0 3rem !important"
					});
				},
				get size() {
					return ButtonSizes.SMALL;
				},
				get children() {
					return page.Title;
				}
			})));
			(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$, styles_default.pageSelector.container));
			return _el$;
		})(),
		(0, import_web$2.createComponent)(Divider$1, {
			mt: true,
			mb: true
		}),
		(0, import_web$2.createComponent)(Dynamic, { get component() {
			return props.Pages[currentPage()].Page;
		} })
	];
};

//#endregion
//#region plugins/tarp/components/Settings.tsx
var import_web = __toESM(require_web());
const { Header, HeaderTags, Text, Divider } = shelter.ui;
const { solid: { onMount } } = shelter;
var Settings_default = () => {
	const pages = [
		{
			Title: "Browse",
			Page: BrowsePage_default
		},
		{
			Title: "Packs",
			Page: PacksPage_default
		},
		{
			Title: "Editor",
			Page: CssEditorPage_default
		},
		{
			Title: "Settings",
			Page: SettingsPage_default
		}
	];
	return [
		(0, import_web.createComponent)(Header, {
			get tag() {
				return HeaderTags.H1;
			},
			children: "Theme Browser"
		}),
		(0, import_web.createComponent)(Text, {
			get ["class"]() {
				return styles_default.text.subtitle;
			},
			children: "Here you can browse and install themes for Discord."
		}),
		(0, import_web.createComponent)(Divider, {
			mt: true,
			mb: true
		}),
		(0, import_web.createComponent)(PageSelector_default, { Pages: pages })
	];
};

//#endregion
//#region plugins/tarp/index.tsx
const { util: { log }, plugin: { store }, solid: { createEffect }, ui: { showToast }, flux: { dispatcher, stores } } = shelter;
let cleanup = [];
let quickStyle;
async function onLoad() {
	await repos_default.registerPacks();
	handleQuickCSS();
	await handleThemes();
	registerSettingsSection();
	handleRepos();
	showToast({
		title: "tarp",
		content: "tarp has finished loading"
	});
}
function onUnload() {
	cleanupFunctions();
	removeStyleElement("grng.quickcss");
	removeStyleElement("grng.theme");
}
function cleanupFunctions() {
	for (const clean of cleanup) clean();
}
function removeStyleElement(elementId) {
	const styleElement = document.getElementById(elementId);
	if (styleElement) styleElement.remove();
}
function handleQuickCSS() {
	const existingQuickCss = document.getElementById("grng.quickcss");
	if (existingQuickCss) existingQuickCss.remove();
	const quickStyleElement = document.createElement("style");
	quickStyleElement.id = "grng.quickcss";
	document.body.insertBefore(quickStyleElement, document.body.firstChild);
	if (store.quickCSS) {
		quickStyle = store.quickCSS;
		quickStyleElement.innerHTML = quickStyle;
	} else store.quickCSS = "";
	handleQuickCSSEffect();
}
function handleRepos() {
	if (!Array.isArray(store.packs)) store.packs = [];
	if (!Array.isArray(store.officialPacks)) store.officialPacks = [];
}
async function handleThemes() {
	createEffect(async () => {
		if (!store.__tarp_installedTheme) store.__tarp_installedTheme = "";
		if (store.__tarp_installedTheme.endsWith(".css") || store.__tarp_installedTheme === "") {
			const head = document.getElementsByTagName("head")[0];
			if (head) {
				const existingTheme = document.getElementById("grng.theme");
				if (existingTheme) existingTheme.remove();
				if (!store.themes) store.themes = [];
				const style = document.createElement("style");
				style.id = "grng.theme";
				const theme = await fetch(store.__tarp_installedTheme).then((res) => res.text());
				style.innerHTML = theme;
				head.appendChild(style);
			}
		}
	}, [store.__tarp_installedTheme]);
}
function handleQuickCSSEffect() {
	const quickStyleElement = document.getElementById("grng.quickcss");
	createEffect(() => {
		quickStyleElement.innerHTML = "";
		quickStyle = store.quickCSS;
		quickStyleElement.innerHTML = quickStyle;
	}, [store.quickCSS]);
}
function registerSettingsSection() {
	const c = shelter.settings.registerSection("section", "tarp.settings", "Theme Browser", Settings_default);
	cleanup.push(c);
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({}, lodash_es_debounce, randomcolor, __uwu_monaco_solid, monaco_editor);