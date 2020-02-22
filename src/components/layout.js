/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
    <div className="row">
      <div className="d-flex flex-column">
        <div className="main">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            className="d-flex flex-column"
            style={{
              backgroundColor: "#1c1e1f",
            }}
          >
            <main style={{ flex: 1 }}>{children}</main>
          </div>
        </div>
        <footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
