import { Dispatch } from "redux";
import { AddingManyBoard } from "../actionCreators/actionCreator_3";

interface IBoard {
  id: number,
  title: string,
  tasks: []
}

export const fetchTodos = () => {
  const idBoard = JSON.parse(localStorage.getItem('user_id') || ''); 
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const response: Response = await fetch('http://127.0.0.1:7000/read_boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"idBoard": idBoard})
      });
      const data = await response.json();
      data.forEach((element: any) => {
        const {id, title, tasks}: IBoard = element;
        dispatch(AddingManyBoard(id, title, tasks));
      })
    }
     catch (err) {
      console.log(err);
      
    }
  }
};