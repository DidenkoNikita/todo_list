import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { addingManyBoard } from "../counter/boardSlice";
import { readBoardsUrl } from "../../requestUrl/readBoardsUrl";

interface Board {
  id: number;
  title: string;
}

export const addAllBoard = (): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<Board[]> 
> => async (dispatch): Promise<void | unknown> => {
  const user_id = JSON.parse(localStorage.getItem('user_id') || '')!;
  try {
    const response: Response = await fetch(`${readBoardsUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id})
    });
    const data = await response.json();   
    dispatch(addingManyBoard(data));
  } catch (e) {
    return e;
  }
};