import { Route, Routes } from 'react-router-dom';
import { LoginHeader } from './Components/LoginHeader/LoginHeader';
import { Profile } from './Components/Profile/Profile';

import './App.css';

const App = () => {  
  return (
    <div className='region'>
      <Routes>
        <Route path='/' element={<LoginHeader />} />
        <Route path='/home/*' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;