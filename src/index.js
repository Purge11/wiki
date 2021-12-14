import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HashRouter from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

