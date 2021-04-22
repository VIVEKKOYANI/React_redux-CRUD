import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Books from './containers/Books';
import CreateBook from './containers/CreateBook';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={() => <Books />} />
          <Route path="/create" exact component={() => <CreateBook />} />
          <Route path="/edit/:id" exact component={() => <CreateBook />} />
        </Switch>
      </div>
      </Router>
    )
  }
}
