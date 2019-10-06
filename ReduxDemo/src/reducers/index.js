import {combineReducers} from 'redux';
import BookReducer from './bookReducer';
import selectedBookReducer from './selectedBookReducer';

export default combineReducers({
    books: BookReducer,
    selectedBook:selectedBookReducer
});