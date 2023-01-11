import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Clock from './components/Clock';
import CounterA from './components/CounterA';
import CounterB from './components/CounterB';
import { useBoolean } from './hooks';
import logo from './logo.svg';

function App() {
  let [display, setDisplay] = useState(false);
  let [show, toggleShow] = useBoolean();

  return (
    <div>
      <h1>Salut React</h1>
      {/*<img src="./logo512.png" alt="Logo" />
      <img src={logo} alt="Logo" />*/}
      <CounterA default={12} />
      <CounterB default={4} />
      {display && <Clock />}
      <button onClick={() => setDisplay(!display)}>Afficher / cacher</button>
      <Button>Valider</Button>
      <button onClick={() => toggleShow()}>{show ? 'TRUE' : 'FALSE'}</button>
    </div>
  );
}

export default App;
