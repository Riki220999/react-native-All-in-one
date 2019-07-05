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

import {SETSCREEN} from '../../config/Constants';

const initialState = {
    action: null,
    prevScreen: null,
    thisScreen: null
};

export function ReducerContainer(state = initialState, action) {
    switch (action.type) {
        case SETSCREEN:
            return {
                ...state,
                action: action.screen.action,
                prevScreen: action.screen.prevScreen,
                thisScreen: action.screen.thisScreen
            };

        default:
            return state;
    }
}
