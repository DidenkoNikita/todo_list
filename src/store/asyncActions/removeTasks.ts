import { RemoveTask } from "../actionCreators/RemoveTask";
import { AppDispatch } from "../store";

export const removeTasks = (id: number): any => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await fetch('http://127.0.0.1:7000/tasks', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"id": id})
      });
      const data = await response.json();
      const task_id: number  = data.id;      
      dispatch(RemoveTask(task_id));
    }
    catch (err) {
      console.log('removeDataBoards', err);
    }
  }
}