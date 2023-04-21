import { Outlet } from "react-router-dom";
import { Logo } from "../Header/Logo";
import { RegistrationForm } from "../RegistartionForm/RegistrationForm";

import css from './LoginHeader.module.css'

export const LoginHeader = (): JSX.Element => {
  return (
    <div>
      <div className={css.header}>
        <Logo />
      </div>
      <RegistrationForm />
      <Outlet />
    </div>
  );
};