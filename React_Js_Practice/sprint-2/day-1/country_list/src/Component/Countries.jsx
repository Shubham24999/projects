import { useState,useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard"
import Pagination from "./Pagination";

function fetchData(page){
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`).then((res)=> res.json())
}

function Countries() { 
  const [data,setData]=useState([])
  const [loading,setloading]=useState(false)
  const [total,setTotal]=useState(0)
  const [page,setPage]=useState(1)

  // const rdata=[]
  function fetchdata(){
    setloading(true)
    fetchData(page)
    .then((d)=>{
      console.log(d)
      setData(d.data)
      setTotal(d.totalPages)
      // console.log(total)
      setloading(false)
    })
    .catch((err)=>{
      console.log(err)
      setloading(true)
    })
  }

  useEffect(()=>{
    fetchdata(page)
  },[page])

  const onChange=(val)=>{
    setPage(page+(val))
  }
  console.log(loading,total)
  return (loading?<LoadingIndicator />:(<div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {data.map((elm)=>{
          return <CountriesCard key={elm.id} country={elm.country} population={elm.population} />
        })}
      </div>
      <div>
      <Pagination current={page} onChange={onChange} total={total} />
      </div>
    </div>))
}

export default Countries;
