import {createStore, combineReducers} from 'redux'
import TaskReducer from './reducer/TaskReducer'

const rootReducer=combineReducers({tasks: TaskReducer})

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store