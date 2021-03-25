import React, {useState,useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';

//Note: export default
//export default allows this component to be imported somewhere else
export default function App() {

    // State hook fo ruser information
    // Initialized as an object with properties/data coming from localStorage
    const [user, setUser] = useState({
        email: localStorage.getItem('email')
    });

    // Function for clearing localStorage on logout
    const unsetUser = () => {
        localStorage.clear();
    }

    return (
        <React.Fragment>
            <Router>
                <AppNavBar/>
                <Container className="my-5">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/courses" component={Courses}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    </Switch>
                </Container>
            </Router>
        </React.Fragment>
    )
}

// localStorage {
//     email: "criselle@mail.com"
//     getItem: () => {}
//     setItem: () => {}
// }

//EXACT boolean