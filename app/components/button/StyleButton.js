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

import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
    buttonContainer: {
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 36,
        elevation: 2
    },
    normal: {
        backgroundColor: Colors.purple
    },
    danger: {
        backgroundColor: Colors.maroon
    },
    text: {
        fontSize: 14,
        color: Colors.white
    }
});
