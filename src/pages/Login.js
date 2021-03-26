import React,{useState,useEffect,useContext} from 'react';
// useContext() hook is needed to unwrap your context.
import {Form,Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import users from '../data/users';
import UserContext from '../UserContext';

export default function Login(){
    // useContext will return object which contains the values passed
    // in the UserProvider
    const {user, setUser} = useContext(UserContext);
    console.log(user)

     // State hooks to store the values of the input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

    function loginUser(e){
        e.preventDefault();

        const match = users.find(user => {
            return(user.email === email && user.password === password)
        })

        if (match){
            localStorage.setItem('email', email)
            localStorage.setItem('isAdmin', match.isAdmin)
            setUser({
                email: email,
                isAdmin: match.isAdmin
            })
            Swal.fire({
                icon: 'success',
                title: 'Logged In Successfully.',
                text: 'Thank you for logging in.'
            })
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Log In Unuccessfully.',
                text: 'User credentials are wrong.'
            })
        }

        setEmail('');
        setPassword('');
    }

    useEffect(() => {
        // Validation to enable submit button when all fields are populated and both passwords match
        if(email !== '' && password !== ''){
            setIsActive(true)
        }else {
            setIsActive(false)
        }
    }, [email, password])

    return(
        <Form onSubmit={(e) => loginUser(e)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type = "email"
                    placeholder = "Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="userPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type = "password"
                    placeholder = "Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            { isActive ? 
                <Button variant="primary" type="submit" id="submitBtn">
                Submit
                </Button>
                :
                <Button variant="danger" type="submit" id="submitBtn" disabled>
                Submit
                </Button>
            }
        </Form>
    )
}