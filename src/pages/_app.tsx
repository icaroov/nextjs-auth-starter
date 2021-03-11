import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'next-auth/client'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Auth</title>
        <link rel="shortcut icon" href="/assets/img/icon-2.png" />
        <link rel="apple-touch-icon" href="/assets/img/icon-2.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Passwordless Authentication with Next.js, Prisma, and next-auth."
        />
      </Head>
      <Provider session={pageProps.session}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
