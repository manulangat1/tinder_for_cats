import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './ReduxStore/store';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
				<Router>
				<Dashboard />
				</Router>
			</Provider>
    </Fragment>
  );
}

export default App;
