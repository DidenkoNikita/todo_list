import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css';

import { addManyBoards } from './store/store';
import { LoginHeader } from './Components/LoginHeader/LoginHeader';
import { Profile } from './Components/Profile/Profile';


const App = () => {  
  useEffect(() => {addManyBoards()}, [])
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
