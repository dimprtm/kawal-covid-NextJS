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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Dashboard\\Grafik.js";


function Grafik(props) {
  var dataCovid = null;
  var data = null;

  if (!props.isGlobal) {
    var _ref;

    dataCovid = [12, 4, 35, 10, 6, 7, 22, 7, 67, 5, 54];
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
      data: [2000, 1854, 1234],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      hoverBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"]
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
            lineNumber: 64,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 47
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {
              data: data,
              width: 100,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 72
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row mt-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "font-weight-normal mt-2",
                children: "POSITIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mb-1",
                children: "2000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-muted"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbIkdyYWZpayIsInByb3BzIiwiZGF0YUNvdmlkIiwiZGF0YSIsImlzR2xvYmFsIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJkYXRhUGllIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ2xDLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLE1BQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFYLEVBQXFCO0FBQUE7O0FBQ2pCRixhQUFTLEdBQUcsQ0FBQyxFQUFELEVBQUssQ0FBTCxFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLEVBQTdCLEVBQWlDLENBQWpDLEVBQW9DLEVBQXBDLENBQVo7QUFDQUMsUUFBSSxHQUFHO0FBQ0hFLFlBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDLE9BQXJDLEVBQThDLE9BQTlDLEVBQXVELE9BQXZELEVBQWdFLE9BQWhFLEVBQXlFLFFBQXpFLEVBQW1GLFFBQW5GLEVBQTZGLFFBQTdGLENBREw7QUFFSEMsY0FBUSxFQUFFO0FBRUZDLGFBQUssRUFBRSxnQkFGTDtBQUdGQyxZQUFJLEVBQUUsS0FISjtBQUlGQyxtQkFBVyxFQUFFLEdBSlg7QUFLRkMsdUJBQWUsRUFBRSx3QkFMZjtBQU1GQyxtQkFBVyxFQUFFLG9CQU5YO0FBT0ZDLHNCQUFjLEVBQUUsRUFQZDtBQVFGQyx3QkFBZ0IsRUFBRSxHQVJoQjtBQVNGQyx1QkFBZSxFQUFFLE9BVGY7QUFVRkMsd0JBQWdCLEVBQUUsbUJBVmhCO0FBV0ZDLDJCQUFtQixFQUFFLE1BWG5CO0FBWUZDLHdCQUFnQixFQUFFLENBWmhCO0FBYUZDLHdCQUFnQixFQUFFLEVBYmhCO0FBY0ZDLGlDQUF5QixFQUFFLG1CQWR6QjtBQWVGQyw2QkFBcUIsRUFBRTtBQWZyQiwrSkFnQmdCLENBaEJoQixvSkFpQlcsQ0FqQlgsdUpBa0JjLEVBbEJkLDZJQW1CSWxCLFNBbkJKO0FBRlAsS0FBUDtBQXlCSDs7QUFDRCxNQUFNbUIsT0FBTyxHQUFHO0FBQ1poQixVQUFNLEVBQUUsQ0FDSixTQURJLEVBRUosUUFGSSxFQUdKLFdBSEksQ0FESTtBQU1aQyxZQUFRLEVBQUUsQ0FDTjtBQUNJSCxVQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FEVjtBQUVJTyxxQkFBZSxFQUFFLENBQ2IsU0FEYSxFQUViLFNBRmEsRUFHYixTQUhhLENBRnJCO0FBT0lZLDBCQUFvQixFQUFFLENBQ2xCLFNBRGtCLEVBRWxCLFNBRmtCLEVBR2xCLFNBSGtCO0FBUDFCLEtBRE07QUFORSxHQUFoQjtBQXVCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMseUNBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNJO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEsc0JBQTRCckIsS0FBSyxDQUFDRyxRQUFOLEdBQWlCLGlDQUFqQixHQUFxRDtBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxzQkFDS0gsS0FBSyxDQUFDRyxRQUFOLGdCQUFpQiw4REFBQyxnREFBRDtBQUFLLGtCQUFJLEVBQUVpQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWpCLGdCQUEwQyw4REFBQyxpREFBRDtBQUFNLGtCQUFJLEVBQUVsQixJQUFaO0FBQWtCLG1CQUFLLEVBQUUsR0FBekI7QUFBOEIsb0JBQU0sRUFBRTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRC9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxpQkFBZjtBQUFBLHNDQUNJO0FBQUkseUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUkseUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBRyx5QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIO0tBOUV1QkgsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRvbmVzaWEuMjg4ZGE1OTAzNjAzZDJkYWNjMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluZSwgUGllIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhZmlrKHByb3BzKSB7XHJcbiAgICBsZXQgZGF0YUNvdmlkID0gbnVsbDtcclxuICAgIGxldCBkYXRhID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIXByb3BzLmlzR2xvYmFsKSB7XHJcbiAgICAgICAgZGF0YUNvdmlkID0gWzEyLCA0LCAzNSwgMTAsIDYsIDcsIDIyLCA3LCA2NywgNSwgNTRdO1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiMiBNYXJcIiwgXCIzIE1hclwiLCBcIjQgTWFyXCIsIFwiNSBNYXJcIiwgXCI2IE1hclwiLCBcIjcgTWFyXCIsIFwiOCBNYXJcIiwgXCI5IE1hclwiLCBcIjEwIE1hclwiLCBcIjExIE1hclwiLCBcIjEyIE1hclwiXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJKdW1sYWggUG9zaXRpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjI5LCA1NiwgNTAsIDAuNClcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDIyOSw1NiwgNTAsMSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiYSgyMjksNTYsNTAsMSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bkNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjksNTYsNTAsMSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUNvdmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhUGllID0ge1xyXG4gICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICBcIlBvc2l0aWZcIixcclxuICAgICAgICAgICAgXCJTZW1idWhcIixcclxuICAgICAgICAgICAgXCJNZW5pbmdnYWxcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogWzIwMDAsIDE4NTQsIDEyMzRdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjZmY2Mzg0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjMzZhMmViXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjZmZjZTU2XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiI2ZmNjM4NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzM2YTJlYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiI2ZmY2U1NlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTEyIGNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9wcy5pc0dsb2JhbCA/IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBEdW5pYVwiIDogXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIEluZG9uZXNpYVwifTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyA8UGllIGRhdGE9e2RhdGFQaWV9IC8+IDogPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXs1MH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlBPU0lUSUY8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+MjAwMDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=