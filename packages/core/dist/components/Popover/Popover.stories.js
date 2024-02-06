"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithCloseButton = exports.UseWithDomId = exports.TriggerOnHover = exports.TriggerOnFocus = exports.SmallTarget = exports.PreventCloseOnOutsideClickForElementWithCustomClass = exports.PreventCloseOnOutsideClickForElementWithClass = exports.ModalUse = exports.KeyboardAccessibility = exports.Interactive = exports.BasicUse = exports.AutoPlacement = void 0;

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Input = require("../Input");

var _Button = require("../Button");

var _IconButton = require("../IconButton");

var _Modal = require("../Modal");

var _ModalHeading = require("../ModalHeading");

var _ModalBody = require("../ModalBody");

var _Popper = require("../Popper");

var _PopoverBody = require("../PopoverBody");

var _PopoverHeading = require("../PopoverHeading");

var _BannerAlert = require("../BannerAlert");

var _BannerAlertBody = require("../BannerAlertBody");

var _BannerAlertDescription = require("../BannerAlertDescription");

var _BannerAlertDescriptionText = require("../BannerAlertDescriptionText");

var _Popover = require("./Popover");

var _PopoverDocs = _interopRequireDefault(require("./Popover.docs.mdx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
}; // eslint-disable-next-line import/no-default-export


var _default = {
  title: "Core/Overlay/Popover",
  component: _Popover.Popover,
  parameters: {
    docs: {
      page: _PopoverDocs["default"]
    }
  }
};
exports["default"] = _default;

var MustBeCanvasMode = function MustBeCanvasMode() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 500
    }
  }, /*#__PURE__*/_react["default"].createElement(_BannerAlert.BannerAlert, {
    intent: "warning",
    isOpen: true
  }, /*#__PURE__*/_react["default"].createElement(_BannerAlertBody.BannerAlertBody, null, /*#__PURE__*/_react["default"].createElement(_BannerAlertDescription.BannerAlertDescription, null, /*#__PURE__*/_react["default"].createElement(_BannerAlertDescriptionText.BannerAlertDescriptionText, null, "Warning: This story only works in Canvas mode, click on the \"Canvas\" tab to view it.")))));
};

var BasicUse = function BasicUse() {
  var _usePopover = (0, _Popover.usePopover)(),
      _usePopover2 = _slicedToArray(_usePopover, 2),
      popoverState = _usePopover2[0],
      targetRef = _usePopover2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    defaultPlacement: (0, _addonKnobs.select)("Default Placement", _Popper.placementTypes, "bottom"),
    placement: (0, _addonKnobs.select)("Placement", _Popper.placementTypes, "auto"),
    isCloseEnabled: (0, _addonKnobs["boolean"])("Enable close button", false),
    distance: (0, _addonKnobs.number)("Distance", 10),
    skidding: (0, _addonKnobs.number)("Skidding", 0),
    interactive: (0, _addonKnobs["boolean"])("Interactive", false)
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, (0, _addonKnobs.text)("Heading text", "Heading")), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, (0, _addonKnobs.text)("Body text", "Set the priority of this Canvas relative to other individual in-app message Campaigns."))));
};

exports.BasicUse = BasicUse;
BasicUse.storyName = "basic use";

var SmallTarget = function SmallTarget() {
  var _usePopover3 = (0, _Popover.usePopover)(),
      _usePopover4 = _slicedToArray(_usePopover3, 2),
      popoverState = _usePopover4[0],
      targetRef = _usePopover4[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 40
    }
  }, /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
    ref: targetRef,
    name: "plus-circle",
    "aria-label": "select to open"
  }), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    defaultPlacement: (0, _addonKnobs.select)("Default Placement", _Popper.placementTypes, "bottom"),
    placement: (0, _addonKnobs.select)("Placement", _Popper.placementTypes, "auto"),
    isCloseEnabled: (0, _addonKnobs["boolean"])("Enable close button", false),
    distance: (0, _addonKnobs.number)("Distance", 10),
    skidding: (0, _addonKnobs.number)("Skidding", 0),
    interactive: (0, _addonKnobs["boolean"])("Interactive", false)
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, (0, _addonKnobs.text)("Heading text", "Heading")), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, (0, _addonKnobs.text)("Body text", "Set the priority of this Canvas relative to other individual in-app message Campaigns. This will result in many important changes and things to consider, such as how to make this a really, really, really long sentence in order to ensure that the popover tip is pointing at the target button when it would be below if a static % was used to lay out the popover."))));
};

exports.SmallTarget = SmallTarget;
SmallTarget.storyName = "small target";

var TriggerOnFocus = function TriggerOnFocus() {
  var _usePopover5 = (0, _Popover.usePopover)(),
      _usePopover6 = _slicedToArray(_usePopover5, 2),
      popoverState = _usePopover6[0],
      targetRef = _usePopover6[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "Focus to open"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({
    targetRef: targetRef,
    triggers: ["focus"],
    untriggers: ["blur"],
    placement: (0, _addonKnobs.select)("Placement", _Popper.placementTypes, "right")
  }, popoverState), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, (0, _addonKnobs.text)("Heading text", "Heading")), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, (0, _addonKnobs.text)("Body text", "Set the priority of this Canvas relative to other individual in-app message Campaigns."))), /*#__PURE__*/_react["default"].createElement(InvisibleButton, null));
};

exports.TriggerOnFocus = TriggerOnFocus;
TriggerOnFocus.storyName = "trigger on focus";

var TriggerOnHover = function TriggerOnHover() {
  var _usePopover7 = (0, _Popover.usePopover)(),
      _usePopover8 = _slicedToArray(_usePopover7, 2),
      popoverState = _usePopover8[0],
      targetRef = _usePopover8[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Hover to open")), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    triggers: ["mouseenter"],
    untriggers: ["mouseleave"],
    placement: (0, _addonKnobs.select)("Placement", _Popper.placementTypes, "bottom-start")
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, (0, _addonKnobs.text)("Heading text", "Heading")), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, (0, _addonKnobs.text)("Body text", "Set the priority of this Canvas relative to other individual in-app message Campaigns."))));
};

exports.TriggerOnHover = TriggerOnHover;
TriggerOnHover.storyName = "trigger on hover";

var UseWithDomId = function UseWithDomId() {
  var _usePopover9 = (0, _Popover.usePopover)(),
      _usePopover10 = _slicedToArray(_usePopover9, 1),
      popoverState = _usePopover10[0];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "default-button"
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    target: "default-button",
    placement: (0, _addonKnobs.select)("Placement", _Popper.placementTypes, "bottom")
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, (0, _addonKnobs.text)("Heading text", "Heading")), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, (0, _addonKnobs.text)("Body text", "Set the priority of this Canvas relative to other individual in-app message Campaigns."))));
};

exports.UseWithDomId = UseWithDomId;
UseWithDomId.storyName = "use with DOM id";

var Interactive = function Interactive() {
  var _usePopover11 = (0, _Popover.usePopover)(),
      _usePopover12 = _slicedToArray(_usePopover11, 2),
      popoverState = _usePopover12[0],
      targetRef = _usePopover12[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: (0, _addonKnobs.select)("Placement", _Popper.placementTypes, "bottom"),
    isCloseEnabled: (0, _addonKnobs["boolean"])("Enable close button", false),
    interactive: true
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, (0, _addonKnobs.text)("Heading text", "Heading")), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, (0, _addonKnobs.text)("Body text", "Set the priority of this Canvas relative to other individual in-app message Campaigns."))));
};

exports.Interactive = Interactive;
Interactive.storyName = "interactive";

var WithCloseButton = function WithCloseButton() {
  var _usePopover13 = (0, _Popover.usePopover)(),
      _usePopover14 = _slicedToArray(_usePopover13, 2),
      popoverState = _usePopover14[0],
      targetRef = _usePopover14[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: (0, _addonKnobs.select)("Placement", _Popper.placementTypes, "bottom"),
    isCloseEnabled: true,
    interactive: true
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, (0, _addonKnobs.text)("Heading text", "Heading")), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, (0, _addonKnobs.text)("Body text", "Set the priority of this Canvas relative to other individual in-app message Campaigns."))));
};

exports.WithCloseButton = WithCloseButton;
WithCloseButton.storyName = "with close button";

var AutoPlacement = function AutoPlacement() {
  var _usePopover15 = (0, _Popover.usePopover)(),
      _usePopover16 = _slicedToArray(_usePopover15, 2),
      popoverState = _usePopover16[0],
      targetRef = _usePopover16[1];

  var portalRef = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%",
      height: "100vh",
      overflow: "scroll"
    },
    id: "scroll"
  }, /*#__PURE__*/_react["default"].createElement(MustBeCanvasMode, null), "(scroll down and right inside the red box and click the button to see popover placement change)", /*#__PURE__*/_react["default"].createElement("div", {
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
    ref: targetRef
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    isCloseEnabled: (0, _addonKnobs["boolean"])("Enable close button", false),
    defaultPlacement: (0, _addonKnobs.select)("Default placement", _Popper.placementTypes, undefined),
    interactive: true,
    portalRef: portalRef
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, (0, _addonKnobs.text)("Heading text", "Heading")), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, (0, _addonKnobs.text)("Body text", "Set the priority of this Canvas relative to other individual in-app message Campaigns.")))));
};

exports.AutoPlacement = AutoPlacement;
AutoPlacement.storyName = "auto-placement";

var ModalUse = function ModalUse() {
  var _usePopover17 = (0, _Popover.usePopover)(),
      _usePopover18 = _slicedToArray(_usePopover17, 2),
      popoverState = _usePopover18[0],
      targetRef = _usePopover18[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_Modal.Modal, {
    isOpen: isOpen,
    zIndex: 2400,
    toggle: function toggle() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "Popover Inside!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: "right"
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, "Heading"), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, "Set the priority of this Canvas relative to other individual in-app message Campaigns.")))));
};

exports.ModalUse = ModalUse;
ModalUse.storyName = "modal use";

var PreventCloseOnOutsideClickForElementWithClass = function PreventCloseOnOutsideClickForElementWithClass() {
  var _usePopover19 = (0, _Popover.usePopover)(),
      _usePopover20 = _slicedToArray(_usePopover19, 2),
      popoverState = _usePopover20[0],
      targetRef = _usePopover20[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "This button opens the popover"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "bcl-popper-ignore-click",
    style: {
      marginLeft: "1rem"
    }
  }, "This button does NOT close the popover"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: "bottom",
    interactive: true
  }), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, "This is a bunch of content inside the popover")));
};

exports.PreventCloseOnOutsideClickForElementWithClass = PreventCloseOnOutsideClickForElementWithClass;
PreventCloseOnOutsideClickForElementWithClass.storyName = "prevent close on outside click for element with class";

var PreventCloseOnOutsideClickForElementWithCustomClass = function PreventCloseOnOutsideClickForElementWithCustomClass() {
  var _usePopover21 = (0, _Popover.usePopover)(),
      _usePopover22 = _slicedToArray(_usePopover21, 2),
      popoverState = _usePopover22[0],
      targetRef = _usePopover22[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    ref: targetRef
  }, "This button opens the popover"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "custom-popper-ignore-click",
    style: {
      marginLeft: "1rem"
    }
  }, "This button does NOT close the popover"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    placement: "bottom",
    ignoreCloseOnClickOutsideClassName: "custom-popper-ignore-click",
    interactive: true
  }), "This is a bunch of content inside the popover"));
};

exports.PreventCloseOnOutsideClickForElementWithCustomClass = PreventCloseOnOutsideClickForElementWithCustomClass;
PreventCloseOnOutsideClickForElementWithCustomClass.storyName = "prevent close on outside click for element with custom class";

var KeyboardAccessibility = function KeyboardAccessibility() {
  var _usePopover23 = (0, _Popover.usePopover)(),
      _usePopover24 = _slicedToArray(_usePopover23, 2),
      popoverState = _usePopover24[0],
      targetRef = _usePopover24[1];

  var triggers = (0, _react.useMemo)(function () {
    return ["focus", "click"];
  }, []);
  var untriggers = (0, _react.useMemo)(function () {
    return ["blur", "click"];
  }, []);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      saved = _useState4[0],
      setSaved = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    type: "button"
  }, "Does nothing, here for testing purposes only"), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    ref: targetRef,
    placeholder: "focus to show popover"
  }), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    triggers: triggers,
    untriggers: untriggers,
    interactive: true,
    popperStyle: {
      maxWidth: "none",
      maxHeight: "none"
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "boring"
  }, "Here is a div that is not interactive that is nested in the popover"), "Here is a form you can tab into", /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    placeholder: "internal form"
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "primary",
    type: "button",
    onClick: function onClick() {
      return setSaved(true);
    }
  }, "Save"), saved && "content saved"));
};

exports.KeyboardAccessibility = KeyboardAccessibility;
KeyboardAccessibility.storyName = "keyboard accessibility";