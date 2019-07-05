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

import {createAppContainer, createStackNavigator} from 'react-navigation';
import RouterConfig from '../config/Router';

const AppNavigator = createStackNavigator(
    RouterConfig.modules,
    RouterConfig.settings
);
export default createAppContainer(AppNavigator);
