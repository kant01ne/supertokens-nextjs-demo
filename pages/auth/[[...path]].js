import Head from 'next/head'
import { useEffect } from 'react'
import 'regenerator-runtime/runtime';
import styles from '../../styles/Home.module.css'
import SuperTokens from 'supertokens-auth-react'

export default function Auth() {
  useEffect(async () => {
    if (SuperTokens.canHandleRoute() === false) {
      window.location.href = "/";
    }
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          {SuperTokens.getRoutingComponent()}
      </main>

    </div>
  )
}
