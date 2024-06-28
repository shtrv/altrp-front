"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["default-resources_modules_front-app_src_js_functions_getConverter_js-resources_modules_front--7fd36b"],{

/***/ 32869:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29439);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43144);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60136);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82963);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61120);
/* harmony import */ var _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71743);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79753);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class Datasource
 */



var Datasource = /*#__PURE__*/function (_AltrpModel) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Datasource, _AltrpModel);

  var _super = _createSuper(Datasource);

  function Datasource() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this, Datasource);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Datasource, [{
    key: "getWebUrl",
    value:
    /**
     * получить url для вэба
     * @return {string}
     */
    function getWebUrl() {
      return this.getProperty('source.web_url').replace(/{([\s\S]+?)}/g, '');
    }
    /**
     * получить тип ресурса
     * @return {string}
     */

  }, {
    key: "getType",
    value: function getType() {
      return this.getProperty('source.type');
    }
    /**
     * получить url для вэба
     * @return {string}
     */

  }, {
    key: "getAlias",
    value: function getAlias() {
      return this.getProperty('alias');
    }
    /**
     * Получить параметры для запроса к ресурсу
     * @params {{}} urlParams
     * @params {string} excludePath - исключение из параметров, которые должны браться динамически
     * @return{null | {}}
     */

  }, {
    key: "getParams",
    value: function getParams() {
      var urlParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var excludePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _appStore$getState = appStore.getState(),
          currentModel = _appStore$getState.currentModel,
          currentDataStorage = _appStore$getState.currentDataStorage;

      var parsedTemplate = this.getProperty('parameters');
      var params = {};

      if (!parsedTemplate) {
        return null;
      }

      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isJSON)(parsedTemplate)) {
        parsedTemplate = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.mbParseJSON)(parsedTemplate, []);
        parsedTemplate = parsedTemplate.map(function (param) {
          return [param.paramName, param.paramValue];
        });
      } else {
        parsedTemplate = parsedTemplate.split('\n');
        parsedTemplate = parsedTemplate.filter(function (line) {
          return line;
        });
        parsedTemplate = parsedTemplate.map(function (line) {
          line = line.split('|');
          line[0] = line[0].trim();

          if (line.length === 1) {
            line.push(line[0]);
          } else {
            line[1] = line[1].trim();
          }

          return line;
        });
      }

      parsedTemplate.forEach(function (_ref) {
        var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_ref, 2),
            left = _ref2[0],
            right = _ref2[1];

        if (right.match(/{{([\s\S]+?)(?=}})/g)) {
          right = right.trim();
          right = right.match(/{{([\s\S]+?)(?=}})/g)[0].replace('{{', '');

          if (excludePath && right.indexOf(excludePath) === 0) {
            right = right;
          } else {
            right = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getDataByPath)(right);
          }
        }

        if (right || right === 0) {
          params[left] = right;
        }
      });
      return params;
    }
  }]);

  return Datasource;
}(_editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);

/* harmony default export */ __webpack_exports__["Z"] = (Datasource);

/***/ }),

/***/ 25037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43144);
/* harmony import */ var _Area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87977);
/* harmony import */ var _Datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32869);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @property {Area[]} areas
 * */



var Route = /*#__PURE__*/function () {
  function Route(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, Route);

    this.id = data.id;
    this.path = data.path;
    this.icon = data.icon;
    this.model = data.model;
    this.models = data.models;
    this.parent_page_id = data.parent_page_id;

    if (!this.models) {
      this.models = data.model ? [data.model] : [];
    }

    this.model = data.model;
    this.data_sources = data.data_sources || [];
    this.data_sources = this.data_sources.map(function (data_source) {
      return new _Datasource__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(data_source);
    });
    this.title = data.title || "";
    this.allowed = data.allowed;
    this.redirect = data.redirect;
    this.lazy = data.lazy;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Route, null, [{
    key: "routeFabric",
    value: function routeFabric(data) {
      var route = new Route(data);
      route.areas = [];
      data.areas = data.areas || [];

      var _iterator = _createForOfIteratorHelper(data.areas),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _area = _step.value;
          route.areas.push(_Area__WEBPACK_IMPORTED_MODULE_3__/* ["default"].areaFactory */ .Z.areaFactory(_area));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return route;
    }
  }]);

  return Route;
}();

/* harmony default export */ __webpack_exports__["Z"] = (Route);

/***/ }),

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

/***/ 37470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ altrpLogin; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_src_js_classes_Resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99324);
/* harmony import */ var _store_responses_storage_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15272);
/* harmony import */ var _store_current_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46221);
/* harmony import */ var _mb_parse_JSON__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65053);






/**
 * Логиним пользователя
 * @param {{}} data
 * @param {string} formId
 * @return {Promise<{}>}
 */

function altrpLogin() {
  return _altrpLogin.apply(this, arguments);
}

function _altrpLogin() {
  _altrpLogin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var data,
        formId,
        res,
        status,
        currentUser,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            formId = _args.length > 1 && _args[1] !== undefined ? _args[1] : "login";
            data.altrpLogin = true;
            _context.prev = 3;
            _context.next = 6;
            return new _editor_src_js_classes_Resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
              route: "/login"
            }).post(data);

          case 6:
            res = _context.sent;
            _context.next = 22;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            status = _context.t0.status;

            if (!(_context.t0.res instanceof Promise)) {
              _context.next = 16;
              break;
            }

            _context.next = 15;
            return _context.t0.res;

          case 15:
            res = _context.sent;

          case 16:
            if (!(_context.t0 instanceof Promise)) {
              _context.next = 20;
              break;
            }

            _context.next = 19;
            return _context.t0;

          case 19:
            res = _context.sent;

          case 20:
            res = (0,_mb_parse_JSON__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(res, {});
            status && (res.__status = status);

          case 22:
            appStore.dispatch((0,_store_responses_storage_actions__WEBPACK_IMPORTED_MODULE_4__/* .addResponseData */ .Nb)(formId, res));

            if (res.success || res._token) {
              _context.next = 25;
              break;
            }

            return _context.abrupt("return", {
              success: false
            });

          case 25:
            _token = res._token;
            _context.next = 28;
            return new _editor_src_js_classes_Resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
              route: "/ajax/current-user"
            }).getAll();

          case 28:
            currentUser = _context.sent;
            currentUser = currentUser.data;
            appStore.dispatch((0,_store_current_user_actions__WEBPACK_IMPORTED_MODULE_5__/* .changeCurrentUser */ .a2)(currentUser));
            /*let routes = [];
            try {
              let routesData = await new Resource({
                route: "/ajax/routes"
              }).getAll();
                for (let _data of routesData.pages) {
                routes.push(Route.routeFabric(_data));
              }
              appStore.dispatch(changeAppRoutes(routes));
            } catch (err) {
              console.error(err);
              return { success: false };
            }*/

            return _context.abrupt("return", {
              success: true
            });

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 9]]);
  }));
  return _altrpLogin.apply(this, arguments);
}

/***/ }),

/***/ 72217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ altrpLogout; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_src_js_classes_Resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99324);
/* harmony import */ var _store_current_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46221);
/* harmony import */ var _classes_Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25037);
/* harmony import */ var _store_routes_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69456);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * Выход
 * @return {Promise<{}>}
 */

function altrpLogout() {
  return _altrpLogout.apply(this, arguments);
}

function _altrpLogout() {
  _altrpLogout = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var res, currentUser, routes, routesData, _iterator, _step, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new _editor_src_js_classes_Resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
              route: "/logout"
            }).post();

          case 2:
            res = _context.sent;

            if (res.success || res._token) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              success: false
            });

          case 5:
            _token = res._token;
            _context.next = 8;
            return new _editor_src_js_classes_Resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
              route: "/ajax/current-user"
            }).getAll();

          case 8:
            currentUser = _context.sent;
            currentUser = currentUser.data;
            appStore.dispatch((0,_store_current_user_actions__WEBPACK_IMPORTED_MODULE_4__/* .changeCurrentUser */ .a2)(currentUser));
            routes = [];
            _context.prev = 12;
            _context.next = 15;
            return new _editor_src_js_classes_Resource__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
              route: "/ajax/routes"
            }).getAll();

          case 15:
            routesData = _context.sent;
            _iterator = _createForOfIteratorHelper(routesData.pages);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _data = _step.value;
                routes.push(_classes_Route__WEBPACK_IMPORTED_MODULE_2__/* ["default"].routeFabric */ .Z.routeFabric(_data));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            appStore.dispatch((0,_store_routes_actions__WEBPACK_IMPORTED_MODULE_5__/* .changeAppRoutes */ .S)(routes));
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](12);
            console.error(_context.t0);
            return _context.abrupt("return", {
              success: false
            });

          case 25:
            return _context.abrupt("return", {
              success: true
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[12, 21]]);
  }));
  return _altrpLogout.apply(this, arguments);
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

/***/ 23382:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ convertData; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _getConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59641);


/**
 * Конвертируются данные
 * @param {{} | []} settings
 * @param {*} data
 */

function convertData(settings, data) {
  if (_.isArray(settings)) {
    settings.forEach(function (item) {
      var converter = (0,_getConverter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(item);
      data = converter.convertData(data);
    });
  }

  if (settings.data_type) {
    var converter = (0,_getConverter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(settings);
    data = converter.convertData(data);
  }

  return data;
}

/***/ }),

/***/ 50349:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ dataFromTable; }
/* harmony export */ });
/**
 * Забирает данные из HTML таблицы
 * @param {{}}HTMLElement
 */
function dataFromTable(HTMLElement) {
  var data = [];
  var headers = [];

  if (!(HTMLElement && HTMLElement.querySelectorAll)) {
    return data;
  }

  var table = HTMLElement.querySelector(".altrp-table");

  if (!table && HTMLElement.querySelector(".altrp-table-tr")) {
    table = HTMLElement;
  }

  if (!table) {
    return data;
  }

  var ths = table.querySelectorAll(".altrp-table-th");

  _.each(ths, function (th) {
    // if (th.innerText) {
    headers.push(th.innerText || ""); // }
  });

  var rows = table.querySelectorAll(".altrp-table-tbody .altrp-table-tr");

  _.each(rows, function (row) {
    var cells = row.querySelectorAll(".altrp-table-td");
    var part = {};
    headers.forEach(function (header, idx) {
      if (!header) {
        return;
      }

      part[header] = cells[idx].innerText || "";
    });
    data.push(part);
  });

  return data;
}

/***/ }),

/***/ 587:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ dataToCSV; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29439);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);




/**
 * Создать csv-файл из данных и скачать
 * @param {{}} data
 * @param {string} filename
 */
function dataToCSV() {
  return _dataToCSV.apply(this, arguments);
}

function _dataToCSV() {
  _dataToCSV = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var data,
        filename,
        headers,
        csvContent,
        blob,
        link,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            filename = _args.length > 1 ? _args[1] : undefined;
            filename = filename || "File";

            if (data) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              success: false
            });

          case 5:
            if (_.isObject() && !_.isArray(data)) {
              data = [data];
            }

            if (_.isArray(data)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", {
              success: false
            });

          case 8:
            headers = _.toPairs(data[0]).map(function (_ref) {
              var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, 2),
                  name = _ref2[0],
                  value = _ref2[1];

              return name;
            });
            csvContent = // 'data:text/csv;charset=utf-8,'
            "" + headers.join(";") + "\n" + data.map(function (item) {
              var line = "";
              headers.forEach(function (h, idx) {
                var value = _.get(item, h) || "";

                if (_.isObject(value)) {
                  value = JSON.stringify(value);
                }

                line += (_.isString(value) ? value.replace(/\s/g, " ") : value) + (headers.length === idx + 1 ? "" : ";");
              });
              return line;
            }).join("\n");
            blob = new Blob(["\uFEFF" + csvContent], {
              type: "text/csv",
              charset: "windows-1251" // charset: 'utf-8',

            });
            link = document.createElement("a");
            link.setAttribute("href", window.URL.createObjectURL(blob));
            link.setAttribute("download", filename + ".csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return _context.abrupt("return", {
              success: true
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _dataToCSV.apply(this, arguments);
}

/***/ }),

/***/ 51073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ dataToXLS; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Генерация и загрузка XLS-файла
 * @param {{}} data
 * @param {String} filename Имя файла
 */
function dataToXLS(_x) {
  return _dataToXLS.apply(this, arguments);
}

function _dataToXLS() {
  _dataToXLS = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {
    var filename,
        templateName,
        formData,
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filename = _args.length > 1 && _args[1] !== undefined ? _args[1] : "table";
            templateName = _args.length > 2 && _args[2] !== undefined ? _args[2] : "";
            formData = new FormData();
            formData.append("filename", filename);
            formData.append("data", JSON.stringify(data));
            formData.append("template", templateName);
            _context.next = 8;
            return fetch("/api/export-excel", {
              method: "POST",
              body: formData
            });

          case 8:
            response = _context.sent;
            _context.next = 11;
            return response.blob();

          case 11:
            return _context.abrupt("return", _context.sent);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _dataToXLS.apply(this, arguments);
}

/***/ }),

/***/ 61805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ dataToXML; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Генерация и загрузка XML-файла
 * @param {Object data} Объект данных
 * @param {String} filename Имя файла
 */
function dataToXML(_x) {
  return _dataToXML.apply(this, arguments);
}

function _dataToXML() {
  _dataToXML = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {
    var filename,
        formData,
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filename = _args.length > 1 && _args[1] !== undefined ? _args[1] : "table";
            formData = new FormData();
            formData.append("filename", filename);
            formData.append("data", JSON.stringify(data));
            _context.next = 6;
            return fetch("/api/export-xml", {
              method: "POST",
              body: formData
            });

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.blob();

          case 9:
            return _context.abrupt("return", _context.sent);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _dataToXML.apply(this, arguments);
}

/***/ }),

/***/ 43970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ delay; }
/* harmony export */ });
/**
 * Задержка с интерфейсом промиса
 * @param ms
 * @return {Promise}
 */
function delay(ms) {
  if (_.isString(ms)) {
    ms = Number(ms);
  }

  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

/***/ }),

/***/ 20401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ extractPathFromString; }
/* harmony export */ });
/**
 * Извелкает путь из строки
 * @param {string} string
 * @return {string}
 */
function extractPathFromString() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var path = "";

  if (_.isString(string)) {
    // path = string.match(/(?<={{)([\s\S]+?)(?=}})/g)[0]
    path = _.get(string.match(/{{([\s\S]+?)(?=}})/g), "0", "").replace("{{", "");
  }

  return path;
}

/***/ }),

/***/ 53813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ generateButtonsArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93433);


/**
 * Кнопки для пагинации
 * @param pageIndex
 * @param pageCount
 * @param first_last_buttons_count
 * @param middle_buttons_count
 * @return {*[]}
 */
function generateButtonsArray(pageIndex, pageCount, first_last_buttons_count, middle_buttons_count) {
  var buttonsSum = first_last_buttons_count + middle_buttons_count;
  var lastButtons = Array.from({
    length: first_last_buttons_count
  }, function (_, i) {
    return pageCount - i - 1;
  }).reverse();
  var middleButtons = Array.from({
    length: middle_buttons_count
  }, function (_, i) {
    return pageIndex - Math.floor(middle_buttons_count / 2) + i;
  });

  if (pageIndex + 1 < buttonsSum) {
    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Array(buttonsSum).keys()), ["ellipsis"], (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(lastButtons));
  }

  if (pageIndex >= pageCount - first_last_buttons_count - 1 - Math.floor(middle_buttons_count / 2)) {
    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Array(first_last_buttons_count).keys()), ["ellipsis"], (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Array.from({
      length: first_last_buttons_count + middle_buttons_count
    }, function (_, i) {
      return pageCount - i - 1;
    }).reverse()));
  }

  return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Array(first_last_buttons_count).keys()), ["ellipsis"], middleButtons, ["ellipsis"], (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(lastButtons));
}

/***/ }),

/***/ 85058:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getAppContext; }
/* harmony export */ });
/* harmony import */ var _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71743);

/**
 * Вовращает AltrpModel, в котором храняться все источники данных на странице
 * @param {{}} model
 * @return {AltrpModel}
 */

function getAppContext() {
  var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _appStore$getState = appStore.getState(),
      currentModel = _appStore$getState.currentModel;

  if (model instanceof _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z) {
    model = model.getData();
  }

  var currentModelData = model ? model : currentModel.getData();

  var urlParams = _.cloneDeep(window.currentRouterMatch instanceof _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z ? window.currentRouterMatch.getProperty("params") : {});

  var context = new _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(_.assign(urlParams, currentModelData));

  var _appStore$getState2 = appStore.getState(),
      altrpPageState = _appStore$getState2.altrpPageState,
      altrpPage = _appStore$getState2.altrpPage,
      altrpMeta = _appStore$getState2.altrpMeta,
      currentDataStorage = _appStore$getState2.currentDataStorage,
      currentUser = _appStore$getState2.currentUser,
      altrpresponses = _appStore$getState2.altrpresponses,
      formsStore = _appStore$getState2.formsStore;

  context.setProperty("altrpdata", currentDataStorage);
  context.setProperty("altrppagestate", altrpPageState);
  context.setProperty("altrpmeta", altrpMeta);
  context.setProperty("altrpuser", currentUser);
  context.setProperty("altrpresponses", altrpresponses);
  context.setProperty("altrpforms", formsStore);
  context.setProperty("altrppage", altrpPage);
  return context;
}

/***/ }),

/***/ 43569:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getBreadcrumbsItems; }
/* harmony export */ });
/* harmony import */ var _isEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63532);

/**
 *
 * @return {*[]}
 */

function getBreadcrumbsItems() {
  if (window['h-altrp'] && window.breadcrumbsItems) {
    return window.breadcrumbsItems;
  }

  var items = [];

  if ((0,_isEditor__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(0)) {
    return items;
  }

  var currentId = window['h-altrp'] ? window.page_id : window.currentPageId;
  var routes = appStore.getState().appRoutes.routes;
  var breadcrumbsClone = [];
  var idCurrent = 0;
  routes.forEach(function (route, idx) {
    if (currentId === route.id) {
      idCurrent = idx;
    }
  });
  breadcrumbsClone.push(routes[idCurrent]);

  function getParent(parentId) {
    routes.forEach(function (route) {
      if (route.id === parentId) {
        breadcrumbsClone.push(route);

        if (route.parent_page_id) {
          getParent(route.parent_page_id);
        }
      }
    });
  }

  if (routes[idCurrent].parent_page_id) {
    getParent(routes[idCurrent].parent_page_id);
  }

  items = breadcrumbsClone.reverse();

  if (window['h-altrp']) {
    window.breadcrumbsItems = items;
  }

  return items;
}

/***/ }),

/***/ 59641:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ getConverter; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(11752);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(82963);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(61120);
// EXTERNAL MODULE: ./resources/modules/editor/src/js/classes/AltrpModel.js
var AltrpModel = __webpack_require__(71743);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/classes/converters/DataConverter.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

 // import ArrayConverter from "./ArrayConverter";

/**
 * @class DataConverter
 */

var DataConverter = /*#__PURE__*/function (_AltrpModel) {
  (0,inherits/* default */.Z)(DataConverter, _AltrpModel);

  var _super = _createSuper(DataConverter);

  function DataConverter() {
    (0,classCallCheck/* default */.Z)(this, DataConverter);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(DataConverter, [{
    key: "convertData",
    value:
    /**
     * Изменяем данные
     * если тип не соответствует, то возращаем исходные данные
     * @param {*} data
     * @return {*}
     */
    function convertData(data) {
      if (!this.checkData(data)) {
        return data;
      }

      return this.doConvert(data);
    }
    /**
     * Выполняем изменение данных
     */

  }, {
    key: "doConvert",
    value: function doConvert(data) {
      var convertType = this.getConvertType();

      if (_.isFunction(this[convertType])) {
        return this[convertType](data);
      }

      return data;
    }
  }, {
    key: "checkData",
    value: function checkData() {
      return false;
    }
    /**
     * Тип получаемых данных
     * @return {string}
     */

  }, {
    key: "getDataType",
    value: function getDataType() {
      return this.getProperty("data_type");
    }
    /**
     * Тип получаемых данных
     * @return {string}
     */

  }, {
    key: "getConvertType",
    value: function getConvertType() {
      return this.getProperty("convert_type");
    }
    /**
     * Тип получаемых данных
     * @param {number} index
     * @return {string}
     */

  }, {
    key: "getArgument",
    value: function getArgument() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.getProperty("argument".concat(index || 1));
    }
  }]);

  return DataConverter;
}(AltrpModel/* default */.Z);

/* harmony default export */ var converters_DataConverter = (DataConverter);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/helpers.js + 17 modules
var helpers = __webpack_require__(79753);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/classes/converters/ArrayConverter.js







function ArrayConverter_createSuper(Derived) { var hasNativeReflectConstruct = ArrayConverter_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function ArrayConverter_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class ArrayConverter
 */



var ArrayConverter = /*#__PURE__*/function (_DataConverter) {
  (0,inherits/* default */.Z)(ArrayConverter, _DataConverter);

  var _super = ArrayConverter_createSuper(ArrayConverter);

  function ArrayConverter() {
    (0,classCallCheck/* default */.Z)(this, ArrayConverter);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(ArrayConverter, [{
    key: "extract",
    value:
    /**
     * возвращает массив значений указанного свойства для массива объектов
     * @param data
     * @return {*}
     */
    function extract(data) {
      var argument = this.getArgument(1);

      if (!argument) {
        return data;
      }

      return data.map(function (item) {
        return (0,helpers.getDataByPath)((0,helpers.extractPathFromString)(argument), "", item);
      });
    }
    /**
     * возвращает массив значений указанного свойства для массива объектов
     * @param data
     * @return {*}
     */

  }, {
    key: "map",
    value: function map(data) {
      var argument = this.getArgument(1);

      if (!argument) {
        return data;
      }

      var result = data.map(function (item) {
        return (0,helpers.parseParamsFromString)(argument, item, true);
      });
      return result;
    }
    /**
     * Проверим данные на соответствие типу
     * @param data
     * @return {boolean}
     */

  }, {
    key: "checkData",
    value: function checkData(data) {
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(ArrayConverter.prototype), "checkData", this).call(this, data);

      return _.isArray(data);
    }
  }]);

  return ArrayConverter;
}(converters_DataConverter);

/* harmony default export */ var converters_ArrayConverter = (ArrayConverter);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getConverter.js


/**
 * Вернуть экземпляр конвертера необходимого типа (array - ArrayConverter и т. д.)
 * @return {DataConverter}
 */

function getConverter(data) {
  switch (data.data_type) {
    case "array":
      return new converters_ArrayConverter(data);
  }

  return new converters_DataConverter();
}

/***/ }),

/***/ 88101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getCurrentBreakpoint; }
/* harmony export */ });
/* harmony import */ var _editor_src_js_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12027);
/* harmony import */ var _getWindowWidth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65138);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/**
 * Возвращает брейкпоинт относительно текущего размера экрана
 */

function getCurrentBreakpoint() {
  var currentWidth = (0,_getWindowWidth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  var breakPoints = _editor_src_js_consts__WEBPACK_IMPORTED_MODULE_0__["default"].SCREENS;
  var breakPointsSizes = breakPoints.map(function (item) {
    return {
      name: item.name,
      size: Number(item.width.split("px")[0])
    };
  });

  var _iterator = _createForOfIteratorHelper(breakPointsSizes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var breakpoint = _step.value;

      if (breakpoint.size < currentWidth) {
        return breakpoint.name;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ 15891:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getHTMLElementById; }
/* harmony export */ });
/**
 * Вернет HTML элемент React компонента, у которого id = elementId
 * @param {string} elementId
 * @return {null | HTMLElement}
 */
function getHTMLElementById() {
  var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var HTMLElement = null;

  if (!elementId || !elementId.trim()) {
    return HTMLElement;
  }

  elementId = elementId.trim();
  HTMLElement = document.getElementById(elementId);

  if (HTMLElement) {
    return HTMLElement;
  }

  appStore.getState().elements.forEach(function (el) {
    if (!el.elementWrapperRef.current) {
      return;
    }

    if (!el.elementWrapperRef.current.id) {
      return;
    }

    if (el.elementWrapperRef.current.id.toString().split(" ").indexOf(elementId) !== -1) {
      HTMLElement = el.elementWrapperRef.current;
    }
  });
  return HTMLElement;
}

/***/ }),

/***/ 79919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _helpers_get_responsive_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84837);

var getResponsiveSetting = _helpers_get_responsive_setting__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
/* harmony default export */ __webpack_exports__["Z"] = (getResponsiveSetting);

/***/ }),

/***/ 89683:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getWidgetState; }
/* harmony export */ });
/* harmony import */ var _getDataFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5536);

/**
 * Забирает состояние из localStorage
 * Для виджетов ,которые могут сохранять состояния при смене страниц
 * @param {string} widgetId
 * @param {*} _default
 * @return {boolean}
 */

function getWidgetState(widgetId) {
  var _default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!widgetId) {
    return _default;
  }

  var path = "widget_state".concat(widgetId);
  return (0,_getDataFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(path, _default);
}

/***/ }),

/***/ 65138:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getWindowWidth; }
/* harmony export */ });
/* harmony import */ var _isEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63532);

function getWindowWidth() {
  var window;

  if ((0,_isEditor__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
    window = document.getElementById("editorWindow").offsetWidth;
  } else {
    window = document.getElementById("front-app").offsetWidth;
  }

  return window;
}

/***/ }),

/***/ 62508:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getWrapperHTMLElementByElement; }
/* harmony export */ });
/**
 * Вернет HTML  React компонента, у которого props.element = element
 * @param {FrontElement} element
 * @return {null | HTMLElement}
 */
function getWrapperHTMLElementByElement(element) {
  if (!element) {
    return null;
  }

  var HTMLElement = null;
  appStore.getState().elements.forEach(function (el) {
    if (element === el.props.element) {
      HTMLElement = el.elementWrapperRef.current;
    }
  });
  return HTMLElement;
}

/***/ }),

/***/ 13364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ isJSON; }
/* harmony export */ });
/**
 *
 * Определеят явлется ли строка валидным JSON
 * @param {string} JSONString
 * @return {boolean}
 */
function isJSON() {
  var JSONString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  try {
    JSON.parse(JSONString);
    return true;
  } catch (error) {
    return false;
  }
}

/***/ }),

/***/ 65053:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ mbParseJSON; }
/* harmony export */ });
/**
 * Возвращает объект из json-строки если возможно
 * @param {string} string
 * @param {*} _default
 * @return {*}
 */
function mbParseJSON(string) {
  var _default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  try {
    return JSON.parse(string);
  } catch (e) {
    return _default === null ? string : _default;
  }
}

/***/ }),

/***/ 31870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ parseIDFromYoutubeURL; }
/* harmony export */ });
function parseIDFromYoutubeURL(youtubeURL) {
  var startIndex = youtubeURL.indexOf("v=") + 2;
  var endIndex = youtubeURL.indexOf("&", startIndex);
  return youtubeURL.substring(startIndex, endIndex);
}

/***/ }),

/***/ 9920:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ parseOptionsFromSettings; }
/* harmony export */ });
/* harmony import */ var _extractPathFromString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20401);
/* harmony import */ var _getDataByPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17297);


/**
 * Парсит стрку вводимую пользователем для опций селекта
 * @param string
 */

function parseOptionsFromSettings(string) {
  if (!string) {
    return [];
  }

  var options = string.split("\n");
  var path = (0,_extractPathFromString__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(string);

  var _optionsFromData = (0,_getDataByPath__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(path);

  if (_.isArray(_optionsFromData)) {
    return _optionsFromData;
  }

  options = options.map(function (option) {
    var value = option.split("|")[0];
    value = value.trim();
    var valuePath = (0,_extractPathFromString__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value);

    if (valuePath) {
      value = (0,_getDataByPath__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(valuePath);
    }

    if (value !== '' && !Number.isNaN(Number(value))) {
      value = Number(value);
    }

    var label = option.split("|")[1] || value || "";
    _.isNumber(label) && (label += "");
    !_.isString(label) && (label = "");
    label = label.trim();
    var labelPath = (0,_extractPathFromString__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(label);

    if (labelPath) {
      label = (0,_getDataByPath__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(labelPath);
    }

    return {
      value: value,
      label: label
    };
  });
  return options;
}

/***/ }),

/***/ 1622:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ parseParamsFromString; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29439);
/* harmony import */ var _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71743);
/* harmony import */ var _replaceContentWithData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26078);
/* harmony import */ var _getDataByPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17297);




/**
 * Парсим данный из строки в объект, если значение - путь, то берем значение из context
 * (если в context нет свойства, то не записываем)
 * @param {string} string
 * @param {AltrpModel} context
 * @param {boolean} allowObject
 * @param {boolean} replaceRight - нужно ли подставлять в значение параметра данные или оставить сырой шаблон
 * @param {boolean} replace - нужно ли подставлять в значение параметра данные или оставить сырой шаблон
 * @return {{}}
 */

function parseParamsFromString(string) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allowObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var replaceRight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var replace = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (!(context instanceof _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)) {
    context = new _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(context);
  }

  var params = {};
  var urlParams = window.currentRouterMatch instanceof _editor_src_js_classes_AltrpModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z ? window.currentRouterMatch.getProperty("params") : {};

  if (!string) {
    return params;
  }

  var lines = string.split("\n");
  lines.forEach(function (line) {
    var _line$split = line.split("|"),
        _line$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_line$split, 2),
        left = _line$split2[0],
        right = _line$split2[1];

    if (!left || !right) {
      return;
    }

    left = left.trim();
    right = right.trim();

    if (replace && left.indexOf("{{") !== -1) {
      left = (0,_replaceContentWithData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(left);
    }

    if (replace && right.match(/{{([\s\S]+?)(?=}})/g)) {
      if (context.getProperty(right.match(/{{([\s\S]+?)(?=}})/g)[0].replace("{{", "")) || (0,_getDataByPath__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(right.match(/{{([\s\S]+?)(?=}})/g)[0].replace("{{", ""))) {
        //todo ошибка в IOS
        params[left] = context.getProperty(right.match(/{{([\s\S]+?)(?=}})/g)[0].replace("{{", "")) || (0,_getDataByPath__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(right.match(/{{([\s\S]+?)(?=}})/g)[0].replace("{{", "")) || "";
      } else {
        replaceRight ? params[left] = urlParams[right.match(/{{([\s\S]+?)(?=}})/g)[0].replace("{{", "")] ? urlParams[right.match(/{{([\s\S]+?)(?=}})/g)[0].replace("{{", "")] : "" : params[left] = right;
      }
    } else {
      params[left] = right;
    }

    if (!allowObject && _.isObject(params[left])) {
      delete params[left];
    }
  });
  return params;
}

/***/ }),

/***/ 91890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ prepareContext; }
/* harmony export */ });
/**
 *
 * @param {{}} context
 * @return {{}}
 */
function prepareContext(context) {
  context.altrpdata = appStore.getState().currentDataStorage.getData();
  context.altrpmodel = appStore.getState().currentModel.getData();
  context.altrpuser = appStore.getState().currentUser.getData();
  context.altrppagestate = appStore.getState().altrpPageState.getData();
  context.altrpresponses = appStore.getState().altrpresponses.getData();
  context.altrpmeta = appStore.getState().altrpMeta.getData();
  return context;
}

/***/ }),

/***/ 62598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ printElements; }
/* harmony export */ });
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43970);

/**
 * Функция выводит определенный элемент на печать
 * @params {HTMLElement[]} elements
 * @params {null || HTMLElement} stylesTag
 */

function printElements(elements) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var myWindow = window.open("", "my div", "height=400,width=1200");
  myWindow.document.write("<html><head><title>".concat(title, "</title></head>"));
  myWindow.document.write("<body >");
  elements = _.isArray(elements) ? elements : [elements];
  var headContent = '';
  myWindow.document.write("</body></html>");
  var bodyContent = '';
  elements.forEach(function (element) {
    if (element instanceof HTMLHeadElement) {
      headContent = element.innerHTML;
      return;
    }

    bodyContent += element.outerHTML;
  });
  myWindow.document.close(); // necessary for IE >= 10

  myWindow.document.head.innerHTML = headContent;
  bodyContent = bodyContent.replace(/<tr/g, '<div className="altrp-table-tr"').replace(/<th/g, '<div').replace(/<\/tr>/g, '</div>').replace(/<\/th>/g, '</div>');
  myWindow.document.body.innerHTML = bodyContent;
  myWindow.focus(); // necessary for IE >= 10

  (0,_delay__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(250).then(function () {
    myWindow.print();
    myWindow.close();
  });
  return true;
}

/***/ }),

/***/ 18087:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ redirect; }
/* harmony export */ });
/* harmony import */ var _replaceContentWithData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26078);

/**
 * Перенаправление на другую страницу по настройкам LinkController
 * @param {{}} linkSettings
 * @param {{}} e
 * @param {{}} context
 */

function redirect(linkSettings, e) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_.get(linkSettings, "toPrevPage")) {
    if (window.frontAppRouter) {
      frontAppRouter.history.goBack();
    } else {
      history.back();
    }

    return;
  }

  if (!_.get(linkSettings, "url")) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();
  var url = linkSettings.url;
  url = (0,_replaceContentWithData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(url, context);

  if (linkSettings.openInNew) {
    window.open(url, "_blank");
    return;
  }

  if (linkSettings.tag === "a" || !window.frontAppRouter) {
    window.location.assign(url);
  } else {
    frontAppRouter.history.push(url);
  }
}

/***/ }),

/***/ 3614:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ renderAssetIcon; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _editor_src_js_components_altrp_svg_AltrpSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91617);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _iconsManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74108);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function renderAssetIcon(asset) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (asset) {
    if (asset.url && asset.type === "svg") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_editor_src_js_components_altrp_svg_AltrpSVG__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, props, {
        url: asset.url
      }));
    }

    switch (asset.assetType) {
      case "icon":
        {
          return (0,_iconsManager__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().renderIcon(asset.name);
        }

      case "image":
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", _objectSpread(_objectSpread({}, props), {}, {
            src: asset.url
          }));
        }

      case "media":
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", _objectSpread(_objectSpread({}, props), {}, {
            src: asset.url
          }));
        }
    }
  }

  return "";
}

/***/ }),

/***/ 34277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ renderIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _renderAssetIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3614);


function renderIcon(isHidden, icon, defaultIcon, className) {
  if (isHidden) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: className
  }, icon && icon.assetType ? (0,_renderAssetIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(icon) : defaultIcon); // if()
}

/***/ }),

/***/ 81230:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ saveDataToLocalStorage; }
/* harmony export */ });
/**
 * Сохранить данные в localStorage
 * @param {string} name
 * @param {*} data
 * @return {boolean}
 */
function saveDataToLocalStorage(name, data) {
  if (!name) {
    return false;
  }

  if (_.isObject(data)) {
    data = JSON.stringify(data);
  }

  try {
    localStorage.setItem(name, data);
  } catch (e) {
    return true;
  }

  return true;
}

/***/ }),

/***/ 76039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ scrollToElement; }
/* harmony export */ });
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29459);

/**
 * Скроллит к элементу
 * @param {{} | HTMLElement}scrollbars
 * @param {{}}element
 */

function scrollToElement(scrollbars, element) {
  var container = scrollbars.container;

  if (scrollbars instanceof HTMLElement) {
    container = scrollbars;
    var scroll = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__/* .getOffsetTopInElement */ .sm)(element, scrollbars);

    if (scroll) {
      scrollbars.scrollTop = scroll;
    }
  }

  if (scrollbars instanceof Window) {
    container = scrollbars;
  }
  /**
   * @member {HTMLElement} container
   */


  if (!container) {
    return;
  }

  if (!_.isFunction(scrollbars.scrollTop) && !_.isFunction(scrollbars.scrollTo)) {
    return;
  }

  var parent = element.offsetParent;
  var top = element.offsetTop;

  while (parent !== container || parent !== document.body) {
    if (!parent) {
      /**
       * ушли в самый корень ДОМ и контейнер не встретился
       */
      break;
    }

    top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  /**
   * не получили каеое-либо значение
   */


  if (!top) {
    return;
  }

  console.log(scrollbars.scrollTo);
  scrollbars.scrollTop && scrollbars.scrollTop(top);
  scrollbars.scrollTo && scrollbars.scrollTo({
    top: top,
    left: 0,
    behavior: 'smooth'
  });
}

/***/ }),

/***/ 20177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ scrollbarWidth; }
/* harmony export */ });
function scrollbarWidth() {
  // thanks too https://davidwalsh.name/detect-scrollbar-width
  var scrollDiv = document.createElement("div");
  scrollDiv.setAttribute("style", "width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;");
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

/***/ }),

/***/ 99549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ setDataByPath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84506);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29439);
/* harmony import */ var _store_altrp_page_state_storage_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86817);
/* harmony import */ var _store_altrp_meta_storage_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13974);
/* harmony import */ var _store_current_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46221);
/* harmony import */ var _store_forms_data_storage_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48379);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69852);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_elements_settings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45530);
/* harmony import */ var _classes_Area__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87977);
/* harmony import */ var _getComponentByElementId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66086);
/* harmony import */ var _getDataFromLocalStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5536);
/* harmony import */ var _saveDataToLocalStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81230);












/**
 * Установить данные
 * @param {string} path
 * @param {*} value
 * @param {function | null} dispatch
 * @return {boolean}
 */

function setDataByPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!path) {
    return false;
  }

  if (path.indexOf(",") !== -1) {
    var result = path.split(",").map(function (path) {
      return setDataByPath(path, value, dispatch);
    });
    return true;
  }

  path = path.replace("{{", "").replace("}}", "");
  path = path.trim();

  switch (value) {
    case "true":
      value = true;
      break;

    case "false":
      value = false;
      break;

    case "null":
      value = null;
      break;

    case "undefined":
      value = undefined;
      break;
  }

  if (path.indexOf("altrppagestate.") === 0) {
    path = path.replace("altrppagestate.", "");

    if (!path) {
      return false;
    }

    var oldValue = appStore.getState().altrpPageState.getProperty(path);

    if (_.isEqual(oldValue, value)) {
      return true;
    }

    if (_.isFunction(dispatch)) {
      dispatch((0,_store_altrp_page_state_storage_actions__WEBPACK_IMPORTED_MODULE_1__/* .changePageState */ .Xe)(path, value));
    } else {
      appStore.dispatch((0,_store_altrp_page_state_storage_actions__WEBPACK_IMPORTED_MODULE_1__/* .changePageState */ .Xe)(path, value));
    }

    return true;
  }

  if (path.indexOf("altrpmeta.") === 0) {
    path = path.replace("altrpmeta.", "");

    if (!path) {
      return false;
    }

    var _oldValue = appStore.getState().altrpMeta.getProperty(path);

    if (_.isEqual(_oldValue, value)) {
      return true;
    }

    if (_.isFunction(dispatch)) {
      dispatch((0,_store_altrp_meta_storage_actions__WEBPACK_IMPORTED_MODULE_2__/* .changeAltrpMeta */ .VB)(path, value));
    } else {
      appStore.dispatch((0,_store_altrp_meta_storage_actions__WEBPACK_IMPORTED_MODULE_2__/* .changeAltrpMeta */ .VB)(path, value));
    }

    return true;
  }

  if (path.indexOf("altrpuser.local_storage.") === 0) {
    path = path.replace("altrpuser.", "");

    if (!path) {
      return false;
    }

    var _oldValue2 = appStore.getState().currentUser.getProperty(path);

    if (_.isEqual(_oldValue2, value)) {
      return true;
    }

    if (_.isFunction(dispatch)) {
      dispatch((0,_store_current_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .changeCurrentUserProperty */ .uX)(path, value));
    } else {
      appStore.dispatch((0,_store_current_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .changeCurrentUserProperty */ .uX)(path, value));
    }

    return true;
  }

  if (path.indexOf("altrpforms.") === 0) {
    path = path.replace("altrpforms.", "");

    if (!path) {
      return false;
    }

    var _path$split = path.split("."),
        _path$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_path$split, 2),
        formId = _path$split2[0],
        fieldName = _path$split2[1];

    var _appStore$getState = appStore.getState(),
        formsStore = _appStore$getState.formsStore;

    var _oldValue3 = _.get(formsStore, path);

    if (_.isEqual(_oldValue3, value)) {
      return true;
    }

    if (_.isFunction(dispatch)) {
      dispatch((0,_store_forms_data_storage_actions__WEBPACK_IMPORTED_MODULE_5__/* .changeFormFieldValue */ .Az)(path, value));
    } else {
      appStore.dispatch((0,_store_forms_data_storage_actions__WEBPACK_IMPORTED_MODULE_5__/* .changeFormFieldValue */ .Az)(fieldName, value, formId, true));
    }

    return true;
  } else if (path.indexOf("altrpelements.") === 0) {
    var pathElements = path.split(".");

    var _pathElements = (0,_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(pathElements),
        prefix = _pathElements[0],
        elementId = _pathElements[1],
        updateType = _pathElements[2],
        propName = _pathElements.slice(3);

    var component = (0,_getComponentByElementId__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(elementId);

    if (!component) {
      return true;
    }

    propName = propName.join('.');

    switch (updateType) {
      case "settings":
        {
          component.props.element.updateSetting(value, propName);

          if (window['h-altrp']) {
            var settings = component.props.element.settings;
            settings = dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default().set(settings, propName, value);
            appStore.dispatch((0,_store_elements_settings_actions__WEBPACK_IMPORTED_MODULE_8__/* .addSettings */ .zZ)(component.props.element.getId(), component.props.element.getName(), settings));
          }

          return true;
        }

      default:
        {
          return true;
        }
    }
  } else if (path.indexOf("altrpareas.") === 0) {
    var _pathElements2 = path.split(".");

    var _pathElements3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_pathElements2, 4),
        _prefix = _pathElements3[0],
        areaName = _pathElements3[1],
        _updateType = _pathElements3[2],
        _propName = _pathElements3[3];

    var area = window.page_areas.find(function (area) {
      return area.id === areaName;
    });

    if (area && _updateType === 'settings') {
      if (!(area instanceof _classes_Area__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)) {
        area = _classes_Area__WEBPACK_IMPORTED_MODULE_9__/* ["default"].areaFactory */ .Z.areaFactory(area);
      }

      area.setSetting(_propName, value);
    }

    return true;
  } else if (path.indexOf("altrpstorage.") === 0) {
    path = path.replace("altrpstorage.", "");
    var currentStorage = (0,_getDataFromLocalStorage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)("altrpstorage", {});

    _.set(currentStorage, path, value);

    (0,_saveDataToLocalStorage__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)("altrpstorage", currentStorage);
    return true;
  }

  return false;
}

/***/ }),

/***/ 50313:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ sortOptions; }
/* harmony export */ });
function sortOptions(options, sortDirection) {
  options.sort(function (a, b) {
    return a.label.toLowerCase() > b.label.toLowerCase() ? 1 : b.label.toLowerCase() > a.label.toLowerCase() ? -1 : 0;
  });
  return sortDirection === "asc" ? options : options.reverse();
}

/***/ }),

/***/ 77983:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ storeWidgetState; }
/* harmony export */ });
/* harmony import */ var _saveDataToLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81230);

/**
 * Сохраняет состояние виджет в localStorage
 * Для виджетов ,которые могут сохранять состояния при смене страниц
 * @param {string} widgetId
 * @param {*} state
 * @return {boolean}
 */

function storeWidgetState(widgetId) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!widgetId) {
    return false;
  }

  var path = "widget_state".concat(widgetId);
  return (0,_saveDataToLocalStorage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(path, state);
}

/***/ }),

/***/ 67444:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ validateEmail; }
/* harmony export */ });
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/***/ }),

/***/ 95785:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ valueReplacement; }
/* harmony export */ });
/**
 * Заменяет false, null, true в строке на соответствующие значения
 * @param {string} value
 * @return {*}
 */
function valueReplacement(value) {
  switch (value) {
    case "true":
      return true;

    case "false":
      return false;

    case "null":
      return null;
  }

  return value;
}

/***/ }),

/***/ 79753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CONDITIONS_OPTIONS": function() { return /* reexport */ constants_CONDITIONS_OPTIONS; },
  "altrpCompare": function() { return /* reexport */ altrpCompare/* default */.Z; },
  "altrpLogin": function() { return /* reexport */ altrpLogin/* default */.Z; },
  "altrpLogout": function() { return /* reexport */ altrpLogout/* default */.Z; },
  "altrpRandomId": function() { return /* reexport */ altrpRandomId/* default */.Z; },
  "conditionChecker": function() { return /* reexport */ conditionChecker/* default */.Z; },
  "conditionsChecker": function() { return /* reexport */ conditionsChecker/* default */.Z; },
  "convertData": function() { return /* reexport */ convertData/* default */.Z; },
  "cutString": function() { return /* binding */ cutString; },
  "dataFromTable": function() { return /* reexport */ dataFromTable/* default */.Z; },
  "dataToCSV": function() { return /* reexport */ dataToCSV/* default */.Z; },
  "dataToXLS": function() { return /* reexport */ dataToXLS/* default */.Z; },
  "dataToXML": function() { return /* reexport */ dataToXML/* default */.Z; },
  "delay": function() { return /* reexport */ delay/* default */.Z; },
  "extractPathFromString": function() { return /* reexport */ extractPathFromString/* default */.Z; },
  "generateButtonsArray": function() { return /* reexport */ generateButtonsArray/* default */.Z; },
  "getAppContext": function() { return /* reexport */ getAppContext/* default */.Z; },
  "getBreadcrumbsItems": function() { return /* reexport */ getBreadcrumbsItems/* default */.Z; },
  "getComponentByElementId": function() { return /* reexport */ getComponentByElementId/* default */.Z; },
  "getConverter": function() { return /* reexport */ getConverter/* default */.Z; },
  "getCurrentBreakpoint": function() { return /* reexport */ getCurrentBreakpoint/* default */.Z; },
  "getCurrentStoreState": function() { return /* reexport */ getCurrentStoreState; },
  "getDataByPath": function() { return /* reexport */ getDataByPath/* default */.Z; },
  "getDataFromLocalStorage": function() { return /* reexport */ getDataFromLocalStorage/* default */.Z; },
  "getHTMLElementById": function() { return /* reexport */ getHTMLElementById/* default */.Z; },
  "getMediaQueryByName": function() { return /* reexport */ getMediaQueryByName; },
  "getMediaSettingsByName": function() { return /* reexport */ getMediaSettingsByName; },
  "getNextWeekEnd": function() { return /* reexport */ getNextWeekEnd; },
  "getNextWeekStart": function() { return /* reexport */ getNextWeekStart; },
  "getObjectByPrefix": function() { return /* reexport */ getObjectByPrefix; },
  "getPrevWeekEnd": function() { return /* reexport */ getPrevWeekEnd; },
  "getPrevWeekStart": function() { return /* reexport */ getPrevWeekStart; },
  "getResponsiveSetting": function() { return /* reexport */ getResponsiveSetting/* default */.Z; },
  "getRoutes": function() { return /* reexport */ getRoutes/* default */.Z; },
  "getTimeValue": function() { return /* reexport */ getTimeValue/* default */.Z; },
  "getTopPosition": function() { return /* reexport */ getTopPosition; },
  "getWeekStart": function() { return /* reexport */ getWeekStart; },
  "getWidgetState": function() { return /* reexport */ getWidgetState/* default */.Z; },
  "getWindowWidth": function() { return /* reexport */ getWindowWidth/* default */.Z; },
  "getWrapperHTMLElementByElement": function() { return /* reexport */ getWrapperHTMLElementByElement/* default */.Z; },
  "iconsManager": function() { return /* reexport */ iconsManager/* default */.Z; },
  "isAltrpTestMode": function() { return /* binding */ isAltrpTestMode; },
  "isEditor": function() { return /* reexport */ isEditor/* default */.Z; },
  "isElementTopInViewport": function() { return /* reexport */ isElementTopInViewport; },
  "isJSON": function() { return /* reexport */ isJSON/* default */.Z; },
  "isSSR": function() { return /* reexport */ isSSR/* default */.Z; },
  "isValueMatchMask": function() { return /* binding */ isValueMatchMask; },
  "mbParseJSON": function() { return /* reexport */ mb_parse_JSON/* default */.Z; },
  "parseIDFromYoutubeURL": function() { return /* reexport */ parseIDFromYoutubeURL/* default */.Z; },
  "parseOptionsFromSettings": function() { return /* reexport */ parseOptionsFromSettings/* default */.Z; },
  "parseParamsFromString": function() { return /* reexport */ parseParamsFromString/* default */.Z; },
  "parseStringValue": function() { return /* reexport */ parseStringValue; },
  "parseURLTemplate": function() { return /* reexport */ parseURLTemplate/* default */.Z; },
  "prepareContext": function() { return /* reexport */ prepareContext/* default */.Z; },
  "prepareURLForEmail": function() { return /* reexport */ prepareURLForEmail; },
  "printElements": function() { return /* reexport */ printElements/* default */.Z; },
  "recurseCount": function() { return /* binding */ recurseCount; },
  "redirect": function() { return /* reexport */ redirect/* default */.Z; },
  "renderAsset": function() { return /* reexport */ renderAsset/* default */.Z; },
  "renderAssetIcon": function() { return /* reexport */ renderAssetIcon/* default */.Z; },
  "renderFontLink": function() { return /* binding */ renderFontLink; },
  "renderIcon": function() { return /* reexport */ renderIcon/* default */.Z; },
  "replaceContentWithData": function() { return /* reexport */ replaceContentWithData/* default */.Z; },
  "saveDataToLocalStorage": function() { return /* reexport */ saveDataToLocalStorage/* default */.Z; },
  "scrollToElement": function() { return /* reexport */ scrollToElement/* default */.Z; },
  "scrollbarWidth": function() { return /* reexport */ scrollbarWidth/* default */.Z; },
  "setAltrpIndex": function() { return /* reexport */ setAltrpIndex/* default */.Z; },
  "setDataByPath": function() { return /* reexport */ setDataByPath/* default */.Z; },
  "setTitle": function() { return /* reexport */ setTitle; },
  "sortOptions": function() { return /* reexport */ sortOptions/* default */.Z; },
  "startOfMonth": function() { return /* reexport */ startOfMonth/* default */.Z; },
  "startOfWeek": function() { return /* reexport */ startOfWeek; },
  "startOfYear": function() { return /* reexport */ startOfYear/* default */.Z; },
  "storeWidgetState": function() { return /* reexport */ storeWidgetState/* default */.Z; },
  "validateEmail": function() { return /* reexport */ validateEmail/* default */.Z; },
  "valueReplacement": function() { return /* reexport */ valueReplacement/* default */.Z; }
});

;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/constants/fonts.js
var GOOGLE_FONT = 'google';
var SYSTEM_FONT = 'system'; // <editor-fold desc="Fonts List" defaultstate="collapsed">

var altrpFontsSet = {
  // System fonts.
  'Arial': SYSTEM_FONT,
  'Tahoma': SYSTEM_FONT,
  'Verdana': SYSTEM_FONT,
  'Helvetica': SYSTEM_FONT,
  'Times New Roman': SYSTEM_FONT,
  'Trebuchet MS': SYSTEM_FONT,
  'Georgia': SYSTEM_FONT,
  // Google Fonts (last update: 12/07/2020).
  'ABeeZee': GOOGLE_FONT,
  'Abel': GOOGLE_FONT,
  'Abhaya Libre': GOOGLE_FONT,
  'Abril Fatface': GOOGLE_FONT,
  'Aclonica': GOOGLE_FONT,
  'Acme': GOOGLE_FONT,
  'Actor': GOOGLE_FONT,
  'Adamina': GOOGLE_FONT,
  'Advent Pro': GOOGLE_FONT,
  'Aguafina Script': GOOGLE_FONT,
  'Akronim': GOOGLE_FONT,
  'Aladin': GOOGLE_FONT,
  'Alata': GOOGLE_FONT,
  'Alatsi': GOOGLE_FONT,
  'Aldrich': GOOGLE_FONT,
  'Alef': GOOGLE_FONT,
  'Alegreya': GOOGLE_FONT,
  'Alegreya SC': GOOGLE_FONT,
  'Alegreya Sans': GOOGLE_FONT,
  'Alegreya Sans SC': GOOGLE_FONT,
  'Aleo': GOOGLE_FONT,
  'Alex Brush': GOOGLE_FONT,
  'Alfa Slab One': GOOGLE_FONT,
  'Alice': GOOGLE_FONT,
  'Alike': GOOGLE_FONT,
  'Alike Angular': GOOGLE_FONT,
  'Allan': GOOGLE_FONT,
  'Allerta': GOOGLE_FONT,
  'Allerta Stencil': GOOGLE_FONT,
  'Allura': GOOGLE_FONT,
  'Almarai': GOOGLE_FONT,
  'Almendra': GOOGLE_FONT,
  'Almendra Display': GOOGLE_FONT,
  'Almendra SC': GOOGLE_FONT,
  'Amarante': GOOGLE_FONT,
  'Amaranth': GOOGLE_FONT,
  'Amatic SC': GOOGLE_FONT,
  'Amethysta': GOOGLE_FONT,
  'Amiko': GOOGLE_FONT,
  'Amiri': GOOGLE_FONT,
  'Amita': GOOGLE_FONT,
  'Anaheim': GOOGLE_FONT,
  'Andada': GOOGLE_FONT,
  'Andika': GOOGLE_FONT,
  'Angkor': GOOGLE_FONT,
  'Annie Use Your Telescope': GOOGLE_FONT,
  'Anonymous Pro': GOOGLE_FONT,
  'Antic': GOOGLE_FONT,
  'Antic Didone': GOOGLE_FONT,
  'Antic Slab': GOOGLE_FONT,
  'Anton': GOOGLE_FONT,
  'Arapey': GOOGLE_FONT,
  'Arbutus': GOOGLE_FONT,
  'Arbutus Slab': GOOGLE_FONT,
  'Architects Daughter': GOOGLE_FONT,
  'Archivo': GOOGLE_FONT,
  'Archivo Black': GOOGLE_FONT,
  'Archivo Narrow': GOOGLE_FONT,
  'Aref Ruqaa': GOOGLE_FONT,
  'Arima Madurai': GOOGLE_FONT,
  'Arimo': GOOGLE_FONT,
  'Arizonia': GOOGLE_FONT,
  'Armata': GOOGLE_FONT,
  'Arsenal': GOOGLE_FONT,
  'Artifika': GOOGLE_FONT,
  'Arvo': GOOGLE_FONT,
  'Arya': GOOGLE_FONT,
  'Asap': GOOGLE_FONT,
  'Asap Condensed': GOOGLE_FONT,
  'Asar': GOOGLE_FONT,
  'Asset': GOOGLE_FONT,
  'Assistant': GOOGLE_FONT,
  'Astloch': GOOGLE_FONT,
  'Asul': GOOGLE_FONT,
  'Athiti': GOOGLE_FONT,
  'Atma': GOOGLE_FONT,
  'Atomic Age': GOOGLE_FONT,
  'Aubrey': GOOGLE_FONT,
  'Audiowide': GOOGLE_FONT,
  'Autour One': GOOGLE_FONT,
  'Average': GOOGLE_FONT,
  'Average Sans': GOOGLE_FONT,
  'Averia Gruesa Libre': GOOGLE_FONT,
  'Averia Libre': GOOGLE_FONT,
  'Averia Sans Libre': GOOGLE_FONT,
  'Averia Serif Libre': GOOGLE_FONT,
  'B612': GOOGLE_FONT,
  'B612 Mono': GOOGLE_FONT,
  'Bad Script': GOOGLE_FONT,
  'Bahiana': GOOGLE_FONT,
  'Bahianita': GOOGLE_FONT,
  'Bai Jamjuree': GOOGLE_FONT,
  'Baloo 2': GOOGLE_FONT,
  'Baloo Bhai 2': GOOGLE_FONT,
  'Baloo Bhaina 2': GOOGLE_FONT,
  'Baloo Chettan 2': GOOGLE_FONT,
  'Baloo Da 2': GOOGLE_FONT,
  'Baloo Paaji 2': GOOGLE_FONT,
  'Baloo Tamma 2': GOOGLE_FONT,
  'Baloo Tammudu 2': GOOGLE_FONT,
  'Baloo Thambi 2': GOOGLE_FONT,
  'Balsamiq Sans': GOOGLE_FONT,
  'Balthazar': GOOGLE_FONT,
  'Bangers': GOOGLE_FONT,
  'Barlow': GOOGLE_FONT,
  'Barlow Condensed': GOOGLE_FONT,
  'Barlow Semi Condensed': GOOGLE_FONT,
  'Barriecito': GOOGLE_FONT,
  'Barrio': GOOGLE_FONT,
  'Basic': GOOGLE_FONT,
  'Baskervville': GOOGLE_FONT,
  'Battambang': GOOGLE_FONT,
  'Baumans': GOOGLE_FONT,
  'Bayon': GOOGLE_FONT,
  'Be Vietnam': GOOGLE_FONT,
  'Bebas Neue': GOOGLE_FONT,
  'Belgrano': GOOGLE_FONT,
  'Bellefair': GOOGLE_FONT,
  'Belleza': GOOGLE_FONT,
  'Bellota': GOOGLE_FONT,
  'Bellota Text': GOOGLE_FONT,
  'BenchNine': GOOGLE_FONT,
  'Bentham': GOOGLE_FONT,
  'Berkshire Swash': GOOGLE_FONT,
  'Beth Ellen': GOOGLE_FONT,
  'Bevan': GOOGLE_FONT,
  'Big Shoulders Display': GOOGLE_FONT,
  'Big Shoulders Text': GOOGLE_FONT,
  'Bigelow Rules': GOOGLE_FONT,
  'Bigshot One': GOOGLE_FONT,
  'Bilbo': GOOGLE_FONT,
  'Bilbo Swash Caps': GOOGLE_FONT,
  'BioRhyme': GOOGLE_FONT,
  'BioRhyme Expanded': GOOGLE_FONT,
  'Biryani': GOOGLE_FONT,
  'Bitter': GOOGLE_FONT,
  'Black And White Picture': GOOGLE_FONT,
  'Black Han Sans': GOOGLE_FONT,
  'Black Ops One': GOOGLE_FONT,
  'Blinker': GOOGLE_FONT,
  'Bokor': GOOGLE_FONT,
  'Bonbon': GOOGLE_FONT,
  'Boogaloo': GOOGLE_FONT,
  'Bowlby One': GOOGLE_FONT,
  'Bowlby One SC': GOOGLE_FONT,
  'Brawler': GOOGLE_FONT,
  'Bree Serif': GOOGLE_FONT,
  'Bubblegum Sans': GOOGLE_FONT,
  'Bubbler One': GOOGLE_FONT,
  'Buda': GOOGLE_FONT,
  'Buenard': GOOGLE_FONT,
  'Bungee': GOOGLE_FONT,
  'Bungee Hairline': GOOGLE_FONT,
  'Bungee Inline': GOOGLE_FONT,
  'Bungee Outline': GOOGLE_FONT,
  'Bungee Shade': GOOGLE_FONT,
  'Butcherman': GOOGLE_FONT,
  'Butterfly Kids': GOOGLE_FONT,
  'Cabin': GOOGLE_FONT,
  'Cabin Condensed': GOOGLE_FONT,
  'Cabin Sketch': GOOGLE_FONT,
  'Caesar Dressing': GOOGLE_FONT,
  'Cagliostro': GOOGLE_FONT,
  'Cairo': GOOGLE_FONT,
  'Caladea': GOOGLE_FONT,
  'Calistoga': GOOGLE_FONT,
  'Calligraffitti': GOOGLE_FONT,
  'Cambay': GOOGLE_FONT,
  'Cambo': GOOGLE_FONT,
  'Candal': GOOGLE_FONT,
  'Cantarell': GOOGLE_FONT,
  'Cantata One': GOOGLE_FONT,
  'Cantora One': GOOGLE_FONT,
  'Capriola': GOOGLE_FONT,
  'Cardo': GOOGLE_FONT,
  'Carme': GOOGLE_FONT,
  'Carrois Gothic': GOOGLE_FONT,
  'Carrois Gothic SC': GOOGLE_FONT,
  'Carter One': GOOGLE_FONT,
  'Catamaran': GOOGLE_FONT,
  'Caudex': GOOGLE_FONT,
  'Caveat': GOOGLE_FONT,
  'Caveat Brush': GOOGLE_FONT,
  'Cedarville Cursive': GOOGLE_FONT,
  'Ceviche One': GOOGLE_FONT,
  'Chakra Petch': GOOGLE_FONT,
  'Changa': GOOGLE_FONT,
  'Changa One': GOOGLE_FONT,
  'Chango': GOOGLE_FONT,
  'Charm': GOOGLE_FONT,
  'Charmonman': GOOGLE_FONT,
  'Chathura': GOOGLE_FONT,
  'Chau Philomene One': GOOGLE_FONT,
  'Chela One': GOOGLE_FONT,
  'Chelsea Market': GOOGLE_FONT,
  'Chenla': GOOGLE_FONT,
  'Cherry Cream Soda': GOOGLE_FONT,
  'Cherry Swash': GOOGLE_FONT,
  'Chewy': GOOGLE_FONT,
  'Chicle': GOOGLE_FONT,
  'Chilanka': GOOGLE_FONT,
  'Chivo': GOOGLE_FONT,
  'Chonburi': GOOGLE_FONT,
  'Cinzel': GOOGLE_FONT,
  'Cinzel Decorative': GOOGLE_FONT,
  'Clicker Script': GOOGLE_FONT,
  'Coda': GOOGLE_FONT,
  'Coda Caption': GOOGLE_FONT,
  'Codystar': GOOGLE_FONT,
  'Coiny': GOOGLE_FONT,
  'Combo': GOOGLE_FONT,
  'Comfortaa': GOOGLE_FONT,
  'Comic Neue': GOOGLE_FONT,
  'Coming Soon': GOOGLE_FONT,
  'Concert One': GOOGLE_FONT,
  'Condiment': GOOGLE_FONT,
  'Content': GOOGLE_FONT,
  'Contrail One': GOOGLE_FONT,
  'Convergence': GOOGLE_FONT,
  'Cookie': GOOGLE_FONT,
  'Copse': GOOGLE_FONT,
  'Corben': GOOGLE_FONT,
  'Cormorant': GOOGLE_FONT,
  'Cormorant Garamond': GOOGLE_FONT,
  'Cormorant Infant': GOOGLE_FONT,
  'Cormorant SC': GOOGLE_FONT,
  'Cormorant Unicase': GOOGLE_FONT,
  'Cormorant Upright': GOOGLE_FONT,
  'Courgette': GOOGLE_FONT,
  'Courier Prime': GOOGLE_FONT,
  'Cousine': GOOGLE_FONT,
  'Coustard': GOOGLE_FONT,
  'Covered By Your Grace': GOOGLE_FONT,
  'Crafty Girls': GOOGLE_FONT,
  'Creepster': GOOGLE_FONT,
  'Crete Round': GOOGLE_FONT,
  'Crimson Pro': GOOGLE_FONT,
  'Crimson Text': GOOGLE_FONT,
  'Croissant One': GOOGLE_FONT,
  'Crushed': GOOGLE_FONT,
  'Cuprum': GOOGLE_FONT,
  'Cute Font': GOOGLE_FONT,
  'Cutive': GOOGLE_FONT,
  'Cutive Mono': GOOGLE_FONT,
  'DM Mono': GOOGLE_FONT,
  'DM Sans': GOOGLE_FONT,
  'DM Serif Display': GOOGLE_FONT,
  'DM Serif Text': GOOGLE_FONT,
  'Damion': GOOGLE_FONT,
  'Dancing Script': GOOGLE_FONT,
  'Dangrek': GOOGLE_FONT,
  'Darker Grotesque': GOOGLE_FONT,
  'David Libre': GOOGLE_FONT,
  'Dawning of a New Day': GOOGLE_FONT,
  'Days One': GOOGLE_FONT,
  'Dekko': GOOGLE_FONT,
  'Delius': GOOGLE_FONT,
  'Delius Swash Caps': GOOGLE_FONT,
  'Delius Unicase': GOOGLE_FONT,
  'Della Respira': GOOGLE_FONT,
  'Denk One': GOOGLE_FONT,
  'Devonshire': GOOGLE_FONT,
  'Dhurjati': GOOGLE_FONT,
  'Didact Gothic': GOOGLE_FONT,
  'Diplomata': GOOGLE_FONT,
  'Diplomata SC': GOOGLE_FONT,
  'Do Hyeon': GOOGLE_FONT,
  'Dokdo': GOOGLE_FONT,
  'Domine': GOOGLE_FONT,
  'Donegal One': GOOGLE_FONT,
  'Doppio One': GOOGLE_FONT,
  'Dorsa': GOOGLE_FONT,
  'Dosis': GOOGLE_FONT,
  'Dr Sugiyama': GOOGLE_FONT,
  'Duru Sans': GOOGLE_FONT,
  'Dynalight': GOOGLE_FONT,
  'EB Garamond': GOOGLE_FONT,
  'Eagle Lake': GOOGLE_FONT,
  'East Sea Dokdo': GOOGLE_FONT,
  'Eater': GOOGLE_FONT,
  'Economica': GOOGLE_FONT,
  'Eczar': GOOGLE_FONT,
  'El Messiri': GOOGLE_FONT,
  'Electrolize': GOOGLE_FONT,
  'Elsie': GOOGLE_FONT,
  'Elsie Swash Caps': GOOGLE_FONT,
  'Emblema One': GOOGLE_FONT,
  'Emilys Candy': GOOGLE_FONT,
  'Encode Sans': GOOGLE_FONT,
  'Encode Sans Condensed': GOOGLE_FONT,
  'Encode Sans Expanded': GOOGLE_FONT,
  'Encode Sans Semi Condensed': GOOGLE_FONT,
  'Encode Sans Semi Expanded': GOOGLE_FONT,
  'Engagement': GOOGLE_FONT,
  'Englebert': GOOGLE_FONT,
  'Enriqueta': GOOGLE_FONT,
  'Erica One': GOOGLE_FONT,
  'Esteban': GOOGLE_FONT,
  'Euphoria Script': GOOGLE_FONT,
  'Ewert': GOOGLE_FONT,
  'Exo': GOOGLE_FONT,
  'Exo 2': GOOGLE_FONT,
  'Expletus Sans': GOOGLE_FONT,
  'Fahkwang': GOOGLE_FONT,
  'Fanwood Text': GOOGLE_FONT,
  'Farro': GOOGLE_FONT,
  'Farsan': GOOGLE_FONT,
  'Fascinate': GOOGLE_FONT,
  'Fascinate Inline': GOOGLE_FONT,
  'Faster One': GOOGLE_FONT,
  'Fasthand': GOOGLE_FONT,
  'Fauna One': GOOGLE_FONT,
  'Faustina': GOOGLE_FONT,
  'Federant': GOOGLE_FONT,
  'Federo': GOOGLE_FONT,
  'Felipa': GOOGLE_FONT,
  'Fenix': GOOGLE_FONT,
  'Finger Paint': GOOGLE_FONT,
  'Fira Code': GOOGLE_FONT,
  'Fira Mono': GOOGLE_FONT,
  'Fira Sans': GOOGLE_FONT,
  'Fira Sans Condensed': GOOGLE_FONT,
  'Fira Sans Extra Condensed': GOOGLE_FONT,
  'Fjalla One': GOOGLE_FONT,
  'Fjord One': GOOGLE_FONT,
  'Flamenco': GOOGLE_FONT,
  'Flavors': GOOGLE_FONT,
  'Fondamento': GOOGLE_FONT,
  'Fontdiner Swanky': GOOGLE_FONT,
  'Forum': GOOGLE_FONT,
  'Francois One': GOOGLE_FONT,
  'Frank Ruhl Libre': GOOGLE_FONT,
  'Freckle Face': GOOGLE_FONT,
  'Fredericka the Great': GOOGLE_FONT,
  'Fredoka One': GOOGLE_FONT,
  'Freehand': GOOGLE_FONT,
  'Fresca': GOOGLE_FONT,
  'Frijole': GOOGLE_FONT,
  'Fruktur': GOOGLE_FONT,
  'Fugaz One': GOOGLE_FONT,
  'GFS Didot': GOOGLE_FONT,
  'GFS Neohellenic': GOOGLE_FONT,
  'Gabriela': GOOGLE_FONT,
  'Gaegu': GOOGLE_FONT,
  'Gafata': GOOGLE_FONT,
  'Galada': GOOGLE_FONT,
  'Galdeano': GOOGLE_FONT,
  'Galindo': GOOGLE_FONT,
  'Gamja Flower': GOOGLE_FONT,
  'Gayathri': GOOGLE_FONT,
  'Gelasio': GOOGLE_FONT,
  'Gentium Basic': GOOGLE_FONT,
  'Gentium Book Basic': GOOGLE_FONT,
  'Geo': GOOGLE_FONT,
  'Geostar': GOOGLE_FONT,
  'Geostar Fill': GOOGLE_FONT,
  'Germania One': GOOGLE_FONT,
  'Gidugu': GOOGLE_FONT,
  'Gilda Display': GOOGLE_FONT,
  'Girassol': GOOGLE_FONT,
  'Give You Glory': GOOGLE_FONT,
  'Glass Antiqua': GOOGLE_FONT,
  'Glegoo': GOOGLE_FONT,
  'Gloria Hallelujah': GOOGLE_FONT,
  'Goblin One': GOOGLE_FONT,
  'Gochi Hand': GOOGLE_FONT,
  'Gorditas': GOOGLE_FONT,
  'Gothic A1': GOOGLE_FONT,
  'Gotu': GOOGLE_FONT,
  'Goudy Bookletter 1911': GOOGLE_FONT,
  'Graduate': GOOGLE_FONT,
  'Grand Hotel': GOOGLE_FONT,
  'Gravitas One': GOOGLE_FONT,
  'Great Vibes': GOOGLE_FONT,
  'Grenze': GOOGLE_FONT,
  'Grenze Gotisch': GOOGLE_FONT,
  'Griffy': GOOGLE_FONT,
  'Gruppo': GOOGLE_FONT,
  'Gudea': GOOGLE_FONT,
  'Gugi': GOOGLE_FONT,
  'Gupter': GOOGLE_FONT,
  'Gurajada': GOOGLE_FONT,
  'Habibi': GOOGLE_FONT,
  'Halant': GOOGLE_FONT,
  'Hammersmith One': GOOGLE_FONT,
  'Hanalei': GOOGLE_FONT,
  'Hanalei Fill': GOOGLE_FONT,
  'Handlee': GOOGLE_FONT,
  'Hanuman': GOOGLE_FONT,
  'Happy Monkey': GOOGLE_FONT,
  'Harmattan': GOOGLE_FONT,
  'Headland One': GOOGLE_FONT,
  'Heebo': GOOGLE_FONT,
  'Henny Penny': GOOGLE_FONT,
  'Hepta Slab': GOOGLE_FONT,
  'Herr Von Muellerhoff': GOOGLE_FONT,
  'Hi Melody': GOOGLE_FONT,
  'Hind': GOOGLE_FONT,
  'Hind Guntur': GOOGLE_FONT,
  'Hind Madurai': GOOGLE_FONT,
  'Hind Siliguri': GOOGLE_FONT,
  'Hind Vadodara': GOOGLE_FONT,
  'Holtwood One SC': GOOGLE_FONT,
  'Homemade Apple': GOOGLE_FONT,
  'Homenaje': GOOGLE_FONT,
  'IBM Plex Mono': GOOGLE_FONT,
  'IBM Plex Sans': GOOGLE_FONT,
  'IBM Plex Sans Condensed': GOOGLE_FONT,
  'IBM Plex Serif': GOOGLE_FONT,
  'IM Fell DW Pica': GOOGLE_FONT,
  'IM Fell DW Pica SC': GOOGLE_FONT,
  'IM Fell Double Pica': GOOGLE_FONT,
  'IM Fell Double Pica SC': GOOGLE_FONT,
  'IM Fell English': GOOGLE_FONT,
  'IM Fell English SC': GOOGLE_FONT,
  'IM Fell French Canon': GOOGLE_FONT,
  'IM Fell French Canon SC': GOOGLE_FONT,
  'IM Fell Great Primer': GOOGLE_FONT,
  'IM Fell Great Primer SC': GOOGLE_FONT,
  'Ibarra Real Nova': GOOGLE_FONT,
  'Iceberg': GOOGLE_FONT,
  'Iceland': GOOGLE_FONT,
  'Imprima': GOOGLE_FONT,
  'Inconsolata': GOOGLE_FONT,
  'Inder': GOOGLE_FONT,
  'Indie Flower': GOOGLE_FONT,
  'Inika': GOOGLE_FONT,
  'Inknut Antiqua': GOOGLE_FONT,
  'Inria Sans': GOOGLE_FONT,
  'Inria Serif': GOOGLE_FONT,
  'Inter': GOOGLE_FONT,
  'Irish Grover': GOOGLE_FONT,
  'Istok Web': GOOGLE_FONT,
  'Italiana': GOOGLE_FONT,
  'Italianno': GOOGLE_FONT,
  'Itim': GOOGLE_FONT,
  'Jacques Francois': GOOGLE_FONT,
  'Jacques Francois Shadow': GOOGLE_FONT,
  'Jaldi': GOOGLE_FONT,
  'Jim Nightshade': GOOGLE_FONT,
  'Jockey One': GOOGLE_FONT,
  'Jolly Lodger': GOOGLE_FONT,
  'Jomhuria': GOOGLE_FONT,
  'Jomolhari': GOOGLE_FONT,
  'Josefin Sans': GOOGLE_FONT,
  'Josefin Slab': GOOGLE_FONT,
  'Jost': GOOGLE_FONT,
  'Joti One': GOOGLE_FONT,
  'Jua': GOOGLE_FONT,
  'Judson': GOOGLE_FONT,
  'Julee': GOOGLE_FONT,
  'Julius Sans One': GOOGLE_FONT,
  'Junge': GOOGLE_FONT,
  'Jura': GOOGLE_FONT,
  'Just Another Hand': GOOGLE_FONT,
  'Just Me Again Down Here': GOOGLE_FONT,
  'K2D': GOOGLE_FONT,
  'Kadwa': GOOGLE_FONT,
  'Kalam': GOOGLE_FONT,
  'Kameron': GOOGLE_FONT,
  'Kanit': GOOGLE_FONT,
  'Kantumruy': GOOGLE_FONT,
  'Karla': GOOGLE_FONT,
  'Karma': GOOGLE_FONT,
  'Katibeh': GOOGLE_FONT,
  'Kaushan Script': GOOGLE_FONT,
  'Kavivanar': GOOGLE_FONT,
  'Kavoon': GOOGLE_FONT,
  'Kdam Thmor': GOOGLE_FONT,
  'Keania One': GOOGLE_FONT,
  'Kelly Slab': GOOGLE_FONT,
  'Kenia': GOOGLE_FONT,
  'Khand': GOOGLE_FONT,
  'Khmer': GOOGLE_FONT,
  'Khula': GOOGLE_FONT,
  'Kirang Haerang': GOOGLE_FONT,
  'Kite One': GOOGLE_FONT,
  'Knewave': GOOGLE_FONT,
  'KoHo': GOOGLE_FONT,
  'Kodchasan': GOOGLE_FONT,
  'Kosugi': GOOGLE_FONT,
  'Kosugi Maru': GOOGLE_FONT,
  'Kotta One': GOOGLE_FONT,
  'Koulen': GOOGLE_FONT,
  'Kranky': GOOGLE_FONT,
  'Kreon': GOOGLE_FONT,
  'Kristi': GOOGLE_FONT,
  'Krona One': GOOGLE_FONT,
  'Krub': GOOGLE_FONT,
  'Kulim Park': GOOGLE_FONT,
  'Kumar One': GOOGLE_FONT,
  'Kumar One Outline': GOOGLE_FONT,
  'Kurale': GOOGLE_FONT,
  'La Belle Aurore': GOOGLE_FONT,
  'Lacquer': GOOGLE_FONT,
  'Laila': GOOGLE_FONT,
  'Lakki Reddy': GOOGLE_FONT,
  'Lalezar': GOOGLE_FONT,
  'Lancelot': GOOGLE_FONT,
  'Lateef': GOOGLE_FONT,
  'Lato': GOOGLE_FONT,
  'League Script': GOOGLE_FONT,
  'Leckerli One': GOOGLE_FONT,
  'Ledger': GOOGLE_FONT,
  'Lekton': GOOGLE_FONT,
  'Lemon': GOOGLE_FONT,
  'Lemonada': GOOGLE_FONT,
  'Lexend Deca': GOOGLE_FONT,
  'Lexend Exa': GOOGLE_FONT,
  'Lexend Giga': GOOGLE_FONT,
  'Lexend Mega': GOOGLE_FONT,
  'Lexend Peta': GOOGLE_FONT,
  'Lexend Tera': GOOGLE_FONT,
  'Lexend Zetta': GOOGLE_FONT,
  'Libre Barcode 128': GOOGLE_FONT,
  'Libre Barcode 128 Text': GOOGLE_FONT,
  'Libre Barcode 39': GOOGLE_FONT,
  'Libre Barcode 39 Extended': GOOGLE_FONT,
  'Libre Barcode 39 Extended Text': GOOGLE_FONT,
  'Libre Barcode 39 Text': GOOGLE_FONT,
  'Libre Baskerville': GOOGLE_FONT,
  'Libre Caslon Display': GOOGLE_FONT,
  'Libre Caslon Text': GOOGLE_FONT,
  'Libre Franklin': GOOGLE_FONT,
  'Life Savers': GOOGLE_FONT,
  'Lilita One': GOOGLE_FONT,
  'Lily Script One': GOOGLE_FONT,
  'Limelight': GOOGLE_FONT,
  'Linden Hill': GOOGLE_FONT,
  'Literata': GOOGLE_FONT,
  'Liu Jian Mao Cao': GOOGLE_FONT,
  'Livvic': GOOGLE_FONT,
  'Lobster': GOOGLE_FONT,
  'Lobster Two': GOOGLE_FONT,
  'Londrina Outline': GOOGLE_FONT,
  'Londrina Shadow': GOOGLE_FONT,
  'Londrina Sketch': GOOGLE_FONT,
  'Londrina Solid': GOOGLE_FONT,
  'Long Cang': GOOGLE_FONT,
  'Lora': GOOGLE_FONT,
  'Love Ya Like A Sister': GOOGLE_FONT,
  'Loved by the King': GOOGLE_FONT,
  'Lovers Quarrel': GOOGLE_FONT,
  'Luckiest Guy': GOOGLE_FONT,
  'Lusitana': GOOGLE_FONT,
  'Lustria': GOOGLE_FONT,
  'M PLUS 1p': GOOGLE_FONT,
  'M PLUS Rounded 1c': GOOGLE_FONT,
  'Ma Shan Zheng': GOOGLE_FONT,
  'Macondo': GOOGLE_FONT,
  'Macondo Swash Caps': GOOGLE_FONT,
  'Mada': GOOGLE_FONT,
  'Magra': GOOGLE_FONT,
  'Maiden Orange': GOOGLE_FONT,
  'Maitree': GOOGLE_FONT,
  'Major Mono Display': GOOGLE_FONT,
  'Mako': GOOGLE_FONT,
  'Mali': GOOGLE_FONT,
  'Mallanna': GOOGLE_FONT,
  'Mandali': GOOGLE_FONT,
  'Manjari': GOOGLE_FONT,
  'Manrope': GOOGLE_FONT,
  'Mansalva': GOOGLE_FONT,
  'Manuale': GOOGLE_FONT,
  'Marcellus': GOOGLE_FONT,
  'Marcellus SC': GOOGLE_FONT,
  'Marck Script': GOOGLE_FONT,
  'Margarine': GOOGLE_FONT,
  'Markazi Text': GOOGLE_FONT,
  'Marko One': GOOGLE_FONT,
  'Marmelad': GOOGLE_FONT,
  'Martel': GOOGLE_FONT,
  'Martel Sans': GOOGLE_FONT,
  'Marvel': GOOGLE_FONT,
  'Mate': GOOGLE_FONT,
  'Mate SC': GOOGLE_FONT,
  'Maven Pro': GOOGLE_FONT,
  'McLaren': GOOGLE_FONT,
  'Meddon': GOOGLE_FONT,
  'MedievalSharp': GOOGLE_FONT,
  'Medula One': GOOGLE_FONT,
  'Meera Inimai': GOOGLE_FONT,
  'Megrim': GOOGLE_FONT,
  'Meie Script': GOOGLE_FONT,
  'Merienda': GOOGLE_FONT,
  'Merienda One': GOOGLE_FONT,
  'Merriweather': GOOGLE_FONT,
  'Merriweather Sans': GOOGLE_FONT,
  'Metal': GOOGLE_FONT,
  'Metal Mania': GOOGLE_FONT,
  'Metamorphous': GOOGLE_FONT,
  'Metrophobic': GOOGLE_FONT,
  'Michroma': GOOGLE_FONT,
  'Milonga': GOOGLE_FONT,
  'Miltonian': GOOGLE_FONT,
  'Miltonian Tattoo': GOOGLE_FONT,
  'Mina': GOOGLE_FONT,
  'Miniver': GOOGLE_FONT,
  'Miriam Libre': GOOGLE_FONT,
  'Mirza': GOOGLE_FONT,
  'Miss Fajardose': GOOGLE_FONT,
  'Mitr': GOOGLE_FONT,
  'Modak': GOOGLE_FONT,
  'Modern Antiqua': GOOGLE_FONT,
  'Mogra': GOOGLE_FONT,
  'Molengo': GOOGLE_FONT,
  'Molle': GOOGLE_FONT,
  'Monda': GOOGLE_FONT,
  'Monofett': GOOGLE_FONT,
  'Monoton': GOOGLE_FONT,
  'Monsieur La Doulaise': GOOGLE_FONT,
  'Montaga': GOOGLE_FONT,
  'Montez': GOOGLE_FONT,
  'Montserrat': GOOGLE_FONT,
  'Montserrat Alternates': GOOGLE_FONT,
  'Montserrat Subrayada': GOOGLE_FONT,
  'Moul': GOOGLE_FONT,
  'Moulpali': GOOGLE_FONT,
  'Mountains of Christmas': GOOGLE_FONT,
  'Mouse Memoirs': GOOGLE_FONT,
  'Mr Bedfort': GOOGLE_FONT,
  'Mr Dafoe': GOOGLE_FONT,
  'Mr De Haviland': GOOGLE_FONT,
  'Mrs Saint Delafield': GOOGLE_FONT,
  'Mrs Sheppards': GOOGLE_FONT,
  'Mukta': GOOGLE_FONT,
  'Mukta Mahee': GOOGLE_FONT,
  'Mukta Malar': GOOGLE_FONT,
  'Mukta Vaani': GOOGLE_FONT,
  'Muli': GOOGLE_FONT,
  'MuseoModerno': GOOGLE_FONT,
  'Mystery Quest': GOOGLE_FONT,
  'NTR': GOOGLE_FONT,
  'Nanum Brush Script': GOOGLE_FONT,
  'Nanum Gothic': GOOGLE_FONT,
  'Nanum Gothic Coding': GOOGLE_FONT,
  'Nanum Myeongjo': GOOGLE_FONT,
  'Nanum Pen Script': GOOGLE_FONT,
  'Neucha': GOOGLE_FONT,
  'Neuton': GOOGLE_FONT,
  'New Rocker': GOOGLE_FONT,
  'News Cycle': GOOGLE_FONT,
  'Niconne': GOOGLE_FONT,
  'Niramit': GOOGLE_FONT,
  'Nixie One': GOOGLE_FONT,
  'Nobile': GOOGLE_FONT,
  'Nokora': GOOGLE_FONT,
  'Norican': GOOGLE_FONT,
  'Nosifer': GOOGLE_FONT,
  'Notable': GOOGLE_FONT,
  'Nothing You Could Do': GOOGLE_FONT,
  'Noticia Text': GOOGLE_FONT,
  'Noto Sans': GOOGLE_FONT,
  'Noto Sans HK': GOOGLE_FONT,
  'Noto Sans JP': GOOGLE_FONT,
  'Noto Sans KR': GOOGLE_FONT,
  'Noto Sans SC': GOOGLE_FONT,
  'Noto Sans TC': GOOGLE_FONT,
  'Noto Serif': GOOGLE_FONT,
  'Noto Serif JP': GOOGLE_FONT,
  'Noto Serif KR': GOOGLE_FONT,
  'Noto Serif SC': GOOGLE_FONT,
  'Noto Serif TC': GOOGLE_FONT,
  'Nova Cut': GOOGLE_FONT,
  'Nova Flat': GOOGLE_FONT,
  'Nova Mono': GOOGLE_FONT,
  'Nova Oval': GOOGLE_FONT,
  'Nova Round': GOOGLE_FONT,
  'Nova Script': GOOGLE_FONT,
  'Nova Slim': GOOGLE_FONT,
  'Nova Square': GOOGLE_FONT,
  'Numans': GOOGLE_FONT,
  'Nunito': GOOGLE_FONT,
  'Nunito Sans': GOOGLE_FONT,
  'Odibee Sans': GOOGLE_FONT,
  'Odor Mean Chey': GOOGLE_FONT,
  'Offside': GOOGLE_FONT,
  'Old Standard TT': GOOGLE_FONT,
  'Oldenburg': GOOGLE_FONT,
  'Oleo Script': GOOGLE_FONT,
  'Oleo Script Swash Caps': GOOGLE_FONT,
  'Open Sans': GOOGLE_FONT,
  'Open Sans Condensed': GOOGLE_FONT,
  'Oranienbaum': GOOGLE_FONT,
  'Orbitron': GOOGLE_FONT,
  'Oregano': GOOGLE_FONT,
  'Orienta': GOOGLE_FONT,
  'Original Surfer': GOOGLE_FONT,
  'Oswald': GOOGLE_FONT,
  'Over the Rainbow': GOOGLE_FONT,
  'Overlock': GOOGLE_FONT,
  'Overlock SC': GOOGLE_FONT,
  'Overpass': GOOGLE_FONT,
  'Overpass Mono': GOOGLE_FONT,
  'Ovo': GOOGLE_FONT,
  'Oxanium': GOOGLE_FONT,
  'Oxygen': GOOGLE_FONT,
  'Oxygen Mono': GOOGLE_FONT,
  'PT Mono': GOOGLE_FONT,
  'PT Sans': GOOGLE_FONT,
  'PT Sans Caption': GOOGLE_FONT,
  'PT Sans Narrow': GOOGLE_FONT,
  'PT Serif': GOOGLE_FONT,
  'PT Serif Caption': GOOGLE_FONT,
  'Pacifico': GOOGLE_FONT,
  'Padauk': GOOGLE_FONT,
  'Palanquin': GOOGLE_FONT,
  'Palanquin Dark': GOOGLE_FONT,
  'Pangolin': GOOGLE_FONT,
  'Paprika': GOOGLE_FONT,
  'Parisienne': GOOGLE_FONT,
  'Passero One': GOOGLE_FONT,
  'Passion One': GOOGLE_FONT,
  'Pathway Gothic One': GOOGLE_FONT,
  'Patrick Hand': GOOGLE_FONT,
  'Patrick Hand SC': GOOGLE_FONT,
  'Pattaya': GOOGLE_FONT,
  'Patua One': GOOGLE_FONT,
  'Pavanam': GOOGLE_FONT,
  'Paytone One': GOOGLE_FONT,
  'Peddana': GOOGLE_FONT,
  'Peralta': GOOGLE_FONT,
  'Permanent Marker': GOOGLE_FONT,
  'Petit Formal Script': GOOGLE_FONT,
  'Petrona': GOOGLE_FONT,
  'Philosopher': GOOGLE_FONT,
  'Piedra': GOOGLE_FONT,
  'Pinyon Script': GOOGLE_FONT,
  'Pirata One': GOOGLE_FONT,
  'Plaster': GOOGLE_FONT,
  'Play': GOOGLE_FONT,
  'Playball': GOOGLE_FONT,
  'Playfair Display': GOOGLE_FONT,
  'Playfair Display SC': GOOGLE_FONT,
  'Podkova': GOOGLE_FONT,
  'Poiret One': GOOGLE_FONT,
  'Poller One': GOOGLE_FONT,
  'Poly': GOOGLE_FONT,
  'Pompiere': GOOGLE_FONT,
  'Pontano Sans': GOOGLE_FONT,
  'Poor Story': GOOGLE_FONT,
  'Poppins': GOOGLE_FONT,
  'Port Lligat Sans': GOOGLE_FONT,
  'Port Lligat Slab': GOOGLE_FONT,
  'Pragati Narrow': GOOGLE_FONT,
  'Prata': GOOGLE_FONT,
  'Preahvihear': GOOGLE_FONT,
  'Press Start 2P': GOOGLE_FONT,
  'Pridi': GOOGLE_FONT,
  'Princess Sofia': GOOGLE_FONT,
  'Prociono': GOOGLE_FONT,
  'Prompt': GOOGLE_FONT,
  'Prosto One': GOOGLE_FONT,
  'Proza Libre': GOOGLE_FONT,
  'Public Sans': GOOGLE_FONT,
  'Puritan': GOOGLE_FONT,
  'Purple Purse': GOOGLE_FONT,
  'Quando': GOOGLE_FONT,
  'Quantico': GOOGLE_FONT,
  'Quattrocento': GOOGLE_FONT,
  'Quattrocento Sans': GOOGLE_FONT,
  'Questrial': GOOGLE_FONT,
  'Quicksand': GOOGLE_FONT,
  'Quintessential': GOOGLE_FONT,
  'Qwigley': GOOGLE_FONT,
  'Racing Sans One': GOOGLE_FONT,
  'Radley': GOOGLE_FONT,
  'Rajdhani': GOOGLE_FONT,
  'Rakkas': GOOGLE_FONT,
  'Raleway': GOOGLE_FONT,
  'Raleway Dots': GOOGLE_FONT,
  'Ramabhadra': GOOGLE_FONT,
  'Ramaraja': GOOGLE_FONT,
  'Rambla': GOOGLE_FONT,
  'Rammetto One': GOOGLE_FONT,
  'Ranchers': GOOGLE_FONT,
  'Rancho': GOOGLE_FONT,
  'Ranga': GOOGLE_FONT,
  'Rasa': GOOGLE_FONT,
  'Rationale': GOOGLE_FONT,
  'Ravi Prakash': GOOGLE_FONT,
  'Red Hat Display': GOOGLE_FONT,
  'Red Hat Text': GOOGLE_FONT,
  'Redressed': GOOGLE_FONT,
  'Reem Kufi': GOOGLE_FONT,
  'Reenie Beanie': GOOGLE_FONT,
  'Revalia': GOOGLE_FONT,
  'Rhodium Libre': GOOGLE_FONT,
  'Ribeye': GOOGLE_FONT,
  'Ribeye Marrow': GOOGLE_FONT,
  'Righteous': GOOGLE_FONT,
  'Risque': GOOGLE_FONT,
  'Roboto': GOOGLE_FONT,
  'Roboto Condensed': GOOGLE_FONT,
  'Roboto Mono': GOOGLE_FONT,
  'Roboto Slab': GOOGLE_FONT,
  'Rochester': GOOGLE_FONT,
  'Rock Salt': GOOGLE_FONT,
  'Rokkitt': GOOGLE_FONT,
  'Romanesco': GOOGLE_FONT,
  'Ropa Sans': GOOGLE_FONT,
  'Rosario': GOOGLE_FONT,
  'Rosarivo': GOOGLE_FONT,
  'Rouge Script': GOOGLE_FONT,
  'Rozha One': GOOGLE_FONT,
  'Rubik': GOOGLE_FONT,
  'Rubik Mono One': GOOGLE_FONT,
  'Ruda': GOOGLE_FONT,
  'Rufina': GOOGLE_FONT,
  'Ruge Boogie': GOOGLE_FONT,
  'Ruluko': GOOGLE_FONT,
  'Rum Raisin': GOOGLE_FONT,
  'Ruslan Display': GOOGLE_FONT,
  'Russo One': GOOGLE_FONT,
  'Ruthie': GOOGLE_FONT,
  'Rye': GOOGLE_FONT,
  'Sacramento': GOOGLE_FONT,
  'Sahitya': GOOGLE_FONT,
  'Sail': GOOGLE_FONT,
  'Saira': GOOGLE_FONT,
  'Saira Condensed': GOOGLE_FONT,
  'Saira Extra Condensed': GOOGLE_FONT,
  'Saira Semi Condensed': GOOGLE_FONT,
  'Saira Stencil One': GOOGLE_FONT,
  'Salsa': GOOGLE_FONT,
  'Sanchez': GOOGLE_FONT,
  'Sancreek': GOOGLE_FONT,
  'Sansita': GOOGLE_FONT,
  'Sarabun': GOOGLE_FONT,
  'Sarala': GOOGLE_FONT,
  'Sarina': GOOGLE_FONT,
  'Sarpanch': GOOGLE_FONT,
  'Satisfy': GOOGLE_FONT,
  'Sawarabi Gothic': GOOGLE_FONT,
  'Sawarabi Mincho': GOOGLE_FONT,
  'Scada': GOOGLE_FONT,
  'Scheherazade': GOOGLE_FONT,
  'Schoolbell': GOOGLE_FONT,
  'Scope One': GOOGLE_FONT,
  'Seaweed Script': GOOGLE_FONT,
  'Secular One': GOOGLE_FONT,
  'Sedgwick Ave': GOOGLE_FONT,
  'Sedgwick Ave Display': GOOGLE_FONT,
  'Sen': GOOGLE_FONT,
  'Sevillana': GOOGLE_FONT,
  'Seymour One': GOOGLE_FONT,
  'Shadows Into Light': GOOGLE_FONT,
  'Shadows Into Light Two': GOOGLE_FONT,
  'Shanti': GOOGLE_FONT,
  'Share': GOOGLE_FONT,
  'Share Tech': GOOGLE_FONT,
  'Share Tech Mono': GOOGLE_FONT,
  'Shojumaru': GOOGLE_FONT,
  'Short Stack': GOOGLE_FONT,
  'Shrikhand': GOOGLE_FONT,
  'Siemreap': GOOGLE_FONT,
  'Sigmar One': GOOGLE_FONT,
  'Signika': GOOGLE_FONT,
  'Signika Negative': GOOGLE_FONT,
  'Simonetta': GOOGLE_FONT,
  'Single Day': GOOGLE_FONT,
  'Sintony': GOOGLE_FONT,
  'Sirin Stencil': GOOGLE_FONT,
  'Six Caps': GOOGLE_FONT,
  'Skranji': GOOGLE_FONT,
  'Slabo 13px': GOOGLE_FONT,
  'Slabo 27px': GOOGLE_FONT,
  'Slackey': GOOGLE_FONT,
  'Smokum': GOOGLE_FONT,
  'Smythe': GOOGLE_FONT,
  'Sniglet': GOOGLE_FONT,
  'Snippet': GOOGLE_FONT,
  'Snowburst One': GOOGLE_FONT,
  'Sofadi One': GOOGLE_FONT,
  'Sofia': GOOGLE_FONT,
  'Solway': GOOGLE_FONT,
  'Song Myung': GOOGLE_FONT,
  'Sonsie One': GOOGLE_FONT,
  'Sorts Mill Goudy': GOOGLE_FONT,
  'Source Code Pro': GOOGLE_FONT,
  'Source Sans Pro': GOOGLE_FONT,
  'Source Serif Pro': GOOGLE_FONT,
  'Space Mono': GOOGLE_FONT,
  'Spartan': GOOGLE_FONT,
  'Special Elite': GOOGLE_FONT,
  'Spectral': GOOGLE_FONT,
  'Spectral SC': GOOGLE_FONT,
  'Spicy Rice': GOOGLE_FONT,
  'Spinnaker': GOOGLE_FONT,
  'Spirax': GOOGLE_FONT,
  'Squada One': GOOGLE_FONT,
  'Sree Krushnadevaraya': GOOGLE_FONT,
  'Sriracha': GOOGLE_FONT,
  'Srisakdi': GOOGLE_FONT,
  'Staatliches': GOOGLE_FONT,
  'Stalemate': GOOGLE_FONT,
  'Stalinist One': GOOGLE_FONT,
  'Stardos Stencil': GOOGLE_FONT,
  'Stint Ultra Condensed': GOOGLE_FONT,
  'Stint Ultra Expanded': GOOGLE_FONT,
  'Stoke': GOOGLE_FONT,
  'Strait': GOOGLE_FONT,
  'Stylish': GOOGLE_FONT,
  'Sue Ellen Francisco': GOOGLE_FONT,
  'Suez One': GOOGLE_FONT,
  'Sulphur Point': GOOGLE_FONT,
  'Sumana': GOOGLE_FONT,
  'Sunflower': GOOGLE_FONT,
  'Sunshiney': GOOGLE_FONT,
  'Supermercado One': GOOGLE_FONT,
  'Sura': GOOGLE_FONT,
  'Suranna': GOOGLE_FONT,
  'Suravaram': GOOGLE_FONT,
  'Suwannaphum': GOOGLE_FONT,
  'Swanky and Moo Moo': GOOGLE_FONT,
  'Syncopate': GOOGLE_FONT,
  'Tajawal': GOOGLE_FONT,
  'Tangerine': GOOGLE_FONT,
  'Taprom': GOOGLE_FONT,
  'Tauri': GOOGLE_FONT,
  'Taviraj': GOOGLE_FONT,
  'Teko': GOOGLE_FONT,
  'Telex': GOOGLE_FONT,
  'Tenali Ramakrishna': GOOGLE_FONT,
  'Tenor Sans': GOOGLE_FONT,
  'Text Me One': GOOGLE_FONT,
  'Thasadith': GOOGLE_FONT,
  'The Girl Next Door': GOOGLE_FONT,
  'Tienne': GOOGLE_FONT,
  'Tillana': GOOGLE_FONT,
  'Timmana': GOOGLE_FONT,
  'Tinos': GOOGLE_FONT,
  'Titan One': GOOGLE_FONT,
  'Titillium Web': GOOGLE_FONT,
  'Tomorrow': GOOGLE_FONT,
  'Trade Winds': GOOGLE_FONT,
  'Trirong': GOOGLE_FONT,
  'Trocchi': GOOGLE_FONT,
  'Trochut': GOOGLE_FONT,
  'Trykker': GOOGLE_FONT,
  'Tulpen One': GOOGLE_FONT,
  'Turret Road': GOOGLE_FONT,
  'Ubuntu': GOOGLE_FONT,
  'Ubuntu Condensed': GOOGLE_FONT,
  'Ubuntu Mono': GOOGLE_FONT,
  'Ultra': GOOGLE_FONT,
  'Uncial Antiqua': GOOGLE_FONT,
  'Underdog': GOOGLE_FONT,
  'Unica One': GOOGLE_FONT,
  'UnifrakturCook': GOOGLE_FONT,
  'UnifrakturMaguntia': GOOGLE_FONT,
  'Unkempt': GOOGLE_FONT,
  'Unlock': GOOGLE_FONT,
  'Unna': GOOGLE_FONT,
  'VT323': GOOGLE_FONT,
  'Vampiro One': GOOGLE_FONT,
  'Varela': GOOGLE_FONT,
  'Varela Round': GOOGLE_FONT,
  'Vast Shadow': GOOGLE_FONT,
  'Vesper Libre': GOOGLE_FONT,
  'Viaoda Libre': GOOGLE_FONT,
  'Vibes': GOOGLE_FONT,
  'Vibur': GOOGLE_FONT,
  'Vidaloka': GOOGLE_FONT,
  'Viga': GOOGLE_FONT,
  'Voces': GOOGLE_FONT,
  'Volkhov': GOOGLE_FONT,
  'Vollkorn': GOOGLE_FONT,
  'Vollkorn SC': GOOGLE_FONT,
  'Voltaire': GOOGLE_FONT,
  'Waiting for the Sunrise': GOOGLE_FONT,
  'Wallpoet': GOOGLE_FONT,
  'Walter Turncoat': GOOGLE_FONT,
  'Warnes': GOOGLE_FONT,
  'Wellfleet': GOOGLE_FONT,
  'Wendy One': GOOGLE_FONT,
  'Wire One': GOOGLE_FONT,
  'Work Sans': GOOGLE_FONT,
  'Yanone Kaffeesatz': GOOGLE_FONT,
  'Yantramanav': GOOGLE_FONT,
  'Yatra One': GOOGLE_FONT,
  'Yellowtail': GOOGLE_FONT,
  'Yeon Sung': GOOGLE_FONT,
  'Yeseva One': GOOGLE_FONT,
  'Yesteryear': GOOGLE_FONT,
  'Yrsa': GOOGLE_FONT,
  'ZCOOL KuaiLe': GOOGLE_FONT,
  'ZCOOL QingKe HuangYou': GOOGLE_FONT,
  'ZCOOL XiaoWei': GOOGLE_FONT,
  'Zeyada': GOOGLE_FONT,
  'Zhi Mang Xing': GOOGLE_FONT,
  'Zilla Slab': GOOGLE_FONT,
  'Zilla Slab Highlight': GOOGLE_FONT
}; // </editor-fold>
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/replaceContentWithData.js
var replaceContentWithData = __webpack_require__(26078);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getDataByPath.js
var getDataByPath = __webpack_require__(17297);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getComponentByElementId.js
var getComponentByElementId = __webpack_require__(66086);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getHTMLElementById.js
var getHTMLElementById = __webpack_require__(15891);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/parseURLTemplate.js
var parseURLTemplate = __webpack_require__(63236);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/printElements.js
var printElements = __webpack_require__(62598);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/renderAsset.js
var renderAsset = __webpack_require__(79324);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/scrollToElement.js
var scrollToElement = __webpack_require__(76039);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/isSSR.js
var isSSR = __webpack_require__(28673);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/iconsManager.js
var iconsManager = __webpack_require__(74108);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/renderAssetIcon.js
var renderAssetIcon = __webpack_require__(3614);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getBreadcrumbsItems.js
var getBreadcrumbsItems = __webpack_require__(43569);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getCurrentBreakpoint.js
var getCurrentBreakpoint = __webpack_require__(88101);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getWindowWidth.js
var getWindowWidth = __webpack_require__(65138);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getRoutes.js
var getRoutes = __webpack_require__(20398);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/delay.js
var delay = __webpack_require__(43970);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/valueReplacement.js
var valueReplacement = __webpack_require__(95785);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/parseParamsFromString.js
var parseParamsFromString = __webpack_require__(1622);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/parseOptionsFromSettings.js
var parseOptionsFromSettings = __webpack_require__(9920);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/extractPathFromString.js
var extractPathFromString = __webpack_require__(20401);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/convertData.js
var convertData = __webpack_require__(23382);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getConverter.js + 2 modules
var getConverter = __webpack_require__(59641);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/altrpCompare.js
var altrpCompare = __webpack_require__(32494);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/validateEmail.js
var validateEmail = __webpack_require__(67444);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/sortOptions.js
var sortOptions = __webpack_require__(50313);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/conditionChecker.js
var conditionChecker = __webpack_require__(48358);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/mb-parse-JSON.js
var mb_parse_JSON = __webpack_require__(65053);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/setAltrpIndex.js
var setAltrpIndex = __webpack_require__(82411);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/generateButtonsArray.js
var generateButtonsArray = __webpack_require__(53813);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/setTitle.js
/**
 * Переменная, в которой храниться изначальный заголовок
 * @let {string}
 */
var defaultTitle;
/**
 * Устанавливает заголовок страницы на фронтенде
 * @param {string} title
 */

function setTitle(title) {
  var titleElement = document.title;

  if (!defaultTitle) {
    defaultTitle = titleElement.innerHTML;
  }

  if (!title) {
    title = defaultTitle;
  }

  if (document.title !== title) {
    document.title = title;
  }
}
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/conditionsChecker.js
var conditionsChecker = __webpack_require__(92184);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/altrpRandomId.js
var altrpRandomId = __webpack_require__(95645);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/parseIDFromYoutubeURL.js
var parseIDFromYoutubeURL = __webpack_require__(31870);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getWidgetState.js
var getWidgetState = __webpack_require__(89683);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/storeWidgetState.js
var storeWidgetState = __webpack_require__(77983);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/saveDataToLocalStorage.js
var saveDataToLocalStorage = __webpack_require__(81230);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/setDataByPath.js
var setDataByPath = __webpack_require__(99549);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/renderIcon.js
var renderIcon = __webpack_require__(34277);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/scrollbarWidth.js
var scrollbarWidth = __webpack_require__(20177);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/redirect.js
var redirect = __webpack_require__(18087);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/parseStringValue.js
/**
 * Вернуть значение из строки
 * @param string
 */
function parseStringValue(string) {
  var value = string;

  if (Number(value)) {
    return Number(value);
  }

  switch (value) {
    case "true":
      {
        return true;
      }

    case "false":
      {
        return false;
      }

    case "null":
      {
        return null;
      }

    case "undefined":
      {
        return undefined;
      }

    case "0":
      {
        return 0;
      }
  }

  return value;
}
// EXTERNAL MODULE: ./resources/modules/editor/src/js/consts.js
var consts = __webpack_require__(12027);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getMediaQueryByName.js

/**
 * Получает медиа запрос для css по имени настройки
 * @param {string} screenSettingName
 * @return {string}
 */

function getMediaQueryByName(screenSettingName) {
  var mediaQuery = "";
  consts["default"].SCREENS.forEach(function (screen) {
    if (screen.name === screenSettingName) {
      mediaQuery = screen.mediaQuery;
    }
  });
  return mediaQuery;
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getMediaSettingsByName.js

/**
 * Получает медиа запрос для css по имени настройки
 * @param {string} screenSettingName
 * @return {string}
 */

function getMediaSettingsByName(screenSettingName) {
  var screen = consts["default"].SCREENS[0];
  consts["default"].SCREENS.forEach(function (_screen) {
    if (_screen.name === screenSettingName) {
      screen = _screen;
    }
  });
  return screen;
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getObjectByPrefix.js
/**
 * Возвращает новый объект из свояств объекта, в именах которых присутствует префикс prefix
 * @param {string} prefix - строка для поиска (например 'test')
 * @param {{}} object - если в объекте есть свойство test__test то вернет {test: test__test_value}
 * @return {{}}
 */
function getObjectByPrefix() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var result = {};

  if (!prefix) {
    return result;
  }

  _.forEach(object, function (value, key) {
    if (key.indexOf("".concat(prefix, "__"), "") === 0) {
      result[key.replace("".concat(prefix, "__"), "")] = value;
    }
  });

  return result;
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/isElementTopInViewport.js
function isElementTopInViewport(top, scrollTop, clientHeight) {
  return top > scrollTop && top < scrollTop + clientHeight;
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getTopPosition.js
function getTopPosition(element) {
  var top = element.offsetTop;

  while (element.offsetParent) {
    element = element.offsetParent;
    top += element.offsetTop;
  }

  return top;
}
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/moment/locale/ru.js
var ru = __webpack_require__(21793);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/startOfWeek.js


/**
 * Получить начало месяца
 * @param {Date} date
 * @param {int} weekShift
 * @return {Date}
 */

function startOfWeek(date) {
  var weekShift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return moment_default()(new Date(date.getFullYear(), date.getMonth(), date.getDate() + weekShift * 7)).firstDayOfWeek();
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getCurrentStoreState.js
/**
 * Получить ссылку на состояние хранилища
 * @return {*}
 */
function getCurrentStoreState() {
  return appStore.getState();
}
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getWrapperHTMLElementByElement.js
var getWrapperHTMLElementByElement = __webpack_require__(62508);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getNextWeekStart.js


/**
 * Начало следующей недели
 * @return {moment.Moment}
 */

function getNextWeekStart() {
  var today = moment_default()();
  var daystoMonday = 7 - (today.isoWeekday() - 1);
  return today.add(daystoMonday, "days");
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getWeekStart.js


/**
 * Начало текущей недели
 * @return {moment.Moment}
 */

function getWeekStart() {
  var today = moment_default()();
  var daystoMonday = today.isoWeekday() - 1;
  return today.subtract(daystoMonday, "days");
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getNextWeekEnd.js

/**
 * Конец Следующей недели
 * @return {moment.Moment}
 */

function getNextWeekEnd() {
  var nextMonday = getNextWeekStart();
  return nextMonday.add("days", 6);
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getPrevWeekStart.js


/**
 * Начало предыдущей недели
 * @return {moment.Moment}
 */

function getPrevWeekStart() {
  var today = moment_default()();
  var daystoLastMonday = today.isoWeekday() - 1 + 7;
  return today.subtract(daystoLastMonday, "days");
}
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/getPrevWeekEnd.js

/**
 * Конец предыдущей недели
 * @return {moment.Moment}
 */

function getPrevWeekEnd() {
  var lastMonday = getPrevWeekStart();
  return lastMonday.add("days", 6);
}
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/isJSON.js
var isJSON = __webpack_require__(13364);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/altrpLogin.js
var altrpLogin = __webpack_require__(37470);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/prepareURLForEmail.js

/**
 * Подготавливает URL для шаблона письма
 * @param {string} url
 * @param {{} | null} context
 * @return {string}
 */

function prepareURLForEmail(url) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!_.isString(url) || !url) {
    return url;
  }

  url = url.trim();

  if (url.indexOf("http") !== 0) {
    url = location.origin + url;
  }

  return (0,parseURLTemplate/* default */.Z)(url, context);
}
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/altrpLogout.js
var altrpLogout = __webpack_require__(72217);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getDataFromLocalStorage.js
var getDataFromLocalStorage = __webpack_require__(5536);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getTimeValue.js
var getTimeValue = __webpack_require__(95708);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/startOfMonth.js
var startOfMonth = __webpack_require__(82835);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/startOfYear.js
var startOfYear = __webpack_require__(53569);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/isEditor.js
var isEditor = __webpack_require__(63532);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/dataFromTable.js
var dataFromTable = __webpack_require__(50349);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/dataToCSV.js
var dataToCSV = __webpack_require__(587);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/dataToXML.js
var dataToXML = __webpack_require__(61805);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getAppContext.js
var getAppContext = __webpack_require__(85058);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/dataToXLS.js
var dataToXLS = __webpack_require__(51073);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/prepareContext.js
var prepareContext = __webpack_require__(91890);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/constants/CONDITIONS_OPTIONS.js
var CONDITIONS_OPTIONS = [{
  value: "empty",
  label: "Empty"
}, {
  value: "not_empty",
  label: "Not Empty"
}, {
  value: "null",
  label: "Null"
}, {
  value: "not_null",
  label: "Not Null"
}, {
  value: "==",
  label: "Equals"
}, {
  value: "<>",
  label: "Not Equals"
}, // {
//   value: "between",
//   label: "Between"
// },
{
  value: ">",
  label: ">"
}, {
  value: ">=",
  label: ">="
}, {
  value: "<",
  label: "<"
}, {
  value: "<=",
  label: "<="
}, {
  value: "in",
  label: "In"
}, {
  value: "not_in",
  label: "Not In"
}, {
  value: "contain",
  label: "Contain"
}, {
  value: "not_contain",
  label: "Not Contain"
}];
/* harmony default export */ var constants_CONDITIONS_OPTIONS = (CONDITIONS_OPTIONS);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getResponsiveSetting.js
var getResponsiveSetting = __webpack_require__(79919);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/helpers.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










































































/**
 * Вспомогательные функции для работы с данными виджетов
 */

window.altrphelpers = {
  /**
   * Возвращает сумму полей в массиве объектов
   * @param {string}fieldName
   * @return {number}
   */
  sumFields: function sumFields(fieldName) {
    var sum = 0;

    if (!_.isObject(this.context)) {
      return sum;
    }

    if (!_.isArray(this.context)) {
      this.context = [this.context];
    }

    this.context.forEach(function (c) {
      sum += Number(_.get(c, fieldName)) || 0;
    });
    return sum;
  }
};
function cutString(string) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
  if (string.length <= maxLength) return string;
  return string.slice(0, maxLength) + "...";
}
/**
 * рекурсивно считает общую длину по пути
 * @param {{}} object
 * @param {string} path
 * @return {number}
 */

function recurseCount() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var count = 0;

  if (!path) {
    return count;
  }

  var array = _.get(object, path, []);

  if (!array.length) {
    count++;
    return count;
  }

  array.forEach(function (item) {
    count += recurseCount(item, path);
  });
  return count;
}
/**
 *
 * @param {string} font
 * @return {*}
 */

function renderFontLink(font) {
  if (altrpFontsSet[font] !== GOOGLE_FONT) {
    return null;
  }

  font = font.replace(/ /g, "+");
  font += ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
  var fontUrl = "https://fonts.googleapis.com/css?family=" + font + "&subset=cyrillic";
  fontUrl = encodeURI(fontUrl);
  return /*#__PURE__*/react.createElement("link", {
    rel: "stylesheet",
    key: fontUrl,
    href: fontUrl
  });
}
/**
 * Включен ли режим тестирования
 */

function isAltrpTestMode() {
  return window.location.href.indexOf("altrp-test=true") > 0;
}
/**
 * Проверяем текст на соответствие маске
 * @param {string} value
 * @param {[]} mask
 * @return {boolean}
 */

function isValueMatchMask(value, mask) {
  if (!value || value.length !== mask.length) {
    return false;
  }

  return value.length && value.split("").every(function (char, index) {
    return char === mask[index] || char.match(mask[index]);
  });
}
/**
 * Парсит xml строку в объект
 * @param xml
 * @param arrayTags
 */

function parseXml(xml, arrayTags) {
  var dom = null;
  if (window.DOMParser) dom = new DOMParser().parseFromString(xml, "text/xml");else if (window.ActiveXObject) {
    dom = new ActiveXObject("Microsoft.XMLDOM");
    dom.async = false;
    if (!dom.loadXML(xml)) throw dom.parseError.reason + " " + dom.parseError.srcText;
  } else throw new Error("cannot parse xml string!");

  function parseNode(xmlNode, result) {
    if (xmlNode.nodeName === "#text") {
      var v = xmlNode.nodeValue;
      if (v.trim()) result["#text"] = v;
      return;
    }

    var jsonNode = {},
        existing = result[xmlNode.nodeName];

    if (existing) {
      if (!Array.isArray(existing)) result[xmlNode.nodeName] = [existing, jsonNode];else result[xmlNode.nodeName].push(jsonNode);
    } else {
      if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) !== -1) result[xmlNode.nodeName] = [jsonNode];else result[xmlNode.nodeName] = jsonNode;
    }

    if (xmlNode.attributes) {
      var _iterator = _createForOfIteratorHelper(xmlNode.attributes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var attribute = _step.value;
          jsonNode[attribute.nodeName] = attribute.nodeValue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    var _iterator2 = _createForOfIteratorHelper(xmlNode.childNodes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var node = _step2.value;
        parseNode(node, jsonNode);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var result = {};

  var _iterator3 = _createForOfIteratorHelper(dom.childNodes),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var node = _step3.value;
      parseNode(node, result);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return result;
}

/***/ }),

/***/ 13974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RH": function() { return /* binding */ replaceAltrpMeta; },
/* harmony export */   "VB": function() { return /* binding */ changeAltrpMeta; },
/* harmony export */   "cV": function() { return /* binding */ REPLACE_ALTRP_META; },
/* harmony export */   "q7": function() { return /* binding */ REPLACE_ALTRP_META_FROM_LOCAL_STORAGE; },
/* harmony export */   "yE": function() { return /* binding */ CHANGE_ALTRP_META; }
/* harmony export */ });
var CHANGE_ALTRP_META = 'CHANGE_ALTRP_META';
var REPLACE_ALTRP_META = 'REPLACE_ALTRP_META';
var REPLACE_ALTRP_META_FROM_LOCAL_STORAGE = 'REPLACE_ALTRP_META_FROM_LOCAL_STORAGE';
/**
 *
 * @param {string}metaName
 * @param {*} metaValue
 * @return {{}} -
 *   {
 *     type: {string},
 *     metaValue: {},
 *     metaName: {string},
 *   }
 */

function changeAltrpMeta(metaName, metaValue) {
  return {
    type: CHANGE_ALTRP_META,
    metaValue: metaValue,
    metaName: metaName
  };
}
/**
 *
 * @param {{}} metaValue
 * @param {boolean} fromLocalStorage
 * @return {{}} -
 *   {
 *     type: {string},
 *     metaValue: {},
 *     metaName: {string},
 *   }
 */

function replaceAltrpMeta(metaValue) {
  var fromLocalStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: fromLocalStorage ? REPLACE_ALTRP_META_FROM_LOCAL_STORAGE : REPLACE_ALTRP_META,
    metaValue: metaValue
  };
}

/***/ }),

/***/ 86817:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$d": function() { return /* binding */ CLEAR_PAGE_STATE; },
/* harmony export */   "H_": function() { return /* binding */ CHANGE_PAGE_STATE; },
/* harmony export */   "Xe": function() { return /* binding */ changePageState; }
/* harmony export */ });
/* unused harmony export clearPageState */
var CHANGE_PAGE_STATE = 'CHANGE_PAGE_STATE';
var CLEAR_PAGE_STATE = 'CLEAR_PAGE_STATE';
/**
 *
 * @param {string}stateName
 * @param {*} stateValue
 * @return {{}} -
 *   {
 *     type: {string},
 *     stateValue: {},
 *     stateName: {string},
 *   }
 */

function changePageState(stateName) {
  var stateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    type: CHANGE_PAGE_STATE,
    stateName: stateName,
    stateValue: stateValue
  };
}
/**
 * Очищает состояние страницы
 */

function clearPageState() {
  return {
    type: CLEAR_PAGE_STATE
  };
}

/***/ }),

/***/ 46221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ SET_USERS_ONLINE; },
/* harmony export */   "$L": function() { return /* binding */ SET_NOTICE_FOR_USER; },
/* harmony export */   "XR": function() { return /* binding */ CHANGE_CURRENT_USER_PROPERTY; },
/* harmony export */   "a2": function() { return /* binding */ changeCurrentUser; },
/* harmony export */   "rA": function() { return /* binding */ CHANGE_CURRENT_USER; },
/* harmony export */   "uX": function() { return /* binding */ changeCurrentUserProperty; }
/* harmony export */ });
/* unused harmony exports setUserNotice, setUsersOnline */
var CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
var SET_NOTICE_FOR_USER = 'SET_NOTICE_FOR_USER';
var SET_USERS_ONLINE = 'SET_USERS_ONLINE';
var CHANGE_CURRENT_USER_PROPERTY = "CHANGE_CURRENT_USER_PROPERTY";
function changeCurrentUser(user) {
  return {
    type: CHANGE_CURRENT_USER,
    user: user || {}
  };
}
function setUserNotice(notice) {
  return {
    type: SET_NOTICE_FOR_USER,
    notice: notice
  };
}
function setUsersOnline(members) {
  return {
    type: SET_USERS_ONLINE,
    members: members
  };
}
function changeCurrentUserProperty(path, value) {
  return {
    type: CHANGE_CURRENT_USER_PROPERTY,
    path: path || "",
    value: value || ""
  };
}

/***/ }),

/***/ 45530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MO": function() { return /* binding */ CHANGE_SETTINGS; },
/* harmony export */   "k9": function() { return /* binding */ REPLACE_SETTINGS; },
/* harmony export */   "zZ": function() { return /* binding */ addSettings; }
/* harmony export */ });
/* unused harmony export replaceAllSettings */
var CHANGE_SETTINGS = 'CHANGE_SETTINGS';
var REPLACE_SETTINGS = 'REPLACE_SETTINGS';
/**
 *
 * @param {string} elementId
 * @param {string} elementName
 * @param {{}} settings
 * @param {int} childrenLength
 * @return {{}} - {
 *     type: {string},
 *     elementId: {string},
 *     settings: {{}},
 *     elementName: {string},
 *   }
 */

function addSettings(elementId, elementName, settings, childrenLength) {
  return {
    type: CHANGE_SETTINGS,
    elementId: elementId,
    elementName: elementName,
    settings: settings,
    childrenLength: childrenLength
  };
}
/**
 *
 * @param {{}} settings
 * @return {{}} - {
 *     type: {string},
 *     settings: {{}},
 *   }
 */

function replaceAllSettings(settings) {
  return {
    type: REPLACE_SETTINGS,
    settings: settings
  };
}

/***/ }),

/***/ 48379:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Az": function() { return /* binding */ changeFormFieldValue; },
/* harmony export */   "Yw": function() { return /* binding */ CLEAR_FORM_FIELD_VALUE; },
/* harmony export */   "sc": function() { return /* binding */ CHANGE_FORM_FIELD_VALUE; }
/* harmony export */ });
/* unused harmony export clearFormStorage */
var CHANGE_FORM_FIELD_VALUE = 'CHANGE_FORM_FIELD_VALUE';
var CLEAR_FORM_FIELD_VALUE = 'CHANGE_FORM_FIELD_VALUE';
/**
 * Получает данные поля формы и сохраняет в хранилище
 * @param {string}fieldName
 * @param {*}value
 * @param {string}formId
 * @param {boolean}userInput
 * @return {{type: string, fieldName: *, value: *, formId: *}}
 */

function changeFormFieldValue(fieldName, value, formId, userInput) {
  return {
    type: CHANGE_FORM_FIELD_VALUE,
    fieldName: fieldName,
    value: value,
    formId: formId,
    changedField: userInput ? "".concat(formId, ".").concat(fieldName) : null
  };
}
/**
 * Очистить данные поля формы и сохраняет в хранилище
 * @param {string | null}formId
 * @return {{type: string, fieldName: *, value: *, formId: *}}
 */

function clearFormStorage() {
  var formId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    type: CLEAR_FORM_FIELD_VALUE,
    formId: formId
  };
}

/***/ }),

/***/ 15272:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nb": function() { return /* binding */ addResponseData; },
/* harmony export */   "OQ": function() { return /* binding */ ADD_RESPONSE_DATA; },
/* harmony export */   "as": function() { return /* binding */ CLEAR_ALL_RESPONSE_DATA; }
/* harmony export */ });
/* unused harmony export clearAllResponseData */
var ADD_RESPONSE_DATA = 'ADD_RESPONSE_DATA';
var CLEAR_ALL_RESPONSE_DATA = 'CLEAR_ALL_RESPONSE_DATA';
/**
 * Сохраняет ответ сервера при отправке формы в хранилище
 * @param {string}formId
 * @param {{}} data
 * @return {{}} -
 *   {
 *     type: {string},
 *     dataStorage: {object},
 *     dataStorageName: {string},
 *   }
 */

function addResponseData(formId) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (data.data) {
    data = data.data;
  }

  return {
    type: ADD_RESPONSE_DATA,
    data: data,
    formId: formId
  };
}
/**
 * Очищает хранилище
 * @return {{type: string}}
 */

function clearAllResponseData() {
  return {
    type: CLEAR_ALL_RESPONSE_DATA
  };
}

/***/ }),

/***/ 69456:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ changeAppRoutes; },
/* harmony export */   "d": function() { return /* binding */ CHANGE_APP_ROUTES; }
/* harmony export */ });
var CHANGE_APP_ROUTES = 'CHANGE_APP_ROUTES';
function changeAppRoutes(routes) {
  return {
    type: CHANGE_APP_ROUTES,
    routes: routes
  };
}

/***/ })

}]);
//# sourceMappingURL=default-resources_modules_front-app_src_js_functions_getConverter_js-resources_modules_front--7fd36b.019cd272addee1306163.js.map