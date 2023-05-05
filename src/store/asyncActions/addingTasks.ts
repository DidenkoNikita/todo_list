import { AddingManyTask } from "../actionCreators/AddingManyTask";
import { store } from "../store";

interface Itask {
  id: number,
  completed: boolean,
  title: string,
  board_id: number
}

export const addingTasks = async (idBoard: number): Promise<void | unknown> => {
  const idUser: number | string = JSON.parse(localStorage.getItem('user_id') || '')!;
  try {
    const response: Response = await fetch('http://127.0.0.1:7000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"title": 'Задача', "completed": false, "idBoard": idBoard, "idUser": idUser})
    });
    const data: Itask = await response.json();
    const { id, completed, title, board_id}: Itask = data;
    store.dispatch(AddingManyTask( id, completed, title, board_id ));
  } catch (e) {
    return e;
  }
}