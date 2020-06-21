import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Logobar() {
    return (
        <div align="center">
            <Typography variant="h2">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Distro</Link>
            </Typography>
            <Typography variant="body1">Stay connected</Typography>
        </div>
    )
}