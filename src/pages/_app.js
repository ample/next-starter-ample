import React from "react"

import "../styles/libs/sanitize.css"
import "../styles/global-styles.scss"
import "../styles/global-utilities.scss"

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
