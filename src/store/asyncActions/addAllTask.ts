import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { addingManyTask } from "../counter/taskSlice";
import { readBoardsUrl } from "../../requestUrl/readBoardsUrl";
import { readTasksUrl } from "../../requestUrl/readTasksUrl";

interface CreateTask {
  id: number;
  board_id: number;
  title: string;
  completed: boolean;
}

export const addAllTask = (): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<CreateTask[]> 
> => async (dispatch): Promise<void | unknown> => {
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || "")!; 
  try {
    const response: Response = await fetch(`${readTasksUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id})
    });
    const data = await response.json();      
    dispatch(addingManyTask(data));
  } catch (e) {
    return console.log(e);
  }
}