/*
 *  Dear Maintainer
 *	Author : Riki Setiyo Pambudi
 *	Email  : Setiyoriki589@gmail.com
 *
 *  This code is made with struggle,
 *  so optimize it and don't forget to give @copyright
 *	so that you are always appreciated
 *
 *  undeclared variable, error on line 0
 *
 */

import {AUTHFETCH, AUTHSUCCESS, AUTHFAILED} from './ConfigAuth';

const initialState = {
    fetch: false,
    send: null,
    res: null,
    err: null
};

export function ReducerAuth(state = initialState, action) {
    switch (action.type) {
        case AUTHFETCH:
            return {
                ...state,
                fetch: true,
                send: action.send,
                action: action.type
            };

        case AUTHSUCCESS:
            return {
                ...state,
                fetch: false,
                res: action.res,
                action: action.type
            };

        case AUTHFAILED:
            return {
                ...state,
                fetch: false,
                err: action.err,
                action: action.type
            };

        default:
            return state;
    }
}
