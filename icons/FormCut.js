'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormCut = function FormCut(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'FormCut' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M18,7.52380952 L10.1428571,13.8095238 L18,7.52380952 Z M18,15.9047619 L10.1428571,9.61904762 L18,15.9047619 Z M8.57142857,10.1428571 C9.43930461,10.1428571 10.1428571,9.43930461 10.1428571,8.57142857 C10.1428571,7.70355254 9.43930461,7 8.57142857,7 C7.70355254,7 7,7.70355254 7,8.57142857 C7,9.43930461 7.70355254,10.1428571 8.57142857,10.1428571 Z M8.57142857,16.4285714 C9.43930461,16.4285714 10.1428571,15.7250189 10.1428571,14.8571429 C10.1428571,13.9892668 9.43930461,13.2857143 8.57142857,13.2857143 C7.70355254,13.2857143 7,13.9892668 7,14.8571429 C7,15.7250189 7.70355254,16.4285714 8.57142857,16.4285714 Z' })
      )
    )
  );
};

exports.default = FormCut;