
import { combineReducers } from 'redux';
import {inspect} from 'util';

const reducer = (state = {
  currentGuess: '',
  turnsLeft: null,
  currentWord: null,
  gameWordAnswer: null,
  numberOfGuesses: 7,
}, action) => {

  console.log(
    `WHAT IS REDUCER STATE? ${inspect(state)}`
  )

  switch (action.type) {
    
    case 'BUTTON_CLICKED': {
      return {
        ...state,
        numberOfGuesses: state.numberOfGuesses--,
        currentGuess: action.payload
      }
    }

    case 'SET_GAME_WORD_ANSWER': {
      return {
        ...state,
        gameWordAnswer: action.payload
      }
    }

    case 'LETTER_GUESSED': {
      console.log('SETTING THAT A LETTER WAS GUESSED IN STATE');
      return {
        ...state,
        numberOfGuesses: state.numberOfGuesses--,
        gameWordAnswer: {
          ...state.gameWordAnswer,
          [action.payload]: true,
        } 
      }
    }
    
    default: {
      return state;
    }
      
  }

}

const rootReducer = combineReducers({reducer});

export default rootReducer;