import { useEffect, useState } from 'react';

import { Box, Button, ButtonBase, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField } from '@mui/material';
import { Add, Clear, Close, Edit } from '@mui/icons-material';

import { Task } from '../Task/Task';
import { Props } from '../BoardContainer/BoardContainer';

import { addTask } from '../../store/asyncActions/addTask';
import { addAllBoard } from '../../store/asyncActions/addAllBoard';
import { addAllTask } from '../../store/asyncActions/addAllTask';
import { boardRemove } from '../../store/asyncActions/removeBoard';
import { store } from '../../store/store';

import css from './Board.module.css';
import { titleBoardUpdate } from '../../store/asyncActions/updateTitleBoard';

interface Data {
    id: number;
    title: string;
}

export const Board = ({ filter }: Props): JSX.Element | null => {    
    const [open, setOpen] = useState<boolean>(false);
    const [openBoard, setOpenBoard] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
    const [selectTitle, setSelectTitle] = useState<string>('');
    const [selectId, setSelectId] = useState<number | null>(null);

    useEffect(() => {
        store.dispatch(addAllBoard());
        store.dispatch(addAllTask());
    }, [filter]);

    if (!filter) {
        return null;
    }

    const handleClickOpen = (id: number) => {
        setSelectId(id)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleClickOpenBoard = (id: number) => {
        setSelectId(id)
        setOpenBoard(true);
    }

    const handleCloseBoard = () => {
        setOpenBoard(false);
    }

    return (
        <Container 
            maxWidth='xl'
            sx={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            <Grid 
                container
                spacing={1}
                sx={{
                    gridAutoFlow: 'dense'
                }}
            > 
                {filter.map(({ id, title }: Data) => {                                     
                    return (
                        <Grid 
                            item
                            key={ id }
                        >
                            <Paper 
                                elevation={ 8 } 
                                sx={{
                                    width: '305px',
                                    minHeight: '125px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                >
                                <Box className={ css.headerArea }>
                                    <Box className={ css.boardName }>
                                        { title }
                                    </Box>
                                    <ButtonBase
                                        onClick={() => {
                                            handleClickOpenBoard(id);
                                        }}
                                        sx={{
                                            display: 'flex',
                                            width: '25px',
                                            height: '25px',
                                            alignItems: 'start',
                                            justifySelf: 'start',
                                            marginRight: '5px'
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
                                        open={openBoard}
                                        onClose={handleCloseBoard}
                                    >
                                        <DialogTitle>Введите новый заголовок</DialogTitle>
                                        <DialogContent >
                                            <TextField 
                                                type='text'
                                                id='outlined-basic' 
                                                label='Title' 
                                                variant='outlined' 
                                                size='small'
                                                defaultValue=''
                                                onChange={(e) => {
                                                    setSelectTitle(e.target.value);
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
                                                    store.dispatch(titleBoardUpdate(selectId, selectTitle));
                                                    handleCloseBoard();
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
                                                    handleCloseBoard();
                                                }}
                                            >
                                                <Close />   
                                                Отмена
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <ButtonBase
                                        onClick={() => {
                                            store.dispatch(boardRemove(id))
                                        }}
                                        sx={{
                                            display: 'flex',
                                            width: '25px',
                                            height: '25px',
                                            alignItems: 'start',
                                            justifySelf: 'flex-end',
                                            marginRight: '5px'
                                        }}
                                        >
                                        <Clear
                                            sx={{
                                                alignSelf: 'center',
                                                cursor: 'pointer'
                                            }}
                                            />
                                    </ButtonBase>
                                </Box>
                                <Task idBoard={ id } />
                                <Box 
                                    sx={{
                                        display: 'flex',
                                    }}
                                    >
                                    <Button 
                                        variant='contained' 
                                        size="small"
                                        onClick={() => {
                                            handleClickOpen(id);
                                        }}
                                        sx={{
                                            marginBottom: '10px',
                                            marginRight: '10px',
                                            maxWidth: '150px',
                                            alignSelf: 'center',
                                            paddingLeft: '5px'
                                        }}
                                        >
                                        <Add />
                                        Добавить задачу
                                    </Button>
                                </Box>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <DialogTitle>Введите описание задачи</DialogTitle>
                                    <DialogContent>
                                        <TextField 
                                            type='text'
                                            id='outlined-basic' 
                                            label='Description' 
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
                                                marginBottom: '10px'
                                            }} 
                                            onClick={() => {
                                                store.dispatch(addTask(selectId, description));
                                                handleClose();
                                            }}
                                        >
                                            <Add />
                                            Добавить задачу
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
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};