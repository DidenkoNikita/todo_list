import { useEffect, useState } from 'react';

import { Box, Button, ButtonBase, Container, Grid, Paper} from '@mui/material';
import { Add, Clear, Edit } from '@mui/icons-material';

import { Task } from '../Task/Task';
import { Props } from '../BoardContainer/BoardContainer';

import { addTask } from '../../store/asyncActions/addTask';
import { addAllBoard } from '../../store/asyncActions/addAllBoard';
import { addAllTask } from '../../store/asyncActions/addAllTask';
import { boardRemove } from '../../store/asyncActions/removeBoard';
import { store } from '../../store/store';
import { titleBoardUpdate } from '../../store/asyncActions/updateTitleBoard';

import css from './Board.module.css';
import { ModalWondow } from '../ModalWondow/ModalWindow';

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
    
    const dialogTitleEditBoard: string = 'Введите новый заголовок';
    const buttonTitleEditBoard: string = 'Изменить';
    const dialogTitleTask: string = 'Введите описание задачи';
    const buttonTitleTask: string = 'Добавить задачу';

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
                justifyContent: 'center',
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
                                    <div 
                                        onDoubleClick={() => {
                                            handleClickOpenBoard(id);
                                        }} 
                                        className={ css.boardName } 
                                    >
                                        { title }
                                    </div>
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
                                    <ModalWondow 
                                        open={openBoard} 
                                        handleClose={handleCloseBoard} 
                                        dialogTitle={dialogTitleEditBoard} 
                                        setSelectTitle={setSelectTitle} 
                                        buttonTitle={buttonTitleEditBoard} 
                                        selectTitle={selectTitle} 
                                        selectId={selectId} 
                                        request={titleBoardUpdate}
                                    />
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
                                <ModalWondow 
                                    open={open} 
                                    handleClose={handleClose} 
                                    dialogTitle={dialogTitleTask} 
                                    setSelectTitle={setDescription} 
                                    buttonTitle={buttonTitleTask} 
                                    selectTitle={description} 
                                    selectId={selectId} 
                                    request={addTask}
                                />
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};