import React from "react"

import "../styles/libs/sanitize.css"

// TODO: Remove next-js-welcome-page.scss
import "../styles/next-js-welcome-page.scss"

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
