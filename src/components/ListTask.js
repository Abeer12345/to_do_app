import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup,Button  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditTask from './EditTask';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../action/ActionTask';
import AddTask from './AddTask';
import './style.css'
import FiltreTask from './FiltreTask';


const ListTask = () => {
    const [doneType, setDoneType] = useState(false)
    const task = useSelector(state => state.tasks.TaskList)
    const dispatch = useDispatch()
    return (
        <div className='div_list'>
            {task.map(el =>
                <ListGroup as="ol" numbered >
                    <ListGroup.Item key={el.id} >
                        <div> 
                            {el.title}
                            <i className="far fa-check-circle icones" name="isDone"  style={{ color: el.isDone ? "green" : "red" }} ></i>
                            <EditTask tasks={el} />
                            <i className="far fa-times-circle icones" onClick={()=>{dispatch(deleteTask(el.id))}}></i>
                            
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            )
            }
            <div className='div_btn'>
             <Button variant="outline-success btn" onClick={()=>{setDoneType(true)}} >Tasks Done</Button>
             <Button variant="outline-danger btn" >Tasks Undone</Button>
            <AddTask/>
            </div>
           
        </div>
    )
}

export default ListTask

            

