import { saveQuestion, saveQuestionAnswer } from '../utils/api'
// import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_QUESTION = 'ADD_QUESTION'

// function saveQuestion (tweet) {
//   return {
//     type: ADD_QUESTION,
//     tweet,
//   }
// }

export function handleSaveQuestion (text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    // dispatch(showLoading())

    return saveQuestionAnswer({
      text,
      author: authedUser,
      replyingTo
    })
      .then((tweet) => dispatch(saveQuestion(tweet)))
    //   .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

