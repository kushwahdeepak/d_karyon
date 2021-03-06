"use strict";
! function(a) {
    function b(b, c, d) {
        a(b).removeClass(function(a, b) {
            var d = new RegExp("\\b" + c + "\\S+", "g");
            return (b.match(d) || []).join(" ")
        }), a(b).addClass(d)
    }
    a.cookie = function(b, c, d) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(c)) || null === c || void 0 === c)) {
            if (d = a.extend({}, d), (null === c || void 0 === c) && (d.expires = -1), "number" == typeof d.expires) {
                var e = d.expires,
                    f = d.expires = new Date;
                f.setDate(f.getDate() + e)
            }
            return c = String(c), document.cookie = [encodeURIComponent(b), "=", d.raw ? c : encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("")
        }
        d = c || {};
        for (var g, h = d.raw ? function(a) {
            return a
        } : decodeURIComponent, i = document.cookie.split("; "), j = 0; g = i[j] && i[j].split("="); j++)
            if (h(g[0]) === b) return h(g[1] || "");
        return null
    }, a.expr[":"].hasClassStartingWith = function(a, b, c) {
        var d = new RegExp("\\b" + c[3]);
        return d.test(a.className)
    }, a(document).ready(function() {
        var c = a("#style-switcher");
        if (null == a.cookie("theme-swatch")) a.cookie("theme-swatch", "swatch-red-white", {
            path: "/",
            expires: 7
        }), a.cookie("theme-swatch-inverse", "swatch-white-red", {
            path: "/",
            expires: 7
        });
        else {
            var d = a.cookie("theme-swatch"),
                e = a.cookie("theme-swatch-inverse");
            a(":hasClassStartingWith('swatch-red')").not("#style-switcher :hasClassStartingWith('swatch-')").each(function() {
                b(this, "swatch-", d)
            }), a(":hasClassStartingWith('swatch-white')").not("#style-switcher :hasClassStartingWith('swatch-')").each(function() {
                b(this, "swatch-", e)
            })
        }
        null !== a.cookie("theme-layout") && b("body", "layout-", a.cookie("theme-layout")), c.find(".btn-switcher").click(function() {
            c.toggleClass("active")
        }), c.find(".colour-switch").click(function() {
            var c = a(this),
                d = c.data("swatch"),
                e = c.data("swatch-inverse");
            a(":hasClassStartingWith(" + a.cookie("theme-swatch") + ")").not("#style-switcher :hasClassStartingWith('swatch-')").each(function() {
                b(this, "swatch-", d)
            }), a(":hasClassStartingWith(" + a.cookie("theme-swatch-inverse") + ")").not("#style-switcher :hasClassStartingWith('swatch-')").each(function() {
                b(this, "swatch-", e)
            }), a.cookie("theme-swatch", d, {
                path: "/",
                expires: 7
            }), a.cookie("theme-swatch-inverse", e, {
                path: "/",
                expires: 7
            })
        }), c.find(".layout-switch").click(function() {
            var c = a(this),
                d = c.data("layout");
            b("body", "layout-", d), a.cookie("theme-layout", d, {
                path: "/",
                expires: 7
            })
        });
        var f = c.find(".handle");
        f.on("click", function(a) {
            c.toggleClass("open"), c.hasClass("open") ? c.animate({
                left: 0
            }, 400) : c.animate({
                left: -240
            }, 400), a.preventDefault()
        })
    })
}(jQuery);