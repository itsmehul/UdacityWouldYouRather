import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleSaveQuestionAnswer } from "../actions/questions";


class QuestionPage extends Component {
  state = {
    answer: '',
    showResults: false

  };

  submitAns = e => {
    this.props.dispatch(
      handleSaveQuestionAnswer(this.props.id, this.state.answer)
    );
    e.preventDefault();
  };

  

  render() {
    const { timestamp, optionOne, optionTwo } = this.props.question;
    const { avatarURL, name, answers } = this.props.author;
    
    console.log(this.props.answered)

    return (
      <div>
        <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
        <h1>{name}</h1>
        <h1>Would You Rather?</h1>
        {(this.state.showResults===false&&this.props.answered==="false")&&
          <form onSubmit={this.submitAns}>
            <input type="radio" name="ans" value="1" onChange={() => this.setState({ answer: "optionOne" })} checked={this.state.answer === "optionOne"} /> {optionOne.text}
            <input type="radio" name="ans" value="2" onChange={() => this.setState({ answer: "optionTwo" })} checked={this.state.answer === "optionTwo"} /> {optionTwo.text}
            <button type="submit" >Submit Ans</button>
          </form>
        }
        {(answers[this.props.id]&&(this.state.showResults===true||this.props.answered==="true"))&&(
            <div>
              <p>{optionOne.text}</p>
                {optionOne.votes.length}
                <p>{optionTwo.text}</p>
                {optionTwo.votes.length}
            </div>
        )}
        <button onClick={() => this.setState({ showResults: !this.state.showResults })} > ShowResults </button>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const {answered} = props.location.state
  return {
    question: questions[id],
    author: users[questions[id].author],
    authedUser,
    id,
    answered
  };
}

export default connect(mapStateToProps)(QuestionPage);
