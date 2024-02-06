"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabelEnforceText = void 0;

var _react = _interopRequireDefault(require("react"));

var _beaconTranslations = require("@braze/beacon-translations");

var _StyledFieldLabel = require("./StyledFieldLabel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FieldLabelEnforceText = function FieldLabelEnforceText(_ref) {
  var enforce = _ref.enforce;

  var _useI18nNamespace = (0, _beaconTranslations.useI18nNamespace)("beacon-field-label"),
      t = _useI18nNamespace.t;

  if (enforce === "optional") {
    return /*#__PURE__*/_react["default"].createElement(_StyledFieldLabel.EnforceOptionalOrRequired, {
      "data-testid": "optional-field"
    }, " ", t("optional-field-notice", "(Optional)"));
  }

  if (enforce === "required") {
    return /*#__PURE__*/_react["default"].createElement(_StyledFieldLabel.EnforceOptionalOrRequired, {
      "data-testid": "required-field"
    }, " ", t("required-field-notice", "(Required)"));
  }

  return null;
};

exports.FieldLabelEnforceText = FieldLabelEnforceText;