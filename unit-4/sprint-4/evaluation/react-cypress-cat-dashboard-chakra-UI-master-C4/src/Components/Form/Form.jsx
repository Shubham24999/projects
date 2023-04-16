import {Button,FormControl,Input} from "@chakra-ui/react"
import { useReducer } from "react";
import axios from 'axios';
// Note : import the the mentioned components from chakra UI and remove the follwoing once imported

// let Button = () => <div />;
// let FormControl = () => <div />;
// let Input = () => <div />;

const initialdata={
  name:"",
  cost:0,
  likes:0,
  description:"",
  breed:""
}

const reducerFn=(filldata,action)=>{
  switch(action.type){
    case "Name":{
      return {...filldata,name:action.payload}
    }
    case "Cost":{
      return {...filldata,cost:action.payload}
    }
    case "Likes":{
      return {...filldata,likes:action.payload}
    }
    case "Description":{
      return {...filldata,description:action.payload}
    }
    case "Breed":{
      return {...filldata,breed:action.payload}
    }
    case "Submit":{
      //do the post request
      axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats`,{
          ...filldata
        })
      .then((res)=>{
        console.log(res.cats)
        return {...initialdata}
      })
      .catch((err)=>console.log(err))
    }
    default:{
      return {...initialdata}
    }
  }
}


export default function Form() {

  const [filldata,dispatch]=useReducer(reducerFn,initialdata)
  const handleClick=()=>{
    // e.preventDefault()
    dispatch({type:"Submit"})
  }
  return (
    <div className="addCatContainer">
      <form className="form">
        <FormControl>
          <Input className="name" placeholder="Name" value={filldata.name} onChange={(e)=>dispatch({type:"Name",payload:e.target.value})} />
          <Input className="cost" placeholder="Cost" type="number" value={filldata.cost} onChange={(e)=>dispatch({type:"Cost",payload:e.target.value})} />

          <Input className="likes" placeholder="Likes" type="number" value={filldata.likes} onChange={(e)=>dispatch({type:"Likes",payload:e.target.value})} />
          <Input className="description" placeholder="Description" value={filldata.description} onChange={(e)=>dispatch({type:"Description",payload:e.target.value})}/>
          <Input className="breed" placeholder="Breed" value={filldata.breed} onChange={(e)=>dispatch({type:"Breed",payload:e.target.value})}/>
          <Button colorScheme={"green"} className="submitBtn" onClick={handleClick}>
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
