import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { withRouter } from "react-router-dom";


class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };
  handleOptionOne = e => {
    const optionOne = e.target.value;

    this.setState(() => ({
      optionOne
    }));
  };
  handleOptionTwo = e => {
    const optionTwo = e.target.value;

    this.setState(() => ({
      optionTwo
    }));
  };
  handleSubmit = e => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    dispatch(handleSaveQuestion(optionOne, optionTwo));

    this.setState(() => ({
        optionOne: "",
        optionTwo: ""
    }));
    this.state.authedUser !== "" ? ( this.props.history.push(`/`) ) : null;
  };
  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <div>
        <h3 className="center">Would you rather...</h3>
        <form className="newqs" onSubmit={this.handleSubmit}>
          <textarea
                      width="200px"
                      height="100px"
            placeholder="What's happening?"
            value={optionOne}
            onChange={this.handleOptionOne}
            className="txb1"
            maxLength={280}
          />
          <h1 className="or">or</h1>
           <textarea
            width="200px"
            height="100px"
            placeholder="What's happening?"
            value={optionTwo}
            onChange={this.handleOptionTwo}
            className="txb2"
            maxLength={280}
          />
          <button className="newqsbutton" disabled={optionOne === ""||optionTwo === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(NewQuestion));
