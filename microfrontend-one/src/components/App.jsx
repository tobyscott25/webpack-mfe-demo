import * as React from 'react';

export default function App({ onChange }) {
  return (
    <div>
      <h1>MICROFRONTEND ONE (REMOTE)</h1>
      <input onChange={onChange} type="text" placeholder="Enter your name" />
    </div>
  );
}
