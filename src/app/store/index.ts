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

export const IsLoggedIn = createSelector(getStoreState, Store.getIsLoggedIn);
export const getUserInfo = createSelector(getStoreState, Store.getUserInfo);
export const getOriginalRequest = createSelector(getStoreState, Store.getOriginalRequest);
export const getPageLoaded = createSelector(getStoreState, Store.getPageLoaded);
