import React, { useReducer, useState } from "react"

const reducerFn=(state,{type,payload})=>{
    switch(type){
        case "DESC":{return state-payload}
        case "ASC":{return state+payload}
        default:{
            return state;
        }
    }
}
// state is primitive
const Counter=()=>{
    const [count,dispatch]=useReducer(reducerFn,0)
    return (
        <div>
            <h1>Count:{count}</h1>
            <div>
            <span>By 1</span>
            <button onClick={()=>dispatch({type:"DESC",payload:-1})}>DESc</button>
            <button onClick={()=>dispatch({type:"ASC",payload:1})}>ASC</button>
            </div>
            {/*<div>
             <span>By 5</span>
            <button onClick={()=>{setcount(count-5)}}>DES</button>
            <button onClick={()=>{setcount(count+5)}}>ASC</button>
            </div> */}
        </div>
    )
}

export default Counter