"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var lineHeightMultiplier = 0.5;

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return /*#__PURE__*/(0, _react2.css)("line-height:", theme.lineHeights.small, ";;label:baseStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWFkaW5nL0hlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXFDIiwiZmlsZSI6Ii4uLy4uL3NyYy9IZWFkaW5nL0hlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgbGluZUhlaWdodE11bHRpcGxpZXIgPSAwLjU7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIGxpbmUtaGVpZ2h0OiAke3RoZW1lLmxpbmVIZWlnaHRzLnNtYWxsfTtcbmA7XG5cbmNvbnN0IGNhbGN1bGF0ZWRNYXJnaW4gPSAoeyBtYiwgZm9udFNpemUsIHRoZW1lIH0pID0+XG4gICFtYiAmJlxuICBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYygke3RoZW1lLmZvbnRTaXplc1tmb250U2l6ZV19ICogJHtsaW5lSGVpZ2h0TXVsdGlwbGllcn0pO1xuICBgO1xuXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkKFRleHQpYFxuICAke2Jhc2VTdHlsZXN9O1xuICAke2NhbGN1bGF0ZWRNYXJnaW59O1xuYDtcblxuSGVhZGluZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnaDEnLFxuICBjb2xvcjogJ3RleHQuZGFyaycsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgbGluZWhlaWdodDogJ3NtYWxsJ1xufTtcblxuY29uc3QgY3JlYXRlSGVhZGluZyA9IChoKSA9PiAoXG4gIHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4pID0+IChcbiAgPEhlYWRpbmcgYXM9e2h9IHsuLi5wcm9wc30+XG4gICAge2NoaWxkcmVufVxuICA8L0hlYWRpbmc+XG4pO1xuXG5IZWFkaW5nLkgxID0gY3JlYXRlSGVhZGluZygnaDEnKTtcbkhlYWRpbmcuSDEuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU3J1xufTtcblxuSGVhZGluZy5IMiA9IGNyZWF0ZUhlYWRpbmcoJ2gyJyk7XG5IZWFkaW5nLkgyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNidcbn07XG5cbkhlYWRpbmcuSDMgPSBjcmVhdGVIZWFkaW5nKCdoMycpO1xuSGVhZGluZy5IMy5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiAnc2l6ZTUnXG59O1xuXG5IZWFkaW5nLkg0ID0gY3JlYXRlSGVhZGluZygnaDQnKTtcbkhlYWRpbmcuSDQuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU0J1xufTtcblxuSGVhZGluZy5INSA9IHN0eWxlZChjcmVhdGVIZWFkaW5nKCdoNScpKWBcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5sYXJnZX07XG5gO1xuSGVhZGluZy5INS5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiAnc2l6ZTQnLFxuICBmb250V2VpZ2h0OiAnbWVkaXVtJ1xufTtcblxuSGVhZGluZy5INiA9IHN0eWxlZChjcmVhdGVIZWFkaW5nKCdoNicpKWBcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5sYXJnZX07XG5gO1xuSGVhZGluZy5INi5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiAnc2l6ZTQnLFxuICBmb250V2VpZ2h0OiAncmVndWxhcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iXX0= */"));
};

var calculatedMargin = function calculatedMargin(_ref2) {
  var mb = _ref2.mb,
      fontSize = _ref2.fontSize,
      theme = _ref2.theme;
  return !mb && /*#__PURE__*/(0, _react2.css)("margin-bottom:calc(", theme.fontSizes[fontSize], " * ", lineHeightMultiplier, ");;label:calculatedMargin;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWFkaW5nL0hlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0siLCJmaWxlIjoiLi4vLi4vc3JjL0hlYWRpbmcvSGVhZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBsaW5lSGVpZ2h0TXVsdGlwbGllciA9IDAuNTtcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IGNzc2BcbiAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMuc21hbGx9O1xuYDtcblxuY29uc3QgY2FsY3VsYXRlZE1hcmdpbiA9ICh7IG1iLCBmb250U2l6ZSwgdGhlbWUgfSkgPT5cbiAgIW1iICYmXG4gIGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCR7dGhlbWUuZm9udFNpemVzW2ZvbnRTaXplXX0gKiAke2xpbmVIZWlnaHRNdWx0aXBsaWVyfSk7XG4gIGA7XG5cbmNvbnN0IEhlYWRpbmcgPSBzdHlsZWQoVGV4dClgXG4gICR7YmFzZVN0eWxlc307XG4gICR7Y2FsY3VsYXRlZE1hcmdpbn07XG5gO1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdoMScsXG4gIGNvbG9yOiAndGV4dC5kYXJrJyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICBsaW5laGVpZ2h0OiAnc21hbGwnXG59O1xuXG5jb25zdCBjcmVhdGVIZWFkaW5nID0gKGgpID0+IChcbiAgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbikgPT4gKFxuICA8SGVhZGluZyBhcz17aH0gey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvSGVhZGluZz5cbik7XG5cbkhlYWRpbmcuSDEgPSBjcmVhdGVIZWFkaW5nKCdoMScpO1xuSGVhZGluZy5IMS5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiAnc2l6ZTcnXG59O1xuXG5IZWFkaW5nLkgyID0gY3JlYXRlSGVhZGluZygnaDInKTtcbkhlYWRpbmcuSDIuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU2J1xufTtcblxuSGVhZGluZy5IMyA9IGNyZWF0ZUhlYWRpbmcoJ2gzJyk7XG5IZWFkaW5nLkgzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNSdcbn07XG5cbkhlYWRpbmcuSDQgPSBjcmVhdGVIZWFkaW5nKCdoNCcpO1xuSGVhZGluZy5INC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiAnc2l6ZTQnXG59O1xuXG5IZWFkaW5nLkg1ID0gc3R5bGVkKGNyZWF0ZUhlYWRpbmcoJ2g1JykpYFxuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbmA7XG5IZWFkaW5nLkg1LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNCcsXG4gIGZvbnRXZWlnaHQ6ICdtZWRpdW0nXG59O1xuXG5IZWFkaW5nLkg2ID0gc3R5bGVkKGNyZWF0ZUhlYWRpbmcoJ2g2JykpYFxuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbmA7XG5IZWFkaW5nLkg2LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNCcsXG4gIGZvbnRXZWlnaHQ6ICdyZWd1bGFyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiJdfQ== */"));
};

var Heading = ( /*#__PURE__*/0, _base["default"])(_Text["default"], {
  target: "e1kyq2la2",
  label: "Heading"
})(baseStyles, ";", calculatedMargin, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWFkaW5nL0hlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0I0QiIsImZpbGUiOiIuLi8uLi9zcmMvSGVhZGluZy9IZWFkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IGxpbmVIZWlnaHRNdWx0aXBsaWVyID0gMC41O1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5zbWFsbH07XG5gO1xuXG5jb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gKHsgbWIsIGZvbnRTaXplLCB0aGVtZSB9KSA9PlxuICAhbWIgJiZcbiAgY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoJHt0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdfSAqICR7bGluZUhlaWdodE11bHRpcGxpZXJ9KTtcbiAgYDtcblxuY29uc3QgSGVhZGluZyA9IHN0eWxlZChUZXh0KWBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHtjYWxjdWxhdGVkTWFyZ2lufTtcbmA7XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2gxJyxcbiAgY29sb3I6ICd0ZXh0LmRhcmsnLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIGxpbmVoZWlnaHQ6ICdzbWFsbCdcbn07XG5cbmNvbnN0IGNyZWF0ZUhlYWRpbmcgPSAoaCkgPT4gKFxuICB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuKSA9PiAoXG4gIDxIZWFkaW5nIGFzPXtofSB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9IZWFkaW5nPlxuKTtcblxuSGVhZGluZy5IMSA9IGNyZWF0ZUhlYWRpbmcoJ2gxJyk7XG5IZWFkaW5nLkgxLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNydcbn07XG5cbkhlYWRpbmcuSDIgPSBjcmVhdGVIZWFkaW5nKCdoMicpO1xuSGVhZGluZy5IMi5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiAnc2l6ZTYnXG59O1xuXG5IZWFkaW5nLkgzID0gY3JlYXRlSGVhZGluZygnaDMnKTtcbkhlYWRpbmcuSDMuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU1J1xufTtcblxuSGVhZGluZy5INCA9IGNyZWF0ZUhlYWRpbmcoJ2g0Jyk7XG5IZWFkaW5nLkg0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNCdcbn07XG5cbkhlYWRpbmcuSDUgPSBzdHlsZWQoY3JlYXRlSGVhZGluZygnaDUnKSlgXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuYDtcbkhlYWRpbmcuSDUuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU0JyxcbiAgZm9udFdlaWdodDogJ21lZGl1bSdcbn07XG5cbkhlYWRpbmcuSDYgPSBzdHlsZWQoY3JlYXRlSGVhZGluZygnaDYnKSlgXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuYDtcbkhlYWRpbmcuSDYuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU0JyxcbiAgZm9udFdlaWdodDogJ3JlZ3VsYXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIl19 */"));
Heading.defaultProps = {
  as: 'h1',
  color: 'text.dark',
  fontWeight: 'bold',
  lineheight: 'small'
};

var createHeading = function createHeading(h) {
  return function (_ref3 // eslint-disable-line react/prop-types
  ) {
    var children = _ref3.children,
        props = _objectWithoutProperties(_ref3, ["children"]);

    return (
      /*#__PURE__*/
      _react["default"].createElement(Heading, _extends({
        as: h
      }, props), children)
    );
  };
};

Heading.H1 = createHeading('h1');
Heading.H1.defaultProps = {
  fontSize: 'size7'
};
Heading.H2 = createHeading('h2');
Heading.H2.defaultProps = {
  fontSize: 'size6'
};
Heading.H3 = createHeading('h3');
Heading.H3.defaultProps = {
  fontSize: 'size5'
};
Heading.H4 = createHeading('h4');
Heading.H4.defaultProps = {
  fontSize: 'size4'
};
Heading.H5 = ( /*#__PURE__*/0, _base["default"])(createHeading('h5'), {
  target: "e1kyq2la1",
  label: "Heading-H5"
})("line-height:", function (props) {
  return props.theme.lineHeights.large;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWFkaW5nL0hlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER3QyIsImZpbGUiOiIuLi8uLi9zcmMvSGVhZGluZy9IZWFkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IGxpbmVIZWlnaHRNdWx0aXBsaWVyID0gMC41O1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5zbWFsbH07XG5gO1xuXG5jb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gKHsgbWIsIGZvbnRTaXplLCB0aGVtZSB9KSA9PlxuICAhbWIgJiZcbiAgY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoJHt0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdfSAqICR7bGluZUhlaWdodE11bHRpcGxpZXJ9KTtcbiAgYDtcblxuY29uc3QgSGVhZGluZyA9IHN0eWxlZChUZXh0KWBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHtjYWxjdWxhdGVkTWFyZ2lufTtcbmA7XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2gxJyxcbiAgY29sb3I6ICd0ZXh0LmRhcmsnLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIGxpbmVoZWlnaHQ6ICdzbWFsbCdcbn07XG5cbmNvbnN0IGNyZWF0ZUhlYWRpbmcgPSAoaCkgPT4gKFxuICB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuKSA9PiAoXG4gIDxIZWFkaW5nIGFzPXtofSB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9IZWFkaW5nPlxuKTtcblxuSGVhZGluZy5IMSA9IGNyZWF0ZUhlYWRpbmcoJ2gxJyk7XG5IZWFkaW5nLkgxLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNydcbn07XG5cbkhlYWRpbmcuSDIgPSBjcmVhdGVIZWFkaW5nKCdoMicpO1xuSGVhZGluZy5IMi5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiAnc2l6ZTYnXG59O1xuXG5IZWFkaW5nLkgzID0gY3JlYXRlSGVhZGluZygnaDMnKTtcbkhlYWRpbmcuSDMuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU1J1xufTtcblxuSGVhZGluZy5INCA9IGNyZWF0ZUhlYWRpbmcoJ2g0Jyk7XG5IZWFkaW5nLkg0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNCdcbn07XG5cbkhlYWRpbmcuSDUgPSBzdHlsZWQoY3JlYXRlSGVhZGluZygnaDUnKSlgXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuYDtcbkhlYWRpbmcuSDUuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU0JyxcbiAgZm9udFdlaWdodDogJ21lZGl1bSdcbn07XG5cbkhlYWRpbmcuSDYgPSBzdHlsZWQoY3JlYXRlSGVhZGluZygnaDYnKSlgXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuYDtcbkhlYWRpbmcuSDYuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU0JyxcbiAgZm9udFdlaWdodDogJ3JlZ3VsYXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIl19 */"));
Heading.H5.defaultProps = {
  fontSize: 'size4',
  fontWeight: 'medium'
};
Heading.H6 = ( /*#__PURE__*/0, _base["default"])(createHeading('h6'), {
  target: "e1kyq2la0",
  label: "Heading-H6"
})("line-height:", function (props) {
  return props.theme.lineHeights.large;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWFkaW5nL0hlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0V3QyIsImZpbGUiOiIuLi8uLi9zcmMvSGVhZGluZy9IZWFkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IGxpbmVIZWlnaHRNdWx0aXBsaWVyID0gMC41O1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5zbWFsbH07XG5gO1xuXG5jb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gKHsgbWIsIGZvbnRTaXplLCB0aGVtZSB9KSA9PlxuICAhbWIgJiZcbiAgY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoJHt0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdfSAqICR7bGluZUhlaWdodE11bHRpcGxpZXJ9KTtcbiAgYDtcblxuY29uc3QgSGVhZGluZyA9IHN0eWxlZChUZXh0KWBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHtjYWxjdWxhdGVkTWFyZ2lufTtcbmA7XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2gxJyxcbiAgY29sb3I6ICd0ZXh0LmRhcmsnLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIGxpbmVoZWlnaHQ6ICdzbWFsbCdcbn07XG5cbmNvbnN0IGNyZWF0ZUhlYWRpbmcgPSAoaCkgPT4gKFxuICB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuKSA9PiAoXG4gIDxIZWFkaW5nIGFzPXtofSB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9IZWFkaW5nPlxuKTtcblxuSGVhZGluZy5IMSA9IGNyZWF0ZUhlYWRpbmcoJ2gxJyk7XG5IZWFkaW5nLkgxLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNydcbn07XG5cbkhlYWRpbmcuSDIgPSBjcmVhdGVIZWFkaW5nKCdoMicpO1xuSGVhZGluZy5IMi5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiAnc2l6ZTYnXG59O1xuXG5IZWFkaW5nLkgzID0gY3JlYXRlSGVhZGluZygnaDMnKTtcbkhlYWRpbmcuSDMuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU1J1xufTtcblxuSGVhZGluZy5INCA9IGNyZWF0ZUhlYWRpbmcoJ2g0Jyk7XG5IZWFkaW5nLkg0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udFNpemU6ICdzaXplNCdcbn07XG5cbkhlYWRpbmcuSDUgPSBzdHlsZWQoY3JlYXRlSGVhZGluZygnaDUnKSlgXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuYDtcbkhlYWRpbmcuSDUuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU0JyxcbiAgZm9udFdlaWdodDogJ21lZGl1bSdcbn07XG5cbkhlYWRpbmcuSDYgPSBzdHlsZWQoY3JlYXRlSGVhZGluZygnaDYnKSlgXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuYDtcbkhlYWRpbmcuSDYuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogJ3NpemU0JyxcbiAgZm9udFdlaWdodDogJ3JlZ3VsYXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIl19 */"));
Heading.H6.defaultProps = {
  fontSize: 'size4',
  fontWeight: 'regular'
};
var _default = Heading;
exports["default"] = _default;