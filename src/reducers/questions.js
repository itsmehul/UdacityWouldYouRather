import { RECEIVE_QUESTIONS, ADD_QUESTION_ANSWER, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION_ANSWER:
      const { answer } = action;
      const question = state[answer.qid];
      const votes1 = question.optionOne.votes
      const votes2 = question.optionTwo.votes
      
      
      return {
        ...state,
        [answer.qid]: {
          ...question,
          // optionOne:{
          //   ...question.optionOne,
          //   votes: votes1.filter((user) => user !== answer.authedUser),
          // },
          // optionTwo:{
          //   ...question.optionTwo,
          //   votes: votes2.filter((user) => user !== answer.authedUser),
          // },
          [answer.answer]: {
            ...question[answer.answer],
            votes: 
            (votes1.some(vote=>vote===answer.authedUser)||votes2.some(vote=>vote===answer.authedUser))
            ?question[answer.answer].votes
            :question[answer.answer].votes.concat([answer.authedUser])
          }
        }
      };

    case ADD_QUESTION :  
    const addAns1 = action.question.optionOne.text;  
    const addAns2 = action.question.optionOne.text;  
    
    const questionstate = action.question;
    
      return {
          ...state,
          [questionstate.id]:{
            ...questionstate,
            optionOne:{
              ...questionstate.id.optionOne,
              text:addAns1},
            optionTwo:{
              ...questionstate.id.optionTwo,
              text:addAns2}
          }
      }
    default:
      return state;
  }
}
