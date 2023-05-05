import { Board } from '../Board/Board';

import css from './BoardContainer.module.css';

export interface Props {
    filter: Filter[];   
}

export interface Filter {
    idBoard: number,
    title: string
}

export const BoardContainer = ({filter}: Props): JSX.Element => {
    return (
        <div className={css.area}>
            <Board filter={filter} />
        </div>
    );
}