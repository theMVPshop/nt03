import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
