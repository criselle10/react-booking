import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Course({courseProp}){
	// console.log(courseProp)
	const {name, description,price} = courseProp //destructured
	return (
			//Course.js
			<Row className="my-3">
			  <Col>
			  	<Card>
			      <Card.Body>
			        <Card.Title>{name}</Card.Title>
			        <Card.Subtitle className="mb-2 text-muted">Price: PHP{price}</Card.Subtitle>
			        <Card.Text>
			          {description}
			        </Card.Text>
			      </Card.Body>
			    </Card>
			  </Col>
			</Row>
		)
}