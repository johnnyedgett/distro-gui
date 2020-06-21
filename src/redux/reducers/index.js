import { combineReducers } from 'redux'
import snackbar from './snackbar-reducer'
import util from './util-reducer'

export default combineReducers({
    util,
    snackbar
})