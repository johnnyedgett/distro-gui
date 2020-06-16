import React from 'react'
import { Grid, Typography } from '@material-ui/core'

// Provider sign up page
export default function Provider() {
    return (
        <div>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography variant="h5">What is a <b>Provider?</b></Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">A provider is someone who can create and manage distribution lists. Become one today!</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="caption">For more information, please contact johnny.edgett@kioshq.com.</Typography>
                </Grid>
            </Grid>
        </div>
    )
}