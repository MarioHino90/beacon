"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertModalBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _beaconCore = require("@braze/beacon-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AlertModalBody = function AlertModalBody(props) {
  return /*#__PURE__*/_react["default"].createElement(_beaconCore.ModalBody, props);
};

exports.AlertModalBody = AlertModalBody;
AlertModalBody.displayName = "AlertModalBody";