import { BoardsArea } from '../Board/Board';

import css from './BoardAddArea.module.css';

export interface Props {
    filter: Filter[];   
}

export interface Filter {
    idBoard: number,
    title: string
}

export const BoardAddArea = ({filter}: Props): JSX.Element => {
    return (
        <div className={css.area}>
            <BoardsArea filter={filter} />
        </div>
    );
}