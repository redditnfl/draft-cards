/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
	} : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
	"use strict";
	var n = [],
	    r = e.document,
	    i = Object.getPrototypeOf,
	    o = n.slice,
	    a = n.concat,
	    s = n.push,
	    u = n.indexOf,
	    l = {},
	    c = l.toString,
	    f = l.hasOwnProperty,
	    p = f.toString,
	    d = p.call(Object),
	    h = {},
	    g = function e(t) {
		return "function" == typeof t && "number" != typeof t.nodeType;
	},
	    y = function e(t) {
		return null != t && t === t.window;
	},
	    v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
		var i,
		    o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);t.head.appendChild(o).parentNode.removeChild(o);
	}function x(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
	}var b = "3.3.1",
	    w = function (e, t) {
		return new w.fn.init(e, t);
	},
	    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function () {
			return o.call(this);
		}, get: function (e) {
			return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
		}, pushStack: function (e) {
			var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
		}, each: function (e) {
			return w.each(this, e);
		}, map: function (e) {
			return this.pushStack(w.map(this, function (t, n) {
				return e.call(t, n, t);
			}));
		}, slice: function () {
			return this.pushStack(o.apply(this, arguments));
		}, first: function () {
			return this.eq(0);
		}, last: function () {
			return this.eq(-1);
		}, eq: function (e) {
			var t = this.length,
			    n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
		}, end: function () {
			return this.prevObject || this.constructor();
		}, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
		var e,
		    t,
		    n,
		    r,
		    i,
		    o,
		    a = arguments[0] || {},
		    s = 1,
		    u = arguments.length,
		    l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));return a;
	}, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
			throw new Error(e);
		}, noop: function () {}, isPlainObject: function (e) {
			var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
		}, isEmptyObject: function (e) {
			var t;for (t in e) return !1;return !0;
		}, globalEval: function (e) {
			m(e);
		}, each: function (e, t) {
			var n,
			    r = 0;if (C(e)) {
				for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
			} else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;return e;
		}, trim: function (e) {
			return null == e ? "" : (e + "").replace(T, "");
		}, makeArray: function (e, t) {
			var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
		}, inArray: function (e, t, n) {
			return null == t ? -1 : u.call(t, e, n);
		}, merge: function (e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];return e.length = i, e;
		}, grep: function (e, t, n) {
			for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);return i;
		}, map: function (e, t, n) {
			var r,
			    i,
			    o = 0,
			    s = [];if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);return a.apply([], s);
		}, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		l["[object " + t + "]"] = t.toLowerCase();
	});function C(e) {
		var t = !!e && "length" in e && e.length,
		    n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
	}var E = function (e) {
		var t,
		    n,
		    r,
		    i,
		    o,
		    a,
		    s,
		    u,
		    l,
		    c,
		    f,
		    p,
		    d,
		    h,
		    g,
		    y,
		    v,
		    m,
		    x,
		    b = "sizzle" + 1 * new Date(),
		    w = e.document,
		    T = 0,
		    C = 0,
		    E = ae(),
		    k = ae(),
		    S = ae(),
		    D = function (e, t) {
			return e === t && (f = !0), 0;
		},
		    N = {}.hasOwnProperty,
		    A = [],
		    j = A.pop,
		    q = A.push,
		    L = A.push,
		    H = A.slice,
		    O = function (e, t) {
			for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;return -1;
		},
		    P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    M = "[\\x20\\t\\r\\n\\f]",
		    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
		    I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
		    W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
		    $ = new RegExp(M + "+", "g"),
		    B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
		    F = new RegExp("^" + M + "*," + M + "*"),
		    _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
		    z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
		    X = new RegExp(W),
		    U = new RegExp("^" + R + "$"),
		    V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
		    G = /^(?:input|select|textarea|button)$/i,
		    Y = /^h\d$/i,
		    Q = /^[^{]+\{\s*\[native \w/,
		    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    K = /[+~]/,
		    Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
		    ee = function (e, t, n) {
			var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
		},
		    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    ne = function (e, t) {
			return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
		},
		    re = function () {
			p();
		},
		    ie = me(function (e) {
			return !0 === e.disabled && ("form" in e || "label" in e);
		}, { dir: "parentNode", next: "legend" });try {
			L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
		} catch (e) {
			L = { apply: A.length ? function (e, t) {
					q.apply(e, H.call(t));
				} : function (e, t) {
					var n = e.length,
					    r = 0;while (e[n++] = t[r++]);e.length = n - 1;
				} };
		}function oe(e, t, r, i) {
			var o,
			    s,
			    l,
			    c,
			    f,
			    h,
			    v,
			    m = t && t.ownerDocument,
			    T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
				if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
					if (9 === T) {
						if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
					} else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
				} else {
					if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
				}if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
					if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
						(c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) h[s] = "#" + c + " " + ve(h[s]);v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
					}if (v) try {
						return L.apply(r, m.querySelectorAll(v)), r;
					} catch (e) {} finally {
						c === b && t.removeAttribute("id");
					}
				}
			}return u(e.replace(B, "$1"), t, r, i);
		}function ae() {
			var e = [];function t(n, i) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
			}return t;
		}function se(e) {
			return e[b] = !0, e;
		}function ue(e) {
			var t = d.createElement("fieldset");try {
				return !!e(t);
			} catch (e) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null;
			}
		}function le(e, t) {
			var n = e.split("|"),
			    i = n.length;while (i--) r.attrHandle[n[i]] = t;
		}function ce(e, t) {
			var n = t && e,
			    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) if (n === t) return -1;return e ? 1 : -1;
		}function fe(e) {
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e;
			};
		}function pe(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
			};
		}function de(e) {
			return function (t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
			};
		}function he(e) {
			return se(function (t) {
				return t = +t, se(function (n, r) {
					var i,
					    o = e([], n.length, t),
					    a = o.length;while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
				});
			});
		}function ge(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e;
		}n = oe.support = {}, o = oe.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
		}, p = oe.setDocument = function (e) {
			var t,
			    i,
			    a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
				return e.className = "i", !e.getAttribute("className");
			}), n.getElementsByTagName = ue(function (e) {
				return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
			}), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
				return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
			}), n.getById ? (r.filter.ID = function (e) {
				var t = e.replace(Z, ee);return function (e) {
					return e.getAttribute("id") === t;
				};
			}, r.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && g) {
					var n = t.getElementById(e);return n ? [n] : [];
				}
			}) : (r.filter.ID = function (e) {
				var t = e.replace(Z, ee);return function (e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
				};
			}, r.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && g) {
					var n,
					    r,
					    i,
					    o = t.getElementById(e);if (o) {
						if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
					}return [];
				}
			}), r.find.TAG = n.getElementsByTagName ? function (e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
			} : function (e, t) {
				var n,
				    r = [],
				    i = 0,
				    o = t.getElementsByTagName(e);if ("*" === e) {
					while (n = o[i++]) 1 === n.nodeType && r.push(n);return r;
				}return o;
			}, r.find.CLASS = n.getElementsByClassName && function (e, t) {
				if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
			}, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
				h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
			}), ue(function (e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
			})), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
				n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
			}), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
				    r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
			} : function (e, t) {
				if (t) while (t = t.parentNode) if (t === e) return !0;return !1;
			}, D = t ? function (e, t) {
				if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
			} : function (e, t) {
				if (e === t) return f = !0, 0;var n,
				    r = 0,
				    i = e.parentNode,
				    o = t.parentNode,
				    a = [e],
				    s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) a.unshift(n);n = t;while (n = n.parentNode) s.unshift(n);while (a[r] === s[r]) r++;return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
			}, d) : d;
		}, oe.matches = function (e, t) {
			return oe(e, null, null, t);
		}, oe.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
				var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
			} catch (e) {}return oe(t, d, null, [e]).length > 0;
		}, oe.contains = function (e, t) {
			return (e.ownerDocument || e) !== d && p(e), x(e, t);
		}, oe.attr = function (e, t) {
			(e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
			    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
		}, oe.escape = function (e) {
			return (e + "").replace(te, ne);
		}, oe.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e);
		}, oe.uniqueSort = function (e) {
			var t,
			    r = [],
			    i = 0,
			    o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
				while (t = e[o++]) t === e[o] && (i = r.push(o));while (i--) e.splice(r[i], 1);
			}return c = null, e;
		}, i = oe.getText = function (e) {
			var t,
			    n = "",
			    r = 0,
			    o = e.nodeType;if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
				} else if (3 === o || 4 === o) return e.nodeValue;
			} else while (t = e[r++]) n += i(t);return n;
		}, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) {
					return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
				}, CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
				}, PSEUDO: function (e) {
					var t,
					    n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
				} }, filter: { TAG: function (e) {
					var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
						return !0;
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t;
					};
				}, CLASS: function (e) {
					var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
					});
				}, ATTR: function (e, t, n) {
					return function (r) {
						var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
					};
				}, CHILD: function (e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
					    a = "last" !== e.slice(-4),
					    s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
						return !!e.parentNode;
					} : function (t, n, u) {
						var l,
						    c,
						    f,
						    p,
						    d,
						    h,
						    g = o !== a ? "nextSibling" : "previousSibling",
						    y = t.parentNode,
						    v = s && t.nodeName.toLowerCase(),
						    m = !u && !s,
						    x = !1;if (y) {
							if (o) {
								while (g) {
									p = t;while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;h = g = "only" === e && !h && "nextSibling";
								}return !0;
							}if (h = [a ? y.firstChild : y.lastChild], a && m) {
								x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
									c[e] = [T, d, x];break;
								}
							} else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;return (x -= i) === r || x % r == 0 && x / r >= 0;
						}
					};
				}, PSEUDO: function (e, t) {
					var n,
					    i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
						var r,
						    o = i(e, t),
						    a = o.length;while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]);
					}) : function (e) {
						return i(e, 0, n);
					}) : i;
				} }, pseudos: { not: se(function (e) {
					var t = [],
					    n = [],
					    r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
						var o,
						    a = r(e, null, i, []),
						    s = e.length;while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
					}) : function (e, i, o) {
						return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
					};
				}), has: se(function (e) {
					return function (t) {
						return oe(e, t).length > 0;
					};
				}), contains: se(function (e) {
					return e = e.replace(Z, ee), function (t) {
						return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
					};
				}), lang: se(function (e) {
					return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
						var n;do {
							if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
						} while ((t = t.parentNode) && 1 === t.nodeType);return !1;
					};
				}), target: function (t) {
					var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
				}, root: function (e) {
					return e === h;
				}, focus: function (e) {
					return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
				}, enabled: de(!1), disabled: de(!0), checked: function (e) {
					var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
				}, selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
				}, empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;return !0;
				}, parent: function (e) {
					return !r.pseudos.empty(e);
				}, header: function (e) {
					return Y.test(e.nodeName);
				}, input: function (e) {
					return G.test(e.nodeName);
				}, button: function (e) {
					var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
				}, text: function (e) {
					var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
				}, first: he(function () {
					return [0];
				}), last: he(function (e, t) {
					return [t - 1];
				}), eq: he(function (e, t, n) {
					return [n < 0 ? n + t : n];
				}), even: he(function (e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);return e;
				}), odd: he(function (e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);return e;
				}), lt: he(function (e, t, n) {
					for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);return e;
				}), gt: he(function (e, t, n) {
					for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);return e;
				}) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
			var n,
			    i,
			    o,
			    a,
			    s,
			    u,
			    l,
			    c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
				n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));if (!n) break;
			}return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
		};function ve(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;return r;
		}function me(e, t, n) {
			var r = t.dir,
			    i = t.next,
			    o = i || r,
			    a = n && "parentNode" === o,
			    s = C++;return t.first ? function (t, n, i) {
				while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);return !1;
			} : function (t, n, u) {
				var l,
				    c,
				    f,
				    p = [T, s];if (u) {
					while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
				} else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
					if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
				}return !1;
			};
		}function xe(e) {
			return e.length > 1 ? function (t, n, r) {
				var i = e.length;while (i--) if (!e[i](t, n, r)) return !1;return !0;
			} : e[0];
		}function be(e, t, n) {
			for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);return n;
		}function we(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));return a;
		}function Te(e, t, n, r, i, o) {
			return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
				var l,
				    c,
				    f,
				    p = [],
				    d = [],
				    h = a.length,
				    g = o || be(t || "*", s.nodeType ? [s] : s, []),
				    y = !e || !o && t ? g : we(g, p, e, s, u),
				    v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
					l = we(v, d), r(l, [], s, u), c = l.length;while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
				}if (o) {
					if (i || e) {
						if (i) {
							l = [], c = v.length;while (c--) (f = v[c]) && l.push(y[c] = f);i(null, v = [], l, u);
						}c = v.length;while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
					}
				} else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
			});
		}function Ce(e) {
			for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
				return e === t;
			}, s, !0), f = me(function (e) {
				return O(t, e) > -1;
			}, s, !0), p = [function (e, n, r) {
				var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
			}]; u < o; u++) if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
				if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
					for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
				}p.push(n);
			}return xe(p);
		}function Ee(e, t) {
			var n = t.length > 0,
			    i = e.length > 0,
			    o = function (o, a, s, u, c) {
				var f,
				    h,
				    y,
				    v = 0,
				    m = "0",
				    x = o && [],
				    b = [],
				    w = l,
				    C = o || i && r.find.TAG("*", c),
				    E = T += null == w ? 1 : Math.random() || .1,
				    k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
					if (i && f) {
						h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) if (y(f, a || d, s)) {
							u.push(f);break;
						}c && (T = E);
					}n && ((f = !y && f) && v--, o && x.push(f));
				}if (v += m, n && m !== v) {
					h = 0;while (y = t[h++]) y(x, b, a, s);if (o) {
						if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));b = we(b);
					}L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
				}return c && (T = E, l = w), x;
			};return n ? se(o) : o;
		}return s = oe.compile = function (e, t) {
			var n,
			    r = [],
			    i = [],
			    o = S[e + " "];if (!o) {
				t || (t = a(e)), n = t.length;while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);(o = S(e, Ee(i, r))).selector = e;
			}return o;
		}, u = oe.select = function (e, t, n, i) {
			var o,
			    u,
			    l,
			    c,
			    f,
			    p = "function" == typeof e && e,
			    d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
				if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
					if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
				}o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
					if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
						if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
					}
				}
			}return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
		}, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
			return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
		}), ue(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
		}) || le("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
		}), n.attributes && ue(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
		}) || le("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
		}), ue(function (e) {
			return null == e.getAttribute("disabled");
		}) || le(P, function (e, t, n) {
			var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
		}), oe;
	}(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function (e, t, n) {
		var r = [],
		    i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
			if (i && w(e).is(n)) break;r.push(e);
		}return r;
	},
	    S = function (e, t) {
		for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
	},
	    D = w.expr.match.needsContext;function N(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	}var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
		return g(t) ? w.grep(e, function (e, r) {
			return !!t.call(e, r, e) !== n;
		}) : t.nodeType ? w.grep(e, function (e) {
			return e === t !== n;
		}) : "string" != typeof t ? w.grep(e, function (e) {
			return u.call(t, e) > -1 !== n;
		}) : w.filter(t, e, n);
	}w.filter = function (e, t, n) {
		var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
			return 1 === e.nodeType;
		}));
	}, w.fn.extend({ find: function (e) {
			var t,
			    n,
			    r = this.length,
			    i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
				for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
			}));for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);return r > 1 ? w.uniqueSort(n) : n;
		}, filter: function (e) {
			return this.pushStack(j(this, e || [], !1));
		}, not: function (e) {
			return this.pushStack(j(this, e || [], !0));
		}, is: function (e) {
			return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
		} });var q,
	    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
		var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
				if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);return this;
			}return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
		}return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
	}).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
	    O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function (e) {
			var t = w(e, this),
			    n = t.length;return this.filter(function () {
				for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
			});
		}, closest: function (e, t) {
			var n,
			    r = 0,
			    i = this.length,
			    o = [],
			    a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
				o.push(n);break;
			}return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
		}, index: function (e) {
			return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function (e, t) {
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
		}, addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
		} });function P(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);return e;
	}w.each({ parent: function (e) {
			var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
		}, parents: function (e) {
			return k(e, "parentNode");
		}, parentsUntil: function (e, t, n) {
			return k(e, "parentNode", n);
		}, next: function (e) {
			return P(e, "nextSibling");
		}, prev: function (e) {
			return P(e, "previousSibling");
		}, nextAll: function (e) {
			return k(e, "nextSibling");
		}, prevAll: function (e) {
			return k(e, "previousSibling");
		}, nextUntil: function (e, t, n) {
			return k(e, "nextSibling", n);
		}, prevUntil: function (e, t, n) {
			return k(e, "previousSibling", n);
		}, siblings: function (e) {
			return S((e.parentNode || {}).firstChild, e);
		}, children: function (e) {
			return S(e.firstChild);
		}, contents: function (e) {
			return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
		} }, function (e, t) {
		w.fn[e] = function (n, r) {
			var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
		};
	});var M = /[^\x20\t\r\n\f]+/g;function R(e) {
		var t = {};return w.each(e.match(M) || [], function (e, n) {
			t[n] = !0;
		}), t;
	}w.Callbacks = function (e) {
		e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
		    n,
		    r,
		    i,
		    o = [],
		    a = [],
		    s = -1,
		    u = function () {
			for (i = i || e.once, r = t = !0; a.length; s = -1) {
				n = a.shift();while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
			}e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
		},
		    l = { add: function () {
				return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
					w.each(n, function (n, r) {
						g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
					});
				}(arguments), n && !t && u()), this;
			}, remove: function () {
				return w.each(arguments, function (e, t) {
					var n;while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
				}), this;
			}, has: function (e) {
				return e ? w.inArray(e, o) > -1 : o.length > 0;
			}, empty: function () {
				return o && (o = []), this;
			}, disable: function () {
				return i = a = [], o = n = "", this;
			}, disabled: function () {
				return !o;
			}, lock: function () {
				return i = a = [], n || t || (o = n = ""), this;
			}, locked: function () {
				return !!i;
			}, fireWith: function (e, n) {
				return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
			}, fire: function () {
				return l.fireWith(this, arguments), this;
			}, fired: function () {
				return !!r;
			} };return l;
	};function I(e) {
		return e;
	}function W(e) {
		throw e;
	}function $(e, t, n, r) {
		var i;try {
			e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
		} catch (e) {
			n.apply(void 0, [e]);
		}
	}w.extend({ Deferred: function (t) {
			var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
			    r = "pending",
			    i = { state: function () {
					return r;
				}, always: function () {
					return o.done(arguments).fail(arguments), this;
				}, "catch": function (e) {
					return i.then(null, e);
				}, pipe: function () {
					var e = arguments;return w.Deferred(function (t) {
						w.each(n, function (n, r) {
							var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
								var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
							});
						}), e = null;
					}).promise();
				}, then: function (t, r, i) {
					var o = 0;function a(t, n, r, i) {
						return function () {
							var s = this,
							    u = arguments,
							    l = function () {
								var e, l;if (!(t < o)) {
									if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
								}
							},
							    c = i ? l : function () {
								try {
									l();
								} catch (e) {
									w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
								}
							};t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
						};
					}return w.Deferred(function (e) {
						n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
					}).promise();
				}, promise: function (e) {
					return null != e ? w.extend(e, i) : i;
				} },
			    o = {};return w.each(n, function (e, t) {
				var a = t[2],
				    s = t[5];i[t[1]] = a.add, s && a.add(function () {
					r = s;
				}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
					return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
				}, o[t[0] + "With"] = a.fireWith;
			}), i.promise(o), t && t.call(o, o), o;
		}, when: function (e) {
			var t = arguments.length,
			    n = t,
			    r = Array(n),
			    i = o.call(arguments),
			    a = w.Deferred(),
			    s = function (e) {
				return function (n) {
					r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
				};
			};if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) $(i[n], s(n), a.reject);return a.promise();
		} });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
		e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
	}, w.readyException = function (t) {
		e.setTimeout(function () {
			throw t;
		});
	};var F = w.Deferred();w.fn.ready = function (e) {
		return F.then(e)["catch"](function (e) {
			w.readyException(e);
		}), this;
	}, w.extend({ isReady: !1, readyWait: 1, ready: function (e) {
			(!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
		} }), w.ready.then = F.then;function _() {
		r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
	}"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function (e, t, n, r, i, o, a) {
		var s = 0,
		    u = e.length,
		    l = null == n;if ("object" === x(n)) {
			i = !0;for (s in n) z(e, t, s, n[s], !0, o, a);
		} else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
			return l.call(w(e), n);
		})), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
	},
	    X = /^-ms-/,
	    U = /-([a-z])/g;function V(e, t) {
		return t.toUpperCase();
	}function G(e) {
		return e.replace(X, "ms-").replace(U, V);
	}var Y = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
	};function Q() {
		this.expando = w.expando + Q.uid++;
	}Q.uid = 1, Q.prototype = { cache: function (e) {
			var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
		}, set: function (e, t, n) {
			var r,
			    i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) i[G(r)] = t[r];return i;
		}, get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
		}, access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
		}, remove: function (e, t) {
			var n,
			    r = e[this.expando];if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) delete r[t[n]];
				}(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
			}
		}, hasData: function (e) {
			var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
		} };var J = new Q(),
	    K = new Q(),
	    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    ee = /[A-Z]/g;function te(e) {
		return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
	}function ne(e, t, n) {
		var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
			try {
				n = te(n);
			} catch (e) {}K.set(e, t, n);
		} else n = void 0;return n;
	}w.extend({ hasData: function (e) {
			return K.hasData(e) || J.hasData(e);
		}, data: function (e, t, n) {
			return K.access(e, t, n);
		}, removeData: function (e, t) {
			K.remove(e, t);
		}, _data: function (e, t, n) {
			return J.access(e, t, n);
		}, _removeData: function (e, t) {
			J.remove(e, t);
		} }), w.fn.extend({ data: function (e, t) {
			var n,
			    r,
			    i,
			    o = this[0],
			    a = o && o.attributes;if (void 0 === e) {
				if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
					n = a.length;while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));J.set(o, "hasDataAttrs", !0);
				}return i;
			}return "object" == typeof e ? this.each(function () {
				K.set(this, e);
			}) : z(this, function (t) {
				var n;if (o && void 0 === t) {
					if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
				} else this.each(function () {
					K.set(this, e, t);
				});
			}, null, t, arguments.length > 1, null, !0);
		}, removeData: function (e) {
			return this.each(function () {
				K.remove(this, e);
			});
		} }), w.extend({ queue: function (e, t, n) {
			var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
		}, dequeue: function (e, t) {
			t = t || "fx";var n = w.queue(e, t),
			    r = n.length,
			    i = n.shift(),
			    o = w._queueHooks(e, t),
			    a = function () {
				w.dequeue(e, t);
			};"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
		}, _queueHooks: function (e, t) {
			var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
					J.remove(e, [t + "queue", n]);
				}) });
		} }), w.fn.extend({ queue: function (e, t) {
			var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
				var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
			});
		}, dequeue: function (e) {
			return this.each(function () {
				w.dequeue(this, e);
			});
		}, clearQueue: function (e) {
			return this.queue(e || "fx", []);
		}, promise: function (e, t) {
			var n,
			    r = 1,
			    i = w.Deferred(),
			    o = this,
			    a = this.length,
			    s = function () {
				--r || i.resolveWith(o, [o]);
			};"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));return s(), i.promise(t);
		} });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
	    oe = ["Top", "Right", "Bottom", "Left"],
	    ae = function (e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
	},
	    se = function (e, t, n, r) {
		var i,
		    o,
		    a = {};for (o in t) a[o] = e.style[o], e.style[o] = t[o];i = n.apply(e, r || []);for (o in t) e.style[o] = a[o];return i;
	};function ue(e, t, n, r) {
		var i,
		    o,
		    a = 20,
		    s = r ? function () {
			return r.cur();
		} : function () {
			return w.css(e, t, "");
		},
		    u = s(),
		    l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
		    c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;c *= 2, w.style(e, t, c + l), n = n || [];
		}return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
	}var le = {};function ce(e) {
		var t,
		    n = e.ownerDocument,
		    r = e.nodeName,
		    i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
	}function fe(e, t) {
		for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);return e;
	}w.fn.extend({ show: function () {
			return fe(this, !0);
		}, hide: function () {
			return fe(this);
		}, toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				ae(this) ? w(this).show() : w(this).hide();
			});
		} });var pe = /^(?:checkbox|radio)$/i,
	    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
	    he = /^$|^module$|\/(?:java|ecma)script/i,
	    ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
		var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
	}function ve(e, t) {
		for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
	}var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) a = a.lastChild;w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
		} else p.push(t.createTextNode(o));f.textContent = "", d = 0;while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
			c = 0;while (o = a[c++]) he.test(o.type || "") && n.push(o);
		}return f;
	}!function () {
		var e = r.createDocumentFragment().appendChild(r.createElement("div")),
		    t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
	}();var be = r.documentElement,
	    we = /^key/,
	    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
		return !0;
	}function ke() {
		return !1;
	}function Se() {
		try {
			return r.activeElement;
		} catch (e) {}
	}function De(e, t, n, r, i, o) {
		var a, s;if ("object" == typeof t) {
			"string" != typeof n && (r = r || n, n = void 0);for (s in t) De(e, s, n, r, t[s], o);return e;
		}if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function (e) {
			return w().off(e), a.apply(this, arguments);
		}).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
			w.event.add(this, t, i, r, n);
		});
	}w.event = { global: {}, add: function (e, t, n, r, i) {
			var o,
			    a,
			    s,
			    u,
			    l,
			    c,
			    f,
			    p,
			    d,
			    h,
			    g,
			    y = J.get(e);if (y) {
				n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
					return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
				}), l = (t = (t || "").match(M) || [""]).length;while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
			}
		}, remove: function (e, t, n, r, i) {
			var o,
			    a,
			    s,
			    u,
			    l,
			    c,
			    f,
			    p,
			    d,
			    h,
			    g,
			    y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
				l = (t = (t || "").match(M) || [""]).length;while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
					f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
				} else for (d in u) w.event.remove(e, d + t[l], n, r, !0);w.isEmptyObject(u) && J.remove(e, "handle events");
			}
		}, dispatch: function (e) {
			var t = w.event.fix(e),
			    n,
			    r,
			    i,
			    o,
			    a,
			    s,
			    u = new Array(arguments.length),
			    l = (J.get(this, "events") || {})[t.type] || [],
			    c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
					t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
				}return c.postDispatch && c.postDispatch.call(this, t), t.result;
			}
		}, handlers: function (e, t) {
			var n,
			    r,
			    i,
			    o,
			    a,
			    s = [],
			    u = t.delegateCount,
			    l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
				for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);o.length && s.push({ elem: l, handlers: o });
			}return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
		}, addProp: function (e, t) {
			Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
					if (this.originalEvent) return t(this.originalEvent);
				} : function () {
					if (this.originalEvent) return this.originalEvent[e];
				}, set: function (t) {
					Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
				} });
		}, fix: function (e) {
			return e[w.expando] ? e : new w.Event(e);
		}, special: { load: { noBubble: !0 }, focus: { trigger: function () {
					if (this !== Se() && this.focus) return this.focus(), !1;
				}, delegateType: "focusin" }, blur: { trigger: function () {
					if (this === Se() && this.blur) return this.blur(), !1;
				}, delegateType: "focusout" }, click: { trigger: function () {
					if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
				}, _default: function (e) {
					return N(e.target, "a");
				} }, beforeunload: { postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
				} } } }, w.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n);
	}, w.Event = function (e, t) {
		if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
	}, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function () {
			var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
		}, stopPropagation: function () {
			var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
		}, stopImmediatePropagation: function () {
			var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
		} }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) {
			var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
		} }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
		w.event.special[e] = { delegateType: t, bindType: t, handle: function (e) {
				var n,
				    r = this,
				    i = e.relatedTarget,
				    o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
			} };
	}), w.fn.extend({ on: function (e, t, n, r) {
			return De(this, e, t, n, r);
		}, one: function (e, t, n, r) {
			return De(this, e, t, n, r, 1);
		}, off: function (e, t, n) {
			var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);return this;
			}return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
				w.event.remove(this, e, n, t);
			});
		} });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	    Ae = /<script|<style|<link/i,
	    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
		return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
	}function He(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
	}function Oe(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
	}function Pe(e, t) {
		var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
			if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
				delete a.handle, a.events = {};for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
			}K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
		}
	}function Me(e, t) {
		var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
	}function Re(e, t, n, r) {
		t = a.apply([], t);var i,
		    o,
		    s,
		    u,
		    l,
		    c,
		    f = 0,
		    p = e.length,
		    d = p - 1,
		    y = t[0],
		    v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
			var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
		});if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
			for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
		}return e;
	}function Ie(e, t, n) {
		for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));return e;
	}w.extend({ htmlPrefilter: function (e) {
			return e.replace(Ne, "<$1></$2>");
		}, clone: function (e, t, n) {
			var r,
			    i,
			    o,
			    a,
			    s = e.cloneNode(!0),
			    u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
		}, cleanData: function (e) {
			for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
				if (t = n[J.expando]) {
					if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);n[J.expando] = void 0;
				}n[K.expando] && (n[K.expando] = void 0);
			}
		} }), w.fn.extend({ detach: function (e) {
			return Ie(this, e, !0);
		}, remove: function (e) {
			return Ie(this, e);
		}, text: function (e) {
			return z(this, function (e) {
				return void 0 === e ? w.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
				});
			}, null, e, arguments.length);
		}, append: function () {
			return Re(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
			});
		}, prepend: function () {
			return Re(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Le(this, e);t.insertBefore(e, t.firstChild);
				}
			});
		}, before: function () {
			return Re(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this);
			});
		}, after: function () {
			return Re(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
			});
		}, empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");return this;
		}, clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return w.clone(this, e, t);
			});
		}, html: function (e) {
			return z(this, function (e) {
				var t = this[0] || {},
				    n = 0,
				    r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = w.htmlPrefilter(e);try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);t = 0;
					} catch (e) {}
				}t && this.empty().append(e);
			}, null, e, arguments.length);
		}, replaceWith: function () {
			var e = [];return Re(this, arguments, function (t) {
				var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
			}, e);
		} }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
		w.fn[e] = function (e) {
			for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());return this.pushStack(r);
		};
	});var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
	    $e = function (t) {
		var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
	},
	    Be = new RegExp(oe.join("|"), "i");!function () {
		function t() {
			if (c) {
				l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
			}
		}function n(e) {
			return Math.round(parseFloat(e));
		}var i,
		    o,
		    a,
		    s,
		    u,
		    l = r.createElement("div"),
		    c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function () {
				return t(), o;
			}, pixelBoxStyles: function () {
				return t(), s;
			}, pixelPosition: function () {
				return t(), i;
			}, reliableMarginLeft: function () {
				return t(), u;
			}, scrollboxSize: function () {
				return t(), a;
			} }));
	}();function Fe(e, t, n) {
		var r,
		    i,
		    o,
		    a,
		    s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
	}function _e(e, t) {
		return { get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
			} };
	}var ze = /^(none|table(?!-c[ea]).+)/,
	    Xe = /^--/,
	    Ue = { position: "absolute", visibility: "hidden", display: "block" },
	    Ve = { letterSpacing: "0", fontWeight: "400" },
	    Ge = ["Webkit", "Moz", "ms"],
	    Ye = r.createElement("div").style;function Qe(e) {
		if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
		    n = Ge.length;while (n--) if ((e = Ge[n] + t) in Ye) return e;
	}function Je(e) {
		var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
	}function Ke(e, t, n) {
		var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
	}function Ze(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
		    s = 0,
		    u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
	}function et(e, t, n) {
		var r = $e(e),
		    i = Fe(e, t, r),
		    o = "border-box" === w.css(e, "boxSizing", !1, r),
		    a = o;if (We.test(i)) {
			if (!n) return i;i = "auto";
		}return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
	}w.extend({ cssHooks: { opacity: { get: function (e, t) {
					if (t) {
						var n = Fe(e, "opacity");return "" === n ? "1" : n;
					}
				} } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i,
				    o,
				    a,
				    s = G(t),
				    u = Xe.test(t),
				    l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
			}
		}, css: function (e, t, n, r) {
			var i,
			    o,
			    a,
			    s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
		} }), w.each(["height", "width"], function (e, t) {
		w.cssHooks[t] = { get: function (e, n, r) {
				if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
					return et(e, t, r);
				});
			}, set: function (e, n, r) {
				var i,
				    o = $e(e),
				    a = "border-box" === w.css(e, "boxSizing", !1, o),
				    s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
			} };
	}), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
			return e.getBoundingClientRect().left;
		})) + "px";
	}), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
		w.cssHooks[e + t] = { expand: function (n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];return i;
			} }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
	}), w.fn.extend({ css: function (e, t) {
			return z(this, function (e, t, n) {
				var r,
				    i,
				    o = {},
				    a = 0;if (Array.isArray(t)) {
					for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);return o;
				}return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
			}, e, t, arguments.length > 1);
		} });function tt(e, t, n, r, i) {
		return new tt.prototype.init(e, t, n, r, i);
	}w.Tween = tt, tt.prototype = { constructor: tt, init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
		}, cur: function () {
			var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
		}, run: function (e) {
			var t,
			    n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
		} }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function (e) {
				var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
			}, set: function (e) {
				w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
			} } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
		} }, w.easing = { linear: function (e) {
			return e;
		}, swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2;
		}, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
	    rt,
	    it = /^(?:toggle|show|hide)$/,
	    ot = /queueHooks$/;function at() {
		rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
	}function st() {
		return e.setTimeout(function () {
			nt = void 0;
		}), nt = Date.now();
	}function ut(e, t) {
		var n,
		    r = 0,
		    i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;return t && (i.opacity = i.width = e), i;
	}function lt(e, t, n) {
		for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
	}function ct(e, t, n) {
		var r,
		    i,
		    o,
		    a,
		    s,
		    u,
		    l,
		    c,
		    f = "width" in t || "height" in t,
		    p = this,
		    d = {},
		    h = e.style,
		    g = e.nodeType && ae(e),
		    y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
			a.unqueued || s();
		}), a.unqueued++, p.always(function () {
			p.always(function () {
				a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
			});
		}));for (r in t) if (i = t[r], it.test(i)) {
			if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
				if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
			}d[r] = y && y[r] || w.style(e, r);
		}if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
			f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
				h.display = l;
			}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
			})), u = !1;for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
				g || fe([e]), J.remove(e, "fxshow");for (r in d) w.style(e, r, d[r]);
			})), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
		}
	}function ft(e, t) {
		var n, r, i, o, a;for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
			o = a.expand(o), delete e[r];for (n in o) n in e || (e[n] = o[n], t[n] = i);
		} else t[r] = i;
	}function pt(e, t, n) {
		var r,
		    i,
		    o = 0,
		    a = pt.prefilters.length,
		    s = w.Deferred().always(function () {
			delete u.elem;
		}),
		    u = function () {
			if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
		},
		    l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function (t, n) {
				var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
			}, stop: function (t) {
				var n = 0,
				    r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) l.tweens[n].run(1);return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
			} }),
		    c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
	}w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
				var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
			}] }, tweener: function (e, t) {
			g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
		}, prefilters: [ct], prefilter: function (e, t) {
			t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
		} }), w.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
		}, r;
	}, w.fn.extend({ fadeTo: function (e, t, n, r) {
			return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
		}, animate: function (e, t, n, r) {
			var i = w.isEmptyObject(e),
			    o = w.speed(t, n, r),
			    a = function () {
				var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
			};return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
		}, stop: function (e, t, n) {
			var r = function (e) {
				var t = e.stop;delete e.stop, t(n);
			};return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
				var t = !0,
				    i = null != e && e + "queueHooks",
				    o = w.timers,
				    a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));!t && n || w.dequeue(this, e);
			});
		}, finish: function (e) {
			return !1 !== e && (e = e || "fx"), this.each(function () {
				var t,
				    n = J.get(this),
				    r = n[e + "queue"],
				    i = n[e + "queueHooks"],
				    o = w.timers,
				    a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);delete n.finish;
			});
		} }), w.each(["toggle", "show", "hide"], function (e, t) {
		var n = w.fn[t];w.fn[t] = function (e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
		};
	}), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
		w.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r);
		};
	}), w.timers = [], w.fx.tick = function () {
		var e,
		    t = 0,
		    n = w.timers;for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);n.length || w.fx.stop(), nt = void 0;
	}, w.fx.timer = function (e) {
		w.timers.push(e), w.fx.start();
	}, w.fx.interval = 13, w.fx.start = function () {
		rt || (rt = !0, at());
	}, w.fx.stop = function () {
		rt = null;
	}, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
		return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
			var i = e.setTimeout(n, t);r.stop = function () {
				e.clearTimeout(i);
			};
		});
	}, function () {
		var e = r.createElement("input"),
		    t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
	}();var dt,
	    ht = w.expr.attrHandle;w.fn.extend({ attr: function (e, t) {
			return z(this, w.attr, e, t, arguments.length > 1);
		}, removeAttr: function (e) {
			return this.each(function () {
				w.removeAttr(this, e);
			});
		} }), w.extend({ attr: function (e, t, n) {
			var r,
			    i,
			    o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
		}, attrHooks: { type: { set: function (e, t) {
					if (!h.radioValue && "radio" === t && N(e, "input")) {
						var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
					}
				} } }, removeAttr: function (e, t) {
			var n,
			    r = 0,
			    i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
		} }), dt = { set: function (e, t, n) {
			return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
		} }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
			var i,
			    o,
			    a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
		};
	});var gt = /^(?:input|select|textarea|button)$/i,
	    yt = /^(?:a|area)$/i;w.fn.extend({ prop: function (e, t) {
			return z(this, w.prop, e, t, arguments.length > 1);
		}, removeProp: function (e) {
			return this.each(function () {
				delete this[w.propFix[e] || e];
			});
		} }), w.extend({ prop: function (e, t, n) {
			var r,
			    i,
			    o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
		}, propHooks: { tabIndex: { get: function (e) {
					var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
				} } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function (e) {
			var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
		}, set: function (e) {
			var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
		} }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		w.propFix[this.toLowerCase()] = this;
	});function vt(e) {
		return (e.match(M) || []).join(" ");
	}function mt(e) {
		return e.getAttribute && e.getAttribute("class") || "";
	}function xt(e) {
		return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
	}w.fn.extend({ addClass: function (e) {
			var t,
			    n,
			    r,
			    i,
			    o,
			    a,
			    s,
			    u = 0;if (g(e)) return this.each(function (t) {
				w(this).addClass(e.call(this, t, mt(this)));
			});if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
				a = 0;while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");i !== (s = vt(r)) && n.setAttribute("class", s);
			}return this;
		}, removeClass: function (e) {
			var t,
			    n,
			    r,
			    i,
			    o,
			    a,
			    s,
			    u = 0;if (g(e)) return this.each(function (t) {
				w(this).removeClass(e.call(this, t, mt(this)));
			});if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
				a = 0;while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");i !== (s = vt(r)) && n.setAttribute("class", s);
			}return this;
		}, toggleClass: function (e, t) {
			var n = typeof e,
			    r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
				w(this).toggleClass(e.call(this, n, mt(this), t), t);
			}) : this.each(function () {
				var t, i, o, a;if (r) {
					i = 0, o = w(this), a = xt(e);while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
				} else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
			});
		}, hasClass: function (e) {
			var t,
			    n,
			    r = 0;t = " " + e + " ";while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;return !1;
		} });var bt = /\r/g;w.fn.extend({ val: function (e) {
			var t,
			    n,
			    r,
			    i = this[0];{
				if (arguments.length) return r = g(e), this.each(function (n) {
					var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
						return null == e ? "" : e + "";
					})), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
				});if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
			}
		} }), w.extend({ valHooks: { option: { get: function (e) {
					var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
				} }, select: { get: function (e) {
					var t,
					    n,
					    r,
					    i = e.options,
					    o = e.selectedIndex,
					    a = "select-one" === e.type,
					    s = a ? null : [],
					    u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
						if (t = w(n).val(), a) return t;s.push(t);
					}return s;
				}, set: function (e, t) {
					var n,
					    r,
					    i = e.options,
					    o = w.makeArray(t),
					    a = i.length;while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);return n || (e.selectedIndex = -1), o;
				} } } }), w.each(["radio", "checkbox"], function () {
		w.valHooks[this] = { set: function (e, t) {
				if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
			} }, h.checkOn || (w.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value;
		});
	}), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
	    Tt = function (e) {
		e.stopPropagation();
	};w.extend(w.event, { trigger: function (t, n, i, o) {
			var a,
			    s,
			    u,
			    l,
			    c,
			    p,
			    d,
			    h,
			    v = [i || r],
			    m = f.call(t, "type") ? t.type : t,
			    x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
				if (!o && !d.noBubble && !y(i)) {
					for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
				}a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
			}
		}, simulate: function (e, t, n) {
			var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
		} }), w.fn.extend({ trigger: function (e, t) {
			return this.each(function () {
				w.event.trigger(e, t, this);
			});
		}, triggerHandler: function (e, t) {
			var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
		} }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
		var n = function (e) {
			w.event.simulate(t, e.target, w.event.fix(e));
		};w.event.special[t] = { setup: function () {
				var r = this.ownerDocument || this,
				    i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
			}, teardown: function () {
				var r = this.ownerDocument || this,
				    i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
			} };
	});var Ct = e.location,
	    Et = Date.now(),
	    kt = /\?/;w.parseXML = function (t) {
		var n;if (!t || "string" != typeof t) return null;try {
			n = new e.DOMParser().parseFromString(t, "text/xml");
		} catch (e) {
			n = void 0;
		}return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
	};var St = /\[\]$/,
	    Dt = /\r?\n/g,
	    Nt = /^(?:submit|button|image|reset|file)$/i,
	    At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
		var i;if (Array.isArray(t)) w.each(t, function (t, i) {
			n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
		});else if (n || "object" !== x(t)) r(e, t);else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
	}w.param = function (e, t) {
		var n,
		    r = [],
		    i = function (e, t) {
			var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
		};if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
			i(this.name, this.value);
		});else for (n in e) jt(n, e[n], t, i);return r.join("&");
	}, w.fn.extend({ serialize: function () {
			return w.param(this.serializeArray());
		}, serializeArray: function () {
			return this.map(function () {
				var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
			}).filter(function () {
				var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
			}).map(function (e, t) {
				var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
					return { name: t.name, value: e.replace(Dt, "\r\n") };
				}) : { name: t.name, value: n.replace(Dt, "\r\n") };
			}).get();
		} });var qt = /%20/g,
	    Lt = /#.*$/,
	    Ht = /([?&])_=[^&]*/,
	    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    Mt = /^(?:GET|HEAD)$/,
	    Rt = /^\/\//,
	    It = {},
	    Wt = {},
	    $t = "*/".concat("*"),
	    Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");var r,
			    i = 0,
			    o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
		};
	}function _t(e, t, n, r) {
		var i = {},
		    o = e === Wt;function a(s) {
			var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
				var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
			}), u;
		}return a(t.dataTypes[0]) || !i["*"] && a("*");
	}function zt(e, t) {
		var n,
		    r,
		    i = w.ajaxSettings.flatOptions || {};for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);return r && w.extend(!0, e, r), e;
	}function Xt(e, t, n) {
		var r,
		    i,
		    o,
		    a,
		    s = e.contents,
		    u = e.dataTypes;while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));if (r) for (i in s) if (s[i] && s[i].test(r)) {
			u.unshift(i);break;
		}if (u[0] in n) o = u[0];else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;break;
				}a || (a = i);
			}o = o || a;
		}if (o) return o !== u[0] && u.unshift(o), n[o];
	}function Ut(e, t, n, r) {
		var i,
		    o,
		    a,
		    s,
		    u,
		    l = {},
		    c = e.dataTypes.slice();if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];o = c.shift();while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
			if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
				!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
			}if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
				t = a(t);
			} catch (e) {
				return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
			}
		}return { state: "success", data: t };
	}w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) {
			return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
		}, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function (t, n) {
			"object" == typeof t && (n = t, t = void 0), n = n || {};var i,
			    o,
			    a,
			    s,
			    u,
			    l,
			    c,
			    f,
			    p,
			    d,
			    h = w.ajaxSetup({}, n),
			    g = h.context || h,
			    y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
			    v = w.Deferred(),
			    m = w.Callbacks("once memory"),
			    x = h.statusCode || {},
			    b = {},
			    T = {},
			    C = "canceled",
			    E = { readyState: 0, getResponseHeader: function (e) {
					var t;if (c) {
						if (!s) {
							s = {};while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2];
						}t = s[e.toLowerCase()];
					}return null == t ? null : t;
				}, getAllResponseHeaders: function () {
					return c ? a : null;
				}, setRequestHeader: function (e, t) {
					return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
				}, overrideMimeType: function (e) {
					return null == c && (h.mimeType = e), this;
				}, statusCode: function (e) {
					var t;if (e) if (c) E.always(e[E.status]);else for (t in e) x[t] = [x[t], e[t]];return this;
				}, abort: function (e) {
					var t = e || C;return i && i.abort(t), k(0, t), this;
				} };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
				l = r.createElement("a");try {
					l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
				} catch (e) {
					h.crossDomain = !0;
				}
			}if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) E.setRequestHeader(p, h.headers[p]);if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
				if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
					E.abort("timeout");
				}, h.timeout));try {
					c = !1, i.send(b, k);
				} catch (e) {
					if (c) throw e;k(-1, e);
				}
			} else k(-1, "No Transport");function k(t, n, r, s) {
				var l,
				    p,
				    d,
				    b,
				    T,
				    C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
			}return E;
		}, getJSON: function (e, t, n) {
			return w.get(e, t, n, "json");
		}, getScript: function (e, t) {
			return w.get(e, void 0, t, "script");
		} }), w.each(["get", "post"], function (e, t) {
		w[t] = function (e, n, r, i) {
			return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
		};
	}), w._evalUrl = function (e) {
		return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
	}, w.fn.extend({ wrapAll: function (e) {
			var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				var e = this;while (e.firstElementChild) e = e.firstElementChild;return e;
			}).append(this)), this;
		}, wrapInner: function (e) {
			return g(e) ? this.each(function (t) {
				w(this).wrapInner(e.call(this, t));
			}) : this.each(function () {
				var t = w(this),
				    n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
			});
		}, wrap: function (e) {
			var t = g(e);return this.each(function (n) {
				w(this).wrapAll(t ? e.call(this, n) : e);
			});
		}, unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				w(this).replaceWith(this.childNodes);
			}), this;
		} }), w.expr.pseudos.hidden = function (e) {
		return !w.expr.pseudos.visible(e);
	}, w.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
	}, w.ajaxSettings.xhr = function () {
		try {
			return new e.XMLHttpRequest();
		} catch (e) {}
	};var Vt = { 0: 200, 1223: 204 },
	    Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
		var n, r;if (h.cors || Gt && !t.crossDomain) return { send: function (i, o) {
				var a,
				    s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) s.setRequestHeader(a, i[a]);n = function (e) {
					return function () {
						n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
					};
				}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
					4 === s.readyState && e.setTimeout(function () {
						n && r();
					});
				}, n = n("abort");try {
					s.send(t.hasContent && t.data || null);
				} catch (e) {
					if (n) throw e;
				}
			}, abort: function () {
				n && n();
			} };
	}), w.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1);
	}), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) {
				return w.globalEval(e), e;
			} } }), w.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
	}), w.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t, n;return { send: function (i, o) {
					t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) {
						t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
					}), r.head.appendChild(t[0]);
				}, abort: function () {
					n && n();
				} };
		}
	});var Yt = [],
	    Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
			var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
		} }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
		var i,
		    o,
		    a,
		    s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
			return a || w.error(i + " was not called"), a[0];
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
			a = arguments;
		}, r.always(function () {
			void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
		}), "script";
	}), h.createHTMLDocument = function () {
		var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
	}(), w.parseHTML = function (e, t, n) {
		if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
	}, w.fn.load = function (e, t, n) {
		var r,
		    i,
		    o,
		    a = this,
		    s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
			o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
		}).always(n && function (e, t) {
			a.each(function () {
				n.apply(this, o || [e.responseText, t, e]);
			});
		}), this;
	}, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		w.fn[t] = function (e) {
			return this.on(t, e);
		};
	}), w.expr.pseudos.animated = function (e) {
		return w.grep(w.timers, function (t) {
			return e === t.elem;
		}).length;
	}, w.offset = { setOffset: function (e, t, n) {
			var r,
			    i,
			    o,
			    a,
			    s,
			    u,
			    l,
			    c = w.css(e, "position"),
			    f = w(e),
			    p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
		} }, w.fn.extend({ offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
				w.offset.setOffset(this, e, t);
			});var t,
			    n,
			    r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
		}, position: function () {
			if (this[0]) {
				var e,
				    t,
				    n,
				    r = this[0],
				    i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
				}return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
			}
		}, offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent;while (e && "static" === w.css(e, "position")) e = e.offsetParent;return e || be;
			});
		} }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
		var n = "pageYOffset" === t;w.fn[e] = function (r) {
			return z(this, function (e, r, i) {
				var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
			}, e, r, arguments.length);
		};
	}), w.each(["top", "left"], function (e, t) {
		w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
			if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
		});
	}), w.each({ Height: "height", Width: "width" }, function (e, t) {
		w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
			w.fn[r] = function (i, o) {
				var a = arguments.length && (n || "boolean" != typeof i),
				    s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
					var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
				}, t, a ? i : void 0, a);
			};
		});
	}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
		w.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
		};
	}), w.fn.extend({ hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e);
		} }), w.fn.extend({ bind: function (e, t, n) {
			return this.on(e, null, t, n);
		}, unbind: function (e, t) {
			return this.off(e, null, t);
		}, delegate: function (e, t, n, r) {
			return this.on(t, e, n, r);
		}, undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
		} }), w.proxy = function (e, t) {
		var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
			return e.apply(t || this, r.concat(o.call(arguments)));
		}, i.guid = e.guid = e.guid || w.guid++, i;
	}, w.holdReady = function (e) {
		e ? w.readyWait++ : w.ready(!0);
	}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
		var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
	}, "function" == typeof define && define.amd && define("jquery", [], function () {
		return w;
	});var Jt = e.jQuery,
	    Kt = e.$;return w.noConflict = function (t) {
		return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
	}, t || (e.jQuery = e.$ = w), w;
});

!function (t) {
	function e(r) {
		if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
	}var n = {};e.m = t, e.c = n, e.d = function (t, n, r) {
		e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
	}, e.n = function (t) {
		var n = t && t.__esModule ? function () {
			return t.default;
		} : function () {
			return t;
		};return e.d(n, "a", n), n;
	}, e.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e);
	}, e.p = "", e(e.s = 193);
}([function (t, e) {
	var n = Array.isArray;t.exports = n;
}, function (t, e, n) {
	var r = n(43),
	    o = "object" == typeof self && self && self.Object === Object && self,
	    i = r || o || Function("return this")();t.exports = i;
}, function (t, e) {
	function n(t) {
		var e = typeof t;return null != t && ("object" == e || "function" == e);
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e) {
		var n = i(t, e);return o(n) ? n : void 0;
	}var o = n(105),
	    i = n(108);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return a(t) ? o(t) : i(t);
	}var o = n(42),
	    i = n(90),
	    a = n(11);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return null == t ? void 0 === t ? u : s : c && c in Object(t) ? i(t) : a(t);
	}var o = n(6),
	    i = n(84),
	    a = n(85),
	    s = "[object Null]",
	    u = "[object Undefined]",
	    c = o ? o.toStringTag : void 0;t.exports = r;
}, function (t, e, n) {
	var r = n(1),
	    o = r.Symbol;t.exports = o;
}, function (t, e) {
	function n(t) {
		return null != t && "object" == typeof t;
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e, n, r) {
		var a = !n;n || (n = {});for (var s = -1, u = e.length; ++s < u;) {
			var c = e[s],
			    l = r ? r(n[c], t[c], c, n, t) : void 0;void 0 === l && (l = t[c]), a ? i(n, c, l) : o(n, c, l);
		}return n;
	}var o = n(62),
	    i = n(63);t.exports = r;
}, function (t, e) {
	function n(t, e) {
		return t === e || t !== t && e !== e;
	}t.exports = n;
}, function (t, e, n) {
	"use strict";
	function r() {
		var t,
		    e,
		    n = new d(function (n, r) {
			t = n, e = r;
		});return { resolve: t, reject: e, promise: n };
	}function o(t) {
		var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return null === e ? null : [e[1], e[2], e[3]].map(function (t) {
			return parseInt(t, 16);
		});
	}function i(t, e, n) {
		return "#" + ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1, 7);
	}function a(t, e, n) {
		t /= 255, e /= 255, n /= 255;var r,
		    o,
		    i = Math.max(t, e, n),
		    a = Math.min(t, e, n),
		    s = (i + a) / 2;if (i === a) r = o = 0;else {
			var u = i - a;switch (o = s > .5 ? u / (2 - i - a) : u / (i + a), i) {case t:
					r = (e - n) / u + (e < n ? 6 : 0);break;case e:
					r = (n - t) / u + 2;break;case n:
					r = (t - e) / u + 4;}r /= 6;
		}return [r, o, s];
	}function s(t, e, n) {
		function r(t, e, n) {
			return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
		}var o, i, a;if (0 === e) o = i = a = n;else {
			var s = n < .5 ? n * (1 + e) : n + e - n * e,
			    u = 2 * n - s;o = r(u, s, t + 1 / 3), i = r(u, s, t), a = r(u, s, t - 1 / 3);
		}return [255 * o, 255 * i, 255 * a];
	}function u(t, e, n) {
		return t /= 255, e /= 255, n /= 255, t = t > .04045 ? Math.pow((t + .005) / 1.055, 2.4) : t / 12.92, e = e > .04045 ? Math.pow((e + .005) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .005) / 1.055, 2.4) : n / 12.92, t *= 100, e *= 100, n *= 100, [.4124 * t + .3576 * e + .1805 * n, .2126 * t + .7152 * e + .0722 * n, .0193 * t + .1192 * e + .9505 * n];
	}function c(t, e, n) {
		return t /= 95.047, e /= 100, n /= 108.883, t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, e = e > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * e - 16, 500 * (t - e), 200 * (e - n)];
	}function l(t, e, n) {
		var r = u(t, e, n);return c(r[0], r[1], r[2]);
	}function f(t, e) {
		var n = t[0],
		    r = t[1],
		    o = t[2],
		    i = e[0],
		    a = e[1],
		    s = e[2],
		    u = n - i,
		    c = r - a,
		    l = o - s,
		    f = Math.sqrt(r * r + o * o),
		    h = Math.sqrt(a * a + s * s),
		    p = i - n,
		    _ = h - f,
		    v = Math.sqrt(u * u + c * c + l * l),
		    d = Math.sqrt(v) > Math.sqrt(Math.abs(p)) + Math.sqrt(Math.abs(_)) ? Math.sqrt(v * v - p * p - _ * _) : 0,
		    y = 1 + .045 * f,
		    m = 1 + .015 * f;return p /= 1, _ /= 1 * y, d /= 1 * m, Math.sqrt(p * p + _ * _ + d * d);
	}function h(t, e) {
		return f(l.apply(void 0, t), l.apply(void 0, e));
	}function p(t, e) {
		return h(o(t), o(e));
	}function _(t) {
		return t < e.DELTAE94_DIFF_STATUS.NA ? "N/A" : t <= e.DELTAE94_DIFF_STATUS.PERFECT ? "Perfect" : t <= e.DELTAE94_DIFF_STATUS.CLOSE ? "Close" : t <= e.DELTAE94_DIFF_STATUS.GOOD ? "Good" : t < e.DELTAE94_DIFF_STATUS.SIMILAR ? "Similar" : "Wrong";
	}function v(t, n, r) {
		return (t << 2 * e.SIGBITS) + (n << e.SIGBITS) + r;
	}Object.defineProperty(e, "__esModule", { value: !0 });var d = n(13);e.DELTAE94_DIFF_STATUS = { NA: 0, PERFECT: 1, CLOSE: 2, GOOD: 10, SIMILAR: 50 }, e.SIGBITS = 5, e.RSHIFT = 8 - e.SIGBITS, e.defer = r, e.hexToRgb = o, e.rgbToHex = i, e.rgbToHsl = a, e.hslToRgb = s, e.rgbToXyz = u, e.xyzToCIELab = c, e.rgbToCIELab = l, e.deltaE94 = f, e.rgbDiff = h, e.hexDiff = p, e.getColorDiffStatus = _, e.getColorIndex = v;
}, function (t, e, n) {
	function r(t) {
		return null != t && i(t.length) && !o(t);
	}var o = n(46),
	    i = n(24);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		if ("string" == typeof t || o(t)) return t;var e = t + "";return "0" == e && 1 / t == -i ? "-0" : e;
	}var o = n(21),
	    i = 1 / 0;t.exports = r;
}, function (t, e, n) {
	(function (e, n, r) {
		/* @preserve
  * The MIT License (MIT)
  * 
  * Copyright (c) 2013-2017 Petka Antonov
  * 
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  * 
  * The above copyright notice and this permission notice shall be included in
  * all copies or substantial portions of the Software.
  * 
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  * THE SOFTWARE.
  * 
  */
		!function (e) {
			t.exports = e();
		}(function () {
			var t, o, i;return function t(e, n, r) {
				function o(a, s) {
					if (!n[a]) {
						if (!e[a]) {
							var u = "function" == typeof _dereq_ && _dereq_;if (!s && u) return u(a, !0);if (i) return i(a, !0);var c = new Error("Cannot find module '" + a + "'");throw c.code = "MODULE_NOT_FOUND", c;
						}var l = n[a] = { exports: {} };e[a][0].call(l.exports, function (t) {
							var n = e[a][1][t];return o(n || t);
						}, l, l.exports, t, e, n, r);
					}return n[a].exports;
				}for (var i = "function" == typeof _dereq_ && _dereq_, a = 0; a < r.length; a++) o(r[a]);return o;
			}({ 1: [function (t, e, n) {
					"use strict";
					e.exports = function (t) {
						function e(t) {
							var e = new n(t),
							    r = e.promise();return e.setHowMany(1), e.setUnwrap(), e.init(), r;
						}var n = t._SomePromiseArray;t.any = function (t) {
							return e(t);
						}, t.prototype.any = function () {
							return e(this);
						};
					};
				}, {}], 2: [function (t, n, r) {
					"use strict";
					function o() {
						this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new l(16), this._normalQueue = new l(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;var t = this;this.drainQueues = function () {
							t._drainQueues();
						}, this._schedule = c;
					}function i(t, e, n) {
						this._lateQueue.push(t, e, n), this._queueTick();
					}function a(t, e, n) {
						this._normalQueue.push(t, e, n), this._queueTick();
					}function s(t) {
						this._normalQueue._pushOne(t), this._queueTick();
					}var u;try {
						throw new Error();
					} catch (t) {
						u = t;
					}var c = t("./schedule"),
					    l = t("./queue"),
					    f = t("./util");o.prototype.setScheduler = function (t) {
						var e = this._schedule;return this._schedule = t, this._customScheduler = !0, e;
					}, o.prototype.hasCustomScheduler = function () {
						return this._customScheduler;
					}, o.prototype.enableTrampoline = function () {
						this._trampolineEnabled = !0;
					}, o.prototype.disableTrampolineIfNecessary = function () {
						f.hasDevTools && (this._trampolineEnabled = !1);
					}, o.prototype.haveItemsQueued = function () {
						return this._isTickUsed || this._haveDrainedQueues;
					}, o.prototype.fatalError = function (t, n) {
						n ? (e.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"), e.exit(2)) : this.throwLater(t);
					}, o.prototype.throwLater = function (t, e) {
						if (1 === arguments.length && (e = t, t = function () {
							throw e;
						}), "undefined" != typeof setTimeout) setTimeout(function () {
							t(e);
						}, 0);else try {
							this._schedule(function () {
								t(e);
							});
						} catch (t) {
							throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
						}
					}, f.hasDevTools ? (o.prototype.invokeLater = function (t, e, n) {
						this._trampolineEnabled ? i.call(this, t, e, n) : this._schedule(function () {
							setTimeout(function () {
								t.call(e, n);
							}, 100);
						});
					}, o.prototype.invoke = function (t, e, n) {
						this._trampolineEnabled ? a.call(this, t, e, n) : this._schedule(function () {
							t.call(e, n);
						});
					}, o.prototype.settlePromises = function (t) {
						this._trampolineEnabled ? s.call(this, t) : this._schedule(function () {
							t._settlePromises();
						});
					}) : (o.prototype.invokeLater = i, o.prototype.invoke = a, o.prototype.settlePromises = s), o.prototype._drainQueue = function (t) {
						for (; t.length() > 0;) {
							var e = t.shift();if ("function" == typeof e) {
								var n = t.shift(),
								    r = t.shift();e.call(n, r);
							} else e._settlePromises();
						}
					}, o.prototype._drainQueues = function () {
						this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue);
					}, o.prototype._queueTick = function () {
						this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
					}, o.prototype._reset = function () {
						this._isTickUsed = !1;
					}, n.exports = o, n.exports.firstLineError = u;
				}, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function (t, e, n) {
					"use strict";
					e.exports = function (t, e, n, r) {
						var o = !1,
						    i = function (t, e) {
							this._reject(e);
						},
						    a = function (t, e) {
							e.promiseRejectionQueued = !0, e.bindingPromise._then(i, i, null, this, t);
						},
						    s = function (t, e) {
							0 == (50397184 & this._bitField) && this._resolveCallback(e.target);
						},
						    u = function (t, e) {
							e.promiseRejectionQueued || this._reject(t);
						};t.prototype.bind = function (i) {
							o || (o = !0, t.prototype._propagateFrom = r.propagateFromFunction(), t.prototype._boundValue = r.boundValueFunction());var c = n(i),
							    l = new t(e);l._propagateFrom(this, 1);var f = this._target();if (l._setBoundTo(c), c instanceof t) {
								var h = { promiseRejectionQueued: !1, promise: l, target: f, bindingPromise: c };f._then(e, a, void 0, l, h), c._then(s, u, void 0, l, h), l._setOnCancel(c);
							} else l._resolveCallback(f);return l;
						}, t.prototype._setBoundTo = function (t) {
							void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = -2097153 & this._bitField;
						}, t.prototype._isBound = function () {
							return 2097152 == (2097152 & this._bitField);
						}, t.bind = function (e, n) {
							return t.resolve(n).bind(e);
						};
					};
				}, {}], 4: [function (t, e, n) {
					"use strict";
					function r() {
						try {
							Promise === i && (Promise = o);
						} catch (t) {}return i;
					}var o;"undefined" != typeof Promise && (o = Promise);var i = t("./promise")();i.noConflict = r, e.exports = i;
				}, { "./promise": 22 }], 5: [function (t, e, n) {
					"use strict";
					var r = Object.create;if (r) {
						var o = r(null),
						    i = r(null);o[" size"] = i[" size"] = 0;
					}e.exports = function (e) {
						function n(t, n) {
							var r;if (null != t && (r = t[n]), "function" != typeof r) {
								var o = "Object " + s.classString(t) + " has no method '" + s.toString(n) + "'";throw new e.TypeError(o);
							}return r;
						}function r(t) {
							return n(t, this.pop()).apply(t, this);
						}function o(t) {
							return t[this];
						}function i(t) {
							var e = +this;return e < 0 && (e = Math.max(0, e + t.length)), t[e];
						}var a,
						    s = t("./util"),
						    u = s.canEvaluate;s.isIdentifier;e.prototype.call = function (t) {
							var e = [].slice.call(arguments, 1);return e.push(t), this._then(r, void 0, void 0, e, void 0);
						}, e.prototype.get = function (t) {
							var e,
							    n = "number" == typeof t;if (n) e = i;else if (u) {
								var r = a(t);e = null !== r ? r : o;
							} else e = o;return this._then(e, void 0, void 0, t, void 0);
						};
					};
				}, { "./util": 36 }], 6: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o) {
						var i = t("./util"),
						    a = i.tryCatch,
						    s = i.errorObj,
						    u = e._async;e.prototype.break = e.prototype.cancel = function () {
							if (!o.cancellation()) return this._warn("cancellation is disabled");for (var t = this, e = t; t._isCancellable();) {
								if (!t._cancelBy(e)) {
									e._isFollowing() ? e._followee().cancel() : e._cancelBranched();break;
								}var n = t._cancellationParent;if (null == n || !n._isCancellable()) {
									t._isFollowing() ? t._followee().cancel() : t._cancelBranched();break;
								}t._isFollowing() && t._followee().cancel(), t._setWillBeCancelled(), e = t, t = n;
							}
						}, e.prototype._branchHasCancelled = function () {
							this._branchesRemainingToCancel--;
						}, e.prototype._enoughBranchesHaveCancelled = function () {
							return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
						}, e.prototype._cancelBy = function (t) {
							return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0));
						}, e.prototype._cancelBranched = function () {
							this._enoughBranchesHaveCancelled() && this._cancel();
						}, e.prototype._cancel = function () {
							this._isCancellable() && (this._setCancelled(), u.invoke(this._cancelPromises, this, void 0));
						}, e.prototype._cancelPromises = function () {
							this._length() > 0 && this._settlePromises();
						}, e.prototype._unsetOnCancel = function () {
							this._onCancelField = void 0;
						}, e.prototype._isCancellable = function () {
							return this.isPending() && !this._isCancelled();
						}, e.prototype.isCancellable = function () {
							return this.isPending() && !this.isCancelled();
						}, e.prototype._doInvokeOnCancel = function (t, e) {
							if (i.isArray(t)) for (var n = 0; n < t.length; ++n) this._doInvokeOnCancel(t[n], e);else if (void 0 !== t) if ("function" == typeof t) {
								if (!e) {
									var r = a(t).call(this._boundValue());r === s && (this._attachExtraTrace(r.e), u.throwLater(r.e));
								}
							} else t._resultCancelled(this);
						}, e.prototype._invokeOnCancel = function () {
							var t = this._onCancel();this._unsetOnCancel(), u.invoke(this._doInvokeOnCancel, this, t);
						}, e.prototype._invokeInternalOnCancel = function () {
							this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
						}, e.prototype._resultCancelled = function () {
							this.cancel();
						};
					};
				}, { "./util": 36 }], 7: [function (t, e, n) {
					"use strict";
					e.exports = function (e) {
						function n(t, n, s) {
							return function (u) {
								var c = s._boundValue();t: for (var l = 0; l < t.length; ++l) {
									var f = t[l];if (f === Error || null != f && f.prototype instanceof Error) {
										if (u instanceof f) return i(n).call(c, u);
									} else if ("function" == typeof f) {
										var h = i(f).call(c, u);if (h === a) return h;if (h) return i(n).call(c, u);
									} else if (r.isObject(u)) {
										for (var p = o(f), _ = 0; _ < p.length; ++_) {
											var v = p[_];if (f[v] != u[v]) continue t;
										}return i(n).call(c, u);
									}
								}return e;
							};
						}var r = t("./util"),
						    o = t("./es5").keys,
						    i = r.tryCatch,
						    a = r.errorObj;return n;
					};
				}, { "./es5": 13, "./util": 36 }], 8: [function (t, e, n) {
					"use strict";
					e.exports = function (t) {
						function e() {
							this._trace = new e.CapturedTrace(r());
						}function n() {
							if (o) return new e();
						}function r() {
							var t = i.length - 1;if (t >= 0) return i[t];
						}var o = !1,
						    i = [];return t.prototype._promiseCreated = function () {}, t.prototype._pushContext = function () {}, t.prototype._popContext = function () {
							return null;
						}, t._peekContext = t.prototype._peekContext = function () {}, e.prototype._pushContext = function () {
							void 0 !== this._trace && (this._trace._promiseCreated = null, i.push(this._trace));
						}, e.prototype._popContext = function () {
							if (void 0 !== this._trace) {
								var t = i.pop(),
								    e = t._promiseCreated;return t._promiseCreated = null, e;
							}return null;
						}, e.CapturedTrace = null, e.create = n, e.deactivateLongStackTraces = function () {}, e.activateLongStackTraces = function () {
							var n = t.prototype._pushContext,
							    i = t.prototype._popContext,
							    a = t._peekContext,
							    s = t.prototype._peekContext,
							    u = t.prototype._promiseCreated;e.deactivateLongStackTraces = function () {
								t.prototype._pushContext = n, t.prototype._popContext = i, t._peekContext = a, t.prototype._peekContext = s, t.prototype._promiseCreated = u, o = !1;
							}, o = !0, t.prototype._pushContext = e.prototype._pushContext, t.prototype._popContext = e.prototype._popContext, t._peekContext = t.prototype._peekContext = r, t.prototype._promiseCreated = function () {
								var t = this._peekContext();t && null == t._promiseCreated && (t._promiseCreated = this);
							};
						}, e;
					};
				}, {}], 9: [function (t, n, r) {
					"use strict";
					n.exports = function (n, r) {
						function o(t, e) {
							return { promise: e };
						}function i() {
							return !1;
						}function a(t, e, n) {
							var r = this;try {
								t(e, n, function (t) {
									if ("function" != typeof t) throw new TypeError("onCancel must be a function, got: " + U.toString(t));r._attachCancellationCallback(t);
								});
							} catch (t) {
								return t;
							}
						}function s(t) {
							if (!this._isCancellable()) return this;var e = this._onCancel();void 0 !== e ? U.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t);
						}function u() {
							return this._onCancelField;
						}function c(t) {
							this._onCancelField = t;
						}function l() {
							this._cancellationParent = void 0, this._onCancelField = void 0;
						}function f(t, e) {
							if (0 != (1 & e)) {
								this._cancellationParent = t;var n = t._branchesRemainingToCancel;void 0 === n && (n = 0), t._branchesRemainingToCancel = n + 1;
							}0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
						}function h(t, e) {
							0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
						}function p() {
							var t = this._boundTo;return void 0 !== t && t instanceof n ? t.isFulfilled() ? t.value() : void 0 : t;
						}function _() {
							this._trace = new P(this._peekContext());
						}function v(t, e) {
							if (N(t)) {
								var n = this._trace;if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);else if (!t.__stackCleaned__) {
									var r = C(t);U.notEnumerableProp(t, "stack", r.message + "\n" + r.stack.join("\n")), U.notEnumerableProp(t, "__stackCleaned__", !0);
								}
							}
						}function d(t, e, n, r, o) {
							if (void 0 === t && null !== e && K) {
								if (void 0 !== o && o._returnedNonUndefined()) return;if (0 == (65535 & r._bitField)) return;n && (n += " ");var i = "",
								    a = "";if (e._trace) {
									for (var s = e._trace.stack.split("\n"), u = j(s), c = u.length - 1; c >= 0; --c) {
										var l = u[c];if (!B.test(l)) {
											var f = l.match(q);f && (i = "at " + f[1] + ":" + f[2] + ":" + f[3] + " ");break;
										}
									}if (u.length > 0) for (var h = u[0], c = 0; c < s.length; ++c) if (s[c] === h) {
										c > 0 && (a = "\n" + s[c - 1]);break;
									}
								}var p = "a promise was created in a " + n + "handler " + i + "but was not returned from it, see http://goo.gl/rRqMUw" + a;r._warn(p, !0, e);
							}
						}function y(t, e) {
							var n = t + " is deprecated and will be removed in a future version.";return e && (n += " Use " + e + " instead."), m(n);
						}function m(t, e, r) {
							if (at.warnings) {
								var o,
								    i = new V(t);if (e) r._attachExtraTrace(i);else if (at.longStackTraces && (o = n._peekContext())) o.attachExtraTrace(i);else {
									var a = C(i);i.stack = a.message + "\n" + a.stack.join("\n");
								}et("warning", i) || E(i, "", !0);
							}
						}function g(t, e) {
							for (var n = 0; n < e.length - 1; ++n) e[n].push("From previous event:"), e[n] = e[n].join("\n");return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n");
						}function b(t) {
							for (var e = 0; e < t.length; ++e) (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--);
						}function w(t) {
							for (var e = t[0], n = 1; n < t.length; ++n) {
								for (var r = t[n], o = e.length - 1, i = e[o], a = -1, s = r.length - 1; s >= 0; --s) if (r[s] === i) {
									a = s;break;
								}for (var s = a; s >= 0; --s) {
									var u = r[s];if (e[o] !== u) break;e.pop(), o--;
								}e = r;
							}
						}function j(t) {
							for (var e = [], n = 0; n < t.length; ++n) {
								var r = t[n],
								    o = "    (No stack trace)" === r || z.test(r),
								    i = o && rt(r);o && !i && (Q && " " !== r.charAt(0) && (r = "    " + r), e.push(r));
							}return e;
						}function x(t) {
							for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
								var r = e[n];if ("    (No stack trace)" === r || z.test(r)) break;
							}return n > 0 && "SyntaxError" != t.name && (e = e.slice(n)), e;
						}function C(t) {
							var e = t.stack,
							    n = t.toString();return e = "string" == typeof e && e.length > 0 ? x(t) : ["    (No stack trace)"], { message: n, stack: "SyntaxError" == t.name ? e : j(e) };
						}function E(t, e, n) {
							if ("undefined" != typeof console) {
								var r;if (U.isObject(t)) {
									var o = t.stack;r = e + $(o, t);
								} else r = e + String(t);"function" == typeof D ? D(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r);
							}
						}function k(t, e, n, r) {
							var o = !1;try {
								"function" == typeof e && (o = !0, "rejectionHandled" === t ? e(r) : e(n, r));
							} catch (t) {
								L.throwLater(t);
							}"unhandledRejection" === t ? et(t, n, r) || o || E(n, "Unhandled rejection ") : et(t, r);
						}function O(t) {
							var e;if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";else {
								e = t && "function" == typeof t.toString ? t.toString() : U.toString(t);if (/\[object [a-zA-Z0-9$_]+\]/.test(e)) try {
									e = JSON.stringify(t);
								} catch (t) {}0 === e.length && (e = "(empty array)");
							}return "(<" + F(e) + ">, no stack trace)";
						}function F(t) {
							return t.length < 41 ? t : t.substr(0, 38) + "...";
						}function T() {
							return "function" == typeof it;
						}function S(t) {
							var e = t.match(ot);if (e) return { fileName: e[1], line: parseInt(e[2], 10) };
						}function A(t, e) {
							if (T()) {
								for (var n, r, o = t.stack.split("\n"), i = e.stack.split("\n"), a = -1, s = -1, u = 0; u < o.length; ++u) {
									var c = S(o[u]);if (c) {
										n = c.fileName, a = c.line;break;
									}
								}for (var u = 0; u < i.length; ++u) {
									var c = S(i[u]);if (c) {
										r = c.fileName, s = c.line;break;
									}
								}a < 0 || s < 0 || !n || !r || n !== r || a >= s || (rt = function (t) {
									if (H.test(t)) return !0;var e = S(t);return !!(e && e.fileName === n && a <= e.line && e.line <= s);
								});
							}
						}function P(t) {
							this._parent = t, this._promisesCreated = 0;var e = this._length = 1 + (void 0 === t ? 0 : t._length);it(this, P), e > 32 && this.uncycle();
						}var R,
						    I,
						    D,
						    M = n._getDomain,
						    L = n._async,
						    V = t("./errors").Warning,
						    U = t("./util"),
						    N = U.canAttachTrace,
						    H = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
						    B = /\((?:timers\.js):\d+:\d+\)/,
						    q = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
						    z = null,
						    $ = null,
						    Q = !1,
						    G = !(0 == U.env("BLUEBIRD_DEBUG")),
						    W = !(0 == U.env("BLUEBIRD_WARNINGS") || !G && !U.env("BLUEBIRD_WARNINGS")),
						    X = !(0 == U.env("BLUEBIRD_LONG_STACK_TRACES") || !G && !U.env("BLUEBIRD_LONG_STACK_TRACES")),
						    K = 0 != U.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (W || !!U.env("BLUEBIRD_W_FORGOTTEN_RETURN"));n.prototype.suppressUnhandledRejections = function () {
							var t = this._target();t._bitField = -1048577 & t._bitField | 524288;
						}, n.prototype._ensurePossibleRejectionHandled = function () {
							if (0 == (524288 & this._bitField)) {
								this._setRejectionIsUnhandled();var t = this;setTimeout(function () {
									t._notifyUnhandledRejection();
								}, 1);
							}
						}, n.prototype._notifyUnhandledRejectionIsHandled = function () {
							k("rejectionHandled", R, void 0, this);
						}, n.prototype._setReturnedNonUndefined = function () {
							this._bitField = 268435456 | this._bitField;
						}, n.prototype._returnedNonUndefined = function () {
							return 0 != (268435456 & this._bitField);
						}, n.prototype._notifyUnhandledRejection = function () {
							if (this._isRejectionUnhandled()) {
								var t = this._settledValue();this._setUnhandledRejectionIsNotified(), k("unhandledRejection", I, t, this);
							}
						}, n.prototype._setUnhandledRejectionIsNotified = function () {
							this._bitField = 262144 | this._bitField;
						}, n.prototype._unsetUnhandledRejectionIsNotified = function () {
							this._bitField = -262145 & this._bitField;
						}, n.prototype._isUnhandledRejectionNotified = function () {
							return (262144 & this._bitField) > 0;
						}, n.prototype._setRejectionIsUnhandled = function () {
							this._bitField = 1048576 | this._bitField;
						}, n.prototype._unsetRejectionIsUnhandled = function () {
							this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
						}, n.prototype._isRejectionUnhandled = function () {
							return (1048576 & this._bitField) > 0;
						}, n.prototype._warn = function (t, e, n) {
							return m(t, e, n || this);
						}, n.onPossiblyUnhandledRejection = function (t) {
							var e = M();I = "function" == typeof t ? null === e ? t : U.domainBind(e, t) : void 0;
						}, n.onUnhandledRejectionHandled = function (t) {
							var e = M();R = "function" == typeof t ? null === e ? t : U.domainBind(e, t) : void 0;
						};var Y = function () {};n.longStackTraces = function () {
							if (L.haveItemsQueued() && !at.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if (!at.longStackTraces && T()) {
								var t = n.prototype._captureStackTrace,
								    e = n.prototype._attachExtraTrace;at.longStackTraces = !0, Y = function () {
									if (L.haveItemsQueued() && !at.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");n.prototype._captureStackTrace = t, n.prototype._attachExtraTrace = e, r.deactivateLongStackTraces(), L.enableTrampoline(), at.longStackTraces = !1;
								}, n.prototype._captureStackTrace = _, n.prototype._attachExtraTrace = v, r.activateLongStackTraces(), L.disableTrampolineIfNecessary();
							}
						}, n.hasLongStackTraces = function () {
							return at.longStackTraces && T();
						};var Z = function () {
							try {
								if ("function" == typeof CustomEvent) {
									var t = new CustomEvent("CustomEvent");return U.global.dispatchEvent(t), function (t, e) {
										var n = new CustomEvent(t.toLowerCase(), { detail: e, cancelable: !0 });return !U.global.dispatchEvent(n);
									};
								}if ("function" == typeof Event) {
									var t = new Event("CustomEvent");return U.global.dispatchEvent(t), function (t, e) {
										var n = new Event(t.toLowerCase(), { cancelable: !0 });return n.detail = e, !U.global.dispatchEvent(n);
									};
								}var t = document.createEvent("CustomEvent");return t.initCustomEvent("testingtheevent", !1, !0, {}), U.global.dispatchEvent(t), function (t, e) {
									var n = document.createEvent("CustomEvent");return n.initCustomEvent(t.toLowerCase(), !1, !0, e), !U.global.dispatchEvent(n);
								};
							} catch (t) {}return function () {
								return !1;
							};
						}(),
						    J = function () {
							return U.isNode ? function () {
								return e.emit.apply(e, arguments);
							} : U.global ? function (t) {
								var e = "on" + t.toLowerCase(),
								    n = U.global[e];return !!n && (n.apply(U.global, [].slice.call(arguments, 1)), !0);
							} : function () {
								return !1;
							};
						}(),
						    tt = { promiseCreated: o, promiseFulfilled: o, promiseRejected: o, promiseResolved: o, promiseCancelled: o, promiseChained: function (t, e, n) {
								return { promise: e, child: n };
							}, warning: function (t, e) {
								return { warning: e };
							}, unhandledRejection: function (t, e, n) {
								return { reason: e, promise: n };
							}, rejectionHandled: o },
						    et = function (t) {
							var e = !1;try {
								e = J.apply(null, arguments);
							} catch (t) {
								L.throwLater(t), e = !0;
							}var n = !1;try {
								n = Z(t, tt[t].apply(null, arguments));
							} catch (t) {
								L.throwLater(t), n = !0;
							}return n || e;
						};n.config = function (t) {
							if (t = Object(t), "longStackTraces" in t && (t.longStackTraces ? n.longStackTraces() : !t.longStackTraces && n.hasLongStackTraces() && Y()), "warnings" in t) {
								var e = t.warnings;at.warnings = !!e, K = at.warnings, U.isObject(e) && "wForgottenReturn" in e && (K = !!e.wForgottenReturn);
							}if ("cancellation" in t && t.cancellation && !at.cancellation) {
								if (L.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");n.prototype._clearCancellationData = l, n.prototype._propagateFrom = f, n.prototype._onCancel = u, n.prototype._setOnCancel = c, n.prototype._attachCancellationCallback = s, n.prototype._execute = a, nt = f, at.cancellation = !0;
							}return "monitoring" in t && (t.monitoring && !at.monitoring ? (at.monitoring = !0, n.prototype._fireEvent = et) : !t.monitoring && at.monitoring && (at.monitoring = !1, n.prototype._fireEvent = i)), n;
						}, n.prototype._fireEvent = i, n.prototype._execute = function (t, e, n) {
							try {
								t(e, n);
							} catch (t) {
								return t;
							}
						}, n.prototype._onCancel = function () {}, n.prototype._setOnCancel = function (t) {}, n.prototype._attachCancellationCallback = function (t) {}, n.prototype._captureStackTrace = function () {}, n.prototype._attachExtraTrace = function () {}, n.prototype._clearCancellationData = function () {}, n.prototype._propagateFrom = function (t, e) {};var nt = h,
						    rt = function () {
							return !1;
						},
						    ot = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;U.inherits(P, Error), r.CapturedTrace = P, P.prototype.uncycle = function () {
							var t = this._length;if (!(t < 2)) {
								for (var e = [], n = {}, r = 0, o = this; void 0 !== o; ++r) e.push(o), o = o._parent;t = this._length = r;for (var r = t - 1; r >= 0; --r) {
									var i = e[r].stack;void 0 === n[i] && (n[i] = r);
								}for (var r = 0; r < t; ++r) {
									var a = e[r].stack,
									    s = n[a];if (void 0 !== s && s !== r) {
										s > 0 && (e[s - 1]._parent = void 0, e[s - 1]._length = 1), e[r]._parent = void 0, e[r]._length = 1;var u = r > 0 ? e[r - 1] : this;s < t - 1 ? (u._parent = e[s + 1], u._parent.uncycle(), u._length = u._parent._length + 1) : (u._parent = void 0, u._length = 1);for (var c = u._length + 1, l = r - 2; l >= 0; --l) e[l]._length = c, c++;return;
									}
								}
							}
						}, P.prototype.attachExtraTrace = function (t) {
							if (!t.__stackCleaned__) {
								this.uncycle();for (var e = C(t), n = e.message, r = [e.stack], o = this; void 0 !== o;) r.push(j(o.stack.split("\n"))), o = o._parent;w(r), b(r), U.notEnumerableProp(t, "stack", g(n, r)), U.notEnumerableProp(t, "__stackCleaned__", !0);
							}
						};var it = function () {
							var t = /^\s*at\s*/,
							    e = function (t, e) {
								return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : O(e);
							};if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
								Error.stackTraceLimit += 6, z = t, $ = e;var n = Error.captureStackTrace;return rt = function (t) {
									return H.test(t);
								}, function (t, e) {
									Error.stackTraceLimit += 6, n(t, e), Error.stackTraceLimit -= 6;
								};
							}var r = new Error();if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return z = /@/, $ = e, Q = !0, function (t) {
								t.stack = new Error().stack;
							};var o;try {
								throw new Error();
							} catch (t) {
								o = "stack" in t;
							}return "stack" in r || !o || "number" != typeof Error.stackTraceLimit ? ($ = function (t, e) {
								return "string" == typeof t ? t : "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? O(e) : e.toString();
							}, null) : (z = t, $ = e, function (t) {
								Error.stackTraceLimit += 6;try {
									throw new Error();
								} catch (e) {
									t.stack = e.stack;
								}Error.stackTraceLimit -= 6;
							});
						}();"undefined" != typeof console && void 0 !== console.warn && (D = function (t) {
							console.warn(t);
						}, U.isNode && e.stderr.isTTY ? D = function (t, e) {
							var n = e ? "[33m" : "[31m";console.warn(n + t + "[0m\n");
						} : U.isNode || "string" != typeof new Error().stack || (D = function (t, e) {
							console.warn("%c" + t, e ? "color: darkorange" : "color: red");
						}));var at = { warnings: W, longStackTraces: !1, cancellation: !1, monitoring: !1 };return X && n.longStackTraces(), { longStackTraces: function () {
								return at.longStackTraces;
							}, warnings: function () {
								return at.warnings;
							}, cancellation: function () {
								return at.cancellation;
							}, monitoring: function () {
								return at.monitoring;
							}, propagateFromFunction: function () {
								return nt;
							}, boundValueFunction: function () {
								return p;
							}, checkForgottenReturns: d, setBounds: A, warn: m, deprecated: y, CapturedTrace: P, fireDomEvent: Z, fireGlobalEvent: J };
					};
				}, { "./errors": 12, "./util": 36 }], 10: [function (t, e, n) {
					"use strict";
					e.exports = function (t) {
						function e() {
							return this.value;
						}function n() {
							throw this.reason;
						}t.prototype.return = t.prototype.thenReturn = function (n) {
							return n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, { value: n }, void 0);
						}, t.prototype.throw = t.prototype.thenThrow = function (t) {
							return this._then(n, void 0, void 0, { reason: t }, void 0);
						}, t.prototype.catchThrow = function (t) {
							if (arguments.length <= 1) return this._then(void 0, n, void 0, { reason: t }, void 0);var e = arguments[1],
							    r = function () {
								throw e;
							};return this.caught(t, r);
						}, t.prototype.catchReturn = function (n) {
							if (arguments.length <= 1) return n instanceof t && n.suppressUnhandledRejections(), this._then(void 0, e, void 0, { value: n }, void 0);var r = arguments[1];r instanceof t && r.suppressUnhandledRejections();var o = function () {
								return r;
							};return this.caught(n, o);
						};
					};
				}, {}], 11: [function (t, e, n) {
					"use strict";
					e.exports = function (t, e) {
						function n() {
							return i(this);
						}function r(t, n) {
							return o(t, n, e, e);
						}var o = t.reduce,
						    i = t.all;t.prototype.each = function (t) {
							return o(this, t, e, 0)._then(n, void 0, void 0, this, void 0);
						}, t.prototype.mapSeries = function (t) {
							return o(this, t, e, e);
						}, t.each = function (t, r) {
							return o(t, r, e, 0)._then(n, void 0, void 0, t, void 0);
						}, t.mapSeries = r;
					};
				}, {}], 12: [function (t, e, n) {
					"use strict";
					function r(t, e) {
						function n(r) {
							if (!(this instanceof n)) return new n(r);f(this, "message", "string" == typeof r ? r : e), f(this, "name", t), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
						}return l(n, Error), n;
					}function o(t) {
						if (!(this instanceof o)) return new o(t);f(this, "name", "OperationalError"), f(this, "message", t), this.cause = t, this.isOperational = !0, t instanceof Error ? (f(this, "message", t.message), f(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
					}var i,
					    a,
					    s = t("./es5"),
					    u = s.freeze,
					    c = t("./util"),
					    l = c.inherits,
					    f = c.notEnumerableProp,
					    h = r("Warning", "warning"),
					    p = r("CancellationError", "cancellation error"),
					    _ = r("TimeoutError", "timeout error"),
					    v = r("AggregateError", "aggregate error");try {
						i = TypeError, a = RangeError;
					} catch (t) {
						i = r("TypeError", "type error"), a = r("RangeError", "range error");
					}for (var d = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), y = 0; y < d.length; ++y) "function" == typeof Array.prototype[d[y]] && (v.prototype[d[y]] = Array.prototype[d[y]]);s.defineProperty(v.prototype, "length", { value: 0, configurable: !1, writable: !0, enumerable: !0 }), v.prototype.isOperational = !0;var m = 0;v.prototype.toString = function () {
						var t = Array(4 * m + 1).join(" "),
						    e = "\n" + t + "AggregateError of:\n";m++, t = Array(4 * m + 1).join(" ");for (var n = 0; n < this.length; ++n) {
							for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", o = r.split("\n"), i = 0; i < o.length; ++i) o[i] = t + o[i];r = o.join("\n"), e += r + "\n";
						}return m--, e;
					}, l(o, Error);var g = Error.__BluebirdErrorTypes__;g || (g = u({ CancellationError: p, TimeoutError: _, OperationalError: o, RejectionError: o, AggregateError: v }), s.defineProperty(Error, "__BluebirdErrorTypes__", { value: g, writable: !1, enumerable: !1, configurable: !1 })), e.exports = { Error: Error, TypeError: i, RangeError: a, CancellationError: g.CancellationError, OperationalError: g.OperationalError, TimeoutError: g.TimeoutError, AggregateError: g.AggregateError, Warning: h };
				}, { "./es5": 13, "./util": 36 }], 13: [function (t, e, n) {
					var r = function () {
						"use strict";
						return void 0 === this;
					}();if (r) e.exports = { freeze: Object.freeze, defineProperty: Object.defineProperty, getDescriptor: Object.getOwnPropertyDescriptor, keys: Object.keys, names: Object.getOwnPropertyNames, getPrototypeOf: Object.getPrototypeOf, isArray: Array.isArray, isES5: r, propertyIsWritable: function (t, e) {
							var n = Object.getOwnPropertyDescriptor(t, e);return !(n && !n.writable && !n.set);
						} };else {
						var o = {}.hasOwnProperty,
						    i = {}.toString,
						    a = {}.constructor.prototype,
						    s = function (t) {
							var e = [];for (var n in t) o.call(t, n) && e.push(n);return e;
						},
						    u = function (t, e) {
							return { value: t[e] };
						},
						    c = function (t, e, n) {
							return t[e] = n.value, t;
						},
						    l = function (t) {
							return t;
						},
						    f = function (t) {
							try {
								return Object(t).constructor.prototype;
							} catch (t) {
								return a;
							}
						},
						    h = function (t) {
							try {
								return "[object Array]" === i.call(t);
							} catch (t) {
								return !1;
							}
						};e.exports = { isArray: h, keys: s, names: s, defineProperty: c, getDescriptor: u, freeze: l, getPrototypeOf: f, isES5: r, propertyIsWritable: function () {
								return !0;
							} };
					}
				}, {}], 14: [function (t, e, n) {
					"use strict";
					e.exports = function (t, e) {
						var n = t.map;t.prototype.filter = function (t, r) {
							return n(this, t, r, e);
						}, t.filter = function (t, r, o) {
							return n(t, r, o, e);
						};
					};
				}, {}], 15: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r) {
						function o(t, e, n) {
							this.promise = t, this.type = e, this.handler = n, this.called = !1, this.cancelPromise = null;
						}function i(t) {
							this.finallyHandler = t;
						}function a(t, e) {
							return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), t.cancelPromise = null, !0);
						}function s() {
							return c.call(this, this.promise._target()._settledValue());
						}function u(t) {
							if (!a(this, t)) return h.e = t, h;
						}function c(t) {
							var o = this.promise,
							    c = this.handler;if (!this.called) {
								this.called = !0;var l = this.isFinallyHandler() ? c.call(o._boundValue()) : c.call(o._boundValue(), t);if (l === r) return l;if (void 0 !== l) {
									o._setReturnedNonUndefined();var p = n(l, o);if (p instanceof e) {
										if (null != this.cancelPromise) {
											if (p._isCancelled()) {
												var _ = new f("late cancellation observer");return o._attachExtraTrace(_), h.e = _, h;
											}p.isPending() && p._attachCancellationCallback(new i(this));
										}return p._then(s, u, void 0, this, void 0);
									}
								}
							}return o.isRejected() ? (a(this), h.e = t, h) : (a(this), t);
						}var l = t("./util"),
						    f = e.CancellationError,
						    h = l.errorObj,
						    p = t("./catch_filter")(r);return o.prototype.isFinallyHandler = function () {
							return 0 === this.type;
						}, i.prototype._resultCancelled = function () {
							a(this.finallyHandler);
						}, e.prototype._passThrough = function (t, e, n, r) {
							return "function" != typeof t ? this.then() : this._then(n, r, void 0, new o(this, e, t), void 0);
						}, e.prototype.lastly = e.prototype.finally = function (t) {
							return this._passThrough(t, 0, c, c);
						}, e.prototype.tap = function (t) {
							return this._passThrough(t, 1, c);
						}, e.prototype.tapCatch = function (t) {
							var n = arguments.length;if (1 === n) return this._passThrough(t, 1, void 0, c);var r,
							    o = new Array(n - 1),
							    i = 0;for (r = 0; r < n - 1; ++r) {
								var a = arguments[r];if (!l.isObject(a)) return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + l.classString(a)));o[i++] = a;
							}o.length = i;var s = arguments[r];return this._passThrough(p(o, s, this), 1, void 0, c);
						}, o;
					};
				}, { "./catch_filter": 7, "./util": 36 }], 16: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o, i, a) {
						function s(t, n, r) {
							for (var i = 0; i < n.length; ++i) {
								r._pushContext();var a = p(n[i])(t);if (r._popContext(), a === h) {
									r._pushContext();var s = e.reject(h.e);return r._popContext(), s;
								}var u = o(a, r);if (u instanceof e) return u;
							}return null;
						}function u(t, n, o, i) {
							if (a.cancellation()) {
								var s = new e(r),
								    u = this._finallyPromise = new e(r);this._promise = s.lastly(function () {
									return u;
								}), s._captureStackTrace(), s._setOnCancel(this);
							} else {
								(this._promise = new e(r))._captureStackTrace();
							}this._stack = i, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof o ? [o].concat(_) : _, this._yieldedPromise = null, this._cancellationPhase = !1;
						}var c = t("./errors"),
						    l = c.TypeError,
						    f = t("./util"),
						    h = f.errorObj,
						    p = f.tryCatch,
						    _ = [];f.inherits(u, i), u.prototype._isResolved = function () {
							return null === this._promise;
						}, u.prototype._cleanup = function () {
							this._promise = this._generator = null, a.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null);
						}, u.prototype._promiseCancelled = function () {
							if (!this._isResolved()) {
								var t,
								    n = void 0 !== this._generator.return;if (n) this._promise._pushContext(), t = p(this._generator.return).call(this._generator, void 0), this._promise._popContext();else {
									var r = new e.CancellationError("generator .return() sentinel");e.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), t = p(this._generator.throw).call(this._generator, r), this._promise._popContext();
								}this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(t);
							}
						}, u.prototype._promiseFulfilled = function (t) {
							this._yieldedPromise = null, this._promise._pushContext();var e = p(this._generator.next).call(this._generator, t);this._promise._popContext(), this._continue(e);
						}, u.prototype._promiseRejected = function (t) {
							this._yieldedPromise = null, this._promise._attachExtraTrace(t), this._promise._pushContext();var e = p(this._generator.throw).call(this._generator, t);this._promise._popContext(), this._continue(e);
						}, u.prototype._resultCancelled = function () {
							if (this._yieldedPromise instanceof e) {
								var t = this._yieldedPromise;this._yieldedPromise = null, t.cancel();
							}
						}, u.prototype.promise = function () {
							return this._promise;
						}, u.prototype._run = function () {
							this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
						}, u.prototype._continue = function (t) {
							var n = this._promise;if (t === h) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);var r = t.value;if (!0 === t.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);var i = o(r, this._promise);if (!(i instanceof e) && null === (i = s(i, this._yieldHandlers, this._promise))) return void this._promiseRejected(new l("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(r)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));i = i._target();var a = i._bitField;0 == (50397184 & a) ? (this._yieldedPromise = i, i._proxy(this, null)) : 0 != (33554432 & a) ? e._async.invoke(this._promiseFulfilled, this, i._value()) : 0 != (16777216 & a) ? e._async.invoke(this._promiseRejected, this, i._reason()) : this._promiseCancelled();
						}, e.coroutine = function (t, e) {
							if ("function" != typeof t) throw new l("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n = Object(e).yieldHandler,
							    r = u,
							    o = new Error().stack;return function () {
								var e = t.apply(this, arguments),
								    i = new r(void 0, void 0, n, o),
								    a = i.promise();return i._generator = e, i._promiseFulfilled(void 0), a;
							};
						}, e.coroutine.addYieldHandler = function (t) {
							if ("function" != typeof t) throw new l("expecting a function but got " + f.classString(t));_.push(t);
						}, e.spawn = function (t) {
							if (a.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r = new u(t, this),
							    o = r.promise();return r._run(e.spawn), o;
						};
					};
				}, { "./errors": 12, "./util": 36 }], 17: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o, i, a) {
						var s = t("./util");s.canEvaluate, s.tryCatch, s.errorObj;e.join = function () {
							var t,
							    e = arguments.length - 1;if (e > 0 && "function" == typeof arguments[e]) {
								t = arguments[e];var r;
							}var o = [].slice.call(arguments);t && o.pop();var r = new n(o).promise();return void 0 !== t ? r.spread(t) : r;
						};
					};
				}, { "./util": 36 }], 18: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o, i, a) {
						function s(t, e, n, r) {
							this.constructor$(t), this._promise._captureStackTrace();var o = c();this._callback = null === o ? e : l.domainBind(o, e), this._preservedValues = r === i ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], p.invoke(this._asyncInit, this, void 0);
						}function u(t, n, o, i) {
							if ("function" != typeof n) return r("expecting a function but got " + l.classString(n));var a = 0;if (void 0 !== o) {
								if ("object" != typeof o || null === o) return e.reject(new TypeError("options argument must be an object but it is " + l.classString(o)));if ("number" != typeof o.concurrency) return e.reject(new TypeError("'concurrency' must be a number but it is " + l.classString(o.concurrency)));a = o.concurrency;
							}return a = "number" == typeof a && isFinite(a) && a >= 1 ? a : 0, new s(t, n, a, i).promise();
						}var c = e._getDomain,
						    l = t("./util"),
						    f = l.tryCatch,
						    h = l.errorObj,
						    p = e._async;l.inherits(s, n), s.prototype._asyncInit = function () {
							this._init$(void 0, -2);
						}, s.prototype._init = function () {}, s.prototype._promiseFulfilled = function (t, n) {
							var r = this._values,
							    i = this.length(),
							    s = this._preservedValues,
							    u = this._limit;if (n < 0) {
								if (n = -1 * n - 1, r[n] = t, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0;
							} else {
								if (u >= 1 && this._inFlight >= u) return r[n] = t, this._queue.push(n), !1;null !== s && (s[n] = t);var c = this._promise,
								    l = this._callback,
								    p = c._boundValue();c._pushContext();var _ = f(l).call(p, t, n, i),
								    v = c._popContext();if (a.checkForgottenReturns(_, v, null !== s ? "Promise.filter" : "Promise.map", c), _ === h) return this._reject(_.e), !0;var d = o(_, this._promise);if (d instanceof e) {
									d = d._target();var y = d._bitField;if (0 == (50397184 & y)) return u >= 1 && this._inFlight++, r[n] = d, d._proxy(this, -1 * (n + 1)), !1;if (0 == (33554432 & y)) return 0 != (16777216 & y) ? (this._reject(d._reason()), !0) : (this._cancel(), !0);_ = d._value();
								}r[n] = _;
							}return ++this._totalResolved >= i && (null !== s ? this._filter(r, s) : this._resolve(r), !0);
						}, s.prototype._drainQueue = function () {
							for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e;) {
								if (this._isResolved()) return;var r = t.pop();this._promiseFulfilled(n[r], r);
							}
						}, s.prototype._filter = function (t, e) {
							for (var n = e.length, r = new Array(n), o = 0, i = 0; i < n; ++i) t[i] && (r[o++] = e[i]);r.length = o, this._resolve(r);
						}, s.prototype.preservedValues = function () {
							return this._preservedValues;
						}, e.prototype.map = function (t, e) {
							return u(this, t, e, null);
						}, e.map = function (t, e, n, r) {
							return u(t, e, n, r);
						};
					};
				}, { "./util": 36 }], 19: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o, i) {
						var a = t("./util"),
						    s = a.tryCatch;e.method = function (t) {
							if ("function" != typeof t) throw new e.TypeError("expecting a function but got " + a.classString(t));return function () {
								var r = new e(n);r._captureStackTrace(), r._pushContext();var o = s(t).apply(this, arguments),
								    a = r._popContext();return i.checkForgottenReturns(o, a, "Promise.method", r), r._resolveFromSyncValue(o), r;
							};
						}, e.attempt = e.try = function (t) {
							if ("function" != typeof t) return o("expecting a function but got " + a.classString(t));var r = new e(n);r._captureStackTrace(), r._pushContext();var u;if (arguments.length > 1) {
								i.deprecated("calling Promise.try with more than 1 argument");var c = arguments[1],
								    l = arguments[2];u = a.isArray(c) ? s(t).apply(l, c) : s(t).call(l, c);
							} else u = s(t)();var f = r._popContext();return i.checkForgottenReturns(u, f, "Promise.try", r), r._resolveFromSyncValue(u), r;
						}, e.prototype._resolveFromSyncValue = function (t) {
							t === a.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0);
						};
					};
				}, { "./util": 36 }], 20: [function (t, e, n) {
					"use strict";
					function r(t) {
						return t instanceof Error && l.getPrototypeOf(t) === Error.prototype;
					}function o(t) {
						var e;if (r(t)) {
							e = new c(t), e.name = t.name, e.message = t.message, e.stack = t.stack;for (var n = l.keys(t), o = 0; o < n.length; ++o) {
								var i = n[o];f.test(i) || (e[i] = t[i]);
							}return e;
						}return a.markAsOriginatingFromRejection(t), t;
					}function i(t, e) {
						return function (n, r) {
							if (null !== t) {
								if (n) {
									var i = o(s(n));t._attachExtraTrace(i), t._reject(i);
								} else if (e) {
									var a = [].slice.call(arguments, 1);t._fulfill(a);
								} else t._fulfill(r);t = null;
							}
						};
					}var a = t("./util"),
					    s = a.maybeWrapAsError,
					    u = t("./errors"),
					    c = u.OperationalError,
					    l = t("./es5"),
					    f = /^(?:name|message|stack|cause)$/;e.exports = i;
				}, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (t, e, n) {
					"use strict";
					e.exports = function (e) {
						function n(t, e) {
							var n = this;if (!i.isArray(t)) return r.call(n, t, e);var o = s(e).apply(n._boundValue(), [null].concat(t));o === u && a.throwLater(o.e);
						}function r(t, e) {
							var n = this,
							    r = n._boundValue(),
							    o = void 0 === t ? s(e).call(r, null) : s(e).call(r, null, t);o === u && a.throwLater(o.e);
						}function o(t, e) {
							var n = this;if (!t) {
								var r = new Error(t + "");r.cause = t, t = r;
							}var o = s(e).call(n._boundValue(), t);o === u && a.throwLater(o.e);
						}var i = t("./util"),
						    a = e._async,
						    s = i.tryCatch,
						    u = i.errorObj;e.prototype.asCallback = e.prototype.nodeify = function (t, e) {
							if ("function" == typeof t) {
								var i = r;void 0 !== e && Object(e).spread && (i = n), this._then(i, o, void 0, this, t);
							}return this;
						};
					};
				}, { "./util": 36 }], 22: [function (t, n, r) {
					"use strict";
					n.exports = function () {
						function r() {}function o(t, e) {
							if (null == t || t.constructor !== i) throw new g("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");if ("function" != typeof e) throw new g("expecting a function but got " + _.classString(e));
						}function i(t) {
							t !== w && o(this, t), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(t), this._promiseCreated(), this._fireEvent("promiseCreated", this);
						}function a(t) {
							this.promise._resolveCallback(t);
						}function s(t) {
							this.promise._rejectCallback(t, !1);
						}function u(t) {
							var e = new i(w);e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t;
						}var c,
						    l = function () {
							return new g("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
						},
						    f = function () {
							return new i.PromiseInspection(this._target());
						},
						    h = function (t) {
							return i.reject(new g(t));
						},
						    p = {},
						    _ = t("./util");c = _.isNode ? function () {
							var t = e.domain;return void 0 === t && (t = null), t;
						} : function () {
							return null;
						}, _.notEnumerableProp(i, "_getDomain", c);var v = t("./es5"),
						    d = t("./async"),
						    y = new d();v.defineProperty(i, "_async", { value: y });var m = t("./errors"),
						    g = i.TypeError = m.TypeError;i.RangeError = m.RangeError;var b = i.CancellationError = m.CancellationError;i.TimeoutError = m.TimeoutError, i.OperationalError = m.OperationalError, i.RejectionError = m.OperationalError, i.AggregateError = m.AggregateError;var w = function () {},
						    j = {},
						    x = {},
						    C = t("./thenables")(i, w),
						    E = t("./promise_array")(i, w, C, h, r),
						    k = t("./context")(i),
						    O = k.create,
						    F = t("./debuggability")(i, k),
						    T = (F.CapturedTrace, t("./finally")(i, C, x)),
						    S = t("./catch_filter")(x),
						    A = t("./nodeback"),
						    P = _.errorObj,
						    R = _.tryCatch;return i.prototype.toString = function () {
							return "[object Promise]";
						}, i.prototype.caught = i.prototype.catch = function (t) {
							var e = arguments.length;if (e > 1) {
								var n,
								    r = new Array(e - 1),
								    o = 0;for (n = 0; n < e - 1; ++n) {
									var i = arguments[n];if (!_.isObject(i)) return h("Catch statement predicate: expecting an object but got " + _.classString(i));r[o++] = i;
								}return r.length = o, t = arguments[n], this.then(void 0, S(r, t, this));
							}return this.then(void 0, t);
						}, i.prototype.reflect = function () {
							return this._then(f, f, void 0, this, void 0);
						}, i.prototype.then = function (t, e) {
							if (F.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
								var n = ".then() only accepts functions but was passed: " + _.classString(t);arguments.length > 1 && (n += ", " + _.classString(e)), this._warn(n);
							}return this._then(t, e, void 0, void 0, void 0);
						}, i.prototype.done = function (t, e) {
							this._then(t, e, void 0, void 0, void 0)._setIsFinal();
						}, i.prototype.spread = function (t) {
							return "function" != typeof t ? h("expecting a function but got " + _.classString(t)) : this.all()._then(t, void 0, void 0, j, void 0);
						}, i.prototype.toJSON = function () {
							var t = { isFulfilled: !1, isRejected: !1, fulfillmentValue: void 0, rejectionReason: void 0 };return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t;
						}, i.prototype.all = function () {
							return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new E(this).promise();
						}, i.prototype.error = function (t) {
							return this.caught(_.originatesFromRejection, t);
						}, i.getNewLibraryCopy = n.exports, i.is = function (t) {
							return t instanceof i;
						}, i.fromNode = i.fromCallback = function (t) {
							var e = new i(w);e._captureStackTrace();var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs,
							    r = R(t)(A(e, n));return r === P && e._rejectCallback(r.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), e;
						}, i.all = function (t) {
							return new E(t).promise();
						}, i.cast = function (t) {
							var e = C(t);return e instanceof i || (e = new i(w), e._captureStackTrace(), e._setFulfilled(), e._rejectionHandler0 = t), e;
						}, i.resolve = i.fulfilled = i.cast, i.reject = i.rejected = function (t) {
							var e = new i(w);return e._captureStackTrace(), e._rejectCallback(t, !0), e;
						}, i.setScheduler = function (t) {
							if ("function" != typeof t) throw new g("expecting a function but got " + _.classString(t));return y.setScheduler(t);
						}, i.prototype._then = function (t, e, n, r, o) {
							var a = void 0 !== o,
							    s = a ? o : new i(w),
							    u = this._target(),
							    l = u._bitField;a || (s._propagateFrom(this, 3), s._captureStackTrace(), void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & l) ? this._boundValue() : u === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, s));var f = c();if (0 != (50397184 & l)) {
								var h,
								    p,
								    v = u._settlePromiseCtx;0 != (33554432 & l) ? (p = u._rejectionHandler0, h = t) : 0 != (16777216 & l) ? (p = u._fulfillmentHandler0, h = e, u._unsetRejectionIsUnhandled()) : (v = u._settlePromiseLateCancellationObserver, p = new b("late cancellation observer"), u._attachExtraTrace(p), h = e), y.invoke(v, u, { handler: null === f ? h : "function" == typeof h && _.domainBind(f, h), promise: s, receiver: r, value: p });
							} else u._addCallbacks(t, e, s, r, f);return s;
						}, i.prototype._length = function () {
							return 65535 & this._bitField;
						}, i.prototype._isFateSealed = function () {
							return 0 != (117506048 & this._bitField);
						}, i.prototype._isFollowing = function () {
							return 67108864 == (67108864 & this._bitField);
						}, i.prototype._setLength = function (t) {
							this._bitField = -65536 & this._bitField | 65535 & t;
						}, i.prototype._setFulfilled = function () {
							this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
						}, i.prototype._setRejected = function () {
							this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
						}, i.prototype._setFollowing = function () {
							this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
						}, i.prototype._setIsFinal = function () {
							this._bitField = 4194304 | this._bitField;
						}, i.prototype._isFinal = function () {
							return (4194304 & this._bitField) > 0;
						}, i.prototype._unsetCancelled = function () {
							this._bitField = -65537 & this._bitField;
						}, i.prototype._setCancelled = function () {
							this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
						}, i.prototype._setWillBeCancelled = function () {
							this._bitField = 8388608 | this._bitField;
						}, i.prototype._setAsyncGuaranteed = function () {
							y.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
						}, i.prototype._receiverAt = function (t) {
							var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];if (e !== p) return void 0 === e && this._isBound() ? this._boundValue() : e;
						}, i.prototype._promiseAt = function (t) {
							return this[4 * t - 4 + 2];
						}, i.prototype._fulfillmentHandlerAt = function (t) {
							return this[4 * t - 4 + 0];
						}, i.prototype._rejectionHandlerAt = function (t) {
							return this[4 * t - 4 + 1];
						}, i.prototype._boundValue = function () {}, i.prototype._migrateCallback0 = function (t) {
							var e = (t._bitField, t._fulfillmentHandler0),
							    n = t._rejectionHandler0,
							    r = t._promise0,
							    o = t._receiverAt(0);void 0 === o && (o = p), this._addCallbacks(e, n, r, o, null);
						}, i.prototype._migrateCallbackAt = function (t, e) {
							var n = t._fulfillmentHandlerAt(e),
							    r = t._rejectionHandlerAt(e),
							    o = t._promiseAt(e),
							    i = t._receiverAt(e);void 0 === i && (i = p), this._addCallbacks(n, r, o, i, null);
						}, i.prototype._addCallbacks = function (t, e, n, r, o) {
							var i = this._length();if (i >= 65531 && (i = 0, this._setLength(0)), 0 === i) this._promise0 = n, this._receiver0 = r, "function" == typeof t && (this._fulfillmentHandler0 = null === o ? t : _.domainBind(o, t)), "function" == typeof e && (this._rejectionHandler0 = null === o ? e : _.domainBind(o, e));else {
								var a = 4 * i - 4;this[a + 2] = n, this[a + 3] = r, "function" == typeof t && (this[a + 0] = null === o ? t : _.domainBind(o, t)), "function" == typeof e && (this[a + 1] = null === o ? e : _.domainBind(o, e));
							}return this._setLength(i + 1), i;
						}, i.prototype._proxy = function (t, e) {
							this._addCallbacks(void 0, void 0, e, t, null);
						}, i.prototype._resolveCallback = function (t, e) {
							if (0 == (117506048 & this._bitField)) {
								if (t === this) return this._rejectCallback(l(), !1);var n = C(t, this);if (!(n instanceof i)) return this._fulfill(t);e && this._propagateFrom(n, 2);var r = n._target();if (r === this) return void this._reject(l());var o = r._bitField;if (0 == (50397184 & o)) {
									var a = this._length();a > 0 && r._migrateCallback0(this);for (var s = 1; s < a; ++s) r._migrateCallbackAt(this, s);this._setFollowing(), this._setLength(0), this._setFollowee(r);
								} else if (0 != (33554432 & o)) this._fulfill(r._value());else if (0 != (16777216 & o)) this._reject(r._reason());else {
									var u = new b("late cancellation observer");r._attachExtraTrace(u), this._reject(u);
								}
							}
						}, i.prototype._rejectCallback = function (t, e, n) {
							var r = _.ensureErrorObject(t),
							    o = r === t;if (!o && !n && F.warnings()) {
								var i = "a promise was rejected with a non-error: " + _.classString(t);this._warn(i, !0);
							}this._attachExtraTrace(r, !!e && o), this._reject(t);
						}, i.prototype._resolveFromExecutor = function (t) {
							if (t !== w) {
								var e = this;this._captureStackTrace(), this._pushContext();var n = !0,
								    r = this._execute(t, function (t) {
									e._resolveCallback(t);
								}, function (t) {
									e._rejectCallback(t, n);
								});n = !1, this._popContext(), void 0 !== r && e._rejectCallback(r, !0);
							}
						}, i.prototype._settlePromiseFromHandler = function (t, e, n, r) {
							var o = r._bitField;if (0 == (65536 & o)) {
								r._pushContext();var i;e === j ? n && "number" == typeof n.length ? i = R(t).apply(this._boundValue(), n) : (i = P, i.e = new g("cannot .spread() a non-array: " + _.classString(n))) : i = R(t).call(e, n);var a = r._popContext();o = r._bitField, 0 == (65536 & o) && (i === x ? r._reject(n) : i === P ? r._rejectCallback(i.e, !1) : (F.checkForgottenReturns(i, a, "", r, this), r._resolveCallback(i)));
							}
						}, i.prototype._target = function () {
							for (var t = this; t._isFollowing();) t = t._followee();return t;
						}, i.prototype._followee = function () {
							return this._rejectionHandler0;
						}, i.prototype._setFollowee = function (t) {
							this._rejectionHandler0 = t;
						}, i.prototype._settlePromise = function (t, e, n, o) {
							var a = t instanceof i,
							    s = this._bitField,
							    u = 0 != (134217728 & s);0 != (65536 & s) ? (a && t._invokeInternalOnCancel(), n instanceof T && n.isFinallyHandler() ? (n.cancelPromise = t, R(e).call(n, o) === P && t._reject(P.e)) : e === f ? t._fulfill(f.call(n)) : n instanceof r ? n._promiseCancelled(t) : a || t instanceof E ? t._cancel() : n.cancel()) : "function" == typeof e ? a ? (u && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, n, o, t)) : e.call(n, o, t) : n instanceof r ? n._isResolved() || (0 != (33554432 & s) ? n._promiseFulfilled(o, t) : n._promiseRejected(o, t)) : a && (u && t._setAsyncGuaranteed(), 0 != (33554432 & s) ? t._fulfill(o) : t._reject(o));
						}, i.prototype._settlePromiseLateCancellationObserver = function (t) {
							var e = t.handler,
							    n = t.promise,
							    r = t.receiver,
							    o = t.value;"function" == typeof e ? n instanceof i ? this._settlePromiseFromHandler(e, r, o, n) : e.call(r, o, n) : n instanceof i && n._reject(o);
						}, i.prototype._settlePromiseCtx = function (t) {
							this._settlePromise(t.promise, t.handler, t.receiver, t.value);
						}, i.prototype._settlePromise0 = function (t, e, n) {
							var r = this._promise0,
							    o = this._receiverAt(0);this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, t, o, e);
						}, i.prototype._clearCallbackDataAtIndex = function (t) {
							var e = 4 * t - 4;this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0;
						}, i.prototype._fulfill = function (t) {
							var e = this._bitField;if (!((117506048 & e) >>> 16)) {
								if (t === this) {
									var n = l();return this._attachExtraTrace(n), this._reject(n);
								}this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 != (134217728 & e) ? this._settlePromises() : y.settlePromises(this));
							}
						}, i.prototype._reject = function (t) {
							var e = this._bitField;if (!((117506048 & e) >>> 16)) {
								if (this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal()) return y.fatalError(t, _.isNode);(65535 & e) > 0 ? y.settlePromises(this) : this._ensurePossibleRejectionHandled();
							}
						}, i.prototype._fulfillPromises = function (t, e) {
							for (var n = 1; n < t; n++) {
								var r = this._fulfillmentHandlerAt(n),
								    o = this._promiseAt(n),
								    i = this._receiverAt(n);this._clearCallbackDataAtIndex(n), this._settlePromise(o, r, i, e);
							}
						}, i.prototype._rejectPromises = function (t, e) {
							for (var n = 1; n < t; n++) {
								var r = this._rejectionHandlerAt(n),
								    o = this._promiseAt(n),
								    i = this._receiverAt(n);this._clearCallbackDataAtIndex(n), this._settlePromise(o, r, i, e);
							}
						}, i.prototype._settlePromises = function () {
							var t = this._bitField,
							    e = 65535 & t;if (e > 0) {
								if (0 != (16842752 & t)) {
									var n = this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0, n, t), this._rejectPromises(e, n);
								} else {
									var r = this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0, r, t), this._fulfillPromises(e, r);
								}this._setLength(0);
							}this._clearCancellationData();
						}, i.prototype._settledValue = function () {
							var t = this._bitField;return 0 != (33554432 & t) ? this._rejectionHandler0 : 0 != (16777216 & t) ? this._fulfillmentHandler0 : void 0;
						}, i.defer = i.pending = function () {
							return F.deprecated("Promise.defer", "new Promise"), { promise: new i(w), resolve: a, reject: s };
						}, _.notEnumerableProp(i, "_makeSelfResolutionError", l), t("./method")(i, w, C, h, F), t("./bind")(i, w, C, F), t("./cancel")(i, E, h, F), t("./direct_resolve")(i), t("./synchronous_inspection")(i), t("./join")(i, E, C, w, y, c), i.Promise = i, i.version = "3.5.1", t("./map.js")(i, E, h, C, w, F), t("./call_get.js")(i), t("./using.js")(i, h, C, O, w, F), t("./timers.js")(i, w, F), t("./generators.js")(i, h, w, C, r, F), t("./nodeify.js")(i), t("./promisify.js")(i, w), t("./props.js")(i, E, C, h), t("./race.js")(i, w, C, h), t("./reduce.js")(i, E, h, C, w, F), t("./settle.js")(i, E, F), t("./some.js")(i, E, h), t("./filter.js")(i, w), t("./each.js")(i, w), t("./any.js")(i), _.toFastProperties(i), _.toFastProperties(i.prototype), u({ a: 1 }), u({ b: 2 }), u({ c: 3 }), u(1), u(function () {}), u(void 0), u(!1), u(new i(w)), F.setBounds(d.firstLineError, _.lastLineError), i;
					};
				}, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o, i) {
						function a(t) {
							switch (t) {case -2:
									return [];case -3:
									return {};case -6:
									return new Map();}
						}function s(t) {
							var r = this._promise = new e(n);t instanceof e && r._propagateFrom(t, 3), r._setOnCancel(this), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
						}var u = t("./util");u.isArray;return u.inherits(s, i), s.prototype.length = function () {
							return this._length;
						}, s.prototype.promise = function () {
							return this._promise;
						}, s.prototype._init = function t(n, i) {
							var s = r(this._values, this._promise);if (s instanceof e) {
								s = s._target();var c = s._bitField;if (this._values = s, 0 == (50397184 & c)) return this._promise._setAsyncGuaranteed(), s._then(t, this._reject, void 0, this, i);if (0 == (33554432 & c)) return 0 != (16777216 & c) ? this._reject(s._reason()) : this._cancel();s = s._value();
							}if (null === (s = u.asArray(s))) {
								var l = o("expecting an array or an iterable object but got " + u.classString(s)).reason();return void this._promise._rejectCallback(l, !1);
							}if (0 === s.length) return void (-5 === i ? this._resolveEmptyArray() : this._resolve(a(i)));this._iterate(s);
						}, s.prototype._iterate = function (t) {
							var n = this.getActualLength(t.length);this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;for (var o = this._promise, i = !1, a = null, s = 0; s < n; ++s) {
								var u = r(t[s], o);u instanceof e ? (u = u._target(), a = u._bitField) : a = null, i ? null !== a && u.suppressUnhandledRejections() : null !== a ? 0 == (50397184 & a) ? (u._proxy(this, s), this._values[s] = u) : i = 0 != (33554432 & a) ? this._promiseFulfilled(u._value(), s) : 0 != (16777216 & a) ? this._promiseRejected(u._reason(), s) : this._promiseCancelled(s) : i = this._promiseFulfilled(u, s);
							}i || o._setAsyncGuaranteed();
						}, s.prototype._isResolved = function () {
							return null === this._values;
						}, s.prototype._resolve = function (t) {
							this._values = null, this._promise._fulfill(t);
						}, s.prototype._cancel = function () {
							!this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
						}, s.prototype._reject = function (t) {
							this._values = null, this._promise._rejectCallback(t, !1);
						}, s.prototype._promiseFulfilled = function (t, e) {
							return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), !0);
						}, s.prototype._promiseCancelled = function () {
							return this._cancel(), !0;
						}, s.prototype._promiseRejected = function (t) {
							return this._totalResolved++, this._reject(t), !0;
						}, s.prototype._resultCancelled = function () {
							if (!this._isResolved()) {
								var t = this._values;if (this._cancel(), t instanceof e) t.cancel();else for (var n = 0; n < t.length; ++n) t[n] instanceof e && t[n].cancel();
							}
						}, s.prototype.shouldCopyValues = function () {
							return !0;
						}, s.prototype.getActualLength = function (t) {
							return t;
						}, s;
					};
				}, { "./util": 36 }], 24: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n) {
						function r(t) {
							return !w.test(t);
						}function o(t) {
							try {
								return !0 === t.__isPromisified__;
							} catch (t) {
								return !1;
							}
						}function i(t, e, n) {
							var r = p.getDataPropertyOrDefault(t, e + n, g);return !!r && o(r);
						}function a(t, e, n) {
							for (var r = 0; r < t.length; r += 2) {
								var o = t[r];if (n.test(o)) for (var i = o.replace(n, ""), a = 0; a < t.length; a += 2) if (t[a] === i) throw new m("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e));
							}
						}function s(t, e, n, r) {
							for (var s = p.inheritedDataKeys(t), u = [], c = 0; c < s.length; ++c) {
								var l = s[c],
								    f = t[l],
								    h = r === j || j(l, f, t);"function" != typeof f || o(f) || i(t, l, e) || !r(l, f, t, h) || u.push(l, f);
							}return a(u, e, n), u;
						}function u(t, r, o, i, a, s) {
							function u() {
								var o = r;r === h && (o = this);var i = new e(n);i._captureStackTrace();var a = "string" == typeof l && this !== c ? this[l] : t,
								    u = _(i, s);try {
									a.apply(o, v(arguments, u));
								} catch (t) {
									i._rejectCallback(d(t), !0, !0);
								}return i._isFateSealed() || i._setAsyncGuaranteed(), i;
							}var c = function () {
								return this;
							}(),
							    l = t;return "string" == typeof l && (t = i), p.notEnumerableProp(u, "__isPromisified__", !0), u;
						}function c(t, e, n, r, o) {
							for (var i = new RegExp(x(e) + "$"), a = s(t, e, i, n), u = 0, c = a.length; u < c; u += 2) {
								var l = a[u],
								    f = a[u + 1],
								    _ = l + e;if (r === C) t[_] = C(l, h, l, f, e, o);else {
									var v = r(f, function () {
										return C(l, h, l, f, e, o);
									});p.notEnumerableProp(v, "__isPromisified__", !0), t[_] = v;
								}
							}return p.toFastProperties(t), t;
						}function l(t, e, n) {
							return C(t, e, void 0, t, null, n);
						}var f,
						    h = {},
						    p = t("./util"),
						    _ = t("./nodeback"),
						    v = p.withAppended,
						    d = p.maybeWrapAsError,
						    y = p.canEvaluate,
						    m = t("./errors").TypeError,
						    g = { __isPromisified__: !0 },
						    b = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
						    w = new RegExp("^(?:" + b.join("|") + ")$"),
						    j = function (t) {
							return p.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t;
						},
						    x = function (t) {
							return t.replace(/([$])/, "\\$");
						},
						    C = y ? f : u;e.promisify = function (t, e) {
							if ("function" != typeof t) throw new m("expecting a function but got " + p.classString(t));if (o(t)) return t;e = Object(e);var n = void 0 === e.context ? h : e.context,
							    i = !!e.multiArgs,
							    a = l(t, n, i);return p.copyDescriptors(t, a, r), a;
						}, e.promisifyAll = function (t, e) {
							if ("function" != typeof t && "object" != typeof t) throw new m("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");e = Object(e);var n = !!e.multiArgs,
							    r = e.suffix;"string" != typeof r && (r = "Async");var o = e.filter;"function" != typeof o && (o = j);var i = e.promisifier;if ("function" != typeof i && (i = C), !p.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for (var a = p.inheritedDataKeys(t), s = 0; s < a.length; ++s) {
								var u = t[a[s]];"constructor" !== a[s] && p.isClass(u) && (c(u.prototype, r, o, i, n), c(u, r, o, i, n));
							}return c(t, r, o, i, n);
						};
					};
				}, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o) {
						function i(t) {
							var e,
							    n = !1;if (void 0 !== s && t instanceof s) e = f(t), n = !0;else {
								var r = l.keys(t),
								    o = r.length;e = new Array(2 * o);for (var i = 0; i < o; ++i) {
									var a = r[i];e[i] = t[a], e[i + o] = a;
								}
							}this.constructor$(e), this._isMap = n, this._init$(void 0, n ? -6 : -3);
						}function a(t) {
							var n,
							    a = r(t);return c(a) ? (n = a instanceof e ? a._then(e.props, void 0, void 0, void 0, void 0) : new i(a).promise(), a instanceof e && n._propagateFrom(a, 2), n) : o("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
						}var s,
						    u = t("./util"),
						    c = u.isObject,
						    l = t("./es5");"function" == typeof Map && (s = Map);var f = function () {
							function t(t, r) {
								this[e] = t, this[e + n] = r, e++;
							}var e = 0,
							    n = 0;return function (r) {
								n = r.size, e = 0;var o = new Array(2 * r.size);return r.forEach(t, o), o;
							};
						}(),
						    h = function (t) {
							for (var e = new s(), n = t.length / 2 | 0, r = 0; r < n; ++r) {
								var o = t[n + r],
								    i = t[r];e.set(o, i);
							}return e;
						};u.inherits(i, n), i.prototype._init = function () {}, i.prototype._promiseFulfilled = function (t, e) {
							if (this._values[e] = t, ++this._totalResolved >= this._length) {
								var n;if (this._isMap) n = h(this._values);else {
									n = {};for (var r = this.length(), o = 0, i = this.length(); o < i; ++o) n[this._values[o + r]] = this._values[o];
								}return this._resolve(n), !0;
							}return !1;
						}, i.prototype.shouldCopyValues = function () {
							return !1;
						}, i.prototype.getActualLength = function (t) {
							return t >> 1;
						}, e.prototype.props = function () {
							return a(this);
						}, e.props = function (t) {
							return a(t);
						};
					};
				}, { "./es5": 13, "./util": 36 }], 26: [function (t, e, n) {
					"use strict";
					function r(t, e, n, r, o) {
						for (var i = 0; i < o; ++i) n[i + r] = t[i + e], t[i + e] = void 0;
					}function o(t) {
						this._capacity = t, this._length = 0, this._front = 0;
					}o.prototype._willBeOverCapacity = function (t) {
						return this._capacity < t;
					}, o.prototype._pushOne = function (t) {
						var e = this.length();this._checkCapacity(e + 1), this[this._front + e & this._capacity - 1] = t, this._length = e + 1;
					}, o.prototype.push = function (t, e, n) {
						var r = this.length() + 3;if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);var o = this._front + r - 3;this._checkCapacity(r);var i = this._capacity - 1;this[o + 0 & i] = t, this[o + 1 & i] = e, this[o + 2 & i] = n, this._length = r;
					}, o.prototype.shift = function () {
						var t = this._front,
						    e = this[t];return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e;
					}, o.prototype.length = function () {
						return this._length;
					}, o.prototype._checkCapacity = function (t) {
						this._capacity < t && this._resizeTo(this._capacity << 1);
					}, o.prototype._resizeTo = function (t) {
						var e = this._capacity;this._capacity = t, r(this, 0, this, e, this._front + this._length & e - 1);
					}, e.exports = o;
				}, {}], 27: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o) {
						function i(t, i) {
							var u = r(t);if (u instanceof e) return s(u);if (null === (t = a.asArray(t))) return o("expecting an array or an iterable object but got " + a.classString(t));var c = new e(n);void 0 !== i && c._propagateFrom(i, 3);for (var l = c._fulfill, f = c._reject, h = 0, p = t.length; h < p; ++h) {
								var _ = t[h];(void 0 !== _ || h in t) && e.cast(_)._then(l, f, void 0, c, null);
							}return c;
						}var a = t("./util"),
						    s = function (t) {
							return t.then(function (e) {
								return i(e, t);
							});
						};e.race = function (t) {
							return i(t, void 0);
						}, e.prototype.race = function () {
							return i(this, void 0);
						};
					};
				}, { "./util": 36 }], 28: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o, i, a) {
						function s(t, n, r, o) {
							this.constructor$(t);var a = h();this._fn = null === a ? n : p.domainBind(a, n), void 0 !== r && (r = e.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, this._eachValues = o === i ? Array(this._length) : 0 === o ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
						}function u(t, e) {
							this.isFulfilled() ? e._resolve(t) : e._reject(t);
						}function c(t, e, n, o) {
							return "function" != typeof e ? r("expecting a function but got " + p.classString(e)) : new s(t, e, n, o).promise();
						}function l(t) {
							this.accum = t, this.array._gotAccum(t);var n = o(this.value, this.array._promise);return n instanceof e ? (this.array._currentCancellable = n, n._then(f, void 0, void 0, this, void 0)) : f.call(this, n);
						}function f(t) {
							var n = this.array,
							    r = n._promise,
							    o = _(n._fn);r._pushContext();var i;(i = void 0 !== n._eachValues ? o.call(r._boundValue(), t, this.index, this.length) : o.call(r._boundValue(), this.accum, t, this.index, this.length)) instanceof e && (n._currentCancellable = i);var s = r._popContext();return a.checkForgottenReturns(i, s, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), i;
						}var h = e._getDomain,
						    p = t("./util"),
						    _ = p.tryCatch;p.inherits(s, n), s.prototype._gotAccum = function (t) {
							void 0 !== this._eachValues && null !== this._eachValues && t !== i && this._eachValues.push(t);
						}, s.prototype._eachComplete = function (t) {
							return null !== this._eachValues && this._eachValues.push(t), this._eachValues;
						}, s.prototype._init = function () {}, s.prototype._resolveEmptyArray = function () {
							this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue);
						}, s.prototype.shouldCopyValues = function () {
							return !1;
						}, s.prototype._resolve = function (t) {
							this._promise._resolveCallback(t), this._values = null;
						}, s.prototype._resultCancelled = function (t) {
							if (t === this._initialValue) return this._cancel();this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel());
						}, s.prototype._iterate = function (t) {
							this._values = t;var n,
							    r,
							    o = t.length;if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = e.resolve(t[0]), r = 1), this._currentCancellable = n, !n.isRejected()) for (; r < o; ++r) {
								var i = { accum: null, value: t[r], index: r, length: o, array: this };n = n._then(l, void 0, void 0, i, void 0);
							}void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(u, u, void 0, n, this);
						}, e.prototype.reduce = function (t, e) {
							return c(this, t, e, null);
						}, e.reduce = function (t, e, n, r) {
							return c(t, e, n, r);
						};
					};
				}, { "./util": 36 }], 29: [function (t, o, i) {
					"use strict";
					var a,
					    s = t("./util"),
					    u = function () {
						throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
					},
					    c = s.getNativePromise();if (s.isNode && "undefined" == typeof MutationObserver) {
						var l = n.setImmediate,
						    f = e.nextTick;a = s.isRecentNode ? function (t) {
							l.call(n, t);
						} : function (t) {
							f.call(e, t);
						};
					} else if ("function" == typeof c && "function" == typeof c.resolve) {
						var h = c.resolve();a = function (t) {
							h.then(t);
						};
					} else a = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== r ? function (t) {
						r(t);
					} : "undefined" != typeof setTimeout ? function (t) {
						setTimeout(t, 0);
					} : u : function () {
						var t = document.createElement("div"),
						    e = { attributes: !0 },
						    n = !1,
						    r = document.createElement("div");new MutationObserver(function () {
							t.classList.toggle("foo"), n = !1;
						}).observe(r, e);var o = function () {
							n || (n = !0, r.classList.toggle("foo"));
						};return function (n) {
							var r = new MutationObserver(function () {
								r.disconnect(), n();
							});r.observe(t, e), o();
						};
					}();o.exports = a;
				}, { "./util": 36 }], 30: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r) {
						function o(t) {
							this.constructor$(t);
						}var i = e.PromiseInspection;t("./util").inherits(o, n), o.prototype._promiseResolved = function (t, e) {
							return this._values[t] = e, ++this._totalResolved >= this._length && (this._resolve(this._values), !0);
						}, o.prototype._promiseFulfilled = function (t, e) {
							var n = new i();return n._bitField = 33554432, n._settledValueField = t, this._promiseResolved(e, n);
						}, o.prototype._promiseRejected = function (t, e) {
							var n = new i();return n._bitField = 16777216, n._settledValueField = t, this._promiseResolved(e, n);
						}, e.settle = function (t) {
							return r.deprecated(".settle()", ".reflect()"), new o(t).promise();
						}, e.prototype.settle = function () {
							return e.settle(this);
						};
					};
				}, { "./util": 36 }], 31: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r) {
						function o(t) {
							this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
						}function i(t, e) {
							if ((0 | e) !== e || e < 0) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var n = new o(t),
							    i = n.promise();return n.setHowMany(e), n.init(), i;
						}var a = t("./util"),
						    s = t("./errors").RangeError,
						    u = t("./errors").AggregateError,
						    c = a.isArray,
						    l = {};a.inherits(o, n), o.prototype._init = function () {
							if (this._initialized) {
								if (0 === this._howMany) return void this._resolve([]);this._init$(void 0, -5);var t = c(this._values);!this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
							}
						}, o.prototype.init = function () {
							this._initialized = !0, this._init();
						}, o.prototype.setUnwrap = function () {
							this._unwrap = !0;
						}, o.prototype.howMany = function () {
							return this._howMany;
						}, o.prototype.setHowMany = function (t) {
							this._howMany = t;
						}, o.prototype._promiseFulfilled = function (t) {
							return this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0);
						}, o.prototype._promiseRejected = function (t) {
							return this._addRejected(t), this._checkOutcome();
						}, o.prototype._promiseCancelled = function () {
							return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(l), this._checkOutcome());
						}, o.prototype._checkOutcome = function () {
							if (this.howMany() > this._canPossiblyFulfill()) {
								for (var t = new u(), e = this.length(); e < this._values.length; ++e) this._values[e] !== l && t.push(this._values[e]);return t.length > 0 ? this._reject(t) : this._cancel(), !0;
							}return !1;
						}, o.prototype._fulfilled = function () {
							return this._totalResolved;
						}, o.prototype._rejected = function () {
							return this._values.length - this.length();
						}, o.prototype._addRejected = function (t) {
							this._values.push(t);
						}, o.prototype._addFulfilled = function (t) {
							this._values[this._totalResolved++] = t;
						}, o.prototype._canPossiblyFulfill = function () {
							return this.length() - this._rejected();
						}, o.prototype._getRangeError = function (t) {
							var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";return new s(e);
						}, o.prototype._resolveEmptyArray = function () {
							this._reject(this._getRangeError(0));
						}, e.some = function (t, e) {
							return i(t, e);
						}, e.prototype.some = function (t) {
							return i(this, t);
						}, e._SomePromiseArray = o;
					};
				}, { "./errors": 12, "./util": 36 }], 32: [function (t, e, n) {
					"use strict";
					e.exports = function (t) {
						function e(t) {
							void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0);
						}e.prototype._settledValue = function () {
							return this._settledValueField;
						};var n = e.prototype.value = function () {
							if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue();
						},
						    r = e.prototype.error = e.prototype.reason = function () {
							if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue();
						},
						    o = e.prototype.isFulfilled = function () {
							return 0 != (33554432 & this._bitField);
						},
						    i = e.prototype.isRejected = function () {
							return 0 != (16777216 & this._bitField);
						},
						    a = e.prototype.isPending = function () {
							return 0 == (50397184 & this._bitField);
						},
						    s = e.prototype.isResolved = function () {
							return 0 != (50331648 & this._bitField);
						};e.prototype.isCancelled = function () {
							return 0 != (8454144 & this._bitField);
						}, t.prototype.__isCancelled = function () {
							return 65536 == (65536 & this._bitField);
						}, t.prototype._isCancelled = function () {
							return this._target().__isCancelled();
						}, t.prototype.isCancelled = function () {
							return 0 != (8454144 & this._target()._bitField);
						}, t.prototype.isPending = function () {
							return a.call(this._target());
						}, t.prototype.isRejected = function () {
							return i.call(this._target());
						}, t.prototype.isFulfilled = function () {
							return o.call(this._target());
						}, t.prototype.isResolved = function () {
							return s.call(this._target());
						}, t.prototype.value = function () {
							return n.call(this._target());
						}, t.prototype.reason = function () {
							var t = this._target();return t._unsetRejectionIsUnhandled(), r.call(t);
						}, t.prototype._value = function () {
							return this._settledValue();
						}, t.prototype._reason = function () {
							return this._unsetRejectionIsUnhandled(), this._settledValue();
						}, t.PromiseInspection = e;
					};
				}, {}], 33: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n) {
						function r(t, r) {
							if (l(t)) {
								if (t instanceof e) return t;var o = i(t);if (o === c) {
									r && r._pushContext();var u = e.reject(o.e);return r && r._popContext(), u;
								}if ("function" == typeof o) {
									if (a(t)) {
										var u = new e(n);return t._then(u._fulfill, u._reject, void 0, u, null), u;
									}return s(t, o, r);
								}
							}return t;
						}function o(t) {
							return t.then;
						}function i(t) {
							try {
								return o(t);
							} catch (t) {
								return c.e = t, c;
							}
						}function a(t) {
							try {
								return f.call(t, "_promise0");
							} catch (t) {
								return !1;
							}
						}function s(t, r, o) {
							function i(t) {
								s && (s._resolveCallback(t), s = null);
							}function a(t) {
								s && (s._rejectCallback(t, f, !0), s = null);
							}var s = new e(n),
							    l = s;o && o._pushContext(), s._captureStackTrace(), o && o._popContext();var f = !0,
							    h = u.tryCatch(r).call(t, i, a);return f = !1, s && h === c && (s._rejectCallback(h.e, !0, !0), s = null), l;
						}var u = t("./util"),
						    c = u.errorObj,
						    l = u.isObject,
						    f = {}.hasOwnProperty;return r;
					};
				}, { "./util": 36 }], 34: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r) {
						function o(t) {
							this.handle = t;
						}function i(t) {
							return clearTimeout(this.handle), t;
						}function a(t) {
							throw clearTimeout(this.handle), t;
						}var s = t("./util"),
						    u = e.TimeoutError;o.prototype._resultCancelled = function () {
							clearTimeout(this.handle);
						};var c = function (t) {
							return l(+this).thenReturn(t);
						},
						    l = e.delay = function (t, i) {
							var a, s;return void 0 !== i ? (a = e.resolve(i)._then(c, null, null, t, void 0), r.cancellation() && i instanceof e && a._setOnCancel(i)) : (a = new e(n), s = setTimeout(function () {
								a._fulfill();
							}, +t), r.cancellation() && a._setOnCancel(new o(s)), a._captureStackTrace()), a._setAsyncGuaranteed(), a;
						};e.prototype.delay = function (t) {
							return l(t, this);
						};var f = function (t, e, n) {
							var r;r = "string" != typeof e ? e instanceof Error ? e : new u("operation timed out") : new u(e), s.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._reject(r), null != n && n.cancel();
						};e.prototype.timeout = function (t, e) {
							t = +t;var n,
							    s,
							    u = new o(setTimeout(function () {
								n.isPending() && f(n, e, s);
							}, t));return r.cancellation() ? (s = this.then(), n = s._then(i, a, void 0, u, void 0), n._setOnCancel(u)) : n = this._then(i, a, void 0, u, void 0), n;
						};
					};
				}, { "./util": 36 }], 35: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, o, i, a) {
						function s(t) {
							setTimeout(function () {
								throw t;
							}, 0);
						}function u(t) {
							var e = r(t);return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e;
						}function c(t, n) {
							function o() {
								if (a >= c) return l._fulfill();var i = u(t[a++]);if (i instanceof e && i._isDisposable()) {
									try {
										i = r(i._getDisposer().tryDispose(n), t.promise);
									} catch (t) {
										return s(t);
									}if (i instanceof e) return i._then(o, s, null, null, null);
								}o();
							}var a = 0,
							    c = t.length,
							    l = new e(i);return o(), l;
						}function l(t, e, n) {
							this._data = t, this._promise = e, this._context = n;
						}function f(t, e, n) {
							this.constructor$(t, e, n);
						}function h(t) {
							return l.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t;
						}function p(t) {
							this.length = t, this.promise = null, this[t - 1] = null;
						}var _ = t("./util"),
						    v = t("./errors").TypeError,
						    d = t("./util").inherits,
						    y = _.errorObj,
						    m = _.tryCatch,
						    g = {};l.prototype.data = function () {
							return this._data;
						}, l.prototype.promise = function () {
							return this._promise;
						}, l.prototype.resource = function () {
							return this.promise().isFulfilled() ? this.promise().value() : g;
						}, l.prototype.tryDispose = function (t) {
							var e = this.resource(),
							    n = this._context;void 0 !== n && n._pushContext();var r = e !== g ? this.doDispose(e, t) : null;return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r;
						}, l.isDisposer = function (t) {
							return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose;
						}, d(f, l), f.prototype.doDispose = function (t, e) {
							return this.data().call(t, t, e);
						}, p.prototype._resultCancelled = function () {
							for (var t = this.length, n = 0; n < t; ++n) {
								var r = this[n];r instanceof e && r.cancel();
							}
						}, e.using = function () {
							var t = arguments.length;if (t < 2) return n("you must pass at least 2 arguments to Promise.using");var o = arguments[t - 1];if ("function" != typeof o) return n("expecting a function but got " + _.classString(o));var i,
							    s = !0;2 === t && Array.isArray(arguments[0]) ? (i = arguments[0], t = i.length, s = !1) : (i = arguments, t--);for (var u = new p(t), f = 0; f < t; ++f) {
								var v = i[f];if (l.isDisposer(v)) {
									var d = v;v = v.promise(), v._setDisposable(d);
								} else {
									var g = r(v);g instanceof e && (v = g._then(h, null, null, { resources: u, index: f }, void 0));
								}u[f] = v;
							}for (var b = new Array(u.length), f = 0; f < b.length; ++f) b[f] = e.resolve(u[f]).reflect();var w = e.all(b).then(function (t) {
								for (var e = 0; e < t.length; ++e) {
									var n = t[e];if (n.isRejected()) return y.e = n.error(), y;if (!n.isFulfilled()) return void w.cancel();t[e] = n.value();
								}j._pushContext(), o = m(o);var r = s ? o.apply(void 0, t) : o(t),
								    i = j._popContext();return a.checkForgottenReturns(r, i, "Promise.using", j), r;
							}),
							    j = w.lastly(function () {
								var t = new e.PromiseInspection(w);return c(u, t);
							});return u.promise = j, j._setOnCancel(u), j;
						}, e.prototype._setDisposable = function (t) {
							this._bitField = 131072 | this._bitField, this._disposer = t;
						}, e.prototype._isDisposable = function () {
							return (131072 & this._bitField) > 0;
						}, e.prototype._getDisposer = function () {
							return this._disposer;
						}, e.prototype._unsetDisposable = function () {
							this._bitField = -131073 & this._bitField, this._disposer = void 0;
						}, e.prototype.disposer = function (t) {
							if ("function" == typeof t) return new f(t, this, o());throw new v();
						};
					};
				}, { "./errors": 12, "./util": 36 }], 36: [function (t, r, o) {
					"use strict";
					function i() {
						try {
							var t = A;return A = null, t.apply(this, arguments);
						} catch (t) {
							return S.e = t, S;
						}
					}function a(t) {
						return A = t, i;
					}function s(t) {
						return null == t || !0 === t || !1 === t || "string" == typeof t || "number" == typeof t;
					}function u(t) {
						return "function" == typeof t || "object" == typeof t && null !== t;
					}function c(t) {
						return s(t) ? new Error(m(t)) : t;
					}function l(t, e) {
						var n,
						    r = t.length,
						    o = new Array(r + 1);for (n = 0; n < r; ++n) o[n] = t[n];return o[n] = e, o;
					}function f(t, e, n) {
						if (!F.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;var r = Object.getOwnPropertyDescriptor(t, e);return null != r ? null == r.get && null == r.set ? r.value : n : void 0;
					}function h(t, e, n) {
						if (s(t)) return t;var r = { value: n, configurable: !0, enumerable: !1, writable: !0 };return F.defineProperty(t, e, r), t;
					}function p(t) {
						throw t;
					}function _(t) {
						try {
							if ("function" == typeof t) {
								var e = F.names(t.prototype),
								    n = F.isES5 && e.length > 1,
								    r = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
								    o = D.test(t + "") && F.names(t).length > 0;if (n || r || o) return !0;
							}return !1;
						} catch (t) {
							return !1;
						}
					}function v(t) {
						function e() {}e.prototype = t;for (var n = 8; n--;) new e();return t;
					}function d(t) {
						return M.test(t);
					}function y(t, e, n) {
						for (var r = new Array(t), o = 0; o < t; ++o) r[o] = e + o + n;return r;
					}function m(t) {
						try {
							return t + "";
						} catch (t) {
							return "[no string representation]";
						}
					}function g(t) {
						return t instanceof Error || null !== t && "object" == typeof t && "string" == typeof t.message && "string" == typeof t.name;
					}function b(t) {
						try {
							h(t, "isOperational", !0);
						} catch (t) {}
					}function w(t) {
						return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === t.isOperational);
					}function j(t) {
						return g(t) && F.propertyIsWritable(t, "stack");
					}function x(t) {
						return {}.toString.call(t);
					}function C(t, e, n) {
						for (var r = F.names(t), o = 0; o < r.length; ++o) {
							var i = r[o];if (n(i)) try {
								F.defineProperty(e, i, F.getDescriptor(t, i));
							} catch (t) {}
						}
					}function E(t) {
						return H ? e.env[t] : void 0;
					}function k() {
						if ("function" == typeof Promise) try {
							var t = new Promise(function () {});if ("[object Promise]" === {}.toString.call(t)) return Promise;
						} catch (t) {}
					}function O(t, e) {
						return t.bind(e);
					}var F = t("./es5"),
					    T = "undefined" == typeof navigator,
					    S = { e: {} },
					    A,
					    P = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : void 0 !== this ? this : null,
					    R = function (t, e) {
						function n() {
							this.constructor = t, this.constructor$ = e;for (var n in e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n]);
						}var r = {}.hasOwnProperty;return n.prototype = e.prototype, t.prototype = new n(), t.prototype;
					},
					    I = function () {
						var t = [Array.prototype, Object.prototype, Function.prototype],
						    e = function (e) {
							for (var n = 0; n < t.length; ++n) if (t[n] === e) return !0;return !1;
						};if (F.isES5) {
							var n = Object.getOwnPropertyNames;return function (t) {
								for (var r = [], o = Object.create(null); null != t && !e(t);) {
									var i;try {
										i = n(t);
									} catch (t) {
										return r;
									}for (var a = 0; a < i.length; ++a) {
										var s = i[a];if (!o[s]) {
											o[s] = !0;var u = Object.getOwnPropertyDescriptor(t, s);null != u && null == u.get && null == u.set && r.push(s);
										}
									}t = F.getPrototypeOf(t);
								}return r;
							};
						}var r = {}.hasOwnProperty;return function (n) {
							if (e(n)) return [];var o = [];t: for (var i in n) if (r.call(n, i)) o.push(i);else {
								for (var a = 0; a < t.length; ++a) if (r.call(t[a], i)) continue t;o.push(i);
							}return o;
						};
					}(),
					    D = /this\s*\.\s*\S+\s*=/,
					    M = /^[a-z$_][a-z$_0-9]*$/i,
					    L = function () {
						return "stack" in new Error() ? function (t) {
							return j(t) ? t : new Error(m(t));
						} : function (t) {
							if (j(t)) return t;try {
								throw new Error(m(t));
							} catch (t) {
								return t;
							}
						};
					}(),
					    V = function (t) {
						return F.isArray(t) ? t : null;
					};if ("undefined" != typeof Symbol && Symbol.iterator) {
						var U = "function" == typeof Array.from ? function (t) {
							return Array.from(t);
						} : function (t) {
							for (var e, n = [], r = t[Symbol.iterator](); !(e = r.next()).done;) n.push(e.value);return n;
						};V = function (t) {
							return F.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? U(t) : null;
						};
					}var N = void 0 !== e && "[object process]" === x(e).toLowerCase(),
					    H = void 0 !== e && void 0 !== e.env,
					    B = { isClass: _, isIdentifier: d, inheritedDataKeys: I, getDataPropertyOrDefault: f, thrower: p, isArray: F.isArray, asArray: V, notEnumerableProp: h, isPrimitive: s, isObject: u, isError: g, canEvaluate: T, errorObj: S, tryCatch: a, inherits: R, withAppended: l, maybeWrapAsError: c, toFastProperties: v, filledRange: y, toString: m, canAttachTrace: j, ensureErrorObject: L, originatesFromRejection: w, markAsOriginatingFromRejection: b, classString: x, copyDescriptors: C, hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes, isNode: N, hasEnvVariables: H, env: E, global: P, getNativePromise: k, domainBind: O };B.isRecentNode = B.isNode && function () {
						var t = e.versions.node.split(".").map(Number);return 0 === t[0] && t[1] > 10 || t[0] > 0;
					}(), B.isNode && B.toFastProperties(e);try {
						throw new Error();
					} catch (t) {
						B.lastLineError = t;
					}r.exports = B;
				}, { "./es5": 13 }] }, {}, [4])(4);
		}), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);
	}).call(e, n(40), n(14), n(74).setImmediate);
}, function (t, e) {
	var n;n = function () {
		return this;
	}();try {
		n = n || Function("return this")() || (0, eval)("this");
	} catch (t) {
		"object" == typeof window && (n = window);
	}t.exports = n;
}, function (t, e) {
	t.exports = function (t) {
		return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function () {
				return t.l;
			} }), Object.defineProperty(t, "id", { enumerable: !0, get: function () {
				return t.i;
			} }), t.webpackPolyfill = 1), t;
	};
}, function (t, e, n) {
	function r(t) {
		var e = -1,
		    n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
			var r = t[e];this.set(r[0], r[1]);
		}
	}var o = n(95),
	    i = n(96),
	    a = n(97),
	    s = n(98),
	    u = n(99);r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		for (var n = t.length; n--;) if (o(t[n][0], e)) return n;return -1;
	}var o = n(9);t.exports = r;
}, function (t, e, n) {
	var r = n(3),
	    o = r(Object, "create");t.exports = o;
}, function (t, e, n) {
	function r(t, e) {
		var n = t.__data__;return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
	}var o = n(117);t.exports = r;
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = n(10),
	    o = n(76),
	    i = function () {
		function t(t, e) {
			this._rgb = t, this._population = e;
		}return t.applyFilter = function (t, e) {
			return "function" == typeof e ? o(t, function (t) {
				var n = t.r,
				    r = t.g,
				    o = t.b;return e(n, r, o, 255);
			}) : t;
		}, Object.defineProperty(t.prototype, "r", { get: function () {
				return this._rgb[0];
			}, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "g", { get: function () {
				return this._rgb[1];
			}, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "b", { get: function () {
				return this._rgb[2];
			}, enumerable: !0, configurable: !0 }), t.prototype.getRgb = function () {
			return this._rgb;
		}, t.prototype.getHsl = function () {
			if (!this._hsl) {
				var t = this._rgb,
				    e = t[0],
				    n = t[1],
				    o = t[2];this._hsl = r.rgbToHsl(e, n, o);
			}return this._hsl;
		}, t.prototype.getPopulation = function () {
			return this._population;
		}, t.prototype.getHex = function () {
			if (!this._hex) {
				var t = this._rgb,
				    e = t[0],
				    n = t[1],
				    o = t[2];this._hex = r.rgbToHex(e, n, o);
			}return this._hex;
		}, t.prototype.getYiq = function () {
			if (!this._yiq) {
				var t = this._rgb;this._yiq = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
			}return this._yiq;
		}, t.prototype.getTitleTextColor = function () {
			return this.getYiq() < 200 ? "#fff" : "#000";
		}, t.prototype.getBodyTextColor = function () {
			return this.getYiq() < 150 ? "#fff" : "#000";
		}, t;
	}();e.Swatch = i;
}, function (t, e, n) {
	function r(t) {
		return "symbol" == typeof t || i(t) && o(t) == a;
	}var o = n(5),
	    i = n(7),
	    a = "[object Symbol]";t.exports = r;
}, function (t, e, n) {
	(function (t) {
		var r = n(1),
		    o = n(86),
		    i = "object" == typeof e && e && !e.nodeType && e,
		    a = i && "object" == typeof t && t && !t.nodeType && t,
		    s = a && a.exports === i,
		    u = s ? r.Buffer : void 0,
		    c = u ? u.isBuffer : void 0,
		    l = c || o;t.exports = l;
	}).call(e, n(15)(t));
}, function (t, e) {
	function n(t, e) {
		return !!(e = null == e ? r : e) && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e;
	}var r = 9007199254740991,
	    o = /^(?:0|[1-9]\d*)$/;t.exports = n;
}, function (t, e) {
	function n(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r;
	}var r = 9007199254740991;t.exports = n;
}, function (t, e) {
	function n(t) {
		var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || r);
	}var r = Object.prototype;t.exports = n;
}, function (t, e, n) {
	function r(t) {
		var e = this.__data__ = new o(t);this.size = e.size;
	}var o = n(16),
	    i = n(100),
	    a = n(101),
	    s = n(102),
	    u = n(103),
	    c = n(104);r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = s, r.prototype.has = u, r.prototype.set = c, t.exports = r;
}, function (t, e, n) {
	var r = n(3),
	    o = n(1),
	    i = r(o, "Map");t.exports = i;
}, function (t, e, n) {
	function r(t) {
		var e = -1,
		    n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
			var r = t[e];this.set(r[0], r[1]);
		}
	}var o = n(109),
	    i = n(116),
	    a = n(118),
	    s = n(119),
	    u = n(120);r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r;
}, function (t, e, n) {
	var r = n(41),
	    o = n(56),
	    i = Object.prototype,
	    a = i.propertyIsEnumerable,
	    s = Object.getOwnPropertySymbols,
	    u = s ? function (t) {
		return null == t ? [] : (t = Object(t), r(s(t), function (e) {
			return a.call(t, e);
		}));
	} : o;t.exports = u;
}, function (t, e, n) {
	function r(t, e) {
		return o(t) ? t : i(t, e) ? [t] : a(s(t));
	}var o = n(0),
	    i = n(31),
	    a = n(136),
	    s = n(139);t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		if (o(t)) return !1;var n = typeof t;return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || s.test(t) || !a.test(t) || null != e && t in Object(e);
	}var o = n(0),
	    i = n(21),
	    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    s = /^\w*$/;t.exports = r;
}, function (t, e) {
	function n(t) {
		return t;
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		return a(t) ? o(t, !0) : i(t);
	}var o = n(42),
	    i = n(153),
	    a = n(11);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		var e = new t.constructor(t.byteLength);return new o(e).set(new o(t)), e;
	}var o = n(51);t.exports = r;
}, function (t, e, n) {
	var r = n(83),
	    o = n(7),
	    i = Object.prototype,
	    a = i.hasOwnProperty,
	    s = i.propertyIsEnumerable,
	    u = r(function () {
		return arguments;
	}()) ? r : function (t) {
		return o(t) && a.call(t, "callee") && !s.call(t, "callee");
	};t.exports = u;
}, function (t, e) {
	function n(t, e) {
		for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];return t;
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e) {
		e = o(e, t);for (var n = 0, r = e.length; null != t && n < r;) t = t[i(e[n++])];return n && n == r ? t : void 0;
	}var o = n(30),
	    i = n(12);t.exports = r;
}, function (t, e, n) {
	var r = n(45),
	    o = r(Object.getPrototypeOf, Object);t.exports = o;
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = n(20),
	    o = n(13),
	    i = n(60),
	    a = n(156),
	    s = n(10),
	    u = n(177),
	    c = n(181),
	    l = n(183),
	    f = function () {
		function t(e, n) {
			this._src = e, this.opts = i({}, n, t.DefaultOpts), this.opts.combinedFilter = l.combineFilters(this.opts.filters);
		}return t.from = function (t) {
			return new a.default(t);
		}, t.prototype._process = function (t, e) {
			var n = e.quantizer,
			    i = e.generator;return t.scaleDown(e), t.applyFilter(e.combinedFilter).then(function (t) {
				return n(t.data, e);
			}).then(function (t) {
				return r.Swatch.applyFilter(t, e.combinedFilter);
			}).then(function (t) {
				return o.resolve(i(t));
			});
		}, t.prototype.palette = function () {
			return this.swatches();
		}, t.prototype.swatches = function () {
			return this._palette;
		}, t.prototype.getPalette = function (t) {
			var e = this,
			    n = new this.opts.ImageClass();return n.load(this._src).then(function (t) {
				return e._process(t, e.opts);
			}).tap(function (t) {
				return e._palette = t;
			}).finally(function () {
				return n.remove();
			}).asCallback(t);
		}, t.Builder = a.default, t.Quantizer = u, t.Generator = c, t.Filter = l, t.Util = s, t.DefaultOpts = { colorCount: 64, quality: 5, generator: c.Default, ImageClass: null, quantizer: u.MMCQ, filters: [l.Default] }, t;
	}();e.default = f;
}, function (t, e) {
	function n() {
		throw new Error("setTimeout has not been defined");
	}function r() {
		throw new Error("clearTimeout has not been defined");
	}function o(t) {
		if (l === setTimeout) return setTimeout(t, 0);if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);try {
			return l(t, 0);
		} catch (e) {
			try {
				return l.call(null, t, 0);
			} catch (e) {
				return l.call(this, t, 0);
			}
		}
	}function i(t) {
		if (f === clearTimeout) return clearTimeout(t);if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);try {
			return f(t);
		} catch (e) {
			try {
				return f.call(null, t);
			} catch (e) {
				return f.call(this, t);
			}
		}
	}function a() {
		v && p && (v = !1, p.length ? _ = p.concat(_) : d = -1, _.length && s());
	}function s() {
		if (!v) {
			var t = o(a);v = !0;for (var e = _.length; e;) {
				for (p = _, _ = []; ++d < e;) p && p[d].run();d = -1, e = _.length;
			}p = null, v = !1, i(t);
		}
	}function u(t, e) {
		this.fun = t, this.array = e;
	}function c() {}var l,
	    f,
	    h = t.exports = {};!function () {
		try {
			l = "function" == typeof setTimeout ? setTimeout : n;
		} catch (t) {
			l = n;
		}try {
			f = "function" == typeof clearTimeout ? clearTimeout : r;
		} catch (t) {
			f = r;
		}
	}();var p,
	    _ = [],
	    v = !1,
	    d = -1;h.nextTick = function (t) {
		var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];_.push(new u(t, e)), 1 !== _.length || v || o(s);
	}, u.prototype.run = function () {
		this.fun.apply(null, this.array);
	}, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, h.listeners = function (t) {
		return [];
	}, h.binding = function (t) {
		throw new Error("process.binding is not supported");
	}, h.cwd = function () {
		return "/";
	}, h.chdir = function (t) {
		throw new Error("process.chdir is not supported");
	}, h.umask = function () {
		return 0;
	};
}, function (t, e) {
	function n(t, e) {
		for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
			var a = t[n];e(a, n, t) && (i[o++] = a);
		}return i;
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e) {
		var n = a(t),
		    r = !n && i(t),
		    l = !n && !r && s(t),
		    h = !n && !r && !l && c(t),
		    p = n || r || l || h,
		    _ = p ? o(t.length, String) : [],
		    v = _.length;for (var d in t) !e && !f.call(t, d) || p && ("length" == d || l && ("offset" == d || "parent" == d) || h && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || u(d, v)) || _.push(d);return _;
	}var o = n(82),
	    i = n(35),
	    a = n(0),
	    s = n(22),
	    u = n(23),
	    c = n(44),
	    l = Object.prototype,
	    f = l.hasOwnProperty;t.exports = r;
}, function (t, e, n) {
	(function (e) {
		var n = "object" == typeof e && e && e.Object === Object && e;t.exports = n;
	}).call(e, n(14));
}, function (t, e, n) {
	var r = n(87),
	    o = n(88),
	    i = n(89),
	    a = i && i.isTypedArray,
	    s = a ? o(a) : r;t.exports = s;
}, function (t, e) {
	function n(t, e) {
		return function (n) {
			return t(e(n));
		};
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		if (!i(t)) return !1;var e = o(t);return e == s || e == u || e == a || e == c;
	}var o = n(5),
	    i = n(2),
	    a = "[object AsyncFunction]",
	    s = "[object Function]",
	    u = "[object GeneratorFunction]",
	    c = "[object Proxy]";t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? s(t) ? i(t[0], t[1]) : o(t) : u(t);
	}var o = n(93),
	    i = n(134),
	    a = n(32),
	    s = n(0),
	    u = n(144);t.exports = r;
}, function (t, e) {
	function n(t) {
		if (null != t) {
			try {
				return o.call(t);
			} catch (t) {}try {
				return t + "";
			} catch (t) {}
		}return "";
	}var r = Function.prototype,
	    o = r.toString;t.exports = n;
}, function (t, e, n) {
	function r(t, e, n, a, s) {
		return t === e || (null == t || null == e || !i(t) && !i(e) ? t !== t && e !== e : o(t, e, n, a, r, s));
	}var o = n(121),
	    i = n(7);t.exports = r;
}, function (t, e, n) {
	function r(t, e, n, r, c, l) {
		var f = n & s,
		    h = t.length,
		    p = e.length;if (h != p && !(f && p > h)) return !1;var _ = l.get(t);if (_ && l.get(e)) return _ == e;var v = -1,
		    d = !0,
		    y = n & u ? new o() : void 0;for (l.set(t, e), l.set(e, t); ++v < h;) {
			var m = t[v],
			    g = e[v];if (r) var b = f ? r(g, m, v, e, t, l) : r(m, g, v, t, e, l);if (void 0 !== b) {
				if (b) continue;d = !1;break;
			}if (y) {
				if (!i(e, function (t, e) {
					if (!a(y, e) && (m === t || c(m, t, n, r, l))) return y.push(e);
				})) {
					d = !1;break;
				}
			} else if (m !== g && !c(m, g, n, r, l)) {
				d = !1;break;
			}
		}return l.delete(t), l.delete(e), d;
	}var o = n(122),
	    i = n(125),
	    a = n(126),
	    s = 1,
	    u = 2;t.exports = r;
}, function (t, e, n) {
	var r = n(1),
	    o = r.Uint8Array;t.exports = o;
}, function (t, e) {
	function n(t) {
		var e = -1,
		    n = Array(t.size);return t.forEach(function (t, r) {
			n[++e] = [r, t];
		}), n;
	}t.exports = n;
}, function (t, e) {
	function n(t) {
		var e = -1,
		    n = Array(t.size);return t.forEach(function (t) {
			n[++e] = t;
		}), n;
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		return o(t, a, i);
	}var o = n(55),
	    i = n(29),
	    a = n(4);t.exports = r;
}, function (t, e, n) {
	function r(t, e, n) {
		var r = e(t);return i(t) ? r : o(r, n(t));
	}var o = n(36),
	    i = n(0);t.exports = r;
}, function (t, e) {
	function n() {
		return [];
	}t.exports = n;
}, function (t, e, n) {
	var r = n(129),
	    o = n(27),
	    i = n(130),
	    a = n(131),
	    s = n(132),
	    u = n(5),
	    c = n(48),
	    l = c(r),
	    f = c(o),
	    h = c(i),
	    p = c(a),
	    _ = c(s),
	    v = u;(r && "[object DataView]" != v(new r(new ArrayBuffer(1))) || o && "[object Map]" != v(new o()) || i && "[object Promise]" != v(i.resolve()) || a && "[object Set]" != v(new a()) || s && "[object WeakMap]" != v(new s())) && (v = function (t) {
		var e = u(t),
		    n = "[object Object]" == e ? t.constructor : void 0,
		    r = n ? c(n) : "";if (r) switch (r) {case l:
				return "[object DataView]";case f:
				return "[object Map]";case h:
				return "[object Promise]";case p:
				return "[object Set]";case _:
				return "[object WeakMap]";}return e;
	}), t.exports = v;
}, function (t, e, n) {
	function r(t) {
		return t === t && !o(t);
	}var o = n(2);t.exports = r;
}, function (t, e) {
	function n(t, e) {
		return function (n) {
			return null != n && n[t] === e && (void 0 !== e || t in Object(n));
		};
	}t.exports = n;
}, function (t, e, n) {
	var r = n(61),
	    o = n(147),
	    i = n(65),
	    a = n(155),
	    s = i(function (t) {
		return t.push(void 0, a), r(o, void 0, t);
	});t.exports = s;
}, function (t, e) {
	function n(t, e, n) {
		switch (n.length) {case 0:
				return t.call(e);case 1:
				return t.call(e, n[0]);case 2:
				return t.call(e, n[0], n[1]);case 3:
				return t.call(e, n[0], n[1], n[2]);}return t.apply(e, n);
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e, n) {
		var r = t[e];s.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n);
	}var o = n(63),
	    i = n(9),
	    a = Object.prototype,
	    s = a.hasOwnProperty;t.exports = r;
}, function (t, e, n) {
	function r(t, e, n) {
		"__proto__" == e && o ? o(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n;
	}var o = n(64);t.exports = r;
}, function (t, e, n) {
	var r = n(3),
	    o = function () {
		try {
			var t = r(Object, "defineProperty");return t({}, "", {}), t;
		} catch (t) {}
	}();t.exports = o;
}, function (t, e, n) {
	function r(t, e) {
		return a(i(t, e, o), t + "");
	}var o = n(32),
	    i = n(69),
	    a = n(70);t.exports = r;
}, function (t, e, n) {
	var r = n(36),
	    o = n(38),
	    i = n(29),
	    a = n(56),
	    s = Object.getOwnPropertySymbols,
	    u = s ? function (t) {
		for (var e = []; t;) r(e, i(t)), t = o(t);return e;
	} : a;t.exports = u;
}, function (t, e) {
	function n(t, e, n, r) {
		var o = -1,
		    i = null == t ? 0 : t.length;for (r && i && (n = t[++o]); ++o < i;) n = e(n, t[o], o, t);return n;
	}t.exports = n;
}, function (t, e) {
	function n(t, e) {
		for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);return o;
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e, n) {
		return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
			for (var r = arguments, a = -1, s = i(r.length - e, 0), u = Array(s); ++a < s;) u[a] = r[e + a];a = -1;for (var c = Array(e + 1); ++a < e;) c[a] = r[a];return c[e] = n(u), o(t, this, c);
		};
	}var o = n(61),
	    i = Math.max;t.exports = r;
}, function (t, e, n) {
	var r = n(149),
	    o = n(151),
	    i = o(r);t.exports = i;
}, function (t, e, n) {
	function r(t, e, n, A, P, R) {
		var I,
		    D = e & x,
		    M = e & C,
		    L = e & E;if (n && (I = P ? n(t, A, P, R) : n(t)), void 0 !== I) return I;if (!w(t)) return t;var V = g(t);if (V) {
			if (I = d(t), !D) return l(t, I);
		} else {
			var U = v(t),
			    N = U == O || U == F;if (b(t)) return c(t, D);if (U == T || U == k || N && !P) {
				if (I = M || N ? {} : m(t), !D) return M ? h(t, u(I, t)) : f(t, s(I, t));
			} else {
				if (!S[U]) return P ? t : {};I = y(t, U, r, D);
			}
		}R || (R = new o());var H = R.get(t);if (H) return H;R.set(t, I);var B = L ? M ? _ : p : M ? keysIn : j,
		    q = V ? void 0 : B(t);return i(q || t, function (o, i) {
			q && (i = o, o = t[i]), a(I, i, r(o, e, n, i, t, R));
		}), I;
	}var o = n(26),
	    i = n(158),
	    a = n(62),
	    s = n(159),
	    u = n(160),
	    c = n(161),
	    l = n(162),
	    f = n(163),
	    h = n(164),
	    p = n(54),
	    _ = n(72),
	    v = n(57),
	    d = n(165),
	    y = n(166),
	    m = n(175),
	    g = n(0),
	    b = n(22),
	    w = n(2),
	    j = n(4),
	    x = 1,
	    C = 2,
	    E = 4,
	    k = "[object Arguments]",
	    O = "[object Function]",
	    F = "[object GeneratorFunction]",
	    T = "[object Object]",
	    S = {};S[k] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object DataView]"] = S["[object Boolean]"] = S["[object Date]"] = S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Map]"] = S["[object Number]"] = S[T] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object Symbol]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S["[object Error]"] = S[O] = S["[object WeakMap]"] = !1, t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return o(t, a, i);
	}var o = n(55),
	    i = n(66),
	    a = n(33);t.exports = r;
}, function (t, e, n) {
	"use strict";
	var r = n(39),
	    o = n(185);r.default.DefaultOpts.ImageClass = o.default, t.exports = r.default;
}, function (t, e, n) {
	function r(t, e) {
		this._id = t, this._clearFn = e;
	}var o = Function.prototype.apply;e.setTimeout = function () {
		return new r(o.call(setTimeout, window, arguments), clearTimeout);
	}, e.setInterval = function () {
		return new r(o.call(setInterval, window, arguments), clearInterval);
	}, e.clearTimeout = e.clearInterval = function (t) {
		t && t.close();
	}, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
		this._clearFn.call(window, this._id);
	}, e.enroll = function (t, e) {
		clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
	}, e.unenroll = function (t) {
		clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
	}, e._unrefActive = e.active = function (t) {
		clearTimeout(t._idleTimeoutId);var e = t._idleTimeout;e >= 0 && (t._idleTimeoutId = setTimeout(function () {
			t._onTimeout && t._onTimeout();
		}, e));
	}, n(75), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
}, function (t, e, n) {
	(function (t, e) {
		!function (t, n) {
			"use strict";
			function r(t) {
				"function" != typeof t && (t = new Function("" + t));for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];var r = { callback: t, args: e };return c[u] = r, s(u), u++;
			}function o(t) {
				delete c[t];
			}function i(t) {
				var e = t.callback,
				    r = t.args;switch (r.length) {case 0:
						e();break;case 1:
						e(r[0]);break;case 2:
						e(r[0], r[1]);break;case 3:
						e(r[0], r[1], r[2]);break;default:
						e.apply(n, r);}
			}function a(t) {
				if (l) setTimeout(a, 0, t);else {
					var e = c[t];if (e) {
						l = !0;try {
							i(e);
						} finally {
							o(t), l = !1;
						}
					}
				}
			}if (!t.setImmediate) {
				var s,
				    u = 1,
				    c = {},
				    l = !1,
				    f = t.document,
				    h = Object.getPrototypeOf && Object.getPrototypeOf(t);h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? function () {
					s = function (t) {
						e.nextTick(function () {
							a(t);
						});
					};
				}() : function () {
					if (t.postMessage && !t.importScripts) {
						var e = !0,
						    n = t.onmessage;return t.onmessage = function () {
							e = !1;
						}, t.postMessage("", "*"), t.onmessage = n, e;
					}
				}() ? function () {
					var e = "setImmediate$" + Math.random() + "$",
					    n = function (n) {
						n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length));
					};t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function (n) {
						t.postMessage(e + n, "*");
					};
				}() : t.MessageChannel ? function () {
					var t = new MessageChannel();t.port1.onmessage = function (t) {
						a(t.data);
					}, s = function (e) {
						t.port2.postMessage(e);
					};
				}() : f && "onreadystatechange" in f.createElement("script") ? function () {
					var t = f.documentElement;s = function (e) {
						var n = f.createElement("script");n.onreadystatechange = function () {
							a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
						}, t.appendChild(n);
					};
				}() : function () {
					s = function (t) {
						setTimeout(a, 0, t);
					};
				}(), h.setImmediate = r, h.clearImmediate = o;
			}
		}("undefined" == typeof self ? void 0 === t ? this : t : self);
	}).call(e, n(14), n(40));
}, function (t, e, n) {
	function r(t, e) {
		return (s(t) ? o : i)(t, a(e, 3));
	}var o = n(41),
	    i = n(77),
	    a = n(47),
	    s = n(0);t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		var n = [];return o(t, function (t, r, o) {
			e(t, r, o) && n.push(t);
		}), n;
	}var o = n(78);t.exports = r;
}, function (t, e, n) {
	var r = n(79),
	    o = n(92),
	    i = o(r);t.exports = i;
}, function (t, e, n) {
	function r(t, e) {
		return t && o(t, e, i);
	}var o = n(80),
	    i = n(4);t.exports = r;
}, function (t, e, n) {
	var r = n(81),
	    o = r();t.exports = o;
}, function (t, e) {
	function n(t) {
		return function (e, n, r) {
			for (var o = -1, i = Object(e), a = r(e), s = a.length; s--;) {
				var u = a[t ? s : ++o];if (!1 === n(i[u], u, i)) break;
			}return e;
		};
	}t.exports = n;
}, function (t, e) {
	function n(t, e) {
		for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);return r;
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		return i(t) && o(t) == a;
	}var o = n(5),
	    i = n(7),
	    a = "[object Arguments]";t.exports = r;
}, function (t, e, n) {
	function r(t) {
		var e = a.call(t, u),
		    n = t[u];try {
			t[u] = void 0;var r = !0;
		} catch (t) {}var o = s.call(t);return r && (e ? t[u] = n : delete t[u]), o;
	}var o = n(6),
	    i = Object.prototype,
	    a = i.hasOwnProperty,
	    s = i.toString,
	    u = o ? o.toStringTag : void 0;t.exports = r;
}, function (t, e) {
	function n(t) {
		return o.call(t);
	}var r = Object.prototype,
	    o = r.toString;t.exports = n;
}, function (t, e) {
	function n() {
		return !1;
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		return a(t) && i(t.length) && !!s[o(t)];
	}var o = n(5),
	    i = n(24),
	    a = n(7),
	    s = {};s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = r;
}, function (t, e) {
	function n(t) {
		return function (e) {
			return t(e);
		};
	}t.exports = n;
}, function (t, e, n) {
	(function (t) {
		var r = n(43),
		    o = "object" == typeof e && e && !e.nodeType && e,
		    i = o && "object" == typeof t && t && !t.nodeType && t,
		    a = i && i.exports === o,
		    s = a && r.process,
		    u = function () {
			try {
				return s && s.binding && s.binding("util");
			} catch (t) {}
		}();t.exports = u;
	}).call(e, n(15)(t));
}, function (t, e, n) {
	function r(t) {
		if (!o(t)) return i(t);var e = [];for (var n in Object(t)) s.call(t, n) && "constructor" != n && e.push(n);return e;
	}var o = n(25),
	    i = n(91),
	    a = Object.prototype,
	    s = a.hasOwnProperty;t.exports = r;
}, function (t, e, n) {
	var r = n(45),
	    o = r(Object.keys, Object);t.exports = o;
}, function (t, e, n) {
	function r(t, e) {
		return function (n, r) {
			if (null == n) return n;if (!o(n)) return t(n, r);for (var i = n.length, a = e ? i : -1, s = Object(n); (e ? a-- : ++a < i) && !1 !== r(s[a], a, s););return n;
		};
	}var o = n(11);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		var e = i(t);return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function (n) {
			return n === t || o(n, t, e);
		};
	}var o = n(94),
	    i = n(133),
	    a = n(59);t.exports = r;
}, function (t, e, n) {
	function r(t, e, n, r) {
		var u = n.length,
		    c = u,
		    l = !r;if (null == t) return !c;for (t = Object(t); u--;) {
			var f = n[u];if (l && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1;
		}for (; ++u < c;) {
			f = n[u];var h = f[0],
			    p = t[h],
			    _ = f[1];if (l && f[2]) {
				if (void 0 === p && !(h in t)) return !1;
			} else {
				var v = new o();if (r) var d = r(p, _, h, t, e, v);if (!(void 0 === d ? i(_, p, a | s, r, v) : d)) return !1;
			}
		}return !0;
	}var o = n(26),
	    i = n(49),
	    a = 1,
	    s = 2;t.exports = r;
}, function (t, e) {
	function n() {
		this.__data__ = [], this.size = 0;
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		var e = this.__data__,
		    n = o(e, t);return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0);
	}var o = n(17),
	    i = Array.prototype,
	    a = i.splice;t.exports = r;
}, function (t, e, n) {
	function r(t) {
		var e = this.__data__,
		    n = o(e, t);return n < 0 ? void 0 : e[n][1];
	}var o = n(17);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return o(this.__data__, t) > -1;
	}var o = n(17);t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		var n = this.__data__,
		    r = o(n, t);return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
	}var o = n(17);t.exports = r;
}, function (t, e, n) {
	function r() {
		this.__data__ = new o(), this.size = 0;
	}var o = n(16);t.exports = r;
}, function (t, e) {
	function n(t) {
		var e = this.__data__,
		    n = e.delete(t);return this.size = e.size, n;
	}t.exports = n;
}, function (t, e) {
	function n(t) {
		return this.__data__.get(t);
	}t.exports = n;
}, function (t, e) {
	function n(t) {
		return this.__data__.has(t);
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e) {
		var n = this.__data__;if (n instanceof o) {
			var r = n.__data__;if (!i || r.length < s - 1) return r.push([t, e]), this.size = ++n.size, this;n = this.__data__ = new a(r);
		}return n.set(t, e), this.size = n.size, this;
	}var o = n(16),
	    i = n(27),
	    a = n(28),
	    s = 200;t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return !(!a(t) || i(t)) && (o(t) ? _ : c).test(s(t));
	}var o = n(46),
	    i = n(106),
	    a = n(2),
	    s = n(48),
	    u = /[\\^$.*+?()[\]{}|]/g,
	    c = /^\[object .+?Constructor\]$/,
	    l = Function.prototype,
	    f = Object.prototype,
	    h = l.toString,
	    p = f.hasOwnProperty,
	    _ = RegExp("^" + h.call(p).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return !!i && i in t;
	}var o = n(107),
	    i = function () {
		var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
	}();t.exports = r;
}, function (t, e, n) {
	var r = n(1),
	    o = r["__core-js_shared__"];t.exports = o;
}, function (t, e) {
	function n(t, e) {
		return null == t ? void 0 : t[e];
	}t.exports = n;
}, function (t, e, n) {
	function r() {
		this.size = 0, this.__data__ = { hash: new o(), map: new (a || i)(), string: new o() };
	}var o = n(110),
	    i = n(16),
	    a = n(27);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		var e = -1,
		    n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
			var r = t[e];this.set(r[0], r[1]);
		}
	}var o = n(111),
	    i = n(112),
	    a = n(113),
	    s = n(114),
	    u = n(115);r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r;
}, function (t, e, n) {
	function r() {
		this.__data__ = o ? o(null) : {}, this.size = 0;
	}var o = n(18);t.exports = r;
}, function (t, e) {
	function n(t) {
		var e = this.has(t) && delete this.__data__[t];return this.size -= e ? 1 : 0, e;
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		var e = this.__data__;if (o) {
			var n = e[t];return n === i ? void 0 : n;
		}return s.call(e, t) ? e[t] : void 0;
	}var o = n(18),
	    i = "__lodash_hash_undefined__",
	    a = Object.prototype,
	    s = a.hasOwnProperty;t.exports = r;
}, function (t, e, n) {
	function r(t) {
		var e = this.__data__;return o ? void 0 !== e[t] : a.call(e, t);
	}var o = n(18),
	    i = Object.prototype,
	    a = i.hasOwnProperty;t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		var n = this.__data__;return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this;
	}var o = n(18),
	    i = "__lodash_hash_undefined__";t.exports = r;
}, function (t, e, n) {
	function r(t) {
		var e = o(this, t).delete(t);return this.size -= e ? 1 : 0, e;
	}var o = n(19);t.exports = r;
}, function (t, e) {
	function n(t) {
		var e = typeof t;return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		return o(this, t).get(t);
	}var o = n(19);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return o(this, t).has(t);
	}var o = n(19);t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		var n = o(this, t),
		    r = n.size;return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
	}var o = n(19);t.exports = r;
}, function (t, e, n) {
	function r(t, e, n, r, d, m) {
		var g = c(t),
		    b = c(e),
		    w = g ? _ : u(t),
		    j = b ? _ : u(e);w = w == p ? v : w, j = j == p ? v : j;var x = w == v,
		    C = j == v,
		    E = w == j;if (E && l(t)) {
			if (!l(e)) return !1;g = !0, x = !1;
		}if (E && !x) return m || (m = new o()), g || f(t) ? i(t, e, n, r, d, m) : a(t, e, w, n, r, d, m);if (!(n & h)) {
			var k = x && y.call(t, "__wrapped__"),
			    O = C && y.call(e, "__wrapped__");if (k || O) {
				var F = k ? t.value() : t,
				    T = O ? e.value() : e;return m || (m = new o()), d(F, T, n, r, m);
			}
		}return !!E && (m || (m = new o()), s(t, e, n, r, d, m));
	}var o = n(26),
	    i = n(50),
	    a = n(127),
	    s = n(128),
	    u = n(57),
	    c = n(0),
	    l = n(22),
	    f = n(44),
	    h = 1,
	    p = "[object Arguments]",
	    _ = "[object Array]",
	    v = "[object Object]",
	    d = Object.prototype,
	    y = d.hasOwnProperty;t.exports = r;
}, function (t, e, n) {
	function r(t) {
		var e = -1,
		    n = null == t ? 0 : t.length;for (this.__data__ = new o(); ++e < n;) this.add(t[e]);
	}var o = n(28),
	    i = n(123),
	    a = n(124);r.prototype.add = r.prototype.push = i, r.prototype.has = a, t.exports = r;
}, function (t, e) {
	function n(t) {
		return this.__data__.set(t, r), this;
	}var r = "__lodash_hash_undefined__";t.exports = n;
}, function (t, e) {
	function n(t) {
		return this.__data__.has(t);
	}t.exports = n;
}, function (t, e) {
	function n(t, e) {
		for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (e(t[n], n, t)) return !0;return !1;
	}t.exports = n;
}, function (t, e) {
	function n(t, e) {
		return t.has(e);
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e, n, r, o, x, E) {
		switch (n) {case j:
				if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case w:
				return !(t.byteLength != e.byteLength || !x(new i(t), new i(e)));case h:case p:case d:
				return a(+t, +e);case _:
				return t.name == e.name && t.message == e.message;case y:case g:
				return t == e + "";case v:
				var k = u;case m:
				var O = r & l;if (k || (k = c), t.size != e.size && !O) return !1;var F = E.get(t);if (F) return F == e;r |= f, E.set(t, e);var T = s(k(t), k(e), r, o, x, E);return E.delete(t), T;case b:
				if (C) return C.call(t) == C.call(e);}return !1;
	}var o = n(6),
	    i = n(51),
	    a = n(9),
	    s = n(50),
	    u = n(52),
	    c = n(53),
	    l = 1,
	    f = 2,
	    h = "[object Boolean]",
	    p = "[object Date]",
	    _ = "[object Error]",
	    v = "[object Map]",
	    d = "[object Number]",
	    y = "[object RegExp]",
	    m = "[object Set]",
	    g = "[object String]",
	    b = "[object Symbol]",
	    w = "[object ArrayBuffer]",
	    j = "[object DataView]",
	    x = o ? o.prototype : void 0,
	    C = x ? x.valueOf : void 0;t.exports = r;
}, function (t, e, n) {
	function r(t, e, n, r, a, u) {
		var c = n & i,
		    l = o(t),
		    f = l.length;if (f != o(e).length && !c) return !1;for (var h = f; h--;) {
			var p = l[h];if (!(c ? p in e : s.call(e, p))) return !1;
		}var _ = u.get(t);if (_ && u.get(e)) return _ == e;var v = !0;u.set(t, e), u.set(e, t);for (var d = c; ++h < f;) {
			p = l[h];var y = t[p],
			    m = e[p];if (r) var g = c ? r(m, y, p, e, t, u) : r(y, m, p, t, e, u);if (!(void 0 === g ? y === m || a(y, m, n, r, u) : g)) {
				v = !1;break;
			}d || (d = "constructor" == p);
		}if (v && !d) {
			var b = t.constructor,
			    w = e.constructor;b != w && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (v = !1);
		}return u.delete(t), u.delete(e), v;
	}var o = n(54),
	    i = 1,
	    a = Object.prototype,
	    s = a.hasOwnProperty;t.exports = r;
}, function (t, e, n) {
	var r = n(3),
	    o = n(1),
	    i = r(o, "DataView");t.exports = i;
}, function (t, e, n) {
	var r = n(3),
	    o = n(1),
	    i = r(o, "Promise");t.exports = i;
}, function (t, e, n) {
	var r = n(3),
	    o = n(1),
	    i = r(o, "Set");t.exports = i;
}, function (t, e, n) {
	var r = n(3),
	    o = n(1),
	    i = r(o, "WeakMap");t.exports = i;
}, function (t, e, n) {
	function r(t) {
		for (var e = i(t), n = e.length; n--;) {
			var r = e[n],
			    a = t[r];e[n] = [r, a, o(a)];
		}return e;
	}var o = n(58),
	    i = n(4);t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		return s(t) && u(e) ? c(l(t), e) : function (n) {
			var r = i(n, t);return void 0 === r && r === e ? a(n, t) : o(e, r, f | h);
		};
	}var o = n(49),
	    i = n(135),
	    a = n(141),
	    s = n(31),
	    u = n(58),
	    c = n(59),
	    l = n(12),
	    f = 1,
	    h = 2;t.exports = r;
}, function (t, e, n) {
	function r(t, e, n) {
		var r = null == t ? void 0 : o(t, e);return void 0 === r ? n : r;
	}var o = n(37);t.exports = r;
}, function (t, e, n) {
	var r = n(137),
	    o = /^\./,
	    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	    a = /\\(\\)?/g,
	    s = r(function (t) {
		var e = [];return o.test(t) && e.push(""), t.replace(i, function (t, n, r, o) {
			e.push(r ? o.replace(a, "$1") : n || t);
		}), e;
	});t.exports = s;
}, function (t, e, n) {
	function r(t) {
		var e = o(t, function (t) {
			return n.size === i && n.clear(), t;
		}),
		    n = e.cache;return e;
	}var o = n(138),
	    i = 500;t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);var n = function () {
			var r = arguments,
			    o = e ? e.apply(this, r) : r[0],
			    i = n.cache;if (i.has(o)) return i.get(o);var a = t.apply(this, r);return n.cache = i.set(o, a) || i, a;
		};return n.cache = new (r.Cache || o)(), n;
	}var o = n(28),
	    i = "Expected a function";r.Cache = o, t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return null == t ? "" : o(t);
	}var o = n(140);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		if ("string" == typeof t) return t;if (a(t)) return i(t, r) + "";if (s(t)) return l ? l.call(t) : "";var e = t + "";return "0" == e && 1 / t == -u ? "-0" : e;
	}var o = n(6),
	    i = n(68),
	    a = n(0),
	    s = n(21),
	    u = 1 / 0,
	    c = o ? o.prototype : void 0,
	    l = c ? c.toString : void 0;t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		return null != t && i(t, e, o);
	}var o = n(142),
	    i = n(143);t.exports = r;
}, function (t, e) {
	function n(t, e) {
		return null != t && e in Object(t);
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e, n) {
		e = o(e, t);for (var r = -1, l = e.length, f = !1; ++r < l;) {
			var h = c(e[r]);if (!(f = null != t && n(t, h))) break;t = t[h];
		}return f || ++r != l ? f : !!(l = null == t ? 0 : t.length) && u(l) && s(h, l) && (a(t) || i(t));
	}var o = n(30),
	    i = n(35),
	    a = n(0),
	    s = n(23),
	    u = n(24),
	    c = n(12);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return a(t) ? o(s(t)) : i(t);
	}var o = n(145),
	    i = n(146),
	    a = n(31),
	    s = n(12);t.exports = r;
}, function (t, e) {
	function n(t) {
		return function (e) {
			return null == e ? void 0 : e[t];
		};
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		return function (e) {
			return o(e, t);
		};
	}var o = n(37);t.exports = r;
}, function (t, e, n) {
	var r = n(8),
	    o = n(148),
	    i = n(33),
	    a = o(function (t, e, n, o) {
		r(e, i(e), t, o);
	});t.exports = a;
}, function (t, e, n) {
	function r(t) {
		return o(function (e, n) {
			var r = -1,
			    o = n.length,
			    a = o > 1 ? n[o - 1] : void 0,
			    s = o > 2 ? n[2] : void 0;for (a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, s && i(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++r < o;) {
				var u = n[r];u && t(e, u, r, a);
			}return e;
		});
	}var o = n(65),
	    i = n(152);t.exports = r;
}, function (t, e, n) {
	var r = n(150),
	    o = n(64),
	    i = n(32),
	    a = o ? function (t, e) {
		return o(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 });
	} : i;t.exports = a;
}, function (t, e) {
	function n(t) {
		return function () {
			return t;
		};
	}t.exports = n;
}, function (t, e) {
	function n(t) {
		var e = 0,
		    n = 0;return function () {
			var a = i(),
			    s = o - (a - n);if (n = a, s > 0) {
				if (++e >= r) return arguments[0];
			} else e = 0;return t.apply(void 0, arguments);
		};
	}var r = 800,
	    o = 16,
	    i = Date.now;t.exports = n;
}, function (t, e, n) {
	function r(t, e, n) {
		if (!s(n)) return !1;var r = typeof e;return !!("number" == r ? i(n) && a(e, n.length) : "string" == r && e in n) && o(n[e], t);
	}var o = n(9),
	    i = n(11),
	    a = n(23),
	    s = n(2);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		if (!o(t)) return a(t);var e = i(t),
		    n = [];for (var r in t) ("constructor" != r || !e && u.call(t, r)) && n.push(r);return n;
	}var o = n(2),
	    i = n(25),
	    a = n(154),
	    s = Object.prototype,
	    u = s.hasOwnProperty;t.exports = r;
}, function (t, e) {
	function n(t) {
		var e = [];if (null != t) for (var n in Object(t)) e.push(n);return e;
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e, n, r) {
		return void 0 === t || o(t, i[n]) && !a.call(r, n) ? e : t;
	}var o = n(9),
	    i = Object.prototype,
	    a = i.hasOwnProperty;t.exports = r;
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = n(157),
	    o = n(39),
	    i = function () {
		function t(t, e) {
			void 0 === e && (e = {}), this._src = t, this._opts = e, this._opts.filters = r(o.default.DefaultOpts.filters);
		}return t.prototype.maxColorCount = function (t) {
			return this._opts.colorCount = t, this;
		}, t.prototype.maxDimension = function (t) {
			return this._opts.maxDimension = t, this;
		}, t.prototype.addFilter = function (t) {
			return this._opts.filters.push(t), this;
		}, t.prototype.removeFilter = function (t) {
			var e = this._opts.filters.indexOf(t);return e > 0 && this._opts.filters.splice(e), this;
		}, t.prototype.clearFilters = function () {
			return this._opts.filters = [], this;
		}, t.prototype.quality = function (t) {
			return this._opts.quality = t, this;
		}, t.prototype.useImageClass = function (t) {
			return this._opts.ImageClass = t, this;
		}, t.prototype.useGenerator = function (t) {
			return this._opts.generator = t, this;
		}, t.prototype.useQuantizer = function (t) {
			return this._opts.quantizer = t, this;
		}, t.prototype.build = function () {
			return new o.default(this._src, this._opts);
		}, t.prototype.getPalette = function (t) {
			return this.build().getPalette(t);
		}, t.prototype.getSwatches = function (t) {
			return this.build().getPalette(t);
		}, t;
	}();e.default = i;
}, function (t, e, n) {
	function r(t) {
		return o(t, i);
	}var o = n(71),
	    i = 4;t.exports = r;
}, function (t, e) {
	function n(t, e) {
		for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););return t;
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e) {
		return t && o(e, i(e), t);
	}var o = n(8),
	    i = n(4);t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		return t && o(e, i(e), t);
	}var o = n(8),
	    i = n(33);t.exports = r;
}, function (t, e, n) {
	(function (t) {
		function r(t, e) {
			if (e) return t.slice();var n = t.length,
			    r = c ? c(n) : new t.constructor(n);return t.copy(r), r;
		}var o = n(1),
		    i = "object" == typeof e && e && !e.nodeType && e,
		    a = i && "object" == typeof t && t && !t.nodeType && t,
		    s = a && a.exports === i,
		    u = s ? o.Buffer : void 0,
		    c = u ? u.allocUnsafe : void 0;t.exports = r;
	}).call(e, n(15)(t));
}, function (t, e) {
	function n(t, e) {
		var n = -1,
		    r = t.length;for (e || (e = Array(r)); ++n < r;) e[n] = t[n];return e;
	}t.exports = n;
}, function (t, e, n) {
	function r(t, e) {
		return o(t, i(t), e);
	}var o = n(8),
	    i = n(29);t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		return o(t, i(t), e);
	}var o = n(8),
	    i = n(66);t.exports = r;
}, function (t, e) {
	function n(t) {
		var e = t.length,
		    n = t.constructor(e);return e && "string" == typeof t[0] && o.call(t, "index") && (n.index = t.index, n.input = t.input), n;
	}var r = Object.prototype,
	    o = r.hasOwnProperty;t.exports = n;
}, function (t, e, n) {
	function r(t, e, n, r) {
		var S = t.constructor;switch (e) {case g:
				return o(t);case f:case h:
				return new S(+t);case b:
				return i(t, r);case w:case j:case x:case C:case E:case k:case O:case F:case T:
				return l(t, r);case p:
				return a(t, r, n);case _:case y:
				return new S(t);case v:
				return s(t);case d:
				return u(t, r, n);case m:
				return c(t);}
	}var o = n(34),
	    i = n(167),
	    a = n(168),
	    s = n(170),
	    u = n(171),
	    c = n(173),
	    l = n(174),
	    f = "[object Boolean]",
	    h = "[object Date]",
	    p = "[object Map]",
	    _ = "[object Number]",
	    v = "[object RegExp]",
	    d = "[object Set]",
	    y = "[object String]",
	    m = "[object Symbol]",
	    g = "[object ArrayBuffer]",
	    b = "[object DataView]",
	    w = "[object Float32Array]",
	    j = "[object Float64Array]",
	    x = "[object Int8Array]",
	    C = "[object Int16Array]",
	    E = "[object Int32Array]",
	    k = "[object Uint8Array]",
	    O = "[object Uint8ClampedArray]",
	    F = "[object Uint16Array]",
	    T = "[object Uint32Array]";t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		var n = e ? o(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.byteLength);
	}var o = n(34);t.exports = r;
}, function (t, e, n) {
	function r(t, e, n) {
		var r = e ? n(a(t), s) : a(t);return i(r, o, new t.constructor());
	}var o = n(169),
	    i = n(67),
	    a = n(52),
	    s = 1;t.exports = r;
}, function (t, e) {
	function n(t, e) {
		return t.set(e[0], e[1]), t;
	}t.exports = n;
}, function (t, e) {
	function n(t) {
		var e = new t.constructor(t.source, r.exec(t));return e.lastIndex = t.lastIndex, e;
	}var r = /\w*$/;t.exports = n;
}, function (t, e, n) {
	function r(t, e, n) {
		var r = e ? n(a(t), s) : a(t);return i(r, o, new t.constructor());
	}var o = n(172),
	    i = n(67),
	    a = n(53),
	    s = 1;t.exports = r;
}, function (t, e) {
	function n(t, e) {
		return t.add(e), t;
	}t.exports = n;
}, function (t, e, n) {
	function r(t) {
		return a ? Object(a.call(t)) : {};
	}var o = n(6),
	    i = o ? o.prototype : void 0,
	    a = i ? i.valueOf : void 0;t.exports = r;
}, function (t, e, n) {
	function r(t, e) {
		var n = e ? o(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.length);
	}var o = n(34);t.exports = r;
}, function (t, e, n) {
	function r(t) {
		return "function" != typeof t.constructor || a(t) ? {} : o(i(t));
	}var o = n(176),
	    i = n(38),
	    a = n(25);t.exports = r;
}, function (t, e, n) {
	var r = n(2),
	    o = Object.create,
	    i = function () {
		function t() {}return function (e) {
			if (!r(e)) return {};if (o) return o(e);t.prototype = e;var n = new t();return t.prototype = void 0, n;
		};
	}();t.exports = i;
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = n(178);e.MMCQ = r.default, e.WebWorker = null;
}, function (t, e, n) {
	"use strict";
	function r(t, e) {
		for (var n = t.size(); t.size() < e;) {
			var r = t.pop();if (!(r && r.count() > 0)) break;var o = r.split(),
			    i = o[0],
			    a = o[1];if (t.push(i), a && a.count() > 0 && t.push(a), t.size() === n) break;n = t.size();
		}
	}function o(t) {
		for (var e = []; t.size();) {
			var n = t.pop(),
			    r = n.avg();r[0], r[1], r[2];e.push(new i.Swatch(r, n.count()));
		}return e;
	}Object.defineProperty(e, "__esModule", { value: !0 });var i = n(20),
	    a = n(179),
	    s = n(180),
	    u = function (t, e) {
		if (0 === t.length || e.colorCount < 2 || e.colorCount > 256) throw new Error("Wrong MMCQ parameters");var n = a.default.build(t),
		    i = n.hist,
		    u = (Object.keys(i).length, new s.default(function (t, e) {
			return t.count() - e.count();
		}));u.push(n), r(u, .75 * e.colorCount);var c = new s.default(function (t, e) {
			return t.count() * t.volume() - e.count() * e.volume();
		});return c.contents = u.contents, r(c, e.colorCount - c.size()), o(c);
	};e.default = u;
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = n(10),
	    o = function () {
		function t(t, e, n, r, o, i, a) {
			this._volume = -1, this._count = -1, this.dimension = { r1: t, r2: e, g1: n, g2: r, b1: o, b2: i }, this.hist = a;
		}return t.build = function (e, n) {
			var o,
			    i,
			    a,
			    s,
			    u,
			    c,
			    l,
			    f,
			    h,
			    p = 1 << 3 * r.SIGBITS,
			    _ = new Uint32Array(p);o = a = u = 0, i = s = c = Number.MAX_VALUE;for (var v = e.length / 4, d = 0; d < v;) {
				var y = 4 * d;if (d++, l = e[y + 0], f = e[y + 1], h = e[y + 2], 0 !== e[y + 3]) {
					l >>= r.RSHIFT, f >>= r.RSHIFT, h >>= r.RSHIFT;_[r.getColorIndex(l, f, h)] += 1, l > o && (o = l), l < i && (i = l), f > a && (a = f), f < s && (s = f), h > u && (u = h), h < c && (c = h);
				}
			}return new t(i, o, s, a, c, u, _);
		}, t.prototype.invalidate = function () {
			this._volume = this._count = -1, this._avg = null;
		}, t.prototype.volume = function () {
			if (this._volume < 0) {
				var t = this.dimension,
				    e = t.r1,
				    n = t.r2,
				    r = t.g1,
				    o = t.g2,
				    i = t.b1,
				    a = t.b2;this._volume = (n - e + 1) * (o - r + 1) * (a - i + 1);
			}return this._volume;
		}, t.prototype.count = function () {
			if (this._count < 0) {
				for (var t = this.hist, e = this.dimension, n = e.r1, o = e.r2, i = e.g1, a = e.g2, s = e.b1, u = e.b2, c = 0, l = n; l <= o; l++) for (var f = i; f <= a; f++) for (var h = s; h <= u; h++) {
					var p = r.getColorIndex(l, f, h);c += t[p];
				}this._count = c;
			}return this._count;
		}, t.prototype.clone = function () {
			var e = this.hist,
			    n = this.dimension;return new t(n.r1, n.r2, n.g1, n.g2, n.b1, n.b2, e);
		}, t.prototype.avg = function () {
			if (!this._avg) {
				var t = this.hist,
				    e = this.dimension,
				    n = e.r1,
				    o = e.r2,
				    i = e.g1,
				    a = e.g2,
				    s = e.b1,
				    u = e.b2,
				    c = 0,
				    l = 1 << 8 - r.SIGBITS,
				    f = void 0,
				    h = void 0,
				    p = void 0;f = h = p = 0;for (var _ = n; _ <= o; _++) for (var v = i; v <= a; v++) for (var d = s; d <= u; d++) {
					var y = r.getColorIndex(_, v, d),
					    m = t[y];c += m, f += m * (_ + .5) * l, h += m * (v + .5) * l, p += m * (d + .5) * l;
				}this._avg = c ? [~~(f / c), ~~(h / c), ~~(p / c)] : [~~(l * (n + o + 1) / 2), ~~(l * (i + a + 1) / 2), ~~(l * (s + u + 1) / 2)];
			}return this._avg;
		}, t.prototype.contains = function (t) {
			var e = t[0],
			    n = t[1],
			    o = t[2],
			    i = this.dimension,
			    a = i.r1,
			    s = i.r2,
			    u = i.g1,
			    c = i.g2,
			    l = i.b1,
			    f = i.b2;return e >>= r.RSHIFT, n >>= r.RSHIFT, o >>= r.RSHIFT, e >= a && e <= s && n >= u && n <= c && o >= l && o <= f;
		}, t.prototype.split = function () {
			var t = this.hist,
			    e = this.dimension,
			    n = e.r1,
			    o = e.r2,
			    i = e.g1,
			    a = e.g2,
			    s = e.b1,
			    u = e.b2,
			    c = this.count();if (!c) return [];if (1 === c) return [this.clone()];var l,
			    f,
			    h = o - n + 1,
			    p = a - i + 1,
			    _ = u - s + 1,
			    v = Math.max(h, p, _),
			    d = null;l = f = 0;var y = null;if (v === h) {
				y = "r", d = new Uint32Array(o + 1);for (var m = n; m <= o; m++) {
					l = 0;for (var g = i; g <= a; g++) for (var b = s; b <= u; b++) {
						var w = r.getColorIndex(m, g, b);l += t[w];
					}f += l, d[m] = f;
				}
			} else if (v === p) {
				y = "g", d = new Uint32Array(a + 1);for (var g = i; g <= a; g++) {
					l = 0;for (var m = n; m <= o; m++) for (var b = s; b <= u; b++) {
						var w = r.getColorIndex(m, g, b);l += t[w];
					}f += l, d[g] = f;
				}
			} else {
				y = "b", d = new Uint32Array(u + 1);for (var b = s; b <= u; b++) {
					l = 0;for (var m = n; m <= o; m++) for (var g = i; g <= a; g++) {
						var w = r.getColorIndex(m, g, b);l += t[w];
					}f += l, d[b] = f;
				}
			}for (var j = -1, x = new Uint32Array(d.length), C = 0; C < d.length; C++) {
				var E = d[C];j < 0 && E > f / 2 && (j = C), x[C] = f - E;
			}var k = this;return function (t) {
				var e = t + "1",
				    n = t + "2",
				    r = k.dimension[e],
				    o = k.dimension[n],
				    i = k.clone(),
				    a = k.clone(),
				    s = j - r,
				    u = o - j;for (s <= u ? (o = Math.min(o - 1, ~~(j + u / 2)), o = Math.max(0, o)) : (o = Math.max(r, ~~(j - 1 - s / 2)), o = Math.min(k.dimension[n], o)); !d[o];) o++;for (var c = x[o]; !c && d[o - 1];) c = x[--o];return i.dimension[n] = o, a.dimension[e] = o + 1, [i, a];
			}(y);
		}, t;
	}();e.default = o;
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
		function t(t) {
			this._comparator = t, this.contents = [], this._sorted = !1;
		}return t.prototype._sort = function () {
			this._sorted || (this.contents.sort(this._comparator), this._sorted = !0);
		}, t.prototype.push = function (t) {
			this.contents.push(t), this._sorted = !1;
		}, t.prototype.peek = function (t) {
			return this._sort(), t = "number" == typeof t ? t : this.contents.length - 1, this.contents[t];
		}, t.prototype.pop = function () {
			return this._sort(), this.contents.pop();
		}, t.prototype.size = function () {
			return this.contents.length;
		}, t.prototype.map = function (t) {
			return this._sort(), this.contents.map(t);
		}, t;
	}();e.default = r;
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = n(182);e.Default = r.default;
}, function (t, e, n) {
	"use strict";
	function r(t) {
		var e = 0;return t.forEach(function (t) {
			e = Math.max(e, t.getPopulation());
		}), e;
	}function o(t, e) {
		return t.Vibrant === e || t.DarkVibrant === e || t.LightVibrant === e || t.Muted === e || t.DarkMuted === e || t.LightMuted === e;
	}function i(t, e, n, r, o, i, a) {
		function s(t, e) {
			return 1 - Math.abs(t - e);
		}return function () {
			for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];for (var n = 0, r = 0, o = 0; o < t.length; o += 2) {
				var i = t[o],
				    a = t[o + 1];n += i * a, r += a;
			}return n / r;
		}(s(t, e), a.weightSaturation, s(n, r), a.weightLuma, o / i, a.weightPopulation);
	}function a(t, e, n, r, a, s, u, c, l, f) {
		var h = null,
		    p = 0;return e.forEach(function (e) {
			var _ = e.getHsl(),
			    v = _[1],
			    d = _[2];if (v >= c && v <= l && d >= a && d <= s && !o(t, e)) {
				var y = i(v, u, d, r, e.getPopulation(), n, f);(null === h || y > p) && (h = e, p = y);
			}
		}), h;
	}function s(t, e, n) {
		var r = {};return r.Vibrant = a(r, t, e, n.targetNormalLuma, n.minNormalLuma, n.maxNormalLuma, n.targetVibrantSaturation, n.minVibrantSaturation, 1, n), r.LightVibrant = a(r, t, e, n.targetLightLuma, n.minLightLuma, 1, n.targetVibrantSaturation, n.minVibrantSaturation, 1, n), r.DarkVibrant = a(r, t, e, n.targetDarkLuma, 0, n.maxDarkLuma, n.targetVibrantSaturation, n.minVibrantSaturation, 1, n), r.Muted = a(r, t, e, n.targetNormalLuma, n.minNormalLuma, n.maxNormalLuma, n.targetMutesSaturation, 0, n.maxMutesSaturation, n), r.LightMuted = a(r, t, e, n.targetLightLuma, n.minLightLuma, 1, n.targetMutesSaturation, 0, n.maxMutesSaturation, n), r.DarkMuted = a(r, t, e, n.targetDarkLuma, 0, n.maxDarkLuma, n.targetMutesSaturation, 0, n.maxMutesSaturation, n), r;
	}function u(t, e, n) {
		if (null === t.Vibrant && null !== t.DarkVibrant) {
			var r = t.DarkVibrant.getHsl(),
			    o = r[0],
			    i = r[1],
			    a = r[2];a = n.targetNormalLuma, t.Vibrant = new c.Swatch(l.hslToRgb(o, i, a), 0);
		}if (null === t.DarkVibrant && null !== t.Vibrant) {
			var s = t.Vibrant.getHsl(),
			    o = s[0],
			    i = s[1],
			    a = s[2];a = n.targetDarkLuma, t.DarkVibrant = new c.Swatch(l.hslToRgb(o, i, a), 0);
		}
	}Object.defineProperty(e, "__esModule", { value: !0 });var c = n(20),
	    l = n(10),
	    f = n(60),
	    h = { targetDarkLuma: .26, maxDarkLuma: .45, minLightLuma: .55, targetLightLuma: .74, minNormalLuma: .3, targetNormalLuma: .5, maxNormalLuma: .7, targetMutesSaturation: .3, maxMutesSaturation: .4, targetVibrantSaturation: 1, minVibrantSaturation: .35, weightSaturation: 3, weightLuma: 6.5, weightPopulation: .5 },
	    p = function (t, e) {
		e = f({}, e, h);var n = r(t),
		    o = s(t, n, e);return u(o, n, e), o;
	};e.default = p;
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return Array.isArray(t) && 0 !== t.length ? function (e, n, r, o) {
			if (0 === o) return !1;for (var i = 0; i < t.length; i++) if (!t[i](e, n, r, o)) return !1;return !0;
		} : null;
	}Object.defineProperty(e, "__esModule", { value: !0 });var o = n(184);e.Default = o.default, e.combineFilters = r;
}, function (t, e, n) {
	"use strict";
	function r(t, e, n, r) {
		return r >= 125 && !(t > 250 && e > 250 && n > 250);
	}Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
}, function (t, e, n) {
	"use strict";
	function r(t) {
		var e = u.parse(t);return null === e.protocol && null === e.host && null === e.port;
	}function o(t, e) {
		var n = u.parse(t),
		    r = u.parse(e);return n.protocol === r.protocol && n.hostname === r.hostname && n.port === r.port;
	}var i = this && this.__extends || function () {
		var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
			t.__proto__ = e;
		} || function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		};return function (e, n) {
			function r() {
				this.constructor = e;
			}t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
		};
	}();Object.defineProperty(e, "__esModule", { value: !0 });var a = n(13),
	    s = n(186),
	    u = n(187),
	    c = function (t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this;
		}return i(e, t), e.prototype._initCanvas = function () {
			var t = this.image,
			    e = this._canvas = document.createElement("canvas"),
			    n = this._context = e.getContext("2d");e.className = "vibrant-canvas", e.style.display = "none", this._width = e.width = t.width, this._height = e.height = t.height, n.drawImage(t, 0, 0), document.body.appendChild(e);
		}, e.prototype.load = function (t) {
			var e = this,
			    n = null,
			    i = null;if ("string" == typeof t) n = document.createElement("img"), i = t;else {
				if (!(t instanceof HTMLImageElement)) return a.reject(new Error("Cannot load buffer as an image in browser"));n = t, i = t.src;
			}return this.image = n, r(i) || o(window.location.href, i) || (n.crossOrigin = "anonymous"), "string" == typeof t && (n.src = i), new a(function (t, r) {
				var o = function () {
					e._initCanvas(), t(e);
				};n.complete ? o() : (n.onload = o, n.onerror = function (t) {
					return r(new Error("Fail to load image: " + i));
				});
			});
		}, e.prototype.clear = function () {
			this._context.clearRect(0, 0, this._width, this._height);
		}, e.prototype.update = function (t) {
			this._context.putImageData(t, 0, 0);
		}, e.prototype.getWidth = function () {
			return this._width;
		}, e.prototype.getHeight = function () {
			return this._height;
		}, e.prototype.resize = function (t, e, n) {
			var r = this,
			    o = r._canvas,
			    i = r._context,
			    a = r.image;this._width = o.width = t, this._height = o.height = e, i.scale(n, n), i.drawImage(a, 0, 0);
		}, e.prototype.getPixelCount = function () {
			return this._width * this._height;
		}, e.prototype.getImageData = function () {
			return this._context.getImageData(0, 0, this._width, this._height);
		}, e.prototype.remove = function () {
			this._canvas.parentNode.removeChild(this._canvas);
		}, e;
	}(s.ImageBase);e.default = c;
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = n(13),
	    o = function () {
		function t() {}return t.prototype.scaleDown = function (t) {
			var e = this.getWidth(),
			    n = this.getHeight(),
			    r = 1;if (t.maxDimension > 0) {
				var o = Math.max(e, n);o > t.maxDimension && (r = t.maxDimension / o);
			} else r = 1 / t.quality;r < 1 && this.resize(e * r, n * r, r);
		}, t.prototype.applyFilter = function (t) {
			var e = this.getImageData();if ("function" == typeof t) for (var n = e.data, o = n.length / 4, i = void 0, a = void 0, s = void 0, u = void 0, c = void 0, l = 0; l < o; l++) i = 4 * l, a = n[i + 0], s = n[i + 1], u = n[i + 2], c = n[i + 3], t(a, s, u, c) || (n[i + 3] = 0);return r.resolve(e);
		}, t;
	}();e.ImageBase = o;
}, function (t, e, n) {
	"use strict";
	function r() {
		this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
	}function o(t, e, n) {
		if (t && c.isObject(t) && t instanceof r) return t;var o = new r();return o.parse(t, e, n), o;
	}function i(t) {
		return c.isString(t) && (t = o(t)), t instanceof r ? t.format() : r.prototype.format.call(t);
	}function a(t, e) {
		return o(t, !1, !0).resolve(e);
	}function s(t, e) {
		return t ? o(t, !1, !0).resolveObject(e) : e;
	}var u = n(188),
	    c = n(189);e.parse = o, e.resolve = a, e.resolveObject = s, e.format = i, e.Url = r;var l = /^([a-z0-9.+-]+:)/i,
	    f = /:[0-9]*$/,
	    h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	    p = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
	    _ = ["{", "}", "|", "\\", "^", "`"].concat(p),
	    v = ["'"].concat(_),
	    d = ["%", "/", "?", ";", "#"].concat(v),
	    y = ["/", "?", "#"],
	    m = /^[+a-z0-9A-Z_-]{0,63}$/,
	    g = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    b = { javascript: !0, "javascript:": !0 },
	    w = { javascript: !0, "javascript:": !0 },
	    j = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
	    x = n(190);r.prototype.parse = function (t, e, n) {
		if (!c.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);var r = t.indexOf("?"),
		    o = -1 !== r && r < t.indexOf("#") ? "?" : "#",
		    i = t.split(o),
		    a = /\\/g;i[0] = i[0].replace(a, "/"), t = i.join(o);var s = t;if (s = s.trim(), !n && 1 === t.split("#").length) {
			var f = h.exec(s);if (f) return this.path = s, this.href = s, this.pathname = f[1], f[2] ? (this.search = f[2], this.query = e ? x.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
		}var p = l.exec(s);if (p) {
			p = p[0];var _ = p.toLowerCase();this.protocol = _, s = s.substr(p.length);
		}if (n || p || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
			var C = "//" === s.substr(0, 2);!C || p && w[p] || (s = s.substr(2), this.slashes = !0);
		}if (!w[p] && (C || p && !j[p])) {
			for (var E = -1, k = 0; k < y.length; k++) {
				var O = s.indexOf(y[k]);-1 !== O && (-1 === E || O < E) && (E = O);
			}var F, T;T = -1 === E ? s.lastIndexOf("@") : s.lastIndexOf("@", E), -1 !== T && (F = s.slice(0, T), s = s.slice(T + 1), this.auth = decodeURIComponent(F)), E = -1;for (var k = 0; k < d.length; k++) {
				var O = s.indexOf(d[k]);-1 !== O && (-1 === E || O < E) && (E = O);
			}-1 === E && (E = s.length), this.host = s.slice(0, E), s = s.slice(E), this.parseHost(), this.hostname = this.hostname || "";var S = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];if (!S) for (var A = this.hostname.split(/\./), k = 0, P = A.length; k < P; k++) {
				var R = A[k];if (R && !R.match(m)) {
					for (var I = "", D = 0, M = R.length; D < M; D++) R.charCodeAt(D) > 127 ? I += "x" : I += R[D];if (!I.match(m)) {
						var L = A.slice(0, k),
						    V = A.slice(k + 1),
						    U = R.match(g);U && (L.push(U[1]), V.unshift(U[2])), V.length && (s = "/" + V.join(".") + s), this.hostname = L.join(".");break;
					}
				}
			}this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), S || (this.hostname = u.toASCII(this.hostname));var N = this.port ? ":" + this.port : "",
			    H = this.hostname || "";this.host = H + N, this.href += this.host, S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s));
		}if (!b[_]) for (var k = 0, P = v.length; k < P; k++) {
			var B = v[k];if (-1 !== s.indexOf(B)) {
				var q = encodeURIComponent(B);q === B && (q = escape(B)), s = s.split(B).join(q);
			}
		}var z = s.indexOf("#");-1 !== z && (this.hash = s.substr(z), s = s.slice(0, z));var $ = s.indexOf("?");if (-1 !== $ ? (this.search = s.substr($), this.query = s.substr($ + 1), e && (this.query = x.parse(this.query)), s = s.slice(0, $)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), j[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
			var N = this.pathname || "",
			    Q = this.search || "";this.path = N + Q;
		}return this.href = this.format(), this;
	}, r.prototype.format = function () {
		var t = this.auth || "";t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");var e = this.protocol || "",
		    n = this.pathname || "",
		    r = this.hash || "",
		    o = !1,
		    i = "";this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (i = x.stringify(this.query));var a = this.search || i && "?" + i || "";return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || j[e]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), n = n.replace(/[?#]/g, function (t) {
			return encodeURIComponent(t);
		}), a = a.replace("#", "%23"), e + o + n + a + r;
	}, r.prototype.resolve = function (t) {
		return this.resolveObject(o(t, !1, !0)).format();
	}, r.prototype.resolveObject = function (t) {
		if (c.isString(t)) {
			var e = new r();e.parse(t, !1, !0), t = e;
		}for (var n = new r(), o = Object.keys(this), i = 0; i < o.length; i++) {
			var a = o[i];n[a] = this[a];
		}if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;if (t.slashes && !t.protocol) {
			for (var s = Object.keys(t), u = 0; u < s.length; u++) {
				var l = s[u];"protocol" !== l && (n[l] = t[l]);
			}return j[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
		}if (t.protocol && t.protocol !== n.protocol) {
			if (!j[t.protocol]) {
				for (var f = Object.keys(t), h = 0; h < f.length; h++) {
					var p = f[h];n[p] = t[p];
				}return n.href = n.format(), n;
			}if (n.protocol = t.protocol, t.host || w[t.protocol]) n.pathname = t.pathname;else {
				for (var _ = (t.pathname || "").split("/"); _.length && !(t.host = _.shift()););t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== _[0] && _.unshift(""), _.length < 2 && _.unshift(""), n.pathname = _.join("/");
			}if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
				var v = n.pathname || "",
				    d = n.search || "";n.path = v + d;
			}return n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
		}var y = n.pathname && "/" === n.pathname.charAt(0),
		    m = t.host || t.pathname && "/" === t.pathname.charAt(0),
		    g = m || y || n.host && t.pathname,
		    b = g,
		    x = n.pathname && n.pathname.split("/") || [],
		    _ = t.pathname && t.pathname.split("/") || [],
		    C = n.protocol && !j[n.protocol];if (C && (n.hostname = "", n.port = null, n.host && ("" === x[0] ? x[0] = n.host : x.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === _[0] ? _[0] = t.host : _.unshift(t.host)), t.host = null), g = g && ("" === _[0] || "" === x[0])), m) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, x = _;else if (_.length) x || (x = []), x.pop(), x = x.concat(_), n.search = t.search, n.query = t.query;else if (!c.isNullOrUndefined(t.search)) {
			if (C) {
				n.hostname = n.host = x.shift();var E = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");E && (n.auth = E.shift(), n.host = n.hostname = E.shift());
			}return n.search = t.search, n.query = t.query, c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
		}if (!x.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;for (var k = x.slice(-1)[0], O = (n.host || t.host || x.length > 1) && ("." === k || ".." === k) || "" === k, F = 0, T = x.length; T >= 0; T--) k = x[T], "." === k ? x.splice(T, 1) : ".." === k ? (x.splice(T, 1), F++) : F && (x.splice(T, 1), F--);if (!g && !b) for (; F--; F) x.unshift("..");!g || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), O && "/" !== x.join("/").substr(-1) && x.push("");var S = "" === x[0] || x[0] && "/" === x[0].charAt(0);if (C) {
			n.hostname = n.host = S ? "" : x.length ? x.shift() : "";var E = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");E && (n.auth = E.shift(), n.host = n.hostname = E.shift());
		}return g = g || n.host && x.length, g && !S && x.unshift(""), x.length ? n.pathname = x.join("/") : (n.pathname = null, n.path = null), c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
	}, r.prototype.parseHost = function () {
		var t = this.host,
		    e = f.exec(t);e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
	};
}, function (t, e, n) {
	(function (t, r) {
		var o;!function (i) {
			function a(t) {
				throw new RangeError(P[t]);
			}function s(t, e) {
				for (var n = t.length, r = []; n--;) r[n] = e(t[n]);return r;
			}function u(t, e) {
				var n = t.split("@"),
				    r = "";return n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(A, "."), r + s(t.split("."), e).join(".");
			}function c(t) {
				for (var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);return r;
			}function l(t) {
				return s(t, function (t) {
					var e = "";return t > 65535 && (t -= 65536, e += D(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += D(t);
				}).join("");
			}function f(t) {
				return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : w;
			}function h(t, e) {
				return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
			}function p(t, e, n) {
				var r = 0;for (t = n ? I(t / E) : t >> 1, t += I(t / e); t > R * x >> 1; r += w) t = I(t / R);return I(r + (R + 1) * t / (t + C));
			}function _(t) {
				var e,
				    n,
				    r,
				    o,
				    i,
				    s,
				    u,
				    c,
				    h,
				    _,
				    v = [],
				    d = t.length,
				    y = 0,
				    m = O,
				    g = k;for (n = t.lastIndexOf(F), n < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && a("not-basic"), v.push(t.charCodeAt(r));for (o = n > 0 ? n + 1 : 0; o < d;) {
					for (i = y, s = 1, u = w; o >= d && a("invalid-input"), c = f(t.charCodeAt(o++)), (c >= w || c > I((b - y) / s)) && a("overflow"), y += c * s, h = u <= g ? j : u >= g + x ? x : u - g, !(c < h); u += w) _ = w - h, s > I(b / _) && a("overflow"), s *= _;e = v.length + 1, g = p(y - i, e, 0 == i), I(y / e) > b - m && a("overflow"), m += I(y / e), y %= e, v.splice(y++, 0, m);
				}return l(v);
			}function v(t) {
				var e,
				    n,
				    r,
				    o,
				    i,
				    s,
				    u,
				    l,
				    f,
				    _,
				    v,
				    d,
				    y,
				    m,
				    g,
				    C = [];for (t = c(t), d = t.length, e = O, n = 0, i = k, s = 0; s < d; ++s) (v = t[s]) < 128 && C.push(D(v));for (r = o = C.length, o && C.push(F); r < d;) {
					for (u = b, s = 0; s < d; ++s) (v = t[s]) >= e && v < u && (u = v);for (y = r + 1, u - e > I((b - n) / y) && a("overflow"), n += (u - e) * y, e = u, s = 0; s < d; ++s) if (v = t[s], v < e && ++n > b && a("overflow"), v == e) {
						for (l = n, f = w; _ = f <= i ? j : f >= i + x ? x : f - i, !(l < _); f += w) g = l - _, m = w - _, C.push(D(h(_ + g % m, 0))), l = I(g / m);C.push(D(h(l, 0))), i = p(n, y, r == o), n = 0, ++r;
					}++n, ++e;
				}return C.join("");
			}function d(t) {
				return u(t, function (t) {
					return T.test(t) ? _(t.slice(4).toLowerCase()) : t;
				});
			}function y(t) {
				return u(t, function (t) {
					return S.test(t) ? "xn--" + v(t) : t;
				});
			}var m = ("object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType, "object" == typeof r && r);var g,
			    b = 2147483647,
			    w = 36,
			    j = 1,
			    x = 26,
			    C = 38,
			    E = 700,
			    k = 72,
			    O = 128,
			    F = "-",
			    T = /^xn--/,
			    S = /[^\x20-\x7E]/,
			    A = /[\x2E\u3002\uFF0E\uFF61]/g,
			    P = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
			    R = w - j,
			    I = Math.floor,
			    D = String.fromCharCode;g = { version: "1.4.1", ucs2: { decode: c, encode: l }, decode: _, encode: v, toASCII: y, toUnicode: d }, void 0 !== (o = function () {
				return g;
			}.call(e, n, e, t)) && (t.exports = o);
		}();
	}).call(e, n(15)(t), n(14));
}, function (t, e, n) {
	"use strict";
	t.exports = { isString: function (t) {
			return "string" == typeof t;
		}, isObject: function (t) {
			return "object" == typeof t && null !== t;
		}, isNull: function (t) {
			return null === t;
		}, isNullOrUndefined: function (t) {
			return null == t;
		} };
}, function (t, e, n) {
	"use strict";
	e.decode = e.parse = n(191), e.encode = e.stringify = n(192);
}, function (t, e, n) {
	"use strict";
	function r(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e);
	}t.exports = function (t, e, n, i) {
		e = e || "&", n = n || "=";var a = {};if ("string" != typeof t || 0 === t.length) return a;var s = /\+/g;t = t.split(e);var u = 1e3;i && "number" == typeof i.maxKeys && (u = i.maxKeys);var c = t.length;u > 0 && c > u && (c = u);for (var l = 0; l < c; ++l) {
			var f,
			    h,
			    p,
			    _,
			    v = t[l].replace(s, "%20"),
			    d = v.indexOf(n);d >= 0 ? (f = v.substr(0, d), h = v.substr(d + 1)) : (f = v, h = ""), p = decodeURIComponent(f), _ = decodeURIComponent(h), r(a, p) ? o(a[p]) ? a[p].push(_) : a[p] = [a[p], _] : a[p] = _;
		}return a;
	};var o = Array.isArray || function (t) {
		return "[object Array]" === Object.prototype.toString.call(t);
	};
}, function (t, e, n) {
	"use strict";
	function r(t, e) {
		if (t.map) return t.map(e);for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));return n;
	}var o = function (t) {
		switch (typeof t) {case "string":
				return t;case "boolean":
				return t ? "true" : "false";case "number":
				return isFinite(t) ? t : "";default:
				return "";}
	};t.exports = function (t, e, n, s) {
		return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? r(a(t), function (a) {
			var s = encodeURIComponent(o(a)) + n;return i(t[a]) ? r(t[a], function (t) {
				return s + encodeURIComponent(o(t));
			}).join(e) : s + encodeURIComponent(o(t[a]));
		}).join(e) : s ? encodeURIComponent(o(s)) + n + encodeURIComponent(o(t)) : "";
	};var i = Array.isArray || function (t) {
		return "[object Array]" === Object.prototype.toString.call(t);
	},
	    a = Object.keys || function (t) {
		var e = [];for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);return e;
	};
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });var r = n(73);!function (t) {
		t.Vibrant = r;
	}("object" == typeof window && window instanceof Window ? window : t.exports);
}]);
function luma(r, g, b, a) {
	if (arguments.length === 1) {
		var match;
		var colorString = String(r);
		var hexRegex = /^\#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
		var rgbRegex = /^rgb\(([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]{1,3})\)$/;
		var rgbaRegex = /^rgba\(([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]{1}|(?:[0-9]{1})?\.[0-9]+)\)$/;
		if (match = colorString.match(hexRegex)) {
			var hex = match[1];
			if (hex.length === 3) {
				// Convert to 6
				hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
			}
			var rgb = parseInt(hex, 16); // convert rrggbb to decimal
			r = rgb >> 16 & 0xff; // extract red
			g = rgb >> 8 & 0xff; // extract green
			b = rgb >> 0 & 0xff; // extract blue
		} else if (match = colorString.match(rgbRegex)) {
			r = parseFloat(match[1]);
			g = parseFloat(match[2]);
			b = parseFloat(match[3]);
		} else if (match = colorString.match(rgbaRegex)) {
			r = parseFloat(match[1]);
			g = parseFloat(match[2]);
			b = parseFloat(match[3]);
		}
	} else {
		r = parseFloat(r) || 0;
		g = parseFloat(g) || 0;
		b = parseFloat(b) || 0;
	}
	var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
	return luma;
}

var body = $("body");
var url = 'http://i.imgur.com/xIPgZNM.jpg';
var player_image_container = $('.JS-player-image');
var player_image = player_image_container.css("background-image").split("\"")[1];
var name_contain = $('.JS-name-contain');
var text_color = $('.JS-text-bound').css("color").split("(")[1].split(")")[0].split(",");
var text_luma = luma(text_color[0], text_color[1], text_color[2], 1);

Vibrant.from(player_image).getPalette(function (err, palette) {
	var image_luma = 0.2126 * palette.DarkMuted._rgb[0] + 0.7152 * palette.DarkMuted._rgb[1] + 0.0722 * palette.DarkMuted._rgb[2]; // per ITU-R BT.709
	console.log(image_luma, text_luma - 20);
	if (image_luma + 20 > text_luma) {
		body.addClass("lighten");
	}
});

var contain_width = 600;

$(".JS-text-bound").each(function () {
	var element = $(this);
	var broken = true;
	var i = 0;
	while (broken) {
		broken = check_width(element);
	}
});

function check_width(element) {
	if (element.width() > contain_width) {
		adjust_size(element);
		return true;
	}
	return false;
}
function adjust_size(element) {
	var text_size = parseInt(element.css("font-size").split("p")[0]);
	var line_height = parseInt(element.css("line-height").split("p")[0]);
	element.css({
		"font-size": text_size - 2 + "px",
		"line-height": line_height - 2 + "px"
	});
}