import React, { useState } from 'react';
import logo from './logo.svg';
import '../App.css';

function App() {
  // create useState to save task
  const [tast, setTask] = useState<string>("")

  return (
    <div className="App">
      {/* separate two sections */}
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Task..'></input>
          <input type='number' placeholder='Deadline (in Days)...'></input>
        </div>
        <button className='button'>Add Task</button>
      </div>
      <div className="todolist"></div>
    </div>
  );
}

export default App;
