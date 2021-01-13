import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <footer>
      {data.site.siteMetadata.description}
    </footer>
  )
}

export default Footer