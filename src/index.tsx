import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { SearchContextProvider } from './context/SearchContextProvider/SearchContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </Router>
  </React.StrictMode>
);