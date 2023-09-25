import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#212121',
    accent: 'rgb(0, 122, 255)',
    light: '#ffffff',
    bgc: 'rgba(47, 48, 58, 0.8)',
    secondary: '#757575',
    border: 'rgba(117, 117, 117, 0.2)',

    tertiary: '#423e3e',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    circle: '50%',
  },
  transition: '250ms linear',
  spacing: value => `${value * 4}px`,
  shadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
