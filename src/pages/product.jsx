import React from 'react';
import { Page, Appbar, Button } from 'framework7-react';
import ProductList from '../assets/products.jsx';

export default class extends React.Component {
  constructor(props) {
    super(props);
    var productId = props.f7route.params.pid;
    var products = ProductList;

    this.state = {
      currentProduct: products[productId-1],
    };

  }
  render() {
    return (
      <Page name="product">
        <Appbar>
        <div className="left">
            <Button
              small
              back
              className="display-flex"
              iconF7="arrow_left"
            />
          </div>
        <div className="right">
          <p className="navbar-text">
          {this.state.currentProduct.title}
          </p>
        </div>
        </Appbar>
        
      </Page>
    );
  }
}
