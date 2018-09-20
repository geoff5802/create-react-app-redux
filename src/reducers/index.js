const combineReducers = require('redux').combineReducers;
const counter = require('./counter');

module.exports = combineReducers({
  counter
});
