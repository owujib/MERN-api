import React, { Component } from 'react';
import { Navbar, Nav, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/new">
                  Create Product
                </Link>
              </Nav>
            </Nav>

            <Nav className="mr-sm-2">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </Nav>
            <Nav>
              <Link className="nav-link" to="/register">
                register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
