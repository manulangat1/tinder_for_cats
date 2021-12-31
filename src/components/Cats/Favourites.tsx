import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import localStorageHelpers from '../../helpers/localStoreHelper';
import { Cat } from '../../ReduxStore/cats/Interface';
import CatGridDisplay from '../Reusables/CatGridDisplay';

const  Favourites = () => {
    const [loading, setloading] = useState<boolean>(false);
	const [likes, setLikes] = useState<Cat[]>();
	const [disLikes, setdisLikes] = useState<Cat[]>();
    const [page, setPage] = useState(1)
	useEffect(() => {
		setloading(true);
		const likes = localStorage.getItem('likes');
		likes != null ? setLikes(JSON.parse(likes)) : [];

		const dislikes = localStorage.getItem('dislikes');
		dislikes != null ? setdisLikes(JSON.parse(dislikes)) : [];

		// eslint-disable-next-line no-console
		console.log(likes && likes, disLikes);
		setloading(false);
	}, []);
	// eslint-disable-next-line no-console
	console.log(likes && likes, disLikes);
	return (
		<Fragment>
		<Grid container spacing={2}>
            <Grid item  xs={12} sm={6} md={6} lg={6} xl={6}  >
                {
                    likes && likes?.length > 0 ? (
                        <div>
                            <Typography variant='h6' gutterBottom> Your likes are here</Typography>
                            <CatGridDisplay cats={likes}  isLoading={loading} xs={12} sm={12} md={6} lg={3} xl={3} page={page} setPage={setPage} displayPagination={false} />
                        </div>
                    ) : (
                        <Typography variant='h6' gutterBottom> You have not liked any catsies yet, Your liked list will be displayed here </Typography>
                    )
                }
                
            </Grid>
            <Grid item  xs={12} sm={6} md={6} lg={6} xl={6} >
            {
                    likes && likes?.length > 0 ? (
                        <div>
                            <Typography variant='h6' gutterBottom> Your dislikes are here</Typography>
                    <CatGridDisplay cats={disLikes}  isLoading={loading} xs={12} sm={12} md={6} lg={3} xl={3} page={page} setPage={setPage} displayPagination={false} />
                        </div>
                    ) : (
                        <Typography variant='h6' gutterBottom> Whoo, you have not disliked any cats, You are a catsu!, Your liked list will be displayed here </Typography>
                    )
                }
            
            </Grid>
            </Grid>	
		</Fragment>
	);
}

export default Favourites
