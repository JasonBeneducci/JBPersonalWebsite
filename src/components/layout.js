/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from './Nav'
import Header from "./header"
import "./layout.css"
import '../assets/App.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Nav/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main className="main">{children}</main>
        <footer>
          <a href="https://github.com/JasonBeneducci">
            <img src="http://pngimg.com/uploads/github/github_PNG20.png" alt="" className="logo-link"/>
          </a>
          <a href="https://www.linkedin.com/in/jasonbeneducci/">
            <img src="https://carlisletheacarlisletheatre.org/images/linkedin-icon-round-8.png" alt="" className="logo-link"/>
          </a>
          <a href="https://medium.com/@jasonbeneducci">
            <img src="https://miro.medium.com/max/968/1*F6SrJR7_s95r6oCF3ugMZw.png" alt="" className="logo-link" />
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
