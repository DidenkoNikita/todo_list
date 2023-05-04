import { NavLink } from 'react-router-dom';

import { Button } from '@mui/material';

import { logout } from '../../userServise';
import { Name, User } from '../User/User';

import css from './Header.module.css';

export const Header = ({name}: Name): JSX.Element => {
  return (
    <div className={css.header}>
        <User name={name} />
        <div className={css.headerArea}>
          <NavLink 
            to='/home/toDoList' 
            className={css.link}
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              Список дел
          </NavLink>
          <NavLink 
            to='/home/aboutUs' 
            className={css.link}
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              О нас :
          </NavLink>
          <NavLink 
            to='/home/ourProjects' 
            className={css.link}
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              Наши проекты :
          </NavLink>
          <Button 
            variant="contained" 
            size="small"
            onClick={() => logout()}
          >
            Выйти
          </Button>
        </div>
    </div>
  );
};