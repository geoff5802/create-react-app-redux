import 'sanitize.css/sanitize.css';
import './index.css';

const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { ConnectedRouter } = require('connected-react-router');
const { history } = require('./store');
const store = require('./store').default;
const App = require('./containers/app');

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
