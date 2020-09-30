import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../hoc/Auth';

export class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/product', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'Application/json',
          auth_token: `${this.props.token}`,
        },
      })
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    const productList = this.state.products.map((product, id) => {
      console.log('localhost:4000/' + product.productImg);

      return (
        <Col key={id}>
          <Card>
            <h1>
              <Link to={'product/' + product._id}>{product.name}</Link>
            </h1>
            <img
              src={`http://localhost:4000/${product.productImg}`}
              width="200"
              alt="...img"
            />
            <p>{product.decription}</p>
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <Row>{productList}</Row>
      </div>
    );
  }
}

export default ProductList;
