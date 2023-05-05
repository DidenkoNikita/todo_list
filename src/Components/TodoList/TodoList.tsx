import { useSelector } from "react-redux";
import { useState } from "react";

import { FilterBoard } from "../FilterBoard/FilterBoard";
import { BoardContainer, Filter } from "../BoardContainer/BoardContainer";

import css from './TodoList.module.css';
import { Box } from "@mui/material";

interface IBoard {
    idBoard: number,
    title: string,
    tasks: []
}

export const TodoList = (): JSX.Element => {
    let boards: IBoard[] = useSelector((state: any) => state.boards);
    const [ search, setSearch ] = useState<string>('');
    const [query, setQuery ] = useState<string>('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        setQuery(form.search.value);
    }

    let filter: Filter[] = boards.filter((board: IBoard) => {
        return board.title.toLowerCase().includes(query.toLocaleLowerCase())
    })

    return (
        <Box className={css.region}>
            <FilterBoard 
                search={search} 
                setSearch={setSearch} 
                handleSubmit={handleSubmit} 
            />
            <BoardContainer filter={filter} />
        </Box>
    );
};