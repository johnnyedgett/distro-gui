import { combineReducers } from 'redux'
import snackbar from './snackbar-reducer'
import util from './util-reducer'
import user from './user-reducer'

export default combineReducers({
    util,
    snackbar,
    user
})