import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const users = Object.values(this.props.users).sort(
      (a, b) =>
        Object.keys(b.answers).length +
        Object.keys(b.questions).length -
        (Object.keys(a.answers).length + Object.keys(a.questions).length)
    );

    const Leaderboard = users.map(
      ({ avatarURL, answers, questions, name }, key) => {
        const score = Object.keys(answers).length + questions.length;
        return (
          <div key={key} className="card">
            <div className="header">{name}</div>
            <div className="avatar"><img width="100px" height="auto" src={avatarURL} /></div>
            <div className="optionOne">Questions Created: {questions.length}</div>
            <div className="optionTwo">Questions Answered: {Object.values(answers).length}</div>
            <div className="score">Score: {score}</div>
          </div>
        );
      }
    );

    return <div className="leaderboard">{Leaderboard}</div>;
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser
  };
}

export default connect(mapStateToProps)(Leaderboard);
