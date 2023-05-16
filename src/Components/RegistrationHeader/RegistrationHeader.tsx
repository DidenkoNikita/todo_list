import { Box } from "@mui/material";

import { Logo } from "../Header/Logo";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

import css from './RegistrationHeader.module.css'


export const RegistrationHeader = (): JSX.Element => {
  return (
    <Box>
      <Box className={ css.header }>
        <Logo />
      </Box>
      <RegistrationForm />
    </Box>
  );
};