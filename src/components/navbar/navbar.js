import React from 'react'
import { Button, Toolbar, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    toolbar: {
        backgroundColor: '#61c9bf',
        height: '1%'
    }
})

export default function Navbar() {
    const classes = useStyles()
    return (
        <div>
            <Toolbar
                className={classes.toolbar}>
                    <Button variant="text">About</Button>
                    <div style={{ flex: 1 }}/>
                    <Button variant="text">Become a provider!</Button>
            </Toolbar>
        </div>
    )
}