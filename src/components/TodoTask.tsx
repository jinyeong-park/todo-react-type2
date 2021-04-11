import React from 'react';
import { ITask } from './interface';

interface Props {
  task?: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
    <div>
      task
    </div>
  )


}

export default TodoTask