import React, { Component } from "react";
import { connect } from "react-redux";


class Leaderboard extends Component {

  render() {
    
const users = Object.values(this.props.users).sort((a, b)=>((Object.keys(b.answers).length+Object.keys(b.questions).length)-(Object.keys(a.answers).length+Object.keys(a.questions).length)));



const Leaderboard = users.map(({avatarURL,answers,questions,name},key)=>{
    const score = Object.keys(answers).length+questions.length
return(
<div key={key}>
    <img src={avatarURL}/>
    <h1>{name}</h1>
    <h2>Questions Created: {questions.length}</h2>
    <h2>Questions Answered: {Object.values(answers).length}</h2>
    <p>{score}</p>
    </div>

)})
    

    return (
        <div>{Leaderboard}</div>
    );
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
