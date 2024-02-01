/* eslint-disable perfectionist/sort-imports */
/*eslint-disable*/
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { useEffect, useState } from 'react';
import kc, { initOptions } from './services/Keycloack';

// ----------------------------------------------------------------------

export default function App() {
  const [authenticated, setAuthentication] = useState(false)


  useEffect(() => {

    kc.init({
      onLoad: initOptions.onLoad,
      KeycloakResponseType: 'code',
      silentCheckSsoRedirectUri: `${window.location.origin} + /silent-check-sso.html`,
      checkLoginIframe: false,
      pkceMethod: 'S256'
    }).then((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.info("Authenticated");
        localStorage.setItem("token", kc.token)
        var roles = kc.tokenParsed.realm_access.roles;
   
        localStorage.setItem('roles',roles)

        setAuthentication(true)
        kc.onTokenExpired = () => {
          console.log('token expired')
        }
      }
    }, () => {
      console.error("Authenticated Failed");
    });

  }, [])

  useScrollToTop();

  return (
    authenticated &&
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
