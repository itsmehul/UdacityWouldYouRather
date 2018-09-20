import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { Link } from 'react-router-dom'



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
      <div className="QP">
        <h1 className="QPtitle">{name}</h1>
        <div className="QPheader"><img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" /></div>
        <div className="QPbody">
        <h1>Would You Rather?</h1>
        {(this.state.showResults===false&&this.props.answered==="false")&&(
          <React.Fragment>
            <form onSubmit={this.submitAns}>
              <input type="radio" name="ans" value="1" onChange={() => this.setState({ answer: "optionOne" })} checked={this.state.answer === "optionOne"} /> {optionOne.text}<br/>
              <input type="radio" name="ans" value="2" onChange={() => this.setState({ answer: "optionTwo" })} checked={this.state.answer === "optionTwo"} /> {optionTwo.text}<br/>
              <button type="submit" onClick={() => this.setState({ showResults: !this.state.showResults })}>Submit Ans</button>
            </form>
            <button onClick={() => this.setState({ showResults: !this.state.showResults })}>Show Results</button>
          </React.Fragment>)
        }
        {(answers[this.props.id]&&(this.state.showResults===true||this.props.answered==="true"))&&(
            <React.Fragment>
              <p>{optionOne.text}</p>
                {optionOne.votes.length}<br/>
                <meter value={optionOne.votes.length/3}>60%</meter>
                <p>{optionTwo.text}</p>
                {optionTwo.votes.length}<br/>
                <meter value={optionTwo.votes.length/3}>60%</meter><br/>
                <button><Link to='/'>Go back</Link></button>
            </React.Fragment>
        )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, {props}) {
  console.log(props);

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
