import React from 'react'
import Logobar from '../logobar/logobar'
import Navbar from '../navbar/navbar'
import { makeStyles } from '@material-ui/core'
import PoojaDlContainer from '../poojadlcontainer/poojadlcontainer'
import { Switch, Route } from 'react-router-dom'
import Provider from '../provider/provider'

const useStyles = makeStyles({
    root: {
        marginLeft: '20%',
        marginRight: '20%'
    }
})

export default function App() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Logobar/>
            <br/>
            <Navbar/>
            <br/>
            <Switch>
                <Route exact path="/" component={PoojaDlContainer}/>
                <Route exact path="/become-a-provider" component={Provider}/>
            </Switch>
        </div>
    )
}