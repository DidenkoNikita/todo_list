import css from './OurProjects.module.css';

export const OurProjects = () => {
  return (
    <div className={css.ourProjects}>
        <img 
          alt="our-projects"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTy4w_uP_wHP5_n_Tz5cDhvurjzsIfZn5gA&usqp=CAU' 
          className={css.image}>
        </img>
      <span className={css.text}>Ты не понял??? Ему реально пох...</span>
    </div>
  );
};