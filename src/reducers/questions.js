import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

export default function receiveQuestions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

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