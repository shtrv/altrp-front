"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["SingleElementWrapper"],{

/***/ 45477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_SingleElementWrapper; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/store/elements-storage/actions.js
var actions = __webpack_require__(1196);
// EXTERNAL MODULE: ./resources/modules/editor/src/js/components/widgets/styled-components/NavComponent.js
var NavComponent = __webpack_require__(90628);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/index.js + 12 modules
var esm = __webpack_require__(57865);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/core/DndProvider.js + 33 modules
var DndProvider = __webpack_require__(14129);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 2 modules
var styled_components_browser_esm = __webpack_require__(25290);
// EXTERNAL MODULE: ./resources/modules/editor/src/js/components/altrp-tooltip/AltrpTooltip2.js
var AltrpTooltip2 = __webpack_require__(54737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/helpers/animations/animations-styles.js
var animations_styles = __webpack_require__(59461);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getResponsiveSetting.js
var getResponsiveSetting = __webpack_require__(79919);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/components/EntranceAnimationsStyles.js


var _templateObject;



/**
 * Render styles to animations via styled component
 * @param {{}} settings
 * @param {string} elementId
 * todo: delete this module
 */

var EntranceAnimationsStyles = createGlobalStyle(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["", ""])), function (_ref) {
  var settings = _ref.settings,
      elementId = _ref.elementId;
  // console.error(elementId);
  var entranceAnimationType = (0,getResponsiveSetting/* default */.Z)(settings, 'en_an');
  var overflowHiddenContainer = (0,getResponsiveSetting/* default */.Z)(settings, 'en_a_switcher');
  var animationsMemo = window.animationsMemo || [];
  var styles = ".altrp-element".concat(elementId, " .dynamic-animation {\n  animation-duration:").concat(_.get((0,getResponsiveSetting/* default */.Z)(settings, 'en_a_duration'), 'size', 400), "ms;"); // if(_.get(getResponsiveSetting(settings, 'en_a_delay'), 'size')){
  //   styles +=`animation-delay:${_.get(getResponsiveSetting(settings, 'en_a_delay'), 'size')}ms;`
  // }

  styles += "}";

  if (!overflowHiddenContainer) {
    styles += ".altrp-section {\n      overflow: visible !important;\n    }";
  }

  if (animations_styles/* default */.Z[entranceAnimationType] && animationsMemo.indexOf(entranceAnimationType) === -1) {
    animationsMemo.push(entranceAnimationType);
    styles += animations_styles/* default */.Z[entranceAnimationType];
  }

  return styles;
});
/* harmony default export */ var components_EntranceAnimationsStyles = (EntranceAnimationsStyles);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/isEditor.js
var isEditor = __webpack_require__(63532);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/replaceContentWithData.js
var replaceContentWithData = __webpack_require__(26078);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/altrpRandomId.js
var altrpRandomId = __webpack_require__(95645);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/conditionsChecker.js
var conditionsChecker = __webpack_require__(92184);
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/altrpCompare.js
var altrpCompare = __webpack_require__(32494);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/components/AltrpSkeletonBoxFrontApp.js

function AltrpSkeletonBoxFrontApp(_ref) {
  var itemsCount = _ref.itemsCount;
  return /*#__PURE__*/react.createElement("div", {
    className: "altrp-skeleton-box ".concat(itemsCount ? 'altrp-skeleton-box_grid' : '')
  }, Array.from(Array(itemsCount)).map(function (i, idx) {
    return /*#__PURE__*/react.createElement("div", {
      className: "altrp-skeleton-box__item",
      key: idx
    });
  }));
}
// EXTERNAL MODULE: ./resources/modules/front-app/src/js/functions/getDataByPath.js
var getDataByPath = __webpack_require__(17297);
;// CONCATENATED MODULE: ./resources/modules/front-app/src/js/components/SingleElementWrapper.js









var SingleElementWrapper_templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var TransparentDiv = styled_components_browser_esm/* default.div */.ZP.div(SingleElementWrapper_templateObject || (SingleElementWrapper_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["\n"])));

var SingleElementWrapper = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(SingleElementWrapper, _Component);

  var _super = _createSuper(SingleElementWrapper);

  function SingleElementWrapper(props) {
    var _this$props$elementWr;

    var _this;

    (0,classCallCheck/* default */.Z)(this, SingleElementWrapper);

    _this = _super.call(this, props);

    _this.updateStore = function () {
      if (_this.state.currentModel !== appStore.getState().currentModel) {
        _this.setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            currentModel: appStore.getState().currentModel
          });
        });
      }
      /**
       * Обновляем пользователя
       */


      if (_this.state.currentUser !== appStore.getState().currentUser) {
        _this.setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            currentModel: appStore.getState().currentUser
          });
        });
      }
      /**
       * Обновляем currentDataStorage
       */


      if (_this.state.currentDataStorage !== appStore.getState().currentDataStorage) {
        _this.setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            currentDataStorage: appStore.getState().currentDataStorage
          });
        });
      }
    };

    _this.state = {
      elementDisplay: !_this.props.element.getSettings("default_hidden"),
      withSkeleton: _this.props.withSkeleton
    };
    props.element.wrapper = (0,assertThisInitialized/* default */.Z)(_this);
    _this.elementWrapperRef = _this.props.elementWrapperRef;
    _this.elementRef = /*#__PURE__*/react.createRef();
    _this.wrapper = (_this$props$elementWr = _this.props.elementWrapperRef) !== null && _this$props$elementWr !== void 0 && _this$props$elementWr.current ? /*#__PURE__*/react.createRef() : _this.props.elementWrapperRef;
    _this.tooltipWrapper = {
      current: _this.props.container
    };
    _this.settings = props.element.getSettings();
    _this.onClickTooltip = _this.onClickTooltip.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.closeTooltip = _this.closeTooltip.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.tooltipOnMouseEnter = _this.tooltipOnMouseEnter.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.tooltipOnMouseLeave = _this.tooltipOnMouseLeave.bind((0,assertThisInitialized/* default */.Z)(_this));
    appStore.dispatch((0,actions/* addElement */.MN)((0,assertThisInitialized/* default */.Z)(_this)));
    _this.elementId = props.element.getId();
    return _this;
  }
  /**
   * Отлавливаем ошибки
   * @param error
   * @param errorInfo
   */


  (0,createClass/* default */.Z)(SingleElementWrapper, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: error,
          errorInfo: errorInfo
        });
      });
    }
    /**
     *
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$element$s,
          _this2 = this,
          _window,
          _window$frontApp;

      var skeleton_pending_path = (_this$props$element$s = this.props.element.settings) === null || _this$props$element$s === void 0 ? void 0 : _this$props$element$s.skeleton_pending_path;

      if (this.props.withSkeleton) {
        setTimeout(function () {
          if (skeleton_pending_path && (0,getDataByPath/* default */.Z)(skeleton_pending_path)) {
            _this2.setState(function (state) {
              return _objectSpread(_objectSpread({}, state), {}, {
                withSkeleton: false
              });
            });

            var resizeEvent = new Event('resize');
            window.dispatchEvent(resizeEvent);
          }

          if (!skeleton_pending_path) {
            _this2.setState(function (state) {
              return _objectSpread(_objectSpread({}, state), {}, {
                withSkeleton: false
              });
            });

            var _resizeEvent = new Event('resize');

            window.dispatchEvent(_resizeEvent);
          }
        }, 1000);
      }

      !(0,isEditor/* default */.Z)() && ((_window = window) === null || _window === void 0 ? void 0 : (_window$frontApp = _window.frontApp) === null || _window$frontApp === void 0 ? void 0 : _window$frontApp.onWidgetMount());

      if (_.isFunction(this.props.element.update)) {
        this.props.element.update();
        this.props.element.updateFonts();
      }

      this.checkElementDisplay();
      window.addEventListener("load", function () {
        window.dispatchEvent(new Event("resize"));
      });
      var element = this.props.element; // const mountElementEvent = new Event(`altrp-mount-element:${element.getId()}` );
      // const mountElementTypeEvent = new Event(`altrp-mount-element:${element.getName()}` );
      // document.dispatchEvent(mountElementEvent)
      // document.dispatchEvent(mountElementTypeEvent)
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var element = this.props.element;
      var unmountElementEvent = new Event("altrp-unmount-element:".concat(element.getId()));
      var unmountElementTypeEvent = new Event("altrp-unmount-element:".concat(element.getName()));
      document.dispatchEvent(unmountElementEvent);
      document.dispatchEvent(unmountElementTypeEvent);
    }
    /**
     * Подписываемся на обновление store редакса
     */

  }, {
    key: "getStylesHTMLElement",
    value:
    /**
     * Вернет HTMLElement, в котором записаны css стили текущего компонента
     * @return {null | HTMLElement}
     */
    function getStylesHTMLElement() {
      if (!_.get(window, "stylesModule.stylesContainer.current")) {
        return null;
      }

      return window.stylesModule.stylesContainer.current.getElementsByClassName("altrp-styles".concat(this.props.element.getId()))[0] || null;
    }
  }, {
    key: "closeTooltip",
    value: function closeTooltip(e) {
      if (!e.path.includes(this.wrapper.current)) {
        var checkTooltip = e.path.find(function (domElem) {
          return domElem.classList ? domElem.classList.contains("bp3-popover2") : false;
        });

        if (!checkTooltip) {
          this.setState(function (s) {
            return _objectSpread(_objectSpread({}, s), {}, {
              tooltipOpen: false
            });
          });
          this.tooltipOnClickListener(true);
        }
      }
    }
  }, {
    key: "tooltipOnClickListener",
    value: function tooltipOnClickListener(remove) {
      if (remove) {
        document.removeEventListener("click", this.closeTooltip, {
          capture: true
        });
      } else {
        document.addEventListener("click", this.closeTooltip, {
          capture: true
        });
      }
    }
  }, {
    key: "tooltipOnMouseEnter",
    value: function tooltipOnMouseEnter() {
      this.setState(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          tooltipOpen: true
        });
      });
    }
  }, {
    key: "tooltipOnMouseLeave",
    value: function tooltipOnMouseLeave() {
      this.setState(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          tooltipOpen: false
        });
      });
    }
  }, {
    key: "onClickTooltip",
    value: function onClickTooltip() {
      this.setState(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          tooltipOpen: !s.tooltipOpen
        });
      });
      this.tooltipOnClickListener();
    }
  }, {
    key: "componentDidUpdate",
    value:
    /**
     * Нужно ли обновить отображение обертки элементов
     * @param {{}} prevProps
     * @param {{}} prevState
     */
    function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      this.checkElementDisplay();

      if (prevProps.currentDataStorage !== this.props.currentDataStorage) {
        var _this$props$element$s2;

        var skeleton_pending_path = (_this$props$element$s2 = this.props.element.settings) === null || _this$props$element$s2 === void 0 ? void 0 : _this$props$element$s2.skeleton_pending_path;

        if (this.state.withSkeleton && (0,getDataByPath/* default */.Z)(skeleton_pending_path)) {
          setTimeout(function () {
            _this3.setState(function (state) {
              return _objectSpread(_objectSpread({}, state), {}, {
                withSkeleton: false
              });
            });

            console.trace('delay 2', _this3);
          }, 1000);
        }
      }
    }
    /**
     * Обновить элемент изменив this.state.updateToken
     */

  }, {
    key: "updateElement",
    value: function updateElement() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          updateToken: (0,altrpRandomId/* default */.Z)()
        });
      });
    }
    /**
     * Проверка видимости элемента
     * @param {{}} prevProps
     * @param {{}} prevState
     */

  }, {
    key: "checkElementDisplay",
    value: function checkElementDisplay(prevProps, prevState) {
      /**
       * @member {FrontElement} element
       */
      var element = this.props.element;

      if (!element.getSettings("conditional_other")) {
        return;
      }

      var conditions = element.getSettings("conditions", []);
      conditions = conditions.map(function (c) {
        var modelField = c.conditional_model_field,
            operator = c.conditional_other_operator,
            value = c.conditional_other_condition_value;
        return {
          modelField: modelField,
          operator: operator,
          value: value
        };
      });
      var elementDisplay = (0,conditionsChecker/* default */.Z)(conditions, element.getSettings("conditional_other_display") === "AND", this.props.element.getCurrentModel(), true);

      if (this.state.elementDisplay === elementDisplay) {
        return;
      }

      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          elementDisplay: elementDisplay
        });
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(newProps, newState) {
      var element = this.props.element;
      var dependencies = element.dependencies;

      if ((0,isEditor/* default */.Z)()) {
        return false;
      }

      dependencies = dependencies || [];

      if (newState.elementDisplay !== this.state.elementDisplay) {
        return true;
      }

      if (newProps.altrpPageState !== this.props.altrpPageState && dependencies.indexOf('altrppagestate') === -1) {
        ++window.countReduced;
        return false;
      }

      if (newProps.currentDataStorage !== this.props.currentDataStorage && dependencies.indexOf('altrpdata') === -1 && newProps.currentDataStorage.getProperty("currentDataStorageLoaded") === this.props.currentDataStorage.getProperty("currentDataStorageLoaded")) {
        ++window.countReduced;
        return false;
      }

      if (newProps.altrpresponses !== this.props.altrpresponses && dependencies.indexOf('altrpresponses') === -1) {
        ++window.countReduced;
        return false;
      }

      if (newProps.formsStore !== this.props.formsStore && dependencies.indexOf('altrpforms') === -1) {
        ++window.countReduced;

        if (element.getName().indexOf('input') > -1 || element.getName() === 'textarea') {
          if (!newProps.formsStore.changedField) {
            return true;
          }

          return "".concat(element.getFormId(), ".").concat(element.getFieldId()) === newProps.formsStore.changedField;
        }

        return false;
      }

      if (newProps.altrpMeta !== this.props.altrpMeta && dependencies.indexOf('altrpmeta') === -1) {
        ++window.countReduced;
        return false;
      }

      ++window.count;
      return true;
    }
    /**
     * Переключает видимость элемента
     */

  }, {
    key: "toggleElementDisplay",
    value: function toggleElementDisplay() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          elementDisplay: !state.elementDisplay
        });
      });
    }
    /**
     * Метод для проверки видимости поля формы
     * @return {boolean}
     */

  }, {
    key: "inputIsDisplay",
    value: function inputIsDisplay() {
      var formsStore = this.state.formsStore;
      var formId = this.props.element.getSettings("form_id", "");
      var logic = this.props.element.getSettings("form_condition_display_on", "AND");
      var formConditions = this.props.element.getSettings("form_conditions", []);
      var display = true;
      formConditions.forEach(function (c) {
        if (logic === "AND") {
          display *= (0,altrpCompare/* default */.Z)(_.get(formsStore, "".concat(formId, ".").concat(c.field_id)), c.value, c.operator);
        } else {
          display += (0,altrpCompare/* default */.Z)(_.get(formsStore, "".concat(formId, ".").concat(c.field_id)), c.value, c.operator);
        }
      });
      return display;
    }
  }, {
    key: "render",
    value: function render() {
      /**
       * @member {FrontElement} element
       */
      var element = this.props.element;
      var tooltip_position = element.getResponsiveSetting('tooltip_position') || 'bottom';
      var tooltip_text = this.props.element.getResponsiveSetting('tooltip_text');
      var tooltip_minimal = this.props.element.getResponsiveSetting('tooltip_minimal');
      var tooltip_show_type = this.props.element.getResponsiveSetting('tooltip_show_type') || 'never';
      var tooltip_horizontal_offset = this.props.element.getResponsiveSetting('tooltip_horizontal_offset');
      var tooltip_vertical_offset = this.props.element.getResponsiveSetting('tooltip_vertical_offset');

      if (this.state.errorInfo) {
        return /*#__PURE__*/react.createElement("div", {
          className: "altrp-error",
          "data-eltype": this.props.element.getType()
        }, /*#__PURE__*/react.createElement("h2", null, "Something went wrong."), /*#__PURE__*/react.createElement("details", {
          style: {
            whiteSpace: "pre-wrap"
          }
        }, this.state.error && this.state.error.toString(), /*#__PURE__*/react.createElement("br", null), this.state.errorInfo.componentStack));
      }

      var styles = {};

      if (!this.state.elementDisplay) {
        styles.display = "none";
      }

      var CSSId = this.props.element.getSettings("advanced_element_id", "");
      CSSId = (0,replaceContentWithData/* default */.Z)(CSSId, this.props.element.getCurrentModel().getData());

      if (this.CSSId !== CSSId) {
        this.CSSId = CSSId;
      }

      var ContentComponent = frontElementsManager.getComponentClass(this.props.element.getName());
      var content;

      if (this.props.element.getName() === "table") {
        content = /*#__PURE__*/react.createElement(DndProvider/* DndProvider */.W, {
          backend: esm/* HTML5Backend */.PD
        }, /*#__PURE__*/react.createElement(ContentComponent, {
          ref: this.elementRef,
          rootElement: this.props.rootElement,
          ElementWrapper: this.props.ElementWrapper,
          element: this.props.element,
          children: this.props.element.getChildren(),
          match: this.props.match,
          currentModel: this.props.currentModel,
          currentUser: this.props.currentUser,
          currentDataStorage: this.props.currentDataStorage,
          altrpresponses: this.props.altrpresponses,
          formsStore: this.props.formsStore,
          elementDisplay: this.state.elementDisplay,
          altrpPageState: this.props.altrpPageState,
          altrpMeta: this.props.altrpMeta,
          updateToken: this.state.updateToken,
          currentScreen: this.props.currentScreen,
          baseRender: this.props.baseRender,
          history: this.props.history,
          appStore: appStore
        }));
      } else {
        content = /*#__PURE__*/react.createElement(ContentComponent, {
          ref: this.elementRef,
          rootElement: this.props.rootElement,
          ElementWrapper: this.props.ElementWrapper,
          element: this.props.element,
          children: this.props.element.getChildren(),
          match: this.props.match,
          currentModel: this.props.currentModel,
          currentUser: this.props.currentUser,
          currentDataStorage: this.props.currentDataStorage,
          altrpresponses: this.props.altrpresponses,
          formsStore: this.props.formsStore,
          elementDisplay: this.state.elementDisplay,
          altrpPageState: this.props.altrpPageState,
          altrpMeta: this.props.altrpMeta,
          updateToken: this.state.updateToken,
          currentScreen: this.props.currentScreen,
          baseRender: this.props.baseRender,
          history: this.props.history,
          appStore: appStore
        });
      }

      var WrapperComponent = TransparentDiv;

      switch (this.props.element.getName()) {
        case "nav":
          WrapperComponent = NavComponent/* default */.Z;
          break;

        case "menu":
        case "input-file":
        case "section":
        case "section_widget":
        case "input-crop-image":
        case "icon":
        case "column":
          WrapperComponent = react.Fragment;
          break;
      }

      tooltip_text = (0,replaceContentWithData/* default */.Z)(tooltip_text, this.props.element.getCurrentModel().getData());
      var wrapperProps = {
        elementId: this.elementId,
        settings: this.settings,
        ref: this.wrapper,
        style: styles,
        onClick: tooltip_show_type === "click" ? this.onClickTooltip : null,
        onMouseEnter: tooltip_show_type === "hover" ? this.tooltipOnMouseEnter : null,
        onMouseLeave: tooltip_show_type === "hover" ? this.tooltipOnMouseLeave : null
      };
      var entranceAnimationType = element.getResponsiveSetting('en_an');

      if (entranceAnimationType) {
        var _element$getResponsiv;

        wrapperProps['data-enter-animation-type'] = entranceAnimationType;
        wrapperProps['data-enter-animation-delay'] = ((_element$getResponsiv = element.getResponsiveSetting('en_a_delay')) === null || _element$getResponsiv === void 0 ? void 0 : _element$getResponsiv.size) || 0;
        wrapperProps.className = 'dynamic-animation altrp-invisible';
        content = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_EntranceAnimationsStyles, {
          settings: element.getSettings(),
          elementId: element.getId()
        }), content);
      }

      if (WrapperComponent === react.Fragment) {
        wrapperProps = {};
      }

      this.updateHTMLElementDisplay();

      if (['column', 'section'].indexOf(this.props.element.getType()) !== -1) {
        tooltip_show_type = 'never';
      }

      if (!this.props.element.getResponsiveSetting('tooltip_enable')) {
        tooltip_show_type = 'never';
      }

      return /*#__PURE__*/react.createElement(react.Fragment, null, tooltip_show_type && tooltip_show_type !== "never" && tooltip_show_type !== "Never" ? /*#__PURE__*/react.createElement(AltrpTooltip2/* default */.Z, {
        element: this.tooltipWrapper,
        text: tooltip_text,
        id: this.props.element.getId(),
        open: tooltip_show_type === "always" ? true : this.state.tooltipOpen,
        position: tooltip_position,
        minimal: tooltip_minimal,
        horizontal: tooltip_horizontal_offset,
        vertical: tooltip_vertical_offset
      }) : '', this.state.withSkeleton && /*#__PURE__*/react.createElement(AltrpSkeletonBoxFrontApp, {
        itemsCount: this.props.skeletonItems
      }), /*#__PURE__*/react.createElement(WrapperComponent, wrapperProps, content));
    }
  }, {
    key: "updateHTMLElementDisplay",
    value: function updateHTMLElementDisplay() {
      var HTMLElement = document.querySelector("[data-react-element=\"".concat(this.props.element.getId(), "\"]"));

      if (HTMLElement) {
        HTMLElement.style.display = this.state.elementDisplay ? null : 'none';
      }
    }
  }]);

  return SingleElementWrapper;
}(Component);

function mapStateToProps(state) {
  return {
    hideTriggers: state.hideTriggers,
    altrpresponses: state.altrpresponses,
    formsStore: state.formsStore,
    currentDataStorage: state.currentDataStorage,
    currentModel: state.currentModel,
    currentUser: state.currentUser,
    altrpMeta: state.altrpMeta,
    altrpPageState: state.altrpPageState,
    currentScreen: state.currentScreen
  };
}

/* harmony default export */ var components_SingleElementWrapper = (window.reactRedux.connect(mapStateToProps)(SingleElementWrapper));

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
//# sourceMappingURL=SingleElementWrapper.76e0bb34ada166461798.js.map