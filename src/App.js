import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const homeIcon = true;
  return (
    <div className="App">
      <NavBar homeIcon/>
      <br/> <br/><br/>
      <h1>Home component</h1>
    </div>
  );
}

export default App;
