import React from 'react';

const Feedback = props => {
  
  let { feedback, numberOfGuesses } = props;

  const winOrLose = (numberOfGuesses, feedback) => {
    if (numberOfGuesses > 0) {
      if(feedback === true) {
        return (
          <div>User Won!</div>
        );
      } else {
        return null;
      }
    } else {
      return (
        <div>User Lost!</div>
      );
    }
  };

  return(
    <div>{ winOrLose(numberOfGuesses, feedback) }</div>
  );
    
};

export default Feedback;