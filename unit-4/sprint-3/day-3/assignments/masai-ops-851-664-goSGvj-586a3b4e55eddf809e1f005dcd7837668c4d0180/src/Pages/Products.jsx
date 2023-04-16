import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

const getData=(url)=>{
  return fetch(url).then((res)=> res.json())
}
export default function AllProducts() {
  //  console.log("hii")
  const {isAuth}=useContext(AuthContext)
  const [list,setlist]=useState([])
  const [loading,setloading]=useState(false)
  const [err,seterr]=useState(false)

  function fetchData(){
    setloading(true)
    getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    .then((d)=>{
      console.log(d)
      setlist(d.data)
    })
    .catch((err)=>{
      seterr(true)
    })
    .finally(()=>{
      setloading(false)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    loading?<h1>Loading...</h1>:err?<h1>Something went Wrong</h1>:(
      <div>
      <h2>All Products</h2>
      <div className = "products-wrapper" style={{display:"grid",
      gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"20px" }}>
          {list.map((elm)=>{         
          return (<div  key={elm.id}>
              <h3 className = "name">{elm.title}</h3>
              <div className= "brand">{elm.brand}</div>
              <div className = "price">{elm.price}</div>
            </div>)
          })  
          }  
      </div>
    </div>
    )
  )
}