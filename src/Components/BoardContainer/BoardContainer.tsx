import { useState } from 'react';

import { Box, Button, } from '@mui/material';
import { Add } from '@mui/icons-material';

import { Board } from '../Board/Board';
import { ModalWindow } from '../ModalWindow/ModalWindow';

import { addBoard } from '../../store/asyncActions/addBoard';

import css from './BoardContainer.module.css';

export interface Props {
    filter: Filter[];   
}

export interface Filter {
    id: number;
    title: string;
}

export const BoardContainer = ({ filter }: Props): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
  
    const dialogTitle: string = 'Введите название доски';
    const buttonTitle: string = 'Добавить доску';
    const selectId = null;
  
    const handleClickOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(!open);
    }
    
    return (
      <Box className={css.area}>
        <Button
          variant='contained' 
          size='small'
          sx={{
            marginTop: '10px',
          }} 
          onClick={() => {
            handleClickOpen()
            }}
        >
          <Add />
          Добавить доску
        </Button>
        <ModalWindow 
          open={open}
          handleClose={handleClose} 
          dialogTitle={dialogTitle} 
          setSelectTitle={setTitle} 
          buttonTitle={buttonTitle} 
          selectTitle={title} 
          selectId={selectId} 
          request={addBoard}
        />
        <Board filter={ filter } />
      </Box>
    );
  }