import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({data}) => {
	console.log(data)
	return (
		<div className="project-list-wrapper">
			<table data-testid="project-container">
				{/* Add table head  */}
				<thead>
					<tr>
						<th>S.no</th>
						<th>Name</th>
						<th>Tech Stack</th>
						<th>Assigned To</th>
						<th>Current Status</th>
					</tr>
				</thead>
				{/* Map through the list and use `ProjectRow` Component  */}
				<tbody>
				{data.map((elm)=>{
					return <ProjectRow id={elm.id} name={elm.name} tech_stack={elm.tech_stack} assigned_to={elm.assigned_to} status={elm.status}/>
				})
				}
				</tbody>
			</table>
		</div>
	);
};
