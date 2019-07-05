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

import {combineReducers} from 'redux';
import LoadReducers from '../config/ReduxReducer';

const reduxReducer = combineReducers(LoadReducers);

// const rootReducer = (state, action) => {   return reduxReducer(state, action)
// }

export default reduxReducer;
