import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Highlights(){
	return (
			<Row>
				<Col>
					<Card style={{ width: '18rem' }}>
					  	<Card.Body>
						    <Card.Title>Learn from Home</Card.Title>
						    <Card.Text>
							    Some quick example text to build on the card title and make up the bulk of
							    the card's content.
					    	</Card.Text>
						    <Card.Link href="#">Card Link</Card.Link>
						    <Card.Link href="#">Another Link</Card.Link>
					  	</Card.Body>
					</Card>
				</Col>

				<Col>
					<Card style={{ width: '18rem' }}>
					  	<Card.Body>
						    <Card.Title>Study Now, Pay Later</Card.Title>
						    <Card.Text>
							    Some quick example text to build on the card title and make up the bulk of
							    the card's content.
					    	</Card.Text>
						    <Card.Link href="#">Card Link</Card.Link>
						    <Card.Link href="#">Another Link</Card.Link>
					  	</Card.Body>
					</Card>
				</Col>

				<Col>
					<Card style={{ width: '18rem' }}>
					  	<Card.Body>
						    <Card.Title>Be Part of Our Community</Card.Title>
						    <Card.Text>
							    Some quick example text to build on the card title and make up the bulk of
							    the card's content.
					    	</Card.Text>
						    <Card.Link href="#">Card Link</Card.Link>
						    <Card.Link href="#">Another Link</Card.Link>
					  	</Card.Body>
					</Card>
				</Col>
			</Row>
		)
}