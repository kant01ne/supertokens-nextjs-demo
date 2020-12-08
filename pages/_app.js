import '../styles/globals.css'
import { useEffect, useState } from 'react'
import 'regenerator-runtime/runtime';
import SuperTokens from 'supertokens-auth-react'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';

const websitePort = process.env.APP_PORT || 3000;
const websiteUrl = process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${websitePort}`; 

function MyApp({ Component, pageProps }) {
  const [isSuperTokensInitialised, setIsSuperTokensInitialised] = useState(false);

  useEffect(async () => {
    /*
     * Because session is using the `window` object, it needs to be loaded client side from useEffect or componentDidMount.
     */
    const Session = await import('supertokens-auth-react/recipe/session');
    SuperTokens.init({
      appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: websiteUrl,
        websiteDomain: websiteUrl,
        apiBasePath: "api/auth"
      },
      recipeList: [
        EmailPassword.init(),
        Session.init()
      ]
    });


    setIsSuperTokensInitialised(true);

  }, [setIsSuperTokensInitialised]);
  

  if (isSuperTokensInitialised === false) {
    return null;
  }


  return <Component {...pageProps} />
}

export default MyApp
