import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          <h4>{this.state.product.name}</h4>
          <img
            src={`http://localhost:4000/${this.state.product.productImg}`}
            width="200"
            height="300"
            alt="...img😟"
          />
        </div>

        <Link
          to={'/edit-product/' + this.props.match.params.id}
          className="m-3 btn btn-success"
        >
          update
        </Link>
        <Link href="#" className="m-3 btn btn-danger">
          delete
        </Link>
      </div>
    );
  }
}

export default ProductDetail;
