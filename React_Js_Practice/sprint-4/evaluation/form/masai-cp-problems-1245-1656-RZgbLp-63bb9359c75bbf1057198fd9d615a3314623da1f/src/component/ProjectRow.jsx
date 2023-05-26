import React from "react";

export const ProjectRow = ({id,name,tech_stack,assigned_to,status}) => {
	return (
		<tr>
			<td data-testid="project-id">{id}</td>
			<td data-testid="project-name">{name}</td>
			<td data-testid="project-tech-stack">{tech_stack}</td>
			<td data-testid="project-assigned-to">{assigned_to}</td>
			<td data-testid="project-status">
				{status?"completed":"pending"}
			</td>
		</tr>
	);
};
