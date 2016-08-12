export const CREATE_ROUTINE = 'CREATE_ROUTINE';
export function createRoutine(routine) {
    return {
        type: CREATE_ROUTINE,
        routine,
    };
}

export const EDIT_ROUTINE = 'EDIT_ROUTINE';
export function editRoutine(routineId, routine) {
    return {
        type: EDIT_ROUTINE,
        routineId,
        routine,
    };
}

export const DELETE_ROUTINE = 'DELETE_ROUTINE';
export function deleteRoutine(routineId) {
    return {
        type: DELETE_ROUTINE,
        routineId,
    };
}
