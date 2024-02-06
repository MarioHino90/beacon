"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAlertDescriptionText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])("bcl-banner-alert-description-text", className)
  };
};

var BannerAlertDescriptionText = _styledComponents["default"].span.attrs(getAttrs).withConfig({
  displayName: "BannerAlertDescriptionText",
  componentId: "sc-ge6i0a-0"
})(["margin:0 10px 0 0;"]);

exports.BannerAlertDescriptionText = BannerAlertDescriptionText;
BannerAlertDescriptionText.displayName = "BannerAlertDescriptionText";