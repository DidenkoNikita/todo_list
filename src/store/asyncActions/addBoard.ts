import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { addingABoard } from "../counter/boardSlice";
import { boardsUrl } from "../../requestUrl/boardsUrl";

interface CreateBoard {
  id: number;
  title: string;
}

export const addBoard = (title: string): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<CreateBoard> 
> => async (dispatch): Promise<void | unknown> => {
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || "")!; 
  try {
    const response: Response = await fetch(`${boardsUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, user_id})
    });
    const data: CreateBoard = await response.json();   
    dispatch(addingABoard(data));
  } catch (e) {
    return console.log(e);
  }
}