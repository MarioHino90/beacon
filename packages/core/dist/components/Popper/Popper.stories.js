"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PreventCloseOnOutsideClickForElementWithCustomClass = exports.PreventCloseOnOutsideClickForElementWithClass = exports.PreventCloseOnAnyOutsideInteraction = exports.NoCrashOnOutsideClickForElementWithEmptyIgnoreClass = exports.LargePopperContent = exports.Interactive = exports.ElementNotFound = exports.DelayOpenAndClose = exports.DelayOnlyOpen = exports.DelayOnlyClose = exports.AdvancedExample = void 0;

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = require("../Button");

var _UncontrolledTooltip = require("../UncontrolledTooltip");

var _Tooltip = require("../Tooltip");

var _Popover = require("../Popover");

var _PopperDocs = _interopRequireDefault(require("./Popper.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// this is used to allow cypress tests to focus away from the popper without using realPress("Tab")
// it's invisible because it doesn't affect the story at all from an enduser perspective
var InvisibleButton = function InvisibleButton() {
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      color: "transparent"
    }
  }, "invisible button");
};

var SampleContext = /*#__PURE__*/(0, _react.createContext)({
  addButton: function addButton(_children) {}
});

var RenderTooltipButton = function RenderTooltipButton(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(SampleContext),
      addButton = _useContext.addButton;

  (0, _react.useLayoutEffect)(function () {
    addButton(children);
  }, [addButton, children]);
  return null;
};

var DelayedRenderOfChildrenwithTooltips = function DelayedRenderOfChildrenwithTooltips(_ref2) {
  var children = _ref2.children;

  var _useState = (0, _react.useState)(new Set()),
      _useState2 = _slicedToArray(_useState, 2),
      buttons = _useState2[0],
      setButtons = _useState2[1];

  var addButton = (0, _react.useCallback)(function (buttonText) {
    return setButtons(function (oldState) {
      return new Set([].concat(_toConsumableArray(oldState), [buttonText]));
    });
  }, [setButtons]);
  var mouseLeaveUntrigger = (0, _addonKnobs["boolean"])("add mouseleave untrigger", false);
  return /*#__PURE__*/_react["default"].createElement(SampleContext.Provider, {
    value: {
      addButton: addButton
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, _toConsumableArray(buttons).map(function (toolTip) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: toolTip
    }, /*#__PURE__*/_react["default"].createElement(_UncontrolledTooltip.UncontrolledTooltip, {
      label: toolTip,
      triggers: ["click"],
      untriggers: ["click"].concat(mouseLeaveUntrigger ? ["mouseleave"] : [])
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Hover over me")), "\xA0");
  })), children);
}; // eslint-disable-next-line import/no-default-export


var _default = {
  title: "Core/Overlay/Popper",
  component: _.Popper,
  parameters: {
    docs: {
      page: _PopperDocs["default"]
    }
  }
};
exports["default"] = _default;

var AdvancedExample = function AdvancedExample() {
  return /*#__PURE__*/_react["default"].createElement(DelayedRenderOfChildrenwithTooltips, null, /*#__PURE__*/_react["default"].createElement(RenderTooltipButton, null, "Hi!"), /*#__PURE__*/_react["default"].createElement(RenderTooltipButton, null, "There!"));
};

exports.AdvancedExample = AdvancedExample;
AdvancedExample.storyName = "advanced example";

var ElementNotFound = function ElementNotFound() {
  var _useTooltip = (0, _Tooltip.useTooltip)(),
      _useTooltip2 = _slicedToArray(_useTooltip, 1),
      tooltipState = _useTooltip2[0];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "right"
  }, "This button has the wrong ID"), /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, _extends({}, tooltipState, {
    target: "wrong"
  }), "This won't show"));
};

exports.ElementNotFound = ElementNotFound;
ElementNotFound.storyName = "element not found";

var LargePopperContent = function LargePopperContent() {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var portalRef = _react["default"].useRef(null);

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%",
      height: "100vh",
      overflow: "scroll"
    },
    id: "scroll"
  }, "(scroll down and right inside the red box and click the button to see popover placement change)", /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: "1px solid red",
      width: "200%",
      height: "200%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    },
    ref: portalRef
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "right",
    onClick: function onClick() {
      return setIsOpen(function (open) {
        return !open;
      });
    }
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_.Popper, {
    isOpen: isOpen,
    target: "right",
    noArrow: true,
    popperStyle: {
      maxWidth: "none",
      maxHeight: "none"
    },
    onOpen: function onOpen() {},
    onClose: function onClose() {},
    portalRef: portalRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "pink"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Large Popper")))));
};

exports.LargePopperContent = LargePopperContent;
LargePopperContent.storyName = "large popper content";

var PreventCloseOnOutsideClickForElementWithClass = function PreventCloseOnOutsideClickForElementWithClass() {
  var _usePopover = (0, _Popover.usePopover)(),
      _usePopover2 = _slicedToArray(_usePopover, 2),
      popoverState = _usePopover2[0],
      targetRef = _usePopover2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "popper-open-btn",
    ref: targetRef
  }, "This button opens the popover"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "bcl-popper-ignore-click",
    style: {
      marginLeft: "1rem"
    }
  }, "This button does NOT close the popover"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: "bottom"
  }), "This is a bunch of content inside the popover"));
};

exports.PreventCloseOnOutsideClickForElementWithClass = PreventCloseOnOutsideClickForElementWithClass;
PreventCloseOnOutsideClickForElementWithClass.storyName = "prevent close on outside click for element with class";

var PreventCloseOnOutsideClickForElementWithCustomClass = function PreventCloseOnOutsideClickForElementWithCustomClass() {
  var _usePopover3 = (0, _Popover.usePopover)(),
      _usePopover4 = _slicedToArray(_usePopover3, 2),
      popoverState = _usePopover4[0],
      targetRef = _usePopover4[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "popper-open-btn",
    ref: targetRef
  }, "This button opens the popover"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "custom-popper-ignore-click",
    style: {
      marginLeft: "1rem"
    }
  }, "This button does NOT close the popover"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: "bottom",
    ignoreCloseOnClickOutsideClassName: "custom-popper-ignore-click"
  }), "This is a bunch of content inside the popover"));
};

exports.PreventCloseOnOutsideClickForElementWithCustomClass = PreventCloseOnOutsideClickForElementWithCustomClass;
PreventCloseOnOutsideClickForElementWithCustomClass.storyName = "prevent close on outside click for element with custom class";

var PreventCloseOnAnyOutsideInteraction = function PreventCloseOnAnyOutsideInteraction() {
  var _usePopover5 = (0, _Popover.usePopover)(),
      _usePopover6 = _slicedToArray(_usePopover5, 2),
      popoverState = _usePopover6[0],
      targetRef = _usePopover6[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "This button toggles the popover"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    type: "button",
    style: {
      marginLeft: "1rem"
    }
  }, "Click this to not close the popover"), /*#__PURE__*/_react["default"].createElement("div", null, "Nothing except a click on the button will open/close the popover"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: "bottom",
    closeOnClickOutside: false,
    triggers: ["click"],
    untriggers: ["click"]
  }), "This is a bunch of content inside the popper"));
};

exports.PreventCloseOnAnyOutsideInteraction = PreventCloseOnAnyOutsideInteraction;
PreventCloseOnAnyOutsideInteraction.storyName = "prevent close on any outside interaction";

var NoCrashOnOutsideClickForElementWithEmptyIgnoreClass = function NoCrashOnOutsideClickForElementWithEmptyIgnoreClass() {
  var _usePopover7 = (0, _Popover.usePopover)(),
      _usePopover8 = _slicedToArray(_usePopover7, 2),
      popoverState = _usePopover8[0],
      targetRef = _usePopover8[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "popper-open-btn",
    ref: targetRef
  }, "This button opens the popover"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "bcl-popper-ignore-click",
    style: {
      marginLeft: "1rem"
    }
  }, "This button does NOT close the popover"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: "bottom",
    isIgnoreCloseOnClickOutsideEnabled: false
  }), "This is a bunch of content inside the popover"));
};

exports.NoCrashOnOutsideClickForElementWithEmptyIgnoreClass = NoCrashOnOutsideClickForElementWithEmptyIgnoreClass;
NoCrashOnOutsideClickForElementWithEmptyIgnoreClass.storyName = "no crash on outside click for element with empty ignore class";

var Interactive = function Interactive() {
  var _usePopover9 = (0, _Popover.usePopover)(),
      _usePopover10 = _slicedToArray(_usePopover9, 2),
      popoverState = _usePopover10[0],
      targetRef = _usePopover10[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      clicked = _useState4[0],
      setClicked = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "This button toggles the popover"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: "bottom",
    interactive: true,
    triggers: ["click"],
    untriggers: ["click"]
  }), "This is a bunch of content inside the popper with a", " ", /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setClicked(true);
    }
  }, "button"), ".", /*#__PURE__*/_react["default"].createElement("span", {
    id: "button-clicked"
  }, clicked ? "Button clicked." : "Button not clicked.")));
};

exports.Interactive = Interactive;
Interactive.storyName = "interactive";

var DelayOpenAndClose = function DelayOpenAndClose() {
  var _usePopover11 = (0, _Popover.usePopover)(),
      _usePopover12 = _slicedToArray(_usePopover11, 2),
      popoverState = _usePopover12[0],
      targetRef = _usePopover12[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "This button opens the popover eventually"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    delay: 2000,
    triggers: ["click"],
    untriggers: ["blur"]
  }), "This is a bunch of content inside the popover"), /*#__PURE__*/_react["default"].createElement(InvisibleButton, null));
};

exports.DelayOpenAndClose = DelayOpenAndClose;
DelayOpenAndClose.storyName = "delay open and close";

var DelayOnlyClose = function DelayOnlyClose() {
  var _usePopover13 = (0, _Popover.usePopover)(),
      _usePopover14 = _slicedToArray(_usePopover13, 2),
      popoverState = _usePopover14[0],
      targetRef = _usePopover14[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "This button opens the popover eventually"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    delay: [null, 2000],
    triggers: ["click"],
    untriggers: ["blur"]
  }), "This is a bunch of content inside the popover"), /*#__PURE__*/_react["default"].createElement(InvisibleButton, null));
};

exports.DelayOnlyClose = DelayOnlyClose;
DelayOnlyClose.storyName = "delay only close";

var DelayOnlyOpen = function DelayOnlyOpen() {
  var _usePopover15 = (0, _Popover.usePopover)(),
      _usePopover16 = _slicedToArray(_usePopover15, 2),
      popoverState = _usePopover16[0],
      targetRef = _usePopover16[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "This button opens the popover eventually"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    delay: [2000, null],
    triggers: ["click"],
    untriggers: ["blur"]
  }), "This is a bunch of content inside the popover"), /*#__PURE__*/_react["default"].createElement(InvisibleButton, null));
};

exports.DelayOnlyOpen = DelayOnlyOpen;
DelayOnlyOpen.storyName = "delay only open";