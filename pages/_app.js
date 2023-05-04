import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
                <title>Home | Next js</title>
                <meta name="keywords" content="Home"/>
            </Head>
 <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
