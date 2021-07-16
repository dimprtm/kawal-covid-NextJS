(function() {
var exports = {};
exports.id = "pages/indonesia";
exports.ids = ["pages/indonesia"];
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

/***/ "./pages/indonesia.js":
/*!****************************!*\
  !*** ./pages/indonesia.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Indonesia; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dashboard_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dashboard/IndexPage */ "./components/Dashboard/IndexPage.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Belajar\\NextJS\\kawal-covid\\pages\\indonesia.js";




const config = __webpack_require__(/*! ../config.json */ "./config.json");

class Indonesia extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const data = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config["kawal-corona"].base_url}/indonesia`);
    const items = await data.json();
    const stat = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config["global-api"].base_url}${config["global-api"].total_live}/indonesia`);
    const statData = await stat.json();
    return {
      items,
      statData
    };
  }

  render() {
    const {
      items,
      statData
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_IndexPage__WEBPACK_IMPORTED_MODULE_2__.default, {
      isGlobal: false,
      data: items,
      statistik: statData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
var __webpack_exports__ = (__webpack_exec__("./pages/indonesia.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NhcmRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9HcmFmaWsuanMiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9JbmRleFBhZ2UuanMiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9UYWJsZS5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL3BhZ2VzL2luZG9uZXNpYS5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC8uL3V0aWwvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcIm5leHQvSGVhZFwiIiwid2VicGFjazovL2thd2FsLWNvdmlkL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8va2F3YWwtY292aWQvZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcInJlYWN0LW51bWJlci1mb3JtYXRcIiIsIndlYnBhY2s6Ly9rYXdhbC1jb3ZpZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInN1bSIsInJlcXVpcmUiLCJDYXJkU3RhdHVzIiwicHJvcHMiLCJnZXRBbGxNb250aCIsIkdyYWZpayIsImRhdGFDb3ZpZCIsImRhdGEiLCJpc0dsb2JhbCIsImxhYmVscyIsImxhYmVsIiwiZGF0YXNldHMiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaE9mZnNldCIsImJvcmRlckpvaW5TdHlsZSIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bkNvbG9yIiwicG9pbnRCb3JkZXJXaWR0aCIsInBvaW50SG92ZXJSYWRpdXMiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwicG9pbnRSYWRpdXMiLCJwb2ludEhpdFJhZGl1cyIsInBvc2l0aWYiLCJzZW1idWgiLCJtZW5pbmdnYWwiLCJhY3RpdmUiLCJkYXRhUGllIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjb250ZW5TdHlsZSIsIm1pbkhlaWdodCIsInRvcCIsIm92ZXJmbG93Iiwic3RhdGlzdGlrIiwiVGFibGUiLCJGb290ZXIiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsImNvbG9yIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwid2lkdGgiLCJwYXRobmFtZSIsImNvbmZpZyIsIkluZG9uZXNpYSIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiYmFzZV91cmwiLCJpdGVtcyIsImpzb24iLCJzdGF0IiwidG90YWxfbGl2ZSIsInN0YXREYXRhIiwicmVuZGVyIiwia2V5IiwiZGlyYXdhdCIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQ29uZmlybWVkIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQWN0aXZlIiwibW9udGhFbmciLCJub3dEYXRlIiwiRGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsInZhbHVlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJwdXNoIiwiTWF0aCIsImFicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLE1BQU07QUFBRUE7QUFBRixJQUFVQyxtQkFBTyxDQUFDLDZDQUFELENBQXZCOztBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3RDLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsbURBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLFlBQWY7QUFBQSxzQ0FDSTtBQUFHLHlCQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFJLHlCQUFTLEVBQUMsa0JBQWQ7QUFBQSx1Q0FDSSw4REFBQyw0REFBRDtBQUNJLHVCQUFLLEVBQUVILEdBQUcsQ0FBQyxXQUFELEVBQWNHLEtBQWQsQ0FEZDtBQUVJLDZCQUFXLEVBQUUsTUFGakI7QUFHSSxtQ0FBaUIsRUFBRSxHQUh2QjtBQUlJLGtDQUFnQixFQUFFLEdBSnRCO0FBS0ksNkJBQVcsRUFBRTtBQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQVdJO0FBQUcseUJBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFjSTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLHFDQUF5QjtBQUFLLG1CQUFHLEVBQUMsb0JBQVQ7QUFB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QVNJLEtBQUssQ0FBQ0osSUFBZixDQUFWO0FBQ0FDLE9BQUcsR0FBR0YsT0FBTyxDQUFDTSxPQUFSLEVBQU47QUFDQUgsU0FBSyxHQUFHSCxPQUFPLENBQUNPLFFBQVIsRUFBUjtBQUNBSCxRQUFJLEdBQUdKLE9BQU8sQ0FBQ1EsV0FBUixFQUFQO0FBQ0F2RSxTQUFLLENBQUN3RSxJQUFOLENBQVdQLEdBQUcsR0FBRyxHQUFOLEdBQVlILFFBQVEsQ0FBQ1csSUFBSSxDQUFDQyxHQUFMLENBQVNSLEtBQVQsQ0FBRCxDQUEvQjtBQUNBOUMsVUFBTSxDQUFDb0QsSUFBUCxDQUFZSixLQUFLLENBQUNQLE1BQWxCO0FBQ0EzQyxVQUFNLENBQUNzRCxJQUFQLENBQVlKLEtBQUssQ0FBQ1QsU0FBbEI7QUFDQXhDLGFBQVMsQ0FBQ3FELElBQVYsQ0FBZUosS0FBSyxDQUFDUixNQUFyQjtBQUNBM0MsV0FBTyxDQUFDdUQsSUFBUixDQUFhSixLQUFLLENBQUNWLFNBQW5CO0FBQ0g7O0FBQ0Q3RCxNQUFJLEdBQUc7QUFDSEcsU0FBSyxFQUFFQSxLQURKO0FBRUhvQixVQUFNLEVBQUVBLE1BRkw7QUFHSEYsVUFBTSxFQUFFQSxNQUhMO0FBSUhDLGFBQVMsRUFBRUEsU0FKUjtBQUtIRixXQUFPLEVBQUVBO0FBTE4sR0FBUDtBQU9BLFNBQU9wQixJQUFQO0FBQ0gsQ0FoQ00sQzs7Ozs7Ozs7Ozs7QUN0Q1AsOEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kb25lc2lhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcclxuY29uc3QgeyBzdW0gfSA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvbGlicmFyeScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZFN0YXR1cyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1zLTEgbWUtMSBtYi0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1kYW5nZXIgaW1nLWNhcmQgYm94LXByaW1hcnktc2hhZG93IGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtd2hpdGVcIj5UT1RBTCBQT1NJVElGPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wIG51bWJlci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oJ0NvbmZpcm1lZCcsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LXdoaXRlXCI+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPjxpbWcgc3JjPVwiaW1hZ2VzL3Bvc2l0aWYucG5nXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgYWx0PVwiUG9zaXRpZlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbC02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctc3VjY2VzcyBpbWctY2FyZCBib3gtcHJpbWFyeS1zaGFkb3cgYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC13aGl0ZVwiPlRPVEFMIFNFTUJVSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKCdSZWNvdmVyZWQnLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWxWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC13aGl0ZVwiPk9SQU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj48aW1nIHNyYz1cImltYWdlcy9zZW1idWgucG5nXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgYWx0PVwiUG9zaXRpZlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbC02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctc2Vjb25kYXJ5IGltZy1jYXJkIGJveC1wcmltYXJ5LXNoYWRvdyBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LXdoaXRlXCI+VE9UQUwgTUVOSU5HR0FMPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wIG51bWJlci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oJ0RlYXRocycsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LXdoaXRlXCI+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPjxpbWcgc3JjPVwiaW1hZ2VzL21lbmluZ2dhbC5wbmdcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBhbHQ9XCJQb3NpdGlmXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1pbmZvIGltZy1jYXJkIGJveC1wcmltYXJ5LXNoYWRvdyBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LXdoaXRlXCI+VE9UQUwgQUtUSUY8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTAgbnVtYmVyLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bSgnQWN0aXZlJywgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9eyd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsVmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtd2hpdGVcIj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy1hdXRvXCI+PGltZyBzcmM9XCJpbWFnZXMvYWN0aXZlMi5wbmdcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBhbHQ9XCJQb3NpdGlmXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluZSwgUGllIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcclxuY29uc3QgeyBzdW0sIGdldEFsbE1vbnRoIH0gPSByZXF1aXJlKCcuLi8uLi91dGlsL2xpYnJhcnknKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYWZpayhwcm9wcykge1xyXG4gICAgbGV0IGRhdGFDb3ZpZCA9IG51bGw7XHJcbiAgICBsZXQgZGF0YSA9IG51bGw7XHJcblxyXG4gICAgaWYgKCFwcm9wcy5pc0dsb2JhbCkge1xyXG4gICAgICAgIGRhdGFDb3ZpZCA9IGdldEFsbE1vbnRoKHByb3BzKTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGRhdGFDb3ZpZC5sYWJlbCxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJKdW1sYWggUG9zaXRpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyMjAsNTMsNjksIDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMjIwLDUzLDY5KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2IoMjIwLDUzLDY5KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjIwLDUzLDY5KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUNvdmlkLnBvc2l0aWZcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIFNlbWJ1aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNSwxMzUsODQsIDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMjUsMTM1LDg0KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2IoMjUsMTM1LDg0KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjUsMTM1LDg0KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUNvdmlkLnNlbWJ1aFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJKdW1sYWggTWVuaW5nZ2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDEwOCwxMTcsMTI1LCAwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDEwOCwxMTcsMTI1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2IoMTA4LDExNywxMjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5Db2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYigxMDgsMTE3LDEyNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5tZW5pbmdnYWxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIEFrdGlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDEzLDIwMiwyNDAsIDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMTMsMjAyLDI0MClcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiKDEzLDIwMiwyNDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5Db2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYigxMywyMDIsMjQwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUNvdmlkLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGFQaWUgPSB7XHJcbiAgICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgICAgIFwiUG9zaXRpZlwiLFxyXG4gICAgICAgICAgICBcIlNlbWJ1aFwiLFxyXG4gICAgICAgICAgICBcIk1lbmluZ2dhbFwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbc3VtKCdDb25maXJtZWQnLCBwcm9wcyksIHN1bSgnUmVjb3ZlcmVkJywgcHJvcHMpLCBzdW0oJ0RlYXRocycsIHByb3BzKV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIiNEQzM1NDVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiMxOTg3NTRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiM2Qzc1N0RcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjREMzNTQ1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjMTk4NzU0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjNkM3NTdEXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTIgY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb3BzLmlzR2xvYmFsID8gXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIER1bmlhXCIgOiBcIlN0YXRpc3RpayBWaXJ1cyBDb3JvbmEgRGkgSW5kb25lc2lhXCJ9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbCA/IDxQaWUgZGF0YT17ZGF0YVBpZX0gLz4gOiA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezUwfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+UE9TSVRJRjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bSgnQ29uZmlybWVkJywgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9eyd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsVmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtbXV0ZWRcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPjwvc3Bhbj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG10LTJcIj5TRU1CVUg8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oJ1JlY292ZXJlZCcsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj48L3NwYW4+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+TUVOSU5HR0FMPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKCdEZWF0aHMnLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWxWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vTGF5b3V0L0hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9MYXlvdXQvRm9vdGVyJ1xyXG5pbXBvcnQgQ2FyZFN0YXR1cyBmcm9tICcuL0NhcmRTdGF0dXMnXHJcbmltcG9ydCBHcmFmaWsgZnJvbSAnLi9HcmFmaWsnXHJcbmltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBjb250ZW5TdHlsZSA9IHtcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgICAgIHRvcDogXCI1NnB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjlcIixcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmOVwiIH19PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnQgcG9zaXRpb24tcmVsYXRpdmVcIiBzdHlsZT17Y29udGVuU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IGgyXCI+S0FXQUwgQ09WSUQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBmMThcIj5QYW50YXUgS2FzdXMgQ292aWQgVGVya2luaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhcmRTdGF0dXMgaXNHbG9iYWw9e3Byb3BzLmlzR2xvYmFsfSBkYXRhPXtwcm9wcy5kYXRhID8gcHJvcHMuZGF0YSA6IG51bGx9IC8+XHJcbiAgICAgICAgICAgICAgICA8R3JhZmlrIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH0gZGF0YT17cHJvcHMuZGF0YSA/IHByb3BzLmRhdGEgOiBudWxsfSBzdGF0aXN0aWs9e3Byb3BzLnN0YXRpc3RpayA/IHByb3BzLnN0YXRpc3RpayA6IG51bGx9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgaXNHbG9iYWw9e3Byb3BzLmlzR2xvYmFsfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciByaWdodENvbnRlbnQ9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICBsZWZ0Q29udGVudD17PGRpdiBjbGFzc05hbWU9XCJtcy0yIGZvbnQtd2VpZ2h0LWJvbGRcIj5OaW9taWMtVGVjaCBAMjAyMSBBbGwgUmlnaHQgUmVzZXJ2ZWQ8L2Rpdj59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyIGNvbC14bC0xNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9wcy5pc0dsb2JhbCA/IFwiRGF0YSBLYXN1cyBWaXJ1cyBDb3JvbmEgRGkgRHVuaWFcIiA6IFwiRGF0YSBLYXN1cyBWaXJ1cyBDb3JvbmEgRGkgSW5kb25lc2lhXCJ9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXIgbWItMCB0ZXh0LW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57cHJvcHMuaXNHbG9iYWwgPyBcIk5lZ2FyYVwiIDogXCJQcm92aW5zaVwifTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aWY8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TZW1idWg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NZW5pbmdnYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MS48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVTPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMDM0ODM0ODwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ODM5NDg5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zNDkwOTA0MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yLjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SW5kaWE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEzNDM0NDQ4MzQ4PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD44MzkzNDM0NDg5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zNDkwNzc2ODkwNDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MS48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkphd2EgQmFyYXQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjg0ODwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ODk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIwNDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Mi48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkphd2EgVGVuZ2FoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMzg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjg5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMDQzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjMuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5KYXdhIFRpbXVyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD41NjQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjg3NzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjIxMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcclxuICAgIGlmICghcHJvcHMubGVmdENvbnRlbnQgJiYgIXByb3BzLnJpZ2h0Q29udGVudCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJtYWluLWZvb3RlciBjbGVhcmZpeCBmaXhlZC1ib3R0b20gYmctd2hpdGUgYm9yZGVyLXRvcFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMucmlnaHRDb250ZW50ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgZC1ub25lIGQtc20taW5saW5lXCIgc3R5bGU9e3sgY29sb3I6IFwiIzZjNzU3ZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yaWdodENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3Byb3BzLmxlZnRDb250ZW50ICYmIHByb3BzLmxlZnRDb250ZW50fVxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuRm9vdGVyLlByb3BUeXBlcyA9IHtcclxuICAgIGxlZnRDb250ZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICAgIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZ1xyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJ1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+PHRpdGxlPkthd2FsIENvdmlkPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICAgIDxuYXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyIG5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1saWdodCBuYXZiYXItd2hpdGUgZml4ZWQtdG9wIGJvcmRlci1ib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXMtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGRhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbmlvbWljLWxvZ28ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLWF1dG8gaGlkZGVuLXNtLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiB2YXJpYW50PVwicGlsbHNcIiBkZWZhdWx0QWN0aXZlS2V5PXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImxpbmstMFwiIDogXCJsaW5rLTFcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0wXCIgaHJlZj1cIi9cIj5HbG9iYWw8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJsaW5rLTFcIiBocmVmPVwiL2luZG9uZXNpYVwiPkluZG9uZXNpYTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0luZGV4UGFnZSdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy5qc29uJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRvbmVzaWEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnW1wia2F3YWwtY29yb25hXCJdLmJhc2VfdXJsfS9pbmRvbmVzaWFgKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBmZXRjaChgJHtjb25maWdbXCJnbG9iYWwtYXBpXCJdLmJhc2VfdXJsfSR7Y29uZmlnW1wiZ2xvYmFsLWFwaVwiXS50b3RhbF9saXZlfS9pbmRvbmVzaWFgKTtcclxuICAgICAgICBjb25zdCBzdGF0RGF0YSA9IGF3YWl0IHN0YXQuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgICBzdGF0RGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVtcywgc3RhdERhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEluZGV4UGFnZSBpc0dsb2JhbD17ZmFsc2V9IGRhdGE9e2l0ZW1zfSBzdGF0aXN0aWs9e3N0YXREYXRhfSAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc3VtID0gKGtleSwgcHJvcHMpID0+IHtcclxuICAgIGlmICghcHJvcHMuaXNHbG9iYWwpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdDb25maXJtZWQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ucG9zaXRpZjtcclxuICAgICAgICAgICAgY2FzZSAnUmVjb3ZlcmVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnNlbWJ1aDtcclxuICAgICAgICAgICAgY2FzZSAnRGVhdGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLm1lbmluZ2dhbDtcclxuICAgICAgICAgICAgY2FzZSAnQWN0aXZlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLmRpcmF3YXQ7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NvbmZpcm1lZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQ29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JlY292ZXJlZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuUmVjb3ZlcmVkO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RlYXRocyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuRGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0FjdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxNb250aCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgbW9udGhFbmcgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcbiAgICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF5ID0gbnVsbDtcclxuICAgIGxldCBtb250aCA9IG51bGw7XHJcbiAgICBsZXQgeWVhciA9IG51bGw7XHJcbiAgICBsZXQgbGFiZWwgPSBbXTtcclxuICAgIGxldCBwb3NpdGlmID0gW107XHJcbiAgICBsZXQgc2VtYnVoID0gW107XHJcbiAgICBsZXQgbWVuaW5nZ2FsID0gW107XHJcbiAgICBsZXQgYWN0aXZlID0gW107XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHZhbHVlIG9mIHByb3BzLnN0YXRpc3Rpaykge1xyXG4gICAgICAgIG5vd0RhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5EYXRlKTtcclxuICAgICAgICBkYXkgPSBub3dEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxhYmVsLnB1c2goZGF5ICsgXCIgXCIgKyBtb250aEVuZ1tNYXRoLmFicyhtb250aCldKTtcclxuICAgICAgICBhY3RpdmUucHVzaCh2YWx1ZS5BY3RpdmUpO1xyXG4gICAgICAgIHNlbWJ1aC5wdXNoKHZhbHVlLlJlY292ZXJlZCk7XHJcbiAgICAgICAgbWVuaW5nZ2FsLnB1c2godmFsdWUuRGVhdGhzKTtcclxuICAgICAgICBwb3NpdGlmLnB1c2godmFsdWUuQ29uZmlybWVkKTtcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlLFxyXG4gICAgICAgIHNlbWJ1aDogc2VtYnVoLFxyXG4gICAgICAgIG1lbmluZ2dhbDogbWVuaW5nZ2FsLFxyXG4gICAgICAgIHBvc2l0aWY6IHBvc2l0aWYsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvSGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW51bWJlci1mb3JtYXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==