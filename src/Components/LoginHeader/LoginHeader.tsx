import { Box } from "@mui/material";

import { Logo } from "../Header/Logo";
import { LoginForm } from "../LoginForm/LoginForm";

import css from './LoginHeader.module.css'

export const LoginHeader = (): JSX.Element => {
  return (
    <Box>
      <Box className={ css.header }>
        <Logo />
      </Box>
      <LoginForm />
    </Box>
  );
};