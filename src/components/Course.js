import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Course({courseProp}){
	// console.log(courseProp)Data Type: Object
	const {name, description,price} = courseProp //destructured

	// count-getters and setCount-setters
	const [count, setCount] = useState(0);
	const [seat, setSeat] = useState(10);
	const [isOpen, setOpen] = useState(1);

	function enroll(){
		setCount(count + 1);
		setSeat(seat -1);
		console.log('Enrollees: ' + count);
		if(seat == 1) {
			setOpen(false);
		}
	}

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
					<Card.Text>Enrollees: {count}</Card.Text>
					<Card.Text>Seats: {seat}</Card.Text>
					{isOpen === false ? <Button variant="danger" disabled onClick={enroll} >Not Available</Button> : <Button variant="primary" onClick={enroll} >Enroll</Button> }
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