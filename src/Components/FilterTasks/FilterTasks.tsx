import css from './FilterTasks.module.css';

import React from 'react';
interface FilterTasksProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export const FilterTasks: React.FC<FilterTasksProps> = ({search, setSearch, handleSubmit}) => {
  return (
    <form autoComplete = "off" onSubmit={handleSubmit} className={css.filter} >
      <input type = 'search' name='search' onChange = { event => setSearch(event.target.value) } value={search} />
      <input type = 'submit' value = 'Search' />
    </form>
  );
};