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
    console.log(this.state.authedUser !== "");
    
    this.state.authedUser !== "" ? ( this.props.history.push(`/`) ) : null;
  };
  render() {
      console.log(this.props.authedUser);
      
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>
            {this.state.authedUser ? this.state.authedUser : "select a user"}
          </h3>
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
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(Login));
