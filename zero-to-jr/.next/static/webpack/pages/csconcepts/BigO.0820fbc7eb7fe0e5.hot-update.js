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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_usePrism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/usePrism */ \"./util/usePrism.tsx\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var linear = (0,_util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism)(\"function spam(list: string[]) {\\n    list.forEach(value=>{\\n      console.log(value)\\n    })\\n  }\");\n    var square = (0,_util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism)(\"function spam(list: string[][]) {\\n    list.forEach(i=>{\\n      i.forEach(j=>{\\n        console.log(i, j)\\n      })\\n    })\\n  }\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: \"Big O Notation\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \" According to wikipedia, Big O Notation is a mathematical notation that\\n          describes the limiting behavior of a function when the argument tends\\n          towards a particular value or infinity.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"In computer science, this is often used to describe either the runtime\\n          of a function, or the amount of memory space it requires to execute\\n          agnostic of input size.\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Let's take a look at the following function in TypeScript:\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                linear,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"This function runs in\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"O(n)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        \" \",\n                        \"worst-case runtime where n is the length of the input list. This makes sense because it has to loop through every item in that list no matter how long the list is.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Now what if our input array had two dimensions and our function looked like this instead?\"\n                }, void 0, false, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                square,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"This function runs in\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"O(n^2)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this),\n                        \" \",\n                        \"worst-case runtime, since now we have to loop through every item in the l\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shrek/Desktop/Work/training/zero-to-jr-course/zero-to-jr/pages/csconcepts/BigO.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"tWLRIQj1lEcEE2IY/x9Pqi4KN+w=\", false, function() {\n    return [\n        _util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism,\n        _util_usePrism__WEBPACK_IMPORTED_MODULE_2__.usePrism\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Home));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jc2NvbmNlcHRzL0JpZ08udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNEI7QUFDa0I7OztBQUU5QyxHQUFLLENBQUNFLElBQUksR0FBYSxRQUN2QixHQUQ2QixDQUFDOztJQUM1QixHQUFLLENBQUNDLE1BQU0sR0FBR0Ysd0RBQVEsQ0FBRSxDQUl4QjtJQUNELEdBQUssQ0FBQ0csTUFBTSxHQUFHSCx3REFBUSxDQUFFLENBTXhCO0lBQ0QsTUFBTSw2RUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBUzs4RkFDckJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVM7OzRGQUNyQkMsQ0FBTTs4QkFBQyxDQUFjOzs7Ozs7NEZBQ3JCQyxDQUFDOzhCQUNFLENBRXFDOzs7Ozs7NEZBRXhDQSxDQUFDOzhCQUNFLENBRXFCOzs7Ozs7NEZBRXhCQSxDQUFDOzhCQUFHLENBQTBEOzs7Ozs7Z0JBQzlETCxNQUFNOzRGQUNOSyxDQUFDOzt3QkFBQyxDQUNvQjt3QkFBQyxDQUFHO29HQUN4QkMsQ0FBQztrSEFDQ0MsQ0FBQzswQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozt3QkFDSixDQUFHO3dCQUFDLENBSVg7Ozs7Ozs7NEZBQ0NGLENBQUM7OEJBQUMsQ0FBeUY7Ozs7OztnQkFDM0ZKLE1BQU07NEZBQ05JLENBQUM7O3dCQUFDLENBQ29CO3dCQUFDLENBQUc7b0dBQ3hCQyxDQUFDO2tIQUNDQyxDQUFDOzBDQUFDLENBQU07Ozs7Ozs7Ozs7O3dCQUNOLENBQUc7d0JBQUMsQ0FFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQWxES1IsSUFBSTs7UUFDT0Qsb0RBQVE7UUFLUkEsb0RBQVE7OztLQU5uQkMsSUFBSTtBQW9EViw0RUFBTSxNQUFTRiwyQ0FBSSxDQUFDRSxJQUFJLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jc2NvbmNlcHRzL0JpZ08udHN4PzY4NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQcmlzbSB9IGZyb20gXCIuLi8uLi91dGlsL3VzZVByaXNtXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBsaW5lYXIgPSB1c2VQcmlzbShgZnVuY3Rpb24gc3BhbShsaXN0OiBzdHJpbmdbXSkge1xuICAgIGxpc3QuZm9yRWFjaCh2YWx1ZT0+e1xuICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgfSlcbiAgfWApO1xuICBjb25zdCBzcXVhcmUgPSB1c2VQcmlzbShgZnVuY3Rpb24gc3BhbShsaXN0OiBzdHJpbmdbXVtdKSB7XG4gICAgbGlzdC5mb3JFYWNoKGk9PntcbiAgICAgIGkuZm9yRWFjaChqPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGksIGopXG4gICAgICB9KVxuICAgIH0pXG4gIH1gKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aGVhZGVyPkJpZyBPIE5vdGF0aW9uPC9oZWFkZXI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtgIEFjY29yZGluZyB0byB3aWtpcGVkaWEsIEJpZyBPIE5vdGF0aW9uIGlzIGEgbWF0aGVtYXRpY2FsIG5vdGF0aW9uIHRoYXRcbiAgICAgICAgICBkZXNjcmliZXMgdGhlIGxpbWl0aW5nIGJlaGF2aW9yIG9mIGEgZnVuY3Rpb24gd2hlbiB0aGUgYXJndW1lbnQgdGVuZHNcbiAgICAgICAgICB0b3dhcmRzIGEgcGFydGljdWxhciB2YWx1ZSBvciBpbmZpbml0eS5gfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtgSW4gY29tcHV0ZXIgc2NpZW5jZSwgdGhpcyBpcyBvZnRlbiB1c2VkIHRvIGRlc2NyaWJlIGVpdGhlciB0aGUgcnVudGltZVxuICAgICAgICAgIG9mIGEgZnVuY3Rpb24sIG9yIHRoZSBhbW91bnQgb2YgbWVtb3J5IHNwYWNlIGl0IHJlcXVpcmVzIHRvIGV4ZWN1dGVcbiAgICAgICAgICBhZ25vc3RpYyBvZiBpbnB1dCBzaXplLmB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+e2BMZXQncyB0YWtlIGEgbG9vayBhdCB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uIGluIFR5cGVTY3JpcHQ6YH08L3A+XG4gICAgICAgIHtsaW5lYXJ9XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgZnVuY3Rpb24gcnVucyBpbntcIiBcIn1cbiAgICAgICAgICA8Yj5cbiAgICAgICAgICAgIDxpPk8obik8L2k+XG4gICAgICAgICAgPC9iPntcIiBcIn1cbiAgICAgICAgICB3b3JzdC1jYXNlIHJ1bnRpbWUgd2hlcmUgbiBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBpbnB1dCBsaXN0LiBUaGlzIG1ha2VzXG4gICAgICAgICAgc2Vuc2UgYmVjYXVzZSBpdCBoYXMgdG8gbG9vcCB0aHJvdWdoIGV2ZXJ5IGl0ZW0gaW4gdGhhdCBsaXN0IG5vIG1hdHRlclxuICAgICAgICAgIGhvdyBsb25nIHRoZSBsaXN0IGlzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPk5vdyB3aGF0IGlmIG91ciBpbnB1dCBhcnJheSBoYWQgdHdvIGRpbWVuc2lvbnMgYW5kIG91ciBmdW5jdGlvbiBsb29rZWQgbGlrZSB0aGlzIGluc3RlYWQ/PC9wPlxuICAgICAgICB7c3F1YXJlfVxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIGZ1bmN0aW9uIHJ1bnMgaW57XCIgXCJ9XG4gICAgICAgICAgPGI+XG4gICAgICAgICAgICA8aT5PKG5eMik8L2k+XG4gICAgICAgICAgPC9iPntcIiBcIn1cbiAgICAgICAgICB3b3JzdC1jYXNlIHJ1bnRpbWUsIHNpbmNlIG5vdyB3ZSBoYXZlIHRvIGxvb3AgdGhyb3VnaCBldmVyeSBpdGVtIGluIHRoZSBsXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIb21lKTtcbiJdLCJuYW1lcyI6WyJtZW1vIiwidXNlUHJpc20iLCJIb21lIiwibGluZWFyIiwic3F1YXJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwicCIsImIiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/csconcepts/BigO.tsx\n");

/***/ })

});