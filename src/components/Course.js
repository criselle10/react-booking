import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

/*({courseProp})
	Props: {
		courseProp: {

		}
	}
*/ 
export default function Course({courseProp}){
	// console.log(courseProp)Data Type: Object
	const {name, description,price} = courseProp //object destructured

	// const[example, setExample] = useState('hello');
	// count-getters and setCount-setters
	console.log("I appear/run on each other");
	const [count, setCount] = useState(0);//array destructuring
	const [seat, setSeat] = useState(10);
	const [isOpen, setOpen] = useState(true);//1-true, 0-false

	/*
		Effects in React:

		These are tasks/functionalities that run on initial render and 
		everytime the component re-renders. It can also be controlled when
		it re-renders with the use of an optional dependency array.
	*/

	// we will check the seats state inital render and everytime the componnet re-renders.
	// We will check it to disable the button when the number of seats drops to 0.
	useEffect(() => {
		if(seat === 0){
			setOpen(false)
		}
	},[seat])
	//useEffect runs on initial render AND everytime the component re-renders.	

	function enroll(){
		setCount(count + 1);
		setSeat(seat - 1);
		
	}

	/*
		Conditional Rendering
		Showing/displaying an element based on a given condition.
	*/ 

	return (
		//Course.js
		<Row className="my-3">
			<Col>
				<Card>
					<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Description:</Card.Subtitle>
					<Card.Text>{description}</Card.Text>
					<Card.Subtitle className="mb-2 text-muted">Price:</Card.Subtitle>
					<Card.Text>PHP{price}</Card.Text>
					<Card.Text>Enrollees: {count === 0 ? "No Enrollees Yet." : count}</Card.Text>
					<Card.Text>Seats: {seat}</Card.Text>
					{
						isOpen === false //condiiton
						? <Button variant="danger" disabled onClick={enroll} >Not Available</Button> //if
						: <Button variant="primary" onClick={enroll} >Enroll</Button> //else
					}
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

// check if the "Course" component is getting the correct prop types
Course.propTypes = {
	// shape() is used to check a prop object conforms to a specific "shape"/"data structure"
	courseProp: PropTypes.shape({
		// Defines the properties and their expected data types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}