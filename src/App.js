import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Books from './containers/Books';
import CreateBook from './containers/CreateBook';
export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Books />

        <CreateBook />
      </div>
    )
  }
}
