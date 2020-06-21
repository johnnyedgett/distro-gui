import { TOGGLE_LOADING } from '../constants'

export function toggleLoading(loading) {
    return {
        type: TOGGLE_LOADING,
        loading: loading
    }
}