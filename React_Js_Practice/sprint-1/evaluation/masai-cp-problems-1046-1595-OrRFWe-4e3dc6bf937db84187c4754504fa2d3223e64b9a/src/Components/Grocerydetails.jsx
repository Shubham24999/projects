import React, { useState } from "react";
import GroceryItem from "./GroceryItem";

const Grocerydetails = () => {
  const [res,setres]=useState(true)
  const [data,setdata]=useState([])

  const handleClick=()=>{
    setres(!res)
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`)
    .then((res)=>{
      return res.json()
    })
    .then((d)=>{
      setdata(d.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  console.log(data)
  return (
    <div>
      <h1>Groceries</h1>

      {res?<button className="get-groceries" onClick={handleClick}>Get-Groceries</button>:(<div data-cy="container">
        {data.map((elm)=>{
          return <GroceryItem key={elm.id} name={elm.name} image={elm.image} price={elm.price}  />
        })}
      </div>)}
    </div>
  );
};

export default Grocerydetails;
