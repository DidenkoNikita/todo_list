import { useSelector } from "react-redux";
import { useState } from "react";

import { Box } from "@mui/material";

import { FilterBoard } from "../FilterBoard/FilterBoard";
import { BoardContainer, Filter } from "../BoardContainer/BoardContainer";

import css from './TodoList.module.css';

interface Board {
    id: number;
    title: string;
    filter: any;
}

interface State {
    boards: Board
}

export const TodoList = (): JSX.Element => {
    const boards: Board = useSelector((state: State) => state.boards);
    const [ search, setSearch ] = useState<string>('');
    const [query, setQuery ] = useState<string>('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        setQuery(form.search.value);
    }

    const filter: Filter[] = boards.filter((board: Board) => {
        return board.title.toLowerCase().includes(query.toLocaleLowerCase())
    })

    return (
        <Box className={ css.region }>
            <FilterBoard 
                search={ search } 
                setSearch={ setSearch } 
                handleSubmit={ handleSubmit } 
            />
            <BoardContainer filter={ filter } />
        </Box>
    );
};