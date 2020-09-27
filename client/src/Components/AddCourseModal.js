import React from 'react'
import { useState, useEffect } from "react"
import { addCourses } from "../actions"
import { Form, Modal, Button, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";


export default function AddCourseModal(props) {

    const [courses, error] = useSelector((gState) => [
        gState.courses,
        gState.error
    ] 
    )
    const [validated, setValidated] = useState(false);
    const [checked, setChecked] = useState(false)

    const handleChange = (e) =>{
        Course Name : 
        
    }

    const handleSubmit = (e) =>{
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

    }
  

    return (
       
       <Modal  
            {...props} className="AddClass"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
           <Modal.Header closeButton>
               <Modal.Title>New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={ handleSubmit }>
                <Form.Group controlId="formPlainText">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control  type="input" placeholder="Add New Course" required/>
                    <Form.Control.Feedback type="invalid">New course Name required</Form.Control.Feedback>  
                </Form.Group>
                <Form.Group controlId="Subject" required onSelectCapture>
                    <Form.Control as="select">
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>Social studies</option>
                        <option>Language Arts</option>
                        <option>Computer Science</option>
                    </Form.Control>
                      
                </Form.Group>
                <Button className="primary-button" type="submit">Submit</Button>
            </Form>   
            </Modal.Body>
       </Modal>





    )
}



// {['checkbox'].map((type) => (
//     <div key={`default-${type}`} className="subject">
//     <Form.Check 
//         type={type}
//         id={`default-${type}`}
//         label={`Math`}  
//     />

//     <Form.Check
//         type={type}
//         label={`French`}
//         id={`default-${type}`}
//     />
//     <Form.Check
//         type={type}
//         label={`Biology`}
//         id={`default-${type}`}
//     />
//     <Form.Check
//         type={type}
//         label={`English`}
//         id={`-default-${type}`}
//     />
//     </div>
// ))}