import { useSelector } from "react-redux";
import { addBoard } from "../../store/store";

import css from './TodoList.module.css';
import { FilterTasks } from "../FilterTasks/FilterTasks";
import { BoardAddArea } from "../BoardAddArea/BoardAddArea";
import { useState } from "react";
import { Button } from "../Button/Button";

export const TodoList = () => {
    let boards = useSelector((state: any) => state.boards);
    const [ search, setSearch ] = useState('');
    const [query, setQuery ] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        setQuery(form.search.value)
    }

    let filter: [number, string] = boards.filter((board: any) => {
        return board.title.toLowerCase().includes(query.toLocaleLowerCase())
    })

    return (
        <div className={css.region}>
            <Button 
                onClick={() => addBoard()}
            />
            <FilterTasks 
                search={search} 
                setSearch={setSearch} 
                handleSubmit={handleSubmit} 
            />
            <BoardAddArea filter={filter} />
        </div>
    );
};