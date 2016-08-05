import { AsyncStorage } from 'react-native';
import store from '../store';

export const MARK_AS_COMPLETE_TASK = 'MARK_AS_COMPLETE_TASK';
export function markAsComplete(taskId) {
    return {
        type: MARK_AS_COMPLETE_TASK,
        taskId,
    };
}

export const MARK_AS_UNCOMPLETE_TASK = 'MARK_AS_UNCOMPLETE_TASK';
export function markAsUncomplete(taskId) {
    return {
        type: MARK_AS_UNCOMPLETE_TASK,
        taskId,
    };
}

export const DELETE_TASK = 'DELETE_TASK';
export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        taskId,
    };
}

export const EDIT_TASK = 'EDIT_TASK';
export function editTask(taskId, newData) {
    return {
        type: EDIT_TASK,
        taskId,
        newData
    };
}

export const CREATE_TASK = 'CREATE_TASK';
export function createTask(task) {
    return {
        type: CREATE_TASK,
        task,
    };
}

export function saveTodo() {
    return dispatch => {
        AsyncStorage.setItem('@todos', JSON.stringify(store.getState()));
    }
}

export function getTodo() {
    return dispatch => {
        AsyncStorage
            .getItem('@todos')
            .then((results) => dispatch(setState(JSON.parse(results))));
    }
}

export const SET_STATE = 'SET_STATE';
function setState(state) {
    return {
        type: SET_STATE,
        state,
    };
}
