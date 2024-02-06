"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translations = void 0;
Object.defineProperty(exports, "useI18nNamespace", {
  enumerable: true,
  get: function get() {
    return _useCoreI18nNamespace.useCoreI18nNamespace;
  }
});

var _path = _interopRequireDefault(require("path"));

var _useCoreI18nNamespace = require("./useCoreI18nNamespace");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// index.ts for node (jest) environment
// eslint-disable-next-line @typescript-eslint/no-var-requires
var translations = require(_path["default"].resolve(__dirname, "translations.braze.json"));

exports.translations = translations;