"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledFlex = ( /*#__PURE__*/0, _base["default"])(_Flex["default"], {
  target: "el72kbu0",
  label: "StyledFlex"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.brandFont;
}, ";font-size:", function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.size4;
}, ";&:focus{outline:none;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRvQ29tcGxldGUvU3R5bGVkQXV0b0NvbXBsZXRlSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTStCIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRvQ29tcGxldGUvU3R5bGVkQXV0b0NvbXBsZXRlSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5cbmNvbnN0IFN0eWxlZEZsZXggPSBzdHlsZWQoRmxleClgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyYW5kRm9udH07XG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZXMuc2l6ZTR9O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEF1dG9Db21wbGV0ZUlucHV0ID0gKHtcbiAgY3gsXG4gIGdldFN0eWxlcyxcbiAgaW5uZXJQcm9wcyxcbiAgaW5uZXJSZWYsXG4gIGlzRGlzYWJsZWQsXG4gIGlzSGlkZGVuLFxuICBzZWxlY3RQcm9wcyxcbiAgdGhlbWUsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEZsZXhcbiAgICAgIGFzPVwiaW5wdXRcIlxuICAgICAgYm9yZGVyPVwibm9uZVwiXG4gICAgICBmbGV4PVwiMVwiXG4gICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4ueyAuLi5pbm5lclByb3BzLCAuLi5wcm9wcyB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5TdHlsZWRBdXRvQ29tcGxldGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGN4OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRTdHlsZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlubmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0hpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuXG5TdHlsZWRBdXRvQ29tcGxldGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlubmVyUHJvcHM6IHt9LFxuICBpc0hpZGRlbjogdW5kZWZpbmVkLFxuICBpc0Rpc2FibGVkOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEF1dG9Db21wbGV0ZUlucHV0O1xuIl19 */"));

var StyledAutoCompleteInput = function StyledAutoCompleteInput(_ref3) {
  var cx = _ref3.cx,
      getStyles = _ref3.getStyles,
      innerProps = _ref3.innerProps,
      innerRef = _ref3.innerRef,
      isDisabled = _ref3.isDisabled,
      isHidden = _ref3.isHidden,
      selectProps = _ref3.selectProps,
      theme = _ref3.theme,
      props = _objectWithoutProperties(_ref3, ["cx", "getStyles", "innerProps", "innerRef", "isDisabled", "isHidden", "selectProps", "theme"]);

  return /*#__PURE__*/_react["default"].createElement(StyledFlex, _extends({
    as: "input",
    border: "none",
    flex: "1",
    disabled: isDisabled,
    ref: innerRef
  }, _objectSpread(_objectSpread({}, innerProps), props)));
};

StyledAutoCompleteInput.propTypes = {
  cx: _propTypes["default"].func.isRequired,
  getStyles: _propTypes["default"].func.isRequired,
  innerProps: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  innerRef: _propTypes["default"].func.isRequired,
  isDisabled: _propTypes["default"].bool,
  isHidden: _propTypes["default"].bool,
  selectProps: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  theme: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

};
StyledAutoCompleteInput.defaultProps = {
  innerProps: {},
  isHidden: undefined,
  isDisabled: undefined
};
var _default = StyledAutoCompleteInput;
exports["default"] = _default;