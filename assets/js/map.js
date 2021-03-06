window.map = {
    mapType: "ROADMAP",
    mapZoom: 15,
    mapStyle: "flat",
    mapScroll: !1,
    marker: "show",
    lat: "51.5171",
    lng: "0.1062",
    markerURL: "assets/images/marker.png"
}, jQuery(document).ready(function(a) {
    "use strict";
    a(".google-map").each(function() {
        function b(a) {
            function b(a) {
                null !== i.getAnimation() ? i.setAnimation(null) : i.setAnimation(google.maps.Animation.BOUNCE), k && k.open(e, a)
            }
            var e, g = [{
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#f1c40f"
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#f1c40f"
                    }]
                }, {
                    featureType: "landscape",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ecf0f1"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#73bfc1"
                    }]
                }, {}, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#2ecc71"
                    }]
                }, {
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    elementType: "geometry",
                    stylers: [{
                        weight: .9
                    }, {
                        visibility: "off"
                    }]
                }],
                h = {
                    zoom: parseInt(d.mapZoom, 10),
                    center: a,
                    scrollwheel: d.mapScroll,
                    draggable: d.mapDraggable,
                    mapTypeId: google.maps.MapTypeId[d.mapType]
                };
            e = new google.maps.Map(c[0], h);
            var i;
            if ("flat" === d.mapStyle && e.setOptions({
                    styles: g
                }), "show" === d.marker) {
                var j = {
                    url: d.markerURL,
                    size: new google.maps.Size(38, 82),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(12, 50)
                };
                if (i = new f({
                        position: a,
                        icon: j,
                        map: e
                    }), void 0 !== d.label) var k = new google.maps.InfoWindow({
                    content: d.label
                });
                google.maps.event.addListener(i, "click", function() {
                    b(this)
                })
            }
        }
        var c = a(this),
            d = window[c.attr("id")],
            e = function(a) {
                this.setValues(a), this.div = document.createElement("div"), this.div.className = "map-marker-label fadeIn animated"
            };
        e.prototype = a.extend(new google.maps.OverlayView, {
            onAdd: function() {
                this.getPanes().overlayImage.appendChild(this.div);
                var a = this;
                this.listeners = [google.maps.event.addListener(this, "position_changed", function() {
                    a.draw()
                }), google.maps.event.addListener(this, "text_changed", function() {
                    a.draw()
                }), google.maps.event.addListener(this, "zindex_changed", function() {
                    a.draw()
                })]
            },
            onRemove: function() {
                this.div.parentNode.removeChild(this.div);
                for (var a = 0, b = this.listeners.length; b > a; ++a) google.maps.event.removeListener(this.listeners[a])
            },
            draw: function() {
                var b, c, d = String(this.get("text")),
                    e = this.marker.icon.anchor,
                    f = this.getProjection().fromLatLngToDivPixel(this.get("position"));
                this.div.innerHTML = d, this.div.style.position = "relative", b = a("div.map-marker-label").outerHeight(), c = a("div.map-marker-label").outerWidth(), this.div.style.left = f.x - c / 2 + "px", this.div.style.top = f.y - e.y - b - 10 + "px"
            }
        });
        var f = function(a) {
            google.maps.Marker.apply(this, arguments), a.label && (this.MarkerLabel = new e({
                map: this.map,
                marker: this,
                text: a.label
            }), this.MarkerLabel.bindTo("position", this, "position"))
        };
        if (f.prototype = a.extend(new google.maps.Marker, {
                setMap: function() {
                    google.maps.Marker.prototype.setMap.apply(this, arguments), this.MarkerLabel && this.MarkerLabel.setMap.apply(this.MarkerLabel, arguments)
                }
            }), void 0 !== d.address) {
            var g = new google.maps.Geocoder;
            g.geocode({
                address: d.address
            }, function(a, c) {
                c === google.maps.GeocoderStatus.OK ? b(a[0].geometry.location) : alert("Geocode was not successful for the following reason: " + c)
            })
        } else void 0 !== d.lat && void 0 !== d.lng && b(new google.maps.LatLng(d.lat, d.lng))
    })
});