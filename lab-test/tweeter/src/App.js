import React from 'react';
import './App.css';
import Tweet from './Tweet';

function App() {
  return (
    <div className="App">
      <Tweet content = "Quarantine sucks" />
      <Tweet content = "A-bowl a' what?" />
      <Tweet content = "Insert clever comment" />
    </div>
  );
}

export default App;
