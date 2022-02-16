webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_proft_OneDrive_Documents_react_Next_js_Next_jsChap23part2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_proft_OneDrive_Documents_react_Next_js_Next_jsChap23part2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_proft_OneDrive_Documents_react_Next_js_Next_jsChap23part2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_proft_OneDrive_Documents_react_Next_js_Next_jsChap23part2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");




var _jsxFileName = "C:\\Users\\proft\\OneDrive\\Documents\\react\\Next.js\\Next.jsChap23part2\\pages\\new-meetup\\index.js";




function NewMeetUp() {
  var router = next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"];

  function addMeetUpHandler(_x) {
    return _addMeetUpHandler.apply(this, arguments);
  }

  function _addMeetUpHandler() {
    _addMeetUpHandler = Object(C_Users_proft_OneDrive_Documents_react_Next_js_Next_jsChap23part2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_proft_OneDrive_Documents_react_Next_js_Next_jsChap23part2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(recieveData) {
      var response, data;
      return C_Users_proft_OneDrive_Documents_react_Next_js_Next_jsChap23part2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/new-meetup', {
                body: JSON.stringify(recieveData),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              console.log(data);

              if (response.ok) {
                _context.next = 10;
                break;
              }

              throw new Error(data.error.message);

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 15:
              router.push('/');

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));
    return _addMeetUpHandler.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "New Meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        description: "Add your meetup and create amazing opportunities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onAddMeetup: addMeetUpHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = NewMeetUp;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetUp);

var _c;

$RefreshReg$(_c, "NewMeetUp");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0VXAiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhZGRNZWV0VXBIYW5kbGVyIiwicmVjaWV2ZURhdGEiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib2siLCJFcnJvciIsImVycm9yIiwibWVzc2FnZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyxxREFBZjs7QUFEbUIsV0FFTEMsZ0JBRks7QUFBQTtBQUFBOztBQUFBO0FBQUEscVdBRXBCLGlCQUFnQ0MsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUUwQkMsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQzlDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosV0FBZixDQUR3QztBQUU5Q0ssdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURULGlCQUZxQztBQUs5Q0Msc0JBQU0sRUFBRTtBQUxzQyxlQUFwQixDQUYvQjs7QUFBQTtBQUVTQyxzQkFGVDtBQUFBO0FBQUEscUJBU3NCQSxRQUFRLENBQUNDLElBQVQsRUFUdEI7O0FBQUE7QUFTU0Msa0JBVFQ7QUFVT0MscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQVZQLGtCQVlPRixRQUFRLENBQUNLLEVBWmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQWFXLElBQUlDLEtBQUosQ0FBVUosSUFBSSxDQUFDSyxLQUFMLENBQVdDLE9BQXJCLENBYlg7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCS0wscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQU1JLE9BQWxCOztBQWhCTDtBQWtCR2xCLG9CQUFNLENBQUNtQixJQUFQLENBQVksR0FBWjs7QUFsQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGb0I7QUFBQTtBQUFBOztBQXNCakIsc0JBQ0U7QUFBQSw0QkFDQSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLG1CQUFXLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBS0EscUVBQUMseUVBQUQ7QUFBZSxpQkFBVyxFQUFFakI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxBO0FBQUEsa0JBREY7QUFTSDs7S0EvQlFILFM7QUFnQ01BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuNWY2ZTE1M2E1NzlmMWQxNjAxMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBOZXdNZWV0dXBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybVwiO1xyXG5mdW5jdGlvbiBOZXdNZWV0VXAoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyO1xyXG4gYXN5bmMgZnVuY3Rpb24gYWRkTWVldFVwSGFuZGxlcihyZWNpZXZlRGF0YSl7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbmV3LW1lZXR1cCcsIHtcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVjaWV2ZURhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBpZighcmVzcG9uc2Uub2spe1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICB9ICBcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5OZXcgTWVldHVwPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBkZXNjcmlwdGlvbj1cIkFkZCB5b3VyIG1lZXR1cCBhbmQgY3JlYXRlIGFtYXppbmcgb3Bwb3J0dW5pdGllc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXRVcEhhbmRsZXJ9IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKSBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0VXA7Il0sInNvdXJjZVJvb3QiOiIifQ==