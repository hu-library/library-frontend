import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SAVE_SEARCHED_LOCATION, SaveSearchedLocationsAction } from './actions';

@Injectable()
export class AuthEffects {
    // Listen for the 'LOGIN' action
    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType<SaveSearchedLocationsAction>(SAVE_SEARCHED_LOCATION),
        mergeMap(action =>
            this.http.post('/auth', action.payload).pipe(
                // If successful, dispatch success action with result
                map(data => ({ type: 'LOGIN_SUCCESS', payload: data })),
                // If request fails, dispatch failed action
                catchError(() => of({ type: 'LOGIN_FAILED' }))
            )
        )
    );

    constructor(private http: HttpClient, private actions$: Actions) { }
}
