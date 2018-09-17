import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";

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
  };
  render() {
    const { optionOne, optionTwo } = this.state;

    const optionOneTextLength = 280 - optionOne.length;
    const optionTwoTextLength = 280 - optionTwo.length;

    return (
      <div>
        <h3 className="center">Add new Question</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={optionOne}
            onChange={this.handleOptionOne}
            className="textarea"
            maxLength={280}
          />
          {optionOneTextLength <= 100 && <div className="tweet-length">{optionOneTextLength}</div>}
           <textarea
            placeholder="What's happening?"
            value={optionTwo}
            onChange={this.handleOptionTwo}
            className="textarea"
            maxLength={280}
          />
          {optionTwoTextLength <= 100 && <div className="tweet-length">{optionTwoTextLength}</div>}
          <button className="btn" type="submit" disabled={optionOne === ""||optionTwo === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
