import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code+Script&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-seaweed to-jet dark:from-jet dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
