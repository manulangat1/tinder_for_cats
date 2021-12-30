import { createStore,applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import RootReducer from './rootReducer'


const middleware = [thunk]


export const store:Store  = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

export type RootState = ReturnType<typeof RootReducer>;
