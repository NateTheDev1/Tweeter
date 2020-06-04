import React from "react";
import withAuthorization from "../helpers/withAuthorization";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-left"></div>
        <div className="home-post"></div>
        <div className="home-left"></div>
      </div>
    );
  }
}

export default withAuthorization(Home);
