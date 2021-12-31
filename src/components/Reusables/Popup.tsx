import { Alert, AlertColor, Snackbar } from '@mui/material'
import React, { Fragment } from 'react'

interface propsInterface {
    open:boolean
    onClose:any,
    message:string

}

const  Popup = ({open,onClose,message}:propsInterface) =>  {
    const vertical = 'top'
    const horizontal = 'center'
    return (
        <Fragment>
            <Snackbar  
             anchorOrigin={{ vertical, horizontal }}
             open={open}
             onClose={onClose}
             key={vertical+ horizontal}
             autoHideDuration={6000}
            >
            <Alert onClose={onClose} severity= 'success'>{message}</Alert>
            </Snackbar>
        </Fragment>
    )
}

export default Popup
