import React from 'react';

function Banner({ className, children }) {
  return (
    <div>
      <div className={`${className} banner`}>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Banner;
