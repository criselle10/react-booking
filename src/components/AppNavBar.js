import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
