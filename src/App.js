import React, {useState,useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import {UserProvider} from './UserContext';
import Error from './pages/Error';

//Note: export default
//export default allows this component to be imported somewhere else
export default function App() {

    // State hook fo ruser information
    // Initialized as an object with properties/data coming from localStorage
    const [user, setUser] = useState({
        email: localStorage.getItem('email'),
        isAdmin: localStorage.getItem('isAdmin')
    });

    // Function for clearing localStorage on logout
    const unsetUser = () => {
        localStorage.clear();
    }
    /*
        Provider Component:

        All components that will be inside the UserProvider component
        will have access to values that are going to be passed into the provider
        and into our context.
    */
    return (
        <React.Fragment>
            <UserProvider value={{user, setUser, unsetUser}}>
                <Router>
                    <AppNavBar/>
                    <Container className="my-5">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/courses" component={Courses}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/logout" component={Logout}/>
                            <Route noMatch component={Error}/>
                        </Switch>
                    </Container>
                </Router>
            </UserProvider>
        </React.Fragment>
    )
}

// localStorage {
//     email: "criselle@mail.com"
//     getItem: () => {}
//     setItem: () => {}
// }

//EXACT boolean