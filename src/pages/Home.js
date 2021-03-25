import React from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';

export default function Home(){

	/*
		What are props?
		--Props are a way to pass data from one component to another.
		Props stand for properties. They are react objects which is
		passed like an HTML attribute and is received like function parameter.
		This provides a way to pass data from a PARENT component to a CHILD component.

	*/ 

let data = {
	title: "Zuitter Booking System",
	description: "A Booking System made with MERN.",
	label: "Enroll Now!"
}

/*jsx elements here*/
//Prop names are user-defined. 
	return(
		<div>
		    <Banner dataProp={data}/>
		    <Highlights/>
		</div>
	)
}

/*
	Objectives:
	1. Create the NavBar - Done
	2. Create the Jumbotron - Done
	3. Create the Card Containers
*/