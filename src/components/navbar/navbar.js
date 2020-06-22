import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Toolbar, makeStyles, Typography, IconButton } from '@material-ui/core'
import { unsetUser } from '../../redux/actions/user-actions'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    toolbar: {
        backgroundColor: '#61c9bf',
        height: '1%'
    }
})

const mapStateToProps = state => {
    return {
        authenticated: state.user.authenticated,
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsetUser: () => dispatch(unsetUser())
    }
}

function Navbar(props) {
    useEffect(() => { console.log(props) }, [props])
    const classes = useStyles()

    const logout = () => {
        props.unsetUser()
    }

    const navoptions = () => {
        return props.authenticated?
        <div>
            <Typography variant="body1">Hello, {props.user.username}</Typography>
            <Button variant="text" onClick={logout}/>
        </div>:
        <div>
            <Button variant="text" onClick={() => props.history.push("/register")}>Register</Button>
            <Button variant="text" onClick={() => props.history.push("/login")}>Login</Button>
        </div>
    }

    return (
        <div>
            <Toolbar
                className={classes.toolbar}>
                    <Button variant="text" onClick={() => props.history.push("/about")}>About</Button>
                    <div style={{ flex: 1 }}/>
                    {navoptions()}
            </Toolbar>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))