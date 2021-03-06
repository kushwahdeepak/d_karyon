if (function(a) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(b) {
            return !b || void 0 !== b.allowPageScroll || void 0 === b.swipe && void 0 === b.swipeStatus || (b.allowPageScroll = j), void 0 !== b.click && void 0 === b.tap && (b.tap = b.click), b || (b = {}), b = a.extend({}, a.fn.swipe.defaults, b), this.each(function() {
                var d = a(this),
                    e = d.data(B);
                e || (e = new c(this, b), d.data(B, e))
            })
        }

        function c(b, c) {
            function C(b) {
                if (!(ja() || a(b.target).closest(c.excludedElements, Sa).length > 0)) {
                    var d, e = b.originalEvent ? b.originalEvent : b,
                        f = y ? e.touches[0] : e;
                    return Ta = u, y ? Ua = e.touches.length : b.preventDefault(), Ja = 0, Ka = null, Qa = null, La = 0, Ma = 0, Na = 0, Oa = 1, Pa = 0, Va = oa(), Ra = ra(), ha(), !y || Ua === c.fingers || c.fingers === s || R() ? (la(0, f), Wa = Aa(), 2 == Ua && (la(1, e.touches[1]), Ma = Na = ua(Va[0].start, Va[1].start)), (c.swipeStatus || c.pinchStatus) && (d = J(e, Ta))) : d = !1, d === !1 ? (Ta = x, J(e, Ta), d) : (c.hold && (ab = setTimeout(a.proxy(function() {
                        Sa.trigger("hold", [e.target]), c.hold && (d = c.hold.call(Sa, e, e.target))
                    }, this), c.longTapThreshold)), ka(!0), null)
                }
            }

            function D(a) {
                var b = a.originalEvent ? a.originalEvent : a;
                if (Ta !== w && Ta !== x && !ia()) {
                    var d, e = y ? b.touches[0] : b,
                        f = ma(e);
                    if (Xa = Aa(), y && (Ua = b.touches.length), c.hold && clearTimeout(ab), Ta = v, 2 == Ua && (0 == Ma ? (la(1, b.touches[1]), Ma = Na = ua(Va[0].start, Va[1].start)) : (ma(b.touches[1]), Na = ua(Va[0].end, Va[1].end), Qa = wa(Va[0].end, Va[1].end)), Oa = va(Ma, Na), Pa = Math.abs(Ma - Na)), Ua === c.fingers || c.fingers === s || !y || R()) {
                        if (Ka = za(f.start, f.end), P(a, Ka), Ja = xa(f.start, f.end), La = ta(), pa(Ka, Ja), (c.swipeStatus || c.pinchStatus) && (d = J(b, Ta)), !c.triggerOnTouchEnd || c.triggerOnTouchLeave) {
                            var g = !0;
                            if (c.triggerOnTouchLeave) {
                                var h = Ba(this);
                                g = Ca(f.end, h)
                            }!c.triggerOnTouchEnd && g ? Ta = I(v) : c.triggerOnTouchLeave && !g && (Ta = I(w)), (Ta == x || Ta == w) && J(b, Ta)
                        }
                    } else Ta = x, J(b, Ta);
                    d === !1 && (Ta = x, J(b, Ta))
                }
            }

            function E(a) {
                var b = a.originalEvent;
                return y && b.touches.length > 0 ? (ga(), !0) : (ia() && (Ua = Za), Xa = Aa(), La = ta(), M() || !L() ? (Ta = x, J(b, Ta)) : c.triggerOnTouchEnd || 0 == c.triggerOnTouchEnd && Ta === v ? (a.preventDefault(), Ta = w, J(b, Ta)) : !c.triggerOnTouchEnd && Y() ? (Ta = w, K(b, Ta, n)) : Ta === v && (Ta = x, J(b, Ta)), ka(!1), null)
            }

            function F() {
                Ua = 0, Xa = 0, Wa = 0, Ma = 0, Na = 0, Oa = 1, ha(), ka(!1)
            }

            function G(a) {
                var b = a.originalEvent;
                c.triggerOnTouchLeave && (Ta = I(w), J(b, Ta))
            }

            function H() {
                Sa.unbind(Ea, C), Sa.unbind(Ia, F), Sa.unbind(Fa, D), Sa.unbind(Ga, E), Ha && Sa.unbind(Ha, G), ka(!1)
            }

            function I(a) {
                var b = a,
                    d = O(),
                    e = L(),
                    f = M();
                return !d || f ? b = x : !e || a != v || c.triggerOnTouchEnd && !c.triggerOnTouchLeave ? !e && a == w && c.triggerOnTouchLeave && (b = x) : b = w, b
            }

            function J(a, b) {
                var c = void 0;
                return V() || U() ? c = K(a, b, l) : (S() || R()) && c !== !1 && (c = K(a, b, m)), ea() && c !== !1 ? c = K(a, b, o) : fa() && c !== !1 ? c = K(a, b, p) : da() && c !== !1 && (c = K(a, b, n)), b === x && F(a), b === w && (y ? 0 == a.touches.length && F(a) : F(a)), c
            }

            function K(b, j, k) {
                var q = void 0;
                if (k == l) {
                    if (Sa.trigger("swipeStatus", [j, Ka || null, Ja || 0, La || 0, Ua, Va]), c.swipeStatus && (q = c.swipeStatus.call(Sa, b, j, Ka || null, Ja || 0, La || 0, Ua, Va), q === !1)) return !1;
                    if (j == w && T()) {
                        if (Sa.trigger("swipe", [Ka, Ja, La, Ua, Va]), c.swipe && (q = c.swipe.call(Sa, b, Ka, Ja, La, Ua, Va), q === !1)) return !1;
                        switch (Ka) {
                            case d:
                                Sa.trigger("swipeLeft", [Ka, Ja, La, Ua, Va]), c.swipeLeft && (q = c.swipeLeft.call(Sa, b, Ka, Ja, La, Ua, Va));
                                break;
                            case e:
                                Sa.trigger("swipeRight", [Ka, Ja, La, Ua, Va]), c.swipeRight && (q = c.swipeRight.call(Sa, b, Ka, Ja, La, Ua, Va));
                                break;
                            case f:
                                Sa.trigger("swipeUp", [Ka, Ja, La, Ua, Va]), c.swipeUp && (q = c.swipeUp.call(Sa, b, Ka, Ja, La, Ua, Va));
                                break;
                            case g:
                                Sa.trigger("swipeDown", [Ka, Ja, La, Ua, Va]), c.swipeDown && (q = c.swipeDown.call(Sa, b, Ka, Ja, La, Ua, Va))
                        }
                    }
                }
                if (k == m) {
                    if (Sa.trigger("pinchStatus", [j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchStatus && (q = c.pinchStatus.call(Sa, b, j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va), q === !1)) return !1;
                    if (j == w && Q()) switch (Qa) {
                        case h:
                            Sa.trigger("pinchIn", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchIn && (q = c.pinchIn.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va));
                            break;
                        case i:
                            Sa.trigger("pinchOut", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchOut && (q = c.pinchOut.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va))
                    }
                }
                return k == n ? (j === x || j === w) && (clearTimeout(_a), clearTimeout(ab), Z() && !aa() ? ($a = Aa(), _a = setTimeout(a.proxy(function() {
                    $a = null, Sa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Sa, b, b.target))
                }, this), c.doubleTapThreshold)) : ($a = null, Sa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Sa, b, b.target)))) : k == o ? (j === x || j === w) && (clearTimeout(_a), $a = null, Sa.trigger("doubletap", [b.target]), c.doubleTap && (q = c.doubleTap.call(Sa, b, b.target))) : k == p && (j === x || j === w) && (clearTimeout(_a), $a = null, Sa.trigger("longtap", [b.target]), c.longTap && (q = c.longTap.call(Sa, b, b.target))), q
            }

            function L() {
                var a = !0;
                return null !== c.threshold && (a = Ja >= c.threshold), a
            }

            function M() {
                var a = !1;
                return null !== c.cancelThreshold && null !== Ka && (a = qa(Ka) - Ja >= c.cancelThreshold), a
            }

            function N() {
                return null !== c.pinchThreshold ? Pa >= c.pinchThreshold : !0
            }

            function O() {
                var a;
                return a = c.maxTimeThreshold && La >= c.maxTimeThreshold ? !1 : !0
            }

            function P(a, b) {
                if (c.allowPageScroll === j || R()) a.preventDefault();
                else {
                    var h = c.allowPageScroll === k;
                    switch (b) {
                        case d:
                            (c.swipeLeft && h || !h && c.allowPageScroll != q) && a.preventDefault();
                            break;
                        case e:
                            (c.swipeRight && h || !h && c.allowPageScroll != q) && a.preventDefault();
                            break;
                        case f:
                            (c.swipeUp && h || !h && c.allowPageScroll != r) && a.preventDefault();
                            break;
                        case g:
                            (c.swipeDown && h || !h && c.allowPageScroll != r) && a.preventDefault()
                    }
                }
            }

            function Q() {
                var a = W(),
                    b = X(),
                    c = N();
                return a && b && c
            }

            function R() {
                return !!(c.pinchStatus || c.pinchIn || c.pinchOut)
            }

            function S() {
                return !(!Q() || !R())
            }

            function T() {
                var a = O(),
                    b = L(),
                    c = W(),
                    d = X(),
                    e = M(),
                    f = !e && d && c && b && a;
                return f
            }

            function U() {
                return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown)
            }

            function V() {
                return !(!T() || !U())
            }

            function W() {
                return Ua === c.fingers || c.fingers === s || !y
            }

            function X() {
                return 0 !== Va[0].end.x
            }

            function Y() {
                return !!c.tap
            }

            function Z() {
                return !!c.doubleTap
            }

            function $() {
                return !!c.longTap
            }

            function _() {
                if (null == $a) return !1;
                var a = Aa();
                return Z() && a - $a <= c.doubleTapThreshold
            }

            function aa() {
                return _()
            }

            function ba() {
                return (1 === Ua || !y) && (isNaN(Ja) || Ja < c.threshold)
            }

            function ca() {
                return La > c.longTapThreshold && t > Ja
            }

            function da() {
                return !(!ba() || !Y())
            }

            function ea() {
                return !(!_() || !Z())
            }

            function fa() {
                return !(!ca() || !$())
            }

            function ga() {
                Ya = Aa(), Za = event.touches.length + 1
            }

            function ha() {
                Ya = 0, Za = 0
            }

            function ia() {
                var a = !1;
                if (Ya) {
                    var b = Aa() - Ya;
                    b <= c.fingerReleaseThreshold && (a = !0)
                }
                return a
            }

            function ja() {
                return !(Sa.data(B + "_intouch") !== !0)
            }

            function ka(a) {
                a === !0 ? (Sa.bind(Fa, D), Sa.bind(Ga, E), Ha && Sa.bind(Ha, G)) : (Sa.unbind(Fa, D, !1), Sa.unbind(Ga, E, !1), Ha && Sa.unbind(Ha, G, !1)), Sa.data(B + "_intouch", a === !0)
            }

            function la(a, b) {
                var c = void 0 !== b.identifier ? b.identifier : 0;
                return Va[a].identifier = c, Va[a].start.x = Va[a].end.x = b.pageX || b.clientX, Va[a].start.y = Va[a].end.y = b.pageY || b.clientY, Va[a]
            }

            function ma(a) {
                var b = void 0 !== a.identifier ? a.identifier : 0,
                    c = na(b);
                return c.end.x = a.pageX || a.clientX, c.end.y = a.pageY || a.clientY, c
            }

            function na(a) {
                for (var b = 0; b < Va.length; b++)
                    if (Va[b].identifier == a) return Va[b]
            }

            function oa() {
                for (var a = [], b = 0; 5 >= b; b++) a.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return a
            }

            function pa(a, b) {
                b = Math.max(b, qa(a)), Ra[a].distance = b
            }

            function qa(a) {
                return Ra[a] ? Ra[a].distance : void 0
            }

            function ra() {
                var a = {};
                return a[d] = sa(d), a[e] = sa(e), a[f] = sa(f), a[g] = sa(g), a
            }

            function sa(a) {
                return {
                    direction: a,
                    distance: 0
                }
            }

            function ta() {
                return Xa - Wa
            }

            function ua(a, b) {
                var c = Math.abs(a.x - b.x),
                    d = Math.abs(a.y - b.y);
                return Math.round(Math.sqrt(c * c + d * d))
            }

            function va(a, b) {
                var c = b / a * 1;
                return c.toFixed(2)
            }

            function wa() {
                return 1 > Oa ? i : h
            }

            function xa(a, b) {
                return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
            }

            function ya(a, b) {
                var c = a.x - b.x,
                    d = b.y - a.y,
                    e = Math.atan2(d, c),
                    f = Math.round(180 * e / Math.PI);
                return 0 > f && (f = 360 - Math.abs(f)), f
            }

            function za(a, b) {
                var c = ya(a, b);
                return 45 >= c && c >= 0 ? d : 360 >= c && c >= 315 ? d : c >= 135 && 225 >= c ? e : c > 45 && 135 > c ? g : f
            }

            function Aa() {
                var a = new Date;
                return a.getTime()
            }

            function Ba(b) {
                b = a(b);
                var c = b.offset(),
                    d = {
                        left: c.left,
                        right: c.left + b.outerWidth(),
                        top: c.top,
                        bottom: c.top + b.outerHeight()
                    };
                return d
            }

            function Ca(a, b) {
                return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom
            }
            var Da = y || A || !c.fallbackToMouseEvents,
                Ea = Da ? A ? z ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Fa = Da ? A ? z ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                Ga = Da ? A ? z ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                Ha = Da ? null : "mouseleave",
                Ia = A ? z ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Ja = 0,
                Ka = null,
                La = 0,
                Ma = 0,
                Na = 0,
                Oa = 1,
                Pa = 0,
                Qa = 0,
                Ra = null,
                Sa = a(b),
                Ta = "start",
                Ua = 0,
                Va = null,
                Wa = 0,
                Xa = 0,
                Ya = 0,
                Za = 0,
                $a = 0,
                _a = null,
                ab = null;
            try {
                Sa.bind(Ea, C), Sa.bind(Ia, F)
            } catch (bb) {
                a.error("events not supported " + Ea + "," + Ia + " on jQuery.swipe")
            }
            this.enable = function() {
                return Sa.bind(Ea, C), Sa.bind(Ia, F), Sa
            }, this.disable = function() {
                return H(), Sa
            }, this.destroy = function() {
                return H(), Sa.data(B, null), Sa
            }, this.option = function(b, d) {
                if (void 0 !== c[b]) {
                    if (void 0 === d) return c[b];
                    c[b] = d
                } else a.error("Option " + b + " does not exist on jQuery.swipe.options");
                return null
            }
        }
        var d = "left",
            e = "right",
            f = "up",
            g = "down",
            h = "in",
            i = "out",
            j = "none",
            k = "auto",
            l = "swipe",
            m = "pinch",
            n = "tap",
            o = "doubletap",
            p = "longtap",
            q = "horizontal",
            r = "vertical",
            s = "all",
            t = 10,
            u = "start",
            v = "move",
            w = "end",
            x = "cancel",
            y = "ontouchstart" in window,
            z = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            A = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            B = "TouchSwipe",
            C = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe"
            };
        a.fn.swipe = function(c) {
            var d = a(this),
                e = d.data(B);
            if (e && "string" == typeof c) {
                if (e[c]) return e[c].apply(this, Array.prototype.slice.call(arguments, 1));
                a.error("Method " + c + " does not exist on jQuery.swipe")
            } else if (!(e || "object" != typeof c && c)) return b.apply(this, arguments);
            return d
        }, a.fn.swipe.defaults = C, a.fn.swipe.phases = {
            PHASE_START: u,
            PHASE_MOVE: v,
            PHASE_END: w,
            PHASE_CANCEL: x
        }, a.fn.swipe.directions = {
            LEFT: d,
            RIGHT: e,
            UP: f,
            DOWN: g,
            IN: h,
            OUT: i
        }, a.fn.swipe.pageScroll = {
            NONE: j,
            HORIZONTAL: q,
            VERTICAL: r,
            AUTO: k
        }, a.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: s
        }
    }), "undefined" == typeof console) {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}
}
if (1 == window.tplogs) try {
    console.groupCollapsed("ThemePunch GreenSocks Logs")
} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (1 == window.tplogs) try {
    console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
} catch (e) {}! function(a, b) {
    "use strict";
    var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!c.TweenLite) {
        var d, e, f, g, h, i = function(a) {
                var b, d = a.split("."),
                    e = c;
                for (b = 0; d.length > b; b++) e[d[b]] = e = e[d[b]] || {};
                return e
            },
            j = i("com.greensock"),
            k = 1e-10,
            l = function(a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            m = function() {},
            n = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) {
                    return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                }
            }(),
            o = {},
            p = function(d, e, f, g) {
                this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
                var h = [];
                this.check = function(j) {
                    for (var k, l, m, n, q = e.length, r = q; --q > -1;)(k = o[e[q]] || new p(e[q], [])).gsClass ? (h[q] = k.gsClass, r--) : j && k.sc.push(this);
                    if (0 === r && f)
                        for (l = ("com.greensock." + d).split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                            return n
                        }) : d === b && "undefined" != typeof module && module.exports && (module.exports = n)), q = 0; this.sc.length > q; q++) this.sc[q].check()
                }, this.check(!0)
            },
            q = a._gsDefine = function(a, b, c, d) {
                return new p(a, b, c, d)
            },
            r = j._class = function(a, b, c) {
                return b = b || function() {}, q(a, [], function() {
                    return b
                }, c), b
            };
        q.globals = c;
        var s = [0, 0, 1, 1],
            t = [],
            u = r("easing.Ease", function(a, b, c, d) {
                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
            }, !0),
            v = u.map = {},
            w = u.register = function(a, b, c, d) {
                for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                    for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            };
        for (f = u.prototype, f._calcEnd = !1, f.getRatio = function(a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type,
                c = this._power,
                d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
        v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
        var x = r("events.EventDispatcher", function(a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        f = x.prototype, f.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var f, i, j = this._listeners[a],
                k = 0;
            for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && e > f.pr && (k = i + 1);
            j.splice(k, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            }), this !== g || h || g.wake()
        }, f.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1;)
                    if (d[c].c === b) return void d.splice(c, 1)
        }, f.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                    type: a,
                    target: c
                }) : d.c.call(d.s || c))
        };
        var y = a.requestAnimationFrame,
            z = a.cancelAnimationFrame,
            A = Date.now || function() {
                return (new Date).getTime()
            },
            B = A();
        for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
        r("Ticker", function(a, b) {
            var c, d, e, f, i, j = this,
                l = A(),
                n = b !== !1 && y,
                o = 500,
                p = 33,
                q = function(a) {
                    var b, g, h = A() - B;
                    h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || a === !0) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), a !== !0 && (e = d(q)), g && j.dispatchEvent("tick")
                };
            x.call(j), j.time = j.frame = 0, j.tick = function() {
                q(!0)
            }, j.lagSmoothing = function(a, b) {
                o = a || 1 / k, p = Math.min(b, o, 0)
            }, j.sleep = function() {
                null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
            }, j.wake = function() {
                null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function(a) {
                    return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                }, j === g && (h = !0), q(2)
            }, j.fps = function(a) {
                return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, void j.wake()) : c
            }, j.useRAF = function(a) {
                return arguments.length ? (j.sleep(), n = a, void j.fps(c)) : n
            }, j.fps(a), setTimeout(function() {
                n && (!e || 5 > j.frame) && j.useRAF(!1)
            }, 1500)
        }), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
        var C = r("core.Animation", function(a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, R) {
                h || g.wake();
                var c = this.vars.useFrames ? Q : R;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
        var D = function() {
            h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
        };
        D(), f.play = function(a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }, f.pause = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        }, f.resume = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        }, f.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, f.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, f.reverse = function(a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, f.render = function() {}, f.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, f.isActive = function() {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
        }, f._enabled = function(a, b) {
            return h || g.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, f._kill = function() {
            return this._enabled(!1, !1)
        }, f.kill = function(a, b) {
            return this._kill(a, b), this
        }, f._uncache = function(a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, f._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
            return c
        }, f.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, f.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, f.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, f.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, f.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, f.totalTime = function(a, b, c) {
            if (h || g.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                        for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (this.render(a, b, !1), I.length && S())
            }
            return this
        }, f.progress = f.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        }, f.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, f.endTime = function(a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }, f.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || k, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        }, f.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, f.paused = function(a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                h || a || g.wake();
                var b = this._timeline,
                    c = b.rawTime(),
                    d = c - this._pauseTime;
                !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        var E = r("core.SimpleTimeline", function(a) {
            C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        f = E.prototype = new C, f.constructor = E, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(a, b) {
            var c, d;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                for (d = a._startTime; c && c._startTime > d;) c = c._prev;
            return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._recent = a, this._timeline && this._uncache(!0), this
        }, f._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, f.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, f.rawTime = function() {
            return h || g.wake(), this._totalTime
        };
        var F = r("TweenLite", function(b, c, d) {
                if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
                this.target = b = "string" != typeof b ? b : F.selector(b) || b;
                var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                    i = this.vars.overwrite;
                if (this._overwrite = i = null == i ? P[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : P[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                    for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = T(f, this, !1), 1 === i && this._siblings[e].length > 1 && V(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                else this._propLookup = {}, this._siblings = T(b, this, !1), 1 === i && this._siblings.length > 1 && V(b, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k, this.render(-this._delay))
            }, !0),
            G = function(b) {
                return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
            },
            H = function(a, b) {
                var c, d = {};
                for (c in a) O[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!L[c] || L[c] && L[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                a.css = d
            };
        f = F.prototype = new C, f.constructor = F, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.14.2", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = !0, F.lagSmoothing = function(a, b) {
            g.lagSmoothing(a, b)
        }, F.selector = a.$ || a.jQuery || function(b) {
            var c = a.$ || a.jQuery;
            return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        };
        var I = [],
            J = {},
            K = F._internals = {
                isArray: n,
                isSelector: G,
                lazyTweens: I
            },
            L = F._plugins = {},
            M = K.tweenLookup = {},
            N = 0,
            O = K.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1
            },
            P = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            Q = C._rootFramesTimeline = new E,
            R = C._rootTimeline = new E,
            S = K.lazyRender = function() {
                var a, b = I.length;
                for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                I.length = 0
            };
        R._startTime = g.time, Q._startTime = g.frame, R._active = Q._active = !0, setTimeout(S, 1), C._updateRoot = F.render = function() {
            var a, b, c;
            if (I.length && S(), R.render((g.time - R._startTime) * R._timeScale, !1, !1), Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && S(), !(g.frame % 120)) {
                for (c in M) {
                    for (b = M[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete M[c]
                }
                if (c = R._first, (!c || c._paused) && F.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || g.sleep()
                }
            }
        }, g.addEventListener("tick", C._updateRoot);
        var T = function(a, b, c) {
                var d, e, f = a._gsTweenID;
                if (M[f || (a._gsTweenID = f = "t" + N++)] || (M[f] = {
                        target: a,
                        tweens: []
                    }), b && (d = M[f].tweens, d[e = d.length] = b, c))
                    for (; --e > -1;) d[e] === b && d.splice(e, 1);
                return M[f].tweens
            },
            U = function(a, b, c, d) {
                var e, f, g = a.vars.onOverwrite;
                return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
            },
            V = function(a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; i > f; f++)
                        if ((h = e[f]) !== b) h._gc || U(h, b) && h._enabled(!1, !1) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var j, l = b._startTime + k,
                    m = [],
                    n = 0,
                    o = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || W(b, 0, o), 0 === W(h, j, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                for (f = n; --f > -1;)
                    if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                        if (2 !== d && !U(h, b)) continue;
                        h._enabled(!1, !1) && (g = !0)
                    }
                return g
            },
            W = function(a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
            };
        f._init = function() {
            var a, b, c, d, e, f = this.vars,
                g = this._overwrittenProps,
                h = this._duration,
                i = !!f.immediateRender,
                j = f.ease;
            if (f.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                for (d in f.startAt) e[d] = f.startAt[d];
                if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== h) return
            } else if (f.runBackwards && 0 !== h)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (i = !1), c = {};
                    for (d in f) O[d] && "autoCSS" !== d || (c[d] = f[d]);
                    if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, g);
            if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = f.onUpdate, this._initted = !0
        }, f._initProps = function(b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == b) return !1;
            J[b._gsTweenID] && S(), this.vars.css || b.style && b !== a && b.nodeType && L.css && this.vars.autoCSS !== !1 && H(this.vars, b);
            for (f in this.vars) {
                if (k = this.vars[f], O[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                else if (L[f] && (i = new L[f])._onInitTween(b, this.vars[f], this)) {
                    for (this._firstPT = j = {
                        _next: this._firstPT,
                        t: i,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: f,
                        pg: !0,
                        pr: i._priority
                    }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                    (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = c[f] = j = {
                    _next: this._firstPT,
                    t: b,
                    p: f,
                    f: "function" == typeof b[f],
                    n: f,
                    pg: !1,
                    pr: 0
                }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                j && j._next && (j._next._prev = j)
            }
            return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && V(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
        }, f.render = function(a, b, c) {
            var d, e, f, g, h = this._time,
                i = this._duration,
                j = this._rawPrevTime;
            if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > j || j === k) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k);
            else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0 && j !== k) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)), this._initted || (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                var l = a / i,
                    m = this._easeType,
                    n = this._easePower;
                (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), this.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / i ? l / 2 : 1 - l / 2
            } else this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || t))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || t)), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || t), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
            }
        }, f._kill = function(a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
            var d, e, f, g, h, i, j, k, l;
            if ((n(b) || G(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1;) this._kill(a, b[d]) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;)
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target) return !1;
                    h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j) h[f] && (l || (l = []), l.push(f));
                        if (!U(this, c, b, l)) return !1
                    }
                    for (f in j)(g = h[f]) && (g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next),
                    g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return i
        }, f.invalidate = function() {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -k, this.render(-this._delay)), this
        }, f._enabled = function(a, b) {
            if (h || g.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1;) this._siblings[c] = T(d[c], this, !0);
                else this._siblings = T(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, F.to = function(a, b, c) {
            return new F(a, b, c)
        }, F.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
        }, F.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
        }, F.delayedCall = function(a, b, c, d, e) {
            return new F(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }, F.set = function(a, b) {
            return new F(a, 0, b)
        }, F.getTweensOf = function(a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : F.selector(a) || a;
            var c, d, e, f;
            if ((n(a) || G(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;)
                    for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else
                for (d = T(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }, F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
        };
        var X = r("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = X.prototype
        }, !0);
        if (f = X.prototype, X.version = "1.10.1", X.API = 2, f._firstPT = null, f._addTween = function(a, b, c, d, e, f) {
                var g, h;
                return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                    _next: this._firstPT,
                    t: a,
                    p: b,
                    s: c,
                    c: g,
                    f: "function" == typeof a[b],
                    n: e || b,
                    r: f
                }, h._next && (h._next._prev = h), h) : void 0
            }, f.setRatio = function(a) {
                for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
            }, f._kill = function(a) {
                var b, c = this._overwriteProps,
                    d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, f._roundProps = function(a, b) {
                for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
            }, F._onPluginEvent = function(a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, X.activate = function(a) {
                for (var b = a.length; --b > -1;) a[b].API === X.API && (L[(new a[b])._propName] = a[b]);
                return !0
            }, q.plugin = function(a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    e = a.overwriteProps,
                    f = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                        X.call(this, c, d), this._overwriteProps = e || []
                    }, a.global === !0),
                    h = g.prototype = new X(c);
                h.constructor = g, g.API = a.API;
                for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, X.activate([g]), g
            }, d = a._gsQueue) {
            for (e = 0; d.length > e; e++) d[e]();
            for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
        }
        h = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
                b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var c, d, e = this.vars;
                for (d in e) c = e[d], h(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                h(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
            },
            e = 1e-10,
            f = c._internals,
            g = f.isSelector,
            h = f.isArray,
            i = f.lazyTweens,
            j = f.lazyRender,
            k = [],
            l = _gsScope._gsDefine.globals,
            m = function(a) {
                var b, c = {};
                for (b in a) c[b] = a[b];
                return c
            },
            n = function(a, b, c, d) {
                var e = a._timeline._totalTime;
                (b || !this._forcingPlayhead) && (a._timeline.pause(a._startTime), b && b.apply(d || a._timeline, c || k), this._forcingPlayhead && a._timeline.seek(e))
            },
            o = function(a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            p = d.prototype = new b;
        return d.version = "1.14.2", p.constructor = d, p.kill()._gc = p._forcingPlayhead = !1, p.to = function(a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
        }, p.from = function(a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
        }, p.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }, p.staggerTo = function(a, b, e, f, h, i, j, k) {
            var l, n = new d({
                onComplete: i,
                onCompleteParams: j,
                onCompleteScope: k,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], g(a) && (a = o(a)), f = f || 0, 0 > f && (a = o(a), a.reverse(), f *= -1), l = 0; a.length > l; l++) e.startAt && (e.startAt = m(e.startAt)), n.to(a[l], b, m(e), l * f);
            return this.add(n, h)
        }, p.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
        }, p.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
        }, p.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e)
        }, p.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
        }, d.exportRoot = function(a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a),
                h = g._timeline;
            for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
            return h.add(g, 0), g
        }, p.add = function(e, f, g, i) {
            var j, k, l, m, n, o;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array || e && e.push && h(e)) {
                    for (g = g || "normal", i = i || 0, j = f, k = e.length, l = 0; k > l; l++) h(m = e[l]) && (m = new d({
                        tweens: m
                    })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += i;
                    return this._uncache(!0)
                }
                if ("string" == typeof e) return this.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
            return this
        }, p.remove = function(b) {
            if (b instanceof a) return this._remove(b, !1);
            if (b instanceof Array || b && b.push && h(b)) {
                for (var c = b.length; --c > -1;) this.remove(b[c]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
        }, p._remove = function(a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, p.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
        }, p.insert = p.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d)
        }, p.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
        }, p.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this
        }, p.addPause = function(a, b, c, d) {
            return this.call(n, ["{self}", b, c, d], this, a)
        }, p.removeLabel = function(a) {
            return delete this._labels[a], this
        }, p.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }, p._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || e.push && h(e)))
                for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
            else {
                if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        }, p.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }, p.stop = function() {
            return this.paused(!0)
        }, p.gotoAndPlay = function(a, b) {
            return this.play(a, b)
        }, p.gotoAndStop = function(a, b) {
            return this.pause(a, b)
        }, p.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, l, m = this._dirty ? this.totalDuration() : this._totalDuration,
                n = this._time,
                o = this._startTime,
                p = this._timeScale,
                q = this._paused;
            if (a >= m ? (this._totalTime = this._time = m, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (l = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = m + 1e-4) : 1e-7 > a ? (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = 0, this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== n && this._first || c || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || k)), this._time >= n)
                    for (d = this._first; d && (g = d._next, !this._paused || q);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                else
                    for (d = this._last; d && (g = d._prev, !this._paused || q);)(d._active || n >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                this._onUpdate && (b || (i.length && j(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || k))), h && (this._gc || (o === this._startTime || p !== this._timeScale) && (0 === this._time || m >= this.totalDuration()) && (f && (i.length && j(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || k)))
            }
        }, p._hasPausedChild = function() {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next
            }
            return !1
        }, p.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g;) e > g._startTime || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f
        }, p.getTweensOf = function(a, b) {
            var d, e, f = this._gc,
                g = [],
                h = 0;
            for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g
        }, p.recent = function() {
            return this._recent
        }, p._contains = function(a) {
            for (var b = a.timeline; b;) {
                if (b === this) return !0;
                b = b.timeline
            }
            return !1
        }, p.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
            if (b)
                for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0)
        }, p._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
            return e
        }, p.clear = function(a) {
            var b = this.getChildren(!1, !0, !0),
                c = b.length;
            for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0)
        }, p.invalidate = function() {
            for (var b = this._first; b;) b.invalidate(), b = b._next;
            return a.prototype.invalidate.call(this)
        }, p._enabled = function(a, c) {
            if (a === this._gc)
                for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c)
        }, p.totalTime = function() {
            this._forcingPlayhead = !0;
            var b = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, b
        }, p.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, p.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, 0 > e._startTime && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                    this._duration = this._totalDuration = d, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
        }, p.usesFrames = function() {
            for (var b = this._timeline; b._timeline;) b = b._timeline;
            return b === a._rootFramesTimeline
        }, p.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, d
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = b())
    }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
        var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
            f = e.com.greensock,
            g = 2 * Math.PI,
            h = Math.PI / 2,
            i = f._class,
            j = function(b, c) {
                var d = i("easing." + b, function() {}, !0),
                    e = d.prototype = new a;
                return e.constructor = d, e.getRatio = c, d
            },
            k = a.register || function() {},
            l = function(a, b, c, d) {
                var e = i("easing." + a, {
                    easeOut: new b,
                    easeIn: new c,
                    easeInOut: new d
                }, !0);
                return k(e, a), e
            },
            m = function(a, b, c) {
                this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
            },
            n = function(b, c) {
                var d = i("easing." + b, function(a) {
                        this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    e = d.prototype = new a;
                return e.constructor = d, e.getRatio = c, e.config = function(a) {
                    return new d(a)
                }, d
            },
            o = l("Back", n("BackOut", function(a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
            }), n("BackIn", function(a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), n("BackInOut", function(a) {
                return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })),
            p = i("easing.SlowMo", function(a, b, c) {
                b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
            }, !0),
            q = p.prototype = new a;
        return q.constructor = p, q.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
            return new p(a, b, c)
        }, b = i("easing.SteppedEase", function(a) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
        }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
        }, q.config = b.config = function(a) {
            return new b(a)
        }, c = i("easing.RoughEase", function(b) {
            b = b || {};
            for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = .5 * f * f * r) : (f = 2 * (1 - c), e = .5 * f * f * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                x: c,
                y: d
            };
            for (j.sort(function(a, b) {
                return a.x - b.x
            }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
            this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
        }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t;) b = b.next;
                b = b.prev
            } else
                for (; b.prev && b.t >= a;) b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, q.config = function(a) {
            return new c(a)
        }, c.ease = new c, l("Bounce", j("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), j("BounceIn", function(a) {
            return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), j("BounceInOut", function(a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
        })), l("Circ", j("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), j("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), j("CircInOut", function(a) {
            return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), d = function(b, c, d) {
            var e = i("easing." + b, function(a, b) {
                    this._p1 = a || 1, this._p2 = b || d, this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0)
                }, !0),
                f = e.prototype = new a;
            return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                return new e(a, b)
            }, e
        }, l("Elastic", d("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * g / this._p2) + 1
        }, .3), d("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2))
        }, .3), d("ElasticInOut", function(a) {
            return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) + 1
        }, .45)), l("Expo", j("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }), j("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), j("ExpoInOut", function(a) {
            return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), l("Sine", j("SineOut", function(a) {
            return Math.sin(a * h)
        }), j("SineIn", function(a) {
            return -Math.cos(a * h) + 1
        }), j("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })), i("easing.EaseLookup", {
            find: function(b) {
                return a.map[b]
            }
        }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var c, d, e, f, g = function() {
                a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
            },
            h = {},
            i = g.prototype = new a("css");
        i.constructor = g, g.version = "1.14.2", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", i = "px", g.suffixMap = {
            top: i,
            right: i,
            bottom: i,
            left: i,
            width: i,
            height: i,
            fontSize: i,
            padding: i,
            margin: i,
            perspective: i,
            lineHeight: ""
        };
        var j, k, l, m, n, o, p = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            q = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            r = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            s = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,
            t = /(?:\d|\-|\+|=|#|\.)*/g,
            u = /opacity *= *([^)]*)/i,
            v = /opacity:([^;]*)/i,
            w = /alpha\(opacity *=.+?\)/i,
            x = /^(rgb|hsl)/,
            y = /([A-Z])/g,
            z = /-([a-z])/gi,
            A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            B = function(a, b) {
                return b.toUpperCase()
            },
            C = /(?:Left|Right|Width)/i,
            D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            F = /,(?=[^\)]*(?:\(|$))/gi,
            G = Math.PI / 180,
            H = 180 / Math.PI,
            I = {},
            J = document,
            K = J.createElement("div"),
            L = J.createElement("img"),
            M = g._internals = {
                _specialProps: h
            },
            N = navigator.userAgent,
            O = function() {
                var a, b = N.indexOf("Android"),
                    c = J.createElement("div");
                return l = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === b || Number(N.substr(b + 8, 1)) > 3), n = l && 6 > Number(N.substr(N.indexOf("Version/") + 8, 1)), m = -1 !== N.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(N)) && (o = parseFloat(RegExp.$1)), c.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", a = c.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
            }(),
            P = function(a) {
                return u.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            Q = function(a) {
                window.console && console.log(a)
            },
            R = "",
            S = "",
            T = function(a, b) {
                b = b || K;
                var c, d, e = b.style;
                if (void 0 !== e[a]) return a;
                for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                return d >= 0 ? (S = 3 === d ? "ms" : c[d], R = "-" + S.toLowerCase() + "-", S + a) : null
            },
            U = J.defaultView ? J.defaultView.getComputedStyle : function() {},
            V = g.getStyle = function(a, b, c, d, e) {
                var f;
                return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(y, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a)
            },
            W = M.convertToPixels = function(a, c, d, e, f) {
                if ("px" === e || !e) return d;
                if ("auto" === e || !d) return 0;
                var h, i, j, k = C.test(c),
                    l = a,
                    m = K.style,
                    n = 0 > d;
                if (n && (d = -d), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                else {
                    if (m.cssText = "border:0 solid red;position:" + V(a, "position") + ";line-height:0;", "%" !== e && l.appendChild) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                    else {
                        if (l = a.parentNode || J.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                        m[k ? "width" : "height"] = d + e
                    }
                    l.appendChild(K), h = parseFloat(K[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(K), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = 100 * (h / d)), 0 !== h || f || (h = W(a, c, d, e, !0))
                }
                return n ? -h : h
            },
            X = M.calculateOffset = function(a, b, c) {
                if ("absolute" !== V(a, "position", c)) return 0;
                var d = "left" === b ? "Left" : "Top",
                    e = V(a, "margin" + d, c);
                return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(t, "")) || 0)
            },
            Y = function(a, b) {
                var c, d, e = {};
                if (b = b || U(a, null))
                    if (c = b.length)
                        for (; --c > -1;) e[b[c].replace(z, B)] = b.getPropertyValue(b[c]);
                    else
                        for (c in b) e[c] = b[c];
                else if (b = a.currentStyle || a.style)
                    for (c in b) "string" == typeof c && void 0 === e[c] && (e[c.replace(z, B)] = b[c]);
                return O || (e.opacity = P(a)), d = Ea(a, b, !1), e.rotation = d.rotation, e.skewX = d.skewX, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, xa && (e.z = d.z, e.rotationX = d.rotationX, e.rotationY = d.rotationY, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
            },
            Z = function(a, b, c, d, e) {
                var f, g, h, i = {},
                    j = a.style;
                for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(s, "") ? f : 0 : X(a, g), void 0 !== j[g] && (h = new la(j, g, j[g], h)));
                if (d)
                    for (g in d) "className" !== g && (i[g] = d[g]);
                return {
                    difs: i,
                    firstMPT: h
                }
            },
            $ = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            _ = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            aa = function(a, b, c) {
                var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                    e = $[b],
                    f = e.length;
                for (c = c || U(a, null); --f > -1;) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
                return d
            },
            ba = function(a, b) {
                (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                var c = a.split(" "),
                    d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                    e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(s, "")), b.oy = parseFloat(e.replace(s, ""))), d + " " + e + (c.length > 2 ? " " + c[2] : "")
            },
            ca = function(a, b) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
            },
            da = function(a, b) {
                return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
            },
            ea = function(a, b, c, d) {
                var e, f, g, h, i = 1e-6;
                return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), g = Number(f[0].replace(s, "")) * (-1 === a.indexOf("rad") ? 1 : H) - ("=" === a.charAt(1) ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (0 | g / e) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (0 | g / e) * e)), h = b + g), i > h && h > -i && (h = 0), h
            },
            fa = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ga = function(a, b, c) {
                return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
            },
            ha = g.parseColor = function(a) {
                var b, c, d, e, f, g;
                return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), fa[a] ? fa[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, 255 & a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(p), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = ga(e + 1 / 3, b, c), a[1] = ga(e, b, c), a[2] = ga(e - 1 / 3, b, c), a) : (a = a.match(p) || fa.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : fa.black
            },
            ia = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (i in fa) ia += "|" + i + "\\b";
        ia = RegExp(ia + ")", "gi");
        var ja = function(a, b, c, d) {
                if (null == a) return function(a) {
                    return a
                };
                var e, f = b ? (a.match(ia) || [""])[0] : "",
                    g = a.split(f).join("").match(r) || [],
                    h = a.substr(0, a.indexOf(g[0])),
                    i = ")" === a.charAt(a.length - 1) ? ")" : "",
                    j = -1 !== a.indexOf(" ") ? " " : ",",
                    k = g.length,
                    l = k > 0 ? g[0].replace(p, "") : "";
                return k ? e = b ? function(a) {
                    var b, m, n, o;
                    if ("number" == typeof a) a += l;
                    else if (d && F.test(a)) {
                        for (o = a.replace(F, "|").split("|"), n = 0; o.length > n; n++) o[n] = e(o[n]);
                        return o.join(",")
                    }
                    if (b = (a.match(ia) || [f])[0], m = a.split(b).join("").match(r) || [], n = m.length, k > n--)
                        for (; k > ++n;) m[n] = c ? m[0 | (n - 1) / 2] : g[n];
                    return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                } : function(a) {
                    var b, f, m;
                    if ("number" == typeof a) a += l;
                    else if (d && F.test(a)) {
                        for (f = a.replace(F, "|").split("|"), m = 0; f.length > m; m++) f[m] = e(f[m]);
                        return f.join(",")
                    }
                    if (b = a.match(r) || [], m = b.length, k > m--)
                        for (; k > ++m;) b[m] = c ? b[0 | (m - 1) / 2] : g[m];
                    return h + b.join(j) + i
                } : function(a) {
                    return a
                }
            },
            ka = function(a) {
                return a = a.split(","),
                    function(b, c, d, e, f, g, h) {
                        var i, j = (c + "").split(" ");
                        for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                        return e.parse(b, h, f, g)
                    }
            },
            la = (M._setPluginRatio = function(a) {
                this.plugin.setRatio(a);
                for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h;) b = g[h.v], h.r ? b = Math.round(b) : i > b && b > -i && (b = 0), h.t[h.p] = b, h = h._next;
                if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a)
                    for (h = f.firstMPT; h;) {
                        if (c = h.t, c.type) {
                            if (1 === c.type) {
                                for (e = c.xs0 + c.s + c.xs1, d = 1; c.l > d; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                c.e = e
                            }
                        } else c.e = c.s + c.xs0;
                        h = h._next
                    }
            }, function(a, b, c, d, e) {
                this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
            }),
            ma = (M._parseToProxy = function(a, b, c, d, e, f) {
                var g, h, i, j, k, l = d,
                    m = {},
                    n = {},
                    o = c._transform,
                    p = I;
                for (c._transform = null, I = b, d = k = c.parse(a, b, d, e), I = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                    if (1 >= d.type && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new la(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                        for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new la(d, i, h, j, d.rxp[i]));
                    d = d._next
                }
                return {
                    proxy: m,
                    end: n,
                    firstMPT: j,
                    pt: k
                }
            }, M.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ma || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
            }),
            na = g.parseComplex = function(a, b, c, d, e, f, g, h, i, k) {
                c = c || f || "", g = new ma(a, b, 0, 0, g, k ? 2 : 1, null, !1, h, c, d), d += "";
                var l, m, n, o, r, s, t, u, v, w, y, z, A = c.split(", ").join(",").split(" "),
                    B = d.split(", ").join(",").split(" "),
                    C = A.length,
                    D = j !== !1;
                for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(F, ", ").split(" "), B = B.join(" ").replace(F, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), C = A.length), g.plugin = i, g.setRatio = k, l = 0; C > l; l++)
                    if (o = A[l], r = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, ca(r, u), r.replace(q, ""), D && -1 !== r.indexOf("px"), !0);
                    else if (e && ("#" === o.charAt(0) || fa[o] || x.test(o))) z = "," === r.charAt(r.length - 1) ? ")," : ")", o = ha(o), r = ha(r), v = o.length + r.length > 6, v && !O && 0 === r[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l]).join("transparent")) : (O || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], r[0] - o[0], ",", !0, !0).appendXtra("", o[1], r[1] - o[1], ",", !0).appendXtra("", o[2], r[2] - o[2], v ? "," : z, !0), v && (o = 4 > o.length ? 1 : o[3], g.appendXtra("", o, (4 > r.length ? 1 : r[3]) - o, z, !1)));
                    else if (s = o.match(p)) {
                        if (t = r.match(q), !t || t.length !== s.length) return g;
                        for (n = 0, m = 0; s.length > m; m++) y = s[m], w = o.indexOf(y, n), g.appendXtra(o.substr(n, w - n), Number(y), ca(t[m], y), "", D && "px" === o.substr(w + y.length, 2), 0 === m), n = w + y.length;
                        g["xs" + g.l] += o.substr(n)
                    } else g["xs" + g.l] += g.l ? " " + o : o;
                if (-1 !== d.indexOf("=") && g.data) {
                    for (z = g.xs0 + g.data.s, l = 1; g.l > l; l++) z += g["xs" + l] + g.data["xn" + l];
                    g.e = z + g["xs" + l]
                }
                return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
            },
            oa = 9;
        for (i = ma.prototype, i.l = i.pr = 0; --oa > 0;) i["xn" + oa] = 0, i["xs" + oa] = "";
        i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function(a, b, c, d, e, f) {
            var g = this,
                h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ma(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
        };
        var pa = function(a, b) {
                b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || ja(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
            },
            qa = M._registerComplexSpecialProp = function(a, b, c) {
                "object" != typeof b && (b = {
                    parser: c
                });
                var d, e, f = a.split(","),
                    g = b.defaultValue;
                for (c = c || [g], d = 0; f.length > d; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new pa(f[d], b)
            },
            ra = function(a) {
                if (!h[a]) {
                    var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                    qa(a, {
                        parser: function(a, c, d, e, f, g, i) {
                            var j = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[b];
                            return j ? (j._cssRegister(),
                                h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), f)
                        }
                    })
                }
            };
        i = pa.prototype, i.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (F.test(c) || F.test(b) ? (h = b.replace(F, "|").split("|"), i = c.replace(F, "|").split("|")) : m && (h = [b], i = [c])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (c = -1 === l ? i : h, c[g] += " " + m));
                b = h.join(", "), c = i.join(", ")
            }
            return na(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }, i.parse = function(a, b, c, d, f, g) {
            return this.parseComplex(a.style, this.format(V(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }, g.registerSpecialProp = function(a, b, c) {
            qa(a, {
                parser: function(a, d, e, f, g, h) {
                    var i = new ma(a, e, 0, 0, g, 2, e, !1, c);
                    return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i
                },
                priority: c
            })
        };
        var sa, ta = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            ua = T("transform"),
            va = R + "transform",
            wa = T("transformOrigin"),
            xa = null !== T("perspective"),
            ya = M.Transform = function() {
                this.skewY = 0
            },
            za = window.SVGElement,
            Aa = function(a, b, c) {
                var d, e = J.createElementNS("http://www.w3.org/2000/svg", a),
                    f = /([a-z])([A-Z])/g;
                for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                return b.appendChild(e), e
            },
            Ba = document.documentElement,
            Ca = function() {
                var a, b, c, d = o || /Android/i.test(N) && !window.chrome;
                return J.createElementNS && !d && (a = Aa("svg", Ba), b = Aa("rect", a, {
                    width: 100,
                    height: 50,
                    x: 100
                }), c = b.getBoundingClientRect().left, b.style[wa] = "50% 50%", b.style[ua] = "scale(0.5,0.5)", d = c === b.getBoundingClientRect().left, Ba.removeChild(a)), d
            }(),
            Da = function(a, b, c) {
                var d = a.getBBox();
                b = ba(b).split(" "), c.xOrigin = (-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * d.width : parseFloat(b[0])) + d.x, c.yOrigin = (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * d.height : parseFloat(b[1])) + d.y
            },
            Ea = M.getTransform = function(a, b, c, d) {
                if (a._gsTransform && c && !d) return a._gsTransform;
                var f, h, i, j, k, l, m, n, o, p, q, r, s, t = c ? a._gsTransform || new ya : new ya,
                    u = 0 > t.scaleX,
                    v = 2e-5,
                    w = 1e5,
                    x = 179.99,
                    y = x * G,
                    z = xa ? parseFloat(V(a, wa, b, !1, "0 0 0").split(" ")[2]) || t.zOrigin || 0 : 0,
                    A = parseFloat(g.defaultTransformPerspective) || 0;
                if (ua ? f = V(a, va, b, !0) : a.currentStyle && (f = a.currentStyle.filter.match(D), f = f && 4 === f.length ? [f[0].substr(4), Number(f[2].substr(4)), Number(f[1].substr(4)), f[3].substr(4), t.x || 0, t.y || 0].join(",") : ""), f && "none" !== f && "matrix(1, 0, 0, 1, 0, 0)" !== f) {
                    for (h = (f || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], i = h.length; --i > -1;) j = Number(h[i]), h[i] = (k = j - (j |= 0)) ? (0 | k * w + (0 > k ? -.5 : .5)) / w + j : j;
                    if (16 === h.length) {
                        var B = h[8],
                            C = h[9],
                            E = h[10],
                            F = h[12],
                            I = h[13],
                            J = h[14];
                        if (t.zOrigin && (J = -t.zOrigin, F = B * J - h[12], I = C * J - h[13], J = E * J + t.zOrigin - h[14]), !c || d || null == t.rotationX) {
                            var K, L, M, N, O, P, Q, R = h[0],
                                S = h[1],
                                T = h[2],
                                U = h[3],
                                W = h[4],
                                X = h[5],
                                Y = h[6],
                                Z = h[7],
                                $ = h[11],
                                _ = Math.atan2(Y, E),
                                aa = -y > _ || _ > y;
                            t.rotationX = _ * H, _ && (N = Math.cos(-_), O = Math.sin(-_), K = W * N + B * O, L = X * N + C * O, M = Y * N + E * O, B = W * -O + B * N, C = X * -O + C * N, E = Y * -O + E * N, $ = Z * -O + $ * N, W = K, X = L, Y = M), _ = Math.atan2(B, R), t.rotationY = _ * H, _ && (P = -y > _ || _ > y, N = Math.cos(-_), O = Math.sin(-_), K = R * N - B * O, L = S * N - C * O, M = T * N - E * O, C = S * O + C * N, E = T * O + E * N, $ = U * O + $ * N, R = K, S = L, T = M), _ = Math.atan2(S, X), t.rotation = _ * H, _ && (Q = -y > _ || _ > y, N = Math.cos(-_), O = Math.sin(-_), R = R * N + W * O, L = S * N + X * O, X = S * -O + X * N, Y = T * -O + Y * N, S = L), Q && aa ? t.rotation = t.rotationX = 0 : Q && P ? t.rotation = t.rotationY = 0 : P && aa && (t.rotationY = t.rotationX = 0), t.scaleX = (0 | Math.sqrt(R * R + S * S) * w + .5) / w, t.scaleY = (0 | Math.sqrt(X * X + C * C) * w + .5) / w, t.scaleZ = (0 | Math.sqrt(Y * Y + E * E) * w + .5) / w, t.skewX = 0, t.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0, t.x = F, t.y = I, t.z = J
                        }
                    } else if (!(xa && !d && h.length && t.x === h[4] && t.y === h[5] && (t.rotationX || t.rotationY) || void 0 !== t.x && "none" === V(a, "display", b))) {
                        var ba = h.length >= 6,
                            ca = ba ? h[0] : 1,
                            da = h[1] || 0,
                            ea = h[2] || 0,
                            fa = ba ? h[3] : 1;
                        t.x = h[4] || 0, t.y = h[5] || 0, l = Math.sqrt(ca * ca + da * da), m = Math.sqrt(fa * fa + ea * ea), n = ca || da ? Math.atan2(da, ca) * H : t.rotation || 0, o = ea || fa ? Math.atan2(ea, fa) * H + n : t.skewX || 0, p = l - Math.abs(t.scaleX || 0), q = m - Math.abs(t.scaleY || 0), Math.abs(o) > 90 && 270 > Math.abs(o) && (u ? (l *= -1, o += 0 >= n ? 180 : -180, n += 0 >= n ? 180 : -180) : (m *= -1, o += 0 >= o ? 180 : -180)), r = (n - t.rotation) % 180, s = (o - t.skewX) % 180, (void 0 === t.skewX || p > v || -v > p || q > v || -v > q || r > -x && x > r && !1 | r * w || s > -x && x > s && !1 | s * w) && (t.scaleX = l, t.scaleY = m, t.rotation = n, t.skewX = o), xa && (t.rotationX = t.rotationY = t.z = 0, t.perspective = A, t.scaleZ = 1)
                    }
                    t.zOrigin = z;
                    for (i in t) v > t[i] && t[i] > -v && (t[i] = 0)
                } else t = {
                    x: 0,
                    y: 0,
                    z: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                    skewX: 0,
                    skewY: 0,
                    perspective: A,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    zOrigin: 0
                };
                return c && (a._gsTransform = t), t.svg = za && a instanceof za && a.parentNode instanceof za, t.svg && (Da(a, V(a, wa, e, !1, "50% 50%") + "", t), sa = g.useSVGTransformAttr || Ca), t.xPercent = t.yPercent = 0, t
            },
            Fa = function(a) {
                var b, c, d = this.data,
                    e = -d.rotation * G,
                    f = e + d.skewX * G,
                    g = 1e5,
                    h = (0 | Math.cos(e) * d.scaleX * g) / g,
                    i = (0 | Math.sin(e) * d.scaleX * g) / g,
                    j = (0 | Math.sin(f) * -d.scaleY * g) / g,
                    k = (0 | Math.cos(f) * d.scaleY * g) / g,
                    l = this.t.style,
                    m = this.t.currentStyle;
                if (m) {
                    c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                    var n, p, q = this.t.offsetWidth,
                        r = this.t.offsetHeight,
                        s = "absolute" !== m.position,
                        v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                        w = d.x + q * d.xPercent / 100,
                        x = d.y + r * d.yPercent / 100;
                    if (null != d.ox && (n = (d.oxp ? .01 * q * d.ox : d.ox) - q / 2, p = (d.oyp ? .01 * r * d.oy : d.oy) - r / 2, w += n - (n * h + p * i), x += p - (n * j + p * k)), s ? (n = q / 2, p = r / 2, v += ", Dx=" + (n - (n * h + p * i) + w) + ", Dy=" + (p - (n * j + p * k) + x) + ")") : v += ", sizingMethod='auto expand')", l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(E, v) : v + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === v.indexOf("Dx=0, Dy=0") || u.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                        var y, z, A, B = 8 > o ? 1 : -1;
                        for (n = d.ieOffsetX || 0, p = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), oa = 0; 4 > oa; oa++) z = _[oa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : W(this.t, z, parseFloat(y), y.replace(t, "")) || 0, A = c !== d[z] ? 2 > oa ? -d.ieOffsetX : -d.ieOffsetY : 2 > oa ? n - d.ieOffsetX : p - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === oa || 2 === oa ? 1 : B))) + "px"
                    }
                }
            },
            Ga = M.set3DTransformRatio = function(a) {
                var b, c, d, e, f, g, h, i, j, k, l, n, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                    A = this.t.style,
                    B = z.rotation * G,
                    C = z.scaleX,
                    D = z.scaleY,
                    E = z.scaleZ,
                    F = z.x,
                    H = z.y,
                    I = z.z,
                    J = z.perspective;
                if (!(1 !== a && 0 !== a || "auto" !== z.force3D || z.rotationY || z.rotationX || 1 !== E || J || I)) return void Ha.call(this, a);
                if (m) {
                    var K = 1e-4;
                    K > C && C > -K && (C = E = 2e-5), K > D && D > -K && (D = E = 2e-5), !J || z.z || z.rotationX || z.rotationY || (J = 0)
                }
                if (B || z.skewX) t = Math.cos(B), u = Math.sin(B), b = t, f = u, z.skewX && (B -= z.skewX * G, t = Math.cos(B), u = Math.sin(B), "simple" === z.skewType && (v = Math.tan(z.skewX * G), v = Math.sqrt(1 + v * v), t *= v, u *= v)), c = -u, g = t;
                else {
                    if (!(z.rotationY || z.rotationX || 1 !== E || J || z.svg)) return void(A[ua] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + H + "px," + I + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""));
                    b = g = 1, c = f = 0
                }
                l = 1, d = e = h = i = j = k = n = o = p = 0, q = J ? -1 / J : 0, r = z.zOrigin, s = 1e5, B = z.rotationY * G, B && (t = Math.cos(B), u = Math.sin(B), j = l * -u, o = q * -u, d = b * u, h = f * u, l *= t, q *= t, b *= t, f *= t), B = z.rotationX * G, B && (t = Math.cos(B), u = Math.sin(B), v = c * t + d * u, w = g * t + h * u, x = k * t + l * u, y = p * t + q * u, d = c * -u + d * t, h = g * -u + h * t, l = k * -u + l * t, q = p * -u + q * t, c = v, g = w, k = x, p = y), 1 !== E && (d *= E, h *= E, l *= E, q *= E), 1 !== D && (c *= D, g *= D, k *= D, p *= D), 1 !== C && (b *= C, f *= C, j *= C, o *= C), r && (n -= r, e = d * n, i = h * n, n = l * n + r), z.svg && (e += z.xOrigin - (z.xOrigin * b + z.yOrigin * c), i += z.yOrigin - (z.xOrigin * f + z.yOrigin * g)), e = (v = (e += F) - (e |= 0)) ? (0 | v * s + (0 > v ? -.5 : .5)) / s + e : e, i = (v = (i += H) - (i |= 0)) ? (0 | v * s + (0 > v ? -.5 : .5)) / s + i : i, n = (v = (n += I) - (n |= 0)) ? (0 | v * s + (0 > v ? -.5 : .5)) / s + n : n, A[ua] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | b * s) / s, (0 | f * s) / s, (0 | j * s) / s, (0 | o * s) / s, (0 | c * s) / s, (0 | g * s) / s, (0 | k * s) / s, (0 | p * s) / s, (0 | d * s) / s, (0 | h * s) / s, (0 | l * s) / s, (0 | q * s) / s, e, i, n, J ? 1 + -n / J : 1].join(",") + ")"
            },
            Ha = M.set2DTransformRatio = function(a) {
                var b, c, d, e, f, g, h, i, j, k, l, m = this.data,
                    n = this.t,
                    o = n.style,
                    p = m.x,
                    q = m.y;
                return !(m.rotationX || m.rotationY || m.z || m.force3D === !0 || "auto" === m.force3D && 1 !== a && 0 !== a) || m.svg && sa || !xa ? (e = m.scaleX, f = m.scaleY, void(m.rotation || m.skewX || m.svg ? (b = m.rotation * G, c = b - m.skewX * G, d = 1e5, g = Math.cos(b) * e, h = Math.sin(b) * e, i = Math.sin(c) * -f, j = Math.cos(c) * f, m.svg && (p += m.xOrigin - (m.xOrigin * g + m.yOrigin * i), q += m.yOrigin - (m.xOrigin * h + m.yOrigin * j), l = 1e-6, l > p && p > -l && (p = 0), l > q && q > -l && (q = 0)), k = (0 | g * d) / d + "," + (0 | h * d) / d + "," + (0 | i * d) / d + "," + (0 | j * d) / d + "," + p + "," + q + ")", m.svg && sa ? n.setAttribute("transform", "matrix(" + k) : o[ua] = (m.xPercent || m.yPercent ? "translate(" + m.xPercent + "%," + m.yPercent + "%) matrix(" : "matrix(") + k) : o[ua] = (m.xPercent || m.yPercent ? "translate(" + m.xPercent + "%," + m.yPercent + "%) matrix(" : "matrix(") + e + ",0,0," + f + "," + p + "," + q + ")")) : (this.setRatio = Ga, void Ga.call(this, a))
            };
        qa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._transform) return f;
                var j, k, l, m, n, o, p, q = d._transform = Ea(a, e, !0, i.parseTransform),
                    r = a.style,
                    s = 1e-6,
                    t = ta.length,
                    u = i,
                    v = {};
                if ("string" == typeof u.transform && ua) l = K.style, l[ua] = u.transform, l.display = "block", l.position = "absolute", J.body.appendChild(K), j = Ea(K, null, !1), J.body.removeChild(K);
                else if ("object" == typeof u) {
                    if (j = {
                            scaleX: da(null != u.scaleX ? u.scaleX : u.scale, q.scaleX),
                            scaleY: da(null != u.scaleY ? u.scaleY : u.scale, q.scaleY),
                            scaleZ: da(u.scaleZ, q.scaleZ),
                            x: da(u.x, q.x),
                            y: da(u.y, q.y),
                            z: da(u.z, q.z),
                            xPercent: da(u.xPercent, q.xPercent),
                            yPercent: da(u.yPercent, q.yPercent),
                            perspective: da(u.transformPerspective, q.perspective)
                        }, p = u.directionalRotation, null != p)
                        if ("object" == typeof p)
                            for (l in p) u[l] = p[l];
                        else u.rotation = p;
                    "string" == typeof u.x && -1 !== u.x.indexOf("%") && (j.x = 0, j.xPercent = da(u.x, q.xPercent)), "string" == typeof u.y && -1 !== u.y.indexOf("%") && (j.y = 0, j.yPercent = da(u.y, q.yPercent)), j.rotation = ea("rotation" in u ? u.rotation : "shortRotation" in u ? u.shortRotation + "_short" : "rotationZ" in u ? u.rotationZ : q.rotation, q.rotation, "rotation", v), xa && (j.rotationX = ea("rotationX" in u ? u.rotationX : "shortRotationX" in u ? u.shortRotationX + "_short" : q.rotationX || 0, q.rotationX, "rotationX", v), j.rotationY = ea("rotationY" in u ? u.rotationY : "shortRotationY" in u ? u.shortRotationY + "_short" : q.rotationY || 0, q.rotationY, "rotationY", v)), j.skewX = null == u.skewX ? q.skewX : ea(u.skewX, q.skewX), j.skewY = null == u.skewY ? q.skewY : ea(u.skewY, q.skewY), (k = j.skewY - q.skewY) && (j.skewX += k, j.rotation += k)
                }
                for (xa && null != u.force3D && (q.force3D = u.force3D, o = !0), q.skewType = u.skewType || q.skewType || g.defaultSkewType, n = q.force3D || q.z || q.rotationX || q.rotationY || j.z || j.rotationX || j.rotationY || j.perspective, n || null == u.scale || (j.scaleZ = 1); --t > -1;) c = ta[t], m = j[c] - q[c], (m > s || -s > m || null != u[c] || null != I[c]) && (o = !0, f = new ma(q, c, q[c], m, f), c in v && (f.e = v[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                return m = u.transformOrigin, m && q.svg && (Da(a, m, j), f = new ma(q, "xOrigin", q.xOrigin, j.xOrigin - q.xOrigin, f, -1, "transformOrigin"), f.b = q.xOrigin, f.e = f.xs0 = j.xOrigin, f = new ma(q, "yOrigin", q.yOrigin, j.yOrigin - q.yOrigin, f, -1, "transformOrigin"), f.b = q.yOrigin, f.e = f.xs0 = j.yOrigin, m = "0px 0px"), (m || xa && n && q.zOrigin) && (ua ? (o = !0, c = wa, m = (m || V(a, c, e, !1, "50% 50%")) + "", f = new ma(r, c, 0, 0, f, -1, "transformOrigin"), f.b = r[c], f.plugin = h, xa ? (l = q.zOrigin, m = m.split(" "), q.zOrigin = (m.length > 2 && (0 === l || "0px" !== m[2]) ? parseFloat(m[2]) : l) || 0, f.xs0 = f.e = m[0] + " " + (m[1] || "50%") + " 0px", f = new ma(q, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = q.zOrigin) : f.xs0 = f.e = m) : ba(m + "", q)), o && (d._transformType = q.svg && sa || !n && 3 !== this._transformType ? 2 : 3), f
            },
            prefix: !0
        }), qa("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), qa("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g) {
                b = this.format(b);
                var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    y = a.style;
                for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), i = 0; x.length > i; i++) this.p.indexOf("border") && (x[i] = T(x[i])), l = k = V(a, x[i], e, !1, "0px"), -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = W(a, "borderLeft", n, s), v = W(a, "borderTop", n, s), "%" === r ? (l = 100 * (u / p) + "%", k = 100 * (v / q) + "%") : "em" === r ? (w = W(a, "borderLeft", 1, "em"), l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, j = parseFloat(k) + o + r)), g = na(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                return g
            },
            prefix: !0,
            formatter: ja("0px 0px 0px 0px", !1, !0)
        }), qa("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position",
                    p = e || U(a, null),
                    q = this.format((p ? o ? p.getPropertyValue(n + "-x") + " " + p.getPropertyValue(n + "-y") : p.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                    r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = V(a, "backgroundImage").replace(A, ""), m && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), L.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - L.width : a.offsetHeight - L.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : 100 * (parseFloat(q) / l) + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            },
            formatter: ba
        }), qa("backgroundSize", {
            defaultValue: "0 0",
            formatter: ba
        }), qa("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), qa("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), qa("transformStyle", {
            prefix: !0
        }), qa("backfaceVisibility", {
            prefix: !0
        }), qa("userSelect", {
            prefix: !0
        }), qa("margin", {
            parser: ka("marginTop,marginRight,marginBottom,marginLeft")
        }), qa("padding", {
            parser: ka("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), qa("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > o ? (i = a.currentStyle, j = 8 > o ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
            }
        }), qa("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), qa("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e
            }
        }), qa("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", e, !1, "0px") + " " + V(a, "borderTopStyle", e, !1, "solid") + " " + V(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ia) || ["#000"])[0]
            }
        }), qa("borderWidth", {
            parser: ka("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), qa("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e) {
                var f = a.style,
                    g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                return new ma(f, g, 0, 0, e, -1, c, !1, 0, f[g], b)
            }
        });
        var Ia = function(a) {
            var b, c = this.t,
                d = c.filter || V(this.data, "filter") || "",
                e = 0 | this.s + this.c * a;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !V(this.data, "filter")) : (c.filter = d.replace(w, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(u, "opacity=" + e))
        };
        qa("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(V(a, "opacity", e, !1, "1")),
                    i = a.style,
                    j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === V(a, "visibility", e) && 0 !== b && (h = 0), O ? f = new ma(i, "opacity", h, b - h, f) : (f = new ma(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ia), j && (f = new ma(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
            }
        });
        var Ja = function(a, b) {
                b && (a.removeProperty ? ("ms" === b.substr(0, 2) && (b = "M" + b.substr(1)), a.removeProperty(b.replace(y, "-$1").toLowerCase())) : a.removeAttribute(b))
            },
            Ka = function(a) {
                if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                    this.t.setAttribute("class", 0 === a ? this.b : this.e);
                    for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Ja(c, b.p), b = b._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        qa("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "",
                    p = a.style.cssText;
                if (g = f._classNamePT = new ma(a, d, 0, 0, g, 2), g.setRatio = Ka, g.pr = -11, c = !0, g.b = o, k = Y(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), f._tween._duration && (a.setAttribute("class", g.e), j = Z(a, k, Y(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)), g
            }
        });
        var La = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f = this.t.style,
                    g = h.transform.parse;
                if ("all" === this.e) f.cssText = "", e = !0;
                else
                    for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], h[c] && (h[c].parse === g ? e = !0 : c = "transformOrigin" === c ? wa : h[c].p), Ja(f, c);
                e && (Ja(f, ua), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (qa("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new ma(a, d, 0, 0, f, 2), f.setRatio = La, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
            }
        }), i = "bezier,throwProps,physicsProps,physics2D".split(","), oa = i.length; oa--;) ra(i[oa]);
        i = g.prototype, i._firstPT = null, i._onInitTween = function(a, b, h) {
            if (!a.nodeType) return !1;
            this._target = a, this._tween = h, this._vars = b, j = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = U(a, ""), f = this._overwriteProps;
            var i, m, o, p, q, r, s, t, u, w = a.style;
            if (k && "" === w.zIndex && (i = V(a, "zIndex", e), ("auto" === i || "" === i) && this._addLazySet(w, "zIndex", 0)), "string" == typeof b && (p = w.cssText, i = Y(a, e), w.cssText = p + ";" + b, i = Z(a, i, Y(a)).difs, !O && v.test(b) && (i.opacity = parseFloat(RegExp.$1)), b = i, w.cssText = p), this._firstPT = m = this.parse(a, b, null), this._transformType) {
                for (u = 3 === this._transformType, ua ? l && (k = !0, "" === w.zIndex && (s = V(a, "zIndex", e), ("auto" === s || "" === s) && this._addLazySet(w, "zIndex", 0)), n && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : w.zoom = 1, o = m; o && o._next;) o = o._next;
                t = new ma(a, "transform", 0, 0, null, 2), this._linkCSSP(t, null, o), t.setRatio = u && xa ? Ga : ua ? Ha : Fa, t.data = this._transform || Ea(a, e, !0), f.pop()
            }
            if (c) {
                for (; m;) {
                    for (r = m._next, o = p; o && o.pr > m.pr;) o = o._next;
                    (m._prev = o ? o._prev : q) ? m._prev._next = m: p = m, (m._next = o) ? o._prev = m : q = m, m = r
                }
                this._firstPT = p
            }
            return !0
        }, i.parse = function(a, b, c, f) {
            var g, i, k, l, m, n, o, p, q, r, s = a.style;
            for (g in b) n = b[g], i = h[g], i ? c = i.parse(a, n, g, this, c, f, b) : (m = V(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && x.test(n) ? (q || (n = ha(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = na(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (k = parseFloat(m), o = k || 0 === k ? m.substr((k + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (k = aa(a, g, e), o = "px") : "left" === g || "top" === g ? (k = X(a, g, e), o = "px") : (k = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(t, "")) : (l = parseFloat(n), p = q ? n.substr((l + "").length) || "" : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + k : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && k && (k = W(a, g, k, o), "%" === p ? (k /= W(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = k + "%")) : "em" === p ? k /= W(a, g, 1, "em") : "px" !== p && (l = W(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + k + p)), r && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== s[g] && (n || "NaN" != n + "" && null != n) ? (c = new ma(s, g, l || k || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : Q("invalid " + g + " tween value: " + b[g]) : (c = new ma(s, g, k, l - k, c, 0, g, j !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = na(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
            return c
        }, i.setRatio = function(a) {
            var b, c, d, e = this._firstPT,
                f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; e;) {
                        if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                            if (1 === e.type)
                                if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                        else e.t[e.p] = b + e.xs0;
                        e = e._next
                    } else
                    for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
            else
                for (; e;) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), e = e._next
        }, i._enableTransforms = function(a) {
            this._transform = this._transform || Ea(this._target, e, !0), this._transformType = this._transform.svg && sa || !a && 3 !== this._transformType ? 2 : 3
        };
        var Ma = function() {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        i._addLazySet = function(a, b, c) {
            var d = this._firstPT = new ma(a, b, 0, 0, this._firstPT, 2);
            d.e = c, d.setRatio = Ma, d.data = this
        }, i._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
        }, i._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b) f[d] = b[d];
                f.opacity = 1, f.autoAlpha && (f.visibility = 1)
            }
            return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
        };
        var Na = function(a, b, c) {
            var d, e, f, g;
            if (a.slice)
                for (e = a.length; --e > -1;) Na(a[e], b, c);
            else
                for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Na(f, b, c)
        };
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h = b.to(a, c, d),
                i = [h],
                j = [],
                k = [],
                l = [],
                m = b._internals.reservedProps;
            for (a = h._targets || h.target, Na(a, j, l), h.render(c, !0), Na(a, k), h.render(0, !0), h._enabled(!0), e = l.length; --e > -1;)
                if (f = Z(l[e], j[e], k[e]), f.firstMPT) {
                    f = f.difs;
                    for (g in d) m[g] && (f[g] = d[g]);
                    i.push(b.to(l[e], c, f))
                }
            return i
        }, a.activate([g]), g
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
    }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(a) {
    "use strict";
    var b = a.GreenSockGlobals || a,
        c = function(a) {
            var c, d = a.split("."),
                e = b;
            for (c = 0; d.length > c; c++) e[d[c]] = e = e[d[c]] || {};
            return e
        },
        d = c("com.greensock.utils"),
        e = function(a) {
            var b = a.nodeType,
                c = "";
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        },
        f = document,
        g = f.defaultView ? f.defaultView.getComputedStyle : function() {},
        h = /([A-Z])/g,
        i = function(a, b, c, d) {
            var e;
            return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0
        },
        j = function(a) {
            return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
        },
        k = function(a) {
            var b, c, d, e = [],
                f = a.length;
            for (b = 0; f > b; b++)
                if (c = a[b], j(c))
                    for (d = c.length, d = 0; c.length > d; d++) e.push(c[d]);
                else e.push(c);
            return e
        },
        l = ")eefec303079ad17405c",
        m = /(?:<br>|<br\/>|<br \/>)/gi,
        n = f.all && !f.addEventListener,
        o = "<div style='position:relative;display:inline-block;" + (n ? "*display:inline;*zoom:1;'" : "'"),
        p = function(a) {
            a = a || "";
            var b = -1 !== a.indexOf("++"),
                c = 1;
            return b && (a = a.split("++").join("")),
                function() {
                    return o + (a ? " class='" + a + (b ? c++ : "") + "'>" : ">")
                }
        },
        q = d.SplitText = b.SplitText = function(a, b) {
            if ("string" == typeof a && (a = q.selector(a)), !a) throw "cannot split a null element.";
            this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b)
        },
        r = function(a, b, c) {
            var d = a.nodeType;
            if (1 === d || 9 === d || 11 === d)
                for (a = a.firstChild; a; a = a.nextSibling) r(a, b, c);
            else(3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c))
        },
        s = function(a, b) {
            for (var c = b.length; --c > -1;) a.push(b[c])
        },
        t = function(a, b, c, d, h) {
            m.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(m, l));
            var j, k, n, o, q, t, u, v, w, x, y, z, A, B, C = e(a),
                D = b.type || b.split || "chars,words,lines",
                E = -1 !== D.indexOf("lines") ? [] : null,
                F = -1 !== D.indexOf("words"),
                G = -1 !== D.indexOf("chars"),
                H = "absolute" === b.position || b.absolute === !0,
                I = H ? "&#173; " : " ",
                J = -999,
                K = g(a),
                L = i(a, "paddingLeft", K),
                M = i(a, "borderBottomWidth", K) + i(a, "borderTopWidth", K),
                N = i(a, "borderLeftWidth", K) + i(a, "borderRightWidth", K),
                O = i(a, "paddingTop", K) + i(a, "paddingBottom", K),
                P = i(a, "paddingLeft", K) + i(a, "paddingRight", K),
                Q = i(a, "textAlign", K, !0),
                R = a.clientHeight,
                S = a.clientWidth,
                T = "</div>",
                U = p(b.wordsClass),
                V = p(b.charsClass),
                W = -1 !== (b.linesClass || "").indexOf("++"),
                X = b.linesClass,
                Y = -1 !== C.indexOf("<"),
                Z = !0,
                $ = [],
                _ = [],
                aa = [];
            for (W && (X = X.split("++").join("")), Y && (C = C.split("<").join("{{LT}}")), j = C.length, o = U(), q = 0; j > q; q++)
                if (u = C.charAt(q), ")" === u && C.substr(q, 20) === l) o += (Z ? T : "") + "<BR/>", Z = !1, q !== j - 20 && C.substr(q + 20, 20) !== l && (o += " " + U(), Z = !0), q += 19;
                else if (" " === u && " " !== C.charAt(q - 1) && q !== j - 1 && C.substr(q - 20, 20) !== l) {
                    for (o += Z ? T : "", Z = !1;
                         " " === C.charAt(q + 1);) o += I, q++;
                    (")" !== C.charAt(q + 1) || C.substr(q + 1, 20) !== l) && (o += I + U(), Z = !0)
                } else o += G && " " !== u ? V() + u + "</div>" : u;
            for (a.innerHTML = o + (Z ? T : ""), Y && r(a, "{{LT}}", "<"), t = a.getElementsByTagName("*"), j = t.length, v = [], q = 0; j > q; q++) v[q] = t[q];
            if (E || H)
                for (q = 0; j > q; q++) w = v[q], n = w.parentNode === a, (n || H || G && !F) && (x = w.offsetTop, E && n && x !== J && "BR" !== w.nodeName && (k = [], E.push(k), J = x), H && (w._x = w.offsetLeft, w._y = x, w._w = w.offsetWidth, w._h = w.offsetHeight), E && (F !== n && G || (k.push(w), w._x -= L), n && q && (v[q - 1]._wordEnd = !0), "BR" === w.nodeName && w.nextSibling && "BR" === w.nextSibling.nodeName && E.push([])));
            for (q = 0; j > q; q++) w = v[q], n = w.parentNode === a, "BR" !== w.nodeName ? (H && (z = w.style, F || n || (w._x += w.parentNode._x, w._y += w.parentNode._y), z.left = w._x + "px", z.top = w._y + "px", z.position = "absolute", z.display = "block", z.width = w._w + 1 + "px", z.height = w._h + "px"), F ? n && "" !== w.innerHTML ? _.push(w) : G && $.push(w) : n ? (a.removeChild(w), v.splice(q--, 1), j--) : !n && G && (x = !E && !H && w.nextSibling, a.appendChild(w), x || a.appendChild(f.createTextNode(" ")), $.push(w))) : E || H ? (a.removeChild(w), v.splice(q--, 1), j--) : F || a.appendChild(w);
            if (E) {
                for (H && (y = f.createElement("div"), a.appendChild(y), A = y.offsetWidth + "px", x = y.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(y)), z = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;) a.removeChild(a.firstChild);
                for (B = !H || !F && !G, q = 0; E.length > q; q++) {
                    for (k = E[q], y = f.createElement("div"), y.style.cssText = "display:block;text-align:" + Q + ";position:" + (H ? "absolute;" : "relative;"), X && (y.className = X + (W ? q + 1 : "")), aa.push(y), j = k.length, t = 0; j > t; t++) "BR" !== k[t].nodeName && (w = k[t], y.appendChild(w), B && (w._wordEnd || F) && y.appendChild(f.createTextNode(" ")), H && (0 === t && (y.style.top = w._y + "px", y.style.left = L + x + "px"), w.style.top = "0px", x && (w.style.left = w._x - x + "px")));
                    0 === j && (y.innerHTML = "&nbsp;"), F || G || (y.innerHTML = e(y).split(String.fromCharCode(160)).join(" ")), H && (y.style.width = A, y.style.height = w._h + "px"), a.appendChild(y)
                }
                a.style.cssText = z
            }
            H && (R > a.clientHeight && (a.style.height = R - O + "px", R > a.clientHeight && (a.style.height = R + M + "px")), S > a.clientWidth && (a.style.width = S - P + "px", S > a.clientWidth && (a.style.width = S + N + "px"))), s(c, $), s(d, _), s(h, aa)
        },
        u = q.prototype;
    u.split = function(a) {
        this.isSplit && this.revert(), this.vars = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var b = this.elements.length; --b > -1;) this._originals[b] = this.elements[b].innerHTML, t(this.elements[b], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, u.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var a = this._originals.length; --a > -1;) this.elements[a].innerHTML = this._originals[a];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, q.selector = a.$ || a.jQuery || function(b) {
        var c = a.$ || a.jQuery;
        return c ? (q.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
    }, q.version = "0.3.3"
}(_gsScope),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (module.exports = b())
    }("SplitText");
try {
    window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
} catch (e) {}
if (1 == window.tplogs) try {
    console.groupEnd()
} catch (e) {}! function(a, b) {
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    }, a.expr[":"].uncached = function(b) {
        var c = document.createElement("img");
        return c.src = b.src, a(b).is('img[src!=""]') && !c.complete
    }, a.fn.waitForImages = function(b, c, d) {
        if (a.isPlainObject(arguments[0]) && (c = b.each, d = b.waitForAll, b = b.finished), b = b || a.noop, c = c || a.noop, d = !!d, !a.isFunction(b) || !a.isFunction(c)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var e = a(this),
                f = [];
            if (d) {
                var g = a.waitForImages.hasImageProperties || [],
                    h = /url\((['"]?)(.*?)\1\)/g;
                e.find("*").each(function() {
                    var b = a(this);
                    b.is("img:uncached") && f.push({
                        src: b.attr("src"),
                        element: b[0]
                    }), a.each(g, function(a, c) {
                        var d = b.css(c);
                        if (!d) return !0;
                        for (var e; e = h.exec(d);) f.push({
                            src: e[2],
                            element: b[0]
                        })
                    })
                })
            } else e.find("img:uncached").each(function() {
                f.push({
                    src: this.src,
                    element: this
                })
            });
            var i = f.length,
                j = 0;
            0 == i && b.call(e[0]), a.each(f, function(d, f) {
                var g = new Image;
                a(g).bind("load error", function(a) {
                    return j++, c.call(f.element, j, i, "load" == a.type), j == i ? (b.call(e[0]), !1) : void 0
                }), g.src = f.src
            })
        })
    }
}(jQuery);