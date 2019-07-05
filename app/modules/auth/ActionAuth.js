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

export const authFetch = value => ({type: AUTHFETCH, send: value});
export const authSuccess = value => ({type: AUTHSUCCESS, res: value});
export const authFailed = value => ({type: AUTHFAILED, err: value});
