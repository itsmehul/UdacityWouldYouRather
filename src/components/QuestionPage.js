import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleSaveQuestionAnswer } from '../actions/questions'

class QuestionPage extends Component {
  state = {
    answer:'optionOne',

  };

  submitAns = e => {
      this.props.dispatch(handleSaveQuestionAnswer(this.props.id,this.state.answer))
      e.preventDefault()
  };

  render() {
    console.log(this.props.question);
    const { timestamp, optionOne, optionTwo } = this.props.question;
    const { avatarURL, name } = this.props.author;
    return (
      <div>
        <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
        <h1>{name}</h1>
        <h1>Would You Rather?</h1>
        <form onSubmit={this.submitAns}>
          <input type="radio" name="ans" value="1" onChange={()=>this.setState({answer:'optionOne'})} checked={this.state.answer==='optionOne'}/>
          {optionOne.text}
          <input type="radio" name="ans" value="2" onChange={()=>this.setState({answer:'optionTwo'})} checked={this.state.answer==='optionTwo'}/>
          {optionTwo.text}
          <button type="submit">Submit Ans</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  return {
    question: questions[id],
    author: users[questions[id].author],
    authedUser,
    id
  };
}

export default connect(mapStateToProps)(QuestionPage);
