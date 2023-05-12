import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";

import { RooteState } from "../store";
import { updateTitleBoard } from "../counter/boardSlice";
import { updateTitleBoardUrl } from "../../requestUrl/updateTitleBoardUrl";

interface Board {
  id: number;
  title: string
}

export const titleBoardUpdate = (selectId: number | null, selectTitle: string): ThunkAction<
  void,
  RooteState,
  unknown,
  PayloadAction<Board>
> => async (dispatch): Promise<void | unknown> => {
  console.log(selectId, selectTitle);
  
  try {
    const response: Response = await fetch(`${updateTitleBoardUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: selectId, title: selectTitle })
    });
    const data: Board = await response.json();
    const { id, title } = data;
    dispatch(updateTitleBoard({ id, title }));
  } catch (e) {
    return console.log(e);
  }
};