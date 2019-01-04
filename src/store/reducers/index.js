import {combineReducers} from 'redux';

import dataUsers from './dataUsers.js';

export default combineReducers ({
    info: dataUsers
})