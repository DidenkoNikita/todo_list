import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { updateDescriptionTask } from "../counter/taskSlice";
import { updateDescriptionTaskUrl } from "../../requestUrl/updateDescriptionTaskUrl";

interface Task {
  id: number;
  title: string;
}

export const descriptionTaskUpdate = (selectId: number | null, description: string): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<Task>
> => async (dispatch): Promise<void | unknown> => {
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || '')!;
  const refreshToken: string = JSON.parse(localStorage.getItem('refresh_token') || '');
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${refreshToken}`,
  };

  try {
    const response: Response = await fetch(`${updateDescriptionTaskUrl}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ id: selectId, title: description, user_id })
    });
    const data = await response.json();
    const { id, title } = data.task;
    if (response.status === 204 || response.status === 200) {
      dispatch(updateDescriptionTask({ id, title }));
      localStorage.setItem('refresh_token', JSON.stringify(data.token));
    } else {
      window.location.assign('/');
    }
  } catch (e) {
    return console.log(e);
  }
};