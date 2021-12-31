import React, { Fragment } from 'react';
import { Box, Grid, Skeleton } from '@mui/material';
import Cards from './Cards';
import { Cat } from '../../ReduxStore/cats/Interface';

interface propsInterface {
	cats?: Cat[];
	isLoading: boolean;
    xs?:number;
    sm?:number;
    md?:number;
    lg?:number;
    xl?:number;
}

const CatGridDisplay = ({ cats, isLoading, xs, sm, md, lg, xl }: propsInterface) => {
	return (
		<Fragment>
			<Grid container spacing={2}>
				{cats &&
					cats?.map(cat => (
						<Grid key={cat?.id} item xs={ xs ? xs :  12} sm={  sm ? sm :  4} md={ md ? md : 4} lg={lg ? lg : 3} xl={ xl ? xl : 3}>
							<Cards
								id={cat?.id}
								url={cat.image ? cat?.image?.url : cat.url}
								name={cat.name ? cat?.name : 'This is a random call to the api'}
								description={cat.description ? cat.description : 'lorem ipsum 3000'}
							/>
						</Grid>
					))}
				{isLoading && (
					<section>
						<Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
							<Skeleton variant="rectangular" width={210} height={118} />
						</Grid>

						<Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
							<Skeleton variant="rectangular" width={210} height={118} />
						</Grid>

						<Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
							<Skeleton variant="rectangular" width={210} height={118} />
						</Grid>

						<Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
							<Skeleton variant="rectangular" width={210} height={118} />
						</Grid>
					</section>
				)}
			</Grid>
		</Fragment>
	);
};
export default CatGridDisplay;
