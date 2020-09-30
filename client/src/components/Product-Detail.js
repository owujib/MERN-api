import React, { Component } from 'react';
import axios from 'axios';

export class ProductDetail extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get('http://localhost:4000/api/product/' + id)
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Product Detail</h1>
        <h1>{this.state.product.name}</h1>
      </div>
    );
  }
}

export default ProductDetail;
