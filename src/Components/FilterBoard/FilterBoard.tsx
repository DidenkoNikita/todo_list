import React from 'react';
import { Button, TextField } from '@mui/material';

import css from './FilterBoard.module.css';

interface FilterBoardProps {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const FilterBoard: React.FC<FilterBoardProps> = ({search, setSearch, handleSubmit}): JSX.Element => {
  return (
    <form autoComplete = "off" onSubmit={handleSubmit} className={css.filter} >
      <TextField 
        type='search' 
        name='search' 
        id="filled-basic" 
        label="Поиск досок" 
        variant="outlined" 
        size="small"
        onChange = { event => setSearch(event.target.value) } 
        value={search} 
        sx={{
          marginBottom: '10px'
        }}
      />
      <Button 
        type='submit'
        variant="contained" 
        size="small"
        sx={{
          weight: '50px'
        }}
      >
        Поиск
      </Button>
    </form>
  );
};