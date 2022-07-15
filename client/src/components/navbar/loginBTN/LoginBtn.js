import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function LoginBtn() {
    const { loginWithRedirect, isAuthenticated , logout} = useAuth0();
  return (
    <div>
        {
            isAuthenticated ? (
              <button onClick={() => logout({returnTo: window.location.origin})}>Logout Whit Auth0</button>
            ) : (
              <button onClick={() => loginWithRedirect()}>Login Whit Auth0</button>
            )
        }
    </div>
  )
}

export default LoginBtn