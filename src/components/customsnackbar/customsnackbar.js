import React from 'react'
import { toggleSnackbarInactive } from '../../redux/actions/snackbar-actions'
import { connect } from 'react-redux'
import { IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const mapStateToProps = state => {
    return {
        snackbar: state.snackbar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSnackbarInactive: () => dispatch(toggleSnackbarInactive())
    }
}
function CustomSnackbar(props){ 
    const handleClose = () => {
        props.toggleSnackbarInactive()
    }
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={props.snackbar.open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={props.snackbar.message}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
                />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomSnackbar)