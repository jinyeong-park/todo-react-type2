import React from 'react';
import { ITask } from './interface';

interface Props {
  // task?: ITask
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName} </span>
        <span>{task.deadline} </span>
        <button
          onClick={() => {
            deleteTask(task.taskName);
          }}>X</button>
      </div>
    </div>
  )


}

export default TodoTask;