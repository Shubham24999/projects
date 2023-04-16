import { Box,VStack,Button,Center,Img,SimpleGrid,Text,Select,Spinner } from '@chakra-ui/react'
import { useEffect, useReducer } from 'react';
import axios from 'axios';


// Note : import the the mentioned components from chakra UI and remove the follwoing once imported

// let Box = () => <div />;
// let Button = () => <div />;
// let Center = () => <div />;
// let Img = () => <div />;
// let SimpleGrid = () => <div />;
// let Text = () => <div />;
// let VStack = () => <div />;
// let Select = () => <div />;
// let Spinner = () => <div />;

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state,action) => {
  // console.log(state,action)
  switch(action.type){
    case "Request":{
      return {...state,isLoading:true,error:false}
    }
    case "Success":{
      return {...state,isLoading:false,error:false,data:action.payload}
    }
    case "Failure":{
      return {...state,error:true}
    }
    default: {
      // throw new 
    }
  }
};

export default function Dashboard() {

  const [state,dispatch]=useReducer(reducer,initialState)


  const getData=(value)=>{
    dispatch({type:"Request"})
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats?_order=${value}`)
    .then((res)=>{
      console.log(res)
      dispatch({type:"Success",payload:res})
    })
    .catch((err)=>{
      dispatch({type:"Failure",payload:err.message})
    })
  }
  let value="asc"
  useEffect(()=>{
    getData(value);
  },[value])

  return (
    <div>
      <div className="sortingButtons">
        <Button colorScheme={"green"} className="sortByCostAsc" >
          Sort by Asc
        </Button>
        <Button colorScheme={"red"} className="sortByCostDesc" m={2} >
          Sort by Desc
        </Button>
      </div>
      <Center>
        <Select placeholder="select option" >
          <option value="Peterbald">Peterbald</option>
          <option value="Nebelung">Nebelung</option>
          <option value="Persian">Persian</option>
          <option value="Birman">Birman</option>
          <option value="Himalayan">Himalayan</option>
        </Select>
      </Center>

      {/* Map the below container against your data */}
      {state.isLoading?<Spinner />:state.error?<Text >Something Went Wrong...</Text>:
      (<SimpleGrid className="main_container">
        {state.data && state.data.map((el)=>{
          return (<Box className="catsDetails" key={el.id}>
          <Center>
            <Img src={el.image}/>
          </Center>

          <VStack spacing={2} p={2}>
            <Text className="name" fontSize={"20px"} fontWeight="bold">{el.name}</Text>
            <Text className="cost">{el.cost}</Text>
            <Text className="likes">{el.likes}</Text>
            <Text className="breed">{el.breed}</Text>
            <Text className="description">{el.description}</Text>
            <Button className="delete">Delete</Button>
          </VStack>
        </Box>)
        })}
      </SimpleGrid>)}
    </div>
  );
}
