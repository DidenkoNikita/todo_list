import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { addingATask } from "../counter/taskSlice";
import { tasksUrl } from "../../requestUrl/tasksUrl";

interface CreateTask {
  id: number;
  board_id: number;
  title: string;
  completed: boolean;
}

export const addTask = (id: number | null, description: string): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<CreateTask> 
> => async (dispatch): Promise<void | unknown> => {
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || "")!;   
  const refreshToken: string = JSON.parse(localStorage.getItem('refresh_token') || '');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${refreshToken}`,
  };

  try {
    const response: Response = await fetch(`${tasksUrl}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({"title": description, "completed": false, "idBoard": id, "idUser": user_id})
    });
    const data= await response.json();   
    if (response.status === 204 || response.status === 200) {
      dispatch(addingATask(data.task));
      localStorage.setItem('refresh_token', JSON.stringify(data.token));
    } else {
      window.location.assign('/');
    }   
  } catch (e) {
    return console.log(e);
    
  }
}