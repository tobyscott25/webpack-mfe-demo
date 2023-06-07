import * as React from 'react';
import App from './App';
import "./styles.css";

export default function MainApp() {
  const [name, setName] = React.useState(null);
  return (
    <>
      <h1>PLAYGROUND CONTAINER (DUMMY HOST)</h1>
      <h3 style={{ textAlign: 'center' }}>{ name ? <p>Your name is: {name}</p> : null }</h3>
      <App onChange={(e) => setName(e.target.value)} />
    </>
  );
}
