import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box, Button, ThemeProvider, createTheme } from '@mui/material';

import { LoginHeader } from './Components/LoginHeader/LoginHeader';
import { Profile } from './Components/Profile/Profile';
import { RegistrationHeader } from './Components/RegistrationHeader/RegistrationHeader';

import './index.css';

const App = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [theme, setTheme] = useState(createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  }));

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    const updatedTheme = createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });
    setTheme(updatedTheme);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const regionClassName = darkMode ? 'region-dark' : 'region-light';

  return (
    <Box className={regionClassName}>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onClick={toggleTheme}
          sx={{
            display: 'flex',
            marginBottom: '10px',
            marginLeft: 'auto',
            marginRight: '10px'
          }}
        >
          {darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </Button>
        <Routes>
          <Route
            path='/'
            element={<LoginHeader />}
          />
          <Route
            path='/registration'
            element={<RegistrationHeader />}
          />
          <Route
            path='/home/*'
            element={<Profile />}
          />
        </Routes>
      </ThemeProvider>
    </Box>
  );
};

export default App;