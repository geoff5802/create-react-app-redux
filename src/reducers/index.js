const combineReducers = require('redux').combineReducers;
const routerReducer = require('react-router-redux').routerReducer;
const counter = require('./counter');

module.exports = combineReducers({
  router: routerReducer,
  counter
});
