import * as Actions from './actions';
import { Book } from '../models/book.model';

export interface State {
    books: Book[];
    selectedBook: Book;
}

export const initialState: State = {
    books:
    [
        { id: 'BV2061.3 .S2564 2001',        searching: 'Began searching'},
        { id: 'RC440 .F58 2014',             searching: 'Began searching'},
        { id: 'BS2655.S6 M33 1988',          searching: 'Found'},
        { id: 'BestSell RC394.C7 L37 2015', searching: 'Not searched for yet'}
    ],
    selectedBook: null
};

export function reducer(state = initialState, action: Actions.Actions): State {
    switch (action.type) {
        case Actions.START_BOOK_SEARCH: {
            return {
                ...state
            };
        }

        case Actions.ADD_BOOK: {
            return {
                ...state,
                books: [...state.books, action.payload ]
            };
        }

        case Actions.ADD_BOOK_BULK: {
            const books = state.books;
            for (const book of action.payload) {
                books.push(book);
            }
            return {
                ...state,
                books
            };
        }

        case Actions.SELECT_BOOK: {
            localStorage.setItem('selectedBook', JSON.stringify(action.payload));
            return {
                ...state,
                selectedBook: action.payload
            };
        }

        default: return state;
    }
}

export const getAllBooks = (state: State) => state.books;
export const getSelectedBook = (state: State) => state.selectedBook;
