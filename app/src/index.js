import React from 'react';
 import WishList from './components/WishList';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  // <React.StrictMode>
    <WishList/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
