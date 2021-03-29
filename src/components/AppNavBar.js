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
					{(user.email !== null) //authenticated
						?
						<Nav.Link as={NavLink} to="/logout" exact>Log Out</Nav.Link> //authenticated user in NOT an Admin
						:
						<React.Fragment>	
							<Nav.Link as={NavLink} to="/login" exact>Log In</Nav.Link>
							<Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link>
						</React.Fragment> //user is not authenticated
					}
					{(user.isAdmin === true || user.isAdmin === 'true') 
						?
						<Nav.Link as={NavLink} to='/createcourse' exact>Create Course</Nav.Link>
						:
						<Nav.Link></Nav.Link>
					} 
	            </Nav>
	        </Navbar.Collapse>
	    </Navbar>
	)
}


// {(user.email !== null) //authenticated
// 	? (user.isAdmin === true  || localStorage.getItem('isAdmin') == "true") //if the authenticated user is an Admin
// 		   ? <React.Fragment><Nav.Link as={NavLink} to="/courses/create" exact>Create Course</Nav.Link><Nav.Link as={NavLink} to="/logout" exact>Logout</Nav.Link></React.Fragment>
// 		: <React.Fragment><Nav.Link as={NavLink} to="/logout" exact>Logout</Nav.Link></React.Fragment> //authenticated user in NOT an Admin
// 	   : <React.Fragment>	<Nav.Link as={NavLink} to="/login" exact>Login</Nav.Link><Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link></React.Fragment> //user is not authenticated
//   }