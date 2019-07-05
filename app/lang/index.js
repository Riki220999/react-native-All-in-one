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

import {Locale} from '../config/Language';
import {lang} from '../config/Platform';

function translator(key, unique) {
    if (key == null) {
        return '';
    }

    let langMap;

    if (unique == null) {
        langMap = Locale.findIndex(find => find.id === key);
    } else {
        langMap = Locale.findIndex(find => find.id === key && find.key === unique);
    }

    if (langMap >= 0 && Locale[langMap][lang()] !== undefined) {
        return Locale[langMap][lang()];
    }

    return key;
}

export default translator;
