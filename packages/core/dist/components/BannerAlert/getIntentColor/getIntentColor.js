"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGetIntentColor = void 0;

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["intent"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * function creator to get the color to display for a specific intent
 *
 * @param shade - the shade of color
 *
 * @return a function to get the intent color, given a intent and theme
 */
var createGetIntentColor = function createGetIntentColor(shade) {
  return function (_ref) {
    var intent = _ref.intent,
        props = _objectWithoutProperties(_ref, _excluded);

    return (0, _beaconStyling.getIntentColor)(intent, shade)(props) || "";
  };
};

exports.createGetIntentColor = createGetIntentColor;