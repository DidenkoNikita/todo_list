import { AddingManyTask } from "../actionCreators/actionCreator_4";

export const addingTasks = (id: number) => {

  // const idBoard: number = JSON.parse(localStorage.getItem('id_board') || '');
  // const idUser: number = JSON.parse(localStorage.getItem('id_user') || '');
  // const body = JSON.stringify({"title": 'Задача', "idBoard": idBoard, "idUser": idUser})
  const body = JSON.stringify({"title": 'Задача'})

  return async (dispatch: any) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
      const data: any = await response.json();
      const { id, completed, title, idBoard} = data;
      dispatch(AddingManyTask( id, completed, title, idBoard ));
    }
    catch (err) {
      console.log('addin', err);
    }
  }
}