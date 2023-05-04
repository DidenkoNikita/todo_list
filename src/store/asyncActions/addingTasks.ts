import { AddingManyTask } from "../actionCreators/AddingManyTask";
import { AppDispatch } from "../store";

interface Itask {
  id: number,
  completed: boolean,
  title: string,
  board_id: number
}

export const addingTasks = (idBoard: number) => {
  const idUser: number = JSON.parse(localStorage.getItem('user_id') || '');
  const body = JSON.stringify({"title": 'Задача', "completed": false, "idBoard": idBoard, "idUser": idUser});
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response: Response = await fetch('http://127.0.0.1:7000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
      const data: Itask = await response.json();
      const { id, completed, title, board_id}: Itask = data;
      dispatch(AddingManyTask( id, completed, title, board_id ));
    }
    catch (err) {
      console.log('addin', err);
    }
  }
}