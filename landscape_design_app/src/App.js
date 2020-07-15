import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div id="root" className="jumbotron"></div>
    <h1 id='counter'>База данных распений и тестирование API</h1>
    <button id='dec' className='btn btn-primary'>prev</button>
    <button id='inc' className="btn btn-primary">next</button>
    <button id='rnd' className="btn btn-primary">random</button>
      </header>
    </div>
  );
}

export default App;
