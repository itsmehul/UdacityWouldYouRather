import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getQuestions(),
      _getUsers(),
    ]).then(([questions, users]) => ({
      users,
      questions,
    }))
  }
  
  export function saveQuestion (info) {
    return _saveQuestion(info)
  }
  //check out (object)
  export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
  }