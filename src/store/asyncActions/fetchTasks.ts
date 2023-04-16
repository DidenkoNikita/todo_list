import { AddingManyTask } from "../actionCreators/actionCreator_4";

export const fetchTasks = () => { 
  // const idBoard = JSON.parse(localStorage.getItem('id_board') || '');
  // const idUser = JSON.parse(localStorage.getItem('id_user') || '');
  return async (dispatch: any) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/read_tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({"idBoard": idBoard, "idUser": idUser})
        body: JSON.stringify({})
      });
      const tasks = await response.json();
      tasks.forEach((task: any)=> {
        let {id, completed, title, idBoard} = task;
          dispatch(AddingManyTask(id, completed, title, idBoard));
        })
      } catch (err) {
    }
  }
};