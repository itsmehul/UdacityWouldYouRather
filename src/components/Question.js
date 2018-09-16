import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  state = {
    showAnswered: true
  };

  render() {
    console.log(this.props.question);
    const { timestamp, optionOne  } = this.props.question;
    const { avatarURL, name } = this.props.author;
    return (
        <Link to={`/question/${this.props.id}`} className='tweet'>
        <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
        <div>{formatDate(timestamp)}</div>
        <h1>{name}</h1>
        <h2>..{optionOne.text.substr(3, 7)}..</h2>
      </Link>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  return {
    question: questions[id],
    author: users[questions[id].author],
    id
  };
}

export default withRouter(connect(mapStateToProps)(Question));
