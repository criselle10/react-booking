import React, {useContext} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import UserContext from '../UserContext';

export default function AppNavBar() {

	const {user} = useContext(UserContext)

	return (
		<Navbar bg="light" expand="lg">
	        <Navbar.Brand as={Link} to="/">Zuitter-Booking</Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
	        <Navbar.Collapse id="basic-navbar-nav">
	            <Nav className="ml-auto">
	                <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
	                <Nav.Link as={NavLink} to="/courses" exact>Courses</Nav.Link>
					{(user.email !== null) ?//true
						<Nav.Link as={NavLink} to='/logout' exact>Log Out</Nav.Link>
						://false
						<React.Fragment>
							<Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link>
							<Nav.Link as={NavLink} to="/login" exact>Log In</Nav.Link>
						</React.Fragment>
					}
					{(user.isAdmin === true) ?
						<Nav.Link as={NavLink} to='/createcourse' exact>Create Course</Nav.Link>
						:
						<Nav.Link></Nav.Link>
					}
	            </Nav>
	        </Navbar.Collapse>
	    </Navbar>
	)
}
