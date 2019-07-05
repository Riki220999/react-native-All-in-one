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

import {all} from 'redux-saga/effects';
import LoadSagas from '../config/ReduxSaga';

export default function* reduxSaga() {
    yield all(LoadSagas);
}
