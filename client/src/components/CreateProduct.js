import React, { Component } from 'react';
import axios from 'axios';

export class CreateProduct extends Component {
  state = {
    name: '',
    size: '',
    color: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = {
      name: this.state.name,
      size: this.state.size,
      color: this.state.color,
    };

    axios
      .post('/api/product/new-product', data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="container m-5">
        <form action="" onSubmit={this.handleSubmit} method="post">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="size"
              placeholder="size"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.size}
            />
          </div>
          <input type="file" />
          <div className="form-group">
            <input
              type="text"
              name="color"
              placeholder="color"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.color}
            />
          </div>
          <input
            type="submit"
            className="btn w-100 btn-info"
            value="app product"
          />
        </form>
      </div>
    );
  }
}

export default CreateProduct;
