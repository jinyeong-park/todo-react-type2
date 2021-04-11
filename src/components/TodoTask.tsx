import React from 'react';
import { ITask } from './interface';

interface Props {
  // task?: ITask
  task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName} </span>
        <span>{task.deadline} </span>
        <button>X</button>
      </div>
    </div>
  )


}

export default TodoTask