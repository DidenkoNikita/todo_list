import { FC } from 'react'
import { useSelector } from 'react-redux';
import { completedTask, removeTask } from '../../store/store';

import css from './Task.module.css';
interface IProps {
  id: number
}

export const Task: FC<IProps> = ({
  id
}) => {
  const tasks = useSelector((state: any) => state.tasks)
  .filter((task: any) => {
    return id === task.id;
  })
  return (
    <ol className={css.taskArea}>
      {tasks.map((idT: number, completed: boolean, titleT: string) => {
        return (
          <li 
            className={css.task} 
            key={idT} 
          >
            <span className={completed === false ? css.notCompleted : css.done}>
              <input
                type='checkbox' 
                className={css.checkBox}  
                onClick={() => completedTask(idT, completed, titleT, id)}
              />
                {titleT}
            </span>
            <button 
              className={css.delete}
              onClick={() => removeTask(idT)}
            >
              &times;
          </button>
          </li>
        );
      })}
    </ol>
  );
};