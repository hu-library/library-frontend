import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ReloadBooksAction, RELOAD_BOOKS, ADD_BOOK_BULK,
    RELOAD_BOOKS_ERROR, LoadInventoryAction, LOAD_INVENTORY,
    LOAD_INVENTORY_ERROR, ADD_INVENTORY_BOOKS } from './actions';
import { HttpService } from '../services/http.service';
import { flipBackendLocation } from '../config';

@Injectable()
export class AuthEffects {

    private firstTimeReloadBooks = true;
    private firstTimeInventoryBooks = true;

    @Effect()
    reloadBooks$: Observable<Action> = this.actions$.pipe(
            ofType<ReloadBooksAction>(RELOAD_BOOKS),
        mergeMap(() =>
            this.http.getAllData().pipe(
                // If successful, dispatch success action with result
                map(data => ({ type: ADD_BOOK_BULK, payload: data })),
                // If request fails, dispatch failed action
                catchError((error) => {
                    if (error && error.name === 'HttpErrorResponse' && this.firstTimeReloadBooks) {
                        this.firstTimeReloadBooks = false;
                        flipBackendLocation();
                        return of ({type: RELOAD_BOOKS});
                    }
                    return of({ type: RELOAD_BOOKS_ERROR });
                })
            )
        )
    );

    @Effect()
    loadInventoryBooks$: Observable<Action> = this.actions$.pipe(
        ofType<LoadInventoryAction>(LOAD_INVENTORY),
        mergeMap(() => this.http.getInventoryData().pipe(
            map(data => ({ type: ADD_INVENTORY_BOOKS, payload: data })),
            catchError((error) => {
                if (error && error.name === 'HttpErrorResponse' && this.firstTimeInventoryBooks) {
                    this.firstTimeInventoryBooks = false;
                    return of({type: LOAD_INVENTORY});
                }
                return of({type: LOAD_INVENTORY_ERROR });
            })
        ))
    );

    constructor(private http: HttpService, private actions$: Actions) { }
}
