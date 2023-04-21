import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { Logo } from './Logo';
import { Button } from '@mui/material';
import { logout } from '../../userServise';

export const Header = (): JSX.Element => {
  return (
    <div className={css.header}>
      <Logo />
        <div className={css.headerArea}>
          <NavLink 
            to='/toDoList' 
            className={css.link}
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              Список дел
          </NavLink>
          <NavLink 
            to='/aboutUs' 
            className={css.link}
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              О нас :
          </NavLink>
          <NavLink 
            to='/ourProjects' 
            className={css.link}
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              Наши проекты :
          </NavLink>
          <Button 
            variant="contained" 
            size="small"
            onClick={() => {logout()}}
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