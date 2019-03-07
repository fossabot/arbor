"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledHeader = (
/*#__PURE__*/
0, _styledBase.default)((0, _createWithComponent.default)(_Flex.default, 'header'), {
  target: "exxxozt0",
  label: "StyledHeader"
})("background:", function (props) {
  return props.theme.colors.background.default;
}, ";border-bottom:1px solid ", function (props) {
  return props.theme.borderColors.default;
}, ";section:last-child &{border-bottom:none;}.button--minimal:last-of-type{margin-right:-", function (props) {
  return props.theme.space.smaller;
}, ";+:not(object){margin-left:", function (props) {
  return props.theme.space.smaller;
}, ";}}button + .button--secondary,button + .button--primary{margin-left:", function (props) {
  return props.theme.space.smaller;
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0UiLCJmaWxlIjoiLi4vLi4vc3JjL0FjY29yZGlvblNlY3Rpb24vU3R5bGVkQWNjb3JkaW9uSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgY3JlYXRlV2l0aENvbXBvbmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVXaXRoQ29tcG9uZW50JztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuXG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQoY3JlYXRlV2l0aENvbXBvbmVudChGbGV4LCAnaGVhZGVyJykpYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmRlZmF1bHR9O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJDb2xvcnMuZGVmYXVsdH07XG5cbiAgc2VjdGlvbjpsYXN0LWNoaWxkICYge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICAuYnV0dG9uLS1taW5pbWFsOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVyfTtcblxuICAgICsgOm5vdChvYmplY3QpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiArIC5idXR0b24tLXNlY29uZGFyeSxcbiAgYnV0dG9uICsgLmJ1dHRvbi0tcHJpbWFyeSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEhlYWRlcjtcbiJdfQ== */"));
var _default = StyledHeader;
exports.default = _default;