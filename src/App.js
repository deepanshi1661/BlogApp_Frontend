import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import BlogList from './components/blogList';
import NavBarBlog from './components/navBarBlog';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import BlogDetail from './components/blogDetail';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
      <Router>
      <switch>
      <Route exact path="/blogDetail">
          <BlogDetail />
      </Route>
      <Route exact path="/home">
          <NavBar />
          <main className="container">
            <BlogList />
          {/* <NavBarBlog /> */}
          </main>
      </Route>
      </switch>
      {/* <NavBar /> */}
      </Router>
      </React.Fragment>
    );
  }
}
 
export default App;
