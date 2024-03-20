(function (e) {
    function t(t) {
        for (var a, n, o = t[0], l = t[1], u = t[2], s = 0, h = []; s < o.length; s++) n = o[s], Object.prototype.hasOwnProperty.call(i, n) && i[n] && h.push(i[n][0]), i[n] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        d && d(t);
        while (h.length) h.shift()();
        return r.push.apply(r, u || []), c()
    }

    function c() {
        for (var e, t = 0; t < r.length; t++) {
            for (var c = r[t], a = !0, n = 1; n < c.length; n++) {
                var o = c[n];
                0 !== i[o] && (a = !1)
            }
            a && (r.splice(t--, 1), e = l(l.s = c[0]))
        }
        return e
    }

    var a = {}, n = {app: 0}, i = {app: 0}, r = [];

    function o(e) {
        return l.p + "js/" + ({404: "404", login: "login"}[e] || e) + "." + {
            404: "3441c639",
            "chunk-12e369a4": "fb7f553c",
            "chunk-1cab68b2": "57cd4a5a",
            "chunk-1ed6eec8": "d1acd2ca",
            "chunk-226780d6": "aa5ee375",
            "chunk-4b4c9fd4": "4df6a191",
            "chunk-690a951c": "90e91ac7",
            "chunk-69808567": "ae3819be",
            "chunk-f61f4dfe": "8de145ac",
            "chunk-4ca0b7a4": "2701a6c8",
            "chunk-83c3e2ac": "36e4e5a3",
            "chunk-bcc272d6": "d78ec762",
            "chunk-e99adef8": "22157cf8",
            login: "4e931f2c"
        }[e] + ".js"
    }

    function l(t) {
        if (a[t]) return a[t].exports;
        var c = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(c.exports, c, c.exports, l), c.l = !0, c.exports
    }

    l.e = function (e) {
        var t = [], c = {
            404: 1,
            "chunk-12e369a4": 1,
            "chunk-1cab68b2": 1,
            "chunk-1ed6eec8": 1,
            "chunk-226780d6": 1,
            "chunk-690a951c": 1,
            "chunk-69808567": 1,
            "chunk-f61f4dfe": 1,
            "chunk-4ca0b7a4": 1,
            "chunk-83c3e2ac": 1,
            "chunk-bcc272d6": 1,
            "chunk-e99adef8": 1,
            login: 1
        };
        n[e] ? t.push(n[e]) : 0 !== n[e] && c[e] && t.push(n[e] = new Promise((function (t, c) {
            for (var a = "css/" + ({404: "404", login: "login"}[e] || e) + "." + {
                404: "cda9852c",
                "chunk-12e369a4": "cdc8afcb",
                "chunk-1cab68b2": "1c78281f",
                "chunk-1ed6eec8": "9b1f9187",
                "chunk-226780d6": "d6fa6ed7",
                "chunk-4b4c9fd4": "31d6cfe0",
                "chunk-690a951c": "26b27a9d",
                "chunk-69808567": "5c0359c3",
                "chunk-f61f4dfe": "2416c947",
                "chunk-4ca0b7a4": "b6adce96",
                "chunk-83c3e2ac": "09bfd4cc",
                "chunk-bcc272d6": "81e58fb5",
                "chunk-e99adef8": "1717e0a1",
                login: "4d49dd6c"
            }[e] + ".css", i = l.p + a, r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                var u = r[o], s = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (s === a || s === i)) return t()
            }
            var h = document.getElementsByTagName("style");
            for (o = 0; o < h.length; o++) {
                u = h[o], s = u.getAttribute("data-href");
                if (s === a || s === i) return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function (t) {
                var a = t && t.target && t.target.src || i,
                    r = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED", r.request = a, delete n[e], d.parentNode.removeChild(d), c(r)
            }, d.href = i;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(d)
        })).then((function () {
            n[e] = 0
        })));
        var a = i[e];
        if (0 !== a) if (a) t.push(a[2]); else {
            var r = new Promise((function (t, c) {
                a = i[e] = [t, c]
            }));
            t.push(a[2] = r);
            var u, s = document.createElement("script");
            s.charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.src = o(e);
            var h = new Error;
            u = function (t) {
                s.onerror = s.onload = null, clearTimeout(d);
                var c = i[e];
                if (0 !== c) {
                    if (c) {
                        var a = t && ("load" === t.type ? "missing" : t.type), n = t && t.target && t.target.src;
                        h.message = "Loading chunk " + e + " failed.\n(" + a + ": " + n + ")", h.name = "ChunkLoadError", h.type = a, h.request = n, c[1](h)
                    }
                    i[e] = void 0
                }
            };
            var d = setTimeout((function () {
                u({type: "timeout", target: s})
            }), 12e4);
            s.onerror = s.onload = u, document.head.appendChild(s)
        }
        return Promise.all(t)
    }, l.m = e, l.c = a, l.d = function (e, t, c) {
        l.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: c})
    }, l.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, l.t = function (e, t) {
        if (1 & t && (e = l(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var c = Object.create(null);
        if (l.r(c), Object.defineProperty(c, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) l.d(c, a, function (t) {
            return e[t]
        }.bind(null, a));
        return c
    }, l.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return l.d(t, "a", t), t
    }, l.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, l.p = "/cold/", l.oe = function (e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [], s = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var h = 0; h < u.length; h++) t(u[h]);
    var d = s;
    r.push([0, "chunk-vendors"]), c()
})({
    0: function (e, t, c) {
        e.exports = c("cd49")
    }, "0456": function (e, t, c) {
    }, "0f9a": function (e, t, c) {
        "use strict";
        c.d(t, "a", (function () {
            return y
        }));
        c("2397"), c("96cf");
        var a = c("1da1"), n = c("d4ec"), i = c("bee2"), r = c("99de"), o = c("7e84"), l = c("262e"), u = c("9ab4"),
            s = c("6fc5"), h = c("b775"), d = function (e) {
                return Object(h["a"])({url: "sys/user/info", method: "get", data: e})
            }, f = function (e) {
                return Object(h["a"])({url: "sys/user/login", method: "post", data: e})
            }, p = function () {
                return Object(h["a"])({url: "sys/user/logout", method: "post"})
            }, v = c("6a1d"), m = c("4360");

        function b(e, t, c) {
            return t = Object(o["a"])(t), Object(r["a"])(e, g() ? Reflect.construct(t, c || [], Object(o["a"])(e).constructor) : t.apply(e, c))
        }

        function g() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (g = function () {
                return !!e
            })()
        }

        var z = function (e) {
            function t() {
                var e;
                return Object(n["a"])(this, t), e = b(this, t, arguments), e.token = Object(v["b"])() || "", e.username = "", e.phone = "", e.fullname = "", e.company = "", e.avatar = "", e.logintime = "", e
            }

            return Object(l["a"])(t, e), Object(i["a"])(t, [{
                key: "SET_TOKEN", value: function (e) {
                    this.token = e
                }
            }, {
                key: "SET_NAME", value: function (e) {
                    this.username = e
                }
            }, {
                key: "SET_AVATAR", value: function (e) {
                    this.avatar = e
                }
            }, {
                key: "SET_COMPANY", value: function (e) {
                    this.company = e
                }
            }, {
                key: "SET_LOGINTIME", value: function (e) {
                    this.logintime = e
                }
            }, {
                key: "Login", value: function () {
                    var e = Object(a["a"])(regeneratorRuntime.mark((function e(t) {
                        var c, a, n, i;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return c = t.username, a = t.password, c = c.trim(), e.next = 4, f({
                                        username: c,
                                        password: a
                                    });
                                case 4:
                                    n = e.sent, i = n.data, Object(v["e"])(i.token), this.SET_TOKEN(i.token);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {
                key: "ResetToken", value: function () {
                    Object(v["c"])(), this.SET_TOKEN("")
                }
            }, {
                key: "GetUserInfo", value: function () {
                    var e = Object(a["a"])(regeneratorRuntime.mark((function e() {
                        var t, c, a, n, i, r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== this.token) {
                                        e.next = 2;
                                        break
                                    }
                                    throw Error("GetUserInfo: token is undefined!");
                                case 2:
                                    return e.next = 4, d({});
                                case 4:
                                    if (t = e.sent, c = t.data, c) {
                                        e.next = 8;
                                        break
                                    }
                                    throw Error("Verification failed, please Login again.");
                                case 8:
                                    a = c.username, n = c.company, c.phone, c.fullname, i = c.avatar, r = c.logintime, this.SET_COMPANY(n), this.SET_NAME(a), this.SET_AVATAR(i), this.SET_LOGINTIME(r);
                                case 13:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));

                    function t() {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {
                key: "LogOut", value: function () {
                    var e = Object(a["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== this.token) {
                                        e.next = 2;
                                        break
                                    }
                                    throw Error("LogOut: token is undefined!");
                                case 2:
                                    return e.next = 4, p();
                                case 4:
                                    Object(v["c"])(), this.SET_TOKEN(""), this.SET_NAME("");
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));

                    function t() {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }]), t
        }(s["d"]);
        u["a"]([s["c"]], z.prototype, "SET_TOKEN", null), u["a"]([s["c"]], z.prototype, "SET_NAME", null), u["a"]([s["c"]], z.prototype, "SET_AVATAR", null), u["a"]([s["c"]], z.prototype, "SET_COMPANY", null), u["a"]([s["c"]], z.prototype, "SET_LOGINTIME", null), u["a"]([s["a"]], z.prototype, "Login", null), u["a"]([s["a"]], z.prototype, "ResetToken", null), u["a"]([s["a"]], z.prototype, "GetUserInfo", null), u["a"]([s["a"]], z.prototype, "LogOut", null), z = u["a"]([Object(s["b"])({
            dynamic: !0,
            store: m["a"],
            name: "user"
        })], z);
        var y = Object(s["e"])(z)
    }, "0f9b": function (e, t, c) {
        "use strict";
        c("1a91")
    }, "1a91": function (e, t, c) {
        e.exports = {menuBg: "#fff", menuText: "#bfcbd9", menuActiveText: "#409eff"}
    }, "23ac": function (e, t, c) {
    }, "26cd": function (e, t, c) {
    }, "2a80": function (e, t, c) {
        "use strict";
        c("9302")
    }, "2ddf": function (e, t, c) {
        "use strict";
        c("0456")
    }, 4360: function (e, t, c) {
        "use strict";
        var a = c("2b0e"), n = c("2f62");
        a["default"].use(n["a"]), t["a"] = new n["a"].Store({})
    }, 5319: function (e, t, c) {
        e.exports = {menuBg: "#fff", menuText: "#bfcbd9", menuActiveText: "#409eff"}
    }, "61f7": function (e, t, c) {
        "use strict";
        c.d(t, "b", (function () {
            return a
        })), c.d(t, "a", (function () {
            return n
        }));
        var a = function (e) {
            return ["admin", "editor"].indexOf(e.trim()) >= 0
        }, n = function (e) {
            return /^(https?:|mailto:|tel:)/.test(e)
        }
    }, "6a1d": function (e, t, c) {
        "use strict";
        c.d(t, "a", (function () {
            return r
        })), c.d(t, "d", (function () {
            return o
        })), c.d(t, "b", (function () {
            return u
        })), c.d(t, "e", (function () {
            return s
        })), c.d(t, "c", (function () {
            return h
        }));
        var a = c("a78e"), n = c.n(a), i = "sidebar_status", r = function () {
            return n.a.get(i)
        }, o = function (e) {
            return n.a.set(i, e)
        }, l = "token", u = function () {
            return n.a.get(l)
        }, s = function (e) {
            return n.a.set(l, e)
        }, h = function () {
            return n.a.remove(l)
        }
    }, "76b0": function (e, t, c) {
        "use strict";
        c("23ac")
    }, "796f": function (e, t, c) {
    }, 8191: function (e, t, c) {
        "use strict";
        c("d5c2")
    }, 9302: function (e, t, c) {
    }, a1de: function (e, t, c) {
        e.exports = {menuBg: "#fff", menuText: "#bfcbd9", menuActiveText: "#409eff"}
    }, b20f: function (e, t, c) {
        e.exports = {menuBg: "#fff", menuText: "#bfcbd9", menuActiveText: "#409eff"}
    }, b775: function (e, t, c) {
        "use strict";
        var a = c("bc3a"), n = c.n(a), i = c("5c96"), r = c("0f9a"),
            o = n.a.create({baseURL: "http://127.0.0.1:8080/cold/", withCredentials: !0, timeout: 5e3});
        o.interceptors.request.use((function (e) {
            return r["a"].token && (e.headers["token"] = r["a"].token), e
        }), (function (e) {
            Promise.reject(e)
        })), o.interceptors.response.use((function (e) {
            var t = e.data;
            return t.hasOwnProperty("code") && 401 == t.code && (console.log(t.msg), i["Message"].error(t.msg), r["a"].LogOut()), e
        }), (function (e) {
            return Object(i["Message"])({message: e.message, type: "error", duration: 5e3}), Promise.reject(e)
        })), t["a"] = o
    }, bc8b: function (e, t, c) {
        "use strict";
        c("ed15")
    }, c3e9: function (e, t, c) {
        "use strict";
        c("26cd")
    }, cd49: function (e, t, c) {
        "use strict";
        c.r(t);
        c("cadf"), c("551c"), c("f751"), c("097d");
        var a = c("2b0e"), n = (c("f5df"), c("5c96")), i = c.n(n), r = c("038a"), o = c.n(r),
            l = (c("b20f"), function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("div", {attrs: {id: "app"}}, [t("router-view")], 1)
            }), u = [], s = (c("2397"), c("bee2")), h = c("d4ec"), d = c("99de"), f = c("7e84"), p = c("262e"),
            v = c("9ab4"), m = c("60a3");

        function b(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, g() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function g() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (g = function () {
                return !!e
            })()
        }

        var z = function (e) {
            function t() {
                return Object(h["a"])(this, t), b(this, t, arguments)
            }

            return Object(p["a"])(t, e), Object(s["a"])(t)
        }(m["c"]);
        z = v["a"]([Object(m["a"])({name: "App"})], z);
        var y, O = z, M = O, w = c("2877"), j = Object(w["a"])(M, l, u, !1, null, null, null), k = j.exports,
            H = c("4360"), x = c("8c4f"), C = function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "app-wrapper",
                    class: e.classObj
                }, [e.classObj.mobile && e.sidebar.opened ? t("div", {
                    staticClass: "drawer-bg",
                    on: {click: e.handleClickOutside}
                }) : e._e(), t("sidebar", {staticClass: "sidebar-container"}), t("div", {staticClass: "main-container"}, [t("navbar"), t("app-main")], 1)], 1)
            }, V = [], B = c("2fe1"), S = c("6fc5"), E = c("6a1d");

        function T(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, A() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function A() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (A = function () {
                return !!e
            })()
        }

        (function (e) {
            e[e["Mobile"] = 0] = "Mobile", e[e["Desktop"] = 1] = "Desktop"
        })(y || (y = {}));
        var L = function (e) {
            function t() {
                var e;
                return Object(h["a"])(this, t), e = T(this, t, arguments), e.sidebar = {
                    opened: "closed" !== Object(E["a"])(),
                    withoutAnimation: !1
                }, e.device = y.Desktop, e
            }

            return Object(p["a"])(t, e), Object(s["a"])(t, [{
                key: "TOGGLE_SIDEBAR", value: function (e) {
                    this.sidebar.opened = !this.sidebar.opened, this.sidebar.withoutAnimation = e, this.sidebar.opened ? Object(E["d"])("opened") : Object(E["d"])("closed")
                }
            }, {
                key: "CLOSE_SIDEBAR", value: function (e) {
                    this.sidebar.opened = !1, this.sidebar.withoutAnimation = e, Object(E["d"])("closed")
                }
            }, {
                key: "TOGGLE_DEVICE", value: function (e) {
                    this.device = e
                }
            }, {
                key: "ToggleSideBar", value: function (e) {
                    this.TOGGLE_SIDEBAR(e)
                }
            }, {
                key: "CloseSideBar", value: function (e) {
                    this.CLOSE_SIDEBAR(e)
                }
            }, {
                key: "ToggleDevice", value: function (e) {
                    this.TOGGLE_DEVICE(e)
                }
            }]), t
        }(S["d"]);
        v["a"]([S["c"]], L.prototype, "TOGGLE_SIDEBAR", null), v["a"]([S["c"]], L.prototype, "CLOSE_SIDEBAR", null), v["a"]([S["c"]], L.prototype, "TOGGLE_DEVICE", null), v["a"]([S["a"]], L.prototype, "ToggleSideBar", null), v["a"]([S["a"]], L.prototype, "CloseSideBar", null), v["a"]([S["a"]], L.prototype, "ToggleDevice", null), L = v["a"]([Object(S["b"])({
            dynamic: !0,
            store: H["a"],
            name: "app"
        })], L);
        var R = Object(S["e"])(L), _ = function () {
            var e = this, t = e._self._c;
            e._self._setupProxy;
            return t("section", {staticClass: "app-main"}, [t("transition", {
                attrs: {
                    name: "fade-transform",
                    mode: "out-in"
                }
            }, [t("router-view")], 1)], 1)
        }, P = [];

        function I(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, N() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function N() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (N = function () {
                return !!e
            })()
        }

        var D = function (e) {
            function t() {
                return Object(h["a"])(this, t), I(this, t, arguments)
            }

            return Object(p["a"])(t, e), Object(s["a"])(t)
        }(m["c"]);
        D = v["a"]([Object(m["a"])({name: "AppMain"})], D);
        var G = D, Z = G, Y = (c("2a80"), Object(w["a"])(Z, _, P, !1, null, "5696fbe3", null)), W = Y.exports,
            F = function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("div", {staticClass: "navbar"}, [t("hamburger", {
                    staticClass: "hamburger-container",
                    attrs: {id: "hamburger-container", "is-active": e.sidebar.opened},
                    on: {toggleClick: e.toggleSideBar}
                }), e._m(0), t("div", {staticClass: "right-menu"}, [t("div", {staticClass: "avatar-container right-menu-item hover-effect"}, [t("div", {staticClass: "avatar-wrapper"}, [e._m(1), e._m(2), e._m(3), e.avatar ? t("img", {
                    staticClass: "user-avatar",
                    attrs: {src: e.avatar}
                }) : e._e(), t("div", {staticClass: "avatar-company"}, [e._v(e._s(e.company) + "\n          "), t("span", {
                    staticClass: "out",
                    on: {click: e.logout}
                }, [e._v(" | 退出")])])])])])], 1)
            }, J = [function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("div", {staticClass: "position"}, [e._v("北京 "), t("i", {staticClass: "icon"}, [e._v("")])])
            }, function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("div", {staticClass: "topLab"}, [t("i", {staticClass: "icon"}, [e._v("")]), e._v(" 自缴")])
            }, function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("div", {staticClass: "topLab"}, [t("i", {staticClass: "icon"}, [e._v("")]), e._v(" 公告")])
            }, function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("div", {staticClass: "topLab"}, [t("i", {staticClass: "icon"}, [e._v("")]), e._v(" 消息")])
            }], Q = (c("96cf"), c("1da1")), X = (c("6b54"), c("0f9a")), U = function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("el-breadcrumb", {
                    staticClass: "app-breadcrumb",
                    attrs: {separator: "/"}
                }, [t("transition-group", {attrs: {name: "breadcrumb"}}, e._l(e.breadcrumbs, (function (c, a) {
                    return t("el-breadcrumb-item", {key: c.path}, ["noredirect" === c.redirect || a === e.breadcrumbs.length - 1 ? t("span", {staticClass: "no-redirect"}, [e._v(e._s(c.meta.title))]) : t("a", {
                        on: {
                            click: function (t) {
                                return t.preventDefault(), e.handleLink(c)
                            }
                        }
                    }, [e._v(e._s(c.meta.title))])])
                })), 1)], 1)
            }, K = [], q = (c("f559"), c("bd11")), $ = c.n(q);

        function ee(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, te() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function te() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (te = function () {
                return !!e
            })()
        }

        var ce = function (e) {
            function t() {
                var e;
                return Object(h["a"])(this, t), e = ee(this, t, arguments), e.breadcrumbs = [], e
            }

            return Object(p["a"])(t, e), Object(s["a"])(t, [{
                key: "onRouteChange", value: function (e) {
                    e.path.startsWith("/redirect/") || this.getBreadcrumb()
                }
            }, {
                key: "created", value: function () {
                    this.getBreadcrumb()
                }
            }, {
                key: "getBreadcrumb", value: function () {
                    var e = this.$route.matched.filter((function (e) {
                        return e.meta && e.meta.title
                    })), t = e[0];
                    this.isDashboard(t) || (e = [{
                        path: "/dashboard",
                        meta: {title: "Dashboard"}
                    }].concat(e)), this.breadcrumbs = e.filter((function (e) {
                        return e.meta && e.meta.title && !1 !== e.meta.breadcrumb
                    }))
                }
            }, {
                key: "isDashboard", value: function (e) {
                    var t = e && e.meta && e.meta.title;
                    return "Dashboard" === t
                }
            }, {
                key: "pathCompile", value: function (e) {
                    var t = this.$route.params, c = $.a.compile(e);
                    return c(t)
                }
            }, {
                key: "handleLink", value: function (e) {
                    var t = e.redirect, c = e.path;
                    t ? this.$router.push(t) : this.$router.push(this.pathCompile(c))
                }
            }]), t
        }(m["c"]);
        v["a"]([Object(m["d"])("$route")], ce.prototype, "onRouteChange", null), ce = v["a"]([Object(m["a"])({name: "Breadcrumb"})], ce);
        var ae = ce, ne = ae, ie = (c("bc8b"), Object(w["a"])(ne, U, K, !1, null, "197febed", null)), re = ie.exports,
            oe = function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    class: [{"is-active": e.isActive}],
                    on: {click: e.toggleClick}
                }, [t("svg-icon", {attrs: {name: "hamburger", width: "20", height: "20"}})], 1)
            }, le = [];

        function ue(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, se() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function se() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (se = function () {
                return !!e
            })()
        }

        var he = function (e) {
            function t() {
                return Object(h["a"])(this, t), ue(this, t, arguments)
            }

            return Object(p["a"])(t, e), Object(s["a"])(t, [{
                key: "toggleClick", value: function () {
                    this.$emit("toggleClick")
                }
            }]), t
        }(m["c"]);
        v["a"]([Object(m["b"])({default: !1})], he.prototype, "isActive", void 0), he = v["a"]([Object(m["a"])({name: "Hamburger"})], he);
        var de = he, fe = de, pe = (c("2ddf"), Object(w["a"])(fe, oe, le, !1, null, "28e3bf62", null)), ve = pe.exports;

        function me(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, be() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function be() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (be = function () {
                return !!e
            })()
        }

        var ge = function (e) {
            function t() {
                return Object(h["a"])(this, t), me(this, t, arguments)
            }

            return Object(p["a"])(t, e), Object(s["a"])(t, [{
                key: "sidebar", get: function () {
                    return R.sidebar
                }
            }, {
                key: "device", get: function () {
                    return R.device.toString()
                }
            }, {
                key: "avatar", get: function () {
                    return X["a"].avatar
                }
            }, {
                key: "company", get: function () {
                    return X["a"].company
                }
            }, {
                key: "toggleSideBar", value: function () {
                    R.ToggleSideBar(!1)
                }
            }, {
                key: "userInfo", value: function () {
                    X["a"].GetUserInfo()
                }
            }, {
                key: "created", value: function () {
                    this.userInfo()
                }
            }, {
                key: "logout", value: function () {
                    var e = Object(Q["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, X["a"].LogOut();
                                case 2:
                                    this.$router.push("/login?redirect=".concat(this.$route.fullPath));
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));

                    function t() {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }]), t
        }(m["c"]);
        ge = v["a"]([Object(m["a"])({name: "Navbar", components: {Breadcrumb: re, Hamburger: ve}})], ge);
        var ze = ge, ye = ze, Oe = (c("e88b"), Object(w["a"])(ye, F, J, !1, null, "8a2137e0", null)), Me = Oe.exports,
            we = function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return t("el-scrollbar", {attrs: {"wrap-class": "scrollbar-wrapper"}}, [t("el-menu", {
                    attrs: {
                        "default-active": e.activeMenu,
                        collapse: e.isCollapse,
                        "background-color": e.variables.menuBg,
                        "text-color": e.variables.menuText,
                        "active-text-color": e.variables.menuActiveText,
                        "unique-opened": !1,
                        "collapse-transition": !1,
                        mode: "vertical"
                    }
                }, [t("div", {staticClass: "logo"}, [t("img", {
                    attrs: {
                        src: c("cf05"),
                        alt: ""
                    }
                })]), e._l(e.routes, (function (c) {
                    return t("sidebar-item", {
                        key: c.path,
                        attrs: {item: c, "base-path": c.path, "is-collapse": e.isCollapse}
                    })
                }))], 2)], 1)
            }, je = [], ke = function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return e.item.meta && e.item.meta.hidden ? e._e() : t("div", {class: ["menu-wrapper", e.isCollapse ? "simple-mode" : "full-mode", {"first-level": e.isFirstLevel}]}, [e.theOnlyOneChild && !e.theOnlyOneChild.children ? [e.theOnlyOneChild.meta ? t("sidebar-item-link", {attrs: {to: e.resolvePath(e.theOnlyOneChild.path)}}, [t("el-menu-item", {
                    class: {"submenu-title-noDropdown": e.isFirstLevel},
                    attrs: {index: e.resolvePath(e.theOnlyOneChild.path)}
                }, [e.theOnlyOneChild.meta.icon ? t("svg-icon", {attrs: {name: e.theOnlyOneChild.meta.icon}}) : e._e(), e.theOnlyOneChild.meta.title ? t("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v(e._s(e.theOnlyOneChild.meta.title))]) : e._e()], 1)], 1) : e._e()] : t("el-submenu", {
                    attrs: {
                        index: e.resolvePath(e.item.path),
                        "popper-append-to-body": ""
                    }
                }, [t("template", {slot: "title"}, [e.item.meta && e.item.meta.icon ? t("svg-icon", {attrs: {name: e.item.meta.icon}}) : e._e(), e.item.meta && e.item.meta.title ? t("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v(e._s(e.item.meta.title))]) : e._e()], 1), e.item.children ? e._l(e.item.children, (function (c) {
                    return t("sidebar-item", {
                        key: c.path,
                        staticClass: "nest-menu",
                        attrs: {
                            item: c,
                            "is-collapse": e.isCollapse,
                            "is-first-level": !1,
                            "base-path": e.resolvePath(c.path)
                        }
                    })
                })) : e._e()], 2)], 2)
            }, He = [],
            xe = (c("8e6e"), c("ac6a"), c("456d"), c("ac4d"), c("8a81"), c("5df3"), c("1c4c"), c("7f7f"), c("ade3")),
            Ce = c("df7c"), Ve = c.n(Ce), Be = c("61f7"), Se = function () {
                var e = this, t = e._self._c;
                e._self._setupProxy;
                return e.isExternal(e.to) ? t("a", {
                    attrs: {
                        href: e.to,
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [e._t("default")], 2) : t("router-link", {attrs: {to: e.to}}, [e._t("default")], 2)
            }, Ee = [];

        function Te(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, Ae() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function Ae() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (Ae = function () {
                return !!e
            })()
        }

        var Le = function (e) {
            function t() {
                var e;
                return Object(h["a"])(this, t), e = Te(this, t, arguments), e.isExternal = Be["a"], e
            }

            return Object(p["a"])(t, e), Object(s["a"])(t)
        }(m["c"]);
        v["a"]([Object(m["b"])({required: !0})], Le.prototype, "to", void 0), Le = v["a"]([Object(m["a"])({name: "SidebarItemLink"})], Le);
        var Re = Le, _e = Re, Pe = Object(w["a"])(_e, Se, Ee, !1, null, null, null), Ie = Pe.exports;

        function Ne(e, t) {
            var c = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), c.push.apply(c, a)
            }
            return c
        }

        function De(e) {
            for (var t = 1; t < arguments.length; t++) {
                var c = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ne(Object(c), !0).forEach((function (t) {
                    Object(xe["a"])(e, t, c[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : Ne(Object(c)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t))
                }))
            }
            return e
        }

        function Ge(e, t) {
            var c = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!c) {
                if (Array.isArray(e) || (c = Ze(e)) || t && e && "number" === typeof e.length) {
                    c && (e = c);
                    var a = 0, n = function () {
                    };
                    return {
                        s: n, n: function () {
                            return a >= e.length ? {done: !0} : {done: !1, value: e[a++]}
                        }, e: function (e) {
                            throw e
                        }, f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, r = !0, o = !1;
            return {
                s: function () {
                    c = c.call(e)
                }, n: function () {
                    var e = c.next();
                    return r = e.done, e
                }, e: function (e) {
                    o = !0, i = e
                }, f: function () {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw i
                    }
                }
            }
        }

        function Ze(e, t) {
            if (e) {
                if ("string" === typeof e) return Ye(e, t);
                var c = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === c && e.constructor && (c = e.constructor.name), "Map" === c || "Set" === c ? Array.from(e) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? Ye(e, t) : void 0
            }
        }

        function Ye(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var c = 0, a = new Array(t); c < t; c++) a[c] = e[c];
            return a
        }

        function We(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, Fe() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function Fe() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (Fe = function () {
                return !!e
            })()
        }

        var Je = function (e) {
            function t() {
                return Object(h["a"])(this, t), We(this, t, arguments)
            }

            return Object(p["a"])(t, e), Object(s["a"])(t, [{
                key: "showingChildNumber", get: function () {
                    if (this.item.children) {
                        var e = this.item.children.filter((function (e) {
                            return !e.meta || !e.meta.hidden
                        }));
                        return e.length
                    }
                    return 0
                }
            }, {
                key: "theOnlyOneChild", get: function () {
                    if (this.showingChildNumber > 1) return null;
                    if (this.item.children) {
                        var e, t = Ge(this.item.children);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var c = e.value;
                                if (!c.meta || !c.meta.hidden) return c
                            }
                        } catch (a) {
                            t.e(a)
                        } finally {
                            t.f()
                        }
                    }
                    return De(De({}, this.item), {}, {path: ""})
                }
            }, {
                key: "resolvePath", value: function (e) {
                    return Object(Be["a"])(e) ? e : Object(Be["a"])(this.basePath) ? this.basePath : Ve.a.resolve(this.basePath, e)
                }
            }]), t
        }(m["c"]);
        v["a"]([Object(m["b"])({required: !0})], Je.prototype, "item", void 0), v["a"]([Object(m["b"])({default: !1})], Je.prototype, "isCollapse", void 0), v["a"]([Object(m["b"])({default: !0})], Je.prototype, "isFirstLevel", void 0), v["a"]([Object(m["b"])({default: ""})], Je.prototype, "basePath", void 0), Je = v["a"]([Object(m["a"])({
            name: "SidebarItem",
            components: {SidebarItemLink: Ie}
        })], Je);
        var Qe = Je, Xe = Qe, Ue = (c("0f9b"), c("c3e9"), Object(w["a"])(Xe, ke, He, !1, null, "e15023e6", null)),
            Ke = Ue.exports, qe = c("a1de"), $e = c.n(qe);

        function et(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, tt() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function tt() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (tt = function () {
                return !!e
            })()
        }

        var ct = function (e) {
            function t() {
                return Object(h["a"])(this, t), et(this, t, arguments)
            }

            return Object(p["a"])(t, e), Object(s["a"])(t, [{
                key: "sidebar", get: function () {
                    return R.sidebar
                }
            }, {
                key: "routes", get: function () {
                    return this.$router.options.routes
                }
            }, {
                key: "variables", get: function () {
                    return $e.a
                }
            }, {
                key: "activeMenu", get: function () {
                    var e = this.$route, t = e.meta, c = e.path;
                    return t.activeMenu ? t.activeMenu : c
                }
            }, {
                key: "isCollapse", get: function () {
                    return !this.sidebar.opened
                }
            }]), t
        }(m["c"]);
        ct = v["a"]([Object(m["a"])({name: "SideBar", components: {SidebarItem: Ke}})], ct);
        var at = ct, nt = at, it = (c("e6c2"), c("8191"), Object(w["a"])(nt, we, je, !1, null, "37c9931c", null)),
            rt = it.exports;

        function ot(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, lt() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function lt() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (lt = function () {
                return !!e
            })()
        }

        var ut = 992, st = function (e) {
            function t() {
                return Object(h["a"])(this, t), ot(this, t, arguments)
            }

            return Object(p["a"])(t, e), Object(s["a"])(t, [{
                key: "device", get: function () {
                    return R.device
                }
            }, {
                key: "sidebar", get: function () {
                    return R.sidebar
                }
            }, {
                key: "onRouteChange", value: function () {
                    this.device === y.Mobile && this.sidebar.opened && R.CloseSideBar(!1)
                }
            }, {
                key: "beforeMount", value: function () {
                    window.addEventListener("resize", this.resizeHandler)
                }
            }, {
                key: "mounted", value: function () {
                    var e = this.isMobile();
                    e && (R.ToggleDevice(y.Mobile), R.CloseSideBar(!0))
                }
            }, {
                key: "beforeDestroy", value: function () {
                    window.removeEventListener("resize", this.resizeHandler)
                }
            }, {
                key: "isMobile", value: function () {
                    var e = document.body.getBoundingClientRect();
                    return e.width - 1 < ut
                }
            }, {
                key: "resizeHandler", value: function () {
                    if (!document.hidden) {
                        var e = this.isMobile();
                        R.ToggleDevice(e ? y.Mobile : y.Desktop), e && R.CloseSideBar(!0)
                    }
                }
            }]), t
        }(m["c"]);
        v["a"]([Object(m["d"])("$route")], st.prototype, "onRouteChange", null), st = v["a"]([Object(m["a"])({name: "ResizeMixin"})], st);
        var ht = st;

        function dt(e, t, c) {
            return t = Object(f["a"])(t), Object(d["a"])(e, ft() ? Reflect.construct(t, c || [], Object(f["a"])(e).constructor) : t.apply(e, c))
        }

        function ft() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (e) {
            }
            return (ft = function () {
                return !!e
            })()
        }

        var pt = function (e) {
            function t() {
                return Object(h["a"])(this, t), dt(this, t, arguments)
            }

            return Object(p["a"])(t, e), Object(s["a"])(t, [{
                key: "classObj", get: function () {
                    return {
                        hideSidebar: !this.sidebar.opened,
                        openSidebar: this.sidebar.opened,
                        withoutAnimation: this.sidebar.withoutAnimation,
                        mobile: this.device === y.Mobile
                    }
                }
            }, {
                key: "handleClickOutside", value: function () {
                    R.CloseSideBar(!1)
                }
            }]), t
        }(Object(B["c"])(ht));
        pt = v["a"]([Object(m["a"])({name: "Layout", components: {AppMain: W, Navbar: Me, Sidebar: rt}})], pt);
        var vt = pt, mt = vt, bt = (c("76b0"), Object(w["a"])(mt, C, V, !1, null, "64067a26", null)), gt = bt.exports;
        a["default"].use(x["a"]);
        var zt = new x["a"]({
            scrollBehavior: function (e, t, c) {
                return c || {x: 0, y: 0}
            }, base: "/cold/", routes: [{
                path: "/login", component: function () {
                    return c.e("login").then(c.bind(null, "9ed6"))
                }, meta: {hidden: !0}
            }, {
                path: "/404", component: function () {
                    return c.e("404").then(c.bind(null, "8cdb"))
                }, meta: {hidden: !0}
            }, {
                path: "/", component: gt, redirect: "/index", children: [{
                    path: "index", component: function () {
                        return Promise.all([c.e("chunk-4b4c9fd4"), c.e("chunk-690a951c")]).then(c.bind(null, "9406"))
                    }, meta: {title: "工作台", icon: "ind"}
                }]
            }, {
                path: "/monitoring",
                component: gt,
                redirect: "/monitoring/realTime",
                meta: {title: "监控管理", icon: "monitor"},
                children: [{
                    path: "realTime", component: function () {
                        return c.e("chunk-226780d6").then(c.bind(null, "6bc3"))
                    }, meta: {title: " 实时监控"}
                }, {
                    path: "storehouse", component: function () {
                        return c.e("chunk-bcc272d6").then(c.bind(null, "364f"))
                    }, meta: {title: " 仓库监控"}
                }]
            }, {
                path: "/callPolice",
                component: gt,
                redirect: "/callPolice/callPoliceSet",
                meta: {title: "报警管理", icon: "callplace"},
                children: [{
                    path: "realTimeCallPolice", component: function () {
                        return Promise.all([c.e("chunk-4b4c9fd4"), c.e("chunk-69808567")]).then(c.bind(null, "a604"))
                    }, meta: {title: " 实时报警"}
                }, {
                    path: "callPoliceLog", component: function () {
                        return Promise.all([c.e("chunk-4b4c9fd4"), c.e("chunk-f61f4dfe")]).then(c.bind(null, "9d82"))
                    }, meta: {title: " 报警记录"}
                }]
            }, {
                path: "/Statistics",
                component: gt,
                redirect: "/Statistics/main",
                children: [{
                    path: "/main", component: function () {
                        return c.e("chunk-83c3e2ac").then(c.bind(null, "5b99"))
                    }, meta: {title: "统计报表", icon: "statistics"}
                }]
            }, {
                path: "/admin",
                component: gt,
                redirect: "/admin/company",
                meta: {title: "系统管理", icon: "set"},
                children: [{
                    path: "company", component: function () {
                        return c.e("chunk-4ca0b7a4").then(c.bind(null, "8ba4"))
                    }, meta: {title: " 企业管理"}
                }, {
                    path: "warehouse", component: function () {
                        return c.e("chunk-e99adef8").then(c.bind(null, "f293"))
                    }, meta: {title: " 库房管理"}
                }, {
                    path: "host", component: function () {
                        return c.e("chunk-12e369a4").then(c.bind(null, "df62"))
                    }, meta: {title: " 主机管理"}
                }, {
                    path: "meter", component: function () {
                        return c.e("chunk-1ed6eec8").then(c.bind(null, "6efc"))
                    }, meta: {title: " 仪表管理"}
                }, {
                    path: "job", component: function () {
                        return c.e("chunk-1cab68b2").then(c.bind(null, "f1fd"))
                    }, meta: {title: " 定时任务"}
                }]
            }, {path: "*", redirect: "/404", meta: {hidden: !0}}]
        });
        o.a.register({
            callplace: {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M764.57 353.28l4.454 4.506 93.85-94.618c8.96-9.011 8.96-18.022 8.96-27.034a64.666 64.666 0 0 0-8.96-27.033 40.397 40.397 0 0 0-49.152 4.505l-93.799 94.413 8.909 4.506c8.96 18.022 22.323 27.033 35.738 40.755zM188.16 519.782H58.573a35.84 35.84 0 0 0 0 72.09H188.16zm361.933-419.02a35.38 35.38 0 0 0-35.84-35.84 38.605 38.605 0 0 0-35.84 35.84V240.64h71.68zM264.14 357.58l4.454-4.506a171.418 171.418 0 0 1 40.243-40.755l8.91-4.506-98.305-98.918c-17.869-13.517-40.192-13.517-53.606 0a64.666 64.666 0 0 0-8.96 27.034 64.666 64.666 0 0 0 8.96 27.033zm705.997 162.201H840.55v72.09h129.588a35.84 35.84 0 0 0 0-72.09zM599.04 600.883h-80.23l44.697-45.056c8.96-9.011 8.96-18.022 8.96-27.033a64.666 64.666 0 0 0-8.96-27.034 34.867 34.867 0 0 0-49.152 0L407.142 605.389a35.533 35.533 0 0 0 0 49.561q13.364 13.517 40.192 13.517h75.981l-62.515 72.09c-8.96 9.011-8.96 18.022-8.96 27.033a64.666 64.666 0 0 0 8.96 27.034c8.858 9.216 17.818 9.216 26.726 9.216a63.232 63.232 0 0 0 26.83-9.011l107.52-108.135a58.522 58.522 0 0 0 17.868-45.056c-.256-22.732-13.67-40.755-40.704-40.755zm259.174 292.864h-57.907V564.838c0-157.696-129.587-288.358-285.952-288.358S228.403 407.142 228.403 564.838v328.91h-58.112a35.84 35.84 0 0 0 0 72.089H858.42a35.84 35.84 0 0 0 0-72.09zm-129.587 0H299.878v-306.38c0-58.573 22.324-112.64 62.567-157.697a204.544 204.544 0 0 1 303.82 0c40.244 40.55 62.567 99.124 62.567 157.696z" _fill="#232632"/>'
            }
        }), o.a.register({
            dashboard: {
                width: 128,
                height: 100,
                viewBox: "0 0 128 100",
                data: '<path pid="0" d="M27.4 63.6c0-2.5-.9-4.6-2.6-6.4a8.8 8.8 0 0 0-6.5-2.6c-2.5 0-4.7.8-6.5 2.6a8.7 8.7 0 0 0-2.7 6.4c0 2.5 1 4.7 2.7 6.5 1.8 1.7 4 2.6 6.5 2.6s4.7-.9 6.5-2.6c1.7-1.8 2.6-4 2.6-6.5zm13.7-31.8c0-2.5-.9-4.6-2.6-6.4a8.8 8.8 0 0 0-6.5-2.6c-2.5 0-4.7.8-6.5 2.6a8.7 8.7 0 0 0-2.6 6.4c0 2.5.9 4.7 2.6 6.5 1.8 1.7 4 2.6 6.5 2.6s4.7-.9 6.5-2.6c1.7-1.8 2.6-4 2.6-6.5zM71.7 66L79 38.9c.3-1.3.1-2.4-.5-3.5a4.5 4.5 0 0 0-8.3 1.2L63 63.7a13.6 13.6 0 1 0 8 25.4 13 13 0 0 0 6.4-8.4A13.5 13.5 0 0 0 71.7 66zm47.2-2.4c0-2.5-1-4.6-2.7-6.4a8.8 8.8 0 0 0-6.5-2.6c-2.5 0-4.7.8-6.5 2.6a8.7 8.7 0 0 0-2.6 6.4c0 2.5.9 4.7 2.7 6.5 1.7 1.7 3.9 2.6 6.4 2.6 2.5 0 4.7-.9 6.5-2.6 1.8-1.8 2.7-4 2.7-6.5zM73 18.2c0-2.5-.8-4.6-2.6-6.4A8.8 8.8 0 0 0 64 9c-2.5 0-4.7 1-6.5 2.7a8.7 8.7 0 0 0-2.6 6.4c0 2.5.9 4.7 2.6 6.4 1.8 1.8 4 2.7 6.5 2.7s4.7-.9 6.5-2.7c1.7-1.7 2.6-3.9 2.6-6.4zm32 13.6c0-2.5-.8-4.6-2.6-6.4a8.8 8.8 0 0 0-6.5-2.6c-2.5 0-4.7.8-6.5 2.6a8.7 8.7 0 0 0-2.6 6.4c0 2.5.8 4.7 2.6 6.5 1.8 1.7 4 2.6 6.5 2.6s4.7-.9 6.5-2.6c1.7-1.8 2.6-4 2.6-6.5zm23 31.8c0 12.4-3.4 23.8-10 34.3-1 1.4-2.3 2-4 2H14c-1.7 0-3-.6-4-2a62.2 62.2 0 0 1-5-59 63.9 63.9 0 0 1 123 24.7z"/>'
            }
        }), o.a.register({
            example: {
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                data: '<path pid="0" d="M96.3 57.5h31.4A64.2 64.2 0 0 0 70.3 0v31.4a32.9 32.9 0 0 1 26 26zm-38.8-26V0A64.2 64.2 0 0 0 0 57.5h31.4a32.9 32.9 0 0 1 26-26zm12.8 64.8v31.4A64.5 64.5 0 0 0 128 70H96.6a33.6 33.6 0 0 1-26.3 26.3zm-38.8-26H0A64.5 64.5 0 0 0 57.8 128V96.6a33.6 33.6 0 0 1-26.3-26.3z"/>'
            }
        }), o.a.register({
            "eye-off": {
                width: 128,
                height: 64,
                viewBox: "0 0 128 64",
                data: '<path pid="0" d="M127 8c1.4-2.2 1-5.2-.8-6.9-2.1-1.7-4.8-1.2-6.4 1-.3.3-25.6 32.4-55.8 32.4C34.8 34.5 8.3 2 8 1.9a4.4 4.4 0 0 0-6.3-.5 5.2 5.2 0 0 0-.5 6.8c.5.8 6 7.4 14.6 14.8L4.2 36a5 5 0 0 0 .2 6.8c.5 1 1.6 1.5 2.7 1.5s2.3-.5 3.2-1.5l12.6-14a87 87 0 0 0 20.8 11.6l-4.8 17.4c-.7 2.7.7 5.4 3.2 6.1h1.4c2 0 3.8-1.4 4.3-3.7l4.8-17.4a58.3 58.3 0 0 0 22.8 0L80.2 60a4.7 4.7 0 0 0 4.4 3.7c.4 0 .9 0 1.1-.3 2.5-.7 4-3.4 3.2-6.1l-4.8-17.2A87 87 0 0 0 105 28.6l12.3 13.7c1 1 2.1 1.5 3.2 1.5s2.3-.5 3.2-1.5c1.9-2 1.9-4.9.3-6.8l-11.7-13C121.6 15 127.1 8 127.1 8z"/>'
            }
        }), o.a.register({
            "eye-on": {
                width: 128,
                height: 128,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M512 128q69.7 0 135.5 21.2t115.5 55 93.5 74.8 73.7 82 51.6 74.8 32.2 54.9l10 21.3-6.3 13.5q-4 8.5-18.8 34.7t-31.7 51.6-44.3 60-56.9 64.4-69.5 60.1-82.3 51.5-94.9 34.7T512 896q-69.7 0-135.5-21.2T261 820t-93.5-74.3-73.7-81.5-51.6-74.5-32.2-55l-10-21 6.3-13.5q4-8.5 18.8-34.8t31.7-51.8 44.3-60.4 56.9-64.6 69.5-60.4 82.3-51.8 94.9-34.8T512 128zm0 85.3q-46.7 0-91.6 12.4t-81.2 31.8-70.7 47.1-59.6 54.5-48.9 57.7-37.6 52.8-26.4 44q12.4 21.7 26.4 43.5t37.6 52.4 48.9 57 59.6 53.8 70.7 46.7 81.2 31.5 91.6 12.2 91.6-12.4 81.2-31.6 70.7-46.9 59.6-54.2 48.9-57.3 37.6-52.7T928 512q-12.4-21.7-26.4-43.6T864 415.7t-49-57.3-59.6-54.2-70.7-46.9-81.2-31.6-91.6-12.4zm0 128q70.7 0 120.7 50t50 120.7-50 120.7-120.7 50-120.7-50-50-120.7 50-120.7 120.7-50zm0 85.4q-35.3 0-60.3 25t-25 60.3 25 60.3 60.3 25 60.3-25 25-60.3-25-60.3-60.3-25z"/>'
            }
        }), o.a.register({
            form: {
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                data: '<path pid="0" d="M84 23.8c-1 0-1.8-.3-2.5-1a8.6 8.6 0 0 1-1.7-2.2 11.5 11.5 0 0 1-1-2.6c-.3-1-.4-1.7-.4-2.3V0h.2c.9 0 1.7 0 2.4.3.8.1 1.7.5 2.7 1.2l4 2.7a211.6 211.6 0 0 1 11.7 9.7c1.4 1.4 2.6 2.6 3.4 3.6.8 1 1.2 1.8 1.4 2.4l.3 1.8v2H84.1zM127.4 84c.3.7.5 1.5.6 2.6 0 1-.4 2-1.4 3a30.4 30.4 0 0 0-2.3 2 6.7 6.7 0 0 1-1 .9l-11.7-10.8a44.3 44.3 0 0 0 1.8-1.5 31 31 0 0 1 1.8-1.4c1-1 2.3-1.4 3.6-1.2a9 9 0 0 1 6.2 3c1 1 1.8 2.2 2.4 3.4zM78.3 96c2 0 3.7-.5 5-1.5l-26.9 25.8H18c-1.7 0-3.6-.5-5.7-1.4a24.5 24.5 0 0 1-5.9-3.7 21.4 21.4 0 0 1-4.5-5.3c-1.2-2-1.8-4-1.8-6.2V16.5c0-1.8.4-3.7 1.3-5.6A18.4 18.4 0 0 1 5 5.6a21.8 21.8 0 0 1 5.3-4c1.9-1 4-1.6 6-1.6h53.3v16c0 1.6.3 3.4.8 5.2a16.7 16.7 0 0 0 2.6 5.2A13.2 13.2 0 0 0 84.2 32h20.3v42.3l-19 18.2c1-1.4 1.5-3 1.5-4.5 0-2.2-.9-4.1-2.6-5.7a8.8 8.8 0 0 0-6.2-2.4H26.1c-2.4 0-4.4.8-6.1 2.4a7.6 7.6 0 0 0-2.5 5.7c0 2.2.8 4 2.5 5.6a8.7 8.7 0 0 0 6.1 2.3h52.1zM26 47.9c-2.4 0-4.4.8-6.1 2.4a7.6 7.6 0 0 0-2.5 5.7c0 2.2.8 4.1 2.5 5.6A8.7 8.7 0 0 0 26 64h52.1a9 9 0 0 0 6.2-2.3A7.3 7.3 0 0 0 87 56c0-2.2-.9-4.1-2.6-5.7a8.8 8.8 0 0 0-6.2-2.3H26.1zM78.5 112l1.8-1.6 3.5-3.2a479.8 479.8 0 0 0 4.6-4.3 500.8 500.8 0 0 1 5-4.7l13.5-12.3 11.6 10.8-13.4 12.4-5 4.6-4.6 4.2a179.5 179.5 0 0 0-3.3 3l-1.5 1.5a62.2 62.2 0 0 1-3.2 2l-2.5 1a83.5 83.5 0 0 1-3.6 1 72.2 72.2 0 0 1-3.4 1l-2.6.5c-1 .1-1.8 0-2.2-.4-.3-.4-.4-1.2-.3-2.2a30 30 0 0 1 1.6-5.4l1-3 .8-2a10.2 10.2 0 0 1 2.2-2.9z"/>'
            }
        }), o.a.register({
            hamburger: {
                width: 64,
                height: 64,
                viewBox: "0 0 1024 1024",
                data: '<path pid="0" d="M408 442h480a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8H408a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8zm-8 204a8 8 0 0 0 8 8h480a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8H408a8 8 0 0 0-8 8v56zm504-486H120a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h784a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8zm0 632H120a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h784a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8zM142.4 642.1L298.7 519a8.8 8.8 0 0 0 0-13.9L142.4 381.9a8.9 8.9 0 0 0-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"/>'
            }
        }), o.a.register({
            "icon-admin": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M204.928 286.464a4.476 4.476 0 1 0 572.928 0 4.476 4.476 0 1 0-572.928 0z"/><path pid="1" d="M869.312 523.264c-35.392-43.2-101.888-51.2-140.16-10.496C669.504 576.128 585.408 616 491.328 616c-83.264 0-158.976-31.04-216.832-82.048-43.84-38.656-112.64-23.36-145.472 25.024-49.28 72.768-78.4 160.064-78.4 254.72 0 19.072 1.28 37.76 3.648 56.064 11.904 90.56 96 154.24 187.264 154.24h539.392c100.544 0 183.744-77.824 191.232-178.048.768-10.624 1.216-21.376 1.216-32.192 0-110.464-39.168-211.328-104.064-290.496z"/>'
            }
        }), o.a.register({
            "icon-bianji": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M908.786 492.416c-11.05 0-20.009 8.958-20.009 20.009v338.328c0 38.615-31.416 70.031-70.03 70.031h-616.04c-38.614 0-70.03-31.416-70.03-70.03V174.45c0-38.614 31.416-70.03 70.03-70.03h362.38c11.049 0 20.008-8.959 20.008-20.01 0-11.05-8.96-20.008-20.009-20.008H202.708c-60.681 0-110.05 49.367-110.05 110.05v676.302c0 60.681 49.368 110.05 110.05 110.05h616.038c60.681 0 110.05-49.368 110.05-110.05V512.426c0-11.052-8.96-20.01-20.01-20.01z"/><path pid="1" d="M942.577 117.985l-35.371-35.37c-23.405-23.405-61.486-23.401-84.891 0l-422.37 422.368a20.025 20.025 0 0 0-3.304 4.364l-127.322 227.07a20.01 20.01 0 0 0 27.947 26.82l219.286-135.104a19.989 19.989 0 0 0 3.654-2.886l422.37-422.368c23.404-23.407 23.404-61.489 0-84.894zm-524.02 434.096l55.421 55.279-132.026 81.343 76.605-136.622zm495.722-377.502L505.927 582.93l-63.75-63.586 408.435-408.432c7.799-7.8 20.494-7.805 28.295 0l35.372 35.372c7.803 7.8 7.803 20.493 0 28.295z"/>'
            }
        }), o.a.register({
            "icon-config": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M993.89 704.576l-41.045 12.788c1.18 8.866 2.456 17.509 2.456 26.662 0 9.057-1.435 17.859-2.806 26.533l41.395 12.884c9.695 2.807 17.859 9.376 22.579 18.242 4.688 8.866 5.644 19.263 2.423 28.83-6.665 19.709-28.574 30.36-49.08 24.046l-41.874-12.98a207.39 207.39 0 0 1-32.178 43.277l25.545 33.741a36.388 36.388 0 0 1-8.61 52.174 39.896 39.896 0 0 1-54.44-8.228l-25.672-33.9a218.01 218.01 0 0 1-52.748 17.094v41.14c0 20.601-17.477 37.408-38.94 37.408-21.558 0-39.003-16.711-39.003-37.409v-41.14a217.818 217.818 0 0 1-52.78-17.093l-25.609 33.9a40.183 40.183 0 0 1-54.47 8.228 36.165 36.165 0 0 1-8.579-52.174l25.8-34.06a201.139 201.139 0 0 1-33.294-42.703l-40.917 12.789c-20.602 6.442-42.511-4.337-49.113-24.046a36.93 36.93 0 0 1 24.971-47.072l41.076-12.724c-1.148-8.834-2.52-17.605-2.52-26.694 0-9.184 1.5-17.859 2.84-26.66l-41.428-12.821c-20.57-6.442-31.668-27.49-24.97-47.136 6.6-19.613 28.51-30.296 49.112-24.014l41.841 13.044a211.057 211.057 0 0 1 32.179-43.372l-25.513-33.646a36.452 36.452 0 0 1 8.579-52.206 39.96 39.96 0 0 1 54.47 8.292l25.64 33.9a214.47 214.47 0 0 1 52.749-17.125v-41.14c0-20.634 17.413-37.409 39.003-37.409 21.495 0 38.971 16.647 38.971 37.409v41.076a216.734 216.734 0 0 1 52.717 17.157l25.672-33.932a40.12 40.12 0 0 1 54.439-8.292c17.349 12.183 21.271 35.495 8.643 52.238l-25.832 34.028c12.724 12.916 24.365 26.98 33.358 42.607l40.885-12.66c20.538-6.315 42.415 4.4 49.08 24.077 6.761 19.614-4.528 40.662-25.002 47.072zM740.99 613.303c-75.327 0-136.463 58.616-136.463 130.818 0 72.266 61.136 130.755 136.463 130.755 75.232 0 136.4-58.489 136.4-130.755 0-72.202-61.073-130.818-136.4-130.818z"/><path pid="1" d="M441.69 895.67H99.529a49.75 49.75 0 0 1-49.782-49.783V99.597c0-27.459 22.292-49.783 49.782-49.783h447.819v223.91a99.533 99.533 0 0 0 99.533 99.533h199.002v36.451a322.103 322.103 0 0 1 49.782 32.02V348.38l-8.802-8.77 1.53-8.802L581.343.096H99.56A99.533 99.533 0 0 0 .027 99.629V845.95a99.533 99.533 0 0 0 99.533 99.533h390.446a322.964 322.964 0 0 1-48.315-49.814z"/><path pid="2" d="M597.13 91.146l217.817 232.328H646.88a49.75 49.75 0 0 1-49.783-49.75V91.146h.032zM174.185 423.007H422.97v-49.75H174.186v49.75zM422.97 223.941H174.186v49.783H422.97V223.94zM174.186 744.058H422.97v-49.751H174.186v49.75zm339.93-199.034h-339.93v49.75h339.93v-49.75z"/>'
            }
        }), o.a.register({
            "icon-dangdifill": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M814.899 729.555c-52.182-15.88-113.72-27.297-179.772-33.62 83.38-122.791 144.99-275.473 144.99-379.626 0-144.027-119.428-260.733-266.739-260.733-147.317 0-266.739 116.706-266.739 260.733 0 102.386 61.575 255.895 145.228 379.483-66.637 6.29-128.728 17.752-181.31 33.753-60.228 18.326-132.023 49.885-132.023 96.16 0 89.684 218.426 136.608 434.195 136.608 112.413 0 218.349-12.394 298.294-34.9 88.905-25.027 135.899-60.197 135.899-101.707 0-46.264-71.794-77.823-132.023-96.151zM514.325 181.99c60.772 0 110.043 49.269 110.043 110.064 0 60.753-49.27 110.034-110.043 110.034-60.784 0-110.055-49.28-110.055-110.034 0-60.795 49.27-110.064 110.055-110.064zm368.954 672.444c-18.848 12.545-47.584 24.46-83.1 34.459-76.514 21.538-178.6 33.402-287.45 33.402s-210.939-11.864-287.452-33.402c-35.516-9.999-64.25-21.914-83.1-34.459-15.235-10.14-23.626-20.343-23.626-28.73 0-5.562 17.592-31.687 103.655-57.874 56.15-17.087 123.938-28.756 196.708-34.17 24.391 32.316 50.161 61.677 76.473 86.333 4.392 4.923 10.781 8.1 17.991 8.1 7.101 0 13.408-3.081 17.8-7.87 26.407-24.668 52.311-54.062 76.838-86.45 72.206 5.462 139.457 17.093 195.233 34.068 86.064 26.191 103.656 52.306 103.656 57.866 0 8.384-8.391 18.586-23.626 28.727z"/>'
            }
        }), o.a.register({
            "icon-daohang": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M605.848 958.709a21.13 21.13 0 0 1-20.377-15.523L476.9 548.458 80.07 437.835a21.125 21.125 0 1 1-1.985-40.039L929.25 66.729A21.125 21.125 0 0 1 956.6 94.077L625.532 945.24a21.128 21.128 0 0 1-19.684 13.468zm-453.31-544.536l347.231 96.797a21.132 21.132 0 0 1 14.697 14.746l94.822 344.73 290.526-746.93-747.277 290.657z"/>'
            }
        }), o.a.register({
            "icon-duanxin": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M958.359 286.941c0-64.308-52.132-116.44-116.441-116.44H181.454c-64.309 0-116.441 52.132-116.441 116.44v448.64c0 64.309 52.132 116.441 116.44 116.441h660.465c64.309 0 116.441-52.132 116.441-116.44v-448.64zm-114.545-74.485c12.06 0 23.445 3.466 33.52 8.599L530.749 549.348c-1.228 1.161-1.156.916-1.753 1.868-1.426 1.067-6.056 3.922-15.45 3.922-9.397 0-14.025-2.754-15.45-3.818-.677-1.078-.663-.717-1.996-1.94L142.977 224.966c11.61-7.557 25.446-12.51 40.301-12.51h660.536zm72.59 524.029c0 40.857-31.731 73.583-72.59 73.583H183.277c-40.858 0-75.285-32.726-75.285-73.583V287.658c0-10.63 2.86-20.736 6.909-29.883l351.486 322.097c4.912 5.303 19.48 17.676 47.01 17.676 27.799 0 42.303-12.618 47.076-17.83l346.8-328.9c6.252 10.86 9.13 23.434 9.13 36.838v448.829z"/>'
            }
        }), o.a.register({
            "icon-editor": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M218.316 307.727h87.886v205.06h-29.297v29.295h117.179v-29.294H364.79V307.727h87.882v29.293h29.294v-87.882H189.022v87.882h29.294v-29.293zm322.242 58.59h292.945v58.588H540.558v-58.588zm0 117.177h292.945v58.588H540.558v-58.588zm-351.536 117.18h644.481v58.588h-644.48v-58.587zm0 117.176h644.481v58.588h-644.48V717.85zm351.536-468.713h292.945v58.589H540.558v-58.589zm420.923 713.13H61.045V63.309h900.436v898.958zm-864.62-35.816h828.804V99.125H96.861V926.45z"/>'
            }
        }), o.a.register({
            "icon-geren": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M586.946 513.581c55.067-27.963 92.912-85.126 92.912-150.998 0-93.339-75.937-169.276-169.277-169.276s-169.276 75.937-169.276 169.276c0 65.872 37.845 123.034 92.911 150.998-95.652 32.016-164.778 122.455-164.778 228.744 0 11.315 9.173 20.491 20.491 20.491s20.492-9.175 20.492-20.491c0-110.369 89.791-200.161 200.16-200.161s200.16 89.792 200.16 200.16c0 11.316 9.174 20.492 20.492 20.492s20.492-9.175 20.492-20.491c-.001-106.289-69.127-196.727-164.78-228.744zM382.288 362.583c0-70.742 57.553-128.294 128.293-128.294 70.742 0 128.294 57.553 128.294 128.294 0 70.741-57.553 128.293-128.294 128.293-70.74 0-128.293-57.552-128.293-128.293z"/><path pid="1" d="M827.871 196.128C743.498 111.758 631.321 65.29 512 65.29s-231.5 46.466-315.871 130.838C111.756 280.502 65.29 392.678 65.29 511.999s46.465 231.5 130.838 315.872S392.679 958.71 512 958.71s231.498-46.465 315.871-130.838S958.71 631.32 958.71 512s-46.465-231.498-130.838-315.871zM512 917.727c-223.718 0-405.727-182.008-405.727-405.728 0-223.718 182.009-405.727 405.727-405.727S917.727 288.28 917.727 512c0 223.72-182.009 405.728-405.727 405.728z"/>'
            }
        }), o.a.register({
            "icon-jiesuo": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M753.845 371.674h-17.463v-83.67c0-59.275-22.628-115.203-63.715-157.482-42.17-43.395-99.369-67.292-161.058-67.292-126.04 0-224.772 98.732-224.772 224.773v83.67h-16.681c-62.788 0-113.688 50.9-113.688 113.688v357.6c0 62.789 50.9 113.69 113.688 113.69h483.69c62.788 0 113.688-50.901 113.688-113.69V485.363c-.002-62.788-50.9-113.688-113.689-113.688zm-425.669-83.669c0-102.858 80.573-183.432 183.432-183.432 50.423 0 97.093 19.448 131.411 54.762 33.547 34.52 52.022 80.215 52.022 128.67v83.67H328.176v-83.67zm498.016 554.957c0 39.956-32.39 72.347-72.347 72.347h-483.69c-39.956 0-72.347-32.391-72.347-72.347v-357.6c0-39.956 32.39-72.346 72.347-72.346h483.69c39.956 0 72.347 32.39 72.347 72.346v357.6z"/><path pid="1" d="M509.933 580.447c-11.416 0-20.67 9.255-20.67 20.67v109.555c0 11.415 9.254 20.67 20.67 20.67 11.416 0 20.67-9.254 20.67-20.67V601.117c0-11.415-9.254-20.67-20.67-20.67z"/>'
            }
        }), o.a.register({
            "icon-job": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm0 960C262.4 960 64 761.6 64 512S262.4 64 512 64s448 198.4 448 448-198.4 448-448 448z"/><path pid="1" d="M556.8 518.4V339.2c0-19.2-12.8-32-32-32s-32 12.8-32 32v192c0 6.4 0 19.2 6.4 19.2l198.4 204.8c6.4 6.4 12.8 12.8 25.6 12.8 6.4 0 12.8 0 19.2-6.4 12.8-12.8 12.8-32 0-44.8L556.8 518.4z"/>'
            }
        }), o.a.register({
            "icon-log": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M904 238.5L746.2 84.2c-13.1-13.1-31-20-48.9-20H195.8c-53.7 0-97.1 44.1-97.1 97.8v700c0 53.7 43.4 97.8 97.1 97.8h631.7c53.7 0 97.8-44.1 97.8-97.8V288.8c0-18.6-8.2-37.2-21.3-50.3zM856.4 862c0 15.8-13.1 28.9-28.9 28.9H195.8c-15.8 0-28.2-13.1-28.2-28.9V162c0-15.8 12.4-28.9 28.2-28.9l454 .7v121.9c0 57.2 46.2 103.3 103.3 103.3h103.3v503zm0-571.8H753.1c-19.3 0-34.4-15.2-34.4-34.4v-102l137.8 135v1.4z"/><path pid="1" d="M684 475.2H339.5c-19 0-34.4 15.4-34.4 34.4s15.4 34.4 34.4 34.4H684c19 0 34.4-15.4 34.4-34.4S703 475.2 684 475.2zm0 206.7H339.5c-19 0-34.4 15.4-34.4 34.4s15.4 34.4 34.4 34.4H684c19 0 34.4-15.4 34.4-34.4S703 681.9 684 681.9z"/>'
            }
        }), o.a.register({
            "icon-menu": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M63.976 127.976v127.909H959.43v-127.91H63.976zM319.82 575.703h639.61V447.788H319.82v127.915zm0 319.78h639.61V767.541H319.82v127.942zM63.976 575.703H191.9V447.788H63.976v127.915zm0 319.78H191.9V767.541H63.976v127.942z"/>'
            }
        }), o.a.register({
            "icon-mudedi": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M954.382 263.834l-82.627-98.12a20.657 20.657 0 0 0-15.802-7.352h-278.87v-71.28c0-11.409-9.25-20.657-20.658-20.657h-86.76c-11.409 0-20.658 9.248-20.658 20.657v184.885H171.158c-6.327 0-12.305 2.9-16.223 7.868L70.252 387.261a20.661 20.661 0 0 0 0 25.578l84.683 107.423a20.655 20.655 0 0 0 16.223 7.87h277.85v299.322h-135.28c-11.41 0-20.658 9.248-20.658 20.657v86.76c0 11.409 9.248 20.658 20.657 20.658h396.616c11.41 0 20.658-9.25 20.658-20.658v-86.76c0-11.409-9.249-20.657-20.658-20.657h-133.26V669.675H736.49c5.169 0 10.149-1.936 13.96-5.43l76.082-69.745a20.653 20.653 0 0 0-.002-30.454l-76.082-69.742a20.648 20.648 0 0 0-13.958-5.43H577.082v-92.958h278.87a20.66 20.66 0 0 0 15.802-7.351l82.627-98.121c6.475-7.686 6.475-18.921.001-26.61zM181.178 486.817l-68.4-86.768 68.4-86.769h267.83v173.536h-267.83zm508.509 427.398H334.385v-45.446h355.302v45.446zm-199.365-86.76V107.739h45.446v719.716h-45.446zm238.133-297.266l53.547 49.085-53.547 49.087H577.082V530.19h151.373zm117.887-175.585h-269.26V199.676h269.26l65.233 77.464-65.233 77.464z"/>'
            }
        }), o.a.register({
            "icon-oss": {
                width: 252.148,
                height: 200,
                viewBox: "0 0 1291 1024",
                data: '<defs/><path pid="0" d="M779.656 669.38a31.508 31.508 0 0 1-22.37-9.295l-111.38-111.38-111.38 111.38a31.508 31.508 0 0 1-44.583-44.584l133.75-133.592a31.508 31.508 0 0 1 44.426 0l133.75 133.592a31.508 31.508 0 0 1-22.213 53.878z"/><path pid="1" d="M960.982 1023.998H787.69a31.508 31.508 0 0 1 0-63.016h166.36a29.302 29.302 0 0 1 5.357 0 283.569 283.569 0 0 0 54.98-557.527 31.508 31.508 0 0 1-23.63-27.412 346.584 346.584 0 0 0-689.702 0 31.508 31.508 0 0 1-23.788 27.412 283.569 283.569 0 0 0 55.138 557.527 31.508 31.508 0 0 1 5.514 0h307.987a31.508 31.508 0 0 1 0 63.016H330.83a33.398 33.398 0 0 1-8.98-1.26 346.584 346.584 0 0 1-80.817-675.051 409.6 409.6 0 0 1 809.746 0 346.584 346.584 0 0 1-81.132 675.208 31.508 31.508 0 0 1-8.665 1.103z"/><path pid="2" d="M645.906 1008.244a31.508 31.508 0 0 1-31.507-31.508V551.383a31.508 31.508 0 0 1 63.015 0v425.353a31.508 31.508 0 0 1-31.508 31.508z"/>'
            }
        }), o.a.register({
            "icon-pinglun": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M850.88 96.416H174.575c-60.681 0-110.05 49.367-110.05 110.05v446.2c0 60.68 49.368 110.05 110.05 110.05h90.308L396.936 931.13a20.008 20.008 0 0 0 31.494 0l132.052-168.415H850.88c60.681 0 110.05-49.367 110.05-110.05v-446.2c0-60.68-49.368-110.05-110.05-110.05zm70.031 556.25c0 38.614-31.416 70.03-70.03 70.03H550.743A20.007 20.007 0 0 0 535 730.36L412.683 886.356 290.367 730.36a20.004 20.004 0 0 0-15.745-7.663H174.576c-38.614 0-70.03-31.417-70.03-70.031v-446.2c0-38.615 31.416-70.032 70.03-70.032h676.303c38.615 0 70.031 31.417 70.031 70.031v446.2z"/><path pid="1" d="M272.621 344.527c-44.132 0-80.036 35.903-80.036 80.036 0 44.132 35.904 80.036 80.036 80.036s80.036-35.904 80.036-80.036c-.001-44.133-35.905-80.036-80.036-80.036zm0 120.055c-22.066 0-40.017-17.952-40.017-40.018s17.953-40.018 40.017-40.018c22.066 0 40.017 17.952 40.017 40.018 0 22.065-17.951 40.018-40.017 40.018zM512.728 344.527c-44.133 0-80.036 35.903-80.036 80.036 0 44.132 35.903 80.036 80.036 80.036 44.132 0 80.035-35.904 80.035-80.036 0-44.133-35.903-80.036-80.035-80.036zm0 120.055c-22.066 0-40.018-17.952-40.018-40.018s17.952-40.018 40.018-40.018c22.065 0 40.017 17.952 40.017 40.018.001 22.065-17.952 40.018-40.017 40.018zM752.836 344.527c-44.131 0-80.036 35.903-80.036 80.036 0 44.132 35.905 80.036 80.036 80.036s80.036-35.904 80.036-80.036c0-44.133-35.905-80.036-80.036-80.036zm0 120.055c-22.066 0-40.017-17.952-40.017-40.018s17.952-40.018 40.017-40.018 40.018 17.952 40.018 40.018c0 22.065-17.951 40.018-40.018 40.018z"/>'
            }
        }), o.a.register({
            "icon-role": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M902.068 744.573c0-60.966-71.69-136.044-128.705-144.511l77.336-127.577H671.753c32.176-46.289 53.627-107.255 53.627-174.994v-15.806c69.434-12.42 114.594-32.177 114.594-51.934 0-21.451-50.24-41.209-127.013-53.628-3.387-18.063-55.32-164.269-116.286-164.269-27.096 0-48.547 14.113-62.66 35.564 0 10.725-10.725 21.45-24.837 21.45-12.42 0-23.145-9.031-24.838-19.757-12.42-21.45-35.564-37.821-62.66-37.821-59.272 0-114.593 134.35-127.012 168.22-66.046 12.42-108.948 30.483-108.948 51.934s44.595 39.515 114.593 51.934v15.806c0 67.74 19.758 128.706 53.627 174.995H174.994l76.772 125.318c-57.014 0-132.092 78.466-132.092 146.77l1.693 205.477c0 33.87 26.532 60.966 60.966 60.966h661.028c33.87 0 60.965-27.096 60.965-60.966l-2.258-207.17zm-190.8-568.45zM464.582 962.47h-28.79l-53.627-395.15 112.336 98.224-29.919 296.926zm123.06 0h-28.789L528.37 665.544l112.9-99.917-53.627 396.843zm67.74-623.771v12.419H641.27s-9.032 76.772-57.014 76.772c-48.547 0-57.579-76.772-57.579-76.772h-32.176c-7.339 62.66-39.515 76.772-57.015 76.772-42.902 0-55.32-57.015-57.014-76.772h-14.677V326.28H473.05v12.419h71.69V326.28h107.256v12.419h3.387z"/>'
            }
        }), o.a.register({
            "icon-shanchu": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M909.051 169.477H691.496V138.13c0-39.587-32.205-71.792-71.793-71.792H408.156c-39.587 0-71.792 32.205-71.792 71.792v31.347H113.35c-11.014 0-19.943 8.94-19.943 19.954s8.929 19.955 19.943 19.955h84.264v640.688c0 60.48 49.203 109.683 109.683 109.683H723.77c60.48 0 109.683-49.204 109.683-109.683V209.386h75.596c11.013 0 19.942-8.94 19.942-19.955s-8.928-19.954-19.941-19.954zM376.248 138.13c0-17.594 14.314-31.908 31.908-31.908h211.547c17.594 0 31.908 14.314 31.908 31.908v31.347H376.248V138.13zM793.57 850.075c0 38.486-31.312 69.798-69.799 69.798H307.298c-38.487 0-69.799-31.312-69.799-69.798V211.043h556.07v639.032z"/><path pid="1" d="M510.663 861.277c11.012 0 19.954-8.93 19.954-19.942V294.913c0-11.014-8.942-19.942-19.954-19.942s-19.955 8.928-19.955 19.942v546.422c0 11.013 8.942 19.942 19.955 19.942zM374.563 801.45c11.013 0 19.954-8.93 19.954-19.943V354.74c0-11.013-8.941-19.942-19.954-19.942s-19.955 8.929-19.955 19.942v426.767c0 11.013 8.942 19.942 19.955 19.942zM649.832 801.45c11.013 0 19.955-8.93 19.955-19.943V354.74c0-11.013-8.942-19.942-19.955-19.942s-19.954 8.929-19.954 19.942v426.767c0 11.013 8.941 19.942 19.954 19.942z"/>'
            }
        }), o.a.register({
            "icon-shezhi": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M545.784 962.54h-65.943c-29.342 0-54.625-25.283-54.625-54.617v-39.46c0-9.624-7.826-20.912-16.69-23.68l-1.566-.613-55.725-23.104-.88-.494c-8.154-4.41-22.018-2.376-28.553 4.187l-28.175 28.124c-9.93 9.977-23.239 15.495-37.432 15.495-14.195 0-27.508-5.518-37.488-15.542l-46.682-46.63c-20.604-20.604-20.632-54.234-.07-74.975l28.15-28.106c6.638-6.575 8.677-20.6 4.254-28.91l-.832-1.768-23.164-56.128-.27-.683c-2.803-9.034-14.279-17.394-23.611-17.394H116.85c-29.391 0-52.862-24.065-52.862-53.193v-65.944c0-28.77 23-51.755 52.92-51.755h39.575c9.082 0 20.804-8.83 23.666-18.057l.568-1.477 23.163-57.088.506-.914c4.404-8.22 2.32-22.224-4.29-28.83l-28.041-28.088c-9.965-9.922-15.487-23.217-15.502-37.397-.016-14.201 5.492-27.537 15.507-37.552l46.655-46.615c9.942-9.985 23.249-15.503 37.433-15.503 14.185 0 27.491 5.519 37.47 15.541l28.04 28.05c6.557 6.527 20.5 8.598 28.656 4.232l.893-.479 57.376-23.65c8.836-2.73 16.634-14.037 16.634-23.718v-39.633c0-28.968 24.778-52.096 54.625-52.096h65.942c29.162 0 52.371 22.637 52.371 52.096v39.633c0 9.127 8.71 20.854 17.768 23.674l1.516.577 56.64 23.113.923.51c8.203 4.425 22.185 2.353 28.79-4.255l28.163-27.913c9.895-9.941 23.18-15.34 37.352-15.34h.06c14.189 0 27.51 5.376 37.517 15.385l46.71 46.555c10.005 9.96 15.525 23.254 15.525 37.475 0 14.188-5.499 27.507-15.48 37.533L825.47 321.27c-6.58 6.61-8.64 20.771-4.204 29.108l.479.896 23.654 57.957c2.902 9.256 14.636 18.115 23.687 18.115h39.132v-.573c27.63 0 52.189 22.984 52.189 52.328V545.1c0 29.59-22.986 53.138-51.747 53.138h-39.63c-9.338 0-20.85 8.373-23.687 17.424l-.58 1.516-23.087 56.241-.469.861c-4.42 8.304-2.393 22.32 4.17 28.855l28.136 28.02c10.032 10.03 15.54 23.351 15.538 37.541-.004 14.186-5.515 27.506-15.518 37.506l-46.748 46.682c-9.921 9.965-23.22 15.506-37.407 15.506h-.06c-14.193 0-27.515-5.515-37.519-15.517l-28.04-28.096c-6.49-6.491-20.808-8.576-28.888-4.207l-.951.515-57.938 23.68c-9.088 2.859-17.824 14.594-17.824 23.691v39.461c-.003 29.847-23.698 54.622-52.374 54.622zM421.867 806.891c25.193 8.37 44.283 34.65 44.283 61.57v39.461c0 7.114 6.57 13.684 13.692 13.684h65.942c6.497 0 12.462-6.044 12.462-13.684v-39.46c0-26.274 19.517-53.132 44.902-61.58l53.86-22.063c23.628-12.117 56.342-7.1 75.118 11.674l28.01 28.154c2.433 2.43 5.679 3.837 9.18 3.837h.015c3.482 0 6.726-1.399 9.135-3.82l46.78-46.738c2.437-2.437 3.783-5.725 3.786-9.225 0-3.495-1.345-6.774-3.788-9.216l-28.106-28c-18.694-18.609-23.762-51.349-11.773-75.036l22.084-53.604c8.375-25.167 35.224-44.514 61.578-44.514h39.631c7.745 0 10.814-7.086 10.814-13.23v-65.997c0-6.862-5.116-12.074-11.256-12.302v1.48h-39.132c-26.237 0-53.1-20.15-61.586-45.736l-22.084-54.262c-11.96-23.655-6.913-56.503 11.728-75.229l28.169-28.192c2.43-2.441 3.788-5.764 3.788-9.295 0-3.499-1.334-6.762-3.76-9.174l-46.741-46.578c-2.462-2.462-5.737-3.734-9.234-3.734h-.014c-3.466 0-6.7 1.255-9.105 3.671l-28.198 28.038c-18.704 18.71-51.417 23.735-75 11.69L603.18 217.41c-25.404-8.388-44.935-35.256-44.935-61.605v-39.633c0-7.253-5.517-12.187-12.462-12.187h-65.943c-7.518 0-13.692 5.519-13.692 12.187v39.633c0 27.027-19.107 53.336-44.326 61.643l-53.501 21.997c-23.835 12.169-55.857 7.235-74.879-11.696l-28.13-28.115c-2.442-2.452-5.691-3.788-9.153-3.788-3.463 0-6.705 1.335-9.118 3.76l-46.69 46.645c-2.438 2.439-3.784 5.71-3.781 9.208.004 3.474 1.34 6.717 3.763 9.13l28.068 28.12c18.699 18.691 23.783 51.39 11.809 74.974l-22.125 54.814c-8.414 25.616-35.282 45.783-61.603 45.783h-39.575c-6.63 0-13.01 3.412-13.01 10.823v65.944c0 6.942 5.752 13.284 12.952 13.284h39.632c26.38 0 53.195 19.35 61.524 44.538l22.182 53.629c12.028 23.731 6.919 56.45-11.863 75.056l-28.022 27.95c-5.021 5.066-5.049 13.348.01 18.41l46.714 46.653c2.453 2.464 5.696 3.794 9.169 3.794 3.472 0 6.712-1.336 9.125-3.76l28.182-28.122c18.641-18.73 51.44-23.753 75.011-11.642l53.353 22.055z"/><path pid="1" d="M513.735 731.88c-120.64 0-218.787-98.146-218.787-218.786s98.147-218.787 218.787-218.787S732.52 392.454 732.52 513.094 634.375 731.88 513.735 731.88zm0-397.556c-98.574 0-178.77 80.196-178.77 178.77s80.195 178.77 178.77 178.77 178.769-80.196 178.769-178.77-80.195-178.77-178.77-178.77z"/>'
            }
        }), o.a.register({
            "icon-shoucang": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M248.482 938a20.771 20.771 0 0 1-20.475-24.282l48.43-282.364L71.289 431.383a20.773 20.773 0 0 1 11.513-35.43l283.508-41.195L493.1 97.854a20.771 20.771 0 0 1 37.254 0l126.789 256.904 283.51 41.195a20.773 20.773 0 1 1 11.511 35.43L747.013 631.354l48.43 282.364a20.771 20.771 0 0 1-30.139 21.897L511.727 802.299l-253.58 133.316a20.763 20.763 0 0 1-9.665 2.385zm-118.06-506.989l182.835 178.217a20.78 20.78 0 0 1 5.974 18.386L276.068 879.26l225.994-118.812a20.776 20.776 0 0 1 19.33 0L747.386 879.26l-43.163-251.645a20.78 20.78 0 0 1 5.974-18.386l182.833-178.217-252.665-36.714a20.776 20.776 0 0 1-15.642-11.363L511.727 153.98 398.729 382.934a20.775 20.775 0 0 1-15.639 11.363l-252.668 36.714z"/>'
            }
        }), o.a.register({
            "icon-shoucangfill": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M777.313 940.007c-3.185 0-6.38-.76-9.308-2.297l-255.31-134.225-255.31 134.224a20.007 20.007 0 1 1-29.03-21.091l48.76-284.29L70.565 430.99a20.01 20.01 0 0 1 11.089-34.127l285.444-41.478L494.753 96.73a20.01 20.01 0 0 1 35.883 0l127.655 258.656 285.444 41.478a20.006 20.006 0 0 1 11.088 34.127L748.274 632.326l48.76 284.29a20.01 20.01 0 0 1-19.721 23.391z"/>'
            }
        }), o.a.register({
            "icon-shouye": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M958.401 451.55a20.01 20.01 0 0 0-6.966-14.972L524.345 69.511c-7.499-6.446-18.581-6.446-26.08 0L309.583 231.676V129.657c0-11.05-8.902-19.533-19.952-19.533h-88.034c-11.048 0-19.928 8.482-19.928 19.533v211.954L71.176 436.578a20.003 20.003 0 0 0-6.968 15.174v105.5a20.007 20.007 0 0 0 33.052 15.172l53.298-45.826V850.7c0 60.678 49.364 110.042 110.042 110.042h504.192c60.678 0 110.043-49.364 110.043-110.042V527.026l51.586 44.336a20.001 20.001 0 0 0 21.48 2.966 20.006 20.006 0 0 0 11.566-18.343l-1.066-104.436zM221.579 150.033h48.095v115.942l-48.095 41.336V150.034zm349.14 770.692H436.665V700.642c0-11.03 8.977-20.007 20.008-20.007h94.036c11.03 0 20.007 8.976 20.007 20.007v220.084zm264.1-424.83v354.803c0 38.612-31.415 70.027-70.028 70.027H610.733V700.642c0-33.096-26.927-60.023-60.023-60.023h-94.036c-33.097 0-60.023 26.927-60.023 60.023v220.085H260.599c-38.612 0-70.027-31.415-70.027-70.027V495.895a20.07 20.07 0 0 0-.315-3.432L512.37 215.504l322.703 277.349a20.158 20.158 0 0 0-.255 3.042zM525.41 173.947c-7.502-6.446-18.587-6.447-26.086.003L104.224 513.664v-52.727l407.081-349.87 407.177 349.952.522 51.205L525.41 173.948z"/>'
            }
        }), o.a.register({
            "icon-sousuo": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M955.07 864.311L740.014 649.258a20.013 20.013 0 0 0-28.298 0l-16.693 16.692-38.342-38.342c53.038-59.81 85.299-138.442 85.299-224.479 0-186.774-151.953-338.727-338.728-338.727S64.528 216.355 64.528 403.129c0 186.776 151.952 338.73 338.727 338.73 86.37 0 165.277-32.511 225.17-85.915l38.304 38.304-17.345 17.345c-7.813 7.814-7.813 20.483 0 28.297l215.052 215.053a20.015 20.015 0 0 0 28.298 0l62.335-62.334c7.814-7.814 7.814-20.484 0-28.298zM104.545 403.129c0-164.709 134-298.709 298.71-298.709s298.709 134 298.709 298.71-134 298.71-298.71 298.71-298.709-134.001-298.709-298.71zm774.04 509.367L691.83 725.741l34.036-34.036L912.62 878.46l-34.036 34.036z"/>'
            }
        }), o.a.register({
            "icon-sql": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M522.06 896h-384V128h682.667v341.333a21.333 21.333 0 1 0 42.667 0V106.667a21.333 21.333 0 0 0-21.333-21.334H116.727a21.333 21.333 0 0 0-21.333 21.334v810.666a21.333 21.333 0 0 0 21.333 21.334h405.334a21.333 21.333 0 1 0 0-42.667z"/><path pid="1" d="M322.45 388.907c-3.952 3.524-8.534 6.366-13.62 8.448a41.37 41.37 0 0 1-15.633 3.089c-8.96 0-17.314-1.562-24.84-4.634a120.917 120.917 0 0 1-21.65-11.409c-4.471-2.884-8.772-4.488-12.774-4.77l-.939-.026c-3.02 0-7.467 1.058-11.52 6.221-2.74 3.797-5.017 10.146-.29 18.859 3.405 6.297 10.249 12.015 21.018 17.519 6.792 3.277 14.575 6.067 23.133 8.303a95.508 95.508 0 0 0 24.056 3.072l2.534-.034c11.35-.23 22-2.228 31.642-5.914 9.702-3.712 18.159-8.943 25.13-15.565a70.485 70.485 0 0 0 16.35-23.603 74.837 74.837 0 0 0 5.812-29.5c0-9.549-1.349-18.082-4.02-25.36a58.871 58.871 0 0 0-11.784-19.5 81.621 81.621 0 0 0-18.364-14.77 225.681 225.681 0 0 0-23.654-12.186 897.972 897.972 0 0 1-19.209-8.84 102.656 102.656 0 0 1-15.889-9.166 40.252 40.252 0 0 1-10.504-10.803c-2.526-3.883-3.746-8.482-3.746-14.054 0-9.105 2.978-16.359 9.088-22.17 6.17-5.87 14.301-8.72 25.01-8.72l1.255-.018a40.875 40.875 0 0 1 17.912 4.207c6.579 3.174 12.125 6.332 16.4 9.318a24.15 24.15 0 0 0 14.192 4.762c5.41 0 9.72-2.432 12.51-7.083 3.26-5.615 3.268-11.622.025-17.374-2.859-5.051-7.552-9.591-13.96-13.5-6.093-3.703-13.492-6.835-22.016-9.326-17.093-4.992-36.088-5.095-52.549.392a66.551 66.551 0 0 0-22.22 12.4 61.841 61.841 0 0 0-15.574 20.138c-3.925 7.961-5.905 16.921-5.905 26.632 0 10.599 1.74 19.747 5.171 27.205 3.414 7.475 8.329 13.994 14.567 19.379 6.05 5.222 13.312 9.907 21.572 13.918 8.038 3.908 16.879 7.757 26.189 11.375 4.813 1.97 9.779 4.377 14.737 7.125a61.184 61.184 0 0 1 12.92 9.566 44.819 44.819 0 0 1 9.045 12.476c2.21 4.514 3.328 9.685 3.328 15.36 0 5.691-1.187 11.033-3.508 15.906a40.9 40.9 0 0 1-9.429 12.655zm284.603-81.818c0-16.913-2.236-33.28-6.648-48.631-4.446-15.463-11.178-29.193-19.985-40.824a97.596 97.596 0 0 0-33.536-28.006c-13.406-6.887-29.286-10.368-47.18-10.368-18.117 0-34.16 3.49-47.668 10.36a97.16 97.16 0 0 0-33.723 28.023c-8.832 11.656-15.446 25.412-19.661 40.874a184.465 184.465 0 0 0-6.298 48.572c0 17.152 2.244 33.621 6.656 48.964 4.446 15.446 11.162 29.176 19.985 40.824A97.067 97.067 0 0 0 452.72 424.9c13.508 6.878 29.32 10.36 46.984 10.36 14.567 0 27.725-2.287 39.117-6.784a104.405 104.405 0 0 0 28.988-17.613l12.169 11.887c6.016 6.024 11.409 9.165 16.477 9.6 5.436.495 10.095-1.613 13.219-5.607 5.486-5.888 9.079-15.846-4.89-29.815l-14.788-14.797a132.48 132.48 0 0 0 12.876-34.713 192 192 0 0 0 4.182-40.329zm-71.996 27.768c-4.053.98-7.774 3.14-11.204 6.57-4.48 4.95-6.596 9.762-6.298 14.302.256 3.84 2.168 7.288 5.419 10.01l21.128 21.12a57.574 57.574 0 0 1-18.048 10.948c-7.782 2.876-16.648 4.343-26.342 4.343-12.62 0-23.552-2.62-32.52-7.8a65.579 65.579 0 0 1-22.281-20.991c-5.871-8.909-10.257-19.149-13.073-30.438a147.507 147.507 0 0 1-4.318-35.823c0-12.553 1.45-24.79 4.318-36.36 2.816-11.401 7.262-21.616 13.218-30.371a68.506 68.506 0 0 1 22.332-20.89c8.857-5.162 19.729-7.79 32.324-7.79 12.373 0 23.202 2.628 32.18 7.799a67.456 67.456 0 0 1 22.485 21.035c5.947 8.874 10.402 19.208 13.226 30.728 2.859 11.665 4.31 24.073 4.31 36.864 0 10.368-.777 19.934-2.313 28.425a132.693 132.693 0 0 1-5.3 19.805l-15.521-15.77c-4.037-4.931-8.79-6.92-13.722-5.716zm132.574-152.184c-4.898 0-9.054 1.442-12.34 4.275-3.472 3.004-5.23 7.245-5.23 12.613v208.213c0 6.195 1.988 11.247 5.913 15.01 3.875 3.738 9.293 5.64 16.103 5.64h85.333c4.565 0 8.542-1.27 11.827-3.788 3.593-2.774 5.41-6.955 5.41-12.425 0-5.657-1.74-9.933-5.154-12.697-3.157-2.56-7.219-3.857-12.074-3.857h-71.851V199.56c-.009-10.727-6.545-16.888-17.937-16.888zM704.64 605.04c-54.58 0-98.978 44.407-98.978 98.995s44.399 98.987 98.978 98.987 98.995-44.4 98.995-98.987-44.407-98.995-98.995-98.995zm0 155.315a56.38 56.38 0 0 1-56.311-56.32c0-31.061 25.258-56.328 56.311-56.328a56.388 56.388 0 0 1 56.329 56.328c0 31.053-25.268 56.32-56.329 56.32z"/><path pid="2" d="M927.906 764.177a21.3 21.3 0 0 0-9.864-13.005l-39.715-23.21a174.54 174.54 0 0 0 .461-44.4l38.887-23.142a21.333 21.333 0 0 0 7.424-29.243l-47.65-80.094a21.333 21.333 0 0 0-29.483-7.28l-34.987 21.47c-11.972-8.95-24.576-15.948-34.927-20.966v-36.574A21.333 21.333 0 0 0 756.72 486.4h-102.4a21.333 21.333 0 0 0-21.333 21.333v33.246c-15.224 6.025-26.906 13.995-37.795 23.057l-31.53-19.08a21.316 21.316 0 0 0-29.534 7.62l-46.25 80.452a21.333 21.333 0 0 0 7.799 29.09l34.67 20.088a184.2 184.2 0 0 0-1.254 21.837c0 9.36.777 18.764 2.313 28.117l-34.697 20.676a21.316 21.316 0 0 0-7.415 29.235l47.667 80.086a21.316 21.316 0 0 0 29.773 7.1l33.485-21.274c9.062 7.339 18.9 14.114 32.768 19.396v49.963a21.333 21.333 0 0 0 21.333 21.333h102.4a21.333 21.333 0 0 0 21.333-21.333v-53.385a203.435 203.435 0 0 0 32.256-19.038l38.938 23.407a21.316 21.316 0 0 0 29.406-7.517l47.027-80.453a21.268 21.268 0 0 0 2.227-16.179zm-75.17 56.448l-33.178-19.942a21.316 21.316 0 0 0-25.19 2.363c-11.75 10.488-28.305 20.344-45.423 27.06a21.333 21.333 0 0 0-13.55 19.857V896H675.66v-44.373a21.333 21.333 0 0 0-16.359-20.745c-18.807-4.514-26.837-11.366-40.123-22.707l-3.388-2.884a21.333 21.333 0 0 0-25.233-1.733l-28.152 17.895-25.523-42.88 29.474-17.57a21.333 21.333 0 0 0 9.737-23.689 132.181 132.181 0 0 1-4.318-33.271c0-10.078.964-19.618 2.876-28.357a21.333 21.333 0 0 0-10.146-23.005l-29.022-16.82 24.772-43.102 26.257 15.881a21.31 21.31 0 0 0 25.438-2.509c15.761-14.404 26.846-23.56 47.804-29.064a21.316 21.316 0 0 0 15.914-20.634v-27.366h59.734v29.013a21.333 21.333 0 0 0 13.167 19.712c19.055 7.902 36.565 18.56 48.017 29.244a21.316 21.316 0 0 0 25.702 2.585l29.568-18.133 25.685 43.187-32.99 19.635a21.333 21.333 0 0 0-9.983 22.665 133.29 133.29 0 0 1-.683 57.054 21.333 21.333 0 0 0 10.018 23.236l34.21 19.994-25.378 43.366z"/>'
            }
        }), o.a.register({
            "icon-suoding": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M757.81 373.751H325.646v-83.895c0-103.695 81.507-184.923 185.559-184.923 78.121 0 146.053 46.746 173.062 119.09 3.865 10.353 15.385 15.61 25.743 11.747 10.352-3.866 15.61-15.39 11.744-25.743-32.91-88.15-115.556-145.108-210.55-145.108-61.917 0-119.246 23.662-161.423 66.631-41.369 42.143-64.15 98.363-64.15 158.306v83.895h-20.008c-60.774 0-110.043 49.267-110.043 110.043v366.14c0 60.774 49.267 110.042 110.043 110.042H757.81c60.776 0 110.043-49.267 110.043-110.042v-366.14c0-60.776-49.267-110.043-110.043-110.043zm70.027 476.183c0 38.674-31.352 70.026-70.027 70.026H265.623c-38.675 0-70.027-31.352-70.027-70.026v-366.14c0-38.675 31.352-70.027 70.027-70.027H757.81c38.675 0 70.027 31.352 70.027 70.027v366.14z"/><path pid="1" d="M509.716 583.832c-11.049 0-20.008 8.959-20.008 20.008v110.042c0 11.049 8.958 20.008 20.008 20.008s20.008-8.958 20.008-20.008V603.84c0-11.05-8.958-20.008-20.008-20.008z"/>'
            }
        }), o.a.register({
            "icon-system": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M1004.676 537.33l-.877-49.26c-.43-24.14-10.235-46.667-27.609-63.433-17.373-16.765-40.19-25.77-64.376-25.331l-23.767.422a404.337 404.337 0 0 0-31.934-75.575l20.776-19.147c17.756-16.362 28.075-38.657 29.06-62.782.984-24.124-7.484-47.186-23.845-64.941l-33.386-36.23c-33.776-36.649-91.074-38.99-127.724-5.213l-27.834 25.65a404.972 404.972 0 0 0-70.891-30.322v-24.222c0-49.841-40.549-90.39-90.39-90.39h-49.266c-49.84 0-90.39 40.549-90.39 90.39v18.87a404.356 404.356 0 0 0-76.617 29.13l-17.052-15.715c-17.755-16.362-40.82-24.829-64.942-23.846-24.124.984-46.42 11.305-62.782 29.059l-33.387 36.229c-33.776 36.65-31.437 93.947 5.214 127.723l4.23 3.897a403.323 403.323 0 0 0-39.588 90.394c-23.988-.322-46.672 8.674-63.942 25.339-17.374 16.765-27.179 39.293-27.609 63.433l-.877 49.258c-.431 24.14 8.566 47.003 25.332 64.376 16.765 17.374 39.293 27.178 63.433 27.608l2.429.044a403.748 403.748 0 0 0 36.822 87.676l-5.402 5.854c-16.374 17.744-24.858 40.801-23.888 64.925.968 24.126 11.274 46.428 29.017 62.802l36.207 33.411c17.35 16.01 39.332 23.92 61.264 23.92 24.367-.002 48.674-9.773 66.463-29.05l1.405-1.522a403.603 403.603 0 0 0 86.299 33.61v2.27c0 49.843 40.548 90.39 90.39 90.39h49.265c49.842 0 90.39-40.548 90.39-90.39v-8.817a403.976 403.976 0 0 0 81.43-36.812l7.275 7.882c16.373 17.744 38.676 28.05 62.801 29.018 24.136.982 47.184-7.514 64.926-23.887l36.207-33.411c17.744-16.373 28.05-38.677 29.018-62.801.969-24.126-7.514-47.183-23.888-64.926l-19.027-20.62a404.676 404.676 0 0 0 27.989-72.51l24.888-.445c49.828-.885 89.648-42.15 88.76-91.982zm-73.35 19.255c-4.564 4.414-10.743 6.763-17.091 6.876l-49.752.886c-15.358.274-28.488 11.129-31.645 26.162-7.414 35.301-20.35 69.058-38.448 100.334a32.934 32.934 0 0 0 4.301 38.83l34.961 37.887c4.442 4.813 6.742 11.067 6.48 17.61a24.362 24.362 0 0 1-7.87 17.035l-36.208 33.411c-4.813 4.441-11.086 6.748-17.61 6.48a24.362 24.362 0 0 1-17.035-7.871l-25.994-28.17c-11.132-12.063-29.446-14.087-42.944-4.749-33.364 23.084-70.13 39.867-109.277 49.884-14.576 3.73-24.771 16.863-24.771 31.908v33.546c0 13.541-10.977 24.517-24.518 24.517H484.64c-13.541 0-24.517-10.977-24.517-24.517v-28.561c0-15.801-11.222-29.376-26.741-32.347h-.001c-40.673-7.79-79.217-22.795-114.564-44.603-13.413-8.275-30.81-5.889-41.498 5.695l-19.182 20.787c-9.168 9.935-24.71 10.56-34.645 1.391l-36.207-33.411c-4.813-4.44-7.608-10.491-7.871-17.035-.263-6.543 2.038-12.797 6.48-17.61l22.234-24.095c10.23-11.086 11.62-27.706 3.374-40.339-22.694-34.763-38.68-72.876-47.512-113.284v-.001c-3.26-14.908-16.332-25.624-31.589-25.897l-27.593-.492c-13.517-.24-24.318-11.432-24.078-24.949l.869-48.743c.113-6.361 2.47-12.553 6.897-17.123 4.78-4.932 11.226-7.581 18.062-7.47l25.409.452c15.585.278 29.23-10.407 32.697-25.605 9.661-42.355 27.137-82.015 51.94-117.879 9.339-13.506 7.305-31.827-4.77-42.954l-24.539-22.614c-9.941-9.162-10.576-24.703-1.415-34.644l33.387-36.229c4.438-4.816 10.486-7.616 17.03-7.882 6.542-.266 12.798 2.03 17.614 6.468l34.32 31.629c10.606 9.773 26.337 11.51 38.818 4.285l.001-.001c32.52-18.825 67.673-32.05 104.48-39.31h.001c15.435-3.045 26.562-16.581 26.562-32.312v-45.015c0-13.54 10.977-24.518 24.517-24.518h49.266c13.54 0 24.518 10.977 24.518 24.518v49.09c0 15.114 10.287 28.287 24.95 31.951 34.914 8.726 68.11 22.899 98.661 42.124l.001.001c12.588 7.92 28.923 6.422 39.86-3.656l45.764-42.175c9.94-9.162 25.482-8.529 34.644 1.414l33.386 36.23c4.439 4.815 6.735 11.071 6.469 17.614s-3.066 12.59-7.881 17.03l-40.378 37.21c-11.745 10.824-14.032 28.516-5.422 41.97 20.707 32.362 35.68 67.673 44.506 104.955 3.568 15.07 17.152 25.62 32.636 25.343l49.396-.88c6.542-.119 12.75 2.324 17.461 6.873 4.713 4.547 7.372 10.658 7.49 17.204l.876 49.26c.124 6.838-2.544 13.3-7.488 18.08z"/><path pid="1" d="M509.272 371.355c-79.07 0-143.398 64.328-143.398 143.398S430.203 658.15 509.272 658.15 652.67 593.823 652.67 514.753s-64.328-143.398-143.398-143.398zm0 220.924c-42.748 0-77.526-34.777-77.526-77.526 0-42.748 34.778-77.526 77.526-77.526 42.75 0 77.526 34.778 77.526 77.526 0 42.749-34.778 77.526-77.526 77.526z"/>'
            }
        }), o.a.register({
            "icon-tixing": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M925.007 706.494c-9.007-8.122-23.22-18.37-42.243-30.457-5.865-3.726-9.318-10.111-9.238-17.079l.032-2.54c.61-51.781 1.53-130.034-12.192-209.543-16.686-96.68-51.422-172.287-103.242-224.72-40.83-41.315-92.435-68.674-154.065-81.819-3.057-19.095-12.198-36.341-26.517-49.57-17.136-15.828-40.166-24.546-64.847-24.546-24.68 0-47.71 8.719-64.845 24.546-14.315 13.222-23.455 30.464-26.515 49.553-61.343 13.07-112.581 40.223-152.973 81.204-117.15 118.867-114.2 322.051-112.615 431.208l.086 5.973c.1 6.964-3.509 13.566-9.417 17.232-19.404 12.038-33.984 22.151-43.335 30.056-24.834 20.994-39.077 51.649-39.077 84.103 0 28.355 23.067 51.422 51.422 51.422h277.24c.54 65.734 54.174 119.045 120.032 119.045S632.19 907.25 632.73 841.517H908.12c29.375 0 53.272-23.898 53.272-53.272-.002-31.103-13.262-60.9-36.385-81.751zM512.694 106.236c14.587 0 27.973 4.945 37.694 13.925 4.254 3.93 7.625 8.439 10.07 13.418-15.392-1.55-31.313-2.334-47.763-2.334-16.396 0-32.257.776-47.587 2.309 8.211-16.448 25.978-27.318 47.586-27.318zm.002 814.31c-43.793 0-79.465-35.364-80.005-79.03H592.7c-.54 43.667-36.213 79.03-80.005 79.03zM908.118 801.5H115.423c-6.29 0-11.407-5.117-11.407-11.406 0-20.653 9.074-40.17 24.896-53.544 7.753-6.553 21.1-15.756 38.6-26.614 17.772-11.026 28.627-30.875 28.33-51.799l-.086-5.986c-1.5-103.307-4.292-295.6 101.105-402.538 51.24-51.99 123.858-78.352 215.833-78.352 92.149 0 165.147 26.586 216.967 79.022 45.959 46.502 77.004 114.937 92.272 203.399 13.098 75.896 12.204 151.944 11.611 202.266l-.03 2.542c-.246 20.923 10.144 40.108 27.789 51.322 16.656 10.584 29.764 19.959 36.906 26.398 14.722 13.277 23.166 32.243 23.166 52.034 0 7.309-5.948 13.256-13.257 13.256z"/><path pid="1" d="M450.672 213.276c-24.2 0-58.362 22.533-82.263 43.62-19.808 17.478-54.382 53.17-63.362 95.837-2.276 10.812 4.644 21.424 15.457 23.698 1.39.293 2.774.434 4.14.434 9.26 0 17.575-6.467 19.558-15.89 4.824-22.911 23.296-49.91 50.682-74.072 26.59-23.462 49.811-33.61 55.788-33.61 11.049 0 20.008-8.958 20.008-20.008 0-11.05-8.96-20.009-20.008-20.009z"/>'
            }
        }), o.a.register({
            "icon-tubiao": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M896 928H768c-35.344 0-64-28.656-64-64V416c0-35.344 28.656-64 64-64h128c35.344 0 64 28.656 64 64v448c0 35.344-28.656 64-64 64zm0-512H768v448h128V416zM576 928H448c-35.344 0-64-28.656-64-64V160c0-35.344 28.656-64 64-64h128c35.344 0 64 28.656 64 64v704c0 35.344-28.656 64-64 64zm0-768H448v704h128V160zM256 928H128c-35.344 0-64-28.656-64-64V544c0-35.344 28.656-64 64-64h128c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H128v320h128V544z"/>'
            }
        }), o.a.register({
            "icon-xiangqu": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M512 922.11h-.006a20.912 20.912 0 0 1-14.841-6.186L370.833 788.53c-1.613-1.623-164.172-165.007-187.469-188.305C114.597 531.46 74.21 454.29 66.567 377.058c-7.61-76.903 18.981-150.036 74.874-205.93 54.794-54.792 121.563-77.752 193.073-66.412 59.33 9.412 120.361 42.177 177.486 95.104 57.123-52.926 118.155-85.69 177.485-95.104 71.514-11.352 138.28 11.617 193.073 66.413 55.892 55.893 82.482 129.026 74.874 205.929-7.643 77.23-48.03 154.4-116.797 223.167-50.87 50.869-311.172 313.064-313.796 315.706A20.9 20.9 0 0 1 512 922.11zM298.928 143.68c-47.08 0-89.999 19.103-127.914 57.02-47.548 47.548-69.275 107.107-62.83 172.239 6.68 67.496 42.902 135.863 104.752 197.714 23.334 23.334 185.93 186.758 187.569 188.406L512.01 871.51c56.27-56.672 255.225-257.03 299.053-300.858 61.851-61.85 98.074-130.217 104.751-197.714 6.447-65.132-15.28-124.691-62.829-172.239-45.574-45.575-98.378-63.974-156.947-54.68-55.708 8.838-114.235 42.59-169.252 97.609a20.912 20.912 0 0 1-29.572.001c-55.02-55.02-113.546-88.773-169.253-97.61-9.842-1.56-19.523-2.34-29.033-2.34z"/>'
            }
        }), o.a.register({
            "icon-xiangqufill": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M512.694 923.654h-.005c-5.335 0-10.446-1.89-14.202-5.677l-127.012-127.97c-1.623-1.632-165.076-165.855-188.502-189.281-68.977-68.977-109.485-146.327-117.146-223.744-7.621-77.016 19.012-150.244 74.993-206.226 54.855-54.853 121.684-77.84 193.254-66.483 59.696 9.472 121.131 42.556 178.62 96.013 57.488-53.457 118.923-86.536 178.62-96.008 71.573-11.35 138.399 11.64 193.253 66.492 55.981 55.981 82.614 129.226 74.993 206.242-7.66 77.417-48.169 154.797-117.146 223.775-51.15 51.15-312.884 314.542-315.522 317.2-3.754 3.784-8.866 5.667-14.198 5.667z"/>'
            }
        }), o.a.register({
            "icon-zhedie": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M914.74 783.786l-807.028-.002c-21.541 0-39 17.45-39 38.974 0 21.523 17.457 38.975 39 38.975H914.74c21.54 0 39-17.452 39-38.975 0-21.525-17.458-38.972-39-38.972zm0-312.174H107.711c-21.541 0-39 17.452-39 38.975 0 21.525 17.457 38.973 39 38.973H914.74c21.54 0 39-17.446 39-38.973 0-21.525-17.458-38.975-39-38.975zM107.713 237.386H914.74c21.54 0 39-17.448 39-38.973 0-21.527-17.459-38.974-39-38.974H107.714c-21.542 0-39.001 17.447-39.001 38.973 0 21.527 17.458 38.974 39 38.974z"/>'
            }
        }), o.a.register({
            "icon-zonghe": {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M483.883 483.758H184.58c-60.681 0-110.05-49.368-110.05-110.05V184.456c0-60.681 49.368-110.05 110.05-110.05h189.252c60.681 0 110.05 49.368 110.05 110.05v299.302zM184.58 114.424c-38.615 0-70.031 31.417-70.031 70.031v189.253c0 38.615 31.416 70.031 70.03 70.031h259.284V184.456c0-38.614-31.416-70.03-70.03-70.03H184.58zM840.875 483.758H539.62V184.456c0-60.681 49.367-110.05 110.05-110.05h191.206c60.681 0 110.05 49.368 110.05 110.05V373.71c0 60.681-49.369 110.049-110.05 110.049zM579.636 443.74h261.24c38.614 0 70.03-31.416 70.03-70.03V184.455c0-38.614-31.416-70.03-70.03-70.03H649.666c-38.615 0-70.03 31.416-70.03 70.03V443.74zM373.834 950.799H184.581c-60.681 0-110.05-49.368-110.05-110.05V649.542c0-60.681 49.368-110.05 110.05-110.05h299.302V840.75c0 60.681-49.368 110.05-110.049 110.05zm-189.253-371.29c-38.615 0-70.031 31.417-70.031 70.032v191.208c0 38.615 31.416 70.031 70.03 70.031h189.253c38.615 0 70.031-31.416 70.031-70.03V579.51H184.581zM840.875 950.799H649.667c-60.68 0-110.049-49.368-110.049-110.05V539.492h301.257c60.681 0 110.05 49.368 110.05 110.05V840.75c0 60.68-49.369 110.049-110.05 110.049zm-261.239-371.29v261.24c0 38.615 31.416 70.031 70.031 70.031h191.208c38.615 0 70.031-31.416 70.031-70.03V649.541c0-38.615-31.416-70.031-70.03-70.031h-261.24z"/>'
            }
        }), o.a.register({
            ind: {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M640 864l-64-128h326.4c32 0 57.6-25.6 57.6-57.6V153.6c0-32-25.6-57.6-57.6-57.6H121.6c-32 0-57.6 25.6-57.6 57.6v524.8c0 32 25.6 57.6 57.6 57.6H448l-64 128H0v64h1024v-64H640zM185.6 672c-32 0-57.6-25.6-57.6-57.6V217.6c0-32 25.6-57.6 57.6-57.6h652.8c32 0 57.6 25.6 57.6 57.6v396.8c0 32-25.6 57.6-57.6 57.6H185.6z"/>'
            }
        }), o.a.register({
            link: {
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                data: '<path pid="0" d="M115.6 128H.1V12.3h57.7v12.3H12.4v90.9h90.9V70.2h12.3z"/><path pid="1" d="M116.4 2.8l8.8 8.8-56.8 56.7-8.7-8.7z"/><path pid="2" d="M127.9 38h-12.4V12.4H88.7V0H128z"/>'
            }
        }), o.a.register({
            log: {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M832.512 89.6H686.08V33.28c0-16.896-13.824-30.72-30.72-30.72s-30.72 13.824-30.72 30.72V89.6H389.12V33.28c0-16.896-13.824-30.72-30.72-30.72s-30.72 13.824-30.72 30.72V89.6H191.488c-46.08 0-83.968 37.888-83.968 83.968v763.904c0 46.08 37.888 83.968 83.968 83.968h641.024c46.08 0 83.968-37.888 83.968-83.968V173.568c0-46.08-37.888-83.968-83.968-83.968zm-641.024 61.44H327.68v51.2c0 16.896 13.824 30.72 30.72 30.72s30.72-13.824 30.72-30.72v-51.2h235.52v51.2c0 16.896 13.824 30.72 30.72 30.72s30.72-13.824 30.72-30.72v-51.2h146.432c12.288 0 22.528 10.24 22.528 22.528V294.4H168.96V173.568c0-12.288 10.24-22.528 22.528-22.528zM832.512 960H191.488c-12.288 0-22.528-10.24-22.528-22.528V355.84h686.08v581.632c0 12.288-10.24 22.528-22.528 22.528z" _fill="#646464"/><path pid="1" d="M619.52 458.24H250.88c-16.896 0-30.72 13.824-30.72 30.72s13.824 30.72 30.72 30.72h368.64c16.896 0 30.72-13.824 30.72-30.72s-13.824-30.72-30.72-30.72zm0 128H250.88c-16.896 0-30.72 13.824-30.72 30.72s13.824 30.72 30.72 30.72h368.64c16.896 0 30.72-13.824 30.72-30.72s-13.824-30.72-30.72-30.72zm-81.92 128H250.88c-16.896 0-30.72 13.824-30.72 30.72s13.824 30.72 30.72 30.72H537.6c16.896 0 30.72-13.824 30.72-30.72s-13.824-30.72-30.72-30.72z" _fill="#646464"/>'
            }
        }), o.a.register({
            monitor: {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M295.959 949.85h431.304V1024H295.959zM511.61 825.105c-227.478 0-412.552-185.074-412.552-412.552S284.133 0 511.61 0s412.552 185.074 412.552 412.552S739.089 825.104 511.61 825.104zm0-750.945c-186.591 0-338.393 151.802-338.393 338.393S325.02 750.945 511.611 750.945s338.402-151.802 338.402-338.393S698.202 74.159 511.611 74.159z" _fill="#333"/><path pid="1" d="M415.576 412.552a96.045 96.045 0 1 0 192.09 0 96.045 96.045 0 1 0-192.09 0z" _fill="#C6C6C6"/>'
            }
        }), o.a.register({
            nested: {
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                data: '<path pid="0" d="M0 9.2c0 5 3.6 9.1 8 9.1s8-4 8-9.1c0-5-3.6-9.1-8-9.1S0 4 0 9.2zM32 .1h96v18.2H32V.1zm0 45.6c0 5 3.6 9.2 8 9.2s8-4.1 8-9.2c0-3.2-1.5-6.2-4-7.9a7.2 7.2 0 0 0-8 0 9.4 9.4 0 0 0-4 8zm32-9.1h64v18.3H64V36.6zm-32 82.2c0 5 3.6 9.1 8 9.1s8-4 8-9.1c0-5-3.6-9.1-8-9.1s-8 4-8 9.1zm32-9.1h64v18.2H64v-18.2zm0-27.4c0 5 3.6 9.1 8 9.1s8-4 8-9.1c0-3.3-1.5-6.3-4-8a7.1 7.1 0 0 0-8 0 9.4 9.4 0 0 0-4 8zM96 73h32v18.3H96V73.1z"/>'
            }
        }), o.a.register({
            password: {
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                data: '<path pid="0" d="M108.8 44.3H89.6V39c0-9-3.3-24.2-25.6-24.2-23.1 0-25.6 16.9-25.6 24.2v5.3H19.2V39C19.2 15.3 36.8 0 64 0c27.2 0 44.8 15.3 44.8 39v5.3zm-32 39.4c0-5.5-5.8-9.9-12.8-9.9-7 0-12.8 4.4-12.8 9.9 0 3.7 2.6 6.8 6.4 8.5v11.2c0 2.7 2.9 5 6.4 5 3.5 0 6.4-2.3 6.4-5V92.2c3.8-1.7 6.4-4.8 6.4-8.5zM128 64v49.2c0 8.2-8.6 14.8-19.2 14.8H19.2C8.7 128 0 121.4 0 113.2V64c0-8.2 8.6-14.8 19.2-14.8h89.6c10.6 0 19.2 6.6 19.2 14.8z"/>'
            }
        }), o.a.register({
            set: {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M512 650.865c-76.57 0-138.865-62.295-138.865-138.865S435.43 373.135 512 373.135 650.865 435.43 650.865 512 588.57 650.865 512 650.865zm0-225.623c-47.841 0-86.758 38.922-86.758 86.758s38.922 86.753 86.758 86.753 86.753-38.922 86.753-86.753c0-47.841-38.917-86.758-86.753-86.758z" _fill="#2C2C2C"/><path pid="1" d="M601.641 891.505A25.907 25.907 0 0 1 576.21 871.1c-5.31-23.88-32.917-41.886-64.21-41.886-31.304 0-58.9 18.007-64.205 41.886a25.907 25.907 0 0 1-25.436 20.404h-5.069a26.01 26.01 0 0 1-13.02-3.497l-164.045-94.705a26.092 26.092 0 0 1-9.543-9.544l-2.171-3.768a26.112 26.112 0 0 1 5.458-32.67c18.698-16.277 20.935-49.368 5.207-76.97-12.734-22.338-34.658-36.777-55.844-36.777-4.767 0-9.35.753-13.614 2.243a26.045 26.045 0 0 1-8.566 1.454 26.153 26.153 0 0 1-22.574-13.03l-2.59-4.5a26.081 26.081 0 0 1-3.493-13.031V417.295c0-4.562 1.209-9.062 3.487-13.02l1.485-2.565a26.143 26.143 0 0 1 22.58-13.035c3.127 0 6.21.563 9.164 1.674a44.165 44.165 0 0 0 15.396 2.77c22.057 0 44.482-14.551 57.344-37.074 16.312-28.58 13.27-62.817-7.066-79.647a25.984 25.984 0 0 1-5.965-33.08l1.767-3.062a26.092 26.092 0 0 1 9.549-9.554l164.04-94.71A26.076 26.076 0 0 1 417.3 132.5h5.054a25.907 25.907 0 0 1 25.41 20.306c5.233 23.148 32.856 40.602 64.246 40.602 31.386 0 59.003-17.454 64.246-40.607a25.917 25.917 0 0 1 25.41-20.3h5.06c4.566 0 9.067 1.208 13.024 3.491l164.03 94.7a26.076 26.076 0 0 1 9.518 9.508l1.49 2.57a25.994 25.994 0 0 1-5.832 33.034c-20.695 17.31-23.823 52.014-7.29 80.732 12.948 22.482 35.614 37.008 57.738 37.008a45.84 45.84 0 0 0 15.892-2.76 25.856 25.856 0 0 1 8.97-1.603c9.267 0 17.905 4.982 22.544 12.995l1.172 2.038a26.028 26.028 0 0 1 3.523 13.071v189.42c0 4.567-1.209 9.072-3.502 13.03l-1.204 2.094a26.117 26.117 0 0 1-22.548 13.015 25.948 25.948 0 0 1-9.047-1.628 42.445 42.445 0 0 0-14.561-2.57c-21.842 0-44.288 14.612-57.406 37.227-16.466 28.37-13.885 63.406 5.868 79.765a25.99 25.99 0 0 1 5.96 33.07l-1.747 3.03a26.03 26.03 0 0 1-9.548 9.56l-164.03 94.705a26.204 26.204 0 0 1-13.05 3.502h-5.049zM512 777.108c40.474 0 78.812 18.75 100.035 48.932l3.128 4.45 118.722-68.552-2.534-5.018c-17.213-34.114-14.607-78.249 6.815-115.184 21.427-36.93 57.19-60.473 95.662-62.966l5.565-.364V445.804l-5.632-.303c-38.82-2.089-76.088-26.214-97.26-62.955-21.227-36.864-23.398-81.203-5.672-115.717l2.585-5.038-118.461-68.398-3.144 4.357c-21.263 29.465-59.51 47.77-99.814 47.77-40.31 0-78.551-18.3-99.81-47.76l-3.143-4.357-118.856 68.613 2.586 5.038c17.51 34.104 15.37 78.095-5.576 114.806-21.094 36.95-58.24 61.174-96.952 63.206l-5.637.297V581.32l5.545.373c38.082 2.586 73.328 26.077 94.295 62.838 20.25 35.523 22.85 78.32 6.789 111.688l-2.391 4.977 120.002 69.283 3.129-4.454c21.212-30.172 59.54-48.917 100.024-48.917z" _fill="#2C2C2C"/>'
            }
        }), o.a.register({
            statistics: {
                width: 200,
                height: 200,
                viewBox: "0 0 1024 1024",
                data: '<defs/><path pid="0" d="M914.414 229.95c-21.558-28.743-53.895-64.673-86.232-100.603-35.93-32.336-71.86-64.673-100.603-86.231C677.277 7.186 652.126 0 637.754 0H141.923C98.807 0 62.877 35.93 62.877 79.046v858.722c0 43.116 35.93 79.046 79.046 79.046H874.89c43.116 0 79.046-35.93 79.046-79.046V319.775c0-14.371-3.593-39.522-39.523-89.824zm-132.94-53.894c32.337 28.744 53.894 57.488 71.86 82.639H698.834V104.196c25.151 17.965 50.302 39.523 82.639 71.86zm111.382 765.305c0 7.186-7.186 14.372-14.372 14.372H141.923c-7.186 0-14.372-7.186-14.372-14.372V82.64c0-7.186 7.186-14.372 14.372-14.372H634.16v222.765c0 17.964 14.372 32.336 32.337 32.336h222.765v617.993z"/><path pid="1" d="M170.667 812.014h675.48v82.639h-675.48zm488.645-168.87h82.639v125.754h-82.639zm-125.754-168.87h82.638v294.624h-82.638zM407.804 600.028h82.638v168.87h-82.638zM282.049 348.52h82.639V768.9h-82.639z"/>'
            }
        }), o.a.register({
            table: {
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                data: '<path pid="0" d="M0 0h128v31.2H0V0zm0 38h38.4v41.6H0V38zm0 48.5h38.4v41.4H0V86.5zM44.8 38h38.4v41.5H44.8V38zm0 48.4h38.4v41.4H44.8V86.5zM89.6 38H128v41.5H89.6zm0 48.4H128v41.4H89.6z"/><path pid="1" d="M0 0h128v31.2H0V0zm0 38h38.4v41.6H0V38zm0 48.5h38.4v41.4H0V86.5zM44.8 38h38.4v41.5H44.8V38zm0 48.4h38.4v41.4H44.8V86.5zM89.6 38H128v41.5H89.6zm0 48.4H128v41.4H89.6z"/>'
            }
        }), o.a.register({
            tree: {
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                data: '<path pid="0" d="M126.7 90a5 5 0 0 1 1.3 3.5V123a5 5 0 0 1-1.3 3.6c-.8.9-1.9 1.3-3.1 1.3H97.8a4 4 0 0 1-3-1.3 5 5 0 0 1-1.3-3.6V93.5c0-1 .2-1.7.6-2.5.4-.8 1-1.4 1.6-1.8a3.8 3.8 0 0 1 2.1-.7h9.7V69a3.8 3.8 0 0 0-.4-1.8 3.6 3.6 0 0 0-1.1-1.3 2.7 2.7 0 0 0-1.6-.5H67.9v23.1h9.8c1.1 0 2.1.5 3 1.5a5 5 0 0 1 1.2 3.5V123c0 .9-.1 1.7-.5 2.5s-1 1.4-1.6 1.8a3.8 3.8 0 0 1-2.1.6H51.9a3.8 3.8 0 0 1-2.1-.6 5 5 0 0 1-1.7-1.8 5 5 0 0 1-.6-2.5V93.5a5 5 0 0 1 1.3-3.5 4 4 0 0 1 3.1-1.5h9.6V65.4H23.6a3 3 0 0 0-2.4 1c-.6.8-.9 1.6-.9 2.6v19.5H30c1.3 0 2.3.5 3.1 1.5.8 1 1.2 2.2 1.2 3.5V123c0 1.4-.4 2.6-1.2 3.6-.8.9-1.8 1.3-3 1.3H4.2c-.5 0-1 0-1.4-.2a4.1 4.1 0 0 1-1.1-.7 4.7 4.7 0 0 1-1-1 5.2 5.2 0 0 1-.6-1.4A5.6 5.6 0 0 1 0 123V93.5l.1-1.3A4 4 0 0 1 .6 91 6.4 6.4 0 0 1 2 89.2a3 3 0 0 1 1-.5l1.2-.2H14V61.6c0-1 .3-1.8 1-2.5.6-.7 1.3-1 2.2-1h44.3V39.5h-9.6a4 4 0 0 1-3.1-1.5 5 5 0 0 1-1.3-3.4V5c0-1.4.4-2.6 1.3-3.6A4 4 0 0 1 51.9.1h25.8c.7 0 1.4.2 2.1.7a5.2 5.2 0 0 1 1.6 1.9c.4.7.5 1.6.5 2.4v29.6a5 5 0 0 1-1.2 3.4c-.9 1-1.9 1.5-3 1.5h-9.8V58h42.8c1 0 1.7.4 2.4 1 .6.8.9 1.6.9 2.6v27h9.6a4 4 0 0 1 3.1 1.4z"/>'
            }
        }), o.a.register({
            user: {
                width: 130,
                height: 130,
                viewBox: "0 0 130 130",
                data: '<path pid="0" d="M63.4 65c20.7 0 37.4-14.3 37.4-32 0-17.6-16.7-32-37.4-32-20.6 0-37.3 14.4-37.3 32 0 17.7 16.7 32 37.3 32zm17.2 10.7H49.4C22.8 75.7 1.2 94 1.2 116.9v2.7c0 9.3 21.6 9.3 48.2 9.3h31.2c26.6 0 48.2-.3 48.2-9.3v-2.7c0-22.8-21.6-41.2-48.2-41.2z" _stroke="#979797"/>'
            }
        });
        var yt = c("323e"), Ot = c.n(yt);
        c("a5d8");
        Ot.a.configure({showSpinner: !1});
        var Mt = ["/login"];
        zt.beforeEach(function () {
            var e = Object(Q["a"])(regeneratorRuntime.mark((function e(t, c, a) {
                return regeneratorRuntime.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            Ot.a.start(), X["a"].token ? "/login" === t.path ? (a({path: "/"}), Ot.a.done()) : a() : -1 !== Mt.indexOf(t.path) ? a() : (a("/login?redirect=".concat(t.path)), Ot.a.done());
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t, c, a) {
                return e.apply(this, arguments)
            }
        }()), zt.afterEach((function (e) {
            Ot.a.done(), document.title = e.meta.title
        }));
        var wt = c("bd0c"), jt = c.n(wt);
        a["default"].use(jt.a, {ak: "rt7vyWmDWFFptXuZQCheYT14ByL0VGDh"}), a["default"].use(i.a), a["default"].use(o.a, {
            tagName: "svg-icon",
            defaultWidth: "1em",
            defaultHeight: "1em"
        }), a["default"].config.productionTip = !1, new a["default"]({
            router: zt, store: H["a"], render: function (e) {
                return e(k)
            }
        }).$mount("#app")
    }, cf05: function (e, t) {
        e.exports = "img/logo.svg"
    }, d5c2: function (e, t, c) {
    }, e6c2: function (e, t, c) {
        "use strict";
        c("5319")
    }, e88b: function (e, t, c) {
        "use strict";
        c("796f")
    }, ed15: function (e, t, c) {
    }
});
//# sourceMappingURL=app.d15583a7.js.map