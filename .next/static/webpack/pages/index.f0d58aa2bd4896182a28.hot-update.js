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
      label.push(day + " " + monthEng[Math.abs]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9saWJyYXJ5LmpzIl0sIm5hbWVzIjpbInN1bSIsImtleSIsInByb3BzIiwiaXNHbG9iYWwiLCJkYXRhIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiLCJyZWR1Y2UiLCJhIiwiYXR0cmlidXRlcyIsIkNvbmZpcm1lZCIsIlJlY292ZXJlZCIsIkRlYXRocyIsIkFjdGl2ZSIsImdldEFsbE1vbnRoIiwibW9udGhFbmciLCJub3dEYXRlIiwiRGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsImxhYmVsIiwiYWN0aXZlIiwic3RhdGlzdGlrIiwidmFsdWUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1c2giLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDL0IsTUFBSSxDQUFDQSxLQUFLLENBQUNDLFFBQVgsRUFBcUI7QUFDakIsWUFBUUYsR0FBUjtBQUNJLFdBQUssV0FBTDtBQUNJLGVBQU9DLEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0MsT0FBckI7O0FBQ0osV0FBSyxXQUFMO0FBQ0ksZUFBT0gsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjRSxNQUFyQjs7QUFDSixXQUFLLFFBQUw7QUFDSSxlQUFPSixLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNHLFNBQXJCOztBQUNKLFdBQUssUUFBTDtBQUNJLGVBQU9MLEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0ksT0FBckI7O0FBQ0o7QUFDSSxlQUFPLENBQVA7QUFWUjtBQVlILEdBYkQsTUFhTztBQUNILFlBQVFQLEdBQVI7QUFDSSxXQUFLLFdBQUw7QUFDSSxlQUFPQyxLQUFLLENBQUNFLElBQU4sQ0FBV0ssTUFBWCxDQUFrQixVQUFDVCxHQUFELEVBQU1VLENBQU4sRUFBWTtBQUNqQyxpQkFBT1YsR0FBRyxHQUFHVSxDQUFDLENBQUNDLFVBQUYsQ0FBYUMsU0FBMUI7QUFDSCxTQUZNLEVBRUosQ0FGSSxDQUFQOztBQUdKLFdBQUssV0FBTDtBQUNJLGVBQU9WLEtBQUssQ0FBQ0UsSUFBTixDQUFXSyxNQUFYLENBQWtCLFVBQUNULEdBQUQsRUFBTVUsQ0FBTixFQUFZO0FBQ2pDLGlCQUFPVixHQUFHLEdBQUdVLENBQUMsQ0FBQ0MsVUFBRixDQUFhRSxTQUExQjtBQUNILFNBRk0sRUFFSixDQUZJLENBQVA7O0FBR0osV0FBSyxRQUFMO0FBQ0ksZUFBT1gsS0FBSyxDQUFDRSxJQUFOLENBQVdLLE1BQVgsQ0FBa0IsVUFBQ1QsR0FBRCxFQUFNVSxDQUFOLEVBQVk7QUFDakMsaUJBQU9WLEdBQUcsR0FBR1UsQ0FBQyxDQUFDQyxVQUFGLENBQWFHLE1BQTFCO0FBQ0gsU0FGTSxFQUVKLENBRkksQ0FBUDs7QUFHSixXQUFLLFFBQUw7QUFDSSxlQUFPWixLQUFLLENBQUNFLElBQU4sQ0FBV0ssTUFBWCxDQUFrQixVQUFDVCxHQUFELEVBQU1VLENBQU4sRUFBWTtBQUNqQyxpQkFBT1YsR0FBRyxHQUFHVSxDQUFDLENBQUNDLFVBQUYsQ0FBYUksTUFBMUI7QUFDSCxTQUZNLEVBRUosQ0FGSSxDQUFQOztBQUdKO0FBQ0ksZUFBTyxDQUFQO0FBbEJSO0FBb0JIO0FBQ0osQ0FwQ007QUFzQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2QsS0FBRCxFQUFXO0FBQ2xDLE1BQU1lLFFBQVEsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUE4RSxLQUE5RSxDQUFqQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFaO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlsQixPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsTUFBSWlCLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSXBCLElBQUksR0FBRyxFQUFYOztBQVhrQyw2Q0FhaEJGLEtBQUssQ0FBQ3VCLFNBYlU7QUFBQTs7QUFBQTtBQWFsQyx3REFBbUM7QUFBQSxVQUExQkMsS0FBMEI7QUFDL0JSLGFBQU8sR0FBRyxJQUFJQyxJQUFKLENBQVNPLEtBQUssQ0FBQ1AsSUFBZixDQUFWO0FBQ0FDLFNBQUcsR0FBR0YsT0FBTyxDQUFDUyxPQUFSLEVBQU47QUFDQU4sV0FBSyxHQUFHSCxPQUFPLENBQUNVLFFBQVIsRUFBUjtBQUNBTixVQUFJLEdBQUdKLE9BQU8sQ0FBQ1csV0FBUixFQUFQO0FBQ0FOLFdBQUssQ0FBQ08sSUFBTixDQUFXVixHQUFHLEdBQUcsR0FBTixHQUFZSCxRQUFRLENBQUNjLElBQUksQ0FBQ0MsR0FBTixDQUEvQjtBQUNIO0FBbkJpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JyQyxDQXBCTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMGQ1OGFhMmJkNDg5NjE4MmEyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHN1bSA9IChrZXksIHByb3BzKSA9PiB7XHJcbiAgICBpZiAoIXByb3BzLmlzR2xvYmFsKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnQ29uZmlybWVkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnBvc2l0aWY7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JlY292ZXJlZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5zZW1idWg7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RlYXRocyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5tZW5pbmdnYWw7XHJcbiAgICAgICAgICAgIGNhc2UgJ0FjdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5kaXJhd2F0O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdDb25maXJtZWQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkNvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBjYXNlICdSZWNvdmVyZWQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLlJlY292ZXJlZDtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBjYXNlICdEZWF0aHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkRlYXRocztcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBjYXNlICdBY3RpdmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsTW9udGggPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IG1vbnRoRW5nID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRheSA9IG51bGw7XHJcbiAgICBsZXQgbW9udGggPSBudWxsO1xyXG4gICAgbGV0IHllYXIgPSBudWxsO1xyXG4gICAgbGV0IGxhYmVsID0gW107XHJcbiAgICBsZXQgcG9zaXRpZiA9IFtdO1xyXG4gICAgbGV0IHNlbWJ1aCA9IFtdO1xyXG4gICAgbGV0IG1lbmluZ2dhbCA9IFtdO1xyXG4gICAgbGV0IGFjdGl2ZSA9IFtdO1xyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiBwcm9wcy5zdGF0aXN0aWspIHtcclxuICAgICAgICBub3dEYXRlID0gbmV3IERhdGUodmFsdWUuRGF0ZSk7XHJcbiAgICAgICAgZGF5ID0gbm93RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgbW9udGggPSBub3dEYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgeWVhciA9IG5vd0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsYWJlbC5wdXNoKGRheSArIFwiIFwiICsgbW9udGhFbmdbTWF0aC5hYnNdKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==