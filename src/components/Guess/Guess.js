import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const letters =
    guess?.letters?.length > 0 ? guess.letters : range(0, 5).map(() => '');

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={index} className={`cell ${letter.status ?? ''}`}>
          {letter.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
