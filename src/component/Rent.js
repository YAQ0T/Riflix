import React, { Component } from "react";

export default class Rent extends Component {
  rentMovie = () => {
    let id = this.props.id;

    this.props.rentMovie(id);
  };
  isRented = () => {
    let rentedClass;
    if (this.props.isRented) {
      rentedClass = "rented";
    } else {
      rentedClass = "notRented";
    }
    return rentedClass;
  };
  render() {
    return (
      <div className="movie">
        <button
          className={`add-remove ${this.isRented()}`}
          onClick={this.rentMovie}
        >
          <img className="movieImg" src={this.props.img}></img>
        </button>
      </div>
    );
  }
}
