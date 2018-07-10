import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Minimal React Boilerplate. something something darkside';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
