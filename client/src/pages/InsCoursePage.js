import React, { useEffect } from 'react'
import CourseCard from "../Components/CourseCard"
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../actions';

export default function InsCoursePage() {
    const dispatch = useDispatch();

    const [courses, error] = useSelector((gState) => [
       gState.courses,
       gState.error
      ]);

      console.log(courses)
      useEffect(() => {
        dispatch(getCourses());
      }, [courses]);


    return (

        <div className="container-fluid">
                <h3>Courses</h3>
                <CourseCard courses={courses}/>
        </div>
        

    )
}

