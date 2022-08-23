import React, { Component } from "react";

export default class MovieDetail extends Component {
  render(props) {
    console.log(props.location.state);
    return <h1>sad</h1>;
    // return <div>{this.props.match}</div>;
  }
}

{
  /* <Route
path="/directory/:fentities/:wizardName"
render={({ match }) => <Fentity match={match} state={state} />}
/> */
}
