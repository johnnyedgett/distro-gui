import React from 'react'
import Logobar from '../logobar/logobar'
import Navbar from '../navbar/navbar'
import { Typography, makeStyles } from '@material-ui/core'
import PoojaDlContainer from '../poojadlcontainer/poojadlcontainer'
import CustomSnackbar from '../customsnackbar/customsnackbar'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import Provider from '../provider/provider'

const useStyles = makeStyles({
    root: {
        marginLeft: '20%',
        marginRight: '20%'
    }
})

function App(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CustomSnackbar/>
            <Logobar/>
            <br/>
            <Navbar/>
            <br/>
            <Switch>
                <Route exact path="/" component={PoojaDlContainer}/>
                <Route path="/become-a-provider" component={Provider}/>
                <Route component={() => {
                    return <div align="center">
                        <Typography variant="h3">404</Typography>
                        <Typography variant="body2">Not found - return <Link to="/">Home</Link></Typography>
                    </div>
                }}/>
            </Switch>
        </div>
    )
}

export default withRouter(App)