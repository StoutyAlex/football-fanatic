import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/SearchBar';

class App extends Component {


  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Search onSearch={(term) => console.log(`Search ${term}`)}/>
      </div>
    );
  }
}

export default hot(module)(App);
