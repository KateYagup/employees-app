import { combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import workersReducer from './store/workersSlice';

const reducer = combineReducers({
  workers: workersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
