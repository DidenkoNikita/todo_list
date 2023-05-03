import { Route, Routes } from "react-router-dom";

import { Header } from "../Header/Header";
import { AboutUs } from "../AboutUs/AboutUs";
import { OurProjects } from "../OurProjects/OurProjects";
import { TodoList } from "../TodoList/TodoList";

export const Profile = (): JSX.Element => {
  return (
    <div>
      <Header />
        <Routes>
          <Route 
            path='/toDoList' 
            element={<TodoList />} 
          />
          <Route 
            path='/aboutUs' 
            element={<AboutUs />} 
          />
          <Route 
            path='/ourProjects' 
            element={<OurProjects />} 
          />
        </Routes> 
    </div>
  );
};