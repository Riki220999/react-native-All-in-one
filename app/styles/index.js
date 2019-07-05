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

import { StyleSheet } from 'react-native';
import Colors_ from './Colors';

const Colors = Colors_;

const Main = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: Colors.white,
  },
  appHeader: {
    backgroundColor: Colors.purple,
  },
  appHeaderTitle: {
    fontWeight: 'bold',
  },
});

export default {
  Colors,
  Main,
};
