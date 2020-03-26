import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Ample Next.js Starter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
