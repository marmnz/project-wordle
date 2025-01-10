import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import EndGame from '../EndGame/EndGame';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [gameOver, setGameOver] = React.useState(false);

  const wordIsCorrect = (word) => {
    return word.filter((letter) => letter.status === 'correct').length === 5;
  };

  const makeGuess = (guess) => {
    const checkedGuess = checkGuess(guess, answer);

    let newGuesses = [...guesses, { id: Math.random(), letters: checkedGuess }];

    setGuesses(newGuesses);

    if (
      newGuesses.length >= NUM_OF_GUESSES_ALLOWED ||
      wordIsCorrect(checkedGuess)
    ) {
      setGameOver(true);
    }
  };

  return (
    <div>
      <EndGame guesses={guesses} answer={answer} wordIsCorrect={wordIsCorrect} />
      <GuessList guesses={guesses} />
      <GuessInput makeGuess={makeGuess} isDisabled={!!gameOver} />
    </div>
  );
}

export default Game;
