import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import { LoginHeader } from './Components/LoginHeader/LoginHeader';
import { Profile } from './Components/Profile/Profile';

const App = () => {  
  return (
    <Box className='region'>
      <Routes>
        <Route path='/' element={<LoginHeader />} />
        <Route path='/home/*' element={<Profile />} />
      </Routes>
    </Box>
  );
}

export default App;