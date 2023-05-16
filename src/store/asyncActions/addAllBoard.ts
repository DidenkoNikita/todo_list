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
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || '')!;
  const refreshToken: string = JSON.parse(localStorage.getItem('refresh_token') || '');
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${refreshToken}`,
  };

  try {
    const response: Response = await fetch(`${readBoardsUrl}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({user_id})
    });
    const data = await response.json();       
    if(response.status === 204 || response.status === 200) {
      dispatch(addingManyBoard(data.boards));
      localStorage.setItem('refresh_token', JSON.stringify(data.token));
    } else {
      window.location.assign('/');
    }
  } catch (e) {
    return e;
  }
};