import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>The transaction has been canceled.</h1>
    <p className="cancel-p">You can always come back and purchase when ready.</p>

    <div className="button-wrap">
    <Link to="/"><span className="backhome">Go back to the homepage</span></Link>
    <Link className="toproducts" to="/products">More products</Link>
    </div>
  </Layout>
)

export default SecondPage
