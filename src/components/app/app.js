import React from 'react'
import Logobar from '../logobar/logobar'
import Navbar from '../navbar/navbar'
import { Typography, makeStyles, Backdrop, CircularProgress } from '@material-ui/core'
import DlContainer from '../dlcontainer/dlcontainer'
import CustomSnackbar from '../customsnackbar/customsnackbar'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
// import Provider from '../provider/provider'
import Login from '../login/login'
import Register from '../register/register'
import About from '../about/about'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    root: {
        marginLeft: '20%',
        marginRight: '20%'
    }
}));

const mapStateToProps = state => {
    return {
        util: state.util
    }
}

function App(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Backdrop className={classes.backdrop} open={props.util.loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <CustomSnackbar/>
            <Logobar/>
            <br/>
            <Navbar/>
            <br/>
            <Switch>
                <Route exact path="/" component={DlContainer}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/about" component={About}/>
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

export default connect(mapStateToProps, null)(withRouter(App))