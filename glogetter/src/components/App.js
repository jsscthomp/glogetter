import React, { Component } from 'react';
import Header from './Header';
// eslint-disable-next-line
import ProductList from './ProductList';


class App extends Component {
constructor() {
  super();

  this.listProduct = this.listProduct.bind(this);

  this.state = {
    product: {}
  }
}

listProduct(product) {
  //update state
  const products = {...this.state.products};
  //add products to page
  const timestamp = Date.now();
  products[`product-${timestamp}`] = product;
  //set state
  this.setState({ products })
}

  render() {
    return (
      <div className="glo-getter">
        <div className="glo">
          <Header tagline="Glo Get It Now" />
        </div>
      </div>
    );
  }
}

export default App;
