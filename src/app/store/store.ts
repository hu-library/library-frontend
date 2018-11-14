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
    followUpBooks: [],
};

function generateMap(): Map<number, boolean> {
    const map = new Map<number, boolean>();
    for (let i = 0; i < 9; i++) {
        map.set(i, false);
    }
    return map;
}

function lookedEverywhere(state: State) {
    if (state && state.selectedBook && state.selectedBook.searchedLocations) {
        state.selectedBook.searchedLocations.forEach((value) => {
            if (value === false) { return false; }
        });
        return true;
    }
    return false;
}

export function reducer(state = initialState, action: Actions.Actions): State {
    switch (action.type) {
        case Actions.START_BOOK_SEARCH: {
            for (const book of state.books) {
                if (book.callNumber === action.payload) {
                    book.searchCount++;
                    book.searchedPreviously = true;
                    book.searchStatus = 'Began searching';
                    state.selectedBook = book;
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
            const book = action.payload;
            book.searchedLocations = generateMap();
            return {
                ...state,
                books: [...state.books, action.payload ]
            };
        }

        case Actions.ADD_BOOK_BULK: {
            const books = state.books;
            for (const book of action.payload) {
                book.searchedLocations = generateMap();
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

        case Actions.SEARCHED_LOCATION: {
            const newMap = state.selectedBook.searchedLocations;
            newMap.set(action.payload, !newMap.get(action.payload));
            return {
                ...state,
                selectedBook: {
                    ...state.selectedBook,
                    searchedLocations: newMap
                }
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
export const getSearchedLocations = (state: State) => state.selectedBook.searchedLocations;
export const searchedEverywhere = (state: State) => lookedEverywhere(state);
