import { AddingManyBoard } from "../actionCreators/actionCreator_3";

export const fetchTodos = () => {
  // const idBoard = JSON.parse(localStorage.getItem('id_board') || ''); 
  return async (dispatch: any) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/read_boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({"idBoard": idBoard})
        body: JSON.stringify({})
      });
      const data = await response.json();
      data.forEach((element: any) => {
        const {id, title, tasks} = element;
        dispatch(AddingManyBoard(id, title, tasks));
      })
    }
     catch (err) {
    }
  }
};