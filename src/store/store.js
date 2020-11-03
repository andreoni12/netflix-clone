import { createStore, combineReducers } from 'redux';
import openModalReducer from './OpenModal/OpenModal.reducer';

const rootReducer = combineReducers({
    openModal: openModalReducer
});

const store = createStore(rootReducer);

export default store;