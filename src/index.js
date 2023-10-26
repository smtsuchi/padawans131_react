import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import AppFunction from './AppFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <Router>
    <AppFunction />
  </Router>

  // </React.StrictMode>
);

