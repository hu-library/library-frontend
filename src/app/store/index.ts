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
export const getRequestedByPatronBooks = createSelector(getStoreState, Store.getRequestedByPatronBooks);
export const getOngoingBooks = createSelector(getStoreState, Store.getOngoingBooks);
export const getInventoryBooks = createSelector(getStoreState, Store.getInventoryBooks);
export const getFollowUpBooks = createSelector(getStoreState, Store.getFollowUpBooks);
export const getAwaitingDecisionBooks = createSelector(getStoreState, Store.getAwaitingDecisionBooks);
export const getMissingBooks = createSelector(getStoreState, Store.getMissingBooks);
export const getSearchedLocations = createSelector(getStoreState, Store.getSearchedLocations);
export const lookedEverywhere = createSelector(getStoreState, Store.searchedEverywhere);
