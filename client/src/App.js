import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import ProductList from './components/Product-List';
import ProductDetail from './components/Product-Detail';
import Login from './components/Login';
import Register from './components/Register';
import Auth from './hoc/Auth';

class App extends React.Component {
  state = {
    posts: [],
  };

  render() {
    return (
      <div id="bg" className="container-fluid">
        <Navigation />

        <Route path="/products" component={Auth(ProductList)} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
