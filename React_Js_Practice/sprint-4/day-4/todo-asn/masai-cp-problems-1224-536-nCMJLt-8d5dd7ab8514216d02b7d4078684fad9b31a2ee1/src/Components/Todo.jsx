import TodoInput from "./TodoInput";
import axios from "axios";
import { useEffect, useState } from "react";


const Todos = () => {
  
  const [data,setdata]=useState([])

  function fetchData(){
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    .then((d)=>{
      console.log(d.data)
      setdata(d.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  function AfteraddingData(){
    fetchData()
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
     <TodoInput AfteraddingData={AfteraddingData}/>
    <div data-testid = "todos-wrapper">
    {data && data.map((elm)=>{
      return <h3 key={elm.id}>{elm.title}-{elm.status?"True":"False"}</h3>     
    })}
    </div>
    </div>
  );
};

export default Todos;
