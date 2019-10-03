import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Congratulations!</h1>
    <p className="success-p">You have completed the first step to attracting highly converting traffic to your website.</p>
    <Link to="/"><span className="backhome">Go back to the homepage</span></Link>
  </Layout>
)

export default SecondPage
