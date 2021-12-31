import React, { Fragment } from 'react'
import Header from './Header/Header'

import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NotFound from './NotFound/NotFound';

const  Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <Container maxWidth="xl">
                <Routes>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </Fragment>
    )
}

export default Dashboard
