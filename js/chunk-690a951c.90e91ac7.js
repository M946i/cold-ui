(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-690a951c"], {
    "555a": function (t, e, a) {
        t.exports = a.p + "img/icon.70d68b24.png"
    }, "60a6": function (t, e, a) {
        "use strict";
        a("a125")
    }, 9406: function (t, e, a) {
        "use strict";
        a.r(e);
        a("7f7f");
        var r = function () {
                var t = this, e = t._self._c;
                t._self._setupProxy;
                return e("div", {staticClass: "dashboard-container"}, [e("div", {staticClass: "topInfo"}, [e("div", {staticClass: "userInfo"}, [e("img", {
                    staticClass: "icon",
                    attrs: {src: a("555a"), alt: ""}
                }), e("div", [e("div", [t._v("欢迎，" + t._s(t.name) + "，祝您开心每一天")]), e("div", {staticClass: "time"}, [t._v("上次登录时间: " + t._s(t.logintime))])])]), e("div", {staticClass: "total"}, [e("div", {staticClass: "label"}, [e("div", {staticClass: "num"}, [t._v(t._s(t.totalData.equipmentTotal))]), e("div", [t._v("设备数")])]), e("div", {staticClass: "label"}, [e("div", {staticClass: "num"}, [t._v(t._s(t.totalData.organizationTotal))]), e("div", [t._v("机构数")])]), e("div", {staticClass: "label"}, [e("div", {staticClass: "num"}, [t._v(t._s(t.totalData.warningTotal))]), e("div", [t._v("警告数")])])])]), e("div", {staticClass: "dashboard-cont"}, [e("div", {staticClass: "title"}, [e("div", [t._v("实时监控图")]), e("div", {staticClass: "info"}, [e("div", {staticClass: "lab"}, [e("div", {staticClass: "num"}, [t._v(t._s(t.totalData.meterTotal))]), e("div", [t._v("总仪表数")])]), e("div", {staticClass: "lab"}, [e("div", {staticClass: "num"}, [t._v(t._s(t.totalData.accuracy) + " %")]), e("div", [t._v("正常率")])]), e("div", {staticClass: "lab"}, [e("div", {staticClass: "num"}, [t._v(t._s(t.totalData.unaccomplished))]), e("div", [t._v("待处理")])]), e("div", {staticClass: "lab"}, [e("div", {staticClass: "num"}, [t._v(t._s(t.totalData.finishNumber))]), e("div", [t._v("已处理")])])])]), e("div", {
                    staticClass: "content",
                    staticStyle: {height: "300px"}
                }, [t.mapData ? e("BaiduMap", {attrs: {data: t.mapData}}) : t._e()], 1)]), t._m(0), t._m(1), t._m(2)])
            }, i = [function () {
                var t = this, e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "dashboard-cont",
                    staticStyle: {height: "500px"}
                }, [e("div", {staticClass: "title"}, [t._v("温度预警趋势")]), e("div", {staticClass: "cont"}, [e("iframe", {
                    attrs: {
                        width: "1000",
                        height: "400",
                        seamless: "",
                        frameBorder: "0",
                        scrolling: "no",
                        src: "http://bogon:7088/superset/explore/?form_data=%7B%22viz_type%22%3A%22line%22%2C%22datasource%22%3A%221__table%22%2C%22slice_id%22%3A2%2C%22url_params%22%3A%7B%22standalone%22%3A%221%22%2C%22height%22%3A%22400%22%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22createTime%22%2C%22time_grain_sqla%22%3A%22PT1S%22%2C%22time_range%22%3A%22No+filter%22%2C%22metrics%22%3A%5B%7B%22aggregate%22%3A%22AVG%22%2C%22column%22%3A%7B%22certification_details%22%3Anull%2C%22certified_by%22%3Anull%2C%22column_name%22%3A%22tem%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A12%2C%22is_certified%22%3Afalse%2C%22is_dttm%22%3Afalse%2C%22python_date_format%22%3Anull%2C%22type%22%3A%22INTEGER%22%2C%22type_generic%22%3A0%2C%22verbose_name%22%3Anull%2C%22warning_markdown%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22hasCustomLabel%22%3Afalse%2C%22isNew%22%3Afalse%2C%22label%22%3A%22AVG%28tem%29%22%2C%22optionName%22%3A%22metric_s2g1vkdze6a_dwlqaghcs6%22%2C%22sqlExpression%22%3Anull%7D%5D%2C%22adhoc_filters%22%3A%5B%5D%2C%22groupby%22%3A%5B%5D%2C%22order_desc%22%3Atrue%2C%22row_limit%22%3A5000%2C%22color_scheme%22%3A%22supersetColors%22%2C%22show_brush%22%3A%22auto%22%2C%22send_time_range%22%3Afalse%2C%22show_legend%22%3Afalse%2C%22rich_tooltip%22%3Atrue%2C%22show_markers%22%3Afalse%2C%22line_interpolation%22%3A%22cardinal%22%2C%22bottom_margin%22%3A%22auto%22%2C%22x_ticks_layout%22%3A%22auto%22%2C%22x_axis_format%22%3A%22smart_date%22%2C%22left_margin%22%3A%22auto%22%2C%22y_axis_format%22%3A%22SMART_NUMBER%22%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22rolling_type%22%3A%22None%22%2C%22comparison_type%22%3A%22values%22%2C%22annotation_layers%22%3A%5B%5D%2C%22extra_form_data%22%3A%7B%7D%7D&standalone=1"
                    }
                })])])
            }, function () {
                var t = this, e = t._self._c;
                t._self._setupProxy;
                return e("div", {staticClass: "disFlex"}, [e("div", {
                    staticClass: "cont",
                    staticStyle: {height: "450px"}
                }, [e("div", {staticClass: "title"}, [t._v("设备分布饼状图")]), e("div", {staticClass: "content"}, [e("iframe", {
                    attrs: {
                        width: "1000",
                        height: "400",
                        seamless: "",
                        frameBorder: "0",
                        scrolling: "no",
                        src: "http://bogon:7088/superset/explore/?form_data=%7B%22viz_type%22%3A%22pie%22%2C%22datasource%22%3A%221__table%22%2C%22url_params%22%3A%7B%22standalone%22%3A%221%22%2C%22height%22%3A%22400%22%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22createTime%22%2C%22time_range%22%3A%22%E6%97%A0%E7%AD%9B%E9%80%89%22%2C%22groupby%22%3A%5B%22state%22%5D%2C%22metric%22%3A%7B%22expressionType%22%3A%22SIMPLE%22%2C%22column%22%3A%7B%22id%22%3A20%2C%22column_name%22%3A%22state%22%2C%22verbose_name%22%3Anull%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22is_dttm%22%3Afalse%2C%22type%22%3A%22INTEGER%22%2C%22type_generic%22%3A0%2C%22python_date_format%22%3Anull%2C%22is_certified%22%3Afalse%2C%22certified_by%22%3Anull%2C%22certification_details%22%3Anull%2C%22warning_markdown%22%3Anull%7D%2C%22aggregate%22%3A%22COUNT%22%2C%22sqlExpression%22%3Anull%2C%22isNew%22%3Afalse%2C%22hasCustomLabel%22%3Afalse%2C%22label%22%3A%22COUNT%28state%29%22%2C%22optionName%22%3A%22metric_ayaoujk8xh4_j81oxfgg5o%22%7D%2C%22adhoc_filters%22%3A%5B%5D%2C%22emit_filter%22%3Atrue%2C%22row_limit%22%3A100%2C%22sort_by_metric%22%3Atrue%2C%22color_scheme%22%3A%22supersetColors%22%2C%22show_labels_threshold%22%3A5%2C%22legendType%22%3A%22scroll%22%2C%22legendOrientation%22%3A%22top%22%2C%22label_type%22%3A%22key%22%2C%22number_format%22%3A%22SMART_NUMBER%22%2C%22date_format%22%3A%22smart_date%22%2C%22show_labels%22%3Atrue%2C%22labels_outside%22%3Atrue%2C%22outerRadius%22%3A70%2C%22innerRadius%22%3A30%2C%22extra_form_data%22%3A%7B%7D%7D&standalone=1"
                    }
                })])])])
            }, function () {
                var t = this, e = t._self._c;
                t._self._setupProxy;
                return e("div", {staticClass: "disFlex"}, [e("div", {
                    staticClass: "cont",
                    staticStyle: {height: "450px"}
                }, [e("div", {staticClass: "title"}, [t._v("停用设备趋势")]), e("div", {staticClass: "content"}, [e("iframe", {
                    attrs: {
                        width: "1000",
                        height: "400",
                        seamless: "",
                        frameBorder: "0",
                        scrolling: "no",
                        src: "http://bogon:7088/superset/explore/?form_data=%7B%22viz_type%22%3A%22echarts_area%22%2C%22datasource%22%3A%221__table%22%2C%22url_params%22%3A%7B%22standalone%22%3A%221%22%2C%22height%22%3A%22400%22%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22createTime%22%2C%22time_grain_sqla%22%3A%22PT1S%22%2C%22time_range%22%3A%22%E6%97%A0%E7%AD%9B%E9%80%89%22%2C%22metrics%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22column%22%3A%7B%22id%22%3A20%2C%22column_name%22%3A%22state%22%2C%22verbose_name%22%3Anull%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22is_dttm%22%3Afalse%2C%22type%22%3A%22INTEGER%22%2C%22type_generic%22%3A0%2C%22python_date_format%22%3Anull%2C%22is_certified%22%3Afalse%2C%22certified_by%22%3Anull%2C%22certification_details%22%3Anull%2C%22warning_markdown%22%3Anull%7D%2C%22aggregate%22%3A%22MIN%22%2C%22sqlExpression%22%3Anull%2C%22isNew%22%3Afalse%2C%22hasCustomLabel%22%3Afalse%2C%22label%22%3A%22MIN%28state%29%22%2C%22optionName%22%3A%22metric_ra67js3kkuk_xl3or55whkg%22%7D%5D%2C%22groupby%22%3A%5B%5D%2C%22adhoc_filters%22%3A%5B%5D%2C%22order_desc%22%3Atrue%2C%22row_limit%22%3A10000%2C%22rolling_type%22%3A%22cumsum%22%2C%22comparison_type%22%3A%22values%22%2C%22annotation_layers%22%3A%5B%5D%2C%22forecastPeriods%22%3A10%2C%22forecastInterval%22%3A0.8%2C%22x_axis_title_margin%22%3A15%2C%22y_axis_title_margin%22%3A15%2C%22y_axis_title_position%22%3A%22Top%22%2C%22color_scheme%22%3A%22supersetColors%22%2C%22seriesType%22%3A%22smooth%22%2C%22opacity%22%3A0.2%2C%22only_total%22%3Atrue%2C%22markerSize%22%3A6%2C%22zoomable%22%3Atrue%2C%22show_legend%22%3Atrue%2C%22legendType%22%3A%22scroll%22%2C%22legendOrientation%22%3A%22top%22%2C%22x_axis_time_format%22%3A%22%25d%2F%25m%2F%25Y%22%2C%22xAxisLabelRotation%22%3A0%2C%22rich_tooltip%22%3Atrue%2C%22tooltipSortByMetric%22%3Afalse%2C%22tooltipTimeFormat%22%3A%22smart_date%22%2C%22y_axis_format%22%3A%22~g%22%2C%22logAxis%22%3Afalse%2C%22minorSplitLine%22%3Afalse%2C%22truncateYAxis%22%3Afalse%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22extra_form_data%22%3A%7B%7D%7D&standalone=1"
                    }
                })])])])
            }], s = (a("2397"), a("96cf"), a("1da1")), n = a("d4ec"), o = a("bee2"), l = a("99de"), c = a("7e84"),
            u = a("262e"), d = a("9ab4"), C = a("60a3"), p = a("0f9a"), m = a("a358"), _ = a("0926"), f = function () {
                var t = this, e = t._self._c;
                t._self._setupProxy;
                return e("div", {class: t.className, style: {height: t.height, width: t.width}, attrs: {id: t.id}})
            }, h = [], v = a("313e"), A = a.n(v), b = a("2fe1"), y = a("f42c");

        function g(t, e, a) {
            return e = Object(c["a"])(e), Object(l["a"])(t, x() ? Reflect.construct(e, a || [], Object(c["a"])(t).constructor) : e.apply(t, a))
        }

        function x() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (t) {
            }
            return (x = function () {
                return !!t
            })()
        }

        var O = function (t) {
            function e() {
                return Object(n["a"])(this, e), g(this, e, arguments)
            }

            return Object(u["a"])(e, t), Object(o["a"])(e, [{
                key: "mounted", value: function () {
                    var t = this;
                    this.$nextTick((function () {
                        t.initChart()
                    }))
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.chart && (this.chart.dispose(), this.chart = null)
                }
            }, {
                key: "initChart", value: function () {
                    this.chart = A.a.init(document.getElementById(this.id)), this.chart.setOption({
                        backgroundColor: "#fff",
                        title: void 0,
                        tooltip: {trigger: "item", formatter: "{a} <br/>{b} : {c} ({d}%)"},
                        legend: {orient: "vertical", x: "left", data: ["正常运行", "离线", "报警", "预报警"]},
                        toolbox: {
                            show: !0,
                            feature: {
                                mark: {show: !0},
                                magicType: {
                                    show: !0,
                                    type: ["pie", "funnel"],
                                    option: {funnel: {x: "25%", width: "50%", funnelAlign: "left", max: 1548}}
                                }
                            }
                        },
                        series: [{
                            name: "访问来源",
                            type: "pie",
                            radius: "70%",
                            center: ["50%", "50%"],
                            data: [{value: 235, name: "正常运行", itemStyle: {color: "#536acc"}}, {
                                value: 10,
                                name: "离线",
                                itemStyle: {color: "#ed9875"}
                            }, {value: 34, name: "报警", itemStyle: {color: "#5cb7c7"}}, {
                                value: 35,
                                name: "预报警",
                                itemStyle: {color: "#8598e8"}
                            }]
                        }]
                    })
                }
            }]), e
        }(Object(b["c"])(y["a"]));
        d["a"]([Object(C["b"])({default: "chart"})], O.prototype, "className", void 0), d["a"]([Object(C["b"])({default: "chart"})], O.prototype, "id", void 0), d["a"]([Object(C["b"])({default: "200px"})], O.prototype, "width", void 0), d["a"]([Object(C["b"])({default: "200px"})], O.prototype, "height", void 0), O = d["a"]([Object(C["a"])({name: "PieChart"})], O);
        var D = O, w = D, j = a("2877"), B = Object(j["a"])(w, f, h, !1, null, null, null), k = B.exports,
            E = function () {
                var t = this, e = t._self._c;
                t._self._setupProxy;
                return e("div", [e("baidu-map", {
                    staticClass: "map",
                    attrs: {center: "北京", "scroll-wheel-zoom": !0, zoom: 10}
                }, [t.data ? e("div", t._l(t.data, (function (t, a) {
                    return e("bm-circle", {
                        key: a,
                        attrs: {
                            center: t.markerPoint,
                            fillColor: "blue",
                            fillOpacity: .3,
                            radius: 1e3,
                            "stroke-color": "blue",
                            "stroke-opacity": .1,
                            "stroke-weight": 1
                        }
                    })
                })), 1) : t._e()])], 1)
            }, T = [];

        function P(t, e, a) {
            return e = Object(c["a"])(e), Object(l["a"])(t, R() ? Reflect.construct(e, a || [], Object(c["a"])(t).constructor) : e.apply(t, a))
        }

        function R() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (t) {
            }
            return (R = function () {
                return !!t
            })()
        }

        var N = function (t) {
            function e() {
                var t;
                return Object(n["a"])(this, e), t = P(this, e, arguments), t.show = !1, t
            }

            return Object(u["a"])(e, t), Object(o["a"])(e, [{
                key: "infoWindowClose", value: function () {
                    this.show = !1
                }
            }, {
                key: "infoWindowOpen", value: function () {
                    this.show = !0
                }
            }, {
                key: "created", value: function () {
                    console.log(this.data)
                }
            }]), e
        }(C["c"]);
        d["a"]([Object(C["b"])({default: []})], N.prototype, "data", void 0), N = d["a"]([Object(C["a"])({})], N);
        var S = N, I = S, z = (a("bc5a"), Object(j["a"])(I, E, T, !1, null, "6c67b5ac", null)), M = z.exports;

        function F(t, e, a) {
            return e = Object(c["a"])(e), Object(l["a"])(t, q() ? Reflect.construct(e, a || [], Object(c["a"])(t).constructor) : e.apply(t, a))
        }

        function q() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                })))
            } catch (t) {
            }
            return (q = function () {
                return !!t
            })()
        }

        var H = function (t) {
            function e() {
                var t;
                return Object(n["a"])(this, e), t = F(this, e, arguments), t.totalData = {}, t.operationData = [], t.mapData = [], t.listQuery = {
                    companyId: 0,
                    state: 0
                }, t.dataItem = {
                    name: "设备数",
                    xAxis: ["13:00", "13:05", "13:10", "13:15", "13:20", "13:25", "13:30", "13:35", "13:40", "13:45", "13:50", "13:55"],
                    data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
                }, t
            }

            return Object(u["a"])(e, t), Object(o["a"])(e, [{
                key: "name", get: function () {
                    return p["a"].username
                }
            }, {
                key: "logintime", get: function () {
                    return p["a"].logintime
                }
            }, {
                key: "getMapData", value: function () {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, a;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(m["a"])(this.listQuery);
                                case 2:
                                    e = t.sent, a = e.data, console.log(a), this.mapData = a;
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));

                    function e() {
                        return t.apply(this, arguments)
                    }

                    return e
                }()
            }, {
                key: "getTotalData", value: function () {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, a;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(m["c"])({});
                                case 2:
                                    e = t.sent, a = e.data, this.totalData = a;
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));

                    function e() {
                        return t.apply(this, arguments)
                    }

                    return e
                }()
            }, {
                key: "getOperation", value: function () {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, a;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(m["b"])({page: 1, pagesize: 4});
                                case 2:
                                    e = t.sent, a = e.data, this.operationData = a.items;
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));

                    function e() {
                        return t.apply(this, arguments)
                    }

                    return e
                }()
            }, {
                key: "created", value: function () {
                    this.getMapData(), this.getTotalData(), this.getOperation()
                }
            }]), e
        }(C["c"]);
        H = d["a"]([Object(C["a"])({name: "Dashboard", components: {LineChart: _["a"], BaiduMap: M, PieChart: k}})], H);
        var L = H, W = L, J = (a("60a6"), Object(j["a"])(W, r, i, !1, null, "457b5134", null));
        e["default"] = J.exports
    }, a125: function (t, e, a) {
    }, a358: function (t, e, a) {
        "use strict";
        a.d(e, "c", (function () {
            return i
        })), a.d(e, "b", (function () {
            return s
        })), a.d(e, "a", (function () {
            return n
        }));
        var r = a("b775"), i = function (t) {
            return Object(r["a"])({url: "admin/api/total", method: "get", params: t})
        }, s = function (t) {
            return Object(r["a"])({url: "admin/api/operationlog", method: "get", params: t})
        }, n = function (t) {
            return Object(r["a"])({url: "admin/warehouse/realTime", method: "get", params: t})
        }
    }, a63e: function (t, e, a) {
    }, bc5a: function (t, e, a) {
        "use strict";
        a("a63e")
    }
}]);
//# sourceMappingURL=chunk-690a951c.90e91ac7.js.map