import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>

    <h1>Blog</h1>
    <p>
      There will be something in this in the future
    </p>

    </Layout>
  )

}

export default BlogPage