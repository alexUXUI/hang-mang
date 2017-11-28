import React from 'react';
import './word.css';
import { connect } from 'react-redux';
import { letterGuessedAction, setGameWordAnswerAction } from '../store/actions';
import { inspect } from 'util';

class Word extends React.Component {
  constructor(props) {
    super(props)
    let { gameWord, characterGuess, currentGuess, gameAnswer, answer } = this.props;

    this.wordsCharacters = gameWord.split('');
    this.wordLength = gameWord.length;
    this.gameAnswer = this.props.gameAnswer;

    this.state = {
      currectAnswer: this.wordsCharacters,
    }

    this.answer = this.wordsCharacters.reduce(function(acc, cur, i) {
      acc[cur] = i;
      return acc;
    }, {});
  }

  componentWillUpdate() {

    console.log('DERRRR', this.props.answer)
    // handle behaviour
    if(this.props.gameAnswer) {
      
      Array.prototype.allValuesSame = function() {
        for(var i = 1; i < this.length; i++) {
            if(this[i] !== this[0]) {
              return false;
            }
        }
        return true;
      }

      var didWin = Object.values(this.props.gameAnswer).allValuesSame();

      console.log(`didWin: ${didWin}`)
    }
  }

  componentWillMount() {
    this.props.setGameWordAnswerAction(this.answer);
  }

  wordBoard = (gameAnswer) => Object.keys(this.answer).map((character, index) => {
    return (
      <div key={index} className='wordboard--character'>
        { 
          gameAnswer ? 
            (gameAnswer[character] === true) ?
              (<div>{character}</div>) :
              null :
            null
        }
      </div>
    );
  });

  render() {
    let { gameWord, characterGuess, currentGuess, gameAnswer } = this.props;
    return(
      <div className="wordboard">
        { this.wordBoard(this.props.gameAnswer) }
      </div>
    );
  }
  
};

const mapStateToprops = state => {
  return {
    currentGuess: state.reducer.currentGuess,
    gameAnswer: state.reducer.gameWordAnswer,
  }
}

const mapDispatchToProps = dispatch => ({
  letterGuessedAction: letter => dispatch(letterGuessedAction(letter)),
  setGameWordAnswerAction: gameWordAnswer => dispatch(setGameWordAnswerAction(gameWordAnswer))
});

export default connect(mapStateToprops, mapDispatchToProps)(Word);