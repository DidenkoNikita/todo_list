import { FC } from 'react'
import { useSelector } from 'react-redux';

import { Box, ButtonBase, Checkbox, Paper } from '@mui/material';
import { Clear } from '@mui/icons-material';

import { removeTasks } from '../../store/asyncActions/removeTasks';

import css from './Task.module.css';
import { asyncCompletTask } from '../../store/asyncActions/taskComplet';

interface IProps {
  idBoard: number
}

interface ITask {
  id: number,
  completed: boolean,
  title: string,
  board_id: number,
  filter: any
}

interface Tasks {
  tasks: ITask
}

export const Task: FC<IProps> = ({ idBoard }): JSX.Element => {
  const tasks = useSelector((state: Tasks) => state.tasks)
  .filter((task: ITask) => idBoard === task?.board_id);
  return (
    <Box className={css.taskArea}>
      {Array.isArray(tasks) && tasks.map(({id, completed, title}: ITask) => {
        return (
          <Paper 
            className={css.task}
            key={id}
            elevation={2} 
          >
            <Checkbox 
              checked={completed}
              onClick={() => {asyncCompletTask(id, completed, title, idBoard)}}
            />
            <span className={!completed ? css.notCompleted : css.done}>
              {title}
            </span>
            <ButtonBase 
              className={css.delete}
              onClick={() => removeTasks(id)}
            >
              <Clear />
            </ButtonBase>
          </Paper>
        );
      })}
    </Box>
  );
};