import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ReloadBooksAction, RELOAD_BOOKS, ADD_BOOK_BULK } from './actions';
import { Book } from '../models/book.model';

@Injectable()
export class AuthEffects {
    // Listen for the 'LOGIN' action
    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
            ofType<ReloadBooksAction>(RELOAD_BOOKS),
        mergeMap(action =>
            this.http.get<Book[]>('http://localhost:8000/').pipe(
                // If successful, dispatch success action with result
                map(data => ({ type: ADD_BOOK_BULK, payload: data })),
                // If request fails, dispatch failed action
                catchError(() => of({ type: 'LOGIN_FAILED' }))
            )
        )
    );

    constructor(private http: HttpClient, private actions$: Actions) { }
}
