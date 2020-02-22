import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="col-md-3">
        <Image />
      </div>
      <div className="col-md-9">
        <About />
      </div>
    </div>
  </Layout>
)

export default IndexPage
