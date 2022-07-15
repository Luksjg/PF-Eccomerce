import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {Auth0Provider} from '@auth0/auth0-react';
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Auth0Provider
      domain="dev-c7hogoxx.us.auth0.com"
      clientId="qz1KXDDFpVqVwdcT7GhbBPyEjEcM3Imn"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


