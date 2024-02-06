"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(["bcl-tbody", className])
  };
};

var TableBody = _styledComponents["default"].tbody.attrs(getAttrs).withConfig({
  displayName: "TableBody",
  componentId: "sc-jb90h9-0"
})([""]);

exports.TableBody = TableBody;
TableBody.displayName = "TableBody";