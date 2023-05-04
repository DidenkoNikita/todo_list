import { REMOVE_TASK } from "../actions/removeTasks";

export const RemoveTask = (task_id: number) => ({
  type: REMOVE_TASK,
  payload: {task_id}
});