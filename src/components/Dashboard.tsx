import React, { Fragment } from 'react'
import Header from './Header/Header'

import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NotFound from './NotFound/NotFound';
import Breeds from './Cats/Breeds';

const  Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <Container style={{marginTop:'4rem'}} maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Breeds />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </Fragment>
    )
}

export default Dashboard
