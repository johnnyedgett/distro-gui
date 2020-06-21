import React, { useState } from 'react'
import { Button, Grid, Typography, FormControl, InputLabel, Input, FormHelperText, makeStyles } from '@material-ui/core'
import Axios from 'axios'
import { toggleLoading } from '../../redux/actions/util-actions'
import { connect } from 'react-redux'
import isEmpty from 'lodash.isempty'

const useStyles = makeStyles({
    input: {
        width: '150%',
        alignSelf: 'center'
    },
    inputLabel: {

    }
})

const mapDispatchToProps = dispatch => {
    return {
        toggleLoading: (status) => dispatch(toggleLoading(status))
    }
}
function Register(props){
    const classes = useStyles()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const handleSubmit = () => {
        props.toggleLoading(true)
        Axios.post("/api/auth/register", {
            "username": email,
            "password": password
        })
            .then(res => {
                props.toggleLoading(false)
                console.log(res.data)
            })
            .catch(err => {
                props.toggleLoading(false)
                setError("There was an error registering. Please check try again.")
            })
    }

    return (
        <div>
        <Grid container direction="column" justify="center" alignItems="center" spacing={2} alignContent="center" >
            <Grid item>
                <Typography variant="h5">Create Account</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body2">An account will allow you to create manage organizations and distribution lists, as well as subscribe to other lists yourself!</Typography>
            </Grid>
            <Grid item>
                <FormControl>
                    {/* TODO: Visual bug, not centered after increasing input width */}
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" aria-describedby="email-helper-text" type="email" className={classes.input} 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" aria-describedby="password-helper-text" type="password" className={classes.input}
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <FormHelperText id="password-helper-text">8+ Characters</FormHelperText>
                </FormControl>
            </Grid>
            {
            isEmpty(error)?
                <></>:
                <Grid item>
                    <Typography variant="caption">
                        <div style={{ color: 'red' }}>
                            {error}
                        </div>
                    </Typography>
                </Grid>
            }
            <Grid item>
                <Button
                    onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
            <Grid item>
                <Typography variant="caption">For more information, please contact johnny.edgett@kioshq.com.</Typography>
            </Grid> 
        </Grid>
    </div>
    )
}

export default connect(null, mapDispatchToProps)(Register)