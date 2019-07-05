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

import Bootstrap from '../bootstrap/container';
import {ReducerAuth} from '../modules/auth/ReducerAuth';
import {ReducerUsers} from '../modules/users/ReducerUsers';

export default {bootstrap: Bootstrap.Reducer, auth: ReducerAuth, user: ReducerUsers};
