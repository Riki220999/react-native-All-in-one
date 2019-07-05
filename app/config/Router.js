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

import RouterAuth from '../modules/auth/RouterAuth';
import RouterUsers from '../modules/users/RouterUsers';

const modules = {
    ...RouterAuth,
    ...RouterUsers
};

const settings = {
    initialRouteName: 'AuthLoading',
    headerMode: 'none'
};

const exitAppWhiteListScreen = ['AuthLoading', 'Auth'];

export default {modules, settings, exitAppWhiteListScreen};
