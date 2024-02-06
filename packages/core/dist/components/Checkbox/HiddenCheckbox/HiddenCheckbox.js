"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HiddenCheckbox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs() {
  return {
    type: "checkbox"
  };
};

var HiddenCheckbox = _styledComponents["default"].input.attrs(getAttrs).withConfig({
  displayName: "HiddenCheckbox",
  componentId: "sc-1sfrqlb-0"
})(["opacity:0;margin:0;width:0;"]);

exports.HiddenCheckbox = HiddenCheckbox;
HiddenCheckbox.displayName = "HiddenCheckbox";