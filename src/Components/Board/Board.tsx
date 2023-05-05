import { useEffect } from 'react';

import { Box, Button, ButtonBase, Container, Paper } from '@mui/material';
import { Add, Clear, Delete } from '@mui/icons-material';

import { Task } from '../Task/Task';
import { Props } from '../BoardContainer/BoardContainer';

import { removeDataBoards } from '../../store/asyncActions/removeDataBoards';
import { addingTasks } from '../../store/asyncActions/addingTasks';
import { fetchTodos } from '../../store/asyncActions/fetchTodos';
import { fetchTasks } from '../../store/asyncActions/fetchTasks';

import css from './Board.module.css';

interface Data {
    idBoard: number;
    title: string;
}

export const Board = ({filter}: Props): JSX.Element | null => {    
    useEffect(() => {fetchTodos(); fetchTasks()}, []);
    if (!filter) {
        return null;
    }
    return (
        <Container 
            maxWidth="xl"
            sx={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            {filter.map(({idBoard, title}: Data) => { 
                return (
                    <Paper 
                        elevation={8} 
                        key={idBoard}
                        sx={{
                            width: '305px',
                            minHeight: '125px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                        >
                        <Box className={css.headerArea}>
                            <Box className={css.boardName}>
                                {title}
                            </Box>
                        </Box>
                        <Task idBoard={idBoard} />
                        <Box 
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Button 
                                variant="contained" 
                                size="small"
                                onClick={() => {addingTasks(idBoard)}}
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
                            <ButtonBase
                                className={css.deletedButton}
                                onClick={() => {removeDataBoards(idBoard)}}
                                >
                                <Clear
                                    sx={{
                                        alignSelf: 'center',
                                        cursor: 'pointer'
                                    }}
                                    />
                            </ButtonBase>
                        </Box>
                    </Paper>
                )
            })}
        </Container>
    );
};