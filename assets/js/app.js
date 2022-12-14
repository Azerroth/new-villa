function ownKeys(t, e) {
    var a, r = Object.keys(t);
    return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
    e && (a = a.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
    })),
    r.push.apply(r, a)),
    r
}
function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(a), !0).forEach(function(e) {
            _defineProperty(t, e, a[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
        })
    }
    return t
}
function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a,
    e
}
!function() {
    "use strict";
    var t, a, r, n;
    (function() {
        for (var a = document.querySelectorAll(".password-toggle"), e = 0; e < a.length; e++)
            !function(e) {
                var t = a[e].querySelector(".form-control");
                a[e].querySelector(".password-toggle-btn").addEventListener("click", function(e) {
                    "checkbox" === e.target.type && (e.target.checked ? t.type = "text" : t.type = "password")
                }, !1)
            }(e)
    }
    )(),
    function() {
        var e = document.querySelectorAll("[data-format]");
        if (0 !== e.length)
            for (var t = 0; t < e.length; t++) {
                var a = e[t].dataset.format
                  , r = e[t].dataset.blocks
                  , n = e[t].dataset.delimiter
                  , r = void 0 !== r ? r.split(" ").map(Number) : ""
                  , n = void 0 !== n ? n : " ";
                switch (a) {
                case "card":
                    new Cleave(e[t],{
                        creditCard: !0
                    });
                    break;
                case "cvc":
                    new Cleave(e[t],{
                        numeral: !0,
                        numeralIntegerScale: 3
                    });
                    break;
                case "date":
                    new Cleave(e[t],{
                        date: !0,
                        datePattern: ["m", "y"]
                    });
                    break;
                case "date-long":
                    new Cleave(e[t],{
                        date: !0,
                        delimiter: "-",
                        datePattern: ["Y", "m", "d"]
                    });
                    break;
                case "time":
                    new Cleave(e[t],{
                        time: !0,
                        datePattern: ["h", "m"]
                    });
                    break;
                case "custom":
                    new Cleave(e[t],{
                        delimiter: n,
                        blocks: r
                    });
                    break;
                default:
                    console.error("Sorry, your format " + a + " is not available. You can add it to the theme object method - inputFormatter in src/js/theme.js or choose one from the list of available formats: card, cvc, date, date-long, time or custom.")
                }
            }
    }(),
    window.addEventListener("load", function() {
        var e = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(e, function(t) {
            t.addEventListener("submit", function(e) {
                !1 === t.checkValidity() && (e.preventDefault(),
                e.stopPropagation()),
                t.classList.add("was-validated")
            }, !1)
        })
    }, !1),
    null != (a = document.querySelector(".navbar.fixed-top")) && (a.classList,
    t = function(e) {
        20 < e.currentTarget.pageYOffset ? a.classList.add("navbar-stuck") : a.classList.remove("navbar-stuck")
    }
    ,
    window.addEventListener("load", function(e) {
        t(e)
    }),
    window.addEventListener("scroll", function(e) {
        t(e)
    })),
    new SmoothScroll("[data-scroll]",{
        speed: 800,
        speedAsDuration: !0,
        offset: function(e, t) {
            return t.dataset.scrollOffset || 40
        },
        header: "[data-scroll-header]",
        updateURL: !1
    }),
    null != (n = document.querySelector(".btn-scroll-top")) && (r = parseInt(600, 10),
    window.addEventListener("scroll", function(e) {
        e.currentTarget.pageYOffset > r ? n.classList.add("show") : n.classList.remove("show")
    })),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
        return new bootstrap.Tooltip(e,{
            trigger: "hover"
        })
    }),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e) {
        return new bootstrap.Popover(e)
    }),
    [].slice.call(document.querySelectorAll(".toast")).map(function(e) {
        return new bootstrap.Toast(e)
    }),
    function() {
        for (var n = document.querySelectorAll(".range-slider"), e = 0; e < n.length; e++)
            !function(e) {
                var t = n[e].querySelector(".range-slider-ui")
                  , a = n[e].querySelector(".range-slider-value-min")
                  , r = n[e].querySelector(".range-slider-value-max")
                  , e = {
                    dataStartMin: parseInt(n[e].dataset.startMin, 10),
                    dataStartMax: parseInt(n[e].dataset.startMax, 10),
                    dataMin: parseInt(n[e].dataset.min, 10),
                    dataMax: parseInt(n[e].dataset.max, 10),
                    dataStep: parseInt(n[e].dataset.step, 10)
                };
                noUiSlider.create(t, {
                    start: e.dataStartMax ? [e.dataStartMin, e.dataStartMax] : [e.dataStartMin],
                    connect: !!e.dataStartMax || "lower",
                    step: e.dataStep,
                    tooltips: !0,
                    range: {
                        min: e.dataMin,
                        max: e.dataMax
                    },
                    format: {
                        to: function(e) {
                            return "$" + parseInt(e, 10)
                        },
                        from: function(e) {
                            return Number(e)
                        }
                    }
                }),
                t.noUiSlider.on("update", function(e, t) {
                    e = (e = e[t]).replace(/\D/g, "");
                    t ? r && (r.value = Math.round(e)) : a && (a.value = Math.round(e))
                }),
                a && a.addEventListener("change", function() {
                    t.noUiSlider.set([this.value, null])
                }),
                r && r.addEventListener("change", function() {
                    t.noUiSlider.set([null, this.value])
                })
            }(e)
    }(),
    function() {
        for (var o = document.querySelectorAll('[data-bs-toggle="select"]'), e = 0; e < o.length; e++)
            !function(e) {
                for (var t = o[e].querySelectorAll(".dropdown-item"), a = o[e].querySelector(".dropdown-toggle-label"), r = o[e].querySelector('input[type="hidden"]'), n = 0; n < t.length; n++)
                    t[n].addEventListener("click", function(e) {
                        e.preventDefault();
                        e = this.querySelector(".dropdown-item-label").innerText;
                        a.innerText = e,
                        null !== r && (r.value = e)
                    })
            }(e)
    }(),
    function(e, t, a) {
        for (var r = 0; r < e.length; r++)
            t.call(a, r, e[r])
    }(document.querySelectorAll(".tns-carousel-wrapper .tns-carousel-inner"), function(e, t) {
        var a = null != t.dataset.carouselOptions && "vertical" === JSON.parse(t.dataset.carouselOptions).axis ? ['<i class="fi-chevron-up"></i>', '<i class="fi-chevron-down"></i>'] : ['<i class="fi-chevron-left"></i>', '<i class="fi-chevron-right"></i>']
          , r = {
            container: t,
            controlsText: a,
            navPosition: "bottom",
            mouseDrag: !0,
            speed: 500,
            autoplayHoverPause: !0,
            autoplayButtonOutput: !1
        };
        null != t.dataset.carouselOptions && (o = JSON.parse(t.dataset.carouselOptions));
        var a = Object.assign({}, r, o)
          , n = tns(a)
          , r = t.closest(".tns-carousel-wrapper")
          , o = (r.querySelectorAll(".tns-item"),
        n.getInfo())
          , i = r.querySelector(".tns-current-slide")
          , a = r.querySelector(".tns-total-slides");
        r.classList.contains("tns-center") && (t = o.index,
        o.slideItems[t].classList.add("active"),
        n.events.on("indexChanged", function() {
            var e = n.getInfo()
              , t = e.indexCached
              , a = e.index;
            e.slideItems[t].classList.remove("active"),
            e.slideItems[a].classList.add("active")
        })),
        null !== r.querySelector(".tns-slides-count") && (i.innerHTML = o.displayIndex,
        a.innerHTML = o.slideCount,
        n.events.on("indexChanged", function() {
            var e = n.getInfo();
            i.innerHTML = e.displayIndex
        }))
    }),
    function() {
        var e = document.querySelectorAll(".gallery");
        if (e.length)
            for (var t = 0; t < e.length; t++) {
                var a = !!e[t].dataset.thumbnails
                  , r = !!e[t].dataset.video
                  , n = [lgZoom, lgFullscreen]
                  , r = r ? [lgVideo] : []
                  , a = a ? [lgThumbnail] : []
                  , a = [].concat(n, r, a);
                lightGallery(e[t], {
                    selector: ".gallery-item",
                    plugins: a,
                    licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                    download: !1,
                    autoplayVideoOnSlide: !0,
                    zoomFromOrigin: !1,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "fd5631"
                    }
                })
            }
    }(),
    function() {
        var e = document.querySelectorAll('[data-bs-toggle="lightbox"]');
        if (e.length)
            for (var t = 0; t < e.length; t++) {
                var a = !!e[t].dataset.video
                  , r = !!e[t].dataset.zoom
                  , n = !!e[t].dataset.fullscreen
                  , r = r ? [lgZoom] : []
                  , n = n ? [lgFullscreen] : []
                  , a = a ? [lgVideo] : []
                  , a = [].concat(r, n, a);
                lightGallery(e[t], {
                    selector: "this",
                    plugins: a,
                    licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                    download: !1,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "fd5631"
                    }
                })
            }
    }(),
    function() {
        var e = document.querySelectorAll(".date-picker");
        if (0 !== e.length)
            for (var t = 0; t < e.length; t++) {
                var a = void 0;
                null != e[t].dataset.datepickerOptions && (a = JSON.parse(e[t].dataset.datepickerOptions));
                var r = e[t].classList.contains("date-range") ? {
                    plugins: [new rangePlugin({
                        input: e[t].dataset.linkedInput
                    })]
                } : "{}"
                  , a = _objectSpread(_objectSpread(_objectSpread({}, {
                    disableMobile: "true"
                }), r), a);
                flatpickr(e[t], a)
            }
    }(),
    function() {
        var i = document.querySelectorAll(".subscription-form");
        if (null !== i) {
            for (var e = 0; e < i.length; e++)
                !function(e) {
                    var t = i[e].querySelector('button[type="submit"]')
                      , a = t.innerHTML
                      , r = i[e].querySelector(".form-control")
                      , n = i[e].querySelector(".subscription-form-antispam")
                      , o = i[e].querySelector(".subscription-status");
                    i[e].addEventListener("submit", function(e) {
                        e && e.preventDefault(),
                        "" === n.value && l(this, t, r, a, o)
                    })
                }(e);
            var l = function(e, t, a, r, n) {
                t.innerHTML = "Sending...";
                var o = e.action.replace("/post?", "/post-json?")
                  , e = "&" + a.name + "=" + encodeURIComponent(a.value)
                  , i = document.createElement("script");
                i.src = o + "&c=callback" + e,
                document.body.appendChild(i);
                var l = "callback";
                window[l] = function(e) {
                    delete window[l],
                    document.body.removeChild(i),
                    t.innerHTML = r,
                    "success" == e.result ? (a.classList.remove("is-invalid"),
                    a.classList.add("is-valid"),
                    n.classList.remove("status-error"),
                    n.classList.add("status-success"),
                    n.innerHTML = e.msg,
                    setTimeout(function() {
                        a.classList.remove("is-valid"),
                        n.innerHTML = "",
                        n.classList.remove("status-success")
                    }, 6e3)) : (a.classList.remove("is-valid"),
                    a.classList.add("is-invalid"),
                    n.classList.remove("status-success"),
                    n.classList.add("status-error"),
                    n.innerHTML = e.msg.substring(4),
                    setTimeout(function() {
                        a.classList.remove("is-invalid"),
                        n.innerHTML = "",
                        n.classList.remove("status-error")
                    }, 6e3))
                }
            }
        }
    }(),
    function() {
        var u = document.querySelectorAll(".interactive-map");
        if (0 !== u.length)
            for (var p, e = 0; e < u.length; e++)
                !function(c) {
                    var e = u[c].dataset.mapOptions
                      , t = u[c].dataset.mapOptionsJson
                      , d = void 0;
                    if (e && "" !== e) {
                        var a = JSON.parse(e)
                          , r = a.mapLayer || "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs"
                          , n = a.coordinates || [0, 0]
                          , o = a.zoom || 1
                          , e = !1 !== a.scrollWheelZoom
                          , i = a.markers
                          , d = L.map(u[c], {
                            scrollWheelZoom: e
                        }).setView(n, o);
                        if (L.tileLayer(r, {
                            tileSize: 512,
                            zoomOffset: -1,
                            minZoom: 1,
                            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                            crossOrigin: !0
                        }).addTo(d),
                        i)
                            for (p = 0; p < i.length; p++) {
                                var l = i[p].iconUrl
                                  , s = i[p].className
                                  , l = L.icon({
                                    iconUrl: l || "../img/map/marker-icon.png",
                                    iconSize: [25, 39],
                                    iconAnchor: [12, 39],
                                    shadowUrl: "../img/map/marker-shadow.png",
                                    shadowSize: [41, 41],
                                    shadowAnchor: [13, 41],
                                    popupAnchor: [1, -28],
                                    className: s
                                })
                                  , s = i[p].popup
                                  , l = L.marker(i[p].coordinates, {
                                    icon: l
                                }).addTo(d);
                                s && l.bindPopup(s)
                            }
                    } else
                        t && "" !== t ? fetch(t).then(function(e) {
                            return e.json()
                        }).then(function(e) {
                            var t = e.mapLayer || "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs"
                              , a = e.coordinates || [0, 0]
                              , r = e.zoom || 1
                              , n = !1 !== e.scrollWheelZoom
                              , o = e.markers;
                            if (d = L.map(u[c], {
                                scrollWheelZoom: n
                            }).setView(a, r),
                            L.tileLayer(t, {
                                tileSize: 512,
                                zoomOffset: -1,
                                minZoom: 1,
                                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                                crossOrigin: !0
                            }).addTo(d),
                            o)
                                for (var i = 0; i < o.length; i++) {
                                    var l = o[i].iconUrl
                                      , s = o[i].className
                                      , l = L.icon({
                                        iconUrl: l || "../img/map/marker-icon.png",
                                        iconSize: [25, 39],
                                        iconAnchor: [12, 39],
                                        shadowUrl: "../img/map/marker-shadow.png",
                                        shadowSize: [41, 41],
                                        shadowAnchor: [13, 41],
                                        popupAnchor: [1, -28],
                                        className: s
                                    })
                                      , s = o[i].popup
                                      , l = L.marker(o[i].coordinates, {
                                        icon: l
                                    }).addTo(d);
                                    s && l.bindPopup(s)
                                }
                        }) : (d = L.map(u[c]).setView([0, 0], 1),
                        L.tileLayer("https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs", {
                            tileSize: 512,
                            zoomOffset: -1,
                            minZoom: 1,
                            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                            crossOrigin: !0
                        }).addTo(d))
                }(e)
    }(),
    function() {
        for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++)
            new Parallax(e[t])
    }(),
    null !== document.querySelector(".rellax") && new Rellax(".rellax"),
    function() {
        var e = document.querySelectorAll(".file-uploader");
        if (0 !== e.length) {
            "" != typeof FilePondPluginFileValidateType && FilePond.registerPlugin(FilePondPluginFileValidateType),
            "" != typeof FilePondPluginFileValidateSize && FilePond.registerPlugin(FilePondPluginFileValidateSize),
            "" != typeof FilePondPluginImagePreview && FilePond.registerPlugin(FilePondPluginImagePreview),
            "" != typeof FilePondPluginImageCrop && FilePond.registerPlugin(FilePondPluginImageCrop),
            "" != typeof FilePondPluginImageResize && FilePond.registerPlugin(FilePondPluginImageResize),
            "" != typeof FilePondPluginImageTransform && FilePond.registerPlugin(FilePondPluginImageTransform);
            for (var t = 0; t < e.length; t++)
                FilePond.create(e[t])
        }
    }(),
    function() {
        var r = document.querySelectorAll("[data-bs-binded-element]");
        if (0 !== r.length)
            for (var e = 0; e < r.length; e++)
                !function(e) {
                    var t = document.querySelector(r[e].dataset.bsBindedElement)
                      , a = r[e].dataset.bsUnsetValue;
                    "SELECT" === r[e].tagName ? r[e].addEventListener("change", function(e) {
                        t.innerText = e.target.value
                    }) : r[e].classList.contains("date-picker") ? r[e].addEventListener("change", function(e) {
                        "" !== e.target.value ? t.innerText = e.target.value : t.innerText = a
                    }) : r[e].addEventListener("keyup", function(e) {
                        "" !== e.target.value ? t.innerText = e.target.value : t.innerText = a
                    })
                }(e)
    }(),
    function() {
        var e = document.querySelectorAll("[data-master-checkbox-for]");
        if (0 !== e.length)
            for (var t = 0; t < e.length; t++)
                e[t].addEventListener("change", function() {
                    var e = document.querySelector(this.dataset.masterCheckboxFor).querySelectorAll('input[type="checkbox"]');
                    if (this.checked)
                        for (var t = 0; t < e.length; t++)
                            e[t].checked = !0,
                            e[t].dataset.checkboxToggleClass && document.querySelector(e[t].dataset.bsTarget).classList.add(e[t].dataset.checkboxToggleClass);
                    else
                        for (var a = 0; a < e.length; a++)
                            e[a].checked = !1,
                            e[a].dataset.checkboxToggleClass && document.querySelector(e[a].dataset.bsTarget).classList.remove(e[a].dataset.checkboxToggleClass)
                })
    }(),
    function() {
        for (var e = document.querySelectorAll("[data-bs-toggle-class]"), t = 0; t < e.length; t++)
            e[t].addEventListener("click", function(e) {
                e.preventDefault();
                var t = document.querySelector(e.currentTarget.dataset.bsTarget)
                  , e = e.currentTarget.dataset.bsToggleClass;
                t.classList.toggle(e)
            })
    }()
}();
// Custom Number
(function($) {
    $.fn.numberstyle = function(options) {
        /*
       * Default settings
       */
        var settings = $.extend({
            value: 0,
            step: undefined,
            min: undefined,
            max: undefined
        }, options);
        /*
       * Init every element
       */
        return this.each(function(i) {
            /*
         * Base options
         */
            var input = $(this);
            /*
            * Add new DOM
            */
            var container = document.createElement('div')
              , btnAdd = document.createElement('div')
              , btnRem = document.createElement('div')
              , min = settings.min ? settings.min : input.attr('min')
              , max = settings.max ? settings.max : input.attr('max')
              , value = settings.value ? settings.value : parseFloat(input.val());
            container.className = 'numberstyle-qty';
            btnAdd.className = max && value >= max ? 'qty-btn qty-add disabled' : 'qty-btn qty-add';
            btnAdd.innerHTML = '+';
            btnRem.className = min && value <= min ? 'qty-btn qty-rem disabled' : 'qty-btn qty-rem';
            btnRem.innerHTML = '-';
            input.wrap(container);
            input.closest('.numberstyle-qty').prepend(btnRem).append(btnAdd);
            /*
         * Attach events
         */
            // use .off() to prevent triggering twice
            $(document).off('click', '.qty-btn').on('click', '.qty-btn', function(e) {
                var input = $(this).siblings('input'), sibBtn = $(this).siblings('.qty-btn'), step = settings.step ? parseFloat(settings.step) : parseFloat(input.attr('step')), min = settings.min ? settings.min : input.attr('min') ? input.attr('min') : undefined, max = settings.max ? settings.max : input.attr('max') ? input.attr('max') : undefined, oldValue = parseFloat(input.val()), newVal;
                //Add value
                if ($(this).hasClass('qty-add')) {
                    newVal = oldValue >= max ? oldValue : oldValue + step,
                    newVal = newVal > max ? max : newVal;
                    if (newVal == max) {
                        $(this).addClass('disabled');
                    }
                    sibBtn.removeClass('disabled');
                    //Remove value
                } else {
                    newVal = oldValue <= min ? oldValue : oldValue - step,
                    newVal = newVal < min ? min : newVal;

                    if (newVal == min) {
                        $(this).addClass('disabled');
                    }
                    sibBtn.removeClass('disabled');

                }

                //Update value
                input.val(newVal).trigger('change');

            });
            input.on('change', function() {

                const val = parseFloat(input.val())
                  , min = settings.min ? settings.min : input.attr('min') ? input.attr('min') : undefined
                  , max = settings.max ? settings.max : input.attr('max') ? input.attr('max') : undefined;

                if (val > max) {
                    input.val(max);
                }

                if (val < min) {
                    input.val(min);
                }
            });

        });
    }
    ;

    /*
* Init
*/

    $('.numberstyle').numberstyle();

}
)(jQuery);
// Person Card
$(document).ready(function() {

    // Ki??i Card
    $(".kisi-input").click(function() {
        $(".kisi-card").show("fade");

    });
    $(".kisi-btn").click(function() {
        $(".kisi-card").hide("fade");
    });

    // M??saitlik Takvimi
    $(".mus-btn").click(function() {
        $(".mus-takvim").show("fade");

    });
    $(".mus-close").click(function() {
        $(".mus-takvim").hide("fade");
    });

    // Search
    $(".search-btn").click(function() {
        $(".card-search").show("fade");
    });

});
// Lazy
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });
