import { NavLink } from 'react-router-dom';

import { Box, ButtonBase } from '@mui/material';
import { Logout } from '@mui/icons-material';

import { Name, User } from '../User/User';

import { logout } from '../../userServise/logout';

import css from './Header.module.css';

export const Header = ({ name }: Name): JSX.Element => {
  return (
    <Box className={ css.header }>
        <User name={ name } />
        <Box className={ css.headerArea }>
          <NavLink 
            to='/home/toDoList' 
            className={ css.link }
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              Список дел
          </NavLink>
          <NavLink 
            to='/home/aboutUs' 
            className={ css.link }
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              О нас :
          </NavLink>
          <NavLink 
            to='/home/ourProjects' 
            className={ css.link }
            style={({ isActive }) => ({ color: isActive ? "#21A6FF" : "white" })}>
              Наши проекты :
          </NavLink>
          <ButtonBase 
            onClick={() => {
              logout();
            }}
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