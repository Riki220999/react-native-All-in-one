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

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Bootstrap from './app/bootstrap';

export default class Aplication extends Component {
    render() {
        return (
            <Provider store={Bootstrap.ReduxStore}>
                <PersistGate loading={null} persistor={Bootstrap.ReduxPersist}>
                    <Bootstrap.Container.View/>
                </PersistGate>
            </Provider>
        );
    }
}
