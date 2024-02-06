"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFooter = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(["bcl-tfoot", className])
  };
};

var TableFooter = _styledComponents["default"].tfoot.attrs(getAttrs).withConfig({
  displayName: "TableFooter",
  componentId: "sc-zj2li1-0"
})([""]);

exports.TableFooter = TableFooter;
TableFooter.displayName = "TableFooter";