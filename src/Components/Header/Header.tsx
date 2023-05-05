import { NavLink } from 'react-router-dom';

import { Box, Button, ButtonBase } from '@mui/material';

import { logout } from '../../userServise';
import { Name, User } from '../User/User';

import css from './Header.module.css';
import { Logout } from '@mui/icons-material';

export const Header = ({name}: Name): JSX.Element => {
  return (
    <Box className={css.header}>
        <User name={name} />
        <Box className={css.headerArea}>
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
          <ButtonBase 
            onClick={() => logout()}
          >
            <Logout 
              sx={{
                color: 'white'
              }}
            />
          </ButtonBase>
        </Box>
    </Box>
  );
};