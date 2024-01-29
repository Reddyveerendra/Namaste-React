import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "hi i am to be updated",
      count: 0,
    };
  }

  render() {
    return (
      <>
        <h2 onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.message}
        </h2>
        <h3>{this.state.count}</h3>
      </>
    );
  }
}

export default Login;
