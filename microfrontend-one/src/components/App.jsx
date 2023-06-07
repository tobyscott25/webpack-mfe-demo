import * as React from 'react';
import "./styles.css";

export default function App({ onChange }) {
  return (
    <div className="MicroApp">
      <h1>MICROFRONTEND ONE (REMOTE)</h1>
      <input onChange={onChange} type="text" placeholder="Enter your name" />
    </div>
  );
}
