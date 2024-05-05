import './App.css';
import React, {useState} from 'react';
function App() {
  const [gameState, setGameState] = useState('menu')
  return (
    <div className="App">
      <h1>Quiz app</h1>
    </div>
  );
}

export default App;
