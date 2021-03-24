import React from 'react';
import Highlights from '../components/Highlights';
import Banner from '../components/Banner';
import Course from '../components/Course';
import coursesData from '../data/courses';

export default function Courses(){

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
			<Course key={course.id} courseProp={course}/>
		)
	})

	return(
			<React.Fragment>
				<Banner dataProp={data}/>
				{courses}
				{/* <Course courseProp={course1}/>
				<Course courseProp={course2}/>
				<Course courseProp={course3}/> */}
			</React.Fragment>
		)
}