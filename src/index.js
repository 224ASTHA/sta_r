import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Data from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));

function ncard (val) {
  return(
    <App imgsrc = {val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    />
  );
}

root.render(
  <React.StrictMode>
    <h1 className="heading_style">Rate the Most Watched Series in Netflix </h1>
    {Data.map(ncard)}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
