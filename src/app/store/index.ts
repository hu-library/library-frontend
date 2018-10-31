import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as Store from './store';

export interface State {
    store: Store.State;
}

export const reducers: ActionReducerMap<State> = {
    store: Store.reducer
};

export const getStoreState = (state: State) => state.store;

export const getAllBooks = createSelector(getStoreState, Store.getAllBooks);
export const getSelectedBook = createSelector(getStoreState, Store.getSelectedBook);
