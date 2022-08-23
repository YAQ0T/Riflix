import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./component/Landing";
import Catalog from "./component/Catalog";
import Home from "./component/Home";
import MovieDetail from "./component/MovieDetail";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/Landing" exact element={<Landing />}></Route>
            <Route path="/Catalog" exact element={<Catalog />}></Route>
            <Route path="/MovieDetail" exact element={<MovieDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
