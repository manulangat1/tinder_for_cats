import { Typography } from '@mui/material';
import React , { Fragment, useEffect, useState} from 'react'
// import { useDispatch } from 'react-redux';
import { GetAllBreeds } from '../../ReduxStore/cats/Action';
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '../../ReduxStore/store';

import { Grid, Skeleton } from '@mui/material';
import Cards from '../Reusables/Cards';
import { Cat } from '../../ReduxStore/cats/Interface';
import CatGridDisplay from '../Reusables/CatGridDisplay';
const Breeds = () => {
    const dispatch = useDispatch()
    useEffect(( ) => {
            dispatch(GetAllBreeds())

        
    },[])
    const [page, setPage] = useState(1)
    const cats:Cat[] = useSelector((state:RootState) => state.cats['catBreeds'])
    const isLoading:boolean = useSelector((state:RootState) => state.cats['loading'])
    return(
        <Fragment>
            <CatGridDisplay cats={cats}  isLoading={isLoading} page={page} setPage={setPage} displayPagination={true}/>
        </Fragment>
    )
}

export default Breeds;
