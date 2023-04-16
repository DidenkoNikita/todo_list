import css from './Board.module.css';
import { addTask, removeBoard } from '../../store/store';
import { Button } from '../Button/Button';
import { Task } from '../Task/Task';

export const BoardsArea = (filter: any) => {
    let key = 1;
    if(!filter) return null
    return (
        <div className={css.area}>
            {filter.map((id: number, title: string) => { 
                return (
                    <div className={css.board} key={key++}>
                        <div className={css.headerArea}>
                            <span className={css.boardName}>
                                {title}
                            </span>
                            <button 
                                className={css.deletedButton}
                                onClick={() => {removeBoard(id)}}
                                >
                                <img
                                    src='https://cdn-icons-png.flaticon.com/512/8345/8345018.png' 
                                    className={css.deleted}
                                    alt='-'
                                    />
                            </button>
                        </div>
                        <Task id={id}/>
                        <Button 
                            text='Добавить задачу' 
                            onClick={() => {addTask(id)}}
                        />
                    </div>
                )
            })}
        </div>
    );
};