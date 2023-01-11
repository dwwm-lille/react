import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Clock from './components/Clock';
import CounterA from './components/CounterA';
import CounterB from './components/CounterB';
import ExoHook1 from './exercice-hook-1/ExoHook1';
import ExoHook2 from './exercice-hook-2/ExoHook2';
import ExoHook3 from './exercice-hook-3/ExoHook3';
import ExoHook4 from './exercice-hook-4/ExoHook4';
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

      <ExoHook1 />
      <ExoHook2 />
      <ExoHook3 />
      <ExoHook4 />
    </div>
  );
}

export default App;
