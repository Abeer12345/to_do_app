import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditTask from './EditTask';
import { Link } from 'react-router-dom';
import AddTask from './AddTask';
import { deleteTask } from '../action/ActionTask';

import './style.css'

const FiltreTask = ({doneType}) => {
    const tasks = useSelector(state => state.tasks.TaskList)
    const tasksDone = tasks.filter(el => (el.isDone === doneType ))
    const dispatch = useDispatch()
    return (
        <div className='div_list'>
           
            {tasksDone.map(tsk =>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item >
                    <div> 
                            {tsk.title}
                            <i className="far fa-check-circle icones" name="isDone"  style={{ color: tasks.isDone ? "green" : "red" }} ></i>
                            <EditTask tasks={tsk} />
                            <i className="far fa-times-circle icones" onClick={()=>{dispatch(deleteTask(tsk.id))}}></i>
                        </div>

                    </ListGroup.Item>
                </ListGroup>
            )
            }
         <AddTask/>
           
        </div>
    )
}

export default FiltreTask





        

