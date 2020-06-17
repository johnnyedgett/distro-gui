import React, { useState } from 'react'
import { Grid, Typography, FormControl, FormHelperText, Input, InputLabel, makeStyles, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
    input: {
        width: '150%',
        alignSelf: 'center'
    },
    inputLabel: {

    }
})
// Provider sign up page
function Provider(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [providerName, setProviderName] = useState("")

    const handleSubmit = () => {
        // TODO do some input validation and attempt to register the user
        // v placeholder v
        props.history.push("/")
    }

    const classes = useStyles()
    return (
        <div>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2} alignContent="center" >
                <Grid item>
                    <Typography variant="h5">What is a <b>Provider?</b></Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">A provider is someone who can create and manage distribution lists. Become one today!</Typography>
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
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="provider">Provider Name</InputLabel>
                        <Input id="provider" aria-describedby="provider-helper-text" className={classes.input}
                            value={providerName} onChange={(e) => setProviderName(e.target.value)}/>
                        <FormHelperText id="provider-helper-text">Provider Name</FormHelperText>
                    </FormControl>
                </Grid>
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

export default withRouter(Provider)