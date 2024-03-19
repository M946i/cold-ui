(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-83c3e2ac"], {
    "5b99": function (e, t, a) {
        "use strict";
        a.r(t);
        var r = function () {
            var e = this;
            e._self._c;
            return e._m(0)
        }, s = [function () {
            var e = this, t = e._self._c;
            return t("div", {staticClass: "dashboard-container"}, [
                t("div", {
                staticClass: "tabCont",
                staticStyle: {height: "500px"}
            }, [t("div", {staticClass: "title"}, [e._v("湿度预警趋势")]), t("div", {staticClass: "cont"}, [t("iframe", {
                attrs: {
                    width: "1000",
                    height: "400",
                    seamless: "",
                    frameBorder: "0",
                    scrolling: "no",
                    src: "http://bogon:7088/superset/explore/?form_data=%7B%22viz_type%22%3A%22echarts_timeseries_line%22%2C%22datasource%22%3A%221__table%22%2C%22url_params%22%3A%7B%22standalone%22%3A%221%22%2C%22height%22%3A%22400%22%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22createTime%22%2C%22time_grain_sqla%22%3A%22PT1S%22%2C%22time_range%22%3A%22%E6%97%A0%E7%AD%9B%E9%80%89%22%2C%22metrics%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22column%22%3A%7B%22id%22%3A15%2C%22column_name%22%3A%22hum%22%2C%22verbose_name%22%3Anull%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22is_dttm%22%3Afalse%2C%22type%22%3A%22INTEGER%22%2C%22type_generic%22%3A0%2C%22python_date_format%22%3Anull%2C%22is_certified%22%3Afalse%2C%22certified_by%22%3Anull%2C%22certification_details%22%3Anull%2C%22warning_markdown%22%3Anull%7D%2C%22aggregate%22%3A%22AVG%22%2C%22sqlExpression%22%3Anull%2C%22isNew%22%3Afalse%2C%22hasCustomLabel%22%3Afalse%2C%22label%22%3A%22AVG%28hum%29%22%2C%22optionName%22%3A%22metric_xb5zl0c5tc_a1f37tal7ef%22%7D%5D%2C%22groupby%22%3A%5B%5D%2C%22adhoc_filters%22%3A%5B%5D%2C%22emit_filter%22%3Afalse%2C%22order_desc%22%3Atrue%2C%22row_limit%22%3A10%2C%22time_compare%22%3A%5B%5D%2C%22comparison_type%22%3A%22values%22%2C%22annotation_layers%22%3A%5B%5D%2C%22forecastEnabled%22%3Afalse%2C%22forecastPeriods%22%3A10%2C%22forecastInterval%22%3A0.8%2C%22x_axis_title%22%3A%22%E6%97%B6%E9%97%B4%22%2C%22x_axis_title_margin%22%3A100%2C%22y_axis_title%22%3A%22%E6%B9%BF%E5%BA%A6%22%2C%22y_axis_title_margin%22%3A30%2C%22y_axis_title_position%22%3A%22Top%22%2C%22color_scheme%22%3A%22echarts4Colors%22%2C%22show_value%22%3Atrue%2C%22stack%22%3Atrue%2C%22only_total%22%3Atrue%2C%22markerEnabled%22%3Atrue%2C%22markerSize%22%3A10%2C%22zoomable%22%3Atrue%2C%22show_legend%22%3Atrue%2C%22legendType%22%3A%22scroll%22%2C%22legendOrientation%22%3A%22right%22%2C%22legendMargin%22%3A100%2C%22x_axis_time_format%22%3A%22%25d%2F%25m%2F%25Y%22%2C%22xAxisLabelRotation%22%3A0%2C%22rich_tooltip%22%3Atrue%2C%22tooltipSortByMetric%22%3Afalse%2C%22tooltipTimeFormat%22%3A%22smart_date%22%2C%22y_axis_format%22%3A%22~g%22%2C%22logAxis%22%3Afalse%2C%22minorSplitLine%22%3Atrue%2C%22truncateYAxis%22%3Afalse%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22extra_form_data%22%3A%7B%7D%7D&standalone=1"
                }
            })])]), t("div", {
                staticClass: "tabCont",
                staticStyle: {height: "400px"}
            }, [t("div", {staticClass: "title"}, [e._v("温度预警趋势")]), t("div", {staticClass: "cont"}, [t("iframe", {
                attrs: {
                    width: "1000",
                    height: "300",
                    seamless: "",
                    frameBorder: "0",
                    scrolling: "no",
                    src: "http://bogon:7088/superset/explore/?form_data=%7B%22viz_type%22%3A%22line%22%2C%22datasource%22%3A%221__table%22%2C%22slice_id%22%3A2%2C%22url_params%22%3A%7B%22standalone%22%3A%221%22%2C%22height%22%3A%22400%22%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22createTime%22%2C%22time_grain_sqla%22%3A%22PT1S%22%2C%22time_range%22%3A%22No+filter%22%2C%22metrics%22%3A%5B%7B%22aggregate%22%3A%22AVG%22%2C%22column%22%3A%7B%22certification_details%22%3Anull%2C%22certified_by%22%3Anull%2C%22column_name%22%3A%22tem%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A12%2C%22is_certified%22%3Afalse%2C%22is_dttm%22%3Afalse%2C%22python_date_format%22%3Anull%2C%22type%22%3A%22INTEGER%22%2C%22type_generic%22%3A0%2C%22verbose_name%22%3Anull%2C%22warning_markdown%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22hasCustomLabel%22%3Afalse%2C%22isNew%22%3Afalse%2C%22label%22%3A%22AVG%28tem%29%22%2C%22optionName%22%3A%22metric_s2g1vkdze6a_dwlqaghcs6%22%2C%22sqlExpression%22%3Anull%7D%5D%2C%22adhoc_filters%22%3A%5B%5D%2C%22groupby%22%3A%5B%5D%2C%22order_desc%22%3Atrue%2C%22row_limit%22%3A5000%2C%22color_scheme%22%3A%22supersetColors%22%2C%22show_brush%22%3A%22auto%22%2C%22send_time_range%22%3Afalse%2C%22show_legend%22%3Afalse%2C%22rich_tooltip%22%3Atrue%2C%22show_markers%22%3Afalse%2C%22line_interpolation%22%3A%22cardinal%22%2C%22bottom_margin%22%3A%22auto%22%2C%22x_ticks_layout%22%3A%22auto%22%2C%22x_axis_format%22%3A%22smart_date%22%2C%22left_margin%22%3A%22auto%22%2C%22y_axis_format%22%3A%22SMART_NUMBER%22%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22rolling_type%22%3A%22None%22%2C%22comparison_type%22%3A%22values%22%2C%22annotation_layers%22%3A%5B%5D%2C%22extra_form_data%22%3A%7B%7D%7D&standalone=1"
                }
            })])])])
        }], l = (a("eab8"), a("2877")), i = {}, o = Object(l["a"])(i, r, s, !1, null, "62d8cb04", null);
        t["default"] = o.exports
    }, d68d: function (e, t, a) {
    }, eab8: function (e, t, a) {
        "use strict";
        a("d68d")
    }
}]);
//# sourceMappingURL=chunk-83c3e2ac.36e4e5a3.js.map