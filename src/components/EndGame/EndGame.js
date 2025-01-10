import React from 'react';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function EndGame({ guesses, answer, wordIsCorrect }) {
  const latestGuess = guesses && guesses[guesses.length - 1];
  const gameWon = latestGuess ? wordIsCorrect(latestGuess?.letters) : false;

  const gameLost = !gameWon && guesses.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <div>
      {gameWon && <WinBanner guesses={guesses} />}
      {gameLost && <LoseBanner answer={answer} />}
    </div>
  );
}

export default EndGame;
