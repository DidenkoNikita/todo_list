import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { removeBoard } from "../counter/boardSlice";
import { boardsUrl } from "../../requestUrl/boardsUrl";

interface Board {
  id: number;
}

export const boardRemove = (id: number): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<Board> 
> => async (dispatch): Promise<void | unknown> => {
  const Id: number = id;  
  try {
    const response: Response = await fetch(`${boardsUrl}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: Id})
    });
    const data = await response.json();    
    const {id} = data; 
    dispatch(removeBoard({id}));
  } catch (e) {
    return console.log(e);
  }
};