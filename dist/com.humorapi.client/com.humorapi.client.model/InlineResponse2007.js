"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Humor API
 * Awesome Humor API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@humorapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The InlineResponse2007 model module.
 * @module com.humorapi.client/com.humorapi.client.model/InlineResponse2007
 * @version 1.0
 */
var InlineResponse2007 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * @alias module:com.humorapi.client/com.humorapi.client.model/InlineResponse2007
   * @param word {String} 
   * @param rating {Number} 
   */
  function InlineResponse2007(word, rating) {
    _classCallCheck(this, InlineResponse2007);
    InlineResponse2007.initialize(this, word, rating);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InlineResponse2007, null, [{
    key: "initialize",
    value: function initialize(obj, word, rating) {
      obj['word'] = word;
      obj['rating'] = rating;
    }

    /**
     * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.humorapi.client/com.humorapi.client.model/InlineResponse2007} obj Optional instance to populate.
     * @return {module:com.humorapi.client/com.humorapi.client.model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2007();
        if (data.hasOwnProperty('word')) {
          obj['word'] = _ApiClient["default"].convertToType(data['word'], 'String');
        }
        if (data.hasOwnProperty('rating')) {
          obj['rating'] = _ApiClient["default"].convertToType(data['rating'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return InlineResponse2007;
}();
/**
 * @member {String} word
 */
InlineResponse2007.prototype['word'] = undefined;

/**
 * @member {Number} rating
 */
InlineResponse2007.prototype['rating'] = undefined;
var _default = exports["default"] = InlineResponse2007;