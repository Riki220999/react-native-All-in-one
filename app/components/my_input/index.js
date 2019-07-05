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
import {TextInput} from 'react-native';
import StyleMyInput from './StyleMyInput';

const MyInput = ({
    style,
    ...props
}) => (
    <TextInput
        underlineColorAndroid="transparent"
        style={[StyleMyInput, style]}
        {...props}/>
);

export default MyInput;
