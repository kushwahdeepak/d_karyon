function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
if (function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = _.type(a);
            return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (_.isFunction(b)) return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return _.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (ha.test(b)) return _.filter(b, a, c);
                b = _.filter(b, a)
            }
            return _.grep(a, function(a) {
                return U.call(b, a) >= 0 !== c
            })
        }

        function e(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function f(a) {
            var b = oa[a] = {};
            return _.each(a.match(na) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
        }

        function h() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = _.expando + h.uid++
        }

        function i(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                    } catch (e) {}
                    sa.set(a, b, c)
                } else c = void 0;
            return c
        }

        function j() {
            return !0
        }

        function k() {
            return !1
        }

        function l() {
            try {
                return Z.activeElement
            } catch (a) {}
        }

        function m(a, b) {
            return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function n(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function o(a) {
            var b = Ka.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function p(a, b) {
            for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
        }

        function q(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
                }
                sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
            }
        }

        function r(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
        }

        function s(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }

        function t(b, c) {
            var d, e = _(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
            return e.detach(), f
        }

        function u(a) {
            var b = Z,
                c = Oa[a];
            return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
        }

        function v(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function w(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function x(a, b) {
            if (b in a) return b;
            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
                if (b = Xa[e] + c, b in a) return b;
            return d
        }

        function y(a, b, c) {
            var d = Ta.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function z(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
            return g
        }

        function A(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = "border-box" === _.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
                d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function B(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function C(a, b, c, d, e) {
            return new C.prototype.init(a, b, c, d, e)
        }

        function D() {
            return setTimeout(function() {
                Ya = void 0
            }), Ya = _.now()
        }

        function E(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function F(a, b, c) {
            for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function G(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && xa(a),
                p = ra.get(a, "fxshow");
            c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], $a.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || _.style(a, d)
                } else j = void 0;
            if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                    _(a).hide()
                }), l.done(function() {
                    var b;
                    ra.remove(a, "fxshow");
                    for (b in m) _.style(a, b, m[b])
                });
                for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function H(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function I(a, b, c) {
            var d, e, f = 0,
                g = bb.length,
                h = _.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: _.extend({}, b),
                    opts: _.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Ya || D(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (H(k, j.opts.specialEasing); g > f; f++)
                if (d = bb[f].call(j, a, k, j.opts)) return d;
            return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function J(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(na) || [];
                if (_.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function K(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, _.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === tb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function L(a, b) {
            var c, d, e = _.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && _.extend(!0, a, d), a
        }

        function M(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                 "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function N(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g)
                            for (e in j)
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a["throws"]) b = g(b);
                            else try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                    }
            return {
                state: "success",
                data: b
            }
        }

        function O(a, b, c, d) {
            var e;
            if (_.isArray(b)) _.each(b, function(b, e) {
                c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== _.type(b)) d(a, b);
            else
                for (e in b) O(a + "[" + e + "]", b[e], c, d)
        }

        function P(a) {
            return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var Q = [],
            R = Q.slice,
            S = Q.concat,
            T = Q.push,
            U = Q.indexOf,
            V = {},
            W = V.toString,
            X = V.hasOwnProperty,
            Y = {},
            Z = a.document,
            $ = "2.1.4",
            _ = function(a, b) {
                return new _.fn.init(a, b)
            },
            aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ba = /^-ms-/,
            ca = /-([\da-z])/gi,
            da = function(a, b) {
                return b.toUpperCase()
            };
        _.fn = _.prototype = {
            jquery: $,
            constructor: _,
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
            },
            pushStack: function(a) {
                var b = _.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return _.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(_.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: T,
            sort: Q.sort,
            splice: Q.splice
        }, _.extend = _.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, _.extend({
            expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === _.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isPlainObject: function(a) {
                return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(ba, "ms-").replace(ca, da)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(aa, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : U.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return S.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                    return a.apply(b || this, d.concat(R.call(arguments)))
                }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
            },
            now: Date.now,
            support: Y
        }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            V["[object " + b + "]"] = b.toLowerCase()
        });
        var ea = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {}

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) {
                    return a === b && (E = !0), 0
                },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                xa = function() {
                    F()
                };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (ya) {
                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !w.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qa.test(a.nodeName)
                    },
                    input: function(a) {
                        return pa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
            for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ia, " ")
                    }), h = h.slice(d.length));
                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
        var fa = _.expr.match.needsContext,
            ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ha = /^.[^:#\[\.,]*$/;
        _.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, _.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this)) return !0
                }));
                for (b = 0; c > b; b++) _.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
            }
        });
        var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ka = _.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
            };
        ka.prototype = _.fn, ia = _(Z);
        var la = /^(?:parents|prev(?:Until|All))/,
            ma = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        _.extend({
            dir: function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                     (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && _(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), _.fn.extend({
            has: function(a) {
                var b = _(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (_.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? _.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), _.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return _.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return _.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return _.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return _.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return _.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return _.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return _.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return _.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || _.merge([], a.childNodes)
            }
        }, function(a, b) {
            _.fn[a] = function(c, d) {
                var e = _.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var na = /\S+/g,
            oa = {};
        _.Callbacks = function(a) {
            a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                        if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                            b = !1;
                            break
                        }
                    d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var c = i.length;
                            ! function f(b) {
                                _.each(b, function(b, c) {
                                    var d = _.type(c);
                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), d ? g = i.length : b && (e = c, k(b))
                        }
                        return this
                    },
                    remove: function() {
                        return i && _.each(arguments, function(a, b) {
                            for (var c;
                                 (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                        }), this
                    },
                    has: function(a) {
                        return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function() {
                        return i = [], g = 0, this
                    },
                    disable: function() {
                        return i = j = b = void 0, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = void 0, b || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, b) {
                        return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return l
        }, _.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", _.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return _.Deferred(function(c) {
                                _.each(b, function(b, f) {
                                    var g = _.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? _.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, _.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = R.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : _.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var pa;
        _.fn.ready = function(a) {
            return _.ready.promise().done(a), this
        }, _.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? _.readyWait++ : _.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
            }
        }), _.ready.promise = function(b) {
            return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
        }, _.ready.promise();
        var qa = _.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === _.type(c)) {
                e = !0;
                for (h in c) _.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(_(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        };
        _.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
            key: function(a) {
                if (!h.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = h.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c, _.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c
            },
            set: function(a, b, c) {
                var d, e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d];
                return f
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = this.key(a),
                    g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                    _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                    for (; c--;) delete g[d[c]]
                }
            },
            hasData: function(a) {
                return !_.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        };
        var ra = new h,
            sa = new h,
            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ua = /([A-Z])/g;
        _.extend({
            hasData: function(a) {
                return sa.hasData(a) || ra.hasData(a)
            },
            data: function(a, b, c) {
                return sa.access(a, b, c)
            },
            removeData: function(a, b) {
                sa.remove(a, b)
            },
            _data: function(a, b, c) {
                return ra.access(a, b, c)
            },
            _removeData: function(a, b) {
                ra.remove(a, b)
            }
        }), _.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                        ra.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    sa.set(this, a)
                }) : qa(this, function(b) {
                    var c, d = _.camelCase(a);
                    if (f && void 0 === b) {
                        if (c = sa.get(f, a), void 0 !== c) return c;
                        if (c = sa.get(f, d), void 0 !== c) return c;
                        if (c = i(f, d, void 0), void 0 !== c) return c
                    } else this.each(function() {
                        var c = sa.get(this, d);
                        sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    sa.remove(this, a)
                })
            }
        }), _.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = _.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = _._queueHooks(a, b),
                    g = function() {
                        _.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ra.get(a, c) || ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function() {
                        ra.remove(a, [b + "queue", c])
                    })
                })
            }
        }), _.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = _.queue(this, a, b);
                    _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    _.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = _.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wa = ["Top", "Right", "Bottom", "Left"],
            xa = function(a, b) {
                return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
            },
            ya = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = Z.createDocumentFragment(),
                b = a.appendChild(Z.createElement("div")),
                c = Z.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var za = "undefined";
        Y.focusinBubbles = "onfocusin" in a;
        var Aa = /^key/,
            Ba = /^(?:mouse|pointer|contextmenu)|click/,
            Ca = /^(?:focusinfocus|focusoutblur)$/,
            Da = /^([^.]*)(?:\.(.+)|)$/;
        _.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && _.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(na) || [""], j = b.length; j--;)
                        if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                    _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || Z],
                    n = X.call(b, "type") ? b.type : b,
                    o = X.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                    if (!e && !l.noBubble && !_.isWindow(d)) {
                        for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                         (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            dispatch: function(a) {
                a = _.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = R.call(arguments),
                    i = (ra.get(this, "events") || {})[a.type] || [],
                    j = _.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = _.event.handlers.call(this, a, i), b = 0;
                         (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, c = 0;
                             (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[_.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== l() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === l() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return _.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = _.extend(new _.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, _.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }, _.Event = function(a, b) {
            return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
        }, _.Event.prototype = {
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, _.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            _.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), Y.focusinBubbles || _.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                _.event.simulate(b, a.target, _.event.fix(a), !0)
            };
            _.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b);
                    e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b) - 1;
                    e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
                }
            }
        }), _.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (g in a) this.on(g, b, c, a[g], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
                else if (!d) return this;
                return 1 === e && (f = d, d = function(a) {
                    return _().off(a), f.apply(this, arguments)
                }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                    _.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                    _.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    _.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? _.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fa = /<([\w:]+)/,
            Ga = /<|&#?\w+;/,
            Ha = /<(?:script|style|link)/i,
            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = /^true\/(.*)/,
            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ma = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = _.contains(a.ownerDocument, a);
                if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                    else q(a, h);
                return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                    if (e = a[m], e || 0 === e)
                        if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                        else if (Ga.test(e)) {
                            for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                            _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                        } else l.push(b.createTextNode(e));
                for (k.textContent = "", m = 0; e = l[m++];)
                    if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                        for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
                return k
            },
            cleanData: function(a) {
                for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                    if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                        if (b.events)
                            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                        ra.cache[e] && delete ra.cache[e]
                    }
                    delete sa.cache[c[sa.expando]]
                }
            }
        }), _.fn.extend({
            text: function(a) {
                return qa(this, function(a) {
                    return void 0 === a ? _.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return _.clone(this, a, b)
                })
            },
            html: function(a) {
                return qa(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Ea, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = S.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    p = _.isFunction(m);
                if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                    for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                    if (f)
                        for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
                }
                return this
            }
        }), _.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            _.fn[a] = function(a) {
                for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var Na, Oa = {},
            Pa = /^margin/,
            Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
            Ra = function(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
            };
        ! function() {
            function b() {
                g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
                var b = a.getComputedStyle(g, null);
                c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
            }
            var c, d, e = Z.documentElement,
                f = Z.createElement("div"),
                g = Z.createElement("div");
            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
                pixelPosition: function() {
                    return b(), c
                },
                boxSizingReliable: function() {
                    return null == d && b(), d
                },
                reliableMarginRight: function() {
                    var b, c = g.appendChild(Z.createElement("div"));
                    return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
                }
            }))
        }(), _.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = new RegExp("^(" + va + ")(.*)$", "i"),
            Ua = new RegExp("^([+-])=(" + va + ")", "i"),
            Va = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Wa = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xa = ["Webkit", "O", "Moz", "ms"];
        _.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = v(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = _.camelCase(b),
                        i = a.style;
                    return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = _.camelCase(b);
                return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
            }
        }), _.each(["height", "width"], function(a, b) {
            _.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                        return A(a, b, d)
                    }) : A(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
            return b ? _.swap(a, {
                display: "inline-block"
            }, v, [a, "marginRight"]) : void 0
        }), _.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            _.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Pa.test(a) || (_.cssHooks[a + b].set = y)
        }), _.fn.extend({
            css: function(a, b) {
                return qa(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (_.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return B(this, !0)
            },
            hide: function() {
                return B(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    xa(this) ? _(this).show() : _(this).hide()
                })
            }
        }), _.Tween = C, C.prototype = {
            constructor: C,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = C.propHooks[this.prop];
                return a && a.get ? a.get(this) : C.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = C.propHooks[this.prop];
                return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
            }
        }, C.prototype.init.prototype = C.prototype, C.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, _.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, _.fx = C.prototype.init, _.fx.step = {};
        var Ya, Za, $a = /^(?:toggle|show|hide)$/,
            _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
            ab = /queueHooks$/,
            bb = [G],
            cb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = _a.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        _.Animation = _.extend(I, {
            tweener: function(a, b) {
                _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? bb.unshift(a) : bb.push(a)
            }
        }), _.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? _.extend({}, a) : {
                complete: c || !c && b || _.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !_.isFunction(b) && b
            };
            return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
            }, d
        }, _.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(xa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = _.isEmptyObject(a),
                    f = _.speed(b, c, d),
                    g = function() {
                        var b = I(this, _.extend({}, a), f);
                        (e || ra.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = _.timers,
                        g = ra.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && _.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ra.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = _.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(a, b) {
            var c = _.fn[b];
            _.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), _.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            _.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), _.timers = [], _.fx.tick = function() {
            var a, b = 0,
                c = _.timers;
            for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || _.fx.stop(), Ya = void 0
        }, _.fx.timer = function(a) {
            _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
        }, _.fx.interval = 13, _.fx.start = function() {
            Za || (Za = setInterval(_.fx.tick, _.fx.interval))
        }, _.fx.stop = function() {
            clearInterval(Za), Za = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(a, b) {
            return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
            function() {
                var a = Z.createElement("input"),
                    b = Z.createElement("select"),
                    c = b.appendChild(Z.createElement("option"));
                a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
            }();
        var db, eb, fb = _.expr.attrHandle;
        _.fn.extend({
            attr: function(a, b) {
                return qa(this, _.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    _.removeAttr(this, a)
                })
            }
        }), _.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(na);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), eb = {
            set: function(a, b, c) {
                return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = fb[b] || _.find.attr;
            fb[b] = function(a, b, d) {
                var e, f;
                return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
            }
        });
        var gb = /^(?:input|select|textarea|button)$/i;
        _.fn.extend({
            prop: function(a, b) {
                return qa(this, _.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[_.propFix[a] || a]
                })
            }
        }), _.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || (_.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            _.propFix[this.toLowerCase()] = this
        });
        var hb = /[\t\r\n\f]/g;
        _.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = _.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function(c) {
                    _(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        });
        var ib = /\r/g;
        _.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
                }
            }
        }), _.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = _.find.attr(a, "value");
                        return null != b ? b : _.trim(_.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                                if (b = _(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), _.each(["radio", "checkbox"], function() {
            _.valHooks[this] = {
                set: function(a, b) {
                    return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                }
            }, Y.checkOn || (_.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            _.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), _.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var jb = _.now(),
            kb = /\?/;
        _.parseJSON = function(a) {
            return JSON.parse(a + "")
        }, _.parseXML = function(a) {
            var b, c;
            if (!a || "string" != typeof a) return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
        };
        var lb = /#.*$/,
            mb = /([?&])_=[^&]*/,
            nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            pb = /^(?:GET|HEAD)$/,
            qb = /^\/\//,
            rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = a.location.href,
            wb = rb.exec(vb.toLowerCase()) || [];
        _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vb,
                type: "GET",
                isLocal: ob.test(wb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ub,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": _.parseJSON,
                    "text xml": _.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
            },
            ajaxPrefilter: J(sb),
            ajaxTransport: J(tb),
            ajax: function(a, b) {
                function c(a, b, c, g) {
                    var i, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                    o = _.Deferred(),
                    p = _.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!g)
                                    for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                                b = g[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? f : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return d && d.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
                j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
                if (d = K(tb, l, b, v)) {
                    v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, d.send(r, c)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return _.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return _.get(a, void 0, b, "script")
            }
        }), _.each(["get", "post"], function(a, b) {
            _[b] = function(a, c, d, e) {
                return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), _._evalUrl = function(a) {
            return _.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, _.fn.extend({
            wrapAll: function(a) {
                var b;
                return _.isFunction(a) ? this.each(function(b) {
                    _(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return _.isFunction(a) ? this.each(function(b) {
                    _(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = _(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = _.isFunction(a);
                return this.each(function(c) {
                    _(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
                }).end()
            }
        }), _.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, _.expr.filters.visible = function(a) {
            return !_.expr.filters.hidden(a)
        };
        var xb = /%20/g,
            yb = /\[\]$/,
            zb = /\r?\n/g,
            Ab = /^(?:submit|button|image|reset|file)$/i,
            Bb = /^(?:input|select|textarea|keygen)/i;
        _.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) O(c, a[c], b, e);
            return d.join("&").replace(xb, "+")
        }, _.fn.extend({
            serialize: function() {
                return _.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = _.prop(this, "elements");
                    return a ? _.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
                }).map(function(a, b) {
                    var c = _(this).val();
                    return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(zb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(zb, "\r\n")
                    }
                }).get()
            }
        }), _.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        };
        var Cb = 0,
            Db = {},
            Eb = {
                0: 200,
                1223: 204
            },
            Fb = _.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in Db) Db[a]()
        }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
            var b;
            return Y.cors || Fb && !a.crossDomain ? {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Cb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) f.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                text: f.responseText
                            } : void 0, f.getAllResponseHeaders()))
                        }
                    }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (h) {
                        if (b) throw h
                    }
                },
                abort: function() {
                    b && b()
                }
            } : void 0
        }), _.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return _.globalEval(a), a
                }
            }
        }), _.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), _.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = _("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), Z.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Gb = [],
            Hb = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Gb.pop() || _.expando + "_" + jb++;
                return this[a] = !0, a
            }
        }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || _.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), _.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Z;
            var d = ga.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
        };
        var Ib = _.fn.load;
        _.fn.load = function(a, b, c) {
            if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
        }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            _.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), _.expr.filters.animated = function(a) {
            return _.grep(_.timers, function(b) {
                return a === b.elem
            }).length
        };
        var Jb = a.document.documentElement;
        _.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = _.css(a, "position"),
                    l = _(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, _.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - _.css(c, "marginTop", !0),
                        left: b.left - d.left - _.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                    return a || Jb
                })
            }
        }), _.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(b, c) {
            var d = "pageYOffset" === c;
            _.fn[b] = function(e) {
                return qa(this, function(b, e, f) {
                    var g = P(b);
                    return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                }, b, e, arguments.length, null)
            }
        }), _.each(["top", "left"], function(a, b) {
            _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
                return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
            })
        }), _.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            _.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                _.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return qa(this, function(b, c, d) {
                        var e;
                        return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), _.fn.size = function() {
            return this.length
        }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return _
        });
        var Kb = a.jQuery,
            Lb = a.$;
        return _.noConflict = function(b) {
            return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
        }, typeof b === za && (a.jQuery = a.$ = _), _
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)),
            c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
    function(a, b, c) {
        "use strict";
        var d, e = a.document,
            f = e.documentElement,
            g = a.Modernizr,
            h = function(a) {
                return a.charAt(0).toUpperCase() + a.slice(1)
            },
            i = "Moz Webkit O Ms".split(" "),
            j = function(a) {
                var b, c = f.style;
                if ("string" == typeof c[a]) return a;
                a = h(a);
                for (var d = 0, e = i.length; e > d; d++)
                    if (b = i[d] + a, "string" == typeof c[b]) return b
            },
            k = j("transform"),
            l = j("transitionProperty"),
            m = {
                csstransforms: function() {
                    return !!k
                },
                csstransforms3d: function() {
                    var a = !!j("perspective");
                    if (a && "webkitPerspective" in f.style) {
                        var c = b("<style>@media (transform-3d),(-webkit-transform-3d){#modernizr{height:3px}}</style>").appendTo("head"),
                            d = b('<div id="modernizr" />').appendTo("html");
                        a = 3 === d.height(), d.remove(), c.remove()
                    }
                    return a
                },
                csstransitions: function() {
                    return !!l
                }
            };
        if (g)
            for (d in m) g.hasOwnProperty(d) || g.addTest(d, m[d]);
        else {
            g = a.Modernizr = {
                _version: "1.6ish: miniModernizr for Isotope"
            };
            var n, o = " ";
            for (d in m) n = m[d](), g[d] = n, o += " " + (n ? "" : "no-") + d;
            b("html").addClass(o)
        }
        if (g.csstransforms) {
            var p = g.csstransforms3d ? {
                    translate: function(a) {
                        return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                    },
                    scale: function(a) {
                        return "scale3d(" + a + ", " + a + ", 1) "
                    }
                } : {
                    translate: function(a) {
                        return "translate(" + a[0] + "px, " + a[1] + "px) "
                    },
                    scale: function(a) {
                        return "scale(" + a + ") "
                    }
                },
                q = function(a, c, d) {
                    var e, f, g = b.data(a, "isoTransform") || {},
                        h = {},
                        i = {};
                    h[c] = d, b.extend(g, h);
                    for (e in g) f = g[e], i[e] = p[e](f);
                    var j = i.translate || "",
                        l = i.scale || "",
                        m = j + l;
                    b.data(a, "isoTransform", g), a.style[k] = m
                };
            b.cssNumber.scale = !0, b.cssHooks.scale = {
                set: function(a, b) {
                    q(a, "scale", b)
                },
                get: function(a, c) {
                    var d = b.data(a, "isoTransform");
                    return d && d.scale ? d.scale : 1
                }
            }, b.fx.step.scale = function(a) {
                b.cssHooks.scale.set(a.elem, a.now + a.unit)
            }, b.cssNumber.translate = !0, b.cssHooks.translate = {
                set: function(a, b) {
                    q(a, "translate", b)
                },
                get: function(a, c) {
                    var d = b.data(a, "isoTransform");
                    return d && d.translate ? d.translate : [0, 0]
                }
            }
        }
        var r, s;
        g.csstransitions && (r = {
            WebkitTransitionProperty: "webkitTransitionEnd",
            MozTransitionProperty: "transitionend",
            OTransitionProperty: "oTransitionEnd otransitionend",
            transitionProperty: "transitionend"
        }[l], s = j("transitionDuration"));
        var t, u = b.event,
            v = b.event.handle ? "handle" : "dispatch";
        u.special.smartresize = {
            setup: function() {
                b(this).bind("resize", u.special.smartresize.handler)
            },
            teardown: function() {
                b(this).unbind("resize", u.special.smartresize.handler)
            },
            handler: function(a, b) {
                var c = this,
                    d = arguments;
                a.type = "smartresize", t && clearTimeout(t), t = setTimeout(function() {
                    u[v].apply(c, d)
                }, "execAsap" === b ? 0 : 100)
            }
        }, b.fn.smartresize = function(a) {
            return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
        }, b.Isotope = function(a, c, d) {
            this.element = b(c), this._create(a), this._init(d)
        };
        var w = ["width", "height"],
            x = b(a);
        b.Isotope.settings = {
            resizable: !0,
            layoutMode: "masonry",
            containerClass: "isotope",
            itemClass: "isotope-item",
            hiddenClass: "isotope-hidden",
            hiddenStyle: {
                opacity: 0,
                scale: .001
            },
            visibleStyle: {
                opacity: 1,
                scale: 1
            },
            containerStyle: {
                position: "relative",
                overflow: "hidden"
            },
            animationEngine: "best-available",
            animationOptions: {
                queue: !1,
                duration: 800
            },
            sortBy: "original-order",
            sortAscending: !0,
            resizesContainer: !0,
            transformsEnabled: !0,
            itemPositionDataEnabled: !1
        }, b.Isotope.prototype = {
            _create: function(a) {
                this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
                var c = this.element[0].style;
                this.originalStyle = {};
                var d = w.slice(0);
                for (var e in this.options.containerStyle) d.push(e);
                for (var f = 0, g = d.length; g > f; f++) e = d[f], this.originalStyle[e] = c[e] || "";
                this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
                var h = {
                    "original-order": function(a, b) {
                        return b.elemCount++, b.elemCount
                    },
                    random: function() {
                        return Math.random()
                    }
                };
                this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
                    left: parseInt(this.element.css("padding-left") || 0, 10),
                    top: parseInt(this.element.css("padding-top") || 0, 10)
                };
                var i = this;
                setTimeout(function() {
                    i.element.addClass(i.options.containerClass)
                }, 0), this.options.resizable && x.bind("smartresize.isotope", function() {
                    i.resize()
                }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                    return !1
                })
            },
            _getAtoms: function(a) {
                var b = this.options.itemSelector,
                    c = b ? a.filter(b).add(a.find(b)) : a,
                    d = {
                        position: "absolute"
                    };
                return c = c.filter(function(a, b) {
                    return 1 === b.nodeType
                }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
            },
            _init: function(a) {
                this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
            },
            option: function(a) {
                if (b.isPlainObject(a)) {
                    this.options = b.extend(!0, this.options, a);
                    var c;
                    for (var d in a) c = "_update" + h(d), this[c] && this[c]()
                }
            },
            _updateAnimationEngine: function() {
                var a, b = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
                switch (b) {
                    case "css":
                    case "none":
                        a = !1;
                        break;
                    case "jquery":
                        a = !0;
                        break;
                    default:
                        a = !g.csstransitions
                }
                this.isUsingJQueryAnimation = a, this._updateUsingTransforms()
            },
            _updateTransformsEnabled: function() {
                this._updateUsingTransforms()
            },
            _updateUsingTransforms: function() {
                var a = this.usingTransforms = this.options.transformsEnabled && g.csstransforms && g.csstransitions && !this.isUsingJQueryAnimation;
                a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
            },
            _filter: function(a) {
                var b = "" === this.options.filter ? "*" : this.options.filter;
                if (!b) return a;
                var c = this.options.hiddenClass,
                    d = "." + c,
                    e = a.filter(d),
                    f = e;
                if ("*" !== b) {
                    f = e.filter(b);
                    var g = a.not(d).not(b).addClass(c);
                    this.styleQueue.push({
                        $el: g,
                        style: this.options.hiddenStyle
                    })
                }
                return this.styleQueue.push({
                    $el: f,
                    style: this.options.visibleStyle
                }), f.removeClass(c), a.filter(b)
            },
            updateSortData: function(a, c) {
                var d, e, f = this,
                    g = this.options.getSortData;
                a.each(function() {
                    d = b(this), e = {};
                    for (var a in g) c || "original-order" !== a ? e[a] = g[a](d, f) : e[a] = b.data(this, "isotope-sort-data")[a];
                    b.data(this, "isotope-sort-data", e)
                })
            },
            _sort: function() {
                var a = this.options.sortBy,
                    b = this._getSorter,
                    c = this.options.sortAscending ? 1 : -1,
                    d = function(d, e) {
                        var f = b(d, a),
                            g = b(e, a);
                        return f === g && "original-order" !== a && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : g > f ? -1 : 0) * c
                    };
                this.$filteredAtoms.sort(d)
            },
            _getSorter: function(a, c) {
                return b.data(a, "isotope-sort-data")[c]
            },
            _translate: function(a, b) {
                return {
                    translate: [a, b]
                }
            },
            _positionAbs: function(a, b) {
                return {
                    left: a,
                    top: b
                }
            },
            _pushPosition: function(a, b, c) {
                b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
                var d = this.getPositionStyles(b, c);
                this.styleQueue.push({
                    $el: a,
                    style: d
                }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                    x: b,
                    y: c
                })
            },
            layout: function(a, b) {
                var c = this.options.layoutMode;
                if (this["_" + c + "Layout"](a), this.options.resizesContainer) {
                    var d = this["_" + c + "GetContainerSize"]();
                    this.styleQueue.push({
                        $el: this.element,
                        style: d
                    })
                }
                this._processStyleQueue(a, b), this.isLaidOut = !0
            },
            _processStyleQueue: function(a, c) {
                var d, e, f, h, i = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
                    j = this.options.animationOptions,
                    k = this.options.onLayout;
                if (e = function(a, b) {
                        b.$el[i](b.style, j)
                    }, this._isInserting && this.isUsingJQueryAnimation) e = function(a, b) {
                    d = b.$el.hasClass("no-transition") ? "css" : i, b.$el[d](b.style, j)
                };
                else if (c || k || j.complete) {
                    var l = !1,
                        m = [c, k, j.complete],
                        n = this;
                    if (f = !0, h = function() {
                            if (!l) {
                                for (var b, c = 0, d = m.length; d > c; c++) b = m[c], "function" == typeof b && b.call(n.element, a, n);
                                l = !0
                            }
                        }, this.isUsingJQueryAnimation && "animate" === i) j.complete = h, f = !1;
                    else if (g.csstransitions) {
                        for (var o, p = 0, q = this.styleQueue[0], t = q && q.$el; !t || !t.length;) {
                            if (o = this.styleQueue[p++], !o) return;
                            t = o.$el
                        }
                        var u = parseFloat(getComputedStyle(t[0])[s]);
                        u > 0 && (e = function(a, b) {
                            b.$el[i](b.style, j).one(r, h)
                        }, f = !1)
                    }
                }
                b.each(this.styleQueue, e), f && h(), this.styleQueue = []
            },
            resize: function() {
                this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
            },
            reLayout: function(a) {
                this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
            },
            addItems: function(a, b) {
                var c = this._getAtoms(a);
                this.$allAtoms = this.$allAtoms.add(c), b && b(c)
            },
            insert: function(a, b) {
                this.element.append(a);
                var c = this;
                this.addItems(a, function(a) {
                    var d = c._filter(a);
                    c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
                })
            },
            appended: function(a, b) {
                var c = this;
                this.addItems(a, function(a) {
                    c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
                })
            },
            _addHideAppended: function(a) {
                this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                    $el: a,
                    style: this.options.hiddenStyle
                })
            },
            _revealAppended: function(a, b) {
                var c = this;
                setTimeout(function() {
                    a.removeClass("no-transition"), c.styleQueue.push({
                        $el: a,
                        style: c.options.visibleStyle
                    }), c._isInserting = !1, c._processStyleQueue(a, b)
                }, 10)
            },
            reloadItems: function() {
                this.$allAtoms = this._getAtoms(this.element.children())
            },
            remove: function(a, b) {
                this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
                var c = this,
                    d = function() {
                        a.remove(), b && b.call(c.element)
                    };
                a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                    $el: a,
                    style: this.options.hiddenStyle
                }), this._sort(), this.reLayout(d)) : d()
            },
            shuffle: function(a) {
                this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
            },
            destroy: function() {
                var a = this.usingTransforms,
                    b = this.options;
                this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                    var b = this.style;
                    b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[k] = "")
                });
                var c = this.element[0].style;
                for (var d in this.originalStyle) c[d] = this.originalStyle[d];
                this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), x.unbind(".isotope")
            },
            _getSegments: function(a) {
                var b, c = this.options.layoutMode,
                    d = a ? "rowHeight" : "columnWidth",
                    e = a ? "height" : "width",
                    f = a ? "rows" : "cols",
                    g = this.element[e](),
                    i = this.options[c] && this.options[c][d] || this.$filteredAtoms["outer" + h(e)](!0) || g;
                b = Math.floor(g / i), b = Math.max(b, 1), this[c][f] = b, this[c][d] = i
            },
            _checkIfSegmentsChanged: function(a) {
                var b = this.options.layoutMode,
                    c = a ? "rows" : "cols",
                    d = this[b][c];
                return this._getSegments(a), this[b][c] !== d
            },
            _masonryReset: function() {
                this.masonry = {}, this._getSegments();
                var a = this.masonry.cols;
                for (this.masonry.colYs = []; a--;) this.masonry.colYs.push(0)
            },
            _masonryLayout: function(a) {
                var c = this,
                    d = c.masonry;
                a.each(function() {
                    var a = b(this),
                        e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                    if (e = Math.min(e, d.cols), 1 === e) c._masonryPlaceBrick(a, d.colYs);
                    else {
                        var f, g, h = d.cols + 1 - e,
                            i = [];
                        for (g = 0; h > g; g++) f = d.colYs.slice(g, g + e), i[g] = Math.max.apply(Math, f);
                        c._masonryPlaceBrick(a, i)
                    }
                })
            },
            _masonryPlaceBrick: function(a, b) {
                for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; f > e; e++)
                    if (b[e] === c) {
                        d = e;
                        break
                    }
                var g = this.masonry.columnWidth * d,
                    h = c;
                this._pushPosition(a, g, h);
                var i = c + a.outerHeight(!0),
                    j = this.masonry.cols + 1 - f;
                for (e = 0; j > e; e++) this.masonry.colYs[d + e] = i
            },
            _masonryGetContainerSize: function() {
                var a = Math.max.apply(Math, this.masonry.colYs);
                return {
                    height: a
                }
            },
            _masonryResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _fitRowsReset: function() {
                this.fitRows = {
                    x: 0,
                    y: 0,
                    height: 0
                }
            },
            _fitRowsLayout: function(a) {
                var c = this,
                    d = this.element.width(),
                    e = this.fitRows;
                a.each(function() {
                    var a = b(this),
                        f = a.outerWidth(!0),
                        g = a.outerHeight(!0);
                    0 !== e.x && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
                })
            },
            _fitRowsGetContainerSize: function() {
                return {
                    height: this.fitRows.height
                }
            },
            _fitRowsResizeChanged: function() {
                return !0
            },
            _cellsByRowReset: function() {
                this.cellsByRow = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByRowLayout: function(a) {
                var c = this,
                    d = this.cellsByRow;
                a.each(function() {
                    var a = b(this),
                        e = d.index % d.cols,
                        f = Math.floor(d.index / d.cols),
                        g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                        h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                    c._pushPosition(a, g, h), d.index++
                })
            },
            _cellsByRowGetContainerSize: function() {
                return {
                    height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
                }
            },
            _cellsByRowResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _straightDownReset: function() {
                this.straightDown = {
                    y: 0
                }
            },
            _straightDownLayout: function(a) {
                var c = this;
                a.each(function(a) {
                    var d = b(this);
                    c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0)
                })
            },
            _straightDownGetContainerSize: function() {
                return {
                    height: this.straightDown.y
                }
            },
            _straightDownResizeChanged: function() {
                return !0
            },
            _masonryHorizontalReset: function() {
                this.masonryHorizontal = {}, this._getSegments(!0);
                var a = this.masonryHorizontal.rows;
                for (this.masonryHorizontal.rowXs = []; a--;) this.masonryHorizontal.rowXs.push(0)
            },
            _masonryHorizontalLayout: function(a) {
                var c = this,
                    d = c.masonryHorizontal;
                a.each(function() {
                    var a = b(this),
                        e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                    if (e = Math.min(e, d.rows), 1 === e) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                    else {
                        var f, g, h = d.rows + 1 - e,
                            i = [];
                        for (g = 0; h > g; g++) f = d.rowXs.slice(g, g + e), i[g] = Math.max.apply(Math, f);
                        c._masonryHorizontalPlaceBrick(a, i)
                    }
                })
            },
            _masonryHorizontalPlaceBrick: function(a, b) {
                for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; f > e; e++)
                    if (b[e] === c) {
                        d = e;
                        break
                    }
                var g = c,
                    h = this.masonryHorizontal.rowHeight * d;
                this._pushPosition(a, g, h);
                var i = c + a.outerWidth(!0),
                    j = this.masonryHorizontal.rows + 1 - f;
                for (e = 0; j > e; e++) this.masonryHorizontal.rowXs[d + e] = i
            },
            _masonryHorizontalGetContainerSize: function() {
                var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
                return {
                    width: a
                }
            },
            _masonryHorizontalResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _fitColumnsReset: function() {
                this.fitColumns = {
                    x: 0,
                    y: 0,
                    width: 0
                }
            },
            _fitColumnsLayout: function(a) {
                var c = this,
                    d = this.element.height(),
                    e = this.fitColumns;
                a.each(function() {
                    var a = b(this),
                        f = a.outerWidth(!0),
                        g = a.outerHeight(!0);
                    0 !== e.y && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
                })
            },
            _fitColumnsGetContainerSize: function() {
                return {
                    width: this.fitColumns.width
                }
            },
            _fitColumnsResizeChanged: function() {
                return !0
            },
            _cellsByColumnReset: function() {
                this.cellsByColumn = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByColumnLayout: function(a) {
                var c = this,
                    d = this.cellsByColumn;
                a.each(function() {
                    var a = b(this),
                        e = Math.floor(d.index / d.rows),
                        f = d.index % d.rows,
                        g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                        h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                    c._pushPosition(a, g, h), d.index++
                })
            },
            _cellsByColumnGetContainerSize: function() {
                return {
                    width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
                }
            },
            _cellsByColumnResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _straightAcrossReset: function() {
                this.straightAcross = {
                    x: 0
                }
            },
            _straightAcrossLayout: function(a) {
                var c = this;
                a.each(function(a) {
                    var d = b(this);
                    c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0)
                })
            },
            _straightAcrossGetContainerSize: function() {
                return {
                    width: this.straightAcross.x
                }
            },
            _straightAcrossResizeChanged: function() {
                return !0
            }
        }, b.fn.imagesLoaded = function(a) {
            function c() {
                a.call(e, f)
            }

            function d(a) {
                var e = a.target;
                e.src !== h && -1 === b.inArray(e, i) && (i.push(e), --g <= 0 && (setTimeout(c), f.unbind(".imagesLoaded", d)))
            }
            var e = this,
                f = e.find("img").add(e.filter("img")),
                g = f.length,
                h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                i = [];
            return g || c(), f.bind("load.imagesLoaded error.imagesLoaded", d).each(function() {
                var a = this.src;
                this.src = h, this.src = a
            }), e
        };
        var y = function(b) {
            a.console && a.console.error(b)
        };
        b.fn.isotope = function(a, c) {
            if ("string" == typeof a) {
                var d = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var c = b.data(this, "isotope");
                    return c ? b.isFunction(c[a]) && "_" !== a.charAt(0) ? void c[a].apply(c, d) : void y("no such method '" + a + "' for isotope instance") : void y("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'")
                })
            } else this.each(function() {
                var d = b.data(this, "isotope");
                d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
            });
            return this
        }
    }(window, jQuery),
    function(a) {
        var b, c, d, e, f, g, h, i = "Close",
            j = "BeforeClose",
            k = "AfterClose",
            l = "BeforeAppend",
            m = "MarkupParse",
            n = "Open",
            o = "Change",
            p = "mfp",
            q = "." + p,
            r = "mfp-ready",
            s = "mfp-removing",
            t = "mfp-prevent-close",
            u = function() {},
            v = !!window.jQuery,
            w = a(window),
            x = function(a, c) {
                b.ev.on(p + a + q, c)
            },
            y = function(b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
            },
            z = function(c, d) {
                b.ev.triggerHandler(p + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
            },
            A = function(c) {
                return c === h && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), h = c), b.currTemplate.closeBtn
            },
            B = function() {
                a.magnificPopup.instance || (b = new u, b.init(), a.magnificPopup.instance = b)
            },
            C = function() {
                var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== a.transition) return !0;
                for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1
            };
        u.prototype = {
            constructor: u,
            init: function() {
                var c = navigator.appVersion;
                b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = C(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document.body), e = a(document), b.popupsCache = {}
            },
            open: function(c) {
                var d;
                if (c.isObj === !1) {
                    b.items = c.items.toArray(), b.index = 0;
                    var f, h = c.items;
                    for (d = 0; d < h.length; d++)
                        if (f = h[d], f.parsed && (f = f.el[0]), f === c.el[0]) {
                            b.index = d;
                            break
                        }
                } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
                if (b.isOpen) return void b.updateItemHTML();
                b.types = [], g = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = e, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = y("bg").on("click" + q, function() {
                    b.close()
                }), b.wrap = y("wrap").attr("tabindex", -1).on("click" + q, function(a) {
                    b._checkIfClose(a.target) && b.close()
                }), b.container = y("container", b.wrap)), b.contentContainer = y("content"), b.st.preloader && (b.preloader = y("preloader", b.container, b.st.tLoading));
                var i = a.magnificPopup.modules;
                for (d = 0; d < i.length; d++) {
                    var j = i[d];
                    j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
                }
                z("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (x(m, function(a, b, c, d) {
                    c.close_replaceWith = A(d.type)
                }), g += " mfp-close-btn-in") : b.wrap.append(A())), b.st.alignTop && (g += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                }) : b.wrap.css({
                    top: w.scrollTop(),
                    position: "absolute"
                }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                    height: e.height(),
                    position: "absolute"
                }), b.st.enableEscapeKey && e.on("keyup" + q, function(a) {
                    27 === a.keyCode && b.close()
                }), w.on("resize" + q, function() {
                    b.updateSize()
                }), b.st.closeOnContentClick || (g += " mfp-auto-cursor"), g && b.wrap.addClass(g);
                var k = b.wH = w.height(),
                    l = {};
                if (b.fixedContentPos && b._hasScrollBar(k)) {
                    var o = b._getScrollbarSize();
                    o && (l.marginRight = o)
                }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : l.overflow = "hidden");
                var p = b.st.mainClass;
                return b.isIE7 && (p += " mfp-ie7"), p && b._addClassToMFP(p), b.updateItemHTML(), z("BuildControls"), a("html").css(l), b.bgOverlay.add(b.wrap).prependTo(document.body), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                    b.content ? (b._addClassToMFP(r), b._setFocus()) : b.bgOverlay.addClass(r), e.on("focusin" + q, b._onFocusIn)
                }, 16), b.isOpen = !0, b.updateSize(k), z(n), c
            },
            close: function() {
                b.isOpen && (z(j), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(s), setTimeout(function() {
                    b._close()
                }, b.st.removalDelay)) : b._close())
            },
            _close: function() {
                z(i);
                var c = s + " " + r + " ";
                if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                    var d = {
                        marginRight: ""
                    };
                    b.isIE7 ? a("body, html").css("overflow", "") : d.overflow = "", a("html").css(d)
                }
                e.off("keyup" + q + " focusin" + q), b.ev.off(q), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, z(k)
            },
            updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d
                } else b.wH = a || w.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), z("Resize")
            },
            updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (z("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                    var e = b.st[d] ? b.st[d].markup : !1;
                    z("FirstMarkupParse", e), e ? b.currTemplate[d] = a(e) : b.currTemplate[d] = !0
                }
                f && f !== c.type && b.container.removeClass("mfp-" + f + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, z(o, c), f = c.type, b.container.prepend(b.contentContainer), z("AfterChange")
            },
            appendContent: function(a, c) {
                b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(A()) : b.content = a : b.content = "", z(l), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
            },
            parseEl: function(c) {
                var d = b.items[c],
                    e = d.type;
                if (d = d.tagName ? {
                        el: a(d)
                    } : {
                        data: d,
                        src: d.src
                    }, d.el) {
                    for (var f = b.types, g = 0; g < f.length; g++)
                        if (d.el.hasClass("mfp-" + f[g])) {
                            e = f[g];
                            break
                        }
                    d.src = d.el.attr("data-mfp-src"), d.src || (d.src = d.el.attr("href"))
                }
                return d.type = e || b.st.type || "inline", d.index = c, d.parsed = !0, b.items[c] = d, z("ElementParse", d), b.items[c]
            },
            addGroup: function(a, c) {
                var d = function(d) {
                    d.mfpEl = this, b._openClick(d, a, c)
                };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
            },
            _openClick: function(c, d, e) {
                var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
                if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b)) return !0
                        } else if (w.width() < g) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
                }
            },
            updateStatus: function(a, d) {
                if (b.preloader) {
                    c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                    var e = {
                        status: a,
                        text: d
                    };
                    z("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation()
                    }), b.container.addClass("mfp-s-" + a), c = a
                }
            },
            _checkIfClose: function(c) {
                if (!a(c).hasClass(t)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e) return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d) return !0
                    } else if (e && a.contains(document, c)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(a) {
                b.bgOverlay.addClass(a), b.wrap.addClass(a)
            },
            _removeClassFromMFP: function(a) {
                this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
            },
            _hasScrollBar: function(a) {
                return (b.isIE7 ? e.height() : document.body.scrollHeight) > (a || w.height())
            },
            _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
            },
            _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
            },
            _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), z(m, [b, c, d]), a.each(c, function(a, c) {
                    if (void 0 === c || c === !1) return !0;
                    if (e = a.split("_"), e.length > 1) {
                        var d = b.find(q + "-" + e[0]);
                        if (d.length > 0) {
                            var f = e[1];
                            "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                        }
                    } else b.find(q + "-" + a).html(c)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
                }
                return b.scrollbarSize
            }
        }, a.magnificPopup = {
            instance: null,
            proto: u.prototype,
            modules: [],
            open: function(b, c) {
                return B(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
            },
            close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function(b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, a.fn.magnificPopup = function(c) {
            B();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = v ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                        mfpEl: e
                    }, d, f)
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), v ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
            return d
        };
        var D, E, F, G = "inline",
            H = function() {
                F && (E.after(F.addClass(D)).detach(), F = null)
            };
        a.magnificPopup.registerModule(G, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    b.types.push(G), x(i + "." + G, function() {
                        H()
                    })
                },
                getInline: function(c, d) {
                    if (H(), c.src) {
                        var e = b.st.inline,
                            f = a(c.src);
                        if (f.length) {
                            var g = f[0].parentNode;
                            g && g.tagName && (E || (D = e.hiddenClass, E = y(D), D = "mfp-" + D), F = f.after(E).detach().removeClass(D)), b.updateStatus("ready")
                        } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                        return c.inlineElement = f, f
                    }
                    return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
                }
            }
        });
        var I, J = "ajax",
            K = function() {
                I && d.removeClass(I)
            },
            L = function() {
                K(), b.req && b.req.abort()
            };
        a.magnificPopup.registerModule(J, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    b.types.push(J), I = b.st.ajax.cursor, x(i + "." + J, L), x("BeforeChange." + J, L)
                },
                getAjax: function(c) {
                    I && d.addClass(I), b.updateStatus("loading");
                    var e = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            z("ParseAjax", g), b.appendContent(a(g.data), J), c.finished = !0, K(), b._setFocus(), setTimeout(function() {
                                b.wrap.addClass(r)
                            }, 16), b.updateStatus("ready"), z("AjaxContentAdded")
                        },
                        error: function() {
                            K(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                        }
                    }, b.st.ajax.settings);
                    return b.req = a.ajax(e), ""
                }
            }
        });
        var M, N = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || ""
            }
            return ""
        };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var a = b.st.image,
                        c = ".image";
                    b.types.push("image"), x(n + c, function() {
                        "image" === b.currItem.type && a.cursor && d.addClass(a.cursor)
                    }), x(i + c, function() {
                        a.cursor && d.removeClass(a.cursor), w.off("resize" + q)
                    }), x("Resize" + c, b.resizeImage), b.isLowIE && x("AfterChange", b.resizeImage)
                },
                resizeImage: function() {
                    var a = b.currItem;
                    if (a && a.img && b.st.image.verticalFit) {
                        var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                    }
                },
                _onImageHasSize: function(a) {
                    a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
                },
                findImageSize: function(a) {
                    var c = 0,
                        d = a.img[0],
                        e = function(f) {
                            M && clearInterval(M), M = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(M), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                        };
                    e(1)
                },
                getImage: function(c, d) {
                    var e = 0,
                        f = function() {
                            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, z("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                        },
                        g = function() {
                            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                        },
                        h = b.st.image,
                        i = d.find(".mfp-img");
                    if (i.length) {
                        var j = document.createElement("img");
                        j.className = "mfp-img", c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), c.img[0].naturalWidth > 0 && (c.hasSize = !0)
                    }
                    return b._parseMarkup(d, {
                        title: N(c),
                        img_replaceWith: c.img
                    }, c), b.resizeImage(), c.hasSize ? (M && clearInterval(M), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
                }
            }
        });
        var O, P = function() {
            return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O
        };
        a.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(a) {
                    return a.is("img") ? a : a.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var a, c = b.st.zoom,
                        d = ".zoom";
                    if (c.enabled && b.supportsTransition) {
                        var e, f, g = c.duration,
                            h = function(a) {
                                var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    f = "transition";
                                return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                            },
                            k = function() {
                                b.content.css("visibility", "visible")
                            };
                        x("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                                f = h(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                    f.css(b._getOffset(!0)), e = setTimeout(function() {
                                        k(), setTimeout(function() {
                                            f.remove(), a = f = null, z("ZoomAnimationEnded")
                                        }, 16)
                                    }, g)
                                }, 16)
                            }
                        }), x(j + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                    if (a = b._getItemToZoom(), !a) return;
                                    f = h(a)
                                }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                    f.css(b._getOffset())
                                }, 16)
                            }
                        }), x(i + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), a = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === b.currItem.type
                },
                _getItemToZoom: function() {
                    return b.currItem.hasSize ? b.currItem.img : !1
                },
                _getOffset: function(c) {
                    var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                    var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f;
                    var h = {
                        width: d.width(),
                        height: (v ? d.innerHeight() : d[0].offsetHeight) - g - f
                    };
                    return P() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
                }
            }
        });
        var Q = "iframe",
            R = "//about:blank",
            S = function(a) {
                if (b.currTemplate[Q]) {
                    var c = b.currTemplate[Q].find("iframe");
                    c.length && (a || (c[0].src = R), b.isIE8 && c.css("display", a ? "block" : "none"))
                }
            };
        a.magnificPopup.registerModule(Q, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    b.types.push(Q), x("BeforeChange", function(a, b, c) {
                        b !== c && (b === Q ? S() : c === Q && S(!0))
                    }), x(i + "." + Q, function() {
                        S()
                    })
                },
                getIframe: function(c, d) {
                    var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() {
                        return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                    });
                    var g = {};
                    return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
                }
            }
        });
        var T = function(a) {
                var c = b.items.length;
                return a > c - 1 ? a - c : 0 > a ? c + a : a
            },
            U = function(a, b, c) {
                return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
            };
        a.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var c = b.st.gallery,
                        d = ".mfp-gallery",
                        f = Boolean(a.fn.mfpFastClick);
                    return b.direction = !0, c && c.enabled ? (g += " mfp-gallery", x(n + d, function() {
                        c.navigateByImgClick && b.wrap.on("click" + d, ".mfp-img", function() {
                            return b.items.length > 1 ? (b.next(), !1) : void 0
                        }), e.on("keydown" + d, function(a) {
                            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                        })
                    }), x("UpdateStatus" + d, function(a, c) {
                        c.text && (c.text = U(c.text, b.currItem.index, b.items.length))
                    }), x(m + d, function(a, d, e, f) {
                        var g = b.items.length;
                        e.counter = g > 1 ? U(c.tCounter, f.index, g) : ""
                    }), x("BuildControls" + d, function() {
                        if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                            var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(t),
                                g = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(t),
                                h = f ? "mfpFastClick" : "click";
                            e[h](function() {
                                b.prev()
                            }), g[h](function() {
                                b.next()
                            }), b.isIE7 && (y("b", e[0], !1, !0), y("a", e[0], !1, !0), y("b", g[0], !1, !0), y("a", g[0], !1, !0)), b.container.append(e.add(g))
                        }
                    }), x(o + d, function() {
                        b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                            b.preloadNearbyImages(), b._preloadTimeout = null
                        }, 16)
                    }), void x(i + d, function() {
                        e.off(d), b.wrap.off("click" + d), b.arrowLeft && f && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    b.direction = !0, b.index = T(b.index + 1), b.updateItemHTML()
                },
                prev: function() {
                    b.direction = !1, b.index = T(b.index - 1), b.updateItemHTML()
                },
                goTo: function(a) {
                    b.direction = a >= b.index, b.index = a, b.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length);
                    for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                    for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
                },
                _preloadItem: function(c) {
                    if (c = T(c), !b.items[c].preloaded) {
                        var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), z("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                            d.hasSize = !0
                        }).on("error.mfploader", function() {
                            d.hasSize = !0, d.loadError = !0, z("LazyLoadError", d)
                        }).attr("src", d.src)), d.preloaded = !0
                    }
                }
            }
        });
        var V = "retina";
        a.magnificPopup.registerModule(V, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (x("ImageHasSize." + V, function(a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }), x("ElementParse." + V, function(b, d) {
                            d.src = a.replaceSrc(d, c)
                        }))
                    }
                }
            }
        }),
            function() {
                var b = 1e3,
                    c = "ontouchstart" in window,
                    d = function() {
                        w.off("touchmove" + f + " touchend" + f)
                    },
                    e = "mfpFastClick",
                    f = "." + e;
                a.fn.mfpFastClick = function(e) {
                    return a(this).each(function() {
                        var g, h = a(this);
                        if (c) {
                            var i, j, k, l, m, n;
                            h.on("touchstart" + f, function(a) {
                                l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, w.on("touchmove" + f, function(a) {
                                    m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                                }).on("touchend" + f, function(a) {
                                    d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                        g = !1
                                    }, b), e())
                                })
                            })
                        }
                        h.on("click" + f, function() {
                            g || e()
                        })
                    })
                }, a.fn.destroyMfpFastClick = function() {
                    a(this).off("touchstart" + f + " click" + f), c && w.off("touchmove" + f + " touchend" + f)
                }
            }(), B()
    }(window.jQuery || window.Zepto),
    function(a, b) {
        "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery)
    }(this, function(a) {
        var b = function(a, b) {
                var c, d = document.createElement("canvas");
                a.appendChild(d), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
                var e = d.getContext("2d");
                d.width = d.height = b.size;
                var f = 1;
                window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
                var g = (b.size - b.lineWidth) / 2;
                b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var h = function(a, b, c) {
                        c = Math.min(Math.max(-1, c || 0), 1);
                        var d = 0 >= c ? !0 : !1;
                        e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
                    },
                    i = function() {
                        var a, c;
                        e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
                        for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                        e.restore()
                    },
                    j = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                            window.setTimeout(a, 1e3 / 60)
                        }
                    }(),
                    k = function() {
                        b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return d
                }, this.getCtx = function() {
                    return e
                }, this.clear = function() {
                    e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
                }, this.draw = function(a) {
                    b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
                    var d;
                    d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
                }.bind(this), this.animate = function(a, c) {
                    var d = Date.now();
                    b.onStart(a, c);
                    var e = function() {
                        var f = Math.min(Date.now() - d, b.animate.duration),
                            g = b.easing(this, f, a, c - a, b.animate.duration);
                        this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
                    }.bind(this);
                    j(e)
                }.bind(this)
            },
            c = function(a, c) {
                var d = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(a, b, c, d, e) {
                        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                    },
                    onStart: function(a, b) {},
                    onStep: function(a, b, c) {},
                    onStop: function(a, b) {}
                };
                if ("undefined" != typeof b) d.renderer = b;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    d.renderer = SVGRenderer
                }
                var e = {},
                    f = 0,
                    g = function() {
                        this.el = a, this.options = e;
                        for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                        "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
                            duration: e.animate,
                            enabled: !0
                        }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                            duration: 1e3,
                            enabled: e.animate
                        }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(a) {
                    return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
                }.bind(this), this.disableAnimation = function() {
                    return e.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return e.animate.enabled = !0, this
                }, g()
            };
        a.fn.easyPieChart = function(b) {
            return this.each(function() {
                var d;
                a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
            })
        }
    }),
    function() {
        var a = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            },
            b = [].slice;
        ! function(a, b) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(c) {
                return b(c, a)
            }) : b(a.jQuery, a)
        }(window, function(c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
            return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
                horizontal: {},
                vertical: {}
            }, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function() {
                function a(a) {
                    var b = this;
                    this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
                        x: a.scrollLeft(),
                        y: a.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, this.element[j] = this.id, k[this.id] = this, a.bind(p, function() {
                        var a;
                        return b.didScroll || l ? void 0 : (b.didScroll = !0, a = function() {
                            return b.doScroll(), b.didScroll = !1
                        }, d.setTimeout(a, c[t].settings.scrollThrottle))
                    }), a.bind(o, function() {
                        var a;
                        return b.didResize ? void 0 : (b.didResize = !0, a = function() {
                            return c[t]("refresh"), b.didResize = !1
                        }, d.setTimeout(a, c[t].settings.resizeThrottle))
                    })
                }
                return a.prototype.doScroll = function() {
                    var a, b = this;
                    return a = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function(a, d) {
                        var e, f, g;
                        return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function(a, b) {
                            var c, e;
                            return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
                        }), g.sort(function(a, b) {
                            return a.offset - b.offset
                        }), f || g.reverse(), c.each(g, function(a, b) {
                            return b.options.continuous || a === g.length - 1 ? b.trigger([e]) : void 0
                        })
                    }), this.oldScroll = {
                        x: a.horizontal.newScroll,
                        y: a.vertical.newScroll
                    }
                }, a.prototype.refresh = function() {
                    var a, b, d, e = this;
                    return d = c.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
                        horizontal: {
                            contextOffset: d ? 0 : b.left,
                            contextScroll: d ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: d ? 0 : b.top,
                            contextScroll: d ? 0 : this.oldScroll.y,
                            contextDimension: d ? c[t]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, c.each(a, function(a, b) {
                        return c.each(e.waypoints[a], function(a, d) {
                            var e, f, g, h, i;
                            return e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, d.options.onlyOnScroll && null != g || !d.enabled ? void 0 : null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
                        })
                    })
                }, a.prototype.checkEmpty = function() {
                    return c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([o, p].join(" ")), delete k[this.id]) : void 0
                }, a
            }(), g = function() {
                function a(a, b, d) {
                    var e, f;
                    "bottom-in-view" === d.offset && (d.offset = function() {
                        var a;
                        return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
                    }), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = this.element[r]) ? f : [], e.push(this.id), this.element[r] = e
                }
                return a.prototype.trigger = function(a) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, a.prototype.disable = function() {
                    return this.enabled = !1
                }, a.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, a.prototype.destroy = function() {
                    return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, a.getWaypointsByElement = function(a) {
                    var b, d;
                    return (d = a[r]) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function(a) {
                        return b[a]
                    })) : []
                }, a
            }(), n = {
                init: function(a, b) {
                    var d;
                    return b = c.extend({}, c.fn[s].defaults, b), null == (d = b.handler) && (b.handler = a), this.each(function() {
                        var a, d, e, h;
                        return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e[0][j]], d || (d = new f(e)), new g(a, d, b)
                    }), c[t]("refresh"), this
                },
                disable: function() {
                    return n._invoke.call(this, "disable")
                },
                enable: function() {
                    return n._invoke.call(this, "enable")
                },
                destroy: function() {
                    return n._invoke.call(this, "destroy")
                },
                prev: function(a, b) {
                    return n._traverse.call(this, a, b, function(a, b, c) {
                        return b > 0 ? a.push(c[b - 1]) : void 0
                    })
                },
                next: function(a, b) {
                    return n._traverse.call(this, a, b, function(a, b, c) {
                        return b < c.length - 1 ? a.push(c[b + 1]) : void 0
                    })
                },
                _traverse: function(a, b, e) {
                    var f, g;
                    return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function() {
                        var b;
                        return b = c.inArray(this, g[a]), e(f, b, g[a])
                    }), this.pushStack(f)
                },
                _invoke: function(a) {
                    return this.each(function() {
                        var b;
                        return b = g.getWaypointsByElement(this), c.each(b, function(b, c) {
                            return c[a](), !0
                        })
                    }), this
                }
            }, c.fn[s] = function() {
                var a, d;
                return d = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [null, d]) : d ? c.error("The " + d + " method does not exist in jQuery Waypoints.") : c.error("jQuery Waypoints needs a callback function or handler option.")
            }, c.fn[s].defaults = {
                context: d,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, m = {
                refresh: function() {
                    return c.each(k, function(a, b) {
                        return b.refresh()
                    })
                },
                viewportHeight: function() {
                    var a;
                    return null != (a = d.innerHeight) ? a : e.height()
                },
                aggregate: function(a) {
                    var b, d, e;
                    return b = h, a && (b = null != (e = k[c(a)[0][j]]) ? e.waypoints : void 0), b ? (d = {
                        horizontal: [],
                        vertical: []
                    }, c.each(d, function(a, e) {
                        return c.each(b[a], function(a, b) {
                            return e.push(b)
                        }), e.sort(function(a, b) {
                            return a.offset - b.offset
                        }), d[a] = c.map(e, function(a) {
                            return a.element
                        }), d[a] = c.unique(d[a])
                    }), d) : []
                },
                above: function(a) {
                    return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                        return b.offset <= a.oldScroll.y
                    })
                },
                below: function(a) {
                    return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                        return b.offset > a.oldScroll.y
                    })
                },
                left: function(a) {
                    return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                        return b.offset <= a.oldScroll.x
                    })
                },
                right: function(a) {
                    return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                        return b.offset > a.oldScroll.x
                    })
                },
                enable: function() {
                    return m._invoke("enable")
                },
                disable: function() {
                    return m._invoke("disable")
                },
                destroy: function() {
                    return m._invoke("destroy")
                },
                extendFn: function(a, b) {
                    return n[a] = b
                },
                _invoke: function(a) {
                    var b;
                    return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function(b, c) {
                        return c[a](), !0
                    })
                },
                _filter: function(a, b, d) {
                    var e, f;
                    return (e = k[c(a)[0][j]]) ? (f = [], c.each(e.waypoints[b], function(a, b) {
                        return d(e, b) ? f.push(b) : void 0
                    }), f.sort(function(a, b) {
                        return a.offset - b.offset
                    }), c.map(f, function(a) {
                        return a.element
                    })) : []
                }
            }, c[t] = function() {
                var a, c;
                return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
            }, c[t].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, e.on("load.waypoints", function() {
                return c[t]("refresh")
            })
        })
    }.call(this),
    function() {
        ! function(a, b) {
            return "function" == typeof define && define.amd ? define(["jquery", "waypoints"], b) : b(a.jQuery)
        }(window, function(a) {
            var b, c;
            return b = {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: "stuck",
                direction: "down right"
            }, c = function(a, b) {
                var c;
                return a.wrap(b.wrapper), c = a.parent(), c.data("isWaypointStickyWrapper", !0)
            }, a.waypoints("extendFn", "sticky", function(d) {
                var e, f, g;
                return f = a.extend({}, a.fn.waypoint.defaults, b, d), e = c(this, f), g = f.handler, f.handler = function(b) {
                    var c, d;
                    return c = a(this).children(":first"), d = -1 !== f.direction.indexOf(b), c.toggleClass(f.stuckClass, d), e.height(d ? c.outerHeight() : ""), null != g ? g.call(this, b) : void 0
                }, e.waypoint(f), this.data("stuckClass", f.stuckClass)
            }), a.waypoints("extendFn", "unsticky", function() {
                var a;
                return a = this.parent(), a.data("isWaypointStickyWrapper") ? (a.waypoint("destroy"), this.unwrap(), this.removeClass(this.data("stuckClass"))) : this
            })
        })
    }.call(this),
    function(a) {
        "use strict";
        a.fn.fitVids = function(b) {
            var c = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var d = document.createElement("div"),
                    e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                    f = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
                d.className = "fit-vids-style", d.id = "fit-vids-style", d.style.display = "none", d.innerHTML = f, e.parentNode.insertBefore(d, e)
            }
            return b && a.extend(c, b), this.each(function() {
                var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                c.customSelector && b.push(c.customSelector);
                var d = a(this).find(b.join(","));
                d = d.not("object object"), d.each(function() {
                    var b = a(this);
                    if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                        var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                            d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                            e = c / d;
                        if (!b.attr("id")) {
                            var f = "fitvid" + Math.floor(999999 * Math.random());
                            b.attr("id", f)
                        }
                        b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(b) {
            var c = {},
                d = /^jQuery\d+$/;
            return a.each(b.attributes, function(a, b) {
                b.specified && !d.test(b.name) && (c[b.name] = b.value)
            }), c
        }

        function c(b, c) {
            var d = this,
                f = a(d);
            if (d.value == f.attr("placeholder") && f.hasClass("placeholder"))
                if (f.data("placeholder-password")) {
                    if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c;
                    f.focus()
                } else d.value = "", f.removeClass("placeholder"), d == e() && d.select()
        }

        function d() {
            var d, e = this,
                f = a(e),
                g = this.id;
            if ("" === e.value) {
                if ("password" === e.type) {
                    if (!f.data("placeholder-textinput")) {
                        try {
                            d = f.clone().attr({
                                type: "text"
                            })
                        } catch (h) {
                            d = a("<input>").attr(a.extend(b(this), {
                                type: "text"
                            }))
                        }
                        d.removeAttr("name").data({
                            "placeholder-password": f,
                            "placeholder-id": g
                        }).bind("focus.placeholder", c), f.data({
                            "placeholder-textinput": d,
                            "placeholder-id": g
                        }).before(d)
                    }
                    f = f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g).show()
                }
                f.addClass("placeholder"), f[0].value = f.attr("placeholder")
            } else f.removeClass("placeholder")
        }

        function e() {
            try {
                return document.activeElement
            } catch (a) {}
        }
        var f, g, h = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
            i = "placeholder" in document.createElement("input") && !h,
            j = "placeholder" in document.createElement("textarea") && !h,
            k = a.valHooks,
            l = a.propHooks;
        i && j ? (g = a.fn.placeholder = function() {
            return this
        }, g.input = g.textarea = !0) : (g = a.fn.placeholder = function() {
            var a = this;
            return a.filter((i ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": c,
                "blur.placeholder": d
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
        }, g.input = i, g.textarea = j, f = {
            get: function(b) {
                var c = a(b),
                    d = c.data("placeholder-password");
                return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass("placeholder") ? "" : b.value
            },
            set: function(b, f) {
                var g = a(b),
                    h = g.data("placeholder-password");
                return h ? h[0].value = f : g.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : g.hasClass("placeholder") ? c.call(b, !0, f) || (b.value = f) : b.value = f, g) : b.value = f
            }
        }, i || (k.input = f, l.value = f), j || (k.textarea = f, l.value = f), a(function() {
            a(document).delegate("form", "submit.placeholder", function() {
                var b = a(".placeholder", this).each(c);
                setTimeout(function() {
                    b.each(d)
                }, 10)
            })
        }), a(window).bind("beforeunload.placeholder", function() {
            a(".placeholder").each(function() {
                this.value = ""
            })
        }))
    });
var mejs = mejs || {};
mejs.version = "2.15.1", mejs.meIndex = 0, mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube", "application/x-mpegURL"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo", "video/x-vimeo"]
    }]
}, mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function(a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        return b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>', b.firstChild.href
    },
    getScriptPath: function(a) {
        for (var b, c, d, e = 0, f = "", g = "", h = document.getElementsByTagName("script"), i = h.length, j = a.length; i > e; e++) {
            for (c = h[e].src, b = c.lastIndexOf("/"), b > -1 ? (d = c.substring(b + 1), c = c.substring(0, b + 1)) : (d = c, c = ""), b = 0; j > b; b++)
                if (g = a[b], g = d.indexOf(g), g > -1) {
                    f = c;
                    break
                }
            if ("" !== f) break
        }
        return f
    },
    secondsToTimeCode: function(a, b, c, d) {
        "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25);
        var e = Math.floor(a / 3600) % 24,
            f = Math.floor(a / 60) % 60,
            g = Math.floor(a % 60);
        return a = Math.floor((a % 1 * d).toFixed(3)), (b || e > 0 ? (10 > e ? "0" + e : e) + ":" : "") + (10 > f ? "0" + f : f) + ":" + (10 > g ? "0" + g : g) + (c ? ":" + (10 > a ? "0" + a : a) : "")
    },
    timeCodeToSeconds: function(a, b, c, d) {
        "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25), a = a.split(":"), b = parseInt(a[0], 10);
        var e = parseInt(a[1], 10),
            f = parseInt(a[2], 10),
            g = 0,
            h = 0;
        return c && (g = parseInt(a[3]) / d), h = 3600 * b + 60 * e + f + g
    },
    convertSMPTEtoSeconds: function(a) {
        if ("string" != typeof a) return !1;
        a = a.replace(",", ".");
        var b = 0,
            c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0,
            d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
        return Number(b.toFixed(c))
    },
    removeSwf: function(a) {
        var b = document.getElementById(a);
        b && /object|embed/i.test(b.nodeName) && (mejs.MediaFeatures.isIE ? (b.style.display = "none", function() {
            4 == b.readyState ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
        }()) : b.parentNode.removeChild(b))
    },
    removeObjectInIE: function(a) {
        if (a = document.getElementById(a)) {
            for (var b in a) "function" == typeof a[b] && (a[b] = null);
            a.parentNode.removeChild(a)
        }
    }
}, mejs.PluginDetector = {
    hasPluginVersion: function(a, b) {
        var c = this.plugins[a];
        return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? !0 : !1
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function(a, b, c, d) {
        var e, f = [0, 0, 0];
        if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[a]) {
            if ((c = this.nav.plugins[a].description) && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[b] || this.nav.mimeTypes[b].enabledPlugin))
                for (f = c.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), a = 0; a < f.length; a++) f[a] = parseInt(f[a].match(/\d+/), 10)
        } else if ("undefined" != typeof window.ActiveXObject) try {
            (e = new ActiveXObject(c)) && (f = d(e))
        } catch (g) {}
        return f
    }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
    var b = [];
    return (a = a.GetVariable("$version")) && (a = a.split(" ")[1].split(","), b = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]), b
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
    var b = [0, 0, 0, 0],
        c = function(a, b, c, d) {
            for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);) b[c] += d;
            b[c] -= d
        };
    return c(a, b, 0, 1), c(a, b, 1, 1), c(a, b, 2, 1e4), c(a, b, 2, 1e3), c(a, b, 2, 100), c(a, b, 2, 10), c(a, b, 2, 1), c(a, b, 3, 1), b
}), mejs.MediaFeatures = {
    init: function() {
        var a, b = this,
            c = document,
            d = mejs.PluginDetector.nav,
            e = mejs.PluginDetector.ua.toLowerCase(),
            f = ["source", "track", "audio", "video"];
        b.isiPad = null !== e.match(/ipad/i), b.isiPhone = null !== e.match(/iphone/i), b.isiOS = b.isiPhone || b.isiPad, b.isAndroid = null !== e.match(/android/i), b.isBustedAndroid = null !== e.match(/android 2\.[12]/), b.isBustedNativeHTTPS = "https:" === location.protocol && (null !== e.match(/android [12]\./) || null !== e.match(/macintosh.* version.* safari/)), b.isIE = -1 != d.appName.toLowerCase().indexOf("microsoft") || null !== d.appName.toLowerCase().match(/trident/gi), b.isChrome = null !== e.match(/chrome/gi), b.isChromium = null !== e.match(/chromium/gi), b.isFirefox = null !== e.match(/firefox/gi), b.isWebkit = null !== e.match(/webkit/gi), b.isGecko = null !== e.match(/gecko/gi) && !b.isWebkit && !b.isIE, b.isOpera = null !== e.match(/opera/gi), b.hasTouch = "ontouchstart" in window, b.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (d = 0; d < f.length; d++) a = document.createElement(f[d]);
        b.supportsMediaTag = "undefined" != typeof a.canPlayType || b.isBustedAndroid;
        try {
            a.canPlayType("video/mp4")
        } catch (g) {
            b.supportsMediaTag = !1
        }
        b.hasSemiNativeFullScreen = "undefined" != typeof a.webkitEnterFullscreen, b.hasNativeFullscreen = "undefined" != typeof a.requestFullscreen, b.hasWebkitNativeFullScreen = "undefined" != typeof a.webkitRequestFullScreen, b.hasMozNativeFullScreen = "undefined" != typeof a.mozRequestFullScreen, b.hasMsNativeFullScreen = "undefined" != typeof a.msRequestFullscreen, b.hasTrueNativeFullScreen = b.hasWebkitNativeFullScreen || b.hasMozNativeFullScreen || b.hasMsNativeFullScreen, b.nativeFullScreenEnabled = b.hasTrueNativeFullScreen, b.hasMozNativeFullScreen ? b.nativeFullScreenEnabled = document.mozFullScreenEnabled : b.hasMsNativeFullScreen && (b.nativeFullScreenEnabled = document.msFullscreenEnabled), b.isChrome && (b.hasSemiNativeFullScreen = !1), b.hasTrueNativeFullScreen && (b.fullScreenEventName = "", b.hasWebkitNativeFullScreen ? b.fullScreenEventName = "webkitfullscreenchange" : b.hasMozNativeFullScreen ? b.fullScreenEventName = "mozfullscreenchange" : b.hasMsNativeFullScreen && (b.fullScreenEventName = "MSFullscreenChange"), b.isFullScreen = function() {
            return b.hasMozNativeFullScreen ? c.mozFullScreen : b.hasWebkitNativeFullScreen ? c.webkitIsFullScreen : b.hasMsNativeFullScreen ? null !== c.msFullscreenElement : void 0
        }, b.requestFullScreen = function(a) {
            b.hasWebkitNativeFullScreen ? a.webkitRequestFullScreen() : b.hasMozNativeFullScreen ? a.mozRequestFullScreen() : b.hasMsNativeFullScreen && a.msRequestFullscreen()
        }, b.cancelFullScreen = function() {
            b.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : b.hasMozNativeFullScreen ? document.mozCancelFullScreen() : b.hasMsNativeFullScreen && document.msExitFullscreen()
        }), b.hasSemiNativeFullScreen && e.match(/mac os x 10_5/i) && (b.hasNativeFullScreen = !1, b.hasSemiNativeFullScreen = !1)
    }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function(a) {
        this.currentTime = a
    },
    setMuted: function(a) {
        this.muted = a
    },
    setVolume: function(a) {
        this.volume = a
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if ("string" == typeof a) this.src = a;
        else {
            var c;
            for (b = 0; b < a.length; b++)
                if (c = a[b], this.canPlayType(c.type)) {
                    this.src = c.src;
                    break
                }
        }
    },
    setVideoSize: function(a, b) {
        this.width = a, this.height = b
    }
}, mejs.PluginMediaElement = function(a, b, c) {
    this.id = a, this.pluginType = b, this.src = c, this.events = {}, this.attributes = {}
}, mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
    },
    load: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
    },
    pause: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
    },
    stop: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
    },
    canPlayType: function(a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++)
            if (d = e[b], mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
                for (c = 0; c < d.types.length; c++)
                    if (a == d.types[c]) return "probably";
        return ""
    },
    positionFullscreenButton: function(a, b, c) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function() {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(a) {
        if ("string" == typeof a) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)), this.src = mejs.Utility.absolutizeUrl(a);
        else {
            var b, c;
            for (b = 0; b < a.length; b++)
                if (c = a[b], this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)), this.src = mejs.Utility.absolutizeUrl(a);
                    break
                }
        }
    },
    setCurrentTime: function(a) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a), this.currentTime = a)
    },
    setVolume: function(a) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * a) : this.pluginApi.setVolume(a), this.volume = a)
    },
    setMuted: function(a) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = a, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(a), this.muted = a)
    },
    setVideoSize: function(a, b) {
        this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = a + "px", this.pluginElement.style.height = b + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function(a) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function(a, b) {
        this.events[a] = this.events[a] || [], this.events[a].push(b)
    },
    removeEventListener: function(a, b) {
        if (!a) return this.events = {}, !0;
        var c = this.events[a];
        if (!c) return !0;
        if (!b) return this.events[a] = [], !0;
        for (var d = 0; d < c.length; d++)
            if (c[d] === b) return this.events[a].splice(d, 1), !0;
        return !1
    },
    dispatchEvent: function(a) {
        var b, c, d = this.events[a];
        if (d)
            for (c = Array.prototype.slice.call(arguments, 1), b = 0; b < d.length; b++) d[b].apply(null, c)
    },
    hasAttribute: function(a) {
        return a in this.attributes
    },
    removeAttribute: function(a) {
        delete this.attributes[a]
    },
    getAttribute: function(a) {
        return this.hasAttribute(a) ? this.attributes[a] : ""
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
}, mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(a, b, c) {
        this.pluginMediaElements[a] = b, this.htmlMediaElements[a] = c
    },
    unregisterPluginElement: function(a) {
        delete this.pluginMediaElements[a], delete this.htmlMediaElements[a]
    },
    initPlugin: function(a) {
        var b = this.pluginMediaElements[a],
            c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
                case "flash":
                    b.pluginElement = b.pluginApi = document.getElementById(a);
                    break;
                case "silverlight":
                    b.pluginElement = document.getElementById(b.id), b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            null != b.pluginApi && b.success && b.success(b, c)
        }
    },
    fireEvent: function(a, b, c) {
        var d, e;
        if (a = this.pluginMediaElements[a]) {
            b = {
                type: b,
                target: a
            };
            for (d in c) a[d] = c[d], b[d] = c[d];
            e = c.bufferedTime || 0, b.target.buffered = b.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return e
                },
                length: 1
            }, a.dispatchEvent(b.type, b)
        }
    }
}, mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function() {},
    error: function() {}
}, mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
}, mejs.HtmlMediaElementShim = {
    create: function(a, b) {
        var c = mejs.MediaElementDefaults,
            d = "string" == typeof a ? document.getElementById(a) : a,
            e = d.tagName.toLowerCase(),
            f = "audio" === e || "video" === e,
            g = f ? d.getAttribute("src") : d.getAttribute("href");
        e = d.getAttribute("poster");
        var h, i = d.getAttribute("autoplay"),
            j = d.getAttribute("preload"),
            k = d.getAttribute("controls");
        for (h in b) c[h] = b[h];
        return g = "undefined" == typeof g || null === g || "" == g ? null : g, e = "undefined" == typeof e || null === e ? "" : e, j = "undefined" == typeof j || null === j || "false" === j ? "none" : j, i = !("undefined" == typeof i || null === i || "false" === i), k = !("undefined" == typeof k || null === k || "false" === k), h = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, f, g), h.url = null !== h.url ? mejs.Utility.absolutizeUrl(h.url) : "", "native" == h.method ? (mejs.MediaFeatures.isBustedAndroid && (d.src = h.url, d.addEventListener("click", function() {
            d.play()
        }, !1)), this.updateNative(h, c, i, j)) : "" !== h.method ? this.createPlugin(h, c, e, i, j, k) : (this.createErrorMessage(h, c, e), this)
    },
    determinePlayback: function(a, b, c, d, e) {
        var f, g, h, i, j = [],
            k = {
                method: "",
                url: "",
                htmlMediaElement: a,
                isVideo: "audio" != a.tagName.toLowerCase()
            };
        if ("undefined" != typeof b.type && "" !== b.type)
            if ("string" == typeof b.type) j.push({
                type: b.type,
                url: e
            });
            else
                for (f = 0; f < b.type.length; f++) j.push({
                    type: b.type[f],
                    url: e
                });
        else if (null !== e) h = this.formatType(e, a.getAttribute("type")), j.push({
            type: h,
            url: e
        });
        else
            for (f = 0; f < a.childNodes.length; f++) g = a.childNodes[f], 1 == g.nodeType && "source" == g.tagName.toLowerCase() && (e = g.getAttribute("src"), h = this.formatType(e, g.getAttribute("type")), g = g.getAttribute("media"), (!g || !window.matchMedia || window.matchMedia && window.matchMedia(g).matches) && j.push({
                type: h,
                url: e
            }));
        if (!d && j.length > 0 && null !== j[0].url && this.getTypeFromFile(j[0].url).indexOf("audio") > -1 && (k.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (a.canPlayType = function(a) {
                return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
            }), mejs.MediaFeatures.isChromium && (a.canPlayType = function(a) {
                return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
            }), c && ("auto" === b.mode || "auto_plugin" === b.mode || "native" === b.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || b.httpsBasicAuthSite !== !0)) {
            for (d || (f = document.createElement(k.isVideo ? "video" : "audio"), a.parentNode.insertBefore(f, a), a.style.display = "none", k.htmlMediaElement = a = f), f = 0; f < j.length; f++)
                if ("video/m3u8" == j[f].type || "" !== a.canPlayType(j[f].type).replace(/no/, "") || "" !== a.canPlayType(j[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== a.canPlayType(j[f].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                    k.method = "native", k.url = j[f].url;
                    break
                }
            if ("native" === k.method && (null !== k.url && (a.src = k.url), "auto_plugin" !== b.mode)) return k
        }
        if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode)
            for (f = 0; f < j.length; f++)
                for (h = j[f].type, a = 0; a < b.plugins.length; a++)
                    for (e = b.plugins[a], g = mejs.plugins[e], c = 0; c < g.length; c++)
                        if (i = g[c], null == i.version || mejs.PluginDetector.hasPluginVersion(e, i.version))
                            for (d = 0; d < i.types.length; d++)
                                if (h == i.types[d]) return k.method = e, k.url = j[f].url, k;
        return "auto_plugin" === b.mode && "native" === k.method ? k : ("" === k.method && j.length > 0 && (k.url = j[0].url), k)
    },
    formatType: function(a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function(a) {
        return a = a.split("?")[0], a = a.substring(a.lastIndexOf(".") + 1).toLowerCase(), (/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video" : "audio") + "/" + this.getTypeFromExtension(a)
    },
    getTypeFromExtension: function(a) {
        switch (a) {
            case "mp4":
            case "m4v":
            case "m4a":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return a
        }
    },
    createErrorMessage: function(a, b, c) {
        var d = a.htmlMediaElement,
            e = document.createElement("div");
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px", e.style.height = d.height + "px"
        } catch (f) {}
        e.innerHTML = b.customError ? b.customError : "" !== c ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>", d.parentNode.insertBefore(e, d), d.style.display = "none", b.error(d)
    },
    createPlugin: function(a, b, c, d, e, f) {
        c = a.htmlMediaElement;
        var g, h = 1,
            i = 1,
            j = "me_" + a.method + "_" + mejs.meIndex++,
            k = new mejs.PluginMediaElement(j, a.method, a.url),
            l = document.createElement("div");
        for (k.tagName = c.tagName, g = 0; g < c.attributes.length; g++) {
            var m = c.attributes[g];
            1 == m.specified && k.setAttribute(m.name, m.value)
        }
        for (g = c.parentNode; null !== g && "body" !== g.tagName.toLowerCase() && null != g.parentNode;) {
            if ("p" === g.parentNode.tagName.toLowerCase()) {
                g.parentNode.parentNode.insertBefore(g, g.parentNode);
                break
            }
            g = g.parentNode
        }
        switch (a.isVideo ? (h = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : null !== c.getAttribute("width") ? c.getAttribute("width") : b.defaultVideoWidth, i = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : null !== c.getAttribute("height") ? c.getAttribute("height") : b.defaultVideoHeight, h = mejs.Utility.encodeUrl(h), i = mejs.Utility.encodeUrl(i)) : b.enablePluginDebug && (h = 320, i = 240), k.success = b.success, mejs.MediaPluginBridge.registerPluginElement(j, k, c), l.className = "me-plugin", l.id = j + "_container", a.isVideo ? c.parentNode.insertBefore(l, c) : document.body.insertBefore(l, document.body.childNodes[0]), d = ["id=" + j, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + h, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + i, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam], null !== a.url && ("flash" == a.method ? d.push("file=" + mejs.Utility.encodeUrl(a.url)) : d.push("file=" + a.url)), b.enablePluginDebug && d.push("debug=true"), b.enablePluginSmoothing && d.push("smoothing=true"), b.enablePseudoStreaming && d.push("pseudostreaming=true"), f && d.push("controls=true"),
        b.pluginVars && (d = d.concat(b.pluginVars)), a.method) {
            case "silverlight":
                l.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + j + '" name="' + j + '" width="' + h + '" height="' + i + '" class="mejs-shim"><param name="initParams" value="' + d.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
                break;
            case "flash":
                mejs.MediaFeatures.isIE ? (a = document.createElement("div"), l.appendChild(a), a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + j + '" width="' + h + '" height="' + i + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + d.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : l.innerHTML = '<embed id="' + j + '" name="' + j + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + d.join("&") + '" width="' + h + '" height="' + i + '" scale="default"class="mejs-shim"></embed>';
                break;
            case "youtube":
                -1 != a.url.lastIndexOf("youtu.be") ? (a = a.url.substr(a.url.lastIndexOf("/") + 1), -1 != a.indexOf("?") && (a = a.substr(0, a.indexOf("?")))) : a = a.url.substr(a.url.lastIndexOf("=") + 1), youtubeSettings = {
                    container: l,
                    containerId: l.id,
                    pluginMediaElement: k,
                    pluginId: j,
                    videoId: a,
                    height: i,
                    width: h
                }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                if (b = j + "_player", k.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1), l.innerHTML = '<iframe src="//player.vimeo.com/video/' + k.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + b + '" width="' + h + '" height="' + i + '" frameborder="0" class="mejs-shim" id="' + b + '"></iframe>', "function" == typeof $f) {
                    var n = $f(l.childNodes[0]);
                    n.addEvent("ready", function() {
                        function a(a, b, c, d) {
                            a = {
                                type: c,
                                target: b
                            }, "timeupdate" == c && (b.currentTime = a.currentTime = d.seconds, b.duration = a.duration = d.duration), b.dispatchEvent(a.type, a)
                        }
                        $.extend(n, {
                            playVideo: function() {
                                n.api("play")
                            },
                            stopVideo: function() {
                                n.api("unload")
                            },
                            pauseVideo: function() {
                                n.api("pause")
                            },
                            seekTo: function(a) {
                                n.api("seekTo", a)
                            },
                            setVolume: function(a) {
                                n.api("setVolume", a)
                            },
                            setMuted: function(a) {
                                a ? (n.lastVolume = n.api("getVolume"), n.api("setVolume", 0)) : (n.api("setVolume", n.lastVolume), delete n.lastVolume)
                            }
                        }), n.addEvent("play", function() {
                            a(n, k, "play"), a(n, k, "playing")
                        }), n.addEvent("pause", function() {
                            a(n, k, "pause")
                        }), n.addEvent("finish", function() {
                            a(n, k, "ended")
                        }), n.addEvent("playProgress", function(b) {
                            a(n, k, "timeupdate", b)
                        }), k.pluginElement = l, k.pluginApi = n, mejs.MediaPluginBridge.initPlugin(j)
                    })
                } else console.warn("You need to include froogaloop for vimeo to work")
        }
        return c.style.display = "none", c.removeAttribute("autoplay"), k
    },
    updateNative: function(a, b) {
        var c, d = a.htmlMediaElement;
        for (c in mejs.HtmlMediaElement) d[c] = mejs.HtmlMediaElement[c];
        return b.success(d, d), d
    }
}, mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b), this.isIframeStarted = !0
        }
    },
    iframeQueue: [],
    enqueueIframe: function(a) {
        this.isLoaded ? this.createIframe(a) : (this.loadIframeApi(), this.iframeQueue.push(a))
    },
    createIframe: function(a) {
        var b = a.pluginMediaElement,
            c = new YT.Player(a.containerId, {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function() {
                        a.pluginMediaElement.pluginApi = c, mejs.MediaPluginBridge.initPlugin(a.pluginId), setInterval(function() {
                            mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function(a) {
                        mejs.YouTubeApi.handleStateChange(a.data, c, b)
                    }
                }
            })
    },
    createEvent: function(a, b, c) {
        if (c = {
                type: c,
                target: b
            }, a && a.getDuration) {
            b.currentTime = c.currentTime = a.getCurrentTime(), b.duration = c.duration = a.getDuration(), c.paused = b.paused, c.ended = b.ended, c.muted = a.isMuted(), c.volume = a.getVolume() / 100, c.bytesTotal = a.getVideoBytesTotal(), c.bufferedBytes = a.getVideoBytesLoaded();
            var d = c.bufferedBytes / c.bytesTotal * c.duration;
            c.target.buffered = c.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return d
                },
                length: 1
            }
        }
        b.dispatchEvent(c.type, c)
    },
    iFrameReady: function() {
        for (this.isIframeLoaded = this.isLoaded = !0; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function(a) {
        this.flashPlayers[a.pluginId] = a;
        var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (b = document.createElement("div"), a.container.appendChild(b), b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(a) {
        var b = this.flashPlayers[a],
            c = document.getElementById(a),
            d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c, mejs.MediaPluginBridge.initPlugin(a), c.cueVideoById(b.videoId), a = b.containerId + "_callback", window[a] = function(a) {
            mejs.YouTubeApi.handleStateChange(a, c, d)
        }, c.addEventListener("onStateChange", a), setInterval(function() {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250), mejs.YouTubeApi.createEvent(c, d, "canplay")
    },
    handleStateChange: function(a, b, c) {
        switch (a) {
            case -1:
                c.paused = !0, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused = !1, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused = !1, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "play"), mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused = !0, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress")
        }
    }
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
    function(a, b) {
        var c = {
            locale: {
                language: "",
                strings: {}
            },
            methods: {}
        };
        c.getLanguage = function() {
            return (c.locale.language || window.navigator.userLanguage || window.navigator.language).substr(0, 2).toLowerCase()
        }, "undefined" != typeof mejsL10n && (c.locale.language = mejsL10n.language), c.methods.checkPlain = function(a) {
            var b, c, d = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
            a = String(a);
            for (b in d) d.hasOwnProperty(b) && (c = RegExp(b, "g"), a = a.replace(c, d[b]));
            return a
        }, c.methods.t = function(a, b) {
            return c.locale.strings && c.locale.strings[b.context] && c.locale.strings[b.context][a] && (a = c.locale.strings[b.context][a]), c.methods.checkPlain(a)
        }, c.t = function(a, b) {
            if ("string" == typeof a && a.length > 0) {
                var d = c.getLanguage();
                return b = b || {
                    context: d
                }, c.methods.t(a, b)
            }
            throw {
                name: "InvalidArgumentException",
                message: "First argument is either not a string or empty."
            }
        }, b.i18n = c
    }(document, mejs),
    function(a) {
        "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings)
    }(mejs.i18n.locale.strings),
    function(a) {
        "undefined" == typeof a.de && (a.de = {
            Fullscreen: "Vollbild",
            "Go Fullscreen": "Vollbild an",
            "Turn off Fullscreen": "Vollbild aus",
            Close: "Schlie??en"
        })
    }(mejs.i18n.locale.strings),
    function(a) {
        "undefined" == typeof a.zh && (a.zh = {
            Fullscreen: "?????????",
            "Go Fullscreen": "????????????",
            "Turn off Fullscreen": "??????????????????",
            Close: "??????"
        })
    }(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof ender && (mejs.$ = ender),
    function(a) {
        mejs.MepDefaults = {
            poster: "",
            showPosterWhenEnded: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: -1,
            videoHeight: -1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 30,
            defaultSeekBackwardInterval: function(a) {
                return .05 * a.duration
            },
            defaultSeekForwardInterval: function(a) {
                return .05 * a.duration
            },
            setDimensions: !0,
            audioWidth: -1,
            audioHeight: -1,
            startVolume: .8,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            autosizeProgress: !0,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            clickToPlayPause: !0,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            isVideo: !0,
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            keyActions: [{
                keys: [32, 179],
                action: function(a, b) {
                    b.paused || b.ended ? a.play() : a.pause()
                }
            }, {
                keys: [38],
                action: function(a, b) {
                    a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer()), b.setVolume(Math.min(b.volume + .1, 1))
                }
            }, {
                keys: [40],
                action: function(a, b) {
                    a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer()), b.setVolume(Math.max(b.volume - .1, 0))
                }
            }, {
                keys: [37, 227],
                action: function(a, b) {
                    if (!isNaN(b.duration) && b.duration > 0) {
                        a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                        b.setCurrentTime(c)
                    }
                }
            }, {
                keys: [39, 228],
                action: function(a, b) {
                    if (!isNaN(b.duration) && b.duration > 0) {
                        a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                        b.setCurrentTime(c)
                    }
                }
            }, {
                keys: [70],
                action: function(a) {
                    "undefined" != typeof a.enterFullScreen && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen())
                }
            }, {
                keys: [77],
                action: function(a) {
                    a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer()), a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
                }
            }]
        }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(b, c) {
            return this instanceof mejs.MediaElementPlayer ? (this.$media = this.$node = a(b), this.node = this.media = this.$media[0], "undefined" != typeof this.node.player ? this.node.player : (this.node.player = this, "undefined" == typeof c && (c = this.$node.data("mejsoptions")), this.options = a.extend({}, mejs.MepDefaults, c), this.id = "mep_" + mejs.mepIndex++, mejs.players[this.id] = this, this.init(), this)) : new mejs.MediaElementPlayer(b, c)
        }, mejs.MediaElementPlayer.prototype = {
            hasFocus: !1,
            controlsAreVisible: !0,
            init: function() {
                var b = this,
                    c = mejs.MediaFeatures,
                    d = a.extend(!0, {}, b.options, {
                        success: function(a, c) {
                            b.meReady(a, c)
                        },
                        error: function(a) {
                            b.handleError(a)
                        }
                    }),
                    e = b.media.tagName.toLowerCase();
                b.isDynamic = "audio" !== e && "video" !== e, b.isVideo = b.isDynamic ? b.options.isVideo : "audio" !== e && b.options.isVideo, c.isiPad && b.options.iPadUseNativeControls || c.isiPhone && b.options.iPhoneUseNativeControls ? (b.$media.attr("controls", "controls"), c.isiPad && null !== b.media.getAttribute("autoplay") && b.play()) : c.isAndroid && b.options.AndroidUseNativeControls || (b.$media.removeAttr("controls"), b.container = a('<div id="' + b.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media), b.container.addClass((c.isAndroid ? "mejs-android " : "") + (c.isiOS ? "mejs-ios " : "") + (c.isiPad ? "mejs-ipad " : "") + (c.isiPhone ? "mejs-iphone " : "") + (b.isVideo ? "mejs-video " : "mejs-audio ")), c.isiOS ? (c = b.$media.clone(), b.container.find(".mejs-mediaelement").append(c), b.$media.remove(), b.$node = b.$media = c, b.node = b.media = c[0]) : b.container.find(".mejs-mediaelement").append(b.$media), b.controls = b.container.find(".mejs-controls"), b.layers = b.container.find(".mejs-layers"), c = b.isVideo ? "video" : "audio", e = c.substring(0, 1).toUpperCase() + c.substring(1), b.width = b.options[c + "Width"] > 0 || b.options[c + "Width"].toString().indexOf("%") > -1 ? b.options[c + "Width"] : "" !== b.media.style.width && null !== b.media.style.width ? b.media.style.width : null !== b.media.getAttribute("width") ? b.$media.attr("width") : b.options["default" + e + "Width"], b.height = b.options[c + "Height"] > 0 || b.options[c + "Height"].toString().indexOf("%") > -1 ? b.options[c + "Height"] : "" !== b.media.style.height && null !== b.media.style.height ? b.media.style.height : null !== b.$media[0].getAttribute("height") ? b.$media.attr("height") : b.options["default" + e + "Height"], b.setPlayerSize(b.width, b.height), d.pluginWidth = b.width, d.pluginHeight = b.height), mejs.MediaElement(b.$media[0], d), "undefined" != typeof b.container && b.controlsAreVisible && b.container.trigger("controlsshown")
            },
            showControls: function(a) {
                var b = this;
                a = "undefined" == typeof a || a, b.controlsAreVisible || (a ? (b.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                    b.controlsAreVisible = !0, b.container.trigger("controlsshown")
                }), b.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                    b.controlsAreVisible = !0
                })) : (b.controls.css("visibility", "visible").css("display", "block"), b.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), b.controlsAreVisible = !0, b.container.trigger("controlsshown")), b.setControlsSize())
            },
            hideControls: function(b) {
                var c = this;
                b = "undefined" == typeof b || b, c.controlsAreVisible && !c.options.alwaysShowControls && (b ? (c.controls.stop(!0, !0).fadeOut(200, function() {
                    a(this).css("visibility", "hidden").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")
                }), c.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                    a(this).css("visibility", "hidden").css("display", "block")
                })) : (c.controls.css("visibility", "hidden").css("display", "block"), c.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")))
            },
            controlsTimer: null,
            startControlsTimer: function(a) {
                var b = this;
                a = "undefined" != typeof a ? a : 1500, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function() {
                    b.hideControls(), b.killControlsTimer("hide")
                }, a)
            },
            killControlsTimer: function() {
                null !== this.controlsTimer && (clearTimeout(this.controlsTimer), delete this.controlsTimer, this.controlsTimer = null)
            },
            controlsEnabled: !0,
            disableControls: function() {
                this.killControlsTimer(), this.hideControls(!1), this.controlsEnabled = !1
            },
            enableControls: function() {
                this.showControls(!1), this.controlsEnabled = !0
            },
            meReady: function(a, b) {
                var c = this,
                    d = mejs.MediaFeatures,
                    e = b.getAttribute("autoplay");
                e = !("undefined" == typeof e || null === e || "false" === e);
                var f;
                if (!c.created) {
                    if (c.created = !0, c.media = a, c.domNode = b, !(d.isAndroid && c.options.AndroidUseNativeControls || d.isiPad && c.options.iPadUseNativeControls || d.isiPhone && c.options.iPhoneUseNativeControls)) {
                        c.buildposter(c, c.controls, c.layers, c.media), c.buildkeyboard(c, c.controls, c.layers, c.media), c.buildoverlays(c, c.controls, c.layers, c.media), c.findTracks();
                        for (f in c.options.features)
                            if (d = c.options.features[f], c["build" + d]) try {
                                c["build" + d](c, c.controls, c.layers, c.media)
                            } catch (g) {}
                        c.container.trigger("controlsready"), c.setPlayerSize(c.width, c.height), c.setControlsSize(), c.isVideo && (mejs.MediaFeatures.hasTouch ? c.$media.bind("touchstart", function() {
                            c.controlsAreVisible ? c.hideControls(!1) : c.controlsEnabled && c.showControls(!1)
                        }) : (c.clickToPlayPauseCallback = function() {
                            c.options.clickToPlayPause && (c.media.paused ? c.play() : c.pause())
                        }, c.media.addEventListener("click", c.clickToPlayPauseCallback, !1), c.container.bind("mouseenter mouseover", function() {
                            c.controlsEnabled && (c.options.alwaysShowControls || (c.killControlsTimer("enter"), c.showControls(), c.startControlsTimer(2500)))
                        }).bind("mousemove", function() {
                            c.controlsEnabled && (c.controlsAreVisible || c.showControls(), c.options.alwaysShowControls || c.startControlsTimer(2500))
                        }).bind("mouseleave", function() {
                            c.controlsEnabled && !c.media.paused && !c.options.alwaysShowControls && c.startControlsTimer(1e3)
                        })), c.options.hideVideoControlsOnLoad && c.hideControls(!1), e && !c.options.alwaysShowControls && c.hideControls(), c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function(a) {
                            c.options.videoHeight <= 0 && null === c.domNode.getAttribute("height") && !isNaN(a.target.videoHeight) && (c.setPlayerSize(a.target.videoWidth, a.target.videoHeight), c.setControlsSize(), c.media.setVideoSize(a.target.videoWidth, a.target.videoHeight))
                        }, !1)), a.addEventListener("play", function() {
                            for (var a in mejs.players) {
                                var b = mejs.players[a];
                                b.id != c.id && c.options.pauseOtherPlayers && !b.paused && !b.ended && b.pause(), b.hasFocus = !1
                            }
                            c.hasFocus = !0
                        }, !1), c.media.addEventListener("ended", function() {
                            if (c.options.autoRewind) try {
                                c.media.setCurrentTime(0)
                            } catch (a) {}
                            c.media.pause(), c.setProgressRail && c.setProgressRail(), c.setCurrentRail && c.setCurrentRail(), c.options.loop ? c.play() : !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                        }, !1), c.media.addEventListener("loadedmetadata", function() {
                            c.updateDuration && c.updateDuration(), c.updateCurrent && c.updateCurrent(), c.isFullScreen || (c.setPlayerSize(c.width, c.height), c.setControlsSize())
                        }, !1), setTimeout(function() {
                            c.setPlayerSize(c.width, c.height), c.setControlsSize()
                        }, 50), c.globalBind("resize", function() {
                            c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height), c.setControlsSize()
                        }), "youtube" == c.media.pluginType && c.options.autoplay && c.container.find(".mejs-overlay-play").hide()
                    }
                    e && "native" == a.pluginType && c.play(), c.options.success && ("string" == typeof c.options.success ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c))
                }
            },
            handleError: function(a) {
                this.controls.hide(), this.options.error && this.options.error(a)
            },
            setPlayerSize: function(b, c) {
                if (!this.options.setDimensions) return !1;
                if ("undefined" != typeof b && (this.width = b), "undefined" != typeof c && (this.height = c), this.height.toString().indexOf("%") > 0 || "100%" === this.$node.css("max-width") || this.$node[0].currentStyle && "100%" === this.$node[0].currentStyle.maxWidth) {
                    var d = this.isVideo ? this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : null !== this.media.getAttribute("width") ? this.media.getAttribute("width") : this.options.defaultVideoWidth : this.options.defaultAudioWidth,
                        e = this.isVideo ? this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : null !== this.media.getAttribute("height") ? this.media.getAttribute("height") : this.options.defaultVideoHeight : this.options.defaultAudioHeight,
                        f = this.container.parent().closest(":visible").width(),
                        g = this.container.parent().closest(":visible").height();
                    d = this.isVideo || !this.options.autosizeProgress ? parseInt(f * e / d, 10) : e, (isNaN(d) || 0 != g && d > g) && (d = g), "body" === this.container.parent()[0].tagName.toLowerCase() && (f = a(window).width(), d = a(window).height()), 0 != d && 0 != f && (this.container.width(f).height(d), this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%"), this.isVideo && this.media.setVideoSize && this.media.setVideoSize(f, d), this.layers.children(".mejs-layer").width("100%").height("100%"))
                } else this.container.width(this.width).height(this.height), this.layers.children(".mejs-layer").width(this.width).height(this.height);
                f = this.layers.find(".mejs-overlay-play"), g = f.find(".mejs-overlay-button"), f.height(this.container.height() - this.controls.height()), g.css("margin-top", "-" + (g.height() / 2 - this.controls.height() / 2).toString() + "px")
            },
            setControlsSize: function() {
                var b = 0,
                    c = 0,
                    d = this.controls.find(".mejs-time-rail"),
                    e = this.controls.find(".mejs-time-total");
                this.controls.find(".mejs-time-current"), this.controls.find(".mejs-time-loaded");
                var f = d.siblings(),
                    g = f.last(),
                    h = null;
                if (this.container.is(":visible") && d.length && d.is(":visible")) {
                    this.options && !this.options.autosizeProgress && (c = parseInt(d.css("width"))), 0 !== c && c || (f.each(function() {
                        var c = a(this);
                        "absolute" != c.css("position") && c.is(":visible") && (b += a(this).outerWidth(!0))
                    }), c = this.controls.width() - b - (d.outerWidth(!0) - d.width()));
                    do d.width(c), e.width(c - (e.outerWidth(!0) - e.width())), "absolute" != g.css("position") && (h = g.position(), c--); while (null != h && h.top > 0 && c > 0);
                    this.setProgressRail && this.setProgressRail(), this.setCurrentRail && this.setCurrentRail()
                }
            },
            buildposter: function(b, c, d, e) {
                var f = a('<div class="mejs-poster mejs-layer"></div>').appendTo(d);
                c = b.$media.attr("poster"), "" !== b.options.poster && (c = b.options.poster), "" !== c && null != c ? this.setPoster(c) : f.hide(), e.addEventListener("play", function() {
                    f.hide()
                }, !1), b.options.showPosterWhenEnded && b.options.autoRewind && e.addEventListener("ended", function() {
                    f.show()
                }, !1)
            },
            setPoster: function(b) {
                var c = this.container.find(".mejs-poster"),
                    d = c.find("img");
                0 == d.length && (d = a('<img width="100%" height="100%" />').appendTo(c)), d.attr("src", b), c.css({
                    "background-image": "url(" + b + ")"
                })
            },
            buildoverlays: function(b, c, d, e) {
                var f = this;
                if (b.isVideo) {
                    var g = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),
                        h = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),
                        i = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click", function() {
                            f.options.clickToPlayPause && e.paused && e.play()
                        });
                    e.addEventListener("play", function() {
                        i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
                    }, !1), e.addEventListener("playing", function() {
                        i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
                    }, !1), e.addEventListener("seeking", function() {
                        g.show(), c.find(".mejs-time-buffering").show()
                    }, !1), e.addEventListener("seeked", function() {
                        g.hide(), c.find(".mejs-time-buffering").hide()
                    }, !1), e.addEventListener("pause", function() {
                        mejs.MediaFeatures.isiPhone || i.show()
                    }, !1), e.addEventListener("waiting", function() {
                        g.show(), c.find(".mejs-time-buffering").show()
                    }, !1), e.addEventListener("loadeddata", function() {
                        g.show(), c.find(".mejs-time-buffering").show()
                    }, !1), e.addEventListener("canplay", function() {
                        g.hide(), c.find(".mejs-time-buffering").hide()
                    }, !1), e.addEventListener("error", function() {
                        g.hide(), c.find(".mejs-time-buffering").hide(), h.show(), h.find("mejs-overlay-error").html("Error loading this resource")
                    }, !1), e.addEventListener("keydown", function(a) {
                        f.onkeydown(b, e, a)
                    }, !1)
                }
            },
            buildkeyboard: function(b, c, d, e) {
                var f = this;
                f.globalBind("keydown", function(a) {
                    return f.onkeydown(b, e, a)
                }), f.globalBind("click", function(c) {
                    b.hasFocus = 0 != a(c.target).closest(".mejs-container").length
                })
            },
            onkeydown: function(a, b, c) {
                if (a.hasFocus && a.options.enableKeyboard)
                    for (var d = 0, e = a.options.keyActions.length; e > d; d++)
                        for (var f = a.options.keyActions[d], g = 0, h = f.keys.length; h > g; g++)
                            if (c.keyCode == f.keys[g]) return "function" == typeof c.preventDefault && c.preventDefault(), f.action(a, b, c.keyCode), !1;
                return !0
            },
            findTracks: function() {
                var b = this,
                    c = b.$media.find("track");
                b.tracks = [], c.each(function(c, d) {
                    d = a(d), b.tracks.push({
                        srclang: d.attr("srclang") ? d.attr("srclang").toLowerCase() : "",
                        src: d.attr("src"),
                        kind: d.attr("kind"),
                        label: d.attr("label") || "",
                        entries: [],
                        isLoaded: !1
                    })
                })
            },
            changeSkin: function(a) {
                this.container[0].className = "mejs-container " + a, this.setPlayerSize(this.width, this.height), this.setControlsSize()
            },
            play: function() {
                this.load(), this.media.play()
            },
            pause: function() {
                try {
                    this.media.pause()
                } catch (a) {}
            },
            load: function() {
                this.isLoaded || this.media.load(), this.isLoaded = !0
            },
            setMuted: function(a) {
                this.media.setMuted(a)
            },
            setCurrentTime: function(a) {
                this.media.setCurrentTime(a)
            },
            getCurrentTime: function() {
                return this.media.currentTime
            },
            setVolume: function(a) {
                this.media.setVolume(a)
            },
            getVolume: function() {
                return this.media.volume
            },
            setSrc: function(a) {
                this.media.setSrc(a)
            },
            remove: function() {
                var a, b;
                for (a in this.options.features)
                    if (b = this.options.features[a], this["clean" + b]) try {
                        this["clean" + b](this)
                    } catch (c) {}
                this.isDynamic ? this.$node.insertBefore(this.container) : (this.$media.prop("controls", !0), this.$node.clone().insertBefore(this.container).show(), this.$node.remove()), "native" !== this.media.pluginType && this.media.remove(), delete mejs.players[this.id], "object" == typeof this.container && this.container.remove(), this.globalUnbind(), delete this.node.player
            }
        },
            function() {
                function b(b, d) {
                    var e = {
                        d: [],
                        w: []
                    };
                    return a.each((b || "").split(" "), function(a, b) {
                        var f = b + "." + d;
                        0 === f.indexOf(".") ? (e.d.push(f), e.w.push(f)) : e[c.test(b) ? "w" : "d"].push(f)
                    }), e.d = e.d.join(" "), e.w = e.w.join(" "), e
                }
                var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
                mejs.MediaElementPlayer.prototype.globalBind = function(c, d, e) {
                    c = b(c, this.id), c.d && a(document).bind(c.d, d, e), c.w && a(window).bind(c.w, d, e)
                }, mejs.MediaElementPlayer.prototype.globalUnbind = function(c, d) {
                    c = b(c, this.id), c.d && a(document).unbind(c.d, d), c.w && a(window).unbind(c.w, d)
                }
            }(), "undefined" != typeof a && (a.fn.mediaelementplayer = function(b) {
            return b === !1 ? this.each(function() {
                var b = a(this).data("mediaelementplayer");
                b && b.remove(), a(this).removeData("mediaelementplayer")
            }) : this.each(function() {
                a(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, b))
            }), this
        }, a(document).ready(function() {
            a(".mejs-player").mediaelementplayer()
        })), window.MediaElementPlayer = mejs.MediaElementPlayer
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            playpauseText: mejs.i18n.t("Play/Pause")
        }), a.extend(MediaElementPlayer.prototype, {
            buildplaypause: function(b, c, d, e) {
                var f = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '" aria-label="' + this.options.playpauseText + '"></button></div>').appendTo(c).click(function(a) {
                    return a.preventDefault(), e.paused ? e.play() : e.pause(), !1
                });
                e.addEventListener("play", function() {
                    f.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), e.addEventListener("playing", function() {
                    f.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), e.addEventListener("pause", function() {
                    f.removeClass("mejs-pause").addClass("mejs-play")
                }, !1), e.addEventListener("paused", function() {
                    f.removeClass("mejs-pause").addClass("mejs-play")
                }, !1)
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            stopText: "Stop"
        }), a.extend(MediaElementPlayer.prototype, {
            buildstop: function(b, c, d, e) {
                a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '" aria-label="' + this.options.stopText + '"></button></div>').appendTo(c).click(function() {
                    e.paused || e.pause(), e.currentTime > 0 && (e.setCurrentTime(0), e.pause(), c.find(".mejs-time-current").width("0px"), c.find(".mejs-time-handle").css("left", "0px"), c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)), c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)), d.find(".mejs-poster").show())
                })
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(MediaElementPlayer.prototype, {
            buildprogress: function(b, c, d, e) {
                a('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(c), c.find(".mejs-time-buffering").hide();
                var f = this,
                    g = c.find(".mejs-time-total");
                d = c.find(".mejs-time-loaded");
                var h = c.find(".mejs-time-current"),
                    i = c.find(".mejs-time-handle"),
                    j = c.find(".mejs-time-float"),
                    k = c.find(".mejs-time-float-current"),
                    l = function(a) {
                        a = a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.pageX;
                        var b = g.offset(),
                            c = g.outerWidth(!0),
                            d = 0,
                            f = d = 0;
                        e.duration && (a < b.left ? a = b.left : a > c + b.left && (a = c + b.left), f = a - b.left, d = f / c, d = .02 >= d ? 0 : d * e.duration, m && d !== e.currentTime && e.setCurrentTime(d), mejs.MediaFeatures.hasTouch || (j.css("left", f), k.html(mejs.Utility.secondsToTimeCode(d)), j.show()))
                    },
                    m = !1;
                g.bind("mousedown touchstart", function(a) {
                    return 1 === a.which || 0 === a.which ? (m = !0, l(a), f.globalBind("mousemove.dur touchmove.dur", function(a) {
                        l(a)
                    }), f.globalBind("mouseup.dur touchend.dur", function() {
                        m = !1, j.hide(), f.globalUnbind(".dur")
                    }), !1) : void 0
                }).bind("mouseenter", function() {
                    f.globalBind("mousemove.dur", function(a) {
                        l(a)
                    }), mejs.MediaFeatures.hasTouch || j.show()
                }).bind("mouseleave", function() {
                    m || (f.globalUnbind(".dur"), j.hide())
                }), e.addEventListener("progress", function(a) {
                    b.setProgressRail(a), b.setCurrentRail(a)
                }, !1), e.addEventListener("timeupdate", function(a) {
                    b.setProgressRail(a), b.setCurrentRail(a)
                }, !1), f.loaded = d, f.total = g, f.current = h, f.handle = i
            },
            setProgressRail: function(a) {
                var b = void 0 != a ? a.target : this.media,
                    c = null;
                b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration ? c = b.buffered.end(0) / b.duration : b && void 0 != b.bytesTotal && b.bytesTotal > 0 && void 0 != b.bufferedBytes ? c = b.bufferedBytes / b.bytesTotal : a && a.lengthComputable && 0 != a.total && (c = a.loaded / a.total), null !== c && (c = Math.min(1, Math.max(0, c)), this.loaded && this.total && this.loaded.width(this.total.width() * c))
            },
            setCurrentRail: function() {
                if (void 0 != this.media.currentTime && this.media.duration && this.total && this.handle) {
                    var a = Math.round(this.total.width() * this.media.currentTime / this.media.duration),
                        b = a - Math.round(this.handle.outerWidth(!0) / 2);
                    this.current.width(a), this.handle.css("left", b)
                }
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            duration: -1,
            timeAndDurationSeparator: "<span> | </span>"
        }), a.extend(MediaElementPlayer.prototype, {
            buildcurrent: function(b, c, d, e) {
                a('<div class="mejs-time"><span class="mejs-currenttime">' + (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(c), this.currenttime = this.controls.find(".mejs-currenttime"), e.addEventListener("timeupdate", function() {
                    b.updateCurrent()
                }, !1)
            },
            buildduration: function(b, c, d, e) {
                c.children().last().find(".mejs-currenttime").length > 0 ? a(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(c.find(".mejs-time")) : (c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(c)), this.durationD = this.controls.find(".mejs-duration"), e.addEventListener("timeupdate", function() {
                    b.updateDuration()
                }, !1)
            },
            updateCurrent: function() {
                this.currenttime && this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
            },
            updateDuration: function() {
                this.container.toggleClass("mejs-long-video", this.media.duration > 3600), this.durationD && (this.options.duration > 0 || this.media.duration) && this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration > 0 ? this.options.duration : this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            muteText: mejs.i18n.t("Mute Toggle"),
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), a.extend(MediaElementPlayer.prototype, {
            buildvolume: function(b, c, d, e) {
                if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
                    var f = this,
                        g = f.isVideo ? f.options.videoVolume : f.options.audioVolume,
                        h = "horizontal" == g ? a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(c) : a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(c),
                        i = f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                        j = f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                        k = f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                        l = f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                        m = function(a, b) {
                            if (i.is(":visible") || "undefined" != typeof b)
                                if (a = Math.max(0, a), a = Math.min(a, 1), 0 == a ? h.removeClass("mejs-mute").addClass("mejs-unmute") : h.removeClass("mejs-unmute").addClass("mejs-mute"), "vertical" == g) {
                                    var c = j.height(),
                                        d = j.position(),
                                        e = c - c * a;
                                    l.css("top", Math.round(d.top + e - l.height() / 2)), k.height(c - e), k.css("top", d.top + e)
                                } else c = j.width(), d = j.position(), c *= a, l.css("left", Math.round(d.left + c - l.width() / 2)), k.width(Math.round(c));
                            else i.show(), m(a, !0), i.hide()
                        },
                        n = function(a) {
                            var b = null,
                                c = j.offset();
                            if ("vertical" == g) {
                                if (b = j.height(), parseInt(j.css("top").replace(/px/, ""), 10), b = (b - (a.pageY - c.top)) / b, 0 == c.top || 0 == c.left) return
                            } else b = j.width(), b = (a.pageX - c.left) / b;
                            b = Math.max(0, b), b = Math.min(b, 1), m(b), 0 == b ? e.setMuted(!0) : e.setMuted(!1), e.setVolume(b)
                        },
                        o = !1,
                        p = !1;
                    h.hover(function() {
                        i.show(), p = !0
                    }, function() {
                        p = !1, !o && "vertical" == g && i.hide()
                    }), i.bind("mouseover", function() {
                        p = !0
                    }).bind("mousedown", function(a) {
                        return n(a), f.globalBind("mousemove.vol", function(a) {
                            n(a)
                        }), f.globalBind("mouseup.vol", function() {
                            o = !1, f.globalUnbind(".vol"), !p && "vertical" == g && i.hide()
                        }), o = !0, !1
                    }), h.find("button").click(function() {
                        e.setMuted(!e.muted)
                    }), e.addEventListener("volumechange", function() {
                        o || (e.muted ? (m(0), h.removeClass("mejs-mute").addClass("mejs-unmute")) : (m(e.volume), h.removeClass("mejs-unmute").addClass("mejs-mute")))
                    }, !1), f.container.is(":visible") && (m(b.options.startVolume), 0 === b.options.startVolume && e.setMuted(!0), "native" === e.pluginType && e.setVolume(b.options.startVolume))
                }
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            usePluginFullScreen: !0,
            newWindowCallback: function() {
                return ""
            },
            fullscreenText: mejs.i18n.t("Fullscreen")
        }), a.extend(MediaElementPlayer.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            buildfullscreen: function(b, c, d, e) {
                if (b.isVideo) {
                    b.isInIframe = window.location != window.parent.location, mejs.MediaFeatures.hasTrueNativeFullScreen && b.globalBind(mejs.MediaFeatures.fullScreenEventName, function() {
                        b.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (b.isNativeFullScreen = !0, b.setControlsSize()) : (b.isNativeFullScreen = !1, b.exitFullScreen()))
                    });
                    var f = this,
                        g = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + f.id + '" title="' + f.options.fullscreenText + '" aria-label="' + f.options.fullscreenText + '"></button></div>').appendTo(c);
                    if ("native" === f.media.pluginType || !f.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) g.click(function() {
                        mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || b.isFullScreen ? b.exitFullScreen() : b.enterFullScreen()
                    });
                    else {
                        var h = null;
                        if (function() {
                                var a = document.createElement("x"),
                                    b = document.documentElement,
                                    c = window.getComputedStyle;
                                return "pointerEvents" in a.style ? (a.style.pointerEvents = "auto", a.style.pointerEvents = "x", b.appendChild(a), c = c && "auto" === c(a, "").pointerEvents, b.removeChild(a), !!c) : !1
                            }() && !mejs.MediaFeatures.isOpera) {
                            var i = !1,
                                j = function() {
                                    if (i) {
                                        for (var a in k) k[a].hide();
                                        g.css("pointer-events", ""), f.controls.css("pointer-events", ""), f.media.removeEventListener("click", f.clickToPlayPauseCallback), i = !1
                                    }
                                },
                                k = {};
                            c = ["top", "left", "right", "bottom"];
                            var l, m = function() {
                                var a = g.offset().left - f.container.offset().left,
                                    b = g.offset().top - f.container.offset().top,
                                    c = g.outerWidth(!0),
                                    d = g.outerHeight(!0),
                                    e = f.container.width(),
                                    h = f.container.height();
                                for (l in k) k[l].css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                });
                                k.top.width(e).height(b), k.left.width(a).height(d).css({
                                    top: b
                                }), k.right.width(e - a - c).height(d).css({
                                    top: b,
                                    left: a + c
                                }), k.bottom.width(e).height(h - d - b).css({
                                    top: b + d
                                })
                            };
                            for (f.globalBind("resize", function() {
                                m()
                            }), l = 0, d = c.length; d > l; l++) k[c[l]] = a('<div class="mejs-fullscreen-hover" />').appendTo(f.container).mouseover(j).hide();
                            g.on("mouseover", function() {
                                if (!f.isFullScreen) {
                                    var a = g.offset(),
                                        c = b.container.offset();
                                    e.positionFullscreenButton(a.left - c.left, a.top - c.top, !1), g.css("pointer-events", "none"), f.controls.css("pointer-events", "none"), f.media.addEventListener("click", f.clickToPlayPauseCallback);
                                    for (l in k) k[l].show();
                                    m(), i = !0
                                }
                            }), e.addEventListener("fullscreenchange", function() {
                                f.isFullScreen = !f.isFullScreen, f.isFullScreen ? f.media.removeEventListener("click", f.clickToPlayPauseCallback) : f.media.addEventListener("click", f.clickToPlayPauseCallback), j()
                            }), f.globalBind("mousemove", function(a) {
                                if (i) {
                                    var b = g.offset();
                                    (a.pageY < b.top || a.pageY > b.top + g.outerHeight(!0) || a.pageX < b.left || a.pageX > b.left + g.outerWidth(!0)) && (g.css("pointer-events", ""), f.controls.css("pointer-events", ""), i = !1)
                                }
                            })
                        } else g.on("mouseover", function() {
                            null !== h && (clearTimeout(h), delete h);
                            var a = g.offset(),
                                c = b.container.offset();
                            e.positionFullscreenButton(a.left - c.left, a.top - c.top, !0)
                        }).on("mouseout", function() {
                            null !== h && (clearTimeout(h), delete h), h = setTimeout(function() {
                                e.hideFullscreenButton()
                            }, 1500)
                        })
                    }
                    b.fullscreenBtn = g, f.globalBind("keydown", function(a) {
                        (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || f.isFullScreen) && 27 == a.keyCode && b.exitFullScreen()
                    })
                }
            },
            cleanfullscreen: function(a) {
                a.exitFullScreen()
            },
            containerSizeTimeout: null,
            enterFullScreen: function() {
                var b = this;
                if ("native" === b.media.pluginType || !mejs.MediaFeatures.isFirefox && !b.options.usePluginFullScreen) {
                    if (a(document.documentElement).addClass("mejs-fullscreen"), normalHeight = b.container.height(), normalWidth = b.container.width(), "native" === b.media.pluginType)
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) mejs.MediaFeatures.requestFullScreen(b.container[0]), b.isInIframe && setTimeout(function d() {
                            if (b.isNativeFullScreen) {
                                var c = (window.devicePixelRatio || 1) * a(window).width(),
                                    e = screen.width;
                                Math.abs(e - c) > .002 * e ? b.exitFullScreen() : setTimeout(d, 500)
                            }
                        }, 500);
                        else if (mejs.MediaFeatures.hasSemiNativeFullScreen) return void b.media.webkitEnterFullscreen();
                    if (b.isInIframe) {
                        var c = b.options.newWindowCallback(this);
                        if ("" !== c) {
                            if (!mejs.MediaFeatures.hasTrueNativeFullScreen) return b.pause(), void window.open(c, b.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            setTimeout(function() {
                                b.isNativeFullScreen || (b.pause(), window.open(c, b.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"))
                            }, 250)
                        }
                    }
                    b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), b.containerSizeTimeout = setTimeout(function() {
                        b.container.css({
                            width: "100%",
                            height: "100%"
                        }), b.setControlsSize()
                    }, 500), "native" === b.media.pluginType ? b.$media.width("100%").height("100%") : (b.container.find(".mejs-shim").width("100%").height("100%"), b.media.setVideoSize(a(window).width(), a(window).height())), b.layers.children("div").width("100%").height("100%"), b.fullscreenBtn && b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), b.setControlsSize(), b.isFullScreen = !0, b.container.find(".mejs-captions-text").css("font-size", screen.width / b.width * 1 * 100 + "%"), b.container.find(".mejs-captions-position").css("bottom", "45px")
                }
            },
            exitFullScreen: function() {
                clearTimeout(this.containerSizeTimeout), "native" !== this.media.pluginType && mejs.MediaFeatures.isFirefox ? this.media.setFullscreen(!1) : (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || this.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), a(document.documentElement).removeClass("mejs-fullscreen"), this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight), "native" === this.media.pluginType ? this.$media.width(normalWidth).height(normalHeight) : (this.container.find(".mejs-shim").width(normalWidth).height(normalHeight), this.media.setVideoSize(normalWidth, normalHeight)), this.layers.children("div").width(normalWidth).height(normalHeight), this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), this.setControlsSize(), this.isFullScreen = !1, this.container.find(".mejs-captions-text").css("font-size", ""), this.container.find(".mejs-captions-position").css("bottom", ""))
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            speeds: ["1.50", "1.25", "1.00", "0.75"],
            defaultSpeed: "1.00"
        }), a.extend(MediaElementPlayer.prototype, {
            buildspeed: function(b, c, d, e) {
                if ("native" == this.media.pluginType) {
                    d = '<div class="mejs-button mejs-speed-button"><button type="button">' + this.options.defaultSpeed + 'x</button><div class="mejs-speed-selector"><ul>';
                    var f;
                    for (-1 === a.inArray(this.options.defaultSpeed, this.options.speeds) && this.options.speeds.push(this.options.defaultSpeed), this.options.speeds.sort(function(a, b) {
                        return parseFloat(b) - parseFloat(a)
                    }), f = 0; f < this.options.speeds.length; f++) d += '<li><input type="radio" name="speed" value="' + this.options.speeds[f] + '" id="' + this.options.speeds[f] + '" ', this.options.speeds[f] == this.options.defaultSpeed ? (d += "checked=true ", d += '/><label for="' + this.options.speeds[f] + '" class="mejs-speed-selected">' + this.options.speeds[f] + "x</label></li>") : d += '/><label for="' + this.options.speeds[f] + '">' + this.options.speeds[f] + "x</label></li>";
                    d += "</ul></div></div>", b.speedButton = a(d).appendTo(c), b.playbackspeed = this.options.defaultSpeed, b.speedButton.on("click", "input[type=radio]", function() {
                        b.playbackspeed = a(this).attr("value"), e.playbackRate = parseFloat(b.playbackspeed), b.speedButton.find("button").text(b.playbackspeed + "x"), b.speedButton.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), b.speedButton.find("input[type=radio]:checked").next().addClass("mejs-speed-selected")
                    }), c = b.speedButton.find(".mejs-speed-selector"), c.height(this.speedButton.find(".mejs-speed-selector ul").outerHeight(!0) + b.speedButton.find(".mejs-speed-translations").outerHeight(!0)), c.css("top", -1 * c.height() + "px")
                }
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            startLanguage: "",
            tracksText: mejs.i18n.t("Captions/Subtitles"),
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), a.extend(MediaElementPlayer.prototype, {
            hasChapters: !1,
            buildtracks: function(b, c, d, e) {
                if (0 !== b.tracks.length) {
                    var f;
                    if (this.domNode.textTracks)
                        for (f = this.domNode.textTracks.length - 1; f >= 0; f--) this.domNode.textTracks[f].mode = "hidden";
                    for (b.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(), b.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(), b.captionsText = b.captions.find(".mejs-captions-text"), b.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '" aria-label="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + b.id + '_captions" id="' + b.id + '_captions_none" value="none" checked="checked" /><label for="' + b.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(c), f = c = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && c++;
                    for (this.options.toggleCaptionsButtonWhenOnlyOne && 1 == c ? b.captionsButton.on("click", function() {
                        lang = null === b.selectedTrack ? b.tracks[0].srclang : "none", b.setTrack(lang)
                    }) : (b.captionsButton.on("mouseenter focusin", function() {
                        a(this).find(".mejs-captions-selector").css("visibility", "visible")
                    }).on("click", "input[type=radio]", function() {
                        lang = this.value, b.setTrack(lang)
                    }), b.captionsButton.on("mouseleave focusout", function() {
                        a(this).find(".mejs-captions-selector").css("visibility", "hidden")
                    })), b.options.alwaysShowControls ? b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : b.container.bind("controlsshown", function() {
                        b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                    }).bind("controlshidden", function() {
                        e.paused || b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                    }), b.trackToLoad = -1, b.selectedTrack = null, b.isLoadingTrack = !1, f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && b.addTrackButton(b.tracks[f].srclang, b.tracks[f].label);
                    b.loadNextTrack(), e.addEventListener("timeupdate", function() {
                        b.displayCaptions()
                    }, !1), "" !== b.options.slidesSelector && (b.slidesContainer = a(b.options.slidesSelector), e.addEventListener("timeupdate", function() {
                        b.displaySlides()
                    }, !1)), e.addEventListener("loadedmetadata", function() {
                        b.displayChapters()
                    }, !1), b.container.hover(function() {
                        b.hasChapters && (b.chapters.css("visibility", "visible"), b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))
                    }, function() {
                        b.hasChapters && !e.paused && b.chapters.fadeOut(200, function() {
                            a(this).css("visibility", "hidden"), a(this).css("display", "block")
                        })
                    }), null !== b.node.getAttribute("autoplay") && b.chapters.css("visibility", "hidden")
                }
            },
            setTrack: function(a) {
                var b;
                if ("none" == a) this.selectedTrack = null, this.captionsButton.removeClass("mejs-captions-enabled");
                else
                    for (b = 0; b < this.tracks.length; b++)
                        if (this.tracks[b].srclang == a) {
                            null === this.selectedTrack && this.captionsButton.addClass("mejs-captions-enabled"), this.selectedTrack = this.tracks[b], this.captions.attr("lang", this.selectedTrack.srclang), this.displayCaptions();
                            break
                        }
            },
            loadNextTrack: function() {
                this.trackToLoad++, this.trackToLoad < this.tracks.length ? (this.isLoadingTrack = !0, this.loadTrack(this.trackToLoad)) : (this.isLoadingTrack = !1, this.checkForTracks())
            },
            loadTrack: function(b) {
                var c = this,
                    d = c.tracks[b];
                a.ajax({
                    url: d.src,
                    dataType: "text",
                    success: function(a) {
                        d.entries = "string" == typeof a && /<tt\s+xml/gi.exec(a) ? mejs.TrackFormatParser.dfxp.parse(a) : mejs.TrackFormatParser.webvtt.parse(a), d.isLoaded = !0, c.enableTrackButton(d.srclang, d.label), c.loadNextTrack(), "chapters" == d.kind && c.media.addEventListener("play", function() {
                            c.media.duration > 0 && c.displayChapters(d)
                        }, !1), "slides" == d.kind && c.setupSlides(d)
                    },
                    error: function() {
                        c.loadNextTrack()
                    }
                })
            },
            enableTrackButton: function(b, c) {
                "" === c && (c = mejs.language.codes[b] || b), this.captionsButton.find("input[value=" + b + "]").prop("disabled", !1).siblings("label").html(c), this.options.startLanguage == b && a("#" + this.id + "_captions_" + b).prop("checked", !0).trigger("click"), this.adjustLanguageBox()
            },
            addTrackButton: function(b, c) {
                "" === c && (c = mejs.language.codes[b] || b), this.captionsButton.find("ul").append(a('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + b + '" value="' + b + '" disabled="disabled" /><label for="' + this.id + "_captions_" + b + '">' + c + " (loading)</label></li>")), this.adjustLanguageBox(), this.container.find(".mejs-captions-translations option[value=" + b + "]").remove()
            },
            adjustLanguageBox: function() {
                this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + this.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
            },
            checkForTracks: function() {
                var a = !1;
                if (this.options.hideCaptionsButtonWhenEmpty) {
                    for (i = 0; i < this.tracks.length; i++)
                        if ("subtitles" == this.tracks[i].kind) {
                            a = !0;
                            break
                        }
                    a || (this.captionsButton.hide(), this.setControlsSize())
                }
            },
            displayCaptions: function() {
                if ("undefined" != typeof this.tracks) {
                    var a, b = this.selectedTrack;
                    if (null !== b && b.isLoaded)
                        for (a = 0; a < b.entries.times.length; a++)
                            if (this.media.currentTime >= b.entries.times[a].start && this.media.currentTime <= b.entries.times[a].stop) return this.captionsText.html(b.entries.text[a]).attr("class", "mejs-captions-text " + (b.entries.times[a].identifier || "")), void this.captions.show().height(0);
                    this.captions.hide()
                }
            },
            setupSlides: function(a) {
                this.slides = a, this.slides.entries.imgs = [this.slides.entries.text.length], this.showSlide(0)
            },
            showSlide: function(b) {
                if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                    var c = this,
                        d = c.slides.entries.text[b],
                        e = c.slides.entries.imgs[b];
                    "undefined" == typeof e || "undefined" == typeof e.fadeIn ? c.slides.entries.imgs[b] = e = a('<img src="' + d + '">').on("load", function() {
                        e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                    }) : !e.is(":visible") && !e.is(":animated") && e.fadeIn().siblings(":visible").fadeOut()
                }
            },
            displaySlides: function() {
                if ("undefined" != typeof this.slides) {
                    var a, b = this.slides;
                    for (a = 0; a < b.entries.times.length; a++)
                        if (this.media.currentTime >= b.entries.times[a].start && this.media.currentTime <= b.entries.times[a].stop) {
                            this.showSlide(a);
                            break
                        }
                }
            },
            displayChapters: function() {
                var a;
                for (a = 0; a < this.tracks.length; a++)
                    if ("chapters" == this.tracks[a].kind && this.tracks[a].isLoaded) {
                        this.drawChapters(this.tracks[a]), this.hasChapters = !0;
                        break
                    }
            },
            drawChapters: function(b) {
                var c, d, e = this,
                    f = d = 0;
                for (e.chapters.empty(), c = 0; c < b.entries.times.length; c++) d = b.entries.times[c].stop - b.entries.times[c].start, d = Math.floor(d / e.media.duration * 100), (d + f > 100 || c == b.entries.times.length - 1 && 100 > d + f) && (d = 100 - f), e.chapters.append(a('<div class="mejs-chapter" rel="' + b.entries.times[c].start + '" style="left: ' + f.toString() + "%;width: " + d.toString() + '%;"><div class="mejs-chapter-block' + (c == b.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + b.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(b.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(b.entries.times[c].stop) + "</span></div></div>")), f += d;
                e.chapters.find("div.mejs-chapter").click(function() {
                    e.media.setCurrentTime(parseFloat(a(this).attr("rel"))), e.media.paused && e.media.play()
                }), e.chapters.show()
            }
        }), mejs.language = {
            codes: {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic",
                be: "Belarusian",
                bg: "Bulgarian",
                ca: "Catalan",
                zh: "Chinese",
                "zh-cn": "Chinese Simplified",
                "zh-tw": "Chinese Traditional",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch",
                en: "English",
                et: "Estonian",
                fl: "Filipino",
                fi: "Finnish",
                fr: "French",
                gl: "Galician",
                de: "German",
                el: "Greek",
                ht: "Haitian Creole",
                iw: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                ga: "Irish",
                it: "Italian",
                ja: "Japanese",
                ko: "Korean",
                lv: "Latvian",
                lt: "Lithuanian",
                mk: "Macedonian",
                ms: "Malay",
                mt: "Maltese",
                no: "Norwegian",
                fa: "Persian",
                pl: "Polish",
                pt: "Portuguese",
                ro: "Romanian",
                ru: "Russian",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                es: "Spanish",
                sw: "Swahili",
                sv: "Swedish",
                tl: "Tagalog",
                th: "Thai",
                tr: "Turkish",
                uk: "Ukrainian",
                vi: "Vietnamese",
                cy: "Welsh",
                yi: "Yiddish"
            }
        }, mejs.TrackFormatParser = {
            webvtt: {
                pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(b) {
                    var c = 0;
                    b = mejs.TrackFormatParser.split2(b, /\r?\n/);
                    for (var d, e, f, g = {
                        text: [],
                        times: []
                    }; c < b.length; c++) {
                        if ((d = this.pattern_timecode.exec(b[c])) && c < b.length) {
                            for (c - 1 >= 0 && "" !== b[c - 1] && (f = b[c - 1]), c++, e = b[c], c++;
                                 "" !== b[c] && c < b.length;) e = e + "\n" + b[c], c++;
                            e = a.trim(e).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), g.text.push(e), g.times.push({
                                identifier: f,
                                start: 0 === mejs.Utility.convertSMPTEtoSeconds(d[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(d[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(d[3]),
                                settings: d[5]
                            })
                        }
                        f = ""
                    }
                    return g
                }
            },
            dfxp: {
                parse: function(b) {
                    b = a(b).filter("tt");
                    var c = 0;
                    c = b.children("div").eq(0);
                    var d = c.find("p");
                    c = b.find("#" + c.attr("style"));
                    var e, f;
                    if (b = {
                            text: [],
                            times: []
                        }, c.length && (f = c.removeAttr("id").get(0).attributes, f.length))
                        for (e = {}, c = 0; c < f.length; c++) e[f[c].name.split(":")[1]] = f[c].value;
                    for (c = 0; c < d.length; c++) {
                        var g;
                        if (f = {
                                start: null,
                                stop: null,
                                style: null
                            }, d.eq(c).attr("begin") && (f.start = mejs.Utility.convertSMPTEtoSeconds(d.eq(c).attr("begin"))), !f.start && d.eq(c - 1).attr("end") && (f.start = mejs.Utility.convertSMPTEtoSeconds(d.eq(c - 1).attr("end"))), d.eq(c).attr("end") && (f.stop = mejs.Utility.convertSMPTEtoSeconds(d.eq(c).attr("end"))), !f.stop && d.eq(c + 1).attr("begin") && (f.stop = mejs.Utility.convertSMPTEtoSeconds(d.eq(c + 1).attr("begin"))), e) {
                            g = "";
                            for (var h in e) g += h + ":" + e[h] + ";"
                        }
                        g && (f.style = g), 0 === f.start && (f.start = .2), b.times.push(f), f = a.trim(d.eq(c).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), b.text.push(f), 0 === b.times.start && (b.times.start = 2)
                    }
                    return b
                }
            },
            split2: function(a, b) {
                return a.split(b)
            }
        }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(a, b) {
            var c, d = [],
                e = "";
            for (c = 0; c < a.length; c++) e += a.substring(c, c + 1), b.test(e) && (d.push(e.replace(b, "")), e = "");
            return d.push(e), d
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            contextMenuItems: [{
                render: function(a) {
                    return "undefined" == typeof a.enterFullScreen ? null : a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
                },
                click: function(a) {
                    a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                }
            }, {
                render: function(a) {
                    return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
                },
                click: function(a) {
                    a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
                }
            }, {
                isSeparator: !0
            }, {
                render: function() {
                    return mejs.i18n.t("Download Video")
                },
                click: function(a) {
                    window.location.href = a.media.currentSrc
                }
            }]
        }), a.extend(MediaElementPlayer.prototype, {
            buildcontextmenu: function(b) {
                b.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(), b.container.bind("contextmenu", function(a) {
                    return b.isContextMenuEnabled ? (a.preventDefault(), b.renderContextMenu(a.clientX - 1, a.clientY - 1), !1) : void 0
                }), b.container.bind("click", function() {
                    b.contextMenu.hide()
                }), b.contextMenu.bind("mouseleave", function() {
                    b.startContextMenuTimer()
                })
            },
            cleancontextmenu: function(a) {
                a.contextMenu.remove()
            },
            isContextMenuEnabled: !0,
            enableContextMenu: function() {
                this.isContextMenuEnabled = !0
            },
            disableContextMenu: function() {
                this.isContextMenuEnabled = !1
            },
            contextMenuTimeout: null,
            startContextMenuTimer: function() {
                var a = this;
                a.killContextMenuTimer(), a.contextMenuTimer = setTimeout(function() {
                    a.hideContextMenu(), a.killContextMenuTimer()
                }, 750)
            },
            killContextMenuTimer: function() {
                var a = this.contextMenuTimer;
                null != a && (clearTimeout(a), delete a)
            },
            hideContextMenu: function() {
                this.contextMenu.hide()
            },
            renderContextMenu: function(b, c) {
                for (var d = this, e = "", f = d.options.contextMenuItems, g = 0, h = f.length; h > g; g++)
                    if (f[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
                    else {
                        var i = f[g].render(d);
                        null != i && (e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + 1e6 * Math.random() + '">' + i + "</div>")
                    }
                d.contextMenu.empty().append(a(e)).css({
                    top: c,
                    left: b
                }).show(), d.contextMenu.find(".mejs-contextmenu-item").each(function() {
                    var b = a(this),
                        c = parseInt(b.data("itemindex"), 10),
                        e = d.options.contextMenuItems[c];
                    "undefined" != typeof e.show && e.show(b, d), b.click(function() {
                        "undefined" != typeof e.click && e.click(d), d.contextMenu.hide()
                    })
                }), setTimeout(function() {
                    d.killControlsTimer("rev3")
                }, 100)
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            postrollCloseText: mejs.i18n.t("Close")
        }), a.extend(MediaElementPlayer.prototype, {
            buildpostroll: function(b, c, d) {
                var e = this.container.find('link[rel="postroll"]').attr("href");
                "undefined" != typeof e && (b.postroll = a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + this.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(), this.media.addEventListener("ended", function() {
                    a.ajax({
                        dataType: "html",
                        url: e,
                        success: function(a) {
                            d.find(".mejs-postroll-layer-content").html(a)
                        }
                    }), b.postroll.show()
                }, !1))
            }
        })
    }(mejs.$),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        "use strict";

        function b(b) {
            return !b.nodeName || -1 !== a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
        }

        function c(b) {
            return a.isFunction(b) || a.isPlainObject(b) ? b : {
                top: b,
                left: b
            }
        }
        var d = a.scrollTo = function(b, c, d) {
            return a(window).scrollTo(b, c, d)
        };
        return d.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, a.fn.scrollTo = function(e, f, g) {
            "object" == typeof f && (g = f, f = 0), "function" == typeof g && (g = {
                onAfter: g
            }), "max" === e && (e = 9e9), g = a.extend({}, d.defaults, g), f = f || g.duration;
            var h = g.queue && g.axis.length > 1;
            return h && (f /= 2), g.offset = c(g.offset), g.over = c(g.over), this.each(function() {
                function i(b) {
                    var c = a.extend({}, g, {
                        queue: !0,
                        duration: f,
                        complete: b && function() {
                            b.call(l, n, g)
                        }
                    });
                    m.animate(o, c)
                }
                if (null !== e) {
                    var j, k = b(this),
                        l = k ? this.contentWindow || window : this,
                        m = a(l),
                        n = e,
                        o = {};
                    switch (typeof n) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(n)) {
                                n = c(n);
                                break
                            }
                            n = k ? a(n) : a(n, l);
                        case "object":
                            if (0 === n.length) return;
                            (n.is || n.style) && (j = (n = a(n)).offset())
                    }
                    var p = a.isFunction(g.offset) && g.offset(l, n) || g.offset;
                    a.each(g.axis.split(""), function(a, b) {
                        var c = "x" === b ? "Left" : "Top",
                            e = c.toLowerCase(),
                            f = "scroll" + c,
                            q = m[f](),
                            r = d.max(l, b);
                        if (j) o[f] = j[e] + (k ? 0 : q - m.offset()[e]), g.margin && (o[f] -= parseInt(n.css("margin" + c), 10) || 0, o[f] -= parseInt(n.css("border" + c + "Width"), 10) || 0), o[f] += p[e] || 0, g.over[e] && (o[f] += n["x" === b ? "width" : "height"]() * g.over[e]);
                        else {
                            var s = n[e];
                            o[f] = s.slice && "%" === s.slice(-1) ? parseFloat(s) / 100 * r : s
                        }
                        g.limit && /^\d+$/.test(o[f]) && (o[f] = o[f] <= 0 ? 0 : Math.min(o[f], r)), !a && g.axis.length > 1 && (q === o[f] ? o = {} : h && (i(g.onAfterFirst), o = {}))
                    }), i(g.onAfter)
                }
            })
        }, d.max = function(c, d) {
            var e = "x" === d ? "Width" : "Height",
                f = "scroll" + e;
            if (!b(c)) return c[f] - a(c)[e.toLowerCase()]();
            var g = "client" + e,
                h = c.ownerDocument || c.document,
                i = h.documentElement,
                j = h.body;
            return Math.max(i[f], j[f]) - Math.min(i[g], j[g])
        }, a.Tween.propHooks.scrollLeft = a.Tween.propHooks.scrollTop = {
            get: function(b) {
                return a(b.elem)[b.prop]()
            },
            set: function(b) {
                var c = this.get(b);
                if (b.options.interrupt && b._last && b._last !== c) return a(b.elem).stop();
                var d = Math.round(b.now);
                c !== d && (a(b.elem)[b.prop](d), b._last = this.get(b))
            }
        }, d
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a, b) {
        "use strict";
        a.infinitescroll = function(b, c, d) {
            this.element = a(d), this._create(b, c) || (this.failed = !0)
        }, a.infinitescroll.defaults = {
            loading: {
                finished: b,
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
                msg: null,
                msgText: "<em>Loading the next set of posts...</em>",
                selector: null,
                speed: "fast",
                start: b
            },
            state: {
                isDuringAjax: !1,
                isInvalidPage: !1,
                isDestroyed: !1,
                isDone: !1,
                isPaused: !1,
                isBeyondMaxPage: !1,
                currPage: 1
            },
            debug: !1,
            behavior: b,
            binder: a(window),
            nextSelector: "div.navigation a:first",
            navSelector: "div.navigation",
            contentSelector: null,
            extraScrollPx: 150,
            itemSelector: "div.post",
            animate: !1,
            pathParse: b,
            dataType: "html",
            appendCallback: !0,
            bufferPx: 40,
            errorCallback: function() {},
            infid: 0,
            pixelsFromNavToBottom: b,
            path: b,
            prefill: !1,
            maxPage: b
        }, a.infinitescroll.prototype = {
            _binding: function(a) {
                var c = this,
                    d = c.options;
                return d.v = "2.0b2.120520", d.behavior && this["_binding_" + d.behavior] !== b ? void this["_binding_" + d.behavior].call(this) : "bind" !== a && "unbind" !== a ? (this._debug("Binding value  " + a + " not valid"), !1) : ("unbind" === a ? this.options.binder.unbind("smartscroll.infscr." + c.options.infid) : this.options.binder[a]("smartscroll.infscr." + c.options.infid, function() {
                    c.scroll()
                }), void this._debug("Binding", a))
            },
            _create: function(c, d) {
                var e = a.extend(!0, {}, a.infinitescroll.defaults, c);
                this.options = e;
                var f = a(window),
                    g = this;
                if (!g._validate(c)) return !1;
                var h = a(e.nextSelector).attr("href");
                if (!h) return this._debug("Navigation selector not found"), !1;
                e.path = e.path || this._determinepath(h), e.contentSelector = e.contentSelector || this.element, e.loading.selector = e.loading.selector || e.contentSelector, e.loading.msg = e.loading.msg || a('<div id="infscr-loading"><img alt="Loading..." src="' + e.loading.img + '" /><div>' + e.loading.msgText + "</div></div>"), (new Image).src = e.loading.img, e.pixelsFromNavToBottom === b && (e.pixelsFromNavToBottom = a(document).height() - a(e.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + e.pixelsFromNavToBottom));
                var i = this;
                return e.loading.start = e.loading.start || function() {
                    a(e.navSelector).hide(), e.loading.msg.appendTo(e.loading.selector).show(e.loading.speed, a.proxy(function() {
                        this.beginAjax(e)
                    }, i))
                }, e.loading.finished = e.loading.finished || function() {
                    e.state.isBeyondMaxPage || e.loading.msg.fadeOut(e.loading.speed)
                }, e.callback = function(c, g, h) {
                    e.behavior && c["_callback_" + e.behavior] !== b && c["_callback_" + e.behavior].call(a(e.contentSelector)[0], g, h), d && d.call(a(e.contentSelector)[0], g, e, h), e.prefill && f.bind("resize.infinite-scroll", c._prefill)
                }, c.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(a) {
                    console[a] = this.call(console[a], console)
                }, Function.prototype.bind)), this._setup(), e.prefill && this._prefill(), !0
            },
            _prefill: function() {
                function b() {
                    return a(c.options.contentSelector).height() <= d.height()
                }
                var c = this,
                    d = a(window);
                this._prefill = function() {
                    b() && c.scroll(), d.bind("resize.infinite-scroll", function() {
                        b() && (d.unbind("resize.infinite-scroll"), c.scroll())
                    })
                }, this._prefill()
            },
            _debug: function() {
                !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
            },
            _determinepath: function(a) {
                var c = this.options;
                if (c.behavior && this["_determinepath_" + c.behavior] !== b) return this["_determinepath_" + c.behavior].call(this, a);
                if (c.pathParse) return this._debug("pathParse manual"), c.pathParse(a, this.options.state.currPage + 1);
                if (a.match(/^(.*?)\b2\b(.*?$)/)) a = a.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                else if (a.match(/^(.*?)2(.*?$)/)) {
                    if (a.match(/^(.*?page=)2(\/.*|$)/)) return a = a.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    a = a.match(/^(.*?)2(.*?$)/).slice(1)
                } else {
                    if (a.match(/^(.*?page=)1(\/.*|$)/)) return a = a.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), c.state.isInvalidPage = !0
                }
                return this._debug("determinePath", a), a
            },
            _error: function(a) {
                var c = this.options;
                return c.behavior && this["_error_" + c.behavior] !== b ? void this["_error_" + c.behavior].call(this, a) : ("destroy" !== a && "end" !== a && (a = "unknown"), this._debug("Error", a), ("end" === a || c.state.isBeyondMaxPage) && this._showdonemsg(), c.state.isDone = !0, c.state.currPage = 1, c.state.isPaused = !1, c.state.isBeyondMaxPage = !1, void this._binding("unbind"))
            },
            _loadcallback: function(c, d, e) {
                var f, g = this.options,
                    h = this.options.callback,
                    i = g.state.isDone ? "done" : g.appendCallback ? "append" : "no-append";
                if (g.behavior && this["_loadcallback_" + g.behavior] !== b) return void this["_loadcallback_" + g.behavior].call(this, c, d);
                switch (i) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        if ("html" === g.dataType && (d = "<div>" + d + "</div>", d = a(d).find(g.itemSelector)), 0 === d.length) return this._error("end");
                        break;
                    case "append":
                        var j = c.children();
                        if (0 === j.length) return this._error("end");
                        for (f = document.createDocumentFragment(); c[0].firstChild;) f.appendChild(c[0].firstChild);
                        this._debug("contentSelector", a(g.contentSelector)[0]), a(g.contentSelector)[0].appendChild(f), d = j.get()
                }
                if (g.loading.finished.call(a(g.contentSelector)[0], g), g.animate) {
                    var k = a(window).scrollTop() + a(g.loading.msg).height() + g.extraScrollPx + "px";
                    a("html,body").animate({
                        scrollTop: k
                    }, 800, function() {
                        g.state.isDuringAjax = !1
                    })
                }
                g.animate || (g.state.isDuringAjax = !1), h(this, d, e), g.prefill && this._prefill()
            },
            _nearbottom: function() {
                var c = this.options,
                    d = 0 + a(document).height() - c.binder.scrollTop() - a(window).height();
                return c.behavior && this["_nearbottom_" + c.behavior] !== b ? this["_nearbottom_" + c.behavior].call(this) : (this._debug("math:", d, c.pixelsFromNavToBottom), d - c.bufferPx < c.pixelsFromNavToBottom)
            },
            _pausing: function(a) {
                var c = this.options;
                if (c.behavior && this["_pausing_" + c.behavior] !== b) return void this["_pausing_" + c.behavior].call(this, a);
                switch ("pause" !== a && "resume" !== a && null !== a && this._debug("Invalid argument. Toggling pause value instead"), a = !a || "pause" !== a && "resume" !== a ? "toggle" : a) {
                    case "pause":
                        c.state.isPaused = !0;
                        break;
                    case "resume":
                        c.state.isPaused = !1;
                        break;
                    case "toggle":
                        c.state.isPaused = !c.state.isPaused
                }
                return this._debug("Paused", c.state.isPaused), !1
            },
            _setup: function() {
                var a = this.options;
                return a.behavior && this["_setup_" + a.behavior] !== b ? void this["_setup_" + a.behavior].call(this) : (this._binding("bind"), !1)
            },
            _showdonemsg: function() {
                var c = this.options;
                return c.behavior && this["_showdonemsg_" + c.behavior] !== b ? void this["_showdonemsg_" + c.behavior].call(this) : (c.loading.msg.find("img").hide().parent().find("div").html(c.loading.finishedMsg).animate({
                    opacity: 1
                }, 2e3, function() {
                    a(this).parent().fadeOut(c.loading.speed)
                }), void c.errorCallback.call(a(c.contentSelector)[0], "done"))
            },
            _validate: function(b) {
                for (var c in b)
                    if (c.indexOf && c.indexOf("Selector") > -1 && 0 === a(b[c]).length) return this._debug("Your " + c + " found no elements."), !1;
                return !0
            },
            bind: function() {
                this._binding("bind")
            },
            destroy: function() {
                return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
            },
            pause: function() {
                this._pausing("pause")
            },
            resume: function() {
                this._pausing("resume")
            },
            beginAjax: function(c) {
                var d, e, f, g, h = this,
                    i = c.path;
                if (c.state.currPage++, c.maxPage !== b && c.state.currPage > c.maxPage) return c.state.isBeyondMaxPage = !0, void this.destroy();
                switch (d = a(a(c.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), e = "function" == typeof i ? i(c.state.currPage) : i.join(c.state.currPage), h._debug("heading into ajax", e), f = "html" === c.dataType || "json" === c.dataType ? c.dataType : "html+callback", c.appendCallback && "html" === c.dataType && (f += "+callback"), f) {
                    case "html+callback":
                        h._debug("Using HTML via .load() method"), d.load(e + " " + c.itemSelector, b, function(a) {
                            h._loadcallback(d, a, e)
                        });
                        break;
                    case "html":
                        h._debug("Using " + f.toUpperCase() + " via $.ajax() method"), a.ajax({
                            url: e,
                            dataType: c.dataType,
                            complete: function(a, b) {
                                g = "undefined" != typeof a.isResolved ? a.isResolved() : "success" === b || "notmodified" === b, g ? h._loadcallback(d, a.responseText, e) : h._error("end")
                            }
                        });
                        break;
                    case "json":
                        h._debug("Using " + f.toUpperCase() + " via $.ajax() method"), a.ajax({
                            dataType: "json",
                            type: "GET",
                            url: e,
                            success: function(a, f, i) {
                                if (g = "undefined" != typeof i.isResolved ? i.isResolved() : "success" === f || "notmodified" === f, c.appendCallback)
                                    if (c.template !== b) {
                                        var j = c.template(a);
                                        d.append(j), g ? h._loadcallback(d, j) : h._error("end")
                                    } else h._debug("template must be defined."), h._error("end");
                                else g ? h._loadcallback(d, a, e) : h._error("end")
                            },
                            error: function() {
                                h._debug("JSON ajax request failed."), h._error("end")
                            }
                        })
                }
            },
            retrieve: function(c) {
                c = c || null;
                var d = this,
                    e = d.options;
                return e.behavior && this["retrieve_" + e.behavior] !== b ? void this["retrieve_" + e.behavior].call(this, c) : e.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (e.state.isDuringAjax = !0, void e.loading.start.call(a(e.contentSelector)[0], e))
            },
            scroll: function() {
                var a = this.options,
                    c = a.state;
                return a.behavior && this["scroll_" + a.behavior] !== b ? void this["scroll_" + a.behavior].call(this) : void(c.isDuringAjax || c.isInvalidPage || c.isDone || c.isDestroyed || c.isPaused || this._nearbottom() && this.retrieve())
            },
            toggle: function() {
                this._pausing()
            },
            unbind: function() {
                this._binding("unbind")
            },
            update: function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            }
        }, a.fn.infinitescroll = function(b, c) {
            var d = typeof b;
            switch (d) {
                case "string":
                    var e = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var c = a.data(this, "infinitescroll");
                        return c && a.isFunction(c[b]) && "_" !== b.charAt(0) ? void c[b].apply(c, e) : !1
                    });
                    break;
                case "object":
                    this.each(function() {
                        var d = a.data(this, "infinitescroll");
                        d ? d.update(b) : (d = new a.infinitescroll(b, c, this), d.failed || a.data(this, "infinitescroll", d))
                    })
            }
            return this
        };
        var c, d = a.event;
        d.special.smartscroll = {
            setup: function() {
                a(this).bind("scroll", d.special.smartscroll.handler)
            },
            teardown: function() {
                a(this).unbind("scroll", d.special.smartscroll.handler)
            },
            handler: function(b, d) {
                var e = this,
                    f = arguments;
                b.type = "smartscroll", c && clearTimeout(c), c = setTimeout(function() {
                    a(e).trigger("smartscroll", f)
                }, "execAsap" === d ? 0 : 100)
            }
        }, a.fn.smartscroll = function(a) {
            return a ? this.bind("smartscroll", a) : this.trigger("smartscroll", ["execAsap"])
        }
    }),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        "use strict";

        function b(a) {
            if (a instanceof Date) return a;
            if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
            throw new Error("Couldn't cast `" + a + "` to a date object.")
        }

        function c(a) {
            var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
            return new RegExp(b)
        }

        function d(a) {
            return function(b) {
                var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (d)
                    for (var f = 0, g = d.length; g > f; ++f) {
                        var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                            j = c(h[0]),
                            k = h[1] || "",
                            l = h[3] || "",
                            m = null;
                        h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && 10 > m && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
                    }
                return b = b.replace(/%%/, "%")
            }
        }

        function e(a, b) {
            var c = "s",
                d = "";
            return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c
        }
        var f = [],
            g = [],
            h = {
                precision: 100,
                elapse: !1
            };
        g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
        var i = {
                Y: "years",
                m: "months",
                w: "weeks",
                d: "days",
                D: "totalDays",
                H: "hours",
                M: "minutes",
                S: "seconds"
            },
            j = function(b, c, d) {
                this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.start()
            };
        a.extend(j.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var a = this;
                this.update(), this.interval = setInterval(function() {
                    a.update.call(a)
                }, this.options.precision)
            },
            stop: function() {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function() {
                this.interval ? this.stop() : this.start()
            },
            pause: function() {
                this.stop()
            },
            resume: function() {
                this.start()
            },
            remove: function() {
                this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function(a) {
                this.finalDate = b(a)
            },
            update: function() {
                if (0 === this.$el.closest("html").length) return void this.remove();
                var b, c = void 0 !== a._data(this.el, "events"),
                    d = new Date;
                b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && 0 > b ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
                    seconds: this.totalSecsLeft % 60,
                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                    years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
                }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
            },
            dispatchEvent: function(b) {
                var c = a.Event(b + ".countdown");
                c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
            }
        }), a.fn.countdown = function() {
            var b = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var c = a(this).data("countdown-instance");
                if (void 0 !== c) {
                    var d = f[c],
                        e = b[0];
                    j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
                } else new j(this, b[0], b[1])
            })
        }
    }),
    function(a) {
        var b = !0;
        a.flexslider = function(c, d) {
            var e = a(c);
            e.vars = a.extend({}, a.flexslider.defaults, d);
            var f, g = e.vars.namespace,
                h = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                i = ("ontouchstart" in window || h || window.DocumentTouch && document instanceof DocumentTouch) && e.vars.touch,
                j = "click touchend MSPointerUp keyup",
                k = "",
                l = "vertical" === e.vars.direction,
                m = e.vars.reverse,
                n = e.vars.itemWidth > 0,
                o = "fade" === e.vars.animation,
                p = "" !== e.vars.asNavFor,
                q = {};
            a.data(c, "flexslider", e), q = {
                init: function() {
                    e.animating = !1, e.currentSlide = parseInt(e.vars.startAt ? e.vars.startAt : 0, 10), isNaN(e.currentSlide) && (e.currentSlide = 0), e.animatingTo = e.currentSlide, e.atEnd = 0 === e.currentSlide || e.currentSlide === e.last, e.containerSelector = e.vars.selector.substr(0, e.vars.selector.search(" ")), e.slides = a(e.vars.selector, e), e.container = a(e.containerSelector, e), e.count = e.slides.length, e.syncExists = a(e.vars.sync).length > 0, "slide" === e.vars.animation && (e.vars.animation = "swing"), e.prop = l ? "top" : "marginLeft", e.args = {}, e.manualPause = !1, e.stopped = !1, e.started = !1, e.startTimeout = null, e.transitions = !e.vars.video && !o && e.vars.useCSS && function() {
                        var a = document.createElement("div"),
                            b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var c in b)
                            if (void 0 !== a.style[b[c]]) return e.pfx = b[c].replace("Perspective", "").toLowerCase(), e.prop = "-" + e.pfx + "-transform", !0;
                        return !1
                    }(), e.ensureAnimationEnd = "", "" !== e.vars.controlsContainer && (e.controlsContainer = a(e.vars.controlsContainer).length > 0 && a(e.vars.controlsContainer)), "" !== e.vars.manualControls && (e.manualControls = a(e.vars.manualControls).length > 0 && a(e.vars.manualControls)), "" !== e.vars.customDirectionNav && (e.customDirectionNav = 2 === a(e.vars.customDirectionNav).length && a(e.vars.customDirectionNav)), e.vars.randomize && (e.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), e.container.empty().append(e.slides)), e.doMath(), e.setup("init"), e.vars.controlNav && q.controlNav.setup(), e.vars.directionNav && q.directionNav.setup(), e.vars.keyboard && (1 === a(e.containerSelector).length || e.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
                        var b = a.keyCode;
                        if (!e.animating && (39 === b || 37 === b)) {
                            var c = 39 === b ? e.getTarget("next") : 37 === b ? e.getTarget("prev") : !1;
                            e.flexAnimate(c, e.vars.pauseOnAction)
                        }
                    }), e.vars.mousewheel && e.bind("mousewheel", function(a, b, c, d) {
                        a.preventDefault();
                        var f = 0 > b ? e.getTarget("next") : e.getTarget("prev");
                        e.flexAnimate(f, e.vars.pauseOnAction)
                    }), e.vars.pausePlay && q.pausePlay.setup(), e.vars.slideshow && e.vars.pauseInvisible && q.pauseInvisible.init(), e.vars.slideshow && (e.vars.pauseOnHover && e.hover(function() {
                        e.manualPlay || e.manualPause || e.pause()
                    }, function() {
                        e.manualPause || e.manualPlay || e.stopped || e.play()
                    }), e.vars.pauseInvisible && q.pauseInvisible.isHidden() || (e.vars.initDelay > 0 ? e.startTimeout = setTimeout(e.play, e.vars.initDelay) : e.play())), p && q.asNav.setup(), i && e.vars.touch && q.touch(), (!o || o && e.vars.smoothHeight) && a(window).bind("resize orientationchange focus", q.resize), e.find("img").attr("draggable", "false"), setTimeout(function() {
                        e.vars.start(e)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        e.asNav = !0, e.animatingTo = Math.floor(e.currentSlide / e.move), e.currentItem = e.currentSlide, e.slides.removeClass(g + "active-slide").eq(e.currentItem).addClass(g + "active-slide"), h ? (c._slider = e, e.slides.each(function() {
                            var b = this;
                            b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function(a) {
                                a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                            }, !1), b.addEventListener("MSGestureTap", function(b) {
                                b.preventDefault();
                                var c = a(this),
                                    d = c.index();
                                a(e.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (e.direction = e.currentItem < d ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : e.slides.on(j, function(b) {
                            b.preventDefault();
                            var c = a(this),
                                d = c.index(),
                                f = c.offset().left - a(e).scrollLeft();
                            0 >= f && c.hasClass(g + "active-slide") ? e.flexAnimate(e.getTarget("prev"), !0) : a(e.vars.asNavFor).data("flexslider").animating || c.hasClass(g + "active-slide") || (e.direction = e.currentItem < d ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        e.manualControls ? q.controlNav.setupManual() : q.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var b, c, d = "thumbnails" === e.vars.controlNav ? "control-thumbs" : "control-paging",
                            f = 1;
                        if (e.controlNavScaffold = a('<ol class="' + g + "control-nav " + g + d + '"></ol>'), e.pagingCount > 1)
                            for (var h = 0; h < e.pagingCount; h++) {
                                c = e.slides.eq(h), void 0 === c.attr("data-thumb-alt") && c.attr("data-thumb-alt", "");
                                var i = "" !== c.attr("data-thumb-alt") ? i = ' alt="' + c.attr("data-thumb-alt") + '"' : "";
                                if (b = "thumbnails" === e.vars.controlNav ? '<img src="' + c.attr("data-thumb") + '"' + i + "/>" : '<a href="#">' + f + "</a>", "thumbnails" === e.vars.controlNav && !0 === e.vars.thumbCaptions) {
                                    var l = c.attr("data-thumbcaption");
                                    "" !== l && void 0 !== l && (b += '<span class="' + g + 'caption">' + l + "</span>")
                                }
                                e.controlNavScaffold.append("<li>" + b + "</li>"), f++
                            }
                        e.controlsContainer ? a(e.controlsContainer).append(e.controlNavScaffold) : e.append(e.controlNavScaffold), q.controlNav.set(), q.controlNav.active(), e.controlNavScaffold.delegate("a, img", j, function(b) {
                            if (b.preventDefault(), "" === k || k === b.type) {
                                var c = a(this),
                                    d = e.controlNav.index(c);
                                c.hasClass(g + "active") || (e.direction = d > e.currentSlide ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction))
                            }
                            "" === k && (k = b.type), q.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        e.controlNav = e.manualControls, q.controlNav.active(), e.controlNav.bind(j, function(b) {
                            if (b.preventDefault(), "" === k || k === b.type) {
                                var c = a(this),
                                    d = e.controlNav.index(c);
                                c.hasClass(g + "active") || (d > e.currentSlide ? e.direction = "next" : e.direction = "prev", e.flexAnimate(d, e.vars.pauseOnAction))
                            }
                            "" === k && (k = b.type), q.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var b = "thumbnails" === e.vars.controlNav ? "img" : "a";
                        e.controlNav = a("." + g + "control-nav li " + b, e.controlsContainer ? e.controlsContainer : e)
                    },
                    active: function() {
                        e.controlNav.removeClass(g + "active").eq(e.animatingTo).addClass(g + "active")
                    },
                    update: function(b, c) {
                        e.pagingCount > 1 && "add" === b ? e.controlNavScaffold.append(a('<li><a href="#">' + e.count + "</a></li>")) : 1 === e.pagingCount ? e.controlNavScaffold.find("li").remove() : e.controlNav.eq(c).closest("li").remove(), q.controlNav.set(), e.pagingCount > 1 && e.pagingCount !== e.controlNav.length ? e.update(c, b) : q.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var b = a('<ul class="' + g + 'direction-nav"><li class="' + g + 'nav-prev"><a class="' + g + 'prev" href="#">' + e.vars.prevText + '</a></li><li class="' + g + 'nav-next"><a class="' + g + 'next" href="#">' + e.vars.nextText + "</a></li></ul>");
                        e.customDirectionNav ? e.directionNav = e.customDirectionNav : e.controlsContainer ? (a(e.controlsContainer).append(b), e.directionNav = a("." + g + "direction-nav li a", e.controlsContainer)) : (e.append(b), e.directionNav = a("." + g + "direction-nav li a", e)), q.directionNav.update(), e.directionNav.bind(j, function(b) {
                            b.preventDefault();
                            var c;
                            ("" === k || k === b.type) && (c = a(this).hasClass(g + "next") ? e.getTarget("next") : e.getTarget("prev"), e.flexAnimate(c, e.vars.pauseOnAction)), "" === k && (k = b.type), q.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var a = g + "disabled";
                        1 === e.pagingCount ? e.directionNav.addClass(a).attr("tabindex", "-1") : e.vars.animationLoop ? e.directionNav.removeClass(a).removeAttr("tabindex") : 0 === e.animatingTo ? e.directionNav.removeClass(a).filter("." + g + "prev").addClass(a).attr("tabindex", "-1") : e.animatingTo === e.last ? e.directionNav.removeClass(a).filter("." + g + "next").addClass(a).attr("tabindex", "-1") : e.directionNav.removeClass(a).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var b = a('<div class="' + g + 'pauseplay"><a href="#"></a></div>');
                        e.controlsContainer ? (e.controlsContainer.append(b), e.pausePlay = a("." + g + "pauseplay a", e.controlsContainer)) : (e.append(b), e.pausePlay = a("." + g + "pauseplay a", e)), q.pausePlay.update(e.vars.slideshow ? g + "pause" : g + "play"), e.pausePlay.bind(j, function(b) {
                            b.preventDefault(), ("" === k || k === b.type) && (a(this).hasClass(g + "pause") ? (e.manualPause = !0, e.manualPlay = !1, e.pause()) : (e.manualPause = !1, e.manualPlay = !0, e.play())), "" === k && (k = b.type), q.setToClearWatchedEvent()
                        })
                    },
                    update: function(a) {
                        "play" === a ? e.pausePlay.removeClass(g + "pause").addClass(g + "play").html(e.vars.playText) : e.pausePlay.removeClass(g + "play").addClass(g + "pause").html(e.vars.pauseText)
                    }
                },
                touch: function() {
                    function a(a) {
                        a.stopPropagation(), e.animating ? a.preventDefault() : (e.pause(), c._gesture.addPointer(a.pointerId), w = 0, j = l ? e.h : e.w, p = Number(new Date), i = n && m && e.animatingTo === e.last ? 0 : n && m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : n && e.currentSlide === e.last ? e.limit : n ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide : m ? (e.last - e.currentSlide + e.cloneOffset) * j : (e.currentSlide + e.cloneOffset) * j)
                    }

                    function b(a) {
                        a.stopPropagation();
                        var b = a.target._slider;
                        if (b) {
                            var d = -a.translationX,
                                e = -a.translationY;
                            return w += l ? e : d, k = w, t = l ? Math.abs(w) < Math.abs(-d) : Math.abs(w) < Math.abs(-e), a.detail === a.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                c._gesture.stop()
                            }) : void((!t || Number(new Date) - p > 500) && (a.preventDefault(), !o && b.transitions && (b.vars.animationLoop || (k = w / (0 === b.currentSlide && 0 > w || b.currentSlide === b.last && w > 0 ? Math.abs(w) / j + 2 : 1)), b.setProps(i + k, "setTouch"))))
                        }
                    }

                    function d(a) {
                        a.stopPropagation();
                        var b = a.target._slider;
                        if (b) {
                            if (b.animatingTo === b.currentSlide && !t && null !== k) {
                                var c = m ? -k : k,
                                    d = c > 0 ? b.getTarget("next") : b.getTarget("prev");
                                b.canAdvance(d) && (Number(new Date) - p < 550 && Math.abs(c) > 50 || Math.abs(c) > j / 2) ? b.flexAnimate(d, b.vars.pauseOnAction) : o || b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, !0)
                            }
                            f = null, g = null, k = null, i = null, w = 0
                        }
                    }
                    var f, g, i, j, k, p, q, r, s, t = !1,
                        u = 0,
                        v = 0,
                        w = 0;
                    h ? (c.style.msTouchAction = "none", c._gesture = new MSGesture, c._gesture.target = c, c.addEventListener("MSPointerDown", a, !1), c._slider = e, c.addEventListener("MSGestureChange", b, !1), c.addEventListener("MSGestureEnd", d, !1)) : (q = function(a) {
                        e.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (e.pause(), j = l ? e.h : e.w, p = Number(new Date), u = a.touches[0].pageX, v = a.touches[0].pageY, i = n && m && e.animatingTo === e.last ? 0 : n && m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : n && e.currentSlide === e.last ? e.limit : n ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide : m ? (e.last - e.currentSlide + e.cloneOffset) * j : (e.currentSlide + e.cloneOffset) * j, f = l ? v : u, g = l ? u : v, c.addEventListener("touchmove", r, !1), c.addEventListener("touchend", s, !1))
                    }, r = function(a) {
                        u = a.touches[0].pageX, v = a.touches[0].pageY, k = l ? f - v : f - u, t = l ? Math.abs(k) < Math.abs(u - g) : Math.abs(k) < Math.abs(v - g);
                        var b = 500;
                        (!t || Number(new Date) - p > b) && (a.preventDefault(), !o && e.transitions && (e.vars.animationLoop || (k /= 0 === e.currentSlide && 0 > k || e.currentSlide === e.last && k > 0 ? Math.abs(k) / j + 2 : 1), e.setProps(i + k, "setTouch")))
                    }, s = function(a) {
                        if (c.removeEventListener("touchmove", r, !1), e.animatingTo === e.currentSlide && !t && null !== k) {
                            var b = m ? -k : k,
                                d = b > 0 ? e.getTarget("next") : e.getTarget("prev");
                            e.canAdvance(d) && (Number(new Date) - p < 550 && Math.abs(b) > 50 || Math.abs(b) > j / 2) ? e.flexAnimate(d, e.vars.pauseOnAction) : o || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        c.removeEventListener("touchend", s, !1), f = null, g = null, k = null, i = null
                    }, c.addEventListener("touchstart", q, !1))
                },
                resize: function() {
                    !e.animating && e.is(":visible") && (n || e.doMath(), o ? q.smoothHeight() : n ? (e.slides.width(e.computedW), e.update(e.pagingCount), e.setProps()) : l ? (e.viewport.height(e.h), e.setProps(e.h, "setTotal")) : (e.vars.smoothHeight && q.smoothHeight(), e.newSlides.width(e.computedW), e.setProps(e.computedW, "setTotal")))
                },
                smoothHeight: function(a) {
                    if (!l || o) {
                        var b = o ? e : e.viewport;
                        a ? b.animate({
                            height: e.slides.eq(e.animatingTo).innerHeight()
                        }, a) : b.innerHeight(e.slides.eq(e.animatingTo).innerHeight())
                    }
                },
                sync: function(b) {
                    var c = a(e.vars.sync).data("flexslider"),
                        d = e.animatingTo;
                    switch (b) {
                        case "animate":
                            c.flexAnimate(d, e.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            c.playing || c.asNav || c.play();
                            break;
                        case "pause":
                            c.pause()
                    }
                },
                uniqueID: function(b) {
                    return b.filter("[id]").add(b.find("[id]")).each(function() {
                        var b = a(this);
                        b.attr("id", b.attr("id") + "_clone")
                    }), b
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var a = q.pauseInvisible.getHiddenProp();
                        if (a) {
                            var b = a.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(b, function() {
                                q.pauseInvisible.isHidden() ? e.startTimeout ? clearTimeout(e.startTimeout) : e.pause() : e.started ? e.play() : e.vars.initDelay > 0 ? setTimeout(e.play, e.vars.initDelay) : e.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var a = q.pauseInvisible.getHiddenProp();
                        return a ? document[a] : !1
                    },
                    getHiddenProp: function() {
                        var a = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var b = 0; b < a.length; b++)
                            if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(f), f = setTimeout(function() {
                        k = ""
                    }, 3e3)
                }
            }, e.flexAnimate = function(b, c, d, f, h) {
                if (e.vars.animationLoop || b === e.currentSlide || (e.direction = b > e.currentSlide ? "next" : "prev"), p && 1 === e.pagingCount && (e.direction = e.currentItem < b ? "next" : "prev"), !e.animating && (e.canAdvance(b, h) || d) && e.is(":visible")) {
                    if (p && f) {
                        var j = a(e.vars.asNavFor).data("flexslider");
                        if (e.atEnd = 0 === b || b === e.count - 1, j.flexAnimate(b, !0, !1, !0, h), e.direction = e.currentItem < b ? "next" : "prev", j.direction = e.direction, Math.ceil((b + 1) / e.visible) - 1 === e.currentSlide || 0 === b) return e.currentItem = b, e.slides.removeClass(g + "active-slide").eq(b).addClass(g + "active-slide"), !1;
                        e.currentItem = b, e.slides.removeClass(g + "active-slide").eq(b).addClass(g + "active-slide"), b = Math.floor(b / e.visible)
                    }
                    if (e.animating = !0, e.animatingTo = b, c && e.pause(), e.vars.before(e), e.syncExists && !h && q.sync("animate"), e.vars.controlNav && q.controlNav.active(), n || e.slides.removeClass(g + "active-slide").eq(b).addClass(g + "active-slide"), e.atEnd = 0 === b || b === e.last, e.vars.directionNav && q.directionNav.update(), b === e.last && (e.vars.end(e), e.vars.animationLoop || e.pause()), o) i ? (e.slides.eq(e.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), e.slides.eq(b).css({
                        opacity: 1,
                        zIndex: 2
                    }), e.wrapup(t)) : (e.slides.eq(e.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, e.vars.animationSpeed, e.vars.easing), e.slides.eq(b).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, e.vars.animationSpeed, e.vars.easing, e.wrapup));
                    else {
                        var k, r, s, t = l ? e.slides.filter(":first").height() : e.computedW;
                        n ? (k = e.vars.itemMargin, s = (e.itemW + k) * e.move * e.animatingTo, r = s > e.limit && 1 !== e.visible ? e.limit : s) : r = 0 === e.currentSlide && b === e.count - 1 && e.vars.animationLoop && "next" !== e.direction ? m ? (e.count + e.cloneOffset) * t : 0 : e.currentSlide === e.last && 0 === b && e.vars.animationLoop && "prev" !== e.direction ? m ? 0 : (e.count + 1) * t : m ? (e.count - 1 - b + e.cloneOffset) * t : (b + e.cloneOffset) * t, e.setProps(r, "", e.vars.animationSpeed), e.transitions ? (e.vars.animationLoop && e.atEnd || (e.animating = !1, e.currentSlide = e.animatingTo), e.container.unbind("webkitTransitionEnd transitionend"), e.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(e.ensureAnimationEnd), e.wrapup(t)
                        }), clearTimeout(e.ensureAnimationEnd), e.ensureAnimationEnd = setTimeout(function() {
                            e.wrapup(t)
                        }, e.vars.animationSpeed + 100)) : e.container.animate(e.args, e.vars.animationSpeed, e.vars.easing, function() {
                            e.wrapup(t)
                        })
                    }
                    e.vars.smoothHeight && q.smoothHeight(e.vars.animationSpeed)
                }
            }, e.wrapup = function(a) {
                o || n || (0 === e.currentSlide && e.animatingTo === e.last && e.vars.animationLoop ? e.setProps(a, "jumpEnd") : e.currentSlide === e.last && 0 === e.animatingTo && e.vars.animationLoop && e.setProps(a, "jumpStart")), e.animating = !1, e.currentSlide = e.animatingTo, e.vars.after(e)
            }, e.animateSlides = function() {
                !e.animating && b && e.flexAnimate(e.getTarget("next"))
            }, e.pause = function() {
                clearInterval(e.animatedSlides), e.animatedSlides = null, e.playing = !1, e.vars.pausePlay && q.pausePlay.update("play"), e.syncExists && q.sync("pause")
            }, e.play = function() {
                e.playing && clearInterval(e.animatedSlides), e.animatedSlides = e.animatedSlides || setInterval(e.animateSlides, e.vars.slideshowSpeed), e.started = e.playing = !0, e.vars.pausePlay && q.pausePlay.update("pause"), e.syncExists && q.sync("play")
            }, e.stop = function() {
                e.pause(), e.stopped = !0
            }, e.canAdvance = function(a, b) {
                var c = p ? e.pagingCount - 1 : e.last;
                return b ? !0 : p && e.currentItem === e.count - 1 && 0 === a && "prev" === e.direction ? !0 : p && 0 === e.currentItem && a === e.pagingCount - 1 && "next" !== e.direction ? !1 : a !== e.currentSlide || p ? e.vars.animationLoop ? !0 : e.atEnd && 0 === e.currentSlide && a === c && "next" !== e.direction ? !1 : e.atEnd && e.currentSlide === c && 0 === a && "next" === e.direction ? !1 : !0 : !1
            }, e.getTarget = function(a) {
                return e.direction = a, "next" === a ? e.currentSlide === e.last ? 0 : e.currentSlide + 1 : 0 === e.currentSlide ? e.last : e.currentSlide - 1
            }, e.setProps = function(a, b, c) {
                var d = function() {
                    var c = a ? a : (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo,
                        d = function() {
                            if (n) return "setTouch" === b ? a : m && e.animatingTo === e.last ? 0 : m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : e.animatingTo === e.last ? e.limit : c;
                            switch (b) {
                                case "setTotal":
                                    return m ? (e.count - 1 - e.currentSlide + e.cloneOffset) * a : (e.currentSlide + e.cloneOffset) * a;
                                case "setTouch":
                                    return m ? a : a;
                                case "jumpEnd":
                                    return m ? a : e.count * a;
                                case "jumpStart":
                                    return m ? e.count * a : a;
                                default:
                                    return a
                            }
                        }();
                    return -1 * d + "px"
                }();
                e.transitions && (d = l ? "translate3d(0," + d + ",0)" : "translate3d(" + d + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", e.container.css("-" + e.pfx + "-transition-duration", c), e.container.css("transition-duration", c)), e.args[e.prop] = d, (e.transitions || void 0 === c) && e.container.css(e.args), e.container.css("transform", d)
            }, e.setup = function(b) {
                if (o) e.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === b && (i ? e.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + e.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(e.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == e.vars.fadeFirstSlide ? e.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(e.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : e.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(e.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, e.vars.animationSpeed, e.vars.easing)), e.vars.smoothHeight && q.smoothHeight();
                else {
                    var c, d;
                    "init" === b && (e.viewport = a('<div class="' + g + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(e).append(e.container), e.cloneCount = 0, e.cloneOffset = 0, m && (d = a.makeArray(e.slides).reverse(), e.slides = a(d), e.container.empty().append(e.slides))), e.vars.animationLoop && !n && (e.cloneCount = 2, e.cloneOffset = 1, "init" !== b && e.container.find(".clone").remove(), e.container.append(q.uniqueID(e.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(q.uniqueID(e.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                        e.newSlides = a(e.vars.selector, e), c = m ? e.count - 1 - e.currentSlide + e.cloneOffset : e.currentSlide + e.cloneOffset, l && !n ? (e.container.height(200 * (e.count + e.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        e.newSlides.css({
                            display: "block"
                        }), e.doMath(), e.viewport.height(e.h), e.setProps(c * e.h, "init")
                    }, "init" === b ? 100 : 0)) : (e.container.width(200 * (e.count + e.cloneCount) + "%"), e.setProps(c * e.computedW, "init"), setTimeout(function() {
                        e.doMath(), e.newSlides.css({
                            width: e.computedW,
                            marginRight: e.computedM,
                            "float": "left",
                            display: "block"
                        }), e.vars.smoothHeight && q.smoothHeight()
                    }, "init" === b ? 100 : 0))
                }
                n || e.slides.removeClass(g + "active-slide").eq(e.currentSlide).addClass(g + "active-slide"), e.vars.init(e)
            }, e.doMath = function() {
                var a = e.slides.first(),
                    b = e.vars.itemMargin,
                    c = e.vars.minItems,
                    d = e.vars.maxItems;
                e.w = void 0 === e.viewport ? e.width() : e.viewport.width(), e.h = a.height(), e.boxPadding = a.outerWidth() - a.width(), n ? (e.itemT = e.vars.itemWidth + b, e.itemM = b, e.minW = c ? c * e.itemT : e.w, e.maxW = d ? d * e.itemT - b : e.w, e.itemW = e.minW > e.w ? (e.w - b * (c - 1)) / c : e.maxW < e.w ? (e.w - b * (d - 1)) / d : e.vars.itemWidth > e.w ? e.w : e.vars.itemWidth, e.visible = Math.floor(e.w / e.itemW), e.move = e.vars.move > 0 && e.vars.move < e.visible ? e.vars.move : e.visible, e.pagingCount = Math.ceil((e.count - e.visible) / e.move + 1), e.last = e.pagingCount - 1, e.limit = 1 === e.pagingCount ? 0 : e.vars.itemWidth > e.w ? e.itemW * (e.count - 1) + b * (e.count - 1) : (e.itemW + b) * e.count - e.w - b) : (e.itemW = e.w, e.itemM = b, e.pagingCount = e.count, e.last = e.count - 1), e.computedW = e.itemW - e.boxPadding, e.computedM = e.itemM
            }, e.update = function(a, b) {
                e.doMath(), n || (a < e.currentSlide ? e.currentSlide += 1 : a <= e.currentSlide && 0 !== a && (e.currentSlide -= 1), e.animatingTo = e.currentSlide), e.vars.controlNav && !e.manualControls && ("add" === b && !n || e.pagingCount > e.controlNav.length ? q.controlNav.update("add") : ("remove" === b && !n || e.pagingCount < e.controlNav.length) && (n && e.currentSlide > e.last && (e.currentSlide -= 1, e.animatingTo -= 1), q.controlNav.update("remove", e.last))), e.vars.directionNav && q.directionNav.update()
            }, e.addSlide = function(b, c) {
                var d = a(b);
                e.count += 1, e.last = e.count - 1, l && m ? void 0 !== c ? e.slides.eq(e.count - c).after(d) : e.container.prepend(d) : void 0 !== c ? e.slides.eq(c).before(d) : e.container.append(d), e.update(c, "add"), e.slides = a(e.vars.selector + ":not(.clone)", e), e.setup(), e.vars.added(e)
            }, e.removeSlide = function(b) {
                var c = isNaN(b) ? e.slides.index(a(b)) : b;
                e.count -= 1, e.last = e.count - 1, isNaN(b) ? a(b, e.slides).remove() : l && m ? e.slides.eq(e.last).remove() : e.slides.eq(b).remove(), e.doMath(), e.update(c, "remove"), e.slides = a(e.vars.selector + ":not(.clone)", e), e.setup(), e.vars.removed(e)
            }, q.init()
        }, a(window).blur(function(a) {
            b = !1
        }).focus(function(a) {
            b = !0
        }), a.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, a.fn.flexslider = function(b) {
            if (void 0 === b && (b = {}), "object" == typeof b) return this.each(function() {
                var c = a(this),
                    d = b.selector ? b.selector : ".slides > li",
                    e = c.find(d);
                1 === e.length && b.allowOneSlide === !1 || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
            });
            var c = a(this).data("flexslider");
            switch (b) {
                case "play":
                    c.play();
                    break;
                case "pause":
                    c.pause();
                    break;
                case "stop":
                    c.stop();
                    break;
                case "next":
                    c.flexAnimate(c.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    c.flexAnimate(c.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof b && c.flexAnimate(b, !0)
            }
        }
    }(jQuery),
    function() {
        "use strict";

        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }
        var c = a.prototype;
        c.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, c.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
            return c
        }, c.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, c.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, c.on = c.addListener, c.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, c.once = c.addOnceListener, c.defineEvent = function(a) {
            return this.getListeners(a), this
        }, c.defineEvents = function(a) {
            for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
            return this
        }, c.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, c.off = c.removeListener, c.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, c.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, c.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, c.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, c.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], f = c.listener.apply(this, b || []), (f === this._getOnceReturnValue() || c.once === !0) && this.removeListener(a, g[e][d].listener);
            return this
        }, c.trigger = c.emitEvent, c.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, c.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, c._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, c._getEvents = function() {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define(function() {
            return a
        }) : "undefined" != typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        "use strict";
        var b = document.documentElement,
            c = function() {};
        b.addEventListener ? c = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : b.attachEvent && (c = function(b, c, d) {
            b[c + d] = d.handleEvent ? function() {
                var b = a.event;
                b.target = b.target || b.srcElement, d.handleEvent.call(d, b)
            } : function() {
                var c = a.event;
                c.target = c.target || c.srcElement, d.call(b, c)
            }, b.attachEvent("on" + c, b[c + d])
        });
        var d = function() {};
        b.removeEventListener ? d = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : b.detachEvent && (d = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var e = {
            bind: c,
            unbind: d
        };
        "function" == typeof define && define.amd ? define(e) : a.eventie = e
    }(this),
    function(a) {
        "use strict";

        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === i.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if ("number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, c) {
            function e(a, c, g) {
                if (!(this instanceof e)) return new e(a, c);
                "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = b({}, this.options), "function" == typeof c ? g = c : b(this.options, c), g && this.on("always", g), this.getImages(), f && (this.jqDeferred = new f.Deferred);
                var h = this;
                setTimeout(function() {
                    h.check()
                })
            }

            function i(a) {
                this.img = a
            }
            e.prototype = new a, e.prototype.options = {}, e.prototype.getImages = function() {
                this.images = [];
                for (var a = 0, b = this.elements.length; b > a; a++) {
                    var c = this.elements[a];
                    "IMG" === c.nodeName && this.addImage(c);
                    for (var d = c.querySelectorAll("img"), e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        this.addImage(g)
                    }
                }
            }, e.prototype.addImage = function(a) {
                var b = new i(a);
                this.images.push(b)
            }, e.prototype.check = function() {
                function a(a, e) {
                    return b.options.debug && h && g.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
                }
                var b = this,
                    c = 0,
                    d = this.images.length;
                if (this.hasAnyBroken = !1, !d) return void this.complete();
                for (var e = 0; d > e; e++) {
                    var f = this.images[e];
                    f.on("confirm", a), f.check()
                }
            }, e.prototype.progress = function(a) {
                this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
                var b = this;
                setTimeout(function() {
                    b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify(b, a)
                })
            }, e.prototype.complete = function() {
                var a = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var b = this;
                setTimeout(function() {
                    if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                        var c = b.hasAnyBroken ? "reject" : "resolve";
                        b.jqDeferred[c](b)
                    }
                })
            }, f && (f.fn.imagesLoaded = function(a, b) {
                var c = new e(this, a, b);
                return c.jqDeferred.promise(f(this))
            });
            var j = {};
            return i.prototype = new a, i.prototype.check = function() {
                var a = j[this.img.src];
                if (a) return void this.useCached(a);
                if (j[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var b = this.proxyImage = new Image;
                c.bind(b, "load", this), c.bind(b, "error", this), b.src = this.img.src
            }, i.prototype.useCached = function(a) {
                if (a.isConfirmed) this.confirm(a.isLoaded, "cached was confirmed");
                else {
                    var b = this;
                    a.on("confirm", function(a) {
                        return b.confirm(a.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, i.prototype.confirm = function(a, b) {
                this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
            }, i.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, i.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, i.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, i.prototype.unbindProxyEvents = function() {
                c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this)
            }, e
        }
        var f = a.jQuery,
            g = a.console,
            h = "undefined" != typeof g,
            i = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], e) : a.imagesLoaded = e(a.EventEmitter, a.eventie)
    }(window),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
        q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function(a) {
            var b;
            return b = document.createElement("div"), b.innerHTML = a, b.children[0]
        }, v = function(a, b) {
            return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
        }, r = function(a, b) {
            return v(a, b), a.className += " " + b
        }, z = function(a, b) {
            var c;
            return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
        }, u = function() {
            var a, b;
            return null != (a = null != (b = window.performance) && "function" == typeof b.now ? b.now() : void 0) ? a : +new Date
        }, x = function(a, b) {
            return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
        }, A = function(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }, t = function(a) {
            return a - x(a)
        }, C = !1, (B = function() {
            var a, b, c, d, e;
            if (!C && null != window.jQuery) {
                for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function(a) {
                    var b;
                    return b = window.jQuery.fn[a], window.jQuery.fn[a] = function(a) {
                        var c;
                        return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
                    }
                }(a));
                return e
            }
        })(), setTimeout(B, 0), m = function() {
            function a(b) {
                var c, d, e, g, h, i, l, m, n, o, p = this;
                if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
                this.el.odometer = this, m = a.options;
                for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
                null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
                try {
                    for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && ! function(a) {
                        return Object.defineProperty(p.el, a, {
                            get: function() {
                                var b;
                                return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
                            },
                            set: function(a) {
                                return p.update(a)
                            }
                        })
                    }(e)
                } catch (q) {
                    c = q, this.watchForMutations()
                }
            }
            return a.prototype.renderInside = function() {
                return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
            }, a.prototype.watchForMutations = function() {
                var a, b = this;
                if (null != l) try {
                    return null == this.observer && (this.observer = new l(function() {
                        var a;
                        return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a)
                    })), this.watchMutations = !0, this.startWatchingMutations()
                } catch (c) {
                    a = c
                }
            }, a.prototype.startWatchingMutations = function() {
                return this.watchMutations ? this.observer.observe(this.el, {
                    childList: !0
                }) : void 0
            }, a.prototype.stopWatchingMutations = function() {
                var a;
                return null != (a = this.observer) ? a.disconnect() : void 0
            }, a.prototype.cleanValue = function(a) {
                var b;
                return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
            }, a.prototype.bindTransitionEnd = function() {
                var a, b, c, d, e, f, g = this;
                if (!this.transitionEndBound) {
                    for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function() {
                        return b ? !0 : (b = !0, setTimeout(function() {
                            return g.render(), b = !1, z(g.el, "odometerdone")
                        }, 0), !0)
                    }, !1));
                    return f
                }
            }, a.prototype.resetFormat = function() {
                var a, b, d, e, f, g, i, j;
                if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
                return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
                    repeating: g,
                    radix: f,
                    precision: e
                }
            }, a.prototype.render = function(a) {
                var b, c, d, e, f, g, h;
                for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", f = this.options.theme, b = this.el.className.split(" "), e = [], g = 0, h = b.length; h > g; g++) c = b[g], c.length && ((d = /^odometer-theme-(.+)$/.exec(c)) ? f = d[1] : /^odometer(-|$)/.test(c) || e.push(c));
                return e.push("odometer"), p || e.push("odometer-no-transitions"), e.push(f ? "odometer-theme-" + f : "odometer-auto-theme"), this.el.className = e.join(" "), this.ribbons = {}, this.formatDigits(a), this.startWatchingMutations()
            }, a.prototype.formatDigits = function(a) {
                var b, c, d, e, f, g, h, i, j, k;
                if (this.digits = [], this.options.formatFunction)
                    for (d = this.options.formatFunction(a), j = d.split("").reverse(), f = 0, h = j.length; h > f; f++) c = j[f], c.match(/0-9/) ? (b = this.renderDigit(), b.querySelector(".odometer-value").innerHTML = c, this.digits.push(b), this.insertDigit(b)) : this.addSpacer(c);
                else
                    for (e = !this.format.precision || !t(a) || !1, k = a.toString().split("").reverse(), g = 0, i = k.length; i > g; g++) b = k[g], "." === b && (e = !0), this.addDigit(b, e)
            }, a.prototype.update = function(a) {
                var b, c = this;
                return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function() {
                    return c.el.offsetHeight, r(c.el, "odometer-animating")
                }, 0), this.value = a) : void 0
            }, a.prototype.renderDigit = function() {
                return s(d)
            }, a.prototype.insertDigit = function(a, b) {
                return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
            }, a.prototype.addSpacer = function(a, b, c) {
                var d;
                return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b)
            }, a.prototype.addDigit = function(a, b) {
                var c, d, e, f;
                if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
                if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
                if (b)
                    for (e = !1;;) {
                        if (!this.format.repeating.length) {
                            if (e) throw new Error("Bad odometer format without digits");
                            this.resetFormat(), e = !0
                        }
                        if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
                        this.addSpacer(c)
                    }
                return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
            }, a.prototype.animate = function(a) {
                return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
            }, a.prototype.animateCount = function(a) {
                var c, d, e, f, g, h = this;
                return (d = +a - this.value) ? (f = e = u(), c = this.value, (g = function() {
                    var i, j, k;
                    return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
                })()) : void 0
            }, a.prototype.getDigitCount = function() {
                var a, b, c, d, e, f;
                for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
                return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
            }, a.prototype.getFractionalDigitCount = function() {
                var a, b, c, d, e, f, g;
                for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
                return Math.max.apply(Math, e)
            }, a.prototype.resetDigits = function() {
                return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
            }, a.prototype.animateSlide = function(a) {
                var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
                if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
                    for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
                        if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
                            for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;
                            l[l.length - 1] !== i && l.push(i), b++
                        } else l = function() {
                            E = [];
                            for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);
                            return E
                        }.apply(this);
                        for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);
                        g.push(l)
                    }
                    for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
                        for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
                    return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
                }
            }, a
        }(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function() {
            var a, b, c, d, e;
            if (window.odometerOptions) {
                d = window.odometerOptions, e = [];
                for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
                return e
            }
        }, 0), m.init = function() {
            var a, b, c, d, e, f;
            if (null != document.querySelectorAll) {
                for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({
                    el: a,
                    value: null != (e = a.innerText) ? e : a.textContent
                }));
                return f
            }
        }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
            return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0
        }) : document.addEventListener("DOMContentLoaded", function() {
            return m.options.auto !== !1 ? m.init() : void 0
        }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
            return m
        }) : typeof exports === !1 ? module.exports = m : window.Odometer = m
    }.call(this), ! function(a, b, c) {
    "use strict";

    function d(c) {
        if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
            for (var d in c.easing) W[d] = c.easing[d];
        ta = c.edgeStrategy || "set", ka = {
            beforerender: c.beforerender,
            render: c.render,
            keyframe: c.keyframe
        }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {
            targetTop: ha.getScrollTop()
        }, Sa = (c.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function() {
            var a = e.clientWidth,
                b = e.clientHeight;
            (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
        });
        var g = U();
        return function h() {
            $(), va = g(h)
        }(), ha
    }
    var e, f, g = {
            get: function() {
                return ha
            },
            init: function(a) {
                return ha || new d(a)
            },
            VERSION: "0.6.29"
        },
        h = Object.prototype.hasOwnProperty,
        i = a.Math,
        j = a.getComputedStyle,
        k = "touchstart",
        l = "touchmove",
        m = "touchcancel",
        n = "touchend",
        o = "skrollable",
        p = o + "-before",
        q = o + "-between",
        r = o + "-after",
        s = "skrollr",
        t = "no-" + s,
        u = s + "-desktop",
        v = s + "-mobile",
        w = "linear",
        x = 1e3,
        y = .004,
        z = "skrollr-body",
        A = 200,
        B = "start",
        C = "end",
        D = "center",
        E = "bottom",
        F = "___skrollable_id",
        G = /^(?:input|textarea|button|select)$/i,
        H = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        K = /^(@?[a-z\-]+)\[(\w+)\]$/,
        L = /-([a-z0-9_])/g,
        M = function(a, b) {
            return b.toUpperCase()
        },
        N = /[\-+]?[\d]*\.?[\d]+/g,
        O = /\{\?\}/g,
        P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        Q = /[a-z\-]+-gradient/g,
        R = "",
        S = "",
        T = function() {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b)
                    if (R = c.match(a) || +c == c && b[c].match(a)) break;
                if (!R) return void(R = S = "");
                R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[R]) : S = "-" + R.toLowerCase() + "-"
            }
        },
        U = function() {
            var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                c = Ha();
            return (Sa || !b) && (b = function(b) {
                var d = Ha() - c,
                    e = i.max(0, 1e3 / 60 - d);
                return a.setTimeout(function() {
                    c = Ha(), b()
                }, e)
            }), b
        },
        V = function() {
            var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
            return (Sa || !b) && (b = function(b) {
                return a.clearTimeout(b)
            }), b
        },
        W = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(a) {
                return a
            },
            quadratic: function(a) {
                return a * a
            },
            cubic: function(a) {
                return a * a * a
            },
            swing: function(a) {
                return -i.cos(a * i.PI) / 2 + .5
            },
            sqrt: function(a) {
                return i.sqrt(a)
            },
            outCubic: function(a) {
                return i.pow(a - 1, 3) + 1
            },
            bounce: function(a) {
                var b;
                if (.5083 >= a) b = 3;
                else if (.8489 >= a) b = 9;
                else if (.96208 >= a) b = 27;
                else {
                    if (!(.99981 >= a)) return 1;
                    b = 91
                }
                return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
            }
        };
    d.prototype.refresh = function(a) {
        var d, e, f = !1;
        for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
                h = g,
                i = [],
                j = pa,
                k = ta,
                l = !1;
            if (f && F in g && delete g[F], g.attributes) {
                for (var m = 0, n = g.attributes.length; n > m; m++) {
                    var p = g.attributes[m];
                    if ("data-anchor-target" !== p.name)
                        if ("data-smooth-scrolling" !== p.name)
                            if ("data-edge-strategy" !== p.name)
                                if ("data-emit-events" !== p.name) {
                                    var q = p.name.match(I);
                                    if (null !== q) {
                                        var r = {
                                            props: p.value,
                                            element: g,
                                            eventType: p.name.replace(L, M)
                                        };
                                        i.push(r);
                                        var s = q[1];
                                        s && (r.constant = s.substr(1));
                                        var t = q[2];
                                        /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                                        var u = q[3],
                                            v = q[4] || u;
                                        u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
                                    }
                                } else l = !0;
                            else k = p.value;
                        else j = "off" !== p.value;
                    else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
                }
                if (i.length) {
                    var w, x, y;
                    !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
                        element: g,
                        styleAttr: w,
                        classAttr: x,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k,
                        emitEvents: l,
                        lastFrameIndex: -1
                    }, Ea(g, [o], [])
                }
            }
        }
        for (Aa(), d = 0, e = a.length; e > d; d++) {
            var z = ia[a[d][F]];
            z !== c && (_(z), ba(z))
        }
        return ha
    }, d.prototype.relativeToAbsolute = function(a, b, c) {
        var d = e.clientHeight,
            f = a.getBoundingClientRect(),
            g = f.top,
            h = f.bottom - f.top;
        return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
    }, d.prototype.animateTo = function(a, b) {
        b = b || {};
        var d = Ha(),
            e = ha.getScrollTop(),
            f = b.duration === c ? x : b.duration;
        return oa = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: f,
            startTime: d,
            endTime: d + f,
            easing: W[b.easing || w],
            done: b.done
        }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
    }, d.prototype.stopAnimateTo = function() {
        oa && oa.done && oa.done.call(ha, !0), oa = c
    }, d.prototype.isAnimatingTo = function() {
        return !!oa
    }, d.prototype.isMobile = function() {
        return Sa
    }, d.prototype.setScrollTop = function(b, c) {
        return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
    }, d.prototype.getScrollTop = function() {
        return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }, d.prototype.getMaxScrollTop = function() {
        return Ja
    }, d.prototype.on = function(a, b) {
        return ka[a] = b, ha
    }, d.prototype.off = function(a) {
        return delete ka[a], ha
    }, d.prototype.destroy = function() {
        var a = V();
        a(va), ya(), Ea(e, [t], [s, u, v]);
        for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
        e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
    };
    var X = function() {
            var d, g, h, j, o, p, q, r, s, t, u, v;
            wa(e, [k, l, m, n].join(" "), function(a) {
                var e = a.changedTouches[0];
                for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
                switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                    case k:
                        d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                        break;
                    case l:
                        G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
                        break;
                    default:
                    case m:
                    case n:
                        var f = g - o,
                            w = h - p,
                            x = w * w + f * f;
                        if (49 > x) {
                            if (!G.test(d.tagName)) {
                                d.focus();
                                var y = b.createEvent("MouseEvents");
                                y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                            }
                            return
                        }
                        d = c;
                        var z = r / v;
                        z = i.max(i.min(z, 3), -3);
                        var A = i.abs(z / na),
                            B = z * A + .5 * na * A * A,
                            C = ha.getScrollTop() - B,
                            D = 0;
                        C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
        },
        Y = function() {
            var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
                o = Ba();
            for (j = 0, k = ia.length; k > j; j++)
                for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
            for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
                for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
                a.keyFrames.sort(Ia)
            }
        },
        Z = function(a, b) {
            for (var c = 0, d = ia.length; d > c; c++) {
                var e, f, i = ia[c],
                    j = i.element,
                    k = i.smoothScrolling ? a : b,
                    l = i.keyFrames,
                    m = l.length,
                    n = l[0],
                    s = l[l.length - 1],
                    t = k < n.frame,
                    u = k > s.frame,
                    v = t ? n : s,
                    w = i.emitEvents,
                    x = i.lastFrameIndex;
                if (t || u) {
                    if (t && -1 === i.edge || u && 1 === i.edge) continue;
                    switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                        case "reset":
                            fa(j);
                            continue;
                        case "ease":
                            k = v.frame;
                            break;
                        default:
                        case "set":
                            var y = v.props;
                            for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                            continue
                    }
                } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
                for (var z = 0; m - 1 > z; z++)
                    if (k >= l[z].frame && k <= l[z + 1].frame) {
                        var A = l[z],
                            B = l[z + 1];
                        for (e in A.props)
                            if (h.call(A.props, e)) {
                                var C = (k - A.frame) / (B.frame - A.frame);
                                C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                            }
                        w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
                        break
                    }
            }
        },
        $ = function() {
            Qa && (Qa = !1, Aa());
            var a, b, d = ha.getScrollTop(),
                e = Ha();
            if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0);
            else if (!sa) {
                var f = ra.targetTop - d;
                f && (ra = {
                    startTop: Ma,
                    topDiff: d - Ma,
                    targetTop: d,
                    startTime: Na,
                    endTime: Na + qa
                }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
            }
            if (sa || Ma !== d) {
                La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
                var h = {
                        curTop: d,
                        lastTop: Ma,
                        maxTop: Ja,
                        direction: La
                    },
                    i = ka.beforerender && ka.beforerender.call(ha, h);
                i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
            }
            Na = e
        },
        _ = function(a) {
            for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
                    value: e,
                    easing: W[d]
                };
                h.props = i
            }
        },
        aa = function(a) {
            var b = [];
            return P.lastIndex = 0, a = a.replace(P, function(a) {
                return a.replace(N, function(a) {
                    return a / 255 * 100 + "%"
                })
            }), S && (Q.lastIndex = 0, a = a.replace(Q, function(a) {
                return S + a
            })), a = a.replace(N, function(a) {
                return b.push(+a), "{?}"
            }), b.unshift(a), b
        },
        ba = function(a) {
            var b, c, d = {};
            for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
            for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d)
        },
        ca = function(a, b) {
            var c;
            for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
            for (c in a.props) b[c] = a.props[c]
        },
        da = function(a, b, c) {
            var d, e = a.length;
            if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
            var f = [a[0]];
            for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
            return f
        },
        ea = function(a) {
            var b = 1;
            return O.lastIndex = 0, a[0].replace(O, function() {
                return a[b++]
            })
        },
        fa = function(a, b) {
            a = [].concat(a);
            for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
        },
        ga = function() {
            ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
            var a = j(ja),
                b = a.getPropertyValue("transform"),
                c = a.getPropertyValue(S + "transform"),
                d = b && "none" !== b || c && "none" !== c;
            d || (ua = "")
        };
    g.setStyle = function(a, b, c) {
        var d = a.style;
        if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c);
        else if ("float" === b) d.styleFloat = d.cssFloat = c;
        else try {
                R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
            } catch (e) {}
    };
    var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function(b, c, d) {
            var e = function(b) {
                return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
                    b.returnValue = !1, b.defaultPrevented = !0
                }), d.call(this, b)
            };
            c = c.split(" ");
            for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
                element: b,
                name: f,
                listener: d
            })
        },
        xa = g.removeEvent = function(a, b, c) {
            b = b.split(" ");
            for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
        },
        ya = function() {
            for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
            Ua = []
        },
        za = function(a, b, c) {
            ka.keyframe && ka.keyframe.call(ha, a, b, c)
        },
        Aa = function() {
            var a = ha.getScrollTop();
            Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
        },
        Ba = function() {
            var a, b, c = e.clientHeight,
                d = {};
            for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c),
                d[a] = b;
            return d
        },
        Ca = function() {
            var a, b = 0;
            return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
        },
        Da = function(b) {
            var c = "className";
            return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
        },
        Ea = function(b, d, e) {
            var f = "className";
            if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
            for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
            g = Fa(g);
            for (var j = 0, k = d.length; k > j; j++) - 1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
            b[f] = Fa(g)
        },
        Fa = function(a) {
            return a.replace(H, "")
        },
        Ga = function(a) {
            return " " + a + " "
        },
        Ha = Date.now || function() {
            return +new Date
        },
        Ia = function(a, b) {
            return a.frame - b.frame
        },
        Ja = 0,
        Ka = 1,
        La = "down",
        Ma = -1,
        Na = Ha(),
        Oa = 0,
        Pa = 0,
        Qa = !1,
        Ra = 0,
        Sa = !1,
        Ta = 0,
        Ua = [];
    "function" == typeof define && define.amd ? define([], function() {
        return g
    }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
}(window, document),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
            Y = {}.hasOwnProperty,
            Z = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) Y.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            },
            $ = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        for (u = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, C = function() {
            var a;
            return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
        }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
            return setTimeout(a, 50)
        }, t = function(a) {
            return clearTimeout(a)
        }), G = function(a) {
            var b, c;
            return b = C(), (c = function() {
                var d;
                return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                    return E(c)
                })) : setTimeout(c, 33 - d)
            })()
        }, F = function() {
            var a, b, c;
            return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
        }, v = function() {
            var a, b, c, d, e, f, g;
            for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                if (c = d[f])
                    for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
            return b
        }, q = function(a) {
            var b, c, d, e, f;
            for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
            return c / b
        }, x = function(a, b) {
            var c, d, e;
            if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
                if (c = e.getAttribute("data-pace-" + a), !b) return c;
                try {
                    return JSON.parse(c)
                } catch (f) {
                    return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
                }
            }
        }, g = function() {
            function a() {}
            return a.prototype.on = function(a, b, c, d) {
                var e;
                return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                    handler: b,
                    ctx: c,
                    once: d
                })
            }, a.prototype.once = function(a, b, c) {
                return this.on(a, b, c, !0)
            }, a.prototype.off = function(a, b) {
                var c, d, e;
                if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                    if (null == b) return delete this.bindings[a];
                    for (c = 0, e = []; c < this.bindings[a].length;) this.bindings[a][c].handler === b ? e.push(this.bindings[a].splice(c, 1)) : e.push(c++);
                    return e
                }
            }, a.prototype.trigger = function() {
                var a, b, c, d, e, f, g, h, i;
                if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                    for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++);
                    return i
                }
            }, a
        }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
        i = function(a) {
            function b() {
                return V = b.__super__.constructor.apply(this, arguments)
            }
            return Z(b, a), b
        }(Error), b = function() {
            function a() {
                this.progress = 0
            }
            return a.prototype.getElement = function() {
                var a;
                if (null == this.el) {
                    if (a = document.querySelector(D.target), !a) throw new i;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
                }
                return this.el
            }, a.prototype.finish = function() {
                var a;
                return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, a.prototype.update = function(a) {
                return this.progress = a, this.render()
            }, a.prototype.destroy = function() {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (a) {
                    i = a
                }
                return this.el = void 0
            }, a.prototype.render = function() {
                var a, b, c, d, e, f, g;
                if (null == document.querySelector(D.target)) return !1;
                for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
            }, a.prototype.done = function() {
                return this.progress >= 100
            }, a
        }(), h = function() {
            function a() {
                this.bindings = {}
            }
            return a.prototype.trigger = function(a, b) {
                var c, d, e, f, g;
                if (null != this.bindings[a]) {
                    for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                    return g
                }
            }, a.prototype.on = function(a, b) {
                var c;
                return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
            }, a
        }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
            var c, d, e;
            e = [];
            for (d in b.prototype) try {
                null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? e.push(Object.defineProperty(a, d, {
                    get: function() {
                        return b.prototype[d]
                    },
                    configurable: !0,
                    enumerable: !0
                })) : e.push(a[d] = b.prototype[d]) : e.push(void 0)
            } catch (f) {
                c = f
            }
            return e
        }, A = [], j.ignore = function() {
            var a, b, c;
            return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
        }, j.track = function() {
            var a, b, c;
            return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
        }, J = function(a) {
            var b;
            if (null == a && (a = "GET"), "track" === A[0]) return "force";
            if (!A.length && D.ajax) {
                if ("socket" === a && D.ajax.trackWebSockets) return !0;
                if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
            }
            return !1
        }, k = function(a) {
            function b() {
                var a, c = this;
                b.__super__.constructor.apply(this, arguments), a = function(a) {
                    var b;
                    return b = a.open, a.open = function(d, e, f) {
                        return J(d) && c.trigger("request", {
                            type: d,
                            url: e,
                            request: a
                        }), b.apply(a, arguments)
                    }
                }, window.XMLHttpRequest = function(b) {
                    var c;
                    return c = new P(b), a(c), c
                };
                try {
                    w(window.XMLHttpRequest, P)
                } catch (d) {}
                if (null != O) {
                    window.XDomainRequest = function() {
                        var b;
                        return b = new O, a(b), b
                    };
                    try {
                        w(window.XDomainRequest, O)
                    } catch (d) {}
                }
                if (null != N && D.ajax.trackWebSockets) {
                    window.WebSocket = function(a, b) {
                        var d;
                        return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                            type: "socket",
                            url: a,
                            protocols: b,
                            request: d
                        }), d
                    };
                    try {
                        w(window.WebSocket, N)
                    } catch (d) {}
                }
            }
            return Z(b, a), b
        }(h), R = null, y = function() {
            return null == R && (R = new k), R
        }, I = function(a) {
            var b, c, d, e;
            for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
                if (b = e[c], "string" == typeof b) {
                    if (-1 !== a.indexOf(b)) return !0
                } else if (b.test(a)) return !0;
            return !1
        }, y().on("request", function(b) {
            var c, d, e, f, g;
            return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
                var b, c, g, h, i, k;
                if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                    for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                        if (K = i[c], K instanceof a) {
                            K.watch.apply(K, d);
                            break
                        }
                        k.push(void 0)
                    }
                    return k
                }
            }, c))
        }), a = function() {
            function a() {
                var a = this;
                this.elements = [], y().on("request", function() {
                    return a.watch.apply(a, arguments)
                })
            }
            return a.prototype.watch = function(a) {
                var b, c, d, e;
                return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
            }, a
        }(), o = function() {
            function a(a) {
                var b, c, d, e, f, g, h = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (c = null, a.addEventListener("progress", function(a) {
                        return a.lengthComputable ? h.progress = 100 * a.loaded / a.total : h.progress = h.progress + (100 - h.progress) / 2
                    }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() {
                        return h.progress = 100
                    }, !1);
                else f = a.onreadystatechange, a.onreadystatechange = function() {
                    var b;
                    return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
                }
            }
            return a
        }(), n = function() {
            function a(a) {
                var b, c, d, e, f = this;
                for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() {
                    return f.progress = 100
                }, !1)
            }
            return a
        }(), d = function() {
            function a(a) {
                var b, c, d, f;
                for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
            }
            return a
        }(), e = function() {
            function a(a) {
                this.selector = a, this.progress = 0, this.check()
            }
            return a.prototype.check = function() {
                var a = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return a.check()
                }, D.elements.checkInterval)
            }, a.prototype.done = function() {
                return this.progress = 100
            }, a
        }(), c = function() {
            function a() {
                var a, b, c = this;
                this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
                    return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
                }
            }
            return a.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, a
        }(), f = function() {
            function a() {
                var a, b, c, d, e, f = this;
                this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                    var g;
                    return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
                }, 50)
            }
            return a
        }(), m = function() {
            function a(a) {
                this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
            }
            return a.prototype.tick = function(a, b) {
                var c;
                return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, a
        }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
            return D.restartOnPushState ? j.restart() : void 0
        }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
            return z(), T.apply(window.history, arguments)
        }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
            return z(), W.apply(window.history, arguments)
        }), l = {
            ajax: a,
            elements: d,
            document: c,
            eventLag: f
        }, (B = function() {
            var a, c, d, e, f, g, h, i;
            for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
            for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
            return j.bar = r = new b, H = [], M = new m
        })(), j.stop = function() {
            return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
        }, j.restart = function() {
            return j.trigger("restart"), j.stop(), j.start()
        }, j.go = function() {
            var a;
            return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
                var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
                for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                    for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
                return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
                    return r.finish(), j.running = !1, j.trigger("hide")
                }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
            })
        }, j.start = function(a) {
            v(D, a), j.running = !0;
            try {
                r.render()
            } catch (b) {
                i = b
            }
            return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
        }, "function" == typeof define && define.amd ? define(["pace"], function() {
            return j
        }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
    }.call(this);