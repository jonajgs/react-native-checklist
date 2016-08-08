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
    const index = state.tasks.findIndex(task => task.id === action.taskId);
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
                    ...state.tasks.map(task => {
                        if (task.id === action.taskId) {
                            return {
                                ...task,
                                ...action.newData,
                            };
                        }
                        return task;
                    }),
                ],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, index),
                    ...state.tasks.slice(index + 1),
                ],
            };
        case MARK_AS_COMPLETE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.map(task => {
                        if (task.id === action.taskId) {
                            return {
                                ...task,
                                complete: true,
                            };
                        }
                        return task;
                    }),
                ],
            };
        case MARK_AS_UNCOMPLETE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.map(task => {
                        if (task.id === action.taskId) {
                            return {
                                ...task,
                                complete: false,
                            };
                        }
                        return task;
                    }),
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
