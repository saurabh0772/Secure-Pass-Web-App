import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
         domain="dev-7rz6vibgyy1r5v6x.us.auth0.com"
  clientId="oEODQlo4Xt9vxtp8QsRah2KSyGVOnQNP"
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: "https://securepass-backend"
  }}
  cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>,
)
