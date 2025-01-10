import React from 'react';

import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
        <Guess key={index} guess={guesses[index]} />
      ))}
    </div>
  );
}

export default GuessList;
