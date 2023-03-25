"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const TextGradient = _ref => {
  let {
    angle,
    colors,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: "linear-gradient(".concat(angle, "deg, ").concat(colors.join(), ")"),
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent"
    }
  }, children);
};
var _default = TextGradient;
exports.default = _default;