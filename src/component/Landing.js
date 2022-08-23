import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Ahmad", backGroundColor: "blue" },
        { name: "Suha", backGroundColor: "red" },
        { name: "Zain", backGroundColor: "green" },
        { name: "Haj", backGroundColor: "orange" },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="title">Landing</div>

        <div className="users">
          {this.state.users.map((u) => (
            <Link to="/Catalog">
              <div
                className="user"
                style={{ backgroundColor: u.backGroundColor }}
              >
                <div className="userName"> {u.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
