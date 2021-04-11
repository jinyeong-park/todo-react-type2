import React, { FC, useState } from 'react';
import '../App.css';

const App: FC = () => {
  // create useState to save task
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState([]);

  const onChangeHandlerTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('typed', e.target.value)
    setTask(e.target.value)
  }

  const onChangeHandlerDeadline = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('typed', e.target.value)
    setDeadline(e.target.value)
  }

  return (
    <div className="App">
      {/* separate two sections */}
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' value={task} onChange={onChangeHandlerTask} placeholder='Task..'></input>
          <input type='number' value={deadline} onChange={onChangeHandlerDeadline} placeholder='Deadline (in Days)...'></input>
        </div>
        <button className='button'>Add Task</button>
      </div>
      <div className="todolist"></div>
    </div>
  );
}

export default App;
