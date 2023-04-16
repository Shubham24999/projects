import "./App.css";
import { Stack, Center,Button,Box } from '@chakra-ui/react'
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form"
// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
// let Stack = () => <div />;
// let Center = () => <div />;
// let Button = () => <div />;


function App() {
  const [res,setres]=useState(true)

  const HandleClick=()=>{
    if(res){
      setres(false)
    }else{
      setres(true)
    }
  }
  return (
    <Stack p={5} className="App">
      <Center>
        <Button width="150px" className="toggleForm" onClick={HandleClick}>{res?"Show Add Cats Page":"Show Dashboard Page"}</Button>
      </Center>
      <Box>
        {res?<Form/>:<Dashboard />}
      </Box>
    </Stack>
  );
}

export default App;
