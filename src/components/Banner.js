import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function Banner(){
	return(
		<Row>
			<Col>
				<Jumbotron>
				  <h1>Zuitt Coding Bootcamp</h1>
				  <p>
				   Opportunities for everyone, everywhere
				  </p>
				  <p>
				    <Button variant="primary">Learn more</Button>
				  </p>
				</Jumbotron>
			</Col>
		</Row>
		)
}