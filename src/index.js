import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import mixin from './styles/mixin';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...mixin }}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
