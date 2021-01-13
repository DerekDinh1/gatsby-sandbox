import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>

    <h1>About</h1>
    <p>
      <h2>Bio</h2>
      This will be the bio where I will input something much longer than this soon.
    </p>

    <p>Want to get in touch? <Link to="/contact">Contact Me</Link></p>
  
    </Layout>
  )

}

export default AboutPage