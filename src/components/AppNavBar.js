import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

export default function AppNavBar() {
	return (
		<Navbar bg="light" expand="lg">
	        <Navbar.Brand href="#home">Zuitter-Booking</Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
	        <Navbar.Collapse id="basic-navbar-nav">
	            <Nav className="mr-auto">
	                <Nav.Link href="#home">Home</Nav.Link>
	                <Nav.Link href="#link">Courses</Nav.Link>
	            </Nav>
	        </Navbar.Collapse>
	    </Navbar>
	)
}
