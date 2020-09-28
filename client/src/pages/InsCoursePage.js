import React, { useEffect } from 'react'
import CourseCard from "../Components/CourseCard"
import AppNavbar from "../Components/AppNavbar"
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../actions';


export default function InsCoursePage() {
    const dispatch = useDispatch();

    const [courses, error, authObj] = useSelector((gState) => [
       gState.courses,
       gState.error,
       gState.authObj
       
      ]);
      console.log(courses)
      console.log(courses)

      useEffect(() => {
        dispatch(getCourses());
      },[]);
    
    

    return (

        <div className="container-fluid">
                <AppNavbar/>
                <h3>Courses</h3>
                <CourseCard courses={courses} />
        </div>
        

    )
}

