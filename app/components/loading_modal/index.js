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

import React from 'react';
import {View, Modal, Animated, Easing} from 'react-native';
import StyleLoadingModal from './StyleLoadingModal';
import Loading from '../../assets/images/loading.png';

class LoadingModal extends React.Component {
    spinValue = new Animated.Value(0);

    componentDidMount() {
        this.spin();
    }

    spin() {
        this
            .spinValue
            .setValue(0);
        Animated
            .timing(this.spinValue, {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            },)
            .start(() => this.spin());
    }

    render() {
        const spin = this
            .spinValue
            .interpolate({
                inputRange: [
                    0, 1
                ],
                outputRange: ['0deg', '-360deg']
            });
        return (
            <Modal
                animationType="fade"
                transparent="transparent"
                visible={this.props.show}
                onRequestClose={() => {}}>
                <View style={StyleLoadingModal.container}>
                    <Animated.Image
                        style={[
                            StyleLoadingModal.loading, {
                                transform: [
                                    {
                                        rotate: spin
                                    }
                                ]
                            }
                        ]}
                        source={Loading}/>
                </View>
            </Modal>
        );
    }
}

export default LoadingModal;
