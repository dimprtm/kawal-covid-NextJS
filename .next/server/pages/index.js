(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Dashboard/IndexPage.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/IndexPage.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Header */ "./components/Layout/Header.js");
/* harmony import */ var _Layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Footer */ "./components/Layout/Footer.js");

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Dashboard\\IndexPage.js";


function IndexPage() {
  const contenStyle = {
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
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container content position-relative",
      style: contenStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex justify-content-center text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-5 h2",
            children: "KAWAL COVID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex justify-content-center text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-3 f18",
            children: "Pantau Kasus Covid Terkini"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {
      rightContent: "",
      leftContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ml-2 font-weight-bold",
        children: "Niomic-Tech @2021 All Right Reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 30
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Layout/Footer.js":
/*!*************************************!*\
  !*** ./components/Layout/Footer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Layout\\Footer.js";

function Footer(props) {
  if (!props.leftContent && !props.rightContent) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: "main-footer clearfix fixed-bottom bg-white border-top",
    children: [props.rightContent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "float-right d-none d-sm-inline",
      style: {
        color: "#6c757d"
      },
      children: props.rightContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this), props.leftContent && props.leftContent]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
Footer.PropTypes = {
  leftContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  rightContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./components/Layout/Header.js":
/*!*************************************!*\
  !*** ./components/Layout/Header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Layout\\Header.js";



function Header(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Kawal Covid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "main-header navbar navbar-expand navbar-light navbar-white fixed-top border-bottom",
      style: {
        backgroundColor: "white"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "nav-link",
            "data-widget": "pushmenu",
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "images/niomic-logo.png",
              style: {
                width: "100px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ml-auto hidden-sm-down",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default()), {
            variant: "pills",
            defaultActiveKey: router.pathname == "/" ? "link-0" : "link-1",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Item), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {
                eventKey: "link-0",
                href: "/",
                children: "Global"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Item), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default().Link), {
                eventKey: "link-1",
                href: "/indonesia",
                children: "Indonesia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dashboard_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dashboard/IndexPage */ "./components/Dashboard/IndexPage.js");

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\pages\\index.js";


class Index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_IndexPage__WEBPACK_IMPORTED_MODULE_2__.default, {
      isGlobal: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Nav");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0luZGV4UGFnZS5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwibmV4dC9IZWFkXCIiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImNvbnRlblN0eWxlIiwibWluSGVpZ2h0IiwidG9wIiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3ciLCJGb290ZXIiLCJwcm9wcyIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50IiwiY29sb3IiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ3aWR0aCIsInBhdGhuYW1lIiwiSW5kZXgiLCJDb21wb25lbnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFDaEMsUUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxhQUFTLEVBQUUsTUFESztBQUVoQkMsT0FBRyxFQUFF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LG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9MYXlvdXQvSGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0xheW91dC9Gb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW5TdHlsZSA9IHtcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgICAgIHRvcDogXCI1NnB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjlcIixcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmOVwiIH19PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnQgcG9zaXRpb24tcmVsYXRpdmVcIiBzdHlsZT17Y29udGVuU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IGgyXCI+S0FXQUwgQ09WSUQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBmMThcIj5QYW50YXUgS2FzdXMgQ292aWQgVGVya2luaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciByaWdodENvbnRlbnQ9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICBsZWZ0Q29udGVudD17PGRpdiBjbGFzc05hbWU9XCJtbC0yIGZvbnQtd2VpZ2h0LWJvbGRcIj5OaW9taWMtVGVjaCBAMjAyMSBBbGwgUmlnaHQgUmVzZXJ2ZWQ8L2Rpdj59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcclxuICAgIGlmICghcHJvcHMubGVmdENvbnRlbnQgJiYgIXByb3BzLnJpZ2h0Q29udGVudCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJtYWluLWZvb3RlciBjbGVhcmZpeCBmaXhlZC1ib3R0b20gYmctd2hpdGUgYm9yZGVyLXRvcFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMucmlnaHRDb250ZW50ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgZC1ub25lIGQtc20taW5saW5lXCIgc3R5bGU9e3sgY29sb3I6IFwiIzZjNzU3ZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yaWdodENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3Byb3BzLmxlZnRDb250ZW50ICYmIHByb3BzLmxlZnRDb250ZW50fVxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuRm9vdGVyLlByb3BUeXBlcyA9IHtcclxuICAgIGxlZnRDb250ZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICAgIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZ1xyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJ1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+PHRpdGxlPkthd2FsIENvdmlkPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICAgIDxuYXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyIG5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1saWdodCBuYXZiYXItd2hpdGUgZml4ZWQtdG9wIGJvcmRlci1ib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXdpZGdldD1cInB1c2htZW51XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL25pb21pYy1sb2dvLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIGhpZGRlbi1zbS1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgdmFyaWFudD1cInBpbGxzXCIgZGVmYXVsdEFjdGl2ZUtleT17cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gXCJsaW5rLTBcIiA6IFwibGluay0xXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMFwiIGhyZWY9XCIvXCI+R2xvYmFsPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0xXCIgaHJlZj1cIi9pbmRvbmVzaWFcIj5JbmRvbmVzaWE8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZC9JbmRleFBhZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEluZGV4UGFnZSBpc0dsb2JhbD17dHJ1ZX0gLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9IZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==