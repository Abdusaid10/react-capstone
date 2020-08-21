import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/store'; 
import './assets/styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/reset.css';
import './assets/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
