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
import {TouchableOpacity, Text} from 'react-native';
import StyleButton from './StyleButton';

export const NormalButton = ({onPress, text, containerStyle, textStyle}) => (
    <TouchableOpacity
        onPress={onPress}
        style={[StyleButton.buttonContainer, StyleButton.normal, containerStyle]}>
        <Text style={[StyleButton.text, textStyle]}>
            {text.toUpperCase()}
        </Text>
    </TouchableOpacity>
);

export const DangerButton = ({onPress, text, containerStyle, textStyle}) => (
    <TouchableOpacity
        onPress={onPress}
        style={[StyleButton.buttonContainer, StyleButton.danger, containerStyle]}>
        <Text style={[StyleButton.text, textStyle]}>
            {text.toUpperCase()}
        </Text>
    </TouchableOpacity>
);
