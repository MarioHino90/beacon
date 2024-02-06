"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledNumberInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Input = require("../Input");

var _NumberInputButton = require("./NumberInputButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledNumberInput = _styledComponents["default"].div.withConfig({
  displayName: "StyledNumberInput",
  componentId: "sc-plv1gy-0"
})(["position:relative;display:inline-block;user-select:none;width:fit-content;", "{opacity:0;}&:hover ", "{opacity:1;}", "{&[type=\"number\"]{appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;}}}"], _NumberInputButton.StyledNumberInputButton, _NumberInputButton.StyledNumberInputButton, _Input.StyledInput);

exports.StyledNumberInput = StyledNumberInput;