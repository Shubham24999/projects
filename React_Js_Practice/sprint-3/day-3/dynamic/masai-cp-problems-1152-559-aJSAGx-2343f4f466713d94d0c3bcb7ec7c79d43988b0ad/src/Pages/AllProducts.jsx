import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"
// import data from "../db.json"

const getData=()=>{
  return fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`).then((res)=> res.json())
}
export default function AllProducts() {
  // console.log(data)
  const [productlist,setproductlist]=useState([])

  function fetchData(){
    getData()
    .then((d)=>{
      console.log(d)
      setproductlist(d)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  useEffect(()=>{
    fetchData()
  },[])

  // const handleClick = (id) => {
  //   <Link to={`/products/${id}`} />
  // }


  return (

    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
        {productlist && productlist.map((elm)=>{
          return (<Link key={elm.id} style={{border:"2px solid black"}}>
              <h1>{elm.id}</h1>
              <h3>{elm.name}</h3>
              <h3>{elm.price}</h3>
             </Link>)
        })}
      </div>
    </div>
  )
}
