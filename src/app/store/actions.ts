import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';

export const START_BOOK_SEARCH = 'START_BOOK_SEARCH';
export const ADD_BOOK = 'ADD_BOOK';
export const ADD_BOOK_BULK = 'ADD_BOOK_BULK';
export const SELECT_BOOK = 'SELECT_BOOK';
export const STOP_BOOK_SEARCH = 'STOP_BOOK_SEARCH';
export const FOUND_BOOK = 'FOUND_BOOK';
export const SEARCHED_LOCATION = 'SEARCHED_LOCATION';

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

    constructor(public payload: Book) { }
}

export class SearchedLocationAction implements Action {
    readonly type = SEARCHED_LOCATION;

    constructor(public payload: number) { }
}

export type Actions =
    StartBookSearchAction |
    StopBookSearchAction |
    FoundBookAction |
    AddBookAction |
    AddBookBulkAction |
    SelectBookAction |
    SearchedLocationAction;
