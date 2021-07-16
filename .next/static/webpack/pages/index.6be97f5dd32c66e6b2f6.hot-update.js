self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./util/library.js":
/*!*************************!*\
  !*** ./util/library.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": function() { return /* binding */ sum; },
/* harmony export */   "getAllMonth": function() { return /* binding */ getAllMonth; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sum = function sum(key, props) {
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
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Confirmed;
        }, 0);

      case 'Recovered':
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Recovered;
        }, 0);

      case 'Deaths':
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Deaths;
        }, 0);

      case 'Active':
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Active;
        }, 0);

      default:
        return 0;
    }
  }
};
var getAllMonth = function getAllMonth(props) {
  var monthEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var nowDate = new Date();
  var day = null;
  var month = null;
  var year = null;
  var label = [];
  var positif = [];
  var sembuh = [];
  var meninggal = [];
  var active = [];
  var data = [];

  var _iterator = _createForOfIteratorHelper(props.statistik),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      nowDate = new Date(value.Date);
      day = nowDate.getDate();
      month = nowDate.getMonth();
      year = nowDate.getFullYear();
      label.push(day + " " + monthEng[Math.abs(month)]);
      active.push(value.Active);
      sembuh.push(value.Recovered);
      meninggal.push(value.Deaths);
      postif.push(value.Confirmed);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  data = {
    label: label,
    active: active,
    sembuh: sembuh,
    meningggal: meningggal,
    positif: positif
  };
  return data;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9saWJyYXJ5LmpzIl0sIm5hbWVzIjpbInN1bSIsImtleSIsInByb3BzIiwiaXNHbG9iYWwiLCJkYXRhIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiLCJyZWR1Y2UiLCJhIiwiYXR0cmlidXRlcyIsIkNvbmZpcm1lZCIsIlJlY292ZXJlZCIsIkRlYXRocyIsIkFjdGl2ZSIsImdldEFsbE1vbnRoIiwibW9udGhFbmciLCJub3dEYXRlIiwiRGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsImxhYmVsIiwiYWN0aXZlIiwic3RhdGlzdGlrIiwidmFsdWUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1c2giLCJNYXRoIiwiYWJzIiwicG9zdGlmIiwibWVuaW5nZ2dhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQy9CLE1BQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFYLEVBQXFCO0FBQ2pCLFlBQVFGLEdBQVI7QUFDSSxXQUFLLFdBQUw7QUFDSSxlQUFPQyxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNDLE9BQXJCOztBQUNKLFdBQUssV0FBTDtBQUNJLGVBQU9ILEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0UsTUFBckI7O0FBQ0osV0FBSyxRQUFMO0FBQ0ksZUFBT0osS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjRyxTQUFyQjs7QUFDSixXQUFLLFFBQUw7QUFDSSxlQUFPTCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNJLE9BQXJCOztBQUNKO0FBQ0ksZUFBTyxDQUFQO0FBVlI7QUFZSCxHQWJELE1BYU87QUFDSCxZQUFRUCxHQUFSO0FBQ0ksV0FBSyxXQUFMO0FBQ0ksZUFBT0MsS0FBSyxDQUFDRSxJQUFO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QVUsRUFBRUEsVUFKVDtBQUtIN0IsV0FBTyxFQUFFQTtBQUxOLEdBQVA7QUFPQSxTQUFPRCxJQUFQO0FBQ0gsQ0FoQ00iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmJlOTdmNWRkMzJjNjZlNmIyZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdW0gPSAoa2V5LCBwcm9wcykgPT4ge1xyXG4gICAgaWYgKCFwcm9wcy5pc0dsb2JhbCkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NvbmZpcm1lZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5wb3NpdGlmO1xyXG4gICAgICAgICAgICBjYXNlICdSZWNvdmVyZWQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uc2VtYnVoO1xyXG4gICAgICAgICAgICBjYXNlICdEZWF0aHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ubWVuaW5nZ2FsO1xyXG4gICAgICAgICAgICBjYXNlICdBY3RpdmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uZGlyYXdhdDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnQ29uZmlybWVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhLnJlZHVjZSgoc3VtLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5Db25maXJtZWQ7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgY2FzZSAnUmVjb3ZlcmVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhLnJlZHVjZSgoc3VtLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5SZWNvdmVyZWQ7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgY2FzZSAnRGVhdGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhLnJlZHVjZSgoc3VtLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5EZWF0aHM7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgY2FzZSAnQWN0aXZlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhLnJlZHVjZSgoc3VtLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5BY3RpdmU7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbE1vbnRoID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBtb250aEVuZyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXkgPSBudWxsO1xyXG4gICAgbGV0IG1vbnRoID0gbnVsbDtcclxuICAgIGxldCB5ZWFyID0gbnVsbDtcclxuICAgIGxldCBsYWJlbCA9IFtdO1xyXG4gICAgbGV0IHBvc2l0aWYgPSBbXTtcclxuICAgIGxldCBzZW1idWggPSBbXTtcclxuICAgIGxldCBtZW5pbmdnYWwgPSBbXTtcclxuICAgIGxldCBhY3RpdmUgPSBbXTtcclxuICAgIGxldCBkYXRhID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgcHJvcHMuc3RhdGlzdGlrKSB7XHJcbiAgICAgICAgbm93RGF0ZSA9IG5ldyBEYXRlKHZhbHVlLkRhdGUpO1xyXG4gICAgICAgIGRheSA9IG5vd0RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHllYXIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGFiZWwucHVzaChkYXkgKyBcIiBcIiArIG1vbnRoRW5nW01hdGguYWJzKG1vbnRoKV0pO1xyXG4gICAgICAgIGFjdGl2ZS5wdXNoKHZhbHVlLkFjdGl2ZSk7XHJcbiAgICAgICAgc2VtYnVoLnB1c2godmFsdWUuUmVjb3ZlcmVkKTtcclxuICAgICAgICBtZW5pbmdnYWwucHVzaCh2YWx1ZS5EZWF0aHMpO1xyXG4gICAgICAgIHBvc3RpZi5wdXNoKHZhbHVlLkNvbmZpcm1lZCk7XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGxhYmVsOiBsYWJlbCxcclxuICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcclxuICAgICAgICBzZW1idWg6IHNlbWJ1aCxcclxuICAgICAgICBtZW5pbmdnZ2FsOiBtZW5pbmdnZ2FsLFxyXG4gICAgICAgIHBvc2l0aWY6IHBvc2l0aWYsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=