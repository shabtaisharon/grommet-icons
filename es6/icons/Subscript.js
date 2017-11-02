var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Subscript = function Subscript(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Subscript' }, props),
    React.createElement('path', { d: 'M18.74,3.63l.19,4.07h-.49a4.92,4.92,0,0,0-.38-1.54A2.58,2.58,0,0,0,17,5.07a3.68,3.68,0,0,0-1.73-.35H12.83V18a3.54,3.54,0,0,0,.35,2,1.92,1.92,0,0,0,1.5.54h.6V21H7.92V20.5h.61a1.76,1.76,0,0,0,1.56-.67A3.88,3.88,0,0,0,10.38,18V4.72H8.29a5.79,5.79,0,0,0-1.73.18,2.37,2.37,0,0,0-1.14.93A3.78,3.78,0,0,0,4.86,7.7H4.38l.21-4.07Z' }),
    React.createElement('path', { d: 'M22.48,16.68h.33v5.59a1.13,1.13,0,0,0,.06.4.41.41,0,0,0,.17.21.63.63,0,0,0,.28.08h.4v.27H20.76V23l.45,0a.62.62,0,0,0,.29-.1.38.38,0,0,0,.15-.22,1.4,1.4,0,0,0,0-.37V18.42a4.45,4.45,0,0,0,0-.64c0-.15-.1-.23-.24-.23a.82.82,0,0,0-.28,0l-.3.13-.18-.25Z' })
  );
};

export default Subscript;