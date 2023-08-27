import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import "../node_modules/material-design-icons/iconfont/material-icons.css";


// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
