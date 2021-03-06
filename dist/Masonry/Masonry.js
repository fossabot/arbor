"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MasonryContainer = _interopRequireDefault(require("./MasonryContainer"));

var _MasonryItem = _interopRequireDefault(require("./MasonryItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Masonry = function Masonry(_ref) {
  var children = _ref.children,
      rowGap = _ref.rowGap,
      props = _objectWithoutProperties(_ref, ["children", "rowGap"]);

  return /*#__PURE__*/_react["default"].createElement(_MasonryContainer["default"], props, [].concat(children).map(function (child) {
    return /*#__PURE__*/_react["default"].createElement(_MasonryItem["default"], {
      key: child.key,
      mb: rowGap
    }, child);
  }));
};

Masonry.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  rowGap: _propTypes["default"].string
};
Masonry.defaultProps = {
  rowGap: undefined
};
var _default = Masonry;
exports["default"] = _default;