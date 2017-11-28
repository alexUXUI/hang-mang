import React from 'react';
import Alphabet from '../Alphabet/alphabet'; 
import Feedback from '../Feedback/feedback';
import Guesses from '../Guesses/guesses';
import Word from '../Word/word';
import { connect } from 'react-redux';

import './app.css';
import { setGameWordAnswerAction } from '../store/actions';

class ApplicationContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gameWord: null,
      answer: null,
    }
  }

  componentWillMount() { // lifecycle method makes call to set word
    console.log('going to mount');


    this.setState({
      gameWord: 'ostrich',
    });
  }

  componentDidMount() {

    console.log('did mount', this.props.gameWordDictionary)
    var answer = this.state.gameWord.split('').reduce((acc, cur, i) => {
      acc[cur] = i;
      return acc;
    }, {});

    this.setState({
      answer: answer
    });

    return this.props.setGameWordAnswerAction(answer);
    
  }

  render() {

    let { gameWord, answer } = this.state;

    return(
      <div className="App-container">
        <h1 className='header'>One player hangman</h1>
        <Word 
          gameWord={gameWord}
          answer={answer}
        />
        <Alphabet />
        <Feedback />
        <Guesses />
      </div>
    );
  }

}

const mapStateToprops = state => ({
  gameWordDictionary: state.reducer.gameWordAnswer,
})

const mapDispatchToProps = dispatch => ({
  setGameWordAnswerAction: (gameWord) => dispatch(setGameWordAnswerAction(gameWord)),
});

export default connect(mapStateToprops, mapDispatchToProps)(ApplicationContainer);