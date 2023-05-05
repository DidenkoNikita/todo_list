import { RemoveTask } from "../actionCreators/RemoveTask";
import { store } from "../store";

export const removeTasks = async (id: number): Promise<void | unknown> => {
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
    store.dispatch(RemoveTask(task_id));
  } catch (e) {
    return e;
  }
}