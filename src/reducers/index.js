import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import routineReducer from './routineReducer';

const reducers = combineReducers({
    todos: todoReducer,
    routines: routineReducer,
});

export default reducers;
