"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledTableRow = require("./StyledTableRow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TableRow = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledTableRow.StyledTableRow, _extends({}, props, {
    ref: ref
  }));
});

exports.TableRow = TableRow;
TableRow.displayName = "TableRow";