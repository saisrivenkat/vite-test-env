export { getPageTitle };

function getPageTitle(pageContext: {
  pageExports: { documentProps?: { title?: string } };
  documentProps?: { title?: string };
}): string {
  const siteName = 'SITE';
  if (!pageContext?.pageExports?.documentProps?.title && !pageContext?.documentProps?.title) {
    return siteName;
  }

  const title =
    'SITE | ' +
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    ((pageContext.pageExports.documentProps || {}).title ||
      // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
      (pageContext.documentProps || {}).title);
  return title;
}
