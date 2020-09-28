import React from 'react'
import { useEffect, useDispatch } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { getCourses } from '../actions';

export default function CourseCard(props) {
   const { courses } = props

//    const dispatch = useDispatch()

   console.log(courses)
    
   console.log(courses.name)
    return (
        <div>
            {courses.map((course) => (

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>{course.subject}</Card.Text>
                    <Button variant="primary">View Lessons</Button>
                </Card.Body>
                </Card>

            ))}
        
        </div>
    )
}
