import "../styles/globals.css"
import NextNProgress from "nextjs-progressbar"
import Layout from "../components/layout"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <main>
      {/* Google Analytics script */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script strategy="lazyOnload" id="my-script">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
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
