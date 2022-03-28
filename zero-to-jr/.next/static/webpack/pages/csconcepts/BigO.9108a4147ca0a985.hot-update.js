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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_usePrism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/usePrism */ \"./util/usePrism.tsx\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var linear = (0,_util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism)(\"function spam(list: string[]) {\\n    list.forEach(value=>{\\n      console.log(value)\\n    })\\n  }\");\n    var square = (0,_util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism)(\"function spam(list: string[][]) {\\n    list.forEach(i=>{\\n      list.forEach(j=>{\\n        console.log(i, j)\\n      })\\n    })\\n  }\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: \"Big O Notation\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \" According to wikipedia, Big O Notation is a mathematical notation that\\n          describes the limiting behavior of a function when the argument tends\\n          towards a particular value or infinity.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"In computer science, this is often used to describe either the runtime\\n          of a function, or the amount of memory space it requires to execute\\n          agnostic of input size.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Let's take a look at the following function in TypeScript:\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                linear,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"This function runs in\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \" O(n) \"\n                        }, void 0, false, {\n                            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        \"worst-case runtime where n is the length of the input list. This makes\\n          sense because it has to loop through every item in that list no matter\\n          how long the list is.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Now what if our input array had two dimensions and our function looked\\n          like this instead?\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this),\n                square,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"This function runs in\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"(n^2)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 37\n                        }, _this),\n                        \" worst-case runtime, since now we have to loop through every item in the list\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: \" for every item in the list.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"The same method can be used to explain the amount of memory that is needed for a function to execute. Using these methods, we can describe the performance of the code we write and easily detect where that performance is lacking.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"tWLRIQj1lEcEE2IY/x9Pqi4KN+w=\", false, function() {\n    return [\n        _util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism,\n        _util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Home));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jc2NvbmNlcHRzL0JpZ08udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNEI7QUFDa0I7OztBQUU5QyxHQUFLLENBQUNFLElBQUksR0FBYSxRQUN2QixHQUQ2QixDQUFDOztJQUM1QixHQUFLLENBQUNDLE1BQU0sR0FBR0Ysd0RBQVEsQ0FBRSxDQUl4QjtJQUNELEdBQUssQ0FBQ0csTUFBTSxHQUFHSCx3REFBUSxDQUFFLENBTXhCO0lBQ0QsTUFBTSw2RUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBUzs4RkFDckJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVM7OzRGQUNyQkMsQ0FBTTs4QkFBQyxDQUFjOzs7Ozs7NEZBQ3JCQyxDQUFDOzhCQUNFLENBRXFDOzs7Ozs7NEZBRXhDQSxDQUFDOzhCQUNFLENBRXFCOzs7Ozs7NEZBRXhCQSxDQUFDOzhCQUFHLENBQTBEOzs7Ozs7Z0JBQzlETCxNQUFNOzRGQUNOSyxDQUFDOzt3QkFDRSxDQUFxQjtvR0FDdEJDLENBQUM7c0NBQUMsQ0FBTTs7Ozs7O3dCQUNQLENBRW1COzs7Ozs7OzRGQUV0QkQsQ0FBQzs4QkFDRSxDQUNnQjs7Ozs7O2dCQUVuQkosTUFBTTs0RkFDTkksQ0FBQzs7d0JBQ0UsQ0FBcUI7d0JBQUUsQ0FBQztvR0FBQ0MsQ0FBQztzQ0FBQyxDQUFLOzs7Ozs7d0JBQUksQ0FDSzt3QkFBQyxDQUFHO29HQUM5Q0MsQ0FBQztzQ0FBQyxDQUE0Qjs7Ozs7Ozs7Ozs7OzRGQUVoQ0YsQ0FBQzs4QkFBQyxDQUtIOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0F2REtOLElBQUk7O1FBQ09ELG9EQUFRO1FBS1JBLG9EQUFROzs7S0FObkJDLElBQUk7QUF5RFYsNEVBQU0sTUFBU0YsMkNBQUksQ0FBQ0UsSUFBSSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3Njb25jZXB0cy9CaWdPLnRzeD82ODYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUHJpc20gfSBmcm9tIFwiLi4vLi4vdXRpbC91c2VQcmlzbVwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbGluZWFyID0gdXNlUHJpc20oYGZ1bmN0aW9uIHNwYW0obGlzdDogc3RyaW5nW10pIHtcbiAgICBsaXN0LmZvckVhY2godmFsdWU9PntcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgIH0pXG4gIH1gKTtcbiAgY29uc3Qgc3F1YXJlID0gdXNlUHJpc20oYGZ1bmN0aW9uIHNwYW0obGlzdDogc3RyaW5nW11bXSkge1xuICAgIGxpc3QuZm9yRWFjaChpPT57XG4gICAgICBsaXN0LmZvckVhY2goaj0+e1xuICAgICAgICBjb25zb2xlLmxvZyhpLCBqKVxuICAgICAgfSlcbiAgICB9KVxuICB9YCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGhlYWRlcj5CaWcgTyBOb3RhdGlvbjwvaGVhZGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7YCBBY2NvcmRpbmcgdG8gd2lraXBlZGlhLCBCaWcgTyBOb3RhdGlvbiBpcyBhIG1hdGhlbWF0aWNhbCBub3RhdGlvbiB0aGF0XG4gICAgICAgICAgZGVzY3JpYmVzIHRoZSBsaW1pdGluZyBiZWhhdmlvciBvZiBhIGZ1bmN0aW9uIHdoZW4gdGhlIGFyZ3VtZW50IHRlbmRzXG4gICAgICAgICAgdG93YXJkcyBhIHBhcnRpY3VsYXIgdmFsdWUgb3IgaW5maW5pdHkuYH1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7YEluIGNvbXB1dGVyIHNjaWVuY2UsIHRoaXMgaXMgb2Z0ZW4gdXNlZCB0byBkZXNjcmliZSBlaXRoZXIgdGhlIHJ1bnRpbWVcbiAgICAgICAgICBvZiBhIGZ1bmN0aW9uLCBvciB0aGUgYW1vdW50IG9mIG1lbW9yeSBzcGFjZSBpdCByZXF1aXJlcyB0byBleGVjdXRlXG4gICAgICAgICAgYWdub3N0aWMgb2YgaW5wdXQgc2l6ZS5gfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPntgTGV0J3MgdGFrZSBhIGxvb2sgYXQgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpbiBUeXBlU2NyaXB0OmB9PC9wPlxuICAgICAgICB7bGluZWFyfVxuICAgICAgICA8cD5cbiAgICAgICAgICB7YFRoaXMgZnVuY3Rpb24gcnVucyBpbmB9XG4gICAgICAgICAgPGI+IE8obikgPC9iPlxuICAgICAgICAgIHtgd29yc3QtY2FzZSBydW50aW1lIHdoZXJlIG4gaXMgdGhlIGxlbmd0aCBvZiB0aGUgaW5wdXQgbGlzdC4gVGhpcyBtYWtlc1xuICAgICAgICAgIHNlbnNlIGJlY2F1c2UgaXQgaGFzIHRvIGxvb3AgdGhyb3VnaCBldmVyeSBpdGVtIGluIHRoYXQgbGlzdCBubyBtYXR0ZXJcbiAgICAgICAgICBob3cgbG9uZyB0aGUgbGlzdCBpcy5gfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtgTm93IHdoYXQgaWYgb3VyIGlucHV0IGFycmF5IGhhZCB0d28gZGltZW5zaW9ucyBhbmQgb3VyIGZ1bmN0aW9uIGxvb2tlZFxuICAgICAgICAgIGxpa2UgdGhpcyBpbnN0ZWFkP2B9XG4gICAgICAgIDwvcD5cbiAgICAgICAge3NxdWFyZX1cbiAgICAgICAgPHA+XG4gICAgICAgICAge2BUaGlzIGZ1bmN0aW9uIHJ1bnMgaW5gfSA8Yj4obl4yKTwvYj4gd29yc3QtY2FzZSBydW50aW1lLCBzaW5jZSBub3cgd2VcbiAgICAgICAgICBoYXZlIHRvIGxvb3AgdGhyb3VnaCBldmVyeSBpdGVtIGluIHRoZSBsaXN0e1wiIFwifVxuICAgICAgICAgIDxpPiBmb3IgZXZlcnkgaXRlbSBpbiB0aGUgbGlzdC48L2k+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIHNhbWUgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGV4cGxhaW4gdGhlIGFtb3VudCBvZiBtZW1vcnkgdGhhdCBpc1xuICAgICAgICAgIG5lZWRlZCBmb3IgYSBmdW5jdGlvbiB0byBleGVjdXRlLiBVc2luZyB0aGVzZSBtZXRob2RzLCB3ZSBjYW4gZGVzY3JpYmVcbiAgICAgICAgICB0aGUgcGVyZm9ybWFuY2Ugb2YgdGhlIGNvZGUgd2Ugd3JpdGUgYW5kIGVhc2lseSBkZXRlY3Qgd2hlcmUgdGhhdFxuICAgICAgICAgIHBlcmZvcm1hbmNlIGlzIGxhY2tpbmcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIb21lKTtcbiJdLCJuYW1lcyI6WyJtZW1vIiwidXNlUHJpc20iLCJIb21lIiwibGluZWFyIiwic3F1YXJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwicCIsImIiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/csconcepts/BigO.tsx\n");

/***/ })

});