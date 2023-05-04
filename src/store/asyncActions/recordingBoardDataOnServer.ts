import { AddingManyBoard } from "../actionCreators/AddingManyBoard";
import { AppDispatch } from "../store";

interface ICreateBoard {
  id: number,
  title: string,
  tasks: []
}

export const recordingBoardDataOnServer = () => {
  const user_id: string = JSON.parse(localStorage.getItem('user_id') || ""); 
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response: Response = await fetch(`http://127.0.0.1:7000/boards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"title": 'Доска', "user_id": user_id})
      });
      const data = await response.json();      
      const {id, title, tasks}: ICreateBoard= data;
      dispatch(AddingManyBoard(id, title, tasks));
    }
    catch (err) {
      console.log('recordingBoardDataOnServer', err);
    }
  }
}