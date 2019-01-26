import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App white">
          <Nav />
          <div className="container banner">
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
