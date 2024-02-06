"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var create = function create(_ref) {
  var name = _ref.name,
      width = _ref.width,
      height = _ref.height,
      unicode = _ref.unicode,
      path = _ref.path;
  return {
    prefix: "fas",
    iconName: name,
    icon: [width, height, [], unicode, path]
  };
};

exports.create = create;