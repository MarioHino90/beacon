"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePopperPlacement = void 0;

var _getTargetCoordinates = require("../getTargetCoordinates");

var _getPopperDimensions3 = require("../getPopperDimensions");

var _getAutoPlacement = require("../getAutoPlacement");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var makePopperPlacement = function makePopperPlacement(element, popperRef, _ref) {
  var defaultPlacement = _ref.defaultPlacement,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 0 : _ref$distance,
      interactive = _ref.interactive,
      placement = _ref.placement,
      portalRef = _ref.portalRef,
      _ref$skidding = _ref.skidding,
      skidding = _ref$skidding === void 0 ? 0 : _ref$skidding;

  // if element is not defined, short-circuit
  if (!element) {
    return {
      left: 0,
      top: 0,
      activePlacement: "bottom"
    };
  } // calculate offset to ensure that overlap of popper when interactive


  var interactiveOffset = interactive ? -10 : 0; // get coordinates of target on the DOM

  var targetCoordinates = (0, _getTargetCoordinates.getTargetCoordinates)(element, portalRef); // get the dimensions of the Popper element

  var _getPopperDimensions = (0, _getPopperDimensions3.getPopperDimensions)(popperRef),
      _getPopperDimensions2 = _slicedToArray(_getPopperDimensions, 2),
      popperHeight = _getPopperDimensions2[0],
      popperWidth = _getPopperDimensions2[1]; // auto-placement calculations, if 'placement' is 'auto'


  var activePlacement = placement !== "auto" ? placement : (0, _getAutoPlacement.getAutoPlacement)(element, {
    popperHeight: popperHeight,
    popperWidth: popperWidth
  }, defaultPlacement); // break up coords for easier readability

  var top = targetCoordinates.top,
      right = targetCoordinates.right,
      bottom = targetCoordinates.bottom,
      left = targetCoordinates.left; // determine final placement of Popper

  switch (activePlacement) {
    case "bottom":
      return {
        left: left + (right - popperWidth) / 2 + skidding,
        top: top + bottom + interactiveOffset + distance,
        activePlacement: activePlacement
      };

    case "bottom-start":
      return {
        left: left + skidding + interactiveOffset,
        top: top + bottom + interactiveOffset + distance,
        activePlacement: activePlacement
      };

    case "bottom-end":
      return {
        left: left - (popperWidth - right) + skidding - interactiveOffset,
        top: top + bottom + interactiveOffset + distance,
        activePlacement: activePlacement
      };

    case "top":
      return {
        left: left + (right - popperWidth) / 2 + skidding,
        top: top - popperHeight - interactiveOffset - distance,
        activePlacement: activePlacement
      };

    case "top-start":
      return {
        left: left + skidding + interactiveOffset,
        top: top - popperHeight - interactiveOffset - distance,
        activePlacement: activePlacement
      };

    case "top-end":
      return {
        left: left - (popperWidth - right) + skidding - interactiveOffset,
        top: top - popperHeight - interactiveOffset - distance,
        activePlacement: activePlacement
      };

    case "right":
      return {
        left: left + right + interactiveOffset + distance,
        top: top + (bottom - popperHeight) / 2 + skidding,
        activePlacement: activePlacement
      };

    case "right-start":
      return {
        left: left + right + interactiveOffset + distance,
        top: top + skidding + interactiveOffset,
        activePlacement: activePlacement
      };

    case "right-end":
      return {
        left: left + right + interactiveOffset + distance,
        top: top - (popperHeight - bottom) + skidding - interactiveOffset,
        activePlacement: activePlacement
      };

    case "left":
      return {
        left: left - popperWidth - interactiveOffset - distance,
        top: top + bottom / 2 - popperHeight / 2 + skidding,
        activePlacement: activePlacement
      };

    case "left-start":
      return {
        left: left - popperWidth - interactiveOffset - distance,
        top: top + skidding + interactiveOffset,
        activePlacement: activePlacement
      };

    case "left-end":
      return {
        left: left - popperWidth - interactiveOffset - distance,
        top: top - (popperHeight - bottom) + skidding - interactiveOffset,
        activePlacement: activePlacement
      };

    default:
      return {
        left: left + (right - popperWidth) / 2 + skidding,
        top: top - popperHeight - interactiveOffset - distance,
        activePlacement: "bottom"
      };
  }
};

exports.makePopperPlacement = makePopperPlacement;