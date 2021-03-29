import React, {useContext} from 'react';
import Banner from '../components/Banner';
import Course from '../components/Course';
import coursesData from '../data/courses';
import UserContext from '../UserContext';
import {Table, Button} from 'react-bootstrap';

export default function Courses(){
	// use the userContext and destructure it to access the user state defined in the App component
	const {user} = useContext(UserContext);
	
	/*
		JSX does not alloq components to return adjacent JSX 
		elements. It should be wrapped in a single element.
	*/ 

	// console.log(coursesData)
	// const course1 = coursesData[0]
	// const course2 = coursesData[1]
	// const course3 = coursesData[2]
	// console.log(course3)

	const data = {
		title: "Welcome to the Courses Page",
		description: "Select a course by enrolling.",
		label: "Back To Home"
	}

	/*Props make components more reusable.*/ 

	const courses = coursesData.map(course => {
		return (
			<Course key={course.id} courseProp={course} exampleProp={"Criselle"}/>
		)
	})
	console.log(courses)

	const coursesRows = coursesData.map( course => {
		return(
			<tr key={course.id}>
				<td>{course.id}</td>
				<td>{course.name}</td>
				<td>PhP {course.price}</td>
				<td>{course.onOffer ? 'open' : 'closed'}</td>
				<td>{course.start_date}</td>
				<td>{course.end_date}</td>
				<td>
					<Button variant="warning">Update</Button>
					<Button variant="danger">Disable</Button>
				</td>
			</tr>
		)
	})

	return(
		user.isAdmin === true ? 
		<>
			<h1>code for admin</h1>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>name</th>
						<th>Price</th>
						<th>Status</th>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{coursesRows}
				</tbody>
			</Table>
		</> :
		<React.Fragment>
			<Banner dataProp={data}/>
			{courses}
		</React.Fragment>
	)
}