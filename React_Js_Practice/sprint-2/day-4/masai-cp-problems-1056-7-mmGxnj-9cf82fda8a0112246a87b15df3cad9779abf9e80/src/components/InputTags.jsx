import Card from './Card';
import { useState } from 'react';

let initial={
    "Name":"",
    "Height":0,
    "Power":0,
    "Weight":0
}

const InputTags=()=>{
    
    const [list,setList]=useState([])
    const [data,setData]=useState(initial)
    const [showa,setshowa]=useState(false)
    const [prf,setpowerfull]=useState(false)
    let index=0
    let handleChange=(e)=>{
        console.log(e.target.value)
        // const {name,value}=e.target
        console.log(e.target.value)
        setData({...data,[e.target.name]:e.target.value})
    }


    function handleClick(e){
        e.preventDefault()
        console.log("hii")
        setList([...list,data])

        setData(initial)
        
    }

    const Powerfull=()=>{
        console.log("power")
        let max=-Infinity
        for(let i=0;i<list.length;i++){
            if(list[i].Power>max){
                max=list[i].Power
                index=i
            }
        }
        setpowerfull(true)
    }

    const ShowAll=()=>{
        console.log("fdjh")
        setshowa(!showa)
        // return <Card data={list}/>
    }
    console.log(list)
    const {Name,Height,Power,Weight}=data
    return(
        <>
        <form>
            <input data-testid="input-name" placeholder='Enter Superhero Name' type="text" name="Name" value={Name} onChange={handleChange}/>
            <input data-testid="input-height" type="text" placeholder='Enter Height in cms'name="Height" value={Height} onChange={handleChange}/>
            <input data-testid="input-weight" type="text" placeholder='Enter Weight in kg' name="Power" value={Power} onChange={handleChange}/>
            <input data-testid="input-power" type="text" placeholder='Power Level?'  name="Weight" value={Weight} onChange={handleChange}/> 
            <button data-testid="add-button" onClick={handleClick} disabled={!Name}>Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull" disabled={list.length<=1} onClick={Powerfull} >Most Powerful Superhero</button>
        <button data-testid="all-superheroes" disabled={list.length<=1} onClick={ShowAll}>Show All</button>
        {showa?<Card data={list}/>:""}
        {prf?<Card data={list}/>:""}
        </>
    )
}

export default InputTags;
