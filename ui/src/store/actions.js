import {BUTTON_CLICKED, LETTER_GUESSED, SET_GAME_WORD_ANSWER} from './const';

export const buttonClickAction = (val) => {
  return {
    type: BUTTON_CLICKED,
    payload: val
  }
}

export const letterGuessedAction = letter => {
  return {
    type: LETTER_GUESSED,
    payload: letter
  }
}

export const setGameWordAnswerAction = gameWordAnswer => {
  return {
    type: SET_GAME_WORD_ANSWER,
    payload: gameWordAnswer
  }
};