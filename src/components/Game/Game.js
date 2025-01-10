import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [attempt, setAttempt] = React.useState(0);

  const [gameState, setGameState] = React.useState();

  const makeGuess = (guess) => {
    if (attempt >= NUM_OF_GUESSES_ALLOWED || gameState) {
      return;
    }

    let newGuesses = [...guesses];

    const checkedGuess = checkGuess(guess, answer);
    const status =
      checkedGuess.filter((letter) => letter.status === 'correct').length === 5
        ? 'win'
        : 'lose';
    newGuesses[attempt] = { id: attempt, letters: checkedGuess };
    setGuesses(newGuesses);
    setGameState(
      status === 'win' || newGuesses.length === NUM_OF_GUESSES_ALLOWED
        ? status
        : undefined
    );
    setAttempt(attempt + 1);
  };

  return (
    <div>
      {gameState === 'win' && <WinBanner guesses={guesses} />}
      {gameState === 'lose' && <LoseBanner answer={answer} />}
      <GuessList guesses={guesses} />
      <GuessInput makeGuess={makeGuess} isDisabled={!!gameState} />
    </div>
  );
}

export default Game;
