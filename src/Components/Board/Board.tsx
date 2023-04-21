import css from './Board.module.css';
import { addTask, removeBoard } from '../../store/store';
import { Task } from '../Task/Task';
import { Props } from '../BoardAddArea/BoardAddArea';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Data {
    idBoard: number,
    title: string
}

export const BoardsArea = ({filter}: Props): JSX.Element | null => {    
    if (!filter) {
        return null;
    }
    return (
        <div className={css.area}>
            {filter.map(({idBoard, title}: Data) => { 
                console.log(idBoard, title);
                return (
                    <div className={css.board} key={idBoard}>
                        <div className={css.headerArea}>
                            <span className={css.boardName}>
                                {title}
                            </span>
                            <button
                                className={css.deletedButton}
                                onClick={() => {removeBoard(idBoard)}}
                            >
                                <Delete 
                                    fontSize="small"
                                    sx={{
                                        alignSelf: 'center',
                                        color: '#1976d2'
                                    }}
                                />
                            </button>
                        </div>
                        <Task idBoard={idBoard} />
                        <Button 
                            variant="contained" 
                            size="small"
                            onClick={() => {addTask(idBoard)}}
                            sx={{
                                marginBottom: '10px',
                                maxWidth: '150px',
                                alignSelf: 'center'
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