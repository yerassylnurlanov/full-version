(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartConfigs.js */ "./resources/js/src/components/statistics-cards/chartConfigs.js");
/* harmony import */ var _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/utils/color.js */ "./resources/assets/utils/color.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {// type: Array,
      // required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    colorTo: {
      type: String
    },
    // chartType: {
    //     type: String,
    //     default: 'line-chart',
    // },
    type: {
      type: String,
      default: 'line'
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    hideChart: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      chartOptions: null
    };
  },
  watch: {
    themePrimaryColor: function themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: {
          monochrome: {
            color: this.getHex(this.color)
          }
        }
      });
    }
  },
  computed: {
    themePrimaryColor: function themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex: function getHex(color) {
      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_2__["default"].isColor(color)) {
        var rgb = window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(color));
        rgb = rgb.split(",");
        return "#" + ((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1);
      }

      return color;
    },
    gradientToColor: function gradientToColor(color) {
      var gradientToColors = {
        "primary": "#A9A2F6",
        "success": "#55DD92",
        "warning": "#ffc085",
        "danger": "#F97794"
      };
      return gradientToColors[color] ? gradientToColors[color] : gradientToColors["primary"];
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  created: function created() {
    if (this.type == 'area') {
      // assign chart options
      this.chartOptions = Object.assign({}, _chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__["default"].areaChartOptions);
      this.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      };
    } else if (this.type == "line") {
      // Assign chart options
      this.chartOptions = JSON.parse(JSON.stringify(_chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__["default"].lineChartOptions));
      this.chartOptions.fill.gradient.gradientToColors = [this.gradientToColor(this.colorTo || this.color)];
      this.chartOptions.colors = [this.getHex(this.color)];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: "",
      phone_number: "",
      e_mail: "",
      checkBox1: "",
      mainSwiper: {
        pagination: {
          el: '.swiper-pagination',
          type: 'autoplay'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      newsSwiper: {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      smiSwiper: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      blogSwiper: {
        slidesPerView: 5,
        spaceBetween: 50,
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },
      card_2: {},
      card_4: {},
      card_5: {},
      card_6: {},
      card_1: {}
    };
  },
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["swiperSlide"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var _this = this;

    this.$http.get("/api/users/pixinvent/product/sales/1").then(function (response) {
      _this.card_2 = response.data;
    }).catch(function (error) {
      console.log(error);
    });
    this.$http.get("/api/users/pixinvent/product/1").then(function (response) {
      _this.card_1 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 4

    this.$http.get("/api/users/89").then(function (response) {
      _this.card_4 = response.data;
    }).catch(function (error) {
      console.log(error);
    });
    this.$http.get("/api/card/1").then(function (response) {
      _this.card_5 = response.data;
    }).catch(function (error) {
      console.log(error);
    });
    this.$http.get("/api/card/2").then(function (response) {
      _this.card_6 = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-xl[data-v-596e52fc]{\n  color:#626262;\n}\n.smi .swiper-inner[data-v-596e52fc] {\n  position: relative;\n  overflow: hidden;\n  height: 480px;\n  display: flex;\n  justify-content: center;\n}\n[dir] .smi .swiper-inner[data-v-596e52fc] {\n  padding: 15px;\n}\n.smi .swiper-container[data-v-596e52fc] {\n  width: 450px !important;\n  height: 450px;\n  position: absolute;\n}\n[dir] .smi .swiper-slide[data-v-596e52fc] {\n  background-position: center;\n  background-size: cover;\n}\n.news .swiper-inner[data-v-596e52fc] {\n  width: 100%;\n  height:530px;\n}\n[dir] .news .swiper-inner[data-v-596e52fc] {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.news .responsive[data-v-596e52fc]{\n  height: 100%;\n}\n.news .swiper-slide[data-v-596e52fc] {\n  height: 500px;\n}\n[dir] .news .swiper-slide[data-v-596e52fc] {\n  background-position: center;\n  background-size: cover;\n}\n.swiper-text[data-v-596e52fc]{\n  position: absolute;\n  overflow: visible;\n}\n[dir=ltr] .swiper-text[data-v-596e52fc]{\n  margin: 12% auto 0 8%;\n}\n[dir=rtl] .swiper-text[data-v-596e52fc]{\n  margin: 12% 8% 0 auto;\n}\n.teaser-img[data-v-596e52fc]{\n  width: 25vh;\n  position: absolute;\n}\n[dir] .teaser-img[data-v-596e52fc]{\n  margin: -4% auto !important;\n}\n.teaser[data-v-596e52fc]{\n  display: flex !important;\n}\n[dir] .teaser[data-v-596e52fc]{\n  background-color: #4F9D3A;\n}\n[dir] .teaser .vx-col[data-v-596e52fc]{\n  padding: 3%;\n}\n[dir] #main-page[data-v-596e52fc]{\n  background-color: #ffffff;\n}\n[dir=ltr] .vx-row[data-v-596e52fc]{\n  margin-left:0 !important;\n  margin-right:0 !important;\n}\n[dir=rtl] .vx-row[data-v-596e52fc]{\n  margin-right:0 !important;\n  margin-left:0 !important;\n}\n.consultation[data-v-596e52fc]{\n  width: 70%;\n}\n[dir] .consultation[data-v-596e52fc]{\n  padding: 3% 8%;\n  background-color: #EEF6EC;\n}\n[dir=ltr] .consultation[data-v-596e52fc]{\n  border-radius: 200px 5px;\n  margin-left: auto;\n  margin-right: auto;\n}\n[dir=rtl] .consultation[data-v-596e52fc]{\n  border-radius: 5px 200px;\n  margin-right: auto;\n  margin-left: auto;\n}\n#agreement[data-v-596e52fc]{\n  width: 20px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vx-card", { staticClass: "overflow-hidden" }, [
    _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
      _c(
        "div",
        {
          staticClass: "p-6",
          class: {
            "flex justify-between flex-row-reverse items-center": _vm.iconRight,
            "text-center": !_vm.iconRight && _vm.hideChart,
            "pb-0": !_vm.hideChart
          }
        },
        [
          _c("feather-icon", {
            staticClass: "p-3 inline-flex rounded-full",
            class: ["text-" + _vm.color, { "mb-4": !_vm.iconRight }],
            style: { background: "rgba(var(--vs-" + _vm.color + "),.15)" },
            attrs: { icon: _vm.icon }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "truncate" }, [
            _c("h2", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statistic))
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      !_vm.hideChart
        ? _c(
            "div",
            { staticClass: "line-area-chart" },
            [
              _c("vue-apex-charts", {
                ref: "apexChart",
                attrs: {
                  type: _vm.type,
                  height: "100",
                  width: "100%",
                  options: _vm.chartOptions,
                  series: _vm.chartData
                }
              })
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "main-page" } }, [
    _c(
      "div",
      { staticClass: "vx-row carousel vx-card" },
      [
        _c(
          "swiper",
          {
            key: _vm.$vs.rtl,
            attrs: { options: _vm.mainSwiper, dir: _vm.$vs.rtl ? "rtl" : "ltr" }
          },
          [
            _c("swiper-slide", [
              _c("div", { staticClass: "swiper-text md:w-1/4 " }, [
                _c(
                  "div",
                  {
                    staticClass: "title mt-2 text-center",
                    attrs: { "data-swiper-parallax": "-100" }
                  },
                  [
                    _c("h2", { staticClass: "text-white" }, [
                      _vm._v("Freedom Finance Life —")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "subtitle text-center font-semibold mt-5",
                    attrs: { "data-swiper-parallax": "-200" }
                  },
                  [
                    _c("h4", { staticClass: "text-white" }, [
                      _vm._v(
                        "Это уверенность в настоящем, дающая свободу созидать будущее."
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "responsive",
                staticStyle: { background: "rgb(195, 195, 195)" },
                attrs: {
                  src: __webpack_require__(/*! @assets/images/slider/Education.jpg */ "./resources/assets/images/slider/Education.jpg"),
                  alt: "banner"
                }
              })
            ]),
            _vm._v(" "),
            _c("swiper-slide", [
              _c("div", { staticClass: "swiper-text md:w-1/4 " }, [
                _c(
                  "div",
                  {
                    staticClass: "title mt-2 text-center",
                    attrs: { "data-swiper-parallax": "-100" }
                  },
                  [
                    _c("h2", { staticClass: "text-white" }, [
                      _vm._v("Freedom Finance Life —")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "subtitle text-center font-semibold mt-5",
                    attrs: { "data-swiper-parallax": "-200" }
                  },
                  [
                    _c("h4", { staticClass: "text-white" }, [
                      _vm._v(
                        "Это уверенность в настоящем, дающая свободу созидать будущее."
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "responsive",
                staticStyle: { background: "rgb(195, 195, 195)" },
                attrs: {
                  src: __webpack_require__(/*! @assets/images/slider/women.jpg */ "./resources/assets/images/slider/women.jpg"),
                  alt: "banner"
                }
              })
            ]),
            _vm._v(" "),
            _c("swiper-slide", [
              _c("div", { staticClass: "swiper-text md:w-1/4 " }, [
                _c(
                  "div",
                  {
                    staticClass: "title mt-2 text-center",
                    attrs: { "data-swiper-parallax": "-100" }
                  },
                  [
                    _c("h2", { staticClass: "text-white" }, [
                      _vm._v("Freedom Finance Life —")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "subtitle text-center font-semibold mt-5",
                    attrs: { "data-swiper-parallax": "-200" }
                  },
                  [
                    _c("h4", { staticClass: "text-white" }, [
                      _vm._v(
                        "Это уверенность в настоящем, дающая свободу созидать будущее."
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "responsive",
                staticStyle: { background: "rgb(195, 195, 195)" },
                attrs: {
                  src: __webpack_require__(/*! @assets/images/slider/women.jpg */ "./resources/assets/images/slider/women.jpg"),
                  alt: "banner"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "swiper-pagination",
              attrs: { slot: "pagination" },
              slot: "pagination"
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "swiper-button-prev swiper-button-white",
              attrs: { slot: "button-prev" },
              slot: "button-prev"
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "swiper-button-next swiper-button-white",
              attrs: { slot: "button-next" },
              slot: "button-next"
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row products mt-10 " }, [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("vs-divider", { attrs: { position: "left", color: "primary" } }, [
            _c("span", { staticClass: "text-3xl" }, [
              _vm._v("Защитите свою жизнь и здоровье")
            ])
          ]),
          _vm._v(" "),
          _c(
            "vs-tabs",
            { attrs: { alignment: "fixed" } },
            [
              _c("vs-tab", { attrs: { label: "Частным лицам" } }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
                    [
                      _c("vx-card", [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "responsive rounded-lg",
                              attrs: { src: _vm.card_1.img, alt: "content-img" }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "my-6" }, [
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Freedom Protect")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-grey" }, [
                                _vm._v(
                                  "Надежная и недорогая страховая защита от несчастных случаев"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("vs-divider"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex justify-between flex-wrap" },
                              [
                                _c("span", [
                                  _c("p", { staticClass: "text-xl" }, [
                                    _vm._v(
                                      "Случайности, о которых позаботились заранее."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-grey" }, [
                                    _vm._v(
                                      "Минимальный взнос – 1 000 тенге в год."
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
                    [
                      _c("vx-card", [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "responsive rounded-lg",
                              attrs: { src: _vm.card_1.img, alt: "content-img" }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "my-6" }, [
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Freedom Protect")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-grey" }, [
                                _vm._v(
                                  "Надежная и недорогая страховая защита от несчастных случаев"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("vs-divider"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex justify-between flex-wrap" },
                              [
                                _c("span", [
                                  _c("p", { staticClass: "text-xl" }, [
                                    _vm._v(
                                      "Случайности, о которых позаботились заранее."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-grey" }, [
                                    _vm._v(
                                      "Минимальный взнос – 1 000 тенге в год."
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
                    [
                      _c("vx-card", [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "responsive rounded-lg",
                              attrs: { src: _vm.card_1.img, alt: "content-img" }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "my-6" }, [
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Freedom Protect")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-grey" }, [
                                _vm._v(
                                  "Надежная и недорогая страховая защита от несчастных случаев"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("vs-divider"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex justify-between flex-wrap" },
                              [
                                _c("span", [
                                  _c("p", { staticClass: "text-xl" }, [
                                    _vm._v(
                                      "Случайности, о которых позаботились заранее."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-grey" }, [
                                    _vm._v(
                                      "Минимальный взнос – 1 000 тенге в год."
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("vs-tab", { attrs: { label: "Бизнесу" } }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
                    [
                      _c("vx-card", [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "responsive rounded-lg",
                              attrs: { src: _vm.card_2.img, alt: "content-img" }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "my-6" }, [
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Freedom Protect")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-grey" }, [
                                _vm._v(
                                  "Надежная и недорогая страховая защита от несчастных случаев"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("vs-divider"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex justify-between flex-wrap" },
                              [
                                _c("span", [
                                  _c("p", { staticClass: "text-xl" }, [
                                    _vm._v(
                                      "Случайности, о которых позаботились заранее."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-grey" }, [
                                    _vm._v(
                                      "Минимальный взнос – 1 000 тенге в год."
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
                    [
                      _c("vx-card", [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "responsive rounded-lg",
                              attrs: { src: _vm.card_2.img, alt: "content-img" }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "my-6" }, [
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Freedom Protect")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-grey" }, [
                                _vm._v(
                                  "Надежная и недорогая страховая защита от несчастных случаев"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("vs-divider"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex justify-between flex-wrap" },
                              [
                                _c("span", [
                                  _c("p", { staticClass: "text-xl" }, [
                                    _vm._v(
                                      "Случайности, о которых позаботились заранее."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-grey" }, [
                                    _vm._v(
                                      "Минимальный взнос – 1 000 тенге в год."
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
                    [
                      _c("vx-card", [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "responsive rounded-lg",
                              attrs: { src: _vm.card_2.img, alt: "content-img" }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "my-6" }, [
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Freedom Protect")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-grey" }, [
                                _vm._v(
                                  "Надежная и недорогая страховая защита от несчастных случаев"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("vs-divider"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex justify-between flex-wrap" },
                              [
                                _c("span", [
                                  _c("p", { staticClass: "text-xl" }, [
                                    _vm._v(
                                      "Случайности, о которых позаботились заранее."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-grey" }, [
                                    _vm._v(
                                      "Минимальный взнос – 1 000 тенге в год."
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ])
              ])
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-row advantages mt-10 justify-items-center " },
      [
        _c("vs-divider", { attrs: { position: "left", color: "primary" } }, [
          _c("span", { staticClass: "text-3xl" }, [_vm._v("Наши преимущества")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row w-full cards justify-center" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
            [
              _c(
                "vx-card",
                { staticClass: "p-2" },
                [
                  _c("vs-avatar", {
                    staticClass: "mx-auto mb-6 block",
                    staticStyle: { background: "none" },
                    attrs: { size: "80px", src: _vm.card_4.userImg }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }, [
                    _c("h3", [_vm._v(_vm._s(_vm.card_4.title))])
                  ]),
                  _vm._v(" "),
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_4.footer_text))
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
            [
              _c(
                "vx-card",
                { staticClass: "p-2" },
                [
                  _c("vs-avatar", {
                    staticClass: "mx-auto mb-6 block",
                    staticStyle: { background: "none" },
                    attrs: { size: "80px", src: _vm.card_5.userImg }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }, [
                    _c("h3", [_vm._v(_vm._s(_vm.card_5.title))])
                  ]),
                  _vm._v(" "),
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_5.footer_text))
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
            [
              _c(
                "vx-card",
                { staticClass: "p-2" },
                [
                  _c("vs-avatar", {
                    staticClass: "mx-auto mb-6 block",
                    staticStyle: { background: "none" },
                    attrs: { size: "80px", src: _vm.card_6.userImg }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }, [
                    _c("h3", [_vm._v(_vm._s(_vm.card_6.title))])
                  ]),
                  _vm._v(" "),
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_6.footer_text))
                  ])
                ],
                1
              )
            ],
            1
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row about  pt-5 pb-5" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row w-1/2" }, [
        _c(
          "div",
          { staticClass: "vx-col w-1/2 mt-16  md:w-1/3 xl:w-1/2" },
          [
            _c("statistics-card-line", {
              staticClass: "mb-base",
              attrs: {
                hideChart: "",
                icon: "SmileIcon",
                statistic: "335 468",
                statisticTitle: "Застрахованных на данный момент",
                color: "primary"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-1/2 mt-16  md:w-1/3 xl:w-1/2" },
          [
            _c("statistics-card-line", {
              staticClass: "mb-base",
              attrs: {
                hideChart: "",
                icon: "GlobeIcon",
                statistic: "19",
                statisticTitle: "Офисы компанни есть в 19 городах Казахстана",
                color: "primary"
              }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "news mt-10" },
      [
        _c("vs-divider", { attrs: { position: "left", color: "primary" } }, [
          _c("span", { staticClass: "text-3xl" }, [_vm._v("Новости")])
        ]),
        _vm._v(" "),
        _c("vx-card", { staticClass: "carousel-example" }, [
          _c(
            "div",
            { staticClass: "swiper-inner" },
            [
              _c(
                "swiper",
                {
                  key: _vm.$vs.rtl,
                  attrs: {
                    options: _vm.newsSwiper,
                    dir: _vm.$vs.rtl ? "rtl" : "ltr"
                  }
                },
                [
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: " responsive",
                      attrs: {
                        src: __webpack_require__(/*! @assets/images/slider/Education.jpg */ "./resources/assets/images/slider/Education.jpg"),
                        alt: "teaser image"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: " responsive",
                      attrs: {
                        src: __webpack_require__(/*! @assets/images/slider/Education.jpg */ "./resources/assets/images/slider/Education.jpg"),
                        alt: "teaser image"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: " responsive",
                      attrs: {
                        src: __webpack_require__(/*! @assets/images/slider/Education.jpg */ "./resources/assets/images/slider/Education.jpg"),
                        alt: "teaser image"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: " responsive",
                      attrs: {
                        src: __webpack_require__(/*! @assets/images/slider/Education.jpg */ "./resources/assets/images/slider/Education.jpg"),
                        alt: "teaser image"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "swiper-pagination",
                    attrs: { slot: "pagination" },
                    slot: "pagination"
                  })
                ],
                1
              )
            ],
            1
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "smi mt-10 vx-row" },
      [
        _c("vs-divider", { attrs: { position: "left", color: "primary" } }, [
          _c("span", { staticClass: "text-3xl" }, [_vm._v("СМИ о НАС")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "swiper-inner vx-col w-1/2" },
          [
            _c(
              "swiper",
              {
                key: _vm.$vs.rtl,
                attrs: {
                  options: _vm.smiSwiper,
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                }
              },
              [
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-32.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-35.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-33.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-37.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "swiper-pagination",
                  attrs: { slot: "pagination" },
                  slot: "pagination"
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "swiper-inner vx-col w-1/2" },
          [
            _c(
              "swiper",
              {
                key: _vm.$vs.rtl,
                attrs: {
                  options: _vm.smiSwiper,
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                }
              },
              [
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-29.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-28.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-26.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-27.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "swiper-pagination",
                  attrs: { slot: "pagination" },
                  slot: "pagination"
                })
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "blog mt-10 vx-row" },
      [
        _c("vs-divider", { attrs: { position: "left", color: "primary" } }, [
          _c("span", { staticClass: "text-3xl" }, [
            _vm._v("Блог от Freedom Finance Life")
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "carousel-example" },
          [
            _c(
              "swiper",
              {
                key: _vm.$vs.rtl,
                attrs: {
                  options: _vm.blogSwiper,
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                }
              },
              [
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-29.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-22.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-28.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-27.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-33.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("swiper-slide", [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: {
                      src: "/images/pages/carousel/banner-34.jpg",
                      alt: "banner"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "swiper-pagination",
                  attrs: { slot: "pagination" },
                  slot: "pagination"
                })
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-card consultation mt-20 text-center" },
      [
        _c("h2", { staticClass: "title text-black text-center mb-5" }, [
          _vm._v("Бесплатная консультация по продуктам и услугам")
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mt-5 justify-center" }, [
          _c(
            "div",
            { staticClass: "vx-col " },
            [
              _c("vs-input", {
                attrs: { type: "text", placeholder: "Имя", name: "name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col" },
            [
              _c("vs-input", {
                attrs: { type: "text", placeholder: "Номер телефона" },
                model: {
                  value: _vm.phone_number,
                  callback: function($$v) {
                    _vm.phone_number = $$v
                  },
                  expression: "phone_number"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col" },
            [
              _c("vs-input", {
                attrs: { type: "email", placeholder: "E-mail" },
                model: {
                  value: _vm.e_mail,
                  callback: function($$v) {
                    _vm.e_mail = $$v
                  },
                  expression: "e_mail"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "checker vx-row mt-5" },
          [
            _c("vs-checkbox", {
              model: {
                value: _vm.checkBox1,
                callback: function($$v) {
                  _vm.checkBox1 = $$v
                },
                expression: "checkBox1"
              }
            }),
            _vm._v(" "),
            _vm._m(3)
          ],
          1
        ),
        _vm._v(" "),
        _c("vs-button", { staticClass: "mt-6", attrs: { color: "primary" } }, [
          _vm._v("Получить консультацию")
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "vx-row teaser mt-10 vx-card" }, [
      _c("div", { staticClass: "vx-col w-1/3" }, [
        _c("img", {
          staticClass: "teaser-img responsive",
          attrs: {
            src: __webpack_require__(/*! @assets/images/elements/teaser.png */ "./resources/assets/images/elements/teaser.png"),
            alt: "teaser image"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col w-2/3" }, [
        _c("div", { staticClass: "title mr-20 ml-20 ml-2 " }, [
          _c("h4", { staticClass: "text-white" }, [
            _vm._v(
              "Сайт поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев"
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "subtitle mr-20 ml-20 mt-5" }, [
          _c("h6", { staticClass: "text-white" }, [
            _vm._v(
              "Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия."
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "vx-col mt-12 w-1/2" }, [
      _c("div", { staticClass: "title mr-10 ml-10 ml-2" }, [
        _c("h2", [
          _vm._v("Мы компания по страхованию жизни Freedom Finance Life")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "subtitle mr-10 ml-10 mt-5 text-grey" }, [
        _c("span", [
          _vm._v(
            "Защищаем клиентов от непредвиденных финансовых расходов и несчастных случаев, помогаем им копить деньги и делаем все, чтобы их жизнь была спокойнее. "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col text-base mt-5 ml-10 mr-10" }, [
        _vm._v(
          "\n                    В 2019 году запустили серию обучающих мастер-классов, программу для родителей, с которой проще накопить на учебу детей в университете, летний лагерь по финансовой грамотности, страховку от рака и благотворительный челлендж в поддержку деток с онкологическими заболеваниями.\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "text-gray text-center " }, [
      _vm._v(
        "Оставьте заявку, и наши специалисты перезвонят в течение нескольких минут."
      ),
      _c("br"),
      _vm._v(
        " \u2028Они ответят на все вопросы, помогут выбрать подходящую страховую программу и рассчитают стоимость полиса."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("Правила обеспечения защиты персональных данных."),
      _c("br"),
      _vm._v(
        "\n                        Мы обязаны получить такое согласие в соответствии с законодательством Республики Казахстан о персональных данных."
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/elements/teaser.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/elements/teaser.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/teaser.png?ed2f1bdf406b45fca2c3270aa20b8cd7";

/***/ }),

/***/ "./resources/assets/images/slider/Education.jpg":
/*!******************************************************!*\
  !*** ./resources/assets/images/slider/Education.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Education.jpg?95e94f6ca3b593cce8c8ee7ee2a1c5a7";

/***/ }),

/***/ "./resources/assets/images/slider/women.jpg":
/*!**************************************************!*\
  !*** ./resources/assets/images/slider/women.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/women.jpg?b46fa1b110382b267a1363ed43656e05";

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony import */ var _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/statistics-cards/StatisticsCardLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/statistics-cards/chartConfigs.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/chartConfigs.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  areaChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0
      }
    }],
    tooltip: {
      x: {
        show: false
      }
    }
  },
  lineChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      type: 'line',
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 4,
        opacity: 0.10
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'numeric'
    },
    // colors: ['#7367F0'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        // gradientToColors: ['#A9A2F6'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 5
      }
    },
    tooltip: {
      x: {
        show: false
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardAnalytics_vue_vue_type_template_id_596e52fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=template&id=596e52fc&scoped=true& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&scoped=true&");
/* harmony import */ var _DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardAnalytics_vue_vue_type_template_id_596e52fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardAnalytics_vue_vue_type_template_id_596e52fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "596e52fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/DashboardAnalytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=template&id=596e52fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);