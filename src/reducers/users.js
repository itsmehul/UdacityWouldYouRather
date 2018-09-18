import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION_ANSWER, ADD_QUESTION, GET_SCORE } from "../actions/questions";
import authedUser from "./authedUser";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.answer.authedUser]: {
          ...state[action.answer.authedUser],
          answers: {
            ...state[action.answer.authedUser].answers,
            [action.answer.qid]: action.answer.answer
          }
        }
      };
    case ADD_QUESTION:
      const questionstate = action.question;
      const authorDeets = state[questionstate.author]
      console.log(authorDeets.questions)

      return       {
        ...state,
        [questionstate.author]:{
          ...authorDeets,
          questions:authorDeets.questions.concat(questionstate.author)
        }
      }

    default:
      return state;
  }
}
