import {
    MARK_AS_COMPLETE_TASK,
    MARK_AS_UNCOMPLETE_TASK,
    EDIT_TASK,
    CREATE_TASK,
    DELETE_TASK,
    SET_STATE,
} from './todoActions';

const initialState = {
    tasks: [],
    lastCreated: 0,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                lastCreated: state.lastCreated + 1,
                tasks: [
                    ...state.tasks,
                    ...[{
                        ...action.task,
                        id: state.lastCreated + 1,
                    }],
                ],
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter(task => task.id < action.taskId),
                    ...[{
                        ...state.tasks.find(filter => task.id === action.taskId),
                        ...action.newData,
                    }],
                    ...state.tasks.filter(task => task.id > action.taskId),
                ],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter(task => task.id !== action.taskId),
                ],
            };
        case MARK_AS_COMPLETE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter(task => task.id < action.taskId),
                    ...[{
                        ...state.tasks.find(task => task.id === action.taskId),
                        complete: true,
                    }],
                    ...state.tasks.filter(task => task.id > action.taskId),
                ],
            };
        case MARK_AS_UNCOMPLETE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter(task => task.id < action.taskId),
                    ...[{
                        ...state.tasks.find(task => task.id === action.taskId),
                        complete: false,
                    }],
                    ...state.tasks.filter(task => task.id > action.taskId),
                ],
            };
        case SET_STATE:
            return {
                ...state,
                ...action.state,
            };
        default:
            return state;
    }
}
