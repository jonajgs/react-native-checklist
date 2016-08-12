export const PUSH = 'PUSH';
export function pushScene(scene) {
    return {
        type: PUSH,
        scene,
    };
}

export const POP = 'POP';
export function popScene() {
    return {
        type: POP,
    };
}

export const GO_TO_INDEX = 'GO_TO_INDEX';
export function goToIndex(index) {
    return {
        type: GO_TO_INDEX,
        index,
    };
}
