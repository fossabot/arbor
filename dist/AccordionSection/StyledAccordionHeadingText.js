"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledText = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledText = (
/*#__PURE__*/
0, _styledBase["default"])(_Flex["default"], {
  target: "exx962x0",
  label: "StyledText"
})("background:none;border:none;font-size:inherit;font-weight:", function (props) {
  return props.theme.fontWeights.regular;
}, ";padding:0;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRpbmdUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlzQyIsImZpbGUiOiIuLi8uLi9zcmMvQWNjb3JkaW9uU2VjdGlvbi9TdHlsZWRBY2NvcmRpb25IZWFkaW5nVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKEZsZXgpYFxuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodHMucmVndWxhcn07XG4gIHBhZGRpbmc6IDA7XG5gO1xuXG5TdHlsZWRUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdzcGFuJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkVGV4dDtcbiJdfQ== */"));
exports.StyledText = StyledText;
StyledText.defaultProps = {
  as: 'span'
};
var _default = StyledText;
exports["default"] = _default;