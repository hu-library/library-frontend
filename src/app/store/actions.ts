import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ORIGINAL_REQUEST = 'ORIGINAL_REQUEST';

export class LoginAction implements Action {
    readonly type = LOGIN;

    constructor() { }
}

export class LogoutAction implements Action {
    readonly type = LOGOUT;

    constructor() { }
}

export class OriginalRequestAction implements Action {
    readonly type = ORIGINAL_REQUEST;

    constructor(public payload: string) { }
}

export type Actions =
    LoginAction |
    LogoutAction |
    OriginalRequestAction;
