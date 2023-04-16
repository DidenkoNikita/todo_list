
import { BoardsArea } from '../Board/Board';
import css from './BoardAddArea.module.css';

export const BoardAddArea = ( filter: any) => {
    return (
        <div className={css.area}>
            <BoardsArea filter={filter} />
        </div>
    );
}