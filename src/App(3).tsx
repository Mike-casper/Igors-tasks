import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let t = 1
    let [y,setY] = useState(1)

    const onClickHandler=()=> {
        setY(++y)
    }
        const onClickHandlerCancelletion=()=>{
           setY(0)
       }

    return(
        <div>
            <h1>{y}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerCancelletion}>0</button>
        </div>
    )
}

export default App;
