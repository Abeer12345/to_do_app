import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateTask } from '../action/ActionTask';
import './style.css'


const EditTask = ({ tasks }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState({ id: tasks.id })
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const [isDone, setisDone] = useState(tasks.isDone)

    return (
        <>
            <i className="far fa-edit icones" onClick={handleShow}> </i>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <input type='text' name='title' onChange={handleChange} placeholder={tasks.title} ></input>
                        <i className="far fa-check-circle icone_done" name="isDone" onClick={() => setisDone(!isDone)} style={{ color: isDone ? "green" : "red" }} ></i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' placeholder={tasks.dec} name='dec' onChange={handleChange} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={() => {
                        dispatch(updateTask({ ...input, isDone }));
                        handleClose()
                        return
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditTask










