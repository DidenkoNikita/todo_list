import { useState } from "react";

import { profileUser } from "../../store/asyncActions/profileUser";
import { signUpUser } from "../../store/asyncActions/signUpUser";
import { Button, TextField } from "@mui/material";

import css from './RegistrationForm.module.css';

export const RegistrationForm = (): JSX.Element => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
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
        sx={{
          marginBottom: '15px',
        }}
      />
      <TextField 
        type="password"
        id="outlined-basics" 
        label="Password" 
        variant="outlined" 
        size="small"
        onChange={e => setPassword(e.target.value)} 
        className={css.input}
        sx={{
          marginBottom: '10px',
        }}
      />
      <Button 
        variant="contained" 
        size="small"
        sx={{
          marginBottom: '10px',
        }}
        onClick={profileUser(login, password)}
      >
        Войти
      </Button>
      <Button 
        variant="contained" 
        size="small"
        onClick={(e) => signUpUser(login, password)}
      >
          Регистрация
      </Button>
    </div>
  );
};