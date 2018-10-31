import * as Actions from './actions';
import { Book } from '../models/book.model';
import { startBooks } from '../models/initialStateBooks.temp';

export interface State {
    books: Book[];
    selectedBook: Book;
}

export const initialState: State = {
    books: startBooks,
    selectedBook: JSON.parse(localStorage.getItem('selectedBook'))
};

export function reducer(state = initialState, action: Actions.Actions): State {
    switch (action.type) {
        case Actions.START_BOOK_SEARCH: {
            for (const book of state.books) {
                if (book.id === action.payload) {
                    book.searchCount++;
                    book.searchedPreviously = true;
                }
            }
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
