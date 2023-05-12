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
  try {
    const response: Response = await fetch(`${taskCompletedUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: ID, completed: Completed })
    });
    const data: Complet = await response.json();
    const { id, completed } = data;
    dispatch(taskComplete({ id, completed }));
  } catch (e) {
    return console.log(e);
  }
};