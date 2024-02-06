"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = exports.Portal = void 0;
exports.usePortal = usePortal;

var _react = require("react");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconHooks = require("@braze/beacon-hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Note: we cannot fully test this, as it requires server-side rendering
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
/**
 * @param id: string that will be used as the DOM id of the portal root
 * @param className: string that will be used as the DOM class name of the portal root
 * @returns a DOM node that gets mounted to the document and is the render target
 * of the React portal.
 */

exports.canUseDOM = canUseDOM;

function usePortal(id, className) {
  // we cannot fully test this, as it requires server-side rendering

  /* istanbul ignore next */
  var domNode = (0, _react.useRef)(canUseDOM ? document.createElement("div") : null);
  (0, _react.useEffect)(function () {
    // we cannot test this, as it requires server-side rendering

    /* istanbul ignore next */
    if (!canUseDOM || !domNode.current) {
      // if DOM unavailable, then bail
      return;
    }

    var currentNode = domNode.current;
    currentNode.setAttribute("class", (0, _classnames["default"])("bcl-Portal", "bcl-portal", className));
    currentNode.setAttribute("id", id || "portal--container");
    currentNode.setAttribute("tabindex", "-1");
    document.body.appendChild(currentNode);
    return function () {
      document.body.removeChild(currentNode);
    };
  }, [className, domNode, id]);
  return domNode.current;
}
/**
 * Portal is a wrapper for ReactDOM.createPortal that lets you use it in a declarative
 * fashion. This should be used as the basis for anything rendered above-stream
 * (anything that requires a z-index, like: tooltips, popovers, dialogs, menus, etc).
 */


var Portal = function Portal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      node = _ref.node;
  // Unique global id that we assign to the DOM node
  var uid = (0, _beaconHooks.useId)("bcl-portal");
  var portalId = id || uid;
  var target = usePortal(portalId, className); // we cannot test this, as it requires server-side rendering

  /* istanbul ignore next */

  if (!target) {
    // if target is null, then bail
    return null;
  }

  return /*#__PURE__*/_reactDom["default"].createPortal(children, (node === null || node === void 0 ? void 0 : node.current) || target);
};

exports.Portal = Portal;