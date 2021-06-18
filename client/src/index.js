import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// For implementing user signin & signup
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    {/* For implementing user signin & signup */}
    {/* <Auth0Provider
      domain='dev-k7rou30o.us.auth0.com'
      clientId='OtXTHh0cUHvsjU5QMmmPgvoVVp3gbdZJ'
      redirectUri={window.location.origin}
      audience='https://dev-k7rou30o.us.auth0.com/api/v2/'
      scope='read:current_user update:current_user_metadata'
    > */}

    <App />
    
    {/* </Auth0Provider> */}

  </React.StrictMode>,
  document.getElementById('root')
);