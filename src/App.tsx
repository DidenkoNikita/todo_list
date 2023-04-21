import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css';

import { addManyBoards } from './store/store';
import { LoginHeader } from './Components/LoginHeader/LoginHeader';
import { Profile } from './Components/Profile/Profile';
import { ProtectedRoutes } from './Components/ProtectedRoutes/ProtectedRoutes';
import { Header } from './Components/Header/Header';
import { TodoList } from './Components/TodoList/TodoList';


const App = () => {  
  useEffect(() => {addManyBoards()}, []);
   
  return (
    <div className='region'>
      <Header />
      <TodoList />

        {/* <Routes>
          <Route path='/' element={<LoginHeader />} />
          <Route path='/home' element={<ProtectedRoutes />} >
            <Route path='/home/profile' element={<Profile />} />
          </Route>
        </Routes> */}
    </div>
  );
}

export default App;
