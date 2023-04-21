import { Dispatch } from "redux";
import { RemoveBoard } from "../actionCreators/actionCreator_5";

export const removeDataBoards = (id: number) => {
  let ID: number = id;  
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const response: Response = await fetch('http://127.0.0.1:7000/boards', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"id": ID})
      });
      const data = await response.json();
      const { id } = data;
      dispatch(RemoveBoard(id));
    }
    catch (err) {
      console.log('removeDataBoards', err);
    }
  }
}