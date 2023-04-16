import css from './Button.module.css';
export const Button = (props: any) => {
    const {text = 'Добавить доску', onClick = () => {console.log('click')}} = props;
    return (
        <button className={css.button} onClick={onClick}>
            {text}
        </button>
    );
};