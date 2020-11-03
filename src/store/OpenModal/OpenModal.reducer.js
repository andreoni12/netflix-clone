export default function (state = {}, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return action.payload;
        default:
            return state;
    }
}