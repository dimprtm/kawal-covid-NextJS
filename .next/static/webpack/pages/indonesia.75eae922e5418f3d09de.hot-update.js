self["webpackHotUpdate_N_E"]("pages/indonesia",{

/***/ "./components/Dashboard/Grafik.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Grafik.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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


/***/ }),

/***/ "./components/Dashboard/IndexPage.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/IndexPage.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Header */ "./components/Layout/Header.js");
/* harmony import */ var _Layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _CardStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardStatus */ "./components/Dashboard/CardStatus.js");
/* harmony import */ var _Grafik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grafik */ "./components/Dashboard/Grafik.js");
/* harmony import */ var _Grafik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Grafik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table */ "./components/Dashboard/Table.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Dashboard\\IndexPage.js";





function IndexPage(props) {
  var contenStyle = {
    minHeight: "90vh",
    top: "56px",
    backgroundColor: "#f1f1f9",
    overflow: "hidden"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      backgroundColor: "#f1f1f9"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container content position-relative",
      style: contenStyle,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex justify-content-center text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-5 h2",
            children: "KAWAL COVID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex justify-content-center text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-3 f18",
            children: "Pantau Kasus Covid Terkini"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardStatus__WEBPACK_IMPORTED_MODULE_3__.default, {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Grafik__WEBPACK_IMPORTED_MODULE_4___default()), {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
        isGlobal: props.isGlobal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {
      rightContent: "",
      leftContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ms-2 font-weight-bold",
        children: "Niomic-Tech @2021 All Right Reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 30
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
_c = IndexPage;

var _c;

$RefreshReg$(_c, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvSW5kZXhQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInByb3BzIiwiY29udGVuU3R5bGUiLCJtaW5IZWlnaHQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvdyIsImlzR2xvYmFsIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUNyQyxNQUFNQyxXQUFXLEdBQUc7QUFDaEJDLGFBQVMsRUFBRSxNQURLO0FBRWhCQyxPQUFHLEVBQUUsTUFGVztBQUdoQkMsbUJBQWUsRUFBRSxTQUhEO0FBSWhCQyxZQUFRLEVBQUU7QUFKTSxHQUFwQjtBQU9BLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVELHFCQUFlLEVBQUU7QUFBbkIsS0FBWjtBQUFBLDRCQUNJLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQXFELFdBQUssRUFBRUgsV0FBNUQ7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxrREFBZjtBQUFBLGlDQUNJO0FBQUcscUJBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxrREFBZjtBQUFBLGlDQUNJO0FBQUcscUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVNJLDhEQUFDLGdEQUFEO0FBQVksZ0JBQVEsRUFBRUQsS0FBSyxDQUFDTSxRQUE1QjtBQUFzQyxZQUFJLEVBQUVOLEtBQUssQ0FBQ08sSUFBTixHQUFhUCxLQUFLLENBQUNPLElBQW5CLEdBQTBCO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSixlQVVJLDhEQUFDLGdEQUFEO0FBQVEsZ0JBQVEsRUFBRVAsS0FBSyxDQUFDTSxRQUF4QjtBQUFrQyxZQUFJLEVBQUVOLEtBQUssQ0FBQ08sSUFBTixHQUFhUCxLQUFLLENBQUNPLElBQW5CLEdBQTBCO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixlQVdJLDhEQUFDLDJDQUFEO0FBQU8sZ0JBQVEsRUFBRVAsS0FBSyxDQUFDTTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFlSSw4REFBQyxtREFBRDtBQUFRLGtCQUFZLEVBQUUsRUFBdEI7QUFDSSxpQkFBVyxlQUFFO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7S0E3QnVCUCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZG9uZXNpYS43NWVhZTkyMmU1NDE4ZjNkMDlkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9MYXlvdXQvSGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0xheW91dC9Gb290ZXInXHJcbmltcG9ydCBDYXJkU3RhdHVzIGZyb20gJy4vQ2FyZFN0YXR1cydcclxuaW1wb3J0IEdyYWZpayBmcm9tICcuL0dyYWZpaydcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4vVGFibGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UocHJvcHMpIHtcclxuICAgIGNvbnN0IGNvbnRlblN0eWxlID0ge1xyXG4gICAgICAgIG1pbkhlaWdodDogXCI5MHZoXCIsXHJcbiAgICAgICAgdG9wOiBcIjU2cHhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmOVwiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjFmMWY5XCIgfX0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudCBwb3NpdGlvbi1yZWxhdGl2ZVwiIHN0eWxlPXtjb250ZW5TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgaDJcIj5LQVdBTCBDT1ZJRDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIGYxOFwiPlBhbnRhdSBLYXN1cyBDb3ZpZCBUZXJraW5pPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFN0YXR1cyBpc0dsb2JhbD17cHJvcHMuaXNHbG9iYWx9IGRhdGE9e3Byb3BzLmRhdGEgPyBwcm9wcy5kYXRhIDogbnVsbH0gLz5cclxuICAgICAgICAgICAgICAgIDxHcmFmaWsgaXNHbG9iYWw9e3Byb3BzLmlzR2xvYmFsfSBkYXRhPXtwcm9wcy5kYXRhID8gcHJvcHMuZGF0YSA6IG51bGx9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgaXNHbG9iYWw9e3Byb3BzLmlzR2xvYmFsfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciByaWdodENvbnRlbnQ9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICBsZWZ0Q29udGVudD17PGRpdiBjbGFzc05hbWU9XCJtcy0yIGZvbnQtd2VpZ2h0LWJvbGRcIj5OaW9taWMtVGVjaCBAMjAyMSBBbGwgUmlnaHQgUmVzZXJ2ZWQ8L2Rpdj59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9