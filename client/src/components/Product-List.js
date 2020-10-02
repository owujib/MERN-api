import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../hoc/Auth';
import { withRouter } from 'react-router-dom';

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
    console.log(this.props);
    const productList = this.state.products.map((product, id) => {
      return (
        <Col className=" col-md-3 mb-3" key={id}>
          <Card>
            <h5>
              <Link to={'product/' + product._id}>{product.name}</Link>
            </h5>
            <Card.Body>
              <img
                src={`http://localhost:4000/${product.productImg}`}
                width="200"
                height="300"
                alt="...img😟"
              />
              <p>{product.decription}</p>
            </Card.Body>
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

export default withRouter(ProductList);
