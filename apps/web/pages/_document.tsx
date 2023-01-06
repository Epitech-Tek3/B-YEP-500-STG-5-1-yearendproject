import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const CustomDocument = () => {
  return (
    <Html lang="fr">
      <Head>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta name="theme-color" content="white" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />
      </Head>
      <body
        style={{
          padding: 0,
          margin: 0,
          fontFamily: "'Roboto','Helvetica','Arial',sans-serif"
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
