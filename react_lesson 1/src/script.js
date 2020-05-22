"use strict";

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.reflect.construct");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = button;
exports.default = void 0;

function button() {
  return 'button';
}

var Slider = /*#__PURE__*/function () {
  function Slider(width, height, count) {
    _classCallCheck(this, Slider);

    this.width = width;
    this.height = height;
    this.count = count;
  }

  _createClass(Slider, [{
    key: "nextSlide",
    value: function nextSlide() {
      console.log('moving forvard');
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      console.log('back forvard');
    }
  }, {
    key: "whoAmI",
    value: function whoAmI() {
      console.log("width: ".concat(this.width, ", height: ").concat(this.height, ", count: ").concat(this.count, " "));
    }
  }]);

  return Slider;
}(); // const slider = new Slider(600, 400, 5),
//     someSlider = new Slider(400, 200, 10);
// slider.whoAmI();
// someSlider.whoAmI();


var AutoSlider = /*#__PURE__*/function (_Slider) {
  _inherits(AutoSlider, _Slider);

  var _super = _createSuper(AutoSlider);

  function AutoSlider(width, height, count, auto) {
    var _this;

    _classCallCheck(this, AutoSlider);

    _this = _super.call(this, width, height, count);
    _this.auto = auto;
    return _this;
  }

  _createClass(AutoSlider, [{
    key: "play",
    value: function play() {
      console.log("Autoplay: ".concat(this.auto));
    }
  }]);

  return AutoSlider;
}(Slider); // const slider = new AutoSlider(500, 500, 4, true);
// slider.whoAmI();
// slider.play();


var _default = Slider;
exports.default = _default;