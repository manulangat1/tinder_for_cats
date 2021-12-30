import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './ReduxStore/store';
import { Typography } from '@mui/material';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
				<Router>
					<Typography variant='h3' > Getting started</Typography>
				</Router>
			</Provider>
    </Fragment>
  );
}

export default App;
