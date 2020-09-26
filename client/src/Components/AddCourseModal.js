import React from 'react'
import { useDispatch } from react-redux
import { addCourses } from "../actions"
import { Modal } from 'react-bootstrap';


export default function AddCourseModal() {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
       <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
               <Modal.Title>New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            






            </Modal.Body>
            <Modal.Footer></Modal.Footer>

       </Modal>





    )
}
