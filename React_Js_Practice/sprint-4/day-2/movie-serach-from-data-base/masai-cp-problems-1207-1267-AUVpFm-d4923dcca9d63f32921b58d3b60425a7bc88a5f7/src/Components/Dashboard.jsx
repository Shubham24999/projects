import React,{ useEffect,useState} from 'react'
import axios from 'axios'


export default function Dashboard() {

  const [data,setdata]=useState([])
  const [inp,setinp]=useState("")

  const fetchData=(inp)=>{

    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`)
    .then((d)=>{
      console.log(d.data)
      setdata(d.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  // useEffect(()=>{
  //   fetchData(inp)
  // },[])


  
  console.log(data)
  console.log(inp)
  return (
    <div>
       <input
          style = {{padding:"5px", margin: "10px", width: 200}}
          type = "text"
          data-testid = "search_key"
          placeholder = "Search Movie Username"
          onChange={(e)=>{
            setinp(e.target.value)
            setTimeout(()=>{
              fetchData(inp)
            },1000)
          }}
      />
      <div data-testid = "movie_results" >
        {data && data.map((elm)=>{
          return <div key={elm.id}>
            <h3>Title: <span>{elm.title}</span></h3>
            <h3>Year: <span>{elm.year}</span></h3>
          </div>
        })}
      </div>
      
    </div>
  )
}