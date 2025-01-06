import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const letters =
    guess.word.length > 0 ? guess.word.split('') : range(0, 5).map(() => '');

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={`${guess.id}-${index}`} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
