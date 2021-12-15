import { ADDTASK } from "./actionTyes"

export const addTask = (tasks) => {
    return {
        type: ADDTASK,
        payload: tasks
    }
}