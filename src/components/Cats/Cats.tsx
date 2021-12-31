import { Grid, Skeleton } from '@mui/material';
import React, { Fragment , useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCats } from '../../ReduxStore/cats/Action'
import { Cat } from '../../ReduxStore/cats/Interface';
import { RootState } from '../../ReduxStore/store';
import Cards from '../Reusables/Cards';
import CatGridDisplay from '../Reusables/CatGridDisplay';


const Cats = () => {

    const dispatch = useDispatch()
    useEffect(() => {

            dispatch(GetAllCats())    
    },[])
    const [page, setPage] = useState(1)
    
    const cats:Cat[] = useSelector((state:RootState) => state.cats['cats'])
    const isLoading:boolean = useSelector((state:RootState) => state.cats['loading'])
    // eslint-disable-next-line no-console
    console.log(isLoading)
    return (
        <Fragment>
            <CatGridDisplay cats={cats}  isLoading={isLoading} page={page} setPage={setPage} displayPagination={true} />
        </Fragment>
    )
};
export default Cats
