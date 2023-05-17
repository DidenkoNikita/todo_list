import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { Header } from "../Header/Header";
import { AboutUs } from "../AboutUs/AboutUs";
import { OurProjects } from "../OurProjects/OurProjects";
import { TodoList } from "../TodoList/TodoList";

import { UserUrl } from "../../requestUrl/userUrl";

export const Profile = (): JSX.Element => {
  const [name, setName] = useState<string>('');

  const userName = async (): Promise<void> => {
    const user_id = JSON.parse(localStorage.getItem('user_id') || '')!;
    const refreshToken: string = JSON.parse(localStorage.getItem('refresh_token') || '');
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${refreshToken}`,
    };

    try {
      const response: Response = await fetch(`${UserUrl}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ user_id })
      });

      const data = await response.json();     
      if (response.status === 200) {
        localStorage.setItem('refresh_token', JSON.stringify(data.token))
        setName(data.name);
      }

      if (response.status === 201) {
        const refreshToken = data;
        localStorage.setItem('refresh_token', JSON.stringify(refreshToken));
        window.location.reload();
      }
    } catch (err) {
      return console.log(err);
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