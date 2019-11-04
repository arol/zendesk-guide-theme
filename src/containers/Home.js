import React, { useState } from 'react';

export const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>I&apos;m a hero</h1>
      <button onClick={() => setCounter(counter + 1)}>
        counting… {counter}
      </button>
    </div>
  );
};
