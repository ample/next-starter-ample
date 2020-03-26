import React from "react"
import Layout from "../layout"
import Button from "../components/button"

const Home = () => (
  <Layout>
    Note that the only other page is a <Button url="/404/" label="404 page" />, but there are some
    starter components in <code>src/components</code>. Go to the{" "}
    <Button url="/docs/" label="documentation" /> section to see more.
  </Layout>
)

export default Home
