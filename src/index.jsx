import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from 'style';
import App from './App';

axios.defaults.baseURL = process.env.REACT_APP;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
