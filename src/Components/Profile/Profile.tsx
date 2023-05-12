import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { Header } from "../Header/Header";
import { AboutUs } from "../AboutUs/AboutUs";
import { OurProjects } from "../OurProjects/OurProjects";
import { TodoList } from "../TodoList/TodoList";

import { userUrl } from "../../requestUrl/userUrl";

export const Profile = (): JSX.Element => {
  const [name, setName] = useState<string>('');

  const userName = async (): Promise<void> => {
    const user_id = JSON.parse(localStorage.getItem('user_id') || '')!;
    try {
      const response: Response = await fetch(`${userUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id })
      });
      const data = await response.json();     
      setName(data.name);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => { userName() }, []);

  return (
    <Box>
      <Header name={ name } />
        <Routes>
          <Route 
            path='/toDoList' 
            element={ <TodoList /> } 
          />
          <Route 
            path='/aboutUs' 
            element={ <AboutUs /> } 
          />
          <Route 
            path='/ourProjects' 
            element={ <OurProjects /> } 
          />
        </Routes> 
    </Box>
  );
}; 