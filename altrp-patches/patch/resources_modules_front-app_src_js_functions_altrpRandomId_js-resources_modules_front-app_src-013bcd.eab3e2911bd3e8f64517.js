"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_modules_front-app_src_js_functions_altrpRandomId_js-resources_modules_front-app_src-013bcd","section-element-wrapper","ElementWrapper"],{

/***/ 32494:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ altrpCompare; }
/* harmony export */ });
/**
 * Функция для сравнения значений
 * @param leftValue
 * @param rightValue
 * @param operator
 * @return {boolean}
 */
function altrpCompare() {
  var leftValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var rightValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var operator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "empty";

  switch (operator) {
    case "empty":
      {
        return _.isEmpty(leftValue);
      }

    case "not_empty":
      {
        return !_.isEmpty(leftValue);
      }

    case "null":
      {
        return !leftValue;
      }

    case "not_null":
      {
        return !!leftValue;
      }

    case "==":
      {
        if (!leftValue && !rightValue) {
          return true;
        }

        if (!(_.isObject(leftValue) || _.isObject(rightValue))) {
          return leftValue == rightValue;
        } else {
          return _.isEqual(leftValue, rightValue);
        }
      }

    case "===":
      {
        return _.isEqual(leftValue, rightValue);
      }

    case "<>":
      {
        if (!leftValue && !rightValue) {
          return false;
        }

        if (!(_.isObject(leftValue) || _.isObject(rightValue))) {
          return leftValue != rightValue;
        } else {
          return !_.isEqual(leftValue, rightValue);
        }
      }

    case ">":
      {
        return Number(leftValue) > Number(rightValue);
      }

    case ">=":
      {
        return Number(leftValue) >= Number(rightValue);
      }

    case "<":
      {
        return Number(leftValue) < Number(rightValue);
      }

    case "<=":
      {
        return Number(leftValue) <= Number(rightValue);
      }

    case "in":
      {
        if (_.isString(rightValue)) {
          return rightValue.indexOf(leftValue) !== -1;
        }

        if (!_.isArray(rightValue)) {
          return false;
        }

        var result = false;
        rightValue.forEach(function (item) {
          if (!result) {
            result = altrpCompare(leftValue, item, "==");
          }
        });
        return result;
      }

    case "not_in":
      {
        return !altrpCompare(leftValue, rightValue, "in");
      }

    case "contain":
      {
        if (_.isString(leftValue)) {
          return leftValue.indexOf(rightValue) !== -1;
        }

        if (!_.isArray(leftValue)) {
          return false;
        }

        var _result = false;
        leftValue.forEach(function (item) {
          if (!_result) {
            _result = altrpCompare(rightValue, item, "=="); //MAJOR "contain");
          }
        });
        return _result;
      }

    case "not_contain":
      {
        return !altrpCompare(leftValue, rightValue, "contain");
      }
  }
}

/***/ }),

/***/ 95645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ altrpRandomId; }
/* harmony export */ });
/**
 * случайная строка
 * @return {string}
 */
function altrpRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

/***/ }),

/***/ 48358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ conditionChecker; }
/* harmony export */ });
/* harmony import */ var _getDataByPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17297);
/* harmony import */ var _altrpCompare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32494);


/**
 * Функция для проверки одного условия
 * @param c
 * @param {AltrpModel} model
 * @param {boolean} dataByPath - брать ли данный из getDataByPath
 * @return {boolean}
 */

function conditionChecker(c, model) {
  var dataByPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var result = 0;
  var operator = c.operator;
  var left = c.modelField,
      value = c.value;

  if (dataByPath) {
    value = (0,_getDataByPath__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value, "", model, true);
    left = (0,_getDataByPath__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(left, "", model);
    return (0,_altrpCompare__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(left, value, operator);
  }

  return (0,_altrpCompare__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(model.getProperty(left), value, operator);
}

/***/ }),

/***/ 92184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ conditionsChecker; }
/* harmony export */ });
/* harmony import */ var _conditionChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48358);
/* harmony import */ var _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71743);


/**
 * Функция для проверки условий
 * @param {array} conditions
 * @param {boolean} AND - логичекое И или ИЛИ
 * @param {AltrpModel} model
 * @param {boolean} dataByPath - брать ли данные из getDataByPath
 * @return {boolean}
 */

function conditionsChecker() {
  var conditions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var AND = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var model = arguments.length > 2 ? arguments[2] : undefined;
  var dataByPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!(model instanceof _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)) {
    model = new _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(model);
  }

  if (!conditions.length) {
    return true;
  }

  var result = AND;

  _.each(conditions, function (c) {
    if (AND) {
      result *= (0,_conditionChecker__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(c, model, dataByPath);
    } else {
      result += (0,_conditionChecker__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(c, model, dataByPath);
    }
  });

  return !!result;
}

/***/ }),

/***/ 79919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _helpers_get_responsive_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84837);

var getResponsiveSetting = _helpers_get_responsive_setting__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
/* harmony default export */ __webpack_exports__["Z"] = (getResponsiveSetting);

/***/ }),

/***/ 28673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ isSSR; }
/* harmony export */ });
function isSSR() {
  try {
    return window.SSR;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ 44689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ElementWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99760);

window.SectionElementWrapper = _components_ElementWrapper__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ 15671:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 43144:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 45987:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63366);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 63366:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 30168:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

}]);
//# sourceMappingURL=resources_modules_front-app_src_js_functions_altrpRandomId_js-resources_modules_front-app_src-013bcd.eab3e2911bd3e8f64517.js.map