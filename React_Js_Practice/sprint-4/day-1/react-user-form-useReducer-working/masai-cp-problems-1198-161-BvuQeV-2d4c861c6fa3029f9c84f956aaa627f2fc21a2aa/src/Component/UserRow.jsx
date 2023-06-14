import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return <>
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Marital Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{role}</td>
                <td>{maritalStatus ? "Married" : "Unmarried"}</td>
              </tr>
            </tbody>
          </table>
  </>;
};
export { UserRow };
