import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';

export const START_BOOK_SEARCH = 'START_BOOK_SEARCH';
export const ADD_BOOK = 'ADD_BOOK';
export const ADD_BOOK_BULK = 'ADD_BOOK_BULK';

export class StartBookSearchAction implements Action {
    readonly type = START_BOOK_SEARCH;

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

export type Actions =
    StartBookSearchAction |
    AddBookAction |
    AddBookBulkAction;
