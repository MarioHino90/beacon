"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizeSmallWoIcon = exports.SizeSmallWIcon = exports.SizeMedium = exports.SizeLarge = exports.SizeExtraLarge = exports.NonDismissableModalWithNoExit = exports.NonDismissableModal = exports.NestedModalsWithCustomZIndex = exports.NestedModals = exports.ModalWithPopovers = exports.ModalWithOutsideContent = exports.HeadingSizeWithH3 = void 0;

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Box = require("../Box");

var _Button = require("../Button");

var _FieldLabel = require("../FieldLabel");

var _Input = require("../Input");

var _LoremIpsum = require("../LoremIpsum");

var _Popover = require("../Popover");

var _PopoverBody = require("../PopoverBody");

var _PopoverHeading = require("../PopoverHeading");

var _Portal = require("../Portal");

var _RadioButton = require("../RadioButton");

var _RadioButtonGroup = require("../RadioButtonGroup");

var _Tooltip = require("../Tooltip");

var _ModalBody = require("../ModalBody");

var _ModalFooter = require("../ModalFooter");

var _ModalHeading = require("../ModalHeading");

var _ModalDocs = _interopRequireDefault(require("./Modal.docs.mdx"));

var _ = require(".");

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

// eslint-disable-next-line import/no-default-export
var _default = {
  title: "Core/Overlay/Modal",
  component: _.Modal,
  parameters: {
    docs: {
      page: _ModalDocs["default"]
    }
  }
};
exports["default"] = _default;

var SizeSmallWoIcon = function SizeSmallWoIcon() {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setOpen = _React$useState2[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  var size = (0, _addonKnobs.select)("Size", ["sm", "md", "lg", "xl", "default"], "sm");
  var level = size !== "sm" ? (0, _addonKnobs.select)("Header size", [3, 2], 3) : undefined;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: size === "default" ? undefined : size,
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, {
    level: level
  }, "You have unsaved changes!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, "What do you think you're doing?"), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "quaternary"
  }, "Don't save")), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    onClick: toggle
  }, "Keep Editing"), /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Draft")))));
};

exports.SizeSmallWoIcon = SizeSmallWoIcon;
SizeSmallWoIcon.storyName = "size: small (w/o icon)";

var SizeSmallWIcon = function SizeSmallWIcon() {
  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isOpen = _React$useState4[0],
      setOpen = _React$useState4[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "sm",
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, {
    iconType: "warning"
  }, "You have unsaved changes!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, "What do you think you're doing?"), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "quaternary"
  }, "Don't save")), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    onClick: toggle
  }, "Keep Editing"), /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Draft")))));
};

exports.SizeSmallWIcon = SizeSmallWIcon;
SizeSmallWIcon.storyName = "size: small (w/ icon)";

var SizeMedium = function SizeMedium() {
  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isOpen = _React$useState6[0],
      setOpen = _React$useState6[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "md",
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "Add New App to Stopwatch & Droidboy"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "App name"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "exampleInput"
  })), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Platform"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: "exampleInput2",
    style: {
      height: 40,
      width: 300,
      paddingLeft: 10,
      border: "1px solid #A8B3B8"
    }
  }, /*#__PURE__*/_react["default"].createElement("option", null, "Android"), /*#__PURE__*/_react["default"].createElement("option", null, "FireOS"), /*#__PURE__*/_react["default"].createElement("option", null, "iOS"), /*#__PURE__*/_react["default"].createElement("option", null, "Windows"), /*#__PURE__*/_react["default"].createElement("option", null, "Web"), /*#__PURE__*/_react["default"].createElement("option", null, "tvOS"), /*#__PURE__*/_react["default"].createElement("option", null, "Roku"))), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Push Provider"
  }, /*#__PURE__*/_react["default"].createElement(_RadioButtonGroup.RadioButtonGroup, {
    name: "radios"
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton1",
    value: "Firebase (FCM)"
  }, "Firebase (FCM)"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton2",
    value: "Huawei (HMS)"
  }, "Huawei (HMS)"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton3",
    value: "Baidu"
  }, "Baidu")))), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "cancelButton",
    variant: "secondary",
    onClick: toggle
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "addButton"
  }, "Add App")))));
};

exports.SizeMedium = SizeMedium;
SizeMedium.storyName = "size: medium";

var SizeLarge = function SizeLarge() {
  var _React$useState7 = _react["default"].useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isOpen = _React$useState8[0],
      setOpen = _React$useState8[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "lg",
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "Add New App to Stopwatch & Droidboy"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "App name"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "exampleInput"
  })), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Platform"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: "exampleInput2",
    style: {
      height: 40,
      width: 300,
      paddingLeft: 10,
      border: "1px solid #A8B3B8"
    }
  }, /*#__PURE__*/_react["default"].createElement("option", null, "Android"), /*#__PURE__*/_react["default"].createElement("option", null, "FireOS"), /*#__PURE__*/_react["default"].createElement("option", null, "iOS"), /*#__PURE__*/_react["default"].createElement("option", null, "Windows"), /*#__PURE__*/_react["default"].createElement("option", null, "Web"), /*#__PURE__*/_react["default"].createElement("option", null, "tvOS"), /*#__PURE__*/_react["default"].createElement("option", null, "Roku"))), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Push Provider"
  }, /*#__PURE__*/_react["default"].createElement(_RadioButtonGroup.RadioButtonGroup, {
    name: "radios"
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton1",
    value: "Firebase (FCM)"
  }, "Firebase (FCM)"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton2",
    value: "Huawei (HMS)"
  }, "Huawei (HMS)"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton3",
    value: "Baidu"
  }, "Baidu")))), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "cancelButton",
    variant: "secondary",
    onClick: toggle
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "addButton"
  }, "Add App")))));
};

exports.SizeLarge = SizeLarge;
SizeLarge.storyName = "size: large";

var SizeExtraLarge = function SizeExtraLarge() {
  var _React$useState9 = _react["default"].useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      isOpen = _React$useState10[0],
      setOpen = _React$useState10[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "xl",
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "Add New App to Stopwatch & Droidboy"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "App name"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "exampleInput"
  })), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Platform"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: "exampleInput2",
    style: {
      height: 40,
      width: 300,
      paddingLeft: 10,
      border: "1px solid #A8B3B8"
    }
  }, /*#__PURE__*/_react["default"].createElement("option", null, "Android"), /*#__PURE__*/_react["default"].createElement("option", null, "FireOS"), /*#__PURE__*/_react["default"].createElement("option", null, "iOS"), /*#__PURE__*/_react["default"].createElement("option", null, "Windows"), /*#__PURE__*/_react["default"].createElement("option", null, "Web"), /*#__PURE__*/_react["default"].createElement("option", null, "tvOS"), /*#__PURE__*/_react["default"].createElement("option", null, "Roku"))), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Push Provider"
  }, /*#__PURE__*/_react["default"].createElement(_RadioButtonGroup.RadioButtonGroup, {
    name: "radios"
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton1",
    value: "Firebase (FCM)"
  }, "Firebase (FCM)"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton2",
    value: "Huawei (HMS)"
  }, "Huawei (HMS)"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton3",
    value: "Baidu"
  }, "Baidu")))), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "cancelButton",
    variant: "secondary",
    onClick: toggle
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "addButton"
  }, "Add App")))));
};

exports.SizeExtraLarge = SizeExtraLarge;
SizeExtraLarge.storyName = "size: extra large";

var HeadingSizeWithH3 = function HeadingSizeWithH3() {
  var _React$useState11 = _react["default"].useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      isOpen = _React$useState12[0],
      setOpen = _React$useState12[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  var size = (0, _addonKnobs.select)("Size", ["sm", "md", "lg", "xl"], "sm");
  var level = size !== "sm" ? (0, _addonKnobs.select)("Header size", [3, 2], 3) : undefined;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: size,
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, {
    level: level
  }, "Add New App to Stopwatch & Droidboy"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "App name"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "exampleInput"
  })), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Platform"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: "exampleInput2",
    style: {
      height: 40,
      width: 300,
      paddingLeft: 10,
      border: "1px solid #A8B3B8"
    }
  }, /*#__PURE__*/_react["default"].createElement("option", null, "Android"), /*#__PURE__*/_react["default"].createElement("option", null, "FireOS"), /*#__PURE__*/_react["default"].createElement("option", null, "iOS"), /*#__PURE__*/_react["default"].createElement("option", null, "Windows"), /*#__PURE__*/_react["default"].createElement("option", null, "Web"), /*#__PURE__*/_react["default"].createElement("option", null, "tvOS"), /*#__PURE__*/_react["default"].createElement("option", null, "Roku"))), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Push Provider"
  }, /*#__PURE__*/_react["default"].createElement(_RadioButtonGroup.RadioButtonGroup, {
    name: "radios"
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton1",
    value: "Firebase (FCM)"
  }, "Firebase (FCM)"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton2",
    value: "Huawei (HMS)"
  }, "Huawei (HMS)"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    id: "radioButton3",
    value: "Baidu"
  }, "Baidu")))), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "cancelButton",
    variant: "secondary",
    onClick: toggle
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    id: "addButton"
  }, "Add App")))));
};

exports.HeadingSizeWithH3 = HeadingSizeWithH3;
HeadingSizeWithH3.storyName = "heading size (with h3)";

var NestedModals = function NestedModals() {
  var _React$useState13 = _react["default"].useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      isOpen = _React$useState14[0],
      setOpen = _React$useState14[1];

  var _React$useState15 = _react["default"].useState(false),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      isInnerOpen = _React$useState16[0],
      setInnerOpen = _React$useState16[1];

  var toggle = function toggle() {
    // only close the parent modal if the child modal is closed
    if (!isInnerOpen) {
      setOpen(!isOpen);
    }
  };

  var toggleInner = function toggleInner() {
    setInnerOpen(!isInnerOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "xl",
    isOpen: isOpen,
    toggle: toggle,
    className: "outer"
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "You have unsaved changes!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setInnerOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "xl",
    isOpen: isInnerOpen,
    toggle: toggleInner,
    className: "inner"
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "A HEADER. NEW THINGS. WHATEVER!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, {
    paragraphs: 2
  })), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "quaternary"
  }, "Don't save")), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    onClick: toggleInner
  }, "Keep Editing"), /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Draft")))), /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, {
    paragraphs: 7
  })), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "quaternary"
  }, "Don't save")), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    onClick: toggle
  }, "Keep Editing"), /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Draft")))));
};

exports.NestedModals = NestedModals;
NestedModals.storyName = "nested modals";

var NestedModalsWithCustomZIndex = function NestedModalsWithCustomZIndex() {
  var _React$useState17 = _react["default"].useState(false),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      isOpen = _React$useState18[0],
      setOpen = _React$useState18[1];

  var _React$useState19 = _react["default"].useState(false),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      isInnerOpen = _React$useState20[0],
      setInnerOpen = _React$useState20[1];

  var toggle = function toggle() {
    // only close the parent modal if the child modal is closed
    if (!isInnerOpen) {
      setOpen(!isOpen);
    }
  };

  var toggleInner = function toggleInner() {
    setInnerOpen(!isInnerOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "xl",
    isOpen: isOpen,
    toggle: toggle,
    className: "outer",
    zIndex: 605
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "You have unsaved changes!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setInnerOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "xl",
    isOpen: isInnerOpen,
    toggle: toggleInner,
    className: "inner"
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "A HEADER. NEW THINGS. WHATEVER!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, {
    paragraphs: 2
  })), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "quaternary"
  }, "Don't save")), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    onClick: toggleInner
  }, "Keep Editing"), /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Draft")))), /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, {
    paragraphs: 7
  })), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "quaternary"
  }, "Don't save")), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    onClick: toggle
  }, "Keep Editing"), /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Draft")))));
};

exports.NestedModalsWithCustomZIndex = NestedModalsWithCustomZIndex;
NestedModalsWithCustomZIndex.storyName = "nested modals with custom z-index";

var NonDismissableModal = function NonDismissableModal() {
  var _React$useState21 = _react["default"].useState(false),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      isOpen = _React$useState22[0],
      setOpen = _React$useState22[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    isOpen: isOpen
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "You could mess stuff up!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, "What do you think you're doing?"), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    intent: "danger",
    onClick: toggle
  }, "I Accept")))));
};

exports.NonDismissableModal = NonDismissableModal;
NonDismissableModal.storyName = "non-dismissable modal";

var NonDismissableModalWithNoExit = function NonDismissableModalWithNoExit() {
  var _React$useState23 = _react["default"].useState(10),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      seconds = _React$useState24[0],
      setSeconds = _React$useState24[1];

  var _React$useState25 = _react["default"].useState(false),
      _React$useState26 = _slicedToArray(_React$useState25, 2),
      isOpen = _React$useState26[0],
      setOpen = _React$useState26[1];

  var toggle = (0, _react.useCallback)(function () {
    setOpen(!isOpen);
    setSeconds(10);
  }, [isOpen]);

  _react["default"].useEffect(function () {
    var interval;

    if (isOpen) {
      interval = setInterval(function () {
        setSeconds(function (seconds) {
          return seconds > 0 ? seconds - 1 : seconds;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return function () {
      return clearInterval(interval);
    };
  }, [isOpen]);

  _react["default"].useEffect(function () {
    if (seconds === 0) {
      toggle();
    }
  }, [seconds, toggle]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    isOpen: isOpen
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "You could mess stuff up!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, seconds, " second(s) until Modal close")));
};

exports.NonDismissableModalWithNoExit = NonDismissableModalWithNoExit;
NonDismissableModalWithNoExit.storyName = "non-dismissable modal with no exit";

var ModalWithOutsideContent = function ModalWithOutsideContent() {
  var _React$useState27 = _react["default"].useState(false),
      _React$useState28 = _slicedToArray(_React$useState27, 2),
      isOpen = _React$useState28[0],
      setOpen = _React$useState28[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "lg",
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "You have unsaved changes!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Portal.Portal, {
    style: {
      zIndex: 2400
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bcl-ignore-click-outside clickMeExample",
    style: {
      zIndex: 2400,
      position: "absolute",
      padding: "20px",
      background: "pink"
    }
  }, "Click Me")), /*#__PURE__*/_react["default"].createElement(_Portal.Portal, {
    style: {
      zIndex: 2400
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clickMeCloseExample",
    style: {
      zIndex: 2400,
      position: "absolute",
      top: "300px",
      padding: "20px",
      background: "pink"
    }
  }, "Click Me To Close")), /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, {
    paragraphs: 5
  })), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "quaternary"
  }, "Don't save")), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    onClick: toggle
  }, "Keep Editing"), /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Draft")))));
};

exports.ModalWithOutsideContent = ModalWithOutsideContent;
ModalWithOutsideContent.storyName = "modal with outside content";

var ModalWithPopovers = function ModalWithPopovers() {
  var _React$useState29 = _react["default"].useState(false),
      _React$useState30 = _slicedToArray(_React$useState29, 2),
      isOpen = _React$useState30[0],
      setOpen = _React$useState30[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  var _usePopover = (0, _Popover.usePopover)(),
      _usePopover2 = _slicedToArray(_usePopover, 2),
      popoverState = _usePopover2[0],
      targetRef = _usePopover2[1];

  var _useTooltip = (0, _Tooltip.useTooltip)(),
      _useTooltip2 = _slicedToArray(_useTooltip, 2),
      tooltipState = _useTooltip2[0],
      targetTooltipRef = _useTooltip2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Show modal"), /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: "lg",
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_ModalHeading.ModalHeading, null, "You have unsaved changes!"), /*#__PURE__*/_react["default"].createElement(_ModalBody.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "popoverOpen",
    ref: targetRef
  }, "Click to open/close"), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({}, popoverState, {
    targetRef: targetRef,
    defaultPlacement: "bottom"
  }), /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, "Heading"), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, "We need to let the user know something in this tooltip!")), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: {
      vertical: "md"
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    id: "test_text"
  }, "Some text should be covered")), /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, {
    paragraphs: 1
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "tooltipOpen",
    ref: targetTooltipRef
  }, "Click to open/close tooltip"), /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, _extends({
    targetRef: targetTooltipRef,
    triggers: ["click"],
    untriggers: ["click"],
    placement: "bottom"
  }, tooltipState), "Tooltip with some info in it..."), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: {
      vertical: "sm"
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    id: "test_text2"
  }, "Some text should be covered")), /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, {
    paragraphs: 1
  })), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "quaternary"
  }, "Don't save")), /*#__PURE__*/_react["default"].createElement(_ModalFooter.ModalFooter, {
    aligner: true,
    side: "right"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "secondary",
    onClick: toggle
  }, "Keep Editing"), /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Draft")))));
};

exports.ModalWithPopovers = ModalWithPopovers;
ModalWithPopovers.storyName = "modal with popovers";