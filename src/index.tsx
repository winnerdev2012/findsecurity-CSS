import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthUserContextProvider from 'context/AuthUserContext';
import AdminCollectionContextProvider from "./context/AdminCollectionContext";
import FloBuilderContextProvider from 'context/FloBuilderContext';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "./config/MaterialThemeConfig";
import PublicContextProvider from "./context/PublicContext";
import TemplatesContextProvider from "./context/TemplatesContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AuthUserContextProvider>
    <AdminCollectionContextProvider>
      <FloBuilderContextProvider>
        <ThemeProvider theme={theme}>
          <PublicContextProvider>
            <TemplatesContextProvider>
              <App/>
            </TemplatesContextProvider>
          </PublicContextProvider>
        </ThemeProvider>
      </FloBuilderContextProvider>
    </AdminCollectionContextProvider>
  </AuthUserContextProvider>
);

reportWebVitals();
