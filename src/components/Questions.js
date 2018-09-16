import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Questions extends Component {
    state = {
        showAnswered: true
    }
    
  render() {
    console.log(this.props.answeredQs);
    console.log(this.props.qIds);
    console.log(this.props.unansweredQs)
    return (
      <div>
        <h3 className="center">Questions</h3>
        <ul className="dashboard-list">
          {this.state.showAnswered===true && this.props.answeredQs.map(id => (
            <li key={id}>
              {/* <Question id={id}/> */}
              <p>{id}</p>
            </li>
          ))}
          {this.state.showAnswered===false && this.props.unansweredQs.map(id => (
            <li key={id}>
              {/* <Question id={id}/> */}
              <p>{id}</p>
            </li>
          ))}
          <button disabled={this.state.showAnswered===false} onClick={()=>this.setState({showAnswered:false})}>Unanswered</button>
          <button disabled={this.state.showAnswered===true} onClick={()=>this.setState({showAnswered:true})}>Answered</button>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    qIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    answeredQs: Object.keys(users[authedUser].answers).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unansweredQs: Object.keys(questions)
    .map(qs=>{
        if(Object.keys(users[authedUser].answers).find(aqs=>qs===aqs)){
            return null;
        }
        return qs
    }
    ).filter(qs=>qs!==null)
    
  };
}

export default connect(mapStateToProps)(Questions);
