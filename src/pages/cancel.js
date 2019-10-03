import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>The transaction has been canceled.</h1>
    <p className="cancel-p">You can always come back and purchase when ready.</p>
    <Link to="/"><span className="backhome">Go back to the homepage</span></Link>
  </Layout>
)

export default SecondPage
