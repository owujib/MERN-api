import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import ProductList from './components/Product-List';
import ProductDetail from './components/Product-Detail';
import Login from './components/Login';
import Register from './components/Register';
import Auth from './hoc/Auth';
import UpdateProduct from './components/UpdateProduct';
import CreateProduct from './components/CreateProduct';

class App extends React.Component {
  state = {
    posts: [],
  };

  render() {
    return (
      <div id="bg" className="container-fluid">
        <Navigation />
        <Route path="/new" component={Auth(CreateProduct, false)} />
        <Route path="/products" component={Auth(ProductList, false)} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route
          path="/edit-product/:id"
          component={Auth(UpdateProduct, false)}
        />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
