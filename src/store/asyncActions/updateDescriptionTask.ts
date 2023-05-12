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
  try {
    const response: Response = await fetch(`${updateDescriptionTaskUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: selectId, title: description })
    });
    const data: Task = await response.json();
    const { id, title } = data;
    dispatch(updateDescriptionTask({ id, title }));
  } catch (e) {
    return console.log(e);
  }
};