import { Box } from "@mui/material";

import { Logo } from "../Header/Logo";

import css from './LoginHeader.module.css'
import { LoginForm } from "../LoginForm/LoginForm";

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