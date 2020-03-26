import React from "react"

import "../styles/libs/sanitize.css"

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
