import React, { FC, useState } from 'react';
import '../App.css';

const App: FC = () => {
  // create useState to save task
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState([]);

  // make it for two input onchange
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // we should define types
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  };

  return (
    <div className="App">
      {/* separate two sections */}
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' name="task" value={task} onChange={handleOnChange} placeholder='Task..'></input>
          <input type='number' name="deadline" value={deadline} onChange={handleOnChange} placeholder='Deadline (in Days)...'></input>
        </div>
        <button className='button'>Add Task</button>
      </div>
      <div className="todolist"></div>
    </div>
  );
}

export default App;
