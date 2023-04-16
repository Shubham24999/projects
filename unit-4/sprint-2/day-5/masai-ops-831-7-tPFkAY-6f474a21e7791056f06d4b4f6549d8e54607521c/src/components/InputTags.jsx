import Card from './Card';
import {useState } from "react"

let initial={
    "Name":"",
    "Height":0,
    "Power":0,
    "Weight":0
}
const InputTags=()=>{

    const [list,setList]=useState([])
    const [data,setData]=useState(initial)
    // const [Name,setName]=useState("")
    // const [Height,setHeight]=useState(0)
    // const [Power,setPower]=useState(0)
    // const [Weight,setWeight]=useState(0)

    // const name=useRef(null)
    // const height=useRef(null)
    // const power=useRef(null)
    // const weight=useRef(null)
    
    let hand=(e)=>{
        // console.log(e.target.value)
        // const {name,value}=e.target
        console.log(e.target.value)
        setData({...data,[e.target.name]:e.target.value})
        
        // setData(ini)
        // const {name,height,power,weight}=e.target.value
        // setData({...data,[name]:value})
    }
    // console.log(list)
    // console.log(data)
    function handle(e){
        e.preventDefault()
        // console.log(data)
        setData(initial)
        setList([...list,data])
        
    }
    return(
        <>
        <form>
            <input  data-testid="input-name" type="text" name="Name" value={data.Name} onChange={hand}/>
            <input data-testid="input-height" type="number" name="Height" value={data.Height===0?"":data.Height} onChange={hand}/>
            <input  data-testid="input-weight" type="number" name="Power" min="1" max="10" value={data.Power===0?"":data.Power} onChange={hand}/>
            <input data-testid="input-power" type="number" name="Weight"  value={data.Weight===0?"":data.Weight} onChange={hand}/>
            <button data-testid="add-button"  onClick={handle}>Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull">Most Powerful Superhero</button>
        <button data-testid="all-superheroes">Show All</button>
        <Card data={list}/>
        </>
    )
}

export default InputTags;
