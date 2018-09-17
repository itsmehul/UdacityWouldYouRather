import { RECEIVE_QUESTIONS, ADD_QUESTION_ANSWER } from "../actions/questions";

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
      console.log(votes1);
      console.log(votes2);
      
      
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

    // case ADD_QUESTION :
    //   const { tweet } = action

    //   let replyingTo = {}
    //   if (tweet.replyingTo !== null) {
    //     replyingTo = {
    //       [tweet.replyingTo]: {
    //         ...state[tweet.replyingTo],
    //         replies: state[tweet.replyingTo].replies.concat([tweet.id])
    //       }
    //     }
    //   }

    //   return {
    //     ...state,
    //     [action.tweet.id]: action.tweet,
    //     ...replyingTo,
    //   }
    default:
      return state;
  }
}
