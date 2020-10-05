import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './assets/styles/GlobalStyle/';
import Theme from "./assets/styles/Theme/";

ReactDOM.render(
  <Theme>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </Theme>,
  document.getElementById('root')
);