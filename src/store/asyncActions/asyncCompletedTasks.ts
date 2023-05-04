import { taskNoCompleted } from "../actionCreators/TaskNoCompleted";
import { AppDispatch } from "../store";

interface ICompleted {
  id: number,
  completed: boolean,
  title: string,
  board_id: number
}

export const asyncCompletedTasks = (id: number, completed: boolean, title: string, board_id: number) => {
  let ID: number = id;
  let Completed: boolean = completed;
  let Title: string = title;
  let Board_id: number = board_id;
    return async (dispatch: AppDispatch): Promise<void> => {
      const user_id = JSON.parse(localStorage.getItem('user_id') || '')!;
      try {
        const response: Response = await fetch('http://127.0.0.1:7000/tasks_completed', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: ID, completed: Completed, title: Title, board_id: Board_id, user_id})
        });
        const data = await response.json();        
        const { id, completed, title, board_id}: ICompleted = data;
        dispatch(taskNoCompleted(id, completed, title, board_id));
      }
      catch (err) {
        console.log('taskNoCompleted', err);
      }
    }
}