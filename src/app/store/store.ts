import * as Actions from './actions';
import { Book, generateMap } from '../models/book.model';
import { sortStateBooks } from '../config/sort';
import { InventoryBook } from '../models/inventoryBook.model';

export interface State {
    books: Book[];
    selectedBook: Book;
    selectedInventoryBook: InventoryBook;
    requestedByPatronBooks: Book[];
    ongoingBooks: Book[];
    inventoryBooks: InventoryBook[];
    followUpBooks: Book[];
    awaitingDecisionBooks: Book[];
    missingBooks: Book[];
}

export const initialState: State = {
    books: [],
    selectedBook: null,
    selectedInventoryBook: null,
    requestedByPatronBooks: [],
    ongoingBooks: [],
    inventoryBooks: [],
    followUpBooks: [],
    awaitingDecisionBooks: [],
    missingBooks: [],
};

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
            return { ...state };
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

            return { ...state };
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
            return { ...state };
        }

        case Actions.ADD_BOOK: {
            const book = action.payload;
            generateMap(book);
            sortStateBooks(state);
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        }

        case Actions.ADD_BOOK_BULK: {
            const books = [], requestedByPatronBooks = [], ongoingBooks = [], followUpBooks = [],
                missingBooks = [], awaitingDecisionBooks = [];
            for (const book of action.payload) {
                generateMap(book);
                books.push(book);
                book.urlID = book.title.replace(/(\s|:\s)+/g, '-').toLowerCase();
                switch (book.searchStatus) {
                    case 'Not searched for yet':
                        requestedByPatronBooks.push(book);
                        break;
                    case 'Began searching':
                        ongoingBooks.push(book);
                        break;
                    case 'Found':
                        followUpBooks.push(book);
                        break;
                    case 'Delay searching':
                        missingBooks.push(book);
                        break;
                    case 'Stop searching':
                        awaitingDecisionBooks.push(book);
                        break;
                }
            }
            sortStateBooks(state);
            return {
                ...state,
                books,
                requestedByPatronBooks,
                ongoingBooks,
                followUpBooks,
                missingBooks,
                awaitingDecisionBooks
            };
        }

        case Actions.SELECT_BOOK: {
            return {
                ...state,
                selectedBook: action.payload || null
            };
        }

        case Actions.SELECT_INVENTORY_BOOK: {
            return {
                ...state,
                selectedInventoryBook: action.payload || null
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

        case Actions.LOAD_INVENTORY_ERROR:
        case Actions.RELOAD_BOOKS_ERROR: {
            alert('Problem loading. Try reloading the page!');
            return { ...state };
        }

        case Actions.ADD_INVENTORY_BOOKS: {
            state.inventoryBooks = [];
            for (const inventoryBook of action.payload) {
                state.inventoryBooks.push(inventoryBook);
            }
            state.inventoryBooks.sort((a, b) => {
                if (a.callNumber > b.callNumber) {
                    return 1;
                } else if (a.callNumber < b.callNumber) {
                    return -1;
                }
            });
            return { ...state };
        }

        default: return { ...state };
    }
}

export const getAllBooks = (state: State) => state.books;
export const getSelectedBook = (state: State) => state.selectedBook;
export const getRequestedByPatronBooks = (state: State) => state.requestedByPatronBooks;
export const getOngoingBooks = (state: State) => state.ongoingBooks;
export const getInventoryBooks = (state: State) => state.inventoryBooks;
export const getFollowUpBooks = (state: State) => state.followUpBooks;
export const getSearchedLocations = (state: State) => state && state.selectedBook ? state.selectedBook.searchedLocations : null;
export const getMissingBooks = (state: State) => state.missingBooks;
export const getAwaitingDecisionBooks = (state: State) => state.awaitingDecisionBooks;
export const searchedEverywhere = (state: State) => lookedEverywhere(state);
export const getSelectedInventoryBook = (state: State) => state.selectedInventoryBook;
