import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import PageLoaderBlock from '../components/page-loader';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    font-family: 'Major Mono Display', monospace;
  }
`;

/**
 * Overriding the default <App> container that next.js provides to override
 * any props at <App> level, for example here we inject globalstyles, that gets
 * picked up in the "Document".
 */
export default class DimensionApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps:
        (Component.getInitialProps && Component.getInitialProps(ctx)) || {}
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Gautham Ramachandran</title>
        </Head>
        <PageLoaderBlock id="dim-spinner" />
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}
