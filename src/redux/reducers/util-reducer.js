import { TOGGLE_LOADING } from '../constants'

const initialState = {
    "loading": false
}

export default function snackbar(state = initialState, action){
    switch(action.type) {
        case TOGGLE_LOADING:
            return Object.assign({}, state, {
                "loading": action.loading
            })
        default:
            return state
    }
}