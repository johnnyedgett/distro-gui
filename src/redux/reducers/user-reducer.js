import { SET_USER, UNSET_USER } from '../constants'

const initialState = {
    "authenticated": false,
    "user": {}
}

export default function user(state = initialState, action) {
    switch(action.type){
        case SET_USER:
            return Object.assign({}, state, {
                "authenticated": true,
                "user": action.user
            })
        case UNSET_USER:
            return Object.assign({}, state, {
                "authenticated": false,
                "user": {}
            })
        default:
            return state;
    }
}