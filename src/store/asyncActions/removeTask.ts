import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { removeTask } from "../counter/taskSlice";
import { tasksUrl } from "../../requestUrl/tasksUrl";

interface Task {
  id: number;
}

export const taskRemove = (id: number): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<Task> 
> => async (dispatch): Promise<void | unknown> => {
  const Id = id;
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || '')!;
  const refreshToken: string = JSON.parse(localStorage.getItem('refresh_token') || '');
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${refreshToken}`,
  };

  try {
    const response: Response = await fetch(`${tasksUrl}`, {
      method: 'DELETE',
      headers,
      body: JSON.stringify({id: Id, user_id})
    });
    const data = await response.json();        
    const {id} = data.task; 
    if (response.status === 204 || response.status === 200) {
      dispatch(removeTask({id}));
      localStorage.setItem('refresh_token', JSON.stringify(data.token));
    } else {
      window.location.assign('/');
    }
  } catch (e) {
    return console.log(e);
  }
};