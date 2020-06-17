import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Logobar() {
    return (
        <div align="center">
            <Typography variant="h2">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Pooja DL</Link>
            </Typography>
            <Typography variant="body1">For all of your Pooja needs</Typography>
        </div>
    )
}