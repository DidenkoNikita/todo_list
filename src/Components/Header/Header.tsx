import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { Logo } from './Logo';
import { Button } from '@mui/material';

export const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
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
        {/* <button >
          <Link to='/' >Выйти из учётной записи</Link>
        </button> */}
        <Button 
        variant="contained" 
        size="small"
        // className={css.componentButton}
        >
        <Link 
          to='/' 
          className={css.componentLink}
        >
          Выйти
        </Link>
      </Button>
        </div>
    </div>
  );
};