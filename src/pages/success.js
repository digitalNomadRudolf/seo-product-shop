import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Congratulations!</h1>
    <p className="success-p">You have completed the first step to attracting highly converting traffic to your website.</p>

    <div className="button-wrap">
    <Link to="/"><span className="backhome">Go back to the homepage</span></Link>
    <Link className="toproducts" to="/products">More products</Link>
    </div>
  </Layout>
)

export default SecondPage
