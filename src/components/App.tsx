import React from 'react';
import logo from './logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      {/* separate two sections */}
      <div className='header'>
        <input type='text' placeholder='Task..'></input>
        <input type='number' placeholder='Deadline (in Days)...'></input>
        <button>Add Task</button>
      </div>
      <div className="todolist">

      </div>
    </div>
  );
}

export default App;
