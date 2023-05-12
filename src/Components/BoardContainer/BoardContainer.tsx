import { Board } from '../Board/Board';

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Add, Close } from '@mui/icons-material';

import { addBoard } from '../../store/asyncActions/addBoard';
import { store } from '../../store/store';

import css from './BoardContainer.module.css';
import { useState } from 'react';

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

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Box className={css.area}>
            <Button
                variant='contained' 
                size='small'
                sx={{
                  marginTop: '10px',
                }} 
                onClick={handleClickOpen}
            >
                <Add />
                Добавить доску
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Введите название доски</DialogTitle>
                <DialogContent>
                    <TextField 
                        type='text'
                        // id='outlined-basic' 
                        label='Title' 
                        variant='outlined' 
                        size='small'
                        defaultValue=''
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        sx={{
                            marginTop: '10px'
                        }}
                    />
                </DialogContent>
                <DialogActions
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Button
                        variant='contained' 
                        size='small'
                        sx={{
                            marginBottom: '10px'
                        }} 
                        onClick={() => {
                            store.dispatch(addBoard(title));
                            handleClose()
                        }}
                        >
                        <Add />
                        Добавить доску
                    </Button>
                    <Button
                        variant='contained' 
                        size='small'
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        <Close />   
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
            <Board filter={ filter } />
        </Box>
    );
}