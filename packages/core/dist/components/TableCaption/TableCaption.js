"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCaption = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(["bcl-ta-caption", className])
  };
};

var TableCaption = _styledComponents["default"].caption.attrs(getAttrs).withConfig({
  displayName: "TableCaption",
  componentId: "sc-1ey95ns-0"
})([""]);

exports.TableCaption = TableCaption;
TableCaption.displayName = "TableCaption";