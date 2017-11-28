
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

  // console.log(`WHAT IS REDUCER STATE? ${inspect(state)}`)

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
      console.log('SETTING THAT A LETTER WAS GUESSED IN STATE');
      return {
        ...state,
        gameWordAnswer: {
          ...state.gameWordAnswer,
          [action.payload]: true,
        } 
      }
    }
    
    case 'USER_WON': {
      console.log(`USER WON \n\n\n\n\n\n\n\n\n\n\n`)
      return {
        ...state,
        userWon: true 
      }
    }

    case 'DECREMENT_GUESSES': {
      console.log('YOOOO', state.numberOfGuesses)
      return {
        ...state,
        numberOfGuesses: state.numberOfGuesses - 1,
      }
    }

    case 'SET_NUMBER_OF_GUESSES': {
      console.log(`set number of guesses ${action.payload}`)
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