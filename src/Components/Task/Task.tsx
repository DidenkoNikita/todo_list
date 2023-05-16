import { FC, useState } from 'react'
import { useSelector } from 'react-redux';

import { Box, ButtonBase, Checkbox, Paper } from '@mui/material';
import { Clear, Edit } from '@mui/icons-material';


import { completTask } from '../../store/asyncActions/completTask';
import { taskRemove } from '../../store/asyncActions/removeTask';
import { store } from '../../store/store';
import { descriptionTaskUpdate } from '../../store/asyncActions/updateDescriptionTask';

import css from './Task.module.css';
import { ModalWindow } from '../ModalWindow/ModalWindow';

interface Props {
  idBoard: number;
}

interface Tasks {
  id: number;
  completed: boolean;
  title: string;
  board_id: number;
  filter: any;
}

interface ITasks {
  tasks: Tasks;
}

export const Task: FC<Props> = ({ idBoard }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectId, setSelectId] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');

  const dialogTitle: string = 'Введите новое описание';
  const buttonTitle: string = 'Изменить';

  const tasks: Tasks[] = useSelector((state: ITasks) =>
    state.tasks.filter((task: Tasks) => idBoard === task?.board_id).sort((a: Tasks, b: Tasks) => a.id - b.id)

  );

  const handleClickOpen = (id: number) => {
    setSelectId(id);
    setOpen(true);
  }

  const handleCloseTask = () => {
    setOpen(!open);
  }

  return (
    <Box 
      className={ css.taskArea }
    >
      {Array.isArray(tasks) &&
        tasks.map(({ id, completed, title }: Tasks) => {
          return (
            <Paper 
              className={ css.task } 
              key={ id } 
              elevation={ 2 }
            >
              <Checkbox
                checked={completed}
                onClick={() => {
                  store.dispatch(completTask(id, completed));
                }}
                sx={{
                  width: '0px',
                  height: '0px'
                }}
              />
              <span 
                className={ !completed ? css.notCompleted : css.done }
                onDoubleClick={() => {
                  handleClickOpen(id);
                }}
              >
                { title }
              </span>
                <ButtonBase
                  onClick={() => {
                    handleClickOpen(id);
                  }}
                  sx={{
                      display: 'flex',
                      width: '0px',
                      height: '0px',
                      alignItems: 'start',
                      justifySelf: 'start',
                      marginRight: '10px'
                  }}
                >
                  <Edit 
                      sx={{
                          alignSelf: 'center',
                          cursor: 'pointer'
                      }}
                  />   
                </ButtonBase>
                <ModalWindow 
                  open={open} 
                  handleClose={handleCloseTask} 
                  dialogTitle={dialogTitle} 
                  setSelectTitle={setDescription} 
                  buttonTitle={buttonTitle} 
                  selectTitle={description} 
                  selectId={selectId} 
                  request={descriptionTaskUpdate}
                />
                <ButtonBase
                  className={ css.delete }
                  onClick={() => {
                    store.dispatch(taskRemove(id))
                  }}
                >
                  <Clear />
                </ButtonBase>
            </Paper>
          );
        })}
    </Box>
  );
};