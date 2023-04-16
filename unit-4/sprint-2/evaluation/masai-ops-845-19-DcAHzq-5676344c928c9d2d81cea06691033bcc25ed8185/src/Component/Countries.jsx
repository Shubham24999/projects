import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import CountriesCard from "./CountriesCard";
import { useState ,useEffect } from "react";

let getData=(url)=>{
  return (fetch(url)
  .then((res)=> {
    console.log(res)
    return res.json()
  }))
}

function Countries() { 
  const [loading,setloading]=useState(false)
  const [fdata,setFdata]=useState([])
  const [total,setTotal]=useState(0)
  const [page,setPage]=useState(1)



  const fetchapi= (page)=>{
      setloading(true)
      getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
      .then((res)=>{
        console.log(res)
        setFdata(res.data)
        setTotal(res.totalPage)
        setloading(false)
       })
       .catch((error)=>{
        console.log(error)
        setloading(false)
       })
      
        
  }
  useEffect(()=>{
    fetchapi(page)
  },[page])

  const onChange=(val)=>{
    setPage(page+(val))
  }
  // console.log(loading)
  return loading? <LoadingIndicator />:  (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {fdata.map((elm)=>{
          return <CountriesCard key={elm.id} country={elm.country} population={elm.population} />
        })}
      </div>
      <div>
        <Pagination current={page} onChange={onChange} total={total} />
      </div>
    </div>
  )
}

export default Countries;
