import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ReloadBooksAction, RELOAD_BOOKS, ADD_BOOK_BULK,
    RELOAD_BOOKS_ERROR, LoadInventoryAction, LOAD_INVENTORY,
    LOAD_INVENTORY_ERROR, ADD_INVENTORY_BOOKS } from './actions';
import { HttpService } from '../services/http.service';

@Injectable()
export class AuthEffects {

    @Effect()
    reloadBooks$: Observable<Action> = this.actions$.pipe(
            ofType<ReloadBooksAction>(RELOAD_BOOKS),
        mergeMap(() =>
            this.http.getAllData().pipe(
                // If successful, dispatch success action with result
                map(data => ({ type: ADD_BOOK_BULK, payload: data })),
                // If request fails, dispatch failed action
                catchError(() => of({ type: RELOAD_BOOKS_ERROR }))
            )
        )
    );

    @Effect()
    loadInventoryBooks$: Observable<Action> = this.actions$.pipe(
        ofType<LoadInventoryAction>(LOAD_INVENTORY),
        mergeMap(() => this.http.getInventoryData().pipe(
            map(data => ({ type: ADD_INVENTORY_BOOKS, payload: data })),
            catchError(() => of({type: LOAD_INVENTORY_ERROR }))
        ))
    );

    constructor(private http: HttpService, private actions$: Actions) { }
}
