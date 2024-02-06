"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRadioButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _HelpText = require("../HelpText");

var _RadioLabel = require("./RadioLabel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledRadioButton = _styledComponents["default"].div.withConfig({
  displayName: "StyledRadioButton",
  componentId: "sc-zrh6ei-0"
})(["position:relative;display:inline-flex;input[type=\"radio\"]{opacity:0;margin:0;width:0;&:focus + label:before{", "}&:checked + label:after{opacity:1;}}& + ", "{margin-top:0rem;padding-left:30px;}"], _RadioLabel.radioButtonShadowCss, _HelpText.StyledHelpText);

exports.StyledRadioButton = StyledRadioButton;