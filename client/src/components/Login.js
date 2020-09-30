import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('/api/user/login', data)
      .then((response) => {
        console.log(response.headers.auth_token);
        localStorage.setItem('auth_token', response.headers.auth_token);
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
      <div className="container">
        <Form method="POST" onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormControl
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChange}
              name="email"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
              name="password"
            />
          </FormGroup>
          <Button type="submit" className="text-center" variant="info">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
