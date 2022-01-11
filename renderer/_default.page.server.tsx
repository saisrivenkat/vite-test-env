import ReactDOMServer from "react-dom/server";
import React from "react";
import { PageWrapper } from "./PageWrapper";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import type { PageContext } from "./types";
import type { PageContextBuiltIn } from "vite-plugin-ssr";

export { render };

import 'virtual:windi.css';
import 'antd/dist/antd.less';
import "@/styles/base.scss";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "documentProps", "urlPathname", "title"];

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageWrapper pageContext={pageContext}>
      <Page {...pageProps} />
    </PageWrapper>
  );

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = documentProps && documentProps.title ? `ADASDSAD` : "SAJKDHASKJDHA SJDAS";
  const desc = (documentProps && documentProps.description) || "asdkasjkdlaksj dlaskjda";
  const img = (documentProps && documentProps.image) || "/assets/og.png";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en" data-theme="dark">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="/assets/eth.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:image" content="${img}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
