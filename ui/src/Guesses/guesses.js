import React from 'react';
import { connect } from 'react-redux';

const Guesses = props => {
  let { numberOfGuesses } = props;
  return(
    <div>Guesses: { numberOfGuesses }</div>
  );
};

const mapStateToprops = state => ({
  numberOfGuesses: state.reducer.numberOfGuesses,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToprops, null)(Guesses);