import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { AboutUs } from "../AboutUs/AboutUs";
import { OurProjects } from "../OurProjects/OurProjects";
import { TodoList } from "../TodoList/TodoList";

export const Profile = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route 
            path='/home/toDoList' 
            element={<TodoList />} 
          />
          <Route 
            path='/home/aboutUs' 
            element={<AboutUs />} 
          />
          <Route 
            path='/home/ourProjects' 
            element={<OurProjects />} 
          />
        </Routes> 
    </div>
  );
};