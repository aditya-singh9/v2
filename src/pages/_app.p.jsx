import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AnimateSharedLayout } from "framer-motion";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

import "ui/styles/custom.css";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  
  return (
    <AnimateSharedLayout>
      <Head>
        <meta
          name="description"
          content="I'm Aditya Singh, a 16 year old self-motivated Tech Enthusiast and a Full Stack developer."
        />

        <meta property="og:image" content="/embed.png" />
        <meta
          property="og:description"
          content="I'm Aditya Singh, a 16 year old self-motivated Tech Enthusiast and a Full Stack developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="adityasingh.tech" />
        <meta property="og:url" content="https://adityasingh.tech/" />

        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <AnimatedCursor
        innerSize={4}
        outerSize={32}
        color="147, 197, 253"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={1.5}
      />
    </AnimateSharedLayout>
  );
}
