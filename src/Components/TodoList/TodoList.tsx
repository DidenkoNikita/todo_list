import { useSelector } from "react-redux";
import { useState } from "react";

import { addBoard } from "../../store/store";
import { FilterBoard } from "../FilterBoard/FilterBoard";
import { BoardAddArea, Filter } from "../BoardAddArea/BoardAddArea";
import { Button } from "@mui/material";

import css from './TodoList.module.css';

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
        <div className={css.region}>
            <Button
                variant="contained" 
                size="small"
                sx={{
                  marginTop: '10px',
                }} 
                onClick={() => addBoard()}
            >
                Добавить доску
            </Button>
            <FilterBoard 
                search={search} 
                setSearch={setSearch} 
                handleSubmit={handleSubmit} 
            />
            <BoardAddArea filter={filter} />
        </div>
    );
};