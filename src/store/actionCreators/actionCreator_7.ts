import { TASK_NO_COMPLETED } from "../actions/taskNoCompleted";

export const taskNoCompleted = (task_id: number, completed: boolean, title: string, board_id: number) => ({
  type: TASK_NO_COMPLETED,
  payload: {task_id, completed, title, board_id}
});