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

import LocaleGlobal from '../lang/LocaleGlobal';
import LocaleAuth from '../modules/auth/LocaleAuth';
import LocaleUsers from '../modules/users/LocaleUsers';

export const Locale = [
    ...LocaleGlobal,
    ...LocaleAuth,
    ...LocaleUsers
];

export const Availability = ['id', 'en'];
