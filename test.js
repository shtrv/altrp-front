"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[6854], {49e3: function (e, t, r) {
  var s = r(87462), a = r(4942), n = r(15671), o = r(43144), l = r(60136), i = r(82963), c = r(61120), u = r(67294), p = r(92895), d = r.n(p), m = r(28216);
  function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t && (s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, s);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(Object(r), true).forEach(function (t) {
        (0, a.Z)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  r.e(3912).then(r.bind(r, 53912));
  var g = function (e) {
    (0, l.Z)(p, e);
    var t, r, a = (t = p, r = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }(), function () {
      var e, s = (0, c.Z)(t);
      if (r) {
        var a = (0, c.Z)(this).constructor;
        e = Reflect.construct(s, arguments, a);
      } else e = s.apply(this, arguments);
      return (0, i.Z)(this, e);
    });
    function p(e) {
      var t, r;
      return (0, n.Z)(this, p), t = a.call(this, e), r = e.carousel ? -1 !== e.carouselItems.findIndex(function (t) {
        return e.current === t.id;
      }) ? e.carouselItems.findIndex(function (t) {
        return e.current === t.id;
      }) : e.current ? e.current : 0 : e.current, t.state = {current: r}, t;
    }
    return (0, o.Z)(p, [{key: "getImages", value: function () {
      var e = this.props.lightboxID;
      return e && this.props.lightboxImages[e] || this.props.images;
    }}, {key: "componentDidMount", value: function () {
      this.updateCurrentIdx();
    }}, {key: "updateCurrentIdx", value: function () {
      var e = this.props.currentUrl;
      if (e) {
        var t = this.getImages().indexOf(e);
        -1 === t && (t = 0), this.state.current !== t && this.setState(function (e) {
          return h(h({}, e), {}, {current: t});
        });
      }
    }}, {key: "render", value: function () {
      var e = this, t = this.getImages(), r = this.props.settings, a = null, n = null, o = this.state.current || 0;
      0 !== t.length && "" !== t[0] || (t = ["/img/nullImage.png"]), t.length > 1 && (a = t[(o + 1) % t.length], n = t[(o + t.length - 1) % t.length]);
      var l = this.props.classes;
      return u.createElement(d(), (0, s.Z)({}, r, {mainSrc: t[o] || "/img/nullImage.png", onMovePrevRequest: function () {
        e.setState({current: (o + t.length - 1) % t.length});
      }, onMoveNextRequest: function () {
        e.setState({current: (o + 1) % t.length});
      }, prevSrc: n, nextSrc: a, wrapperClassName: "altrp-lightbox ".concat(l)}));
    }}]), p;
  }(u.Component);
  t.Z = (0, m.connect)(function (e) {
    return {lightboxImages: e.lightboxImages};
  })(g);
}, 96662: function (e, t, r) {
  r.r(t), r.d(t, {default: function () {
    return C;
  }});
  var s, a = r(4942), n = r(15671), o = r(43144), l = r(97326), i = r(60136), c = r(82963), u = r(61120), p = r(76450), d = r(87462), m = r(93433), f = r(67294), h = r(46066), g = r(49e3), v = r(63532), y = r(79324), b = r(17297), k = r(66086), w = r(79919), S = r(46251), O = r(30168), Z = r(61233), E = r(32360), N = Z.ZP.div(s || (s = (0, O.Z)(["\n& .altrp-carousel-slide{\n", "\n}\n& .slick-current .altrp-carousel-slide{\n", "\n}"])), function (e) {
    var t = "", r = e.settings, s = r.border_color_slides_style, a = r.border_width_slides_style, n = r.border_type_slide;
    return s && (t += "border-color:".concat(s.color, ";")), n && (t += "border-style:".concat(n, ";")), a && (t += (0, E.borderWidthStyled)(a)), t;
  }, function (e) {
    var t = "", r = e.settings, s = (0, w.default)(r, "border_color_slides_style", ".active"), a = (0, w.default)(r, "border_width_slides_style", ".active"), n = (0, w.default)(r, "border_type_slide", ".active");
    return s && (t += "border-color:".concat(s.color, ";")), n && (t += "border-style:".concat(n, ";")), a && (t += (0, E.borderWidthStyled)(a)), t;
  });
  function I(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t && (s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, s);
    }
    return r;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? I(Object(r), true).forEach(function (t) {
        (0, a.Z)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  R.defaultProps = {width: "38", height: "38", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg"}, r.e(3473).then(r.bind(r, 63473)), r.e(4853).then(r.bind(r, 34853)), r.e(8071).then(r.bind(r, 88071));
  var j = function (e) {
    (0, i.Z)(a, e);
    var t, r, s = (t = a, r = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }(), function () {
      var e, s = (0, u.Z)(t);
      if (r) {
        var a = (0, u.Z)(this).constructor;
        e = Reflect.construct(s, arguments, a);
      } else e = s.apply(this, arguments);
      return (0, c.Z)(this, e);
    });
    function a(e) {
      var t;
      (0, n.Z)(this, a), (t = s.call(this, e)).wrapperClick = function (e) {
        if (!(0, v.Z)() && _.isArray(t.carouselsToSynchronize)) {
          var r = Number(t.props.elementSettings.getResponsiveLockedSetting("per_view_slides_content")) || 1, s = e.target.closest(".slick-track");
          if (s && !(r < s.querySelectorAll(".slick-slide").length)) {
            var a = e.target.closest(".slick-slide");
            a && (a = Number(a.getAttribute("data-index")), _.isNaN(a) || (e.preventDefault(), e.stopPropagation(), t.carouselsToSynchronize.forEach(function (e) {
              e.setSlide(a);
            })));
          }
        }
      }, t.next = t.next.bind((0, l.Z)(t)), t.previous = t.previous.bind((0, l.Z)(t));
      var r = (0, w.default)(e, "card"), o = (0, w.default)(e, "cards_on"), i = (0, w.default)(e, "slides_item_source"), c = [];
      return o && "path" === i && r && (0, v.Z)() && (c = T(r)), t.state = {activeSlide: 0, openLightBox: false, sliderImages: [], updateToken: null, slidesMap: c, card: r}, t;
    }
    return (0, o.Z)(a, [{key: "componentDidMount", value: function () {
      var e = this;
      (0, w.default)(this.props, "slides_repeater", "", []).forEach(function (t) {
        e.setState(function (e) {
          var r = x({}, t.image_slides_repeater) || {};
          return r.url = r.url || "/img/nullImage.png", e.sliderImages.push(r.url), x({}, e);
        });
      });
    }}, {key: "componentDidUpdate", value: function (e) {
      var t = this, r = (0, w.default)(this.props, "card");
      if (this.state.card !== r) {
        var s = (0, w.default)(this.props, "cards_on"), a = (0, w.default)(this.props, "slides_item_source"), n = this.state.slidesMap;
        s && "path" === a && r && (0, v.Z)() && (n = T(r)), this.setState(function (e) {
          return x(x({}, e), {}, {slidesMap: n, card: r});
        });
      }
      var o = (0, w.default)(this.props, "slides_repeater", "", []);
      if (o !== e.slides_repeater && "custom" !== (0, w.default)(this.props, "slides_item_source", "", "custom")) {
        var l = [];
        o.forEach(function (e) {
          var t = x({}, e.image_slides_repeater) || {};
          t.url = t.url || "/img/nullImage.png", l.push(t.url);
        }), this.setState(function (e) {
          return x(x({}, e), {}, {sliderImages: l});
        });
      }
      if ("path" === (0, w.default)(this.props, "slides_item_source", "", "custom")) {
        var i = (0, b.Z)((0, w.default)(this.props, "slides_path"));
        !_.isArray(i) && _.isObject(i) ? i = [i] : _.isArray(i) || (i = []), i = i.map(function (e) {
          return _.get(e, "media.url") ? _.get(e, "media.url") : e.url;
        }), _.isEqual(i, this.state.sliderImages) || this.setState(function (e) {
          return x(x({}, e), {}, {sliderImages: i});
        });
      }
      var c = this.props.synchronized_id;
      c && (c = c.split(",")).forEach(function (e) {
        var r = (0, k.Z)(e);
        r && t.pushSliderToSynchronize(r);
      });
    }}, {key: "pushSliderToSynchronize", value: function (e) {
      var t = this;
      if (_.isArray(e)) return this.carouselsToSynchronize = (0, m.Z)(e), void (this.carouselsToSynchronize = this.carouselsToSynchronize.filter(function (e) {
        return e !== t;
      }));
      var r = this.carouselsToSynchronize || [];
      (e = _.get(e, "elementRef.current.carousel.current")) && -1 === r.indexOf(e) && (r.push(e), r.push(this), r.forEach(function (e) {
        e.pushSliderToSynchronize(r);
      }));
    }}, {key: "setSlide", value: function (e) {
      this.slider.slickGoTo(e);
    }}, {key: "next", value: function () {
      this.slider.slickNext();
    }}, {key: "previous", value: function () {
      this.slider.slickPrev();
    }}, {key: "render", value: function () {
      var e = this, t = this.props.classes, r = "".concat(t, " altrp-carousel-container"), s = (0, w.default)(this.props, "slides_item_source", "", "custom");
      r += this.props.arrows_navigation_content ? "" : " altrp-carousel-container-no-arrow";
      var a = (0, w.default)(this.props, "slides_repeater", "", []);
      if (0 === a.length && "path" !== s) {
        if (!(0, v.Z)()) return "";
        a = [{}, {}, {}, {}];
      }
      var n = "".concat(t, " altrp-carousel-dots"), o = "".concat(t, " altrp-carousel-slides"), l = (0, w.default)(this.props, "dots_navigation_content"), i = (0, w.default)(this.props, "dots_position_navigation_content");
      if (l) switch (i) {
        case "topLeft":
          n += " altrp-carousel-dots-top-left", o += " altrp-carousel-slides-dots-top";
          break;
        case "top":
          n += " altrp-carousel-dots-top", o += " altrp-carousel-slides-dots-top";
          break;
        case "topRight":
          n += " altrp-carousel-dots-top-right", o += " altrp-carousel-slides-dots-top";
          break;
        case "bottomLeft":
          n += " altrp-carousel-dots-bottom-left", o += " altrp-carousel-slides-dots-bottom";
          break;
        case "bottom":
          o += " altrp-carousel-slides-dots-bottom";
          break;
        case "bottomRight":
          n += " altrp-carousel-dots-bottom-right", o += " altrp-carousel-slides-dots-bottom";
      }
      var c = this.props.elementSettings.getResponsiveLockedSetting("infinite_loop_additional_content"), u = Number(this.props.elementSettings.getResponsiveLockedSetting("per_view_slides_content")) || 1, p = Number(this.props.elementSettings.getResponsiveLockedSetting("per_row_slides_content")) || 1, m = this.props.elementSettings.getResponsiveLockedSetting("vertical") || false;
      p > 1 && (u *= p), u >= a.length && (c = false);
      var k, O = (0, w.default)(this.props, "transition_duration_additional_content"), Z = (0, w.default)(this.props, "autoplay_additional_content"), E = (0, w.default)(this.props, "pause_on_interaction_loop_additional_content"), I = (0, w.default)(this.props, "transition_autoplay_duration_additional_content"), j = (0, w.default)(this.props, "cards_on"), T = (0, w.default)(this.props, "slides_item_source");
      j && (k = (0, w.default)(this.props, "card"));
      var P, B = {vertical: m, arrows: false, customPaging: function (r) {
        var s = false;
        return e.slider && (s = e.slider.innerSlider.state.currentSlide === r), f.createElement("a", null, f.createElement("div", {className: "".concat(t, " altrp-carousel-paging ") + (s ? "active" : "")}));
      }, dotsClass: n, dots: l, infinite: c, pauseOnHover: E, autoplay: Z, className: o, autoplaySpeed: Number(I), speed: Number(O), slidesToShow: Number(this.props.elementSettings.getResponsiveLockedSetting("per_view_slides_content")), slidesToScroll: Number(this.props.elementSettings.getResponsiveLockedSetting("to_scroll_slides_content")), rows: p, afterChange: function (t) {
        return e.setState({activeSlide: t});
      }, beforeChange: function (t, r) {
        e.carouselsToSynchronize && e.carouselsToSynchronize.forEach(function (e) {
          e.setSlide(r);
        });
      }}, C = (0, w.default)(this.props, "lightbox_slides_content"), D = (0, w.default)(this.props, "overlay_select_heading_additional_content");
      switch (s) {
        case "custom":
          P = a.map(function (r, s) {
            var a = r.switch_slides_repeater || false, n = r.image_slides_repeater ? x({}, r.image_slides_repeater) : {};
            n.url = n.url || "/img/nullImage.png", n.name = n.name || "null", n.assetType = n.assetType || "mediaBackground", "media" === n.assetType && (n.assetType = "mediaBackground"), (0, w.default)(e.props, "img_content") && (n.assetType = "image");
            var o = (0, y.Z)(n, {className: "".concat(t, " altrp-carousel-slide-img")});
            return true === a && (o = f.createElement(S.Z, {onLoad: function () {
              e.setState({updateToken: Math.random()});
            }, templateId: r.card_slides_repeater})), f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: r.id, onClick: function () {
              e.slider.slickGoTo(r.id), ightbox_slides_content && (0, w.default)(e.props, "lightbox_s_click") && e.setState(function (e) {
                return x(x({}, e), {}, {activeSlide: r.id, openLightBox: true});
              });
            }, onDoubleClick: function () {
              e.slider.slickGoTo(r.id), C && e.setState(function (e) {
                return x(x({}, e), {}, {activeSlide: r.id, openLightBox: true});
              });
            }}, o, "text" === D ? f.createElement("div", {className: "".concat(t, " altrp-carousel-slide-overlay")}, f.createElement("p", {className: "".concat(t, " altrp-carousel-slide-overlay-text")}, r.overlay_text_repeater)) : null);
          });
          break;
        case "path":
          (0, v.Z)() ? P = j && "path" === T && k ? this.state.slidesMap : [f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: 1}, (0, y.Z)({url: "/img/nullImage.png", assetType: "mediaBackground"}, {key: 1, className: "".concat(t, " altrp-carousel-slide-img")})), f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: 2}, (0, y.Z)({url: "/img/nullImage.png", assetType: "mediaBackground"}, {key: 1, className: "".concat(t, " altrp-carousel-slide-img")})), f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: 3}, (0, y.Z)({url: "/img/nullImage.png", assetType: "mediaBackground"}, {key: 1, className: "".concat(t, " altrp-carousel-slide-img")})), f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: 4}, (0, y.Z)({url: "/img/nullImage.png", assetType: "mediaBackground"}, {key: 1, className: "".concat(t, " altrp-carousel-slide-img")})), f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: 5}, (0, y.Z)({url: "/img/nullImage.png", assetType: "mediaBackground"}, {key: 1, className: "".concat(t, " altrp-carousel-slide-img")})), f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: 6}, (0, y.Z)({url: "/img/nullImage.png", assetType: "mediaBackground"}, {key: 1, className: "".concat(t, " altrp-carousel-slide-img")}))] : (P = (0, b.Z)((0, w.default)(this.props, "slides_path")), !_.isArray(P) && _.isObject(P) ? P = [P] : _.isArray(P) || (P = []), P = P.map(function (r, s) {
            var a;
            return j && "path" === T && k ? a = f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: 6}, f.createElement(S.Z, {cardModel: new altrpHelpers.AltrpModel(r), templateId: k})) : (_.isObject(r.media) && (r = r.media), r.url = r.url || "/img/nullImage.png", r.name = r.name || "null", r.assetType = r.assetType || "mediaBackground", "media" === r.assetType && (r.assetType = "mediaBackground"), a = (0, y.Z)(r, {className: "".concat(t, " altrp-carousel-slide-img")})), f.createElement("div", {className: "".concat(t, " altrp-carousel-slide"), key: s, onClick: function () {
              e.slider.slickGoTo(s), C && e.setState(function (e) {
                return x(x({}, e), {}, {openLightBox: true});
              });
            }, onDoubleClick: function () {
              e.slider.slickGoTo(s), C && e.setState(function (e) {
                return x(x({}, e), {}, {openLightBox: true});
              });
            }}, a);
          }));
      }
      var L = " ".concat(t, " "), z = " ".concat(t, " "), M = " ".concat(t, " "), A = (0, w.default)(this.props, "arrows_position_navigation_content");
      switch (A) {
        case "topLeft":
          M += " altrp-carousel-arrow-top-left altrp-carousel-arrow-top-wrapper";
          break;
        case "top":
          M += " altrp-carousel-arrow-top altrp-carousel-arrow-top-wrapper";
          break;
        case "topRight":
          M += " altrp-carousel-arrow-top-right altrp-carousel-arrow-top-wrapper";
          break;
        case "bottomLeft":
          M += " altrp-carousel-arrow-bottom-left altrp-carousel-arrow-bottom-wrapper";
          break;
        case "bottom":
          M += " altrp-carousel-arrow-bottom altrp-carousel-arrow-bottom-wrapper";
          break;
        case "bottomRight":
          M += " altrp-carousel-arrow-bottom-right altrp-carousel-arrow-bottom-wrapper";
      }
      var q = (0, w.default)(this.props, "arrows_navigation_content"), G = (0, w.default)(this.props, "slides_repeater"), W = (0, w.default)(this.props, "color_lightbox_style");
      L = q ? f.createElement("div", {className: "".concat(t, " altrp-carousel-arrow-prev altrp-carousel-arrow"), onClick: this.previous}, f.createElement(R, null)) : "", z = q ? f.createElement("div", {className: "".concat(t, " altrp-carousel-arrow-next altrp-carousel-arrow"), onClick: this.next}, f.createElement(R, null)) : "";
      var H = "";
      if (C) {
        var U = this.state.sliderImages;
        H = this.state.openLightBox ? f.createElement(g.Z, {images: U, current: this.state.activeSlide, carousel: true, carouselItems: G, settings: {onCloseRequest: function () {
          return e.setState({openLightBox: false});
        }}, color: W}) : "";
      }
      return f.createElement(N, {onClick: this.wrapperClick, settings: x({}, this.props), className: "".concat(t, " altrp-carousel")}, C ? H : "", "center" === A ? L : "", f.createElement("div", {className: r}, "center" !== A ? f.createElement("div", {className: "altrp-carousel-arrows-container" + M}, L, z) : "", f.createElement(h.Z, (0, d.Z)({ref: function (t) {
        return e.slider = t;
      }}, B), P)), "center" === A ? z : "");
    }}]), a;
  }(f.Component);
  function T(e) {
    return [f.createElement("div", {className: "altrp-carousel-slide", key: 1}, f.createElement(S.Z, {templateId: e})), f.createElement("div", {className: "altrp-carousel-slide", key: 2}, f.createElement(S.Z, {templateId: e})), f.createElement("div", {className: "altrp-carousel-slide", key: 3}, f.createElement(S.Z, {templateId: e})), f.createElement("div", {className: "altrp-carousel-slide", key: 4}, f.createElement(S.Z, {templateId: e})), f.createElement("div", {className: "altrp-carousel-slide", key: 5}, f.createElement(S.Z, {templateId: e})), f.createElement("div", {className: "altrp-carousel-slide", key: 6}, f.createElement(S.Z, {templateId: e}))];
  }
  function P(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t && (s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, s);
    }
    return r;
  }
  function B(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? P(Object(r), true).forEach(function (t) {
        (0, a.Z)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var C = function (e) {
    (0, i.Z)(a, e);
    var t, r, s = (t = a, r = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }(), function () {
      var e, s = (0, u.Z)(t);
      if (r) {
        var a = (0, u.Z)(this).constructor;
        e = Reflect.construct(s, arguments, a);
      } else e = s.apply(this, arguments);
      return (0, c.Z)(this, e);
    });
    function a(e) {
      var t;
      return (0, n.Z)(this, a), (t = s.call(this, e)).getClasses = function () {
        var e = "";
        return t.isActive() && (e += "active "), t.isDisabled() && (e += "state-disabled "), e;
      }, t.state = {settings: e.element.getSettings(), AltrpCarousel: function () {
        return React.createElement("div", null, "Loading...");
      }}, e.element.component = (0, l.Z)(t), window.elementDecorator && window.elementDecorator((0, l.Z)(t)), e.baseRender && (t.render = e.baseRender((0, l.Z)(t))), t.carousel = React.createRef(), t;
    }
    return (0, o.Z)(a, [{key: "render", value: function () {
      var e = B(B({}, this.props.element.getSettings()), {}, {elementSettings: this.props.element, currentScreen: this.props.currentScreen, elementId: this.props.element.getId(), classes: this.getClasses() + (this.props.element.getResponsiveLockedSetting("position_css_classes", "", "") || "")});
      return e.slides_repeater || (e.slides_repeater = []), (0, p.q1)(j) && (e.ref = this.carousel), React.createElement(j, e);
    }}]), a;
  }(Component);
}}]);
