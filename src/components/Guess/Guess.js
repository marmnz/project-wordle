import React from 'react';

function Guess({ appendToGuesses }) {
  const [guess, setGuess] = React.useState('');

  const submitGuess = (event) => {
    event.preventDefault();

    appendToGuesses(guess);
    setGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        title="A five-letter word"
        minLength="5"
        maxLength="5"
        pattern="[A-Z]{5,5}"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Guess;
