import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    authedUser: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.authedUser));
    if (this.state.authedUser !== "") {
      this.props.history.push(this.props.from);
    }
  };
  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <h1>{this.state.authedUser ? this.state.authedUser : "Username"}</h1>
        <select onChange={e => this.setState({ authedUser: e.target.value })}>
          <option value=""> select user </option>
          {Object.keys(this.props.users).map((user, key) => (
            <option key={key} value={user}>
              {" "}
              {user}{" "}
            </option>
          ))}
        </select>
        <button
          className="btn"
          type="submit"
          disabled={this.state.authedUser === ""}
        >
          Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps({ users, authedUser }, props) {
  let from = '/'
  if(props.location.state!==undefined){
    from = props.location.state.from}

  return {
    users,
    authedUser,
    from
  };
}

export default withRouter(connect(mapStateToProps)(Login));
