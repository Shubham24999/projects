import React from "react";
import "./UserRow.css"
import {
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'



// use Td component from  from chakra ui to display the user details
const UserRow = ({ name, gender, role, maritalStatus, ind,deleteuser }) => {
  // console.log(maritalStatus)
  return <>
    <Tbody  >
      <Tr>
        <td>{ind}</td>
        <Td>{name}</Td>
        <Td>{gender}</Td>
        <Td>{role}</Td>
        <Td>{maritalStatus?"married":"unmarried"}</Td>
        <Td className="dlt" onClick={()=>deleteuser(ind)} boxSize="4"><DeleteIcon /></Td>
      </Tr>
    </Tbody>
</>;
};
export { UserRow };
