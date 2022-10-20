import React, {useState} from "react";
import {FilterType} from "./App";

type MoneyPropsType={
    currentMoney:Array<MoneysProps>
    onclickFilterHandler:(nameButton:FilterType)=>void//add
}
type MoneysProps={
    banknots:string;
    value:number;
    number:string;
}
// const [filter, setFilter] = useState<FilterType>("all")
// type FilterType="all" | "dollar" | "ruble"


export const NewComponent =(props:MoneyPropsType)=> {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onclickFilterHandler("all")}>all</button>
                <button onClick={() => props.onclickFilterHandler("ruble")}>rubles</button>
                <button onClick={() => props.onclickFilterHandler("dollar")}>dollars</button>
            </div>
        </>
    )
}
