import React from 'react';
import ReactDom from 'react-dom';
import RoutesMap from '@/router';

if (module.hot) {
  module.hot.accept();
}
ReactDom.render(<RoutesMap />, document.getElementById('root'));
