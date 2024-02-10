import "@/styles/globals.css";
import { Header } from "@/components";
import Head from "next/head";
import { site_metadata } from "@/constants";
import { Toaster } from "react-hot-toast";
import { useVisitorCount } from "@/hooks";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/context";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useVisitorCount(router?.pathname || "unknown", router?.asPath);

  return (
    <>
      <Head>
        {/*Metadata for Open Graph and Twitter*/}
        <meta property="og:title" content={site_metadata?.title} />
        <meta property="og:description" content={site_metadata?.desc} />
        <meta property="og:image" content="https://fazle-rabbi-dev.vercel.app/og-image.png" />

        <meta name="google-site-verification" content="e2eypPimpfZkOQOEpkZSgIbHZCp1EuaV8O5NPn4zNnc" />

        {/*<meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="731" />
        */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site_metadata?.hostname} />
        <meta property="og:site_name" content={site_metadata?.title} />
        <meta property="og:locale" content="en_US" />

        <meta property="twitter:title" content={site_metadata?.title} />
        <meta property="twitter:description" content={site_metadata?.desc} />
        <meta property="twitter:image" content="https://github-production-user-asset-6210df.s3.amazonaws.com/71178740/303817713-4fa00d97-1954-4aac-8a7a-6cb5d2a15176.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240210T052034Z&X-Amz-Expires=300&X-Amz-Signature=e5b79869eb05255315a84fa790cba0877a831ca96c9a5ed6dc1ed947ba1b96ea&X-Amz-SignedHeaders=host&actor_id=71178740&key_id=0&repo_id=596049547" />
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
        
        {/* Google Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5974347816252396"
          crossorigin="anonymous"
        ></script>
      </Head>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <main className="mx-4 my-16 pt-6 md:flex md:justify-center md:items-center">
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  );
}
