import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function ErrorBanner({dataProp}){
    const {title, description,label} = dataProp

	return(
		<Row>
			<Col>
				<Jumbotron>
				  <h1>{title}</h1>
				  <p>
				  	{description}
				  </p>
				  <p>
				    {label}
				  </p>
				</Jumbotron>
			</Col>
		</Row>
	)
}