import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider, AppState } from '@auth0/auth0-react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Auth0ProviderOptions } from '@auth0/auth0-react';
import './index.css';
import config from './config';

const Auth0ProviderWithRedirectCallback = ({
  children,
  ...props
}: PropsWithChildren<Auth0ProviderOptions>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
        domain="dev-7p-0ft5b.us.auth0.com"
        clientId="DKslLJDN56RMlTYbp6DlU1AVZW7xyRFS"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);