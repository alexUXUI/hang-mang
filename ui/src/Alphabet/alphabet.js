import React from 'react';
import './alphabet.css';
import { buttonClickAction } from '../store/actions';
import { connect } from 'react-redux';
import { letterGuessedAction, setGameWordAnswerAction, decrementGuesses } from '../store/actions';

class Alphabet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alphabet: String.fromCharCode(...Array(123).keys()).slice(97),
      alphabetDict: { a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false, i: false, j: false, k: false, l: false, m: false, n: false, o: false, p: false, q: false, r: false, s: false, t: false, u: false, v: false, w: false, x: false, y: false, z: false }
    }
  }

  handleClick(event, val) {
    this.props.buttonClickAction(val)
    
    var includesVal = Object.keys(this.props.gameAnswer).includes(val);
    
    includesVal ? 
      this.props.letterGuessedAction(val) : 
      this.props.decrementGuesses();

    var valueIsTrue = this.state[val] === true;
    
    valueIsTrue ? 
      null : 
      this.setState(prevState => ({
        alphabetDict: {
            ...prevState.alphabetDict,
            [val]: true,
          }
        })
      );
  }

  AlphabetBoard = alphabet => {
    return Object.keys(alphabet).map((character, index) => {
      let current = this.state.alphabetDict[character]
      return (
        <div 
          key={index}
          onClick={event => this.handleClick(event, character)}
          className={`letter ${current ? 'clicked' : 'not-clicked'}`}
        >
          {character}
        </div>
      )
    })
  }

  render() {
    let { alphabetDict } = this.state;
    return(
      <span className='alphabetBoard--wrapper'>
        <h1>Alphabet</h1>

        <div className="alphabetBoard">
          {
            this.AlphabetBoard(alphabetDict)
          }
        </div>
      </span>
    );
  }
    
};

const mapStateToprops = state => ({
  state: state,
  gameAnswer: state.reducer.gameWordAnswer,
});

const mapDispatchToProps = dispatch => ({
  buttonClickAction: (val) => dispatch(buttonClickAction(val)),
  letterGuessedAction: (letter) => dispatch(letterGuessedAction(letter)),
  decrementGuesses: () => dispatch(decrementGuesses())
});

export default connect(mapStateToprops, mapDispatchToProps)(Alphabet);