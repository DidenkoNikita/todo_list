import css from './Header.module.css';

export const Logo = (): JSX.Element => {
  return (
    <img alt="logo" className={css.logo} src='data:image/png;base64,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'></img>
  ); 
};