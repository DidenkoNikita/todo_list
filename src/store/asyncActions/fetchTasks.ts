import { Dispatch } from "redux";
import { AddingManyTask } from "../actionCreators/actionCreator_4";

interface IManyTask {
  id: number,
  completed: boolean,
  title: string,
  idBoard: number
}

export const fetchTasks = () => { 
  const idUser = JSON.parse(localStorage.getItem('user_id') || '');
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const response: Response = await fetch('http://127.0.0.1:7000/read_tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"idUser": idUser})
      });
      const tasks = await response.json();
      tasks.forEach((task: any)=> {
        let {id, completed, title, idBoard}: IManyTask = task;
        dispatch(AddingManyTask(id, completed, title, idBoard));
      })
    } catch (err) {
    }
  }
};