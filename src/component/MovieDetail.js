import React, { Component } from "react";
import Catalog from "./Catalog";
import { useLocation, Link } from "react-router-dom";

const MovieDetail = (props) => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="title">{location.state[1]}</div>
      <img src={location.state[2]} />
      <div className="description" style={{ color: "white" }}>
        {location.state[4]}
      </div>
    </div>
  );
};
export default MovieDetail;
