import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Automobile } from './Automobile';

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
   <div>
     <Automobile
     CarsArray = {topCars}/>
    </div>
  );
}

export default App;
