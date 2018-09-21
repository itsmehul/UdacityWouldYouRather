import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link, withRouter } from "react-router-dom";

const Question=(props) =>{
  const { timestamp, optionOne } = props.question;
  const { avatarURL, name } = props.author;

  return (
    <Link
      to={{
        pathname: `/question/${props.id}`,
        state: { answered: `${props.answered}` }
      }}
    >
      <li className="questionli">
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className="avatar"
          width="5"
          height="auto"
        />
        <div>{formatDate(timestamp)}</div>
        <h1>{name}</h1>
        <h2>
          ..
          {optionOne.text.substr(3, 7)}
          ..
        </h2>
      </li>
    </Link>
  );
}

function mapStateToProps({ questions, users }, { id }) {
  return {
    question: questions[id],
    author: users[questions[id].author],
    id
  };
}

export default withRouter(connect(mapStateToProps)(Question));
