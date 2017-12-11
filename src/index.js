import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Routing
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <MuiThemeProvider>
  <HashRouter>
    <App />
  </HashRouter>
  </MuiThemeProvider>
, document.getElementById('root'));

registerServiceWorker();