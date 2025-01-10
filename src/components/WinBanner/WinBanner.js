import React from 'react';
import Banner from '../Banner';

function WinBanner({ guesses }) {
  return (
    <Banner className="happy">
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{guesses.length} guesses</strong>.
    </Banner>
  );
}

export default WinBanner;
