import "@/styles/globals.css";
import { Header } from "@/components";
import Head from "next/head";
import { site_metadata } from "@/constants";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/*Metadata for Open Graph and Twitter*/}
        <meta property="og:title" content={site_metadata?.title} />
        <meta property="og:description" content={site_metadata?.desc} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site_metadata?.hostname} />
        <meta property="og:site_name" content={site_metadata?.title} />
        <meta property="og:locale" content="en_US" />

        <meta property="twitter:title" content={site_metadata?.title} />
        <meta property="twitter:description" content={site_metadata?.desc} />
        <meta property="twitter:image:src" content="/images/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@fazle-rabbi-dev" />
        <meta property="twitter:domain" content={site_metadata?.hostname} />

        {/*Additional Metadata*/}
        <meta name="keywords" content={site_metadata?.keywords} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="hostname" content={site_metadata?.hostname} />
        <meta name="author" content={site_metadata?.author} />
        <title>{site_metadata?.title}</title>
        <meta name="description" content={site_metadata?.desc} />
        <meta name="theme-color" content={site_metadata?.theme} />

        {/*Link and Canonical Tags*/}
        <link rel="canonical" href={site_metadata?.hostname} />
        <link rel="author" href="/humans.txt" />
        <link rel="icon" href="/favicon.ico" sizes="128x128" />
        <link rel="icon" href="/favicon.ico" sizes="256x256" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <main className="mx-4 my-16 pt-6 md:flex md:justify-center md:items-center">
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  );
}
