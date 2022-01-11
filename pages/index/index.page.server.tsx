export { onBeforeRender }

function onBeforeRender() {
  const documentProps = {
    title: 'Launchpad',
    description: 'Venture Capital Reinvented',
    image: '/assets/og.png'
  }
  return {
    pageContext: {
      documentProps
    }
  }
}