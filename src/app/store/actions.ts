import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';
import { PostRequest } from '../models/postRequest.model';
import { SearchLocation } from '../models/searchLocation.type';
import { InventoryBook } from '../models/inventoryBook.model';

export const START_BOOK_SEARCH = 'START_BOOK_SEARCH';
export const ADD_BOOK = 'ADD_BOOK';
export const ADD_BOOK_BULK = 'ADD_BOOK_BULK';
export const SELECT_BOOK = 'SELECT_BOOK';
export const STOP_BOOK_SEARCH = 'STOP_BOOK_SEARCH';
export const FOUND_BOOK = 'FOUND_BOOK';
export const SEARCHED_LOCATION = 'SEARCHED_LOCATION';
export const SAVE_SEARCHED_LOCATION = 'SAVE_SEARCHED_LOCATION';
export const RELOAD_BOOKS = 'RELOAD_BOOKS';
export const RELOAD_BOOKS_ERROR = 'RELOAD_BOOKS_ERROR';
export const LOAD_INVENTORY = 'LOAD_INVENTORY';
export const LOAD_INVENTORY_ERROR = 'LOAD_INVENTORY_ERROR';
export const ADD_INVENTORY_BOOKS = 'ADD_INVENTORY_BOOKS';
export const SELECT_INVENTORY_BOOK = 'SELECT_INVENTORY_BOOK';

export class StartBookSearchAction implements Action {
    readonly type = START_BOOK_SEARCH;

    constructor(public payload: string) { }
}

export class StopBookSearchAction implements Action {
    readonly type = STOP_BOOK_SEARCH;

    constructor(public payload: string) { }
}

export class FoundBookAction implements Action {
    readonly type = FOUND_BOOK;

    constructor(public payload: string) { }
}

export class AddBookAction implements Action {
    readonly type = ADD_BOOK;

    constructor(public payload: Book) { }
}

export class AddBookBulkAction implements Action {
    readonly type = ADD_BOOK_BULK;

    constructor(public payload: Book[]) { }
}

export class SelectBookAction implements Action {
    readonly type = SELECT_BOOK;

    constructor(public payload?: Book) { }
}

export class SelectInventoryBookAction implements Action {
    readonly type = SELECT_INVENTORY_BOOK;

    constructor(public payload?: InventoryBook) { }
}

export class SearchedLocationAction implements Action {
    readonly type = SEARCHED_LOCATION;

    constructor(public payload: SearchLocation) { }
}

export class SaveSearchedLocationsAction implements Action {
    readonly type = SAVE_SEARCHED_LOCATION;

    constructor(public payload: PostRequest) { }
}

export class ReloadBooksAction implements Action {
    readonly type = RELOAD_BOOKS;

    constructor() { }
}

export class ReloadBooksErrorAction implements Action {
    readonly type = RELOAD_BOOKS_ERROR;

    constructor() { }
}

export class LoadInventoryAction implements Action {
    readonly type = LOAD_INVENTORY;

    constructor() {}
}

export class LoadInventoryErrorAction implements Action {
    readonly type = LOAD_INVENTORY_ERROR;

    constructor() {}
}

export class AddInventoryBooksAction implements Action {
    readonly type = ADD_INVENTORY_BOOKS;

    constructor(public payload: InventoryBook[]) {}
}

export type Actions =
    StartBookSearchAction |
    StopBookSearchAction |
    FoundBookAction |
    AddBookAction |
    AddBookBulkAction |
    SelectBookAction |
    SearchedLocationAction |
    SaveSearchedLocationsAction |
    ReloadBooksAction |
    ReloadBooksErrorAction |
    LoadInventoryAction |
    LoadInventoryErrorAction |
    AddInventoryBooksAction |
    SelectInventoryBookAction;
