//Action Creator
export function openModal(movie) {
    //Action
    return {
        type: 'OPEN_MODAL',
        payload: movie
    }
}