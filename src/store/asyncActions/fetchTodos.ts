import { AddingManyBoard } from "../actionCreators/AddingManyBoard";
import { store } from "../store";

interface IBoard {
  id: number,
  title: string,
  tasks: []
}

export const fetchTodos = async (): Promise<void | unknown> => {
  const user_id = JSON.parse(localStorage.getItem('user_id') || '')!;
  try {
    const response: Response = await fetch('http://127.0.0.1:7000/read_boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id})
    });
    const data = await response.json();      
    data.forEach((element: any) => {
      const {id, title, tasks}: IBoard = element;
      store.dispatch(AddingManyBoard(id, title, tasks));
    })
  } catch (e) {
    return e;
  }
};