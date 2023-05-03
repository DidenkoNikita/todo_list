import { Dispatch } from "redux";
import { AddingManyTask } from "../actionCreators/actionCreator_4";

export interface IManyTask {
  id: number,
  completed: boolean,
  title: string,
  board_id: number
}

export const fetchTasks = () => { 
  return async (dispatch: Dispatch): Promise<void> => {
    const user_id = JSON.parse(localStorage.getItem('user_id') || '')!;
    try {
      const response: Response = await fetch('http://127.0.0.1:7000/read_tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id})
      });
      const tasks = await response.json();      
      tasks.forEach((task: any)=> {
        let {id, completed, title, board_id}: IManyTask = task;
        dispatch(AddingManyTask(id, completed, title, board_id));
      })
    } catch (err) {
    }
  }
};