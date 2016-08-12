import { CREATE_ROUTINE, EDIT_ROUTINE, DELETE_ROUTINE } from './routineActions';

const initialState = {
    routines: [],
    lastCreated: 0,
};

export default function(state = initialState, action) {
    const index = state.routines.findIndex(routine => routine.id === action.routineId);
    switch (action.type) {
        case CREATE_ROUTINE:
            return {
                ...state,
                lastCreated: state.lastCreated + 1,
                routines: [
                    ...state.routines,
                    ...[{
                        ...action.routine,
                        id: state.lastCreated + 1,
                    }],
                ],
            };
        case DELETE_ROUTINE:
            return {
                ...state,
                routines: [
                    ...state.routines.slice(0, index),
                    ...state.routines.slice(index + 1),
                ],
            };
        case EDIT_ROUTINE:
            return {
                ...state,
                routines: [
                    ...state.routines.map(routine => {
                        if (routine.id === action.routineId) {
                            return {
                                ...routine,
                                ...action.routine,
                            };
                        }
                    }),
                ],
            };
        default:
            return state;
    }
}
