import { AddingManyBoard } from "../actionCreators/AddingManyBoard";
import { store } from "../store";

interface ICreateBoard {
  id: number,
  title: string,
  tasks: []
}

export const recordingBoardDataOnServer = async (): Promise<void | unknown> => {
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || "")!; 
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
    store.dispatch(AddingManyBoard(id, title, tasks));
  } catch (e) {
    return e;
  }
}