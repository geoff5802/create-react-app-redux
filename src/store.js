const { createStore, applyMiddleware, compose } = require('redux');
const { connectRouter, routerMiddleware } = require('connected-react-router');
const thunk = require('redux-thunk').default;
const createHistory = require('history').createBrowserHistory;
const rootReducer = require('./reducers');

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);
