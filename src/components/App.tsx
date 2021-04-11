import React, { FC, useState } from 'react';
import '../App.css';
import { ITask } from './interface';
import TodoTask from './TodoTask';


const App: FC = () => {
  // create useState to save task
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // make it for two input onchange
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // we should define types
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  };

  const clickToAddTask = (event: React.MouseEvent): void => {
    // console.log(task, deadline)
    event.preventDefault();
    let newTask = {taskName: task, deadline: deadline};
    // only add when taskName is not empty
    newTask.taskName.trim() !== "" &&
    // surround array for previous todolist and newTask
    setTodoList([...todoList, newTask])
    // after update clear out the input
    setTask("")
    setDeadline(0)
  }

  const deleteTask = (taskNameToDelete: string): void => {
    // filter the todolist and if the name is not the same as todelete, put it in the array
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))

  }


  return (
    <div className="App">
      {/* separate two sections */}
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' name="task" value={task} onChange={handleOnChange} placeholder='Task..' />
          <input type='number' name="deadline" value={deadline} onChange={handleOnChange} placeholder='Deadline (in Days)...' />
        </div>
        <button className='button' onClick={clickToAddTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task:ITask) => {
          return <TodoTask task={task} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
