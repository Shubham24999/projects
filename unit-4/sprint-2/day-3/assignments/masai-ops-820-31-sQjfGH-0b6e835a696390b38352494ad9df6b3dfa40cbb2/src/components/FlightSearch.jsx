// import React, { useEffect } from "react";
import React,{useState,useRef,useEffect} from "react"
import SearchResults from "./SearchResults";
let Data=[]
export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`)
  .then((res)=>{
    return (res.json())
  })
  .then((data)=>{
    console.log(data)
    // return data
    // let Data=data.map((elm)=>{
    //   return elm;
    // })
    // Data=data.map((elm)=>elm)
    return data
  })
};
// console.log(Data)
function FlightSearch() {
  const [iflightData,setiFlightData]=useState([])
  const [fflightData,setfFlightData]=useState([])
  const ref1=useRef(null)
  const ref2=useRef(null)
  // on page load fetch the data (useEffect)
  useEffect(()=>{
    let data=fetchData()
    console.log(data)
  })
  
  
  const handleSearch = () => {
    // filter the data based on source and destination
    //  console.log(ref1.current.value,ref2.current.value)
       let source=ref1.current.value
       let destination=ref2.current.value
     
       let store=iflightData.filter((e)=>{
        if(e.source==source && e.destination==destination){
          return true
        }
        setfFlightData(store)

       })

  };
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input ref={ref1} data-testid="source-input"  placeholder="Source"  />
          <br /> <br />
          <input ref={ref2} data-testid="destination-input" name="destination" />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch} >Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      {fflightData.length==0?<div data-testid="no-flights" className="">
            No Flights Found
          </div>:<SearchResults data={fflightData}/>}
    </div>
  );
}

export default FlightSearch;
