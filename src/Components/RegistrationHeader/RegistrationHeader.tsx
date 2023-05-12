import { Box } from "@mui/material";

import { Logo } from "../Header/Logo";

import css from './RegistrationHeader.module.css'
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

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