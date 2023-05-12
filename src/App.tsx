import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import { LoginHeader } from './Components/LoginHeader/LoginHeader';
import { Profile } from './Components/Profile/Profile';
import { RegistrationHeader } from './Components/RegistrationHeader/RegistrationHeader';

const App = () => {  
  return (
    <Box className='region'>
      <Routes>
        <Route 
          path='/' 
          element={ <LoginHeader /> } 
        />
        <Route 
          path='/registration'
          element={ <RegistrationHeader /> }
        />
        <Route 
          path='/home/*' 
          element={ <Profile /> } 
        />
      </Routes>
    </Box>
  );
}

export default App;