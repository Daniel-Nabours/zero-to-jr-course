"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/csconcepts/BigO",{

/***/ "./pages/csconcepts/BigO.tsx":
/*!***********************************!*\
  !*** ./pages/csconcepts/BigO.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_usePrism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/usePrism */ \"./util/usePrism.tsx\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var linear = (0,_util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism)(\"function spam(list: string[]) {\\n    list.forEach(value=>{\\n      console.log(value)\\n    })\\n  }\");\n    var square = (0,_util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism)(\"function spam(list: string[][]) {\\n    list.forEach(i=>{\\n      list.forEach(j=>{\\n        console.log(i, j)\\n      })\\n    })\\n  }\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: \"Big O Notation\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \" According to wikipedia, Big O Notation is a mathematical notation that\\n          describes the limiting behavior of a function when the argument tends\\n          towards a particular value or infinity.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"In computer science, this is often used to describe either the runtime\\n          of a function, or the amount of memory space it requires to execute\\n          agnostic of input size.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Let's take a look at the following function in TypeScript:\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                linear,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"This function runs in\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \" O(n) \"\n                        }, void 0, false, {\n                            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        \"worst-case runtime where n is the length of the input list. This makes\\n          sense because it has to loop through every item in that list no matter\\n          how long the list is.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Now what if our input array had two dimensions and our function looked\\n          like this instead?\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this),\n                square,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"This function runs in \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"(n^2)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 33\n                        }, _this),\n                        \" worst-case runtime, since now we have to loop through every item in the list\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: \"for every item in the list.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"The same method can be used to explain the amount of memory that is needed for a function to execute. Using these methods, we can describe the performance of the code we write and easily detect where that performance is lacking.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"tWLRIQj1lEcEE2IY/x9Pqi4KN+w=\", false, function() {\n    return [\n        _util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism,\n        _util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Home));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jc2NvbmNlcHRzL0JpZ08udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNEI7QUFDa0I7OztBQUU5QyxHQUFLLENBQUNFLElBQUksR0FBYSxRQUN2QixHQUQ2QixDQUFDOztJQUM1QixHQUFLLENBQUNDLE1BQU0sR0FBR0Ysd0RBQVEsQ0FBRSxDQUl4QjtJQUNELEdBQUssQ0FBQ0csTUFBTSxHQUFHSCx3REFBUSxDQUFFLENBTXhCO0lBQ0QsTUFBTSw2RUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBUzs4RkFDckJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVM7OzRGQUNyQkMsQ0FBTTs4QkFBQyxDQUFjOzs7Ozs7NEZBQ3JCQyxDQUFDOzhCQUNFLENBRXFDOzs7Ozs7NEZBRXhDQSxDQUFDOzhCQUNFLENBRXFCOzs7Ozs7NEZBRXhCQSxDQUFDOzhCQUFHLENBQTBEOzs7Ozs7Z0JBQzlETCxNQUFNOzRGQUNOSyxDQUFDOzt3QkFDRSxDQUFxQjtvR0FDdEJDLENBQUM7c0NBQUMsQ0FBTTs7Ozs7O3dCQUNQLENBRW1COzs7Ozs7OzRGQUV0QkQsQ0FBQzs4QkFDRSxDQUNnQjs7Ozs7O2dCQUVuQkosTUFBTTs0RkFDTkksQ0FBQzs7d0JBQUMsQ0FDcUI7b0dBQUNDLENBQUM7c0NBQUMsQ0FBSzs7Ozs7O3dCQUFJLENBQ1M7d0JBQUMsQ0FBRztvR0FDOUNDLENBQUM7c0NBQUMsQ0FBMkI7Ozs7Ozs7Ozs7Ozs0RkFFL0JGLENBQUM7OEJBQUMsQ0FLSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBdkRLTixJQUFJOztRQUNPRCxvREFBUTtRQUtSQSxvREFBUTs7O0tBTm5CQyxJQUFJO0FBeURWLDRFQUFNLE1BQVNGLDJDQUFJLENBQUNFLElBQUksQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NzY29uY2VwdHMvQmlnTy50c3g/Njg2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVByaXNtIH0gZnJvbSBcIi4uLy4uL3V0aWwvdXNlUHJpc21cIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmVhciA9IHVzZVByaXNtKGBmdW5jdGlvbiBzcGFtKGxpc3Q6IHN0cmluZ1tdKSB7XG4gICAgbGlzdC5mb3JFYWNoKHZhbHVlPT57XG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICB9KVxuICB9YCk7XG4gIGNvbnN0IHNxdWFyZSA9IHVzZVByaXNtKGBmdW5jdGlvbiBzcGFtKGxpc3Q6IHN0cmluZ1tdW10pIHtcbiAgICBsaXN0LmZvckVhY2goaT0+e1xuICAgICAgbGlzdC5mb3JFYWNoKGo9PntcbiAgICAgICAgY29uc29sZS5sb2coaSwgailcbiAgICAgIH0pXG4gICAgfSlcbiAgfWApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxoZWFkZXI+QmlnIE8gTm90YXRpb248L2hlYWRlcj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2AgQWNjb3JkaW5nIHRvIHdpa2lwZWRpYSwgQmlnIE8gTm90YXRpb24gaXMgYSBtYXRoZW1hdGljYWwgbm90YXRpb24gdGhhdFxuICAgICAgICAgIGRlc2NyaWJlcyB0aGUgbGltaXRpbmcgYmVoYXZpb3Igb2YgYSBmdW5jdGlvbiB3aGVuIHRoZSBhcmd1bWVudCB0ZW5kc1xuICAgICAgICAgIHRvd2FyZHMgYSBwYXJ0aWN1bGFyIHZhbHVlIG9yIGluZmluaXR5LmB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2BJbiBjb21wdXRlciBzY2llbmNlLCB0aGlzIGlzIG9mdGVuIHVzZWQgdG8gZGVzY3JpYmUgZWl0aGVyIHRoZSBydW50aW1lXG4gICAgICAgICAgb2YgYSBmdW5jdGlvbiwgb3IgdGhlIGFtb3VudCBvZiBtZW1vcnkgc3BhY2UgaXQgcmVxdWlyZXMgdG8gZXhlY3V0ZVxuICAgICAgICAgIGFnbm9zdGljIG9mIGlucHV0IHNpemUuYH1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD57YExldCdzIHRha2UgYSBsb29rIGF0IHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gaW4gVHlwZVNjcmlwdDpgfTwvcD5cbiAgICAgICAge2xpbmVhcn1cbiAgICAgICAgPHA+XG4gICAgICAgICAge2BUaGlzIGZ1bmN0aW9uIHJ1bnMgaW5gfVxuICAgICAgICAgIDxiPiBPKG4pIDwvYj5cbiAgICAgICAgICB7YHdvcnN0LWNhc2UgcnVudGltZSB3aGVyZSBuIGlzIHRoZSBsZW5ndGggb2YgdGhlIGlucHV0IGxpc3QuIFRoaXMgbWFrZXNcbiAgICAgICAgICBzZW5zZSBiZWNhdXNlIGl0IGhhcyB0byBsb29wIHRocm91Z2ggZXZlcnkgaXRlbSBpbiB0aGF0IGxpc3Qgbm8gbWF0dGVyXG4gICAgICAgICAgaG93IGxvbmcgdGhlIGxpc3QgaXMuYH1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7YE5vdyB3aGF0IGlmIG91ciBpbnB1dCBhcnJheSBoYWQgdHdvIGRpbWVuc2lvbnMgYW5kIG91ciBmdW5jdGlvbiBsb29rZWRcbiAgICAgICAgICBsaWtlIHRoaXMgaW5zdGVhZD9gfVxuICAgICAgICA8L3A+XG4gICAgICAgIHtzcXVhcmV9XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgZnVuY3Rpb24gcnVucyBpbiA8Yj4obl4yKTwvYj4gd29yc3QtY2FzZSBydW50aW1lLCBzaW5jZSBub3cgd2VcbiAgICAgICAgICBoYXZlIHRvIGxvb3AgdGhyb3VnaCBldmVyeSBpdGVtIGluIHRoZSBsaXN0e1wiIFwifVxuICAgICAgICAgIDxpPmZvciBldmVyeSBpdGVtIGluIHRoZSBsaXN0LjwvaT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgc2FtZSBtZXRob2QgY2FuIGJlIHVzZWQgdG8gZXhwbGFpbiB0aGUgYW1vdW50IG9mIG1lbW9yeSB0aGF0IGlzXG4gICAgICAgICAgbmVlZGVkIGZvciBhIGZ1bmN0aW9uIHRvIGV4ZWN1dGUuIFVzaW5nIHRoZXNlIG1ldGhvZHMsIHdlIGNhbiBkZXNjcmliZVxuICAgICAgICAgIHRoZSBwZXJmb3JtYW5jZSBvZiB0aGUgY29kZSB3ZSB3cml0ZSBhbmQgZWFzaWx5IGRldGVjdCB3aGVyZSB0aGF0XG4gICAgICAgICAgcGVyZm9ybWFuY2UgaXMgbGFja2luZy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhvbWUpO1xuIl0sIm5hbWVzIjpbIm1lbW8iLCJ1c2VQcmlzbSIsIkhvbWUiLCJsaW5lYXIiLCJzcXVhcmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJwIiwiYiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/csconcepts/BigO.tsx\n");

/***/ })

});