import React from 'react';

function Banner({ className, children }) {
  console.log(children);
  return (
    <div>
      <div className={`${className} banner`}>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Banner;
