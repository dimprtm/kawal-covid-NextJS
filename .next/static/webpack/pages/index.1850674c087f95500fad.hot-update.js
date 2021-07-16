self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Dashboard/Grafik.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Grafik.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Grafik; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Dashboard\\Grafik.js";




var _require = __webpack_require__(/*! ../../util/library */ "./util/library.js"),
    sum = _require.sum,
    getAllMonth = _require.getAllMonth;

function Grafik(props) {
  var dataCovid = null;
  var data = null;

  if (!props.isGlobal) {
    var _ref, _ref2, _ref3, _ref4;

    dataCovid = getAllMonth(props);
    data = {
      labels: dataCovid.label,
      datasets: [(_ref = {
        label: "Jumlah Positif",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(220,53,69, 0.5)",
        borderColor: "rgb(220,53,69)",
        borderCapStyle: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(220,53,69)",
        pointBackgrounColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(220,53,69)",
        pointHoverBorderColor: "rgb(220,220,220,1)"
      }, (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "pointBorderWidth", 2), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "pointRadius", 1), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "pointHitRadius", 10), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "data", dataCovid.positif), _ref), (_ref2 = {
        label: "Jumlah Sembuh",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(25,135,84, 0.5)",
        borderColor: "rgb(25,135,84)",
        borderCapStyle: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(25,135,84)",
        pointBackgrounColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(25,135,84)",
        pointHoverBorderColor: "rgb(220,220,220,1)"
      }, (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, "pointBorderWidth", 2), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, "pointRadius", 1), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, "pointHitRadius", 10), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, "data", dataCovid.sembuh), _ref2), (_ref3 = {
        label: "Jumlah Meninggal",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(108,117,125, 0.5)",
        borderColor: "rgb(108,117,125)",
        borderCapStyle: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(108,117,125)",
        pointBackgrounColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(108,117,125)",
        pointHoverBorderColor: "rgb(220,220,220,1)"
      }, (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, "pointBorderWidth", 2), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, "pointRadius", 1), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, "pointHitRadius", 10), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, "data", dataCovid.meninggal), _ref3), (_ref4 = {
        label: "Jumlah Aktif",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(13,202,240, 0.5)",
        borderColor: "rgb(13,202,240)",
        borderCapStyle: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(13,202,240)",
        pointBackgrounColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(13,202,240)",
        pointHoverBorderColor: "#000"
      }, (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref4, "pointBorderWidth", 2), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref4, "pointRadius", 1), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref4, "pointHitRadius", 10), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref4, "data", dataCovid.active), _ref4)]
    };
  }

  var dataPie = {
    labels: ["Positif", "Sembuh", "Meninggal"],
    datasets: [{
      data: [sum('Confirmed', props), sum('Recovered', props), sum('Deaths', props)],
      backgroundColor: ["#DC3545", "#198754", "#6C757D"],
      hoverBackgroundColor: ["#DC3545", "#198754", "#6C757D"]
    }]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row mb-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-white overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "card-title",
            children: props.isGlobal ? "Statistik Virus Corona Di Dunia" : "Statistik Virus Corona Di Indonesia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 47
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {
              data: data,
              width: 100,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 72
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row mt-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "font-weight-normal mt-2",
                children: "POSITIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mb-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_4__.default, {
                  value: sum('Confirmed', props),
                  displayType: 'text',
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaulValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 64
                }, this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "font-weight-normal mt-2",
                children: "SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mb-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_4__.default, {
                  value: sum('Recovered', props),
                  displayType: 'text',
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaulValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 64
                }, this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "font-weight-normal mt-2",
                children: "MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mb-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_4__.default, {
                  value: sum('Deaths', props),
                  displayType: 'text',
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaulValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 64
                }, this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 9
  }, this);
}
_c = Grafik;

var _c;

$RefreshReg$(_c, "Grafik");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdW0iLCJnZXRBbGxNb250aCIsIkdyYWZpayIsInByb3BzIiwiZGF0YUNvdmlkIiwiZGF0YSIsImlzR2xvYmFsIiwibGFiZWxzIiwibGFiZWwiLCJkYXRhc2V0cyIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb3NpdGlmIiwic2VtYnVoIiwibWVuaW5nZ2FsIiwiYWN0aXZlIiwiZGF0YVBpZSIsImhvdmVyQmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O2VBQzZCQSxtQkFBTyxDQUFDLDZDQUFELEM7SUFBNUJDLEcsWUFBQUEsRztJQUFLQyxXLFlBQUFBLFc7O0FBRUUsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDbEMsTUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBRUEsTUFBSSxDQUFDRixLQUFLLENBQUNHLFFBQVgsRUFBcUI7QUFBQTs7QUFDakJGLGFBQVMsR0FBR0gsV0FBVyxDQUFDRSxLQUFELENBQXZCO0FBQ0FFLFFBQUksR0FBRztBQUNIRSxZQUFNLEVBQUVILFNBQVMsQ0FBQ0ksS0FEZjtBQUVIQyxjQUFRLEVBQUU7QUFFRkQsYUFBSyxFQUFFLGdCQUZMO0FBR0ZFLFlBQUksRUFBRSxLQUhKO0FBSUZD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Qyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUkseUJBQVMsRUFBQyxNQUFkO0FBQUEsdUNBQ0ksOERBQUMsd0RBQUQ7QUFDSSx1QkFBSyxFQUFFSCxHQUFHLENBQUMsUUFBRCxFQUFXRyxLQUFYLENBRGQ7QUFFSSw2QkFBVyxFQUFFLE1BRmpCO0FBR0ksbUNBQWlCLEVBQUUsR0FIdkI7QUFJSSxrQ0FBZ0IsRUFBRSxHQUp0QjtBQUtJLDZCQUFXLEVBQUU7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFXSTtBQUFHLHlCQUFTLEVBQUMsaUJBQWI7QUFBQSx3Q0FBK0I7QUFBTSwyQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlESDtLQTVLdUJELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTg1MDY3NGMwODdmOTU1MDBmYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmUsIFBpZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XHJcbmNvbnN0IHsgc3VtLCBnZXRBbGxNb250aCB9ID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9saWJyYXJ5Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmFmaWsocHJvcHMpIHtcclxuICAgIGxldCBkYXRhQ292aWQgPSBudWxsO1xyXG4gICAgbGV0IGRhdGEgPSBudWxsO1xyXG5cclxuICAgIGlmICghcHJvcHMuaXNHbG9iYWwpIHtcclxuICAgICAgICBkYXRhQ292aWQgPSBnZXRBbGxNb250aChwcm9wcyk7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBkYXRhQ292aWQubGFiZWwsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIFBvc2l0aWZcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjIwLDUzLDY5LCAwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDIyMCw1Myw2OSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiKDIyMCw1Myw2OSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bkNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDIyMCw1Myw2OSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUNvdmlkLnBvc2l0aWZcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIFNlbWJ1aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNSwxMzUsODQsIDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMjUsMTM1LDg0KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2IoMjUsMTM1LDg0KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjUsMTM1LDg0KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2IoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQ292aWQuc2VtYnVoXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBNZW5pbmdnYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTA4LDExNywxMjUsIDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMTA4LDExNywxMjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYigxMDgsMTE3LDEyNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bkNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDEwOCwxMTcsMTI1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2IoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQ292aWQubWVuaW5nZ2FsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBBa3RpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxMywyMDIsMjQwLCAwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDEzLDIwMiwyNDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYigxMywyMDIsMjQwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTMsMjAyLDI0MClcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5hY3RpdmVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhUGllID0ge1xyXG4gICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICBcIlBvc2l0aWZcIixcclxuICAgICAgICAgICAgXCJTZW1idWhcIixcclxuICAgICAgICAgICAgXCJNZW5pbmdnYWxcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3N1bSgnQ29uZmlybWVkJywgcHJvcHMpLCBzdW0oJ1JlY292ZXJlZCcsIHByb3BzKSwgc3VtKCdEZWF0aHMnLCBwcm9wcyldLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjREMzNTQ1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjMTk4NzU0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjNkM3NTdEXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiI0RDMzU0NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzE5ODc1NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzZDNzU3RFwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTEyIGNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9wcy5pc0dsb2JhbCA/IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBEdW5pYVwiIDogXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIEluZG9uZXNpYVwifTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyA8UGllIGRhdGE9e2RhdGFQaWV9IC8+IDogPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXs1MH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlBPU0lUSUY8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oJ0NvbmZpcm1lZCcsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj48L3NwYW4+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+U0VNQlVIPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKCdSZWNvdmVyZWQnLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWxWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPk1FTklOR0dBTDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bSgnRGVhdGhzJywgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9eyd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsVmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtbXV0ZWRcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPjwvc3Bhbj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9