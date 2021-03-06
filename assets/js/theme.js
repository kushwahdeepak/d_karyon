"use strict";
var scriptData = scriptData || {
    navbarHeight: 90,
    navbarScrolled: 70,
    navbarScrolledPoint: 200,
    scrollFinishedMessage: "No more items to load.",
    hoverMenu: {
        hoverActive: !1,
        hoverDelay: 1,
        hoverFadeDelay: 200
    },
    siteLoader: "on"
};
window.paceOptions = {
    startOnPageLoad: "on" === scriptData.siteLoader,
    restartOnRequestAfter: !1
};
var initScrollr = !1;
jQuery(document).ready(function(a) {
    function b() {
        a(".magnific").magnificPopup({
            type: "image",
            removalDelay: 300,
            mainClass: "mfp-fade"
        }), a(".magnific-youtube, .magnific-vimeo, .magnific-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 300,
            preloader: !1,
            fixedContentPos: !1
        }), a(".magnific-gallery").each(function(b, c) {
            var d = a(this),
                e = a(this).data("links").split(","),
                f = "",
                g = [];
            void 0 !== a(this).data("captions") && (f = a(this).data("captions").split(","));
            for (var h = 0; h < e.length; h++) g.push({
                src: e[h],
                title: f[h]
            });
            d.magnificPopup({
                mainClass: "mfp-fade",
                items: g,
                gallery: {
                    enabled: !0,
                    tPrev: a(this).data("prev-text"),
                    tNext: a(this).data("next-text")
                },
                type: "image"
            })
        }), a(".magnific-all").each(function() {
            var b = a(this),
                c = b.find(".image-all"),
                d = [];
            c.each(function() {
                var b = a(this),
                    c = "",
                    e = "image";
                (b.hasClass("magnific-youtube") || b.hasClass("magnific-vimeo")) && (e = "iframe"), void 0 !== b.attr("title") && (c = b.attr("title"));
                var f = {
                    src: b.attr("href"),
                    type: e,
                    title: c
                };
                d.push(f)
            }), c.magnificPopup({
                mainClass: "mfp-fade",
                items: d,
                gallery: {
                    enabled: !0,
                    tPrev: a(this).data("prev-text"),
                    tNext: a(this).data("next-text")
                },
                type: "image",
                callbacks: {
                    beforeOpen: function() {
                        var a = c.index(this.st.el); - 1 !== a && this.goTo(a)
                    }
                }
            })
        }), a(".magnific-audio").each(function(b, c) {
            var d = a(this),
                e = a(this).attr("href");
            d.magnificPopup({
                items: {
                    src: '<audio controls="" preload="auto"><source src="' + e + '"></audio>',
                    type: "inline"
                },
                callbacks: {
                    open: function() {
                        a(this.currItem.inlineElement).mediaelementplayer()
                    }
                },
                closeBtnInside: !0
            })
        }), a(".product-gallery").magnificPopup({
            delegate: "li:not(.clone) figcaption a",
            type: "image",
            mainClass: "mfp-fade",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0
            }
        })
    }

    function c(b) {
        var c = a(b).closest("div.isotope"),
            d = a(b),
            e = "false" === d.attr("data-flex-slideshow") ? !1 : !0,
            f = d.attr("data-flex-animation") ? d.attr("data-flex-animation") : "slide",
            g = d.attr("data-flex-speed") ? d.attr("data-flex-speed") : 7e3,
            h = d.attr("data-flex-sliderdirection") ? d.attr("data-flex-sliderdirection") : "horizontal",
            i = d.attr("data-flex-duration") ? d.attr("data-flex-duration") : 600,
            j = "hide" === d.attr("data-flex-directions") ? !1 : !0,
            k = "fancy" === d.attr("data-flex-directions-type") ? "flex-directions-fancy" : "",
            l = "outside" === d.attr("data-flex-directions-position") ? "flex-directions-outside" : "",
            m = "thumbnails" === d.attr("data-flex-controls") ? "thumbnails" : "hide" === d.attr("data-flex-controls") ? !1 : !0,
            n = "inside" === d.attr("data-flex-controlsposition") ? "flex-controls-inside" : "flex-controls-outside",
            o = d.attr("data-flex-controlsalign") ? "flex-controls-" + d.attr("data-flex-controlsalign") : "flex-controls-center",
            p = "false" === d.attr("data-flex-reverse") ? !1 : !0,
            q = "false" === d.attr("data-flex-animationloop") ? !1 : !0,
            r = d.attr("data-flex-itemwidth") ? parseInt(d.attr("data-flex-itemwidth"), 10) : 0,
            s = d.attr("data-flex-itemmax") ? parseInt(d.attr("data-flex-itemmax"), 0) : 0,
            t = d.attr("data-flex-itemmin") ? parseInt(d.attr("data-flex-itemmin"), 0) : 0,
            u = "top" === d.attr("data-flex-captionvertical") ? "flex-caption-top" : "",
            v = "alternate" === d.attr("data-flex-captionhorizontal") ? "flex-caption-alternate" : "flex-caption-" + d.attr("data-flex-captionhorizontal");
        d.addClass(n).addClass(o).addClass(k).addClass(l).addClass(v).addClass(u), d.flexslider({
            slideshow: e,
            animation: f,
            direction: h,
            slideshowSpeed: parseInt(g),
            animationSpeed: parseInt(i),
            itemWidth: r,
            minItems: t,
            maxItems: s,
            controlNav: m,
            directionNav: j,
            prevText: "",
            nextText: "",
            smoothHeight: !0,
            animationLoop: q,
            reverse: p,
            useCSS: !1,
            after: function(a) {
                c.length > 0 && c.isotope("reLayout")
            }
        })
    }

    function d() {
        a(".carousel").find(".active .flexslider[id]").each(function() {
            a(this).hasClass("triggered") || (a(this).addClass("triggered"), c(this))
        })
    }

    function e(a, b, c) {
        var d = "up" === b ? -(a.height() / 2) : 0,
            e = parseInt(scriptData.navbarHeight);
        c.length && c.hasClass("navbar-sticky") && c.hasClass("navbar-scrolled") && (e = parseInt(scriptData.navbarScrolled));
        var f = a.offset().top,
            g = c.length ? c.position().top : 0;
        return c.length && c.hasClass("navbar-sticky") && f >= g + e && (d += e), d
    }

    function f(a, b, c) {
        a.length && b.parent().removeClass("active current-menu-item").end().filter('[href$="' + c.id + '"]').parent().addClass("active current-menu-item")
    }

    function g(b) {
        var c = a(b),
            d = 0,
            e = c.offset().top,
            f = parseInt(scriptData.navbarHeight);
        if (void 0 !== l && l.hasClass("navbar-sticky") && e >= m + f) {
            var g = parseInt(scriptData.navbarScrolledPoint),
                h = parseInt(scriptData.navbarHeight),
                i = parseInt(scriptData.navbarScrolled);
            d = e >= g ? i : h
        }
        a.scrollTo(c, 800, {
            axis: "y",
            offset: -d + 1
        })
    }

    function h() {
        a(".os-animation").each(function() {
            var b = a(this),
                c = b.attr("data-os-animation"),
                d = b.attr("data-os-animation-delay");
            b.css("-webkit-animation-delay", d), b.css("-moz-animation-delay", d), b.css("animation-delay", d), b.waypoint(function() {
                a(this).addClass("animated").addClass(c)
            }, {
                triggerOnce: !0,
                offset: "80%"
            })
        })
    }
    /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) ? (a('body:not([class*="oxy-agent-"])').addClass("oxy-agent-"), /iPhone/i.test(navigator.userAgent || navigator.vendor || window.opera) && a("body").not(".oxy-agent-iphone").addClass("oxy-agent-iphone"), /iPad/i.test(navigator.userAgent || navigator.vendor || window.opera) && a("body").not(".oxy-agent-ipad").addClass("oxy-agent-ipad")) : initScrollr = !0, b(), a(".flexslider[id]").filter(function() {
        return a(this).parents(".carousel").length < 1
    }).each(function() {
        var b = this;
        a(this).imagesLoaded().done(function(a) {
            c(b)
        })
    }), a('[data-toggle="tooltip"]').tooltip(), a(".carousel").carousel({
        interval: 7e3
    }), a(".carousel").on("slid", function(a) {
        setTimeout(function() {
            d()
        }, 0)
    }), d(), a(".chart").each(function() {
        var b = a(this);
        b.waypoint(function() {
            var b = a(this);
            b.easyPieChart({
                barColor: b.attr("data-bar-color"),
                trackColor: b.attr("data-track-color"),
                lineWidth: b.attr("data-line-width"),
                scaleColor: !1,
                animate: 1e3,
                size: b.attr("data-size"),
                lineCap: "square"
            })
        }, {
            triggerOnce: !0,
            offset: "bottom-in-view"
        }), b.css("left", "50%"), b.css("margin-left", -b.attr("data-size") / 2)
    }), a(".counter").each(function() {
        var b = a(this);
        b.waypoint(function() {
            b.find(".odometer").html(b.attr("data-count"))
        }, {
            triggerOnce: !0,
            offset: "bottom-in-view"
        })
    }), a("[data-animation]").each(function() {
        var b = a(this);
        b.on("mouseenter", function() {
            b.addClass("animated " + b.attr("data-animation"))
        }), b.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(a) {
            b.removeClass("animated " + b.attr("data-animation"))
        })
    }), a(".isotope").each(function(b, c) {
        var d = a(c);
        d.imagesLoaded().done(function(a) {
            setTimeout(function() {
                d.isotope(), setTimeout(function() {
                    d.removeClass("no-transition")
                }, 500)
            }, 100)
        })
    });
    var i = a(".isotope-filters");
    i.on("click", "a", function(b) {
        var c = a(this),
            d = (c.data("filter"), c.closest(".isotope-filters"));
        return c.hasClass("selected") ? !1 : (d.find("a").removeClass("active"), c.addClass("active"), d.next().find(".isotope").addBack(".isotope").isotope({
            filter: c.attr("data-filter")
        }), !1)
    }), a(window).smartresize(function() {
        a(".isotope").isotope("reLayout")
    }), a("[data-iconcolor]").each(function() {
        var b = a(this),
            c = a(b).css("background-color"),
            d = a(b).find("i").css("color");
        b.on("mouseenter", function() {
            b.css("background-color", b.attr("data-iconcolor")), b.find("i").css("color", "#ffffff"), b.parents(".social-icons").hasClass("social-simple") && b.find("i").css("color", b.attr("data-iconcolor"))
        }), b.on("mouseleave", function() {
            b.css("background-color", c), b.find("i").css("color", d), b.parents(".social-icons").hasClass("social-simple") && b.find("i").css("color", d)
        })
    });
    for (var j = a(".video-wrapper iframe"), k = 0; k < j.length; k++) - 1 === j[k].src.indexOf("?") ? j[k].src += "?wmode=opaque" : j[k].src += "&wmode=opaque";
    a(".accordion-body").on("hide", function() {
        a(this).parent(".accordion-group").find(".accordion-toggle").addClass("collapsed")
    }), a('[class*="oxy-agent-"] .section-fullheight').removeClass("section-fullheight").css("min-height", a(window).height()).find(".container, .container-fullwidth").css("min-height", a(window).height()).find('.row, [class*="col-md"]').css("position", "static"), a("html.ie8, html.ie9").find("input, textarea").placeholder(), a(".video-wrapper").fitVids(), a("audio").mediaelementplayer({
        pauseOtherPlayers: !1,
        enableAutosize: !1,
        setDimensions: !1
    }), a(".section-background-video").mediaelementplayer({
        pauseOtherPlayers: !1,
        enableAutosize: !1,
        setDimensions: !1,
        success: function(b, c, d) {
            var e = a(b).attr("poster");
            "undefined" != typeof e && e !== !1 && a(b).parent().css("background-image", "url('" + a(b).attr("poster") + "')");
            var f = a(b).closest("section");
            b.addEventListener("loadeddata", function() {
                var c = f.outerHeight(),
                    e = f.outerWidth(),
                    g = d.media.videoHeight,
                    h = d.media.videoWidth,
                    i = g / h * 100 + "%",
                    j = e / h,
                    k = g * j;
                a(b).parent().css("padding-bottom", i), k >= c ? a(b).css("top", (c - g * j) / 2) : a(b).css("background-image", ""), a(b).show(), a(window).smartresize(function() {
                    c = f.outerHeight(), e = f.outerWidth(), j = e / h, k = g * j, k >= c ? a(b).css("top", (c - g * j) / 2) : a(b).css("background-image", "")
                })
            }), a('body:not([class*="oxy-agent-"])').length || a(b).show(), a("body").hasClass("oxy-agent-ipad") && f.on("click", function(a) {
                b.paused ? b.play() : b.pause()
            })
        }
    }), a("[data-bgcolor]").each(function() {
        var b = a(this),
            c = b.attr("data-bgcolor");
        b.find(".box-inner").css("background-color", c)
    }), a(".countdown").each(function() {
        var b = a(this),
            c = b.attr("data-date");
        b.countdown(c).on("update.countdown", function(b) {
            a(this).find(".counter-days").html(b.offset.totalDays), a(this).find(".counter-hours").html(b.offset.hours), a(this).find(".counter-minutes").html(b.offset.minutes), a(this).find(".counter-seconds").html(b.offset.seconds)
        })
    }), a("body.woo-cart-popup").on("click", ".mini-cart-overview a ", function() {
        var b = a(this);
        a(".mini-cart-underlay").toggleClass("cart-open"), b.attr("href", "#mini-cart-container"), a("#mini-cart-container").toggleClass("active")
    }), a("select").not(".country_to_state, #billing_state, #shipping_state, #calc_shipping_state").wrap('<div class="select-wrap">');
    var l = a("#masthead"),
        m = a("#masthead").position();
    m = void 0 === m ? 0 : m.top;
    var n = a(".navbar").find("a"),
        o = n.map(function() {
            var b = this.hash;
            return b && a(b).length ? b : void 0
        });
    if (o.length) {
        var p = [];
        a("body").find("section").each(function() {
            this.id && p.push(this)
        }), p.length && (n.parent().removeClass("active current-menu-item"), a.each(p, function(b, c) {
            var d = a(c);
            d.waypoint({
                offset: function() {
                    return e(d, "up", l)
                },
                handler: function(a) {
                    "up" === a && f(o, n, c)
                }
            }), d.waypoint({
                offset: function() {
                    return e(d, "down", l)
                },
                handler: function(a) {
                    "down" === a && f(o, n, c)
                }
            })
        }))
    }
    a(".navbar a, a.scroll-to-id").on("click", function(a) {
        this.hash && (g(this.hash), a.preventDefault())
    }), a(window).on("load", function() {
        window.location.hash && g(window.location.hash)
    });
    var q = a(".portfolio");
    q.each(function() {
        var b = a(this);
        b.find(".portfolio-item").css("display", "block"), b.hasClass("portfolio-hex") && (b.find("figure").append('<div class="hex-right"></div><div class="hex-left"></div>'), b.find(".more, .link").addClass("hex-alt")), b.hasClass("portfolio-round") && b.find("img").addClass("img-circle"), b.hasClass("portfolio-shadows") && b.hasClass("portfolio-hex") && b.find("figure").wrap('<div class="flat-shadow">'), b.hasClass("portfolio-shadows") && b.hasClass("portfolio-round") && b.find("figure").wrap('<div class="flat-shadow">'), b.hasClass("portfolio-shadows") && b.hasClass("portfolio-rect") && b.find("figure").wrap('<div class="flat-shadow flat-rect">'), b.hasClass("portfolio-shadows") && b.hasClass("portfolio-square") && b.find("figure").wrap('<div class="flat-shadow flat-square">')
    }), initScrollr === !0 && skrollr.init({
        forceHeight: !1
    }), a(".box-hex").append('<div class="hex-right"></div><div class="hex-left"></div>'), a("#wp-calendar").addClass("table"), a(".top-bar, #masthead").find(".widget_search form").wrap('<div class="top-search">'), a(".top-search").append('<i class="fa fa-search search-trigger navbar-text"></i>'), a("body").on("click", ".search-trigger", function() {
        a(".top-search").toggleClass("active"), a(".search-trigger").toggleClass("fa-minus"), a(".top-search").find("form").fadeToggle(150)
    });
    var r = a(".navbar-sticky");
    r.waypoint("sticky", {
        stuckClass: "navbar-stuck"
    });
    var s = a("#masthead.navbar-sticky");
    if (s.length && s.hasClass("navbar-sticky")) {
        var t = s.position().top;
        a("body").waypoint({
            offset: -(parseInt(scriptData.navbarScrolledPoint) + t),
            handler: function(b) {
                s.toggleClass("navbar-scrolled"), s.one("MSTransitionEnd webkitTransitionEnd oTransitionEnd transitionend", function() {
                    s.hasClass("refreshing") || a.waypoints("refresh"), s.toggleClass("refreshing")
                })
            }
        })
    }
    a("body").waypoint({
        offset: -200,
        handler: function(b) {
            "down" === b ? a(".go-top").css("bottom", "12px").css("opacity", "1") : a(".go-top").css("bottom", "-44px").css("opacity", "0")
        }
    }), a(".go-top").click(function(b) {
        b.preventDefault(), a("html, body").animate({
            scrollTop: 0
        }, 300)
    });
    var u = a("div.isotope-infinite");
    u.length > 0 && u.infinitescroll({
        navSelector: "div.infinite-scroll",
        nextSelector: "div.infinite-scroll a",
        itemSelector: "div.isotope-infinite .infinite-item",
        contentSelector: "div.isotope-infinite",
        loading: {
            finishedMsg: scriptData.scrollFinishedMessage,
            msgText: scriptData.scrollTextMessage
        }
    }, function(c) {
        a(c).each(function(b, c) {
            if (a(c).find("article").hasClass("format-video") && a(c).find(".video-wrapper").fitVids(), a(c).find("article").hasClass("format-audio") && a(c).find("audio").mediaelementplayer({
                    pauseOtherPlayers: !1,
                    enableAutosize: !1,
                    setDimensions: !1
                }), a(c).hasClass("portfolio-item")) {
                var d = a(c).closest(".portfolio");
                a(c).css("display", "block"), a(d).hasClass("portfolio-hex") && (a(c).find("figure").append('<div class="hex-right"></div><div class="hex-left"></div>'), a(c).find(".more, .link").addClass("hex-alt")), a(d).hasClass("portfolio-round") && a(c).find("img").addClass("img-circle"), a(d).hasClass("portfolio-shadows") && a(d).hasClass("portfolio-hex") && a(c).find("figure").wrap('<div class="flat-shadow">'), a(d).hasClass("portfolio-shadows") && a(d).hasClass("portfolio-round") && a(c).find("figure").wrap('<div class="flat-shadow">'), a(d).hasClass("portfolio-shadows") && a(d).hasClass("portfolio-rect") && a(c).find("figure").wrap('<div class="flat-shadow flat-rect">'), a(d).hasClass("portfolio-shadows") && a(d).hasClass("portfolio-square") && a(c).find("figure").wrap('<div class="flat-shadow flat-square">')
            }
        }), u.isotope("insert", a(c), function() {
            u.isotope("reLayout"), b()
        })
    }), scriptData.hoverMenu.hoverActive === !0 && (a('body:not([class*="oxy-agent"])').length && a(".navbar .dropdown").hover(function() {
        a(this).find(".dropdown-menu").first().stop(!0, !0).delay(scriptData.hoverMenu.hoverDelay).fadeIn(parseInt(scriptData.hoverMenu.hoverFadeDelay))
    }, function() {
        a(this).find(".dropdown-menu").first().stop(!0, !0).delay(scriptData.hoverMenu.hoverDelay).fadeOut(parseInt(scriptData.hoverMenu.hoverFadeDelay))
    }), a("#masthead .nav li.dropdown a").on("click", function() {
        var b = a(this);
        b.parent().hasClass("open") && void 0 !== b.attr("data-link") && (window.location = b.attr("data-link"))
    })), "on" === scriptData.siteLoader ? Pace.on("done", function() {
        setTimeout(function() {
            h()
        }, 500)
    }) : h(), a("body").on("country_to_state_changed", function(b, c) {
        a(".input-text").addClass("form-control")
    })
});