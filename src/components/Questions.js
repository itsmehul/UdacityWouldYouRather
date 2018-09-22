import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Questions extends Component {
  state = {
    showAnswered: false
  };

  render() {
    
    return (
      <div className="questions center">
        <h3 className="questiontitle">Questions</h3>
        
        <div className="choice center">
          <button style={this.state.showAnswered===false?{"backgroundColor":"black","color":"white"}:null} disabled={this.state.showAnswered === false} onClick={() => this.setState({ showAnswered: false })} > Unanswered </button>
          <button style={this.state.showAnswered===true?{"backgroundColor":"black","color":"white"}:null} disabled={this.state.showAnswered === true} onClick={() => this.setState({ showAnswered: true })} > Answered </button>
        </div>
        <ul className="dashboard-list question">
          {this.props.answeredQs&&this.state.showAnswered === true &&
            this.props.answeredQs.map((id,i) => (    
                <Question key={i} answered={true} id={id} />
            ))}
          {this.props.unansweredQs&&this.state.showAnswered === false &&
            this.props.unansweredQs.map((id,i) => (
              
                <Question key={i} answered={false} id={id} />
              
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  if(users[authedUser]){
  return {
    answeredQs: Object.keys(users[authedUser].answers).reverse(),
    unansweredQs: Object.keys(questions).map(qs => { if (Object.keys(users[authedUser].answers).find(aqs => qs === aqs)) { return null; } return qs; }).filter(qs => qs !== null).sort((a, b) => questions[b].timestamp - questions[a].timestamp ),
  }}
  return {}
}

export default connect(mapStateToProps)(Questions);
