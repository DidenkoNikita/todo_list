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
  try {
    const response: Response = await fetch(`${tasksUrl}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: Id})
    });
    const data = await response.json();        
    const {id} = data.task; 
    dispatch(removeTask({id}));
  } catch (e) {
    return console.log(e);
  }
};