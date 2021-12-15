import React from 'react'
import { Form, Button,Modal } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../action/actionAdd';
import { v4 as uuid } from 'uuid'
// import { AddTask } from '../action/ActionTask';

const AddTask = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [dec, setdec] = useState('');
    const [title, settitle] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            id:uuid(),
            title,dec,
            isDone:false
        }))
        handleClose()
        
    }
    


    return (
        <div>

            <Button variant="outline-dark btn" onClick={handleShow}>Add A New Task</Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                    <Modal.Title>
                       ADD A NEW TASK
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Tilte</Form.Label>
                            <Form.Control type="text" placeholder="Task title" onChange={(e)=>settitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Descreption" onChange={(e)=>setdec(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handelSubmit}>
                            ADD
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>






        </div>
    )
}

export default AddTask
