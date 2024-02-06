"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spotIcons = exports.BrazeIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _StyledBrazeIcon = require("./StyledBrazeIcon");

var _excluded = ["className", "name"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// lazy import icons here
var AddDocument = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./AddDocument"));
  }).then(function (module) {
    return {
      "default": module.AddDocument
    };
  });
});
var AddImageOrDocument = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./AddImageOrDocument"));
  }).then(function (module) {
    return {
      "default": module.AddImageOrDocument
    };
  });
});
var ArrowToggle = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./ArrowToggle"));
  }).then(function (module) {
    return {
      "default": module.ArrowToggle
    };
  });
});
var CampaignComparison = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./CampaignComparison"));
  }).then(function (module) {
    return {
      "default": module.CampaignComparison
    };
  });
});
var Content = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Content"));
  }).then(function (module) {
    return {
      "default": module.Content
    };
  });
});
var EmailSettings = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./EmailSettings"));
  }).then(function (module) {
    return {
      "default": module.EmailSettings
    };
  });
});
var FunnelReport = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./FunnelReport"));
  }).then(function (module) {
    return {
      "default": module.FunnelReport
    };
  });
});
var MMS = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./MMS"));
  }).then(function (module) {
    return {
      "default": module.MMS
    };
  });
});
var Preview = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./Preview"));
  }).then(function (module) {
    return {
      "default": module.Preview
    };
  });
});
var RetentionReport = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./RetentionReport"));
  }).then(function (module) {
    return {
      "default": module.RetentionReport
    };
  });
});
var SMS = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./SMS"));
  }).then(function (module) {
    return {
      "default": module.SMS
    };
  });
}); // create a way to get to the icons here

var spotIcons = {
  "add-document": AddDocument,
  "add-image-or-document": AddImageOrDocument,
  "arrow-toggle": ArrowToggle,
  "campaign-comparison": CampaignComparison,
  content: Content,
  "email-settings": EmailSettings,
  "empty-table": AddDocument,
  "funnel-report": FunnelReport,
  mms: MMS,
  preview: Preview,
  "retention-report": RetentionReport,
  sms: SMS
};
exports.spotIcons = spotIcons;

var BrazeIcon = function BrazeIcon(_ref) {
  var className = _ref.className,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, _excluded);

  // bail if no `name` prop is provided
  if (!name) {
    return null;
  } // grab icon's component for rendering


  var Icon = spotIcons[name]; // bail if provided 'name' prop does not
  // corespond to any keys in the 'icons' obj

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_StyledBrazeIcon.StyledBrazeIcon, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-braze-icon", className])
  }), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: ""
  }, /*#__PURE__*/_react["default"].createElement(Icon, null)));
};

exports.BrazeIcon = BrazeIcon;
BrazeIcon.displayName = "BrazeIcon";