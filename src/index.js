import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login'
import Register from './pages/register'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './utils/firebaseConfig';
import EventosPage from './pages/eventos';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <EventosPage />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
