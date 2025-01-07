import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map((num) => ({ id: num, letters: [] }))
  );

  const [attempt, setAttempt] = React.useState(0);

  const appendToGuesses = (guess) => {
    if (attempt >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    let newGuesses = [...guesses];
    newGuesses[attempt] = { id: attempt, letters: checkGuess(guess, answer) };
    setGuesses(newGuesses);
    setAttempt(attempt + 1);
  };

  return (
    <div>
      <GuessList guesses={guesses} />
      <GuessInput appendToGuesses={appendToGuesses} />
    </div>
  );
}

export default Game;
