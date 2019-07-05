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
import {BackHandler, View, Alert, Platform} from 'react-native';
import {connect} from 'react-redux';
import Router from '../Router';
import RouterConfig from '../../config/Router';
import NavigationService from '../NavigationService';
import {setScreen} from './ActionContainer';
import _ from '../../lang';

import Styles from '../../styles';

class ViewContainer extends Component {
    state = {
        action: this.props.action,
        prevScreen: this.props.prevScreen,
        thisScreen: this.props.thisScreen
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.action === 'Navigation/NAVIGATE' || nextProps.action === 'Navigation/BACK') {
            return {action: nextProps.action, prevScreen: nextProps.prevScreen, thisScreen: nextProps.thisScreen};
        }

        return null;
    }

    componentDidUpdate() {
        if (this.state.action === 'Navigation/BACK') {
            const exitAppWhiteListScreen = RouterConfig
                .exitAppWhiteListScreen
                .indexOf(this.state.thisScreen);
            if (exitAppWhiteListScreen >= 0) {
                if (Platform.OS === 'ios') {
                    NavigationService.navigate(this.state.prevScreen);
                } else if (Platform.OS === 'android') {
                    Alert.alert('', _('Anda yakin ingin keluar aplikasi?'), [
                        {
                            text: _('Tidak'),
                            onPress: () => {
                                NavigationService.navigate(this.state.prevScreen);
                            }
                        }, {
                            text: _('Ya'),
                            onPress: () => {
                                BackHandler.exitApp();
                            }
                        }
                    ],);
                }
            }
        }
    }

    render() {
        return (
            <View style={Styles.Main.container}>
                <Router
                    ref={(ref) => {
                        NavigationService.setTopLevelNavigator(ref);
                    }}
                    onNavigationStateChange={(prevState, currentState, action) => {
                        if (action.type === 'Navigation/NAVIGATE' || action.type === 'Navigation/BACK') {
                            this
                                .props
                                .setScreen(
                                    {action: action.type, prevScreen: NavigationService.getRouteName(prevState), thisScreen: NavigationService.getRouteName(currentState)}
                                );
                        }
                    }}/>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {action: state.bootstrap.action, prevScreen: state.bootstrap.prevScreen, thisScreen: state.bootstrap.thisScreen}
);
const mapDispatchToProps = dispatch => ({
    setScreen: value => dispatch(setScreen(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
