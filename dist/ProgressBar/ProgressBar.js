"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ProgressBarContainer = (
/*#__PURE__*/
0, _styledBase["default"])(_Flex["default"], {
  target: "e1ftfzjq0",
  label: "ProgressBarContainer"
})("border-radius:", function (props) {
  return props.theme.radii.large;
}, ";height:16px;max-width:100%;align-items:center;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVeUMiLCJmaWxlIjoiLi4vLi4vc3JjL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBQcm9ncmVzc0JhckNvbnRhaW5lciA9IHN0eWxlZChGbGV4KWBcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yYWRpaS5sYXJnZX07XG4gIGhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQmFyQmFja2dyb3VuZCA9IHN0eWxlZChCb3gpYFxuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXk0MH07XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5gO1xuY29uc3QgQmFyRm9yZWdyb3VuZCA9IHN0eWxlZChCb3gpYFxuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHQuZGVmYXVsdH07XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5gO1xuXG5jb25zdCBwZXJjZW50YWdlVGV4dCA9IHBlcmNlbnRhZ2UgPT4gKFxuICA8VGV4dCBmbGV4PVwiMFwiIG1sPVwic21hbGxlclwiIGZvbnRTaXplPVwic2l6ZTNcIiBmb250V2VpZ2h0PVwibWVkaXVtXCI+XG4gICAge2Ake3BlcmNlbnRhZ2V9JWB9XG4gIDwvVGV4dD5cbik7XG5cbmNvbnN0IFByb2dyZXNzQmFyID0gKHsgcGVyY2VudGFnZSwgaWNvbkVuZE5hbWUsIHNob3dQZXJjZW50YWdlLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxQcm9ncmVzc0JhckNvbnRhaW5lciB7Li4ucHJvcHN9PlxuICAgIDxCYXJCYWNrZ3JvdW5kIGNsYXNzTmFtZT1cImJhci1iYWNrZ3JvdW5kXCI+XG4gICAgICA8QmFyRm9yZWdyb3VuZFxuICAgICAgICBjbGFzc05hbWU9XCJiYXItZm9yZWdyb3VuZFwiXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIHdpZHRoOiAke3BlcmNlbnRhZ2V9JTtcbiAgICAgICAgYH1cbiAgICAgIC8+XG4gICAgPC9CYXJCYWNrZ3JvdW5kPlxuICAgIHtpY29uRW5kTmFtZSAmJiAoXG4gICAgICA8SWNvblxuICAgICAgICBtbD1cInNtYWxsZXJcIlxuICAgICAgICBmbGV4PVwiMFwiXG4gICAgICAgIGZvbnRTaXplPVwic2l6ZTRcIlxuICAgICAgICBuYW1lPXtpY29uRW5kTmFtZX1cbiAgICAgICAgY29sb3I9e3BlcmNlbnRhZ2UgPCAxMDAgPyAnbW9ub2Nocm9tZS5ncmV5NDAnIDogJ3RleHQuZGVmYXVsdCd9XG4gICAgICAvPlxuICAgICl9XG4gICAge3Nob3dQZXJjZW50YWdlICYmIHBlcmNlbnRhZ2VUZXh0KHBlcmNlbnRhZ2UpfVxuICA8L1Byb2dyZXNzQmFyQ29udGFpbmVyPlxuKTtcblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xuICAvKiBTaG93IHRoZSBwZXJjZW50YWdlIGNvbXBsZXRlLCBvciBub3QgKi9cbiAgc2hvd1BlcmNlbnRhZ2U6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qIE5hbWUgb2YgdGhlIGljb24gdG8gdXNlIGFzIHRoZSBpbmRpY2F0b3IsIGlmIGRlc2lyZWQuICovXG4gIGljb25FbmROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qIFRoZSBhY3R1YWwgY3VycmVudCBwZXJjZW50YWdlIGNvbXBsZXRlZCAqL1xuICBwZXJjZW50YWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uRmxleC5kZWZhdWx0UHJvcHMsXG4gIHNob3dQZXJjZW50YWdlOiBmYWxzZSxcbiAgaWNvbkVuZE5hbWU6IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl19 */"));
var BarBackground = (
/*#__PURE__*/
0, _styledBase["default"])(_Box["default"], {
  target: "e1ftfzjq1",
  label: "BarBackground"
})("flex:1;background-color:", function (props) {
  return props.theme.colors.monochrome.grey40;
}, ";height:", function (props) {
  return props.theme.space.smallest;
}, ";border-radius:inherit;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmlDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgUHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmFkaWkubGFyZ2V9O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEJhckJhY2tncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5NDB9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcbmNvbnN0IEJhckZvcmVncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0LmRlZmF1bHR9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcblxuY29uc3QgcGVyY2VudGFnZVRleHQgPSBwZXJjZW50YWdlID0+IChcbiAgPFRleHQgZmxleD1cIjBcIiBtbD1cInNtYWxsZXJcIiBmb250U2l6ZT1cInNpemUzXCIgZm9udFdlaWdodD1cIm1lZGl1bVwiPlxuICAgIHtgJHtwZXJjZW50YWdlfSVgfVxuICA8L1RleHQ+XG4pO1xuXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7IHBlcmNlbnRhZ2UsIGljb25FbmROYW1lLCBzaG93UGVyY2VudGFnZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8UHJvZ3Jlc3NCYXJDb250YWluZXIgey4uLnByb3BzfT5cbiAgICA8QmFyQmFja2dyb3VuZCBjbGFzc05hbWU9XCJiYXItYmFja2dyb3VuZFwiPlxuICAgICAgPEJhckZvcmVncm91bmRcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFyLWZvcmVncm91bmRcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICB3aWR0aDogJHtwZXJjZW50YWdlfSU7XG4gICAgICAgIGB9XG4gICAgICAvPlxuICAgIDwvQmFyQmFja2dyb3VuZD5cbiAgICB7aWNvbkVuZE5hbWUgJiYgKFxuICAgICAgPEljb25cbiAgICAgICAgbWw9XCJzbWFsbGVyXCJcbiAgICAgICAgZmxleD1cIjBcIlxuICAgICAgICBmb250U2l6ZT1cInNpemU0XCJcbiAgICAgICAgbmFtZT17aWNvbkVuZE5hbWV9XG4gICAgICAgIGNvbG9yPXtwZXJjZW50YWdlIDwgMTAwID8gJ21vbm9jaHJvbWUuZ3JleTQwJyA6ICd0ZXh0LmRlZmF1bHQnfVxuICAgICAgLz5cbiAgICApfVxuICAgIHtzaG93UGVyY2VudGFnZSAmJiBwZXJjZW50YWdlVGV4dChwZXJjZW50YWdlKX1cbiAgPC9Qcm9ncmVzc0JhckNvbnRhaW5lcj5cbik7XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgLyogU2hvdyB0aGUgcGVyY2VudGFnZSBjb21wbGV0ZSwgb3Igbm90ICovXG4gIHNob3dQZXJjZW50YWdlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiBOYW1lIG9mIHRoZSBpY29uIHRvIHVzZSBhcyB0aGUgaW5kaWNhdG9yLCBpZiBkZXNpcmVkLiAqL1xuICBpY29uRW5kTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiBUaGUgYWN0dWFsIGN1cnJlbnQgcGVyY2VudGFnZSBjb21wbGV0ZWQgKi9cbiAgcGVyY2VudGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIC4uLkZsZXguZGVmYXVsdFByb3BzLFxuICBzaG93UGVyY2VudGFnZTogZmFsc2UsXG4gIGljb25FbmROYW1lOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */"));
var BarForeground = (
/*#__PURE__*/
0, _styledBase["default"])(_Box["default"], {
  target: "e1ftfzjq2",
  label: "BarForeground"
})("height:100%;background-color:", function (props) {
  return props.theme.colors.text["default"];
}, ";border-radius:inherit;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmlDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgUHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmFkaWkubGFyZ2V9O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEJhckJhY2tncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5NDB9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcbmNvbnN0IEJhckZvcmVncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0LmRlZmF1bHR9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcblxuY29uc3QgcGVyY2VudGFnZVRleHQgPSBwZXJjZW50YWdlID0+IChcbiAgPFRleHQgZmxleD1cIjBcIiBtbD1cInNtYWxsZXJcIiBmb250U2l6ZT1cInNpemUzXCIgZm9udFdlaWdodD1cIm1lZGl1bVwiPlxuICAgIHtgJHtwZXJjZW50YWdlfSVgfVxuICA8L1RleHQ+XG4pO1xuXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7IHBlcmNlbnRhZ2UsIGljb25FbmROYW1lLCBzaG93UGVyY2VudGFnZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8UHJvZ3Jlc3NCYXJDb250YWluZXIgey4uLnByb3BzfT5cbiAgICA8QmFyQmFja2dyb3VuZCBjbGFzc05hbWU9XCJiYXItYmFja2dyb3VuZFwiPlxuICAgICAgPEJhckZvcmVncm91bmRcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFyLWZvcmVncm91bmRcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICB3aWR0aDogJHtwZXJjZW50YWdlfSU7XG4gICAgICAgIGB9XG4gICAgICAvPlxuICAgIDwvQmFyQmFja2dyb3VuZD5cbiAgICB7aWNvbkVuZE5hbWUgJiYgKFxuICAgICAgPEljb25cbiAgICAgICAgbWw9XCJzbWFsbGVyXCJcbiAgICAgICAgZmxleD1cIjBcIlxuICAgICAgICBmb250U2l6ZT1cInNpemU0XCJcbiAgICAgICAgbmFtZT17aWNvbkVuZE5hbWV9XG4gICAgICAgIGNvbG9yPXtwZXJjZW50YWdlIDwgMTAwID8gJ21vbm9jaHJvbWUuZ3JleTQwJyA6ICd0ZXh0LmRlZmF1bHQnfVxuICAgICAgLz5cbiAgICApfVxuICAgIHtzaG93UGVyY2VudGFnZSAmJiBwZXJjZW50YWdlVGV4dChwZXJjZW50YWdlKX1cbiAgPC9Qcm9ncmVzc0JhckNvbnRhaW5lcj5cbik7XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgLyogU2hvdyB0aGUgcGVyY2VudGFnZSBjb21wbGV0ZSwgb3Igbm90ICovXG4gIHNob3dQZXJjZW50YWdlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiBOYW1lIG9mIHRoZSBpY29uIHRvIHVzZSBhcyB0aGUgaW5kaWNhdG9yLCBpZiBkZXNpcmVkLiAqL1xuICBpY29uRW5kTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiBUaGUgYWN0dWFsIGN1cnJlbnQgcGVyY2VudGFnZSBjb21wbGV0ZWQgKi9cbiAgcGVyY2VudGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIC4uLkZsZXguZGVmYXVsdFByb3BzLFxuICBzaG93UGVyY2VudGFnZTogZmFsc2UsXG4gIGljb25FbmROYW1lOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */"));

var percentageText = function percentageText(percentage) {
  return (0, _core.jsx)(_Text["default"], {
    flex: "0",
    ml: "smaller",
    fontSize: "size3",
    fontWeight: "medium"
  }, "".concat(percentage, "%"));
};

var ProgressBar = function ProgressBar(_ref) {
  var percentage = _ref.percentage,
      iconEndName = _ref.iconEndName,
      showPercentage = _ref.showPercentage,
      props = _objectWithoutProperties(_ref, ["percentage", "iconEndName", "showPercentage"]);

  return (0, _core.jsx)(ProgressBarContainer, props, (0, _core.jsx)(BarBackground, {
    className: "bar-background"
  }, (0, _core.jsx)(BarForeground, {
    className: "bar-foreground",
    css:
    /*#__PURE__*/
    (0, _core.css)("width:", percentage, "%;;label:ProgressBar;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2dCIiwiZmlsZSI6Ii4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgUHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmFkaWkubGFyZ2V9O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEJhckJhY2tncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5NDB9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcbmNvbnN0IEJhckZvcmVncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0LmRlZmF1bHR9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcblxuY29uc3QgcGVyY2VudGFnZVRleHQgPSBwZXJjZW50YWdlID0+IChcbiAgPFRleHQgZmxleD1cIjBcIiBtbD1cInNtYWxsZXJcIiBmb250U2l6ZT1cInNpemUzXCIgZm9udFdlaWdodD1cIm1lZGl1bVwiPlxuICAgIHtgJHtwZXJjZW50YWdlfSVgfVxuICA8L1RleHQ+XG4pO1xuXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7IHBlcmNlbnRhZ2UsIGljb25FbmROYW1lLCBzaG93UGVyY2VudGFnZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8UHJvZ3Jlc3NCYXJDb250YWluZXIgey4uLnByb3BzfT5cbiAgICA8QmFyQmFja2dyb3VuZCBjbGFzc05hbWU9XCJiYXItYmFja2dyb3VuZFwiPlxuICAgICAgPEJhckZvcmVncm91bmRcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFyLWZvcmVncm91bmRcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICB3aWR0aDogJHtwZXJjZW50YWdlfSU7XG4gICAgICAgIGB9XG4gICAgICAvPlxuICAgIDwvQmFyQmFja2dyb3VuZD5cbiAgICB7aWNvbkVuZE5hbWUgJiYgKFxuICAgICAgPEljb25cbiAgICAgICAgbWw9XCJzbWFsbGVyXCJcbiAgICAgICAgZmxleD1cIjBcIlxuICAgICAgICBmb250U2l6ZT1cInNpemU0XCJcbiAgICAgICAgbmFtZT17aWNvbkVuZE5hbWV9XG4gICAgICAgIGNvbG9yPXtwZXJjZW50YWdlIDwgMTAwID8gJ21vbm9jaHJvbWUuZ3JleTQwJyA6ICd0ZXh0LmRlZmF1bHQnfVxuICAgICAgLz5cbiAgICApfVxuICAgIHtzaG93UGVyY2VudGFnZSAmJiBwZXJjZW50YWdlVGV4dChwZXJjZW50YWdlKX1cbiAgPC9Qcm9ncmVzc0JhckNvbnRhaW5lcj5cbik7XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgLyogU2hvdyB0aGUgcGVyY2VudGFnZSBjb21wbGV0ZSwgb3Igbm90ICovXG4gIHNob3dQZXJjZW50YWdlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiBOYW1lIG9mIHRoZSBpY29uIHRvIHVzZSBhcyB0aGUgaW5kaWNhdG9yLCBpZiBkZXNpcmVkLiAqL1xuICBpY29uRW5kTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiBUaGUgYWN0dWFsIGN1cnJlbnQgcGVyY2VudGFnZSBjb21wbGV0ZWQgKi9cbiAgcGVyY2VudGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIC4uLkZsZXguZGVmYXVsdFByb3BzLFxuICBzaG93UGVyY2VudGFnZTogZmFsc2UsXG4gIGljb25FbmROYW1lOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */"))
  })), iconEndName && (0, _core.jsx)(_Icon["default"], {
    ml: "smaller",
    flex: "0",
    fontSize: "size4",
    name: iconEndName,
    color: percentage < 100 ? 'monochrome.grey40' : 'text.default'
  }), showPercentage && percentageText(percentage));
};

ProgressBar.propTypes = {
  /* Show the percentage complete, or not */
  showPercentage: _propTypes["default"].bool,

  /* Name of the icon to use as the indicator, if desired. */
  iconEndName: _propTypes["default"].string,

  /* The actual current percentage completed */
  percentage: _propTypes["default"].number.isRequired
};
ProgressBar.defaultProps = _objectSpread({}, _Flex["default"].defaultProps, {
  showPercentage: false,
  iconEndName: null
});
var _default = ProgressBar;
exports["default"] = _default;