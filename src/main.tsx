import { ErrorPage } from '@pages/error';
import 'antd/dist/antd.css';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
