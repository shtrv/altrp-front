"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["MenuWidget"],{

/***/ 71743:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43144);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83465);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29208);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31468);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38394);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96633);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_unset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99245);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_5__);



/**
 * Имеет интерфейс для доступы к свойствам data (любой вложенности)
 * @class AltrpModel
 */





 // import {cloneDeep, get, set, has, unset, isString, isEmpty} from "lodash";

var AltrpModel = /*#__PURE__*/function () {
  function AltrpModel() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(this, AltrpModel);

    this.data = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(data);
  }
  /**
   * Возваращает объект данных
   * @params {boolean} clone - клонировать или ссылку на данные
   * @return {{}}
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(AltrpModel, [{
    key: "getData",
    value: function getData() {
      var clone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (clone) {
        return lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(this.data);
      }

      return this.data;
    }
    /**
     * Пустой ли объект
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return lodash_isempty__WEBPACK_IMPORTED_MODULE_5___default()(this.data);
    }
    /**
     * Возврашает значение свойства name
     * @params {string} name
     * @params {*} defaultValue
     * @return {*}
     */

  }, {
    key: "getProperty",
    value: function getProperty(name) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.data, name, defaultValue);
    }
    /**
     * Возврашает значение свойства name
     * @params {string} name
     * @params {*} defaultValue
     * @return {*}
     */

  }, {
    key: "hasProperty",
    value: function hasProperty(name) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(this.data, name);
    }
    /**
     * Возврашает значение свойства name
     * @params {string} name
     * @params {*} defaultValue
     * @return {{}}
     */

  }, {
    key: "setProperty",
    value: function setProperty(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (value instanceof AltrpModel) {
        value = value.getData(false);
      }

      return lodash_set__WEBPACK_IMPORTED_MODULE_2___default()(this.data, name, value);
    }
    /**
     * Удаляет свойства name
     * @params {string} name
     * @return {*}
     */

  }, {
    key: "unsetProperty",
    value: function unsetProperty(name) {
      return lodash_unset__WEBPACK_IMPORTED_MODULE_4___default()(this.data, name);
    }
  }]);

  return AltrpModel;
}();

window.AltrpModel = AltrpModel;
/* harmony default export */ __webpack_exports__["Z"] = (AltrpModel);

/***/ }),

/***/ 99324:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ classes_Resource; }
});

// UNUSED EXPORTS: MAX_FILE_SIZE

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__(17563);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/replaceContentWithData.js
var replaceContentWithData = __webpack_require__(26078);
;// CONCATENATED MODULE: ./resources/modules/editor/src/js/helpers/getCookie.js
function getCookie(name) {
  var value = "; ".concat(document.cookie);
  var parts = value.split("; ".concat(name, "="));

  if (parts.length === 2) {
    return decodeURI(parts.pop().split(';').shift());
  }
}
(window.altrpHelpers = window.altrpHelpers || {}).getCookie = getCookie;
;// CONCATENATED MODULE: ./resources/modules/editor/src/js/classes/Resource.js







window.queryString = query_string;
/**
 * @class Resource
 * */

var MAX_FILE_SIZE = 256886080;

var Resource = /*#__PURE__*/function () {
  /**
   * @member {Object} routes
   * @member {string} routes.get
   * @member {string} routes.post
   * @member {string} routes.create
   * @member {string} routes.getAll
   */
  function Resource(data) {
    (0,classCallCheck/* default */.Z)(this, Resource);

    this.route = data.route;
    /**
     * Нужно ли при каждом запросе подставлять в URL данные
     * @type {*|boolean}
     */

    this.dynamicURL = data.dynamicURL || false;

    if (!this.route) {
      throw "Нужен route";
    }
  }
  /**
   * Получить роут
   * @return {string}
   */


  (0,createClass/* default */.Z)(Resource, [{
    key: "getRoute",
    value: function getRoute() {
      return this.dynamicURL ? (0,replaceContentWithData/* default */.Z)(this.route) : this.route;
    }
    /**
     * @return {Promise}
     * */

  }, {
    key: "getAuthorList",
    value: function getAuthorList() {
      var options = {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return fetch("/admin/ajax/users", options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
  }, {
    key: "get",
    value: function get(id) {
      if (!id) {
        console.error('Get only by "id"');
      }

      var options = {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      };
      var route = this.getRoute();
      var url;

      if (route[route.length - 1] === "/") {
        url = route + id;
      } else {
        url = route + "/" + id;
      }

      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
    /**
     * Делает GET запрос в роуты по типу /route/{id}/somedata
     * @return {Promise}
     * */

  }, {
    key: "getInContext",
    value: function getInContext(id) {
      if (!id) {
        console.error('Get only by "id"');
      }

      var options = {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      };
      var route = this.getRoute();
      var url = route.replace("{id}", id);
      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
    /**
     * простой запрос
     * @return {Promise}
     * */

  }, {
    key: "getAll",
    value: function getAll() {
      var customHeaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var options = {
        method: "get",
        headers: _.assign({
          "Content-Type": "application/json"
        }, customHeaders)
      };
      var url = this.getRoute();
      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
    /**
     * простой запрос
     * @return {Promise}
     * */

  }, {
    key: "getAsText",
    value: function getAsText() {
      var customHeaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var options = {
        method: "get",
        headers: _.assign({
          "Content-Type": "text/plain"
        }, customHeaders)
      };
      var url = this.getRoute();
      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.text();
      });
    }
    /**
     * Запрос со строкой для поиска вхождений
     * @param {string} searchString
     * @return {Promise}
     * */

  }, {
    key: "search",
    value: function search(searchString) {
      var options = {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      };
      var url;

      if (this.getRoute().indexOf("?") === -1) {
        url = this.getRoute() + "?s=".concat(searchString);
      } else {
        url = this.getRoute() + "&s=".concat(searchString);
      }

      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
    /**
     * @param {any} data
     * @param {object | null} headers
     * @return {Promise}
     * */

  }, {
    key: "post",
    value: function post() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 ? arguments[1] : undefined;

      var _token = getCookie('XSRF-TOKEN');

      var defaultHeaders = {};

      if (window._token) {
        defaultHeaders['X-CSRF-TOKEN'] = window._token;
      } else {
        defaultHeaders['X-XSRF-TOKEN'] = _token;
      }

      headers = _.assign(defaultHeaders, headers);
      var formData = new FormData();
      var hasFile = false;

      _.each(data, function (value, key) {
        if (_.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            if (value[i] instanceof File) {
              hasFile = true;
            }

            if (value[i].size > MAX_FILE_SIZE) {
              continue;
            }

            formData.append("".concat(key, "[").concat(i, "]"), value[i]);
          }
        } else {
          formData.append(key, value);
        }
      });

      if (!hasFile) {
        headers["Content-Type"] = "application/json";
        headers["Accept"] = "application/json";
      }

      var options = {
        method: "POST",
        body: hasFile ? formData : JSON.stringify(data),
        headers: headers
      };
      return fetch(this.getRoute(), options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      }); // .catch(err => {
      //   console.error(err);
      //   return Promise.reject(err.then(), err.status);
      //   return err.then();
      // });
    }
    /**
     * @param {FileList | File[]} files
     * @return {Promise}
     * */

  }, {
    key: "postFiles",
    value: function postFiles(files) {
      // fileTypes = fileTypes || "image";
      var _token = getCookie('XSRF-TOKEN');

      var headers = {};

      if (window._token) {
        headers['X-CSRF-TOKEN'] = window._token;
      } else {
        headers['X-XSRF-TOKEN'] = _token;
      }

      var formData = new FormData(); // fileTypes = fileTypes.split(",");
      // fileTypes.forEach(fileType => {
      //   if (!fileType) {
      //     return;
      //   }
      //   fileType = fileType.trim();
      //
      // });

      for (var i = 0; i < files.length; i++) {
        if (files[i].size > MAX_FILE_SIZE // ||          files[i].type.indexOf(fileType) === -1
        ) {
          continue;
        }

        formData.append("files[".concat(i, "]"), files[i]);
      }

      var options = {
        method: "POST",
        body: formData,
        headers: headers
      };
      return fetch(this.getRoute(), options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
    /**
     * @param {File} file
     * @return {Promise}
     * */

  }, {
    key: "postFile",
    value: function postFile(file) {
      var _token = getCookie('XSRF-TOKEN');

      var headers = {};

      if (window._token) {
        headers['X-CSRF-TOKEN'] = window._token;
      } else {
        headers['X-XSRF-TOKEN'] = _token;
      }

      var formData = new FormData();
      formData.append("favicon", file);
      var options = {
        method: "POST",
        body: formData,
        headers: headers
      };
      return fetch(this.getRoute(), options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
    /**
     * @return {Promise}
     * */

  }, {
    key: "put",
    value: function put(id, data) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var _token = getCookie('XSRF-TOKEN');

      var defaultHeaders = {};

      if (window._token) {
        defaultHeaders['X-CSRF-TOKEN'] = window._token;
      } else {
        defaultHeaders['X-XSRF-TOKEN'] = _token;
      }

      headers = _.assign(defaultHeaders, headers);
      var formData = new FormData();
      var hasFile = false;

      _.each(data, function (value, key) {
        if (_.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            if (value[i] instanceof File) {
              hasFile = true;
            }

            if (value[i].size > MAX_FILE_SIZE) {
              console.log(value[i]);
              continue;
            }

            formData.append("".concat(key, "[").concat(i, "]"), value[i]);
          }
        } else {
          formData.append(key, value);
        }
      });

      if (!hasFile) {
        headers["Content-Type"] = "application/json";
        headers["Accept"] = "application/json";
      }

      var options = {
        method: "put",
        body: hasFile ? formData : JSON.stringify(data),
        headers: headers
      };
      var url = this.getRoute() + (id ? "/" + id : "");
      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject(res.text(), res.status);
        }

        return res.json();
      });
    }
    /**
     * @param {string} id
     * @param {{}} data
     * @param {string | {}} customHeaders
     * @return {Promise}
     * */

  }, {
    key: "delete",
    value: function _delete() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var customHeaders = arguments.length > 2 ? arguments[2] : undefined;

      var _token = getCookie('XSRF-TOKEN');

      var defaultHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      };

      if (window._token) {
        defaultHeaders['X-CSRF-TOKEN'] = window._token;
      } else {
        defaultHeaders['X-XSRF-TOKEN'] = _token;
      }

      var options = {
        method: "delete",
        headers: _.assign(defaultHeaders, customHeaders)
      };

      if (!_.isEmpty(data)) {
        options.body = JSON.stringify(data);
      }

      var url = this.getRoute() + (id ? "/" + id : "");
      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
    /**
     * @return {Promise}
     * */

  }, {
    key: "getOptions",
    value: function getOptions() {
      var options = {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      };
      var url = this.getRoute() + "/options";
      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject({
            res: res.text(),
            status: res.status
          });
        }

        return res.json();
      });
    }
    /**
     * GET запрос с параметрами
     * @param {object} params
     * @param {string | {}} customHeaders
     * @param cors
     * @return {Promise}
     * */

  }, {
    key: "getQueried",
    value: function () {
      var _getQueried = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(params) {
        var customHeaders,
            cors,
            options,
            _params,
            url,
            res,
            _args = arguments;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                customHeaders = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                cors = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                options = {
                  method: "get",
                  headers: _.assign({
                    "Content-Type": "application/json"
                  }, customHeaders)
                };

                if (cors) {
                  options.mode = 'cors';
                }

                _params = {};

                _.forEach(params, function (paramValue, paramName) {
                  if (_.isArray(paramValue)) {
                    paramValue = paramValue.join(",");
                  }

                  _params[paramName] = paramValue;
                });

                url = query_string.parseUrl(this.getRoute()).url;
                _params = _.assign(query_string.parseUrl(this.route).query, _params);
                url = "".concat(url, "?").concat(query_string.stringify(_params));
                _context.next = 11;
                return fetch(url, options).then(function (res) {
                  if (res.ok === false) {
                    return Promise.reject({
                      res: res.text(),
                      status: res.status
                    });
                  }

                  return res.json();
                });

              case 11:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getQueried(_x) {
        return _getQueried.apply(this, arguments);
      }

      return getQueried;
    }()
  }, {
    key: "publish",
    value: function publish(id, data) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var defaultHeaders = {};

      if (window._token) {
        defaultHeaders['X-CSRF-TOKEN'] = window._token;
      } else {
        defaultHeaders['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN');
      }

      var formData = new FormData();
      var hasFile = false;

      _.each(data, function (value, key) {
        if (_.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            if (value[i] instanceof File) {
              hasFile = true;
            }

            if (value[i].size > MAX_FILE_SIZE) {
              console.log(value[i]);
              continue;
            }

            formData.append("".concat(key, "[").concat(i, "]"), value[i]);
          }
        } else {
          formData.append(key, value);
        }
      });

      headers = _.assign(defaultHeaders, headers);

      if (!hasFile) {
        headers["Content-Type"] = "application/json";
        headers["Accept"] = "application/json";
      }

      var options = {
        method: 'post',
        body: hasFile ? formData : JSON.stringify(data),
        headers: _.assign(defaultHeaders, headers)
      };
      var url = this.getRoute() + '/' + id + '/publish';
      return fetch(url, options).then(function (res) {
        if (res.ok === false) {
          return Promise.reject(res.text(), res.status);
        }

        return res.json();
      });
    }
  }]);

  return Resource;
}();

/* harmony default export */ var classes_Resource = (Resource);

if (!window.__token_interval && !window.SSR) {
  window.__token_interval = setInterval(function () {
    var resource = new Resource({
      route: '/ajax/_token'
    });
    resource.getAll();
  }, 72000000);
}

/***/ }),

/***/ 78578:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ widgets_MenuWidget; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(82963);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(61120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./resources/modules/editor/src/js/classes/Resource.js + 1 modules
var Resource = __webpack_require__(99324);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/functions/menus.js



/**
 *
 * @param guid
 * @return {Promise<{}>}
 */

function getMenuByGUID() {
  return _getMenuByGUID.apply(this, arguments);
}

function _getMenuByGUID() {
  _getMenuByGUID = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var guid,
        resource,
        data,
        _args = arguments;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            guid = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';

            if (guid) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", null);

          case 3:
            resource = new Resource/* default */.Z({
              route: '/ajax/menus'
            });
            _context.next = 6;
            return resource.get(guid);

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMenuByGUID.apply(this, arguments);
}
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/store/menus-storage/actions.js
var actions = __webpack_require__(5998);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/isEditor.js
var isEditor = __webpack_require__(63532);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/conditionChecker.js
var conditionChecker = __webpack_require__(48358);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/mb-parse-JSON.js
var mb_parse_JSON = __webpack_require__(65053);
// EXTERNAL MODULE: ./node_modules/@blueprintjs/core/lib/esm/components/index.js + 98 modules
var components = __webpack_require__(54034);
// EXTERNAL MODULE: ./node_modules/@blueprintjs/core/lib/esm/common/position.js
var common_position = __webpack_require__(53766);
// EXTERNAL MODULE: ./node_modules/@blueprintjs/popover2/lib/esm/popover2.js + 6 modules
var popover2 = __webpack_require__(31406);
;// CONCATENATED MODULE: ./resources/modules/editor/src/js/components/widgets/MenuWidget.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








(window.globalDefaults = window.globalDefaults || []).push("\n.altrp-menu-item__icon svg {\n    display: block;\n    height: 20px;\n    width: 20px;\n}\n\n.altrp-menu {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.bp3-menu-item {\n  align-items: center;\n  border-radius: 0;\n}\n\n.bp3-menu {\n  flex-direction: column;\n}\n\n");

var MenuWidget = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(MenuWidget, _Component);

  var _super = _createSuper(MenuWidget);

  function MenuWidget(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MenuWidget);

    _this = _super.call(this, props);
    _this.getMenuData = /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var menuGUID, menus, menuData;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              menuGUID = _this.props.element.getResponsiveLockedSetting('menu');

              if (!((_this.state.menuData || !menuGUID) && _this.menuGUID === menuGUID)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _this.loading = true;
              menus = appStore.getState().altrpMenus;
              menuData = menus.find(function (menu) {
                return menu.guid === menuGUID;
              });

              if (menuData) {
                _context.next = 11;
                break;
              }

              _context.next = 9;
              return getMenuByGUID(menuGUID);

            case 9:
              menuData = _context.sent;

              if (menuData) {
                menuData.children = (0,mb_parse_JSON/* default */.Z)(menuData.children);
                menuData.settings = (0,mb_parse_JSON/* default */.Z)(menuData.settings);
                appStore.dispatch((0,actions/* addMenu */.bL)(menuData));
              }

            case 11:
              _this.menuData = menuData;
              _this.menuGUID = menuGUID;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.getClasses = function () {
      var classes = "";

      if (_this.isActive()) {
        classes += 'active ';
      }

      if (_this.isDisabled()) {
        classes += 'state-disabled ';
      }

      return classes;
    };

    _this.getMenuClasses = function () {
      var classes = ['altrp-menu'];

      if (_this.isActive()) {
        classes.push('active');
      }

      if (_this.isDisabled()) {
        classes.push('state-disabled');
      }

      return classes.join(' ');
    };

    _this.renderSubItems = function (items, depth) {
      if (!items.length) {
        return null;
      }

      var element = _this.props.element;
      var classes = _this.getClasses() + (element.getResponsiveLockedSetting('position_css_classes', '', '') || "");
      var popoverProps = {
        usePortal: true,
        // isOpen:true ,
        portalClassName: "".concat(classes, " altrp-portal altrp-portal").concat(_this.elementId),
        portalContainer: window.EditorFrame ? window.EditorFrame.contentWindow.document.body : document.body
      };

      var renderButton = _this.props.element.getResponsiveLockedSetting('button'); // if (depth === 1 && element.getResponsiveLockedSetting('type') === 'horizontal' && !renderButton) {
      //   popoverProps.position = Position.BOTTOM_LEFT;
      // }


      if (depth === 1) {
        var positionSetting = _this.props.element.getResponsiveLockedSetting('popover_position', "", "auto");

        popoverProps.position = _this.getPosition(positionSetting);
        popoverProps.portalClassName += " altrp-menu-first-portal";
      } else {
        var _positionSetting = _this.props.element.getResponsiveLockedSetting('sub_popover_position', "", "auto");

        popoverProps.position = _this.getPosition(_positionSetting);
        popoverProps.portalClassName += " altrp-sub-portal";
      }

      var caret = ""; // const caretMedia = this.props.element.getResponsiveLockedSetting("caret");
      //
      // if(caretMedia?.type) {
      //   caret = caretMedia
      // }

      return /*#__PURE__*/React.createElement(React.Fragment, null, items.map(function (item) {
        return /*#__PURE__*/React.createElement(components/* MenuItem */.sN, {
          popoverProps: popoverProps,
          depth: depth,
          href: item.url,
          width: 100,
          className: "".concat(classes, " altrp-menu-item altrp-menu-item").concat(_this.elementId, " ").concat(_this.mbItemActive(item) ? 'active' : ''),
          key: item.id,
          onClick: function onClick(e) {
            e.preventDefault();

            if ((0,isEditor/* default */.Z)() || !item.url) {
              return;
            }

            if (!_this.props.history || !item.url) {
              window.location.href = item.url;
              return;
            }

            _this.props.history.push(item.url);
          },
          icon: /*#__PURE__*/React.createElement("span", {
            className: "".concat(classes, " altrp-menu-item__icon"),
            dangerouslySetInnerHTML: {
              __html: item.icon
            }
          }) // text={<Link className="altrp-menu-item__link" to={item.url}>{item.label}</Link>}>
          ,
          text: item.label
        }, _this.renderSubItems(item.children, depth + 1));
      }));
    };

    _this.renderButton = function () {
      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          menuData = _assertThisInitialize.menuData;

      if (!menuData) {
        return null;
      }

      var toggle_icon = _.get(menuData, 'settings.toggle_icon', '');

      var position = _this.props.element.getResponsiveLockedSetting("popover_position_toggle", "", "auto");

      var classes = _this.getClasses() + (_this.props.element.getResponsiveLockedSetting('position_css_classes', '', '') || "");
      return /*#__PURE__*/React.createElement(popover2/* Popover2 */.p, {
        content: _this.renderVerticalMenu(),
        className: "".concat(classes, " altrp-popover"),
        position: position,
        portalContainer: window.EditorFrame ? window.EditorFrame.contentWindow.document.body : document.body,
        portalClassName: "altrp-portal altrp-portal_main altrp-portal".concat(_this.elementId),
        minimal: true
      }, /*#__PURE__*/React.createElement(components/* Button */.zx, {
        className: "".concat(classes, " altrp-menu-toggle"),
        text: toggle_icon ? /*#__PURE__*/React.createElement("span", {
          className: "".concat(classes, " altrp-menu-item__icon"),
          dangerouslySetInnerHTML: {
            __html: toggle_icon
          }
        }) : ''
      }));
    };

    _this.state = {};

    if (window.elementDecorator) {
      window.elementDecorator((0,assertThisInitialized/* default */.Z)(_this));
    }

    if (props.baseRender) {
      _this.render = props.baseRender((0,assertThisInitialized/* default */.Z)(_this));
    }

    _this.elementId = props.element.getId();
    return _this;
  }

  (0,createClass/* default */.Z)(MenuWidget, [{
    key: "renderHorizontalMenu",
    value: function renderHorizontalMenu() {
      var _this2 = this;

      this.getMenuData();
      var menuData = this.menuData;

      if (!menuData) {
        return 'Select Menu';
      }

      return /*#__PURE__*/React.createElement(components/* ButtonGroup */.hE, {
        fill: true,
        alignText: "left"
      }, menuData.children.map(function (item) {
        return /*#__PURE__*/React.createElement(components/* Button */.zx, {
          minimal: true,
          icon: /*#__PURE__*/React.createElement("span", {
            className: "altrp-menu-item__icon",
            dangerouslySetInnerHTML: {
              __html: item.icon
            }
          }),
          rightIcon: "caret-down",
          text: item.label,
          href: item.url,
          key: item.id,
          onClick: function onClick(e) {
            e.preventDefault();

            if (!item.url || (0,isEditor/* default */.Z)()) {
              return;
            }

            if (!_this2.props.history) {
              window.location.href = item.url;
              return;
            }

            _this2.props.history.push(item.url);
          }
        });
      }));
    }
  }, {
    key: "renderVerticalMenu",
    value: function renderVerticalMenu() {
      this.getMenuData();
      var menuData = this.menuData;

      if (!menuData) {
        return 'Select Menu';
      }

      return /*#__PURE__*/React.createElement(components/* Menu */.v2, {
        className: this.getMenuClasses()
      }, this.renderSubItems(menuData.children, 1));
    }
    /**
     * Получить css классы для menu widget
     */

  }, {
    key: "getPosition",
    value: function getPosition(setting) {
      var position;

      switch (setting) {
        case "auto":
          position = "auto";
          break;

        case "top-left":
          position = common_position/* Position.TOP_LEFT */.Ly.TOP_LEFT;
          break;

        case "top-right":
          position = common_position/* Position.TOP_RIGHT */.Ly.TOP_RIGHT;
          break;

        case "top":
          position = common_position/* Position.TOP */.Ly.TOP;
          break;

        case "bottom-left":
          position = common_position/* Position.BOTTOM_LEFT */.Ly.BOTTOM_LEFT;
          break;

        case "bottom-right":
          position = common_position/* Position.BOTTOM_RIGHT */.Ly.BOTTOM_RIGHT;
          break;

        case "bottom":
          position = common_position/* Position.BOTTOM */.Ly.BOTTOM;
          break;

        case "left-top":
          position = common_position/* Position.LEFT_TOP */.Ly.LEFT_TOP;
          break;

        case "left-bottom":
          position = common_position/* Position.LEFT_BOTTOM */.Ly.LEFT_BOTTOM;
          break;

        case "left":
          position = common_position/* Position.LEFT */.Ly.LEFT;
          break;

        case "right-top":
          position = common_position/* Position.RIGHT_TOP */.Ly.RIGHT_TOP;
          break;

        case "right-bottom":
          position = common_position/* Position.RIGHT_BOTTOM */.Ly.RIGHT_BOTTOM;
          break;

        case "right":
          position = common_position/* Position.RIGHT */.Ly.RIGHT;
          break;

        default:
          position = common_position/* Position.AUTO */.Ly.AUTO;
      }

      return position;
    }
  }, {
    key: "render",
    value: function render() {
      this.getMenuData();
      var type = this.props.element.getResponsiveLockedSetting('type');
      var renderButton = this.props.element.getResponsiveLockedSetting('button');

      if (renderButton) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderButton());
      }

      switch (type) {
        case 'horizontal':
          {
            return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderVerticalMenu());
          }

        default:
          {
            return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderVerticalMenu());
          }
      }
    }
    /**
     * Check if the given menu item is active (configurable in the admin panel)
     *
     * Проверяем является ли данный элемент меню активным (настраивается в админке)
     *
     * @param {{
     *   compare: string,
     *   value: string,
     *   path: string,
     * }} item
     * @returns {boolean}
     */

  }, {
    key: "mbItemActive",
    value: function mbItemActive(item) {
      if (!item || !item.operator || !item.value || !item.modelField) {
        return false;
      }

      return (0,conditionChecker/* default */.Z)(item, this.props.element.getCurrentModel());
    }
  }]);

  return MenuWidget;
}(Component);

/* harmony default export */ var widgets_MenuWidget = (MenuWidget);

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

/***/ 63532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ isEditor; }
/* harmony export */ });
/**
 * @return {boolean}
 * */
function isEditor() {
  var _window$location;

  var path = (_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.pathname;
  return (path === null || path === void 0 ? void 0 : path.includes("/admin/editor")) || false;
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

/***/ 5998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QF": function() { return /* binding */ ADD_MENU; },
/* harmony export */   "bL": function() { return /* binding */ addMenu; },
/* harmony export */   "l2": function() { return /* binding */ ADD_MENUS; }
/* harmony export */ });
/* unused harmony export addMenus */
var ADD_MENU = 'ADD_MENU';
var ADD_MENUS = 'ADD_MENUS';
/**
 *
 * @param {{}} menu
 * @return {{}} -
 *   {
 *     type: {string},
 *     menu: {},
 *   }
 */

function addMenu(menu) {
  return {
    type: ADD_MENU,
    menu: menu
  };
}
/**
 *
 * @param {[{}]} menus
 * @return {{}} -
 *   {
 *     type: {string},
 *     menu: {},
 *   }
 */

function addMenus(menus) {
  return {
    type: ADD_MENUS,
    menus: menus
  };
}

/***/ }),

/***/ 61120:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 60136:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89611);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 59199:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

/***/ 82963:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71002);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97326);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(self);
}

/***/ }),

/***/ 93433:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _toConsumableArray; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(30907);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.Z)(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(59199);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(40181);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || (0,iterableToArray/* default */.Z)(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 71002:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

}]);
//# sourceMappingURL=MenuWidget.056483d90d9b367383b0.js.map