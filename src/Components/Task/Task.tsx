import { FC } from 'react'
import { useSelector } from 'react-redux';
import { completedTask, removeTask } from '../../store/store';
import { Checkbox } from '@mui/material';
import { Cancel } from '@mui/icons-material';

import css from './Task.module.css';

interface IProps {
  idBoard: number
}

interface ITask {
  id: number,
  completed: boolean,
  title: string,
  board_id: number
}

export const Task: FC<IProps> = ({ idBoard }): JSX.Element => {
  console.log("id board in task component", idBoard);
  
  const tasks = useSelector((state: any) => state.tasks)
  .filter((task: ITask) => idBoard === task.board_id);
  console.log("Taaaaaaaaaaska::",tasks);
  
  return (
    <ol className={css.taskArea}>
      {Array.isArray(tasks) && tasks.map(({id, completed, title}: ITask) => {
        return (
          <li 
            className={css.task} 
            key={id} 
          >
            <Checkbox 
              onClick={() => completedTask(id, completed, title, idBoard)}
            />
            <span className={!completed ? css.notCompleted : css.done}>
              {title}
            </span>
            <button 
              className={css.delete}
              onClick={() => removeTask(id)}
            >
              <Cancel 
                sx={{
                  color: '#1976d2'
                }}
              />
            </button>
          </li>
        );
      })}
    </ol>
  );
};