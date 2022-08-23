import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./component/Landing";
import Catalog from "./component/Catalog";
import MovieDetail from "./component/MovieDetail";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Landing />}></Route>
            <Route
              path="/Catalog"
              exact
              element={<Catalog getState={this.getState} state={this.state} />}
            ></Route>
            <Route path="/MovieDetail" exact element={<MovieDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
