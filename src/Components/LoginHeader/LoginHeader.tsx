import { Logo } from "../Header/Logo";
import { RegistrationForm } from "../RegistartionForm/RegistrationForm";

import css from './LoginHeader.module.css'

export const LoginHeader = () => {
  return (
    <div>
      <div className={css.header}>
        <Logo />
      </div>
      <RegistrationForm />
    </div>
  );
};