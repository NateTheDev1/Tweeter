import React from "react";
import withAuthorization from "../helpers/withAuthorization";

class Home extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

export default withAuthorization(Home);
