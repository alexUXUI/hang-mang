import {
  USER_WON, 
  BUTTON_CLICKED, 
  LETTER_GUESSED, 
  SET_GAME_WORD_ANSWER,
  DECREMENT_GUESSES,
  SET_NUMBER_OF_GUESSES
} from './const';

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

export const userWonAction = () => {
  return {
    type: USER_WON,
    payload: null
  }
}

export const decrementGuesses = () => {
  return {
    type: DECREMENT_GUESSES,
    payload: null
  }
}

export const setNumberOfGuesses = number => {
  return {
    type: SET_NUMBER_OF_GUESSES,
    payload: number,
  }
}