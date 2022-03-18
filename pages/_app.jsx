import React from 'react';
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

* {
  padding: 0 px;
  margin: 0 px;
}

body {
  font-family: 'Roboto', sans-serif;
  color: black;
}`

function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default App