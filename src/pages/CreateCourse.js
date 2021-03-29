import React, {useState,useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CreateCourse(){

    const [courseId, setCourseId] = useState('')
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [coursePrice, setCoursePrice] = useState('');

    const [isActive, setIsActive] = useState(false);

    function addCourse(e){
        //prevents page redirection via form submission
        e.preventDefault();

        setCourseId('');
        setCourseName('');
        setCourseDescription('');
        setStartDate('');
        setCoursePrice('');

        console.log('course created successfully!')
        console.log(`Name:${courseName} ID:${courseId} StartDate:${startDate} Price:${coursePrice}`);
    }

    useEffect(() => {
        if((courseId !== '' && courseName !== '' && courseDescription !== '' && startDate !== '' && coursePrice !== '' )){
                setIsActive(true);
            }else {
                setIsActive(false);
            }
            
    }, [courseId, courseName, courseDescription, startDate, coursePrice]);

    return(
        <Form onSubmit={(e) => addCourse(e)}>
            <Form.Group controlid = 'courseId'>
                <Form.Label>Course ID</Form.Label>
                <Form.Control 
                    type = 'courseId'
                    placeholder = 'Enter course id'
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlid = 'courseName'>
                <Form.Label>Course Name</Form.Label>
                <Form.Control 
                    type = 'course'
                    placeholder = 'Enter new course'
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlid = 'courseDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    type = 'description'
                    placeholder = 'Enter course description'
                    value= {courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlid = 'startdate'>
                <Form.Label>Start Date</Form.Label>
                <Form.Control 
                    type = 'startdate'
                    placeholder = 'Enter start date'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlid = 'coursePrice'>
                <Form.Label>Price</Form.Label>
                <Form.Control 
                    type = 'price'
                    placeholder = 'Enter course price'
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(e.target.value)}
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