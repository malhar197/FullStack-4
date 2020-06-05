import React from "react";

const Student = ({match}) => {

	const studentname = match.params.studentname;
	const studentno = match.params.studentno;
	const studentdis=studentno?"The Student no. is "+studentno:"";

		return(
			<div>
			<p> Student </p>
			<div>
				<div>{`The student name is "${ studentname }"!`}</div>
				<div>{studentdis}</div>
			</div>
		</div>
			);
	};

export default Student;