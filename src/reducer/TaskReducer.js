import React from 'react'
import { v4 as uuid } from 'uuid'
import { UPDATETASK,ADDTASK, DELETETASK } from '../action/actionTyes'

const initialState = {
    TaskList: [
        {
            id: uuid(),
            title: 'checkpoint React',
            dec: 'Using API ',
            isDone: true
        },

       { id: uuid(),
        title: 'checkpoint Redux',
        dec: 'create a ToDo Application ',
        isDone: false
    },
    {
        id: uuid(),
        title: 'checkpoint Api',
        dec: 'Using API ',
        isDone: false
    }
    ]
}

const TaskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATETASK:
            return { ...state, TaskList: state.TaskList.map(el => el.id === payload.id ? { ...payload } : el) }
        case ADDTASK:
            return{...state,TaskList:[...state.TaskList,payload]}
        case DELETETASK :
            return {...state,TaskList:[state.TaskList.filter(tk=>tk.id !== payload)]}

        default:
            return state;
    }

}

export default TaskReducer
