import { AlertColor, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { Cat } from '../../ReduxStore/cats/Interface'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import localStorageHelpers from '../../helpers/localStoreHelper';
import Popup from './Popup';

const Cards = ({id,url,name,description}:Cat) => {
    const [open, setOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [severity, setSeverity] = useState<AlertColor>()
    const handleLikeClick = (id?:number,url?:string,name?:string,description?:string) => {
        const data = {
            id,url,name,description
        }
        // SaveDataToLocalStorage(data)
        localStorageHelpers.SaveDataToLocalStorage(data)
        setOpen(true)
        setMessage(`You like ${name}`)
        setSeverity('success')
    }
    const handleDisLikeClick = (id?:number,url?:string,name?:string,description?:string) => {
        const data = {
            id,url,name,description
        }
        // remove data from local storage
        localStorageHelpers.removeDatafromLocalStorage(data)
        setOpen(true)
        setMessage(`You dislike ${name}, continue browsing to check for cats you can like`)
        setSeverity('success')
    }

    const handleSnackbarClose = () => setOpen(false)
    return (
        <Fragment>
            {
                open && <Popup  open={open} onClose={handleSnackbarClose} message={message}  />
            }
            <Card sx={{maxWidth:345}}>
            <CardMedia
                    component="img"
                    height="200"
                    style={{objectFit:'fill'}}
                    image={url}
                    alt="green iguana"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" height={200}>
                {
                    description
                }
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent:'center'}}>
                <Button size="small" onClick={() => handleLikeClick(id,url,name,description)}> <ThumbUpIcon /> </Button>
                <Button size="small" onClick={() => handleDisLikeClick(id,url,name,description)}>   <ThumbDownIcon />  </Button>
            </CardActions>
            </Card>
        </Fragment>
    )
}

export default Cards
