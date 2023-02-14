import React from 'react';
import './App.css';

function App() {
  function sendPoke() {
    console.log('poke');
  }

  return (
    <div className='App'>
      <button onClick={sendPoke}>Hi</button>
    </div>
  );
}

export default App;
