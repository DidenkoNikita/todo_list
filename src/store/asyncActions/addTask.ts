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
  try {
    const response: Response = await fetch(`${tasksUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"title": description, "completed": false, "idBoard": id, "idUser": user_id})
    });
    const data: CreateTask = await response.json();          
    dispatch(addingATask(data));
  } catch (e) {
    return console.log(e);
    
  }
}