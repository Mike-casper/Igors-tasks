import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";


      function App() {
        const [message, setMessage] = useState([
              {message: 'message1'},
              {message: 'message2'},
              {message: 'message3'},
              {message: 'message4'},
              {message: 'message5'}
            ]
        )
          const addMessage=(title:string)=>{
            let newMessage = {message:title}
              console.log(title)
              setMessage([newMessage, ...message])
          }
        return (
            <div className="App">
                <FullInput
                addMessage={addMessage}/>
              {/*<div>*/}
              {/*  <input />*/}
              {/*  <button>+</button>*/}
              {/*</div>*/}
              {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
              })}
            </div>
        )
}

export default App;
