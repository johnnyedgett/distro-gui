import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PoojaDlRow from './poojadlrow/poojadlrow'
import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper} from '@material-ui/core'



export default function PoojaDlContainer(props){ 
    const [poojaRows, setPoojaRows] = useState([])
    const [poojaJsx, setPoojaJsx] = useState(<TableRow/>)

    useEffect(() => {
        axios.get("/api/poojadl/all")
            .then(res => {
                setPoojaRows(res.data)
            })
    }, [])

    useEffect(() => {
        setPoojaJsx(poojaRows.map((row, index) => <PoojaDlRow key={index} {...row}/> ))
    }, [poojaRows])
    

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Categories</TableCell>
                        <TableCell>Sign up</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {poojaJsx}
                </TableBody>
            </Table>
        </TableContainer>
    )
}