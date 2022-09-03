import "../styles/globals.css"
import NextNProgress from "nextjs-progressbar"
import Layout from "../components/layout"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <link rel="icon" href="/seacraft-marine-repair.png" />
      </Head>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default MyApp
