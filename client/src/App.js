import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    posts: [],
  };

  render() {
    return (
      <div id="bg" className="container-fluid">
        <h1>ECOM API</h1>
      </div>
    );
  }
}

export default App;
