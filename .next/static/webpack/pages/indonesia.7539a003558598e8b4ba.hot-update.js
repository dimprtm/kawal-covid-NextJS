self["webpackHotUpdate_N_E"]("pages/indonesia",{

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
    var _ref;

    dataCovid = getAllMonth(props);
    data = {
      labels: ["2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar", "8 Mar", "9 Mar", "10 Mar", "11 Mar", "12 Mar"],
      datasets: [(_ref = {
        label: "Jumlah Positif",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(229, 56, 50, 0.4)",
        borderColor: "rgba(229,56, 50,1)",
        borderCapStyle: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(229,56,50,1)",
        pointBackgrounColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(229,56,50,1)",
        pointHoverBorderColor: "rgb(220,220,220,1)"
      }, (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "pointBorderWidth", 2), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "pointRadius", 1), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "pointHitRadius", 10), (0,D_Belajar_NextJS_kawal_covid_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, "data", dataCovid), _ref)]
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
            lineNumber: 66,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 47
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {
              data: data,
              width: 100,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 72
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
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
                lineNumber: 74,
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
                  lineNumber: 76,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 64
                }, this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "font-weight-normal mt-2",
                children: "SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
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
                  lineNumber: 89,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 64
                }, this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "font-weight-normal mt-2",
                children: "MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
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
                  lineNumber: 102,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 64
                }, this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdW0iLCJnZXRBbGxNb250aCIsIkdyYWZpayIsInByb3BzIiwiZGF0YUNvdmlkIiwiZGF0YSIsImlzR2xvYmFsIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJkYXRhUGllIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7ZUFDNkJBLG1CQUFPLENBQUMsNkNBQUQsQztJQUE1QkMsRyxZQUFBQSxHO0lBQUtDLFcsWUFBQUEsVzs7QUFFRSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNsQyxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQSxNQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBWCxFQUFxQjtBQUFBOztBQUNqQkYsYUFBUyxHQUFHSCxXQUFXLENBQUNFLEtBQUQsQ0FBdkI7QUFDQUUsUUFBSSxHQUFHO0FBQ0hFLFlBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDLE9BQXJDLEVBQThDLE9BQTlDLEVBQXVELE9BQXZELEVBQWdFLE9BQWhFLEVBQXlFLFFBQXpFLEVBQW1GLFFBQW5GLEVBQTZG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QUFDLGlCQUFiO0FBQUEsd0NBQStCO0FBQU0sMkJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5REg7S0FoSHVCRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZG9uZXNpYS43NTM5YTAwMzU1ODU5OGU4YjRiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluZSwgUGllIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcclxuY29uc3QgeyBzdW0sIGdldEFsbE1vbnRoIH0gPSByZXF1aXJlKCcuLi8uLi91dGlsL2xpYnJhcnknKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYWZpayhwcm9wcykge1xyXG4gICAgbGV0IGRhdGFDb3ZpZCA9IG51bGw7XHJcbiAgICBsZXQgZGF0YSA9IG51bGw7XHJcblxyXG4gICAgaWYgKCFwcm9wcy5pc0dsb2JhbCkge1xyXG4gICAgICAgIGRhdGFDb3ZpZCA9IGdldEFsbE1vbnRoKHByb3BzKTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFtcIjIgTWFyXCIsIFwiMyBNYXJcIiwgXCI0IE1hclwiLCBcIjUgTWFyXCIsIFwiNiBNYXJcIiwgXCI3IE1hclwiLCBcIjggTWFyXCIsIFwiOSBNYXJcIiwgXCIxMCBNYXJcIiwgXCIxMSBNYXJcIiwgXCIxMiBNYXJcIl0sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIFBvc2l0aWZcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyOSwgNTYsIDUwLCAwLjQpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyMjksNTYsIDUwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoMjI5LDU2LDUwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5Db2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjI5LDU2LDUwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYigyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YVBpZSA9IHtcclxuICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgXCJQb3NpdGlmXCIsXHJcbiAgICAgICAgICAgIFwiU2VtYnVoXCIsXHJcbiAgICAgICAgICAgIFwiTWVuaW5nZ2FsXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtzdW0oJ0NvbmZpcm1lZCcsIHByb3BzKSwgc3VtKCdSZWNvdmVyZWQnLCBwcm9wcyksIHN1bSgnRGVhdGhzJywgcHJvcHMpXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiI0RDMzU0NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzE5ODc1NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzZDNzU3RFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIiNEQzM1NDVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiMxOTg3NTRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiM2Qzc1N0RcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMiBjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXdoaXRlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvcHMuaXNHbG9iYWwgPyBcIlN0YXRpc3RpayBWaXJ1cyBDb3JvbmEgRGkgRHVuaWFcIiA6IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBJbmRvbmVzaWFcIn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsID8gPFBpZSBkYXRhPXtkYXRhUGllfSAvPiA6IDxMaW5lIGRhdGE9e2RhdGF9IHdpZHRoPXsxMDB9IGhlaWdodD17NTB9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG10LTJcIj5QT1NJVElGPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKCdDb25maXJtZWQnLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWxWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlNFTUJVSDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bSgnUmVjb3ZlcmVkJywgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9eyd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsVmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtbXV0ZWRcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPjwvc3Bhbj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG10LTJcIj5NRU5JTkdHQUw8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oJ0RlYXRocycsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj48L3NwYW4+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==