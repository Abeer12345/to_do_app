import { DELETETASK, UPDATETASK } from "./actionTyes"

export const updateTask = (tasks) => {
    return {
        type: UPDATETASK,
        payload: tasks
    }
}

export const deleteTask =(id)=>{
    return{
        type: DELETETASK,
        payload:id 
    }
}