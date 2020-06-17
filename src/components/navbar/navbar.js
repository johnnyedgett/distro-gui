import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Toolbar, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    toolbar: {
        backgroundColor: '#61c9bf',
        height: '1%'
    }
})

function Navbar(props) {
    const classes = useStyles()
    return (
        <div>
            <Toolbar
                className={classes.toolbar}>
                    <Button variant="text">About</Button>
                    <div style={{ flex: 1 }}/>
                    <Button variant="text" onClick={() => props.history.push("/become-a-provider")}>Become a provider!</Button>
            </Toolbar>
        </div>
    )
}

export default withRouter(Navbar)