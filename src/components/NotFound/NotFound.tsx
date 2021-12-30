import { Container, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import NotFoundImage from '../../public/img/404.jpeg'
const NotFound = () => {
    return (
        <Fragment >
            <section style={{ backgroundImage:`url(${NotFoundImage})`,backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height:'100vh'}}>
      <Container  maxWidth="xl">
                <Typography variant='h3' gutterBottom style={{display:'flex',justifyContent:'center', paddingTop:'6rem'}}>  404</Typography>
            </Container>
            </section>
            
        </Fragment>
    )
}

export default NotFound
