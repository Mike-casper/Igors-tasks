import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType="all" | "dollar" | "ruble"//add

function App() {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])


  const [filter, setFilter] = useState<FilterType>("all")

  let currentMoney = money;
  //если nameButton === "dollar"
  if(filter === 'dollar' ){
    currentMoney = money.filter((filtredMoney)=>filtredMoney.banknots === 'Dollars');
  } if (filter === 'ruble'){
    currentMoney = money.filter((filtredMoney)=>filtredMoney.banknots === 'RUBLS');
  }

  const onclickFilterHandler=(nameButton:FilterType)=> {
      setFilter(nameButton)
  }


  return (
      <NewComponent
          onclickFilterHandler={onclickFilterHandler}//add
          currentMoney={currentMoney} //change
      />
      // <>
      // <ul>
      //   {currentMoney.map((objFromMoneyArr,index)=>{
      //     return(
      //         <li key={index}>
      //           <span> {objFromMoneyArr.banknots}</span>
      //           <span> {objFromMoneyArr.value}</span>
      //           <span> {objFromMoneyArr.number}</span>
      //         </li>
      //     )
      //   })}
      // </ul>
      //   <div style={{marginLeft:'35px'}}>
      //     <button  onClick={()=>onclickFilterHandler("all")}>all</button>
      //     <button  onClick={()=>onclickFilterHandler("ruble")}>rubles</button>
      //     <button  onClick={()=>onclickFilterHandler("dollar")}>dollars</button>
      //   </div>
      // </>
  )
}

export default App;
