import { useState } from "react";
import { Link } from "react-router-dom";

import css from './RegistrationForm.module.css';
import { profileUser } from "../../store/asyncActions/profileUser";
import { signUpUser } from "../../store/asyncActions/signUpUser";
import { Button, TextField } from "@mui/material";

export const RegistrationForm = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
   return (
    <div className={css.form}>
      <TextField 
        type="text"
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        size="small"
        onChange={e => setLogin(e.target.value)}
        className={css.input}
      />
      <TextField 
        type="password"
        id="outlined-basics" 
        label="Password" 
        variant="outlined" 
        size="small"
        onChange={e => setPassword(e.target.value)} 
        className={css.input}
      />
      <Button 
        variant="contained" 
        size="small"
        className={css.componentButton}
        onClick={profileUser(login, password)}
      >
        <Link 
          to='/home' 
          className={css.componentLink}
        >
          Войти
        </Link>
      </Button>
      <Button 
        variant="contained" 
        size="small"
        onClick={signUpUser(login, password)}
      >
        <Link 
          to='/home' 
          className={css.componentLink}
        >
          Регистрация
        </Link>
      </Button>

    </div>
  );
};