export function EmployeeCard({name,department,gender,salary,image}) {
  
    return (
    <tr className="item" >
      <td className="employee-card-name">{name}</td>
      <td className="employee-card-department">{department}</td>
      <td className="employee-card-image">{image}</td>
      <td className="employee-card-gender">{gender}</td>
      <td className="employee-card-salary">{salary}</td>
    </tr>
  );
}
