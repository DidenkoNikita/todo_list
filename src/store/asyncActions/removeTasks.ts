import { Dispatch } from "redux";
import { RemoveTask } from "../actionCreators/actionCreator_6";

export const removeTasks = (id: number) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await fetch('http://127.0.0.1:7000/tasks', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"id": id})
      });
      const data = await response.json();
      const { task_id } = data;
      dispatch(RemoveTask(task_id));
    }
    catch (err) {
      console.log('removeDataBoards', err);
    }
  }
}