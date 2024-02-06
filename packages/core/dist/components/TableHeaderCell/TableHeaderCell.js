"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeaderCell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _beaconTranslations = require("@braze/beacon-translations");

var _beaconHooks = require("@braze/beacon-hooks");

var _Tooltip = require("../Tooltip");

var _SortIcon = require("./SortIcon");

var _StyledTableHeaderCell = require("./StyledTableHeaderCell");

var _tooltipText = require("./utils/tooltipText");

var _excluded = ["sortDirection", "onSortColumn", "children", "sortTooltipPlacement", "firstSortDirection", "columnName", "sortMessages"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Given the current sort direction, return what the next one would be
 * @param sortDirection "asc", "desc" or undefined for no sort
 * @param order whether desc or asc should be first when transitioning from unsorted to sorted, represented as ["desc", "asc"] or ["asc", "desc"]
 */
var nextDirection = function nextDirection(sortDirection, firstSortDirection) {
  if (!sortDirection) {
    return firstSortDirection;
  }

  if (sortDirection === firstSortDirection) {
    return firstSortDirection === "desc" ? "asc" : "desc";
  }

  return undefined;
};
/**
 * Given a click event, determine if the target is the header button, or one of its children
 * @param target event.target from the click event
 * @param button the current property of the ref passed to the button
 */


var isHeaderButton = function isHeaderButton(target, button) {
  if (!target || !button) {
    return false;
  }

  if (target === button) {
    return true;
  }

  return isHeaderButton(target.parentElement, button);
};

var sortDirectionIcons = {
  asc: "sort-up",
  desc: "sort-down"
};

var getIconName = function getIconName(sortDirection, nextSortDirection, hovering) {
  if (sortDirection) {
    return sortDirectionIcons[sortDirection];
  } // we are unsorted, let's return the next sort direction on hover


  if (hovering) {
    if (nextSortDirection) {
      return sortDirectionIcons[nextSortDirection];
    }
  } // unsorted, not hovering, return the generic "unsorted" icon


  return "sort";
};

var ariaSort = {
  asc: "ascending",
  desc: "descending",
  none: undefined
};

var TableHeaderCell = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var sortDirection = _ref.sortDirection,
      onSortColumn = _ref.onSortColumn,
      children = _ref.children,
      _ref$sortTooltipPlace = _ref.sortTooltipPlacement,
      sortTooltipPlacement = _ref$sortTooltipPlace === void 0 ? "auto" : _ref$sortTooltipPlace,
      _ref$firstSortDirecti = _ref.firstSortDirection,
      firstSortDirection = _ref$firstSortDirecti === void 0 ? "desc" : _ref$firstSortDirecti,
      columnName = _ref.columnName,
      sortMessages = _ref.sortMessages,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovering = _useState2[0],
      setHovering = _useState2[1];

  var nextSortDirection = nextDirection(sortDirection, firstSortDirection);
  var tooltipId = (0, _beaconHooks.useId)("header-tooltip");
  var buttonRef = (0, _react.useRef)(null);
  var headerRef = (0, _react.useRef)(null);

  var _useTooltip = (0, _Tooltip.useTooltip)(ref || headerRef),
      _useTooltip2 = _slicedToArray(_useTooltip, 2),
      tooltipState = _useTooltip2[0],
      targetRef = _useTooltip2[1];

  var onHeaderClick = (0, _react.useCallback)(function () {
    onSortColumn === null || onSortColumn === void 0 ? void 0 : onSortColumn(nextSortDirection);
  }, [onSortColumn, nextSortDirection]);
  var onClick = (0, _react.useCallback)(function (e) {
    onSortColumn === null || onSortColumn === void 0 ? void 0 : onSortColumn(nextSortDirection);

    if (isHeaderButton(e.target, buttonRef.current)) {
      var _buttonRef$current;

      // this prevents the header cell background from persisting if the click is on the button
      (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 ? void 0 : _buttonRef$current.blur();
    }
  }, [onSortColumn, nextSortDirection]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    // intercept the enter/space hit on the button so that we can avoid blurring
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      onSortColumn === null || onSortColumn === void 0 ? void 0 : onSortColumn(nextSortDirection);
    }
  }, [onSortColumn, nextSortDirection]);

  var _useI18nNamespace = (0, _beaconTranslations.useI18nNamespace)("beacon-table"),
      t = _useI18nNamespace.t;

  var sortBy = (0, _tooltipText.getSortByMessages)(t, typeof children === "string" ? children : columnName || "", sortDirection, nextSortDirection, sortMessages); // TODO: based on https://adrianroselli.com/2021/04/sortable-table-columns.html choose a way to implement
  // full screen reader compatibility. First step is bringing <ScreenReaderText> to beacon

  return /*#__PURE__*/_react["default"].createElement(_StyledTableHeaderCell.StyledTableHeaderCell, _extends({}, props, {
    onClick: onHeaderClick,
    forwardedAs: "th",
    ref: targetRef,
    "aria-sort": ariaSort[sortDirection || "none"],
    "data-sortable": onSortColumn ? true : undefined,
    onMouseEnter: function onMouseEnter() {
      return setHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovering(false);
    }
  }), onSortColumn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: onClick,
    onKeyDown: onKeyDown,
    ref: buttonRef,
    "aria-label": sortBy.ariaLabel,
    "aria-live": "polite"
  }, children), /*#__PURE__*/_react["default"].createElement(_SortIcon.SortIcon, {
    sortDirection: sortDirection,
    "aria-hidden": true,
    inactive: sortDirection && true,
    name: getIconName(sortDirection, nextSortDirection, hovering)
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, _extends({}, tooltipState, {
    targetRef: targetRef,
    placement: sortTooltipPlacement,
    id: tooltipId
  }), sortBy.tooltip)) : children);
});

exports.TableHeaderCell = TableHeaderCell;
TableHeaderCell.displayName = "TableHeaderCell";