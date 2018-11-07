import * as Actions from './actions';
import { Book } from '../models/book.model';

export interface State {
    books: Book[];
    selectedBook: Book;
    requestedByPatronBooks: Book[];
    ongoingBooks: Book[];
    inventoryBooks: Book[];
    followUpBooks: Book[];
}

export const initialState: State = {
    books: [],
    selectedBook: null,
    requestedByPatronBooks: [],
    ongoingBooks: [],
    inventoryBooks: [],
    followUpBooks: []
};

export function reducer(state = initialState, action: Actions.Actions): State {
    switch (action.type) {
        case Actions.START_BOOK_SEARCH: {
            for (const book of state.books) {
                if (book.callNumber === action.payload) {
                    book.searchCount++;
                    book.searchedPreviously = true;
                    if (state.selectedBook.callNumber === action.payload) {
                        state.selectedBook = book;
                    }
                }
            }
            return state;
        }

        case Actions.STOP_BOOK_SEARCH: {
            for (const book of state.books) {
                if (book.callNumber === action.payload) {
                    book.searchStatus = 'Began searching';
                    if (state.selectedBook.callNumber === action.payload) {
                        state.selectedBook = book;
                    }
                }
            }

            return state;
        }

        case Actions.FOUND_BOOK: {
            for (const book of state.books) {
                if (book.callNumber === action.payload) {
                    book.searchStatus = 'Found';
                    if (state.selectedBook.callNumber === action.payload) {
                        state.selectedBook = book;
                    }
                }
            }

            return state;
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
                book.urlID = book.title.replace(/(\s|:\s)+/g, '-').toLowerCase();
                switch (book.searchStatus) {
                    case 'Not searched for yet':
                        state.requestedByPatronBooks.push(book);
                        break;
                    case 'Began searching':
                        state.ongoingBooks.push(book);
                        break;
                    case 'Found':
                        state.followUpBooks.push(book);
                        break;
                }
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
export const getRequestedByPatronBooks = (state: State) => state.requestedByPatronBooks;
export const getOngoingBooks = (state: State) => state.ongoingBooks;
export const getInventoryBooks = (state: State) => state.inventoryBooks;
export const getFollowUpBooks = (state: State) => state.followUpBooks;
