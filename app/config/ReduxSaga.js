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

import {
    watcherAuth
}
from '../modules/auth/SagaAuth' 
import {
    watcherUser
}
from '../modules/users/SagaUsers' 
export default [...watcherAuth, ...watcherUser,];