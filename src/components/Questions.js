import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Questions extends Component {
  state = {
    showAnswered: true
  };

  render() {
    return (
      <div>
        <h3 className="center">Questions</h3>
        <button disabled={this.state.showAnswered === false} onClick={() => this.setState({ showAnswered: false })} > Unanswered </button>
        <button disabled={this.state.showAnswered === true} onClick={() => this.setState({ showAnswered: true })} > Answered </button>
        <ul className="dashboard-list">
          {this.props.answeredQs&&this.state.showAnswered === true &&
            this.props.answeredQs.map(id => (
              <li key={id}>
                <Question answered={true} id={id} />
              </li>
            ))}
          {this.props.unansweredQs&&this.state.showAnswered === false &&
            this.props.unansweredQs.map(id => (
              <li key={id}>
                <Question answered={false} id={id} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  if(users[authedUser]){
  return {
    answeredQs: Object.keys(users[authedUser].answers).sort( (a, b) => questions[b].timestamp - questions[a].timestamp ),
    unansweredQs: Object.keys(questions) .map(qs => { if (Object.keys(users[authedUser].answers).find(aqs => qs === aqs)) { return null; } return qs; }) .filter(qs => qs !== null)
  }}
  return {}
}

export default connect(mapStateToProps)(Questions);
