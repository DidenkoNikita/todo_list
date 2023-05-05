import { useEffect } from 'react';

import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';

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
        <div className={css.area}>
            {filter.map(({idBoard, title}: Data) => { 
                return (
                    <div className={css.board} key={idBoard}>
                        <div className={css.headerArea}>
                            <span className={css.boardName}>
                                {title}
                            </span>
                            <button
                                className={css.deletedButton}
                                onClick={() => {removeDataBoards(idBoard)}}
                            >
                                <Delete 
                                    fontSize="small"
                                    sx={{
                                        alignSelf: 'center',
                                        color: '#1976d2',
                                        cursor: 'pointer'
                                    }}
                                />
                            </button>
                        </div>
                        <Task idBoard={idBoard} />
                        <Button 
                            variant="contained" 
                            size="small"
                            onClick={() => {addingTasks(idBoard)}}
                            sx={{
                                marginBottom: '10px',
                                maxWidth: '150px',
                                alignSelf: 'center',
                            }}
                        >
                            Добавить задачу
                        </Button>
                    </div>
                )
            })}
        </div>
    );
};