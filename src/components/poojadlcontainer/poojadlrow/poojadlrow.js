import React, {useState} from 'react'
import axios from 'axios'
import { TableCell, Button, TableRow, Chip,
Collapse, Box, TextField, RadioGroup, FormLabel, FormControl, FormControlLabel, Radio, Grid, Typography, makeStyles, Backdrop, CircularProgress } from '@material-ui/core'
import { connect } from 'react-redux';
import { toggleSnackbarActive } from '../../../redux/actions/snackbar-actions'

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const mapStateToProps = state => {
    return {
        snackbar: state.snackbar
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleSnackbarActive: (message) => dispatch(toggleSnackbarActive(message))
    }
}

function PoojaDlRow(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [contactType, setContactType] = useState("SMS")

    const [triedToSubmit, setTiredToSubmit] = useState(false)
    const [isSubmitRegistration, setIsSubmitRegistration] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const categoryChips = props.categories.map((category, index) => <Chip label={category} key={index}/>)

    const createSubscription = () => {
        setIsSubmitRegistration(true)
        setTiredToSubmit(true)

        const data = {
            "phoneNumber": phoneNumber,
            "emailAddress": ""
        }

        axios.post("/api/subscription/create?poojadl=" + props.id, data)
            .then(res => {
                if(res.data){
                    setIsSubmitRegistration(false)
                    setIsSuccess(true)
                    setOpen(false)
                    props.toggleSnackbarActive("Successfully subscribed to " + props.dlName + "!")
                }
            })
            .catch(err=> {
                setIsSubmitRegistration(false)
                setIsSuccess(false)
            })
    }

    return (
        <>
            <Backdrop className={classes.backdrop} open={isSubmitRegistration}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <TableRow key={props.index}>
                <TableCell><Typography variant="body1">{props.dlName}</Typography></TableCell>
                <TableCell>
                    {/* <Chip label="Basic"/> */}
                    {categoryChips}
                </TableCell>
                <TableCell>
                    {triedToSubmit && isSuccess?
                        <Typography variant="body2">Subscribed!</Typography>
                    :
                    <Button variant="text" onClick={() => setOpen(!open)}>
                        {open?"Close":"Sign up!"}
                    </Button>}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Grid container alignItems="center" spacing={2} align="center" justify="center" direction="column">
                                <Grid item>
                                    <Typography> Phone Number:</Typography>
                                </Grid>
                                <Grid item >
                                    <TextField
                                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                                        id="phone" 
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder="Phone Number"/>
                                </Grid>
                                <Grid item>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Type</FormLabel>
                                        <RadioGroup aria-label="type" name="type1" value={contactType} onChange={(e) => setContactType(e.target.value)}>
                                            <FormControlLabel value="SMS" control={<Radio />} label="SMS" />
                                            <FormControlLabel value="Whatsapp" control={<Radio />} label="Whatsapp" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption">Standard messaging rates may apply.</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" onClick={createSubscription}>
                                        Submit!
                                    </Button>
                                </Grid>
                            </Grid>
                            {triedToSubmit? 
                                !isSuccess && !isSubmitRegistration?(<div align="center">There was an error! Try again later.</div>):<div/>:<div/>}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PoojaDlRow)