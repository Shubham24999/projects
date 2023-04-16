import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
// use Td component from  from chakra ui to display the user details
const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return <>
    <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>S.NO</Th>
        <Th>USER</Th>
        <Th>GENDER</Th>
        <Th>ROLE</Th>
        <Th>MARITAL STATUS</Th>
      </Tr>
    </Thead>
    <Tbody  key={id}>
      <Tr>
        <Td>{name}</Td>
        <Td>{gender}</Td>
        <Td>{role}</Td>
        <Td>{maritalStatus}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  
  </>;
};
export { UserRow };
