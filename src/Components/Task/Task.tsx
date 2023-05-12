import { FC, useState } from 'react'
import { useSelector } from 'react-redux';

import { Box, Button, ButtonBase, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField } from '@mui/material';
import { Clear, Close, Edit } from '@mui/icons-material';

import { completTask } from '../../store/asyncActions/completTask';
import { taskRemove } from '../../store/asyncActions/removeTask';
import { store } from '../../store/store';

import css from './Task.module.css';
import { descriptionTaskUpdate } from '../../store/asyncActions/updateDescriptionTask';

interface Props {
  idBoard: number;
}

interface Task {
  id: number;
  completed: boolean;
  title: string;
  board_id: number;
  filter: any;
}

interface Tasks {
  tasks: Task;
}

export const Task: FC<Props> = ({ idBoard }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectId, setSelectId] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('')

  const tasks: Task[] = useSelector((state: Tasks) =>
    state.tasks.filter((task: Task) => idBoard === task?.board_id)
  );

  const handleClickOpen = (id: number, idBoard: number) => {
    setSelectId(id);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box 
      className={ css.taskArea }
    >
      {Array.isArray(tasks) &&
        tasks.map(({ id, completed, title }: Task) => {
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
              <span className={ !completed ? css.notCompleted : css.done }>
                { title }
              </span>
                <ButtonBase
                  onClick={() => {
                    handleClickOpen(id, idBoard);
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
                <Dialog
                  open={open}
                  onClose={handleClose}
                >
                  <DialogTitle>Введите новое описание</DialogTitle>
                  <DialogContent >
                    <TextField 
                      type='text'
                      id='outlined-basic' 
                      label='Title' 
                      variant='outlined' 
                      size='small'
                      defaultValue=''
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      sx={{
                        marginTop: '10px'
                      }}
                    />
                  </DialogContent>
                  <DialogActions
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Button
                      variant='contained' 
                      size='small'
                      sx={{
                        marginLeft: '7px',
                        marginBottom: '10px'
                      }} 
                      onClick={() => {
                        store.dispatch(descriptionTaskUpdate(selectId, description));
                        handleClose();
                      }}
                    >
                      <Edit />
                      Изменить
                    </Button>
                    <Button
                      variant='contained' 
                      size='small'
                      sx={{
                      }} 
                      onClick={() => {
                          handleClose();
                      }}
                    >
                      <Close />   
                      Отмена
                    </Button>
                  </DialogActions>
                </Dialog>
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