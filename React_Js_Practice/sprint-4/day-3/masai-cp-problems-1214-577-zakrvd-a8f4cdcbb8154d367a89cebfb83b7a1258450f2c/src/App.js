import { useState,useReducer } from "react";
import "./App.css";
import {UserRow} from "./Component/UserRow"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,Center,Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react';

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'gender':
      return { ...state, gender: action.payload };
    case 'role':
      return { ...state, role: action.payload };
    case 'status':
      return { ...state, maritalStatus: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

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
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const [submittedData, setSubmittedData] = useState([]);


  const { name, gender, role, maritalStatus } = state;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData,state]);
    dispatch({ type: "reset" });
  };
  
  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>

            <Input type="text" name="name" value={name} onChange={(e)=>dispatch({ type: 'name', payload: e.target.value })} />
            <FormLabel>Gender</FormLabel>
            <Select name="gender" data-testid="gender-select" value={gender} onChange={(e)=>dispatch({ type: 'gender', payload: e.target.value })}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer Not to Say">Prefer Not to Say</option>
            </Select>
            <FormLabel>Role</FormLabel>
            <Select name="role" data-testid="role-select" value={role} onChange={(e)=>dispatch({ type: 'role', payload: e.target.value })}>
              <option value="FrontEnd Developer">FrontEnd Developer</option>
              <option value="BackEnd Developer">BackEnd Developer</option>
              <option value="FullStack Developer">FullStack Developer </option>
            </Select>

            <Checkbox name="maritalStatus" isChecked={maritalStatus} onChange={(e)=>dispatch({ type: 'status', payload: e.target.checked })}>Married</Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
      <Box>
      <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>S.NO</Th>
        <Th>USER</Th>
        <Th>GENDER</Th>
        <Th>ROLE</Th>
        <Th>MARITAL STATUS</Th>
      </Tr>
    </Thead>
    {submittedData.length!==0 ? submittedData.map((elm)=>{
        return <UserRow name={elm.name} gender={elm.gender} role={elm.role} maritalStatus={elm.maritalStatus} id={elm.id}/>
      }):<Heading data-testid="no-user-container">no users found</Heading>}
     </Table>
     </TableContainer>
      
      </Box>

    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
