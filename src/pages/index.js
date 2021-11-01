import React from "react"
import Layout from "../layout"
import Button from "../components/button"

const Home = () => (
  <Layout>
    <h1>Heading</h1>
    Note that the only other page is a <Button url="/404/">404 page</Button>, but there are some
    starter components in <code>src/components</code>. Go to the{" "}
    <Button url="/storybook/">documentation</Button> section to see more.
  </Layout>
)

export default Home
