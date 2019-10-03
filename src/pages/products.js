import React, { Component } from 'react';
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';

class Product extends Component {

    componentDidMount() {
        this.stripe = window.Stripe('pk_test_1QbHzgDN1zdOHiuCNSdbttpN00lVekwmj5', {
          betas: ['checkout_beta_4'],
        });
      }

    handleSubmit = (sku) => {
        return e => {
            e.preventDefault();

            this.stripe.redirectToCheckout({
                items: [
                  // Replace with the ID of your SKU
                  {sku, quantity: 1}
                ],
                successUrl: 'http://localhost:8000/success',
                cancelUrl: 'http://localhost:8000/cancel',
              }).then(function (result) {
                if (result.error) {
                console.error(result.error.message);
                }
              })
        }
    }

    render() {
        console.log(this.props);
        const { id, currency, price, name } = this.props;
        const priceFloat = (price/100).toFixed(2);
        const formattedPrice = Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(priceFloat);

        return (
            <form className="product" onSubmit={this.handleSubmit(id)}>
                <h2 className="product__name">{name} ({formattedPrice})</h2>
                <button className="product__purchase" type="submit">Purchase now</button>
            </form>
        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
        {  
            allStripeSku {
              edges {
                node {
                  id
                  currency
                  price
                  attributes {
                    name
                  }
                  product {
                    name
                    id
                  }
                }
              }
            }
          }`}
        render={data => (
          <Layout>
            {data.allStripeSku.edges.map(({ node: sku }, i) => (
              <Product 
                key={i}
                id={sku.id}
                currency={sku.currency}
                price={sku.price}
                name={sku.attributes.name}
              />
            ))}
          </Layout>
        )}
    />
)
