"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntentBackgroundColor = exports.StyledBannerIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FlexBox = require("../FlexBox");

var _getIntentColor = require("../BannerAlert/getIntentColor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getIntentBackgroundColor = (0, _getIntentColor.createGetIntentColor)(100);
exports.getIntentBackgroundColor = getIntentBackgroundColor;
var StyledBannerIcon = (0, _styledComponents["default"])(_FlexBox.FlexBox).withConfig({
  displayName: "StyledBannerIcon",
  componentId: "sc-cu6zdw-0"
})(["height:24px;width:24px;border-radius:100%;background:", ";font-size:", ";"], getIntentBackgroundColor, function (_ref) {
  var intent = _ref.intent;
  return intent === "danger" ? "10px;" : "8px";
});
exports.StyledBannerIcon = StyledBannerIcon;