import { TOGGLE_SNACKBAR_ACTIVE, TOGGLE_SNACKBAR_INACTIVE } from '../constants'

export function toggleSnackbarActive(message) {
    return {
        type: TOGGLE_SNACKBAR_ACTIVE,
        message: message
    }
}

export function toggleSnackbarInactive() {
    return {
        type: TOGGLE_SNACKBAR_INACTIVE
    }
}