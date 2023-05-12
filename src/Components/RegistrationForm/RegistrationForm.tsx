import { Login, PersonAdd } from "@mui/icons-material";

import css from './RegistrationForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signupUrl } from "../../requestUrl/signupUrl";
import { Box, Button, TextField } from "@mui/material";

interface Data {
  user_id: number;
}


export const RegistrationForm = () => {
  const initialValues = {
    login: '',
    password: '',
  };

  const validationSchema = Yup.object({
    login: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values: typeof initialValues, actions: any): Promise<void> => {
    const login: string = values.login;
    const password: string = values.password;
    try {
      const response: Response = await fetch(`${signupUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password})
      });
      const data = await response.json();
      const {user_id}: Data = data;
      if (response.status === 200) {
        localStorage.setItem('user_id', JSON.stringify(user_id));
        actions.setSubmitting(false);
        window.location.assign('/home/toDoList');
      }
    } catch (error) {
      console.error('Произошла ошибка', error);
      actions.setSubmitting(false);
    }
  };

  return (
    <Box>
      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Box
            sx={{
              fontSize: '20px'
            }}
          >
            Регистрация
          </Box>
          <Box>
            <Field 
              type="text" 
              name="login" 
              id="login" 
              placeholder="Email" 
              as={TextField} 
              variant="outlined" 
              size="small" 
              sx={{
                margin: '20px 0 10px 0'
              }}
            />
            <ErrorMessage 
              name="login" 
              component="div" 
              className={css.error} 
            />
          </Box>
          <Box>
            <Field 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              as={TextField} 
              variant="outlined" 
              size="small" 
            />
            <ErrorMessage 
              name="password" 
              component="div" 
              className={css.error} 
            />
          </Box>
          <Button 
            type="submit" 
            variant="contained" 
            size="small" 
            sx={{ 
              margin: '10px 0' 
            }}
          >
            <PersonAdd 
              sx={{
                paddingRight: '3px'
              }}
            />
            Регистрация
          </Button>
          <Button 
            variant='contained' 
            size='small'
            onClick={() => {
              window.location.assign('/');
            }}
          >
            <Login sx={{ paddingRight: '3px' }} />
            Войти
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};