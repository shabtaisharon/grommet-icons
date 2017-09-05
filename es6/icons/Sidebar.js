var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Sidebar = function Sidebar(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Sidebar' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,22 L23,22 L23,2 L1,2 L1,22 Z M16,2 L16,22 L16,2 Z' })
      )
    )
  );
};

export default Sidebar;