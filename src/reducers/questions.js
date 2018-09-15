import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function receiveQuestions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    // case SAVE_QUESTION_ANSWER :
    //   return {
    //     ...state,
    //     [action.id]: {
    //       ...state[action.id],
    //       likes: action.hasLiked === true
    //         ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
    //         : state[action.id].likes.concat([action.authedUser])
    //     }
    //   }
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
    default :
      return state
  }
}