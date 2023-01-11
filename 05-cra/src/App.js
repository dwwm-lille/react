import React from 'react';
import './App.css';
import Button from './components/Button';
import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Salut React</h1>
        <img src="./logo512.png" alt="Logo" />
        <img src={logo} alt="Logo" />
        <Button>Valider</Button>
      </div>
    );
  }
}

export default App;
