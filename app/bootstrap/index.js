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

import Container_ from './container';
import ReduxStore_ from './ReduxStore';
import NavigationService from './NavigationService';

const Container = Container_;
const ReduxStore = ReduxStore_.store;
const ReduxPersist = ReduxStore_.persistor;
const Navigate = NavigationService.navigate;

export default {Container, ReduxStore, ReduxPersist, Navigate};
