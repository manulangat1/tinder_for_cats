import React, { Fragment } from 'react';
import { Box, Container, Grid, Pagination, Skeleton, useMediaQuery } from '@mui/material';
import Cards from './Cards';
import { Cat } from '../../ReduxStore/cats/Interface';

interface propsInterface {
	cats?: Cat[];
	isLoading: boolean;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	page: number;
	setPage: any;
	displayPagination: boolean
}

const CatGridDisplay = ({ cats, isLoading, xs, sm, md, lg, xl, page, setPage, displayPagination }: propsInterface) => {
	const matches = useMediaQuery('(max-width:440px)');
	const itemsPerPage = matches ? 9 : 12;
	return (
		<Fragment>
			<Grid container spacing={2}>
				{cats &&
					cats?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(cat => (
						<Grid
							key={cat?.id}
							item
							xs={xs ? xs : 12}
							sm={sm ? sm : 4}
							md={md ? md : 4}
							lg={lg ? lg : 3}
							xl={xl ? xl : 3}
						>
							<Cards
								id={cat?.id}
								url={cat.image ? cat?.image?.url : cat.url}
								name={cat.name ? cat?.name : 'This is a random call to the api'}
								description={cat.description ? cat.description : 'lorem ipsum 3000'}
							/>
						</Grid>
					))}
			</Grid>
			{isLoading && (
				<section>
					<Grid container spacing={2}>
						<Container maxWidth="xl" >
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
							<div style={{ justifyContent:'center'  }}>
								<Skeleton variant="circular" width={40} height={40}  />
								<Skeleton variant="text" width={210} height={118} />
								<Skeleton variant="rectangular" width={210} height={118} />
							</div>

							<div style={{ marginTop: '2rem' }}>
								<Skeleton variant="circular" width={40} height={40} />
								<Skeleton variant="text" width={210} height={118} />
								<Skeleton variant="rectangular" width={210} height={118} />
							</div>

							<div style={{ marginTop: '2rem' }}>
								<Skeleton variant="circular" width={40} height={40} />
								<Skeleton variant="text" width={210} height={118} />
								<Skeleton variant="rectangular" width={210} height={118} />
							</div>
							<div style={{ marginTop: '2rem' }}>
								<Skeleton variant="circular" width={40} height={40} />
								<Skeleton variant="text" width={210} height={118} />
								<Skeleton variant="rectangular" width={210} height={118} />
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
							<div>
								<Skeleton variant="circular" width={40} height={40} />
								<Skeleton variant="text" width={210} height={118} />
								<Skeleton variant="rectangular" width={210} height={118} />
							</div>

							<div style={{ marginTop: '2rem' }}>
								<Skeleton variant="circular" width={40} height={40} />
								<Skeleton variant="text" width={210} height={118} />
								<Skeleton variant="rectangular" width={210} height={118} />
							</div>

							<div style={{ marginTop: '2rem' }}>
								<Skeleton variant="circular" width={40} height={40} />
								<Skeleton variant="text" width={210} height={118} />
								<Skeleton variant="rectangular" width={210} height={118} />
							</div>
							<div style={{ marginTop: '2rem' }}>
								<Skeleton variant="circular" width={40} height={40} />
								<Skeleton variant="text" width={210} height={118} />
								<Skeleton variant="rectangular" width={210} height={118} />
							</div>
						</Grid>
						</Container>
					</Grid>
				</section>
			)}

			{displayPagination && cats && cats.length > 0 && (
				<Pagination
					size={matches ? 'small' : 'medium'}
					style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}
					count={Math.ceil(cats.length / itemsPerPage)}
					variant="outlined"
					color="secondary"
					page={page}
					onChange={(event, val) => setPage(val)}
				/>
			)}
		</Fragment>
	);
};
export default CatGridDisplay;
