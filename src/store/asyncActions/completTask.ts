import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { taskComplete } from "../counter/taskSlice";
import { taskCompletedUrl } from "../../requestUrl/taskCompletedUrl";

interface Complet {
  id: number;
  completed: boolean;
}

export const completTask = (id: number, completed: boolean): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<Complet>
> => async (dispatch): Promise<void | unknown> => {
  const ID: number = id;
  const Completed: boolean = completed;
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || '')!;
  const refreshToken: string = JSON.parse(localStorage.getItem('refresh_token') || '');
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${refreshToken}`,
  };

  try {
    const response: Response = await fetch(`${taskCompletedUrl}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ id: ID, completed: Completed, user_id})
    });
    const data = await response.json();
    const { id, completed } = data.task;
    if (response.status === 204 || response.status === 200) {
      dispatch(taskComplete({ id, completed }));
      localStorage.setItem('refresh_token', JSON.stringify(data.token));
    } else {
      window.location.assign('/');
    }
  } catch (e) {
    return console.log(e);
  }
};