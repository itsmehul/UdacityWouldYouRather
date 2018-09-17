import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

function addQuestionAnswer (answer) {
    return {
      type: ADD_QUESTION_ANSWER,
      answer
    }
  }

export function handleSaveQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText
    })
      .then((qs) => dispatch(addQuestion(qs)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveQuestionAnswer (qid, answer) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
      dispatch(addQuestionAnswer({authedUser,qid,answer}))        
      dispatch(showLoading()) 
      return saveQuestionAnswer({
        authedUser,
        qid,
        answer
      })
        .then(() => dispatch(hideLoading()))
    }
  }

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

