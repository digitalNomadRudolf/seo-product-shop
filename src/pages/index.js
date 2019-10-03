import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

class Button extends Component {

  componentDidMount() {
    this.stripe = window.Stripe('pk_test_1QbHzgDN1zdOHiuCNSdbttpN00lVekwmj5', {
      betas: ['checkout_beta_4'],
    });
  }

render() {
  return (
  <form onSubmit={e => {
    e.preventDefault();
    this.stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your SKU
        {sku: 'sku_Fv8EPmLmqNaJDC', quantity: 1}
      ],
      successUrl: 'https://digital-marketing-shop.netlify.com/success',
      cancelUrl: 'https://digital-marketing-shop.netlify.com/cancel',
    }).then(function (result) {
      if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
      }
    })
  }}>
    <button type="submit">Start Now <span></span></button>
    </form>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Get Highly Targeted Converting traffic to your website</h1>
    <Button />
  </Layout>
)


export default IndexPage
