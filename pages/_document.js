import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class DimensionDocument extends Document {
  /**
   * override the getInitialProps to pass on the classes / styles
   * generated by styled-components.
   */
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  /**
   * overriding the next.js Document render, to put fancy fonts etc.
   */
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no, minimal-ui"
            key="viewport"
          />
          <meta name="referrer" content="origin" />
          <meta name="theme-color" content="orange" />
          <link rel="icon" type="image/x-icon" href="/static/images/gr.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Manrope:200,300,400,500,600,700,800&display=swap"
            rel="stylesheet"
            async
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="static/loader.js" />
        </body>
      </html>
    );
  }
}
