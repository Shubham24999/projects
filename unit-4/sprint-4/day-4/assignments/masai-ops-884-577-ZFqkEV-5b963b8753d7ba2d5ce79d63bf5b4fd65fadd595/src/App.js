import { useState } from "react";
import "./App.css";
import {UserRow} from "./Component/UserRow"
  const Select = () => <div />;
  import {Box,Button,Center,Checkbox,FormControl,Heading,FormLabel,Input,TableContainer} from "@chakra-ui/react"


const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {};

function App() {
  // note : Remove below const and instead import them from chakra import the following components from
  // const Box = () => <div />;
  // const Button = () => <div />;
  // const Center = () => <div />;
  // const Checkbox = () => <div />;
  // const FormControl = () => <div />;
  // const Heading = () => <div />;
  // const FormLabel = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // use Table Component from chakra ui to display the details
  // const TableContainer = () => <div />;

  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element">
          <FormControl>
            <FormLabel></FormLabel>

            <Input type="text" name="name" />
            <FormLabel></FormLabel>
            <Select name="gender" data-testid="gender-select">
              <option></option>
              <option></option>
              <option></option>
            </Select>
            <FormLabel></FormLabel>
            <Select name="role" data-testid="role-select">
              <option></option>
              <option></option>
              <option></option>
            </Select>

            <Checkbox name="maritalStatus">Married</Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
      {submittedData?submittedData.map((elm)=>{
        return <UserRow id={elm.id} name={elm.name} gender={elm.gender} role={elm.role} maritalStatus={elm.maritalStatus} />
      }):
      <Heading data-testid="no-user-container">no users found</Heading>}

    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
