import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import * as serviceWorker from './serviceWorker'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './util/history'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
