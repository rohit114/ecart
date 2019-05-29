import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    reducers,
    composeEnhancers( applyMiddleware(reduxThunk))
);

export default  store;
