import React from 'react';
import './App.css';
import Rate from './ratings';

function App (props) {
    return(
        <>
    <div className="cards">
        <div className="card">
            <img src = {props.imgsrc}
             alt="Pic"
              className="card_img" />
              <div className="card_info">
            <span className="card_category"> {props.title} </span>
            <h3 className="card_title"> {props.sname} </h3>
            <Rate />
        </div>
    </div>
    </div>
  </>
    );
}

export default App;