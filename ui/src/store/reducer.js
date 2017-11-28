
import { combineReducers } from 'redux';
import {inspect} from 'util';

const reducer = (state = {
  currentGuess: '',
  turnsLeft: null,
  currentWord: null,
  gameWordAnswer: null,
  numberOfGuesses: null,
  userWon: false
}, action) => {

  switch (action.type) {
    
    case 'BUTTON_CLICKED': {
      return {
        ...state,
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
      return {
        ...state,
        gameWordAnswer: {
          ...state.gameWordAnswer,
          [action.payload]: true,
        } 
      }
    }
    
    case 'USER_WON': {
      return {
        ...state,
        userWon: true 
      }
    }

    case 'DECREMENT_GUESSES': {
      return {
        ...state,
        numberOfGuesses: state.numberOfGuesses - 1,
      }
    }

    case 'SET_NUMBER_OF_GUESSES': {
      return {
        ...state,
        numberOfGuesses: action.payload,
      }
    }
    
    
    default: {
      return state;
    }
      
  }

}

const rootReducer = combineReducers({reducer});

export default rootReducer;