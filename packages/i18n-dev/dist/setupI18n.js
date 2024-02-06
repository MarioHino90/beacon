"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAllLocales = exports.storybookParameters = exports.locales = exports.i18n = exports.cypressTranslate = void 0;

var _path = _interopRequireDefault(require("path"));

var _i18nScripts = require("@braze/i18n-scripts");

var _i18nCore = require("@braze/i18n-core");

var _i18nDev = require("@braze/i18n-dev");

var _beaconTranslations = require("@braze/beacon-translations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getConfig() {
  var configArgument = process.env.NODE_ENV === "test" ? _path["default"].resolve(__dirname, "..", "..", "..", ".i18nConfig.json") : // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("./.i18nConfig.json");
  return (0, _i18nScripts.loadConfig)(configArgument);
}

var config = getConfig();
var i18n = (0, _i18nCore.setupI18n)(_beaconTranslations.translations, config);
exports.i18n = i18n;

var _setupDevI18n = (0, _i18nDev.setupDevI18n)(i18n, _beaconTranslations.translations, config),
    cypressTranslate = _setupDevI18n.cypressTranslate,
    storybookParameters = _setupDevI18n.storybookParameters,
    withAllLocales = _setupDevI18n.withAllLocales,
    locales = _setupDevI18n.locales;

exports.locales = locales;
exports.withAllLocales = withAllLocales;
exports.storybookParameters = storybookParameters;
exports.cypressTranslate = cypressTranslate;