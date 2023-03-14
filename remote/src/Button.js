import React from 'react';

export const Button = () => (
  <button
    onClick={() => {
      alert('Calling from Remote');
    }}
  >
    I am button from Remote!
  </button>
);

export default Button;
