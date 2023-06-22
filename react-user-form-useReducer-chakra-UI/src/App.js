import { useState, useReducer } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Center, Table,
  Thead,
  Tr,
  Th,
  TableContainer
} from '@chakra-ui/react';

const initialState = {
  name: "",
  gender: "",
  role: "",
  mailid: "",
  contactno: "",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  console.log(action.payload);
  console.log(initialState.mailid)
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'gender':
      return { ...state, gender: action.payload };
    case 'role':
      return { ...state, role: action.payload };
    case 'status':
      return { ...state, maritalStatus: action.payload };
    case 'mailid':
      return { ...state, mailid: action.payload };
    case 'contactno':
      return { ...state, contactno: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [submittedData, setSubmittedData] = useState([]);


  const { name, gender, role, maritalStatus, mailid, contactno } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name==="" || gender==="" || role==="" || mailid==="" || contactno===""){
      alert("Please fill the Empty details")

    }
    else{
      setSubmittedData([...submittedData, state]);
    dispatch({ type: "reset" });
    }
  };


  const deleteuser = (idx) => {
    const newuserlist = submittedData.filter((elm, index) => {
      return idx !== index + 1;
    })
    console.log(newuserlist)
    setSubmittedData(newuserlist)
  }



  return (
    <div className="App">
      <div><Heading as="h1">Login Form (With useReducer Hooks)</Heading></div>
      <div >
        <Box className="form_cont" >
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={name} onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} />

              <FormLabel>Mail Id</FormLabel>
              <Input type="text" name="mailid" value={mailid} onChange={(e) => dispatch({ type: 'mailid', payload: e.target.value })} />

              <FormLabel>Contact No.</FormLabel>
              <Input type="text" maxLength="10" name="contactno" value={contactno} onChange={(e) => dispatch({ type: 'contactno', payload: e.target.value })} />

              <FormLabel>Gender</FormLabel>
              <Select name="gender" data-testid="gender-select" value={gender} onChange={(e) => dispatch({ type: 'gender', payload: e.target.value })}>
                <option >Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
              </Select>
              <FormLabel> Select Role</FormLabel>
              <Select name="role" data-testid="role-select" value={role} onChange={(e) => dispatch({ type: 'role', payload: e.target.value })}>
                <option >Select Tech Stack</option>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer </option>
              </Select>

              <Checkbox name="maritalStatus" isChecked={maritalStatus} onChange={(e) => dispatch({ type: 'status', payload: e.target.checked })}>Married</Checkbox>
              <Center>
                <Button variant="solid" colorScheme="red" type="submit">
                  SUBMIT
                </Button>
              </Center>
            </FormControl>
          </form>
        </Box>
        <div>
          {submittedData.length === 0 && <Heading textAlign="center" color="red" data-testid="no-user-container">No Users Found</Heading>}
        </div>
        <Box>
          <TableContainer>
            <Table variant='solid' size="lg" colorScheme="black">
              <Thead>
                <Tr>
                  <Th>S.NO</Th>
                  <Th>USER</Th>
                  <Th>GENDER</Th>
                  <Th>ROLE</Th>
                  <Th>MARITAL STATUS</Th>
                  <Th >Delete</Th>
                </Tr>
              </Thead>

              {submittedData.length !== 0 && submittedData.map((elm, ind) => {
                return <UserRow key={ind} ind={ind + 1} deleteuser={deleteuser} name={elm.name} gender={elm.gender} role={elm.role} maritalStatus={elm.maritalStatus} />
              })}

            </Table>
          </TableContainer>

        </Box>
      </div>

    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
