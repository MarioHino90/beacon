"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertModalFooter = void 0;

var _react = _interopRequireDefault(require("react"));

var _beaconCore = require("@braze/beacon-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AlertModalFooter = function AlertModalFooter(props) {
  return /*#__PURE__*/_react["default"].createElement(_beaconCore.ModalFooter, props);
};

exports.AlertModalFooter = AlertModalFooter;
AlertModalFooter.displayName = "AlertModalFooter";