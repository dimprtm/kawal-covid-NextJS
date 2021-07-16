(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"app":{"version":"1.0"},"kawal-corona":{"base_url":"https://api.kawalcorona.com","indonesia":"/indonesia","provinsi":"/provinsi"},"global-api":{"base_url":"https://api.covid19api.com","total_live":"/total/dayone/country"}}');

/***/ }),

/***/ "./components/Dashboard/CardStatus.js":
/*!********************************************!*\
  !*** ./components/Dashboard/CardStatus.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardStatus; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Dashboard\\CardStatus.js";


const {
  sum
} = __webpack_require__(/*! ../../util/library */ "./util/library.js");

function CardStatus(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row mt-3 ms-1 me-1 mb-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-sm-12 col-md-6 col-l-6 col-xl-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-danger img-card box-primary-shadow border",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-white",
                children: "TOTAL POSITIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: sum('Confirmed', props),
                  displayType: 'text',
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaulValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-white",
                children: "ORANG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ms-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/positif.png",
                width: "50",
                height: "50",
                alt: "Positif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 54
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-sm-12 col-md-6 col-l-6 col-xl-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-success img-card box-primary-shadow border",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-white",
                children: "TOTAL SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: sum('Recovered', props),
                  displayType: 'text',
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaulValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-white",
                children: "ORANG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ms-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/sembuh.png",
                width: "50",
                height: "50",
                alt: "Positif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 54
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-sm-12 col-md-6 col-l-6 col-xl-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-secondary img-card box-primary-shadow border",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-white",
                children: "TOTAL MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: sum('Deaths', props),
                  displayType: 'text',
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaulValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-white",
                children: "ORANG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ms-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/meninggal.png",
                width: "50",
                height: "50",
                alt: "Positif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 54
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-sm-12 col-md-6 col-l-6 col-xl-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card bg-info img-card box-primary-shadow border",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-white",
                children: "TOTAL AKTIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: sum('Active', props),
                  displayType: 'text',
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaulValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mb-0 text-white",
                children: "ORANG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ms-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/active2.png",
                width: "50",
                height: "50",
                alt: "Positif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 54
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Dashboard/Grafik.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Grafik.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Grafik; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Dashboard\\Grafik.js";




const {
  sum,
  getAllMonth
} = __webpack_require__(/*! ../../util/library */ "./util/library.js");

function Grafik(props) {
  let dataCovid = null;
  let data = null;

  if (!props.isGlobal) {
    dataCovid = getAllMonth(props);
    data = {
      labels: dataCovid.label,
      datasets: [{
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
        pointHoverBorderColor: "#000",
        pointBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataCovid.positif
      }, {
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
        pointHoverBorderColor: "#000",
        pointBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataCovid.sembuh
      }, {
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
        pointHoverBorderColor: "#000",
        pointBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataCovid.meninggal
      }, {
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
        pointHoverBorderColor: "#000",
        pointBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataCovid.active
      }]
    };
  }

  const dataPie = {
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
            children: props.isGlobal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Pie, {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 47
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
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
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_3___default()), {
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
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_3___default()), {
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
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_3___default()), {
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

/***/ }),

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
/* harmony import */ var _CardStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardStatus */ "./components/Dashboard/CardStatus.js");
/* harmony import */ var _Grafik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grafik */ "./components/Dashboard/Grafik.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table */ "./components/Dashboard/Table.js");

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Dashboard\\IndexPage.js";





function IndexPage(props) {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Grafik__WEBPACK_IMPORTED_MODULE_4__.default, {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null,
        statistik: props.statistik ? props.statistik : null
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

/***/ }),

/***/ "./components/Dashboard/Table.js":
/*!***************************************!*\
  !*** ./components/Dashboard/Table.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Table; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\components\\Dashboard\\Table.js";

function Table(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-12 col-md-12 col-lg-12 col-xl-14",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title",
              children: props.isGlobal ? "Data Kasus Virus Corona Di Dunia" : "Data Kasus Virus Corona Di Indonesia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "table-responsive",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
                className: "table table-bordered table-hover mb-0 text-nowrap",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "#"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: props.isGlobal ? "Negara" : "Provinsi"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "Positif"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "Sembuh"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 20,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "Meninggal"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                  children: props.isGlobal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "1."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "US"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 29,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "10348348"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "839489"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "34909043"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 27,
                      columnNumber: 49
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "2."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 35,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "India"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "13434448348"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "8393434489"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "349077689043"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 49
                    }, this)]
                  }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "1."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 45,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "Jawa Barat"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "848"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "89"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "2043"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 49
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "2."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "Jawa Tengah"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "238"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "89"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "1043"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 49
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "3."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "Jawa Timur"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "564"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "877"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                        children: "2213"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 49
                    }, this)]
                  }, void 0, true)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
        className: "navbar-nav ms-auto",
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
          className: "ms-auto hidden-sm-down",
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
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\pages\\index.js";




const config = __webpack_require__(/*! ../config.json */ "./config.json");

class Index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const data = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(config["kawal-corona"].base_url);
    const items = await data.json();
    return {
      items
    };
  }

  render() {
    const {
      items
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_IndexPage__WEBPACK_IMPORTED_MODULE_2__.default, {
      isGlobal: true,
      data: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./util/library.js":
/*!*************************!*\
  !*** ./util/library.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": function() { return /* binding */ sum; },
/* harmony export */   "getAllMonth": function() { return /* binding */ getAllMonth; }
/* harmony export */ });
const sum = (key, props) => {
  if (!props.isGlobal) {
    switch (key) {
      case 'Confirmed':
        return props.data[0].positif;

      case 'Recovered':
        return props.data[0].sembuh;

      case 'Deaths':
        return props.data[0].meninggal;

      case 'Active':
        return props.data[0].dirawat;

      default:
        return 0;
    }
  } else {
    switch (key) {
      case 'Confirmed':
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Confirmed;
        }, 0);

      case 'Recovered':
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Recovered;
        }, 0);

      case 'Deaths':
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Deaths;
        }, 0);

      case 'Active':
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Active;
        }, 0);

      default:
        return 0;
    }
  }
};
const getAllMonth = props => {
  const monthEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let nowDate = new Date();
  let day = null;
  let month = null;
  let year = null;
  let label = [];
  let positif = [];
  let sembuh = [];
  let meninggal = [];
  let active = [];
  let data = [];

  for (let value of props.statistik) {
    nowDate = new Date(value.Date);
    day = nowDate.getDate();
    month = nowDate.getMonth();
    year = nowDate.getFullYear();
    label.push(day + " " + monthEng[Math.abs(month)]);
    active.push(value.Active);
    sembuh.push(value.Recovered);
    meninggal.push(value.Deaths);
    positif.push(value.Confirmed);
  }

  data = {
    label: label,
    active: active,
    sembuh: sembuh,
    meninggal: meninggal,
    positif: positif
  };
  return data;
};

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("isomorphic-fetch");;

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

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-chartjs-2");;

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-number-format");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NhcmRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9HcmFmaWsuanMiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9JbmRleFBhZ2UuanMiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9UYWJsZS5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2thd2FsLWNvdmlkLy4vdXRpbC9saWJyYXJ5LmpzIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwibmV4dC9IZWFkXCIiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsic3VtIiwicmVxdWlyZSIsIkNhcmRTdGF0dXMiLCJwcm9wcyIsImdldEFsbE1vbnRoIiwiR3JhZmlrIiwiZGF0YUNvdmlkIiwiZGF0YSIsImlzR2xvYmFsIiwibGFiZWxzIiwibGFiZWwiLCJkYXRhc2V0cyIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludFJhZGl1cyIsInBvaW50SGl0UmFkaXVzIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImFjdGl2ZSIsImRhdGFQaWUiLCJob3ZlckJhY2tncm91bmRDb2xvciIsIkluZGV4UGFnZSIsImNvbnRlblN0eWxlIiwibWluSGVpZ2h0IiwidG9wIiwib3ZlcmZsb3ciLCJzdGF0aXN0aWsiLCJUYWJsZSIsIkZvb3RlciIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50IiwiY29sb3IiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ3aWR0aCIsInBhdGhuYW1lIiwiY29uZmlnIiwiSW5kZXgiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsImJhc2VfdXJsIiwiaXRlbXMiLCJqc29uIiwicmVuZGVyIiwia2V5IiwiZGlyYXdhdCIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQ29uZmlybWVkIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQWN0aXZlIiwibW9udGhFbmciLCJub3dEYXRlIiwiRGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIs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QUssQ0FBQ1AsTUFBbEI7QUFDQXhDLFVBQU0sQ0FBQ21ELElBQVAsQ0FBWUosS0FBSyxDQUFDVCxTQUFsQjtBQUNBckMsYUFBUyxDQUFDa0QsSUFBVixDQUFlSixLQUFLLENBQUNSLE1BQXJCO0FBQ0F4QyxXQUFPLENBQUNvRCxJQUFSLENBQWFKLEtBQUssQ0FBQ1YsU0FBbkI7QUFDSDs7QUFDRDFELE1BQUksR0FBRztBQUNIRyxTQUFLLEVBQUVBLEtBREo7QUFFSG9CLFVBQU0sRUFBRUEsTUFGTDtBQUdIRixVQUFNLEVBQUVBLE1BSEw7QUFJSEMsYUFBUyxFQUFFQSxTQUpSO0FBS0hGLFdBQU8sRUFBRUE7QUFMTixHQUFQO0FBT0EsU0FBT3BCLElBQVA7QUFDSCxDQWhDTSxDOzs7Ozs7Ozs7OztBQ3RDUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XHJcbmNvbnN0IHsgc3VtIH0gPSByZXF1aXJlKCcuLi8uLi91dGlsL2xpYnJhcnknKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRTdGF0dXMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtcy0xIG1lLTEgbWItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbC02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctZGFuZ2VyIGltZy1jYXJkIGJveC1wcmltYXJ5LXNoYWRvdyBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LXdoaXRlXCI+VE9UQUwgUE9TSVRJRjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKCdDb25maXJtZWQnLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWxWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC13aGl0ZVwiPk9SQU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj48aW1nIHNyYz1cImltYWdlcy9wb3NpdGlmLnBuZ1wiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD1cIlBvc2l0aWZcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTYgY29sLWwtNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXN1Y2Nlc3MgaW1nLWNhcmQgYm94LXByaW1hcnktc2hhZG93IGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtd2hpdGVcIj5UT1RBTCBTRU1CVUg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTAgbnVtYmVyLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bSgnUmVjb3ZlcmVkJywgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9eyd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsVmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtd2hpdGVcIj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy1hdXRvXCI+PGltZyBzcmM9XCJpbWFnZXMvc2VtYnVoLnBuZ1wiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD1cIlBvc2l0aWZcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTYgY29sLWwtNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXNlY29uZGFyeSBpbWctY2FyZCBib3gtcHJpbWFyeS1zaGFkb3cgYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC13aGl0ZVwiPlRPVEFMIE1FTklOR0dBTDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKCdEZWF0aHMnLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWxWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC13aGl0ZVwiPk9SQU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj48aW1nIHNyYz1cImltYWdlcy9tZW5pbmdnYWwucG5nXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgYWx0PVwiUG9zaXRpZlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbC02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctaW5mbyBpbWctY2FyZCBib3gtcHJpbWFyeS1zaGFkb3cgYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC13aGl0ZVwiPlRPVEFMIEFLVElGPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wIG51bWJlci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oJ0FjdGl2ZScsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LXdoaXRlXCI+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPjxpbWcgc3JjPVwiaW1hZ2VzL2FjdGl2ZTIucG5nXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgYWx0PVwiUG9zaXRpZlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmUsIFBpZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XHJcbmNvbnN0IHsgc3VtLCBnZXRBbGxNb250aCB9ID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9saWJyYXJ5Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmFmaWsocHJvcHMpIHtcclxuICAgIGxldCBkYXRhQ292aWQgPSBudWxsO1xyXG4gICAgbGV0IGRhdGEgPSBudWxsO1xyXG5cclxuICAgIGlmICghcHJvcHMuaXNHbG9iYWwpIHtcclxuICAgICAgICBkYXRhQ292aWQgPSBnZXRBbGxNb250aChwcm9wcyk7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBkYXRhQ292aWQubGFiZWwsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIFBvc2l0aWZcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjIwLDUzLDY5LCAwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDIyMCw1Myw2OSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiKDIyMCw1Myw2OSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bkNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDIyMCw1Myw2OSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5wb3NpdGlmXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBTZW1idWhcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjUsMTM1LDg0LCAwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDI1LDEzNSw4NClcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiKDI1LDEzNSw4NClcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bkNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1LDEzNSw4NClcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5zZW1idWhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIE1lbmluZ2dhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxMDgsMTE3LDEyNSwgMC41KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYigxMDgsMTE3LDEyNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiKDEwOCwxMTcsMTI1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTA4LDExNywxMjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQ292aWQubWVuaW5nZ2FsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBBa3RpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxMywyMDIsMjQwLCAwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDEzLDIwMiwyNDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYigxMywyMDIsMjQwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTMsMjAyLDI0MClcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5hY3RpdmVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhUGllID0ge1xyXG4gICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICBcIlBvc2l0aWZcIixcclxuICAgICAgICAgICAgXCJTZW1idWhcIixcclxuICAgICAgICAgICAgXCJNZW5pbmdnYWxcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3N1bSgnQ29uZmlybWVkJywgcHJvcHMpLCBzdW0oJ1JlY292ZXJlZCcsIHByb3BzKSwgc3VtKCdEZWF0aHMnLCBwcm9wcyldLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjREMzNTQ1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjMTk4NzU0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjNkM3NTdEXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiI0RDMzU0NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzE5ODc1NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIzZDNzU3RFwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTEyIGNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9wcy5pc0dsb2JhbCA/IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBEdW5pYVwiIDogXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIEluZG9uZXNpYVwifTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyA8UGllIGRhdGE9e2RhdGFQaWV9IC8+IDogPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXs1MH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlBPU0lUSUY8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oJ0NvbmZpcm1lZCcsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj48L3NwYW4+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+U0VNQlVIPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKCdSZWNvdmVyZWQnLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWxWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPk1FTklOR0dBTDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bSgnRGVhdGhzJywgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9eyd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsVmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtbXV0ZWRcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPjwvc3Bhbj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL0xheW91dC9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vTGF5b3V0L0Zvb3RlcidcclxuaW1wb3J0IENhcmRTdGF0dXMgZnJvbSAnLi9DYXJkU3RhdHVzJ1xyXG5pbXBvcnQgR3JhZmlrIGZyb20gJy4vR3JhZmlrJ1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9UYWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZShwcm9wcykge1xyXG4gICAgY29uc3QgY29udGVuU3R5bGUgPSB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjkwdmhcIixcclxuICAgICAgICB0b3A6IFwiNTZweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmMWY5XCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjlcIiB9fT5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50IHBvc2l0aW9uLXJlbGF0aXZlXCIgc3R5bGU9e2NvbnRlblN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSBoMlwiPktBV0FMIENPVklEPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgZjE4XCI+UGFudGF1IEthc3VzIENvdmlkIFRlcmtpbmk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDYXJkU3RhdHVzIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH0gZGF0YT17cHJvcHMuZGF0YSA/IHByb3BzLmRhdGEgOiBudWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgPEdyYWZpayBpc0dsb2JhbD17cHJvcHMuaXNHbG9iYWx9IGRhdGE9e3Byb3BzLmRhdGEgPyBwcm9wcy5kYXRhIDogbnVsbH0gc3RhdGlzdGlrPXtwcm9wcy5zdGF0aXN0aWsgPyBwcm9wcy5zdGF0aXN0aWsgOiBudWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgcmlnaHRDb250ZW50PXtcIlwifVxyXG4gICAgICAgICAgICAgICAgbGVmdENvbnRlbnQ9ezxkaXYgY2xhc3NOYW1lPVwibXMtMiBmb250LXdlaWdodC1ib2xkXCI+TmlvbWljLVRlY2ggQDIwMjEgQWxsIFJpZ2h0IFJlc2VydmVkPC9kaXY+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMiBjb2wteGwtMTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvcHMuaXNHbG9iYWwgPyBcIkRhdGEgS2FzdXMgVmlydXMgQ29yb25hIERpIER1bmlhXCIgOiBcIkRhdGEgS2FzdXMgVmlydXMgQ29yb25hIERpIEluZG9uZXNpYVwifTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIG1iLTAgdGV4dC1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3Byb3BzLmlzR2xvYmFsID8gXCJOZWdhcmFcIiA6IFwiUHJvdmluc2lcIn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3NpdGlmPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2VtYnVoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWVuaW5nZ2FsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5VUzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTAzNDgzNDg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjgzOTQ4OTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzQ5MDkwNDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Mi48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkluZGlhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMzQzNDQ0ODM0ODwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ODM5MzQzNDQ4OTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzQ5MDc3Njg5MDQzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5KYXdhIEJhcmF0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD44NDg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjg5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMDQzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5KYXdhIFRlbmdhaDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjM4PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD44OTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTA0MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zLjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SmF3YSBUaW11cjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NTY0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD44Nzc8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIyMTM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XHJcbiAgICBpZiAoIXByb3BzLmxlZnRDb250ZW50ICYmICFwcm9wcy5yaWdodENvbnRlbnQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWFpbi1mb290ZXIgY2xlYXJmaXggZml4ZWQtYm90dG9tIGJnLXdoaXRlIGJvcmRlci10b3BcIj5cclxuICAgICAgICAgICAge3Byb3BzLnJpZ2h0Q29udGVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGQtbm9uZSBkLXNtLWlubGluZVwiIHN0eWxlPXt7IGNvbG9yOiBcIiM2Yzc1N2RcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucmlnaHRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtwcm9wcy5sZWZ0Q29udGVudCAmJiBwcm9wcy5sZWZ0Q29udGVudH1cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbkZvb3Rlci5Qcm9wVHlwZXMgPSB7XHJcbiAgICBsZWZ0Q29udGVudDogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmdcclxufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPjx0aXRsZT5LYXdhbCBDb3ZpZDwvdGl0bGU+PC9IZWFkPlxyXG4gICAgICAgICAgICA8bmF2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItbGlnaHQgbmF2YmFyLXdoaXRlIGZpeGVkLXRvcCBib3JkZXItYm90dG9tXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1zLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXdpZGdldD1cInB1c2htZW51XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL25pb21pYy1sb2dvLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy1hdXRvIGhpZGRlbi1zbS1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgdmFyaWFudD1cInBpbGxzXCIgZGVmYXVsdEFjdGl2ZUtleT17cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gXCJsaW5rLTBcIiA6IFwibGluay0xXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMFwiIGhyZWY9XCIvXCI+R2xvYmFsPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0xXCIgaHJlZj1cIi9pbmRvbmVzaWFcIj5JbmRvbmVzaWE8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZC9JbmRleFBhZ2UnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcuanNvbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goY29uZmlnW1wia2F3YWwtY29yb25hXCJdLmJhc2VfdXJsKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbmRleFBhZ2UgaXNHbG9iYWw9e3RydWV9IGRhdGE9e2l0ZW1zfSAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc3VtID0gKGtleSwgcHJvcHMpID0+IHtcclxuICAgIGlmICghcHJvcHMuaXNHbG9iYWwpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdDb25maXJtZWQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ucG9zaXRpZjtcclxuICAgICAgICAgICAgY2FzZSAnUmVjb3ZlcmVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnNlbWJ1aDtcclxuICAgICAgICAgICAgY2FzZSAnRGVhdGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLm1lbmluZ2dhbDtcclxuICAgICAgICAgICAgY2FzZSAnQWN0aXZlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLmRpcmF3YXQ7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NvbmZpcm1lZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQ29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JlY292ZXJlZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuUmVjb3ZlcmVkO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RlYXRocyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuRGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0FjdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxNb250aCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgbW9udGhFbmcgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcbiAgICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF5ID0gbnVsbDtcclxuICAgIGxldCBtb250aCA9IG51bGw7XHJcbiAgICBsZXQgeWVhciA9IG51bGw7XHJcbiAgICBsZXQgbGFiZWwgPSBbXTtcclxuICAgIGxldCBwb3NpdGlmID0gW107XHJcbiAgICBsZXQgc2VtYnVoID0gW107XHJcbiAgICBsZXQgbWVuaW5nZ2FsID0gW107XHJcbiAgICBsZXQgYWN0aXZlID0gW107XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHZhbHVlIG9mIHByb3BzLnN0YXRpc3Rpaykge1xyXG4gICAgICAgIG5vd0RhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5EYXRlKTtcclxuICAgICAgICBkYXkgPSBub3dEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxhYmVsLnB1c2goZGF5ICsgXCIgXCIgKyBtb250aEVuZ1tNYXRoLmFicyhtb250aCldKTtcclxuICAgICAgICBhY3RpdmUucHVzaCh2YWx1ZS5BY3RpdmUpO1xyXG4gICAgICAgIHNlbWJ1aC5wdXNoKHZhbHVlLlJlY292ZXJlZCk7XHJcbiAgICAgICAgbWVuaW5nZ2FsLnB1c2godmFsdWUuRGVhdGhzKTtcclxuICAgICAgICBwb3NpdGlmLnB1c2godmFsdWUuQ29uZmlybWVkKTtcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlLFxyXG4gICAgICAgIHNlbWJ1aDogc2VtYnVoLFxyXG4gICAgICAgIG1lbmluZ2dhbDogbWVuaW5nZ2FsLFxyXG4gICAgICAgIHBvc2l0aWY6IHBvc2l0aWYsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvSGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW51bWJlci1mb3JtYXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==