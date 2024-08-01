import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import MyHeader from './components/MyHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MyHeader />
      <App />
    </Router>
  </React.StrictMode>,
);

