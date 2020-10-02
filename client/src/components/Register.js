import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

export class Login extends Component {
  state = {
    fullname: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = {
      email: this.state.email,
      fullname: this.state.fullname,
      password: this.state.password,
    };

    axios
      .post('/api/user/login', data)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <Form method="POST" onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormControl
              onChange={this.handleChange}
              name="fullname"
              placeholder="fullname"
              value={this.state.fullname}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              onChange={this.handleChange}
              name="email"
              placeholder="email"
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              onChange={this.handleChange}
              name="password"
              placeholder="password"
              value={this.state.password}
            />
          </FormGroup>
          <Button type="submit" className="text-center w-100" variant="info">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
