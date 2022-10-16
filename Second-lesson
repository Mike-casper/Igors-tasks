import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const ButtonStuipid = () => {
        console.log("Stupid button")
    }
    return (
        <div className={"App"}>
            <Button name={"YoutubeChannel-1"} callBack={() => Button1Foo("I'm Vasya", 21)}/>
            <Button name={"YoutubeChannel-2"} callBack={() => Button2Foo("I'm Ivan")}/>
            <Button name={"Stupid button"} callBack={ButtonStuipid}/>
        </div>
    )
}

export default App;
