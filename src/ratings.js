import React , {useState} from 'react';
import './App.css';

function Rate () {
    const[rating,setRating] = useState(0);
    const[hover,setHover] = useState(0);
    return(
      <div className="App">
        <h1>Star Rating</h1>
        <div>
          {
            [1,2,3,4,5].map((num) =>(
              <button className="STAR" 
               key={num}
               onClick={() => setRating(num)}
                onMouseOver={() => setHover(num)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className = {
                  `${
                    num<=((rating && hover) || hover) ? 'on' : 'off'
                  }`
                }>&#9733;</span>
              </button>
            ))
          }
        </div>
      </div>
    );
}

export default Rate;