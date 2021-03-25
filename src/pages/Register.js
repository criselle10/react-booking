import React,{useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';

export default function Register(){
    //create states to be used for input elements
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [mobileNo, setMobileNo] = useState(0);
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

    // useEffect(() => {
    //     alert('I run with useEffet')
    // }, [])

    // function sampleFunction(){
    //     setMobileNo(mobileNo + 1)
    // }

    // function sampleFunction2(){
    //     setPassword1(password1 + 1)
    // }

    // console.log(email); 
    // console.log(password1); 
    // console.log(password2);

    function registerUser(e){
        //prevents page redirection via form submission
        e.preventDefault();

        setEmail('');
        setPassword1('');
        setPassword2('');

        alert('Thank you for registering!')
    }

    useEffect(() => {
        if((email !== '' && password1 !== '' && password2 !== '') && 
            (password1 === password2)){
                setIsActive(true);
            }else {
                setIsActive(false);
            }
            
    }, [email, password1, password2]);
    
    return (
        <Form onSubmit={(e) => registerUser(e)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type = "email"
                    placeholder = "Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="password1">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type = "password"
                    placeholder = "Password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="password2">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control 
                    type = "password"
                    placeholder = "Verify Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
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