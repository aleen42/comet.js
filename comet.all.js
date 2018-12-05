"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $ = require('jquery');

var _time = 0;

var _timeout;
/**
 * [_refresh: a method to refresh to run another ajax]
 * @param comet
 * @private
 */


var _refresh = function _refresh(comet) {
  _timeout = setTimeout(function () {
    comet.run();
  }, comet.sleep);
};
/**
 * [comet: the class of comet]
 * @type {Object}
 */


var Comet =
/*#__PURE__*/
function () {
  /**
   * @param url
   * @param sleep
   * @param times
   */
  function Comet(url) {
    var sleep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

    _classCallCheck(this, Comet);

    this.url = url;
    this.sleep = sleep;
    this.times = times;
    return this;
  }
  /**
   * [subscribe: a method to storing post data and callback function]
   * @param  {Object}   data     [post data]
  * @param  {Function} validate [valdiate function]
   * @param  {Function} callback [callback function]
   * @return {[type]}            [description]
   */


  _createClass(Comet, [{
    key: "subscribe",
    value: function subscribe(data) {
      var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return false;
      };
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      this.data = data;
      this.validate = validate;
      this.callback = callback;
      return this;
    }
    /**
     * [run: run the ajax]
     * @return {[type]} [description]
     */

  }, {
    key: "run",
    value: function run() {
      var _this = this;

      _time++;
      if ($.isNumeric(this.times) && this.times > 0 && _time > this.times) return;
      $.getJSON(this.url, this.data, function (data) {
        return _this.validate(data) ? _refresh(_this) : _this.callback(data);
      });
    }
  }]);

  return Comet;
}();

var _default = Comet;
exports["default"] = _default;
