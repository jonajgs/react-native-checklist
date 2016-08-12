import { PUSH, POP, GO_TO_INDEX } from './navigationActions';

const initialState = {
    index: 0,
    routes: [
        {
            name: 'MIS TODOS',
            id: 0,
            component: TodoList,
        },
    ],
};

export default function(state = initialState, action) {
    const len = state.routes.length;
    switch (action.type) {
        case PUSH:
            return {
                ...state,
                index: state.index + 1,
                routes: [
                    ...state.routes,
                    ...[{
                        ...action.scene,
                        id: state.index + 1,
                    }],
                ],
            };
        case POP:
            return {
                ...state,
                index: state.routes[len - 1].index,
                routes: [
                    ...state.routes.slice(0, len - 1),
                ],
            };
        case GO_TO_INDEX:
            return {
                ...state,
                index: action.index,
                routes: [
                    ...state.routes.slice(0, action.index),
                ],
            };
        default:
            return state;
    }
}
