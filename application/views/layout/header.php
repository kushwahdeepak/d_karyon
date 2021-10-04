<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Karyon Solutions | Building the Nucleus</title>
    <link rel="icon" type="image/x-icon" href="<?php echo base_url('assets/images/favicons/favicon.ico');?>">
    <link rel="icon" type="image/png" href="<?php echo base_url('assets/images/favicons/favicon.png'); ?>">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo base_url('assets/images/favicons/apple-touch-icon-114x114-precomposed.png'); ?>">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo base_url('assets/images/favicons/apple-touch-icon-72x72-precomposed.png'); ?>">
    <link rel="apple-touch-icon-precomposed" href="<?php echo base_url('assets/images/favicons/apple-touch-icon-60x60-precomposed.png'); ?>">
    <link href="http://fonts.googleapis.com/css1219.css?family=Lato:100,300,400,700,900,400italic" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="<?php echo base_url('assets/css/bootstrap.min.css');?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/css/theme.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/css/color-defaults.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/css/swatch-red-white.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/css/swatch-white-red.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/css/fonts.css'); ?>" media="screen">
    <link rel="stylesheet" href="<?php echo base_url('assets/css/demo.css'); ?>">

    <!-- Start of Async Drift Code -->
    <script>
        !function() {
            var t;
            if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
                t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                t.factory = function(e) {
                    return function() {
                        var n;
                        return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
                    };
                }, t.methods.forEach(function(e) {
                t[e] = t.factory(e);
            }), t.load = function(t) {
                var e, n, o, i;
                e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
                    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",
                    n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
            });
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('hsu3xum3ybti');
    </script>
    <!-- End of Async Drift Code -->
</head>

<body class="pace-on pace-dot">
<div class="pace-overlay"></div>

<header id="masthead" class="navbar navbar-sticky swatch-red-white" role="banner">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".main-navbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="<?php echo site_url('homeController/index'); ?>" class="navbar-brand">
                <img src="<?php echo base_url('assets/images/logo 2.png') ;?>" alt="One of the best themes ever">
            </a>
        </div>

        <nav class="collapse navbar-collapse main-navbar" role="navigation">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="<?php echo site_url('homeController'); ?>">Home</a>
                </li>
                <li>
                    <a href="<?php echo site_url('homeController/about_us'); ?>">About</a>
                </li>
                <li>
                    <a href="<?php echo site_url('homeController/services'); ?>">Services</a>
                </li>
                <li>
                    <a href="<?php echo site_url('homeController/portfolio'); ?>">Portfolio</a>
                </li>
                <li>
                  <a href="<?php echo site_url('homeController/blog'); ?>">Blog</a>
                </li>
                <li>
                    <a href="<?php echo site_url('homeController/contact'); ?>">Contact</a>
                </li>
            </ul>
        </nav>

    </div>
</header>