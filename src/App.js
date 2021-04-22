import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Books from './containers/Books';
import CreateBook from './containers/CreateBook';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pathname: ''
    }
  }

  notifyPathname = (pathname) => {
    this.setState({
      pathname: pathname  
    })
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Nav 
          notifyPathname={this.notifyPathname}
          pathname={this.state.pathname}
          />
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
