"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntentHoverBackgroundColor = exports.StyledClose = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getIntentColor = require("../BannerAlert/getIntentColor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * get the background color for a specific intent on button hover
 *
 * @param intent - the intent to get the color for
 *
 * @return the color for that intent
 */
var getIntentHoverBackgroundColor = (0, _getIntentColor.createGetIntentColor)(50);
exports.getIntentHoverBackgroundColor = getIntentHoverBackgroundColor;

var StyledClose = _styledComponents["default"].button.withConfig({
  displayName: "StyledClose",
  componentId: "sc-15re17c-0"
})(["width:40px;flex:0 0 40px;display:flex;align-items:center;justify-content:center;background:none;border:none;padding:0;margin:0;font-size:10px;cursor:pointer;&:hover{background:", ";}"], getIntentHoverBackgroundColor);

exports.StyledClose = StyledClose;