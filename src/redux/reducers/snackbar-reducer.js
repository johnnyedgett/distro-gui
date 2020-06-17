import { TOGGLE_SNACKBAR_ACTIVE, TOGGLE_SNACKBAR_INACTIVE } from '../constants'

const initialState = {
    "open": false,
    "message": ""
}

export default function snackbar(state = initialState, action){
    switch(action.type) {
        case TOGGLE_SNACKBAR_ACTIVE:
            return Object.assign({}, state, {
                "open": true,
                "message": action.message
            })
        case TOGGLE_SNACKBAR_INACTIVE:
            return Object.assign({}, state, {
                "open": false,
                "message": ""
            })
        default:
            return state
    }
}