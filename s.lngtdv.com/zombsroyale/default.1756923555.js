!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                i.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 5)
}([function(e, t, i) {
    "use strict";
    i.d(t, "c", (function() {
        return n
    }
    )),
    i.d(t, "b", (function() {
        return o
    }
    )),
    i.d(t, "a", (function() {
        return s
    }
    )),
    i.d(t, "d", (function() {
        return r
    }
    ));
    const n = "pbjs"
      , o = "lngtd"
      , s = "lngtd_debug"
      , r = "15"
}
, function(e, t, i) {
    var n;
    !function(o, s) {
        "use strict";
        var r, a = "model", d = "name", c = "type", l = "vendor", u = "version", h = "mobile", g = "tablet", f = "smarttv", p = ["brands", "fullVersionList", h, a, "platform", "platformVersion", "architecture", "formFactor", "bitness"], m = void 0 !== o, b = m && o.navigator ? o.navigator : void 0, w = b && b.userAgentData ? b.userAgentData : void 0, y = function(e) {
            for (var t = {}, i = 0; i < e.length; i++)
                t[e[i].toUpperCase()] = e[i];
            return t
        }, v = function(e, t) {
            if ("object" == typeof e && e.length > 0) {
                for (var i in e)
                    if (A(e[i]) == A(t))
                        return !0;
                return !1
            }
            return !!C(e) && -1 !== A(t).indexOf(A(e))
        }, I = function(e) {
            for (var t in e)
                return /^(browser|cpu|device|engine|os)$/.test(t)
        }, C = function(e) {
            return "string" == typeof e
        }, _ = function(e) {
            if (e) {
                for (var t = [], i = x(/\\?\"/g, e).split(","), n = 0; n < i.length; n++)
                    if (i[n].indexOf(";") > -1) {
                        var o = P(i[n]).split(";v=");
                        t[n] = {
                            brand: o[0],
                            version: o[1]
                        }
                    } else
                        t[n] = P(i[n]);
                return t
            }
        }, A = function(e) {
            return C(e) ? e.toLowerCase() : e
        }, S = function(e) {
            return C(e) ? x(/[^\d\.]/g, e).split(".")[0] : void 0
        }, T = function(e) {
            for (var t in e) {
                var i = e[t];
                "object" == typeof i && 2 == i.length ? this[i[0]] = i[1] : this[i] = void 0
            }
            return this
        }, x = function(e, t) {
            return C(t) ? t.replace(e, "") : t
        }, E = function(e) {
            return x(/\\?\"/g, e)
        }, P = function(e, t) {
            if (C(e))
                return e = x(/^\s\s*/, e),
                void 0 === t ? e : e.substring(0, 500)
        }, F = function(e, t) {
            if (e && t)
                for (var i, n, o, s, r, a, d = 0; d < t.length && !r; ) {
                    var c = t[d]
                      , l = t[d + 1];
                    for (i = n = 0; i < c.length && !r && c[i]; )
                        if (r = c[i++].exec(e))
                            for (o = 0; o < l.length; o++)
                                a = r[++n],
                                "object" == typeof (s = l[o]) && s.length > 0 ? 2 === s.length ? "function" == typeof s[1] ? this[s[0]] = s[1].call(this, a) : this[s[0]] = s[1] : 3 === s.length ? "function" != typeof s[1] || s[1].exec && s[1].test ? this[s[0]] = a ? a.replace(s[1], s[2]) : void 0 : this[s[0]] = a ? s[1].call(this, a, s[2]) : void 0 : 4 === s.length && (this[s[0]] = a ? s[3].call(this, a.replace(s[1], s[2])) : void 0) : this[s] = a || void 0;
                    d += 2
                }
        }, U = function(e, t) {
            for (var i in t)
                if ("object" == typeof t[i] && t[i].length > 0) {
                    for (var n = 0; n < t[i].length; n++)
                        if (v(t[i][n], e))
                            return "?" === i ? void 0 : i
                } else if (v(t[i], e))
                    return "?" === i ? void 0 : i;
            return t.hasOwnProperty("*") ? t["*"] : e
        }, z = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        }, B = {
            embedded: "Automotive",
            mobile: "Mobile",
            tablet: ["Tablet", "EInk"],
            smarttv: "TV",
            wearable: ["VR", "XR", "Watch"],
            "?": ["Desktop", "Unknown"],
            "*": void 0
        }, k = {
            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [u, [d, "Mobile Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [u, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, u], [/opios[\/ ]+([\w\.]+)/i], [u, [d, "Opera Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [u, [d, "Opera GX"]], [/\bopr\/([\w\.]+)/i], [u, [d, "Opera"]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [u, [d, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, u], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [u, [d, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [u, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [u, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [u, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [u, [d, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [u, [d, "Smart Lenovo Browser"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], u], [/\bfocus\/([\w\.]+)/i], [u, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [u, [d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [u, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [u, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [u, [d, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [u, [d, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [u, [d, "Mobile Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 Browser"]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], u], [/samsungbrowser\/([\w\.]+)/i], [u, [d, "Samsung Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], u], [/metasr[\/ ]?([\d\.]+)/i], [u, [d, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[d, "Sogou Mobile"], u], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [d, u], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, "Facebook"], u], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [d, u], [/\bgsa\/([\w\.]+) .*safari\//i], [u, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [u, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [u, [d, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], u], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [u, [d, "Android Browser"]], [/chrome\/([\w\.]+) mobile/i], [u, [d, "Mobile Chrome"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, u], [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i], [u, [d, "Mobile Safari"]], [/iphone .*mobile(?:\/\w+ | ?)safari/i], [[d, "Mobile Safari"]], [/version\/([\w\.\,]+) .*(safari)/i], [u, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [u, "1"]], [/(webkit|khtml)\/([\w\.]+)/i], [d, u], [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i], [[d, "Mobile Firefox"], u], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], u], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [u, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d, u], [/(cobalt)\/([\w\.]+)/i], [d, [u, /[^\d\.]+./, ""]]],
            cpu: [[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i], [["architecture", "amd64"]], [/(ia32(?=;))/i, /((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", A]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", A]]],
            device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [a, [l, "Samsung"], [c, g]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [a, [l, "Samsung"], [c, h]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [a, [l, "Apple"], [c, h]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [a, [l, "Apple"], [c, g]], [/(macintosh);/i], [a, [l, "Apple"]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [a, [l, "Sharp"], [c, h]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [a, [l, "Huawei"], [c, g]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [a, [l, "Huawei"], [c, h]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[a, /_/g, " "], [l, "Xiaomi"], [c, h]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[a, /_/g, " "], [l, "Xiaomi"], [c, g]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [a, [l, "OPPO"], [c, h]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [a, [l, "Vivo"], [c, h]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [a, [l, "Realme"], [c, h]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [a, [l, "Motorola"], [c, h]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [a, [l, "Motorola"], [c, g]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [a, [l, "LG"], [c, g]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [a, [l, "LG"], [c, h]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [a, [l, "Lenovo"], [c, g]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[a, /_/g, " "], [l, "Nokia"], [c, h]], [/(pixel c)\b/i], [a, [l, "Google"], [c, g]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [a, [l, "Google"], [c, h]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [a, [l, "Sony"], [c, h]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[a, "Xperia Tablet"], [l, "Sony"], [c, g]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [a, [l, "OnePlus"], [c, h]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [a, [l, "Amazon"], [c, g]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[a, /(.+)/g, "Fire Phone $1"], [l, "Amazon"], [c, h]], [/(playbook);[-\w\),; ]+(rim)/i], [a, l, [c, g]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [a, [l, "BlackBerry"], [c, h]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [a, [l, "ASUS"], [c, g]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [a, [l, "ASUS"], [c, h]], [/(nexus 9)/i], [a, [l, "HTC"], [c, g]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [l, [a, /_/g, " "], [c, h]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [a, [l, "Acer"], [c, g]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [a, [l, "Meizu"], [c, h]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [a, [l, "Ulefone"], [c, h]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [l, a, [c, h]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i], [l, a, [c, g]], [/(surface duo)/i], [a, [l, "Microsoft"], [c, g]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [a, [l, "Fairphone"], [c, h]], [/(shield[\w ]+) b/i], [a, [l, "Nvidia"], [c, g]], [/(sprint) (\w+)/i], [l, a, [c, h]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [l, "Microsoft"], [c, h]], [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [a, [l, "Zebra"], [c, g]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [a, [l, "Zebra"], [c, h]], [/smart-tv.+(samsung)/i], [l, [c, f]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [l, "Samsung"], [c, f]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[l, "LG"], [c, f]], [/(apple) ?tv/i], [l, [a, "Apple TV"], [c, f]], [/crkey/i], [[a, "Chromecast"], [l, "Google"], [c, f]], [/droid.+aft(\w+)( bui|\))/i], [a, [l, "Amazon"], [c, f]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [a, [l, "Sharp"], [c, f]], [/(bravia[\w ]+)( bui|\))/i], [a, [l, "Sony"], [c, f]], [/(mitv-\w{5}) bui/i], [a, [l, "Xiaomi"], [c, f]], [/Hbbtv.*(technisat) (.*);/i], [l, a, [c, f]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[l, P], [a, P], [c, f]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[c, f]], [/(ouya)/i, /(nintendo) (\w+)/i], [l, a, [c, "console"]], [/droid.+; (shield) bui/i], [a, [l, "Nvidia"], [c, "console"]], [/(playstation \w+)/i], [a, [l, "Sony"], [c, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [a, [l, "Microsoft"], [c, "console"]], [/((pebble))app/i], [l, a, [c, "wearable"]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [a, [l, "Apple"], [c, "wearable"]], [/droid.+; (glass) \d/i], [a, [l, "Google"], [c, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [a, [l, "Zebra"], [c, "wearable"]], [/(quest( 2| pro)?)/i], [a, [l, "Facebook"], [c, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [l, [c, "embedded"]], [/(aeobc)\b/i], [a, [l, "Amazon"], [c, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [a, [c, h]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [a, [c, g]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[c, g]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[c, h]], [/(android[-\w\. ]{0,9});.+buil/i], [a, [l, "Generic"]]],
            engine: [[/windows.+ edge\/([\w\.]+)/i], [u, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [u, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, u], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [u, d]],
            os: [[/microsoft (windows) (vista|xp)/i], [d, u], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [d, [u, U, z]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[u, U, z], [d, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[u, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, "macOS"], [u, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [u, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, u], [/\(bb(10);/i], [u, [d, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [u, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [u, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [u, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [u, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [u, [d, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, "Chrome OS"], u], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, u], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], u], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, u]]
        }, R = (T.call((r = {
            init: {},
            isIgnore: {},
            isIgnoreRgx: {},
            toString: {}
        }).init, [["browser", [d, u, "major"]], ["cpu", ["architecture"]], ["device", [c, a, l]], ["engine", [d, u]], ["os", [d, u]]]),
        T.call(r.isIgnore, [["browser", [u, "major"]], ["engine", [u]], ["os", [u]]]),
        T.call(r.isIgnoreRgx, [["browser", / ?browser$/i], ["os", / ?os$/i]]),
        T.call(r.toString, [["browser", [d, u]], ["cpu", ["architecture"]], ["device", [l, a]], ["engine", [d, u]], ["os", [d, u]]]),
        r), O = function(e, t) {
            var i = R.init[t]
              , n = R.isIgnore[t] || 0
              , o = R.isIgnoreRgx[t] || 0
              , s = R.toString[t] || 0;
            function r() {
                T.call(this, i)
            }
            return r.prototype.getItem = function() {
                return e
            }
            ,
            r.prototype.withClientHints = function() {
                return w ? w.getHighEntropyValues(p).then((function(t) {
                    return e.setCH(new M(t,!1)).parseCH().get()
                }
                )) : e.parseCH().get()
            }
            ,
            r.prototype.withFeatureCheck = function() {
                return e.detectFeature().get()
            }
            ,
            "result" != t && (r.prototype.is = function(e) {
                var t = !1;
                for (var i in this)
                    if (this.hasOwnProperty(i) && !v(n, i) && A(o ? x(o, this[i]) : this[i]) == A(o ? x(o, e) : e)) {
                        if (t = !0,
                        "undefined" != e)
                            break
                    } else if ("undefined" == e && t) {
                        t = !t;
                        break
                    }
                return t
            }
            ,
            r.prototype.toString = function() {
                var e = "";
                for (var t in s)
                    void 0 !== this[s[t]] && (e += (e ? " " : "") + this[s[t]]);
                return e || "undefined"
            }
            ),
            w || (r.prototype.then = function(e) {
                var t = this
                  , i = function() {
                    for (var e in t)
                        t.hasOwnProperty(e) && (this[e] = t[e])
                };
                i.prototype = {
                    is: r.prototype.is,
                    toString: r.prototype.toString
                };
                var n = new i;
                return e(n),
                n
            }
            ),
            new r
        };
        function M(e, t) {
            if (e = e || {},
            T.call(this, p),
            t)
                T.call(this, [["brands", _(e["sec-ch-ua"])], ["fullVersionList", _(e["sec-ch-ua-full-version-list"])], [h, /\?1/.test(e["sec-ch-ua-mobile"])], [a, E(e["sec-ch-ua-model"])], ["platform", E(e["sec-ch-ua-platform"])], ["platformVersion", E(e["sec-ch-ua-platform-version"])], ["architecture", E(e["sec-ch-ua-arch"])], ["formFactor", _(e["sec-ch-ua-form-factor"])], ["bitness", E(e["sec-ch-ua-bitness"])]]);
            else
                for (var i in e)
                    this.hasOwnProperty(i) && void 0 !== e[i] && (this[i] = e[i])
        }
        function D(e, t, i, n) {
            return this.get = function(e) {
                return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data
            }
            ,
            this.set = function(e, t) {
                return this.data[e] = t,
                this
            }
            ,
            this.setCH = function(e) {
                return this.uaCH = e,
                this
            }
            ,
            this.detectFeature = function() {
                if (b && b.userAgent == this.ua)
                    switch (this.itemType) {
                    case "browser":
                        b.brave && "function" == typeof b.brave.isBrave && this.set(d, "Brave");
                        break;
                    case "device":
                        !this.get(c) && w && w[h] && this.set(c, h),
                        "Macintosh" == this.get(a) && b && void 0 !== b.standalone && b.maxTouchPoints && b.maxTouchPoints > 2 && this.set(a, "iPad").set(c, g);
                        break;
                    case "os":
                        !this.get(d) && w && w.platform && this.set(d, w.platform);
                        break;
                    case "result":
                        var e = this.data
                          , t = function(t) {
                            return e[t].getItem().detectFeature().get()
                        };
                        this.set("browser", t("browser")).set("cpu", t("cpu")).set("device", t("device")).set("engine", t("engine")).set("os", t("os"))
                    }
                return this
            }
            ,
            this.parseUA = function() {
                return "result" != this.itemType && F.call(this.data, this.ua, this.rgxMap),
                "browser" == this.itemType && this.set("major", S(this.get(u))),
                this
            }
            ,
            this.parseCH = function() {
                var e = this.uaCH
                  , t = this.rgxMap;
                switch (this.itemType) {
                case "browser":
                    var i, n = e.fullVersionList || e.brands;
                    if (n)
                        for (var o in n) {
                            var s = x(/(Google|Microsoft) /, n[o].brand || n[o])
                              , r = n[o].version;
                            /not.a.brand/i.test(s) || i && (!/chrom/i.test(i) || /chromi/i.test(s)) || (this.set(d, s).set(u, r).set("major", S(r)),
                            i = s)
                        }
                    break;
                case "cpu":
                    var g = e.architecture;
                    g && (g && "64" == e.bitness && (g += "64"),
                    F.call(this.data, g + ";", t));
                    break;
                case "device":
                    if (e[h] && this.set(c, h),
                    e[a] && this.set(a, e[a]),
                    "Xbox" == e[a] && this.set(c, "console").set(l, "Microsoft"),
                    e.formFactor) {
                        var f;
                        if ("string" != typeof e.formFactor)
                            for (var p = 0; !f && p < e.formFactor.length; )
                                f = U(e.formFactor[p++], B);
                        else
                            f = U(e.formFactor, B);
                        this.set(c, f)
                    }
                    break;
                case "os":
                    var m = e.platform;
                    if (m) {
                        var b = e.platformVersion;
                        "Windows" == m && (b = parseInt(S(b), 10) >= 13 ? "11" : "10"),
                        this.set(d, m).set(u, b)
                    }
                    "Windows" == this.get(d) && "Xbox" == e[a] && this.set(d, "Xbox").set(u, void 0);
                    break;
                case "result":
                    var w = this.data
                      , y = function(t) {
                        return w[t].getItem().setCH(e).parseCH().get()
                    };
                    this.set("browser", y("browser")).set("cpu", y("cpu")).set("device", y("device")).set("engine", y("engine")).set("os", y("os"))
                }
                return this
            }
            ,
            T.call(this, [["itemType", e], ["ua", t], ["uaCH", n], ["rgxMap", i], ["data", O(this, e)]]),
            this
        }
        function G(e, t, i) {
            if ("object" == typeof e ? (I(e) ? ("object" == typeof t && (i = t),
            t = e) : (i = e,
            t = void 0),
            e = void 0) : "string" != typeof e || I(t) || (i = t,
            t = void 0),
            !(this instanceof G))
                return new G(e,t,i).getResult();
            var n = "string" == typeof e ? e : b && b.userAgent ? b.userAgent : i && i["user-agent"] ? i["user-agent"] : ""
              , o = new M(i,!0)
              , s = t ? function(e, t) {
                var i = {};
                for (var n in e)
                    i[n] = t[n] && t[n].length % 2 == 0 ? t[n].concat(e[n]) : e[n];
                return i
            }(k, t) : k
              , r = function(e) {
                return "result" == e ? function() {
                    return new D(e,n,s,o).set("ua", n).set("browser", this.getBrowser()).set("cpu", this.getCPU()).set("device", this.getDevice()).set("engine", this.getEngine()).set("os", this.getOS()).get()
                }
                : function() {
                    return new D(e,n,s[e],o).parseUA().get()
                }
            };
            return T.call(this, [["getBrowser", r("browser")], ["getCPU", r("cpu")], ["getDevice", r("device")], ["getEngine", r("engine")], ["getOS", r("os")], ["getResult", r("result")], ["getUA", function() {
                return n
            }
            ], ["setUA", function(e) {
                return C(e) && (n = e.length > 500 ? P(e, 500) : e),
                this
            }
            ]]).setUA(n),
            this
        }
        G.VERSION = "2.0.0-beta.2",
        G.BROWSER = y([d, u, "major"]),
        G.CPU = y(["architecture"]),
        G.DEVICE = y([a, l, c, "console", h, f, g, "wearable", "embedded"]),
        G.ENGINE = G.OS = y([d, u]),
        void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = G),
        t.UAParser = G) : i(2) ? void 0 === (n = function() {
            return G
        }
        .call(t, i, t, e)) || (e.exports = n) : m && (o.UAParser = G);
        var N = m && (o.jQuery || o.Zepto);
        if (N && !N.ua) {
            var L = new G;
            N.ua = L.getResult(),
            N.ua.get = function() {
                return L.getUA()
            }
            ,
            N.ua.set = function(e) {
                L.setUA(e);
                var t = L.getResult();
                for (var i in t)
                    N.ua[i] = t[i]
            }
        }
    }("object" == typeof window ? window : this)
}
, function(e, t) {
    (function(t) {
        e.exports = t
    }
    ).call(this, {})
}
, function(e) {
    e.exports = JSON.parse('{"account":{"name":"zombsroyale","organization":"Longitude","section":"default","allowedHosts":[],"disallowedUrls":[],"currency":"USD","amazonPublisherId":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a","prebidPath":"//s.lngtdv.com/prebid/prebid7.42.1.min.js","lngtdAdvertiserId":"4874962235","refreshEnabled":true,"refreshInterval":20000,"dynamicFloorsEnabled":false,"floorMinimumCents":"5.00","adXMultiplier":"2.00","useGAM":false,"skipGAMOnNoBids":false,"deliverPrebidIfNoGAMFill":true,"dropBidderTest":false,"shouldFilterNonActiveBidders":false,"emptyAuctionLimitByMedia":{"banner":3,"video":3},"smartRequestSettings":{},"initRequiresFocus":false,"refreshRequiresFocus":false,"refreshRequiresUserInteraction":false,"refreshUnfilledImpressions":false,"refreshUnfilledImpressionsAfter":30000,"allowUnfilledRetries":1,"autorun":true,"autoDisplayAds":true,"disabledCountries":[],"desktopTimeout":2000,"mobileTimeout":2500,"pricePoints":["0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.10","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24","0.25","0.26","0.27","0.28","0.29","0.30","0.31","0.32","0.33","0.34","0.35","0.36","0.37","0.38","0.39","0.40","0.41","0.42","0.43","0.44","0.45","0.46","0.47","0.48","0.49","0.50","0.55","0.60","0.65","0.70","0.75","0.80","0.85","0.90","0.95","1.00","1.05","1.10","1.15","1.20","1.25","1.30","1.35","1.40","1.45","1.50","1.55","1.60","1.65","1.70","1.75","1.80","1.85","1.90","1.95","2.00","2.05","2.10","2.15","2.20","2.25","2.30","2.35","2.40","2.45","2.50","2.55","2.60","2.65","2.70","2.75","2.80","2.85","2.90","2.95","3.00","3.05","3.10","3.15","3.20","3.25","3.30","3.35","3.40","3.45","3.50","3.55","3.60","3.65","3.70","3.75","3.80","3.85","3.90","3.95","4.00","4.05","4.10","4.15","4.20","4.25","4.30","4.35","4.40","4.45","4.50","4.55","4.60","4.65","4.70","4.75","4.80","4.85","4.90","4.95","5.00","5.10","5.20","5.30","5.40","5.50","5.60","5.70","5.80","5.90","6.00","6.10","6.20","6.30","6.40","6.50","6.60","6.70","6.80","6.90","7.00","7.10","7.20","7.30","7.40","7.50","7.60","7.70","7.80","7.90","8.00","8.10","8.20","8.30","8.40","8.50","8.60","8.70","8.80","8.90","9.00","9.10","9.20","9.30","9.40","9.50","9.60","9.70","9.80","9.90","10.00","10.50","11.00","11.50","12.00","12.50","13.00","13.50","14.00","14.50","15.00","15.50","16.00","16.50","17.00","17.50","18.00","18.50","19.00","19.50","20.00","21.00","22.00","23.00","24.00","25.00","26.00","27.00","28.00","29.00","30.00","31.00","32.00","33.00","34.00","35.00","36.00","37.00","38.00","39.00","40.00","41.00","42.00","43.00","44.00","45.00","46.00","47.00","48.00","49.00","50.00","60.00","70.00","80.00","90.00","100.00","150.00","200.00","250.00","300.00","350.00","400.00","450.00","500.00","550.00","600.00","650.00","700.00","750.00","800.00","850.00","900.00","950.00","1000.00"],"pricePointsNew":["0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.10","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24","0.25","0.26","0.27","0.28","0.29","0.30","0.31","0.32","0.33","0.34","0.35","0.36","0.37","0.38","0.39","0.40","0.41","0.42","0.43","0.44","0.45","0.46","0.47","0.48","0.49","0.50","0.51","0.52","0.53","0.54","0.55","0.56","0.57","0.58","0.59","0.60","0.61","0.62","0.63","0.64","0.65","0.66","0.67","0.68","0.69","0.70","0.71","0.72","0.73","0.74","0.75","0.76","0.77","0.78","0.79","0.80","0.81","0.82","0.83","0.84","0.85","0.86","0.87","0.88","0.89","0.90","0.91","0.92","0.93","0.94","0.95","0.96","0.97","0.98","0.99","1.00","1.01","1.02","1.03","1.04","1.05","1.06","1.07","1.08","1.09","1.10","1.11","1.12","1.13","1.14","1.15","1.16","1.17","1.18","1.19","1.20","1.21","1.22","1.23","1.24","1.25","1.26","1.27","1.28","1.29","1.30","1.31","1.32","1.33","1.34","1.35","1.36","1.37","1.38","1.39","1.40","1.41","1.42","1.43","1.44","1.45","1.46","1.47","1.48","1.49","1.50","1.51","1.52","1.53","1.54","1.55","1.56","1.57","1.58","1.59","1.60","1.61","1.62","1.63","1.64","1.65","1.66","1.67","1.68","1.69","1.70","1.71","1.72","1.73","1.74","1.75","1.76","1.77","1.78","1.79","1.80","1.81","1.82","1.83","1.84","1.85","1.86","1.87","1.88","1.89","1.90","1.91","1.92","1.93","1.94","1.95","1.96","1.97","1.98","1.99","2.00","2.05","2.10","2.15","2.20","2.25","2.30","2.35","2.40","2.45","2.50","2.55","2.60","2.65","2.70","2.75","2.80","2.85","2.90","2.95","3.00","3.05","3.10","3.15","3.20","3.25","3.30","3.35","3.40","3.45","3.50","3.55","3.60","3.65","3.70","3.75","3.80","3.85","3.90","3.95","4.00","4.05","4.10","4.15","4.20","4.25","4.30","4.35","4.40","4.45","4.50","4.55","4.60","4.65","4.70","4.75","4.80","4.85","4.90","4.95","5.00","5.05","5.10","5.15","5.20","5.25","5.30","5.35","5.40","5.45","5.50","5.55","5.60","5.65","5.70","5.75","5.80","5.85","5.90","5.95","6.00","6.05","6.10","6.15","6.20","6.25","6.30","6.35","6.40","6.45","6.50","6.55","6.60","6.65","6.70","6.75","6.80","6.85","6.90","6.95","7.00","7.05","7.10","7.15","7.20","7.25","7.30","7.35","7.40","7.45","7.50","7.55","7.60","7.65","7.70","7.75","7.80","7.85","7.90","7.95","8.00","8.05","8.10","8.15","8.20","8.25","8.30","8.35","8.40","8.45","8.50","8.55","8.60","8.65","8.70","8.75","8.80","8.85","8.90","8.95","9.00","9.05","9.10","9.15","9.20","9.25","9.30","9.35","9.40","9.45","9.50","9.55","9.60","9.65","9.70","9.75","9.80","9.85","9.90","9.95","10.00","10.50","11.00","11.50","12.00","12.50","13.00","13.50","14.00","14.50","15.00","15.50","16.00","16.50","17.00","17.50","18.00","18.50","19.00","19.50","20.00","21.00","22.00","23.00","24.00","25.00","26.00","27.00","28.00","29.00","30.00","31.00","32.00","33.00","34.00","35.00","36.00","37.00","38.00","39.00","40.00","41.00","42.00","43.00","44.00","45.00","46.00","47.00","48.00","49.00","50.00","55.00","60.00","65.00","70.00","75.00","80.00","85.00","90.00","95.00","100.00","150.00","200.00","250.00","300.00","350.00","400.00","450.00","500.00","550.00","600.00","650.00","700.00","750.00","800.00","850.00","900.00","950.00","1000.00"],"useNewTargeting":false,"excludeSponsorshipFromRefresh":false,"sponsorshipLineItemIds":[""],"specialLineItemIds":{},"partnerAvgPerf":{"adagio":"0.00","amx":"0.00","adsensebackfill":"0.00","adx":"0.00","amazon":"0.00","appnexus":"0.00","ix":"0.00","medianet":"0.00","openx":"0.00","pubmatic":"0.00","rise":"0.00","rubicon":"0.00","sharethrough":"0.00","sovrn":"0.00","triplelift":"0.00"},"enableConfiant":true,"confiantGeos":["US","CA"],"enableLiveIntent":true,"enableBlockthrough":true,"blockthroughScriptPath":"//btloader.com/tag?o=5729749314830336&upapi=true","enableSourcepoint":true,"sourcepointId":1368,"gdprVendorExceptions":[],"videoPlaylist":[],"ignoreAdvertiserIds":[],"creativeIdBlocks":["rubicon|2249:659199358","rubicon|2249:667900976","adagio|64d02dd4-af15-41e9-805c-8c4832572690","adagio|a2f42155-3019-4117-a105-aa677eaa0f09","ix|32218714","adagio|ce3c3f9d-aaff-421e-b9ae-fc4de259877a"],"confiantId":"9FOXdXybF607OwVJPZTs1p3Y_jo"},"schain":{"validation":"strict","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"longitudeads.com","sid":"9357","hp":1}]}},"partners":[{"shortName":"adagio","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"cdm-zone-03":"0.00","cdm-zone-01":"0.00","cdm-zone-02":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"amx","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"adsensebackfill","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"adx","gamId":"4879413283","revShare":"1.00","allowRefresh":true,"unitFloors":{},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"amazon","gamId":"4873547270","revShare":"1.00","allowRefresh":true,"unitFloors":{},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"appnexus","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"zombsroyale_D_INT_V":"0.00","cdm-zone-03":"0.00","cdm-zone-02":"0.00","cdm-zone-01":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"ix","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"zombsroyale_D_INT_V":"0.00","cdm-zone-03":"0.00","cdm-zone-02":"0.00","cdm-zone-01":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"medianet","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"cdm-zone-02":"0.00","cdm-zone-01":"0.00","cdm-zone-03":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"openx","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"cdm-zone-03":"0.00","cdm-zone-02":"0.00","cdm-zone-01":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"pubmatic","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"zombsroyale_D_INT_V":"0.00","cdm-zone-01":"0.00","cdm-zone-02":"0.00","cdm-zone-03":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":["AL","BA","BI","BY","CD","CF","CU","IR","IQ","KP","LB","LY","ME","MK","RS","SD","RU","SS","SO","SY","UA","VE","YE","ZW"],"schainOverride":{}},{"shortName":"rise","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"zombsroyale_D_INT_V":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":["US","CA","GB","UK","DE","BE","FI","SE","NO","FR","ES","IT","NL","DK","CH","AT","IE","AU","PT"],"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"rubicon","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"cdm-zone-03":"0.00","cdm-zone-02":"0.00","cdm-zone-01":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"sharethrough","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"cdm-zone-03":"0.00","zombsroyale_D_INT_V":"0.00","cdm-zone-02":"0.00","cdm-zone-01":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":["IN","PE","PL","VN"],"schainOverride":{}},{"shortName":"sovrn","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"cdm-zone-02":"0.00","cdm-zone-03":"0.00","cdm-zone-01":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"triplelift","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"cdm-zone-01":"0.00","cdm-zone-03":"0.00","zombsroyale_D_INT_V":"0.00","cdm-zone-02":"0.00"},"avgPerf":"0.00","geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}}],"s2sAliases":{},"adUnits":[{"uid":468,"gamPath":"/22020501169/zombsroyale/zombsroyale_D_1","gamSizes":[[728,90]],"clsSize":null,"code":"cdm-zone-01","elementId":"cdm-zone-01","mediaTypes":{"banner":{"sizes":[[728,90]]}},"bids":[{"bidder":"openx","params":{"unit":"541181313","delDomain":"addkt-d.openx.net"}},{"bidder":"appnexus","params":{"placementId":"19804284"}},{"bidder":"rubicon","params":{"siteId":"340336","zoneId":"1793394","accountId":"13708"}},{"bidder":"sharethrough","params":{"pkey":"uoc5SQgUz3pOfPOAPsa7vBq3","floor":"0.10","iframe":true}},{"bidder":"adagio","params":{"placement":"zombsroyale_D_1","adUnitElementId":"cdm-zone-01","organizationId":"1240","site":"zombsroyale-io","pagetype":"default","divId":"cdm-zone-01"}},{"bidder":"pubmatic","params":{"adSlot":"zombsroyale_D_1","publisherId":"160037"}},{"bidder":"medianet","params":{"crid":"949142513","cid":"8CUA0SYJJ"}},{"bidder":"triplelift","params":{"inventoryCode":"zombsroyale_D_1_728x90"}},{"bidder":"sovrn","params":{"tagid":"753076","bidfloor":"0.10"}},{"bidder":"ix","params":{"siteId":"554162"}}],"deviceType":"desktop","deviceTypes":["desktop"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.10","dynamicFloorParameters":"{\\"auction_type\\": {\\"refresh\\": 0.176, \\"init\\": 0.186}, \\"impression_tracker_floors\\": {\\"default\\": 0.2, \\"Safari_US\\": 0.09, \\"US\\": 0.55, \\"AU\\": 0.16, \\"Chrome_US\\": 0.56, \\"Safari_US_desktop_default_C\\": 0.2, \\"Chrome_CA_desktop_default_C\\": 0.52, \\"NL\\": 0.07, \\"CA\\": 0.49, \\"Chrome_US_desktop_default_C\\": 0.57, \\"Chrome_AU\\": 0.16, \\"Edge_US_desktop_default_C\\": 0.61, \\"Chrome_CA\\": 0.52, \\"GB\\": 0.19, \\"Chrome_US_desktop_default_B\\": 0.38, \\"Edge_US\\": 0.55}}","sections":["default"]},{"uid":469,"gamPath":"/22020501169/zombsroyale/zombsroyale_D_2","gamSizes":[[300,250]],"clsSize":null,"code":"cdm-zone-02","elementId":"cdm-zone-02","mediaTypes":{"banner":{"sizes":[[300,250]]}},"bids":[{"bidder":"openx","params":{"unit":"541181314","delDomain":"addkt-d.openx.net"}},{"bidder":"appnexus","params":{"placementId":"19804285"}},{"bidder":"rubicon","params":{"siteId":"340336","zoneId":"1793396","accountId":"13708"}},{"bidder":"sharethrough","params":{"pkey":"LqTZcLAwARrHCOlWTJy4R5rr","floor":"0.10","iframe":true}},{"bidder":"adagio","params":{"placement":"zombsroyale_D_2","adUnitElementId":"cdm-zone-02","organizationId":"1240","site":"zombsroyale-io","pagetype":"default","divId":"cdm-zone-02"}},{"bidder":"pubmatic","params":{"adSlot":"zombsroyale_D_2","publisherId":"160037"}},{"bidder":"medianet","params":{"crid":"949142513","cid":"8CUA0SYJJ"}},{"bidder":"triplelift","params":{"inventoryCode":"zombsroyale_D_2_300x250"}},{"bidder":"sovrn","params":{"tagid":"753077","bidfloor":"0.10"}},{"bidder":"ix","params":{"siteId":"554163"}}],"deviceType":"desktop","deviceTypes":["desktop"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.10","dynamicFloorParameters":"{\\"auction_type\\": {\\"refresh\\": 0.159, \\"init\\": 0.141}, \\"impression_tracker_floors\\": {\\"default\\": 0.18, \\"GB\\": 0.15, \\"Chrome_US_desktop_default_C\\": 0.76, \\"Safari_US_desktop_default_C\\": 0.12, \\"Safari_US\\": 0.12, \\"NZ\\": 0.09, \\"Edge_US\\": 0.63, \\"Edge_US_desktop_default_C\\": 0.69, \\"Chrome_CA_desktop_default_C\\": 0.45, \\"Chrome_US_desktop_default_B\\": 0.62, \\"Chrome_AU\\": 0.12, \\"US\\": 0.76, \\"CA\\": 0.45, \\"Chrome_US\\": 0.78, \\"Chrome_CA\\": 0.42, \\"AU\\": 0.1}}","sections":["default"]},{"uid":470,"gamPath":"/22020501169/zombsroyale/zombsroyale_D_3","gamSizes":[[300,250]],"clsSize":null,"code":"cdm-zone-03","elementId":"cdm-zone-03","mediaTypes":{"banner":{"sizes":[[300,250]]}},"bids":[{"bidder":"openx","params":{"unit":"541181315","delDomain":"addkt-d.openx.net"}},{"bidder":"appnexus","params":{"placementId":"19804286"}},{"bidder":"rubicon","params":{"siteId":"340336","zoneId":"1793398","accountId":"13708"}},{"bidder":"sharethrough","params":{"pkey":"2aHF8xu38yW84dPGqMR8WKTv","floor":"0.10","iframe":true}},{"bidder":"adagio","params":{"placement":"zombsroyale_D_3","adUnitElementId":"cdm-zone-03","organizationId":"1240","site":"zombsroyale-io","pagetype":"default","divId":"cdm-zone-03"}},{"bidder":"pubmatic","params":{"adSlot":"zombsroyale_D_3","publisherId":"160037"}},{"bidder":"medianet","params":{"crid":"949142513","cid":"8CUA0SYJJ"}},{"bidder":"triplelift","params":{"inventoryCode":"zombsroyale_D_3_300x250"}},{"bidder":"sovrn","params":{"tagid":"753079","bidfloor":"0.10"}},{"bidder":"ix","params":{"siteId":"554164"}}],"deviceType":"desktop","deviceTypes":["desktop"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.10","dynamicFloorParameters":"{\\"auction_type\\": {\\"init\\": 0.164, \\"refresh\\": 0.129}, \\"impression_tracker_floors\\": {\\"default\\": 0.19, \\"ES\\": 0.07, \\"US\\": 0.82, \\"Chrome_US\\": 0.88, \\"Safari_US\\": 0.13, \\"CA\\": 0.39, \\"Edge_US\\": 0.91, \\"Chrome_CA_desktop_default_C\\": 0.25, \\"Chrome_US_desktop_default_A\\": 0.3, \\"Safari_US_desktop_default_C\\": 0.3, \\"Chrome_US_desktop_default_C\\": 0.9, \\"Edge_US_desktop_default_C\\": 0.81, \\"GB\\": 0.4, \\"Chrome_CA\\": 0.36, \\"Chrome_GB\\": 0.44, \\"AU\\": 0.13}}","sections":["default"]},{"uid":1817,"gamPath":"zombsroyale_D_INT_V","gamSizes":[[640,480]],"clsSize":null,"code":"zombsroyale_D_INT_V","elementId":"zombsroyale_D_INT_V","mediaTypes":{"banner":{"sizes":[[640,480]]}},"bids":[{"bidder":"rise","params":{"placementId":"zombsroyale_D_INT_V","org":"62b9c1779766d400014aeda2","floorPrice":"0.10"}},{"bidder":"appnexus","params":{"placementId":"28864651"}},{"bidder":"sharethrough","params":{"pkey":"pX8JVu07tYdofLgD8BNnXGbA","floor":"0.10","iframe":true}},{"bidder":"pubmatic","params":{"adSlot":"4894255","publisherId":"160037"}},{"bidder":"triplelift","params":{"inventoryCode":"zombsroyale_D_INT_V"}},{"bidder":"ix","params":{"siteId":"935575"}}],"deviceType":"desktop","deviceTypes":["desktop"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.10","dynamicFloorParameters":"{}","sections":["default"]}],"floors":{},"prebidModules":{"userIds":[{"name":"hadronId","params":{"partnerId":816},"storage":{"type":"html5","name":"hadronId"}},{"name":"unifiedId","storage":{"type":"cookie","name":"pbjs-unifiedid","expires":60},"params":{"url":"//match.adsrvr.org/track/rid?ttd_pid=wq4ba1k&fmt=json"}},{"name":"33acrossId","params":{"pid":"0015a000034LE2vAAG"},"storage":{"type":"html5","name":"33acrossId","expires":60,"refreshInSeconds":28800}},{"name":"deepintentId","storage":{"type":"html5","name":"_dpes_id","expires":90}},{"name":"dmdId","params":{"api_key":null},"storage":{"name":"dmd-dgid"}},{"name":"pairId"},{"name":"criteo"},{"name":"id5Id","params":{"partner":488,"canCookieSync":true,"externalModuleUrl":"https://cdn.id5-sync.com/api/1.0/id5PrebidModule.js"},"storage":{"type":"html5","name":"id5id","expires":90,"refreshInSeconds":28800}},{"name":"lotamePanoramaId","params":{"clientId":"17921"}},{"name":"quantcastId"},{"name":"identityLink","params":{"pid":null,"notUse3P":false},"storage":{"type":"cookie","name":"idl_env","expires":15,"refreshInSeconds":1800}},{"name":"sharedId","storage":{"type":"cookie","name":"_sharedID","expires":30}}],"liveIntent":{"name":"liveIntentId","params":{"distributorId":"did-0041","requestedAttributesOverrides":{"uid2":true,"index":true,"bidswitch":true,"pubmatic":true,"magnite":true,"openx":true,"medianet":true,"sovrn":true,"nonId":true,"thetradedesk":true,"sharethrough":true,"triplelift":true,"nexxen":true}},"storage":{"type":"html5","name":"__tamLIResolveResult","expires":1}},"dataProviders":[{"name":"adagio","params":{"organizationId":"1240","site":"zombsroyale-io"}}],"analyticsProviders":[]},"modules":[{"name":"optable","settings":{"scriptPath":"https://longitudeads.solutions.cdn.optable.co/public-assets/longitudeads-sdk.js","siteSlug":"zombsroyale","excludeBrowsers":""}}]}')
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(0);
    !function() {
        let e = document.getElementsByTagName("head")[0]
          , t = document.createElement("script");
        t.type = "text/javascript",
        t.crossorigin = "anonymous",
        t.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4859096859619249",
        e.appendChild(t),
        window[n.b].fallbackForUnfilledNoGAM = function(e) {
            let t = document.getElementById(e);
            try {
                if ("cdm-zone-01" === e) {
                    let e = document.createElement("ins");
                    e.classList.add("adsbygoogle"),
                    e.dataset.adClient = "ca-pub-4859096859619249",
                    e.dataset.adSlot = "4938364277",
                    e.style.cssText = "display:inline-block;width:728px;height:90px",
                    t.append(e),
                    (adsbygoogle = window.adsbygoogle || []).push({})
                }
                if ("cdm-zone-02" === e) {
                    let e = document.createElement("ins");
                    e.classList.add("adsbygoogle"),
                    e.dataset.adClient = "ca-pub-4859096859619249",
                    e.dataset.adSlot = "8686037599",
                    e.style.cssText = "display:inline-block;width:300px;height:250px",
                    t.append(e),
                    (adsbygoogle = window.adsbygoogle || []).push({})
                }
                if ("cdm-zone-03" === e) {
                    let e = document.createElement("ins");
                    e.classList.add("adsbygoogle"),
                    e.dataset.adClient = "ca-pub-4859096859619249",
                    e.dataset.adSlot = "2171271143",
                    e.style.cssText = "display:inline-block;width:300px;height:250px",
                    t.append(e),
                    (adsbygoogle = window.adsbygoogle || []).push({})
                }
                window[n.b].reset()
            } catch (e) {}
        }
    }()
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(0)
      , o = i(1)
      , s = i.n(o);
    function r(e) {
        let t;
        if (e && "function" == typeof e)
            try {
                t = e()
            } catch (e) {}
        if (!t) {
            const e = window.location.pathname.split("/");
            let i = "";
            try {
                i = e[1].toString()
            } catch (e) {}
            t = i.slice(0, 65)
        }
        return t
    }
    const a = new function() {
        this.cmpGDPR = null,
        this.cmpCCPA = null,
        this.cmpGPP = null,
        this.cmpLoaded = !1,
        this.geoResolved = !1,
        this.alwaysLoad = !1,
        this.iabConsent = {
            gdpr: "",
            ccpa: "",
            gpp: "",
            allRejected: !1
        },
        this.allowTaglessOnUnfilledAndNoConsent = !1,
        this.initialize = function() {
            let e = window.sessionStorage.getItem("lngtd-iabconsent");
            e && (this.iabConsent = JSON.parse(e))
        }
        ,
        this.gdprCountries = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "CH", "NO", "IS", "LI", "AD", "RS", "UA", "RU", "AL"],
        this.usPrivacyStates = ["CA", "CO", "CT", "OR", "UT", "TX", "VA"],
        this.setIabConsent = function(e, t) {
            e && t && (a.iabConsent[e] = t),
            me && window.sessionStorage.setItem("lngtd-iabconsent", JSON.stringify(this.iabConsent))
        }
        ,
        this.getIabConsent = function(e) {
            return e ? this.iabConsent[e] : null
        }
        ,
        this.waitForCMP = function(e) {
            let t = this;
            if (a.cmpGPP) {
                const i = setInterval((function() {
                    window.__gpp && (clearInterval(i),
                    __gpp("addEventListener", (function(i) {
                        if (i.pingData && "ready" === i.pingData.signalStatus && !a.cmpLoaded && (a.cmpLoaded = !0,
                        e()),
                        "sectionChange" === i.eventName)
                            try {
                                const e = lngtd.consent.getIabConsent("gpp");
                                e && e.parsedSections[Object.keys(e.parsedSections)[0]].SaleOptOut !== i.pingData.parsedSections[Object.keys(i.pingData.parsedSections)[0]].SaleOptOut ? (t.setIabConsent("gpp", i.pingData),
                                window[n.b].resetAndRunAuction()) : t.setIabConsent("gpp", i.pingData)
                            } catch (e) {
                                L("Error checking new consent against existing", e),
                                t.setIabConsent("gpp", i.pingData)
                            }
                    }
                    )))
                }
                ), 100)
            } else if (a.cmpCCPA) {
                const t = setInterval((function() {
                    window.__uspapi && (clearInterval(t),
                    a.cmpLoaded = !0,
                    e())
                }
                ), 100)
            }
            if (a.cmpGDPR) {
                const i = setInterval((function() {
                    if (window.__tcfapi) {
                        clearInterval(i),
                        a.cmpLoaded = !0;
                        const n = function(i, n) {
                            !i || "useractioncomplete" !== i.eventStatus && "tcloaded" !== i.eventStatus || (i.purpose && 0 === Object.keys(i.purpose.consents).length && t.setIabConsent("allRejected", !0),
                            t.setIabConsent("gdpr", i),
                            e())
                        };
                        window.__tcfapi("addEventListener", 2, n)
                    }
                }
                ), 100)
            }
        }
        ,
        this.updateConsentGeos = function(e, t, i) {
            e && "EU" !== e && (this.cmpGDPR = !1),
            t && -1 === this.gdprCountries.indexOf(t) && (this.cmpGDPR = !1),
            t && "US" !== t && (this.cmpCCPA = !1,
            this.cmpGPP = !1),
            t && "US" === t && i && -1 === this.usPrivacyStates.indexOf(i) && (this.cmpCCPA = !1,
            this.cmpGPP = !1),
            t && null !== this.cmpGDPR && null !== this.cmpCCPA && null !== this.cmpGPP || this.attemptToSetStateByAvailableAPIs()
        }
        ,
        this.attemptToSetStateByAvailableAPIs = function() {
            if (this.geoResolved || !X.getConfig("account.enableSourcepoint") || le("ignoreCMP") || d.loadStubs(),
            null === this.cmpGDPR && (this.cmpGDPR = !!window.__tcfapi,
            Y.country && this.gdprCountries.indexOf(Y.country) > -1 && !window.__tcfapi)) {
                let e = {
                    country: Y.country,
                    regionState: Y.regionState,
                    tcfapi: !!window.__tcfapi
                };
                j("consent_issue", Z(), null, e)
            }
            if (null === this.cmpCCPA && (this.cmpCCPA = !!window.__uspapi),
            null === this.cmpGPP && (this.cmpGPP = !!window.__gpp,
            Y.country && "US" === Y.country && Y.regionState && this.usPrivacyStates.indexOf(Y.regionState) > -1 && !window.__gpp)) {
                let e = {
                    country: Y.country,
                    regionState: Y.regionState,
                    gpp: !!window.__gpp,
                    uspapi: !!window.__uspapi
                };
                j("consent_issue", Z(), null, e)
            }
        }
        ,
        this.cmpApplies = function() {
            return this.cmpGDPR || this.cmpCCPA || this.cmpGPP
        }
        ,
        this.gppOptedOut = function() {
            if (this.cmpApplies() && this.cmpGPP && this.iabConsent.gpp && Object.keys(this.iabConsent.gpp.parsedSections).length)
                for (let e of Object.keys(this.iabConsent.gpp.parsedSections)) {
                    if (1 === this.iabConsent.gpp.parsedSections[e].SaleOptOut)
                        return !0
                }
            return !1
        }
    }
    ;
    const d = new function() {
        this.stubsLoaded = !1,
        this.getConsentCallback = null,
        this.loadStubs = function() {
            if (!this.stubsLoaded) {
                function e(t) {
                    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    )(t)
                }
                this.stubsLoaded = !0,
                function() {
                    for (var t, i, n = [], o = window, s = o; s; ) {
                        try {
                            if (s.frames.__tcfapiLocator) {
                                t = s;
                                break
                            }
                        } catch (t) {}
                        if (s === o.top)
                            break;
                        s = o.parent
                    }
                    t || (function e() {
                        var t = o.document
                          , i = !!o.frames.__tcfapiLocator;
                        if (!i)
                            if (t.body) {
                                var n = t.createElement("iframe");
                                n.style.cssText = "display:none",
                                n.name = "__tcfapiLocator",
                                t.body.appendChild(n)
                            } else
                                setTimeout(e, 5);
                        return !i
                    }(),
                    o.__tcfapi = function() {
                        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                            t[o] = arguments[o];
                        if (!t.length)
                            return n;
                        "setGdprApplies" === t[0] ? t.length > 3 && 2 === parseInt(t[1], 10) && "boolean" == typeof t[3] && (i = t[3],
                        "function" == typeof t[2] && t[2]("set", !0)) : "ping" === t[0] ? "function" == typeof t[2] && t[2]({
                            gdprApplies: i,
                            cmpLoaded: !1,
                            cmpStatus: "stub"
                        }) : n.push(t)
                    }
                    ,
                    o.addEventListener("message", (function(t) {
                        var i = "string" == typeof t.data
                          , n = {};
                        if (i)
                            try {
                                n = JSON.parse(t.data)
                            } catch (t) {}
                        else
                            n = t.data;
                        var o = "object" === e(n) ? n.__tcfapiCall : null;
                        o && window.__tcfapi(o.command, o.version, (function(e, n) {
                            var s = {
                                __tcfapiReturn: {
                                    returnValue: e,
                                    success: n,
                                    callId: o.callId
                                }
                            };
                            t && t.source && t.source.postMessage && t.source.postMessage(i ? JSON.stringify(s) : s, "*")
                        }
                        ), o.parameter)
                    }
                    ), !1))
                }(),
                function() {
                    var e = window
                      , t = document;
                    function i(t) {
                        var i = "string" == typeof t.data;
                        try {
                            var n = i ? JSON.parse(t.data) : t.data;
                            if (n.__cmpCall) {
                                var o = n.__cmpCall;
                                e.__uspapi(o.command, o.parameter, (function(e, n) {
                                    var s = {
                                        __cmpReturn: {
                                            returnValue: e,
                                            success: n,
                                            callId: o.callId
                                        }
                                    };
                                    t.source.postMessage(i ? JSON.stringify(s) : s, "*")
                                }
                                ))
                            }
                        } catch (n) {}
                    }
                    !function i() {
                        if (!e.frames.__uspapiLocator)
                            if (t.body) {
                                var n = t.body
                                  , o = t.createElement("iframe");
                                o.style.cssText = "display:none",
                                o.name = "__uspapiLocator",
                                n.appendChild(o)
                            } else
                                setTimeout(i, 5)
                    }(),
                    "function" != typeof __uspapi && (e.__uspapi = function() {
                        var e = arguments;
                        if (__uspapi.a = __uspapi.a || [],
                        !e.length)
                            return __uspapi.a;
                        "ping" === e[0] ? e[2]({
                            gdprAppliesGlobally: !1,
                            cmpLoaded: !1
                        }, !0) : __uspapi.a.push([].slice.apply(e))
                    }
                    ,
                    __uspapi.msgHandler = i,
                    e.addEventListener("message", i, !1))
                }(),
                window.__gpp_addFrame = function(e) {
                    if (!window.frames[e])
                        if (document.body) {
                            var t = document.createElement("iframe");
                            t.style.cssText = "display:none",
                            t.name = e,
                            document.body.appendChild(t)
                        } else
                            window.setTimeout(window.__gpp_addFrame, 10, e)
                }
                ,
                window.__gpp_stub = function() {
                    var e = arguments;
                    if (__gpp.queue = __gpp.queue || [],
                    __gpp.events = __gpp.events || [],
                    !e.length || 1 == e.length && "queue" == e[0])
                        return __gpp.queue;
                    if (1 == e.length && "events" == e[0])
                        return __gpp.events;
                    var t = e[0]
                      , i = e.length > 1 ? e[1] : null
                      , n = e.length > 2 ? e[2] : null;
                    if ("ping" === t)
                        i({
                            gppVersion: "1.1",
                            cmpStatus: "stub",
                            cmpDisplayStatus: "hidden",
                            signalStatus: "not ready",
                            supportedAPIs: ["2:tcfeuv2", "5:tcfcav1", "6:uspv1", "7:usnatv1", "8:uscav1", "9:usvav1", "10:uscov1", "11:usutv1", "12:usctv1"],
                            cmpId: 0,
                            sectionList: [],
                            applicableSections: [],
                            gppString: "",
                            parsedSections: {}
                        }, !0);
                    else if ("addEventListener" === t) {
                        "lastId"in __gpp || (__gpp.lastId = 0),
                        __gpp.lastId++;
                        var o = __gpp.lastId;
                        __gpp.events.push({
                            id: o,
                            callback: i,
                            parameter: n
                        }),
                        i({
                            eventName: "listenerRegistered",
                            listenerId: o,
                            data: !0,
                            pingData: {
                                gppVersion: "1.1",
                                cmpStatus: "stub",
                                cmpDisplayStatus: "hidden",
                                signalStatus: "not ready",
                                supportedAPIs: ["2:tcfeuv2", "5:tcfcav1", "6:uspv1", "7:usnatv1", "8:uscav1", "9:usvav1", "10:uscov1", "11:usutv1", "12:usctv1"],
                                cmpId: 0,
                                sectionList: [],
                                applicableSections: [],
                                gppString: "",
                                parsedSections: {}
                            }
                        }, !0)
                    } else if ("removeEventListener" === t) {
                        for (var s = !1, r = 0; r < __gpp.events.length; r++)
                            if (__gpp.events[r].id == n) {
                                __gpp.events.splice(r, 1),
                                s = !0;
                                break
                            }
                        i({
                            eventName: "listenerRemoved",
                            listenerId: n,
                            data: s,
                            pingData: {
                                gppVersion: "1.1",
                                cmpStatus: "stub",
                                cmpDisplayStatus: "hidden",
                                signalStatus: "not ready",
                                supportedAPIs: ["2:tcfeuv2", "5:tcfcav1", "6:uspv1", "7:usnatv1", "8:uscav1", "9:usvav1", "10:uscov1", "11:usutv1", "12:usctv1"],
                                cmpId: 0,
                                sectionList: [],
                                applicableSections: [],
                                gppString: "",
                                parsedSections: {}
                            }
                        }, !0)
                    } else
                        "hasSection" === t ? i(!1, !0) : "getSection" === t || "getField" === t ? i(null, !0) : __gpp.queue.push([].slice.apply(e))
                }
                ,
                window.__gpp_msghandler = function(e) {
                    var t = "string" == typeof e.data;
                    try {
                        var i = t ? JSON.parse(e.data) : e.data
                    } catch (e) {
                        i = null
                    }
                    if ("object" == typeof i && null !== i && "__gppCall"in i) {
                        var n = i.__gppCall;
                        window.__gpp(n.command, (function(i, o) {
                            var s = {
                                __gppReturn: {
                                    returnValue: i,
                                    success: o,
                                    callId: n.callId
                                }
                            };
                            e.source.postMessage(t ? JSON.stringify(s) : s, "*")
                        }
                        ), "parameter"in n ? n.parameter : null, "version"in n ? n.version : "1.1")
                    }
                }
                ,
                "__gpp"in window && "function" == typeof window.__gpp || (window.__gpp = window.__gpp_stub,
                window.addEventListener("message", window.__gpp_msghandler, !1),
                window.__gpp_addFrame("__gppLocator"))
            }
        }
        ,
        this.load = function() {
            let e = function() {};
            window[n.b].accountFunctions.consentCallback && "function" == typeof window[n.b].accountFunctions.consentCallback && (e = window[n.b].accountFunctions.consentCallback),
            window._sp_queue = [],
            window._sp_ = {
                config: {
                    accountId: parseInt(X.getConfig("account.sourcepointId")),
                    baseEndpoint: "https://cdn.privacy-mgmt.com",
                    usnat: {
                        includeUspApi: !0
                    },
                    gdpr: {},
                    events: {
                        onConsentReady: this.getConsentCallback && "function" == typeof this.getConsentCallback ? (e, t, i, n) => {
                            if (n.applies) {
                                const t = t => {
                                    window._sp_[e].loadPrivacyManagerModal(t)
                                }
                                ;
                                this.getConsentCallback(t, e)
                            }
                        }
                        : () => {}
                    }
                }
            },
            ce("//cdn.privacy-mgmt.com/unified/wrapperMessagingWithoutDetection.js", (function() {
                e()
            }
            ))
        }
    }
      , c = new Event("userInteraction")
      , l = new Event("pauseRefreshUserInteraction")
      , u = new Event("restartRefresh");
    function h() {
        L("Scroll handler called");
        let e = document.documentElement.scrollTop || document.body.scrollTop;
        e > Y.lastScrollTop ? Y.currentScrollDirection = "down" : Y.currentScrollDirection = "up",
        Y.lastScrollTop = e <= 0 ? 0 : e,
        document.dispatchEvent(c)
    }
    function g() {
        L("Focus handler called"),
        document.dispatchEvent(c)
    }
    function f() {
        L("Blur handler called")
    }
    function p() {
        L("Click handler called"),
        document.dispatchEvent(c)
    }
    function m() {
        window[n.b].refreshPaused && (L("Mousemove/touch handler called"),
        document.dispatchEvent(c))
    }
    let b;
    function w(e) {
        let t = e.type;
        L("Human check handler called by ", e),
        Y.isHuman = !0,
        document.removeEventListener(t, w, !1)
    }
    function y(e) {
        try {
            let t = e.bidderRequests[0].bids[0].adUnitCode
              , i = ae.getUnitFromCode(t)
              , o = {};
            try {
                let e = window[n.c].getBidResponsesForAdUnitCode(t).bids.filter((function(e) {
                    return void 0 === e.status
                }
                )).map(e => e.requestId);
                o.pool_bids = e.join("|")
            } catch (e) {}
            o.authenticated = we();
            let s = {
                auction_id: e.auctionId,
                timeout: e.timeout,
                start: e.timestamp,
                end: e.auctionEnd,
                unit: i.config.gamPath,
                floor: i.getFloorForEnv(e.auctionId, !0),
                bids_requested: e.bidderRequests.length,
                bids_requested_bidders: e.bidderRequests.map(e => e.bidderCode),
                bids_requested_s2s_bidders: e.bidderRequests.filter(e => "s2s" === e.src).map(e => e.bidderCode),
                bids_received: e.bidsReceived.length,
                bids_received_s2s_bidders: e.bidsReceived.filter(e => "s2s" === e.source).map(e => e.bidderCode),
                bids_rejected: e.bidsRejected.length,
                no_bids: e.noBids.length,
                no_bids_bidders: e.noBids.map(e => e.bidder)
            };
            j("auction", Z(), s, o)
        } catch (e) {}
    }
    function v(e) {
        try {} catch (e) {}
    }
    function I(e) {
        let t = e.bidderCode
          , i = e.adUnitCode
          , n = e.auctionId;
        void 0 === e.originalCpm && (e.originalCpm = e.cpm);
        let o = e.originalCpm;
        L("bid response", n, i, t + "_bid", o, e);
        let s = ae.getUnitFromCode(i);
        if (s) {
            let i = s.getErroneousBidKey(e)
              , r = s.creativeIdBlocks;
            if (i && r.includes(i))
                return Q(e, "creative_id_block"),
                void (e.ttl = 0);
            if (i && s.isBidErroneous(e))
                return Q(e, "bid_errors"),
                void (e.ttl = 0);
            let a = s.getFloorForEnv(n, !0)
              , d = parseFloat(a.toPrecision(4))
              , c = parseFloat(o.toPrecision(4))
              , l = .02;
            if (a && c < a && d - c > l)
                return function(e) {
                    try {
                        let t = ae.getUnitFromCode(e.adUnitCode)
                          , i = e.originalCpm
                          , n = t.getFloorForEnv(e.auctionId, !0);
                        L(`Bid from ${e.bidder} below floor of ${n}:`, i, e);
                        let o = {
                            bidder: e.bidder,
                            unit: t.config.gamPath,
                            bid: i,
                            floor: t.getFloorForEnv(e.auctionId, !0),
                            auction_type: t.impressionType,
                            timeout: te(),
                            auction_id: e.auctionId,
                            req_id: e.requestId,
                            ad_id: e.adId,
                            uid: ye(e),
                            creative_id: e.creativeId
                        };
                        try {
                            o.addomain = e.adserverTargeting.hb_adomain
                        } catch (e) {}
                        j("bid_below_floor", Z(), o, null)
                    } catch (e) {}
                }(e),
                s.logNoBidActivity(t),
                void (e.ttl = 0);
            try {
                s.logBidActivity(t)
            } catch (e) {
                return
            }
        }
        try {
            (["outstream", "outstream-in-banner", "outstream-with-content", "moment-video", "video-third-party", "video", "fabrik-video-outstream", "fabrik-video-content"].indexOf(s.config.unitType) > -1 || s.alwaysCacheBids) && (e.vastUrl && e.adserverTargeting.hb_cache_id || (s.bidCachePromises[e.requestId] = s.cacheBidPromise(e)))
        } catch (e) {}
        $(e)
    }
    function C(e) {
        e.bids.forEach((function(e) {
            window[n.b].prebidEidMap[e.bidId] = e.ortb2.user.ext.eids
        }
        ))
    }
    function _(e) {
        e.forEach((function(e) {
            L("bid timeout", e.bidder, e);
            try {
                let t = ae.getUnitFromCode(e.adUnitCode)
                  , i = {
                    bidder: e.bidder,
                    unit: t.config.gamPath,
                    floor: t.getFloorForEnv(e.auctionId, !0),
                    auction_type: t.impressionType,
                    timeout: te(),
                    auction_id: e.auctionId,
                    req_id: e.bidId
                };
                j("bid_timeout", Z(), i, null)
            } catch (e) {}
        }
        ))
    }
    function A(e) {
        L("bid error", e.error, e.bidderRequest),
        e.bidderRequest.bids.forEach((function(t) {
            try {
                let i, n = ae.getUnitFromCode(t.adUnitCode), o = {
                    bidder: e.bidderRequest.bidderCode,
                    unit: n.config.gamPath,
                    auction_type: n.impressionType,
                    auction_id: t.auctionId,
                    req_id: t.bidId
                };
                try {
                    i = {
                        response: e.error.response,
                        response_text: e.error.responseText,
                        status: e.error.status,
                        status_text: e.error.statusText
                    }
                } catch (e) {}
                j("bid_error", Z(), o, i)
            } catch (e) {}
        }
        ))
    }
    function S(e) {
        if (q.ignoreRenderFailures)
            return;
        L("ad render failed", e.reason, e.message);
        const t = {
            reason: e.reason,
            message: e.message
        };
        j("ad_render_failure", Z(), null, t)
    }
    function T(e) {
        L("ad render success", e.bid, e.adId);
        const t = {
            req_id: e.bid.requestId,
            ad_id: e.adId,
            uid: ye(e.bid)
        };
        j("ad_render_success", Z(), null, t)
    }
    function x(e) {
        try {
            e.auctionId,
            e.timeout,
            e.timestamp
        } catch (e) {}
    }
    function E(e) {
        let t = e.bidder
          , i = e.adUnitCode;
        try {
            ae.getUnitFromCode(i).logNoBidActivity(t)
        } catch (e) {}
    }
    function P(e) {
        if (X.getConfig("account.shouldFilterNonActiveBidders") && e.forEach((function(e) {
            let t = []
              , i = ae.getUnitFromId(e.elementId);
            e.bids.forEach((function(n) {
                i.shouldSleepBidder(n.bidder) ? L(`Filtering out bidder ${n.bidder} for unit ${e.elementId}`) : t.push(n)
            }
            )),
            e.bids = t
        }
        )),
        window[n.b].disabledBidders && window[n.b].disabledBidders.length > 0) {
            const t = window[n.b].disabledBidders;
            e.forEach((function(e) {
                e.bids = e.bids.filter((function(i) {
                    const n = t.includes(i.bidder);
                    return n && L(`Filtering out bidder ${i.bidder} for unit ${e.elementId}`),
                    !n
                }
                ))
            }
            ))
        }
    }
    function F(e) {
        e.forEach((function(e) {
            let t = ae.getUnitFromId(e.elementId);
            if (t) {
                let i = t.getFloorForEnv(t.currentAuctionId, !0);
                e.bids.forEach((function(e) {
                    try {
                        null !== window[n.b].floorOverrides && window[n.b].floorOverrides.hasOwnProperty(e.bidder) && (i = window[n.b].floorOverrides[e.bidder])
                    } catch (e) {}
                    e.floorData = {
                        floorMin: i
                    },
                    "rubicon" === e.bidder && t.config.mediaTypes.video && (e.params.floor = i),
                    "appnexus" === e.bidder && (e.params.reserve = i),
                    "openx" === e.bidder && (e.params.customFloor = i),
                    "ttd" === e.bidder && (e.params.bidfloor = i),
                    e.getFloor = function() {
                        return {
                            floor: i,
                            currency: "USD"
                        }
                    }
                    ;
                    let o = {
                        floorMin: i,
                        currency: "USD",
                        enforcement: {
                            enforcePBS: !0
                        },
                        data: {
                            values: {
                                "*": i
                            }
                        }
                    };
                    e.ortb2Imp || (e.ortb2Imp = {
                        ext: {}
                    }),
                    e.ortb2Imp.ext.prebid = {
                        floors: o
                    },
                    e.ortb2Imp.bidfloor = i,
                    e.ortb2Imp.bidfloorcur = "USD"
                }
                ))
            }
        }
        ))
    }
    function U(e) {
        let t = e.slot.getSlotElementId()
          , i = ae.getUnitFromId(t);
        if (i) {
            L("Viewability met for unit (GPT)", t, e);
            try {
                i.metGPTViewability = !0
            } catch (e) {
                L("Unit is not defined in LNGTD code:", t)
            }
            try {
                i.markAsViewable()
            } catch (e) {}
        }
    }
    function z(e) {
        try {
            let t = e.slot.getAdUnitPath()
              , i = e.slot.getSlotElementId()
              , o = ae.getUnitFromId(i);
            if (o || (o = ae.getUnitFromPath(t)),
            !o)
                return void L(`Cannot handle slotRenderEnded event for ${t} / ${i} because it cannot be found.`);
            if (o.handleSlotRenderEnded(),
            document.dispatchEvent(new CustomEvent("unitRenderComplete",{
                detail: {
                    unitId: i,
                    winningBid: o.winningBid,
                    originalEvent: e
                }
            })),
            e.isEmpty)
                o.winningBid && X.getConfig("account.deliverPrebidIfNoGAMFill") ? O.renderPrebidWinningBidWithoutGAM(o.winningBid, i) : (o.handleUnfilledImpression(),
                a.allowTaglessOnUnfilledAndNoConsent && (le("taglesstest") || a.iabConsent.allRejected) && (B.makeTaglessRequest(o.config, i, null),
                o.config.refresh = !1));
            else {
                try {
                    if (e.elementId) {
                        let t = document.getElementById(e.elementId)
                          , i = t.getElementsByTagName("iframe")[0];
                        t.ariaLabel = "Advertisement",
                        i.ariaLabel = "Advertisement"
                    }
                } catch (e) {}
                o.handleFilledImpression(e),
                window[n.b].accountFunctions.customRenderHandler && "function" == typeof window[n.b].accountFunctions.customRenderHandler && window[n.b].accountFunctions.customRenderHandler(o.winningBid)
            }
        } catch (e) {
            L(e)
        }
    }
    const B = new function() {
        this.initialized = !1,
        this.slots = {},
        this.loaded = !1,
        this.logAllRequests = !1,
        this.additionalTargeting = {},
        this.useSafeFrames = !1,
        this.safeFramesExcludePartners = [],
        this.gptScriptPath = "//securepubads.g.doubleclick.net/tag/js/gpt.js",
        this.setGlobals = function() {
            window.googletag = window.googletag || {},
            window.googletag.cmd = window.googletag.cmd || []
        }
        ,
        this.initialize = function() {
            this.initialized ? this.reInitialize() : (this.defineBaseSettings(),
            this.initialized = !0)
        }
        ,
        this.reInitialize = function() {
            this.setBaseTargeting()
        }
        ,
        this.resetUnits = function() {
            let e = this;
            this.initialized && googletag.cmd.push((function() {
                googletag.destroySlots(),
                googletag.pubads().clearTargeting();
                for (let t in e.slots)
                    if (e.slots.hasOwnProperty(t))
                        try {
                            let e = document.getElementById(t);
                            if (e)
                                for (let t = 0; t < e.children.length; t++)
                                    try {
                                        e.children[t].remove()
                                    } catch (e) {}
                        } catch (e) {}
                e.slots = {}
            }
            ))
        }
        ,
        this.loadScript = function(e) {
            let t = this;
            void 0 !== e && (this.gptScriptPath = e),
            !t.loaded && X.getConfig("account.useGAM") && ce(this.gptScriptPath, (function() {
                t.loaded = !0
            }
            ), !0)
        }
        ,
        this.getTaxonomies = function() {
            let e = null;
            if (window[n.b].accountFunctions.getOrtb2Values && "function" == typeof window[n.b].accountFunctions.getOrtb2Values) {
                const t = window[n.b].accountFunctions.getOrtb2Values();
                let i = []
                  , o = [];
                if (t.site && t.site.cat)
                    for (let e = 0; e < t.site.cat.length; e++) {
                        let n = t.site.cat[e];
                        n.indexOf("IAB") ? (n = n.replace("IAB", ""),
                        i.push(n)) : o.push(n)
                    }
                (i.length || o.length) && (e = {},
                i.length && (e.IAB_CONTENT_1 = {
                    values: i
                }),
                o.length && (e.IAB_CONTENT_2_2 = {
                    values: o
                }))
            }
            return e
        }
        ,
        this.defineBaseSettings = function() {
            let e = this;
            googletag.cmd.push((function() {
                googletag.pubads().enableSingleRequest(),
                googletag.pubads().disableInitialLoad(),
                googletag.enableServices(),
                googletag.pubads().addEventListener("impressionViewable", U),
                googletag.pubads().addEventListener("slotRenderEnded", z);
                try {
                    window.parent.document.location.href !== window.document.location.href && googletag.pubads().set("page_url", window.parent.document.location.href)
                } catch (e) {}
                if (e.useSafeFrames && "force" === e.useSafeFrames) {
                    const e = {
                        allowOverlayExpansion: !0,
                        allowPushExpansion: !0,
                        sandbox: !0
                    };
                    googletag.pubads().setForceSafeFrame(!0),
                    googletag.pubads().setSafeFrameConfig(e)
                }
            }
            )),
            this.setBaseTargeting()
        }
        ,
        this.setBaseTargeting = function() {
            let e = this;
            googletag.cmd.push((function() {
                googletag.pubads().setTargeting("session-depth", K.sessionDepth.toString()),
                googletag.pubads().setTargeting("lngtd_version", n.d),
                e.setAdditionalTargeting()
            }
            ))
        }
        ,
        this.resetSlotTargeting = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                googletag.pubads().clearTargeting(),
                t.slots[e.config.elementId].clearTargeting(),
                t.setBaseTargeting()
            }
            ))
        }
        ,
        this.setAdditionalTargeting = function() {
            let e = this;
            this.defineAdditionalTargeting(),
            Object.keys(e.additionalTargeting).length > 0 && googletag.cmd.push((function() {
                Object.keys(e.additionalTargeting).forEach((function(t) {
                    try {
                        googletag.pubads().setTargeting(t, e.additionalTargeting[t].toString())
                    } catch (e) {}
                }
                ))
            }
            )),
            G.setGAMTargeting(),
            X.getDebug() && googletag.cmd.push((function() {
                googletag.pubads().setTargeting(n.a, "true")
            }
            ))
        }
        ,
        this.defineAdditionalTargeting = function() {}
        ,
        this.setAdditionalSlotTargeting = function(e) {}
        ,
        this.initializeUnit = function(e) {
            this.defineGPTSlotForUnit(e),
            this.defineSlotCustom(e)
        }
        ,
        this.defineSlotCustom = function(e) {}
        ,
        this.defineOutOfPageUnit = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                let i = googletag.defineOutOfPageSlot(e.config.gamPath, e.config.elementId).addService(googletag.pubads());
                if (!document.getElementById(e.config.elementId)) {
                    var n = document.createElement("div");
                    n.id = e.config.elementId,
                    n.style.cssText = "width:100%;height:0px;",
                    document.body.appendChild(n)
                }
                i && (googletag.display(i),
                t.slots[e.config.elementId] = i,
                L("GPT OOP created", i))
            }
            ))
        }
        ,
        this.defineInterstitialUnit = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                let i = googletag.defineOutOfPageSlot(e.config.gamPath, googletag.enums.OutOfPageFormat.INTERSTITIAL).addService(googletag.pubads());
                i && (googletag.display(i),
                t.slots[e.config.elementId] = i,
                L("GPT interstitial created", i),
                t.auctionAndCallGPTInterstitial(e, i))
            }
            ))
        }
        ,
        this.gamingInterstitials = {},
        this.defineInterstitialGamingUnit = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                let i = googletag.defineOutOfPageSlot(e.config.gamPath, googletag.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL).addService(googletag.pubads());
                i && (console.log("H5 INTERSTITIAL DEFINED", e.config.elementId),
                t.gamingInterstitials[e.config.elementId] = i,
                googletag.display(i))
            }
            ))
        }
        ,
        this.triggerInterstitialGamingUnit = function(e, t) {
            const i = this.gamingInterstitials[e.config.elementId];
            let n = setTimeout((function() {
                t()
            }
            ), 2500);
            i ? googletag.cmd.push((function() {
                googletag.pubads().addEventListener("gameManualInterstitialSlotReady", t => {
                    console.log("H5 INTERSTITIAL READY", e.config.elementId),
                    i === t.slot && (clearTimeout(n),
                    t.makeGameManualInterstitialVisible())
                }
                ),
                googletag.pubads().addEventListener("gameManualInterstitialSlotClosed", (function() {
                    console.log("H5 INTERSTITIAL CLOSED", e.config.elementId),
                    clearTimeout(n),
                    t()
                }
                )),
                googletag.pubads().addEventListener("slotRenderEnded", (function(o) {
                    i === o.slot && o.isEmpty && (clearTimeout(n),
                    console.log("H5 INTERSTITIAL DID NOT FILL", e.config.elementId),
                    t())
                }
                )),
                googletag.pubads().refresh([i])
            }
            )) : t()
        }
        ,
        this.auctionAndCallGPTInterstitial = function(e, t) {
            L("GPT interstitial auction running", e, t);
            let i = fe()
              , o = function() {
                B.setTargetingForAdUnit(e),
                googletag.cmd.push((function() {
                    L("GPT interstitial calling", t),
                    googletag.pubads().refresh([t])
                }
                ))
            };
            window[n.c].que.push((function() {
                window[n.c].requestBids({
                    adUnitCodes: [e.config.code],
                    bidsBackHandler: o,
                    timeout: te(),
                    auctionId: i
                })
            }
            ))
        }
        ,
        this.defineGPTSlotForUnit = function(e) {
            let t = this;
            t.slots.hasOwnProperty(e.config.elementId) || "" === e.config.gamPath || googletag.cmd.push((function() {
                const i = ["dynamic-parent", "outstream", "outstream-in-banner", "outstream-with-content", "video-third-party", "video-auction-only", "video", "fabrik-video-outstream", "fabrik-video-content"];
                try {
                    if ("out-of-page" === e.config.unitType)
                        t.defineOutOfPageUnit(e);
                    else if ("interstitial" === e.config.unitType)
                        window.innerWidth < 2500 && t.defineInterstitialUnit(e);
                    else if (i.indexOf(e.config.unitType) > -1)
                        ;
                    else {
                        let i = googletag.defineSlot(e.config.gamPath, e.config.gamSizes, e.config.elementId).addService(googletag.pubads());
                        i && (t.slots[e.config.elementId] = i)
                    }
                } catch (t) {
                    L(t),
                    L("Error defining GPT slot for unit", e.config)
                }
            }
            ))
        }
        ,
        this.defineGPTSlotWithinAdUnitAndDisplay = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                let i = googletag.defineSlot(e.gamPath, e.gamSizes, e.elementId).addService(googletag.pubads());
                i && (t.slots[e.elementId] = i,
                t.setAdditionalTargeting(),
                googletag.pubads().refresh([i]),
                t.logRequestsToBQ([i]))
            }
            ))
        }
        ,
        this.setSlotTargeting = function(e, t) {
            let i = this.slots[e];
            if (i)
                for (const [e,n] of Object.entries(t))
                    i.setTargeting(e, n)
        }
        ,
        this.doPubAdsRefresh = function(e, t) {
            let i = this
              , n = [];
            L("GAM being called for units:", e),
            googletag.cmd.push((function() {
                try {
                    e.forEach((function(e) {
                        let t = document.getElementById(e.config.elementId);
                        t && (t.style.textAlign = "center",
                        t.dataset.state = "loaded");
                        let o = i.slots[e.config.elementId];
                        "init" === e.impressionType && googletag.display(o),
                        i.setTargetingForAdUnit(e),
                        n.push(o)
                    }
                    ))
                } catch (e) {
                    L("Error with GPT prep", e)
                }
                if (n.length > 0) {
                    let e = R.getUserPPID();
                    e && googletag.pubads().setPublisherProvidedId(e),
                    googletag.pubads().refresh(n),
                    i.logRequestsToBQ(n)
                }
            }
            ))
        }
        ,
        this.logRequestsToBQ = function(e) {
            B.logAllRequests && e.forEach((function(e) {
                let t = {
                    path: e.getAdUnitPath(),
                    element_id: e.getSlotElementId()
                };
                j("gam_request", Z(), null, t)
            }
            ))
        }
        ,
        this.getUPRForAdUnit = function(e) {
            let t = e.getFloorForEnv(e.currentAuctionId, !0)
              , i = .01
              , n = [.01, .02, .03, .04, .05, .07, .09, .12, .15, .2, .25, .3, .35, .4, .5, 1];
            if (t > 0) {
                let e = n[0]
                  , o = Math.abs(t - e);
                n.forEach((function(e) {
                    let n = Math.abs(t - e);
                    n < o && t > e && (o = n,
                    i = e)
                }
                ))
            }
            return [{
                .01: "lngtd_d_1",
                .02: "lngtd_d_2",
                .03: "lngtd_d_3",
                .04: "lngtd_d_4",
                .05: "lngtd_d_5",
                .07: "lngtd_d_7",
                .09: "lngtd_d_9",
                .12: "lngtd_d_12",
                .15: "lngtd_d_15",
                .2: "lngtd_d_20",
                .25: "lngtd_d_25",
                .3: "lngtd_d_30",
                .35: "lngtd_d_35",
                .4: "lngtd_d_40",
                .5: "lngtd_d_50",
                1: "lngtd_d_100"
            }[i.toString()], i]
        }
        ,
        this.getVideoUPRForAdUnit = function(e) {
            let t = e.getFloorForEnv(e.currentAuctionId, !0)
              , i = .01
              , n = [.01, .02, .03, .04, .05, .07, .09, .12, .15, .2, .25, .3, .35, .4, .5, 1];
            if (t > 0) {
                let e = n[0]
                  , o = Math.abs(t - e);
                n.forEach((function(e) {
                    let n = Math.abs(t - e);
                    n < o && t > e && (o = n,
                    i = e)
                }
                ))
            }
            return [{
                .01: "lngtd_v_1",
                .02: "lngtd_v_2",
                .03: "lngtd_v_3",
                .04: "lngtd_v_4",
                .05: "lngtd_v_5",
                .07: "lngtd_v_7",
                .09: "lngtd_v_9",
                .12: "lngtd_v_12",
                .15: "lngtd_v_15",
                .2: "lngtd_v_20",
                .25: "lngtd_v_25",
                .3: "lngtd_v_30",
                .35: "lngtd_v_35",
                .4: "lngtd_v_40",
                .5: "lngtd_v_50",
                1: "lngtd_v_100"
            }[i.toString()], i]
        }
        ,
        this.setTargetingForAdUnit = function(e) {
            this.setAdditionalTargeting();
            let t = e.getTargetingForGAM();
            this.setSlotTargeting(e.config.elementId, t),
            this.setAdditionalSlotTargeting(e.config.elementId)
        }
        ,
        this.makeTaglessRequest = function(e, t, i, n) {
            L("Making tagless call to GAM for:", t, e);
            let o = document.getElementById(t);
            L("Tagless will fill", o);
            let s = {
                tagless: !0
            };
            i && "object" == typeof i && (s = Object.assign({}, s, i));
            const r = new URLSearchParams(s).toString()
              , a = encodeURIComponent(r);
            let d = e.gamSizes[0][0]
              , c = e.gamSizes[0][1];
            void 0 !== n && 2 === n.length && (d = n[0],
            c = n[1]);
            let l = {
                adunit: e.gamPath,
                width: d,
                height: c,
                targeting: a
            };
            !function(e) {
                let t = Math.floor(1e8 * Math.random());
                e.requestUrl = "https://securepubads.g.doubleclick.net/gampad/adx?iu=" + e.adunit + "&sz=" + e.width + "x" + e.height + "&c=" + t + "&tile=1&d_imp=1",
                e.targeting && (e.requestUrl = e.requestUrl + "&t=" + e.targeting)
            }(l),
            function(e) {
                if (e.requestUrl) {
                    const t = new XMLHttpRequest;
                    t.open("GET", e.requestUrl),
                    t.send(),
                    t.onreadystatechange = () => {
                        4 === t.readyState && (e.adData = t.responseText,
                        e.adData && function(e) {
                            let t = document.createElement("iframe");
                            t.style.width = e.width + "px",
                            t.style.height = e.height + "px";
                            try {
                                o.innerHTML = "",
                                o.appendChild(t),
                                t.contentWindow.document.open(),
                                t.contentWindow.document.write(e.adData),
                                t.contentWindow.document.close()
                            } catch (e) {
                                L("Error fulfilling tagless request", e)
                            }
                        }(e))
                    }
                }
            }(l)
        }
    }
    ;
    const k = new function() {
        this.initialized = !1,
        this.apstagDeals = !0,
        this.apscall = null,
        this._aps = null,
        this.useIframe = !1,
        this.getPublisherId = function() {
            let e, t = X.getConfig("adUnits");
            for (let i = 0; i < t.length; i++) {
                let n = t[i].bids.filter((function(e) {
                    return "amazon" === e.bidder
                }
                ));
                if (n)
                    try {
                        e = n[0].params.publisher_id;
                        break
                    } catch (e) {}
            }
            return e
        }
        ,
        this.loadScriptInIframe = function(e) {
            let t = document.createElement("iframe");
            t.id = "lngtd-amazon-iframe",
            t.style.cssText = "display:none;height:0;width:0;";
            let i = `<script>\n            window.__tcfapi = window.__tcfapi || window.parent.__tcfapi;\n            window.__uspapi = window.__uspapi || window.parent.__uspapi;\n            window.__gpp = window.__gpp || window.parent.__gpp;\n            "use strict";\n            let s, r, t, st;\n            r = false;\n            s = document.createElement("script");\n            s.type = "text/javascript";\n            s.src = "//config.aps.amazon-adsystem.com/configs/${e}";\n            s.async = "async";\n            document.head.appendChild(s);\n            st = document.createElement("script");\n            st.type = "text/javascript";\n            st.src = "//client.aps.amazon-adsystem.com/publisher.js";\n            st.async = "async";\n            document.head.appendChild(st);\n        <\/script>`;
            document.body.appendChild(t),
            t.contentWindow.document.open(),
            t.contentWindow.document.write(i),
            t.contentWindow.document.close()
        }
        ,
        this.loadScript = function() {
            if (this.getPublisherId()) {
                let e = this.getPublisherId();
                this.useIframe ? this.loadScriptInIframe(e) : (ce("//config.aps.amazon-adsystem.com/configs/" + e, (function() {}
                ), !0),
                ce("//client.aps.amazon-adsystem.com/publisher.js", (function() {}
                ), !0))
            }
        }
        ,
        this.initialize = function() {
            const e = this;
            if (!this.initialized && this.getPublisherId()) {
                const t = this.getPublisherId();
                if (this.useIframe) {
                    const e = document.getElementById("lngtd-amazon-iframe").contentWindow;
                    e._aps = e._aps || new Map,
                    this._aps = e._aps
                } else
                    window._aps = window._aps || new Map,
                    this._aps = window._aps;
                this._aps.has(t) || this._aps.set(t, {
                    queue: new Array,
                    store: new Map
                }),
                this.apscall = {
                    accountID: t,
                    record: function(t, i) {
                        return new Promise( (n, o) => {
                            e._aps.get(this.accountID).queue.push(new CustomEvent(t,{
                                detail: {
                                    ...i,
                                    resolve: n,
                                    reject: o
                                }
                            }))
                        }
                        )
                    },
                    read: function(t) {
                        return e._aps.get(this.accountID).store.get(t)
                    }
                };
                let i = null;
                try {
                    let e = ee("amazon");
                    e.schainOverride.hasOwnProperty("config") && (i = e.schainOverride)
                } catch (e) {}
                i ? i.config.nodes && i.config.nodes.length > 0 && this.apscall.record("ad/schain/define", {
                    schain: i.config
                }) : X.getConfig("schain.config.nodes").length > 0 && this.apscall.record("ad/schain/define", {
                    schain: X.getConfig("schain.config")
                }),
                this.initialized = !0
            }
        }
        ,
        this.userEnriched = !1,
        this.enrichUser = function() {
            if (this.initialized && void 0 !== window.eh2 && !this.userEnriched) {
                this.userEnriched = !0;
                try {
                    this.apscall.record("ad/record/update", {
                        config: {
                            hashedRecords: [{
                                type: "email",
                                record: window.eh2
                            }]
                        }
                    })
                } catch (e) {}
            }
        }
        ,
        this.setGAMTargeting = function(e) {
            googletag.cmd.push((function() {
                e.amazonTargeting && B.setSlotTargeting(e.config.elementId, e.amazonTargeting)
            }
            ))
        }
        ,
        this.filterSizes = function(e) {
            let t = []
              , i = [[336, 280], [400, 300], [1, 1], [120, 600], [300, 169], [350, 200], [400, 227]];
            for (let n = 0; n < e.length; n++) {
                let o = e[n];
                -1 === i.indexOf(o) && t.push(o)
            }
            return t
        }
        ,
        this._getFloor = function(e) {
            let t = e.getFloorForEnv(e.currentAuctionId, !0)
              , i = e.getHighestBid();
            return i && (t = Math.max(t, i.cpm)),
            t = parseInt(100 * t),
            t
        }
        ,
        this._updateFloor = function(e, t) {
            try {
                let i = this._getFloor(e);
                const n = this.apscall.read("ad/slots").find((function(e) {
                    return e.id === t
                }
                ));
                L("Updating amazon floor for slot", t, n, i, e),
                n.flr = i
            } catch (e) {}
        }
        ,
        this.getAmazonConfigForUnit = function(e) {
            let t = e.config.bids.filter((function(e) {
                return "amazon" === e.bidder
            }
            ));
            return t.length ? t[0] : null
        }
        ,
        this.getItemIdForUnit = function(e, t) {
            if ("display" === t)
                return e.config.elementId;
            if ("video" === t) {
                return this.getAmazonConfigForUnit(e).params.slot_id
            }
            return e.config.elementId
        }
        ,
        this.getTagIdForUnit = function(e) {
            return this.getAmazonConfigForUnit(e).params.slot_id
        }
        ,
        this.getGPIDForUnit = function(e) {
            let t;
            try {
                t = e.config.ortb2Imp.ext.gpid
            } catch (i) {
                t = e.config.elementId
            }
            return t
        }
        ,
        this.defineDisplaySlot = function(e) {
            let t = [];
            this.filterSizes(e.config.mediaTypes.banner.sizes).forEach((function(e) {
                t.push({
                    w: e[0],
                    h: e[1]
                })
            }
            ));
            let i = this.getItemIdForUnit(e, "display");
            this.apscall.record("ad/slot/define", {
                item: [{
                    id: i,
                    flr: this._getFloor(e),
                    flrcur: "USD",
                    spec: {
                        placement: {
                            tagid: this.getTagIdForUnit(e),
                            display: {
                                displayfmt: t
                            }
                        }
                    }
                }]
            });
            let n = {};
            n[i] = this.getGPIDForUnit(e),
            this.apscall.record("ad/gpid/define", {
                map: n
            })
        }
        ,
        this.defineVideoSlot = function(e) {
            let t = this.getItemIdForUnit(e, "video");
            this.apscall.record("ad/slot/define", {
                item: [{
                    id: t,
                    flr: this._getFloor(e),
                    flrcur: "USD",
                    spec: {
                        placement: {
                            tagid: this.getTagIdForUnit(e),
                            sdk: "aps_video_player",
                            video: {
                                ptype: e.config.mediaTypes.video.plcmt,
                                w: e.config.mediaTypes.video.playerSize[0][0],
                                h: e.config.mediaTypes.video.playerSize[0][1],
                                startdelay: e.config.mediaTypes.video.startdelay || 0,
                                pos: e.config.mediaTypes.video.pos || 1
                            }
                        }
                    }
                }]
            });
            let i = {};
            i[t] = this.getGPIDForUnit(e),
            this.apscall.record("ad/gpid/define", {
                map: i
            })
        }
        ,
        this.updateFloorRunAuction = function(e, t, i) {
            this._updateFloor(e, t),
            this._aps && e && this.apscall.record("ad/targeting/fetch", {
                itemIds: [t]
            }).then( () => {
                i()
            }
            ).catch(e => {
                L("Amazon auction error", e),
                i()
            }
            )
        }
        ,
        this.runAuction = function(e, t) {
            if (this.initialized) {
                let i = this.getItemIdForUnit(e, "display");
                this.defineDisplaySlot(e),
                this.updateFloorRunAuction(e, i, t)
            } else
                L("ERROR: Amazon integration not initialized, is there an amazon publisher ID configured?")
        }
        ,
        this.runVideoAuction = function(e, t) {
            if (this.initialized) {
                let i = this.getItemIdForUnit(e, "video");
                this.defineVideoSlot(e),
                this.updateFloorRunAuction(e, i, t)
            } else
                L("ERROR: Amazon integration not initialized, is there an amazon publisher ID configured?")
        }
        ,
        this.setBidsOnUnit = function(e, t) {
            let i, n = this.getItemIdForUnit(e, "display");
            try {
                i = this.apscall.read("ad/targeting").get(n)
            } catch (e) {}
            if (i) {
                L("Setting amazon bids for targeting", e.config.elementId, i),
                e.amazonTargeting = {};
                const n = i.get("amznbid") || i.get("amznbid_sp");
                if (Y.hasZFMap()) {
                    const i = Y.getZFBidVal(n);
                    if (i && !this.bidIsAboveFloor(i, e, t))
                        return
                }
                e.amazonTargeting.amznbid = n,
                e.amazonTargeting.amzniid = i.get("amzniid") || i.get("amzniid_sp"),
                e.amazonTargeting.amznp = i.get("amznp") || i.get("amznp_sp"),
                e.amazonTargeting.amznsz = i.get("amznsz");
                try {
                    e.amazonTargeting.amznactt = i.get("amznactt")
                } catch (e) {}
            }
        }
        ,
        this.setBidsOnVideoUnit = function(e, t) {
            let i, n = this.getItemIdForUnit(e, "video");
            try {
                i = this.apscall.read("ad/targeting").get(n)
            } catch (e) {}
            if (i) {
                L("Setting amazon video bids for targeting", e.config.elementId, i);
                const n = !!i.get("amznbid_sp");
                e.amazonTargeting = {},
                e.amazonUrl = null;
                const o = i.get("amznbid") || i.get("amznbid_sp");
                if (Y.hasZFMap()) {
                    const i = Y.getZFBidVal(o);
                    if (i && !this.bidIsAboveFloor(i, e, t))
                        return
                }
                e.amazonTargeting.amznbid = o,
                e.amazonTargeting.amzniid = i.get("amzniid") || i.get("amzniid_sp"),
                e.amazonTargeting.amznp = i.get("amznp") || i.get("amznp_sp"),
                e.amazonTargeting.amznsz = i.get("amznsz");
                try {
                    e.amazonTargeting.amznactt = i.get("amznactt")
                } catch (e) {}
                let s = new Date;
                e.amazonUrl = n ? "https://aax.amazon-adsystem.com/e/dtb/vast?b=" + i.get("amzniid_sp") + "&rnd=" + s.getTime() : "https://aax.amazon-adsystem.com/e/dtb/vast?b=" + i.get("amzniid") + "&rnd=" + s.getTime() + "&pp=" + i.get("amznbid")
            }
        }
        ,
        this.bidIsAboveFloor = function(e, t, i) {
            let n = t.getFloorForEnv(i, !1)
              , o = t.getHighestBid()
              , s = n;
            return o && (s = Math.max(n, o.cpm)),
            e >= s
        }
        ,
        this.logBidsToBQ = function(e, t) {
            let i = e.amazonTargeting;
            try {
                if (i && i.amznbid && i.amznbid.length > 2) {
                    let n = i.amznsz.split("x");
                    $({
                        bidderCode: "amazon",
                        adUnitCode: e.config.code,
                        originalCpm: 0,
                        auctionId: t,
                        timeToRespond: 0,
                        width: n[0],
                        height: n[1],
                        encryptedBid: i.amznbid,
                        requestId: fe()
                    }),
                    e.logBidActivity("amazon")
                } else
                    e.logNoBidActivity("amazon")
            } catch (e) {}
        }
    }
    ;
    const R = new function() {
        this.userIds = null,
        this.initialize = function() {
            let e = X.getConfig("prebidModules.userIds") || []
              , t = this.getUpdatedUserIds();
            t && t.length > 0 && t.forEach((function(t) {
                let i = !1;
                for (let n = 0; n < e.length; n++) {
                    e[n].name === t.name && (e[n] = t,
                    i = !0)
                }
                i || e.push(t)
            }
            ));
            let i = G.getUserId();
            i && e.push(i),
            e = this.enrichIds(e),
            this.userIds = e
        }
        ,
        this.getUpdatedUserIds = function() {}
        ,
        this.testEnrichIds = !1,
        this.currentEnrichTestId = null,
        this.enrichIds = function(t) {
            let i = ["criteo", "id5", "connectId", "uid2", "liveintent", "optable", "amazon", "euid"];
            if (this.testEnrichIds && (window.eh2 || window.ehttd)) {
                const e = i[Math.floor(Math.random() * i.length)];
                i = [e],
                this.currentEnrichTestId = e
            }
            i.indexOf("criteo") > -1 && this.enrichCriteo();
            for (let n = t.length - 1; n >= 0; n--) {
                let o = t[n];
                "id5Id" === o.name && i.indexOf("id5") > -1 && (o.params.pd = e(!1)),
                "connectId" === o.name && void 0 !== window.eh2 && i.indexOf("connectId") > -1 && (o.params.he = window.eh2),
                "uid2" !== o.name && "euid" !== o.name || (-1 === i.indexOf(o.name) ? t.splice(n, 1) : window.ehttd ? o.params.emailHash = window.ehttd : t.splice(n, 1))
            }
            return i.indexOf("amazon") > -1 && k.enrichUser(),
            -1 === i.indexOf("liveintent") && (G.testGroup = !1),
            -1 === i.indexOf("optable") && (N.testGroups.enr_optable = !1),
            t
        }
        ,
        this.enrichCriteo = function() {
            try {
                X.isBidderPresent("criteo") && void 0 !== window.eh2 && window[n.c].que.push((function() {
                    window[n.c].setBidderConfig({
                        bidders: ["criteo"],
                        config: {
                            ortb2: {
                                user: {
                                    ext: {
                                        data: {
                                            eids: [{
                                                source: document.location.hostname,
                                                uids: [{
                                                    id: window.eh2,
                                                    atype: 3,
                                                    ext: {
                                                        stype: "hemsha256"
                                                    }
                                                }]
                                            }]
                                        }
                                    }
                                }
                            }
                        }
                    }, !0)
                }
                ))
            } catch (e) {}
        }
        ,
        this.getUserIds = function() {
            return this.userIds
        }
        ,
        this.getPrebidDefinedUserIds = function() {
            let e = {};
            try {
                e = window[n.c].getUserIds()
            } catch (e) {}
            return e
        }
        ,
        this.getPrebidUserIdsDefined = function() {
            let e = this.getPrebidDefinedUserIds();
            return Object.keys(e)
        }
        ,
        this.getUserIdsForPartner = function(e) {
            let t = [];
            const i = this.getPrebidDefinedUserIds();
            if ("liveintent" === e && (t = Object.keys(Object.fromEntries(Object.entries(i).filter( ([e,t]) => t.ext && "liveintent.com" === t.ext.provider)))),
            "optable" === e)
                try {
                    window.optable && window.optable.rtd && window.optable.rtd.targetingFromCache && (t = window.optable.rtd.targetingFromCache().eidSources)
                } catch (e) {}
            return t
        }
        ,
        this.getUserIdsForPartnerWithProvenance = function(e) {
            let t = [];
            if ("optable" === e && window.optable && window.optable.rtd && window.optable.rtd.targetingFromCache)
                try {
                    t = window.optable.rtd.targetingFromCache().ortb2.user.eids.filter(e => "optable.co" === e.inserter).map(e => `${e.source}+${e.matcher}`)
                } catch (e) {}
            return t
        }
        ,
        this.getUserIdsWithProvenanceForLogging = function(e) {
            let t = [];
            try {
                t = window[n.b].prebidEidMap[e] || []
            } catch (e) {}
            return t.map(e => `${e.source || ""}+${e.matcher || ""}+${e.inserter || ""}`)
        }
        ,
        this.getUserPPID = function() {
            let e = null
              , t = this.getPrebidDefinedUserIds();
            if (t.hasOwnProperty("pubcid") && (e = t.pubcid),
            window[n.b].accountFunctions.getPPID && "function" == typeof window[n.b].accountFunctions.getPPID) {
                let t = window[n.b].accountFunctions.getPPID();
                t && (e = t)
            }
            return e
        }
        ,
        this.mergeIntoPubProvidedId = function(e) {
            window[n.c].que.push((function() {
                window[n.c].mergeConfig({
                    userSync: {
                        userIds: ( () => {
                            const t = window[n.c].getConfig("userSync.userIds") || [];
                            let i = t.find(e => "pubProvidedId" === e.name);
                            i || (i = {
                                name: "pubProvidedId",
                                params: {
                                    eids: []
                                }
                            },
                            t.push(i));
                            const o = i.params.eids || []
                              , s = t.some(e => "uid2" === e.name && e.params && "string" == typeof e.params.emailHash && e.params.emailHash.length > 0)
                              , r = e.filter(e => "uidapi.com" !== e.source || !s)
                              , a = new Set(r.map(e => `${e.inserter}|${e.matcher}|${e.source}`))
                              , d = o.filter(e => !a.has(`${e.inserter}|${e.matcher}|${e.source}`));
                            return i.params.eids = [...d, ...r],
                            t
                        }
                        )()
                    }
                }),
                window[n.c].refreshUserIds({
                    submoduleNames: ["pubProvidedId"]
                })
            }
            ))
        }
        ;
        let e = function() {
            let e = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function(t) {
                    let i, n, o, s, r, a, d, c = "", l = 0;
                    for (t = e._utf8_encode(t); l < t.length; )
                        i = t.charCodeAt(l++),
                        n = t.charCodeAt(l++),
                        o = t.charCodeAt(l++),
                        s = i >> 2,
                        r = (3 & i) << 4 | n >> 4,
                        a = (15 & n) << 2 | o >> 6,
                        d = 63 & o,
                        isNaN(n) ? a = d = 64 : isNaN(o) && (d = 64),
                        c = c + this._keyStr.charAt(s) + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(d);
                    return c
                },
                decode: function(t) {
                    let i, n, o, s, r, a, d, c = "", l = 0;
                    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length; )
                        s = this._keyStr.indexOf(t.charAt(l++)),
                        r = this._keyStr.indexOf(t.charAt(l++)),
                        a = this._keyStr.indexOf(t.charAt(l++)),
                        d = this._keyStr.indexOf(t.charAt(l++)),
                        i = s << 2 | r >> 4,
                        n = (15 & r) << 4 | a >> 2,
                        o = (3 & a) << 6 | d,
                        c += String.fromCharCode(i),
                        64 != a && (c += String.fromCharCode(n)),
                        64 != d && (c += String.fromCharCode(o));
                    return c = e._utf8_decode(c),
                    c
                },
                _utf8_encode: function(e) {
                    e = e.replace(/\r\n/g, "\n");
                    let t = "";
                    for (let i = 0; i < e.length; i++) {
                        let n = e.charCodeAt(i);
                        n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192),
                        t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
                        t += String.fromCharCode(n >> 6 & 63 | 128),
                        t += String.fromCharCode(63 & n | 128))
                    }
                    return t
                },
                _utf8_decode: function(e) {
                    let t = ""
                      , i = 0
                      , n = c1 = c2 = 0;
                    for (; i < e.length; )
                        n = e.charCodeAt(i),
                        n < 128 ? (t += String.fromCharCode(n),
                        i++) : n > 191 && n < 224 ? (c2 = e.charCodeAt(i + 1),
                        t += String.fromCharCode((31 & n) << 6 | 63 & c2),
                        i += 2) : (c2 = e.charCodeAt(i + 1),
                        c3 = e.charCodeAt(i + 2),
                        t += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3),
                        i += 3);
                    return t
                }
            }
              , t = "";
            return void 0 !== window.eh2 && (t += "1=" + encodeURIComponent(window.eh2) + "&"),
            t += "&12=" + encodeURIComponent(window.navigator.userAgent),
            e.encode(t)
        }
    }
    ;
    const O = new function() {
        this.resetConfig = function() {
            let e = this;
            window[n.c].que.push((function() {
                window[n.c].setConfig({}),
                e.updatePrebidConfig()
            }
            ))
        }
        ,
        this.updatePrebidConfig = function() {
            const e = this
              , t = {
                buckets: [{
                    precision: 2,
                    min: 0,
                    max: 1e3,
                    increment: .01
                }]
            };
            window[n.c].que.push((function() {
                let i = {
                    useBidCache: !0,
                    maxRequestsPerOrigin: 6,
                    eventHistoryTTL: 60,
                    cache: {
                        url: window[n.b].videoCacheEndpoint,
                        ignoreBidderCacheKey: !0
                    },
                    disableAjaxTimeout: !0,
                    enableSendAllBids: !1,
                    targetingControls: {
                        alwaysIncludeDeals: !0
                    },
                    customPriceBucket: t,
                    priceGranularity: "custom",
                    userSync: {
                        auctionDelay: 300,
                        filterSettings: {
                            iframe: {
                                bidders: "*",
                                filter: "include"
                            },
                            image: {
                                bidders: "*",
                                filter: "include"
                            }
                        },
                        syncDelay: 5e3,
                        syncEnabled: !0,
                        syncsPerBidder: 5,
                        idPriority: {
                            uid2: ["uid2", "pubProvidedId", "liveIntentId"]
                        },
                        userIds: R.getUserIds()
                    },
                    realTimeData: {
                        dataProviders: X.getConfig("prebidModules.dataProviders")
                    },
                    gvlMapping: {
                        ogury: 31
                    },
                    floors: {
                        default: parseFloat(X.getConfig("account.floorMinimumCents")) / 100,
                        enforcement: {
                            enforceJS: !0,
                            enforcePBS: !0
                        }
                    },
                    currency: {
                        adServerCurrency: "USD"
                    }
                };
                N.testGroups.s2s && (i.s2sConfig = e.generateS2sConfig());
                let o = {};
                Y.country && Y.regionState && (o = {
                    user: {
                        geo: {
                            country: Y.country,
                            region: Y.regionState
                        }
                    }
                });
                let s = {};
                window[n.b].accountFunctions.getOrtb2Values && "function" == typeof window[n.b].accountFunctions.getOrtb2Values && (s = window[n.b].accountFunctions.getOrtb2Values()),
                i.ortb2 = Object.assign({}, o, s),
                X.getConfig("schain.config.nodes").length > 0 && (i.schain = X.getConfig("schain")),
                a.cmpApplies() && (i.consentManagement = {},
                a.cmpGDPR && (i.consentManagement.gdpr = {
                    cmpApi: "iab",
                    timeout: 1e4,
                    defaultGdprScope: !1,
                    rules: [{
                        purpose: "storage",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: X.getConfig("account.gdprVendorExceptions")
                    }, {
                        purpose: "basicAds",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: []
                    }]
                }),
                a.cmpCCPA && (i.consentManagement.usp = {
                    cmpApi: "iab",
                    timeout: 100
                }),
                a.cmpGPP && (i.consentManagement.gpp = {
                    cmpApi: "iab"
                })),
                L("Setting prebid dynamic config:", i),
                window[n.c].setConfig(i),
                window[n.c].bidderSettings = {
                    standard: {
                        storageAllowed: !0,
                        bidCpmAdjustment: function(e, t) {
                            let i, o = e;
                            try {
                                i = ee(t.bidderCode),
                                o = parseFloat(i.revShare) * o
                            } catch (e) {}
                            return window[n.b].accountFunctions.bidCpmAdjustment && "function" == typeof window[n.b].accountFunctions.bidCpmAdjustment && (o = window[n.b].accountFunctions.bidCpmAdjustment(t, o)),
                            o = ie(o),
                            o
                        }
                    }
                };
                ["pubmatic"].forEach((function(e) {
                    X.isBidderPresent(e) && (window[n.c].bidderSettings[e] = {
                        endpointCompression: !0
                    })
                }
                ));
                let r = X.getConfig("prebidModules.analyticsProviders");
                if (r)
                    try {
                        window[n.c].enableAnalytics(r)
                    } catch (e) {}
                if (X.isBidderPresent("yahooAds"))
                    try {
                        window[n.c].setConfig({
                            yahooAds: {
                                mode: "all"
                            }
                        })
                    } catch (e) {}
            }
            ))
        }
        ,
        this.setupAliasBidders = function() {
            const e = [{
                bidder: "adkernel",
                alias: "qortex",
                gvlid: 14
            }, {
                bidder: "appnexus",
                alias: "gourmetads"
            }, {
                bidder: "appnexus",
                alias: "groupm-xandr",
                gvlid: 98
            }, {
                bidder: "appnexus",
                alias: "groupm",
                gvlid: 98
            }, {
                bidder: "appnexus",
                alias: "venatus",
                gvlid: 26
            }, {
                bidder: "grid",
                alias: "trustx",
                gvlid: 686
            }, {
                bidder: "nexx360",
                alias: "laccord",
                gvlid: 965
            }, {
                bidder: "rubicon",
                alias: "shemedia",
                gvlid: 337
            }, {
                bidder: "pubmatic",
                alias: "pubmatic_apex",
                gvlid: 76
            }, {
                bidder: "smartadserver",
                alias: "bulletin"
            }, {
                bidder: "appnexus",
                alias: "weborama",
                gvlid: 284
            }, {
                bidder: "appnexus",
                alias: "refinery89",
                gvlid: 1264
            }, {
                bidder: "pgammedia",
                alias: "aniview",
                gvlid: 780
            }, {
                bidder: "medianet",
                alias: "trustedstack",
                gvlid: 1288
            }].map( ({bidder: e, alias: t, gvlid: i}) => X.isBidderPresent(t) ? ("groupm" === t && (t = "groupm-xandr"),
            () => window[n.c].aliasBidder(e, t, i ? {
                gvlid: i
            } : void 0)) : () => {}
            );
            window[n.c].que.push((function() {
                e.forEach(e => e())
            }
            ))
        }
        ,
        this.defineSchainOverrides = function() {
            X.getConfig("partners").forEach((function(e) {
                e.schainOverride.hasOwnProperty("config") && (L("Overriding the schain object for partner", e.shortName, e.schainOverride),
                window[n.c].setBidderConfig({
                    bidders: [e.shortName],
                    config: {
                        schain: e.schainOverride
                    }
                }, !0))
            }
            ))
        }
        ,
        this.addAdUnit = function(e) {
            window[n.c].que.push((function() {
                window[n.c].addAdUnits([e])
            }
            ))
        }
        ,
        this.bindEvents = function() {
            window[n.c].que.push((function() {
                window[n.c].onEvent("bidResponse", I),
                window[n.c].onEvent("bidRequested", C),
                window[n.c].onEvent("bidderError", A),
                window[n.c].onEvent("bidTimeout", _),
                window[n.c].onEvent("auctionInit", x),
                window[n.c].onEvent("auctionEnd", y),
                window[n.c].onEvent("tcf2Enforcement", v),
                window[n.c].onEvent("beforeRequestBids", P),
                window[n.c].onEvent("beforeRequestBids", F),
                window[n.c].onEvent("noBid", E),
                window[n.c].onEvent("adRenderFailed", S),
                window[n.c].onEvent("adRenderSucceeded", T)
            }
            ))
        }
        ,
        this.unbindEvents = function() {
            window[n.c].que.push((function() {
                window[n.c].offEvent("bidResponse", I),
                window[n.c].offEvent("bidRequested", C),
                window[n.c].offEvent("bidderError", A),
                window[n.c].offEvent("bidTimeout", _),
                window[n.c].offEvent("auctionInit", x),
                window[n.c].offEvent("auctionEnd", y),
                window[n.c].offEvent("tcf2Enforcement", v),
                window[n.c].offEvent("beforeRequestBids", P),
                window[n.c].offEvent("beforeRequestBids", F),
                window[n.c].offEvent("noBid", E),
                window[n.c].offEvent("adRenderFailed", S),
                window[n.c].offEvent("adRenderSucceeded", T)
            }
            ))
        }
        ,
        this.renderPrebidWinningBidWithoutGAM = function(e, t, i) {
            let o = document.getElementById(t)
              , s = ae.getUnitFromId(t);
            for (void 0 === i && (i = s.impressionType),
            L("MANUAL RENDER", i, e); o.firstChild; )
                o.removeChild(o.firstChild);
            o.setAttribute("style", "display: block;");
            let r = document.createElement("iframe");
            r.title = "ad",
            r.height = "100%",
            r.width = "100%",
            r.border = "0px",
            r.hspace = "0",
            r.vspace = "0",
            r.marginWidth = "0",
            r.marginHeight = "0",
            r.style.border = "0",
            r.scrolling = "no",
            r.frameBorder = "0",
            r.src = "about:blank",
            r.style.display = "block",
            o.appendChild(r),
            window[n.c].que.push((function() {
                window[n.c].renderAd(r.contentWindow.document, e.adId),
                s.handleFilledImpression()
            }
            ))
        }
        ,
        this.generateS2sConfig = function() {
            const e = X.getConfig("s2sAliases")
              , t = Object.keys(e);
            let i = {};
            return t.forEach((function(t) {
                window[n.c].aliasBidder(e[t], t, {
                    useBaseGvlid: !0
                }),
                i[t] = {
                    bidSource: {
                        server: 100
                    },
                    includeSourceKvp: !0
                }
            }
            )),
            {
                accountId: X.getConfig("account.name"),
                bidders: t,
                timeout: 1e3,
                adapter: "prebidServer",
                endpoint: window[n.b].s2sEndpoint + "/openrtb2/auction",
                syncEndpoint: window[n.b].s2sEndpoint + "/cookie_sync",
                coopSync: !0,
                userSyncLimit: 5,
                syncTimeout: 500,
                enabled: !0,
                maxBids: 1,
                testing: !0,
                testServerOnly: !1,
                allowUnknownBidderCodes: !0,
                bidderControl: i,
                extPrebid: {
                    aliases: e,
                    buyeruids: this.getBuyerUidMap()
                }
            }
        }
        ,
        this._eidMap = {
            "adnxs.com": "appnexus",
            "indexexchange.com": "ix",
            "rubiconproject.com": "rubicon",
            "pubmatic.com": "pubmatic",
            "gumgum.com": "gumgum",
            "triplelift.com": "triplelift",
            "yieldmo.com": "yieldmo"
        },
        this.canCustomize = function() {
            let e = Y.getBrowser();
            return !!(N.testGroups.s2s && e && e.toLowerCase().indexOf("safari") > -1 && window.localStorage.OPTABLE_RESOLVED && !0 === N.testGroups.id5_buid)
        }
        ,
        this.getPrebidEIDPermissions = function() {
            const e = this;
            let t = [];
            return this.canCustomize() && Object.keys(this._eidMap).forEach((function(i) {
                t.push({
                    source: i,
                    bidders: [e._eidMap[i]]
                })
            }
            )),
            t
        }
        ,
        this.getBuyerUidMap = function() {
            const e = this;
            let t = {};
            if (this.canCustomize()) {
                JSON.parse(window.localStorage.OPTABLE_RESOLVED).ortb2.user.eids.forEach((function(i) {
                    try {
                        if ("id5.io" === i.matcher || "id5-sync.com" === i.matcher) {
                            const n = e._eidMap[i.source];
                            n && (t[n] = i.uids[0].id)
                        }
                    } catch (e) {}
                }
                ))
            }
            return t
        }
    }
    ;
    const M = new function() {
        let e = !1;
        this.propertyId = null,
        this.getPropertyId = function() {
            let e = "R5qOdsXTbIiDa16ix3lGyfpja-8";
            return void 0 !== X.getConfig("account.confiantId") && (e = X.getConfig("account.confiantId")),
            e
        }
        ,
        this.load = function() {
            if (!X.getConfig("account.enableConfiant"))
                return;
            if (e)
                return;
            e = !0;
            let t = X.getConfig("account.confiantGeos");
            if (this.propertyId = this.getPropertyId(),
            !this.propertyId)
                return;
            if (void 0 !== t && t.length > 0 && -1 === t.indexOf(Y.country))
                return;
            let i = document.createElement("script");
            i.async = !0,
            i.src = "//cdn.confiant-integrations.net/" + this.propertyId + "/gpt_and_prebid/config.js";
            let n = document.getElementsByTagName("script")[0];
            window.confiant = window.confiant || {},
            window.confiant[this.propertyId] = window.confiant[this.propertyId] || {
                clientSettings: {}
            },
            (window.confiant[this.propertyId].clientSettings || (window.confiant[this.propertyId].clientSettings = {})).callback = this.callback,
            n.parentNode.insertBefore(i, n)
        }
        ,
        this.callback = function(e, t, i, o, s, r) {
            if (i)
                try {
                    L("Confiant has blocked an ad:", r);
                    let e, t = !1, i = !1, o = null;
                    if (r.dfp) {
                        e = r.dfp.s;
                        let n = ae.getUnitFromId(e).winningBid;
                        n ? (i = !0,
                        o = n,
                        t = !0,
                        L("Confiant will manually refresh with a prebid bid:", o)) : L("Confiant will not refresh, Adx was blocked and we have no prebid bid.")
                    }
                    if (r.prebid) {
                        e = r.prebid.s;
                        let i = ae.getUnitFromId(e).winningBid;
                        i && window[n.c].markWinningBidAsUsed({
                            adId: i.adId
                        }),
                        t = !0,
                        L("Confiant will manually refresh after expiring a blocked prebid bid.")
                    }
                    if (e) {
                        let n = ae.getUnitFromId(e);
                        n.confiantRefreshed && (t = !1,
                        L("Confiant will not refresh, this blocked impression was already refreshed once.")),
                        t && (L("Refreshing confiant blocked ad unit"),
                        n.confiantRefreshed = !0,
                        i ? O.renderPrebidWinningBidWithoutGAM(o, e) : n.display("confiant"))
                    } else
                        L("Confiant will not refresh, we don't know the ad unit id for some reason.")
                } catch (e) {
                    L("Confiant block error", e),
                    L("Confiant has blocked an ad")
                }
        }
    }
    ;
    const D = new function() {
        let e = !1;
        this.load = function() {
            let t = X.getConfig("account.enableBlockthrough")
              , i = X.getConfig("account.blockthroughScriptPath");
            if (e || !t || !i)
                return;
            let n = document.createElement("script");
            n.src = i,
            n.async = !0,
            document.head.appendChild(n),
            e = !0
        }
    }
    ;
    const G = new function() {
        window.liModuleEnabled = void 0 !== window.liModuleEnabled && window.liModuleEnabled,
        this.testGroup = !1,
        this.useWindowGlobal = !1,
        this.isEligible = function() {
            let e = X.getConfig("account.enableLiveIntent");
            return ["US", "CA"].indexOf(Y.country) > -1 && e
        }
        ,
        this.shouldRun = function() {
            let e = this.isEligible() && this.testGroup && !this.useWindowGlobal;
            return e && (window.liModuleEnabled = !0),
            e
        }
        ,
        this.getLiModuleEnabled = function() {
            return window.liModuleEnabled
        }
        ,
        this.isEnriched = function() {
            let e = R.getPrebidDefinedUserIds();
            return Object.values(e).some(e => e.ext && "liveintent.com" === e.ext.provider)
        }
        ,
        this.getReportingValue = function() {
            if (!this.isEligible())
                return null;
            let e = this.getLiModuleEnabled() ? "t1" : "t0";
            return e += this.isEnriched() ? "-e1" : "-e0",
            e
        }
        ,
        this.setGAMTargeting = function() {
            let e = this.getReportingValue();
            e && googletag.cmd.push((function() {
                googletag.pubads().setTargeting("li-module-enabled", e)
            }
            ))
        }
        ,
        this.getGAMVideoTargeting = function() {
            let e = {};
            return e["li-module-enabled"] = this.getReportingValue(),
            e
        }
        ,
        this.getExtraLogging = function() {
            let e = {};
            return e["li-module-enabled"] = this.getReportingValue(),
            e
        }
        ,
        this.getUserId = function() {
            if (this.shouldRun() && this.getLiModuleEnabled()) {
                return X.getConfig("prebidModules.liveIntent")
            }
            return null
        }
    }
    ;
    const N = new function() {
        this.dropBidderCode = null,
        this.testGroups = {},
        this.sessionTestGroups = {},
        this.addLoggingKeys = {},
        this.initializeTestGroups = function() {
            this.loadSessionTestGroups(),
            this.setEnrichmentVendorTestGroups(),
            this.setupS2STesting(),
            window[n.b].accountFunctions.testCustomizations && "function" == typeof window[n.b].accountFunctions.testCustomizations && window[n.b].accountFunctions.testCustomizations(),
            this.saveSessionTestGroups()
        }
        ,
        this.loadSessionTestGroups = function() {
            let e = window.sessionStorage.getItem("lngtd-testgroups");
            if (e)
                try {
                    const t = JSON.parse(e);
                    t && t.scriptVersion === n.d ? this.sessionTestGroups = t.testGroups : this.sessionTestGroups = {}
                } catch (e) {
                    this.sessionTestGroups = {}
                }
        }
        ,
        this.saveSessionTestGroups = function() {
            const e = {
                scriptVersion: n.d,
                testGroups: this.testGroups
            };
            window.sessionStorage.setItem("lngtd-testgroups", JSON.stringify(e))
        }
        ,
        this.getTestGroupValueFromSession = function(e) {
            this.loadSessionTestGroups();
            let t = null;
            return this.sessionTestGroups.hasOwnProperty(e) && null !== this.sessionTestGroups[e] && (t = this.sessionTestGroups[e],
            this.testGroups[e] = t),
            t
        }
        ,
        this.dropBidder = function() {}
        ,
        this.resetDropBidder = function() {}
        ,
        this.setupS2STesting = function() {
            const e = this.getTestGroupValueFromSession("s2s");
            if (null !== e)
                return e;
            let t = null
              , i = !1;
            const n = Math.floor(100 * Math.random()) + 1;
            try {
                i = Object.keys(X.getConfig("s2sAliases")).length > 0
            } catch (e) {}
            i && (t = !1,
            (n <= 95 || le("forces2s")) && (t = !0)),
            this.testGroups.s2s = t,
            this.saveSessionTestGroups()
        }
        ,
        this.setOptableTestGroups = function() {
            const e = this.getTestGroupValueFromSession("enr_optable");
            if (null !== e)
                return e;
            N.testGroups.enr_optable = !1;
            Math.floor(100 * Math.random()) + 1 <= 95 && (N.testGroups.enr_optable = !0),
            this.saveSessionTestGroups()
        }
        ,
        this.defineOptableMatchers = function() {
            const e = this.getTestGroupValueFromSession("opt_matcher_id5");
            if (null !== e)
                return e;
            if (!0 === this.testGroups.enr_optable) {
                const e = Math.floor(100 * Math.random()) + 1;
                this.testGroups.opt_matcher_id5 = e <= 5
            }
            this.saveSessionTestGroups()
        }
        ,
        this.setupId5BuidTest = function() {
            const e = this.getTestGroupValueFromSession("id5_buid");
            if (null !== e)
                return e;
            this.testGroups.id5_buid = !1;
            1 === Math.floor(2 * Math.random()) + 1 && (this.testGroups.id5_buid = !0),
            this.saveSessionTestGroups()
        }
        ,
        this.setEnrichmentVendorTestGroups = function() {
            if (G.isEligible()) {
                const e = this.getTestGroupValueFromSession("enr_liveintent");
                if (null !== e)
                    this.testGroups.enr_liveintent = e;
                else {
                    this.testGroups.enr_liveintent = !1;
                    Math.floor(100 * Math.random()) + 1 <= 95 && (this.testGroups.enr_liveintent = !0)
                }
            } else
                this.testGroups.enr_liveintent = null;
            G.testGroup = this.testGroups.enr_liveintent;
            null === this.getTestGroupValueFromSession("enr_optable") && (this.testGroups.enr_optable = null),
            this.saveSessionTestGroups()
        }
        ,
        this.getTestGroupsString = function() {
            let e = {};
            window[n.b].accountFunctions.getClientABTests && "function" == typeof window[n.b].accountFunctions.getClientABTests && (e = window[n.b].accountFunctions.getClientABTests());
            const t = {
                ...this.testGroups,
                ...e
            };
            return Object.entries(t).map( ([e,t]) => `${e}=${t}`).join("|")
        }
    }
    ;
    function L() {
        try {
            let e = Array.prototype.slice.call(arguments)
              , t = "text-transform: uppercase;color:#222;background-color:#eee;padding:2px 4px;border-radius:4px;font-weight:600";
            if (X.getDebug() && window.console && e.length > 0) {
                let i = e.shift();
                e.length > 0 ? console.debug("%cLNGTD", t, i, e) : console.debug("%cLNGTD", t, i)
            }
        } catch (e) {}
    }
    const q = new function() {
        this.sampleRate = 100,
        this.ignoreRenderFailures = !1
    }
    ;
    function j(e, t, i, o) {
        let s = q.sampleRate;
        if (s < 100) {
            if (Math.floor(100 * Math.random()) + 1 > s)
                return
        }
        try {
            let s = {
                event: e,
                timestamp: (new Date).valueOf()
            }
              , r = {
                version: n.d,
                cookie_deprecation: Y.cookieDeprecationState,
                sampleRate: q.sampleRate,
                tests: void 0 !== N && "function" == typeof N.getTestGroupsString ? N.getTestGroupsString() : void 0
            };
            o = Object.assign({}, r, o);
            let a = {
                custom: JSON.stringify(i),
                extra: JSON.stringify(o)
            };
            s.details = Object.assign({}, t, a);
            let d = !1;
            ["impression", "viewable_impression", "pageview"].indexOf(e) > -1 && (d = !0),
            d ? H(s) : function(e) {
                V.length >= 50 ? W() : V.push(e)
            }(s)
        } catch (e) {}
    }
    let V = [];
    function W() {
        let e = JSON.parse(JSON.stringify(V));
        V = [],
        H(e)
    }
    function H(e) {
        let t = new XMLHttpRequest
          , i = window[n.b].loggingEndpoint;
        t.open("POST", i, !0),
        t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        t.send(JSON.stringify(e))
    }
    function Z() {
        let e = document.location.href;
        try {
            window.parent.document.location.href !== window.document.location.href && (e = window.parent.location.href)
        } catch (e) {}
        let t = "";
        try {
            t = window.frames.top.document.referrer
        } catch (e) {}
        return {
            account: X.getConfig("account.name"),
            section: X.getConfig("account.section"),
            page: r(window[n.b].accountFunctions.pageTypeFunc),
            pageview_id: Y.pvId,
            referrer_url: t,
            page_url: e,
            device_type: Y.getDeviceType(),
            browser: Y.getBrowser(),
            session_depth: K.sessionDepth,
            country: Y.country
        }
    }
    function J() {
        if (Y.pvLogged && !Y.logPageViewManual)
            return;
        let e = {};
        e.session_id = K.sessionId;
        let t = document.location.href;
        try {
            window.parent.document.location.href !== window.document.location.href && (t = window.parent.location.href)
        } catch (e) {}
        let i = "";
        try {
            i = window.frames.top.document.referrer
        } catch (e) {}
        e.page_url = t,
        e.referrer_url = i,
        e.regionState = Y.regionState,
        e.authenticated = we();
        try {
            e.ww = window.innerWidth,
            e.wh = window.innerHeight,
            e.wtw = window.top.innerWidth,
            e.wth = window.top.innerHeight
        } catch (e) {}
        let o = {};
        window[n.b].accountFunctions.extraLogging && "function" == typeof window[n.b].accountFunctions.extraLogging && (o = window[n.b].accountFunctions.extraLogging()),
        e = Object.assign({}, e, o),
        Y.pvLogged = !0,
        j("pageview", Z(), null, e)
    }
    function $(e) {
        let t = e.bidderCode
          , i = e.adUnitCode
          , n = ae.getUnitFromCode(i)
          , o = {
            bidder: t,
            bid: e.originalCpm,
            floor: n.getFloorForEnv(e.auctionId, !0),
            floor_raw: n.getFloorForEnv(e.auctionId, !1),
            unit: n.config.gamPath,
            auction_type: n.impressionType,
            auction_id: e.auctionId,
            refresh_count: n.filledImpressionCount,
            response_time: e.timeToRespond,
            size: e.width + "x" + e.height,
            encrypted_bid: e.encryptedBid,
            req_id: e.requestId,
            ad_id: e.adId,
            uid: ye(e),
            source: e.source,
            creative_id: e.creativeId
        }
          , s = {};
        N.dropBidderCode && (s.dropped_bidder = N.dropBidderCode);
        try {
            let t = R.getPrebidUserIdsDefined();
            s.user_ids = t.join("|"),
            s.enr_li = G.getLiModuleEnabled(),
            s.enr_op = N.testGroups.enr_optable,
            s.enr_all_ids = R.getUserIdsWithProvenanceForLogging(e.requestId).join("|")
        } catch (e) {}
        R.currentEnrichTestId && (s.enrich_test = R.currentEnrichTestId);
        try {
            s.addomain = e.adserverTargeting.hb_adomain
        } catch (e) {}
        j("bid", Z(), o, s)
    }
    function Q(e, t) {
        try {
            let i, n = ae.getUnitFromCode(e.adUnitCode), o = e.originalCpm, s = n.getFloorForEnv(e.auctionId, !0);
            i = t || "unknown",
            L(`Creative ID ${e.creativeId} from ${e.bidder} blocked for ${i}:`);
            let r = {
                bidder: e.bidder,
                unit: n.config.gamPath,
                bid: o,
                floor: s,
                auction_type: n.impressionType,
                timeout: te(),
                auction_id: e.auctionId,
                req_id: e.requestId,
                ad_id: e.adId,
                uid: ye(e),
                creative_id: e.creativeId,
                reason: i
            };
            try {
                r.addomain = e.adserverTargeting.hb_adomain
            } catch (e) {}
            j("blocked_bid", Z(), r, null)
        } catch (e) {}
    }
    setInterval((function() {
        V.length && W()
    }
    ), 5e3);
    const X = new function() {
        let e, t, i = !1;
        this.initialize = function(i) {
            e = i,
            t = i
        }
        ,
        this.updateSettings = function(e) {
            t = e
        }
        ,
        this.setConfig = function(e, i) {
            if ("string" != typeof e)
                throw "config: prop is not a string";
            if (e) {
                let n = e.split(".")
                  , o = n.length
                  , s = t;
                for (let e = 0; e < o - 1; e++)
                    if (s = s[n[e]],
                    void 0 === s)
                        return;
                if (void 0 === s[n[o - 1]])
                    return;
                return s[n[o - 1]] = i,
                i
            }
        }
        ,
        this.getConfig = function(e) {
            if (e) {
                if ("string" != typeof e)
                    throw "config: prop is not a string";
                return (e = e.replace(/\[["'`](.*)["'`]\]/g, ".$1")).split(".").reduce((function(e, t) {
                    return e ? e[t] : void 0
                }
                ), t || window)
            }
            return t
        }
        ,
        this.enableDebug = function() {
            ge("lngtd_debug", "1"),
            i = !0
        }
        ,
        this.disableDebug = function() {
            document.cookie = "lngtd_debug=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",
            i = !1
        }
        ,
        this.getDebug = function() {
            return i
        }
        ,
        this.isBidderPresent = function(e) {
            let t = !1;
            return this.getConfig("partners").forEach((function(i) {
                i.shortName === e && (t = !0)
            }
            )),
            t
        }
        ,
        this.getCleanedAdUnits = function() {
            let e = this.getConfig("adUnits");
            return window[n.b].accountFunctions.cleanUnitConfigs && "function" == typeof window[n.b].accountFunctions.cleanUnitConfigs && (e = window[n.b].accountFunctions.cleanUnitConfigs(e)),
            e
        }
        ,
        this.getUnitConfigFromId = function(e) {
            let t;
            return this.getCleanedAdUnits().forEach((function(i) {
                let n = !0;
                Y.isMobile() && -1 === i.deviceTypes.indexOf("mobile") && (n = !1),
                Y.isDesktop() && -1 === i.deviceTypes.indexOf("desktop") && (n = !1),
                Y.isTablet() && -1 === i.deviceTypes.indexOf("tablet") && (n = !1),
                i.elementId === e && n && (t = i)
            }
            )),
            t
        }
    }
    ;
    const Y = new function() {
        this.lastUserInteraction = null,
        this.currentScrollDirection = "down",
        this.lastScrollTop = 0,
        this.pvLogged = !1,
        this.isHuman = !1,
        this.pvId = null,
        this.sessionId = null;
        let e = {};
        this.country = "",
        this.regionState = "",
        this.continent = "",
        this.ip = null,
        this.refreshCount = 0,
        this.currentWindowWidth = 0,
        this.logPageViewManual = !1,
        this.runPostInitAutomatically = !0,
        this.queuePostInit = !1,
        this.excludeBidders = [],
        this.floors = {},
        this.cookieDeprecationState = null,
        this.zzMap = {},
        this.zfMap = {},
        this.refreshOnResize = !0,
        this.flooringTestGroup = 0,
        this.initialize = function() {
            this.newPageView(),
            this.defineTestGroups(),
            document.addEventListener("userInteraction", this.userInteractionHandler)
        }
        ,
        this.userInteractionHandler = function() {
            Y.lastUserInteraction = Date.now()
        }
        ,
        this.newPageView = function() {
            this.pvLogged = !1,
            K.incrementSessionDepth(),
            this.refreshCount = 0,
            this.pvId = fe(),
            this.addPageViewIdToLocalStorage(this.pvId),
            this.lastUserInteraction = Date.now(),
            this.logPageViewManual || J()
        }
        ,
        this.addPageViewIdToLocalStorage = function(e) {
            if (!be)
                return;
            let t = [];
            const i = "lngtd-pvids";
            try {
                const n = window.localStorage.getItem(i);
                n && (t = JSON.parse(n)),
                Array.isArray(t) || (t = []),
                t.push(e),
                t.length > 10 && (t = t.slice(-10)),
                window.localStorage.setItem(i, JSON.stringify(t))
            } catch (e) {
                console.error("Failed to update localStorage:", e)
            }
        }
        ,
        this.defineEnvironment = function() {
            try {
                let t = (new s.a).getResult().withFeatureCheck();
                e.os = t.os.name || "unknown",
                e.browser = t.browser.name || "unknown",
                e.device = t.device.model || "unknown",
                e.device_type = t.device.type || "desktop",
                e.browser_version = t.browser.version || "unknown",
                e.combined = e.device + "|" + e.browser + "|" + e.os
            } catch (e) {}
            this.currentWindowWidth = window.innerWidth;
            try {
                navigator.cookieDeprecationLabel.getValue().then(e => {
                    this.cookieDeprecationState = e
                }
                )
            } catch (e) {}
            window[n.b].accountFunctions.environmentCustomizations && "function" == typeof window[n.b].accountFunctions.environmentCustomizations && window[n.b].accountFunctions.environmentCustomizations()
        }
        ,
        this.defineTestGroups = function() {
            let e = Math.random();
            e >= .88 && (this.flooringTestGroup = e < .91 ? 1 : e < .94 ? 2 : e < .97 ? 3 : 4)
        }
        ,
        this.getDomain = function() {
            return window.location.hostname
        }
        ,
        this.getDeviceType = function() {
            return e.device_type
        }
        ,
        this.getBrowser = function() {
            return e.browser
        }
        ,
        this.getOS = function() {
            return e.os
        }
        ,
        this.getOrientation = function() {
            return window.innerWidth > window.innerHeight ? "Landscape" : "Portrait"
        }
        ,
        this.isMobile = function() {
            let t;
            try {
                let i = document.documentElement.clientWidth || document.body.clientWidth;
                t = "unknown" !== e.device_type ? "mobile" === e.device_type : i < 668,
                ["unknown", "tablet"].indexOf(Y.getDeviceType()) > -1 && "Portrait" === this.getOrientation() && window.innerWidth < 728 && (t = !0)
            } catch (e) {
                t = !1
            }
            return t
        }
        ,
        this.isTablet = function() {
            return !!le("forcetablet") || ["unknown", "tablet"].indexOf(Y.getDeviceType()) > -1 && "Portrait" === this.getOrientation() && window.innerWidth >= 728
        }
        ,
        this.isDesktop = function() {
            return !this.isMobile() && !this.isTablet()
        }
        ,
        this.getZZBidVal = function(e, t) {
            try {
                let e = this.zzMap
                  , i = t.slice(-5);
                if (e.hasOwnProperty(i))
                    return parseFloat(e[i])
            } catch (e) {}
            return e
        }
        ,
        this.getZFBidVal = function(e) {
            try {
                let t = this.zfMap;
                if (t.hasOwnProperty(e))
                    return parseFloat(t[e])
            } catch (e) {}
            return null
        }
        ,
        this.hasZZMap = function() {
            return !!this.zzMap && Object.keys(this.zzMap).length > 0
        }
        ,
        this.hasZFMap = function() {
            return !!this.zfMap && Object.keys(this.zfMap).length > 0
        }
    }
    ;
    const K = new function() {
        this.sessionId = null,
        this.sessionDepth = 0,
        this.initialize = function() {
            this.getSetSessionId()
        }
        ,
        this.incrementSessionDepth = function() {
            let e = "0";
            if (me) {
                e = window.sessionStorage.getItem("lngtd-sdp"),
                "" !== e && null != e || (window.sessionStorage.setItem("lngtd-sdp", "1"),
                e = "0");
                let t = parseInt(e) + 1;
                window.sessionStorage.setItem("lngtd-sdp", t.toString())
            } else {
                let e = he("lngtd-sdp");
                "" !== e && null != e || (ge("lngtd-sdp", "1"),
                e = "0"),
                ge("lngtd-sdp", (parseInt(e) + 1).toString())
            }
            this.sessionDepth = parseInt(e)
        }
        ,
        this.getSetSessionId = function() {
            let e;
            me ? (e = window.sessionStorage.getItem("lngtd-session"),
            "" !== e && null != e || (e = fe(),
            window.sessionStorage.setItem("lngtd-session", e))) : (e = he("lngtd-session"),
            "" !== e && null != e || (e = fe(),
            ge("lngtd-session", e))),
            this.sessionId = e
        }
    }
    ;
    function ee(e) {
        let t;
        return X.getConfig("partners").forEach((function(i) {
            i.shortName === e && (t = i)
        }
        )),
        t
    }
    function te() {
        return Y.isMobile() ? X.getConfig("account.mobileTimeout") : X.getConfig("account.desktopTimeout")
    }
    function ie(e) {
        let t = X.getConfig("account.pricePoints");
        if (0 === e)
            return 0;
        {
            let i = parseFloat(t[0])
              , n = Math.abs(e - i);
            return t.forEach((function(t) {
                t = parseFloat(t);
                let o = Math.abs(e - t);
                o < n && (n = o,
                i = t)
            }
            )),
            i
        }
    }
    function ne(e) {
        let t = X.getConfig("account.pricePointsNew");
        if (0 === e)
            return 0;
        {
            let i = parseFloat(t[0])
              , n = Math.abs(e - i);
            return t.forEach((function(t) {
                t = parseFloat(t);
                let o = Math.abs(e - t);
                o < n && (n = o,
                i = t)
            }
            )),
            i
        }
    }
    function oe(e) {
        this.cleanSizes = function() {
            this.config.mediaTypes.banner.sizes = this.filterSizes(this.config.mediaTypes.banner.sizes),
            this.config.gamSizes = this.filterSizes(this.config.gamSizes)
        }
        ,
        this.filterSizes = function(e) {
            let t = this
              , i = window.innerWidth
              , n = e.filter(e => e[0] <= i || "fluid" === e || "out-of-page" === e || "interstitial" === e || 1800 === e[0]);
            if (this.config.breakpointsSizes)
                try {
                    let e, o;
                    Object.keys(this.config.breakpointsSizes).forEach((function(n) {
                        e = parseInt(n),
                        i >= e && (o = t.config.breakpointsSizes[n])
                    }
                    )),
                    n = o ? n.filter(e => function(e, t) {
                        var i, n, o;
                        for (i = 0; i < e.length; ++i)
                            if (t.length === e[i].length) {
                                for (o = e[i],
                                n = 0; n < t.length && t[n] === o[n]; ++n)
                                    ;
                                if (n === t.length)
                                    return i
                            }
                        return -1
                    }(o, e) > -1) : []
                } catch (e) {}
            return n
        }
        ,
        de.call(this, e),
        this.stickyInContainer = void 0 !== this.unitConfiguration.stickyInContainer && "boolean" == typeof this.unitConfiguration.stickyInContainer && this.unitConfiguration.stickyInContainer,
        this.media = "banner",
        this.cleanSizes(),
        this.buildWrapper = function() {
            const e = document.getElementById(this.config.elementId)
              , t = re;
            if (e && !this.wrapperBuilt && !e.classList.contains(t) && !e.parentNode.classList.contains(t)) {
                let i = document.createElement("div");
                this.wrapperId = "ad-wrapper-" + this.config.elementId,
                i.className = e.className,
                i.classList.add(t),
                i.id = this.wrapperId,
                e.className = "",
                e.parentNode.insertBefore(i, e.nextSibling),
                i.appendChild(e),
                this.applyWrapperStyles(i),
                this.wrapperBuilt = !0
            }
        }
        ,
        this.applyWrapperStyles = function(e) {
            let t = "";
            if (this.config.clsSize)
                try {
                    const i = this.config.clsSize[0]
                      , n = this.config.clsSize[1];
                    t += "#" + this.config.elementId + " div iframe, #" + e.id + ", #" + this.config.elementId + " div div {min-width:" + i + "px;min-height:" + n + "px;}"
                } catch (e) {}
            window[n.b].accountFunctions.wrapperStyles && (t += "#" + e.id + " " + window[n.b].accountFunctions.wrapperStyles),
            this.stickyInContainer && (t += "#" + this.config.elementId + " {position:sticky;top:0;}");
            let i = document.createElement("style");
            i.innerHTML = t,
            i.classList.add("lngtd-ad-wrapper-styles"),
            document.head.appendChild(i)
        }
        ,
        this.applyBidSizingToWrapper = function(e) {
            let t = ["kargo"];
            try {
                if (-1 === t.indexOf(e.bidderCode)) {
                    let t = document.querySelector("#" + this.config.elementId + ">div>iframe")
                      , i = document.querySelector("#" + this.config.elementId + ">div");
                    t.style.minHeight = e.height + "px",
                    t.style.minWidth = e.width + "px",
                    i.style.minHeight = e.height + "px",
                    i.style.minWidth = e.width + "px"
                }
            } catch (e) {}
        }
    }
    let se = {};
    se.banner = oe;
    const re = "lngtd-ad-wrapper-banner";
    const ae = new function() {
        this.adUnits = [],
        this.hiddenAdClass = null,
        this.disallowSticky = !1,
        this.mustDisplayTogetherReady = [],
        this.mustDisplayTogetherHandled = [],
        this.initializeUnits = function() {
            let e = this;
            X.getCleanedAdUnits().forEach((function(t) {
                e.initializeUnit(t)
            }
            )),
            this.addDefaultStylesForUnits()
        }
        ,
        this.initializeUnit = function(e) {
            let t, i = e.unitType || "banner", n = se[i], o = !1;
            if (this.adUnits.forEach((function(i) {
                i.config.elementId === e.elementId && (o = !0,
                t = i)
            }
            )),
            !o && !t)
                try {
                    L("Initializing unit with config", e),
                    t = new n(e),
                    t.canRun() ? (t.setup(),
                    this.adUnits.push(t),
                    O.addAdUnit(t.config),
                    X.getConfig("account.useGAM") && !t.skipGAM && B.initializeUnit(t)) : (L(`Unit ${e.elementId} is not allowed to run on this page.`),
                    t.applyHiddenAdClass(),
                    t.retire(!0))
                } catch (e) {
                    L(e)
                }
            return t
        }
        ,
        this.allPostInit = function() {
            ae.adUnits.forEach((function(e) {
                pe((function() {
                    e.doPostInit()
                }
                ))
            }
            ))
        }
        ,
        this.getAllUnitConfigs = function() {
            let e = [];
            return this.adUnits.forEach((function(t) {
                e.push(t.config)
            }
            )),
            e
        }
        ,
        this.getUnitFromId = function(e) {
            let t = null;
            return this.adUnits.forEach((function(i) {
                i.config.elementId === e && (t = i)
            }
            )),
            t
        }
        ,
        this.getUnitFromCode = function(e) {
            let t = null;
            return this.adUnits.forEach((function(i) {
                i.config.code === e && (t = i)
            }
            )),
            t
        }
        ,
        this.getUnitFromPath = function(e) {
            let t = null;
            return this.adUnits.forEach((function(i) {
                i.config.gamPath === e && (t = i)
            }
            )),
            t
        }
        ,
        this.getAdUnitsOfType = function(e) {
            return this.adUnits.filter((function(t) {
                return t.config.unitType === e
            }
            ))
        }
        ,
        this.makeGAMCall = function(e, t) {
            let i = null;
            if (window[n.b].accountFunctions.getMustDisplayTogether && "function" == typeof window[n.b].accountFunctions.getMustDisplayTogether && (i = window[n.b].accountFunctions.getMustDisplayTogether()),
            k.setGAMTargeting(e),
            "init" === t && i && -1 === this.mustDisplayTogetherHandled.indexOf(e.config.code)) {
                L("For unit, must run together with these others", e.config.elementId, i);
                let n = !1
                  , o = null
                  , s = [];
                i.forEach((function(t) {
                    t.indexOf(e.config.code) > -1 && (o = t,
                    -1 === ae.mustDisplayTogetherReady.indexOf(e.config.code) && ae.mustDisplayTogetherReady.push(e.config.code))
                }
                )),
                o ? (o.forEach((function(e) {
                    let t = ae.getUnitFromCode(e)
                      , i = null;
                    t && (i = document.getElementById(t.config.elementId)),
                    t && i ? s.push(t) : ae.mustDisplayTogetherReady.push(e),
                    -1 === ae.mustDisplayTogetherReady.indexOf(e) && (n = !0)
                }
                )),
                n || (s.forEach((function(e) {
                    ae.mustDisplayTogetherHandled.push(e.config.code)
                }
                )),
                B.doPubAdsRefresh(s, t))) : B.doPubAdsRefresh([e], t)
            } else
                B.doPubAdsRefresh([e], t)
        }
        ,
        this.resetAnchors = function() {
            let e = this;
            ["danchor", "manchor", "sidebar-sticky"].forEach((function(t) {
                try {
                    e.getAdUnitsOfType(t)[0].reset()
                } catch (e) {}
            }
            )),
            this.disallowSticky = !1
        }
        ,
        this.resetMoments = function() {
            let e = this;
            ["moment-display", "moment-video"].forEach((function(t) {
                try {
                    e.getAdUnitsOfType(t)[0].reset()
                } catch (e) {}
            }
            ))
        }
        ,
        this.retireAllUnits = function() {
            this.adUnits.forEach((function(e) {
                e.retire(!1)
            }
            )),
            this.adUnits = [],
            this.removeListeners()
        }
        ,
        this.userInteractionHandler = function() {
            window[n.b].refreshPaused || ae.adUnits.forEach((function(e) {
                e.canDisplayDueToUserInteraction && e.display("userInteraction")
            }
            ))
        }
        ,
        this._listenersAdded = !1,
        this.addListeners = function() {
            this._listenersAdded || (this._listenersAdded = !0,
            document.addEventListener("userInteraction", this.userInteractionHandler))
        }
        ,
        this.removeListeners = function() {
            this._listenersAdded = !1,
            document.removeEventListener("userInteraction", this.userInteractionHandler)
        }
        ,
        this.setUpUnitMediation = function() {
            this.adUnits.forEach((function(e) {
                try {
                    e.setUpMediation()
                } catch (t) {
                    L("Error setting up mediation with unit", e.config.elementId, t)
                }
            }
            ))
        }
        ,
        this.removeAdWrapperStyles = function() {
            try {
                document.querySelectorAll(".lngtd-ad-wrapper-styles").forEach(e => e.remove())
            } catch (e) {}
        }
        ,
        this.addDefaultStylesForUnits = function() {
            let e = document.createElement("style");
            e.innerHTML = ".lngtd-dynamic-ad-container>div>div>iframe,.lngtd-dynamic-ad-container>div>iframe,.lngtd-dynamic-ad-container>iframe {margin: 0 auto;}.lngtd-ad-wrapper-banner>div>div>iframe,.lngtd-ad-wrapper-banner>div>iframe,.lngtd-ad-wrapper-banner>iframe {margin:0 auto;}",
            document.head.appendChild(e)
        }
    }
    ;
    function de(e) {
        this.unitConfiguration = void 0 !== e.unitConfiguration ? e.unitConfiguration : {},
        this.config = e,
        this.media = "",
        this.initialized = !1,
        this.displayed = !1,
        this.refreshed = !1,
        this.retired = !1,
        this.impressionType = "init",
        this.lastAuction = null,
        this.lastAdvertiser = null,
        this.confiantRefreshed = !1,
        this.alwaysCacheBids = void 0 !== this.unitConfiguration.alwaysCacheBids && "boolean" == typeof this.unitConfiguration.alwaysCacheBids && this.unitConfiguration.alwaysCacheBids,
        this.metViewability = !1,
        this.metGPTViewability = !1,
        this.biddersActivity = {},
        this.auctionRunning = null,
        this.prebidAuctionRunning = !1,
        this.amazonAuctionRunning = !1,
        this.staticTags = void 0 !== this.unitConfiguration.staticTags ? this.unitConfiguration.staticTags : null,
        this.lastStaticCall = null,
        this.directTags = void 0 !== this.unitConfiguration.directTags ? this.unitConfiguration.directTags : null,
        this.lastDirectCall = null,
        this.displayInterval = null,
        this.refreshTimeout = null,
        this.filledImpressionCount = 0,
        this.allImpressionCount = 0,
        this.allowUnfilledRetries = "number" == typeof X.getConfig("account.allowUnfilledRetries") ? X.getConfig("account.allowUnfilledRetries") : 1,
        this.unfilledRetryAttempts = 0,
        this.secondChanceTimeout = null,
        this.canDisplayDueToUserInteraction = !0,
        this.refreshUnfilledImpressions = "boolean" == typeof X.getConfig("account.refreshUnfilledImpressions") && X.getConfig("account.refreshUnfilledImpressions"),
        this.refreshUnfilledInterval = "number" == typeof X.getConfig("account.refreshUnfilledImpressionsAfter") ? X.getConfig("account.refreshUnfilledImpressionsAfter") : 3e4,
        this.amazonTargeting = null,
        this.currentImpressionId = null,
        this.winningBid = null,
        this.creativeErrors = [],
        this.creativeIdBlocks = Array.isArray(X.getConfig("account.creativeIdBlocks")) ? X.getConfig("account.creativeIdBlocks") : [],
        this.parentElementId = null,
        this.overrideParentSize = void 0 !== this.unitConfiguration.overrideParentSize && this.unitConfiguration.overrideParentSize,
        this.skipGAM = void 0 !== this.unitConfiguration.skipGAM && "boolean" == typeof this.unitConfiguration.skipGAM && this.unitConfiguration.skipGAM,
        this.excludeFromAmazon = void 0 !== this.unitConfiguration.excludeFromAmazon && "boolean" == typeof this.unitConfiguration.excludeFromAmazon && this.unitConfiguration.excludeFromAmazon,
        this.getAddedTargetingFunc = void 0 !== this.unitConfiguration.getAddedTargetingFunc ? this.unitConfiguration.getAddedTargetingFunc : null,
        this.refreshInterval = void 0 !== this.unitConfiguration.refreshInterval && "number" == typeof this.unitConfiguration.refreshInterval ? this.unitConfiguration.refreshInterval : X.getConfig("account.refreshInterval"),
        this.impressionCallback = function() {}
        ,
        this.setup = function() {}
        ,
        this.setUpMediation = function() {}
        ,
        this.wrapperBuilt = !1,
        this.wrapperId = null,
        this.useWrapper = "boolean" != typeof this.unitConfiguration.useWrapper || this.unitConfiguration.useWrapper,
        this.buildWrapper = function() {}
        ,
        this.applyBidSizingToWrapper = function() {}
        ,
        this.reset = function() {}
        ,
        this.bidCachePromises = {},
        this.cacheBidPromise = function() {}
        ,
        this.overrideConfigForGAM = null,
        this.doPostInit = function() {
            this.runAuction(this.impressionType)
        }
        ,
        this.applyHiddenAdClass = function() {
            let e = document.getElementById(this.config.elementId);
            ae.hiddenAdClass && e && e.classList.add(ae.hiddenAdClass)
        }
        ,
        this.cleanForTestBidder = function() {
            let e = le("testbidder")
              , t = this.config.bids.length;
            for (; t--; ) {
                let i = this.config.bids[t];
                Y.excludeBidders.length && Y.excludeBidders.indexOf(i.bidder) > -1 && (e && e === i.bidder || this.config.bids.splice(t, 1)),
                e && i.bidder !== e && this.config.bids.splice(t, 1)
            }
        }
        ,
        this.cleanBidders = function() {
            let e = this
              , t = this.config.bids.length;
            for (; t--; ) {
                let i = this.config.bids[t];
                "adagio" === i.bidder && (i.params.category = Y.country,
                i.params.environment = !0 === Y.isMobile() ? "mobile" : "desktop");
                try {
                    "ogury" === i.bidder && (i.params.onAdShow = function(t) {
                        let i = window.top.document.querySelector("#ogy-root-container-" + t.ad_unit_id);
                        try {
                            var n = i.getElementsByTagName("iFrame")[0].contentDocument
                              , o = n.body.querySelector("#close-btn");
                            if (!o) {
                                let t = setInterval( () => {
                                    (o = n.body.querySelector("#close-btn")) && (o.addEventListener("click", () => {
                                        ["danchor", "manchor"].indexOf(e.config.unitType) > -1 && e.close()
                                    }
                                    ),
                                    clearInterval(t))
                                }
                                , 500)
                            }
                        } catch (e) {}
                    }
                    )
                } catch (e) {}
            }
        }
        ,
        this.cleanGeos = function() {
            let e = [];
            this.config.bids.forEach(t => {
                let i = "groupm-xandr" === t.bidder ? "groupm" : t.bidder
                  , n = Y.country
                  , o = !1;
                X.getConfig("partners").forEach(e => {
                    i === e.shortName && (e.geoRestrictionsInclude && n && !e.geoRestrictionsInclude.includes(n) && (o = !0),
                    e.geoRestrictionsExclude && n && e.geoRestrictionsExclude.includes(n) && (o = !0))
                }
                ),
                !o && t.geoRestrictionsInclude && n && !t.geoRestrictionsInclude.includes(n) && (o = !0),
                !o && t.geoRestrictionsExclude && n && t.geoRestrictionsExclude.includes(n) && (o = !0),
                o || (delete t.geoRestrictionsInclude,
                delete t.geoRestrictionsExclude,
                e.push(t))
            }
            ),
            this.config.bids = e
        }
        ,
        this.cleanUnit = function() {
            this.cleanBidders(),
            this.cleanForTestBidder(),
            this.cleanGeos()
        }
        ,
        this.canRun = function() {
            let e = !0;
            if (this.unitConfiguration.excludeUrls) {
                const t = this.unitConfiguration.excludeUrls.split(/\s*,\s*/).filter(Boolean);
                for (const i of t) {
                    if (new RegExp(i).test(window.location.pathname)) {
                        e = !1;
                        break
                    }
                }
            }
            return Y.isMobile() && -1 === this.config.deviceTypes.indexOf("mobile") && (e = !1),
            Y.isDesktop() && -1 === this.config.deviceTypes.indexOf("desktop") && (e = !1),
            Y.isTablet() && -1 === this.config.deviceTypes.indexOf("tablet") && (e = !1),
            window[n.b].manualExcludeUnits.indexOf(this.config.elementId) > -1 && (e = !1),
            this.unitConfiguration.minWindowWidth && window.innerWidth < this.unitConfiguration.minWindowWidth && (e = !1),
            e
        }
        ,
        this.startViewabilityCheck = function() {
            let e, t = this;
            !function(e, t) {
                const i = document.getElementById(e)
                  , n = {
                    root: null,
                    rootMargin: "0px",
                    threshold: [0, .5, 1]
                };
                let o, s = !1;
                const r = function(e) {
                    let i = null;
                    if (e.forEach((function(e) {
                        (!i || e.time > i.time) && (i = e)
                    }
                    )),
                    i) {
                        let e = 0;
                        const {intersectionRatio: n} = i;
                        if (n > 0 && (e = n),
                        0 === e && !s)
                            return void (s = !0);
                        o = setTimeout((function() {
                            t(e)
                        }
                        ), 0)
                    }
                };
                if (i) {
                    const e = new IntersectionObserver(r,n);
                    return e.observe(i),
                    {
                        remove: function() {
                            e.disconnect(),
                            clearTimeout(o)
                        }
                    }
                }
            }(this.config.elementId, (function(i) {
                clearTimeout(e),
                i >= .5 && (e = setTimeout((function() {
                    t.markAsViewable()
                }
                ), 1250))
            }
            ))
        }
        ,
        this.markAsViewable = function() {
            this.metViewability || (L("Viewability met for unit", this.config.elementId),
            this.metViewability = !0,
            this.logImpressionAsViewable(),
            this._startRefresh())
        }
        ,
        this.logImpressionAsViewable = function() {
            let e = {
                uid: this.currentImpressionId
            };
            j("viewable_impression", Z(), e, null),
            this.currentImpressionId = null
        }
        ,
        this._viewabilityMetForRefresh = function() {
            if (["eb", "adx"].indexOf(this.lastAdvertiser) > -1) {
                if (this.metGPTViewability)
                    return !0
            } else if (this.metViewability)
                return !0;
            return !1
        }
        ,
        this.refresh = function() {
            if (this.canRefreshUserInteraction())
                if (this._viewabilityMetForRefresh()) {
                    if (!0 === X.getConfig("account.useGAM")) {
                        try {
                            B.slots[this.config.elementId].clearTargeting()
                        } catch (e) {
                            L("Error clearing targeting for ", this.config.elementId)
                        }
                        B.resetSlotTargeting(this)
                    }
                    this.runAuction("refresh")
                } else
                    L("Unit cannot refresh because viewability was not met", this.config);
            else
                L(`Unit ${this.config.elementId} cannot refresh because user has not interacted with page recently`)
        }
        ,
        this.getRefreshInterval = function() {
            let e = this.refreshInterval;
            return window[n.b].accountFunctions.getRefreshInterval && "function" == typeof window[n.b].accountFunctions.getRefreshInterval && (e = window[n.b].accountFunctions.getRefreshInterval(this)),
            e
        }
        ,
        this._startRefresh = function(e) {
            let t = this;
            e = void 0 !== e ? e : this.getRefreshInterval(),
            X.getConfig("account.refreshEnabled") && this.config.refresh && !this.refreshTimeout && (this.refreshTimeout = setTimeout((function() {
                t.refreshTimeout = null,
                t.impressionType = "refresh",
                L(`Triggering refresh of ad unit ${t.config.elementId} after ${e}ms`),
                t.refresh()
            }
            ), e))
        }
        ,
        this._doUnfilledRefresh = function() {
            this.metViewability = !0,
            this._startRefresh(this.refreshUnfilledInterval)
        }
        ,
        this.handleHeavyAdIntervention = function() {
            let e;
            e = this.winningBid ? {
                unit: this.config.gamPath,
                bidder: this.winningBid.bidderCode,
                req_id: this.winningBid.requestId,
                ad_id: this.winningBid.adId,
                uid: ye(this.winningBid)
            } : {
                unit: this.config.gamPath,
                bidder: null,
                uid: null
            },
            j("chrome_heavy_ad", Z(), null, e),
            this.markAsViewable(),
            this.displayed = !1,
            this.refresh()
        }
        ,
        this.addOrtbParams = function() {
            let e = this.config.gamPath;
            if (this.config.gamPath && "dynamic-parent" !== this.config.unitType || (e = this.config.elementId),
            window[n.b].accountFunctions.getUnitGPID && "function" == typeof window[n.b].accountFunctions.getUnitGPID) {
                const t = window[n.b].accountFunctions.getUnitGPID(this.config);
                t && (e = t)
            }
            this.config.ortb2Imp = {
                ext: {
                    gpid: e,
                    data: {
                        pbadslot: this.config.gamPath
                    }
                },
                battr: [3]
            }
        }
        ,
        this.modifyConfig = function() {
            this.addOrtbParams()
        }
        ,
        this.auctionFloors = {},
        this.getFloorForEnv = function(e, t) {
            let i = parseFloat(this.config.baseFloor);
            if (t = void 0 === t || t,
            (e = void 0 !== e ? e : this.currentAuctionId) && this.auctionFloors.hasOwnProperty(e))
                return this.auctionFloors[e];
            try {
                le("floor_override") && (i = parseFloat(le("floor_override")))
            } catch (e) {}
            let n, o = i;
            if (this.config.dynamicFloorParameters && (n = JSON.parse(this.config.dynamicFloorParameters)),
            X.getConfig("account.dynamicFloorsEnabled") && !this.unitConfiguration.useStaticFloor)
                try {
                    let e = {};
                    try {
                        e = JSON.parse(Y.floors[this.config.uid])
                    } catch (e) {}
                    const t = [];
                    t.push(Y.getBrowser()),
                    t.push(Y.country),
                    t.push(!0 === Y.isMobile() ? "mobile" : "desktop"),
                    t.push(X.getConfig("account.section")),
                    t.push(0 === K.sessionDepth ? "A" : K.sessionDepth > 2 ? "C" : "B");
                    const n = t.join("_")
                      , s = [Y.getBrowser(), Y.country].join("_")
                      , r = Y.country;
                    o = e.hasOwnProperty(n) ? e[n] : e.hasOwnProperty(s) ? e[s] : e.hasOwnProperty(r) ? e[r] : e.default,
                    o || (o = i)
                } catch (e) {}
            else if (n && n.geo_floors)
                try {
                    let e = n.geo_floors;
                    Object.keys(e).length > 0 && (e.hasOwnProperty(Y.country) && "number" == typeof e[Y.country] ? o = e[Y.country] : e.hasOwnProperty("ESC") && ["CA", "GB", "AU", "NZ", "IE"].includes(Y.country) && "number" == typeof e.ESC ? o = e.ESC : e.hasOwnProperty("ROW") && !["CA", "GB", "AU", "NZ", "IE", "US"].includes(Y.country) && "number" == typeof e.ROW && (o = e.ROW))
                } catch (e) {
                    L("Invalid geo_floors format, using base floor", e)
                }
            if (t)
                try {
                    let e = this.getHighestBid();
                    if (e && (o = Math.max(o, e.cpm)),
                    X.getConfig("account.dynamicFloorsEnabled") && this.filledImpressionCount) {
                        let e = this.getAllAvailableBidsInPool().reduce( (e, t) => e + t.cpm, 0);
                        let t = (o + e / 3) / 2;
                        o = this.multipleBidderBidsInPool() ? Math.max(o, t) : t
                    }
                } catch (e) {}
            return this.auctionFloors.hasOwnProperty(e) || (this.auctionFloors[e] = o),
            o
        }
        ,
        this.applyTestGroup = function(e, t) {
            return 1 === t || 2 === t ? Math.round(e * t / 4 * 100) / 100 : 3 === t || 4 === t ? Math.round(e * t / 2 * 100) / 100 : Math.round(100 * e) / 100
        }
        ,
        this.currentAuctionId = null,
        this.runAuction = function() {
            let e = this;
            this.auctionRunning && L(`Already auctioning this unit, so will remove (${this.config.elementId}) from this new auction`);
            let t = fe();
            this.currentAuctionId = t,
            this.auctionRunning = !0,
            this.confiantRefreshed = !1,
            this.lastAuction = Date.now(),
            window[n.c].que.push((function() {
                e.amazonAuctionRunning = !0,
                e.prebidAuctionRunning = !0,
                pe((function() {
                    e.runPrebidAuction(t)
                }
                )),
                pe((function() {
                    e.runAmazonAuction(t)
                }
                ))
            }
            ))
        }
        ,
        this.runPrebidAuction = function(e) {
            let t = this;
            this.config.bids.filter(e => "amazon" !== e.bidder).length ? (L(`Running prebid auction for unit ${t.config.elementId} with config:`, t.config, e),
            window[n.c].requestBids({
                adUnitCodes: [t.config.code],
                bidsBackHandler: function(e, i, n) {
                    t.prebidAuctionRunning = !1,
                    t.auctionComplete()
                },
                timeout: te(),
                auctionId: e
            })) : (L(`NOT running prebid auction for ${this.config.elementId} because no bids present.`),
            this.prebidAuctionRunning = !1,
            t.auctionComplete())
        }
        ,
        this.getPrebidUnit = function() {
            const e = this;
            let t;
            try {
                window[n.c].adUnits.forEach((function(i) {
                    i.code === e.config.code && (t = i)
                }
                ))
            } catch (e) {}
            return t
        }
        ,
        this.shouldCallAmazon = function() {
            let e = k.getAmazonConfigForUnit(this);
            try {
                return e && this.config.mediaTypes.banner.sizes.length > 0 && k.initialized && !this.shouldSleepBidder("amazon")
            } catch (e) {
                return !1
            }
        }
        ,
        this.runAmazonAuction = function(e) {
            let t = this;
            this.amazonTargeting = null,
            this.shouldCallAmazon() ? (L("Running amazon auction for " + this.config.elementId),
            k.runAuction(this, (function() {
                t.amazonAuctionRunning = !1,
                k.setBidsOnUnit(t, e),
                k.logBidsToBQ(t, e),
                t.auctionComplete()
            }
            ))) : (L(`NOT running amazon auction for ${this.config.elementId}.`),
            this.amazonAuctionRunning = !1,
            t.auctionComplete())
        }
        ,
        this.auctionComplete = function() {
            this.amazonAuctionRunning || this.prebidAuctionRunning || (L("Auctions complete for unit " + this.config.elementId),
            this.auctionRunning = !1,
            this.display("auction"))
        }
        ,
        this.getHighestBid = function() {
            let e = null
              , t = window[n.c].getHighestCpmBids(this.config.code);
            return t.length > 0 && (e = t[0]),
            e
        }
        ,
        this.getSecondBid = function(e=null) {
            let t = null;
            try {
                let i = this.getAllAvailableBidsInPool();
                if (i.length > 0) {
                    let n = e ? i.filter(t => t.bidderCode !== e) : i;
                    n = e ? n.filter(e => e.responseTimestamp < this.displayed) : n,
                    n.sort( (e, t) => t.originalCpm - e.originalCpm),
                    n.length > 0 && (t = n[0])
                }
            } catch (e) {}
            return t
        }
        ,
        this.timeSinceLastAuction = function() {
            let e = 0;
            return this.lastAuction && (e = Date.now() - this.lastAuction),
            e
        }
        ,
        this.canRefreshUserInteraction = function() {
            let e = Date.now() - Y.lastUserInteraction
              , t = !X.getConfig("account.refreshRequiresUserInteraction") || e < 18e4;
            return t || (clearInterval(this.displayInterval),
            window[n.b].pauseRefresh(!0, "userInteraction")),
            t
        }
        ,
        this.isInView = function() {
            return function(e, t) {
                void 0 === t && (t = 50);
                let i = document.getElementById(e);
                if (!i)
                    return !1;
                if (!function(e) {
                    let t = document.getElementById(e);
                    if (!t)
                        return !1;
                    let i = t.currentStyle ? t.currentStyle.visibility : getComputedStyle(t, null).visibility
                      , n = t.currentStyle ? t.currentStyle.display : getComputedStyle(t, null).display;
                    if ("hidden" === i || "none" === n)
                        return !1;
                    for (; !/body/i.test(t); )
                        if (t = t.parentNode,
                        i = t.currentStyle ? t.currentStyle.visibility : getComputedStyle(t, null).visibility,
                        n = t.currentStyle ? t.currentStyle.display : getComputedStyle(t, null).display,
                        "hidden" === i || "none" === n)
                            return !1;
                    return !0
                }(e))
                    return !1;
                try {
                    let e = i.getBoundingClientRect()
                      , n = window.innerHeight || document.documentElement.clientHeight;
                    return !(Math.floor(100 - (e.top >= 0 ? 0 : e.top) / (+-e.height / 1) * 100) < t || Math.floor(100 - (e.bottom - n) / e.height * 100) < t)
                } catch (e) {
                    return !1
                }
            }(this.config.elementId)
        }
        ,
        this.canDisplay = function() {
            let e = !1;
            if (this.displayed && !this.config.refresh)
                return !1;
            const t = Date.now() - this.displayed;
            if (this.displayed && t < this.getRefreshInterval())
                return L("Cannot display unit because it was displayed less than the refresh interval ago:", this.config.elementId),
                !1;
            if (!this.canRefreshUserInteraction())
                return L("Cannot display unit because the user has not interacted with the page recently:", this.config.elementId),
                !1;
            let i = this.isInView();
            return this.displayed ? this.config.refresh && (i && this._viewabilityMetForRefresh() && -1 === window[n.b].refreshDisallowed.indexOf(this.config.elementId) ? e = !0 : L("Cannot refresh unit because it didn't meet viewability requirements or is not allowed to refresh:", this.config.elementId)) : (!1 === this.config.lazyLoad || i) && this.lastAuction && this.timeSinceLastAuction() < 6e4 && (e = !0),
            e
        }
        ,
        this.deferDisplay = function() {
            const e = this;
            this.displayInterval || (L("Deferring display of unit because it cannot currently display", this.config.elementId),
            this.displayInterval = setInterval((function() {
                e.display("delay")
            }
            ), 500))
        }
        ,
        this.startSecondChance = function() {
            const e = this;
            this.secondChanceTimeout || (L("Setting up second chance opportunity for", this.config.elementId),
            this.secondChanceTimeout = setTimeout((function() {
                L("Firing second chance opportunity for", e.config.elementId),
                e.displayed = !1,
                e.refreshed = !1,
                e.secondChanceTimeout = null,
                e.secondChance()
            }
            ), 15e3))
        }
        ,
        this.secondChance = function() {
            this.runAuction()
        }
        ,
        this.retire = function(e) {
            if (L("Retiring " + this.config.elementId),
            this.retired = !0,
            clearInterval(this.displayInterval),
            clearTimeout(this.secondChanceTimeout),
            clearTimeout(this.refreshTimeout),
            e) {
                const e = ae.adUnits.indexOf(this);
                e > -1 && ae.adUnits.splice(e, 1)
            }
            try {
                this.cleanup()
            } catch (e) {}
        }
        ,
        this.cleanup = function() {}
        ,
        this.display = function(e) {
            if (this.displayed && ["scroll", "focus", "click", "userInteraction"].indexOf(e) > -1 && (this.refreshTimeout || !this._viewabilityMetForRefresh()))
                return;
            if (this.refreshTimeout && "confiant" === e && clearTimeout(this.refreshTimeout),
            this.displayed && !this.config.refresh)
                return;
            if (["scroll", "focus", "click", "userInteraction"].indexOf(e) > -1 && this.secondChanceTimeout)
                return;
            if (window[n.b].manualExcludeUnits.indexOf(this.config.elementId) > -1)
                return void L("Cannot display unit because it is manually excluded:", this.config.elementId);
            this.displayInterval || this.refreshTimeout || L(`Display of unit ${this.config.elementId} called with trigger ${e}`);
            let t = this.canDisplay()
              , i = document.getElementById(this.config.elementId);
            !i && this.config.altSelector && (i = document.querySelector(this.config.altSelector),
            i && (this.config.elementId = i.id)),
            "init" === this.impressionType ? (!i || !document.hasFocus() && X.getConfig("account.initRequiresFocus") || this.auctionRunning) && (this.deferDisplay(),
            t = !1) : (!i || window[n.b].refreshPaused || !document.hasFocus() && X.getConfig("account.refreshRequiresFocus")) && (t = !1),
            "force" !== e && "confiant" !== e || (t = !0);
            let o = this.timeSinceLastAuction() > 6e4;
            o && (L("Cannot display unit because auction is stale:", this.config.elementId),
            t = !1,
            this.auctionRunning || this.runAuction(this.impressionType)),
            t ? (this.useWrapper && this.buildWrapper(),
            this.clearThirdPartyCreativeContainers(),
            clearInterval(this.displayInterval),
            this.displayed = Date.now(),
            "refresh" === this.impressionType && (this.refreshed = Date.now()),
            this.metViewability = !1,
            this.metGPTViewability = !1,
            !0 === X.getConfig("account.useGAM") ? ae.makeGAMCall(this, this.impressionType) : this.getHighestBid() ? (this.winningBid = this.getHighestBid(),
            O.renderPrebidWinningBidWithoutGAM(this.getHighestBid(), this.config.elementId)) : window[n.b].fallbackForUnfilledNoGAM(this.config.elementId)) : "auction" === e && L("Not displaying unit ...", this.config.elementId, this.canDisplay(), o, i, this.auctionRunning)
        }
        ,
        this.customizeTargeting = function(e) {
            return e
        }
        ,
        this.adjustBidForAdxMultiplier = function(e, t) {
            const i = parseFloat(X.getConfig("account.adXMultiplier"))
              , n = parseFloat(e);
            t = void 0 !== t ? t : ie;
            let o = n;
            try {
                o = 1 * n * i,
                o = t(o),
                o = o.toFixed(2)
            } catch (e) {}
            return o
        }
        ,
        this.getTargetingForGAM = function() {
            let e = {}
              , t = "false";
            e.elid = this.config.elementId;
            let i = null
              , o = window[n.c].getHighestCpmBids(this.config.code);
            if (o.length > 0) {
                i = o[0];
                let t = i.adserverTargeting;
                for (let n in t)
                    if (t.hasOwnProperty(n) && t[n])
                        try {
                            let o = t[n].toString();
                            if ("hb_pb" === n) {
                                try {
                                    o = this.adjustBidForAdxMultiplier(i.cpm)
                                } catch (e) {}
                                X.getConfig("account.useNewTargeting") && (o = this.adjustBidForAdxMultiplier(i.cpm, ne),
                                n = "lngtd_pb"),
                                B.useSafeFrames && -1 === B.safeFramesExcludePartners.indexOf(i.bidder) && (e.safe_frames = (!0).toString())
                            }
                            e[n] = o
                        } catch (e) {
                            L("Error getting targeting for:", n, t, e)
                        }
            }
            if (!i && X.getConfig("account.dynamicFloorsEnabled"))
                try {
                    e["lngtd-floor"] = B.getUPRForAdUnit(this)[0]
                } catch (e) {}
            let s = B.slots[this.config.elementId].getTargeting("amznbid");
            if (i)
                this.winningBid = i;
            else if (0 !== s.length && s[0].length > 3)
                this.winningBid = null;
            else if (this.winningBid = null,
            t = "true",
            !0 === X.getConfig("account.skipGAMOnNoBids"))
                return L(this.config.elementId, "not calling GAM because no bids returned"),
                !1;
            return le("ensurefill") && (e.ensurefill = "1"),
            e.refresh_count = this.filledImpressionCount,
            e.display_type = this.impressionType,
            e.nobids = t,
            e = this.customizeTargeting(e),
            e
        }
        ,
        this.getWinningBidEstimatedValue = function(e) {
            let t = this.getFloorForEnv(this.currentAuctionId, !1);
            if (this.winningBid && this.winningBid.bidderCode === e)
                t = this.winningBid.originalCpm;
            else if (this.winningBid) {
                const e = parseFloat(X.getConfig("account.adXMultiplier"))
                  , i = parseFloat(this.winningBid.cpm);
                let n = i;
                try {
                    n = i * e,
                    t = ie(n),
                    t = parseFloat(t) + .01
                } catch (e) {}
            } else if (!X.getConfig("account.dynamicFloorsEnabled") && "adx" === e)
                try {
                    const i = X.getConfig("account.partnerAvgPerf")[e]
                      , n = parseFloat(i);
                    n > 0 && (t = n)
                } catch (e) {
                    t = .01
                }
            return "house" !== e && "unknown" !== e && e || (t = 0),
            t
        }
        ,
        this.handleUnfilledImpression = function() {
            if (this.allImpressionCount += 1,
            this.logImpressionToBQ(),
            this.refreshUnfilledImpressions)
                this._doUnfilledRefresh();
            else {
                if (this.refreshed)
                    this.retireAndTrack(!0);
                else {
                    const e = ["out-of-page", "moment-display"];
                    this.allowUnfilledRetries && this.unfilledRetryAttempts < this.allowUnfilledRetries && -1 === window[n.b].secondChanceDisallowed.indexOf(this.config.code) && -1 === e.indexOf(this.config.unitType) ? (this.unfilledRetryAttempts += 1,
                    this.startSecondChance()) : this.retireAndTrack(!0)
                }
                this.reset()
            }
        }
        ,
        this.retireAndTrack = function(e) {
            const t = this;
            try {
                if (X.getConfig("account.refreshEnabled") && this.config.refresh && -1 === window[n.b].refreshDisallowed.indexOf(this.config.elementId)) {
                    const e = this.refreshInterval;
                    setInterval((function() {
                        window[n.b].refreshPaused || t.logRetiredOpportunity()
                    }
                    ), e)
                }
            } catch (e) {}
            this.retire(e)
        }
        ,
        this.logRetiredOpportunity = function() {
            let e = {};
            e.bidfloor = this.getFloorForEnv(null, !0);
            try {
                let t = R.getPrebidUserIdsDefined();
                e.user_ids = t.join("|")
            } catch (e) {}
            e.raw_impression_count = this.allImpressionCount;
            let t = {
                unit: this.config.gamPath,
                media: this.media
            };
            j("retired_opp", Z(), t, e)
        }
        ,
        this.filledImpressionShow = function() {}
        ,
        this.shouldLogImpressionToBQ = function() {
            return !0
        }
        ,
        this.handleFilledImpression = function(e) {
            this.filledImpressionShow();
            let t, i = !1;
            try {
                B.slots[this.config.elementId].getTargetingKeys().indexOf("up_recovery") > -1 && (i = !0)
            } catch (e) {}
            this.filledImpressionCount += 1,
            this.allImpressionCount += 1,
            this.startViewabilityCheck();
            let o, s = !1;
            if (e) {
                let i = Array.isArray(X.getConfig("account.ignoreAdvertiserIds")) ? X.getConfig("account.ignoreAdvertiserIds") : [];
                if (e.advertiserId && i.indexOf(e.advertiserId) > -1)
                    return;
                let o = function() {
                    let e = {};
                    return X.getConfig("partners").forEach((function(t) {
                        t.gamId && (e[t.gamId] = t.shortName)
                    }
                    )),
                    e
                }();
                if (this.winningBid && e.advertiserId == X.getConfig("account.lngtdAdvertiserId") ? (t = this.winningBid.bidderCode,
                s = !0) : this.winningBid ? o.hasOwnProperty(e.advertiserId) ? t = o[e.advertiserId] : !t && e.yieldGroupIds && e.yieldGroupIds.length > 0 && (t = "eb") : o.hasOwnProperty(e.advertiserId) && (t = o[e.advertiserId]),
                !t && e.yieldGroupIds && e.yieldGroupIds.length > 0 && (t = "eb"),
                X.getConfig("account.excludeSponsorshipFromRefresh") && e.lineItemId)
                    try {
                        let t = e.lineItemId.toString();
                        t && X.getConfig("account.sponsorshipLineItemIds").indexOf(t) > -1 && window[n.b].refreshDisallowed.push(this.config.elementId)
                    } catch (t) {
                        L("Issue preventing sponsorship refresh for", e, t)
                    }
                "object" == typeof X.getConfig("account.specialLineItemIds") && Object.keys(X.getConfig("account.specialLineItemIds")).length > 0 && e.lineItemId && window[n.b].accountFunctions.handleSpecialLineItem && "function" == typeof window[n.b].accountFunctions.handleSpecialLineItem && window[n.b].accountFunctions.handleSpecialLineItem(e.lineItemId)
            } else
                this.winningBid ? (o = !0,
                t = this.winningBid.bidderCode,
                s = !0) : (o = !0,
                t = "amazon",
                s = !1);
            t || (t = "unknown"),
            i && (t = "blockthrough");
            let r = {};
            try {
                r.companyIds = e.companyIds,
                r.yieldgroupIds = e.yieldgroupIds
            } catch (e) {}
            if (o && (r.manual_render = "true"),
            this.shouldLogImpressionToBQ() && this.logImpressionToBQ(t, r),
            this.lastAdvertiser = t,
            window[n.b].accountFunctions.impressionHandler && "function" == typeof window[n.b].accountFunctions.impressionHandler) {
                let e = this.getWinningBidEstimatedValue(t);
                window[n.b].accountFunctions.impressionHandler(this, e, t, this.cachedAmazonBid)
            }
            if (this.winningBid && s) {
                let e = ee(this.winningBid.bidderCode);
                e && !e.allowRefresh && window[n.b].refreshDisallowed.push(this.config.elementId),
                this.applyBidSizingToWrapper(this.winningBid),
                this.richCreativePartnerHandler(),
                ["sublime", "venatus", "justpremium"].indexOf(this.winningBid.bidderCode) > -1 && window[n.b].skinAdUnitCode && (window[n.b].refreshDisallowed.push(this.config.elementId),
                ae.disallowSticky = !0)
            }
        }
        ,
        this.richCreativePartnerHandler = function() {}
        ,
        this.getAllAvailableBidsInPool = function() {
            let e = window[n.c].getBidResponsesForAdUnitCode(this.config.elementId).bids.filter((function(e) {
                return e && (e.status && !("rendered" === e.status) || !e.status)
            }
            ))
              , t = (new Date).getTime();
            return e.filter((function(e) {
                return e.responseTimestamp + 1e3 * ((i = e).ttl - (i.hasOwnProperty("ttlBuffer") ? i.ttlBuffer : 1)) > t;
                var i
            }
            ))
        }
        ,
        this.multipleBidderBidsInPool = function() {
            let e = this.getAllAvailableBidsInPool().map((function(e) {
                return e.bidderCode
            }
            ));
            return e.length > new Set(e).size
        }
        ,
        this.logImpressionToBQ = function(e, t) {
            let i = this.getWinningBidEstimatedValue(e);
            t = void 0 !== t ? t : {},
            e = void 0 !== e ? e : "unfilled";
            let o, s = {}, r = fe(), a = null, d = null;
            if ("amazon" === e) {
                let e;
                try {
                    e = this.amazonTargeting.amznbid
                } catch (t) {
                    this.cachedAmazonBid && (e = this.cachedAmazonBid.amznbid)
                }
                e && e.length && (o = e);
                try {
                    let e = Y.getZFBidVal(o);
                    e && (i = e)
                } catch (e) {}
                try {
                    s.amznp = this.amazonTargeting.amznp
                } catch (e) {
                    this.cachedAmazonBid && (s.amznp = this.cachedAmazonBid.amznp)
                }
            }
            if (L(`Winning ${this.impressionType} impression for ${this.config.elementId}: ${e} at ${i}`),
            this.winningBid && this.winningBid.bidderCode === e) {
                try {
                    s.addomain = this.winningBid.adserverTargeting.hb_adomain,
                    s.creative_id = this.winningBid.adserverTargeting.hb_crid,
                    s.ad_id = this.winningBid.adId,
                    s.source = this.winningBid.source,
                    s.size = this.winningBid.size
                } catch (e) {}
                a = this.winningBid.requestId,
                d = this.winningBid.adId,
                r = ye(this.winningBid)
            }
            if (this.winningBid) {
                let e = this.getSecondBid(this.winningBid.bidderCode);
                e && (s.secondbid_bidder = e.bidderCode,
                s.secondbid_bid = e.originalCpm)
            }
            "video" === this.media && (s.ad_length = this.currentAdDuration),
            this.confiantRefreshed && (s.confiant_refreshed = !0),
            s.authenticated = we(),
            this.currentImpressionId = r,
            this.winningBid ? s.bidfloor = this.getFloorForEnv(this.winningBid.auctionId, !0) : s.bidfloor = this.getFloorForEnv(this.currentAuctionId, !0),
            N.dropBidderCode && (s.dropped_bidder = N.dropBidderCode);
            try {
                let e = R.getPrebidUserIdsDefined();
                s.user_ids = e.join("|"),
                R.currentEnrichTestId && (s.enrich_test = R.currentEnrichTestId),
                s.enr_li = G.getLiModuleEnabled(),
                s.enr_li_ids = R.getUserIdsForPartner("liveintent").join("|"),
                s.enr_op = N.testGroups.enr_optable,
                this.winningBid ? s.enr_all_ids = R.getUserIdsWithProvenanceForLogging(this.winningBid.requestId).join("|") : s.enr_all_ids = ""
            } catch (e) {}
            try {
                s.enr_ret = void 0 !== window.retentionModule && window.retentionModule.enabled
            } catch (e) {}
            s.raw_impression_count = this.allImpressionCount,
            s = Object.assign({}, s, t),
            s = Object.assign({}, s, G.getExtraLogging()),
            s.tests = N.getTestGroupsString();
            let c = {};
            window[n.b].accountFunctions.extraLogging && "function" == typeof window[n.b].accountFunctions.extraLogging && (c = window[n.b].accountFunctions.extraLogging()),
            s = Object.assign({}, s, c);
            try {
                let e = this.getAllAvailableBidsInPool().map(e => e.requestId);
                s.pool_bids = e.join("|")
            } catch (e) {}
            try {
                s.ww = window.innerWidth,
                s.wh = window.innerHeight,
                s.wtw = window.top.innerWidth,
                s.wth = window.top.innerHeight,
                s.divId = this.config.elementId
            } catch (e) {}
            let l = {
                winning_bidder: e,
                winning_bid: i,
                unit: this.config.gamPath,
                auction_type: this.impressionType,
                media: this.media,
                refresh_count: this.filledImpressionCount,
                encrypted_bid: o,
                req_id: a,
                ad_id: d,
                uid: r
            };
            j("impression", Z(), l, s)
        }
        ,
        this.matchHeightWithParentOrVerticallyCenter = function(e, t) {
            let i = document.getElementById(e);
            if (i)
                if (this.overrideParentSize) {
                    document.getElementById(t).style.height = i.offsetHeight + "px"
                } else
                    try {
                        let e = document.getElementById(t)
                          , n = i.style.top;
                        n = n ? parseInt(n.replace("px", "")) : 0;
                        let o = (e.offsetHeight - i.offsetHeight) / 2;
                        i.style.top = n + o + "px"
                    } catch (e) {}
        }
        ,
        this.handleSlotRenderEnded = function() {
            this.parentElementId && this.matchHeightWithParentOrVerticallyCenter(this.config.elementId, this.parentElementId)
        }
        ,
        this.clearThirdPartyCreativeContainers = function() {}
        ,
        this.shouldSleepBidder = function(e) {
            let t = !1;
            if (X.getConfig("account.shouldFilterNonActiveBidders")) {
                let i, n, o = X.getConfig("account.smartRequestSettings");
                if (o.hasOwnProperty(Y.country) ? i = o[Y.country] : o.hasOwnProperty("row") && (i = o.row),
                o.hasOwnProperty("never_sleep_bidders") && (n = o.never_sleep_bidders,
                Array.isArray(n) && n.includes(e)))
                    return !1;
                let s = {
                    video: 3,
                    banner: 3,
                    disabledTimeQty: 12e4,
                    lastBidAgeMax: 9e4
                };
                i && (s.video = i.video || 3,
                s.banner = i.banner || 3,
                s.disabledTimeQty = i.disabledTimeQty || 12e4,
                s.lastBidAgeMax = i.lastBidAgeMax || 9e4);
                try {
                    let i = s.banner;
                    this.config.mediaTypes.hasOwnProperty("video") && (i = s.video);
                    let n = this.getBiddingActivity(e)
                      , o = n.emptyAuctionCount
                      , r = n.disabled
                      , a = n.lastBid;
                    if (r) {
                        Date.now() - r >= s.disabledTimeQty ? this.enableBidder(e) : t = !0
                    } else {
                        let n = Date.now() - a;
                        a && n < s.lastBidAgeMax || o >= i && (this.disableBidder(e),
                        t = !0)
                    }
                } catch (e) {}
            }
            return "Edge" === Y.getBrowser() && "triplelift" === e && "video" === this.media || t
        }
        ,
        this.getUnitBidderKey = function(e) {
            return ["lngtd", this.config.uid, e, "ba"].join("-")
        }
        ,
        this.persistSmartRequestAcrossSession = function() {
            try {
                return !X.getConfig("account.smartRequestSettings").hasOwnProperty("limitToPageview")
            } catch (e) {
                return !0
            }
        }
        ,
        this.setBiddingActivity = function(e, t) {
            if (me() && this.persistSmartRequestAcrossSession()) {
                let i = this.getUnitBidderKey(e)
                  , n = this.getBiddingActivity(e)
                  , o = Object.assign(n, t);
                window.sessionStorage.setItem(i, JSON.stringify(o))
            } else {
                this.getBiddingActivity(e);
                for (const [i,n] of Object.entries(t))
                    this.biddersActivity[e][i] = n
            }
        }
        ,
        this.getBiddingActivity = function(e) {
            if (me() && this.persistSmartRequestAcrossSession()) {
                let t = this.getUnitBidderKey(e);
                if (!window.sessionStorage.getItem(t)) {
                    let e = {
                        emptyAuctionCount: 0,
                        lastBid: null,
                        disabled: null
                    };
                    window.sessionStorage.setItem(t, JSON.stringify(e))
                }
                return JSON.parse(window.sessionStorage.getItem(t))
            }
            return this.biddersActivity.hasOwnProperty(e) || (this.biddersActivity[e] = {},
            this.biddersActivity[e].emptyAuctionCount = 0,
            this.biddersActivity[e].lastBid = null,
            this.biddersActivity[e].disabled = null),
            this.biddersActivity[e]
        }
        ,
        this.disableBidder = function(e) {
            let t = {
                disabled: Date.now()
            };
            this.setBiddingActivity(e, t)
        }
        ,
        this.enableBidder = function(e) {
            this.setBiddingActivity(e, {
                emptyAuctionCount: 0,
                disabled: null
            })
        }
        ,
        this.logBidActivity = function(e) {
            let t = {
                emptyAuctionCount: 0,
                lastBid: Date.now(),
                disabled: null
            };
            this.setBiddingActivity(e, t)
        }
        ,
        this.logNoBidActivity = function(e) {
            let t = {
                emptyAuctionCount: this.getBiddingActivity(e).emptyAuctionCount += 1
            };
            this.setBiddingActivity(e, t)
        }
        ,
        this.buildCloseCss = function(e, t, i, n, o, s, r) {
            return `#${e} {\n                    cursor:pointer;\n                    background-size:contain;\n                    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAGxlWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAAQAAAAModpAAQAAAABAAAAQgAAAABTaG90d2VsbCAwLjI4LjQAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAAx1+rAAAAtNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpJbWFnZUhlaWdodD4zMjwvdGlmZjpJbWFnZUhlaWdodD4KICAgICAgICAgPHRpZmY6SW1hZ2VXaWR0aD4zMjwvdGlmZjpJbWFnZVdpZHRoPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlNob3R3ZWxsIDAuMjguNDwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KejbhCAAABO5JREFUWAnNlktMnFUUx2cGRxQjykxSNGwMHWEhE1BjtE2MU1ttpxoSmxDDYyxhgcbEhamJTeyChbpp1VXVsCAgrwWJJvgCbSzdtK6sDQ0LnKLRFTYy4osAMuPv3N7zeedjvhlY6U3ud8/rnvO/957v3BsK/cctvNv4AwMDkaWlpcTW1tbeQqEQk/nhcHgFOtvU1HQNfX43PncKINzd3f0Ejo/TD9PjAUF+AcwMupGxsbFzjIUAO09cEUAmk3mc1Z2h3+/N2hnxDXNemZiYOF/OPBBAR0fHzbS3mfwiPdCunHN0YCic3dzcPDE1NbVRyrak476+vtvX19enmZDyTZItvUT/jH6FvkyXVk+gNrY/Db2P7vd7fmNjox0Qf4ix2/yGoXQ6XR2LxeQcU46hBP6Yfmp8fHzekW8jyZUkQN4A0NMoXf8C4oh/J27yeyC4bHvKka/h7HnOctSRBZIWYDtAjmP0Pv0Wa3wgGo2+Bf2S5c3gIgxJwuXzeclelUvwpyolkuvQpa2/T5EpCNwVDrr+Is6EMMEFoQYXY1m5l8WsqjaVSm3bNfUhOskf5UdHR7+CfoEuRyiN0wmfkdFwfDwAXV1dT8K3qYJx2t12gr+JbKWhoeFHVvawY2fIzs7Ofeh+Inlz2L6ueo5khKCfKM/4QE9PzyHlPQAYyZlpy0cikVPK8EveAf0qvYp+Nzs1S5BHVC/BsZfEvcvanHR3gp18DbnugkzzYhkAUl4RSoXTdontu6pMXV3dX9DXlWcUQDMCwgle6+ivU67XlLeJ+bXyADpiY944gmw2ey9KU9fFiN2Q/9xrg4ODm8iOIfjNE1oQduVu8FV26Njc3Nzfjq1UJNdnfHFxca/o9QgSrjEOvnV5oantFwEhhcYPwh88PTk5KcWqqDG3yCe8iWkAgK6uyPrfClckDgChNrLyksGtgVZNtTcxdQdUWHHkGnaTqcie4wjUFRk6jAHAduQcmZD1Pt6wAQmnpl5iqsA3+n2amAYAq7rmGrMStx4YVUDwVZT+nJgpVSc4ZtdnoaqqysQ0AJqbmxdxtOKAkGTzWn9/fxRQHyLYlnClEpNc+MhfMa2d+lxpbGzMCmMA2GfUrGpBu58V36d8Lpergd6jPKOXcAGJuYcAt6o99SIJLde0tll9uhkAIgXhB6pljMB75ZQrdBX+NHJ57y37s90B8bO1OT00NPQ7tDbxpfVfEnVEFSoUXt59lxlbrZKNKGS4D8YtH+rt7b2TV9KfUphU5o5yVNz5tw0PD/+qcu6YDOAloIkFfRnAD8KbP8YFEALAQRRfqjHjGhOOMmEOeteN4AeYL9exHkeBXDpkb0njTy4Xr83Pz3/f2toqv8tDVhhlfDaZTP6AruxLyHNiCbvySVgvOPS7LOasa1sEQBRcqedqamoehbxHeFqUVTwDiLaWlparNPdSumHhfPkFW7AdZM5JmeuoLnA8mYWFhS1H5iWGK5OjqMXBNDnwWJGCJER+Ednn9r5Ytvp6qR3YH4XfT3ePVs76QnV1dbsvMc1U19AI9COP03g8/g5O5UUTaKf2AaMEf4+Vv+x/jKp9Rcc2MeWppn+Hzi03SuAr7MoJN+FKTagIwE4K84w6zG48By8Pl1gJZxJU6vssdiP8vl9Ai6xs2ykAz4m8ZOwDJkEgc6WSFxI4m0gkvtMK5034vxP/ADsp+IPGMGBJAAAAAElFTkSuQmCC");\n                    background-color:rgba(255,255,255,0.5);\n                    border-radius: 50% 50% 50% 50%;\n                    width:${t};\n                    height:${t};\n                    position:absolute;\n                    top:${i};\n                    right:${n};\n                    bottom:${o};\n                    left:${s};\n                    margin-left:${r};\n                    z-index:9;\n                    display:none;\n                    box-shadow:0 0 6px rgba(255,255,255,0.5);\n                }`
        }
        ,
        this.getErroneousBidKey = function(e) {
            return e.creativeId && e.bidderCode ? `${e.bidderCode}|${e.creativeId}` : null
        }
        ,
        this.logErroneousBid = function(e) {
            window[n.c].markWinningBidAsUsed({
                adId: e.adId
            });
            let t = this.getErroneousBidKey(e);
            t && this.creativeErrors.push(t)
        }
        ,
        this.isBidErroneous = function(e) {
            let t = this.getErroneousBidKey(e);
            return this.creativeErrors.indexOf(t) > -1
        }
        ,
        this.cleanUnit(),
        this.modifyConfig()
    }
    function ce(e, t, i, n) {
        let o, s, r;
        if (i = void 0 !== i && i,
        n = n || {},
        s = !1,
        o = document.createElement("script"),
        o.type = "text/javascript",
        o.src = e,
        i && (o.async = "async"),
        n.attributes)
            for (const [e,t] of Object.entries(n.attributes))
                o.setAttribute(e, t);
        o.onreadystatechange = function() {
            s || this.readyState && "complete" !== this.readyState || (s = !0,
            t && t())
        }
        ,
        o.onload = o.onreadystatechange,
        r = document.getElementsByTagName("script")[0],
        r.parentNode.insertBefore(o, r)
    }
    function le(e) {
        let t = null
          , i = [];
        try {
            (window.location !== window.parent.location ? window.parent.location.search : document.location.search).substr(1).split("&").forEach((function(n) {
                i = n.split("="),
                i[0] === e && (t = decodeURIComponent(i[1]))
            }
            ))
        } catch (e) {}
        return t
    }
    function ue(e, t, i) {
        i = i || window;
        let n = 0;
        i.addEventListener(e, (function() {
            let e = new Date;
            e - n >= 100 && (i.dispatchEvent(new CustomEvent(t)),
            n = e)
        }
        ))
    }
    function he(e) {
        var t = e + "="
          , i = "";
        try {
            i = decodeURIComponent(document.cookie)
        } catch (e) {}
        for (var n = i.split(";"), o = 0; o < n.length; o++) {
            for (var s = n[o]; " " === s.charAt(0); )
                s = s.substring(1);
            if (0 === s.indexOf(t))
                return s.substring(t.length, s.length)
        }
        return ""
    }
    function ge(e, t, i) {
        i = void 0 !== i ? i : .5;
        var n = new Date;
        n.setTime(n.getTime() + 60 * i * 60 * 1e3);
        var o = "expires=" + n.toUTCString();
        document.cookie = e + "=" + t + ";" + o + ";path=/"
    }
    function fe() {
        let e;
        try {
            e = crypto.randomUUID()
        } catch (e) {}
        return e || (e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-xx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }
        ))),
        e
    }
    function pe(e) {
        setTimeout((function() {
            e()
        }
        ), 0)
    }
    function me() {
        try {
            return window.sessionStorage.setItem("test", "test"),
            window.sessionStorage.removeItem("test"),
            !0
        } catch (e) {
            return !1
        }
    }
    function be() {
        try {
            return window.localStorage.setItem("test", "test"),
            window.localStorage.removeItem("test"),
            !0
        } catch (e) {
            return !1
        }
    }
    function we() {
        try {
            return void 0 !== window.eh2 || void 0 !== window.lngtdAuthd
        } catch (e) {
            return !1
        }
    }
    function ye(e) {
        return `${e.requestId}-${e.adId}`
    }
    let ve = {};
    ve.optable = function(e) {
        this.name = "optable",
        this.enabled = !1,
        this.settings = e,
        this.authName = void 0 !== this.settings.prefix ? this.settings.prefix + "_auth" : "auth",
        this.instanceName = void 0 !== this.settings.prefix ? this.settings.prefix + "_instance" : "instance",
        this.excludeBrowsers = void 0 !== this.settings.excludeBrowsers ? this.settings.excludeBrowsers.toLowerCase().split(",") : null,
        this.setup = function() {
            window.optable = window.optable || {
                cmd: []
            },
            window.optable.site = this.settings.siteSlug,
            window.optableModule = this,
            this.isEligible() ? (N.setOptableTestGroups(),
            N.setupId5BuidTest(),
            N.defineOptableMatchers()) : (N.testGroups.enr_optable = null,
            N.testGroups.id5_buid = null,
            N.saveSessionTestGroups())
        }
        ,
        this.isEligible = function() {
            let e = !1;
            try {
                e = X.getConfig("modules").some(e => "optable" === e.name)
            } catch (e) {}
            let t = !0;
            return this.excludeBrowsers && this.excludeBrowsers.indexOf(Y.getBrowser().toLowerCase()) > -1 && (t = !1),
            e && ["US", "CA"].indexOf(Y.country) > -1 && t
        }
        ,
        this.shouldRun = function() {
            return !!this.isEligible() && N.testGroups.enr_optable
        }
        ,
        this.preCMP = function() {
            let e = X.getConfig("prebidModules.dataProviders")
              , t = [];
            if (this.shouldRun()) {
                ce(this.settings.scriptPath, null, !0);
                const i = {
                    name: "optable",
                    params: {
                        handleRtd: async (e, t, i) => {
                            if (window.optable && window.optable.rtd && window.optable.rtd.handleRtd)
                                return N.testGroups.opt_matcher_id5 && (window.optable.rtd.matcherExclude = ["id5.io", "id5-sync.com"]),
                                window.optable.rtd.handleRtd(e, t, i)
                        }
                    }
                };
                Array.isArray(e) ? (t = [...e],
                t.some(e => "optable" === e.name) || t.push(i)) : t = [i]
            } else
                Array.isArray(e) && (t = e.filter(e => "optable" !== e.name));
            X.setConfig("prebidModules.dataProviders", t)
        }
        ,
        this.postCMP = function() {
            const e = this;
            if (this.shouldRun()) {
                let t = R.getUserPPID();
                t && window.optable.cmd.push((function() {
                    window.optable[e.authName].identify("c:" + t)
                }
                )),
                window.eh2 && this.pushAuthUser(window.eh2)
            }
        }
        ,
        this.pushAuthUser = function(e) {
            const t = this;
            window.optable.cmd.push((function() {
                window.optable[t.authName].identify("e:" + e)
            }
            ))
        }
    }
    ,
    ve.dmdid = function(e) {
        this.name = "dmdId",
        this.settings = e,
        this.setup = function() {
            var e, t, i, n, o, s;
            e = window,
            t = document,
            i = "script",
            n = "AIM",
            e.AIM = e.AIM || {
                init: function() {
                    (e.AIM.q = e.AIM.q || []).push(arguments)
                },
                ready: function(t) {
                    "function" == typeof t && ((e.AIM.c = e.AIM.c || []).push(t),
                    t = e.AIM.c,
                    o.onload = o.onreadystatechange = function() {
                        if (!o.readyState || /loaded|complete/.test(o.readyState))
                            for (o.onload = o.onreadystatechange = null,
                            s.parentNode && o.parentNode && s.parentNode.removeChild(o); t.length; )
                                t.shift()()
                    }
                    )
                }
            },
            e.AIM.d = 1 * new Date,
            o = t.createElement(i),
            s = t.getElementsByTagName(i)[0],
            o.async = 1,
            o.src = "//www.medtargetsystem.com/javascript/beacon.js?" + Date.now().toString().substring(0, 4),
            o.setAttribute("data-aim", n),
            s.parentNode.insertBefore(o, s),
            AIM.init(this.settings.params__api_key)
        }
        ,
        this.preCMP = function() {}
        ,
        this.postCMP = function() {}
    }
    ;
    const Ie = new function() {
        this.modules = [],
        this.enabledModules = [],
        this.setupModules = function() {
            const e = this;
            X.getConfig("modules").forEach((function(t) {
                try {
                    const i = new (0,
                    ve[t.name])(t.settings);
                    i.setup(),
                    e.modules.push(i),
                    e.enabledModules.push(i.name)
                } catch (e) {}
            }
            ))
        }
        ,
        this.preCMP = function() {
            this.modules.forEach((function(e) {
                try {
                    e.preCMP()
                } catch (t) {
                    L("ERROR running preCMP call for module", t, e)
                }
            }
            ))
        }
        ,
        this.postCMP = function() {
            this.modules.forEach((function(e) {
                try {
                    e.postCMP()
                } catch (t) {
                    L("ERROR running postCMP call for module", t, e)
                }
            }
            ))
        }
    }
      , Ce = i(3)
      , _e = new Event("lngtdPostInit");
    var Ae;
    Ae = Ce,
    window[n.b] = window[n.b] || {},
    window[n.b].que = window[n.b].que || [],
    window[n.c] = window[n.c] || {},
    window[n.c].que = window[n.c].que || [],
    B.setGlobals(),
    window[n.b] = {
        accountFunctions: {
            pageTypeFunc: null,
            cleanUnitConfigs: null,
            getMustDisplayTogether: null,
            preInit: null,
            postInit: null,
            cmpResolve: null,
            extraLogging: null,
            hideOutstream: null,
            showOutstream: null,
            customRenderHandler: null,
            disableDesktopAnchor: null,
            disableMobileAnchor: null,
            disableSidebarSticky: null,
            bidCpmAdjustment: null,
            getPPID: null,
            getUnitGPID: null,
            canRunAuction: null,
            wrapperStyles: null,
            impressionHandler: null,
            pathOverrides: null,
            renderSkin: null,
            handleSpecialLineItem: null,
            getOrtb2Values: null,
            getGAMPrebidVideoCreativeIds: null,
            getS2sConfig: null,
            resetUnits: null,
            getRefreshInterval: null,
            testCustomizations: null,
            consentCallback: null,
            environmentCustomizations: null
        },
        que: window[n.b].que || [],
        manualExcludeUnits: [],
        disabledBidders: [],
        refreshDisallowed: [],
        secondChanceDisallowed: [],
        nestedHostMismatchDisallowed: !0,
        skinAdUnitCode: null,
        floorOverrides: null,
        primaryBaseScriptPath: "//s.lngtdv.com/",
        secondaryBaseScriptPath: "//lngtd.com/",
        loggingEndpoint: "https://it.lngtd.com/",
        videoCacheEndpoint: "https://prebid.adnxs.com/pbc/v1/cache",
        s2sEndpoint: "https://s2s.lngtd.com",
        prebidEidMap: {},
        initialized: !1,
        preinitFired: !1,
        postinitFired: !1,
        preInitTestsPass: function() {
            let e = this;
            if (le("disable_lngtd"))
                return L("Ad code disabled, canceling."),
                !1;
            try {
                if (e.nestedHostMismatchDisallowed && window.location.hostname !== window.top.location.hostname)
                    return L("Window location mismatch, canceling."),
                    !1
            } catch (e) {}
            return X.getConfig("account.allowedHosts") && X.getConfig("account.allowedHosts").length > 0 && -1 === X.getConfig("account.allowedHosts").indexOf(document.location.hostname) ? (L("Window location not in allowed hosts, canceling."),
            !1) : !(Y.country && X.getConfig("account.disabledCountries") && X.getConfig("account.disabledCountries").indexOf(Y.country) > -1 || Y.country && "RU" === Y.country)
        },
        preInit: function() {
            const e = window[n.b];
            e.adsconfig = X,
            e.unitManager = ae,
            e.consent = a,
            e.amazon = k,
            e.pvState = Y,
            (le(n.a) || he(n.a)) && X.enableDebug(),
            L("PreInit"),
            e.preInitTestsPass() && (Y.defineEnvironment(),
            N.initializeTestGroups(),
            Ie.setupModules(),
            Ie.preCMP(),
            ["keyup", "mousemove", "swipe", "touchstart", "touchmove", "touchend", "scroll", "gesture"].forEach((function(e) {
                document.addEventListener(e, w, !1)
            }
            )),
            k.loadScript(),
            function(e) {
                let t = window[n.b].primaryBaseScriptPath + e
                  , i = window[n.b].secondaryBaseScriptPath + e
                  , o = function(e, t) {
                    let i = document.createElement("script");
                    i.type = "text/javascript",
                    i.src = e,
                    i.async = !0,
                    i.onload = function() {}
                    ,
                    i.onerror = t;
                    let n = document.getElementsByTagName("script")[0];
                    n.parentNode.insertBefore(i, n)
                };
                o(t, (function() {
                    o(i, (function() {}
                    ))
                }
                ))
            }("prebid/zombsroyale/prebid9.53.2.1756923553.min.js"),
            le("sp_test") && X.setConfig("account.sourcepointId", parseInt(le("sp_test"))),
            !a.cmpApplies() && !a.alwaysLoad || le("ignoreCMP") ? window[n.b].cmpReady() : (X.getConfig("account.enableSourcepoint") && (d.loadStubs(),
            d.load()),
            a.waitForCMP((function() {
                window[n.b].cmpReady()
            }
            ))))
        },
        cmpReadyFunc: function() {},
        cmpReady: function() {
            let e = this;
            if (L("CMP ready"),
            e.accountFunctions.preInit && "function" == typeof e.accountFunctions.preInit && e.accountFunctions.preInit(),
            e.cmpReadyFunc(),
            e.preinitFired = !0,
            K.initialize(),
            Y.initialize(),
            X.getConfig("account.gptScriptPathOverride")) {
                const e = X.getConfig("account.gptScriptPathOverride");
                B.loadScript(e)
            } else
                B.loadScript();
            k.initialize(),
            R.initialize(),
            pe((function() {
                window[n.c].que.push((function() {
                    O.updatePrebidConfig(),
                    O.setupAliasBidders(),
                    O.defineSchainOverrides(),
                    e.initialized = !0,
                    (Y.runPostInitAutomatically || Y.queuePostInit) && e.postInit()
                }
                ))
            }
            ))
        },
        postInit: function(e) {
            let t = this;
            if (L("PostInit", e = void 0 !== e ? e : "route_change"),
            !t.initialized)
                return L("Code not initialized properly, canceling."),
                void (Y.queuePostInit = !0);
            if (X.getConfig("account.autorun"))
                if (!this.accountFunctions.canRunAuction || "function" != typeof this.accountFunctions.canRunAuction || this.accountFunctions.canRunAuction()) {
                    if (X.getConfig("account.disallowedUrls") && X.getConfig("account.disallowedUrls").length > 0) {
                        let e = X.getConfig("account.disallowedUrls")
                          , i = document.location.pathname;
                        for (let n = 0; n < e.length; n++)
                            if (-1 !== i.indexOf(e[n]))
                                return L("This url is not allowed to run ads, canceling."),
                                void t.disableAdsDueToSiteCondition("disallowed_url")
                    }
                    t.postinitFired = !0,
                    D.load(),
                    M.load(),
                    Ie.postCMP(),
                    X.getConfig("account.dropBidderTest") && N.dropBidder(),
                    X.getConfig("account.useGAM") && B.initialize(),
                    pe((function() {
                        ae.initializeUnits(),
                        ae.setUpUnitMediation(),
                        ae.addListeners(),
                        O.bindEvents(),
                        t.bindEventHandlers(),
                        t.accountFunctions.postInit && "function" == typeof t.accountFunctions.postInit && t.accountFunctions.postInit(),
                        document.dispatchEvent(_e);
                        for (let e = 0; e < ae.adUnits.length; e++) {
                            let t = ae.adUnits[e];
                            pe((function() {
                                t.doPostInit()
                            }
                            ))
                        }
                        t.initializeQueue()
                    }
                    ))
                } else
                    L("Not allowed to run auction, canceling.");
            else
                L("Autorun disallowed, canceling.")
        },
        initializeQueue: function() {
            const e = this;
            if (window[n.b].que.length)
                for (; window[n.b].que.length > 0; ) {
                    const t = window[n.b].que.shift();
                    e.processQueueItem(t)
                }
            window[n.b].que = new Proxy(window[n.b].que,{
                set: (t, i, n) => ("function" == typeof n && e.processQueueItem(n),
                !0)
            })
        },
        processQueueItem: function(e) {
            pe((function() {
                try {
                    e()
                } catch (e) {
                    L("Error executing queued function", e)
                }
            }
            ))
        },
        eventHandlersBound: !1,
        bindEventHandlers: function() {
            let e = this;
            e.eventHandlersBound || (L("Binding event handlers", e.eventHandlersBound),
            e.eventHandlersBound = !0,
            ue("scroll", "throttledScroll", window),
            window.addEventListener("throttledScroll", h),
            window.addEventListener("focus", g),
            window.addEventListener("blur", f),
            window.addEventListener("click", p),
            window.addEventListener("touchstart", p),
            ue("mousemove", "throttledMouseMove", window),
            window.addEventListener("throttledMouseMove", m),
            X.getConfig("account.iframeId") || (ue("resize", "throttledResize", window),
            window.addEventListener("throttledResize", (function() {
                L("Resize handler called", window.innerWidth, Y.currentWindowWidth),
                window.innerWidth !== Y.currentWindowWidth && Y.refreshOnResize && (Y.currentWindowWidth = window.innerWidth,
                clearTimeout(b),
                b = setTimeout((function() {
                    window[n.b].resetAndRunAuction("resize")
                }
                ), 1e3))
            }
            ))))
        },
        reset: function(e) {
            B.resetUnits(),
            O.unbindEvents(),
            window[n.c].que.push((function() {
                window[n.c].removeAdUnit()
            }
            )),
            this.manualExcludeUnits = [],
            window[n.b].accountFunctions.resetUnits && "function" == typeof window[n.b].accountFunctions.resetUnits && window[n.b].accountFunctions.resetUnits(),
            ae.resetAnchors(),
            ae.resetMoments(),
            ae.retireAllUnits(),
            ae.removeAdWrapperStyles(),
            O.resetConfig()
        },
        resetUnit: function(e) {
            const t = ae.getUnitFromId(e);
            t.displayed = !1,
            t.refreshed = !1,
            t.retired = !1,
            t.impressionType = "init",
            t.lastAuction = null,
            t.doPostInit()
        },
        resetAndRunAuction: function(e) {
            L("Reset and run auction called"),
            document.dispatchEvent(new CustomEvent("resetAndRunAuction",{
                detail: {
                    trigger: e
                }
            }));
            const t = window[n.b];
            e = void 0 !== e ? e : "route_change",
            t.reset(e),
            Y.newPageView(),
            X.getConfig("account.dropBidderTest") && N.resetDropBidder(),
            t.postInit(e)
        },
        refreshPaused: !1,
        pauseRefresh: function(e, t) {
            e = void 0 === e || e,
            this.refreshPaused || (L("PAUSING REFRESH"),
            this.refreshPaused = Date.now(),
            e && document.addEventListener("userInteraction", (function() {
                window[n.b].restartRefresh("user_interaction")
            }
            )),
            "userInteraction" === t && document.dispatchEvent(l),
            j("refresh_pause", Z(), null, null))
        },
        restartRefresh: function(e) {
            let t = window[n.b];
            if (t.refreshPaused) {
                let i = Date.now() - t.refreshPaused;
                L(`RESTARTING REFRESH after ${i}ms`),
                t.refreshPaused = !1,
                document.dispatchEvent(u);
                let n = {
                    time_since_pause: i,
                    trigger: e
                };
                j("refresh_restart", Z(), null, n),
                i < 18e4 ? ae.adUnits.forEach((function(e) {
                    e.display("refreshRestarted")
                }
                )) : t.resetAndRunAuction("restartRefresh")
            }
        },
        start: function() {
            this.preinitFired ? this.postinitFired || (X.setConfig("account.autorun", !0),
            this.postInit()) : this.cmpReadyFunc = function() {
                X.setConfig("account.autorun", !0)
            }
        },
        fallbackForUnfilledNoGAM: function(e) {},
        logPageView: function() {
            J()
        },
        handleHeavyAdIntervention: function(e, t, i) {
            if (e && "HeavyAdIntervention" === e.body.id) {
                let e = ae.getUnitFromId(i);
                L("HEAVY AD INTERVENTION", t, i, e),
                e.handleHeavyAdIntervention()
            }
        },
        getAdvertisingUrlPromiseForPlayer: function(e) {
            const t = this;
            let i = e.unitId
              , n = e.runAuction || !0;
            const o = e.runAuction || "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=";
            let s = 0;
            return new Promise((function(e, r) {
                const a = setInterval((function() {
                    if (t.eventHandlersBound) {
                        clearInterval(a);
                        let t = ae.getUnitFromId(i);
                        if (t || e(o),
                        le("testtag"))
                            e(o);
                        else {
                            if (!n)
                                return t.getWinningAdUrl();
                            t.videoAuctionPromise().then((function() {
                                let i, n = o, s = t.getHighestBid(!1);
                                s && (i = t.bidCachePromises[s.requestId]),
                                s && i ? (L(`We do not have a winning video url but we do have a winning bid for ${t.config.elementId} ... attempting to resolve bid cache promise`),
                                i.then((function() {
                                    n = t.getWinningAdUrl(),
                                    e(n)
                                }
                                )).catch((function() {
                                    n = t.getWinningAdUrl(),
                                    e(n)
                                }
                                ))) : (n = t.getWinningAdUrl(),
                                e(n))
                            }
                            )).catch((function(t) {
                                e(o)
                            }
                            ))
                        }
                    }
                    if (s >= 50)
                        return clearInterval(a),
                        o;
                    s++
                }
                ), 100)
            }
            ))
        },
        disableAdsDueToSiteCondition: function(e) {
            X.setConfig("account.autorun", !1);
            try {
                let t = {
                    reason: e
                };
                j("ads_disabled", Z(), null, t)
            } catch (e) {}
        },
        interstitialConfigs: null,
        getInterstitialUnitsForEnv: function(e) {
            let t = [];
            try {
                let i = this.interstitialConfigs[e];
                return t = Y.isMobile() ? i.units.mobile : Y.isTablet() ? i.units.tablet : i.units.desktop,
                "string" == typeof t && (t = [t]),
                t
            } catch (e) {
                return t
            }
        },
        _findH5FallbackInterstitialUnitForEnv: function(e) {
            let t;
            if (this.interstitialConfigs && this.interstitialConfigs[e] && this.interstitialConfigs[e].fallback_h5) {
                let i;
                i = Y.isMobile() ? this.interstitialConfigs[e].fallback_h5.mobile : Y.isTablet() ? this.interstitialConfigs[e].fallback_h5.tablet : this.interstitialConfigs[e].fallback_h5.desktop,
                i && (t = ae.getUnitFromId(i))
            }
            return t
        },
        _findWinningInterstitialUnit: function(e, t) {
            let i, n;
            for (let o = 0; o < e.length; o++) {
                let s = e[o]
                  , r = ae.getUnitFromId(s);
                if (r) {
                    let e = r.getHighestBid();
                    try {
                        (e || r.forceCallGAM) && (n ? e.cpm > n && (n = e.cpm,
                        i = r) : (e && (n = e.cpm),
                        i = r))
                    } catch (e) {}
                } else
                    L(`The interstitial unit with id ${s} for config ${t} does not exist`)
            }
            return i
        },
        _handleInterstitialNoFill: function(e, t) {
            try {
                let i, n;
                void 0 !== e.fallbackFunction && "function" == typeof e.fallbackFunction && (i = e.fallbackFunction),
                void 0 !== e.adBreakDone && "function" == typeof e.adBreakDone && (n = e.adBreakDone);
                const o = this._findH5FallbackInterstitialUnitForEnv(t);
                if (o && o.config.gamPath) {
                    let e = function() {};
                    i ? e = i : n && (e = n),
                    B.triggerInterstitialGamingUnit(o, e)
                } else
                    i ? i() : n && n()
            } catch (e) {}
        },
        initInterstitial: function(e) {
            let t = this
              , i = [e = void 0 !== e ? e : "default"];
            t.interstitialConfigs && (i = t.getInterstitialUnitsForEnv(e));
            for (let t = 0; t < i.length; t++) {
                let n = i[t]
                  , o = ae.getUnitFromId(n);
                o ? o.initialize() : L(`The interstitial unit with id ${n} for config ${e} does not exist`)
            }
            const n = this._findH5FallbackInterstitialUnitForEnv(e);
            n && n.config.gamPath && B.defineInterstitialGamingUnit(n)
        },
        triggerInterstitial: function(e, t) {
            let i = this
              , n = [t = void 0 !== t ? t : "default"];
            i.interstitialConfigs && (n = i.getInterstitialUnitsForEnv(t));
            let o = i._findWinningInterstitialUnit(n, t);
            o ? o.trigger(e) : (L("There was no winning ad unit for interstitial " + t),
            this._handleInterstitialNoFill(e, t))
        },
        showVideoInterstitial: function(e, t) {
            let i, n = this, o = {
                type: "interstitial",
                name: "interstitial",
                minViewTime: 8e3,
                maxAdBreak: t,
                beforeAd: function() {},
                adBreakDone: function() {
                    "function" == typeof e && e()
                }
            }, s = ["video-interstitial"];
            this.interstitialConfigs && (s = n.getInterstitialUnitsForEnv(s)),
            s && (i = ae.getUnitFromId(s[0])),
            i ? i.trigger(o) : L(`The interstitial ${unitId} does not exist`)
        },
        renderDispatchAd: function(e, t, i, o, s) {
            "multi" === s ? ae.getUnitFromId(o).determineWinnerAndRender(e, t) : "skin" === s ? window[n.b].accountFunctions.renderSkin && "function" == typeof window[n.b].accountFunctions.renderSkin && window[n.b].accountFunctions.renderSkin(o) : window[n.c].renderAd(e, t)
        }
    },
    X.initialize(Ae),
    a.initialize(),
    new Promise((function(e, t) {
        let i, n = function(t) {
            clearTimeout(i),
            j("config_failure", Z(), null, {
                reason: t
            }),
            a.geoResolved = !1,
            a.attemptToSetStateByAvailableAPIs(),
            e()
        }, o = new window.XMLHttpRequest;
        if (o.onreadystatechange = function() {
            if (4 === o.readyState) {
                let t = o.status;
                if (t >= 200 && t < 300 || 304 === t) {
                    let t = JSON.parse(o.responseText);
                    Y.country = t.country,
                    Y.regionState = t.regionState,
                    Y.continent = t.continent,
                    Y.floors = t.floors,
                    Y.zfMap = t.zfMap || {},
                    a.updateConsentGeos(t.continent, t.country, t.regionState),
                    t.excludeFromRefresh && X.setConfig("account.sponsorshipLineItemIds", t.excludeFromRefresh),
                    t.specialIds && X.setConfig("account.specialLineItemIds", t.specialIds),
                    t.creativeIdBlocks && X.setConfig("account.creativeIdBlocks", t.creativeIdBlocks),
                    t.avgPerf && X.setConfig("account.partnerAvgPerf", t.avgPerf),
                    a.geoResolved = !0,
                    clearTimeout(i),
                    e()
                }
            }
        }
        ,
        o.onerror = function() {
            const e = `error ${o.status}: ${o.statusText}`;
            n(e)
        }
        ,
        le("disable_lngtd"))
            L("Not allowed to run auction, canceling."),
            t();
        else {
            let e = "https://floors.lngtd.com/?account=" + X.getConfig("account.name") + "&section=" + X.getConfig("account.section");
            o.open("GET", e, !0),
            o.send(),
            i = setTimeout((function() {
                o.abort(),
                n("timeout")
            }
            ), 1e4)
        }
    }
    )).then(window[n.b].preInit, (function() {}
    )),
    i(4)
}
]);
