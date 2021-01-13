import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Derek, a noob in all things development.</h2>

      <p>Want to get in touch? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )

}

export default IndexPage