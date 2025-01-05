import React from 'react';

function GuessList({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.word}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
