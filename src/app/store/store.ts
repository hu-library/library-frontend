import * as Actions from './actions';

export interface State {
    user: any;
    loggedIn: boolean;
    originalRequest: string;
    pageLoaded: boolean;
}

export const initialState: State = {
    user: null,
    loggedIn: null,
    originalRequest: null,
    pageLoaded: false,
};

export function reducer(state = initialState, action: Actions.Actions): State {
    switch (action.type) {
        case Actions.LOGIN: {
            return {
                ...state,
                loggedIn: true,
            };
        }

        case Actions.ORIGINAL_REQUEST: {
            return {
                ...state,
                originalRequest: action.payload
            };
        }

        case Actions.LOGOUT: {
            return {
                ...state,
                loggedIn: false
            };
        }

        default: return state;
    }
}

export const getIsLoggedIn = (state: State) => state.loggedIn;
export const getUserInfo = (state: State) => state.user;
export const getOriginalRequest = (state: State) => state.originalRequest;
export const getPageLoaded = (state: State) => state.pageLoaded;
