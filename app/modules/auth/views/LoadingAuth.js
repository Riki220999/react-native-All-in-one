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
import {View, AsyncStorage} from 'react-native';
import MyStatusBar from '../../../components/my_status_bar';
import {LOGGEDIN} from '../ConfigAuth';
import LoadingModal from '../../../components/loading_modal';

const initialState = {
    showLoadingModal: false
};

class loading extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    async componentDidMount() {
        await this.setState({showLoadingModal: true});
        const condition = await AsyncStorage.getItem('condition');
        switch (condition) {
            case LOGGEDIN:
                await this.setState({showLoadingModal: false});
                this
                    .props
                    .navigation
                    .navigate('UserList');
                break;

            default:
                await this.setState({showLoadingModal: false});
                this
                    .props
                    .navigation
                    .navigate('SignIn');
                break;
        }
    }

    render() {
        return (
            <View>
                <MyStatusBar/>
                <LoadingModal show={this.state.showLoadingModal}/>
            </View>
        );
    }
}

export default loading;
